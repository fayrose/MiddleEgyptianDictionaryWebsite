using MiddleEgyptianDictionary;
using System.Collections.Generic;

namespace MEDWebInterface.Models
{
    public class Result
    {
        public List<DictionaryEntry> Results { get; set; }
        public bool DisplayFormatted { get; set; }
        public Result()
        {
            Results = new List<DictionaryEntry>();
            DisplayFormatted = true;
        }

        public Result(bool displayFormatted)
        {
            Results = new List<DictionaryEntry>();
            DisplayFormatted = displayFormatted;
        }
    }
}