// Global values.

function ResGlobals(direction, size) {
	this.direction = "hlr";
	this.sizeHeader = 1;
	this.size = 1;
	this.color = "black";
	this.shade = false;
	this.sep = 1;
	this.fit = false;
	this.mirror = false;
	if (direction != null)
		this.direction = direction;
	if (size != null) {
		this.sizeHeader = size;
		this.size = size;
	}
}
ResGlobals.prototype.clone =
function() {
	var copy = new ResGlobals(this.direction, this.size);
	copy.sizeHeader = this.sizeHeader;
	copy.color = this.color;
	copy.shade = this.shade;
	copy.sep = this.sep;
	copy.fit = this.fit;
	copy.mirror = this.mirror;
	return copy;
};
ResGlobals.prototype.update =
function(size) {
	if (size === this.size)
		return this;
	else {
		var copy = this.clone();
		copy.size = size;
		return copy;
	}
};
ResGlobals.prototype.isH =
function() {
	return ResGlobals.isH(this.direction);
};
ResGlobals.prototype.isV =
function() {
	return ResGlobals.isV(this.direction);
};
ResGlobals.prototype.isLR =
function() {
	return ResGlobals.isLR(this.direction);
};
ResGlobals.prototype.isRL =
function() {
	return ResGlobals.isRL(this.direction);
};
ResGlobals.properties = ['color','shade','sep','fit','mirror'];
ResGlobals.isH = 
function(d) {
	return d === "hlr" || d === "hrl";
};
ResGlobals.isV = 
function(d) {
	return d === "vlr" || d === "vrl";
};
ResGlobals.isLR = 
function(d) {
	return d === "hlr" || d === "vlr";
};
ResGlobals.isRL = 
function(d) {
	return d === "hrl" || d === "vrl";
};

// Data structure.

function ResFragment(args) {
	if (args.l) {
		var argList = args.l;
		var switchs = args.sw;
		var hiero = args.h;
		this.direction = null;
		this.size = null;
		for (var i = 0; i < argList.length; i++) {
			var arg = argList[i];
			if (arg.is("hlr") || arg.is("hrl") ||
					arg.is("vlr") || arg.is("vrl"))
				this.direction = arg.getLhs();
			else if (arg.hasLhs("size") && arg.hasRhsNonzeroReal())
				this.size = arg.getRhs();
		}
		this.switchs = switchs;
		this.hiero = hiero;
		this.propagateBack();
		this.propagate();
	} else {
		this.direction = args.direction;
		this.size = args.size;
		this.switchs = args.switchs;
		this.hiero = args.hiero;
		this.propagateBack();
		this.propagate();
	}
}
ResFragment.prototype.headerString =
function() {
	var args = [];
	if (this.direction !== null)
		args.push(this.direction);
	if (this.size !== null)
		args.push("size=" + ResArg.realStr(this.size));
	var s = ResArg.argsStr(args);
	return s;
};
ResFragment.prototype.toString =
function() {
	var s = this.headerString();
	s += this.switchs.toString();
	if (this.hiero !== null) 
		s += this.hiero.toString();
	return s;
};
ResFragment.prototype.propagateBack =
function() {
	if (this.hiero !== null) {
		var sw = this.hiero.propagateBack();
		this.switchs = this.switchs.join(sw);
	}
};
ResFragment.prototype.propagate =
function() {
	this.globals = new ResGlobals(this.direction, this.size);
	this.globals = this.switchs.update(this.globals);
	if (this.hiero !== null)
		this.globals = this.hiero.propagate(this.globals, this.globals.direction);
};
ResFragment.prototype.namedGlyphs =
function() {
	return this.hiero === null ? [] : this.hiero.namedGlyphs();
};

function ResHieroglyphic(args) {
	this.groups = [];
	this.ops = [];
	this.switches = [];
	if (args.g) {
		var group = args.g;
		this.groups.push(group);
	} else {
		this.groups = args.groups;
		this.ops = args.ops;
		this.switches = args.switches;
	}
}
ResHieroglyphic.prototype.toString =
function() {
	var s = this.groups[0].toString();
	for (var i = 0; i < this.ops.length; i++) 
		s += "-" + this.ops[i].toString(false) + this.switches[i].toString() +
				this.groups[i+1].toString();
	return s;
};
ResHieroglyphic.prototype.addGroup = 
function(group, argList, switchs) {
	this.groups.unshift(group);
	this.ops.unshift(new ResOp({l:argList}, false));
	this.switches.unshift(switchs);
	return this;
};
ResHieroglyphic.prototype.addGroupAt = 
function(group, i) {
	this.groups.splice(i, 0, group);
	this.ops.splice(Math.min(i, this.ops.length), 0, new ResOp(null));
	this.switches.splice(Math.min(i, this.switches.length), 0, new ResSwitch(null));
};
ResHieroglyphic.prototype.propagateBack =
function() {
	for (var i = 0; i < this.switches.length; i++) {
		var sw = this.groups[i+1].propagateBack(new ResSwitch(null));
		this.switches[i] = this.switches[i].join(sw);
	}
	return this.groups[0].propagateBack(new ResSwitch(null));
};
ResHieroglyphic.prototype.propagate =
function(globals, direction) {
	this.globals = globals;
	this.globalss = [];
	this.globalss.push(globals);
	globals = this.groups[0].propagate(globals);
	for (var i = 0; i < this.ops.length; i++) {
		this.ops[i].propagate(globals);
		globals = this.switches[i].update(globals);
		this.globalss.push(globals);
		globals = this.groups[i+1].propagate(globals);
	}
	this.direction = direction;
	return globals;
};
ResHieroglyphic.prototype.effectiveIsH =
function() {
	return ResGlobals.isH(this.direction);
};
ResHieroglyphic.prototype.effectiveIsV =
function() {
	return ResGlobals.isV(this.direction);
};
ResHieroglyphic.prototype.namedGlyphs =
function() {
	var l = [];
	for (var i = 0; i < this.groups.length; i++)
		l = l.concat(this.groups[i].namedGlyphs());
	return l;
};

