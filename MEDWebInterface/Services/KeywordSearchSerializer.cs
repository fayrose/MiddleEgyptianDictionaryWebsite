using MongoDB.Bson.Serialization;
using MongoDB.Bson;
using System;

namespace MEDWebInterface.Services
{
    class KeywordSearchSerializer : IBsonSerializer, IBsonArraySerializer, IBsonSerializer<string>
    {
        public Type ValueType { get { return typeof(string); } }

        public object Deserialize(BsonDeserializationContext context, BsonDeserializationArgs args)
        {
            var type = context.Reader.GetCurrentBsonType();
            switch (type)
            {
                case BsonType.String:
                    return context.Reader.ReadString();
                default:
                    throw new NotImplementedException($"No implementation to deserialize {type}");
            }
        }

        public void Serialize(BsonSerializationContext context, BsonSerializationArgs args, object value)
        {
            string valueStr = value as string;
            if (valueStr != null)
            {
                context.Writer.WriteString(valueStr);
            }
        }

        public void Serialize(BsonSerializationContext context, BsonSerializationArgs args, string value)
        {
            if (value != null)
            {
                context.Writer.WriteString(value);
            }
        }

        public bool TryGetItemSerializationInfo(out BsonSerializationInfo serializationInfo)
        {
            string elementName = null;
            var serializer = BsonSerializer.LookupSerializer(typeof(string));
            var nominalType = typeof(string);
            serializationInfo = new BsonSerializationInfo(elementName, serializer, nominalType);
            return true;
        }

        string IBsonSerializer<string>.Deserialize(BsonDeserializationContext context, BsonDeserializationArgs args)
        {
            var type = context.Reader.GetCurrentBsonType();
            switch (type)
            {
                case BsonType.String:
                    return context.Reader.ReadString();
                default:
                    throw new NotImplementedException($"No implementation to deserialize {type}");
            }
        }
    }
}
