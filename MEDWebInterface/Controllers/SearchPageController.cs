using MEDWebInterface.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MiddleEgyptianDictionaryModel;
using System.Web.WebPages;
using System.Net.Http;

namespace MEDWebInterface.Controllers
{
    public class SearchController : Controller
    {
        MiddleEgyptianDictionaryEntities db;
        WordFinder wf;

        // GET: SearchPage
        public ActionResult Index()
        {
            ViewBag.Message = "Here you can search the Middle Egyptian Dictionary according to the set parameters.";
            return View();
        }

        [HttpPost]
        public ActionResult Submit(SearchQuery userInput)
        {
            try
            {
                List<Dictionary> results = SearchDatabase(userInput);
                // Redirect to proper route that displays
                Result packaged = new Result() { Results = results };
                TempData["results"] = packaged;
                return RedirectToAction("Results");
            }
            catch (Exception ex)
            {
                TempData["ex"] = ex.StackTrace;
                return View();
            }
        }

        public ActionResult Results()
        {
            Result results = (Result)TempData["results"];
            return View(results);
        }

        private void DefineVariables()
        {
            if (db is default(MiddleEgyptianDictionaryEntities))
            {
                Uri uri = new Uri("http://egyptiandictionary.azurewebsites.net/DictionaryData.svc/");
                db = new MiddleEgyptianDictionaryEntities(uri);
            }
            if (wf is default(WordFinder))
            {
                wf = new WordFinder(db);
            }
        }

        private List<Dictionary> SearchDatabase(SearchQuery query)
        {
            DefineVariables();
            return wf.ConductSearch(query);
        }

    }
}