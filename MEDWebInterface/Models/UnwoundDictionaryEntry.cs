using System.Collections.Generic;
using System.Linq;
using MiddleEgyptianDictionary.Services;
using MiddleEgyptianDictionary.Models;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace MEDWebInterface.Models
{
    public class UnwoundDictionaryEntry
    {
        public UnwoundDictionaryEntry() { }

        [BsonId]
        public ObjectId Id { get; set; }
        public string Transliteration { get; set; }
        public string GardinerSigns { get; set; }
        public string ManuelDeCodage { get; set; }
        public string Res { get; set; }
        public virtual Translation Translations { get; set; }
        [BsonIgnore]
        internal bool IsCorrectlyFormatted { get; set; }
    }

    public class FullyUnwoundDictionaryEntry
    {
        public FullyUnwoundDictionaryEntry() { }

        [BsonId]
        public ObjectId Id { get; set; }
        public string Transliteration { get; set; }
        public string GardinerSigns { get; set; }
        public string ManuelDeCodage { get; set; }
        public string Res { get; set; }
        public virtual UnwoundTranslation Translations { get; set; }
        [BsonIgnore]
        internal bool IsCorrectlyFormatted { get; set; }
    }
}
