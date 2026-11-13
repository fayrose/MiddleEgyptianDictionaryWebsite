using System;
using System.IO;

namespace MEDWebInterface
{
    public static class Constants
    {
        // Set the MED_MONGODB_URI environment variable to override (on Azure App Service: an Application setting).
        // The literal below is only the fallback used when the variable is not set.
        public const string ConnectionStringEnvVar = "MED_MONGODB_URI";
        private const string FallbackConnectionString = @"mongodb://localhost:27017";
        public static string ConnectionString = ResolveConnectionString();

        private static string ResolveConnectionString()
        {
            string fromEnvironment = System.Environment.GetEnvironmentVariable(ConnectionStringEnvVar);
            return string.IsNullOrWhiteSpace(fromEnvironment) ? FallbackConnectionString : fromEnvironment;
        }
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
