using MEDWebInterface.Services;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MEDWebInterface.Models
{
    public class UnwoundKeywordSearch
    {
        [BsonId]
        public ObjectId Id { get; set; }

        [BsonSerializer(typeof(KeywordSearchSerializer))]
        public string Keyword { get; set; }

        public ObjectId EntryIds { get; set; }

        public UnwoundKeywordSearch(string keyword, ObjectId entryId)
        {
            EntryIds = entryId;
            Id = ObjectId.GenerateNewId();
            Keyword = keyword;
        }
    }
}