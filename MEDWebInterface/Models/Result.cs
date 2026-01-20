using MEDWebInterface.Properties;
using MiddleEgyptianDictionary;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Drawing.Imaging;
using System.Globalization;
using System.IO;
using System.Web.Mvc;

namespace MEDWebInterface.Models
{
    public class Result
    {
        public IEnumerable<DictionaryEntry> Results { get; set; }
        public bool DisplayFormatted { get; set; }
        
        // Use cached unknown glyphs from Constants (loaded once at startup)
        public string[] UnknownGlyphs => Constants.UnknownGlyphs;
        
        // Pagination properties
        public int CurrentPage { get; set; } = 1;
        public int PageSize { get; set; } = 50;
        public int TotalResults { get; set; }
        public int TotalPages => (int)Math.Ceiling((double)TotalResults / PageSize);
        
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
