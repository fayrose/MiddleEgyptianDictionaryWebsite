using MEDWebInterface.Models;
using MiddleEgyptianDictionary;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;
using System.Linq;
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

        public ActionResult References()
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
            if (query.Type == SearchType.transliteration)
            {
                char[] caseSensitive = new char[] { 'A', 'a', 's', 'S', 'h', 'H', 'x', 'X', 'd', 'D', 't', 'T' };
                query.Query = String.Join("", query.Query.Select(x => caseSensitive.Contains(x) ? x : char.ToLower(x)));
                query.Query = query.Query.Replace('j', 'i');
            }
            var answer = wf.ConductSearch(query) // Prioritize multiple-translation entries and Faulkner entries, then order by translit
                                          .OrderByDescending(x => x.Translations.SelectMany(z => z.TranslationMetadata.Select(y => y.DictionaryName)).Contains(DataSource.faulkner))
                                          .ThenByDescending(x => x.Translations.SelectMany(y => y.TranslationMetadata.Select(z => (int)z.DictionaryName)).Sum())
                                          .ThenBy(x => x.Transliteration)
                                          .ThenBy(x => x.GardinerSigns);
            return answer;
        }
        public FileStreamResult Image(string key)
        {
            string input = key.Replace("AA", "J").Replace("Aa", "J");
            var bitmap = (Bitmap)Properties.Resources.ResourceManager.GetObject(input);
            MemoryStream stream = new MemoryStream();
            bitmap.Save(stream, ImageFormat.Png);
            stream.Seek(0, SeekOrigin.Begin);
            return new FileStreamResult(stream, "image/png");
        }
    }
}