function ResVertgroup(args) {
	if (args === null)
		this.setDefaults();
	else if (args.l) {
		var group1 = args.g1;
		var argList = args.l;
		var switchs = args.sw;
		var group2 = args.g2;
		this.setDefaults();
		this.groups.push(group1);
		this.ops.push(new ResOp({l:argList}, true));
		this.switches.push(switchs);
		this.groups.push(group2);
	} else {
		this.groups = args.groups;
		this.ops = args.ops;
		this.switches = args.switches;
	}
}
ResVertgroup.prototype.setDefaults =
function() {
	this.groups = [];
	this.ops = [];
	this.switches = [];
};
ResVertgroup.make =
function(groups, ops, switches) {
	var subgroups = [];
	for (var i = 0; i < groups.length; i++)
		subgroups.push(new ResVertsubgroup({b: groups[i]}));
	return new ResVertgroup({groups: subgroups, ops: ops, switches: switches});
};
ResVertgroup.prototype.toString =
function() {
	var s = this.groups[0].toString();
	for (var i = 0; i < this.ops.length; i++) 
		s += ":" + this.ops[i].toString(i === 0) + this.switches[i].toString() +
			this.groups[i+1].toString();
	return s;
};
ResVertgroup.prototype.addGroup =
function(argList, switchs, group) {
	this.ops.push(new ResOp({l:argList}, false));
	this.switches.push(switchs);
	this.groups.push(group);
	return this;
};
ResVertgroup.prototype.addGroupAt = 
function(group, i) {
	this.groups.splice(i, 0, new ResVertsubgroup({b: group}));
	this.ops.splice(Math.min(i, this.ops.length), 0, new ResOp(null));
	this.switches.splice(Math.min(i, this.switches.length), 0, new ResSwitch(null));
};
ResVertgroup.prototype.propagateBack =
function(sw) {
	for (var i = 1; i < this.groups.length; i++) {
		var swGroup = (i === this.groups.length - 1) ?
			this.groups[i].propagateBack(sw) :
				this.groups[i].propagateBack(new ResSwitch(null));
		this.switches[i-1] = this.switches[i-1].join(swGroup);
	}
	return this.groups[0].propagateBack(new ResSwitch(null));
};
ResVertgroup.prototype.propagate =
function(globals) {
	this.globals = globals;
	globals = this.groups[0].propagate(globals);
	for (var i = 0; i < this.ops.length; i++) {
		this.ops[i].propagate(globals);
		globals = this.switches[i].update(globals);
		globals = this.groups[i+1].propagate(globals);
	}
	return globals;
};
ResVertgroup.prototype.effectiveSize =
function() {
	return this.ops[0].size !== null ? this.ops[0].size : this.globals.size;
};
ResVertgroup.prototype.subGroups =
function() {
	var l = [];
	for (var i = 0; i < this.groups.length; i++)
		l.push(this.groups[i].group);
	return l;
};
ResVertgroup.prototype.nPaddable =
function() {
	var n = 0;
	for (var i = 0; i < this.ops.length; i++)
		if (!this.ops[i].fix)
			n++;
	return n;
};
ResVertgroup.prototype.namedGlyphs =
function() {
	var l = [];
	for (var i = 0; i < this.groups.length; i++)
		l = l.concat(this.groups[i].group.namedGlyphs());
	return l;
};

function ResVertsubgroup(args) {
	if (args.g) {
		this.switchs1 = args.sw1;
		this.group = args.g;
		this.switchs2 = args.sw2;
	} else if (args.b) {
		this.switchs1 = new ResSwitch(null);
		this.group = args.b;
		this.switchs2 = new ResSwitch(null);
	} else {
		this.switchs1 = args.switchs1;
		this.group = args.group;
		this.switchs2 = args.switchs2;
	}
};
ResVertsubgroup.prototype.toString =
function() {
	return this.switchs1.toString() + this.group.toString() + this.switchs2.toString();
};
ResVertsubgroup.prototype.propagateBack =
function(sw) {
	var swEnd = this.switchs2.join(sw);
	this.switchs2 = new ResSwitch(null);
	var swGroup = this.group.propagateBack(swEnd);
	var swStart = this.switchs1.join(swGroup);
	this.switchs1 = new ResSwitch(null);
	return swStart;
};
ResVertsubgroup.prototype.propagate =
function(globals) {
	globals = this.switchs1.update(globals);
	globals = this.group.propagate(globals);
	return this.switchs2.update(globals);
};

