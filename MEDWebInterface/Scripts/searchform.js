$(document).ready(function () {
    var outData = [
        {
            "text": "A: Man and his Activities",
            "children": [
                {
                    "id": 0,
                    "text": "A1: seated man",
                    "html": "<span class=\"uni\">&#x13000;</span> A1: seated man",
                    "display": "A1"
                },
                {
                    "id": 1,
                    "text": "A10: seated man holding oar",
                    "html": "<span class=\"uni\">&#x1300C;</span> A10: seated man holding oar",
                    "display": "A10"
                },
                {
                    "id": 2,
                    "text": "A100: man swimming",
                    "html": "A100: man swimming",
                    "display": "A100"
                },
                {
                    "id": 3,
                    "text": "A103: man face-up on bed",
                    "html": "A103: man face-up on bed",
                    "display": "A103"
                },
                {
                    "id": 4,
                    "text": "A104: man face-down on bed",
                    "html": "A104: man face-down on bed",
                    "display": "A104"
                },
                {
                    "id": 5,
                    "text": "A108: man holding staff",
                    "html": "A108: man holding staff",
                    "display": "A108"
                },
                {
                    "id": 6,
                    "text": "A10A: seated man holding oar",
                    "html": "A10A: seated man holding oar",
                    "display": "A10a"
                },
                {
                    "id": 7,
                    "text": "A113: Elder of the Portal",
                    "html": "A113: Elder of the Portal",
                    "display": "A113"
                },
                {
                    "id": 8,
                    "text": "A115: man holding drinking bowl",
                    "html": "A115: man holding drinking bowl",
                    "display": "A115"
                },
                {
                    "id": 9,
                    "text": "A116: man kneeling with cup",
                    "html": "A116: man kneeling with cup",
                    "display": "A116"
                },
                {
                    "id": 10,
                    "text": "A116B: man sitting with cup",
                    "html": "A116B: man sitting with cup",
                    "display": "A116b"
                },
                {
                    "id": 11,
                    "text": "A117A",
                    "html": "A117A",
                    "display": "A117a"
                },
                {
                    "id": 12,
                    "text": "A119: man holding snake over head",
                    "html": "A119: man holding snake over head",
                    "display": "A119"
                },
                {
                    "id": 13,
                    "text": "A12: soldier with bow and quiver [mSa]",
                    "html": "<span class=\"uni\">&#x1300E;</span> A12: soldier with bow and quiver",
                    "display": "A12"
                },
                {
                    "id": 14,
                    "text": "A121",
                    "html": "A121",
                    "display": "A121"
                },
                {
                    "id": 15,
                    "text": "A121C: man raising the heavens",
                    "html": "A121C: man raising the heavens",
                    "display": "A121c"
                },
                {
                    "id": 16,
                    "text": "A125",
                    "html": "A125",
                    "display": "A125"
                },
                {
                    "id": 17,
                    "text": "A13: man with arms tied behind his back",
                    "html": "<span class=\"uni\">&#x1300F;</span> A13: man with arms tied behind his back",
                    "display": "A13"
                },
                {
                    "id": 18,
                    "text": "A131A: man with child on shoulders",
                    "html": "A131A: man with child on shoulders",
                    "display": "A131a"
                },
                {
                    "id": 19,
                    "text": "A133A: Satu",
                    "html": "A133A: Satu",
                    "display": "A133a"
                },
                {
                    "id": 20,
                    "text": "A135: wAb priest",
                    "html": "A135: wAb priest",
                    "display": "A135"
                },
                {
                    "id": 21,
                    "text": "A135C",
                    "html": "A135C",
                    "display": "A135c"
                },
                {
                    "id": 22,
                    "text": "A137",
                    "html": "A137",
                    "display": "A137"
                },
                {
                    "id": 23,
                    "text": "A139A: lector priest",
                    "html": "A139A: lector priest",
                    "display": "A139a"
                },
                {
                    "id": 24,
                    "text": "A13A: man with arms tied behind his back",
                    "html": "A13A: man with arms tied behind his back",
                    "display": "A13a"
                },
                {
                    "id": 25,
                    "text": "A13B: man with arms tied behind his back",
                    "html": "A13B: man with arms tied behind his back",
                    "display": "A13b"
                },
                {
                    "id": 26,
                    "text": "A13C: man with arms tied behind his back",
                    "html": "A13C: man with arms tied behind his back",
                    "display": "A13c"
                },
                {
                    "id": 27,
                    "text": "A13D: man with arms tied behind his back",
                    "html": "A13D: man with arms tied behind his back",
                    "display": "A13d"
                },
                {
                    "id": 28,
                    "text": "A13E: man with arms tied behind his back",
                    "html": "A13E: man with arms tied behind his back",
                    "display": "A13e"
                },
                {
                    "id": 29,
                    "text": "A13G: man with arms tied behind his back",
                    "html": "A13G: man with arms tied behind his back",
                    "display": "A13g"
                },
                {
                    "id": 30,
                    "text": "A13N: man with arms tied behind his back",
                    "html": "A13N: man with arms tied behind his back",
                    "display": "A13n"
                },
                {
                    "id": 31,
                    "text": "A14: falling man with blood streaming from his head",
                    "html": "<span class=\"uni\">&#x13010;</span> A14: falling man with blood streaming from his head",
                    "display": "A14"
                },
                {
                    "id": 32,
                    "text": "A141",
                    "html": "A141",
                    "display": "A141"
                },
                {
                    "id": 33,
                    "text": "A143A",
                    "html": "A143A",
                    "display": "A143a"
                },
                {
                    "id": 34,
                    "text": "A148",
                    "html": "A148",
                    "display": "A148"
                },
                {
                    "id": 35,
                    "text": "A14A: man whose head is hit with an axe",
                    "html": "<span class=\"uni\">&#x13011;</span> A14A: man whose head is hit with an axe",
                    "display": "A14a"
                },
                {
                    "id": 36,
                    "text": "A14B: falling man with blood streaming from his head",
                    "html": "A14B: falling man with blood streaming from his head",
                    "display": "A14b"
                },
                {
                    "id": 37,
                    "text": "A14C: falling man with blood streaming from his head",
                    "html": "A14C: falling man with blood streaming from his head",
                    "display": "A14c"
                },
                {
                    "id": 38,
                    "text": "A14D: falling man with blood streaming from his head",
                    "html": "A14D: falling man with blood streaming from his head",
                    "display": "A14d"
                },
                {
                    "id": 39,
                    "text": "A14E: falling man with blood streaming from his head",
                    "html": "A14E: falling man with blood streaming from his head",
                    "display": "A14e"
                },
                {
                    "id": 40,
                    "text": "A14G: falling man with blood streaming from his head",
                    "html": "A14G: falling man with blood streaming from his head",
                    "display": "A14g"
                },
                {
                    "id": 41,
                    "text": "A15: man falling [xr]",
                    "html": "<span class=\"uni\">&#x13012;</span> A15: man falling",
                    "display": "A15"
                },
                {
                    "id": 42,
                    "text": "A150",
                    "html": "A150",
                    "display": "A150"
                },
                {
                    "id": 43,
                    "text": "A153",
                    "html": "A153",
                    "display": "A153"
                },
                {
                    "id": 44,
                    "text": "A158",
                    "html": "A158",
                    "display": "A158"
                },
                {
                    "id": 45,
                    "text": "A15A: man falling",
                    "html": "A15A: man falling",
                    "display": "A15a"
                },
                {
                    "id": 46,
                    "text": "A16: man bowing down",
                    "html": "<span class=\"uni\">&#x13013;</span> A16: man bowing down",
                    "display": "A16"
                },
                {
                    "id": 47,
                    "text": "A166",
                    "html": "A166",
                    "display": "A166"
                },
                {
                    "id": 48,
                    "text": "A16A: man bowing down",
                    "html": "A16A: man bowing down",
                    "display": "A16a"
                },
                {
                    "id": 49,
                    "text": "A17: child sitting with hand to mouth [Xrd]",
                    "html": "<span class=\"uni\">&#x13014;</span> A17: child sitting with hand to mouth",
                    "display": "A17"
                },
                {
                    "id": 50,
                    "text": "A17A: child sitting with arms hanging down",
                    "html": "<span class=\"uni\">&#x13015;</span> A17A: child sitting with arms hanging down",
                    "display": "A17a"
                },
                {
                    "id": 51,
                    "text": "A17B: child sitting with hand to mouth",
                    "html": "A17B: child sitting with hand to mouth",
                    "display": "A17b"
                },
                {
                    "id": 52,
                    "text": "A17D: child sitting with hand to mouth",
                    "html": "A17D: child sitting with hand to mouth",
                    "display": "A17d"
                },
                {
                    "id": 53,
                    "text": "A18: child wearing S3",
                    "html": "<span class=\"uni\">&#x13016;</span> A18: child wearing S3",
                    "display": "A18"
                },
                {
                    "id": 54,
                    "text": "A184",
                    "html": "A184",
                    "display": "A184"
                },
                {
                    "id": 55,
                    "text": "A189",
                    "html": "A189",
                    "display": "A189"
                },
                {
                    "id": 56,
                    "text": "A19: bent man leaning on staff",
                    "html": "<span class=\"uni\">&#x13017;</span> A19: bent man leaning on staff",
                    "display": "A19"
                },
                {
                    "id": 57,
                    "text": "A190A",
                    "html": "A190A",
                    "display": "A190a"
                },
                {
                    "id": 58,
                    "text": "A193",
                    "html": "A193",
                    "display": "A193"
                },
                {
                    "id": 59,
                    "text": "A199",
                    "html": "A199",
                    "display": "A199"
                },
                {
                    "id": 60,
                    "text": "A199A",
                    "html": "A199A",
                    "display": "A199a"
                },
                {
                    "id": 61,
                    "text": "A2: seated man with hand to mouth",
                    "html": "<span class=\"uni\">&#x13001;</span> A2: seated man with hand to mouth",
                    "display": "A2"
                },
                {
                    "id": 62,
                    "text": "A20: man leaning on forked staff",
                    "html": "<span class=\"uni\">&#x13018;</span> A20: man leaning on forked staff",
                    "display": "A20"
                },
                {
                    "id": 63,
                    "text": "A200",
                    "html": "A200",
                    "display": "A200"
                },
                {
                    "id": 64,
                    "text": "A201",
                    "html": "A201",
                    "display": "A201"
                },
                {
                    "id": 65,
                    "text": "A202",
                    "html": "A202",
                    "display": "A202"
                },
                {
                    "id": 66,
                    "text": "A207A",
                    "html": "A207A",
                    "display": "A207a"
                },
                {
                    "id": 67,
                    "text": "A21: man holding staff with handkerchief [sr]",
                    "html": "<span class=\"uni\">&#x13019;</span> A21: man holding staff with handkerchief",
                    "display": "A21"
                },
                {
                    "id": 68,
                    "text": "A211",
                    "html": "A211",
                    "display": "A211"
                },
                {
                    "id": 69,
                    "text": "A211A",
                    "html": "A211A",
                    "display": "A211a"
                },
                {
                    "id": 70,
                    "text": "A216B",
                    "html": "A216B",
                    "display": "A216b"
                },
                {
                    "id": 71,
                    "text": "A216C",
                    "html": "A216C",
                    "display": "A216c"
                },
                {
                    "id": 72,
                    "text": "A219A",
                    "html": "A219A",
                    "display": "A219a"
                },
                {
                    "id": 73,
                    "text": "A21A: man holding staff with handkerchief",
                    "html": "A21A: man holding staff with handkerchief",
                    "display": "A21a"
                },
                {
                    "id": 74,
                    "text": "A22: statue of man with staff and S42",
                    "html": "<span class=\"uni\">&#x1301A;</span> A22: statue of man with staff and S42",
                    "display": "A22"
                },
                {
                    "id": 75,
                    "text": "A223",
                    "html": "A223",
                    "display": "A223"
                },
                {
                    "id": 76,
                    "text": "A23: king with staff and T3",
                    "html": "<span class=\"uni\">&#x1301B;</span> A23: king with staff and T3",
                    "display": "A23"
                },
                {
                    "id": 77,
                    "text": "A233",
                    "html": "A233",
                    "display": "A233"
                },
                {
                    "id": 78,
                    "text": "A239",
                    "html": "A239",
                    "display": "A239"
                },
                {
                    "id": 79,
                    "text": "A239A",
                    "html": "A239A",
                    "display": "A239a"
                },
                {
                    "id": 80,
                    "text": "A23H: king with staff and T3",
                    "html": "A23H: king with staff and T3",
                    "display": "A23h"
                },
                {
                    "id": 81,
                    "text": "A24: man striking with both hands",
                    "html": "<span class=\"uni\">&#x1301C;</span> A24: man striking with both hands",
                    "display": "A24"
                },
                {
                    "id": 82,
                    "text": "A244",
                    "html": "A244",
                    "display": "A244"
                },
                {
                    "id": 83,
                    "text": "A244A",
                    "html": "A244A",
                    "display": "A244a"
                },
                {
                    "id": 84,
                    "text": "A245",
                    "html": "A245",
                    "display": "A245"
                },
                {
                    "id": 85,
                    "text": "A245A",
                    "html": "A245A",
                    "display": "A245a"
                },
                {
                    "id": 86,
                    "text": "A245B",
                    "html": "A245B",
                    "display": "A245b"
                },
                {
                    "id": 87,
                    "text": "A248",
                    "html": "A248",
                    "display": "A248"
                },
                {
                    "id": 88,
                    "text": "A248B",
                    "html": "A248B",
                    "display": "A248b"
                },
                {
                    "id": 89,
                    "text": "A25: man striking, with left arm hanging behind back",
                    "html": "<span class=\"uni\">&#x1301D;</span> A25: man striking, with left arm hanging behind back",
                    "display": "A25"
                },
                {
                    "id": 90,
                    "text": "A25A: man striking, with left arm hanging behind back",
                    "html": "A25A: man striking, with left arm hanging behind back",
                    "display": "A25a"
                },
                {
                    "id": 91,
                    "text": "A26: man with one arm pointing forward",
                    "html": "<span class=\"uni\">&#x1301E;</span> A26: man with one arm pointing forward",
                    "display": "A26"
                },
                {
                    "id": 92,
                    "text": "A261",
                    "html": "A261",
                    "display": "A261"
                },
                {
                    "id": 93,
                    "text": "A27: hastening man",
                    "html": "<span class=\"uni\">&#x1301F;</span> A27: hastening man",
                    "display": "A27"
                },
                {
                    "id": 94,
                    "text": "A275",
                    "html": "A275",
                    "display": "A275"
                },
                {
                    "id": 95,
                    "text": "A276",
                    "html": "A276",
                    "display": "A276"
                },
                {
                    "id": 96,
                    "text": "A278",
                    "html": "A278",
                    "display": "A278"
                },
                {
                    "id": 97,
                    "text": "A27A: hastening man",
                    "html": "A27A: hastening man",
                    "display": "A27a"
                },
                {
                    "id": 98,
                    "text": "A28: man with hands raised on either side",
                    "html": "<span class=\"uni\">&#x13020;</span> A28: man with hands raised on either side",
                    "display": "A28"
                },
                {
                    "id": 99,
                    "text": "A280",
                    "html": "A280",
                    "display": "A280"
                },
                {
                    "id": 100,
                    "text": "A282",
                    "html": "A282",
                    "display": "A282"
                },
                {
                    "id": 101,
                    "text": "A285",
                    "html": "A285",
                    "display": "A285"
                },
                {
                    "id": 102,
                    "text": "A29: man upside down",
                    "html": "<span class=\"uni\">&#x13021;</span> A29: man upside down",
                    "display": "A29"
                },
                {
                    "id": 103,
                    "text": "A298",
                    "html": "A298",
                    "display": "A298"
                },
                {
                    "id": 104,
                    "text": "A299B",
                    "html": "A299B",
                    "display": "A299b"
                },
                {
                    "id": 105,
                    "text": "A3: man sitting on heel",
                    "html": "<span class=\"uni\">&#x13002;</span> A3: man sitting on heel",
                    "display": "A3"
                },
                {
                    "id": 106,
                    "text": "A30: man with hands raised in front",
                    "html": "<span class=\"uni\">&#x13022;</span> A30: man with hands raised in front",
                    "display": "A30"
                },
                {
                    "id": 107,
                    "text": "A301",
                    "html": "A301",
                    "display": "A301"
                },
                {
                    "id": 108,
                    "text": "A304",
                    "html": "A304",
                    "display": "A304"
                },
                {
                    "id": 109,
                    "text": "A304C",
                    "html": "A304C",
                    "display": "A304c"
                },
                {
                    "id": 110,
                    "text": "A304E",
                    "html": "A304E",
                    "display": "A304e"
                },
                {
                    "id": 111,
                    "text": "A31: man with hands raised behind him",
                    "html": "<span class=\"uni\">&#x13023;</span> A31: man with hands raised behind him",
                    "display": "A31"
                },
                {
                    "id": 112,
                    "text": "A310",
                    "html": "A310",
                    "display": "A310"
                },
                {
                    "id": 113,
                    "text": "A311",
                    "html": "A311",
                    "display": "A311"
                },
                {
                    "id": 114,
                    "text": "A313",
                    "html": "A313",
                    "display": "A313"
                },
                {
                    "id": 115,
                    "text": "A316",
                    "html": "A316",
                    "display": "A316"
                },
                {
                    "id": 116,
                    "text": "A31B: man with hands raised behind him",
                    "html": "A31B: man with hands raised behind him",
                    "display": "A31b"
                },
                {
                    "id": 117,
                    "text": "A31C: man with hands raised behind him",
                    "html": "A31C: man with hands raised behind him",
                    "display": "A31c"
                },
                {
                    "id": 118,
                    "text": "A32: man dancing with arms to the back",
                    "html": "<span class=\"uni\">&#x13024;</span> A32: man dancing with arms to the back",
                    "display": "A32"
                },
                {
                    "id": 119,
                    "text": "A322",
                    "html": "A322",
                    "display": "A322"
                },
                {
                    "id": 120,
                    "text": "A323",
                    "html": "A323",
                    "display": "A323"
                },
                {
                    "id": 121,
                    "text": "A32A: man dancing with arms to the front",
                    "html": "<span class=\"uni\">&#x13025;</span> A32A: man dancing with arms to the front",
                    "display": "A32a"
                },
                {
                    "id": 122,
                    "text": "A32B: man dancing with arms to the back",
                    "html": "A32B: man dancing with arms to the back",
                    "display": "A32b"
                },
                {
                    "id": 123,
                    "text": "A32D: man dancing with arms to the back",
                    "html": "A32D: man dancing with arms to the back",
                    "display": "A32d"
                },
                {
                    "id": 124,
                    "text": "A32F: man dancing with arms to the back",
                    "html": "A32F: man dancing with arms to the back",
                    "display": "A32f"
                },
                {
                    "id": 125,
                    "text": "A32H: man dancing with arms to the back",
                    "html": "A32H: man dancing with arms to the back",
                    "display": "A32h"
                },
                {
                    "id": 126,
                    "text": "A33: man with stick and bundle on shoulder [mniw]",
                    "html": "<span class=\"uni\">&#x13026;</span> A33: man with stick and bundle on shoulder",
                    "display": "A33"
                },
                {
                    "id": 127,
                    "text": "A330",
                    "html": "A330",
                    "display": "A330"
                },
                {
                    "id": 128,
                    "text": "A338",
                    "html": "A338",
                    "display": "A338"
                },
                {
                    "id": 129,
                    "text": "A33B: man with stick and bundle on shoulder",
                    "html": "A33B: man with stick and bundle on shoulder",
                    "display": "A33b"
                },
                {
                    "id": 130,
                    "text": "A34: man pounding in a mortar",
                    "html": "<span class=\"uni\">&#x13027;</span> A34: man pounding in a mortar",
                    "display": "A34"
                },
                {
                    "id": 131,
                    "text": "A346",
                    "html": "A346",
                    "display": "A346"
                },
                {
                    "id": 132,
                    "text": "A349",
                    "html": "A349",
                    "display": "A349"
                },
                {
                    "id": 133,
                    "text": "A34A: man pounding in a mortar",
                    "html": "A34A: man pounding in a mortar",
                    "display": "A34a"
                },
                {
                    "id": 134,
                    "text": "A35: man building wall",
                    "html": "<span class=\"uni\">&#x13028;</span> A35: man building wall",
                    "display": "A35"
                },
                {
                    "id": 135,
                    "text": "A351",
                    "html": "A351",
                    "display": "A351"
                },
                {
                    "id": 136,
                    "text": "A352",
                    "html": "A352",
                    "display": "A352"
                },
                {
                    "id": 137,
                    "text": "A359",
                    "html": "A359",
                    "display": "A359"
                },
                {
                    "id": 138,
                    "text": "A35E: man building wall",
                    "html": "A35E: man building wall",
                    "display": "A35e"
                },
                {
                    "id": 139,
                    "text": "A36: man kneading into vessel",
                    "html": "<span class=\"uni\">&#x13029;</span> A36: man kneading into vessel",
                    "display": "A36"
                },
                {
                    "id": 140,
                    "text": "A361",
                    "html": "A361",
                    "display": "A361"
                },
                {
                    "id": 141,
                    "text": "A363",
                    "html": "A363",
                    "display": "A363"
                },
                {
                    "id": 142,
                    "text": "A366",
                    "html": "A366",
                    "display": "A366"
                },
                {
                    "id": 143,
                    "text": "A36A: man kneading into vessel",
                    "html": "A36A: man kneading into vessel",
                    "display": "A36a"
                },
                {
                    "id": 144,
                    "text": "A36C: man kneading into vessel",
                    "html": "A36C: man kneading into vessel",
                    "display": "A36c"
                },
                {
                    "id": 145,
                    "text": "A37: man in vessel",
                    "html": "<span class=\"uni\">&#x1302A;</span> A37: man in vessel",
                    "display": "A37"
                },
                {
                    "id": 146,
                    "text": "A375",
                    "html": "A375",
                    "display": "A375"
                },
                {
                    "id": 147,
                    "text": "A376A",
                    "html": "A376A",
                    "display": "A376a"
                },
                {
                    "id": 148,
                    "text": "A38: man holding necks of two emblematic animals with panther heads [qiz]",
                    "html": "<span class=\"uni\">&#x1302B;</span> A38: man holding necks of two emblematic animals with panther heads",
                    "display": "A38"
                },
                {
                    "id": 149,
                    "text": "A388",
                    "html": "A388",
                    "display": "A388"
                },
                {
                    "id": 150,
                    "text": "A39: man on two giraffes",
                    "html": "<span class=\"uni\">&#x1302C;</span> A39: man on two giraffes",
                    "display": "A39"
                },
                {
                    "id": 151,
                    "text": "A4: seated man with hands raised",
                    "html": "<span class=\"uni\">&#x13003;</span> A4: seated man with hands raised",
                    "display": "A4"
                },
                {
                    "id": 152,
                    "text": "A40: seated god",
                    "html": "<span class=\"uni\">&#x1302D;</span> A40: seated god",
                    "display": "A40"
                },
                {
                    "id": 153,
                    "text": "A405",
                    "html": "A405",
                    "display": "A405"
                },
                {
                    "id": 154,
                    "text": "A406",
                    "html": "A406",
                    "display": "A406"
                },
                {
                    "id": 155,
                    "text": "A409",
                    "html": "A409",
                    "display": "A409"
                },
                {
                    "id": 156,
                    "text": "A40A: seated god with S40",
                    "html": "<span class=\"uni\">&#x1302E;</span> A40A: seated god with S40",
                    "display": "A40a"
                },
                {
                    "id": 157,
                    "text": "A40B: seated god",
                    "html": "A40B: seated god",
                    "display": "A40b"
                },
                {
                    "id": 158,
                    "text": "A40D: seated god",
                    "html": "A40D: seated god",
                    "display": "A40d"
                },
                {
                    "id": 159,
                    "text": "A41: king with uraeus",
                    "html": "<span class=\"uni\">&#x1302F;</span> A41: king with uraeus",
                    "display": "A41"
                },
                {
                    "id": 160,
                    "text": "A410",
                    "html": "A410",
                    "display": "A410"
                },
                {
                    "id": 161,
                    "text": "A413",
                    "html": "A413",
                    "display": "A413"
                },
                {
                    "id": 162,
                    "text": "A414",
                    "html": "A414",
                    "display": "A414"
                },
                {
                    "id": 163,
                    "text": "A415",
                    "html": "A415",
                    "display": "A415"
                },
                {
                    "id": 164,
                    "text": "A417",
                    "html": "A417",
                    "display": "A417"
                },
                {
                    "id": 165,
                    "text": "A42: king with uraeus and S45",
                    "html": "<span class=\"uni\">&#x13030;</span> A42: king with uraeus and S45",
                    "display": "A42"
                },
                {
                    "id": 166,
                    "text": "A424",
                    "html": "A424",
                    "display": "A424"
                },
                {
                    "id": 167,
                    "text": "A425",
                    "html": "A425",
                    "display": "A425"
                },
                {
                    "id": 168,
                    "text": "A42A: king with uraeus and S45",
                    "html": "<span class=\"uni\">&#x13031;</span> A42A: king with uraeus and S45",
                    "display": "A42a"
                },
                {
                    "id": 169,
                    "text": "A42C: king with uraeus and S45",
                    "html": "A42C: king with uraeus and S45",
                    "display": "A42c"
                },
                {
                    "id": 170,
                    "text": "A43: king wearing S1",
                    "html": "<span class=\"uni\">&#x13032;</span> A43: king wearing S1",
                    "display": "A43"
                },
                {
                    "id": 171,
                    "text": "A43B: king wearing S1",
                    "html": "A43B: king wearing S1",
                    "display": "A43b"
                },
                {
                    "id": 172,
                    "text": "A43E: king wearing S1",
                    "html": "A43E: king wearing S1",
                    "display": "A43e"
                },
                {
                    "id": 173,
                    "text": "A44: king wearing S1 with S45",
                    "html": "<span class=\"uni\">&#x13034;</span> A44: king wearing S1 with S45",
                    "display": "A44"
                },
                {
                    "id": 174,
                    "text": "A45: king wearing S3",
                    "html": "<span class=\"uni\">&#x13035;</span> A45: king wearing S3",
                    "display": "A45"
                },
                {
                    "id": 175,
                    "text": "A450",
                    "html": "A450",
                    "display": "A450"
                },
                {
                    "id": 176,
                    "text": "A459",
                    "html": "A459",
                    "display": "A459"
                },
                {
                    "id": 177,
                    "text": "A45A: king wearing S3 with S40",
                    "html": "<span class=\"uni\">&#x13036;</span> A45A: king wearing S3 with S40",
                    "display": "A45a"
                },
                {
                    "id": 178,
                    "text": "A462",
                    "html": "A462",
                    "display": "A462"
                },
                {
                    "id": 179,
                    "text": "A463A",
                    "html": "A463A",
                    "display": "A463a"
                },
                {
                    "id": 180,
                    "text": "A466",
                    "html": "A466",
                    "display": "A466"
                },
                {
                    "id": 181,
                    "text": "A47: shepherd seated and wrapped in mantle, holding stick [iry]",
                    "html": "<span class=\"uni\">&#x13038;</span> A47: shepherd seated and wrapped in mantle, holding stick",
                    "display": "A47"
                },
                {
                    "id": 182,
                    "text": "A473",
                    "html": "A473",
                    "display": "A473"
                },
                {
                    "id": 183,
                    "text": "A478A",
                    "html": "A478A",
                    "display": "A478a"
                },
                {
                    "id": 184,
                    "text": "A48: beardless man seated and holding knife",
                    "html": "<span class=\"uni\">&#x13039;</span> A48: beardless man seated and holding knife",
                    "display": "A48"
                },
                {
                    "id": 185,
                    "text": "A482",
                    "html": "A482",
                    "display": "A482"
                },
                {
                    "id": 186,
                    "text": "A487",
                    "html": "A487",
                    "display": "A487"
                },
                {
                    "id": 187,
                    "text": "A49: seated Syrian holding stick",
                    "html": "<span class=\"uni\">&#x1303A;</span> A49: seated Syrian holding stick",
                    "display": "A49"
                },
                {
                    "id": 188,
                    "text": "A4A: seated man with hands raised",
                    "html": "A4A: seated man with hands raised",
                    "display": "A4a"
                },
                {
                    "id": 189,
                    "text": "A4B: seated man with hands raised",
                    "html": "A4B: seated man with hands raised",
                    "display": "A4b"
                },
                {
                    "id": 190,
                    "text": "A4C: seated man with hands raised",
                    "html": "A4C: seated man with hands raised",
                    "display": "A4c"
                },
                {
                    "id": 191,
                    "text": "A5: crouching man hiding behind wall",
                    "html": "<span class=\"uni\">&#x13004;</span> A5: crouching man hiding behind wall",
                    "display": "A5"
                },
                {
                    "id": 192,
                    "text": "A50: noble on chair [Sps]",
                    "html": "<span class=\"uni\">&#x1303B;</span> A50: noble on chair",
                    "display": "A50"
                },
                {
                    "id": 193,
                    "text": "A51: noble on chair with S45 [Spsi]",
                    "html": "<span class=\"uni\">&#x1303C;</span> A51: noble on chair with S45",
                    "display": "A51"
                },
                {
                    "id": 194,
                    "text": "A51A: noble on chair with S45",
                    "html": "A51A: noble on chair with S45",
                    "display": "A51a"
                },
                {
                    "id": 195,
                    "text": "A51F: noble on chair with S45",
                    "html": "A51F: noble on chair with S45",
                    "display": "A51f"
                },
                {
                    "id": 196,
                    "text": "A52: noble squatting with S45",
                    "html": "<span class=\"uni\">&#x1303D;</span> A52: noble squatting with S45",
                    "display": "A52"
                },
                {
                    "id": 197,
                    "text": "A52AA: noble squatting with S45",
                    "html": "A52AA: noble squatting with S45",
                    "display": "A52aa"
                },
                {
                    "id": 198,
                    "text": "A53: standing mummy",
                    "html": "<span class=\"uni\">&#x1303E;</span> A53: standing mummy",
                    "display": "A53"
                },
                {
                    "id": 199,
                    "text": "A54: lying mummy",
                    "html": "<span class=\"uni\">&#x1303F;</span> A54: lying mummy",
                    "display": "A54"
                },
                {
                    "id": 200,
                    "text": "A55: mummy on bed",
                    "html": "<span class=\"uni\">&#x13040;</span> A55: mummy on bed",
                    "display": "A55"
                },
                {
                    "id": 201,
                    "text": "A55A: mummy on bed",
                    "html": "A55A: mummy on bed",
                    "display": "A55a"
                },
                {
                    "id": 202,
                    "text": "A56: seated man holding stick",
                    "html": "<span class=\"uni\">&#x13041;</span> A56: seated man holding stick",
                    "display": "A56"
                },
                {
                    "id": 203,
                    "text": "A57: man holding R4",
                    "html": "<span class=\"uni\">&#x13042;</span> A57: man holding R4",
                    "display": "A57"
                },
                {
                    "id": 204,
                    "text": "A58: man applying hoe to ground",
                    "html": "<span class=\"uni\">&#x13043;</span> A58: man applying hoe to ground",
                    "display": "A58"
                },
                {
                    "id": 205,
                    "text": "A58A: man applying hoe to ground",
                    "html": "A58A: man applying hoe to ground",
                    "display": "A58a"
                },
                {
                    "id": 206,
                    "text": "A58B: man applying hoe to ground",
                    "html": "A58B: man applying hoe to ground",
                    "display": "A58b"
                },
                {
                    "id": 207,
                    "text": "A59: man threatening with stick",
                    "html": "<span class=\"uni\">&#x13044;</span> A59: man threatening with stick",
                    "display": "A59"
                },
                {
                    "id": 208,
                    "text": "A59A: man threatening with stick",
                    "html": "A59A: man threatening with stick",
                    "display": "A59a"
                },
                {
                    "id": 209,
                    "text": "A59B: man threatening with stick",
                    "html": "A59B: man threatening with stick",
                    "display": "A59b"
                },
                {
                    "id": 210,
                    "text": "A5A: seated man hiding behind wall",
                    "html": "<span class=\"uni\">&#x13005;</span> A5A: seated man hiding behind wall",
                    "display": "A5a"
                },
                {
                    "id": 211,
                    "text": "A6: seated man under vase from which water flows",
                    "html": "<span class=\"uni\">&#x13006;</span> A6: seated man under vase from which water flows",
                    "display": "A6"
                },
                {
                    "id": 212,
                    "text": "A60: man sowing seeds",
                    "html": "<span class=\"uni\">&#x13045;</span> A60: man sowing seeds",
                    "display": "A60"
                },
                {
                    "id": 213,
                    "text": "A61: man looking over his shoulder",
                    "html": "<span class=\"uni\">&#x13046;</span> A61: man looking over his shoulder",
                    "display": "A61"
                },
                {
                    "id": 214,
                    "text": "A6A: seated man reaching for libation stone, under vase from which water flows",
                    "html": "<span class=\"uni\">&#x13007;</span> A6A: seated man reaching for libation stone, under vase from which water flows",
                    "display": "A6a"
                },
                {
                    "id": 215,
                    "text": "A6K: seated man under vase from which water flows",
                    "html": "A6K: seated man under vase from which water flows",
                    "display": "A6k"
                },
                {
                    "id": 216,
                    "text": "A7: fatigued man",
                    "html": "<span class=\"uni\">&#x13009;</span> A7: fatigued man",
                    "display": "A7"
                },
                {
                    "id": 217,
                    "text": "A71",
                    "html": "A71",
                    "display": "A71"
                },
                {
                    "id": 218,
                    "text": "A73",
                    "html": "A73",
                    "display": "A73"
                },
                {
                    "id": 219,
                    "text": "A75",
                    "html": "A75",
                    "display": "A75"
                },
                {
                    "id": 220,
                    "text": "A76C",
                    "html": "A76C",
                    "display": "A76c"
                },
                {
                    "id": 221,
                    "text": "A78",
                    "html": "A78",
                    "display": "A78"
                },
                {
                    "id": 222,
                    "text": "A7A: fatigued man",
                    "html": "A7A: fatigued man",
                    "display": "A7a"
                },
                {
                    "id": 223,
                    "text": "A8: man performing <span class=\"trans\">hnw</span>-rite",
                    "html": "<span class=\"uni\">&#x1300A;</span> A8: man performing <span class=\"trans\">hnw</span>-rite",
                    "display": "A8"
                },
                {
                    "id": 224,
                    "text": "A80",
                    "html": "A80",
                    "display": "A80"
                },
                {
                    "id": 225,
                    "text": "A81",
                    "html": "A81",
                    "display": "A81"
                },
                {
                    "id": 226,
                    "text": "A82",
                    "html": "A82",
                    "display": "A82"
                },
                {
                    "id": 227,
                    "text": "A84",
                    "html": "A84",
                    "display": "A84"
                },
                {
                    "id": 228,
                    "text": "A85",
                    "html": "A85",
                    "display": "A85"
                },
                {
                    "id": 229,
                    "text": "A87",
                    "html": "A87",
                    "display": "A87"
                },
                {
                    "id": 230,
                    "text": "A88",
                    "html": "A88",
                    "display": "A88"
                },
                {
                    "id": 231,
                    "text": "A9: seated man with W10 on head",
                    "html": "<span class=\"uni\">&#x1300B;</span> A9: seated man with W10 on head",
                    "display": "A9"
                },
                {
                    "id": 232,
                    "text": "A90",
                    "html": "A90",
                    "display": "A90"
                },
                {
                    "id": 233,
                    "text": "A90C",
                    "html": "A90C",
                    "display": "A90c"
                },
                {
                    "id": 234,
                    "text": "A90D",
                    "html": "A90D",
                    "display": "A90d"
                },
                {
                    "id": 235,
                    "text": "A95",
                    "html": "A95",
                    "display": "A95"
                },
                {
                    "id": 236,
                    "text": "A96",
                    "html": "A96",
                    "display": "A96"
                },
                {
                    "id": 237,
                    "text": "A97",
                    "html": "A97",
                    "display": "A97"
                },
                {
                    "id": 238,
                    "text": "A98",
                    "html": "A98",
                    "display": "A98"
                }
            ]
        },
        {
            "text": "B: Woman and her Activities",
            "children": [
                {
                    "id": 239,
                    "text": "B1: seated woman",
                    "html": "<span class=\"uni\">&#x13050;</span> B1: seated woman",
                    "display": "B1"
                },
                {
                    "id": 240,
                    "text": "B12",
                    "html": "B12",
                    "display": "B12"
                },
                {
                    "id": 241,
                    "text": "B13A",
                    "html": "B13A",
                    "display": "B13a"
                },
                {
                    "id": 242,
                    "text": "B18",
                    "html": "B18",
                    "display": "B18"
                },
                {
                    "id": 243,
                    "text": "B18A",
                    "html": "B18A",
                    "display": "B18a"
                },
                {
                    "id": 244,
                    "text": "B19",
                    "html": "B19",
                    "display": "B19"
                },
                {
                    "id": 245,
                    "text": "B1A: seated woman",
                    "html": "B1A: seated woman",
                    "display": "B1a"
                },
                {
                    "id": 246,
                    "text": "B1G: seated woman",
                    "html": "B1G: seated woman",
                    "display": "B1g"
                },
                {
                    "id": 247,
                    "text": "B1H: seated woman",
                    "html": "B1H: seated woman",
                    "display": "B1h"
                },
                {
                    "id": 248,
                    "text": "B2: pregnant woman",
                    "html": "<span class=\"uni\">&#x13051;</span> B2: pregnant woman",
                    "display": "B2"
                },
                {
                    "id": 249,
                    "text": "B21B",
                    "html": "B21B",
                    "display": "B21b"
                },
                {
                    "id": 250,
                    "text": "B24",
                    "html": "B24",
                    "display": "B24"
                },
                {
                    "id": 251,
                    "text": "B28",
                    "html": "B28",
                    "display": "B28"
                },
                {
                    "id": 252,
                    "text": "B2A: pregnant woman",
                    "html": "B2A: pregnant woman",
                    "display": "B2a"
                },
                {
                    "id": 253,
                    "text": "B3: woman giving birth [msi]",
                    "html": "<span class=\"uni\">&#x13052;</span> B3: woman giving birth",
                    "display": "B3"
                },
                {
                    "id": 254,
                    "text": "B37",
                    "html": "B37",
                    "display": "B37"
                },
                {
                    "id": 255,
                    "text": "B39A",
                    "html": "B39A",
                    "display": "B39a"
                },
                {
                    "id": 256,
                    "text": "B4: combination of B3 and F31",
                    "html": "<span class=\"uni\">&#x13053;</span> B4: combination of B3 and F31",
                    "display": "B4"
                },
                {
                    "id": 257,
                    "text": "B45A",
                    "html": "B45A",
                    "display": "B45a"
                },
                {
                    "id": 258,
                    "text": "B47",
                    "html": "B47",
                    "display": "B47"
                },
                {
                    "id": 259,
                    "text": "B5: woman suckling child",
                    "html": "<span class=\"uni\">&#x13054;</span> B5: woman suckling child",
                    "display": "B5"
                },
                {
                    "id": 260,
                    "text": "B53",
                    "html": "B53",
                    "display": "B53"
                },
                {
                    "id": 261,
                    "text": "B59",
                    "html": "B59",
                    "display": "B59"
                },
                {
                    "id": 262,
                    "text": "B5D: woman suckling child",
                    "html": "B5D: woman suckling child",
                    "display": "B5d"
                },
                {
                    "id": 263,
                    "text": "B6: woman on chair with child on lap",
                    "html": "<span class=\"uni\">&#x13056;</span> B6: woman on chair with child on lap",
                    "display": "B6"
                },
                {
                    "id": 264,
                    "text": "B64",
                    "html": "B64",
                    "display": "B64"
                },
                {
                    "id": 265,
                    "text": "B73",
                    "html": "B73",
                    "display": "B73"
                },
                {
                    "id": 266,
                    "text": "B76",
                    "html": "B76",
                    "display": "B76"
                },
                {
                    "id": 267,
                    "text": "B77",
                    "html": "B77",
                    "display": "B77"
                },
                {
                    "id": 268,
                    "text": "B77A",
                    "html": "B77A",
                    "display": "B77a"
                },
                {
                    "id": 269,
                    "text": "B7A: queen wearing diadem and holding flower",
                    "html": "B7A: queen wearing diadem and holding flower",
                    "display": "B7a"
                },
                {
                    "id": 270,
                    "text": "B7C: queen wearing diadem and holding flower",
                    "html": "B7C: queen wearing diadem and holding flower",
                    "display": "B7c"
                },
                {
                    "id": 271,
                    "text": "B7E: queen wearing diadem and holding flower",
                    "html": "B7E: queen wearing diadem and holding flower",
                    "display": "B7e"
                },
                {
                    "id": 272,
                    "text": "B8F: woman holding M9",
                    "html": "B8F: woman holding M9",
                    "display": "B8f"
                },
                {
                    "id": 273,
                    "text": "B8G: woman holding M9",
                    "html": "B8G: woman holding M9",
                    "display": "B8g"
                }
            ]
        },
        {
            "text": "C: Anthropomorphic Deities",
            "children": [
                {
                    "id": 274,
                    "text": "C1: god with N6",
                    "html": "<span class=\"uni\">&#x1305A;</span> C1: god with N6",
                    "display": "C1"
                },
                {
                    "id": 275,
                    "text": "C10: goddess with feather on head [mAat]",
                    "html": "<span class=\"uni\">&#x13066;</span> C10: goddess with feather on head",
                    "display": "C10"
                },
                {
                    "id": 276,
                    "text": "C104",
                    "html": "C104",
                    "display": "C104"
                },
                {
                    "id": 277,
                    "text": "C10A: goddess with feather on head holding S34",
                    "html": "<span class=\"uni\">&#x13067;</span> C10A: goddess with feather on head holding S34",
                    "display": "C10a"
                },
                {
                    "id": 278,
                    "text": "C11: god with arms supporting (the sky) and M4 on head [HH]",
                    "html": "<span class=\"uni\">&#x13068;</span> C11: god with arms supporting (the sky) and M4 on head",
                    "display": "C11"
                },
                {
                    "id": 279,
                    "text": "C111C",
                    "html": "C111C",
                    "display": "C111c"
                },
                {
                    "id": 280,
                    "text": "C114A",
                    "html": "C114A",
                    "display": "C114a"
                },
                {
                    "id": 281,
                    "text": "C118",
                    "html": "C118",
                    "display": "C118"
                },
                {
                    "id": 282,
                    "text": "C12A: god with S9 and S40",
                    "html": "C12A: god with S9 and S40",
                    "display": "C12a"
                },
                {
                    "id": 283,
                    "text": "C12K: god with S9 and S40",
                    "html": "C12K: god with S9 and S40",
                    "display": "C12k"
                },
                {
                    "id": 284,
                    "text": "C138",
                    "html": "C138",
                    "display": "C138"
                },
                {
                    "id": 285,
                    "text": "C159",
                    "html": "C159",
                    "display": "C159"
                },
                {
                    "id": 286,
                    "text": "C164",
                    "html": "C164",
                    "display": "C164"
                },
                {
                    "id": 287,
                    "text": "C17: god with head of falcon and S9",
                    "html": "<span class=\"uni\">&#x1306E;</span> C17: god with head of falcon and S9",
                    "display": "C17"
                },
                {
                    "id": 288,
                    "text": "C190",
                    "html": "C190",
                    "display": "C190"
                },
                {
                    "id": 289,
                    "text": "C195A",
                    "html": "C195A",
                    "display": "C195a"
                },
                {
                    "id": 290,
                    "text": "C19C: mummy-shaped god",
                    "html": "C19C: mummy-shaped god",
                    "display": "C19c"
                },
                {
                    "id": 291,
                    "text": "C2: god with head of falcon with sun on head and holding S34",
                    "html": "<span class=\"uni\">&#x1305B;</span> C2: god with head of falcon with sun on head and holding S34",
                    "display": "C2"
                },
                {
                    "id": 292,
                    "text": "C20: mummy-shaped god in shrine",
                    "html": "<span class=\"uni\">&#x13071;</span> C20: mummy-shaped god in shrine",
                    "display": "C20"
                },
                {
                    "id": 293,
                    "text": "C219",
                    "html": "C219",
                    "display": "C219"
                },
                {
                    "id": 294,
                    "text": "C229",
                    "html": "C229",
                    "display": "C229"
                },
                {
                    "id": 295,
                    "text": "C232",
                    "html": "C232",
                    "display": "C232"
                },
                {
                    "id": 296,
                    "text": "C248",
                    "html": "C248",
                    "display": "C248"
                },
                {
                    "id": 297,
                    "text": "C2A: god with head of falcon with sun on head",
                    "html": "<span class=\"uni\">&#x1305C;</span> C2A: god with head of falcon with sun on head",
                    "display": "C2a"
                },
                {
                    "id": 298,
                    "text": "C3: god with head of ibis [DHwty]",
                    "html": "<span class=\"uni\">&#x1305F;</span> C3: god with head of ibis",
                    "display": "C3"
                },
                {
                    "id": 299,
                    "text": "C35",
                    "html": "C35",
                    "display": "C35"
                },
                {
                    "id": 300,
                    "text": "C4: god with head of ram [Xnmw]",
                    "html": "<span class=\"uni\">&#x13060;</span> C4: god with head of ram",
                    "display": "C4"
                },
                {
                    "id": 301,
                    "text": "C6: god with head of jackal [inpw]",
                    "html": "<span class=\"uni\">&#x13062;</span> C6: god with head of jackal",
                    "display": "C6"
                },
                {
                    "id": 302,
                    "text": "C7: god with head of Seth-animal [stX]",
                    "html": "<span class=\"uni\">&#x13063;</span> C7: god with head of Seth-animal",
                    "display": "C7"
                },
                {
                    "id": 303,
                    "text": "C8A: ithyphallic god with S9, uplifted arm and S45",
                    "html": "C8A: ithyphallic god with S9, uplifted arm and S45",
                    "display": "C8a"
                },
                {
                    "id": 304,
                    "text": "C9: goddess with sun and horns",
                    "html": "<span class=\"uni\">&#x13065;</span> C9: goddess with sun and horns",
                    "display": "C9"
                },
                {
                    "id": 305,
                    "text": "C98A",
                    "html": "C98A",
                    "display": "C98a"
                },
                {
                    "id": 306,
                    "text": "C98B",
                    "html": "C98B",
                    "display": "C98b"
                },
                {
                    "id": 307,
                    "text": "C99B",
                    "html": "C99B",
                    "display": "C99b"
                },
                {
                    "id": 308,
                    "text": "C9A: goddess with sun and horns",
                    "html": "C9A: goddess with sun and horns",
                    "display": "C9a"
                },
                {
                    "id": 309,
                    "text": "C9I: goddess with sun and horns",
                    "html": "C9I: goddess with sun and horns",
                    "display": "C9i"
                }
            ]
        },
        {
            "text": "D: Parts of the Human Body",
            "children": [
                {
                    "id": 310,
                    "text": "D1: head in profile [tp]",
                    "html": "<span class=\"uni\">&#x13076;</span> D1: head in profile",
                    "display": "D1"
                },
                {
                    "id": 311,
                    "text": "D10: <span class=\"trans\">wDAt</span>-eye [wDAt]",
                    "html": "<span class=\"uni\">&#x13080;</span> D10: <span class=\"trans\">wDAt</span>-eye",
                    "display": "D10"
                },
                {
                    "id": 312,
                    "text": "D100",
                    "html": "D100",
                    "display": "D100"
                },
                {
                    "id": 313,
                    "text": "D101",
                    "html": "D101",
                    "display": "D101"
                },
                {
                    "id": 314,
                    "text": "D105",
                    "html": "D105",
                    "display": "D105"
                },
                {
                    "id": 315,
                    "text": "D106",
                    "html": "D106",
                    "display": "D106"
                },
                {
                    "id": 316,
                    "text": "D108",
                    "html": "D108",
                    "display": "D108"
                },
                {
                    "id": 317,
                    "text": "D109",
                    "html": "D109",
                    "display": "D109"
                },
                {
                    "id": 318,
                    "text": "D10C: <span class=\"trans\">wDAt</span>-eye",
                    "html": "D10C: <span class=\"trans\">wDAt</span>-eye",
                    "display": "D10c"
                },
                {
                    "id": 319,
                    "text": "D11: left part of white of D10 [narrow]",
                    "html": "<span class=\"uni\">&#x13081;</span> D11: left part of white of D10",
                    "display": "D11"
                },
                {
                    "id": 320,
                    "text": "D113",
                    "html": "D113",
                    "display": "D113"
                },
                {
                    "id": 321,
                    "text": "D115",
                    "html": "D115",
                    "display": "D115"
                },
                {
                    "id": 322,
                    "text": "D117",
                    "html": "D117",
                    "display": "D117"
                },
                {
                    "id": 323,
                    "text": "D118",
                    "html": "D118",
                    "display": "D118"
                },
                {
                    "id": 324,
                    "text": "D12: pupil of eye [narrow]",
                    "html": "<span class=\"uni\">&#x13082;</span> D12: pupil of eye",
                    "display": "D12"
                },
                {
                    "id": 325,
                    "text": "D120",
                    "html": "D120",
                    "display": "D120"
                },
                {
                    "id": 326,
                    "text": "D126",
                    "html": "D126",
                    "display": "D126"
                },
                {
                    "id": 327,
                    "text": "D128",
                    "html": "D128",
                    "display": "D128"
                },
                {
                    "id": 328,
                    "text": "D13: eye-brow [broad]",
                    "html": "<span class=\"uni\">&#x13083;</span> D13: eye-brow",
                    "display": "D13"
                },
                {
                    "id": 329,
                    "text": "D130",
                    "html": "D130",
                    "display": "D130"
                },
                {
                    "id": 330,
                    "text": "D131",
                    "html": "D131",
                    "display": "D131"
                },
                {
                    "id": 331,
                    "text": "D132",
                    "html": "D132",
                    "display": "D132"
                },
                {
                    "id": 332,
                    "text": "D133",
                    "html": "D133",
                    "display": "D133"
                },
                {
                    "id": 333,
                    "text": "D134",
                    "html": "D134",
                    "display": "D134"
                },
                {
                    "id": 334,
                    "text": "D14: right part of white of D10 [broad]",
                    "html": "<span class=\"uni\">&#x13084;</span> D14: right part of white of D10",
                    "display": "D14"
                },
                {
                    "id": 335,
                    "text": "D141",
                    "html": "D141",
                    "display": "D141"
                },
                {
                    "id": 336,
                    "text": "D143",
                    "html": "D143",
                    "display": "D143"
                },
                {
                    "id": 337,
                    "text": "D143B",
                    "html": "D143B",
                    "display": "D143b"
                },
                {
                    "id": 338,
                    "text": "D146",
                    "html": "D146",
                    "display": "D146"
                },
                {
                    "id": 339,
                    "text": "D147",
                    "html": "D147",
                    "display": "D147"
                },
                {
                    "id": 340,
                    "text": "D15: diagonal marking of D10 [broad]",
                    "html": "<span class=\"uni\">&#x13085;</span> D15: diagonal marking of D10",
                    "display": "D15"
                },
                {
                    "id": 341,
                    "text": "D152",
                    "html": "D152",
                    "display": "D152"
                },
                {
                    "id": 342,
                    "text": "D153",
                    "html": "D153",
                    "display": "D153"
                },
                {
                    "id": 343,
                    "text": "D154",
                    "html": "D154",
                    "display": "D154"
                },
                {
                    "id": 344,
                    "text": "D154A",
                    "html": "D154A",
                    "display": "D154a"
                },
                {
                    "id": 345,
                    "text": "D156",
                    "html": "D156",
                    "display": "D156"
                },
                {
                    "id": 346,
                    "text": "D159",
                    "html": "D159",
                    "display": "D159"
                },
                {
                    "id": 347,
                    "text": "D16: vertical marking of D10 [tall]",
                    "html": "<span class=\"uni\">&#x13086;</span> D16: vertical marking of D10",
                    "display": "D16"
                },
                {
                    "id": 348,
                    "text": "D17: combination of D16 and D15 [broad]",
                    "html": "<span class=\"uni\">&#x13087;</span> D17: combination of D16 and D15",
                    "display": "D17"
                },
                {
                    "id": 349,
                    "text": "D170A",
                    "html": "D170A",
                    "display": "D170a"
                },
                {
                    "id": 350,
                    "text": "D18: ear",
                    "html": "<span class=\"uni\">&#x13088;</span> D18: ear",
                    "display": "D18"
                },
                {
                    "id": 351,
                    "text": "D189",
                    "html": "D189",
                    "display": "D189"
                },
                {
                    "id": 352,
                    "text": "D19: nose, eye and cheek [fnD]",
                    "html": "<span class=\"uni\">&#x13089;</span> D19: nose, eye and cheek",
                    "display": "D19"
                },
                {
                    "id": 353,
                    "text": "D190",
                    "html": "D190",
                    "display": "D190"
                },
                {
                    "id": 354,
                    "text": "D191",
                    "html": "D191",
                    "display": "D191"
                },
                {
                    "id": 355,
                    "text": "D193",
                    "html": "D193",
                    "display": "D193"
                },
                {
                    "id": 356,
                    "text": "D2: face [Hr]",
                    "html": "<span class=\"uni\">&#x13077;</span> D2: face",
                    "display": "D2"
                },
                {
                    "id": 357,
                    "text": "D20: nose, eye and cheek in semi-cursive form",
                    "html": "<span class=\"uni\">&#x1308A;</span> D20: nose, eye and cheek in semi-cursive form",
                    "display": "D20"
                },
                {
                    "id": 358,
                    "text": "D200",
                    "html": "D200",
                    "display": "D200"
                },
                {
                    "id": 359,
                    "text": "D206",
                    "html": "D206",
                    "display": "D206"
                },
                {
                    "id": 360,
                    "text": "D207",
                    "html": "D207",
                    "display": "D207"
                },
                {
                    "id": 361,
                    "text": "D21: mouth [broad] [r]",
                    "html": "<span class=\"uni\">&#x1308B;</span> D21: mouth",
                    "display": "D21"
                },
                {
                    "id": 362,
                    "text": "D210",
                    "html": "D210",
                    "display": "D210"
                },
                {
                    "id": 363,
                    "text": "D212A",
                    "html": "D212A",
                    "display": "D212a"
                },
                {
                    "id": 364,
                    "text": "D217",
                    "html": "D217",
                    "display": "D217"
                },
                {
                    "id": 365,
                    "text": "D218",
                    "html": "D218",
                    "display": "D218"
                },
                {
                    "id": 366,
                    "text": "D22: mouth with two strokes [broad]",
                    "html": "<span class=\"uni\">&#x1308C;</span> D22: mouth with two strokes",
                    "display": "D22"
                },
                {
                    "id": 367,
                    "text": "D228",
                    "html": "D228",
                    "display": "D228"
                },
                {
                    "id": 368,
                    "text": "D23: mouth with three strokes",
                    "html": "<span class=\"uni\">&#x1308D;</span> D23: mouth with three strokes",
                    "display": "D23"
                },
                {
                    "id": 369,
                    "text": "D235",
                    "html": "D235",
                    "display": "D235"
                },
                {
                    "id": 370,
                    "text": "D24: upper lip with teeth [broad] [spt]",
                    "html": "<span class=\"uni\">&#x1308E;</span> D24: upper lip with teeth",
                    "display": "D24"
                },
                {
                    "id": 371,
                    "text": "D245",
                    "html": "D245",
                    "display": "D245"
                },
                {
                    "id": 372,
                    "text": "D248",
                    "html": "D248",
                    "display": "D248"
                },
                {
                    "id": 373,
                    "text": "D249",
                    "html": "D249",
                    "display": "D249"
                },
                {
                    "id": 374,
                    "text": "D25: lips with teeth [broad] [spty]",
                    "html": "<span class=\"uni\">&#x1308F;</span> D25: lips with teeth",
                    "display": "D25"
                },
                {
                    "id": 375,
                    "text": "D253",
                    "html": "D253",
                    "display": "D253"
                },
                {
                    "id": 376,
                    "text": "D254",
                    "html": "D254",
                    "display": "D254"
                },
                {
                    "id": 377,
                    "text": "D258",
                    "html": "D258",
                    "display": "D258"
                },
                {
                    "id": 378,
                    "text": "D26: liquid issuing from lips [narrow]",
                    "html": "<span class=\"uni\">&#x13090;</span> D26: liquid issuing from lips",
                    "display": "D26"
                },
                {
                    "id": 379,
                    "text": "D266",
                    "html": "D266",
                    "display": "D266"
                },
                {
                    "id": 380,
                    "text": "D267",
                    "html": "D267",
                    "display": "D267"
                },
                {
                    "id": 381,
                    "text": "D26A: liquid issuing from lips",
                    "html": "D26A: liquid issuing from lips",
                    "display": "D26a"
                },
                {
                    "id": 382,
                    "text": "D26B: liquid issuing from lips",
                    "html": "D26B: liquid issuing from lips",
                    "display": "D26b"
                },
                {
                    "id": 383,
                    "text": "D27: small breast [mnD]",
                    "html": "<span class=\"uni\">&#x13091;</span> D27: small breast",
                    "display": "D27"
                },
                {
                    "id": 384,
                    "text": "D271",
                    "html": "D271",
                    "display": "D271"
                },
                {
                    "id": 385,
                    "text": "D272",
                    "html": "D272",
                    "display": "D272"
                },
                {
                    "id": 386,
                    "text": "D27A: large breast",
                    "html": "<span class=\"uni\">&#x13092;</span> D27A: large breast",
                    "display": "D27a"
                },
                {
                    "id": 387,
                    "text": "D28: arms in <span class=\"trans\">kA</span>-posture [kA]",
                    "html": "<span class=\"uni\">&#x13093;</span> D28: arms in <span class=\"trans\">kA</span>-posture",
                    "display": "D28"
                },
                {
                    "id": 388,
                    "text": "D280",
                    "html": "D280",
                    "display": "D280"
                },
                {
                    "id": 389,
                    "text": "D280A",
                    "html": "D280A",
                    "display": "D280a"
                },
                {
                    "id": 390,
                    "text": "D283",
                    "html": "D283",
                    "display": "D283"
                },
                {
                    "id": 391,
                    "text": "D284",
                    "html": "D284",
                    "display": "D284"
                },
                {
                    "id": 392,
                    "text": "D288",
                    "html": "D288",
                    "display": "D288"
                },
                {
                    "id": 393,
                    "text": "D29: combination of D28 and R12",
                    "html": "<span class=\"uni\">&#x13094;</span> D29: combination of D28 and R12",
                    "display": "D29"
                },
                {
                    "id": 394,
                    "text": "D291",
                    "html": "D291",
                    "display": "D291"
                },
                {
                    "id": 395,
                    "text": "D292",
                    "html": "D292",
                    "display": "D292"
                },
                {
                    "id": 396,
                    "text": "D293",
                    "html": "D293",
                    "display": "D293"
                },
                {
                    "id": 397,
                    "text": "D2A: face",
                    "html": "D2A: face",
                    "display": "D2a"
                },
                {
                    "id": 398,
                    "text": "D3: hair [Sny]",
                    "html": "<span class=\"uni\">&#x13078;</span> D3: hair",
                    "display": "D3"
                },
                {
                    "id": 399,
                    "text": "D30: D28 with tail",
                    "html": "<span class=\"uni\">&#x13095;</span> D30: D28 with tail",
                    "display": "D30"
                },
                {
                    "id": 400,
                    "text": "D304",
                    "html": "D304",
                    "display": "D304"
                },
                {
                    "id": 401,
                    "text": "D307",
                    "html": "D307",
                    "display": "D307"
                },
                {
                    "id": 402,
                    "text": "D31: combination of D32 and U36",
                    "html": "<span class=\"uni\">&#x13096;</span> D31: combination of D32 and U36",
                    "display": "D31"
                },
                {
                    "id": 403,
                    "text": "D310",
                    "html": "D310",
                    "display": "D310"
                },
                {
                    "id": 404,
                    "text": "D312",
                    "html": "D312",
                    "display": "D312"
                },
                {
                    "id": 405,
                    "text": "D313",
                    "html": "D313",
                    "display": "D313"
                },
                {
                    "id": 406,
                    "text": "D318",
                    "html": "D318",
                    "display": "D318"
                },
                {
                    "id": 407,
                    "text": "D32: arms embracing",
                    "html": "<span class=\"uni\">&#x13098;</span> D32: arms embracing",
                    "display": "D32"
                },
                {
                    "id": 408,
                    "text": "D327",
                    "html": "D327",
                    "display": "D327"
                },
                {
                    "id": 409,
                    "text": "D328",
                    "html": "D328",
                    "display": "D328"
                },
                {
                    "id": 410,
                    "text": "D33: arms rowing",
                    "html": "<span class=\"uni\">&#x13099;</span> D33: arms rowing",
                    "display": "D33"
                },
                {
                    "id": 411,
                    "text": "D33B: arms rowing",
                    "html": "D33B: arms rowing",
                    "display": "D33b"
                },
                {
                    "id": 412,
                    "text": "D34: arms holding shield and battle-axe [aHA]",
                    "html": "<span class=\"uni\">&#x1309A;</span> D34: arms holding shield and battle-axe",
                    "display": "D34"
                },
                {
                    "id": 413,
                    "text": "D343",
                    "html": "D343",
                    "display": "D343"
                },
                {
                    "id": 414,
                    "text": "D34A: arms holding shield and mace",
                    "html": "<span class=\"uni\">&#x1309B;</span> D34A: arms holding shield and mace",
                    "display": "D34a"
                },
                {
                    "id": 415,
                    "text": "D35: arms in gesture of negation",
                    "html": "<span class=\"uni\">&#x1309C;</span> D35: arms in gesture of negation",
                    "display": "D35"
                },
                {
                    "id": 416,
                    "text": "D350",
                    "html": "D350",
                    "display": "D350"
                },
                {
                    "id": 417,
                    "text": "D35A: arms in gesture of negation",
                    "html": "D35A: arms in gesture of negation",
                    "display": "D35a"
                },
                {
                    "id": 418,
                    "text": "D36: forearm [a]",
                    "html": "<span class=\"uni\">&#x1309D;</span> D36: forearm",
                    "display": "D36"
                },
                {
                    "id": 419,
                    "text": "D37: forearm with X8",
                    "html": "<span class=\"uni\">&#x1309E;</span> D37: forearm with X8",
                    "display": "D37"
                },
                {
                    "id": 420,
                    "text": "D375",
                    "html": "D375",
                    "display": "D375"
                },
                {
                    "id": 421,
                    "text": "D38: forearm with rounded loaf",
                    "html": "<span class=\"uni\">&#x1309F;</span> D38: forearm with rounded loaf",
                    "display": "D38"
                },
                {
                    "id": 422,
                    "text": "D381",
                    "html": "D381",
                    "display": "D381"
                },
                {
                    "id": 423,
                    "text": "D384",
                    "html": "D384",
                    "display": "D384"
                },
                {
                    "id": 424,
                    "text": "D39: forearm with W24",
                    "html": "<span class=\"uni\">&#x130A0;</span> D39: forearm with W24",
                    "display": "D39"
                },
                {
                    "id": 425,
                    "text": "D396",
                    "html": "D396",
                    "display": "D396"
                },
                {
                    "id": 426,
                    "text": "D3A: hair",
                    "html": "D3A: hair",
                    "display": "D3a"
                },
                {
                    "id": 427,
                    "text": "D4: eye [ir]",
                    "html": "<span class=\"uni\">&#x13079;</span> D4: eye",
                    "display": "D4"
                },
                {
                    "id": 428,
                    "text": "D40: forearm with stick",
                    "html": "<span class=\"uni\">&#x130A1;</span> D40: forearm with stick",
                    "display": "D40"
                },
                {
                    "id": 429,
                    "text": "D403",
                    "html": "D403",
                    "display": "D403"
                },
                {
                    "id": 430,
                    "text": "D41: forearm with palm down and bent upper arm",
                    "html": "<span class=\"uni\">&#x130A2;</span> D41: forearm with palm down and bent upper arm",
                    "display": "D41"
                },
                {
                    "id": 431,
                    "text": "D410",
                    "html": "D410",
                    "display": "D410"
                },
                {
                    "id": 432,
                    "text": "D410A",
                    "html": "D410A",
                    "display": "D410a"
                },
                {
                    "id": 433,
                    "text": "D413",
                    "html": "D413",
                    "display": "D413"
                },
                {
                    "id": 434,
                    "text": "D42: forearm with palm down and straight upper arm",
                    "html": "<span class=\"uni\">&#x130A3;</span> D42: forearm with palm down and straight upper arm",
                    "display": "D42"
                },
                {
                    "id": 435,
                    "text": "D43: forearm with S45",
                    "html": "<span class=\"uni\">&#x130A4;</span> D43: forearm with S45",
                    "display": "D43"
                },
                {
                    "id": 436,
                    "text": "D44: forearm with S42",
                    "html": "<span class=\"uni\">&#x130A5;</span> D44: forearm with S42",
                    "display": "D44"
                },
                {
                    "id": 437,
                    "text": "D45: arm with <span class=\"trans\">nHbt</span>-wand [Dsr]",
                    "html": "<span class=\"uni\">&#x130A6;</span> D45: arm with <span class=\"trans\">nHbt</span>-wand",
                    "display": "D45"
                },
                {
                    "id": 438,
                    "text": "D46: hand [d]",
                    "html": "<span class=\"uni\">&#x130A7;</span> D46: hand",
                    "display": "D46"
                },
                {
                    "id": 439,
                    "text": "D46A: liquid falling from hand",
                    "html": "<span class=\"uni\">&#x130A8;</span> D46A: liquid falling from hand",
                    "display": "D46a"
                },
                {
                    "id": 440,
                    "text": "D46C: hand",
                    "html": "D46C: hand",
                    "display": "D46c"
                },
                {
                    "id": 441,
                    "text": "D46D: hand",
                    "html": "D46D: hand",
                    "display": "D46d"
                },
                {
                    "id": 442,
                    "text": "D47: hand with palm up",
                    "html": "<span class=\"uni\">&#x130A9;</span> D47: hand with palm up",
                    "display": "D47"
                },
                {
                    "id": 443,
                    "text": "D48: hand without thumb [broad]",
                    "html": "<span class=\"uni\">&#x130AA;</span> D48: hand without thumb",
                    "display": "D48"
                },
                {
                    "id": 444,
                    "text": "D49: fist",
                    "html": "<span class=\"uni\">&#x130AC;</span> D49: fist",
                    "display": "D49"
                },
                {
                    "id": 445,
                    "text": "D5: eye touched up with paint",
                    "html": "<span class=\"uni\">&#x1307A;</span> D5: eye touched up with paint",
                    "display": "D5"
                },
                {
                    "id": 446,
                    "text": "D50: finger vertically [Dba]",
                    "html": "<span class=\"uni\">&#x130AD;</span> D50: finger vertically",
                    "display": "D50"
                },
                {
                    "id": 447,
                    "text": "D51: finger horizontally [broad]",
                    "html": "<span class=\"uni\">&#x130B7;</span> D51: finger horizontally",
                    "display": "D51"
                },
                {
                    "id": 448,
                    "text": "D52: phallus [mt]",
                    "html": "<span class=\"uni\">&#x130B8;</span> D52: phallus",
                    "display": "D52"
                },
                {
                    "id": 449,
                    "text": "D52A: combination of D52 and S29",
                    "html": "<span class=\"uni\">&#x130B9;</span> D52A: combination of D52 and S29",
                    "display": "D52a"
                },
                {
                    "id": 450,
                    "text": "D53: liquid issuing from phallus",
                    "html": "<span class=\"uni\">&#x130BA;</span> D53: liquid issuing from phallus",
                    "display": "D53"
                },
                {
                    "id": 451,
                    "text": "D54: legs walking",
                    "html": "<span class=\"uni\">&#x130BB;</span> D54: legs walking",
                    "display": "D54"
                },
                {
                    "id": 452,
                    "text": "D54A: hieratic legs walking",
                    "html": "<span class=\"uni\">&#x130BC;</span> D54A: hieratic legs walking",
                    "display": "D54a"
                },
                {
                    "id": 453,
                    "text": "D55: legs walking backwards",
                    "html": "<span class=\"uni\">&#x130BD;</span> D55: legs walking backwards",
                    "display": "D55"
                },
                {
                    "id": 454,
                    "text": "D56: leg [gHs]",
                    "html": "<span class=\"uni\">&#x130BE;</span> D56: leg",
                    "display": "D56"
                },
                {
                    "id": 455,
                    "text": "D57: combination of D56 and T30",
                    "html": "<span class=\"uni\">&#x130BF;</span> D57: combination of D56 and T30",
                    "display": "D57"
                },
                {
                    "id": 456,
                    "text": "D58: foot [b]",
                    "html": "<span class=\"uni\">&#x130C0;</span> D58: foot",
                    "display": "D58"
                },
                {
                    "id": 457,
                    "text": "D59: combination of D58 and D36 [ab]",
                    "html": "<span class=\"uni\">&#x130C1;</span> D59: combination of D58 and D36",
                    "display": "D59"
                },
                {
                    "id": 458,
                    "text": "D6: eye with painted upper lid",
                    "html": "<span class=\"uni\">&#x1307B;</span> D6: eye with painted upper lid",
                    "display": "D6"
                },
                {
                    "id": 459,
                    "text": "D60: D58 under vase from which water flows [wab]",
                    "html": "<span class=\"uni\">&#x130C2;</span> D60: D58 under vase from which water flows",
                    "display": "D60"
                },
                {
                    "id": 460,
                    "text": "D61: three toes oriented leftward [sAH]",
                    "html": "<span class=\"uni\">&#x130C3;</span> D61: three toes oriented leftward",
                    "display": "D61"
                },
                {
                    "id": 461,
                    "text": "D62: three toes oriented rightward",
                    "html": "<span class=\"uni\">&#x130C4;</span> D62: three toes oriented rightward",
                    "display": "D62"
                },
                {
                    "id": 462,
                    "text": "D63: two toes oriented leftward",
                    "html": "<span class=\"uni\">&#x130C5;</span> D63: two toes oriented leftward",
                    "display": "D63"
                },
                {
                    "id": 463,
                    "text": "D65: lock of hair",
                    "html": "<span class=\"uni\">&#x130C7;</span> D65: lock of hair",
                    "display": "D65"
                },
                {
                    "id": 464,
                    "text": "D68",
                    "html": "D68",
                    "display": "D68"
                },
                {
                    "id": 465,
                    "text": "D69",
                    "html": "D69",
                    "display": "D69"
                },
                {
                    "id": 466,
                    "text": "D7: eye with painted lower lid",
                    "html": "<span class=\"uni\">&#x1307C;</span> D7: eye with painted lower lid",
                    "display": "D7"
                },
                {
                    "id": 467,
                    "text": "D77",
                    "html": "D77",
                    "display": "D77"
                },
                {
                    "id": 468,
                    "text": "D78",
                    "html": "D78",
                    "display": "D78"
                },
                {
                    "id": 469,
                    "text": "D79",
                    "html": "D79",
                    "display": "D79"
                },
                {
                    "id": 470,
                    "text": "D7A: eye with painted lower lid",
                    "html": "D7A: eye with painted lower lid",
                    "display": "D7a"
                },
                {
                    "id": 471,
                    "text": "D7C: eye with painted lower lid",
                    "html": "D7C: eye with painted lower lid",
                    "display": "D7c"
                },
                {
                    "id": 472,
                    "text": "D7D: eye with painted lower lid",
                    "html": "D7D: eye with painted lower lid",
                    "display": "D7d"
                },
                {
                    "id": 473,
                    "text": "D8: eye enclosed in N18",
                    "html": "<span class=\"uni\">&#x1307D;</span> D8: eye enclosed in N18",
                    "display": "D8"
                },
                {
                    "id": 474,
                    "text": "D81",
                    "html": "D81",
                    "display": "D81"
                },
                {
                    "id": 475,
                    "text": "D82",
                    "html": "D82",
                    "display": "D82"
                },
                {
                    "id": 476,
                    "text": "D84",
                    "html": "D84",
                    "display": "D84"
                },
                {
                    "id": 477,
                    "text": "D88",
                    "html": "D88",
                    "display": "D88"
                },
                {
                    "id": 478,
                    "text": "D8A: eye with painted lower lid enclosed in N18",
                    "html": "<span class=\"uni\">&#x1307E;</span> D8A: eye with painted lower lid enclosed in N18",
                    "display": "D8a"
                },
                {
                    "id": 479,
                    "text": "D9: eye with flowing tears [rmi]",
                    "html": "<span class=\"uni\">&#x1307F;</span> D9: eye with flowing tears",
                    "display": "D9"
                },
                {
                    "id": 480,
                    "text": "D92",
                    "html": "D92",
                    "display": "D92"
                },
                {
                    "id": 481,
                    "text": "D94",
                    "html": "D94",
                    "display": "D94"
                },
                {
                    "id": 482,
                    "text": "D96",
                    "html": "D96",
                    "display": "D96"
                },
                {
                    "id": 483,
                    "text": "D97",
                    "html": "D97",
                    "display": "D97"
                },
                {
                    "id": 484,
                    "text": "D99",
                    "html": "D99",
                    "display": "D99"
                },
                {
                    "id": 485,
                    "text": "D9A: eye with flowing tears",
                    "html": "D9A: eye with flowing tears",
                    "display": "D9a"
                }
            ]
        },
        {
            "text": "E: Mammals",
            "children": [
                {
                    "id": 486,
                    "text": "E1: bull",
                    "html": "<span class=\"uni\">&#x130D2;</span> E1: bull",
                    "display": "E1"
                },
                {
                    "id": 487,
                    "text": "E10: ram",
                    "html": "<span class=\"uni\">&#x130DD;</span> E10: ram",
                    "display": "E10"
                },
                {
                    "id": 488,
                    "text": "E100",
                    "html": "E100",
                    "display": "E100"
                },
                {
                    "id": 489,
                    "text": "E100B",
                    "html": "E100B",
                    "display": "E100b"
                },
                {
                    "id": 490,
                    "text": "E101",
                    "html": "E101",
                    "display": "E101"
                },
                {
                    "id": 491,
                    "text": "E101A",
                    "html": "E101A",
                    "display": "E101a"
                },
                {
                    "id": 492,
                    "text": "E102B",
                    "html": "E102B",
                    "display": "E102b"
                },
                {
                    "id": 493,
                    "text": "E102C",
                    "html": "E102C",
                    "display": "E102c"
                },
                {
                    "id": 494,
                    "text": "E103",
                    "html": "E103",
                    "display": "E103"
                },
                {
                    "id": 495,
                    "text": "E11: ram",
                    "html": "<span class=\"uni\">&#x130DE;</span> E11: ram",
                    "display": "E11"
                },
                {
                    "id": 496,
                    "text": "E12: pig",
                    "html": "<span class=\"uni\">&#x130DF;</span> E12: pig",
                    "display": "E12"
                },
                {
                    "id": 497,
                    "text": "E122",
                    "html": "E122",
                    "display": "E122"
                },
                {
                    "id": 498,
                    "text": "E128",
                    "html": "E128",
                    "display": "E128"
                },
                {
                    "id": 499,
                    "text": "E13: cat",
                    "html": "<span class=\"uni\">&#x130E0;</span> E13: cat",
                    "display": "E13"
                },
                {
                    "id": 500,
                    "text": "E130",
                    "html": "E130",
                    "display": "E130"
                },
                {
                    "id": 501,
                    "text": "E131",
                    "html": "E131",
                    "display": "E131"
                },
                {
                    "id": 502,
                    "text": "E133B",
                    "html": "E133B",
                    "display": "E133b"
                },
                {
                    "id": 503,
                    "text": "E137",
                    "html": "E137",
                    "display": "E137"
                },
                {
                    "id": 504,
                    "text": "E14: dog (saluki)",
                    "html": "<span class=\"uni\">&#x130E1;</span> E14: dog (saluki)",
                    "display": "E14"
                },
                {
                    "id": 505,
                    "text": "E141",
                    "html": "E141",
                    "display": "E141"
                },
                {
                    "id": 506,
                    "text": "E145",
                    "html": "E145",
                    "display": "E145"
                },
                {
                    "id": 507,
                    "text": "E145A",
                    "html": "E145A",
                    "display": "E145a"
                },
                {
                    "id": 508,
                    "text": "E146",
                    "html": "E146",
                    "display": "E146"
                },
                {
                    "id": 509,
                    "text": "E147",
                    "html": "E147",
                    "display": "E147"
                },
                {
                    "id": 510,
                    "text": "E148D",
                    "html": "E148D",
                    "display": "E148d"
                },
                {
                    "id": 511,
                    "text": "E148F",
                    "html": "E148F",
                    "display": "E148f"
                },
                {
                    "id": 512,
                    "text": "E148I",
                    "html": "E148I",
                    "display": "E148i"
                },
                {
                    "id": 513,
                    "text": "E14A: dog (saluki)",
                    "html": "E14A: dog (saluki)",
                    "display": "E14a"
                },
                {
                    "id": 514,
                    "text": "E14B: dog (saluki)",
                    "html": "E14B: dog (saluki)",
                    "display": "E14b"
                },
                {
                    "id": 515,
                    "text": "E14C: dog (saluki)",
                    "html": "E14C: dog (saluki)",
                    "display": "E14c"
                },
                {
                    "id": 516,
                    "text": "E15: lying canine",
                    "html": "<span class=\"uni\">&#x130E2;</span> E15: lying canine",
                    "display": "E15"
                },
                {
                    "id": 517,
                    "text": "E150",
                    "html": "E150",
                    "display": "E150"
                },
                {
                    "id": 518,
                    "text": "E151",
                    "html": "E151",
                    "display": "E151"
                },
                {
                    "id": 519,
                    "text": "E152",
                    "html": "E152",
                    "display": "E152"
                },
                {
                    "id": 520,
                    "text": "E154",
                    "html": "E154",
                    "display": "E154"
                },
                {
                    "id": 521,
                    "text": "E16: lying canine on shrine",
                    "html": "<span class=\"uni\">&#x130E3;</span> E16: lying canine on shrine",
                    "display": "E16"
                },
                {
                    "id": 522,
                    "text": "E163",
                    "html": "E163",
                    "display": "E163"
                },
                {
                    "id": 523,
                    "text": "E165",
                    "html": "E165",
                    "display": "E165"
                },
                {
                    "id": 524,
                    "text": "E16A: lying canine on shrine with S45",
                    "html": "<span class=\"uni\">&#x130E4;</span> E16A: lying canine on shrine with S45",
                    "display": "E16a"
                },
                {
                    "id": 525,
                    "text": "E17: jackal [zAb]",
                    "html": "<span class=\"uni\">&#x130E5;</span> E17: jackal",
                    "display": "E17"
                },
                {
                    "id": 526,
                    "text": "E177",
                    "html": "E177",
                    "display": "E177"
                },
                {
                    "id": 527,
                    "text": "E178",
                    "html": "E178",
                    "display": "E178"
                },
                {
                    "id": 528,
                    "text": "E179",
                    "html": "E179",
                    "display": "E179"
                },
                {
                    "id": 529,
                    "text": "E18: wolf on R12 with <span class=\"trans\">SdSd</span>",
                    "html": "<span class=\"uni\">&#x130E7;</span> E18: wolf on R12 with <span class=\"trans\">SdSd</span>",
                    "display": "E18"
                },
                {
                    "id": 530,
                    "text": "E183",
                    "html": "E183",
                    "display": "E183"
                },
                {
                    "id": 531,
                    "text": "E184",
                    "html": "E184",
                    "display": "E184"
                },
                {
                    "id": 532,
                    "text": "E186",
                    "html": "E186",
                    "display": "E186"
                },
                {
                    "id": 533,
                    "text": "E19: combination of E19 and T3",
                    "html": "<span class=\"uni\">&#x130E8;</span> E19: combination of E19 and T3",
                    "display": "E19"
                },
                {
                    "id": 534,
                    "text": "E193A",
                    "html": "E193A",
                    "display": "E193a"
                },
                {
                    "id": 535,
                    "text": "E1A: bull",
                    "html": "E1A: bull",
                    "display": "E1a"
                },
                {
                    "id": 536,
                    "text": "E2: bull charging",
                    "html": "<span class=\"uni\">&#x130D3;</span> E2: bull charging",
                    "display": "E2"
                },
                {
                    "id": 537,
                    "text": "E20: Seth-animal",
                    "html": "<span class=\"uni\">&#x130E9;</span> E20: Seth-animal",
                    "display": "E20"
                },
                {
                    "id": 538,
                    "text": "E200",
                    "html": "E200",
                    "display": "E200"
                },
                {
                    "id": 539,
                    "text": "E200A",
                    "html": "E200A",
                    "display": "E200a"
                },
                {
                    "id": 540,
                    "text": "E21: lying Seth-animal",
                    "html": "<span class=\"uni\">&#x130EB;</span> E21: lying Seth-animal",
                    "display": "E21"
                },
                {
                    "id": 541,
                    "text": "E21E: lying Seth-animal",
                    "html": "E21E: lying Seth-animal",
                    "display": "E21e"
                },
                {
                    "id": 542,
                    "text": "E22: lion [mAi]",
                    "html": "<span class=\"uni\">&#x130EC;</span> E22: lion",
                    "display": "E22"
                },
                {
                    "id": 543,
                    "text": "E22A: lion",
                    "html": "E22A: lion",
                    "display": "E22a"
                },
                {
                    "id": 544,
                    "text": "E23: lying lion [rw]",
                    "html": "<span class=\"uni\">&#x130ED;</span> E23: lying lion",
                    "display": "E23"
                },
                {
                    "id": 545,
                    "text": "E238",
                    "html": "E238",
                    "display": "E238"
                },
                {
                    "id": 546,
                    "text": "E23A: lying lion",
                    "html": "E23A: lying lion",
                    "display": "E23a"
                },
                {
                    "id": 547,
                    "text": "E24: panther [Aby]",
                    "html": "<span class=\"uni\">&#x130EE;</span> E24: panther",
                    "display": "E24"
                },
                {
                    "id": 548,
                    "text": "E241",
                    "html": "E241",
                    "display": "E241"
                },
                {
                    "id": 549,
                    "text": "E244",
                    "html": "E244",
                    "display": "E244"
                },
                {
                    "id": 550,
                    "text": "E25: hippopotamus",
                    "html": "<span class=\"uni\">&#x130EF;</span> E25: hippopotamus",
                    "display": "E25"
                },
                {
                    "id": 551,
                    "text": "E26: elephant",
                    "html": "<span class=\"uni\">&#x130F0;</span> E26: elephant",
                    "display": "E26"
                },
                {
                    "id": 552,
                    "text": "E263",
                    "html": "E263",
                    "display": "E263"
                },
                {
                    "id": 553,
                    "text": "E264",
                    "html": "E264",
                    "display": "E264"
                },
                {
                    "id": 554,
                    "text": "E27: giraffe",
                    "html": "<span class=\"uni\">&#x130F1;</span> E27: giraffe",
                    "display": "E27"
                },
                {
                    "id": 555,
                    "text": "E28: oryx",
                    "html": "<span class=\"uni\">&#x130F2;</span> E28: oryx",
                    "display": "E28"
                },
                {
                    "id": 556,
                    "text": "E29: gazelle",
                    "html": "<span class=\"uni\">&#x130F4;</span> E29: gazelle",
                    "display": "E29"
                },
                {
                    "id": 557,
                    "text": "E3: calf",
                    "html": "<span class=\"uni\">&#x130D4;</span> E3: calf",
                    "display": "E3"
                },
                {
                    "id": 558,
                    "text": "E30: ibex",
                    "html": "<span class=\"uni\">&#x130F5;</span> E30: ibex",
                    "display": "E30"
                },
                {
                    "id": 559,
                    "text": "E30A: ibex",
                    "html": "E30A: ibex",
                    "display": "E30a"
                },
                {
                    "id": 560,
                    "text": "E30B: ibex",
                    "html": "E30B: ibex",
                    "display": "E30b"
                },
                {
                    "id": 561,
                    "text": "E31: goat with collar",
                    "html": "<span class=\"uni\">&#x130F6;</span> E31: goat with collar",
                    "display": "E31"
                },
                {
                    "id": 562,
                    "text": "E32: baboon",
                    "html": "<span class=\"uni\">&#x130F7;</span> E32: baboon",
                    "display": "E32"
                },
                {
                    "id": 563,
                    "text": "E33: monkey",
                    "html": "<span class=\"uni\">&#x130F8;</span> E33: monkey",
                    "display": "E33"
                },
                {
                    "id": 564,
                    "text": "E34: hare [wn]",
                    "html": "<span class=\"uni\">&#x130F9;</span> E34: hare",
                    "display": "E34"
                },
                {
                    "id": 565,
                    "text": "E34B: hare",
                    "html": "E34B: hare",
                    "display": "E34b"
                },
                {
                    "id": 566,
                    "text": "E35",
                    "html": "E35",
                    "display": "E35"
                },
                {
                    "id": 567,
                    "text": "E36: baboon",
                    "html": "<span class=\"uni\">&#x130FB;</span> E36: baboon",
                    "display": "E36"
                },
                {
                    "id": 568,
                    "text": "E5: cow suckling calf",
                    "html": "<span class=\"uni\">&#x130D6;</span> E5: cow suckling calf",
                    "display": "E5"
                },
                {
                    "id": 569,
                    "text": "E51",
                    "html": "E51",
                    "display": "E51"
                },
                {
                    "id": 570,
                    "text": "E53",
                    "html": "E53",
                    "display": "E53"
                },
                {
                    "id": 571,
                    "text": "E6: horse [zzmt]",
                    "html": "<span class=\"uni\">&#x130D7;</span> E6: horse",
                    "display": "E6"
                },
                {
                    "id": 572,
                    "text": "E69",
                    "html": "E69",
                    "display": "E69"
                },
                {
                    "id": 573,
                    "text": "E6A: horse",
                    "html": "E6A: horse",
                    "display": "E6a"
                },
                {
                    "id": 574,
                    "text": "E7: donkey",
                    "html": "<span class=\"uni\">&#x130D8;</span> E7: donkey",
                    "display": "E7"
                },
                {
                    "id": 575,
                    "text": "E8: kid",
                    "html": "<span class=\"uni\">&#x130D9;</span> E8: kid",
                    "display": "E8"
                },
                {
                    "id": 576,
                    "text": "E80",
                    "html": "E80",
                    "display": "E80"
                },
                {
                    "id": 577,
                    "text": "E82",
                    "html": "E82",
                    "display": "E82"
                },
                {
                    "id": 578,
                    "text": "E83",
                    "html": "E83",
                    "display": "E83"
                },
                {
                    "id": 579,
                    "text": "E85",
                    "html": "E85",
                    "display": "E85"
                },
                {
                    "id": 580,
                    "text": "E8A: kid jumping",
                    "html": "<span class=\"uni\">&#x130DA;</span> E8A: kid jumping",
                    "display": "E8a"
                },
                {
                    "id": 581,
                    "text": "E9: newborn bubalis or hartebeest",
                    "html": "<span class=\"uni\">&#x130DB;</span> E9: newborn bubalis or hartebeest",
                    "display": "E9"
                },
                {
                    "id": 582,
                    "text": "E90",
                    "html": "E90",
                    "display": "E90"
                },
                {
                    "id": 583,
                    "text": "E92",
                    "html": "E92",
                    "display": "E92"
                },
                {
                    "id": 584,
                    "text": "E92A",
                    "html": "E92A",
                    "display": "E92a"
                },
                {
                    "id": 585,
                    "text": "E92B",
                    "html": "E92B",
                    "display": "E92b"
                },
                {
                    "id": 586,
                    "text": "E98",
                    "html": "E98",
                    "display": "E98"
                }
            ]
        },
        {
            "text": "F: Parts of Mammals",
            "children": [
                {
                    "id": 587,
                    "text": "F1: head of ox",
                    "html": "<span class=\"uni\">&#x130FE;</span> F1: head of ox",
                    "display": "F1"
                },
                {
                    "id": 588,
                    "text": "F10: head and neck of animal [tall]",
                    "html": "<span class=\"uni\">&#x13108;</span> F10: head and neck of animal",
                    "display": "F10"
                },
                {
                    "id": 589,
                    "text": "F100",
                    "html": "F100",
                    "display": "F100"
                },
                {
                    "id": 590,
                    "text": "F102",
                    "html": "F102",
                    "display": "F102"
                },
                {
                    "id": 591,
                    "text": "F105",
                    "html": "F105",
                    "display": "F105"
                },
                {
                    "id": 592,
                    "text": "F107",
                    "html": "F107",
                    "display": "F107"
                },
                {
                    "id": 593,
                    "text": "F11: head and neck of animal [tall]",
                    "html": "<span class=\"uni\">&#x13109;</span> F11: head and neck of animal",
                    "display": "F11"
                },
                {
                    "id": 594,
                    "text": "F112",
                    "html": "F112",
                    "display": "F112"
                },
                {
                    "id": 595,
                    "text": "F114",
                    "html": "F114",
                    "display": "F114"
                },
                {
                    "id": 596,
                    "text": "F12: head and neck of canine [tall] [wsr]",
                    "html": "<span class=\"uni\">&#x1310A;</span> F12: head and neck of canine",
                    "display": "F12"
                },
                {
                    "id": 597,
                    "text": "F122",
                    "html": "F122",
                    "display": "F122"
                },
                {
                    "id": 598,
                    "text": "F123",
                    "html": "F123",
                    "display": "F123"
                },
                {
                    "id": 599,
                    "text": "F125",
                    "html": "F125",
                    "display": "F125"
                },
                {
                    "id": 600,
                    "text": "F128",
                    "html": "F128",
                    "display": "F128"
                },
                {
                    "id": 601,
                    "text": "F13: horns [wp]",
                    "html": "<span class=\"uni\">&#x1310B;</span> F13: horns",
                    "display": "F13"
                },
                {
                    "id": 602,
                    "text": "F130",
                    "html": "F130",
                    "display": "F130"
                },
                {
                    "id": 603,
                    "text": "F132",
                    "html": "F132",
                    "display": "F132"
                },
                {
                    "id": 604,
                    "text": "F134",
                    "html": "F134",
                    "display": "F134"
                },
                {
                    "id": 605,
                    "text": "F14: combination of F13 and M4",
                    "html": "<span class=\"uni\">&#x1310D;</span> F14: combination of F13 and M4",
                    "display": "F14"
                },
                {
                    "id": 606,
                    "text": "F143",
                    "html": "F143",
                    "display": "F143"
                },
                {
                    "id": 607,
                    "text": "F147",
                    "html": "F147",
                    "display": "F147"
                },
                {
                    "id": 608,
                    "text": "F15: combination of F14 and N5",
                    "html": "<span class=\"uni\">&#x1310E;</span> F15: combination of F14 and N5",
                    "display": "F15"
                },
                {
                    "id": 609,
                    "text": "F155",
                    "html": "F155",
                    "display": "F155"
                },
                {
                    "id": 610,
                    "text": "F16: horn [db]",
                    "html": "<span class=\"uni\">&#x1310F;</span> F16: horn",
                    "display": "F16"
                },
                {
                    "id": 611,
                    "text": "F16A: horn",
                    "html": "F16A: horn",
                    "display": "F16a"
                },
                {
                    "id": 612,
                    "text": "F17: combination of F16 with vase from which water flows",
                    "html": "<span class=\"uni\">&#x13110;</span> F17: combination of F16 with vase from which water flows",
                    "display": "F17"
                },
                {
                    "id": 613,
                    "text": "F171",
                    "html": "F171",
                    "display": "F171"
                },
                {
                    "id": 614,
                    "text": "F18: tusk [broad] [bH]",
                    "html": "<span class=\"uni\">&#x13111;</span> F18: tusk",
                    "display": "F18"
                },
                {
                    "id": 615,
                    "text": "F183",
                    "html": "F183",
                    "display": "F183"
                },
                {
                    "id": 616,
                    "text": "F18B: tusk",
                    "html": "F18B: tusk",
                    "display": "F18b"
                },
                {
                    "id": 617,
                    "text": "F19: lower jaw-bone of ox",
                    "html": "<span class=\"uni\">&#x13112;</span> F19: lower jaw-bone of ox",
                    "display": "F19"
                },
                {
                    "id": 618,
                    "text": "F2: head of charging ox",
                    "html": "<span class=\"uni\">&#x13100;</span> F2: head of charging ox",
                    "display": "F2"
                },
                {
                    "id": 619,
                    "text": "F20: tongue [broad] [ns]",
                    "html": "<span class=\"uni\">&#x13113;</span> F20: tongue",
                    "display": "F20"
                },
                {
                    "id": 620,
                    "text": "F20B: tongue",
                    "html": "F20B: tongue",
                    "display": "F20b"
                },
                {
                    "id": 621,
                    "text": "F21: ear of bovine [narrow] [DrD]",
                    "html": "<span class=\"uni\">&#x13114;</span> F21: ear of bovine",
                    "display": "F21"
                },
                {
                    "id": 622,
                    "text": "F22: hind-quarters of lion [kfA]",
                    "html": "<span class=\"uni\">&#x13116;</span> F22: hind-quarters of lion",
                    "display": "F22"
                },
                {
                    "id": 623,
                    "text": "F23: foreleg of ox [xpS]",
                    "html": "<span class=\"uni\">&#x13117;</span> F23: foreleg of ox",
                    "display": "F23"
                },
                {
                    "id": 624,
                    "text": "F24: F23 reversed",
                    "html": "<span class=\"uni\">&#x13118;</span> F24: F23 reversed",
                    "display": "F24"
                },
                {
                    "id": 625,
                    "text": "F25: leg of ox [wHm]",
                    "html": "<span class=\"uni\">&#x13119;</span> F25: leg of ox",
                    "display": "F25"
                },
                {
                    "id": 626,
                    "text": "F26: skin of goat [Xn]",
                    "html": "<span class=\"uni\">&#x1311A;</span> F26: skin of goat",
                    "display": "F26"
                },
                {
                    "id": 627,
                    "text": "F27: skin of cow with bent tail",
                    "html": "<span class=\"uni\">&#x1311B;</span> F27: skin of cow with bent tail",
                    "display": "F27"
                },
                {
                    "id": 628,
                    "text": "F27B: skin of cow with bent tail",
                    "html": "F27B: skin of cow with bent tail",
                    "display": "F27b"
                },
                {
                    "id": 629,
                    "text": "F28: skin of cow with straight tail [tall]",
                    "html": "<span class=\"uni\">&#x1311C;</span> F28: skin of cow with straight tail",
                    "display": "F28"
                },
                {
                    "id": 630,
                    "text": "F29: cow&amp;apos;s skin pierced by arrow [sti]",
                    "html": "<span class=\"uni\">&#x1311D;</span> F29: cow&amp;apos;s skin pierced by arrow",
                    "display": "F29"
                },
                {
                    "id": 631,
                    "text": "F29A: cow&amp;apos;s skin pierced by arrow",
                    "html": "F29A: cow&amp;apos;s skin pierced by arrow",
                    "display": "F29a"
                },
                {
                    "id": 632,
                    "text": "F3: head of hippopotamus",
                    "html": "<span class=\"uni\">&#x13101;</span> F3: head of hippopotamus",
                    "display": "F3"
                },
                {
                    "id": 633,
                    "text": "F30: water-skin [broad] [Sd]",
                    "html": "<span class=\"uni\">&#x1311E;</span> F30: water-skin",
                    "display": "F30"
                },
                {
                    "id": 634,
                    "text": "F31: three skins tied together [tall] [ms]",
                    "html": "<span class=\"uni\">&#x1311F;</span> F31: three skins tied together",
                    "display": "F31"
                },
                {
                    "id": 635,
                    "text": "F32: animal&amp;apos;s belly [broad] [X]",
                    "html": "<span class=\"uni\">&#x13121;</span> F32: animal&amp;apos;s belly",
                    "display": "F32"
                },
                {
                    "id": 636,
                    "text": "F33: tail [broad] [sd]",
                    "html": "<span class=\"uni\">&#x13122;</span> F33: tail",
                    "display": "F33"
                },
                {
                    "id": 637,
                    "text": "F33B: tail",
                    "html": "F33B: tail",
                    "display": "F33b"
                },
                {
                    "id": 638,
                    "text": "F34: heart [narrow] [ib]",
                    "html": "<span class=\"uni\">&#x13123;</span> F34: heart",
                    "display": "F34"
                },
                {
                    "id": 639,
                    "text": "F35: heart and windpipe [tall] [nfr]",
                    "html": "<span class=\"uni\">&#x13124;</span> F35: heart and windpipe",
                    "display": "F35"
                },
                {
                    "id": 640,
                    "text": "F36: lung and windpipe [tall] [zmA]",
                    "html": "<span class=\"uni\">&#x13125;</span> F36: lung and windpipe",
                    "display": "F36"
                },
                {
                    "id": 641,
                    "text": "F36A: lung and windpipe",
                    "html": "F36A: lung and windpipe",
                    "display": "F36a"
                },
                {
                    "id": 642,
                    "text": "F36B: lung and windpipe",
                    "html": "F36B: lung and windpipe",
                    "display": "F36b"
                },
                {
                    "id": 643,
                    "text": "F36C: lung and windpipe",
                    "html": "F36C: lung and windpipe",
                    "display": "F36c"
                },
                {
                    "id": 644,
                    "text": "F37: backbone and ribs and spinal cord",
                    "html": "<span class=\"uni\">&#x13126;</span> F37: backbone and ribs and spinal cord",
                    "display": "F37"
                },
                {
                    "id": 645,
                    "text": "F37A: backbone and ribs",
                    "html": "<span class=\"uni\">&#x13127;</span> F37A: backbone and ribs",
                    "display": "F37a"
                },
                {
                    "id": 646,
                    "text": "F37AA: backbone and ribs and spinal cord",
                    "html": "F37AA: backbone and ribs and spinal cord",
                    "display": "F37aa"
                },
                {
                    "id": 647,
                    "text": "F37B: backbone and ribs and spinal cord",
                    "html": "F37B: backbone and ribs and spinal cord",
                    "display": "F37b"
                },
                {
                    "id": 648,
                    "text": "F37D: backbone and ribs and spinal cord",
                    "html": "F37D: backbone and ribs and spinal cord",
                    "display": "F37d"
                },
                {
                    "id": 649,
                    "text": "F37E: backbone and ribs and spinal cord",
                    "html": "F37E: backbone and ribs and spinal cord",
                    "display": "F37e"
                },
                {
                    "id": 650,
                    "text": "F37F: backbone and ribs and spinal cord",
                    "html": "F37F: backbone and ribs and spinal cord",
                    "display": "F37f"
                },
                {
                    "id": 651,
                    "text": "F37N: backbone and ribs and spinal cord",
                    "html": "F37N: backbone and ribs and spinal cord",
                    "display": "F37n"
                },
                {
                    "id": 652,
                    "text": "F38: backbone and ribs [narrow]",
                    "html": "<span class=\"uni\">&#x13128;</span> F38: backbone and ribs",
                    "display": "F38"
                },
                {
                    "id": 653,
                    "text": "F38A: backbone and ribs and spinal cord",
                    "html": "<span class=\"uni\">&#x13129;</span> F38A: backbone and ribs and spinal cord",
                    "display": "F38a"
                },
                {
                    "id": 654,
                    "text": "F39: backbone and spinal cord [imAx]",
                    "html": "<span class=\"uni\">&#x1312A;</span> F39: backbone and spinal cord",
                    "display": "F39"
                },
                {
                    "id": 655,
                    "text": "F39A: backbone and spinal cord",
                    "html": "F39A: backbone and spinal cord",
                    "display": "F39a"
                },
                {
                    "id": 656,
                    "text": "F4: forepart of lion [HAt]",
                    "html": "<span class=\"uni\">&#x13102;</span> F4: forepart of lion",
                    "display": "F4"
                },
                {
                    "id": 657,
                    "text": "F40: backbone and spinal cords [Aw]",
                    "html": "<span class=\"uni\">&#x1312B;</span> F40: backbone and spinal cords",
                    "display": "F40"
                },
                {
                    "id": 658,
                    "text": "F40C: backbone and spinal cords",
                    "html": "F40C: backbone and spinal cords",
                    "display": "F40c"
                },
                {
                    "id": 659,
                    "text": "F41: vertebrae [narrow]",
                    "html": "<span class=\"uni\">&#x1312C;</span> F41: vertebrae",
                    "display": "F41"
                },
                {
                    "id": 660,
                    "text": "F41C: vertebrae",
                    "html": "F41C: vertebrae",
                    "display": "F41c"
                },
                {
                    "id": 661,
                    "text": "F42: rib [broad] [spr]",
                    "html": "<span class=\"uni\">&#x1312D;</span> F42: rib",
                    "display": "F42"
                },
                {
                    "id": 662,
                    "text": "F43: ribs [narrow]",
                    "html": "<span class=\"uni\">&#x1312E;</span> F43: ribs",
                    "display": "F43"
                },
                {
                    "id": 663,
                    "text": "F44: leg-bone with meat [isw]",
                    "html": "<span class=\"uni\">&#x1312F;</span> F44: leg-bone with meat",
                    "display": "F44"
                },
                {
                    "id": 664,
                    "text": "F45: uterus [tall]",
                    "html": "<span class=\"uni\">&#x13130;</span> F45: uterus",
                    "display": "F45"
                },
                {
                    "id": 665,
                    "text": "F46: intestine [broad] [qAb]",
                    "html": "<span class=\"uni\">&#x13132;</span> F46: intestine",
                    "display": "F46"
                },
                {
                    "id": 666,
                    "text": "F46A: intestine",
                    "html": "<span class=\"uni\">&#x13133;</span> F46A: intestine",
                    "display": "F46a"
                },
                {
                    "id": 667,
                    "text": "F47: intestine [broad]",
                    "html": "<span class=\"uni\">&#x13134;</span> F47: intestine",
                    "display": "F47"
                },
                {
                    "id": 668,
                    "text": "F47A: intestine",
                    "html": "<span class=\"uni\">&#x13135;</span> F47A: intestine",
                    "display": "F47a"
                },
                {
                    "id": 669,
                    "text": "F48: intestine [broad]",
                    "html": "<span class=\"uni\">&#x13136;</span> F48: intestine",
                    "display": "F48"
                },
                {
                    "id": 670,
                    "text": "F49: intestine [broad]",
                    "html": "<span class=\"uni\">&#x13137;</span> F49: intestine",
                    "display": "F49"
                },
                {
                    "id": 671,
                    "text": "F5: head of bubalis or hartebeest [SsA]",
                    "html": "<span class=\"uni\">&#x13103;</span> F5: head of bubalis or hartebeest",
                    "display": "F5"
                },
                {
                    "id": 672,
                    "text": "F50: combination of F46 and S29",
                    "html": "<span class=\"uni\">&#x13138;</span> F50: combination of F46 and S29",
                    "display": "F50"
                },
                {
                    "id": 673,
                    "text": "F51: piece of flesh [narrow]",
                    "html": "<span class=\"uni\">&#x13139;</span> F51: piece of flesh",
                    "display": "F51"
                },
                {
                    "id": 674,
                    "text": "F51A: three pieces of flesh horizontally",
                    "html": "<span class=\"uni\">&#x1313A;</span> F51A: three pieces of flesh horizontally",
                    "display": "F51a"
                },
                {
                    "id": 675,
                    "text": "F51B: three pieces of flesh vertically",
                    "html": "<span class=\"uni\">&#x1313B;</span> F51B: three pieces of flesh vertically",
                    "display": "F51b"
                },
                {
                    "id": 676,
                    "text": "F51D: piece of flesh",
                    "html": "F51D: piece of flesh",
                    "display": "F51d"
                },
                {
                    "id": 677,
                    "text": "F51F: piece of flesh",
                    "html": "F51F: piece of flesh",
                    "display": "F51f"
                },
                {
                    "id": 678,
                    "text": "F52: excrement [narrow]",
                    "html": "<span class=\"uni\">&#x1313D;</span> F52: excrement",
                    "display": "F52"
                },
                {
                    "id": 679,
                    "text": "F53: divine rod with F7",
                    "html": "<span class=\"uni\">&#x1313E;</span> F53: divine rod with F7",
                    "display": "F53"
                },
                {
                    "id": 680,
                    "text": "F6: forepart of bubalis or hartebeest",
                    "html": "<span class=\"uni\">&#x13104;</span> F6: forepart of bubalis or hartebeest",
                    "display": "F6"
                },
                {
                    "id": 681,
                    "text": "F62",
                    "html": "F62",
                    "display": "F62"
                },
                {
                    "id": 682,
                    "text": "F63",
                    "html": "F63",
                    "display": "F63"
                },
                {
                    "id": 683,
                    "text": "F67",
                    "html": "F67",
                    "display": "F67"
                },
                {
                    "id": 684,
                    "text": "F67A",
                    "html": "F67A",
                    "display": "F67a"
                },
                {
                    "id": 685,
                    "text": "F7: head of ram",
                    "html": "<span class=\"uni\">&#x13105;</span> F7: head of ram",
                    "display": "F7"
                },
                {
                    "id": 686,
                    "text": "F72",
                    "html": "F72",
                    "display": "F72"
                },
                {
                    "id": 687,
                    "text": "F7C: head of ram",
                    "html": "F7C: head of ram",
                    "display": "F7c"
                },
                {
                    "id": 688,
                    "text": "F7D: head of ram",
                    "html": "F7D: head of ram",
                    "display": "F7d"
                },
                {
                    "id": 689,
                    "text": "F8: forepart of ram",
                    "html": "<span class=\"uni\">&#x13106;</span> F8: forepart of ram",
                    "display": "F8"
                },
                {
                    "id": 690,
                    "text": "F81",
                    "html": "F81",
                    "display": "F81"
                },
                {
                    "id": 691,
                    "text": "F85",
                    "html": "F85",
                    "display": "F85"
                },
                {
                    "id": 692,
                    "text": "F88",
                    "html": "F88",
                    "display": "F88"
                },
                {
                    "id": 693,
                    "text": "F9: head of leopard",
                    "html": "<span class=\"uni\">&#x13107;</span> F9: head of leopard",
                    "display": "F9"
                },
                {
                    "id": 694,
                    "text": "F90",
                    "html": "F90",
                    "display": "F90"
                }
            ]
        },
        {
            "text": "G: Birds",
            "children": [
                {
                    "id": 695,
                    "text": "G1: Egyptian vulture [A]",
                    "html": "<span class=\"uni\">&#x1313F;</span> G1: Egyptian vulture",
                    "display": "G1"
                },
                {
                    "id": 696,
                    "text": "G11: image of falcon",
                    "html": "<span class=\"uni\">&#x1314C;</span> G11: image of falcon",
                    "display": "G11"
                },
                {
                    "id": 697,
                    "text": "G117",
                    "html": "G117",
                    "display": "G117"
                },
                {
                    "id": 698,
                    "text": "G119",
                    "html": "G119",
                    "display": "G119"
                },
                {
                    "id": 699,
                    "text": "G12: combination of G11 and S45",
                    "html": "<span class=\"uni\">&#x1314E;</span> G12: combination of G11 and S45",
                    "display": "G12"
                },
                {
                    "id": 700,
                    "text": "G121",
                    "html": "G121",
                    "display": "G121"
                },
                {
                    "id": 701,
                    "text": "G13: image of falcon with S9",
                    "html": "<span class=\"uni\">&#x1314F;</span> G13: image of falcon with S9",
                    "display": "G13"
                },
                {
                    "id": 702,
                    "text": "G131",
                    "html": "G131",
                    "display": "G131"
                },
                {
                    "id": 703,
                    "text": "G131B",
                    "html": "G131B",
                    "display": "G131b"
                },
                {
                    "id": 704,
                    "text": "G139",
                    "html": "G139",
                    "display": "G139"
                },
                {
                    "id": 705,
                    "text": "G14: vulture [mwt]",
                    "html": "<span class=\"uni\">&#x13150;</span> G14: vulture",
                    "display": "G14"
                },
                {
                    "id": 706,
                    "text": "G142",
                    "html": "G142",
                    "display": "G142"
                },
                {
                    "id": 707,
                    "text": "G143",
                    "html": "G143",
                    "display": "G143"
                },
                {
                    "id": 708,
                    "text": "G144",
                    "html": "G144",
                    "display": "G144"
                },
                {
                    "id": 709,
                    "text": "G148",
                    "html": "G148",
                    "display": "G148"
                },
                {
                    "id": 710,
                    "text": "G15: combination of G14 and S45",
                    "html": "<span class=\"uni\">&#x13151;</span> G15: combination of G14 and S45",
                    "display": "G15"
                },
                {
                    "id": 711,
                    "text": "G157",
                    "html": "G157",
                    "display": "G157"
                },
                {
                    "id": 712,
                    "text": "G158",
                    "html": "G158",
                    "display": "G158"
                },
                {
                    "id": 713,
                    "text": "G158A",
                    "html": "G158A",
                    "display": "G158a"
                },
                {
                    "id": 714,
                    "text": "G16: vulture and cobra each on V30 [nbty]",
                    "html": "<span class=\"uni\">&#x13152;</span> G16: vulture and cobra each on V30",
                    "display": "G16"
                },
                {
                    "id": 715,
                    "text": "G167",
                    "html": "G167",
                    "display": "G167"
                },
                {
                    "id": 716,
                    "text": "G169",
                    "html": "G169",
                    "display": "G169"
                },
                {
                    "id": 717,
                    "text": "G16A: vulture and cobra each on V30",
                    "html": "G16A: vulture and cobra each on V30",
                    "display": "G16a"
                },
                {
                    "id": 718,
                    "text": "G16B: vulture and cobra each on V30",
                    "html": "G16B: vulture and cobra each on V30",
                    "display": "G16b"
                },
                {
                    "id": 719,
                    "text": "G17: owl [m]",
                    "html": "<span class=\"uni\">&#x13153;</span> G17: owl",
                    "display": "G17"
                },
                {
                    "id": 720,
                    "text": "G176",
                    "html": "G176",
                    "display": "G176"
                },
                {
                    "id": 721,
                    "text": "G177",
                    "html": "G177",
                    "display": "G177"
                },
                {
                    "id": 722,
                    "text": "G17A: owl",
                    "html": "G17A: owl",
                    "display": "G17a"
                },
                {
                    "id": 723,
                    "text": "G18: two owls [mm]",
                    "html": "<span class=\"uni\">&#x13154;</span> G18: two owls",
                    "display": "G18"
                },
                {
                    "id": 724,
                    "text": "G186",
                    "html": "G186",
                    "display": "G186"
                },
                {
                    "id": 725,
                    "text": "G195",
                    "html": "G195",
                    "display": "G195"
                },
                {
                    "id": 726,
                    "text": "G20: combination of G17 and D36",
                    "html": "<span class=\"uni\">&#x13156;</span> G20: combination of G17 and D36",
                    "display": "G20"
                },
                {
                    "id": 727,
                    "text": "G207",
                    "html": "G207",
                    "display": "G207"
                },
                {
                    "id": 728,
                    "text": "G21: guinea-fowl [nH]",
                    "html": "<span class=\"uni\">&#x13158;</span> G21: guinea-fowl",
                    "display": "G21"
                },
                {
                    "id": 729,
                    "text": "G212A",
                    "html": "G212A",
                    "display": "G212a"
                },
                {
                    "id": 730,
                    "text": "G213",
                    "html": "G213",
                    "display": "G213"
                },
                {
                    "id": 731,
                    "text": "G22: hoopoe [Db]",
                    "html": "<span class=\"uni\">&#x13159;</span> G22: hoopoe",
                    "display": "G22"
                },
                {
                    "id": 732,
                    "text": "G225",
                    "html": "G225",
                    "display": "G225"
                },
                {
                    "id": 733,
                    "text": "G227",
                    "html": "G227",
                    "display": "G227"
                },
                {
                    "id": 734,
                    "text": "G228",
                    "html": "G228",
                    "display": "G228"
                },
                {
                    "id": 735,
                    "text": "G229",
                    "html": "G229",
                    "display": "G229"
                },
                {
                    "id": 736,
                    "text": "G22A: hoopoe",
                    "html": "G22A: hoopoe",
                    "display": "G22a"
                },
                {
                    "id": 737,
                    "text": "G23: lawping [rxyt]",
                    "html": "<span class=\"uni\">&#x1315A;</span> G23: lawping",
                    "display": "G23"
                },
                {
                    "id": 738,
                    "text": "G237",
                    "html": "G237",
                    "display": "G237"
                },
                {
                    "id": 739,
                    "text": "G24: lawping with twisted wings",
                    "html": "<span class=\"uni\">&#x1315B;</span> G24: lawping with twisted wings",
                    "display": "G24"
                },
                {
                    "id": 740,
                    "text": "G241",
                    "html": "G241",
                    "display": "G241"
                },
                {
                    "id": 741,
                    "text": "G244",
                    "html": "G244",
                    "display": "G244"
                },
                {
                    "id": 742,
                    "text": "G246",
                    "html": "G246",
                    "display": "G246"
                },
                {
                    "id": 743,
                    "text": "G248",
                    "html": "G248",
                    "display": "G248"
                },
                {
                    "id": 744,
                    "text": "G24A: lawping with twisted wings",
                    "html": "G24A: lawping with twisted wings",
                    "display": "G24a"
                },
                {
                    "id": 745,
                    "text": "G25: northern bald ibis [Ax]",
                    "html": "<span class=\"uni\">&#x1315C;</span> G25: northern bald ibis",
                    "display": "G25"
                },
                {
                    "id": 746,
                    "text": "G250",
                    "html": "G250",
                    "display": "G250"
                },
                {
                    "id": 747,
                    "text": "G25A: northern bald ibis",
                    "html": "G25A: northern bald ibis",
                    "display": "G25a"
                },
                {
                    "id": 748,
                    "text": "G26: sacred ibis on R12",
                    "html": "<span class=\"uni\">&#x1315D;</span> G26: sacred ibis on R12",
                    "display": "G26"
                },
                {
                    "id": 749,
                    "text": "G264A",
                    "html": "G264A",
                    "display": "G264a"
                },
                {
                    "id": 750,
                    "text": "G264B",
                    "html": "G264B",
                    "display": "G264b"
                },
                {
                    "id": 751,
                    "text": "G26A: sacred ibis",
                    "html": "<span class=\"uni\">&#x1315E;</span> G26A: sacred ibis",
                    "display": "G26a"
                },
                {
                    "id": 752,
                    "text": "G26B: sacred ibis on R12",
                    "html": "G26B: sacred ibis on R12",
                    "display": "G26b"
                },
                {
                    "id": 753,
                    "text": "G27: flamingo [dSr]",
                    "html": "<span class=\"uni\">&#x1315F;</span> G27: flamingo",
                    "display": "G27"
                },
                {
                    "id": 754,
                    "text": "G276",
                    "html": "G276",
                    "display": "G276"
                },
                {
                    "id": 755,
                    "text": "G28: glossy ibis [gm]",
                    "html": "<span class=\"uni\">&#x13160;</span> G28: glossy ibis",
                    "display": "G28"
                },
                {
                    "id": 756,
                    "text": "G29: saddle-billed stork [bA]",
                    "html": "<span class=\"uni\">&#x13161;</span> G29: saddle-billed stork",
                    "display": "G29"
                },
                {
                    "id": 757,
                    "text": "G291",
                    "html": "G291",
                    "display": "G291"
                },
                {
                    "id": 758,
                    "text": "G29A: saddle-billed stork",
                    "html": "G29A: saddle-billed stork",
                    "display": "G29a"
                },
                {
                    "id": 759,
                    "text": "G3: combination of G1 and U1",
                    "html": "<span class=\"uni\">&#x13141;</span> G3: combination of G1 and U1",
                    "display": "G3"
                },
                {
                    "id": 760,
                    "text": "G30: three saddle-billed storks",
                    "html": "<span class=\"uni\">&#x13162;</span> G30: three saddle-billed storks",
                    "display": "G30"
                },
                {
                    "id": 761,
                    "text": "G306",
                    "html": "G306",
                    "display": "G306"
                },
                {
                    "id": 762,
                    "text": "G30A: three saddle-billed storks",
                    "html": "G30A: three saddle-billed storks",
                    "display": "G30a"
                },
                {
                    "id": 763,
                    "text": "G31: heron",
                    "html": "<span class=\"uni\">&#x13163;</span> G31: heron",
                    "display": "G31"
                },
                {
                    "id": 764,
                    "text": "G31A: heron",
                    "html": "G31A: heron",
                    "display": "G31a"
                },
                {
                    "id": 765,
                    "text": "G32: heron on perch [baHi]",
                    "html": "<span class=\"uni\">&#x13164;</span> G32: heron on perch",
                    "display": "G32"
                },
                {
                    "id": 766,
                    "text": "G33: cattle egret",
                    "html": "<span class=\"uni\">&#x13165;</span> G33: cattle egret",
                    "display": "G33"
                },
                {
                    "id": 767,
                    "text": "G34: ostrich",
                    "html": "<span class=\"uni\">&#x13166;</span> G34: ostrich",
                    "display": "G34"
                },
                {
                    "id": 768,
                    "text": "G35: cormorant [aq]",
                    "html": "<span class=\"uni\">&#x13167;</span> G35: cormorant",
                    "display": "G35"
                },
                {
                    "id": 769,
                    "text": "G36: swallow [wr]",
                    "html": "<span class=\"uni\">&#x13168;</span> G36: swallow",
                    "display": "G36"
                },
                {
                    "id": 770,
                    "text": "G37: sparrow",
                    "html": "<span class=\"uni\">&#x1316A;</span> G37: sparrow",
                    "display": "G37"
                },
                {
                    "id": 771,
                    "text": "G38: white-fronted goose [gb]",
                    "html": "<span class=\"uni\">&#x1316C;</span> G38: white-fronted goose",
                    "display": "G38"
                },
                {
                    "id": 772,
                    "text": "G39: pintail [zA]",
                    "html": "<span class=\"uni\">&#x1316D;</span> G39: pintail",
                    "display": "G39"
                },
                {
                    "id": 773,
                    "text": "G4: buzzard [tyw]",
                    "html": "<span class=\"uni\">&#x13142;</span> G4: buzzard",
                    "display": "G4"
                },
                {
                    "id": 774,
                    "text": "G40: pintail flying [pA]",
                    "html": "<span class=\"uni\">&#x1316E;</span> G40: pintail flying",
                    "display": "G40"
                },
                {
                    "id": 775,
                    "text": "G41: pintail alighting [xn]",
                    "html": "<span class=\"uni\">&#x1316F;</span> G41: pintail alighting",
                    "display": "G41"
                },
                {
                    "id": 776,
                    "text": "G41A: pintail alighting",
                    "html": "G41A: pintail alighting",
                    "display": "G41a"
                },
                {
                    "id": 777,
                    "text": "G42: widgeon [wSA]",
                    "html": "<span class=\"uni\">&#x13170;</span> G42: widgeon",
                    "display": "G42"
                },
                {
                    "id": 778,
                    "text": "G43: quail chick [w]",
                    "html": "<span class=\"uni\">&#x13171;</span> G43: quail chick",
                    "display": "G43"
                },
                {
                    "id": 779,
                    "text": "G43A: combination of G43 and X1",
                    "html": "<span class=\"uni\">&#x13172;</span> G43A: combination of G43 and X1",
                    "display": "G43a"
                },
                {
                    "id": 780,
                    "text": "G44: two quail chicks [ww]",
                    "html": "<span class=\"uni\">&#x13173;</span> G44: two quail chicks",
                    "display": "G44"
                },
                {
                    "id": 781,
                    "text": "G45: combination of G43 and D36",
                    "html": "<span class=\"uni\">&#x13174;</span> G45: combination of G43 and D36",
                    "display": "G45"
                },
                {
                    "id": 782,
                    "text": "G46: combination of G43 and U1 [mAw]",
                    "html": "<span class=\"uni\">&#x13176;</span> G46: combination of G43 and U1",
                    "display": "G46"
                },
                {
                    "id": 783,
                    "text": "G47: duckling [TA]",
                    "html": "<span class=\"uni\">&#x13177;</span> G47: duckling",
                    "display": "G47"
                },
                {
                    "id": 784,
                    "text": "G48: three ducklings in nest",
                    "html": "<span class=\"uni\">&#x13178;</span> G48: three ducklings in nest",
                    "display": "G48"
                },
                {
                    "id": 785,
                    "text": "G48A: three ducklings in nest",
                    "html": "G48A: three ducklings in nest",
                    "display": "G48a"
                },
                {
                    "id": 786,
                    "text": "G49: three ducklings in pool",
                    "html": "<span class=\"uni\">&#x13179;</span> G49: three ducklings in pool",
                    "display": "G49"
                },
                {
                    "id": 787,
                    "text": "G49E: three ducklings in pool",
                    "html": "G49E: three ducklings in pool",
                    "display": "G49e"
                },
                {
                    "id": 788,
                    "text": "G4A: buzzard",
                    "html": "G4A: buzzard",
                    "display": "G4a"
                },
                {
                    "id": 789,
                    "text": "G5: falcon",
                    "html": "<span class=\"uni\">&#x13143;</span> G5: falcon",
                    "display": "G5"
                },
                {
                    "id": 790,
                    "text": "G51: bird pecking at fish",
                    "html": "<span class=\"uni\">&#x1317B;</span> G51: bird pecking at fish",
                    "display": "G51"
                },
                {
                    "id": 791,
                    "text": "G52: goose picking up grain",
                    "html": "<span class=\"uni\">&#x1317C;</span> G52: goose picking up grain",
                    "display": "G52"
                },
                {
                    "id": 792,
                    "text": "G53: human-headed bird with R7",
                    "html": "<span class=\"uni\">&#x1317D;</span> G53: human-headed bird with R7",
                    "display": "G53"
                },
                {
                    "id": 793,
                    "text": "G53A: human-headed bird with R7",
                    "html": "G53A: human-headed bird with R7",
                    "display": "G53a"
                },
                {
                    "id": 794,
                    "text": "G54: plucked bird [snD]",
                    "html": "<span class=\"uni\">&#x1317E;</span> G54: plucked bird",
                    "display": "G54"
                },
                {
                    "id": 795,
                    "text": "G56",
                    "html": "G56",
                    "display": "G56"
                },
                {
                    "id": 796,
                    "text": "G57",
                    "html": "G57",
                    "display": "G57"
                },
                {
                    "id": 797,
                    "text": "G58",
                    "html": "G58",
                    "display": "G58"
                },
                {
                    "id": 798,
                    "text": "G6: combination of G5 and S45",
                    "html": "<span class=\"uni\">&#x13144;</span> G6: combination of G5 and S45",
                    "display": "G6"
                },
                {
                    "id": 799,
                    "text": "G60",
                    "html": "G60",
                    "display": "G60"
                },
                {
                    "id": 800,
                    "text": "G62",
                    "html": "G62",
                    "display": "G62"
                },
                {
                    "id": 801,
                    "text": "G67",
                    "html": "G67",
                    "display": "G67"
                },
                {
                    "id": 802,
                    "text": "G68",
                    "html": "G68",
                    "display": "G68"
                },
                {
                    "id": 803,
                    "text": "G68A",
                    "html": "G68A",
                    "display": "G68a"
                },
                {
                    "id": 804,
                    "text": "G7: falcon on R12",
                    "html": "<span class=\"uni\">&#x13146;</span> G7: falcon on R12",
                    "display": "G7"
                },
                {
                    "id": 805,
                    "text": "G79",
                    "html": "G79",
                    "display": "G79"
                },
                {
                    "id": 806,
                    "text": "G7A: falcon in boat",
                    "html": "<span class=\"uni\">&#x13147;</span> G7A: falcon in boat",
                    "display": "G7a"
                },
                {
                    "id": 807,
                    "text": "G7B: falcon in boat",
                    "html": "<span class=\"uni\">&#x13148;</span> G7B: falcon in boat",
                    "display": "G7b"
                },
                {
                    "id": 808,
                    "text": "G7C: falcon on R12",
                    "html": "G7C: falcon on R12",
                    "display": "G7c"
                },
                {
                    "id": 809,
                    "text": "G8: falcon on S12",
                    "html": "<span class=\"uni\">&#x13149;</span> G8: falcon on S12",
                    "display": "G8"
                },
                {
                    "id": 810,
                    "text": "G81",
                    "html": "G81",
                    "display": "G81"
                },
                {
                    "id": 811,
                    "text": "G87",
                    "html": "G87",
                    "display": "G87"
                },
                {
                    "id": 812,
                    "text": "G9: falcon with N5 on head",
                    "html": "<span class=\"uni\">&#x1314A;</span> G9: falcon with N5 on head",
                    "display": "G9"
                },
                {
                    "id": 813,
                    "text": "G96",
                    "html": "G96",
                    "display": "G96"
                }
            ]
        },
        {
            "text": "H: Parts of Birds",
            "children": [
                {
                    "id": 814,
                    "text": "H1: head of pintail",
                    "html": "<span class=\"uni\">&#x1317F;</span> H1: head of pintail",
                    "display": "H1"
                },
                {
                    "id": 815,
                    "text": "H16",
                    "html": "H16",
                    "display": "H16"
                },
                {
                    "id": 816,
                    "text": "H17",
                    "html": "H17",
                    "display": "H17"
                },
                {
                    "id": 817,
                    "text": "H18A",
                    "html": "H18A",
                    "display": "H18a"
                },
                {
                    "id": 818,
                    "text": "H19",
                    "html": "H19",
                    "display": "H19"
                },
                {
                    "id": 819,
                    "text": "H2: head of crested bird [pq]",
                    "html": "<span class=\"uni\">&#x13180;</span> H2: head of crested bird",
                    "display": "H2"
                },
                {
                    "id": 820,
                    "text": "H20",
                    "html": "H20",
                    "display": "H20"
                },
                {
                    "id": 821,
                    "text": "H25",
                    "html": "H25",
                    "display": "H25"
                },
                {
                    "id": 822,
                    "text": "H27",
                    "html": "H27",
                    "display": "H27"
                },
                {
                    "id": 823,
                    "text": "H2A: head of crested bird",
                    "html": "H2A: head of crested bird",
                    "display": "H2a"
                },
                {
                    "id": 824,
                    "text": "H3: head of spoonbill [pAq]",
                    "html": "<span class=\"uni\">&#x13181;</span> H3: head of spoonbill",
                    "display": "H3"
                },
                {
                    "id": 825,
                    "text": "H34",
                    "html": "H34",
                    "display": "H34"
                },
                {
                    "id": 826,
                    "text": "H4: head of vulture [nr]",
                    "html": "<span class=\"uni\">&#x13182;</span> H4: head of vulture",
                    "display": "H4"
                },
                {
                    "id": 827,
                    "text": "H47",
                    "html": "H47",
                    "display": "H47"
                },
                {
                    "id": 828,
                    "text": "H5: wing",
                    "html": "<span class=\"uni\">&#x13183;</span> H5: wing",
                    "display": "H5"
                },
                {
                    "id": 829,
                    "text": "H5A: wing",
                    "html": "H5A: wing",
                    "display": "H5a"
                },
                {
                    "id": 830,
                    "text": "H6: feather [tall] [Sw]",
                    "html": "<span class=\"uni\">&#x13184;</span> H6: feather",
                    "display": "H6"
                },
                {
                    "id": 831,
                    "text": "H6A: hieratic feather [tall]",
                    "html": "<span class=\"uni\">&#x13185;</span> H6A: hieratic feather",
                    "display": "H6a"
                },
                {
                    "id": 832,
                    "text": "H6B: feather",
                    "html": "H6B: feather",
                    "display": "H6b"
                },
                {
                    "id": 833,
                    "text": "H7: claw",
                    "html": "<span class=\"uni\">&#x13186;</span> H7: claw",
                    "display": "H7"
                },
                {
                    "id": 834,
                    "text": "H8: egg [narrow]",
                    "html": "<span class=\"uni\">&#x13187;</span> H8: egg",
                    "display": "H8"
                }
            ]
        },
        {
            "text": "I: Amphibious Animals, Reptiles, etc.",
            "children": [
                {
                    "id": 835,
                    "text": "I1: gecko [aSA]",
                    "html": "<span class=\"uni\">&#x13188;</span> I1: gecko",
                    "display": "I1"
                },
                {
                    "id": 836,
                    "text": "I10: cobra [D]",
                    "html": "<span class=\"uni\">&#x13193;</span> I10: cobra",
                    "display": "I10"
                },
                {
                    "id": 837,
                    "text": "I100",
                    "html": "I100",
                    "display": "I100"
                },
                {
                    "id": 838,
                    "text": "I103",
                    "html": "I103",
                    "display": "I103"
                },
                {
                    "id": 839,
                    "text": "I111",
                    "html": "I111",
                    "display": "I111"
                },
                {
                    "id": 840,
                    "text": "I114",
                    "html": "I114",
                    "display": "I114"
                },
                {
                    "id": 841,
                    "text": "I12: erect cobra",
                    "html": "<span class=\"uni\">&#x13197;</span> I12: erect cobra",
                    "display": "I12"
                },
                {
                    "id": 842,
                    "text": "I13: erect cobra on V30",
                    "html": "<span class=\"uni\">&#x13198;</span> I13: erect cobra on V30",
                    "display": "I13"
                },
                {
                    "id": 843,
                    "text": "I14: snake",
                    "html": "<span class=\"uni\">&#x13199;</span> I14: snake",
                    "display": "I14"
                },
                {
                    "id": 844,
                    "text": "I14A: snake",
                    "html": "I14A: snake",
                    "display": "I14a"
                },
                {
                    "id": 845,
                    "text": "I14B: snake",
                    "html": "I14B: snake",
                    "display": "I14b"
                },
                {
                    "id": 846,
                    "text": "I14C: snake",
                    "html": "I14C: snake",
                    "display": "I14c"
                },
                {
                    "id": 847,
                    "text": "I15: snake",
                    "html": "<span class=\"uni\">&#x1319A;</span> I15: snake",
                    "display": "I15"
                },
                {
                    "id": 848,
                    "text": "I15B: snake",
                    "html": "I15B: snake",
                    "display": "I15b"
                },
                {
                    "id": 849,
                    "text": "I2: turtle [Styw]",
                    "html": "<span class=\"uni\">&#x13189;</span> I2: turtle",
                    "display": "I2"
                },
                {
                    "id": 850,
                    "text": "I24B",
                    "html": "I24B",
                    "display": "I24b"
                },
                {
                    "id": 851,
                    "text": "I25B",
                    "html": "I25B",
                    "display": "I25b"
                },
                {
                    "id": 852,
                    "text": "I3: crocodile [mzH]",
                    "html": "<span class=\"uni\">&#x1318A;</span> I3: crocodile",
                    "display": "I3"
                },
                {
                    "id": 853,
                    "text": "I31A",
                    "html": "I31A",
                    "display": "I31a"
                },
                {
                    "id": 854,
                    "text": "I31B",
                    "html": "I31B",
                    "display": "I31b"
                },
                {
                    "id": 855,
                    "text": "I34",
                    "html": "I34",
                    "display": "I34"
                },
                {
                    "id": 856,
                    "text": "I3C: crocodile",
                    "html": "I3C: crocodile",
                    "display": "I3c"
                },
                {
                    "id": 857,
                    "text": "I3G: crocodile",
                    "html": "I3G: crocodile",
                    "display": "I3g"
                },
                {
                    "id": 858,
                    "text": "I5: crocodile with curved tail [sAq]",
                    "html": "<span class=\"uni\">&#x1318C;</span> I5: crocodile with curved tail",
                    "display": "I5"
                },
                {
                    "id": 859,
                    "text": "I52A",
                    "html": "I52A",
                    "display": "I52a"
                },
                {
                    "id": 860,
                    "text": "I55",
                    "html": "I55",
                    "display": "I55"
                },
                {
                    "id": 861,
                    "text": "I58",
                    "html": "I58",
                    "display": "I58"
                },
                {
                    "id": 862,
                    "text": "I5A: image of crocodile",
                    "html": "<span class=\"uni\">&#x1318D;</span> I5A: image of crocodile",
                    "display": "I5a"
                },
                {
                    "id": 863,
                    "text": "I6: crocodile scales [narrow] [km]",
                    "html": "<span class=\"uni\">&#x1318E;</span> I6: crocodile scales",
                    "display": "I6"
                },
                {
                    "id": 864,
                    "text": "I66",
                    "html": "I66",
                    "display": "I66"
                },
                {
                    "id": 865,
                    "text": "I7: frog",
                    "html": "<span class=\"uni\">&#x1318F;</span> I7: frog",
                    "display": "I7"
                },
                {
                    "id": 866,
                    "text": "I70B",
                    "html": "I70B",
                    "display": "I70b"
                },
                {
                    "id": 867,
                    "text": "I73",
                    "html": "I73",
                    "display": "I73"
                },
                {
                    "id": 868,
                    "text": "I74",
                    "html": "I74",
                    "display": "I74"
                },
                {
                    "id": 869,
                    "text": "I75",
                    "html": "I75",
                    "display": "I75"
                },
                {
                    "id": 870,
                    "text": "I8: tadpole [Hfn]",
                    "html": "<span class=\"uni\">&#x13190;</span> I8: tadpole",
                    "display": "I8"
                },
                {
                    "id": 871,
                    "text": "I86",
                    "html": "I86",
                    "display": "I86"
                },
                {
                    "id": 872,
                    "text": "I86A",
                    "html": "I86A",
                    "display": "I86a"
                },
                {
                    "id": 873,
                    "text": "I86B",
                    "html": "I86B",
                    "display": "I86b"
                },
                {
                    "id": 874,
                    "text": "I86D",
                    "html": "I86D",
                    "display": "I86d"
                },
                {
                    "id": 875,
                    "text": "I86E",
                    "html": "I86E",
                    "display": "I86e"
                },
                {
                    "id": 876,
                    "text": "I87",
                    "html": "I87",
                    "display": "I87"
                },
                {
                    "id": 877,
                    "text": "I9: horned viper [f]",
                    "html": "<span class=\"uni\">&#x13191;</span> I9: horned viper",
                    "display": "I9"
                },
                {
                    "id": 878,
                    "text": "I93",
                    "html": "I93",
                    "display": "I93"
                },
                {
                    "id": 879,
                    "text": "I93A",
                    "html": "I93A",
                    "display": "I93a"
                }
            ]
        },
        {
            "text": "K: Fish and Parts of Fish",
            "children": [
                {
                    "id": 880,
                    "text": "K1: tilapia [in]",
                    "html": "<span class=\"uni\">&#x1319B;</span> K1: tilapia",
                    "display": "K1"
                },
                {
                    "id": 881,
                    "text": "K13",
                    "html": "K13",
                    "display": "K13"
                },
                {
                    "id": 882,
                    "text": "K14",
                    "html": "K14",
                    "display": "K14"
                },
                {
                    "id": 883,
                    "text": "K17",
                    "html": "K17",
                    "display": "K17"
                },
                {
                    "id": 884,
                    "text": "K18",
                    "html": "K18",
                    "display": "K18"
                },
                {
                    "id": 885,
                    "text": "K18B",
                    "html": "K18B",
                    "display": "K18b"
                },
                {
                    "id": 886,
                    "text": "K2: barbel",
                    "html": "<span class=\"uni\">&#x1319C;</span> K2: barbel",
                    "display": "K2"
                },
                {
                    "id": 887,
                    "text": "K23",
                    "html": "K23",
                    "display": "K23"
                },
                {
                    "id": 888,
                    "text": "K26",
                    "html": "K26",
                    "display": "K26"
                },
                {
                    "id": 889,
                    "text": "K3: mullet [ad]",
                    "html": "<span class=\"uni\">&#x1319D;</span> K3: mullet",
                    "display": "K3"
                },
                {
                    "id": 890,
                    "text": "K4: elephant-snout fish [XA]",
                    "html": "<span class=\"uni\">&#x1319E;</span> K4: elephant-snout fish",
                    "display": "K4"
                },
                {
                    "id": 891,
                    "text": "K4A: elephant-snout fish",
                    "html": "K4A: elephant-snout fish",
                    "display": "K4a"
                },
                {
                    "id": 892,
                    "text": "K5: Petrocephalus bane [bz]",
                    "html": "<span class=\"uni\">&#x1319F;</span> K5: Petrocephalus bane",
                    "display": "K5"
                },
                {
                    "id": 893,
                    "text": "K6: fish scale [narrow] [nSmt]",
                    "html": "<span class=\"uni\">&#x131A0;</span> K6: fish scale",
                    "display": "K6"
                },
                {
                    "id": 894,
                    "text": "K7: puffer",
                    "html": "<span class=\"uni\">&#x131A1;</span> K7: puffer",
                    "display": "K7"
                }
            ]
        },
        {
            "text": "L: Invertebrates, Insects, etc.",
            "children": [
                {
                    "id": 895,
                    "text": "L1: dung beetle [xpr]",
                    "html": "<span class=\"uni\">&#x131A3;</span> L1: dung beetle",
                    "display": "L1"
                },
                {
                    "id": 896,
                    "text": "L12A",
                    "html": "L12A",
                    "display": "L12a"
                },
                {
                    "id": 897,
                    "text": "L17",
                    "html": "L17",
                    "display": "L17"
                },
                {
                    "id": 898,
                    "text": "L18",
                    "html": "L18",
                    "display": "L18"
                },
                {
                    "id": 899,
                    "text": "L19",
                    "html": "L19",
                    "display": "L19"
                },
                {
                    "id": 900,
                    "text": "L2: bee [bit]",
                    "html": "<span class=\"uni\">&#x131A4;</span> L2: bee",
                    "display": "L2"
                },
                {
                    "id": 901,
                    "text": "L25",
                    "html": "L25",
                    "display": "L25"
                },
                {
                    "id": 902,
                    "text": "L3: fly",
                    "html": "<span class=\"uni\">&#x131A6;</span> L3: fly",
                    "display": "L3"
                },
                {
                    "id": 903,
                    "text": "L3A: fly",
                    "html": "L3A: fly",
                    "display": "L3a"
                },
                {
                    "id": 904,
                    "text": "L4: locust",
                    "html": "<span class=\"uni\">&#x131A7;</span> L4: locust",
                    "display": "L4"
                },
                {
                    "id": 905,
                    "text": "L5: centipede",
                    "html": "<span class=\"uni\">&#x131A8;</span> L5: centipede",
                    "display": "L5"
                },
                {
                    "id": 906,
                    "text": "L6: shell [narrow]",
                    "html": "<span class=\"uni\">&#x131A9;</span> L6: shell",
                    "display": "L6"
                },
                {
                    "id": 907,
                    "text": "L7: scorpion [tall] [srqt]",
                    "html": "<span class=\"uni\">&#x131AB;</span> L7: scorpion",
                    "display": "L7"
                }
            ]
        },
        {
            "text": "M: Trees and Plants",
            "children": [
                {
                    "id": 908,
                    "text": "M1: tree [iAm]",
                    "html": "<span class=\"uni\">&#x131AD;</span> M1: tree",
                    "display": "M1"
                },
                {
                    "id": 909,
                    "text": "M10: lotus bud with straight stem",
                    "html": "<span class=\"uni\">&#x131B9;</span> M10: lotus bud with straight stem",
                    "display": "M10"
                },
                {
                    "id": 910,
                    "text": "M102",
                    "html": "M102",
                    "display": "M102"
                },
                {
                    "id": 911,
                    "text": "M107",
                    "html": "M107",
                    "display": "M107"
                },
                {
                    "id": 912,
                    "text": "M11: flower on long twisted stalk [broad] [wdn]",
                    "html": "<span class=\"uni\">&#x131BB;</span> M11: flower on long twisted stalk",
                    "display": "M11"
                },
                {
                    "id": 913,
                    "text": "M111",
                    "html": "M111",
                    "display": "M111"
                },
                {
                    "id": 914,
                    "text": "M112",
                    "html": "M112",
                    "display": "M112"
                },
                {
                    "id": 915,
                    "text": "M12: lotus plant [tall] [xA]",
                    "html": "<span class=\"uni\">&#x131BC;</span> M12: lotus plant",
                    "display": "M12"
                },
                {
                    "id": 916,
                    "text": "M121",
                    "html": "M121",
                    "display": "M121"
                },
                {
                    "id": 917,
                    "text": "M127",
                    "html": "M127",
                    "display": "M127"
                },
                {
                    "id": 918,
                    "text": "M12B: ...",
                    "html": "<span class=\"uni\">&#x131BE;</span> M12B: ...",
                    "display": "M12b"
                },
                {
                    "id": 919,
                    "text": "M13: papyrus [tall] [wAD]",
                    "html": "<span class=\"uni\">&#x131C5;</span> M13: papyrus",
                    "display": "M13"
                },
                {
                    "id": 920,
                    "text": "M131",
                    "html": "M131",
                    "display": "M131"
                },
                {
                    "id": 921,
                    "text": "M133",
                    "html": "M133",
                    "display": "M133"
                },
                {
                    "id": 922,
                    "text": "M135",
                    "html": "M135",
                    "display": "M135"
                },
                {
                    "id": 923,
                    "text": "M13A: papyrus",
                    "html": "M13A: papyrus",
                    "display": "M13a"
                },
                {
                    "id": 924,
                    "text": "M13B: papyrus",
                    "html": "M13B: papyrus",
                    "display": "M13b"
                },
                {
                    "id": 925,
                    "text": "M14: combination of M13 and I10",
                    "html": "<span class=\"uni\">&#x131C6;</span> M14: combination of M13 and I10",
                    "display": "M14"
                },
                {
                    "id": 926,
                    "text": "M145",
                    "html": "M145",
                    "display": "M145"
                },
                {
                    "id": 927,
                    "text": "M147",
                    "html": "M147",
                    "display": "M147"
                },
                {
                    "id": 928,
                    "text": "M15: clump of papyrus with buds",
                    "html": "<span class=\"uni\">&#x131C7;</span> M15: clump of papyrus with buds",
                    "display": "M15"
                },
                {
                    "id": 929,
                    "text": "M156",
                    "html": "M156",
                    "display": "M156"
                },
                {
                    "id": 930,
                    "text": "M159",
                    "html": "M159",
                    "display": "M159"
                },
                {
                    "id": 931,
                    "text": "M16: clump of papyrus [HA]",
                    "html": "<span class=\"uni\">&#x131C9;</span> M16: clump of papyrus",
                    "display": "M16"
                },
                {
                    "id": 932,
                    "text": "M161",
                    "html": "M161",
                    "display": "M161"
                },
                {
                    "id": 933,
                    "text": "M163",
                    "html": "M163",
                    "display": "M163"
                },
                {
                    "id": 934,
                    "text": "M165",
                    "html": "M165",
                    "display": "M165"
                },
                {
                    "id": 935,
                    "text": "M16B: clump of papyrus",
                    "html": "M16B: clump of papyrus",
                    "display": "M16b"
                },
                {
                    "id": 936,
                    "text": "M17: reed [tall] [i]",
                    "html": "<span class=\"uni\">&#x131CB;</span> M17: reed",
                    "display": "M17"
                },
                {
                    "id": 937,
                    "text": "M170",
                    "html": "M170",
                    "display": "M170"
                },
                {
                    "id": 938,
                    "text": "M171",
                    "html": "M171",
                    "display": "M171"
                },
                {
                    "id": 939,
                    "text": "M173",
                    "html": "M173",
                    "display": "M173"
                },
                {
                    "id": 940,
                    "text": "M174",
                    "html": "M174",
                    "display": "M174"
                },
                {
                    "id": 941,
                    "text": "M174A",
                    "html": "M174A",
                    "display": "M174a"
                },
                {
                    "id": 942,
                    "text": "M177A",
                    "html": "M177A",
                    "display": "M177a"
                },
                {
                    "id": 943,
                    "text": "M17A: two reeds",
                    "html": "<span class=\"uni\">&#x131CC;</span> M17A: two reeds",
                    "display": "M17a"
                },
                {
                    "id": 944,
                    "text": "M18: combination of M17 and D54 [ii]",
                    "html": "<span class=\"uni\">&#x131CD;</span> M18: combination of M17 and D54",
                    "display": "M18"
                },
                {
                    "id": 945,
                    "text": "M181",
                    "html": "M181",
                    "display": "M181"
                },
                {
                    "id": 946,
                    "text": "M182",
                    "html": "M182",
                    "display": "M182"
                },
                {
                    "id": 947,
                    "text": "M184",
                    "html": "M184",
                    "display": "M184"
                },
                {
                    "id": 948,
                    "text": "M187",
                    "html": "M187",
                    "display": "M187"
                },
                {
                    "id": 949,
                    "text": "M19: heaped conical cakes between M17 and U36",
                    "html": "<span class=\"uni\">&#x131CE;</span> M19: heaped conical cakes between M17 and U36",
                    "display": "M19"
                },
                {
                    "id": 950,
                    "text": "M190",
                    "html": "M190",
                    "display": "M190"
                },
                {
                    "id": 951,
                    "text": "M192",
                    "html": "M192",
                    "display": "M192"
                },
                {
                    "id": 952,
                    "text": "M193",
                    "html": "M193",
                    "display": "M193"
                },
                {
                    "id": 953,
                    "text": "M194",
                    "html": "M194",
                    "display": "M194"
                },
                {
                    "id": 954,
                    "text": "M195",
                    "html": "M195",
                    "display": "M195"
                },
                {
                    "id": 955,
                    "text": "M1A: combination of M1 and M3",
                    "html": "<span class=\"uni\">&#x131AE;</span> M1A: combination of M1 and M3",
                    "display": "M1a"
                },
                {
                    "id": 956,
                    "text": "M1C: tree",
                    "html": "M1C: tree",
                    "display": "M1c"
                },
                {
                    "id": 957,
                    "text": "M2: plant [Hn]",
                    "html": "<span class=\"uni\">&#x131B0;</span> M2: plant",
                    "display": "M2"
                },
                {
                    "id": 958,
                    "text": "M20: field of reeds [sxt]",
                    "html": "<span class=\"uni\">&#x131CF;</span> M20: field of reeds",
                    "display": "M20"
                },
                {
                    "id": 959,
                    "text": "M200",
                    "html": "M200",
                    "display": "M200"
                },
                {
                    "id": 960,
                    "text": "M201",
                    "html": "M201",
                    "display": "M201"
                },
                {
                    "id": 961,
                    "text": "M203",
                    "html": "M203",
                    "display": "M203"
                },
                {
                    "id": 962,
                    "text": "M207",
                    "html": "M207",
                    "display": "M207"
                },
                {
                    "id": 963,
                    "text": "M20B: field of reeds",
                    "html": "M20B: field of reeds",
                    "display": "M20b"
                },
                {
                    "id": 964,
                    "text": "M21: reeds with root [sm]",
                    "html": "<span class=\"uni\">&#x131D0;</span> M21: reeds with root",
                    "display": "M21"
                },
                {
                    "id": 965,
                    "text": "M22: rush",
                    "html": "<span class=\"uni\">&#x131D1;</span> M22: rush",
                    "display": "M22"
                },
                {
                    "id": 966,
                    "text": "M222",
                    "html": "M222",
                    "display": "M222"
                },
                {
                    "id": 967,
                    "text": "M23: sedge [sw]",
                    "html": "<span class=\"uni\">&#x131D3;</span> M23: sedge",
                    "display": "M23"
                },
                {
                    "id": 968,
                    "text": "M23A: sedge",
                    "html": "M23A: sedge",
                    "display": "M23a"
                },
                {
                    "id": 969,
                    "text": "M24: combination of M23 and D21 [rsw]",
                    "html": "<span class=\"uni\">&#x131D4;</span> M24: combination of M23 and D21",
                    "display": "M24"
                },
                {
                    "id": 970,
                    "text": "M241A",
                    "html": "M241A",
                    "display": "M241a"
                },
                {
                    "id": 971,
                    "text": "M242",
                    "html": "M242",
                    "display": "M242"
                },
                {
                    "id": 972,
                    "text": "M26: flowering sedge [Sma]",
                    "html": "<span class=\"uni\">&#x131D7;</span> M26: flowering sedge",
                    "display": "M26"
                },
                {
                    "id": 973,
                    "text": "M27: combination of M26 and D36",
                    "html": "<span class=\"uni\">&#x131D8;</span> M27: combination of M26 and D36",
                    "display": "M27"
                },
                {
                    "id": 974,
                    "text": "M28: combination of M26 and V20",
                    "html": "<span class=\"uni\">&#x131D9;</span> M28: combination of M26 and V20",
                    "display": "M28"
                },
                {
                    "id": 975,
                    "text": "M29: pod [tall] [nDm]",
                    "html": "<span class=\"uni\">&#x131DB;</span> M29: pod",
                    "display": "M29"
                },
                {
                    "id": 976,
                    "text": "M3: branch [xt]",
                    "html": "<span class=\"uni\">&#x131B1;</span> M3: branch",
                    "display": "M3"
                },
                {
                    "id": 977,
                    "text": "M30: root [tall] [bnr]",
                    "html": "<span class=\"uni\">&#x131DC;</span> M30: root",
                    "display": "M30"
                },
                {
                    "id": 978,
                    "text": "M31: rhizome [narrow]",
                    "html": "<span class=\"uni\">&#x131DD;</span> M31: rhizome",
                    "display": "M31"
                },
                {
                    "id": 979,
                    "text": "M32: rhizome [tall]",
                    "html": "<span class=\"uni\">&#x131DF;</span> M32: rhizome",
                    "display": "M32"
                },
                {
                    "id": 980,
                    "text": "M33: 3 grains horizontally",
                    "html": "<span class=\"uni\">&#x131E0;</span> M33: 3 grains horizontally",
                    "display": "M33"
                },
                {
                    "id": 981,
                    "text": "M33A: 3 grains vertically",
                    "html": "<span class=\"uni\">&#x131E1;</span> M33A: 3 grains vertically",
                    "display": "M33a"
                },
                {
                    "id": 982,
                    "text": "M33B: 3 grains in triangular arrangement",
                    "html": "<span class=\"uni\">&#x131E2;</span> M33B: 3 grains in triangular arrangement",
                    "display": "M33b"
                },
                {
                    "id": 983,
                    "text": "M34: ear of emmer [bdt]",
                    "html": "<span class=\"uni\">&#x131E3;</span> M34: ear of emmer",
                    "display": "M34"
                },
                {
                    "id": 984,
                    "text": "M35: heap of grain [narrow]",
                    "html": "<span class=\"uni\">&#x131E4;</span> M35: heap of grain",
                    "display": "M35"
                },
                {
                    "id": 985,
                    "text": "M36: bundle of flax showing bolls [narrow] [Dr]",
                    "html": "<span class=\"uni\">&#x131E5;</span> M36: bundle of flax showing bolls",
                    "display": "M36"
                },
                {
                    "id": 986,
                    "text": "M36B: bundle of flax showing bolls",
                    "html": "M36B: bundle of flax showing bolls",
                    "display": "M36b"
                },
                {
                    "id": 987,
                    "text": "M37: bundle of flax",
                    "html": "<span class=\"uni\">&#x131E6;</span> M37: bundle of flax",
                    "display": "M37"
                },
                {
                    "id": 988,
                    "text": "M37A: bundle of flax",
                    "html": "M37A: bundle of flax",
                    "display": "M37a"
                },
                {
                    "id": 989,
                    "text": "M38: wide bundle of flax",
                    "html": "<span class=\"uni\">&#x131E7;</span> M38: wide bundle of flax",
                    "display": "M38"
                },
                {
                    "id": 990,
                    "text": "M39: basket of fruit or grain [narrow]",
                    "html": "<span class=\"uni\">&#x131E8;</span> M39: basket of fruit or grain",
                    "display": "M39"
                },
                {
                    "id": 991,
                    "text": "M39A: basket of fruit or grain",
                    "html": "M39A: basket of fruit or grain",
                    "display": "M39a"
                },
                {
                    "id": 992,
                    "text": "M39B: basket of fruit or grain",
                    "html": "M39B: basket of fruit or grain",
                    "display": "M39b"
                },
                {
                    "id": 993,
                    "text": "M3B: branch",
                    "html": "M3B: branch",
                    "display": "M3b"
                },
                {
                    "id": 994,
                    "text": "M3D: branch",
                    "html": "M3D: branch",
                    "display": "M3d"
                },
                {
                    "id": 995,
                    "text": "M4: palm branch [tall] [rnp]",
                    "html": "<span class=\"uni\">&#x131B3;</span> M4: palm branch",
                    "display": "M4"
                },
                {
                    "id": 996,
                    "text": "M40: bundle of reeds [tall] [iz]",
                    "html": "<span class=\"uni\">&#x131E9;</span> M40: bundle of reeds",
                    "display": "M40"
                },
                {
                    "id": 997,
                    "text": "M41: piece of wood [narrow]",
                    "html": "<span class=\"uni\">&#x131EB;</span> M41: piece of wood",
                    "display": "M41"
                },
                {
                    "id": 998,
                    "text": "M42: flower [narrow]",
                    "html": "<span class=\"uni\">&#x131EC;</span> M42: flower",
                    "display": "M42"
                },
                {
                    "id": 999,
                    "text": "M43: vine on trellis",
                    "html": "<span class=\"uni\">&#x131ED;</span> M43: vine on trellis",
                    "display": "M43"
                },
                {
                    "id": 1000,
                    "text": "M43A: vine on trellis",
                    "html": "M43A: vine on trellis",
                    "display": "M43a"
                },
                {
                    "id": 1001,
                    "text": "M43B: vine on trellis",
                    "html": "M43B: vine on trellis",
                    "display": "M43b"
                },
                {
                    "id": 1002,
                    "text": "M44: thorn [tall]",
                    "html": "<span class=\"uni\">&#x131EE;</span> M44: thorn",
                    "display": "M44"
                },
                {
                    "id": 1003,
                    "text": "M46",
                    "html": "M46",
                    "display": "M46"
                },
                {
                    "id": 1004,
                    "text": "M46B",
                    "html": "M46B",
                    "display": "M46b"
                },
                {
                    "id": 1005,
                    "text": "M48",
                    "html": "M48",
                    "display": "M48"
                },
                {
                    "id": 1006,
                    "text": "M4B: palm branch",
                    "html": "M4B: palm branch",
                    "display": "M4b"
                },
                {
                    "id": 1007,
                    "text": "M5: combination of M4 and X1",
                    "html": "<span class=\"uni\">&#x131B4;</span> M5: combination of M4 and X1",
                    "display": "M5"
                },
                {
                    "id": 1008,
                    "text": "M54",
                    "html": "M54",
                    "display": "M54"
                },
                {
                    "id": 1009,
                    "text": "M54A",
                    "html": "M54A",
                    "display": "M54a"
                },
                {
                    "id": 1010,
                    "text": "M57",
                    "html": "M57",
                    "display": "M57"
                },
                {
                    "id": 1011,
                    "text": "M5B: combination of M4 and X1",
                    "html": "M5B: combination of M4 and X1",
                    "display": "M5b"
                },
                {
                    "id": 1012,
                    "text": "M6: combination of M4 and D21 [tr]",
                    "html": "<span class=\"uni\">&#x131B5;</span> M6: combination of M4 and D21",
                    "display": "M6"
                },
                {
                    "id": 1013,
                    "text": "M7: combination of M4 and Q3",
                    "html": "<span class=\"uni\">&#x131B6;</span> M7: combination of M4 and Q3",
                    "display": "M7"
                },
                {
                    "id": 1014,
                    "text": "M70",
                    "html": "M70",
                    "display": "M70"
                },
                {
                    "id": 1015,
                    "text": "M72",
                    "html": "M72",
                    "display": "M72"
                },
                {
                    "id": 1016,
                    "text": "M77A",
                    "html": "M77A",
                    "display": "M77a"
                },
                {
                    "id": 1017,
                    "text": "M7A: combination of M4 and Q3",
                    "html": "M7A: combination of M4 and Q3",
                    "display": "M7a"
                },
                {
                    "id": 1018,
                    "text": "M8: pool with lotus flowers [SA]",
                    "html": "<span class=\"uni\">&#x131B7;</span> M8: pool with lotus flowers",
                    "display": "M8"
                },
                {
                    "id": 1019,
                    "text": "M83",
                    "html": "M83",
                    "display": "M83"
                },
                {
                    "id": 1020,
                    "text": "M8A: pool with lotus flowers",
                    "html": "M8A: pool with lotus flowers",
                    "display": "M8a"
                },
                {
                    "id": 1021,
                    "text": "M8E: pool with lotus flowers",
                    "html": "M8E: pool with lotus flowers",
                    "display": "M8e"
                },
                {
                    "id": 1022,
                    "text": "M8H: pool with lotus flowers",
                    "html": "M8H: pool with lotus flowers",
                    "display": "M8h"
                },
                {
                    "id": 1023,
                    "text": "M9: lotus flower [zSn]",
                    "html": "<span class=\"uni\">&#x131B8;</span> M9: lotus flower",
                    "display": "M9"
                },
                {
                    "id": 1024,
                    "text": "M91",
                    "html": "M91",
                    "display": "M91"
                },
                {
                    "id": 1025,
                    "text": "M96",
                    "html": "M96",
                    "display": "M96"
                },
                {
                    "id": 1026,
                    "text": "M9A: lotus flower",
                    "html": "M9A: lotus flower",
                    "display": "M9a"
                },
                {
                    "id": 1027,
                    "text": "M9B: lotus flower",
                    "html": "M9B: lotus flower",
                    "display": "M9b"
                }
            ]
        },
        {
            "text": "N: Heavens, Earth, Water",
            "children": [
                {
                    "id": 1028,
                    "text": "N1: sky [broad] [pt]",
                    "html": "<span class=\"uni\">&#x131EF;</span> N1: sky",
                    "display": "N1"
                },
                {
                    "id": 1029,
                    "text": "N10: moon with lower section obscured [narrow]",
                    "html": "<span class=\"uni\">&#x131F8;</span> N10: moon with lower section obscured",
                    "display": "N10"
                },
                {
                    "id": 1030,
                    "text": "N101",
                    "html": "N101",
                    "display": "N101"
                },
                {
                    "id": 1031,
                    "text": "N102",
                    "html": "N102",
                    "display": "N102"
                },
                {
                    "id": 1032,
                    "text": "N104",
                    "html": "N104",
                    "display": "N104"
                },
                {
                    "id": 1033,
                    "text": "N105",
                    "html": "N105",
                    "display": "N105"
                },
                {
                    "id": 1034,
                    "text": "N106",
                    "html": "N106",
                    "display": "N106"
                },
                {
                    "id": 1035,
                    "text": "N11: crescent moon [broad] [iaH]",
                    "html": "<span class=\"uni\">&#x131F9;</span> N11: crescent moon",
                    "display": "N11"
                },
                {
                    "id": 1036,
                    "text": "N11A: crescent moon",
                    "html": "N11A: crescent moon",
                    "display": "N11a"
                },
                {
                    "id": 1037,
                    "text": "N12: crescent moon [broad]",
                    "html": "<span class=\"uni\">&#x131FA;</span> N12: crescent moon",
                    "display": "N12"
                },
                {
                    "id": 1038,
                    "text": "N13: combination of N11 and N14",
                    "html": "<span class=\"uni\">&#x131FB;</span> N13: combination of N11 and N14",
                    "display": "N13"
                },
                {
                    "id": 1039,
                    "text": "N14: star [dwA]",
                    "html": "<span class=\"uni\">&#x131FC;</span> N14: star",
                    "display": "N14"
                },
                {
                    "id": 1040,
                    "text": "N15: star in circle [narrow] [dwAt]",
                    "html": "<span class=\"uni\">&#x131FD;</span> N15: star in circle",
                    "display": "N15"
                },
                {
                    "id": 1041,
                    "text": "N16: land with grains [broad] [tA]",
                    "html": "<span class=\"uni\">&#x131FE;</span> N16: land with grains",
                    "display": "N16"
                },
                {
                    "id": 1042,
                    "text": "N17: land [broad]",
                    "html": "<span class=\"uni\">&#x131FF;</span> N17: land",
                    "display": "N17"
                },
                {
                    "id": 1043,
                    "text": "N18: sandy tract [broad] [iw]",
                    "html": "<span class=\"uni\">&#x13200;</span> N18: sandy tract",
                    "display": "N18"
                },
                {
                    "id": 1044,
                    "text": "N19: two sandy tracts",
                    "html": "<span class=\"uni\">&#x13203;</span> N19: two sandy tracts",
                    "display": "N19"
                },
                {
                    "id": 1045,
                    "text": "N2: sky with sceptre",
                    "html": "<span class=\"uni\">&#x131F0;</span> N2: sky with sceptre",
                    "display": "N2"
                },
                {
                    "id": 1046,
                    "text": "N20: tongue of land [broad] [wDb]",
                    "html": "<span class=\"uni\">&#x13204;</span> N20: tongue of land",
                    "display": "N20"
                },
                {
                    "id": 1047,
                    "text": "N21: short tongue of land [narrow]",
                    "html": "<span class=\"uni\">&#x13205;</span> N21: short tongue of land",
                    "display": "N21"
                },
                {
                    "id": 1048,
                    "text": "N21A: short tongue of land",
                    "html": "N21A: short tongue of land",
                    "display": "N21a"
                },
                {
                    "id": 1049,
                    "text": "N22: broad tongue of land [narrow]",
                    "html": "<span class=\"uni\">&#x13206;</span> N22: broad tongue of land",
                    "display": "N22"
                },
                {
                    "id": 1050,
                    "text": "N23: irrigation canal [narrow]",
                    "html": "<span class=\"uni\">&#x13207;</span> N23: irrigation canal",
                    "display": "N23"
                },
                {
                    "id": 1051,
                    "text": "N24: irrigation canal system [spAt]",
                    "html": "<span class=\"uni\">&#x13208;</span> N24: irrigation canal system",
                    "display": "N24"
                },
                {
                    "id": 1052,
                    "text": "N24E: irrigation canal system",
                    "html": "N24E: irrigation canal system",
                    "display": "N24e"
                },
                {
                    "id": 1053,
                    "text": "N25: three hills [xAst]",
                    "html": "<span class=\"uni\">&#x13209;</span> N25: three hills",
                    "display": "N25"
                },
                {
                    "id": 1054,
                    "text": "N26: two hills [Dw]",
                    "html": "<span class=\"uni\">&#x1320B;</span> N26: two hills",
                    "display": "N26"
                },
                {
                    "id": 1055,
                    "text": "N27: sun over mountain [Axt]",
                    "html": "<span class=\"uni\">&#x1320C;</span> N27: sun over mountain",
                    "display": "N27"
                },
                {
                    "id": 1056,
                    "text": "N28: rays of sun over hill [narrow] [xa]",
                    "html": "<span class=\"uni\">&#x1320D;</span> N28: rays of sun over hill",
                    "display": "N28"
                },
                {
                    "id": 1057,
                    "text": "N29: slope of hill [narrow] [q]",
                    "html": "<span class=\"uni\">&#x1320E;</span> N29: slope of hill",
                    "display": "N29"
                },
                {
                    "id": 1058,
                    "text": "N30: mound of earth [broad] [iAt]",
                    "html": "<span class=\"uni\">&#x1320F;</span> N30: mound of earth",
                    "display": "N30"
                },
                {
                    "id": 1059,
                    "text": "N31: road with shrubs [broad]",
                    "html": "<span class=\"uni\">&#x13210;</span> N31: road with shrubs",
                    "display": "N31"
                },
                {
                    "id": 1060,
                    "text": "N32: lump of clay [narrow]",
                    "html": "<span class=\"uni\">&#x13211;</span> N32: lump of clay",
                    "display": "N32"
                },
                {
                    "id": 1061,
                    "text": "N33: grain [narrow]",
                    "html": "<span class=\"uni\">&#x13212;</span> N33: grain",
                    "display": "N33"
                },
                {
                    "id": 1062,
                    "text": "N33A: three grains",
                    "html": "<span class=\"uni\">&#x13213;</span> N33A: three grains",
                    "display": "N33a"
                },
                {
                    "id": 1063,
                    "text": "N33AV: grain",
                    "html": "N33AV: grain",
                    "display": "N33av"
                },
                {
                    "id": 1064,
                    "text": "N34: ingot of metal [narrow]",
                    "html": "<span class=\"uni\">&#x13214;</span> N34: ingot of metal",
                    "display": "N34"
                },
                {
                    "id": 1065,
                    "text": "N35: ripple of water [broad] [n]",
                    "html": "<span class=\"uni\">&#x13216;</span> N35: ripple of water",
                    "display": "N35"
                },
                {
                    "id": 1066,
                    "text": "N35A: three ripples of water",
                    "html": "<span class=\"uni\">&#x13217;</span> N35A: three ripples of water",
                    "display": "N35a"
                },
                {
                    "id": 1067,
                    "text": "N35C: ripple of water",
                    "html": "N35C: ripple of water",
                    "display": "N35c"
                },
                {
                    "id": 1068,
                    "text": "N36: canal [broad]",
                    "html": "<span class=\"uni\">&#x13218;</span> N36: canal",
                    "display": "N36"
                },
                {
                    "id": 1069,
                    "text": "N37: pool [broad] [S]",
                    "html": "<span class=\"uni\">&#x13219;</span> N37: pool",
                    "display": "N37"
                },
                {
                    "id": 1070,
                    "text": "N37A: pool",
                    "html": "<span class=\"uni\">&#x1321A;</span> N37A: pool",
                    "display": "N37a"
                },
                {
                    "id": 1071,
                    "text": "N38: deep pool [broad]",
                    "html": "<span class=\"uni\">&#x1321B;</span> N38: deep pool",
                    "display": "N38"
                },
                {
                    "id": 1072,
                    "text": "N3B: sky with sceptre",
                    "html": "N3B: sky with sceptre",
                    "display": "N3b"
                },
                {
                    "id": 1073,
                    "text": "N4: sky with rain [idt]",
                    "html": "<span class=\"uni\">&#x131F2;</span> N4: sky with rain",
                    "display": "N4"
                },
                {
                    "id": 1074,
                    "text": "N40: combination of N37 and D54 [Sm]",
                    "html": "<span class=\"uni\">&#x1321D;</span> N40: combination of N37 and D54",
                    "display": "N40"
                },
                {
                    "id": 1075,
                    "text": "N41: well with ripple of water [narrow] [id]",
                    "html": "<span class=\"uni\">&#x1321E;</span> N41: well with ripple of water",
                    "display": "N41"
                },
                {
                    "id": 1076,
                    "text": "N42: well with line of water [narrow]",
                    "html": "<span class=\"uni\">&#x1321F;</span> N42: well with line of water",
                    "display": "N42"
                },
                {
                    "id": 1077,
                    "text": "N44",
                    "html": "N44",
                    "display": "N44"
                },
                {
                    "id": 1078,
                    "text": "N45",
                    "html": "N45",
                    "display": "N45"
                },
                {
                    "id": 1079,
                    "text": "N46",
                    "html": "N46",
                    "display": "N46"
                },
                {
                    "id": 1080,
                    "text": "N46A",
                    "html": "N46A",
                    "display": "N46a"
                },
                {
                    "id": 1081,
                    "text": "N46B",
                    "html": "N46B",
                    "display": "N46b"
                },
                {
                    "id": 1082,
                    "text": "N49",
                    "html": "N49",
                    "display": "N49"
                },
                {
                    "id": 1083,
                    "text": "N4A: sky with rain",
                    "html": "N4A: sky with rain",
                    "display": "N4a"
                },
                {
                    "id": 1084,
                    "text": "N4C: sky with rain",
                    "html": "N4C: sky with rain",
                    "display": "N4c"
                },
                {
                    "id": 1085,
                    "text": "N4E: sky with rain",
                    "html": "N4E: sky with rain",
                    "display": "N4e"
                },
                {
                    "id": 1086,
                    "text": "N4G: sky with rain",
                    "html": "N4G: sky with rain",
                    "display": "N4g"
                },
                {
                    "id": 1087,
                    "text": "N5: sun [narrow] [hrw]",
                    "html": "<span class=\"uni\">&#x131F3;</span> N5: sun",
                    "display": "N5"
                },
                {
                    "id": 1088,
                    "text": "N50",
                    "html": "N50",
                    "display": "N50"
                },
                {
                    "id": 1089,
                    "text": "N55",
                    "html": "N55",
                    "display": "N55"
                },
                {
                    "id": 1090,
                    "text": "N55A",
                    "html": "N55A",
                    "display": "N55a"
                },
                {
                    "id": 1091,
                    "text": "N57",
                    "html": "N57",
                    "display": "N57"
                },
                {
                    "id": 1092,
                    "text": "N58",
                    "html": "N58",
                    "display": "N58"
                },
                {
                    "id": 1093,
                    "text": "N58C",
                    "html": "N58C",
                    "display": "N58c"
                },
                {
                    "id": 1094,
                    "text": "N6: sun with uraeus [narrow]",
                    "html": "<span class=\"uni\">&#x131F4;</span> N6: sun with uraeus",
                    "display": "N6"
                },
                {
                    "id": 1095,
                    "text": "N62",
                    "html": "N62",
                    "display": "N62"
                },
                {
                    "id": 1096,
                    "text": "N62A",
                    "html": "N62A",
                    "display": "N62a"
                },
                {
                    "id": 1097,
                    "text": "N63",
                    "html": "N63",
                    "display": "N63"
                },
                {
                    "id": 1098,
                    "text": "N63A",
                    "html": "N63A",
                    "display": "N63a"
                },
                {
                    "id": 1099,
                    "text": "N65",
                    "html": "N65",
                    "display": "N65"
                },
                {
                    "id": 1100,
                    "text": "N6B: sun with uraeus",
                    "html": "N6B: sun with uraeus",
                    "display": "N6b"
                },
                {
                    "id": 1101,
                    "text": "N7: combination of N5 and T28",
                    "html": "<span class=\"uni\">&#x131F5;</span> N7: combination of N5 and T28",
                    "display": "N7"
                },
                {
                    "id": 1102,
                    "text": "N76A",
                    "html": "N76A",
                    "display": "N76a"
                },
                {
                    "id": 1103,
                    "text": "N77",
                    "html": "N77",
                    "display": "N77"
                },
                {
                    "id": 1104,
                    "text": "N8: sunshine [narrow] [Hnmmt]",
                    "html": "<span class=\"uni\">&#x131F6;</span> N8: sunshine",
                    "display": "N8"
                },
                {
                    "id": 1105,
                    "text": "N82",
                    "html": "N82",
                    "display": "N82"
                },
                {
                    "id": 1106,
                    "text": "N89",
                    "html": "N89",
                    "display": "N89"
                },
                {
                    "id": 1107,
                    "text": "N8A: sunshine",
                    "html": "N8A: sunshine",
                    "display": "N8a"
                },
                {
                    "id": 1108,
                    "text": "N8C: sunshine",
                    "html": "N8C: sunshine",
                    "display": "N8c"
                },
                {
                    "id": 1109,
                    "text": "N9: moon with lower half obscured [narrow] [pzD]",
                    "html": "<span class=\"uni\">&#x131F7;</span> N9: moon with lower half obscured",
                    "display": "N9"
                },
                {
                    "id": 1110,
                    "text": "N90",
                    "html": "N90",
                    "display": "N90"
                },
                {
                    "id": 1111,
                    "text": "N99",
                    "html": "N99",
                    "display": "N99"
                }
            ]
        },
        {
            "text": "O: Buildings, their Parts, etc.",
            "children": [
                {
                    "id": 1112,
                    "text": "O1: house [pr]",
                    "html": "<span class=\"uni\">&#x13250;</span> O1: house",
                    "display": "O1"
                },
                {
                    "id": 1113,
                    "text": "O10: combination of O6 and G5",
                    "html": "<span class=\"uni\">&#x13261;</span> O10: combination of O6 and G5",
                    "display": "O10"
                },
                {
                    "id": 1114,
                    "text": "O103",
                    "html": "O103",
                    "display": "O103"
                },
                {
                    "id": 1115,
                    "text": "O104",
                    "html": "O104",
                    "display": "O104"
                },
                {
                    "id": 1116,
                    "text": "O106",
                    "html": "O106",
                    "display": "O106"
                },
                {
                    "id": 1117,
                    "text": "O106B",
                    "html": "O106B",
                    "display": "O106b"
                },
                {
                    "id": 1118,
                    "text": "O11: palace [tall] [aH]",
                    "html": "<span class=\"uni\">&#x13265;</span> O11: palace",
                    "display": "O11"
                },
                {
                    "id": 1119,
                    "text": "O118",
                    "html": "O118",
                    "display": "O118"
                },
                {
                    "id": 1120,
                    "text": "O12: combination of O11 and D36",
                    "html": "<span class=\"uni\">&#x13266;</span> O12: combination of O11 and D36",
                    "display": "O12"
                },
                {
                    "id": 1121,
                    "text": "O120",
                    "html": "O120",
                    "display": "O120"
                },
                {
                    "id": 1122,
                    "text": "O124A",
                    "html": "O124A",
                    "display": "O124a"
                },
                {
                    "id": 1123,
                    "text": "O13: battlemented enclosure",
                    "html": "<span class=\"uni\">&#x13267;</span> O13: battlemented enclosure",
                    "display": "O13"
                },
                {
                    "id": 1124,
                    "text": "O131",
                    "html": "O131",
                    "display": "O131"
                },
                {
                    "id": 1125,
                    "text": "O131A",
                    "html": "O131A",
                    "display": "O131a"
                },
                {
                    "id": 1126,
                    "text": "O137",
                    "html": "O137",
                    "display": "O137"
                },
                {
                    "id": 1127,
                    "text": "O13C: battlemented enclosure",
                    "html": "O13C: battlemented enclosure",
                    "display": "O13c"
                },
                {
                    "id": 1128,
                    "text": "O13D: battlemented enclosure",
                    "html": "O13D: battlemented enclosure",
                    "display": "O13d"
                },
                {
                    "id": 1129,
                    "text": "O14: part of battlemented enclosure",
                    "html": "<span class=\"uni\">&#x13268;</span> O14: part of battlemented enclosure",
                    "display": "O14"
                },
                {
                    "id": 1130,
                    "text": "O14A: part of battlemented enclosure",
                    "html": "O14A: part of battlemented enclosure",
                    "display": "O14a"
                },
                {
                    "id": 1131,
                    "text": "O14C: part of battlemented enclosure",
                    "html": "O14C: part of battlemented enclosure",
                    "display": "O14c"
                },
                {
                    "id": 1132,
                    "text": "O15: enclosure with W10 and X1 [wsxt]",
                    "html": "<span class=\"uni\">&#x13269;</span> O15: enclosure with W10 and X1",
                    "display": "O15"
                },
                {
                    "id": 1133,
                    "text": "O157",
                    "html": "O157",
                    "display": "O157"
                },
                {
                    "id": 1134,
                    "text": "O16: gateway with serpents",
                    "html": "<span class=\"uni\">&#x1326A;</span> O16: gateway with serpents",
                    "display": "O16"
                },
                {
                    "id": 1135,
                    "text": "O169",
                    "html": "O169",
                    "display": "O169"
                },
                {
                    "id": 1136,
                    "text": "O169A",
                    "html": "O169A",
                    "display": "O169a"
                },
                {
                    "id": 1137,
                    "text": "O16B: gateway with serpents",
                    "html": "O16B: gateway with serpents",
                    "display": "O16b"
                },
                {
                    "id": 1138,
                    "text": "O17: open gateway with serpents",
                    "html": "<span class=\"uni\">&#x1326B;</span> O17: open gateway with serpents",
                    "display": "O17"
                },
                {
                    "id": 1139,
                    "text": "O172",
                    "html": "O172",
                    "display": "O172"
                },
                {
                    "id": 1140,
                    "text": "O174",
                    "html": "O174",
                    "display": "O174"
                },
                {
                    "id": 1141,
                    "text": "O175",
                    "html": "O175",
                    "display": "O175"
                },
                {
                    "id": 1142,
                    "text": "O18: shrine in profile [kAr]",
                    "html": "<span class=\"uni\">&#x1326C;</span> O18: shrine in profile",
                    "display": "O18"
                },
                {
                    "id": 1143,
                    "text": "O180",
                    "html": "O180",
                    "display": "O180"
                },
                {
                    "id": 1144,
                    "text": "O189",
                    "html": "O189",
                    "display": "O189"
                },
                {
                    "id": 1145,
                    "text": "O18A: shrine in profile",
                    "html": "O18A: shrine in profile",
                    "display": "O18a"
                },
                {
                    "id": 1146,
                    "text": "O19: shrine with fence",
                    "html": "<span class=\"uni\">&#x1326D;</span> O19: shrine with fence",
                    "display": "O19"
                },
                {
                    "id": 1147,
                    "text": "O190",
                    "html": "O190",
                    "display": "O190"
                },
                {
                    "id": 1148,
                    "text": "O194",
                    "html": "O194",
                    "display": "O194"
                },
                {
                    "id": 1149,
                    "text": "O194A",
                    "html": "O194A",
                    "display": "O194a"
                },
                {
                    "id": 1150,
                    "text": "O195A",
                    "html": "O195A",
                    "display": "O195a"
                },
                {
                    "id": 1151,
                    "text": "O196",
                    "html": "O196",
                    "display": "O196"
                },
                {
                    "id": 1152,
                    "text": "O2: combination of O1 and T3",
                    "html": "<span class=\"uni\">&#x13252;</span> O2: combination of O1 and T3",
                    "display": "O2"
                },
                {
                    "id": 1153,
                    "text": "O20: shrine",
                    "html": "<span class=\"uni\">&#x1326F;</span> O20: shrine",
                    "display": "O20"
                },
                {
                    "id": 1154,
                    "text": "O204",
                    "html": "O204",
                    "display": "O204"
                },
                {
                    "id": 1155,
                    "text": "O206",
                    "html": "O206",
                    "display": "O206"
                },
                {
                    "id": 1156,
                    "text": "O207",
                    "html": "O207",
                    "display": "O207"
                },
                {
                    "id": 1157,
                    "text": "O21: fa&ccedil;ade of shrine",
                    "html": "<span class=\"uni\">&#x13271;</span> O21: fa&ccedil;ade of shrine",
                    "display": "O21"
                },
                {
                    "id": 1158,
                    "text": "O210",
                    "html": "O210",
                    "display": "O210"
                },
                {
                    "id": 1159,
                    "text": "O210A",
                    "html": "O210A",
                    "display": "O210a"
                },
                {
                    "id": 1160,
                    "text": "O211",
                    "html": "O211",
                    "display": "O211"
                },
                {
                    "id": 1161,
                    "text": "O212",
                    "html": "O212",
                    "display": "O212"
                },
                {
                    "id": 1162,
                    "text": "O214",
                    "html": "O214",
                    "display": "O214"
                },
                {
                    "id": 1163,
                    "text": "O21B: fa&ccedil;ade of shrine",
                    "html": "O21B: fa&ccedil;ade of shrine",
                    "display": "O21b"
                },
                {
                    "id": 1164,
                    "text": "O22: booth with pole [zH]",
                    "html": "<span class=\"uni\">&#x13272;</span> O22: booth with pole",
                    "display": "O22"
                },
                {
                    "id": 1165,
                    "text": "O22C: booth with pole",
                    "html": "O22C: booth with pole",
                    "display": "O22c"
                },
                {
                    "id": 1166,
                    "text": "O23: double platform",
                    "html": "<span class=\"uni\">&#x13273;</span> O23: double platform",
                    "display": "O23"
                },
                {
                    "id": 1167,
                    "text": "O230",
                    "html": "O230",
                    "display": "O230"
                },
                {
                    "id": 1168,
                    "text": "O231",
                    "html": "O231",
                    "display": "O231"
                },
                {
                    "id": 1169,
                    "text": "O233",
                    "html": "O233",
                    "display": "O233"
                },
                {
                    "id": 1170,
                    "text": "O238",
                    "html": "O238",
                    "display": "O238"
                },
                {
                    "id": 1171,
                    "text": "O23F: double platform",
                    "html": "O23F: double platform",
                    "display": "O23f"
                },
                {
                    "id": 1172,
                    "text": "O24: pyramid",
                    "html": "<span class=\"uni\">&#x13274;</span> O24: pyramid",
                    "display": "O24"
                },
                {
                    "id": 1173,
                    "text": "O243",
                    "html": "O243",
                    "display": "O243"
                },
                {
                    "id": 1174,
                    "text": "O24A: pedestal of sun temple",
                    "html": "<span class=\"uni\">&#x13275;</span> O24A: pedestal of sun temple",
                    "display": "O24a"
                },
                {
                    "id": 1175,
                    "text": "O25: obelisk [txn]",
                    "html": "<span class=\"uni\">&#x13276;</span> O25: obelisk",
                    "display": "O25"
                },
                {
                    "id": 1176,
                    "text": "O26: stela",
                    "html": "<span class=\"uni\">&#x13278;</span> O26: stela",
                    "display": "O26"
                },
                {
                    "id": 1177,
                    "text": "O260B",
                    "html": "O260B",
                    "display": "O260b"
                },
                {
                    "id": 1178,
                    "text": "O26A: stela",
                    "html": "O26A: stela",
                    "display": "O26a"
                },
                {
                    "id": 1179,
                    "text": "O27: hall of columns",
                    "html": "<span class=\"uni\">&#x13279;</span> O27: hall of columns",
                    "display": "O27"
                },
                {
                    "id": 1180,
                    "text": "O28: column [tall] [iwn]",
                    "html": "<span class=\"uni\">&#x1327A;</span> O28: column",
                    "display": "O28"
                },
                {
                    "id": 1181,
                    "text": "O286",
                    "html": "O286",
                    "display": "O286"
                },
                {
                    "id": 1182,
                    "text": "O289",
                    "html": "O289",
                    "display": "O289"
                },
                {
                    "id": 1183,
                    "text": "O29: horizontal wooden column [broad] [aA]",
                    "html": "<span class=\"uni\">&#x1327B;</span> O29: horizontal wooden column",
                    "display": "O29"
                },
                {
                    "id": 1184,
                    "text": "O292",
                    "html": "O292",
                    "display": "O292"
                },
                {
                    "id": 1185,
                    "text": "O29V: horizontal wooden column",
                    "html": "O29V: horizontal wooden column",
                    "display": "O29v"
                },
                {
                    "id": 1186,
                    "text": "O3: combination of O1, P8, X3, and W22",
                    "html": "<span class=\"uni\">&#x13253;</span> O3: combination of O1, P8, X3, and W22",
                    "display": "O3"
                },
                {
                    "id": 1187,
                    "text": "O30: support [tall] [zxnt]",
                    "html": "<span class=\"uni\">&#x1327D;</span> O30: support",
                    "display": "O30"
                },
                {
                    "id": 1188,
                    "text": "O307",
                    "html": "O307",
                    "display": "O307"
                },
                {
                    "id": 1189,
                    "text": "O30U: support",
                    "html": "O30U: support",
                    "display": "O30u"
                },
                {
                    "id": 1190,
                    "text": "O31: door [broad]",
                    "html": "<span class=\"uni\">&#x1327F;</span> O31: door",
                    "display": "O31"
                },
                {
                    "id": 1191,
                    "text": "O32: gateway",
                    "html": "<span class=\"uni\">&#x13280;</span> O32: gateway",
                    "display": "O32"
                },
                {
                    "id": 1192,
                    "text": "O32A: gateway",
                    "html": "O32A: gateway",
                    "display": "O32a"
                },
                {
                    "id": 1193,
                    "text": "O32D: gateway",
                    "html": "O32D: gateway",
                    "display": "O32d"
                },
                {
                    "id": 1194,
                    "text": "O33: fa&ccedil;ade of palace",
                    "html": "<span class=\"uni\">&#x13281;</span> O33: fa&ccedil;ade of palace",
                    "display": "O33"
                },
                {
                    "id": 1195,
                    "text": "O333",
                    "html": "O333",
                    "display": "O333"
                },
                {
                    "id": 1196,
                    "text": "O338",
                    "html": "O338",
                    "display": "O338"
                },
                {
                    "id": 1197,
                    "text": "O34: bolt [broad] [z]",
                    "html": "<span class=\"uni\">&#x13283;</span> O34: bolt",
                    "display": "O34"
                },
                {
                    "id": 1198,
                    "text": "O340",
                    "html": "O340",
                    "display": "O340"
                },
                {
                    "id": 1199,
                    "text": "O35: combination of O34 and D54 [zb]",
                    "html": "<span class=\"uni\">&#x13284;</span> O35: combination of O34 and D54",
                    "display": "O35"
                },
                {
                    "id": 1200,
                    "text": "O353",
                    "html": "O353",
                    "display": "O353"
                },
                {
                    "id": 1201,
                    "text": "O36: wall [tall] [inb]",
                    "html": "<span class=\"uni\">&#x13285;</span> O36: wall",
                    "display": "O36"
                },
                {
                    "id": 1202,
                    "text": "O36A: opening of oval fortified wall enclosure",
                    "html": "<span class=\"uni\">&#x13286;</span> O36A: opening of oval fortified wall enclosure",
                    "display": "O36a"
                },
                {
                    "id": 1203,
                    "text": "O36B: closing of oval fortified wall enclosure",
                    "html": "<span class=\"uni\">&#x13287;</span> O36B: closing of oval fortified wall enclosure",
                    "display": "O36b"
                },
                {
                    "id": 1204,
                    "text": "O36C: opening of square fortified wall enclosure",
                    "html": "<span class=\"uni\">&#x13288;</span> O36C: opening of square fortified wall enclosure",
                    "display": "O36c"
                },
                {
                    "id": 1205,
                    "text": "O36H: wall",
                    "html": "O36H: wall",
                    "display": "O36h"
                },
                {
                    "id": 1206,
                    "text": "O37: falling wall",
                    "html": "<span class=\"uni\">&#x1328A;</span> O37: falling wall",
                    "display": "O37"
                },
                {
                    "id": 1207,
                    "text": "O37A: falling wall",
                    "html": "O37A: falling wall",
                    "display": "O37a"
                },
                {
                    "id": 1208,
                    "text": "O38: corner of wall",
                    "html": "<span class=\"uni\">&#x1328B;</span> O38: corner of wall",
                    "display": "O38"
                },
                {
                    "id": 1209,
                    "text": "O38A: corner of wall",
                    "html": "O38A: corner of wall",
                    "display": "O38a"
                },
                {
                    "id": 1210,
                    "text": "O39: stone [narrow]",
                    "html": "<span class=\"uni\">&#x1328C;</span> O39: stone",
                    "display": "O39"
                },
                {
                    "id": 1211,
                    "text": "O4: shelter [h]",
                    "html": "<span class=\"uni\">&#x13254;</span> O4: shelter",
                    "display": "O4"
                },
                {
                    "id": 1212,
                    "text": "O40: stairway",
                    "html": "<span class=\"uni\">&#x1328D;</span> O40: stairway",
                    "display": "O40"
                },
                {
                    "id": 1213,
                    "text": "O40A: stairway",
                    "html": "O40A: stairway",
                    "display": "O40a"
                },
                {
                    "id": 1214,
                    "text": "O41: double stairway",
                    "html": "<span class=\"uni\">&#x1328E;</span> O41: double stairway",
                    "display": "O41"
                },
                {
                    "id": 1215,
                    "text": "O42: fence [broad] [Szp]",
                    "html": "<span class=\"uni\">&#x1328F;</span> O42: fence",
                    "display": "O42"
                },
                {
                    "id": 1216,
                    "text": "O43: low fence [broad]",
                    "html": "<span class=\"uni\">&#x13290;</span> O43: low fence",
                    "display": "O43"
                },
                {
                    "id": 1217,
                    "text": "O44: emblem of Min [tall]",
                    "html": "<span class=\"uni\">&#x13291;</span> O44: emblem of Min",
                    "display": "O44"
                },
                {
                    "id": 1218,
                    "text": "O45: domed building [narrow] [ipt]",
                    "html": "<span class=\"uni\">&#x13292;</span> O45: domed building",
                    "display": "O45"
                },
                {
                    "id": 1219,
                    "text": "O46: domed building [narrow]",
                    "html": "<span class=\"uni\">&#x13293;</span> O46: domed building",
                    "display": "O46"
                },
                {
                    "id": 1220,
                    "text": "O46B: domed building",
                    "html": "O46B: domed building",
                    "display": "O46b"
                },
                {
                    "id": 1221,
                    "text": "O47: enclosed mound [narrow] [nxn]",
                    "html": "<span class=\"uni\">&#x13294;</span> O47: enclosed mound",
                    "display": "O47"
                },
                {
                    "id": 1222,
                    "text": "O48: enclosed mound [narrow]",
                    "html": "<span class=\"uni\">&#x13295;</span> O48: enclosed mound",
                    "display": "O48"
                },
                {
                    "id": 1223,
                    "text": "O48A: enclosed mound",
                    "html": "O48A: enclosed mound",
                    "display": "O48a"
                },
                {
                    "id": 1224,
                    "text": "O49: village [narrow] [niwt]",
                    "html": "<span class=\"uni\">&#x13296;</span> O49: village",
                    "display": "O49"
                },
                {
                    "id": 1225,
                    "text": "O4A: shelter",
                    "html": "O4A: shelter",
                    "display": "O4a"
                },
                {
                    "id": 1226,
                    "text": "O5: winding wall from upper-left corner",
                    "html": "<span class=\"uni\">&#x13255;</span> O5: winding wall from upper-left corner",
                    "display": "O5"
                },
                {
                    "id": 1227,
                    "text": "O50: threshing floor [narrow] [zp]",
                    "html": "<span class=\"uni\">&#x13297;</span> O50: threshing floor",
                    "display": "O50"
                },
                {
                    "id": 1228,
                    "text": "O51: pile of grain [Snwt]",
                    "html": "<span class=\"uni\">&#x1329A;</span> O51: pile of grain",
                    "display": "O51"
                },
                {
                    "id": 1229,
                    "text": "O51A: pile of grain",
                    "html": "O51A: pile of grain",
                    "display": "O51a"
                },
                {
                    "id": 1230,
                    "text": "O51B: pile of grain",
                    "html": "O51B: pile of grain",
                    "display": "O51b"
                },
                {
                    "id": 1231,
                    "text": "O53",
                    "html": "O53",
                    "display": "O53"
                },
                {
                    "id": 1232,
                    "text": "O54",
                    "html": "O54",
                    "display": "O54"
                },
                {
                    "id": 1233,
                    "text": "O59",
                    "html": "O59",
                    "display": "O59"
                },
                {
                    "id": 1234,
                    "text": "O5U: winding wall from upper-left corner",
                    "html": "O5U: winding wall from upper-left corner",
                    "display": "O5u"
                },
                {
                    "id": 1235,
                    "text": "O6: enclosure [Hwt]",
                    "html": "<span class=\"uni\">&#x13257;</span> O6: enclosure",
                    "display": "O6"
                },
                {
                    "id": 1236,
                    "text": "O62",
                    "html": "O62",
                    "display": "O62"
                },
                {
                    "id": 1237,
                    "text": "O64",
                    "html": "O64",
                    "display": "O64"
                },
                {
                    "id": 1238,
                    "text": "O6E: closing of <span class=\"trans\">Hwt</span>-enclosure",
                    "html": "<span class=\"uni\">&#x1325C;</span> O6E: closing of <span class=\"trans\">Hwt</span>-enclosure",
                    "display": "O6e"
                },
                {
                    "id": 1239,
                    "text": "O6F: closing of <span class=\"trans\">Hwt</span>-enclosure",
                    "html": "<span class=\"uni\">&#x1325D;</span> O6F: closing of <span class=\"trans\">Hwt</span>-enclosure",
                    "display": "O6f"
                },
                {
                    "id": 1240,
                    "text": "O6G: enclosure",
                    "html": "O6G: enclosure",
                    "display": "O6g"
                },
                {
                    "id": 1241,
                    "text": "O7: combination of O6 and X1",
                    "html": "<span class=\"uni\">&#x1325E;</span> O7: combination of O6 and X1",
                    "display": "O7"
                },
                {
                    "id": 1242,
                    "text": "O70",
                    "html": "O70",
                    "display": "O70"
                },
                {
                    "id": 1243,
                    "text": "O8: combination of O7 and O29",
                    "html": "<span class=\"uni\">&#x1325F;</span> O8: combination of O7 and O29",
                    "display": "O8"
                },
                {
                    "id": 1244,
                    "text": "O84",
                    "html": "O84",
                    "display": "O84"
                },
                {
                    "id": 1245,
                    "text": "O85",
                    "html": "O85",
                    "display": "O85"
                },
                {
                    "id": 1246,
                    "text": "O85A",
                    "html": "O85A",
                    "display": "O85a"
                },
                {
                    "id": 1247,
                    "text": "O88",
                    "html": "O88",
                    "display": "O88"
                },
                {
                    "id": 1248,
                    "text": "O9: combination of O7 and V30",
                    "html": "<span class=\"uni\">&#x13260;</span> O9: combination of O7 and V30",
                    "display": "O9"
                },
                {
                    "id": 1249,
                    "text": "O90",
                    "html": "O90",
                    "display": "O90"
                },
                {
                    "id": 1250,
                    "text": "O90A",
                    "html": "O90A",
                    "display": "O90a"
                },
                {
                    "id": 1251,
                    "text": "O91",
                    "html": "O91",
                    "display": "O91"
                },
                {
                    "id": 1252,
                    "text": "O9B: combination of O7 and V30",
                    "html": "O9B: combination of O7 and V30",
                    "display": "O9b"
                },
                {
                    "id": 1253,
                    "text": "O9C: combination of O7 and V30",
                    "html": "O9C: combination of O7 and V30",
                    "display": "O9c"
                }
            ]
        },
        {
            "text": "P: Ships and Parts Thereof",
            "children": [
                {
                    "id": 1254,
                    "text": "P1: boat",
                    "html": "<span class=\"uni\">&#x1329B;</span> P1: boat",
                    "display": "P1"
                },
                {
                    "id": 1255,
                    "text": "P10: steering oar",
                    "html": "<span class=\"uni\">&#x132A6;</span> P10: steering oar",
                    "display": "P10"
                },
                {
                    "id": 1256,
                    "text": "P105",
                    "html": "P105",
                    "display": "P105"
                },
                {
                    "id": 1257,
                    "text": "P106",
                    "html": "P106",
                    "display": "P106"
                },
                {
                    "id": 1258,
                    "text": "P11: mooring post [tall]",
                    "html": "<span class=\"uni\">&#x132A7;</span> P11: mooring post",
                    "display": "P11"
                },
                {
                    "id": 1259,
                    "text": "P111",
                    "html": "P111",
                    "display": "P111"
                },
                {
                    "id": 1260,
                    "text": "P114",
                    "html": "P114",
                    "display": "P114"
                },
                {
                    "id": 1261,
                    "text": "P121",
                    "html": "P121",
                    "display": "P121"
                },
                {
                    "id": 1262,
                    "text": "P13",
                    "html": "P13",
                    "display": "P13"
                },
                {
                    "id": 1263,
                    "text": "P16A",
                    "html": "P16A",
                    "display": "P16a"
                },
                {
                    "id": 1264,
                    "text": "P17",
                    "html": "P17",
                    "display": "P17"
                },
                {
                    "id": 1265,
                    "text": "P18",
                    "html": "P18",
                    "display": "P18"
                },
                {
                    "id": 1266,
                    "text": "P19",
                    "html": "P19",
                    "display": "P19"
                },
                {
                    "id": 1267,
                    "text": "P1A: boat upside down",
                    "html": "<span class=\"uni\">&#x1329C;</span> P1A: boat upside down",
                    "display": "P1a"
                },
                {
                    "id": 1268,
                    "text": "P2: ship under sail",
                    "html": "<span class=\"uni\">&#x1329D;</span> P2: ship under sail",
                    "display": "P2"
                },
                {
                    "id": 1269,
                    "text": "P21",
                    "html": "P21",
                    "display": "P21"
                },
                {
                    "id": 1270,
                    "text": "P23A",
                    "html": "P23A",
                    "display": "P23a"
                },
                {
                    "id": 1271,
                    "text": "P24",
                    "html": "P24",
                    "display": "P24"
                },
                {
                    "id": 1272,
                    "text": "P2F: ship under sail",
                    "html": "P2F: ship under sail",
                    "display": "P2f"
                },
                {
                    "id": 1273,
                    "text": "P2G: ship under sail",
                    "html": "P2G: ship under sail",
                    "display": "P2g"
                },
                {
                    "id": 1274,
                    "text": "P2H: ship under sail",
                    "html": "P2H: ship under sail",
                    "display": "P2h"
                },
                {
                    "id": 1275,
                    "text": "P3: sacred barque",
                    "html": "<span class=\"uni\">&#x1329E;</span> P3: sacred barque",
                    "display": "P3"
                },
                {
                    "id": 1276,
                    "text": "P30",
                    "html": "P30",
                    "display": "P30"
                },
                {
                    "id": 1277,
                    "text": "P32",
                    "html": "P32",
                    "display": "P32"
                },
                {
                    "id": 1278,
                    "text": "P34",
                    "html": "P34",
                    "display": "P34"
                },
                {
                    "id": 1279,
                    "text": "P36",
                    "html": "P36",
                    "display": "P36"
                },
                {
                    "id": 1280,
                    "text": "P36B",
                    "html": "P36B",
                    "display": "P36b"
                },
                {
                    "id": 1281,
                    "text": "P37",
                    "html": "P37",
                    "display": "P37"
                },
                {
                    "id": 1282,
                    "text": "P38",
                    "html": "P38",
                    "display": "P38"
                },
                {
                    "id": 1283,
                    "text": "P4: boat with net [wHa]",
                    "html": "<span class=\"uni\">&#x132A0;</span> P4: boat with net",
                    "display": "P4"
                },
                {
                    "id": 1284,
                    "text": "P41A",
                    "html": "P41A",
                    "display": "P41a"
                },
                {
                    "id": 1285,
                    "text": "P46",
                    "html": "P46",
                    "display": "P46"
                },
                {
                    "id": 1286,
                    "text": "P47",
                    "html": "P47",
                    "display": "P47"
                },
                {
                    "id": 1287,
                    "text": "P47A",
                    "html": "P47A",
                    "display": "P47a"
                },
                {
                    "id": 1288,
                    "text": "P4A: boat with net",
                    "html": "P4A: boat with net",
                    "display": "P4a"
                },
                {
                    "id": 1289,
                    "text": "P4B: boat with net",
                    "html": "P4B: boat with net",
                    "display": "P4b"
                },
                {
                    "id": 1290,
                    "text": "P5: sail [TAw]",
                    "html": "<span class=\"uni\">&#x132A1;</span> P5: sail",
                    "display": "P5"
                },
                {
                    "id": 1291,
                    "text": "P50",
                    "html": "P50",
                    "display": "P50"
                },
                {
                    "id": 1292,
                    "text": "P59",
                    "html": "P59",
                    "display": "P59"
                },
                {
                    "id": 1293,
                    "text": "P6: mast [tall] [aHa]",
                    "html": "<span class=\"uni\">&#x132A2;</span> P6: mast",
                    "display": "P6"
                },
                {
                    "id": 1294,
                    "text": "P60A",
                    "html": "P60A",
                    "display": "P60a"
                },
                {
                    "id": 1295,
                    "text": "P60C",
                    "html": "P60C",
                    "display": "P60c"
                },
                {
                    "id": 1296,
                    "text": "P6B: mast",
                    "html": "P6B: mast",
                    "display": "P6b"
                },
                {
                    "id": 1297,
                    "text": "P7: combination of P6 and D36",
                    "html": "<span class=\"uni\">&#x132A3;</span> P7: combination of P6 and D36",
                    "display": "P7"
                },
                {
                    "id": 1298,
                    "text": "P71A",
                    "html": "P71A",
                    "display": "P71a"
                },
                {
                    "id": 1299,
                    "text": "P71B",
                    "html": "P71B",
                    "display": "P71b"
                },
                {
                    "id": 1300,
                    "text": "P77",
                    "html": "P77",
                    "display": "P77"
                },
                {
                    "id": 1301,
                    "text": "P8: oar [tall] [xrw]",
                    "html": "<span class=\"uni\">&#x132A4;</span> P8: oar",
                    "display": "P8"
                },
                {
                    "id": 1302,
                    "text": "P8A: oar",
                    "html": "P8A: oar",
                    "display": "P8a"
                },
                {
                    "id": 1303,
                    "text": "P8H: oar",
                    "html": "P8H: oar",
                    "display": "P8h"
                },
                {
                    "id": 1304,
                    "text": "P9: combination of P8 and I9",
                    "html": "<span class=\"uni\">&#x132A5;</span> P9: combination of P8 and I9",
                    "display": "P9"
                },
                {
                    "id": 1305,
                    "text": "P90",
                    "html": "P90",
                    "display": "P90"
                },
                {
                    "id": 1306,
                    "text": "P92",
                    "html": "P92",
                    "display": "P92"
                },
                {
                    "id": 1307,
                    "text": "P93",
                    "html": "P93",
                    "display": "P93"
                },
                {
                    "id": 1308,
                    "text": "P94",
                    "html": "P94",
                    "display": "P94"
                }
            ]
        },
        {
            "text": "Q: Household and Funerary Furniture",
            "children": [
                {
                    "id": 1309,
                    "text": "Q1: seat [st]",
                    "html": "<span class=\"uni\">&#x132A8;</span> Q1: seat",
                    "display": "Q1"
                },
                {
                    "id": 1310,
                    "text": "Q11",
                    "html": "Q11",
                    "display": "Q11"
                },
                {
                    "id": 1311,
                    "text": "Q12",
                    "html": "Q12",
                    "display": "Q12"
                },
                {
                    "id": 1312,
                    "text": "Q12A",
                    "html": "Q12A",
                    "display": "Q12a"
                },
                {
                    "id": 1313,
                    "text": "Q13",
                    "html": "Q13",
                    "display": "Q13"
                },
                {
                    "id": 1314,
                    "text": "Q14",
                    "html": "Q14",
                    "display": "Q14"
                },
                {
                    "id": 1315,
                    "text": "Q16",
                    "html": "Q16",
                    "display": "Q16"
                },
                {
                    "id": 1316,
                    "text": "Q18",
                    "html": "Q18",
                    "display": "Q18"
                },
                {
                    "id": 1317,
                    "text": "Q18A",
                    "html": "Q18A",
                    "display": "Q18a"
                },
                {
                    "id": 1318,
                    "text": "Q19",
                    "html": "Q19",
                    "display": "Q19"
                },
                {
                    "id": 1319,
                    "text": "Q2: portable seat [wz]",
                    "html": "<span class=\"uni\">&#x132A9;</span> Q2: portable seat",
                    "display": "Q2"
                },
                {
                    "id": 1320,
                    "text": "Q23",
                    "html": "Q23",
                    "display": "Q23"
                },
                {
                    "id": 1321,
                    "text": "Q24",
                    "html": "Q24",
                    "display": "Q24"
                },
                {
                    "id": 1322,
                    "text": "Q27",
                    "html": "Q27",
                    "display": "Q27"
                },
                {
                    "id": 1323,
                    "text": "Q28A",
                    "html": "Q28A",
                    "display": "Q28a"
                },
                {
                    "id": 1324,
                    "text": "Q29",
                    "html": "Q29",
                    "display": "Q29"
                },
                {
                    "id": 1325,
                    "text": "Q2B: portable seat",
                    "html": "Q2B: portable seat",
                    "display": "Q2b"
                },
                {
                    "id": 1326,
                    "text": "Q2C: portable seat",
                    "html": "Q2C: portable seat",
                    "display": "Q2c"
                },
                {
                    "id": 1327,
                    "text": "Q3: stool [narrow] [p]",
                    "html": "<span class=\"uni\">&#x132AA;</span> Q3: stool",
                    "display": "Q3"
                },
                {
                    "id": 1328,
                    "text": "Q32",
                    "html": "Q32",
                    "display": "Q32"
                },
                {
                    "id": 1329,
                    "text": "Q33",
                    "html": "Q33",
                    "display": "Q33"
                },
                {
                    "id": 1330,
                    "text": "Q36A",
                    "html": "Q36A",
                    "display": "Q36a"
                },
                {
                    "id": 1331,
                    "text": "Q37",
                    "html": "Q37",
                    "display": "Q37"
                },
                {
                    "id": 1332,
                    "text": "Q38",
                    "html": "Q38",
                    "display": "Q38"
                },
                {
                    "id": 1333,
                    "text": "Q4: head-rest",
                    "html": "<span class=\"uni\">&#x132AB;</span> Q4: head-rest",
                    "display": "Q4"
                },
                {
                    "id": 1334,
                    "text": "Q43",
                    "html": "Q43",
                    "display": "Q43"
                },
                {
                    "id": 1335,
                    "text": "Q5: chest",
                    "html": "<span class=\"uni\">&#x132AC;</span> Q5: chest",
                    "display": "Q5"
                },
                {
                    "id": 1336,
                    "text": "Q6: coffin [qrsw]",
                    "html": "<span class=\"uni\">&#x132AD;</span> Q6: coffin",
                    "display": "Q6"
                },
                {
                    "id": 1337,
                    "text": "Q6B: coffin",
                    "html": "Q6B: coffin",
                    "display": "Q6b"
                },
                {
                    "id": 1338,
                    "text": "Q6E: coffin",
                    "html": "Q6E: coffin",
                    "display": "Q6e"
                },
                {
                    "id": 1339,
                    "text": "Q7: brazier [tall]",
                    "html": "<span class=\"uni\">&#x132AE;</span> Q7: brazier",
                    "display": "Q7"
                },
                {
                    "id": 1340,
                    "text": "Q7A: brazier",
                    "html": "Q7A: brazier",
                    "display": "Q7a"
                },
                {
                    "id": 1341,
                    "text": "Q7E: brazier",
                    "html": "Q7E: brazier",
                    "display": "Q7e"
                },
                {
                    "id": 1342,
                    "text": "Q7F: brazier",
                    "html": "Q7F: brazier",
                    "display": "Q7f"
                },
                {
                    "id": 1343,
                    "text": "Q7G: brazier",
                    "html": "Q7G: brazier",
                    "display": "Q7g"
                }
            ]
        },
        {
            "text": "R: Temple Furniture and Sacred Symbols",
            "children": [
                {
                    "id": 1344,
                    "text": "R1: high table with offerings [xAt]",
                    "html": "<span class=\"uni\">&#x132AF;</span> R1: high table with offerings",
                    "display": "R1"
                },
                {
                    "id": 1345,
                    "text": "R10: combination of R8, T28 and N29",
                    "html": "<span class=\"uni\">&#x132BB;</span> R10: combination of R8, T28 and N29",
                    "display": "R10"
                },
                {
                    "id": 1346,
                    "text": "R100",
                    "html": "R100",
                    "display": "R100"
                },
                {
                    "id": 1347,
                    "text": "R103",
                    "html": "R103",
                    "display": "R103"
                },
                {
                    "id": 1348,
                    "text": "R10A: combination of R8 and T28",
                    "html": "<span class=\"uni\">&#x132BC;</span> R10A: combination of R8 and T28",
                    "display": "R10a"
                },
                {
                    "id": 1349,
                    "text": "R10B: combination of R8, T28 and N29",
                    "html": "R10B: combination of R8, T28 and N29",
                    "display": "R10b"
                },
                {
                    "id": 1350,
                    "text": "R10H: combination of R8, T28 and N29",
                    "html": "R10H: combination of R8, T28 and N29",
                    "display": "R10h"
                },
                {
                    "id": 1351,
                    "text": "R11: reed column [tall] [Dd]",
                    "html": "<span class=\"uni\">&#x132BD;</span> R11: reed column",
                    "display": "R11"
                },
                {
                    "id": 1352,
                    "text": "R114",
                    "html": "R114",
                    "display": "R114"
                },
                {
                    "id": 1353,
                    "text": "R118",
                    "html": "R118",
                    "display": "R118"
                },
                {
                    "id": 1354,
                    "text": "R12: standard",
                    "html": "<span class=\"uni\">&#x132BE;</span> R12: standard",
                    "display": "R12"
                },
                {
                    "id": 1355,
                    "text": "R127A",
                    "html": "R127A",
                    "display": "R127a"
                },
                {
                    "id": 1356,
                    "text": "R12A: standard",
                    "html": "R12A: standard",
                    "display": "R12a"
                },
                {
                    "id": 1357,
                    "text": "R13: falcon and feather on standard",
                    "html": "<span class=\"uni\">&#x132BF;</span> R13: falcon and feather on standard",
                    "display": "R13"
                },
                {
                    "id": 1358,
                    "text": "R14: feather on standard [tall] [imnt]",
                    "html": "<span class=\"uni\">&#x132C0;</span> R14: feather on standard",
                    "display": "R14"
                },
                {
                    "id": 1359,
                    "text": "R15: spear emblem [tall] [iAb]",
                    "html": "<span class=\"uni\">&#x132C1;</span> R15: spear emblem",
                    "display": "R15"
                },
                {
                    "id": 1360,
                    "text": "R15A: spear emblem",
                    "html": "R15A: spear emblem",
                    "display": "R15a"
                },
                {
                    "id": 1361,
                    "text": "R16: sceptre with feathers and string [tall] [wx]",
                    "html": "<span class=\"uni\">&#x132C2;</span> R16: sceptre with feathers and string",
                    "display": "R16"
                },
                {
                    "id": 1362,
                    "text": "R17: wig on pole [tall]",
                    "html": "<span class=\"uni\">&#x132C4;</span> R17: wig on pole",
                    "display": "R17"
                },
                {
                    "id": 1363,
                    "text": "R18: combination of R17 and N24",
                    "html": "<span class=\"uni\">&#x132C5;</span> R18: combination of R17 and N24",
                    "display": "R18"
                },
                {
                    "id": 1364,
                    "text": "R18A: combination of R17 and N24",
                    "html": "R18A: combination of R17 and N24",
                    "display": "R18a"
                },
                {
                    "id": 1365,
                    "text": "R18B: combination of R17 and N24",
                    "html": "R18B: combination of R17 and N24",
                    "display": "R18b"
                },
                {
                    "id": 1366,
                    "text": "R19: S40 with feather [tall]",
                    "html": "<span class=\"uni\">&#x132C6;</span> R19: S40 with feather",
                    "display": "R19"
                },
                {
                    "id": 1367,
                    "text": "R19A: S40 with feather",
                    "html": "R19A: S40 with feather",
                    "display": "R19a"
                },
                {
                    "id": 1368,
                    "text": "R1C: high table with offerings",
                    "html": "R1C: high table with offerings",
                    "display": "R1c"
                },
                {
                    "id": 1369,
                    "text": "R1E: high table with offerings",
                    "html": "R1E: high table with offerings",
                    "display": "R1e"
                },
                {
                    "id": 1370,
                    "text": "R2: table with slices of bread",
                    "html": "<span class=\"uni\">&#x132B0;</span> R2: table with slices of bread",
                    "display": "R2"
                },
                {
                    "id": 1371,
                    "text": "R20: flower with horns",
                    "html": "<span class=\"uni\">&#x132C7;</span> R20: flower with horns",
                    "display": "R20"
                },
                {
                    "id": 1372,
                    "text": "R22: two narrow belemnites [broad] [xm]",
                    "html": "<span class=\"uni\">&#x132C9;</span> R22: two narrow belemnites",
                    "display": "R22"
                },
                {
                    "id": 1373,
                    "text": "R24: two bows tied horizontally [broad]",
                    "html": "<span class=\"uni\">&#x132CB;</span> R24: two bows tied horizontally",
                    "display": "R24"
                },
                {
                    "id": 1374,
                    "text": "R25: two bows tied vertically",
                    "html": "<span class=\"uni\">&#x132CC;</span> R25: two bows tied vertically",
                    "display": "R25"
                },
                {
                    "id": 1375,
                    "text": "R2B: table with slices of bread",
                    "html": "R2B: table with slices of bread",
                    "display": "R2b"
                },
                {
                    "id": 1376,
                    "text": "R3: low table with offerings",
                    "html": "<span class=\"uni\">&#x132B2;</span> R3: low table with offerings",
                    "display": "R3"
                },
                {
                    "id": 1377,
                    "text": "R30",
                    "html": "R30",
                    "display": "R30"
                },
                {
                    "id": 1378,
                    "text": "R31",
                    "html": "R31",
                    "display": "R31"
                },
                {
                    "id": 1379,
                    "text": "R33",
                    "html": "R33",
                    "display": "R33"
                },
                {
                    "id": 1380,
                    "text": "R34",
                    "html": "R34",
                    "display": "R34"
                },
                {
                    "id": 1381,
                    "text": "R36",
                    "html": "R36",
                    "display": "R36"
                },
                {
                    "id": 1382,
                    "text": "R36A",
                    "html": "R36A",
                    "display": "R36a"
                },
                {
                    "id": 1383,
                    "text": "R36C",
                    "html": "R36C",
                    "display": "R36c"
                },
                {
                    "id": 1384,
                    "text": "R3A: low table",
                    "html": "<span class=\"uni\">&#x132B3;</span> R3A: low table",
                    "display": "R3a"
                },
                {
                    "id": 1385,
                    "text": "R3AC: low table with offerings",
                    "html": "R3AC: low table with offerings",
                    "display": "R3ac"
                },
                {
                    "id": 1386,
                    "text": "R3C: low table with offerings",
                    "html": "R3C: low table with offerings",
                    "display": "R3c"
                },
                {
                    "id": 1387,
                    "text": "R3I: low table with offerings",
                    "html": "R3I: low table with offerings",
                    "display": "R3i"
                },
                {
                    "id": 1388,
                    "text": "R3P: low table with offerings",
                    "html": "R3P: low table with offerings",
                    "display": "R3p"
                },
                {
                    "id": 1389,
                    "text": "R3Q: low table with offerings",
                    "html": "R3Q: low table with offerings",
                    "display": "R3q"
                },
                {
                    "id": 1390,
                    "text": "R3Y: low table with offerings",
                    "html": "R3Y: low table with offerings",
                    "display": "R3y"
                },
                {
                    "id": 1391,
                    "text": "R4: loaf on mat [broad] [Htp]",
                    "html": "<span class=\"uni\">&#x132B5;</span> R4: loaf on mat",
                    "display": "R4"
                },
                {
                    "id": 1392,
                    "text": "R40",
                    "html": "R40",
                    "display": "R40"
                },
                {
                    "id": 1393,
                    "text": "R40A",
                    "html": "R40A",
                    "display": "R40a"
                },
                {
                    "id": 1394,
                    "text": "R42",
                    "html": "R42",
                    "display": "R42"
                },
                {
                    "id": 1395,
                    "text": "R42A",
                    "html": "R42A",
                    "display": "R42a"
                },
                {
                    "id": 1396,
                    "text": "R5: narrow censer [broad] [kp]",
                    "html": "<span class=\"uni\">&#x132B6;</span> R5: narrow censer",
                    "display": "R5"
                },
                {
                    "id": 1397,
                    "text": "R50",
                    "html": "R50",
                    "display": "R50"
                },
                {
                    "id": 1398,
                    "text": "R59",
                    "html": "R59",
                    "display": "R59"
                },
                {
                    "id": 1399,
                    "text": "R6: broad censer [broad]",
                    "html": "<span class=\"uni\">&#x132B7;</span> R6: broad censer",
                    "display": "R6"
                },
                {
                    "id": 1400,
                    "text": "R60",
                    "html": "R60",
                    "display": "R60"
                },
                {
                    "id": 1401,
                    "text": "R61",
                    "html": "R61",
                    "display": "R61"
                },
                {
                    "id": 1402,
                    "text": "R62A",
                    "html": "R62A",
                    "display": "R62a"
                },
                {
                    "id": 1403,
                    "text": "R7: bowl with smoke [narrow] [snTr]",
                    "html": "<span class=\"uni\">&#x132B8;</span> R7: bowl with smoke",
                    "display": "R7"
                },
                {
                    "id": 1404,
                    "text": "R78",
                    "html": "R78",
                    "display": "R78"
                },
                {
                    "id": 1405,
                    "text": "R8: cloth on pole [tall] [nTr]",
                    "html": "<span class=\"uni\">&#x132B9;</span> R8: cloth on pole",
                    "display": "R8"
                },
                {
                    "id": 1406,
                    "text": "R81",
                    "html": "R81",
                    "display": "R81"
                },
                {
                    "id": 1407,
                    "text": "R88",
                    "html": "R88",
                    "display": "R88"
                },
                {
                    "id": 1408,
                    "text": "R88A",
                    "html": "R88A",
                    "display": "R88a"
                },
                {
                    "id": 1409,
                    "text": "R89",
                    "html": "R89",
                    "display": "R89"
                },
                {
                    "id": 1410,
                    "text": "R8A: cloth on pole",
                    "html": "R8A: cloth on pole",
                    "display": "R8a"
                },
                {
                    "id": 1411,
                    "text": "R9: combination of R8 and V33 [tall] [bd]",
                    "html": "<span class=\"uni\">&#x132BA;</span> R9: combination of R8 and V33",
                    "display": "R9"
                },
                {
                    "id": 1412,
                    "text": "R91",
                    "html": "R91",
                    "display": "R91"
                },
                {
                    "id": 1413,
                    "text": "R92",
                    "html": "R92",
                    "display": "R92"
                },
                {
                    "id": 1414,
                    "text": "R93",
                    "html": "R93",
                    "display": "R93"
                },
                {
                    "id": 1415,
                    "text": "R97",
                    "html": "R97",
                    "display": "R97"
                }
            ]
        },
        {
            "text": "S: Crowns, Garments, Staves",
            "children": [
                {
                    "id": 1416,
                    "text": "S1: white crown [HDt]",
                    "html": "<span class=\"uni\">&#x132D1;</span> S1: white crown",
                    "display": "S1"
                },
                {
                    "id": 1417,
                    "text": "S10: headband [narrow] [mDH]",
                    "html": "<span class=\"uni\">&#x132DC;</span> S10: headband",
                    "display": "S10"
                },
                {
                    "id": 1418,
                    "text": "S100A",
                    "html": "S100A",
                    "display": "S100a"
                },
                {
                    "id": 1419,
                    "text": "S104",
                    "html": "S104",
                    "display": "S104"
                },
                {
                    "id": 1420,
                    "text": "S105",
                    "html": "S105",
                    "display": "S105"
                },
                {
                    "id": 1421,
                    "text": "S106",
                    "html": "S106",
                    "display": "S106"
                },
                {
                    "id": 1422,
                    "text": "S107",
                    "html": "S107",
                    "display": "S107"
                },
                {
                    "id": 1423,
                    "text": "S109A",
                    "html": "S109A",
                    "display": "S109a"
                },
                {
                    "id": 1424,
                    "text": "S10A: headband",
                    "html": "S10A: headband",
                    "display": "S10a"
                },
                {
                    "id": 1425,
                    "text": "S11: broad collar [narrow] [wsx]",
                    "html": "<span class=\"uni\">&#x132DD;</span> S11: broad collar",
                    "display": "S11"
                },
                {
                    "id": 1426,
                    "text": "S110",
                    "html": "S110",
                    "display": "S110"
                },
                {
                    "id": 1427,
                    "text": "S111",
                    "html": "S111",
                    "display": "S111"
                },
                {
                    "id": 1428,
                    "text": "S112",
                    "html": "S112",
                    "display": "S112"
                },
                {
                    "id": 1429,
                    "text": "S113",
                    "html": "S113",
                    "display": "S113"
                },
                {
                    "id": 1430,
                    "text": "S114",
                    "html": "S114",
                    "display": "S114"
                },
                {
                    "id": 1431,
                    "text": "S115",
                    "html": "S115",
                    "display": "S115"
                },
                {
                    "id": 1432,
                    "text": "S116",
                    "html": "S116",
                    "display": "S116"
                },
                {
                    "id": 1433,
                    "text": "S117",
                    "html": "S117",
                    "display": "S117"
                },
                {
                    "id": 1434,
                    "text": "S11B: broad collar",
                    "html": "S11B: broad collar",
                    "display": "S11b"
                },
                {
                    "id": 1435,
                    "text": "S12: collar of beads [broad] [nbw]",
                    "html": "<span class=\"uni\">&#x132DE;</span> S12: collar of beads",
                    "display": "S12"
                },
                {
                    "id": 1436,
                    "text": "S123",
                    "html": "S123",
                    "display": "S123"
                },
                {
                    "id": 1437,
                    "text": "S125",
                    "html": "S125",
                    "display": "S125"
                },
                {
                    "id": 1438,
                    "text": "S126",
                    "html": "S126",
                    "display": "S126"
                },
                {
                    "id": 1439,
                    "text": "S12A: collar of beads",
                    "html": "S12A: collar of beads",
                    "display": "S12a"
                },
                {
                    "id": 1440,
                    "text": "S13: combination of S12 and D58",
                    "html": "<span class=\"uni\">&#x132DF;</span> S13: combination of S12 and D58",
                    "display": "S13"
                },
                {
                    "id": 1441,
                    "text": "S130",
                    "html": "S130",
                    "display": "S130"
                },
                {
                    "id": 1442,
                    "text": "S131",
                    "html": "S131",
                    "display": "S131"
                },
                {
                    "id": 1443,
                    "text": "S134B",
                    "html": "S134B",
                    "display": "S134b"
                },
                {
                    "id": 1444,
                    "text": "S14: combination of S12 and T3",
                    "html": "<span class=\"uni\">&#x132E0;</span> S14: combination of S12 and T3",
                    "display": "S14"
                },
                {
                    "id": 1445,
                    "text": "S142",
                    "html": "S142",
                    "display": "S142"
                },
                {
                    "id": 1446,
                    "text": "S144",
                    "html": "S144",
                    "display": "S144"
                },
                {
                    "id": 1447,
                    "text": "S14A: combination of S12 and S40",
                    "html": "<span class=\"uni\">&#x132E1;</span> S14A: combination of S12 and S40",
                    "display": "S14a"
                },
                {
                    "id": 1448,
                    "text": "S15: pectoral [THn]",
                    "html": "<span class=\"uni\">&#x132E3;</span> S15: pectoral",
                    "display": "S15"
                },
                {
                    "id": 1449,
                    "text": "S151",
                    "html": "S151",
                    "display": "S151"
                },
                {
                    "id": 1450,
                    "text": "S152",
                    "html": "S152",
                    "display": "S152"
                },
                {
                    "id": 1451,
                    "text": "S152A",
                    "html": "S152A",
                    "display": "S152a"
                },
                {
                    "id": 1452,
                    "text": "S156",
                    "html": "S156",
                    "display": "S156"
                },
                {
                    "id": 1453,
                    "text": "S15A: pectoral",
                    "html": "S15A: pectoral",
                    "display": "S15a"
                },
                {
                    "id": 1454,
                    "text": "S16: pectoral",
                    "html": "<span class=\"uni\">&#x132E4;</span> S16: pectoral",
                    "display": "S16"
                },
                {
                    "id": 1455,
                    "text": "S163",
                    "html": "S163",
                    "display": "S163"
                },
                {
                    "id": 1456,
                    "text": "S167",
                    "html": "S167",
                    "display": "S167"
                },
                {
                    "id": 1457,
                    "text": "S17: pectoral",
                    "html": "<span class=\"uni\">&#x132E5;</span> S17: pectoral",
                    "display": "S17"
                },
                {
                    "id": 1458,
                    "text": "S17A: girdle",
                    "html": "<span class=\"uni\">&#x132E6;</span> S17A: girdle",
                    "display": "S17a"
                },
                {
                    "id": 1459,
                    "text": "S17B: pectoral",
                    "html": "S17B: pectoral",
                    "display": "S17b"
                },
                {
                    "id": 1460,
                    "text": "S18: necklace with counterpoise [mnit]",
                    "html": "<span class=\"uni\">&#x132E7;</span> S18: necklace with counterpoise",
                    "display": "S18"
                },
                {
                    "id": 1461,
                    "text": "S184",
                    "html": "S184",
                    "display": "S184"
                },
                {
                    "id": 1462,
                    "text": "S19: necklace with seal from side [sDAw]",
                    "html": "<span class=\"uni\">&#x132E8;</span> S19: necklace with seal from side",
                    "display": "S19"
                },
                {
                    "id": 1463,
                    "text": "S193",
                    "html": "S193",
                    "display": "S193"
                },
                {
                    "id": 1464,
                    "text": "S197",
                    "html": "S197",
                    "display": "S197"
                },
                {
                    "id": 1465,
                    "text": "S199A",
                    "html": "S199A",
                    "display": "S199a"
                },
                {
                    "id": 1466,
                    "text": "S2: combination of S1 and V30",
                    "html": "<span class=\"uni\">&#x132D2;</span> S2: combination of S1 and V30",
                    "display": "S2"
                },
                {
                    "id": 1467,
                    "text": "S20: necklace with seal from front [narrow] [xtm]",
                    "html": "<span class=\"uni\">&#x132E9;</span> S20: necklace with seal from front",
                    "display": "S20"
                },
                {
                    "id": 1468,
                    "text": "S20A: necklace with seal from front",
                    "html": "S20A: necklace with seal from front",
                    "display": "S20a"
                },
                {
                    "id": 1469,
                    "text": "S21: ring [narrow]",
                    "html": "<span class=\"uni\">&#x132EA;</span> S21: ring",
                    "display": "S21"
                },
                {
                    "id": 1470,
                    "text": "S21A: ring",
                    "html": "S21A: ring",
                    "display": "S21a"
                },
                {
                    "id": 1471,
                    "text": "S22: shoulder-knot [sT]",
                    "html": "<span class=\"uni\">&#x132EB;</span> S22: shoulder-knot",
                    "display": "S22"
                },
                {
                    "id": 1472,
                    "text": "S23: knotted cloth [dmD]",
                    "html": "<span class=\"uni\">&#x132EC;</span> S23: knotted cloth",
                    "display": "S23"
                },
                {
                    "id": 1473,
                    "text": "S24: girdle knot [broad] [Tz]",
                    "html": "<span class=\"uni\">&#x132ED;</span> S24: girdle knot",
                    "display": "S24"
                },
                {
                    "id": 1474,
                    "text": "S25: garment with ties",
                    "html": "<span class=\"uni\">&#x132EE;</span> S25: garment with ties",
                    "display": "S25"
                },
                {
                    "id": 1475,
                    "text": "S26: apron [Sndyt]",
                    "html": "<span class=\"uni\">&#x132EF;</span> S26: apron",
                    "display": "S26"
                },
                {
                    "id": 1476,
                    "text": "S27: cloth with two strands [mnxt]",
                    "html": "<span class=\"uni\">&#x132F2;</span> S27: cloth with two strands",
                    "display": "S27"
                },
                {
                    "id": 1477,
                    "text": "S28: cloth with fringe on top and S29",
                    "html": "<span class=\"uni\">&#x132F3;</span> S28: cloth with fringe on top and S29",
                    "display": "S28"
                },
                {
                    "id": 1478,
                    "text": "S29: folded cloth [tall] [s]",
                    "html": "<span class=\"uni\">&#x132F4;</span> S29: folded cloth",
                    "display": "S29"
                },
                {
                    "id": 1479,
                    "text": "S29B: folded cloth",
                    "html": "S29B: folded cloth",
                    "display": "S29b"
                },
                {
                    "id": 1480,
                    "text": "S2A: combination of S1 and O49",
                    "html": "<span class=\"uni\">&#x132D3;</span> S2A: combination of S1 and O49",
                    "display": "S2a"
                },
                {
                    "id": 1481,
                    "text": "S3: red crown [N]",
                    "html": "<span class=\"uni\">&#x132D4;</span> S3: red crown",
                    "display": "S3"
                },
                {
                    "id": 1482,
                    "text": "S30: combination of S29 and I9 [sf]",
                    "html": "<span class=\"uni\">&#x132F5;</span> S30: combination of S29 and I9",
                    "display": "S30"
                },
                {
                    "id": 1483,
                    "text": "S32: cloth with fringe on the side [broad] [siA]",
                    "html": "<span class=\"uni\">&#x132F7;</span> S32: cloth with fringe on the side",
                    "display": "S32"
                },
                {
                    "id": 1484,
                    "text": "S33: sandle [Tb]",
                    "html": "<span class=\"uni\">&#x132F8;</span> S33: sandle",
                    "display": "S33"
                },
                {
                    "id": 1485,
                    "text": "S34: sandle-strap [tall] [anx]",
                    "html": "<span class=\"uni\">&#x132F9;</span> S34: sandle-strap",
                    "display": "S34"
                },
                {
                    "id": 1486,
                    "text": "S35: sunshade [Swt]",
                    "html": "<span class=\"uni\">&#x132FA;</span> S35: sunshade",
                    "display": "S35"
                },
                {
                    "id": 1487,
                    "text": "S36: sunshade [tall]",
                    "html": "<span class=\"uni\">&#x132FC;</span> S36: sunshade",
                    "display": "S36"
                },
                {
                    "id": 1488,
                    "text": "S36A: sunshade",
                    "html": "S36A: sunshade",
                    "display": "S36a"
                },
                {
                    "id": 1489,
                    "text": "S36C: sunshade",
                    "html": "S36C: sunshade",
                    "display": "S36c"
                },
                {
                    "id": 1490,
                    "text": "S37: fan [tall] [xw]",
                    "html": "<span class=\"uni\">&#x132FD;</span> S37: fan",
                    "display": "S37"
                },
                {
                    "id": 1491,
                    "text": "S37A: fan",
                    "html": "S37A: fan",
                    "display": "S37a"
                },
                {
                    "id": 1492,
                    "text": "S38: crook [tall] [HqA]",
                    "html": "<span class=\"uni\">&#x132FE;</span> S38: crook",
                    "display": "S38"
                },
                {
                    "id": 1493,
                    "text": "S39: shepherd&amp;apos;s crook [tall] [awt]",
                    "html": "<span class=\"uni\">&#x132FF;</span> S39: shepherd&amp;apos;s crook",
                    "display": "S39"
                },
                {
                    "id": 1494,
                    "text": "S4: combination of S3 and V30",
                    "html": "<span class=\"uni\">&#x132D5;</span> S4: combination of S3 and V30",
                    "display": "S4"
                },
                {
                    "id": 1495,
                    "text": "S40: sceptre [tall] [wAs]",
                    "html": "<span class=\"uni\">&#x13300;</span> S40: sceptre",
                    "display": "S40"
                },
                {
                    "id": 1496,
                    "text": "S41: sceptre with spiral shaft [tall] [Dam]",
                    "html": "<span class=\"uni\">&#x13301;</span> S41: sceptre with spiral shaft",
                    "display": "S41"
                },
                {
                    "id": 1497,
                    "text": "S42: sceptre of authority [tall] [sxm]",
                    "html": "<span class=\"uni\">&#x13302;</span> S42: sceptre of authority",
                    "display": "S42"
                },
                {
                    "id": 1498,
                    "text": "S43: walking stick [tall] [md]",
                    "html": "<span class=\"uni\">&#x13303;</span> S43: walking stick",
                    "display": "S43"
                },
                {
                    "id": 1499,
                    "text": "S44: walking stick with S45 [tall] [Ams]",
                    "html": "<span class=\"uni\">&#x13304;</span> S44: walking stick with S45",
                    "display": "S44"
                },
                {
                    "id": 1500,
                    "text": "S44A: walking stick with S45",
                    "html": "S44A: walking stick with S45",
                    "display": "S44a"
                },
                {
                    "id": 1501,
                    "text": "S45: flagellum [nxxw]",
                    "html": "<span class=\"uni\">&#x13305;</span> S45: flagellum",
                    "display": "S45"
                },
                {
                    "id": 1502,
                    "text": "S47",
                    "html": "S47",
                    "display": "S47"
                },
                {
                    "id": 1503,
                    "text": "S47A",
                    "html": "S47A",
                    "display": "S47a"
                },
                {
                    "id": 1504,
                    "text": "S5: double crown",
                    "html": "<span class=\"uni\">&#x132D6;</span> S5: double crown",
                    "display": "S5"
                },
                {
                    "id": 1505,
                    "text": "S51",
                    "html": "S51",
                    "display": "S51"
                },
                {
                    "id": 1506,
                    "text": "S55",
                    "html": "S55",
                    "display": "S55"
                },
                {
                    "id": 1507,
                    "text": "S56",
                    "html": "S56",
                    "display": "S56"
                },
                {
                    "id": 1508,
                    "text": "S57",
                    "html": "S57",
                    "display": "S57"
                },
                {
                    "id": 1509,
                    "text": "S57A",
                    "html": "S57A",
                    "display": "S57a"
                },
                {
                    "id": 1510,
                    "text": "S57B",
                    "html": "S57B",
                    "display": "S57b"
                },
                {
                    "id": 1511,
                    "text": "S57C",
                    "html": "S57C",
                    "display": "S57c"
                },
                {
                    "id": 1512,
                    "text": "S59",
                    "html": "S59",
                    "display": "S59"
                },
                {
                    "id": 1513,
                    "text": "S6: combination of S5 and V30 [sxmty]",
                    "html": "<span class=\"uni\">&#x132D7;</span> S6: combination of S5 and V30",
                    "display": "S6"
                },
                {
                    "id": 1514,
                    "text": "S61A",
                    "html": "S61A",
                    "display": "S61a"
                },
                {
                    "id": 1515,
                    "text": "S62",
                    "html": "S62",
                    "display": "S62"
                },
                {
                    "id": 1516,
                    "text": "S63",
                    "html": "S63",
                    "display": "S63"
                },
                {
                    "id": 1517,
                    "text": "S7: blue crown [xprS]",
                    "html": "<span class=\"uni\">&#x132D9;</span> S7: blue crown",
                    "display": "S7"
                },
                {
                    "id": 1518,
                    "text": "S76",
                    "html": "S76",
                    "display": "S76"
                },
                {
                    "id": 1519,
                    "text": "S8: <span class=\"trans\">Atf</span>-crown [Atf]",
                    "html": "<span class=\"uni\">&#x132DA;</span> S8: <span class=\"trans\">Atf</span>-crown",
                    "display": "S8"
                },
                {
                    "id": 1520,
                    "text": "S84",
                    "html": "S84",
                    "display": "S84"
                },
                {
                    "id": 1521,
                    "text": "S88",
                    "html": "S88",
                    "display": "S88"
                },
                {
                    "id": 1522,
                    "text": "S89",
                    "html": "S89",
                    "display": "S89"
                },
                {
                    "id": 1523,
                    "text": "S8A: <span class=\"trans\">Atf</span>-crown",
                    "html": "S8A: <span class=\"trans\">Atf</span>-crown",
                    "display": "S8a"
                },
                {
                    "id": 1524,
                    "text": "S9: two plumes [Swty]",
                    "html": "<span class=\"uni\">&#x132DB;</span> S9: two plumes",
                    "display": "S9"
                },
                {
                    "id": 1525,
                    "text": "S91A",
                    "html": "S91A",
                    "display": "S91a"
                },
                {
                    "id": 1526,
                    "text": "S95",
                    "html": "S95",
                    "display": "S95"
                }
            ]
        },
        {
            "text": "T: Warfare, Hunting, Butchery",
            "children": [
                {
                    "id": 1527,
                    "text": "T1: mace with flat head [broad]",
                    "html": "<span class=\"uni\">&#x13307;</span> T1: mace with flat head",
                    "display": "T1"
                },
                {
                    "id": 1528,
                    "text": "T10: composite bow [broad] [pD]",
                    "html": "<span class=\"uni\">&#x13314;</span> T10: composite bow",
                    "display": "T10"
                },
                {
                    "id": 1529,
                    "text": "T101",
                    "html": "T101",
                    "display": "T101"
                },
                {
                    "id": 1530,
                    "text": "T106",
                    "html": "T106",
                    "display": "T106"
                },
                {
                    "id": 1531,
                    "text": "T109",
                    "html": "T109",
                    "display": "T109"
                },
                {
                    "id": 1532,
                    "text": "T11: arrow [broad] [sXr]",
                    "html": "<span class=\"uni\">&#x13315;</span> T11: arrow",
                    "display": "T11"
                },
                {
                    "id": 1533,
                    "text": "T113",
                    "html": "T113",
                    "display": "T113"
                },
                {
                    "id": 1534,
                    "text": "T11B: arrow",
                    "html": "T11B: arrow",
                    "display": "T11b"
                },
                {
                    "id": 1535,
                    "text": "T12: bow-string [rwD]",
                    "html": "<span class=\"uni\">&#x13317;</span> T12: bow-string",
                    "display": "T12"
                },
                {
                    "id": 1536,
                    "text": "T12A: bow-string",
                    "html": "T12A: bow-string",
                    "display": "T12a"
                },
                {
                    "id": 1537,
                    "text": "T13: joined pieces of wood [tall] [rs]",
                    "html": "<span class=\"uni\">&#x13318;</span> T13: joined pieces of wood",
                    "display": "T13"
                },
                {
                    "id": 1538,
                    "text": "T14: throw stick vertically [tall] [qmA]",
                    "html": "<span class=\"uni\">&#x13319;</span> T14: throw stick vertically",
                    "display": "T14"
                },
                {
                    "id": 1539,
                    "text": "T14C: throw stick vertically",
                    "html": "T14C: throw stick vertically",
                    "display": "T14c"
                },
                {
                    "id": 1540,
                    "text": "T15: throw stick slanted [tall]",
                    "html": "<span class=\"uni\">&#x1331A;</span> T15: throw stick slanted",
                    "display": "T15"
                },
                {
                    "id": 1541,
                    "text": "T16: scimitar",
                    "html": "<span class=\"uni\">&#x1331B;</span> T16: scimitar",
                    "display": "T16"
                },
                {
                    "id": 1542,
                    "text": "T16A: scimitar",
                    "html": "<span class=\"uni\">&#x1331C;</span> T16A: scimitar",
                    "display": "T16a"
                },
                {
                    "id": 1543,
                    "text": "T17: chariot [wrrt]",
                    "html": "<span class=\"uni\">&#x1331D;</span> T17: chariot",
                    "display": "T17"
                },
                {
                    "id": 1544,
                    "text": "T18: crook with package attached [tall] [Sms]",
                    "html": "<span class=\"uni\">&#x1331E;</span> T18: crook with package attached",
                    "display": "T18"
                },
                {
                    "id": 1545,
                    "text": "T19: harpoon head [tall] [qs]",
                    "html": "<span class=\"uni\">&#x1331F;</span> T19: harpoon head",
                    "display": "T19"
                },
                {
                    "id": 1546,
                    "text": "T19B: harpoon head",
                    "html": "T19B: harpoon head",
                    "display": "T19b"
                },
                {
                    "id": 1547,
                    "text": "T1A: mace with flat head",
                    "html": "T1A: mace with flat head",
                    "display": "T1a"
                },
                {
                    "id": 1548,
                    "text": "T2: mace with round head diagonally [broad]",
                    "html": "<span class=\"uni\">&#x13308;</span> T2: mace with round head diagonally",
                    "display": "T2"
                },
                {
                    "id": 1549,
                    "text": "T20: harpoon head [tall]",
                    "html": "<span class=\"uni\">&#x13320;</span> T20: harpoon head",
                    "display": "T20"
                },
                {
                    "id": 1550,
                    "text": "T21: harpoon [broad]",
                    "html": "<span class=\"uni\">&#x13321;</span> T21: harpoon",
                    "display": "T21"
                },
                {
                    "id": 1551,
                    "text": "T21V: harpoon",
                    "html": "T21V: harpoon",
                    "display": "T21v"
                },
                {
                    "id": 1552,
                    "text": "T22: arrowhead [tall] [sn]",
                    "html": "<span class=\"uni\">&#x13322;</span> T22: arrowhead",
                    "display": "T22"
                },
                {
                    "id": 1553,
                    "text": "T22D: arrowhead",
                    "html": "T22D: arrowhead",
                    "display": "T22d"
                },
                {
                    "id": 1554,
                    "text": "T23: arrowhead [tall]",
                    "html": "<span class=\"uni\">&#x13323;</span> T23: arrowhead",
                    "display": "T23"
                },
                {
                    "id": 1555,
                    "text": "T24: fishing-net [iH]",
                    "html": "<span class=\"uni\">&#x13324;</span> T24: fishing-net",
                    "display": "T24"
                },
                {
                    "id": 1556,
                    "text": "T24C: fishing-net",
                    "html": "T24C: fishing-net",
                    "display": "T24c"
                },
                {
                    "id": 1557,
                    "text": "T24D: fishing-net",
                    "html": "T24D: fishing-net",
                    "display": "T24d"
                },
                {
                    "id": 1558,
                    "text": "T24E: fishing-net",
                    "html": "T24E: fishing-net",
                    "display": "T24e"
                },
                {
                    "id": 1559,
                    "text": "T25: floats [DbA]",
                    "html": "<span class=\"uni\">&#x13325;</span> T25: floats",
                    "display": "T25"
                },
                {
                    "id": 1560,
                    "text": "T26: bird-trap",
                    "html": "<span class=\"uni\">&#x13326;</span> T26: bird-trap",
                    "display": "T26"
                },
                {
                    "id": 1561,
                    "text": "T26F: bird-trap",
                    "html": "T26F: bird-trap",
                    "display": "T26f"
                },
                {
                    "id": 1562,
                    "text": "T26H: bird-trap",
                    "html": "T26H: bird-trap",
                    "display": "T26h"
                },
                {
                    "id": 1563,
                    "text": "T27: bird-trap",
                    "html": "<span class=\"uni\">&#x13327;</span> T27: bird-trap",
                    "display": "T27"
                },
                {
                    "id": 1564,
                    "text": "T28: butcher&amp;apos;s block [narrow] [Xr]",
                    "html": "<span class=\"uni\">&#x13328;</span> T28: butcher&amp;apos;s block",
                    "display": "T28"
                },
                {
                    "id": 1565,
                    "text": "T28A: butcher&amp;apos;s block",
                    "html": "T28A: butcher&amp;apos;s block",
                    "display": "T28a"
                },
                {
                    "id": 1566,
                    "text": "T29: combination of T30 and T28 [nmt]",
                    "html": "<span class=\"uni\">&#x13329;</span> T29: combination of T30 and T28",
                    "display": "T29"
                },
                {
                    "id": 1567,
                    "text": "T29C: combination of T30 and T28",
                    "html": "T29C: combination of T30 and T28",
                    "display": "T29c"
                },
                {
                    "id": 1568,
                    "text": "T3: mace with round head vertically [tall] [HD]",
                    "html": "<span class=\"uni\">&#x13309;</span> T3: mace with round head vertically",
                    "display": "T3"
                },
                {
                    "id": 1569,
                    "text": "T30: knife [broad]",
                    "html": "<span class=\"uni\">&#x1332A;</span> T30: knife",
                    "display": "T30"
                },
                {
                    "id": 1570,
                    "text": "T30A: knife",
                    "html": "T30A: knife",
                    "display": "T30a"
                },
                {
                    "id": 1571,
                    "text": "T30B: knife",
                    "html": "T30B: knife",
                    "display": "T30b"
                },
                {
                    "id": 1572,
                    "text": "T30C: knife",
                    "html": "T30C: knife",
                    "display": "T30c"
                },
                {
                    "id": 1573,
                    "text": "T31: knife-sharpener [broad] [sSm]",
                    "html": "<span class=\"uni\">&#x1332B;</span> T31: knife-sharpener",
                    "display": "T31"
                },
                {
                    "id": 1574,
                    "text": "T32: combination of T31 and D54",
                    "html": "<span class=\"uni\">&#x1332C;</span> T32: combination of T31 and D54",
                    "display": "T32"
                },
                {
                    "id": 1575,
                    "text": "T33: knife-sharpener of butcher [broad]",
                    "html": "<span class=\"uni\">&#x1332E;</span> T33: knife-sharpener of butcher",
                    "display": "T33"
                },
                {
                    "id": 1576,
                    "text": "T34: butcher&amp;apos;s knife [tall] [nm]",
                    "html": "<span class=\"uni\">&#x13330;</span> T34: butcher&amp;apos;s knife",
                    "display": "T34"
                },
                {
                    "id": 1577,
                    "text": "T36: shield",
                    "html": "<span class=\"uni\">&#x13332;</span> T36: shield",
                    "display": "T36"
                },
                {
                    "id": 1578,
                    "text": "T3F: mace with round head vertically",
                    "html": "T3F: mace with round head vertically",
                    "display": "T3f"
                },
                {
                    "id": 1579,
                    "text": "T4: mace with strap [tall]",
                    "html": "<span class=\"uni\">&#x1330B;</span> T4: mace with strap",
                    "display": "T4"
                },
                {
                    "id": 1580,
                    "text": "T49",
                    "html": "T49",
                    "display": "T49"
                },
                {
                    "id": 1581,
                    "text": "T5: combination of T3 and I10",
                    "html": "<span class=\"uni\">&#x1330C;</span> T5: combination of T3 and I10",
                    "display": "T5"
                },
                {
                    "id": 1582,
                    "text": "T51",
                    "html": "T51",
                    "display": "T51"
                },
                {
                    "id": 1583,
                    "text": "T53",
                    "html": "T53",
                    "display": "T53"
                },
                {
                    "id": 1584,
                    "text": "T55",
                    "html": "T55",
                    "display": "T55"
                },
                {
                    "id": 1585,
                    "text": "T57",
                    "html": "T57",
                    "display": "T57"
                },
                {
                    "id": 1586,
                    "text": "T6: combination of T3 and two I10 [HDD]",
                    "html": "<span class=\"uni\">&#x1330D;</span> T6: combination of T3 and two I10",
                    "display": "T6"
                },
                {
                    "id": 1587,
                    "text": "T62",
                    "html": "T62",
                    "display": "T62"
                },
                {
                    "id": 1588,
                    "text": "T63C",
                    "html": "T63C",
                    "display": "T63c"
                },
                {
                    "id": 1589,
                    "text": "T65",
                    "html": "T65",
                    "display": "T65"
                },
                {
                    "id": 1590,
                    "text": "T67",
                    "html": "T67",
                    "display": "T67"
                },
                {
                    "id": 1591,
                    "text": "T69",
                    "html": "T69",
                    "display": "T69"
                },
                {
                    "id": 1592,
                    "text": "T7: axe [broad]",
                    "html": "<span class=\"uni\">&#x1330E;</span> T7: axe",
                    "display": "T7"
                },
                {
                    "id": 1593,
                    "text": "T79",
                    "html": "T79",
                    "display": "T79"
                },
                {
                    "id": 1594,
                    "text": "T7A: axe [tall]",
                    "html": "<span class=\"uni\">&#x1330F;</span> T7A: axe",
                    "display": "T7a"
                },
                {
                    "id": 1595,
                    "text": "T7B: axe",
                    "html": "T7B: axe",
                    "display": "T7b"
                },
                {
                    "id": 1596,
                    "text": "T8: dagger [tall]",
                    "html": "<span class=\"uni\">&#x13310;</span> T8: dagger",
                    "display": "T8"
                },
                {
                    "id": 1597,
                    "text": "T80",
                    "html": "T80",
                    "display": "T80"
                },
                {
                    "id": 1598,
                    "text": "T80A",
                    "html": "T80A",
                    "display": "T80a"
                },
                {
                    "id": 1599,
                    "text": "T80B",
                    "html": "T80B",
                    "display": "T80b"
                },
                {
                    "id": 1600,
                    "text": "T86",
                    "html": "T86",
                    "display": "T86"
                },
                {
                    "id": 1601,
                    "text": "T87",
                    "html": "T87",
                    "display": "T87"
                },
                {
                    "id": 1602,
                    "text": "T88",
                    "html": "T88",
                    "display": "T88"
                },
                {
                    "id": 1603,
                    "text": "T89",
                    "html": "T89",
                    "display": "T89"
                },
                {
                    "id": 1604,
                    "text": "T8A: dagger [tall]",
                    "html": "<span class=\"uni\">&#x13311;</span> T8A: dagger",
                    "display": "T8a"
                },
                {
                    "id": 1605,
                    "text": "T9: bow [broad] [pd]",
                    "html": "<span class=\"uni\">&#x13312;</span> T9: bow",
                    "display": "T9"
                },
                {
                    "id": 1606,
                    "text": "T90",
                    "html": "T90",
                    "display": "T90"
                },
                {
                    "id": 1607,
                    "text": "T91",
                    "html": "T91",
                    "display": "T91"
                },
                {
                    "id": 1608,
                    "text": "T93",
                    "html": "T93",
                    "display": "T93"
                },
                {
                    "id": 1609,
                    "text": "T9A: bow [broad]",
                    "html": "<span class=\"uni\">&#x13313;</span> T9A: bow",
                    "display": "T9a"
                },
                {
                    "id": 1610,
                    "text": "T9C: bow",
                    "html": "T9C: bow",
                    "display": "T9c"
                },
                {
                    "id": 1611,
                    "text": "T9D: bow",
                    "html": "T9D: bow",
                    "display": "T9d"
                }
            ]
        },
        {
            "text": "U: Agriculture, Crafts, Professions",
            "children": [
                {
                    "id": 1612,
                    "text": "U1: sickle [mA]",
                    "html": "<span class=\"uni\">&#x13333;</span> U1: sickle",
                    "display": "U1"
                },
                {
                    "id": 1613,
                    "text": "U10: U9 beneath M33 [it]",
                    "html": "<span class=\"uni\">&#x1333E;</span> U10: U9 beneath M33",
                    "display": "U10"
                },
                {
                    "id": 1614,
                    "text": "U103",
                    "html": "U103",
                    "display": "U103"
                },
                {
                    "id": 1615,
                    "text": "U107",
                    "html": "U107",
                    "display": "U107"
                },
                {
                    "id": 1616,
                    "text": "U108",
                    "html": "U108",
                    "display": "U108"
                },
                {
                    "id": 1617,
                    "text": "U109",
                    "html": "U109",
                    "display": "U109"
                },
                {
                    "id": 1618,
                    "text": "U10A: U9 beneath M33",
                    "html": "U10A: U9 beneath M33",
                    "display": "U10a"
                },
                {
                    "id": 1619,
                    "text": "U11: combination of S38 and U9 [HqAt]",
                    "html": "<span class=\"uni\">&#x1333F;</span> U11: combination of S38 and U9",
                    "display": "U11"
                },
                {
                    "id": 1620,
                    "text": "U112",
                    "html": "U112",
                    "display": "U112"
                },
                {
                    "id": 1621,
                    "text": "U116",
                    "html": "U116",
                    "display": "U116"
                },
                {
                    "id": 1622,
                    "text": "U12: combination of D50 and U9",
                    "html": "<span class=\"uni\">&#x13340;</span> U12: combination of D50 and U9",
                    "display": "U12"
                },
                {
                    "id": 1623,
                    "text": "U120",
                    "html": "U120",
                    "display": "U120"
                },
                {
                    "id": 1624,
                    "text": "U122",
                    "html": "U122",
                    "display": "U122"
                },
                {
                    "id": 1625,
                    "text": "U13: plough [Sna]",
                    "html": "<span class=\"uni\">&#x13341;</span> U13: plough",
                    "display": "U13"
                },
                {
                    "id": 1626,
                    "text": "U14A: two joined branches",
                    "html": "U14A: two joined branches",
                    "display": "U14a"
                },
                {
                    "id": 1627,
                    "text": "U15: sledge [broad] [tm]",
                    "html": "<span class=\"uni\">&#x13343;</span> U15: sledge",
                    "display": "U15"
                },
                {
                    "id": 1628,
                    "text": "U16: sledge with head of jackal [broad] [biA]",
                    "html": "<span class=\"uni\">&#x13344;</span> U16: sledge with head of jackal",
                    "display": "U16"
                },
                {
                    "id": 1629,
                    "text": "U16A: sledge with head of jackal",
                    "html": "U16A: sledge with head of jackal",
                    "display": "U16a"
                },
                {
                    "id": 1630,
                    "text": "U16B: sledge with head of jackal",
                    "html": "U16B: sledge with head of jackal",
                    "display": "U16b"
                },
                {
                    "id": 1631,
                    "text": "U17: pick in ground [broad] [grg]",
                    "html": "<span class=\"uni\">&#x13345;</span> U17: pick in ground",
                    "display": "U17"
                },
                {
                    "id": 1632,
                    "text": "U18: pick in basin [broad]",
                    "html": "<span class=\"uni\">&#x13346;</span> U18: pick in basin",
                    "display": "U18"
                },
                {
                    "id": 1633,
                    "text": "U19: adze [broad]",
                    "html": "<span class=\"uni\">&#x13347;</span> U19: adze",
                    "display": "U19"
                },
                {
                    "id": 1634,
                    "text": "U19A: adze",
                    "html": "U19A: adze",
                    "display": "U19a"
                },
                {
                    "id": 1635,
                    "text": "U1A: sickle",
                    "html": "U1A: sickle",
                    "display": "U1a"
                },
                {
                    "id": 1636,
                    "text": "U1B: sickle",
                    "html": "U1B: sickle",
                    "display": "U1b"
                },
                {
                    "id": 1637,
                    "text": "U2: sickle (low)",
                    "html": "<span class=\"uni\">&#x13334;</span> U2: sickle (low)",
                    "display": "U2"
                },
                {
                    "id": 1638,
                    "text": "U20: adze [broad]",
                    "html": "<span class=\"uni\">&#x13348;</span> U20: adze",
                    "display": "U20"
                },
                {
                    "id": 1639,
                    "text": "U21: adze on wood [broad] [stp]",
                    "html": "<span class=\"uni\">&#x13349;</span> U21: adze on wood",
                    "display": "U21"
                },
                {
                    "id": 1640,
                    "text": "U21A: adze on wood",
                    "html": "U21A: adze on wood",
                    "display": "U21a"
                },
                {
                    "id": 1641,
                    "text": "U22: chisel [mnx]",
                    "html": "<span class=\"uni\">&#x1334A;</span> U22: chisel",
                    "display": "U22"
                },
                {
                    "id": 1642,
                    "text": "U23: chisel [tall] [Ab]",
                    "html": "<span class=\"uni\">&#x1334B;</span> U23: chisel",
                    "display": "U23"
                },
                {
                    "id": 1643,
                    "text": "U24: drill for stone [tall] [Hmt]",
                    "html": "<span class=\"uni\">&#x1334D;</span> U24: drill for stone",
                    "display": "U24"
                },
                {
                    "id": 1644,
                    "text": "U25: drill for stone [tall]",
                    "html": "<span class=\"uni\">&#x1334E;</span> U25: drill for stone",
                    "display": "U25"
                },
                {
                    "id": 1645,
                    "text": "U26: drill for beads [tall] [wbA]",
                    "html": "<span class=\"uni\">&#x1334F;</span> U26: drill for beads",
                    "display": "U26"
                },
                {
                    "id": 1646,
                    "text": "U27: drill for beads [tall]",
                    "html": "<span class=\"uni\">&#x13350;</span> U27: drill for beads",
                    "display": "U27"
                },
                {
                    "id": 1647,
                    "text": "U28: fire-drill [tall] [DA]",
                    "html": "<span class=\"uni\">&#x13351;</span> U28: fire-drill",
                    "display": "U28"
                },
                {
                    "id": 1648,
                    "text": "U29: fire-drill [tall]",
                    "html": "<span class=\"uni\">&#x13352;</span> U29: fire-drill",
                    "display": "U29"
                },
                {
                    "id": 1649,
                    "text": "U29A: fire-drill with string",
                    "html": "<span class=\"uni\">&#x13353;</span> U29A: fire-drill with string",
                    "display": "U29a"
                },
                {
                    "id": 1650,
                    "text": "U3: combination of U1 and D4",
                    "html": "<span class=\"uni\">&#x13335;</span> U3: combination of U1 and D4",
                    "display": "U3"
                },
                {
                    "id": 1651,
                    "text": "U30: kiln [narrow]",
                    "html": "<span class=\"uni\">&#x13354;</span> U30: kiln",
                    "display": "U30"
                },
                {
                    "id": 1652,
                    "text": "U31: baker&amp;apos;s rake [broad] [rtH]",
                    "html": "<span class=\"uni\">&#x13355;</span> U31: baker&amp;apos;s rake",
                    "display": "U31"
                },
                {
                    "id": 1653,
                    "text": "U32: pestle and mortar [tall] [zmn]",
                    "html": "<span class=\"uni\">&#x13356;</span> U32: pestle and mortar",
                    "display": "U32"
                },
                {
                    "id": 1654,
                    "text": "U32B: pestle and mortar",
                    "html": "U32B: pestle and mortar",
                    "display": "U32b"
                },
                {
                    "id": 1655,
                    "text": "U33: pestle [tall] [ti]",
                    "html": "<span class=\"uni\">&#x13358;</span> U33: pestle",
                    "display": "U33"
                },
                {
                    "id": 1656,
                    "text": "U34: spindle [tall] [xsf]",
                    "html": "<span class=\"uni\">&#x13359;</span> U34: spindle",
                    "display": "U34"
                },
                {
                    "id": 1657,
                    "text": "U35: combination of U34 and I9",
                    "html": "<span class=\"uni\">&#x1335A;</span> U35: combination of U34 and I9",
                    "display": "U35"
                },
                {
                    "id": 1658,
                    "text": "U36: club [tall] [Hm]",
                    "html": "<span class=\"uni\">&#x1335B;</span> U36: club",
                    "display": "U36"
                },
                {
                    "id": 1659,
                    "text": "U37: razor",
                    "html": "<span class=\"uni\">&#x1335C;</span> U37: razor",
                    "display": "U37"
                },
                {
                    "id": 1660,
                    "text": "U38: balance [mxAt]",
                    "html": "<span class=\"uni\">&#x1335D;</span> U38: balance",
                    "display": "U38"
                },
                {
                    "id": 1661,
                    "text": "U38A: balance",
                    "html": "U38A: balance",
                    "display": "U38a"
                },
                {
                    "id": 1662,
                    "text": "U38B: balance",
                    "html": "U38B: balance",
                    "display": "U38b"
                },
                {
                    "id": 1663,
                    "text": "U39: post of balance [tall]",
                    "html": "<span class=\"uni\">&#x1335E;</span> U39: post of balance",
                    "display": "U39"
                },
                {
                    "id": 1664,
                    "text": "U39A: post of balance",
                    "html": "U39A: post of balance",
                    "display": "U39a"
                },
                {
                    "id": 1665,
                    "text": "U39B: post of balance",
                    "html": "U39B: post of balance",
                    "display": "U39b"
                },
                {
                    "id": 1666,
                    "text": "U39C: post of balance",
                    "html": "U39C: post of balance",
                    "display": "U39c"
                },
                {
                    "id": 1667,
                    "text": "U39D: post of balance",
                    "html": "U39D: post of balance",
                    "display": "U39d"
                },
                {
                    "id": 1668,
                    "text": "U39F: post of balance",
                    "html": "U39F: post of balance",
                    "display": "U39f"
                },
                {
                    "id": 1669,
                    "text": "U39I: post of balance",
                    "html": "U39I: post of balance",
                    "display": "U39i"
                },
                {
                    "id": 1670,
                    "text": "U39K: post of balance",
                    "html": "U39K: post of balance",
                    "display": "U39k"
                },
                {
                    "id": 1671,
                    "text": "U39Q: post of balance",
                    "html": "U39Q: post of balance",
                    "display": "U39q"
                },
                {
                    "id": 1672,
                    "text": "U4: combination of U1 and <canvas class=\"res\">Aa11</canvas> Aa11",
                    "html": "<span class=\"uni\">&#x13336;</span> U4: combination of U1 and <canvas class=\"res\">Aa11</canvas> Aa11",
                    "display": "U4"
                },
                {
                    "id": 1673,
                    "text": "U40: hieratic post of balance",
                    "html": "<span class=\"uni\">&#x1335F;</span> U40: hieratic post of balance",
                    "display": "U40"
                },
                {
                    "id": 1674,
                    "text": "U43",
                    "html": "U43",
                    "display": "U43"
                },
                {
                    "id": 1675,
                    "text": "U5: combination of U2 and <canvas class=\"res\">Aa11</canvas> Aa11",
                    "html": "<span class=\"uni\">&#x13337;</span> U5: combination of U2 and <canvas class=\"res\">Aa11</canvas> Aa11",
                    "display": "U5"
                },
                {
                    "id": 1676,
                    "text": "U50A",
                    "html": "U50A",
                    "display": "U50a"
                },
                {
                    "id": 1677,
                    "text": "U54A",
                    "html": "U54A",
                    "display": "U54a"
                },
                {
                    "id": 1678,
                    "text": "U58",
                    "html": "U58",
                    "display": "U58"
                },
                {
                    "id": 1679,
                    "text": "U6: diagonal hoe [mr]",
                    "html": "<span class=\"uni\">&#x13338;</span> U6: diagonal hoe",
                    "display": "U6"
                },
                {
                    "id": 1680,
                    "text": "U63",
                    "html": "U63",
                    "display": "U63"
                },
                {
                    "id": 1681,
                    "text": "U7: horizontal hoe",
                    "html": "<span class=\"uni\">&#x1333B;</span> U7: horizontal hoe",
                    "display": "U7"
                },
                {
                    "id": 1682,
                    "text": "U7A: horizontal hoe",
                    "html": "U7A: horizontal hoe",
                    "display": "U7a"
                },
                {
                    "id": 1683,
                    "text": "U8: hoe without connecting rope",
                    "html": "<span class=\"uni\">&#x1333C;</span> U8: hoe without connecting rope",
                    "display": "U8"
                },
                {
                    "id": 1684,
                    "text": "U89",
                    "html": "U89",
                    "display": "U89"
                },
                {
                    "id": 1685,
                    "text": "U9: grain-measure with grain",
                    "html": "<span class=\"uni\">&#x1333D;</span> U9: grain-measure with grain",
                    "display": "U9"
                },
                {
                    "id": 1686,
                    "text": "U91",
                    "html": "U91",
                    "display": "U91"
                },
                {
                    "id": 1687,
                    "text": "U92",
                    "html": "U92",
                    "display": "U92"
                },
                {
                    "id": 1688,
                    "text": "U93",
                    "html": "U93",
                    "display": "U93"
                },
                {
                    "id": 1689,
                    "text": "U97",
                    "html": "U97",
                    "display": "U97"
                },
                {
                    "id": 1690,
                    "text": "U97B",
                    "html": "U97B",
                    "display": "U97b"
                }
            ]
        },
        {
            "text": "V: Ropes, Fibres, Basketry, etc.",
            "children": [
                {
                    "id": 1691,
                    "text": "V1: coil of rope [narrow] [100]",
                    "html": "<span class=\"uni\">&#x13362;</span> V1: coil of rope",
                    "display": "V1"
                },
                {
                    "id": 1692,
                    "text": "V10: oval cartouche",
                    "html": "<span class=\"uni\">&#x13377;</span> V10: oval cartouche",
                    "display": "V10"
                },
                {
                    "id": 1693,
                    "text": "V102",
                    "html": "V102",
                    "display": "V102"
                },
                {
                    "id": 1694,
                    "text": "V11: end of cartouche",
                    "html": "<span class=\"uni\">&#x13378;</span> V11: end of cartouche",
                    "display": "V11"
                },
                {
                    "id": 1695,
                    "text": "V110",
                    "html": "V110",
                    "display": "V110"
                },
                {
                    "id": 1696,
                    "text": "V11A: opening of cartouche",
                    "html": "<span class=\"uni\">&#x13379;</span> V11A: opening of cartouche",
                    "display": "V11a"
                },
                {
                    "id": 1697,
                    "text": "V12: string [arq]",
                    "html": "<span class=\"uni\">&#x1337C;</span> V12: string",
                    "display": "V12"
                },
                {
                    "id": 1698,
                    "text": "V13: rope [broad] [T]",
                    "html": "<span class=\"uni\">&#x1337F;</span> V13: rope",
                    "display": "V13"
                },
                {
                    "id": 1699,
                    "text": "V139",
                    "html": "V139",
                    "display": "V139"
                },
                {
                    "id": 1700,
                    "text": "V14: rope with tick [broad]",
                    "html": "<span class=\"uni\">&#x13380;</span> V14: rope with tick",
                    "display": "V14"
                },
                {
                    "id": 1701,
                    "text": "V15: combination of V13 and D54 [iTi]",
                    "html": "<span class=\"uni\">&#x13381;</span> V15: combination of V13 and D54",
                    "display": "V15"
                },
                {
                    "id": 1702,
                    "text": "V16: looped cord [broad]",
                    "html": "<span class=\"uni\">&#x13382;</span> V16: looped cord",
                    "display": "V16"
                },
                {
                    "id": 1703,
                    "text": "V17: shelter of papyrus [tall]",
                    "html": "<span class=\"uni\">&#x13383;</span> V17: shelter of papyrus",
                    "display": "V17"
                },
                {
                    "id": 1704,
                    "text": "V19: hobble with cross-bar [narrow] [TmA]",
                    "html": "<span class=\"uni\">&#x13385;</span> V19: hobble with cross-bar",
                    "display": "V19"
                },
                {
                    "id": 1705,
                    "text": "V2: combination of O34 and V1 [broad] [sTA]",
                    "html": "<span class=\"uni\">&#x1336C;</span> V2: combination of O34 and V1",
                    "display": "V2"
                },
                {
                    "id": 1706,
                    "text": "V20: hobble [narrow] [mD]",
                    "html": "<span class=\"uni\">&#x13386;</span> V20: hobble",
                    "display": "V20"
                },
                {
                    "id": 1707,
                    "text": "V21: combination of V20 and I10",
                    "html": "<span class=\"uni\">&#x13393;</span> V21: combination of V20 and I10",
                    "display": "V21"
                },
                {
                    "id": 1708,
                    "text": "V21A: combination of V20 and I10",
                    "html": "V21A: combination of V20 and I10",
                    "display": "V21a"
                },
                {
                    "id": 1709,
                    "text": "V22: whip [broad] [mH]",
                    "html": "<span class=\"uni\">&#x13394;</span> V22: whip",
                    "display": "V22"
                },
                {
                    "id": 1710,
                    "text": "V24: cord on stick [tall] [wD]",
                    "html": "<span class=\"uni\">&#x13397;</span> V24: cord on stick",
                    "display": "V24"
                },
                {
                    "id": 1711,
                    "text": "V25: cord on stick with tick [tall]",
                    "html": "<span class=\"uni\">&#x13398;</span> V25: cord on stick with tick",
                    "display": "V25"
                },
                {
                    "id": 1712,
                    "text": "V26: netting needle [broad] [aD]",
                    "html": "<span class=\"uni\">&#x13399;</span> V26: netting needle",
                    "display": "V26"
                },
                {
                    "id": 1713,
                    "text": "V26A: netting needle",
                    "html": "V26A: netting needle",
                    "display": "V26a"
                },
                {
                    "id": 1714,
                    "text": "V27: netting needle [broad]",
                    "html": "<span class=\"uni\">&#x1339A;</span> V27: netting needle",
                    "display": "V27"
                },
                {
                    "id": 1715,
                    "text": "V27B: netting needle",
                    "html": "V27B: netting needle",
                    "display": "V27b"
                },
                {
                    "id": 1716,
                    "text": "V28: wick [tall] [H]",
                    "html": "<span class=\"uni\">&#x1339B;</span> V28: wick",
                    "display": "V28"
                },
                {
                    "id": 1717,
                    "text": "V28A: combination of V28 and D36",
                    "html": "<span class=\"uni\">&#x1339C;</span> V28A: combination of V28 and D36",
                    "display": "V28a"
                },
                {
                    "id": 1718,
                    "text": "V28C: wick",
                    "html": "V28C: wick",
                    "display": "V28c"
                },
                {
                    "id": 1719,
                    "text": "V29: swab [tall] [sk]",
                    "html": "<span class=\"uni\">&#x1339D;</span> V29: swab",
                    "display": "V29"
                },
                {
                    "id": 1720,
                    "text": "V30: basket [broad] [nb]",
                    "html": "<span class=\"uni\">&#x1339F;</span> V30: basket",
                    "display": "V30"
                },
                {
                    "id": 1721,
                    "text": "V31: basket with right handle [broad] [k]",
                    "html": "<span class=\"uni\">&#x133A1;</span> V31: basket with right handle",
                    "display": "V31"
                },
                {
                    "id": 1722,
                    "text": "V31A: basket with left handle",
                    "html": "<span class=\"uni\">&#x133A2;</span> V31A: basket with left handle",
                    "display": "V31a"
                },
                {
                    "id": 1723,
                    "text": "V32: frail [broad] [msn]",
                    "html": "<span class=\"uni\">&#x133A3;</span> V32: frail",
                    "display": "V32"
                },
                {
                    "id": 1724,
                    "text": "V33: bag [narrow] [sSr]",
                    "html": "<span class=\"uni\">&#x133A4;</span> V33: bag",
                    "display": "V33"
                },
                {
                    "id": 1725,
                    "text": "V35: bag [narrow]",
                    "html": "<span class=\"uni\">&#x133A7;</span> V35: bag",
                    "display": "V35"
                },
                {
                    "id": 1726,
                    "text": "V36: receptacle [tall]",
                    "html": "<span class=\"uni\">&#x133A8;</span> V36: receptacle",
                    "display": "V36"
                },
                {
                    "id": 1727,
                    "text": "V36G: receptacle",
                    "html": "V36G: receptacle",
                    "display": "V36g"
                },
                {
                    "id": 1728,
                    "text": "V37: bandage [narrow] [idr]",
                    "html": "<span class=\"uni\">&#x133A9;</span> V37: bandage",
                    "display": "V37"
                },
                {
                    "id": 1729,
                    "text": "V38: bandage [tall]",
                    "html": "<span class=\"uni\">&#x133AB;</span> V38: bandage",
                    "display": "V38"
                },
                {
                    "id": 1730,
                    "text": "V39: knot-amulet [tall]",
                    "html": "<span class=\"uni\">&#x133AC;</span> V39: knot-amulet",
                    "display": "V39"
                },
                {
                    "id": 1731,
                    "text": "V4: lasso [wA]",
                    "html": "<span class=\"uni\">&#x1336F;</span> V4: lasso",
                    "display": "V4"
                },
                {
                    "id": 1732,
                    "text": "V40: hobble on its side",
                    "html": "<span class=\"uni\">&#x133AD;</span> V40: hobble on its side",
                    "display": "V40"
                },
                {
                    "id": 1733,
                    "text": "V41",
                    "html": "V41",
                    "display": "V41"
                },
                {
                    "id": 1734,
                    "text": "V42",
                    "html": "V42",
                    "display": "V42"
                },
                {
                    "id": 1735,
                    "text": "V45",
                    "html": "V45",
                    "display": "V45"
                },
                {
                    "id": 1736,
                    "text": "V48",
                    "html": "V48",
                    "display": "V48"
                },
                {
                    "id": 1737,
                    "text": "V49",
                    "html": "V49",
                    "display": "V49"
                },
                {
                    "id": 1738,
                    "text": "V49A",
                    "html": "V49A",
                    "display": "V49a"
                },
                {
                    "id": 1739,
                    "text": "V5: looped rope [snT]",
                    "html": "<span class=\"uni\">&#x13370;</span> V5: looped rope",
                    "display": "V5"
                },
                {
                    "id": 1740,
                    "text": "V50",
                    "html": "V50",
                    "display": "V50"
                },
                {
                    "id": 1741,
                    "text": "V51",
                    "html": "V51",
                    "display": "V51"
                },
                {
                    "id": 1742,
                    "text": "V5A: looped rope",
                    "html": "V5A: looped rope",
                    "display": "V5a"
                },
                {
                    "id": 1743,
                    "text": "V6: cord with ends upward [narrow] [Ss]",
                    "html": "<span class=\"uni\">&#x13371;</span> V6: cord with ends upward",
                    "display": "V6"
                },
                {
                    "id": 1744,
                    "text": "V60",
                    "html": "V60",
                    "display": "V60"
                },
                {
                    "id": 1745,
                    "text": "V65",
                    "html": "V65",
                    "display": "V65"
                },
                {
                    "id": 1746,
                    "text": "V7: cord with ends downward [narrow] [Sn]",
                    "html": "<span class=\"uni\">&#x13372;</span> V7: cord with ends downward",
                    "display": "V7"
                },
                {
                    "id": 1747,
                    "text": "V71",
                    "html": "V71",
                    "display": "V71"
                },
                {
                    "id": 1748,
                    "text": "V78",
                    "html": "V78",
                    "display": "V78"
                },
                {
                    "id": 1749,
                    "text": "V8: cord downward [narrow]",
                    "html": "<span class=\"uni\">&#x13375;</span> V8: cord downward",
                    "display": "V8"
                },
                {
                    "id": 1750,
                    "text": "V81",
                    "html": "V81",
                    "display": "V81"
                },
                {
                    "id": 1751,
                    "text": "V83",
                    "html": "V83",
                    "display": "V83"
                },
                {
                    "id": 1752,
                    "text": "V84",
                    "html": "V84",
                    "display": "V84"
                },
                {
                    "id": 1753,
                    "text": "V9: round cartouche [narrow]",
                    "html": "<span class=\"uni\">&#x13376;</span> V9: round cartouche",
                    "display": "V9"
                },
                {
                    "id": 1754,
                    "text": "V90",
                    "html": "V90",
                    "display": "V90"
                },
                {
                    "id": 1755,
                    "text": "V96",
                    "html": "V96",
                    "display": "V96"
                },
                {
                    "id": 1756,
                    "text": "V97",
                    "html": "V97",
                    "display": "V97"
                },
                {
                    "id": 1757,
                    "text": "V98",
                    "html": "V98",
                    "display": "V98"
                },
                {
                    "id": 1758,
                    "text": "V99",
                    "html": "V99",
                    "display": "V99"
                }
            ]
        },
        {
            "text": "W: Vessels of Stone and Pottery",
            "children": [
                {
                    "id": 1759,
                    "text": "W1: oil jar with ties",
                    "html": "<span class=\"uni\">&#x133AF;</span> W1: oil jar with ties",
                    "display": "W1"
                },
                {
                    "id": 1760,
                    "text": "W10: cup [narrow] [iab]",
                    "html": "<span class=\"uni\">&#x133BA;</span> W10: cup",
                    "display": "W10"
                },
                {
                    "id": 1761,
                    "text": "W10A: pot with tick [narrow]",
                    "html": "<span class=\"uni\">&#x133BB;</span> W10A: pot with tick",
                    "display": "W10a"
                },
                {
                    "id": 1762,
                    "text": "W10B: cup",
                    "html": "W10B: cup",
                    "display": "W10b"
                },
                {
                    "id": 1763,
                    "text": "W11: round ring stand [narrow] [g]",
                    "html": "<span class=\"uni\">&#x133BC;</span> W11: round ring stand",
                    "display": "W11"
                },
                {
                    "id": 1764,
                    "text": "W112A",
                    "html": "W112A",
                    "display": "W112a"
                },
                {
                    "id": 1765,
                    "text": "W113",
                    "html": "W113",
                    "display": "W113"
                },
                {
                    "id": 1766,
                    "text": "W115",
                    "html": "W115",
                    "display": "W115"
                },
                {
                    "id": 1767,
                    "text": "W12: square ring stand [narrow]",
                    "html": "<span class=\"uni\">&#x133BD;</span> W12: square ring stand",
                    "display": "W12"
                },
                {
                    "id": 1768,
                    "text": "W121",
                    "html": "W121",
                    "display": "W121"
                },
                {
                    "id": 1769,
                    "text": "W122",
                    "html": "W122",
                    "display": "W122"
                },
                {
                    "id": 1770,
                    "text": "W125",
                    "html": "W125",
                    "display": "W125"
                },
                {
                    "id": 1771,
                    "text": "W13: earthenware pot [narrow]",
                    "html": "<span class=\"uni\">&#x133BE;</span> W13: earthenware pot",
                    "display": "W13"
                },
                {
                    "id": 1772,
                    "text": "W14: water jar [Hz]",
                    "html": "<span class=\"uni\">&#x133BF;</span> W14: water jar",
                    "display": "W14"
                },
                {
                    "id": 1773,
                    "text": "W14A: combination of V28, W14 and O34",
                    "html": "<span class=\"uni\">&#x133C0;</span> W14A: combination of V28, W14 and O34",
                    "display": "W14a"
                },
                {
                    "id": 1774,
                    "text": "W15: water jar with water",
                    "html": "<span class=\"uni\">&#x133C1;</span> W15: water jar with water",
                    "display": "W15"
                },
                {
                    "id": 1775,
                    "text": "W15A: water jar with water",
                    "html": "W15A: water jar with water",
                    "display": "W15a"
                },
                {
                    "id": 1776,
                    "text": "W15B: water jar with water",
                    "html": "W15B: water jar with water",
                    "display": "W15b"
                },
                {
                    "id": 1777,
                    "text": "W16: water jar with water in ring stand",
                    "html": "<span class=\"uni\">&#x133C2;</span> W16: water jar with water in ring stand",
                    "display": "W16"
                },
                {
                    "id": 1778,
                    "text": "W17: three water jars in rack [xnt]",
                    "html": "<span class=\"uni\">&#x133C3;</span> W17: three water jars in rack",
                    "display": "W17"
                },
                {
                    "id": 1779,
                    "text": "W17A: three water jars in rack (simplified)",
                    "html": "<span class=\"uni\">&#x133C4;</span> W17A: three water jars in rack (simplified)",
                    "display": "W17a"
                },
                {
                    "id": 1780,
                    "text": "W17C: three water jars in rack",
                    "html": "W17C: three water jars in rack",
                    "display": "W17c"
                },
                {
                    "id": 1781,
                    "text": "W17D: three water jars in rack",
                    "html": "W17D: three water jars in rack",
                    "display": "W17d"
                },
                {
                    "id": 1782,
                    "text": "W18: four water jars in rack",
                    "html": "<span class=\"uni\">&#x133C5;</span> W18: four water jars in rack",
                    "display": "W18"
                },
                {
                    "id": 1783,
                    "text": "W19: milk jug in net [tall] [mi]",
                    "html": "<span class=\"uni\">&#x133C7;</span> W19: milk jug in net",
                    "display": "W19"
                },
                {
                    "id": 1784,
                    "text": "W1B: oil jar with ties",
                    "html": "W1B: oil jar with ties",
                    "display": "W1b"
                },
                {
                    "id": 1785,
                    "text": "W2: oil jar [bAs]",
                    "html": "<span class=\"uni\">&#x133B0;</span> W2: oil jar",
                    "display": "W2"
                },
                {
                    "id": 1786,
                    "text": "W20: milk jug with leaf [narrow]",
                    "html": "<span class=\"uni\">&#x133C8;</span> W20: milk jug with leaf",
                    "display": "W20"
                },
                {
                    "id": 1787,
                    "text": "W21: twin wine jars [narrow]",
                    "html": "<span class=\"uni\">&#x133C9;</span> W21: twin wine jars",
                    "display": "W21"
                },
                {
                    "id": 1788,
                    "text": "W21A: twin wine jars",
                    "html": "W21A: twin wine jars",
                    "display": "W21a"
                },
                {
                    "id": 1789,
                    "text": "W22: beer jug [Hnqt]",
                    "html": "<span class=\"uni\">&#x133CA;</span> W22: beer jug",
                    "display": "W22"
                },
                {
                    "id": 1790,
                    "text": "W23: jar with handles",
                    "html": "<span class=\"uni\">&#x133CB;</span> W23: jar with handles",
                    "display": "W23"
                },
                {
                    "id": 1791,
                    "text": "W24: bowl [nw]",
                    "html": "<span class=\"uni\">&#x133CC;</span> W24: bowl",
                    "display": "W24"
                },
                {
                    "id": 1792,
                    "text": "W25: combination of W24 and D54 [ini]",
                    "html": "<span class=\"uni\">&#x133CE;</span> W25: combination of W24 and D54",
                    "display": "W25"
                },
                {
                    "id": 1793,
                    "text": "W27B",
                    "html": "W27B",
                    "display": "W27b"
                },
                {
                    "id": 1794,
                    "text": "W29",
                    "html": "W29",
                    "display": "W29"
                },
                {
                    "id": 1795,
                    "text": "W2B: oil jar",
                    "html": "W2B: oil jar",
                    "display": "W2b"
                },
                {
                    "id": 1796,
                    "text": "W3: alabaster basin [broad] [Hb]",
                    "html": "<span class=\"uni\">&#x133B1;</span> W3: alabaster basin",
                    "display": "W3"
                },
                {
                    "id": 1797,
                    "text": "W30",
                    "html": "W30",
                    "display": "W30"
                },
                {
                    "id": 1798,
                    "text": "W31",
                    "html": "W31",
                    "display": "W31"
                },
                {
                    "id": 1799,
                    "text": "W33",
                    "html": "W33",
                    "display": "W33"
                },
                {
                    "id": 1800,
                    "text": "W37D",
                    "html": "W37D",
                    "display": "W37d"
                },
                {
                    "id": 1801,
                    "text": "W4: combination of O22 and W3",
                    "html": "<span class=\"uni\">&#x133B3;</span> W4: combination of O22 and W3",
                    "display": "W4"
                },
                {
                    "id": 1802,
                    "text": "W40",
                    "html": "W40",
                    "display": "W40"
                },
                {
                    "id": 1803,
                    "text": "W45",
                    "html": "W45",
                    "display": "W45"
                },
                {
                    "id": 1804,
                    "text": "W4A: combination of O22 and W3",
                    "html": "W4A: combination of O22 and W3",
                    "display": "W4a"
                },
                {
                    "id": 1805,
                    "text": "W5: combination of T28 and W3",
                    "html": "<span class=\"uni\">&#x133B4;</span> W5: combination of T28 and W3",
                    "display": "W5"
                },
                {
                    "id": 1806,
                    "text": "W54",
                    "html": "W54",
                    "display": "W54"
                },
                {
                    "id": 1807,
                    "text": "W54A",
                    "html": "W54A",
                    "display": "W54a"
                },
                {
                    "id": 1808,
                    "text": "W56",
                    "html": "W56",
                    "display": "W56"
                },
                {
                    "id": 1809,
                    "text": "W57",
                    "html": "W57",
                    "display": "W57"
                },
                {
                    "id": 1810,
                    "text": "W59",
                    "html": "W59",
                    "display": "W59"
                },
                {
                    "id": 1811,
                    "text": "W5A: combination of T28 and W3",
                    "html": "W5A: combination of T28 and W3",
                    "display": "W5a"
                },
                {
                    "id": 1812,
                    "text": "W6: metal vessel [narrow]",
                    "html": "<span class=\"uni\">&#x133B5;</span> W6: metal vessel",
                    "display": "W6"
                },
                {
                    "id": 1813,
                    "text": "W60",
                    "html": "W60",
                    "display": "W60"
                },
                {
                    "id": 1814,
                    "text": "W61",
                    "html": "W61",
                    "display": "W61"
                },
                {
                    "id": 1815,
                    "text": "W62",
                    "html": "W62",
                    "display": "W62"
                },
                {
                    "id": 1816,
                    "text": "W64",
                    "html": "W64",
                    "display": "W64"
                },
                {
                    "id": 1817,
                    "text": "W65",
                    "html": "W65",
                    "display": "W65"
                },
                {
                    "id": 1818,
                    "text": "W66",
                    "html": "W66",
                    "display": "W66"
                },
                {
                    "id": 1819,
                    "text": "W67",
                    "html": "W67",
                    "display": "W67"
                },
                {
                    "id": 1820,
                    "text": "W69",
                    "html": "W69",
                    "display": "W69"
                },
                {
                    "id": 1821,
                    "text": "W6A: metal vessel",
                    "html": "W6A: metal vessel",
                    "display": "W6a"
                },
                {
                    "id": 1822,
                    "text": "W7: granite bowl [narrow]",
                    "html": "<span class=\"uni\">&#x133B6;</span> W7: granite bowl",
                    "display": "W7"
                },
                {
                    "id": 1823,
                    "text": "W70",
                    "html": "W70",
                    "display": "W70"
                },
                {
                    "id": 1824,
                    "text": "W72",
                    "html": "W72",
                    "display": "W72"
                },
                {
                    "id": 1825,
                    "text": "W73",
                    "html": "W73",
                    "display": "W73"
                },
                {
                    "id": 1826,
                    "text": "W76",
                    "html": "W76",
                    "display": "W76"
                },
                {
                    "id": 1827,
                    "text": "W77",
                    "html": "W77",
                    "display": "W77"
                },
                {
                    "id": 1828,
                    "text": "W78",
                    "html": "W78",
                    "display": "W78"
                },
                {
                    "id": 1829,
                    "text": "W78A",
                    "html": "W78A",
                    "display": "W78a"
                },
                {
                    "id": 1830,
                    "text": "W79",
                    "html": "W79",
                    "display": "W79"
                },
                {
                    "id": 1831,
                    "text": "W7A: granite bowl",
                    "html": "W7A: granite bowl",
                    "display": "W7a"
                },
                {
                    "id": 1832,
                    "text": "W8: deformed granite bowl [broad]",
                    "html": "<span class=\"uni\">&#x133B7;</span> W8: deformed granite bowl",
                    "display": "W8"
                },
                {
                    "id": 1833,
                    "text": "W81",
                    "html": "W81",
                    "display": "W81"
                },
                {
                    "id": 1834,
                    "text": "W83",
                    "html": "W83",
                    "display": "W83"
                },
                {
                    "id": 1835,
                    "text": "W85",
                    "html": "W85",
                    "display": "W85"
                },
                {
                    "id": 1836,
                    "text": "W88",
                    "html": "W88",
                    "display": "W88"
                },
                {
                    "id": 1837,
                    "text": "W89",
                    "html": "W89",
                    "display": "W89"
                },
                {
                    "id": 1838,
                    "text": "W9: jug with left handle [Xnm]",
                    "html": "<span class=\"uni\">&#x133B8;</span> W9: jug with left handle",
                    "display": "W9"
                },
                {
                    "id": 1839,
                    "text": "W93",
                    "html": "W93",
                    "display": "W93"
                },
                {
                    "id": 1840,
                    "text": "W97",
                    "html": "W97",
                    "display": "W97"
                },
                {
                    "id": 1841,
                    "text": "W98",
                    "html": "W98",
                    "display": "W98"
                },
                {
                    "id": 1842,
                    "text": "W9C: jug with left handle",
                    "html": "W9C: jug with left handle",
                    "display": "W9c"
                }
            ]
        },
        {
            "text": "X: Breads and Pastries",
            "children": [
                {
                    "id": 1843,
                    "text": "X1: flat loaf [narrow] [t]",
                    "html": "<span class=\"uni\">&#x133CF;</span> X1: flat loaf",
                    "display": "X1"
                },
                {
                    "id": 1844,
                    "text": "X11",
                    "html": "X11",
                    "display": "X11"
                },
                {
                    "id": 1845,
                    "text": "X2: tall loaf [narrow]",
                    "html": "<span class=\"uni\">&#x133D0;</span> X2: tall loaf",
                    "display": "X2"
                },
                {
                    "id": 1846,
                    "text": "X2D: tall loaf",
                    "html": "X2D: tall loaf",
                    "display": "X2d"
                },
                {
                    "id": 1847,
                    "text": "X3: tall loaf [narrow]",
                    "html": "<span class=\"uni\">&#x133D1;</span> X3: tall loaf",
                    "display": "X3"
                },
                {
                    "id": 1848,
                    "text": "X3A: tall loaf",
                    "html": "X3A: tall loaf",
                    "display": "X3a"
                },
                {
                    "id": 1849,
                    "text": "X4: roll of bread [broad]",
                    "html": "<span class=\"uni\">&#x133D2;</span> X4: roll of bread",
                    "display": "X4"
                },
                {
                    "id": 1850,
                    "text": "X4A: roll of bread",
                    "html": "<span class=\"uni\">&#x133D3;</span> X4A: roll of bread",
                    "display": "X4a"
                },
                {
                    "id": 1851,
                    "text": "X4D: roll of bread",
                    "html": "X4D: roll of bread",
                    "display": "X4d"
                },
                {
                    "id": 1852,
                    "text": "X4E: roll of bread",
                    "html": "X4E: roll of bread",
                    "display": "X4e"
                },
                {
                    "id": 1853,
                    "text": "X4H: roll of bread",
                    "html": "X4H: roll of bread",
                    "display": "X4h"
                },
                {
                    "id": 1854,
                    "text": "X5: hieratic roll of bread [broad]",
                    "html": "<span class=\"uni\">&#x133D5;</span> X5: hieratic roll of bread",
                    "display": "X5"
                },
                {
                    "id": 1855,
                    "text": "X6: round loaf [narrow]",
                    "html": "<span class=\"uni\">&#x133D6;</span> X6: round loaf",
                    "display": "X6"
                },
                {
                    "id": 1856,
                    "text": "X6A: round loaf",
                    "html": "<span class=\"uni\">&#x133D7;</span> X6A: round loaf",
                    "display": "X6a"
                },
                {
                    "id": 1857,
                    "text": "X6B: round loaf",
                    "html": "X6B: round loaf",
                    "display": "X6b"
                },
                {
                    "id": 1858,
                    "text": "X7: half-loaf [narrow]",
                    "html": "<span class=\"uni\">&#x133D8;</span> X7: half-loaf",
                    "display": "X7"
                },
                {
                    "id": 1859,
                    "text": "X8: conical loaf [di]",
                    "html": "<span class=\"uni\">&#x133D9;</span> X8: conical loaf",
                    "display": "X8"
                }
            ]
        },
        {
            "text": "Y: Writing, Games, Music",
            "children": [
                {
                    "id": 1860,
                    "text": "Y1: scroll with ties [broad] [mDAt]",
                    "html": "<span class=\"uni\">&#x133DB;</span> Y1: scroll with ties",
                    "display": "Y1"
                },
                {
                    "id": 1861,
                    "text": "Y14",
                    "html": "Y14",
                    "display": "Y14"
                },
                {
                    "id": 1862,
                    "text": "Y15",
                    "html": "Y15",
                    "display": "Y15"
                },
                {
                    "id": 1863,
                    "text": "Y17",
                    "html": "Y17",
                    "display": "Y17"
                },
                {
                    "id": 1864,
                    "text": "Y18B",
                    "html": "Y18B",
                    "display": "Y18b"
                },
                {
                    "id": 1865,
                    "text": "Y1V: scroll with ties",
                    "html": "Y1V: scroll with ties",
                    "display": "Y1v"
                },
                {
                    "id": 1866,
                    "text": "Y2: scroll [broad]",
                    "html": "<span class=\"uni\">&#x133DD;</span> Y2: scroll",
                    "display": "Y2"
                },
                {
                    "id": 1867,
                    "text": "Y21",
                    "html": "Y21",
                    "display": "Y21"
                },
                {
                    "id": 1868,
                    "text": "Y22",
                    "html": "Y22",
                    "display": "Y22"
                },
                {
                    "id": 1869,
                    "text": "Y23",
                    "html": "Y23",
                    "display": "Y23"
                },
                {
                    "id": 1870,
                    "text": "Y24",
                    "html": "Y24",
                    "display": "Y24"
                },
                {
                    "id": 1871,
                    "text": "Y25",
                    "html": "Y25",
                    "display": "Y25"
                },
                {
                    "id": 1872,
                    "text": "Y2V: scroll",
                    "html": "Y2V: scroll",
                    "display": "Y2v"
                },
                {
                    "id": 1873,
                    "text": "Y3: scribe&amp;apos;s outfit with palette on left [zS]",
                    "html": "<span class=\"uni\">&#x133DE;</span> Y3: scribe&amp;apos;s outfit with palette on left",
                    "display": "Y3"
                },
                {
                    "id": 1874,
                    "text": "Y4: scribe&amp;apos;s outfit with palette on right",
                    "html": "<span class=\"uni\">&#x133DF;</span> Y4: scribe&amp;apos;s outfit with palette on right",
                    "display": "Y4"
                },
                {
                    "id": 1875,
                    "text": "Y5: game board [mn]",
                    "html": "<span class=\"uni\">&#x133E0;</span> Y5: game board",
                    "display": "Y5"
                },
                {
                    "id": 1876,
                    "text": "Y6: game piece [narrow] [ibA]",
                    "html": "<span class=\"uni\">&#x133E1;</span> Y6: game piece",
                    "display": "Y6"
                },
                {
                    "id": 1877,
                    "text": "Y7: harp",
                    "html": "<span class=\"uni\">&#x133E2;</span> Y7: harp",
                    "display": "Y7"
                },
                {
                    "id": 1878,
                    "text": "Y8: sistrum [tall] [zSSt]",
                    "html": "<span class=\"uni\">&#x133E3;</span> Y8: sistrum",
                    "display": "Y8"
                },
                {
                    "id": 1879,
                    "text": "Y8A: sistrum",
                    "html": "Y8A: sistrum",
                    "display": "Y8a"
                }
            ]
        },
        {
            "text": "Z : Strokes, Geometric Signs and Hieratic Signs",
            "children": [
                {
                    "id": 1880,
                    "text": "Z1: stroke",
                    "html": "<span class=\"uni\">&#x133E4;</span> Z1: stroke",
                    "display": "Z1"
                },
                {
                    "id": 1881,
                    "text": "Z10: wide diagonal cross [narrow]",
                    "html": "<span class=\"uni\">&#x133F5;</span> Z10: wide diagonal cross",
                    "display": "Z10"
                },
                {
                    "id": 1882,
                    "text": "Z11: cross [tall] [imi]",
                    "html": "<span class=\"uni\">&#x133F6;</span> Z11: cross",
                    "display": "Z11"
                },
                {
                    "id": 1883,
                    "text": "Z11A: cross",
                    "html": "Z11A: cross",
                    "display": "Z11a"
                },
                {
                    "id": 1884,
                    "text": "Z12: hieratic striking man",
                    "html": "<span class=\"uni\">&#x133F7;</span> Z12: hieratic striking man",
                    "display": "Z12"
                },
                {
                    "id": 1885,
                    "text": "Z1A: stroke",
                    "html": "Z1A: stroke",
                    "display": "Z1a"
                },
                {
                    "id": 1886,
                    "text": "Z2: three Z1 horizontally",
                    "html": "<span class=\"uni\">&#x133E5;</span> Z2: three Z1 horizontally",
                    "display": "Z2"
                },
                {
                    "id": 1887,
                    "text": "Z20",
                    "html": "Z20",
                    "display": "Z20"
                },
                {
                    "id": 1888,
                    "text": "Z22",
                    "html": "Z22",
                    "display": "Z22"
                },
                {
                    "id": 1889,
                    "text": "Z24",
                    "html": "Z24",
                    "display": "Z24"
                },
                {
                    "id": 1890,
                    "text": "Z26",
                    "html": "Z26",
                    "display": "Z26"
                },
                {
                    "id": 1891,
                    "text": "Z28",
                    "html": "Z28",
                    "display": "Z28"
                },
                {
                    "id": 1892,
                    "text": "Z2A: three Z1 horizontally",
                    "html": "<span class=\"uni\">&#x133E6;</span> Z2A: three Z1 horizontally",
                    "display": "Z2a"
                },
                {
                    "id": 1893,
                    "text": "Z2B: three D67 horizontally",
                    "html": "<span class=\"uni\">&#x133E7;</span> Z2B: three D67 horizontally",
                    "display": "Z2b"
                },
                {
                    "id": 1894,
                    "text": "Z2C: three Z1 in triangular arrangement",
                    "html": "<span class=\"uni\">&#x133E8;</span> Z2C: three Z1 in triangular arrangement",
                    "display": "Z2c"
                },
                {
                    "id": 1895,
                    "text": "Z3: three Z1 vertically",
                    "html": "<span class=\"uni\">&#x133EA;</span> Z3: three Z1 vertically",
                    "display": "Z3"
                },
                {
                    "id": 1896,
                    "text": "Z30",
                    "html": "Z30",
                    "display": "Z30"
                },
                {
                    "id": 1897,
                    "text": "Z38",
                    "html": "Z38",
                    "display": "Z38"
                },
                {
                    "id": 1898,
                    "text": "Z3A: three lying Z1 vertically",
                    "html": "<span class=\"uni\">&#x133EB;</span> Z3A: three lying Z1 vertically",
                    "display": "Z3a"
                },
                {
                    "id": 1899,
                    "text": "Z4: two diagonal strokes [y]",
                    "html": "<span class=\"uni\">&#x133ED;</span> Z4: two diagonal strokes",
                    "display": "Z4"
                },
                {
                    "id": 1900,
                    "text": "Z4A: two Z1 horizontally",
                    "html": "<span class=\"uni\">&#x133EE;</span> Z4A: two Z1 horizontally",
                    "display": "Z4a"
                },
                {
                    "id": 1901,
                    "text": "Z4B: two diagonal strokes",
                    "html": "Z4B: two diagonal strokes",
                    "display": "Z4b"
                },
                {
                    "id": 1902,
                    "text": "Z5: curved diagonal stroke",
                    "html": "<span class=\"uni\">&#x133EF;</span> Z5: curved diagonal stroke",
                    "display": "Z5"
                },
                {
                    "id": 1903,
                    "text": "Z5A: diagonal stroke",
                    "html": "<span class=\"uni\">&#x133F0;</span> Z5A: diagonal stroke",
                    "display": "Z5a"
                },
                {
                    "id": 1904,
                    "text": "Z6: hieratic substitute for A13 or A14 [broad]",
                    "html": "<span class=\"uni\">&#x133F1;</span> Z6: hieratic substitute for A13 or A14",
                    "display": "Z6"
                },
                {
                    "id": 1905,
                    "text": "Z7: hieratic quail chick [narrow] [W]",
                    "html": "<span class=\"uni\">&#x133F2;</span> Z7: hieratic quail chick",
                    "display": "Z7"
                },
                {
                    "id": 1906,
                    "text": "Z8: oval [narrow]",
                    "html": "<span class=\"uni\">&#x133F3;</span> Z8: oval",
                    "display": "Z8"
                },
                {
                    "id": 1907,
                    "text": "Z9: diagonal cross [narrow]",
                    "html": "<span class=\"uni\">&#x133F4;</span> Z9: diagonal cross",
                    "display": "Z9"
                }
            ]
        },
        {
            "text": "AA: Unclassified Signs",
            "children": [
                {
                    "id": 1908,
                    "text": "?",
                    "html": "?",
                    "display": "?"
                },
                {
                    "id": 1909,
                    "text": "AA1: basket from above [narrow]",
                    "html": "<span class=\"uni\">&#x1340D;</span> AA1: basket from above",
                    "display": "Aa1"
                },
                {
                    "id": 1910,
                    "text": "AA10: unknown [broad]",
                    "html": "<span class=\"uni\">&#x13418;</span> AA10: unknown",
                    "display": "Aa10"
                },
                {
                    "id": 1911,
                    "text": "AA11: platform [broad]",
                    "html": "<span class=\"uni\">&#x13419;</span> AA11: platform",
                    "display": "Aa11"
                },
                {
                    "id": 1912,
                    "text": "AA12: platform [broad]",
                    "html": "<span class=\"uni\">&#x1341A;</span> AA12: platform",
                    "display": "Aa12"
                },
                {
                    "id": 1913,
                    "text": "AA13: sharp half [broad]",
                    "html": "<span class=\"uni\">&#x1341B;</span> AA13: sharp half",
                    "display": "Aa13"
                },
                {
                    "id": 1914,
                    "text": "AA14: bent half [broad]",
                    "html": "<span class=\"uni\">&#x1341C;</span> AA14: bent half",
                    "display": "Aa14"
                },
                {
                    "id": 1915,
                    "text": "AA15: blunt half [broad]",
                    "html": "<span class=\"uni\">&#x1341D;</span> AA15: blunt half",
                    "display": "Aa15"
                },
                {
                    "id": 1916,
                    "text": "AA16: short half [narrow]",
                    "html": "<span class=\"uni\">&#x1341E;</span> AA16: short half",
                    "display": "Aa16"
                },
                {
                    "id": 1917,
                    "text": "AA17: lid [narrow]",
                    "html": "<span class=\"uni\">&#x1341F;</span> AA17: lid",
                    "display": "Aa17"
                },
                {
                    "id": 1918,
                    "text": "AA18: square lid",
                    "html": "<span class=\"uni\">&#x13420;</span> AA18: square lid",
                    "display": "Aa18"
                },
                {
                    "id": 1919,
                    "text": "AA19: instrument [narrow]",
                    "html": "<span class=\"uni\">&#x13421;</span> AA19: instrument",
                    "display": "Aa19"
                },
                {
                    "id": 1920,
                    "text": "AA2: pustule [narrow]",
                    "html": "<span class=\"uni\">&#x1340E;</span> AA2: pustule",
                    "display": "Aa2"
                },
                {
                    "id": 1921,
                    "text": "AA20: bag [tall]",
                    "html": "<span class=\"uni\">&#x13422;</span> AA20: bag",
                    "display": "Aa20"
                },
                {
                    "id": 1922,
                    "text": "AA20B: bag",
                    "html": "AA20B: bag",
                    "display": "Aa20b"
                },
                {
                    "id": 1923,
                    "text": "AA21: instrument [tall]",
                    "html": "<span class=\"uni\">&#x13423;</span> AA21: instrument",
                    "display": "Aa21"
                },
                {
                    "id": 1924,
                    "text": "AA21A: instrument",
                    "html": "AA21A: instrument",
                    "display": "Aa21a"
                },
                {
                    "id": 1925,
                    "text": "AA22: combination of <canvas class=\"res\">Aa21</canvas> Aa21 and D36",
                    "html": "<span class=\"uni\">&#x13424;</span> AA22: combination of <canvas class=\"res\">Aa21</canvas> Aa21 and D36",
                    "display": "Aa22"
                },
                {
                    "id": 1926,
                    "text": "AA23: high warp between stakes",
                    "html": "<span class=\"uni\">&#x13425;</span> AA23: high warp between stakes",
                    "display": "Aa23"
                },
                {
                    "id": 1927,
                    "text": "AA23T: high warp between stakes",
                    "html": "AA23T: high warp between stakes",
                    "display": "Aa23t"
                },
                {
                    "id": 1928,
                    "text": "AA24: low warp between stakes [broad]",
                    "html": "<span class=\"uni\">&#x13426;</span> AA24: low warp between stakes",
                    "display": "Aa24"
                },
                {
                    "id": 1929,
                    "text": "AA25: unknown [tall]",
                    "html": "<span class=\"uni\">&#x13427;</span> AA25: unknown",
                    "display": "Aa25"
                },
                {
                    "id": 1930,
                    "text": "AA26: unknown [tall]",
                    "html": "<span class=\"uni\">&#x13428;</span> AA26: unknown",
                    "display": "Aa26"
                },
                {
                    "id": 1931,
                    "text": "AA27: spindle [tall]",
                    "html": "<span class=\"uni\">&#x13429;</span> AA27: spindle",
                    "display": "Aa27"
                },
                {
                    "id": 1932,
                    "text": "AA27B: spindle",
                    "html": "AA27B: spindle",
                    "display": "Aa27b"
                },
                {
                    "id": 1933,
                    "text": "AA27D: spindle",
                    "html": "AA27D: spindle",
                    "display": "Aa27d"
                },
                {
                    "id": 1934,
                    "text": "AA28: level [tall]",
                    "html": "<span class=\"uni\">&#x1342A;</span> AA28: level",
                    "display": "Aa28"
                },
                {
                    "id": 1935,
                    "text": "AA3: pustule with liquid [narrow]",
                    "html": "<span class=\"uni\">&#x1340F;</span> AA3: pustule with liquid",
                    "display": "Aa3"
                },
                {
                    "id": 1936,
                    "text": "AA30: frieze [tall]",
                    "html": "<span class=\"uni\">&#x1342C;</span> AA30: frieze",
                    "display": "Aa30"
                },
                {
                    "id": 1937,
                    "text": "AA31: frieze [tall]",
                    "html": "<span class=\"uni\">&#x1342D;</span> AA31: frieze",
                    "display": "Aa31"
                },
                {
                    "id": 1938,
                    "text": "AA32: archaic bow [tall]",
                    "html": "AA32: archaic bow",
                    "display": "Aa32"
                },
                {
                    "id": 1939,
                    "text": "AA3A: pustule with liquid",
                    "html": "AA3A: pustule with liquid",
                    "display": "Aa3a"
                },
                {
                    "id": 1940,
                    "text": "AA3B: pustule with liquid",
                    "html": "AA3B: pustule with liquid",
                    "display": "Aa3b"
                },
                {
                    "id": 1941,
                    "text": "AA5: navigation instrument",
                    "html": "<span class=\"uni\">&#x13411;</span> AA5: navigation instrument",
                    "display": "Aa5"
                },
                {
                    "id": 1942,
                    "text": "AA51",
                    "html": "AA51",
                    "display": "Aa51"
                },
                {
                    "id": 1943,
                    "text": "AA54",
                    "html": "AA54",
                    "display": "Aa54"
                },
                {
                    "id": 1944,
                    "text": "AA55",
                    "html": "AA55",
                    "display": "Aa55"
                },
                {
                    "id": 1945,
                    "text": "AA56",
                    "html": "AA56",
                    "display": "Aa56"
                },
                {
                    "id": 1946,
                    "text": "AA5A: navigation instrument",
                    "html": "AA5A: navigation instrument",
                    "display": "Aa5a"
                },
                {
                    "id": 1947,
                    "text": "AA6: instrument",
                    "html": "<span class=\"uni\">&#x13412;</span> AA6: instrument",
                    "display": "Aa6"
                },
                {
                    "id": 1948,
                    "text": "AA7: instrument [broad]",
                    "html": "<span class=\"uni\">&#x13413;</span> AA7: instrument",
                    "display": "Aa7"
                },
                {
                    "id": 1949,
                    "text": "AA8: irrigation canal [broad]",
                    "html": "<span class=\"uni\">&#x13416;</span> AA8: irrigation canal",
                    "display": "Aa8"
                },
                {
                    "id": 1950,
                    "text": "AA81",
                    "html": "AA81",
                    "display": "Aa81"
                },
                {
                    "id": 1951,
                    "text": "AA9: instrument [broad]",
                    "html": "<span class=\"uni\">&#x13417;</span> AA9: instrument",
                    "display": "Aa9"
                }
            ]
        }
    ]
    $('.js-example-basic-multiple').select2({

        data: outData,
        placeholder: "Id, [translit.], [narrow], [broad], [tall]",
        width: "60%",
        multiple: true,
        escapeMarkup: function (markup) {
            return markup;
        },
        templateResult: function (data) {
            return data.html;
        },
        templateSelection: function (data) {
            return data.display;
        }
    });
    $('.select2').hide();
    $('.select2').children().hide();
});

