using edu.stanford.nlp.simple;
using MEDWebInterface.Models;
using MiddleEgyptianDictionary;
using MiddleEgyptianDictionary.Models;
using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.IO;
using System.Linq;

namespace MEDWebInterface.Services
{
    class KeywordGenerator
    {
        private readonly ImmutableArray<string> StopWords;
        Dictionary<string, KeywordSearch> KeywordTable;

        public KeywordGenerator(string stopwordsLocation)
        {
            StopWords = GetStopWords(stopwordsLocation);
            KeywordTable = new Dictionary<string, KeywordSearch>();
        }

        private ImmutableArray<string> GetStopWords(string stopwordsLocation)
        {
            StreamReader reader = File.OpenText(stopwordsLocation);
            List<string> stopWords = new List<string>();
            string line;
            while ((line = reader.ReadLine()) != null)
            {
                stopWords.Add(line);
            }
            return stopWords.ToImmutableArray();
        }

        public void GenerateKeywordsFromEntries(IEnumerable<DictionaryEntry> entries)
        {
            foreach (DictionaryEntry entry in entries)
            {
                foreach (Translation translationObj in entry.Translations)
                {
                    var withoutStopWords = SanitizeSearchInput(translationObj.translation, translationObj.TranslationMetadata.PartOfSpeech);

                    for (int i = 0; i < withoutStopWords.Count(); i++)
                    {
                        withoutStopWords[i] = String.Join(" ", new Sentence(withoutStopWords[i]).lemmas().toArray()).ToLower();

                        if (KeywordTable.ContainsKey(withoutStopWords[i]))
                        {
                            KeywordTable[withoutStopWords[i]].AddIdToEntryIds(entry.Id);
                        }
                        else
                        {
                            KeywordTable.Add(withoutStopWords[i], new KeywordSearch(withoutStopWords[i], entry.Id));
                        }
                    }
                }
            }
        }

        public string[] SanitizeSearchInput(string search, string partOfSpeech)
        {
            var sanitized = string.Join("", search.Select(x => char.IsPunctuation(x) && x != '\'' ? ' ' : char.ToLower(x)))
                                                                              .Split(new char[] { ' ' }, StringSplitOptions.RemoveEmptyEntries);
            var withoutStopWords = sanitized.Except(StopWords).ToArray();

            // If there are no keywords once the stop words are removed, back off to the StopWords. If that too is empty, back off to the translation.
            bool withoutStopWordsIsEmpty = withoutStopWords.Count() == 0;
            if (withoutStopWordsIsEmpty && sanitized.Count() == 0)
            {
                withoutStopWords = search.Split(new char[] { ' ' }, StringSplitOptions.RemoveEmptyEntries);
            }
            else if (withoutStopWordsIsEmpty)
            {
                withoutStopWords = sanitized;
            }

            // If neither of these plan B's work, back off to the Part of Speech, should one exist.
            if (withoutStopWords.Count() == 0 && !String.IsNullOrWhiteSpace(partOfSpeech))
            {
                withoutStopWords = partOfSpeech.Split();
            }
            return withoutStopWords;
        }

        public IEnumerable<KeywordSearch> GetKeywordSearchList()
        {
            return KeywordTable.Values;
        }
    }
}
