using MiddleEgyptianDictionary;
using System.Collections.Generic;

namespace MEDWebInterface.Models
{
    public class Result
    {
        public List<DictionaryEntry> Results { get; set; }

        public Result()
        {
            Results = new List<DictionaryEntry>();
        }
    }
}