function ResHorgroup(args) {
	if (args === null)
		this.setDefaults();
	else if (args.l) {
		var group1 = args.g1;
		var argList = args.l;
		var switchs = args.sw;
		var group2 = args.g2;
		this.setDefaults();
		this.groups.push(group1);
		this.ops.push(new ResOp({l:argList}, true));
		this.switches.push(switchs);
		this.groups.push(group2);
	} else {
		this.groups = args.groups;
		this.ops = args.ops;
		this.switches = args.switches;
	}
}
ResHorgroup.prototype.setDefaults =
function() {
	this.groups = [];
	this.ops = [];
	this.switches = [];
};
ResHorgroup.make =
function(groups, ops, switches) {
	var subgroups = [];
	for (var i = 0; i < groups.length; i++)
		subgroups.push(new ResHorsubgroup({b: groups[i]}));
	return new ResHorgroup({groups: subgroups, ops: ops, switches: switches});
};
ResHorgroup.prototype.toString =
function() {
	var s = this.groups[0].toString();
	for (var i = 0; i < this.ops.length; i++) 
		s += "*" + this.ops[i].toString(i === 0) + this.switches[i].toString() +
			this.groups[i+1].toString();
	return s;
};
ResHorgroup.prototype.addGroup =
function(argList, switchs, group) {
	this.ops.push(new ResOp({l:argList}, false));
	this.switches.push(switchs);
	this.groups.push(group);
	return this;
};
ResHorgroup.prototype.addGroupAt = 
function(group, i) {
	this.groups.splice(i, 0, new ResHorsubgroup({b: group}));
	this.ops.splice(Math.min(i, this.ops.length), 0, new ResOp(null));
	this.switches.splice(Math.min(i, this.switches.length), 0, new ResSwitch(null));
};
ResHorgroup.prototype.propagateBack =
function(sw) {
	for (var i = 1; i < this.groups.length; i++) {
		var swGroup = (i === this.groups.length - 1) ?
			this.groups[i].propagateBack(sw) :
				this.groups[i].propagateBack(new ResSwitch(null));
		this.switches[i-1] = this.switches[i-1].join(swGroup);
	}
	return this.groups[0].propagateBack(new ResSwitch(null));
};
ResHorgroup.prototype.propagate =
function(globals) {
	this.globals = globals;
	globals = this.groups[0].propagate(globals);
	for (var i = 0; i < this.ops.length; i++) {
		this.ops[i].propagate(globals);
		globals = this.switches[i].update(globals);
		globals = this.groups[i+1].propagate(globals);
	}
	return globals;
};
ResHorgroup.prototype.effectiveSize =
function() {
	return this.ops[0].size !== null ? this.ops[0].size : this.globals.size;
};
ResHorgroup.prototype.subGroups =
function() {
	var l = [];
	for (var i = 0; i < this.groups.length; i++)
		l.push(this.groups[i].group);
	return l;
};
ResHorgroup.prototype.nPaddable =
function() {
	var n = 0;
	for (var i = 0; i < this.ops.length; i++)
		if (!this.ops[i].fix)
			n++;
	return n;
};
ResHorgroup.prototype.namedGlyphs =
function() {
	var l = [];
	for (var i = 0; i < this.groups.length; i++)
		l = l.concat(this.groups[i].group.namedGlyphs());
	return l;
};

function ResHorsubgroup(args) {
	if (args.g) { 
		this.switchs1 = args.sw1;
		this.group = args.g;
		this.switchs2 = args.sw2;
	} else if (args.b) {
		this.switchs1 = new ResSwitch(null);
		this.group = args.b;
		this.switchs2 = new ResSwitch(null);
	} else {
		this.switchs1 = args.switchs1;
		this.group = args.group;
		this.switchs2 = args.switchs2;
	}
};
ResHorsubgroup.prototype.toString =
function() {
	if (this.group instanceof ResVertgroup)
		return "(" + this.switchs1.toString() + this.group.toString() + ")" +
			this.switchs2.toString();
	else
		return this.switchs1.toString() + this.group.toString() + 
			this.switchs2.toString();
};
ResHorsubgroup.prototype.propagateBack =
function(sw) {
	var swEnd = this.switchs2.join(sw);
	this.switchs2 = new ResSwitch(null);
	var swGroup = this.group.propagateBack(swEnd);
	var swStart = this.switchs1.join(swGroup);
	this.switchs1 = new ResSwitch(null);
	return swStart;
};
ResHorsubgroup.prototype.propagate =
function(globals) {
	globals = this.switchs1.update(globals);
	globals = this.group.propagate(globals);
	return this.switchs2.update(globals);
};

function ResOp(args, isFirst) {
	if (args === null)
		this.setDefaults();
	else if (args.l) {
		var argList = args.l;
		this.sep = null;
		this.fit = null;
		this.fix = false;
		this.shade = null;
		this.shades = [];
		this.size = null;
		for (var i = 0; i < argList.length; i++) {
			var arg = argList[i];
			if (arg.hasLhs("sep") && arg.hasRhsReal())
				this.sep = arg.getRhs();
			else if (arg.is("fit"))
				this.fit = true;
			else if (arg.is("nofit"))
				this.fit = false;
			else if (arg.is("fix"))
				this.fix = true;
			else if (arg.is("shade"))
				this.shade = true;
			else if (arg.is("noshade"))
				this.shade = false;
			else if (arg.isPattern())
				this.shades.push(arg.getLhs());
			else if (isFirst) {
				if (arg.hasLhs("size") && 
						(arg.hasRhsReal() || arg.hasRhs("inf")))
					this.size = arg.getRhs();
			}
		}
	} else {
		this.sep = args.sep;
		this.fit = args.fit;
		this.fix = args.fix;
		this.shade = args.shade;
		this.shades = args.shades;
		this.size = args.size;
	}
}
ResOp.prototype.setDefaults =
function() {
	this.sep = null;
	this.fit = null;
	this.fix = false;
	this.shade = null;
	this.shades = [];
	this.size = null;
};
ResOp.prototype.propagate =
function(globals) {
	this.globals = globals;
};
ResOp.prototype.toString =
function(isFirst) {
	var args = [];
	if (this.sep !== null)
		args.push("sep=" + ResArg.realStr(this.sep));
	if (this.fit === true)
		args.push("fit");
	else if (this.fit === false)
		args.push("nofit");
	if (this.fix)
		args.push("fix");
	if (this.shade === true) 
		args.push("shade");
	if (this.shade === false) 
		args.push("noshade");
	for (var i = 0; i < this.shades.length; i++) 
		args.push(this.shades[i]);
	if (this.size === "inf") {
		if (isFirst)
			args.push("size=inf");
	} else if (this.size !== null)
		args.push("size=" + ResArg.realStr(this.size));
	return ResArg.argsStr(args);
};
ResOp.prototype.effectiveSep =
function() {
	return this.sep !== null ? this.sep : this.globals.sep;
};
ResOp.prototype.effectiveFit =
function() {
	return this.fit !== null ? this.fit : this.globals.fit;
};

