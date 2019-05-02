using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MiddleEgyptianDictionary.Models
{
    public class Translation
    {
        public string translation { get; set; }
        public virtual Metadata TranslationMetadata { get; set; }
    }
}
