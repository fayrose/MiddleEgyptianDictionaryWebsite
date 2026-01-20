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
        private const int DefaultPageSize = 50;
        private const int MaxResultsInTempData = 500; // Limit TempData size

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

        public ActionResult Faulkner()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Submit(SearchQuery userInput)
        {
            try
            {
                IEnumerable<DictionaryEntry> allResults = SearchDatabase(userInput);
                var resultsList = allResults.ToList();
                int totalCount = resultsList.Count;
                
                // Limit results stored in TempData to prevent session storage overflow
                var limitedResults = resultsList.Take(MaxResultsInTempData).ToList();
                
                Result packaged = new Result()
                { 
                    Results = limitedResults.Take(DefaultPageSize),
                    DisplayFormatted = userInput.DisplayFormatted,
                    CurrentPage = 1,
                    PageSize = DefaultPageSize,
                    TotalResults = Math.Min(totalCount, MaxResultsInTempData)
                };
                
                // Store all limited results for pagination
                TempData["allResults"] = limitedResults;
                TempData["displayFormatted"] = userInput.DisplayFormatted;
                TempData["totalOriginal"] = totalCount;
                
                return RedirectToAction("Results", new { page = 1 });
            }
            catch (Exception ex)
            {
                TempData["ex"] = ex.StackTrace;
                return RedirectToAction("Index");
            }
        }

        public ActionResult Results(int page = 1)
        {
            // Try to get cached results
            var allResults = TempData.Peek("allResults") as List<DictionaryEntry>;
            var displayFormatted = TempData.Peek("displayFormatted") as bool? ?? true;
            var totalOriginal = TempData.Peek("totalOriginal") as int? ?? 0;
            
            if (allResults == null)
            {
                // No results in session - redirect to search
                return RedirectToAction("Index");
            }
            
            int totalResults = allResults.Count;
            int totalPages = (int)Math.Ceiling((double)totalResults / DefaultPageSize);
            
            // Clamp page number
            page = Math.Max(1, Math.Min(page, totalPages));
            
            var pagedResults = allResults
                .Skip((page - 1) * DefaultPageSize)
                .Take(DefaultPageSize)
                .ToList();
            
            Result result = new Result()
            {
                Results = pagedResults,
                DisplayFormatted = displayFormatted,
                CurrentPage = page,
                PageSize = DefaultPageSize,
                TotalResults = totalResults
            };
            
            // Pass info about truncation
            if (totalOriginal > MaxResultsInTempData)
            {
                ViewBag.Truncated = true;
                ViewBag.OriginalCount = totalOriginal;
            }
            
            return View(result);
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
            var resourceObj = Properties.Resources.ResourceManager.GetObject(input);
            if (resourceObj == null)
            {
                // Return null or empty response if resource not found
                return null;
            }
            var bitmap = (Bitmap)resourceObj;
            MemoryStream stream = new MemoryStream();
            bitmap.Save(stream, ImageFormat.Png);
            stream.Seek(0, SeekOrigin.Begin);
            return new FileStreamResult(stream, "image/png");
        }

        [HttpGet]
        public JsonResult FaulknerEntries(int page)
        {
            DefineVariables();
            if (page < 17 || page > 419)
            {
                TempData["ex"] = new Exception("Page is out of bounds.");
                return new JsonResult();
            }
            var answer = wf.SearchFaulknerByPage(page);
            return Json(answer, JsonRequestBehavior.AllowGet);
        }
    }
}