function ResNamedglyph(args) {
	if (args === null) 
		this.setDefaults();
	else if (args.na) { 
		var name = args.na;
		var argList = args.l;
		var notes = args.no;
		var switchs = args.sw;
		this.name = name;
		this.mirror = null;
		this.rotate = 0;
		this.scale = 1;
		this.xscale = 1;
		this.yscale = 1;
		this.color = null;
		this.shade = null;
		this.shades = [];
		for (var i = 0; i < argList.length; i++) {
			var arg = argList[i];
			if (arg.is("mirror"))
				this.mirror = true;
			else if (arg.is("nomirror"))
				this.mirror = false;
			else if (arg.hasLhs("rotate") && arg.hasRhsNatnum())
				this.rotate = arg.getRhs() % 360;
			else if (arg.hasLhs("scale") && arg.hasRhsNonzeroReal())
				this.scale = arg.getRhs();
			else if (arg.hasLhs("xscale") && arg.hasRhsNonzeroReal())
				this.xscale = arg.getRhs();
			else if (arg.hasLhs("yscale") && arg.hasRhsNonzeroReal())
				this.yscale = arg.getRhs();
			else if (arg.isColor())
				this.color = arg.getLhs();
			else if (arg.is("shade"))
				this.shade = true;
			else if (arg.is("noshade"))
				this.shade = false;
			else if (arg.isPattern())
				this.shades.push(arg.getLhs());
		}
		this.notes = notes;
		this.switchs = switchs;
	} else {
		this.name = args.name;
		this.mirror = args.mirror;
		this.rotate = args.rotate;
		this.scale = args.scale;
		this.xscale = args.xscale;
		this.yscale = args.yscale;
		this.color = args.color;
		this.shade = args.shade;
		this.shades = args.shades;
		this.notes = args.notes;
		this.switchs = args.switchs;
	}
}
ResNamedglyph.prototype.setDefaults =
function() {
		this.name = '\"?\"';
		this.mirror = null;
		this.rotate = 0;
		this.scale = 1;
		this.xscale = 1;
		this.yscale = 1;
		this.color = null;
		this.shade = null;
		this.shades = [];
		this.notes = [];
		this.switchs = new ResSwitch(null);
};
ResNamedglyph.prototype.toString =
function() {
	var args = [];
	if (this.mirror === true)
		args.push("mirror");
	else if (this.mirror === false)
		args.push("nomirror");
	if (this.rotate !== 0)
		args.push("rotate=" + this.rotate);
	if (this.scale !== 1)
		args.push("scale=" + ResArg.realStr(this.scale));
	if (this.xscale !== 1)
		args.push("xscale=" + ResArg.realStr(this.xscale));
	if (this.yscale !== 1)
		args.push("yscale=" + ResArg.realStr(this.yscale));
	if (this.color !== null)
		args.push(this.color);
	if (this.shade === true)
		args.push("shade");
	else if (this.shade === false)
		args.push("noshade");
	for (var i = 0; i < this.shades.length; i++)
		args.push(this.shades[i]);
	var s = this.name + ResArg.argsStr(args);
	for (var i = 0; i < this.notes.length; i++)
			s += this.notes[i].toString();
	s += this.switchs.toString();
	return s;
};
ResNamedglyph.prototype.propagateBack =
function(sw) {
	this.switchs = this.switchs.join(sw);
	return new ResSwitch(null);
};
ResNamedglyph.prototype.propagate =
function(globals) {
	this.globals = globals;
	for (var i = 0; i < this.notes.length; i++)
		this.notes[i].propagate(globals);
	return this.switchs.update(globals);
};
ResNamedglyph.prototype.effectiveMirror =
function() {
	return this.mirror !== null ? this.mirror : this.globals.mirror;
};
ResNamedglyph.prototype.effectiveColor =
function() {
	return this.color !== null ? this.color : this.globals.color;
};
ResNamedglyph.prototype.namedGlyphs =
function() {
	return [this];
};

function ResEmptyglyph(args) {
	if (args === null) 
		this.setDefaults();
	else if (args.l) { 
		var argList = args.l;
		var note = args.n;
		var switchs = args.sw;
		this.width = 1;
		this.height = 1;
		this.shade = null;
		this.shades = [];
		this.firm = false;
		for (var i = 0; i < argList.length; i++) {
			var arg = argList[i];
			if (arg.hasLhs("width") && arg.hasRhsReal())
					this.width = arg.getRhs();
			else if (arg.hasLhs("height") && arg.hasRhsReal())
				this.height = arg.getRhs();
			else if (arg.is("shade"))
				this.shade = true;
			else if (arg.is("noshade"))
				this.shade = false;
			else if (arg.isPattern())
				this.shades.push(arg.getLhs());
			else if (arg.is("firm"))
				this.firm = true;
		}
		this.note = note;
		this.switchs = switchs;
	} else if (args.n) {
		var note = args.n;
		var switchs = args.sw;
		this.width = 0;
		this.height = 0;
		this.shade = null;
		this.shades = [];
		this.firm = false;
		this.note = note;
		this.switchs = switchs;
	} else {
		this.width = args.width;
		this.height = args.height;
		this.shade = args.shade;
		this.shades = args.shades;
		this.firm = args.film;
		this.note = args.note;
		this.switchs = args.switchs;
	}
}
ResEmptyglyph.prototype.setDefaults =
function() {
	this.width = 1;
	this.height = 1;
	this.shade = null;
	this.shades = [];
	this.firm = false;
	this.note = null;
	this.switchs = new ResSwitch(null);
};
ResEmptyglyph.pointArgs =
function() {
	return [new ResArg("width",0), new ResArg("height",0)];
};
ResEmptyglyph.prototype.toString =
function() {
	var args = [];
	var noPointArgs = false;
	if (this.width !== 1)
		args.push("width=" + ResArg.realStr(this.width));
	if (this.height !== 1)
		args.push("height=" + ResArg.realStr(this.height));
	if (this.shade === true) {
		args.push("shade");
		noPointArgs = true;
	}
	if (this.shade === false) {
		args.push("noshade");
		noPointArgs = true;
	}
	for (var i = 0; i < this.shades.length; i++) {
		args.push(this.shades[i]);
		noPointArgs = true;
	}
	if (this.firm) {
		args.push("firm");
		noPointArgs = true;
	}
	var s;
	if (this.width === 0 && this.height === 0 && !noPointArgs)
		s = ".";
	else
		s = "empty" + ResArg.argsStr(args);
	if (this.note !== null)
		s += this.note.toString();
	s += this.switchs.toString();
	return s;
};
ResEmptyglyph.prototype.propagateBack =
function(sw) {
	this.switchs = this.switchs.join(sw);
	return new ResSwitch(null);
};
ResEmptyglyph.prototype.propagate =
function(globals) {
	this.globals = globals;
	if (this.note !== null)
		this.note.propagate(globals);
	return this.switchs.update(globals);
};
ResEmptyglyph.prototype.namedGlyphs =
function() {
	return [];
};

