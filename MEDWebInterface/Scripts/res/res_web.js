/////////////////////////////////////////////////////////////////////////////
// RES in web pages.

// Make canvas for all hieroglyphic.
function ResWeb() {
	var canvass = document.getElementsByTagName("canvas");
	for (var i = 0; i < canvass.length; i++) {
		var canvas = canvass[i];
		if (canvas.className.match(/\bres\b/)) 
			ResWeb.makeSometime(canvas);
	}
}
// Make canvas for hieroglyphic in element.
ResWeb.makeIn =
function(elem) {
	var canvass = elem.getElementsByTagName("canvas");
	for (var i = 0; i < canvass.length; i++) {
		var canvas = canvass[i];
		if (canvas.className.match(/\bres\b/))
			ResWeb.make(canvas);
	}
};

// Root function for web page.
ResWeb.init =
function() {
	ResWeb();
	ResWeb.mapSigns();
	ResWeb.mapTrans();
};

// Make canvas, as soon as possible.
ResWeb.makeSometime =
function(canvas) {
	ResWeb.waitForFonts(function(){ ResWeb.make(canvas); }, 0);
};
// Make canvas now.
ResWeb.make =
function(canvas) {
	var text = canvas.firstChild;
	var code = canvas.firstChild !== null ? canvas.firstChild.nodeValue : "";
	var style = window.getComputedStyle(canvas, null);
	var size = style.getPropertyValue("font-size").replace("px", "");
	if (code.match(/\s*\$/m)) {
		if (typeof ResLite === 'function') {
			var resLite = ResLite.parse(code);
			resLite.render(canvas, size);
		} else
			console.log("RESlite not available");
	} else {
		if (typeof ResFragment === 'function') {
			try {
				var frag = res_syntax.parse(code);
			} catch(err) {
				var frag = res_syntax.parse("\"?\"");
			}
			frag.render(canvas, size);
		} else
			console.log("RES not available");
	}
};

window.addEventListener("DOMContentLoaded", ResWeb.init);

/////////////////////////////////////////////////////////////////////////////
// Fonts.

// Has font been loaded?
// We look at two signs of which ratio of widths is know. Does this match?
// If not, the right font is not loaded.
// return: "" if correct font loaded, otherwise diagnostic string
ResWeb.fontLoaded =
function(font, sign1, sign2, ratio) {
	var measureCanvas = document.createElement("canvas");
	var ctx = measureCanvas.getContext("2d");
	ctx.font = font;
	var w1 = ctx.measureText(sign1).width;
	var w2 = ctx.measureText(sign2).width;
	var measureRatio = 1.0 * w1 / w2;
	var margin = 0.1;
	if (Math.abs(ratio - measureRatio) > margin)
		return "expected " + ratio + " got " + measureRatio;
	else
		return "";
};
// return: "" if correct fonts loaded, otherwise diagnostic string
ResWeb.fontsLoaded =
function() {
	var font = "50px Hieroglyphic";
	var fontAux = "50px HieroglyphicAux";
	var fontPlain = "50px HieroglyphicPlain";
	var result1 = "" + ResWeb.fontLoaded(font, "\uE03E", "\uE03F", 0.34);
	var result2 = "" + ResWeb.fontLoaded(fontAux, "\u0023", "\u0028", 0.29);
	var result3 = "" + ResWeb.fontLoaded(fontPlain, "\u0023", "\u0028", 1.39);
	if (result1 === "" && result2 === "" && result3 === "")
		return "";
	else
		return "Hieroglyphic " + result1 +
			"HieroglyphicAux " + result2 +
			"HieroglyphicPlain " + result3;
};

ResWeb.fontsDone = false;

// Check whether fonts have loaded. If not, wait and try anew.
// f: function to be applied if fonts present.
// c: count how often tried already
ResWeb.waitForFonts =
function(f, c) {
	if (ResWeb.fontsDone) {
		f();
	} else if (ResWeb.fontsLoaded() === "") {
		ResWeb.fontsDone = true;
		f();
	} else if (c > 40) {
		console.log("seem unable to load fonts: " + ResWeb.fontsLoaded());
		alert("seem unable to load fonts; perhaps try again later?");
	} else {
		setTimeout(function(){ ResWeb.waitForFonts(f, c+1); }, 1000);
	}
};

/////////////////////////////////////////////////////////////////////////////
// Individual signs and transliteration.

ResWeb.mapSignsIn =
function(elem) {
	var spans = elem.getElementsByTagName("span");
	for (var i = 0; i < spans.length; i++) {
		var span = spans[i];
		if (span.className.match(/\bsign\b/)) {
			var code = span.firstChild.nodeValue;
			var key = ResContext.unMnemonic(code);
			key = ResContext.hieroPoints[key];
			if (key) 
				span.innerHTML = String.fromCharCode(key);
		}
	}
};
ResWeb.mapSigns =
function() {
	ResWeb.mapSignsIn(document);
};

ResWeb.mapTransIn =
function(elem) {
	var spans = elem.getElementsByTagName("span");
	for (var i = 0; i < spans.length; i++) {
		var span = spans[i];
		if (span.className.match(/\btrans\b/)) {
			var trans = span.firstChild.nodeValue;
			var uni = "";
			for (var j = 0; j < trans.length; j++) {
				if (trans[j] === "^" && j < trans.length-1) {
					j++;
					uni += ResWeb.transUnicode(trans[j], true);
				} else
					uni += ResWeb.transUnicode(trans[j], false);
			}
			span.innerHTML = uni;
		}
	}
};
ResWeb.mapTrans =
function() {
	ResWeb.mapTransIn(document);
};
ResWeb.transUnicode =
function(c, upper) {
	switch (c) {
		case 'A': return upper ? "\uA722" : "\uA723";
		case 'j': return upper ? "J" : "j";
		case 'i': return upper ? "I\u0313" : "i\u0313";
		case 'y': return upper ? "Y" : "y";
		case 'a': return upper ? "\uA724" : "\uA725";
		case 'w': return upper ? "W" : "w";
		case 'b': return upper ? "B" : "b";
		case 'p': return upper ? "P" : "p";
		case 'f': return upper ? "F" : "f";
		case 'm': return upper ? "M" : "m";
		case 'n': return upper ? "N" : "n";
		case 'r': return upper ? "R" : "r";
		case 'l': return upper ? "L" : "l";
		case 'h': return upper ? "H" : "h";
		case 'H': return upper ? "\u1E24" : "\u1E25";
		case 'x': return upper ? "\u1E2A" : "\u1E2B";
		case 'X': return upper ? "H\u0331" : "\u1E96";
		case 'z': return upper ? "Z" : "z";
		case 's': return upper ? "S" : "s";
		case 'S': return upper ? "\u0160" : "\u0161";
		case 'q': return upper ? "Q" : "q";
		case 'K': return upper ? "\u1E32" : "\u1E33";
		case 'k': return upper ? "K" : "k";
		case 'g': return upper ? "G" : "g";
		case 't': return upper ? "T" : "t";
		case 'T': return upper ? "\u1E6E" : "\u1E6F";
		case 'd': return upper ? "D" : "d";
		case 'D': return upper ? "\u1E0E" : "\u1E0F";
		default: return c;
	}
};
