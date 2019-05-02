using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Unicode;
using System.Web;

namespace MEDWebInterface.Services
{
    public static class GardinerConverter
    {
        static Dictionary<string, string> gardinerConverter;
        static Dictionary<string, string> translitConverter = new Dictionary<string, string>();

        static GardinerConverter()
        {
            if (gardinerConverter == null)
            {
                gardinerConverter = CreateUnicodeHashSet();
            }
            translitConverter.Add("A", UnicodeNumberToString("A722"));
            translitConverter.Add("a", UnicodeNumberToString("A724"));
            translitConverter.Add("H", UnicodeNumberToString("1E25"));
            translitConverter.Add("x", UnicodeNumberToString("1E2B"));
            translitConverter.Add("X", UnicodeNumberToString("1E96"));
            translitConverter.Add("S", UnicodeNumberToString("0161"));
            translitConverter.Add("T", UnicodeNumberToString("1E6F"));
            translitConverter.Add("D", UnicodeNumberToString("1E0F"));
        }

        public static string ConvertGardiner(string input)
        {
            List<string> convertedGlyphs = new List<string>();
            string[] split = input.Split(' ');
            foreach (string glyph in split)
            {
                string fixed_glyph = FixIncongruentLettering(glyph);
                
                if (gardinerConverter.ContainsKey(fixed_glyph.ToUpper()))
                {
                    convertedGlyphs.Add(gardinerConverter[fixed_glyph.ToUpper()]);
                }
                else
                {
                    convertedGlyphs.Add(" " + fixed_glyph + " ");
                }
            }
            return String.Join("", convertedGlyphs);
        }

        private static Dictionary<string, string> CreateUnicodeHashSet()
        {
            Dictionary<string, string> unicodeTable = new Dictionary<string, string>();
            for (int i = 0x13000; i < 0x1342E; i++)
            {
                string unicodeString = char.ConvertFromUtf32(i);
                string unicodeName = UnicodeInfo.GetName(i).Split(' ').ToList().Last();
                unicodeName = FixUnicodeName(unicodeName);
                unicodeTable.Add(unicodeName, unicodeString);
            }
            return unicodeTable;
        }

        public static string FixIncongruentLettering(string glyph)
        {
            string answer = glyph;
            if (answer.StartsWith("J"))
            {
                answer = "AA" + glyph.Substring(1);
            }
            if (!gardinerConverter.ContainsKey(answer) && answer != "")
            {
                char last = answer.Last();
                if ((last >= 'A' && last <= 'Z') || (last >= 'a' && last <= 'z'))
                {
                    if (gardinerConverter.ContainsKey(answer.Substring(0, answer.Length - 1))) {
                        answer = answer.Substring(0, answer.Length - 1);
                    }
                }
            }
            return answer;            
        }

        /// <summary>
        /// Removes trailing zeroes in Unicode Names
        /// </summary>
        /// <param name="unicodeName">Gardiner sign name with excess zeroes</param>
        /// <returns>Gardiner sign name without excess zeroes</returns>
        private static string FixUnicodeName(string unicodeName)
        {
            // [A-Za-z]*[0]*[A-Za-z0-9]* => [A-Za-z]*[A-Za-z0-9]*
            string answer;

            int firstZeroIdx = unicodeName.IndexOf('0');
            if (firstZeroIdx != -1)
            {
                answer = unicodeName.Substring(0, firstZeroIdx);
                if (firstZeroIdx >= 0)
                {
                    for (int i = firstZeroIdx; i < unicodeName.Length; i++)
                    {
                        if (unicodeName[i] != '0')
                        {
                            answer += unicodeName.Substring(i);
                            break;
                        }
                    }
                }
                return answer;
            }
            else
            {
                return unicodeName;
            }
        }

        public static string PrettifyTransliteration(string input)
        {
            string answer = input;
            foreach (string letter in translitConverter.Keys)
            {
                answer = answer.Replace(letter, translitConverter[letter]);
            }
            return answer;
        }

        private static string UnicodeNumberToString(string input)
        {
            int code = int.Parse(input, System.Globalization.NumberStyles.HexNumber);
            return char.ConvertFromUtf32(code);
        }
    }
}