function ResBox(args) {
	if (args === null) 
		this.setDefaults();
	else if (args.l) {
		var type = args.na;
		var argList = args.l;
		var switchs1 = args.sw1;
		var hiero = args.h;
		var notes = args.no;
		var switchs2 = args.sw2;
		this.type = type;
		this.direction = null;
		this.mirror = null;
		this.scale = 1;
		this.color = null;
		this.shade = null;
		this.shades = [];
		this.size = 1;
		this.opensep = null;
		this.closesep = null;
		this.undersep = null;
		this.oversep = null;
		for (var i = 0; i < argList.length; i++) {
			var arg = argList[i];
			if (arg.is("h") || arg.is("v"))
				this.direction = arg.getLhs();
			else if (arg.is("mirror"))
				this.mirror = true;
			else if (arg.is("nomirror"))
				this.mirror = false;
			else if (arg.hasLhs("scale") && arg.hasRhsNonzeroReal())
				this.scale = arg.getRhs();
			else if (arg.isColor())
				this.color = arg.getLhs();
			else if (arg.is("shade"))
				this.shade = true;
			else if (arg.is("noshade"))
				this.shade = false;
			else if (arg.isPattern())
				this.shades.push(arg.getLhs());
			else if (arg.hasLhs("size") && arg.hasRhsNonzeroReal())
				this.size = arg.getRhs();
			else if (arg.hasLhs("opensep") && arg.hasRhsReal())
				this.opensep = arg.getRhs();
			else if (arg.hasLhs("closesep") && arg.hasRhsReal())
				this.closesep = arg.getRhs();
			else if (arg.hasLhs("undersep") && arg.hasRhsReal())
				this.undersep = arg.getRhs();
			else if (arg.hasLhs("oversep") && arg.hasRhsReal())
				this.oversep = arg.getRhs();
		}
		this.switchs1 = switchs1;
		this.hiero = hiero;
		this.notes = notes;
		this.switchs2 = switchs2;
	} else {
		this.type = args.type;
		this.direction = args.direction;
		this.mirror = args.mirror;
		this.scale = args.scale;
		this.color = args.color;
		this.shade = args.shade;
		this.shades = args.shades;
		this.size = args.size;
		this.opensep = args.opensep;
		this.closesep = args.closesep;
		this.undersep = args.undersep;
		this.oversep = args.oversep;
		this.switchs1 = args.switchs1;
		this.hiero = args.hiero;
		this.notes = args.notes;
		this.switchs2 = args.switchs2;
	}
}
ResBox.prototype.setDefaults =
function() {
		this.type = 'cartouche';
		this.direction = null;
		this.mirror = null;
		this.scale = 1;
		this.color = null;
		this.shade = null;
		this.shades = [];
		this.size = 1;
		this.opensep = null;
		this.closesep = null;
		this.undersep = null;
		this.oversep = null;
		this.switchs1 = new ResSwitch(null);
		this.hiero = null;
		this.notes = [];
		this.switchs2 = new ResSwitch(null);
};
ResBox.prototype.toString =
function() {
	var args = [];
	if (this.direction === "h" || this.direction === "v")
		args.push(this.direction);
	if (this.mirror === true)
		args.push("mirror");
	else if (this.mirror === false)
		args.push("nomirror");
	if (this.scale !== 1)
		args.push("scale=" + ResArg.realStr(this.scale));
	if (this.color !== null)
		args.push(this.color);
	if (this.shade === true)
		args.push("shade");
	else if (this.shade === false)
		args.push("noshade");
	for (var i = 0; i < this.shades.length; i++)
		args.push(this.shades[i]);
	if (this.size !== 1)
		args.push("size=" + ResArg.realStr(this.size));
	if (this.opensep !== null)
		args.push("opensep=" + ResArg.realStr(this.opensep));
	if (this.closesep !== null)
		args.push("closesep=" + ResArg.realStr(this.closesep));
	if (this.undersep !== null)
		args.push("undersep=" + ResArg.realStr(this.undersep));
	if (this.oversep !== null)
		args.push("oversep=" + ResArg.realStr(this.oversep));
	var s = this.type + ResArg.argsStr(args) +
		"(" + this.switchs1.toString() + 
		(this.hiero === null ? "" : this.hiero.toString()) +
		")";
	for (var i = 0; i < this.notes.length; i++)
			s += this.notes[i].toString();
	s += this.switchs2.toString();
	return s;
};
ResBox.prototype.propagateBack =
function(sw) {
	this.switchs2 = this.switchs2.join(sw);
	if (this.hiero !== null) {
		var swHiero = this.hiero.propagateBack();
		this.switchs1 = this.switchs1.join(swHiero);
	}
	return new ResSwitch(null);
};
ResBox.prototype.propagate =
function(globals) {
	this.globals = globals;
	globals = this.switchs1.update(globals);
	if (this.hiero !== null) {
		var savedSize = globals.size;
		globals = globals.update(this.size);
		globals = this.hiero.propagate(globals, this.effectiveDir());
		globals = globals.update(savedSize);
	}
	for (var i = 0; i < this.notes.length; i++)
		this.notes[i].propagate(globals);
	return this.switchs2.update(globals);
};
ResBox.prototype.effectiveDir =
function() {
	if (this.direction === "h") {
		if (this.globals.direction === "vlr") 
			return "hlr";
		else if (this.globals.direction === "vrl") 
			return "hrl";
	} else if (this.direction === "v") {
		if (this.globals.direction === "hlr") 
			return "vlr";
		else if (this.globals.direction === "hrl") 
			return "vrl";
	} 
	return this.globals.direction;
};
ResBox.prototype.effectiveIsH =
function() {
	return ResGlobals.isH(this.effectiveDir());
};
ResBox.prototype.effectiveMirror =
function() {
	return this.mirror !== null ? this.mirror : this.globals.mirror;
};
ResBox.prototype.effectiveColor =
function() {
	return this.color !== null ? this.color : this.globals.color;
};
ResBox.prototype.effectiveOpensep =
function() {
	return this.opensep !== null ? this.opensep : this.globals.sep;
};
ResBox.prototype.effectiveClosesep =
function() {
	return this.closesep !== null ? this.closesep : this.globals.sep;
};
ResBox.prototype.effectiveUndersep =
function() {
	return this.undersep !== null ? this.undersep : this.globals.sep;
};
ResBox.prototype.effectiveOversep =
function() {
	return this.oversep !== null ? this.oversep : this.globals.sep;
};
ResBox.prototype.namedGlyphs =
function() {
	return this.hiero === null ? [] : this.hiero.namedGlyphs();
};

