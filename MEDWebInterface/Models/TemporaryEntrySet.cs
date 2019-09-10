using MongoDB.Bson;

namespace MEDWebInterface.Models
{
    public class TemporaryEntrySet
    {
        public ObjectId Id { get; set; }

        public int Count { get; set; }   
    }
}
