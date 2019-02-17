using MiddleEgyptianDictionaryModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MEDWebInterface.Models
{
    public class Result
    {
        public List<Dictionary> Results { get; set; }

        public Result()
        {
            Results = new List<Dictionary>();
        }
    }
}