function ResStack(args) {
	if (args === null)
		this.setDefaults();
	else if (args.l) {
		var argList = args.l;
		var switchs1 = args.sw1;
		var group1 = args.g1;
		var switchs2 = args.sw2;
		var group2 = args.g2;
		var switchs3 = args.sw3;
		this.x = 0.5;
		this.y = 0.5;
		this.onunder = null;
		for (var i = 0; i < argList.length; i++) {
			var arg = argList[i];
			if (arg.hasLhs("x") && arg.hasRhsLowReal())
				this.x = arg.getRhs();
			else if (arg.hasLhs("y") && arg.hasRhsLowReal())
				this.y = arg.getRhs();
			else if (arg.is("on") || arg.is("under"))
				this.onunder = arg.getLhs();
		}
		this.switchs1 = switchs1;
		this.group1 = group1;
		this.switchs2 = switchs2;
		this.group2 = group2;
		this.switchs3 = switchs3;
	} else {
		this.x = args.x;
		this.y = args.y;
		this.onunder = args.onunder;
		this.switchs1 = args.switchs1;
		this.group1 = args.group1;
		this.switchs2 = args.switchs2;
		this.group2 = args.group2;
		this.switchs3 = args.switchs3;
	}
}
ResStack.prototype.setDefaults =
function() {
	this.x = 0.5;
	this.y = 0.5;
	this.onunder = null;
	this.switchs1 = new ResSwitch(null);
	this.group1 = null;
	this.switchs2 = new ResSwitch(null);
	this.group2 = null;
	this.switchs3 = new ResSwitch(null);
};
ResStack.prototype.toString =
function() {
	var args = [];
	if (this.x !== 0.5) 
		args.push("x=" + ResArg.realStr(this.x));
	if (this.y !== 0.5) 
		args.push("y=" + ResArg.realStr(this.y));
	if (this.onunder !== null) 
		args.push(this.onunder);
	return "stack" + ResArg.argsStr(args) + "(" + this.switchs1.toString() +
			this.group1.toString() + "," + this.switchs2.toString() +
			this.group2.toString() + ")" + this.switchs3.toString();
};
ResStack.prototype.propagateBack =
function(sw) {
	this.switchs3 = this.switchs3.join(sw);
	var swAfter = this.group2.propagateBack(new ResSwitch(null));
	var swBefore = this.switchs2.join(swAfter);
	this.switchs2 = new ResSwitch(null);
	var swStart = this.group1.propagateBack(swBefore);
	this.switchs1 = this.switchs1.join(swStart);
	return new ResSwitch(null);
};
ResStack.prototype.propagate =
function(globals) {
	this.globals = globals;
	globals = this.switchs1.update(globals);
	globals = this.group1.propagate(globals);
	globals = this.switchs2.update(globals);
	globals = this.group2.propagate(globals);
	return this.switchs3.update(globals);
};
ResStack.prototype.namedGlyphs =
function() {
	return this.group1.namedGlyphs().concat(this.group2.namedGlyphs());
};

function ResInsert(args) {
	if (args === null)
		this.setDefaults();
	else if (args.l) {
		var argList = args.l;
		var switchs1 = args.sw1;
		var group1 = args.g1;
		var switchs2 = args.sw2;
		var group2 = args.g2;
		var switchs3 = args.sw3;
		this.place = "";
		this.x = 0.5;
		this.y = 0.5;
		this.fix = false;
		this.sep = null;
		for (var i = 0; i < argList.length; i++) {
			var arg = argList[i];
			if (arg.is("t") || arg.is("b") || arg.is("s") || arg.is("e") ||
					arg.is("ts") || arg.is("te") || arg.is("bs") || arg.is("be"))
				this.place = arg.getLhs();
			else if (arg.hasLhs("x") && arg.hasRhsLowReal())
				this.x = arg.getRhs();
			else if (arg.hasLhs("y") && arg.hasRhsLowReal())
				this.y = arg.getRhs();
			else if (arg.is("fix"))
				this.fix = true;
			else if (arg.hasLhs("sep") && arg.hasRhsReal())
				this.sep = arg.getRhs();
		}
		this.switchs1 = switchs1;
		this.group1 = group1;
		this.switchs2 = switchs2;
		this.group2 = group2;
		this.switchs3 = switchs3;
	} else {
		this.place = args.place;
		this.x = args.x;
		this.y = args.y;
		this.fix = args.fix;
		this.sep = args.sep;
		this.switchs1 = args.switchs1;
		this.group1 = args.group1;
		this.switchs2 = args.switchs2;
		this.group2 = args.group2;
		this.switchs3 = args.switchs3;
	}
}
ResInsert.prototype.setDefaults =
function() {
	this.place = "";
	this.x = 0.5;
	this.y = 0.5;
	this.fix = false;
	this.sep = null;
	this.switchs1 = new ResSwitch(null);
	this.group1 = null;
	this.switchs2 = new ResSwitch(null);
	this.group2 = null;
	this.switchs3 = new ResSwitch(null);
};
ResInsert.prototype.toString =
function() {
	var args = [];
	if (this.place !== "") 
		args.push(this.place);
	if (this.x !== 0.5) 
		args.push("x=" + ResArg.realStr(this.x));
	if (this.y !== 0.5) 
		args.push("y=" + ResArg.realStr(this.y));
	if (this.fix)
		args.push("fix");
	if (this.sep !== null)
		args.push("sep=" + ResArg.realStr(this.sep));
	return "insert" + ResArg.argsStr(args) + "(" + this.switchs1.toString() +
			this.group1.toString() + "," + this.switchs2.toString() +
			this.group2.toString() + ")" + this.switchs3.toString();
};
ResInsert.prototype.propagateBack =
function(sw) {
	this.switchs3 = this.switchs3.join(sw);
	var swAfter = this.group2.propagateBack(new ResSwitch(null));
	var swBefore = this.switchs2.join(swAfter);
	this.switchs2 = new ResSwitch(null);
	var swStart = this.group1.propagateBack(swBefore);
	this.switchs1 = this.switchs1.join(swStart);
	return new ResSwitch(null);
};
ResInsert.prototype.propagate =
function(globals) {
	this.globals = globals;
	globals = this.switchs1.update(globals);
	globals = this.group1.propagate(globals);
	globals = this.switchs2.update(globals);
	globals = this.group2.propagate(globals);
	return this.switchs3.update(globals);
};
ResInsert.prototype.effectiveSep =
function() {
	return this.sep !== null ? this.sep : this.globals.sep;
};
ResInsert.prototype.namedGlyphs =
function() {
	return this.place === "s" || this.place === "t" ?
		this.group2.namedGlyphs().concat(this.group1.namedGlyphs()) :
		this.group1.namedGlyphs().concat(this.group2.namedGlyphs());
};

