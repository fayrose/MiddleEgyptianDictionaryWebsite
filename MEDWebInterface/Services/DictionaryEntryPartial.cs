using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Unicode;
using MEDWebInterface.Services;

namespace MiddleEgyptianDictionaryModel
{
    partial class Dictionary
    {
        public override string ToString()
        {
            return GardinerConverter.ConvertGardiner(this.gardinerSigns) + "(" + this.transliteration + "): " + this.Translations.FirstOrDefault().translation1;  
        }
    }
}
