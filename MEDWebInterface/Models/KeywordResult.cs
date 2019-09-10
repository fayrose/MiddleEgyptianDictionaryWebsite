using MiddleEgyptianDictionary;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.Collections.Generic;

namespace MEDWebInterface.Models
{
    public class KeywordResult
    {
        [BsonId]
        public ObjectId Id { get; set; }

        public int Count { get; set; }

        public ICollection<DictionaryEntry> DictionaryEntry { set; get; }
    }

    public class UnwoundKeywordResult
    {
        [BsonId]
        public ObjectId Id { get; set; }

        public int Count { get; set; }

        public DictionaryEntry DictionaryEntry { set; get; }
    }
}
