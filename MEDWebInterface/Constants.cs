using System;
using System.IO;

namespace MEDWebInterface
{
    public static class Constants
    {
        public static string ConnectionString = @"mongodb://localhost:27017";
        public static string UnknownGlyphPath = AppDomain.CurrentDomain.BaseDirectory + "Content\\unknown_glyphs.txt";
        
        // Cached unknown glyphs - loaded once at application startup
        private static string[] _unknownGlyphs;
        private static readonly object _lock = new object();
        
        public static string[] UnknownGlyphs
        {
            get
            {
                if (_unknownGlyphs == null)
                {
                    lock (_lock)
                    {
                        if (_unknownGlyphs == null)
                        {
                            LoadUnknownGlyphs();
                        }
                    }
                }
                return _unknownGlyphs;
            }
        }
        
        public static void LoadUnknownGlyphs()
        {
            try
            {
                if (File.Exists(UnknownGlyphPath))
                {
                    _unknownGlyphs = File.ReadAllLines(UnknownGlyphPath);
                }
                else
                {
                    _unknownGlyphs = new string[0];
                }
            }
            catch (Exception)
            {
                // Graceful degradation
                _unknownGlyphs = new string[0];
            }
        }
    }
}
