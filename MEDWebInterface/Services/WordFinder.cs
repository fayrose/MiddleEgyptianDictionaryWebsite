using System.Collections.Generic;
using System.Linq;
using MEDWebInterface.Models;
using MiddleEgyptianDictionaryModel;

namespace MEDWebInterface
{
    public class WordFinder
    {
        MiddleEgyptianDictionaryEntities dbContext;
        public WordFinder(MiddleEgyptianDictionaryEntities db)
        {
            dbContext = db;
        }

        public List<Dictionary> ConductSearch(SearchQuery query)
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

        private List<Dictionary> SearchByTransliteration(string transliteration, bool exactMatch)
        {
            if (exactMatch)
            {
                return dbContext.Dictionaries
                .Expand(x => x.Translations)
                .Where(x => x.transliteration.Equals(transliteration, System.StringComparison.CurrentCulture))
                .OrderBy(x => x.transliteration)
                .ToList();
            }
            else
            {
                return dbContext.Dictionaries
                .Expand(x => x.Translations)
                .Where(x => x.transliteration.Contains(transliteration))
                .OrderBy(x => x.transliteration)
                .ToList();
            }
        }

        private List<Dictionary> SearchByGardinerSigns(string gardinerSigns, bool exactMatch)
        {
            IOrderedQueryable<Dictionary> answer;
            if (exactMatch)
            {
                answer = dbContext.Dictionaries
                .Expand(x => x.Translations)
                .Where(x => x.gardinerSigns.Equals(gardinerSigns, System.StringComparison.CurrentCulture))
                .OrderBy(x => x.transliteration);
            } else
            {
                answer = dbContext.Dictionaries
                .Expand(x => x.Translations)
                .Where(x => x.gardinerSigns.Contains(gardinerSigns))
                .OrderBy(x => x.transliteration);
            }
            return answer.ToList();
        }

        private List<Dictionary> SearchByTranslation(string translation, bool exactMatch)
        {
            List<Translation> answer;
            if (exactMatch)
            {
                answer = dbContext.Translations
                .Expand(x => x.Dictionary)
                .Where(x => x.translation1.Equals(translation, System.StringComparison.CurrentCulture))
                .ToList();
            }
            else
            {
                answer = dbContext.Translations
                .Expand(x => x.Dictionary)
                .Where(x => x.translation1.Contains(translation))
                .ToList();
            }
            return answer.Select(x => x.Dictionary).ToList();
        }

        private List<Dictionary> SearchAll(string input, bool exactMatch)
        {
            if (exactMatch)
            {
                var signsTranslit = dbContext.Dictionaries
                    .Expand(x => x.Translations)
                    .Where(x => x.gardinerSigns == input || x.transliteration == input)
                    .ToList();
                var translation = dbContext.Translations
                    .Expand(x => x.Dictionary)
                    .Where(x => x.translation1 == input)
                    .ToList();
                return signsTranslit.Concat(translation.Select(x => x.Dictionary)).ToList();
            }
            else
            {
                var signsTranslit = dbContext.Dictionaries
                    .Expand(x => x.Translations)
                    .Where(x => x.gardinerSigns.Contains(input) || x.transliteration.Contains(input))
                    .ToList();
                var translation = dbContext.Translations
                    .Expand(x => x.Dictionary)
                    .Where(x => x.translation1.Contains(input))
                    .ToList();      
                return signsTranslit.Concat(translation.Select(x => x.Dictionary)).ToList();
            }
        }
    }
}
