using System.Web;
using System.Web.Optimization;

namespace MEDWebInterface
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js"));

            bundles.Add(new ScriptBundle("~/bundles/popper").Include(
                "~/Scripts/popper*"));

            bundles.Add(new ScriptBundle("~/bundles/select2").Include(
                "~/Scripts/select2.js"));

            bundles.Add(new StyleBundle("~/Content/select2").Include(
                "~/Content/css/select2.css"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/component-custom-switch.css",
                      "~/Content/Site.css"));

            bundles.Add(new StyleBundle("~/Content/res").Include(
                "~/Content/res.css"
                ));

            bundles.Add(new ScriptBundle("~/bundles/res").Include(
                "~/Scripts/res/res_aux.js",
                "~/Scripts/res/res_points.js",
                "~/Scripts/res/res_lite.js",
                "~/Scripts/res/res_signinfo.js",
                "~/Scripts/res/res_struct.js",
                "~/Scripts/res/res_syntax.js",
                "~/Scripts/res/res_format.js",
                "~/Scripts/res/res_render.js",
                "~/Scripts/res/res_web.js"
                ));
        }
    }
}
