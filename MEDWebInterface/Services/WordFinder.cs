using System.Collections.Generic;
using System.IO;
using System.Linq;
using MEDWebInterface.Models;
using MEDWebInterface.Services;
using MiddleEgyptianDictionary;
using MiddleEgyptianDictionary.Models;
using MiddleEgyptianDictionary.Services;
using MongoDB.Driver;

namespace MEDWebInterface
{
    public class WordFinder
    {
        DbManager Manager;
        public WordFinder(string connectionString)
        {
            Manager = new DbManager();
        }

        public IEnumerable<DictionaryEntry> ConductSearch(SearchQuery query)
        {
            switch (query.Type)
            {
                default:
                case (SearchType.all):
                    return SearchAll(query.Query, query.ExactMatch);
                case (SearchType.transliteration):
                    return SearchByTransliteration(query.Query, query.ExactMatch);
                case (SearchType.translation):
                    return SearchByTranslation(query.Query, query.ExactMatch);
                case (SearchType.gardiner):
                    return SearchByGardinerSigns(query.SignQuery, query.ExactMatch);
            }
        }

        private List<DictionaryEntry> SearchByTransliteration(string transliteration, bool exactMatch)
        {
            return exactMatch ? Manager.GetExistingDbEntries().Find(x => x.Transliteration == transliteration).ToList() :
                   Manager.GetExistingDbEntries().Find(x => x.Transliteration.Contains(transliteration)).ToList();
        }

        private List<DictionaryEntry> SearchByGardinerSigns(string gardinerSigns, bool exactMatch)
        {
            return exactMatch ? Manager.GetExistingDbEntries().Find(x => x.GardinerSigns == gardinerSigns).ToList() :
                   Manager.GetExistingDbEntries().Find(x => x.GardinerSigns.Contains(gardinerSigns)).ToList();
            
        }

        private IEnumerable<DictionaryEntry> SearchByTranslation(string searchQuery, bool exactMatch)
        {
            var keygen = new KeywordGenerator();
            var sanitizedKeywords = keygen.SanitizeSearchInput(searchQuery, null);
            int numKeywords = sanitizedKeywords.Length;
            var keywordTable = Manager.GetExistingKeywordsFromDb();

            var aggregationPipeline = keywordTable.Aggregate()
                .Match(new FilterDefinitionBuilder<KeywordSearch>().In(x => x.Keyword, sanitizedKeywords))
                .Unwind<KeywordSearch, UnwoundKeywordSearch>(x => x.EntryIds)
                .Group(x => x.EntryIds, y => new TemporaryEntrySet { Id = y.Key, Count = y.Count() });

            aggregationPipeline = exactMatch ?
                                  aggregationPipeline.Match(x => x.Count == numKeywords) :
                                  aggregationPipeline.SortByDescending(x => x.Count);

            var something = aggregationPipeline
                .Lookup(
                    foreignCollection: Manager.GetExistingDbEntries(),
                    localField: x => x.Id,
                    foreignField: y => y.Id,
                    @as: (KeywordResult result) => result.DictionaryEntry)
                .Unwind<KeywordResult, UnwoundKeywordResult>(x => x.DictionaryEntry)
                .ToList();
            return something.Select(x => x.DictionaryEntry);
        }

        private List<DictionaryEntry> SearchAll(string input, bool exactMatch)
        {
            var signsTranslit = exactMatch ?
                Manager.GetExistingDbEntries().Find(x => x.Transliteration == input || 
                                x.GardinerSigns == input).ToList() :
                Manager.GetExistingDbEntries().Find(x => x.Transliteration.Contains(input) || 
                                x.GardinerSigns.Contains(input)).ToList();
            return signsTranslit.Concat(SearchByTranslation(input, exactMatch)).ToList();

        }
    }
}