function SelectClick1() {
    $('.js-example-basic-multiple').on('change', function (e) {
        var data = e;
        console.log(e);
    });
}

function SelectClick() {
    console.log('happens');
    $(".js-example-basic-multiple").on('select2:select', function (e) {
        var data = $('.js-example-basic-multiple').select2('data');
        var signQuery = [];
        data.forEach(function (item) {
            signQuery.push(item.display);
        });
        var text = signQuery.join(' ');
        $("#SignQuery").val(text);
    });
}

function MyToggle(x) {
    $(".my-toggle").click(function (event) {
        if (event.target.tagName.toUpperCase() === "LABEL") {
            if ($(this).hasClass("active")) {
                $(this).removeClass("active");
                $(this).find(".toggle-check").prop('checked', false);
            }
            else {
                $(this).addClass("active");
                $(this).find(".toggle-check").prop('checked', true);
            }

            if (event.target.id.toUpperCase() === "EXACT-MATCH") {
                ChangeText(2);
            }
            event.stopImmediatePropagation();
        }
    });
}

function ChangeText(flag) {
    switch (flag) {
        // Switching tabs to not-Translation
        case 0:
            $("#exact-match").text("Exact Match");
            break;
        // Switching tabs to Translation
        case 1:
            if ($("#exact-match").hasClass("active")) {
                $("#exact-match").text("Contains all Keywords");
            } else {
                $("#exact-match").text("Contains any Keywords");
            }
            break;
        // Clicking on ExactMatch while translation is selected
        case 2:
            if ($('#translationradio').hasClass('active')) {
                if ($("#exact-match").hasClass("active")) {
                    $("#exact-match").text("Contains all Keywords");
                } else {
                    $("#exact-match").text("Contains any Keywords");
                }
            }
            break;
    }
}

function ChangeTextbox(x) {
    switch (x) {
        // Switch to the Gardiner Ids tab, swap out textbox for tagged one
        case 1:
            $("#regular-input").hide();
            $('.select2').show();
            $('.select2').children().show();
            break;
        // Switch to another tab, use regular input box.
        case 0:
            $('.select2').hide();
            $('.select2').children().hide();
            $("#regular-input").show();
            break;
    }
}
