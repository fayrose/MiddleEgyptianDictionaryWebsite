using MEDWebInterface.Services;
using MiddleEgyptianDictionary.Models;
using System.Collections.Generic;
using System.Linq;

namespace MiddleEgyptianDictionary
{
    public class DictionaryEntry
    {
        public MongoDB.Bson.ObjectId _id { get; set; }
        public DictionaryEntry()
        {
            this.Translations = new HashSet<Translation>();
        }
        public string Transliteration { get; set; }
        public string GardinerSigns { get; set; }
        public string ManuelDeCodage { get; set; }
        public string Res { get; set; }
        public virtual ICollection<Translation> Translations { get; set; }

        public override string ToString()
        {
            return GardinerConverter.ConvertGardiner(this.GardinerSigns) +
                   "(" + this.Transliteration + "): " +
                   this.Translations.FirstOrDefault().translation;
        }


    }
}
