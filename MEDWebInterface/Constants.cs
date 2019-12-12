using System;
using System.IO;

namespace MEDWebInterface
{
    public static class Constants
    {
        public static string ConnectionString = @"mongodb://localhost:27017";
        public static string UnknownGlyphPath = AppDomain.CurrentDomain.BaseDirectory + "Content\\unknown_glyphs.txt";
    }
}