function ResModify(args) {
	if (args === null)
		this.setDefaults();
	else if (args.l) {
		var argList = args.l;
		var switchs1 = args.sw1;
		var group = args.g;
		var switchs2 = args.sw2;
		this.width = null;
		this.height = null;
		this.above = 0;
		this.below = 0;
		this.before = 0;
		this.after = 0;
		this.omit = false;
		this.shade = null;
		this.shades = [];
		for (var i = 0; i < argList.length; i++) {
			var arg = argList[i];
			if (arg.hasLhs("width") && arg.hasRhsNonzeroReal())
				this.width = arg.getRhs();
			else if (arg.hasLhs("height") && arg.hasRhsNonzeroReal())
				this.height = arg.getRhs();
			else if (arg.hasLhs("above") && arg.hasRhsReal())
				this.above = arg.getRhs();
			else if (arg.hasLhs("below") && arg.hasRhsReal())
				this.below = arg.getRhs();
			else if (arg.hasLhs("before") && arg.hasRhsReal())
				this.before = arg.getRhs();
			else if (arg.hasLhs("after") && arg.hasRhsReal())
				this.after = arg.getRhs();
			else if (arg.is("omit"))
				this.omit = true;
			else if (arg.is("shade"))
				this.shade = true;
			else if (arg.is("noshade"))
				this.shade = false;
			else if (arg.isPattern())
				this.shades.push(arg.getLhs());
		}
		this.switchs1 = switchs1;
		this.group = group;
		this.switchs2 = switchs2;
	} else {
		this.width = args.width;
		this.height = args.height;
		this.above = args.above;
		this.below = args.below;
		this.before = args.before;
		this.after = args.after;
		this.omit = args.omit;
		this.shade = args.shade;
		this.shades = args.shades;
		this.switchs1 = args.switchs1;
		this.group = args.group;
		this.switchs2 = args.switchs2;
	}
}
ResModify.prototype.setDefaults =
function() {
	this.width = null;
	this.height = null;
	this.above = 0;
	this.below = 0;
	this.before = 0;
	this.after = 0;
	this.omit = false;
	this.shade = null;
	this.shades = [];
	this.switchs1 = new ResSwitch(null);
	this.group = null; 
	this.switchs2 = new ResSwitch(null);
};
ResModify.prototype.toString =
function() {
	var args = [];
	if (this.width !== null) 
		args.push("width=" + ResArg.realStr(this.width));
	if (this.height !== null) 
		args.push("height=" + ResArg.realStr(this.height));
	if (this.above !== 0) 
		args.push("above=" + ResArg.realStr(this.above));
	if (this.below !== 0) 
		args.push("below=" + ResArg.realStr(this.below));
	if (this.before !== 0) 
		args.push("before=" + ResArg.realStr(this.before));
	if (this.after !== 0) 
		args.push("after=" + ResArg.realStr(this.after));
	if (this.omit)
		args.push("omit");
	if (this.shade === true)
		args.push("shade");
	else if (this.shade === false)
		args.push("noshade");
	for (var i = 0; i < this.shades.length; i++)
		args.push(this.shades[i]);
	return "modify" + ResArg.argsStr(args) + "(" + this.switchs1.toString() +
			this.group.toString() + ")" + this.switchs2.toString();
};
ResModify.prototype.propagateBack =
function(sw) {
	this.switchs2 = this.switchs2.join(sw);
	var swGroup = this.group.propagateBack(new ResSwitch(null));
	this.switchs1 = this.switchs1.join(swGroup);
	return new ResSwitch(null);
};
ResModify.prototype.propagate =
function(globals) {
	this.globals = globals;
	globals = this.switchs1.update(globals);
	globals = this.group.propagate(globals);
	return this.switchs2.update(globals);
};
ResModify.prototype.namedGlyphs =
function() {
	return this.group.namedGlyphs();
};

