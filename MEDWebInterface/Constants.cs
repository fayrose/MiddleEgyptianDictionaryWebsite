using System.IO;

namespace MEDWebInterface
{
    public static class Constants
    {
        public static string ConnectionString = @"mongodb://localhost:27017";

        public static string StopWordsLocation = Path.Combine(MiddleEgyptianDictionary.Constants.RepositoryLocation,
                                                              "..",
                                                              "MiddleEgyptianDictionary",
                                                              "MiddleEgyptianDictionary",
                                                              "Resources",
                                                              "StopWords");

    }
}