using System.Collections.Generic;
using System.Linq;
using System.Security.Authentication;
using MEDWebInterface.Models;
using MongoDB.Driver;
using MiddleEgyptianDictionary;

namespace MEDWebInterface
{
    public class WordFinder
    {
        IMongoCollection<DictionaryEntry> collection;
        public WordFinder(string connectionString)
        {
            MongoClientSettings settings = MongoClientSettings.FromUrl(
              new MongoUrl(Constants.ConnectionString)
            );
            settings.SslSettings =
              new SslSettings() { EnabledSslProtocols = SslProtocols.Tls12 };
            var mongoDb = new MongoClient(settings).GetDatabase("MiddleEgyptianDictionary");
            collection = mongoDb.GetCollection<DictionaryEntry>("Entries");
        }

        public List<DictionaryEntry> ConductSearch(SearchQuery query)
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
                    return SearchByGardinerSigns(query.Query, query.ExactMatch);
            }
        }

        private List<DictionaryEntry> SearchByTransliteration(string transliteration, bool exactMatch)
        {
            return exactMatch ? collection.Find(x => x.Transliteration == transliteration).ToList() :
                   collection.Find(x => x.Transliteration.Contains(transliteration)).ToList();
        }

        private List<DictionaryEntry> SearchByGardinerSigns(string gardinerSigns, bool exactMatch)
        {
            return exactMatch ? collection.Find(x => x.GardinerSigns == gardinerSigns).ToList() :
                   collection.Find(x => x.GardinerSigns.Contains(gardinerSigns)).ToList();
            
        }

        private List<DictionaryEntry> SearchByTranslation(string translation, bool exactMatch)
        { 
            if (exactMatch)
            {
                var filter = Builders<DictionaryEntry>.Filter.Eq("Translations.translation", translation);
                return collection.Find(filter).ToList();
            }
            return collection.Find(x => x.Translations.Any( y => y.translation.Contains(translation))).ToList();
        }

        private List<DictionaryEntry> SearchAll(string input, bool exactMatch)
        {
            var signsTranslit = exactMatch ? 
                collection.Find(x => x.Transliteration == input || 
                                x.GardinerSigns == input).ToList() : 
                collection.Find(x => x.Transliteration.Contains(input) || 
                                x.GardinerSigns.Contains(input)).ToList();
            return signsTranslit.Concat(SearchByTranslation(input, exactMatch)).ToList();

        }
    }
}
