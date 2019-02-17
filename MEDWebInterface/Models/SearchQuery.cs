using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web;

namespace MEDWebInterface.Models
{
    public enum SearchType { all, translation, transliteration, gardiner }
    public class SearchQuery
    {
        public string Query { get; set; }
        public bool ExactMatch { get; set; }
        public SearchType Type { get; set; }

        public SearchQuery()
        {
            Query = "";
            ExactMatch = false;
            Type = SearchType.all;
        }

        public SearchQuery(string input, bool isMatch, SearchType type)
        {
            Query = input;
            ExactMatch = isMatch;
            Type = type;
        }
    }
}