function ResNote(args) {
	if (args === null)
		this.setDefaults();
	else if (args.l) {
		var str = args.s;
		var argList = args.l;
		this.color = null;
		for (var i = 0; i < argList.length; i++) {
			var arg = argList[i];
			if (arg.isColor())
				this.color = arg.getLhs();
		}
		this.str = str;
	} else {
		this.color = args.color;
		this.str = args.str;
	}
}
ResNote.prototype.setDefaults =
function() {
	this.color = null;
	this.str = '"?"';
};
ResNote.prototype.toString =
function() {
	var args = [];
	if (this.color !== null)
		args.push(this.color);
	return "^" + this.str + ResArg.argsStr(args);
};
ResNote.prototype.displayString =
function() {
	var str = this.str.substring(1, this.str.length-1);
	str = str.replace(/\\(["\\])/g, "$1");
	return str;
};
ResNote.escapeString =
function(str) {
	str = str.replace(/\\/g, '\\\\');
	str = str.replace(/"/g, '\\"');
	return '\"' + str + '\"';
};
ResNote.prototype.propagate =
function(globals) {
	this.globals = globals;
};

function ResSwitch(args) {
	if (args === null)
		this.setDefaults();
	else if (args.l) {
		var argList = args.l;
		this.setDefaults();
		for (var i = 0; i < argList.length; i++) {
			var arg = argList[i];
			if (arg.isColor())
				this.color = arg.getLhs();
			else if (arg.is("shade"))
				this.shade = true;
			else if (arg.is("noshade"))
				this.shade = false;
			else if (arg.hasLhs("sep") && arg.hasRhsReal())
				this.sep = arg.getRhs();
			else if (arg.is("fit"))
				this.fit = true;
			else if (arg.is("nofit"))
				this.fit = false;
			else if (arg.is("mirror"))
				this.mirror = true;
			else if (arg.is("nomirror"))
				this.mirror = false;
		}
	} else {
		this.color = args.color;
		this.shade = args.shade;
		this.sep = args.sep;
		this.fit = args.fit;
		this.mirror = args.mirror;
	}
}
ResSwitch.prototype.setDefaults =
function() {
	this.color = null;
	this.shade = null;
	this.sep = null;
	this.fit = null;
	this.mirror = null;
};
ResSwitch.prototype.toString =
function() {
	var args = [];
	if (this.color !== null)
		args.push(this.color);
	if (this.shade === true)
		args.push("shade");
	else if (this.shade === false)
		args.push("noshade");
	if (this.sep !== null)
		args.push("sep=" + ResArg.realStr(this.sep));
	if (this.fit === true)
		args.push("fit");
	else if (this.fit === false)
		args.push("nofit");
	if (this.mirror === true)
		args.push("mirror");
	else if (this.mirror === false)
		args.push("nomirror");
	if (args.length > 0)
		return "!" + ResArg.argsStr(args);
	else
		return "";
};
ResSwitch.prototype.hasDefaultValues =
function() {
	return this.color === null &&
		this.shade === null &&
		this.sep === null &&
		this.fit === null &&
		this.mirror === null;
};
ResSwitch.prototype.join =
function(other) {
	var copy = new ResSwitch(null);
	for (var i = 0; i < ResGlobals.properties.length; i++) {
		var global = ResGlobals.properties[i];
		if (other[global] !== null)
			copy[global] = other[global];
		else
			copy[global] = this[global];
	}
	return copy;
};
ResSwitch.prototype.update =
function(globals) {
	var allNull = true;
	for (var i = 0; i < ResGlobals.properties.length; i++) {
		var global = ResGlobals.properties[i];
		if (this[global] !== null) {
			allNull = false;
			break;
		}
	}
	if (allNull)
		return globals;
	else {
		var copy = globals.clone();
		for (var i = 0; i < ResGlobals.properties.length; i++) {
			var global = ResGlobals.properties[i];
			if (this[global] !== null)
				copy[global] = this[global];
		}
		return copy;
	}
};

function ResArg(lhs, rhs) {
	this.lhs = lhs;
	this.rhs = rhs;
}
ResArg.prototype.getLhs =
function() {
	return this.lhs;
};
ResArg.prototype.getRhs =
function() {
	return this.rhs;
};
ResArg.prototype.is =
function(lhs) {
	return this.lhs === lhs && this.rhs === null;
};
ResArg.prototype.isColor =
function() {
	return this.is("black") || this.is("red") || this.is("green") || this.is("blue") || 
			this.is("white") || this.is("aqua") || this.is("fuchsia") || this.is("gray") || 
			this.is("lime") || this.is("maroon") || this.is("navy") || this.is("olive") || 
			this.is("purple") || this.is("silver") || this.is("teal") || this.is("yellow");
};
ResArg.prototype.isPattern =
function() {
	return this.rhs === null && this.lhs.search(/^[tbse]+$/) >= 0;
};
ResArg.prototype.hasLhs =
function(lhs) {
	return this.lhs === lhs;
};
ResArg.prototype.hasRhs =
function(rhs) {
	return this.rhs === rhs;
};
ResArg.prototype.hasRhsNatnum = 
function() {
	return typeof this.rhs === 'number' && this.rhs % 1 === 0;
};
ResArg.prototype.hasRhsReal =
function() {
	return typeof this.rhs === 'number';
};
ResArg.prototype.hasRhsNonzeroReal = 
function() {
	return typeof this.rhs === 'number' && this.rhs > 0;
};
ResArg.prototype.hasRhsLowReal = 
function() {
	return typeof this.rhs === 'number' && this.rhs <= 1;
};
ResArg.argsStr =
function(args) {
	if (args.length === 0)
		return "";
	else {
		var s = "[" + args[0];
		for (var i = 1; i < args.length; i++) 
			s += "," + args[i];
		s += "]";
		return s;
	}
};
ResArg.realStr =
function(val) {
	val -= Math.floor(val / 10) * 10;
	val = Math.floor(val * 100.0);
	var hundreds = Math.floor(val / 100);
	val -= hundreds * 100;
	var tens = Math.floor(val / 10);
	val -= tens * 10;
	var s = hundreds > 0 ? ("" + hundreds) : "0";
	if (tens > 0 || val > 0) {
		s += "." + tens;
		if (val > 0)
			s += val;
	}
	return s;
};
