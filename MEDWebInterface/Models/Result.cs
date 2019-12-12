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
        public string[] UnknownGlyphs { get; }
        public Result()
        {
            Results = new List<DictionaryEntry>();
            DisplayFormatted = true;
            UnknownGlyphs = GetUnknownGlyphs();
        }
        public string[] GetUnknownGlyphs()
        {
            return File.ReadAllLines(Constants.UnknownGlyphPath);
        }

        public Result(bool displayFormatted)
        {
            Results = new List<DictionaryEntry>();
            DisplayFormatted = displayFormatted;
            UnknownGlyphs = GetUnknownGlyphs();
        }
    }
}