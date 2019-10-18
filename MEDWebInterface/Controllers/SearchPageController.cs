using MEDWebInterface.Models;
using MiddleEgyptianDictionary;
using System;
using System.Collections.Generic;
using System.Web.Mvc;

namespace MEDWebInterface.Controllers
{
    public class SearchController : Controller
    {
        WordFinder wf;

        // GET: SearchPage
        public ActionResult Index()
        {
            ViewBag.Message = "Here you can search the Middle Egyptian Dictionary according to the set parameters.";
            return View();
        }

        public ActionResult About()
        {
            return View();
        }

        public ActionResult GardinerSigns()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Submit(SearchQuery userInput)
        {
            try
            {
                IEnumerable<DictionaryEntry> results = SearchDatabase(userInput);
                // Redirect to proper route that displays
                Result packaged = new Result()
                { 
                  Results = results,
                  DisplayFormatted = userInput.DisplayFormatted
                };
                TempData["results"] = packaged;
                return RedirectToAction("Results");
            }
            catch (Exception ex)
            {
                TempData["ex"] = ex.StackTrace;
                return RedirectToAction("Results");
            }
        }

        public ActionResult Results()
        {
            Result results = (Result)TempData["results"];
            return View(results);
        }

        private void DefineVariables()
        {
            if (wf is default(WordFinder))
            {
                wf = new WordFinder(Constants.ConnectionString);
            }
        }

        private IEnumerable<DictionaryEntry> SearchDatabase(SearchQuery query)
        {
            DefineVariables();
            return wf.ConductSearch(query);
        }

    }
}