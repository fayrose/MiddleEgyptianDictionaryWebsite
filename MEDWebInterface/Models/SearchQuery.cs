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
        public bool DisplayFormatted { get; set; }
        public SearchQuery()
        {
            Query = "";
            ExactMatch = false;
            Type = SearchType.all;
            DisplayFormatted = true;
        }

        public SearchQuery(string input, bool isMatch, SearchType type, bool displayFormatted)
        {
            Query = input;
            ExactMatch = isMatch;
            Type = type;
            displayFormatted = DisplayFormatted;
        }
    }
}