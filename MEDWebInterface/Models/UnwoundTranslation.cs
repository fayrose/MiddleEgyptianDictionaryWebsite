using MiddleEgyptianDictionary.Models;

namespace MEDWebInterface.Models
{
    public class UnwoundTranslation
    {
        public string translation { get; set; }
        public virtual Metadata TranslationMetadata { get; set; }
    }
}