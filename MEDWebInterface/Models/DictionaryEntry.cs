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
        public string transliteration { get; set; }
        public string gardinerSigns { get; set; }
        public virtual ICollection<Translation> Translations { get; set; }

        public override string ToString()
        {
            return GardinerConverter.ConvertGardiner(this.gardinerSigns) +
                   "(" + this.transliteration + "): " +
                   this.Translations.FirstOrDefault().translation;
        }


    }
}
