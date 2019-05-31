// Formatting.

ResFragment.prototype.format =
function(context) {
	this.resContext = context;
	this.scaleDown(context);
};
ResFragment.prototype.widthEm =
function() {
	if (this.globals.isH()) 
		return this.hiero === null ? 0 : this.hiero.widthEm();
	else
		return this.globals.size;
};
ResFragment.prototype.heightEm =
function() {
	if (this.globals.isV())
		return this.hiero === null ? 0 : this.hiero.heightEm();
	else
		return this.globals.size;
};
ResFragment.prototype.widthPx =
function() {
	return this.resContext.emSizePx * this.widthEm();
};
ResFragment.prototype.heightPx =
function() {
	return this.resContext.emSizePx * this.heightEm();
};
ResFragment.prototype.scaleDown =
function(context) {
	if (this.hiero !== null) {
		this.hiero.resetScaling(context);
		this.hiero.scaleDown(1);
	}
};

ResHieroglyphic.prototype.resetScaling =
function(context) {
	this.resContext = context;
	this.dynScale = 1;
	for (var i = 0; i < this.groups.length; i++)
		this.groups[i].resetScaling(context);
	for (var i = 0; i < this.ops.length; i++)
		this.ops[i].resetScaling(context);
};
ResHieroglyphic.prototype.widthEm =
function() {
	if (this.effectiveIsH()) {
		var w = 0;
		for (var i = 0; i < this.groups.length; i++)
			w += this.groups[i].widthEm();
		for (var i = 0; i < this.ops.length; i++)
			w += this.ops[i].sizeEm();
		return w;
	} else
		return this.dynScale * this.globals.size;
};
ResHieroglyphic.prototype.heightEm =
function() {
	if (this.effectiveIsV()) {
		var h = 0;
		for (var i = 0; i < this.groups.length; i++)
			h += this.groups[i].heightEm();
		for (var i = 0; i < this.ops.length; i++)
			h += this.ops[i].sizeEm();
		return h;
	} else
		return this.dynScale * this.globals.size;
};
ResHieroglyphic.prototype.widthPx =
function() {
	return this.resContext.emSizePx * this.widthEm();
};
ResHieroglyphic.prototype.heightPx =
function() {
	return this.resContext.emSizePx * this.heightEm();
};
ResHieroglyphic.prototype.widthFromToPx =
function(i, j) {
	if (this.effectiveIsH()) {
		var w = 0;
		for (var k = i; k <= j; k++)
			w += this.groups[k].widthPx();
		for (var k = i; k < j; k++)
			w += this.ops[k].sizePx();
		return w;
	} else
		return this.widthPx();
};
ResHieroglyphic.prototype.heightFromToPx =
function(i, j) {
	if (this.effectiveIsV()) {
		var h = 0;
		for (var k = i; k <= j; k++)
			h += this.groups[k].heightPx();
		for (var k = i; k < j; k++)
			h += this.ops[k].sizePx();
		return h;
	} else
		return this.heightPx();
};
ResHieroglyphic.prototype.scaleDown =
function(f) {
	this.dynScale *= f;
	for (var i = 0; i < this.groups.length; i++)
		this.scaleDownGroup(this.groups[i], f);
	for (var i = 0; i < this.ops.length; i++) {
		var prev = this.groups[i];
		var op = this.ops[i];
		var next = this.groups[i+1];
		op.scaleDown(f);
		var sideScale1 = this.effectiveIsH() ? 
				prev.sideScaledRight() : prev.sideScaledBottom()
		var sideScale2 = this.effectiveIsH() ?
				next.sideScaledLeft() : next.sideScaledTop()
		var sideScale = Math.max(sideScale1, sideScale2);
		if (this.dynScale > 0)
			op.dynSideScale = sideScale / this.dynScale;
		else
			op.dynSideScale = sideScale;
	}
	for (var i = 0; i < this.ops.length; i++) {
		var op = this.ops[i];
		if (op.effectiveFit())
			op.fitSizeEm = this.fitAroundPx(i) / this.resContext.emSizePx;
	}
};
ResHieroglyphic.prototype.scaleDownGroup =
function(group, f) {
	group.scaleDown(f);
	var targetSize = this.dynScale * this.globals.size;
	for (var i = 0; i < this.resContext.iterateLimit; i++) {
		var size = this.effectiveIsH() ? group.heightEm() : group.widthEm();
		if (size < this.resContext.scaleLimitEm || size <= targetSize)
			break;
		f = targetSize / size;
		group.scaleDown(f);
	}
};

ResVertgroup.prototype.resetScaling =
function(context) {
	this.resContext = context;
	this.dynScale = 1;
	for (var i = 0; i < this.groups.length; i++)
		this.groups[i].group.resetScaling(context);
	for (var i = 0; i < this.ops.length; i++)
		this.ops[i].resetScaling(context);
};
ResVertgroup.prototype.widthEm =
function() {
	var w = 0;
	for (var i = 0; i < this.groups.length; i++)
		w = Math.max(w, this.groups[i].group.widthEm());
	return w;
};
ResVertgroup.prototype.heightEm =
function() {
	var h = 0;
	for (var i = 0; i < this.groups.length; i++)
		h += this.groups[i].group.heightEm();
	for (var i = 0; i < this.ops.length; i++)
		h += this.ops[i].sizeEm();
	return h;
};
ResVertgroup.prototype.widthPx =
function() {
	return this.resContext.emSizePx * this.widthEm();
};
ResVertgroup.prototype.heightPx =
function() {
	return this.resContext.emSizePx * this.heightEm();
};
ResVertgroup.prototype.widthFromToPx =
function(i, j) {
	return this.widthPx();
};
ResVertgroup.prototype.heightFromToPx =
function(i, j) {
	var h = 0;
	for (var k = i; k <= j; k++)
		h += this.groups[k].group.heightPx();
	for (var k = i; k < j; k++)
		h += this.ops[k].sizePx();
	return h;
};
ResVertgroup.prototype.sideScaledLeft =
function() {
	var scaled = 0;
	for (var i = 0; i < this.groups.length; i++)
		scaled = Math.max(scaled, this.groups[i].group.sideScaledLeft());
	return scaled;
};
ResVertgroup.prototype.sideScaledRight =
function() {
	var scaled = 0;
	for (var i = 0; i < this.groups.length; i++)
		scaled = Math.max(scaled, this.groups[i].group.sideScaledRight());
	return scaled;
};
ResVertgroup.prototype.sideScaledTop =
function() {
	return this.groups[0].group.sideScaledTop();
};
ResVertgroup.prototype.sideScaledBottom =
function() {
	return this.groups[this.groups.length-1].group.sideScaledBottom();
};
ResVertgroup.prototype.scaleDown =
function(f) {
	this.dynScale *= f;
	for (var i = 0; i < this.groups.length; i++)
		this.scaleDownGroup(this.groups[i].group, f);
	for (var i = 0; i < this.ops.length; i++) {
		var prev = this.groups[i].group;
		var op = this.ops[i];
		var next = this.groups[i+1].group;
		op.scaleDown(f);
		var sideScale1 = prev.sideScaledBottom();
		var sideScale2 = next.sideScaledTop();
		var sideScale = Math.max(sideScale1, sideScale2);
		if (this.dynScale > 0)
			op.dynSideScale = sideScale / this.dynScale;
		else
			op.dynSideScale = sideScale;
	}
	for (var i = 0; i < this.ops.length; i++) {
		var op = this.ops[i];
		if (op.effectiveFit())
			op.fitSizeEm = this.fitAroundPx(i) / this.resContext.emSizePx;
	}
};
ResVertgroup.prototype.scaleDownGroup =
function(group, f) {
	group.scaleDown(f);
	var unit = this.globals.size;
	if (this.ops[0].size === "inf") {
		unit = Number.MAX_VALUE;
		return;
	} else if (this.ops[0].size !== null) 
		unit = this.ops[0].size;
	var targetWidth = this.dynScale * unit;
	for (var i = 0; i < this.resContext.iterateLimit; i++) {
		var width = group.widthEm();
		if (width < this.resContext.scaleLimitEm || width <= targetWidth)
			break;
		f = targetWidth / width;
		group.scaleDown(f);
	}
};

ResHorgroup.prototype.resetScaling =
function(context) {
	this.resContext = context;
	this.dynScale = 1;
	for (var i = 0; i < this.groups.length; i++)
		this.groups[i].group.resetScaling(context);
	for (var i = 0; i < this.ops.length; i++)
		this.ops[i].resetScaling(context);
};
ResHorgroup.prototype.widthEm =
function() {
	var w = 0;
	for (var i = 0; i < this.groups.length; i++)
		w += this.groups[i].group.widthEm();
	for (var i = 0; i < this.ops.length; i++)
		w += this.ops[i].sizeEm();
	return w;
};
ResHorgroup.prototype.heightEm =
function() {
	var h = 0;
	for (var i = 0; i < this.groups.length; i++)
		h = Math.max(h, this.groups[i].group.heightEm());
	return h;
};
ResHorgroup.prototype.widthPx =
function() {
	return this.resContext.emSizePx * this.widthEm();
};
ResHorgroup.prototype.heightPx =
function() {
	return this.resContext.emSizePx * this.heightEm();
};
ResHorgroup.prototype.widthFromToPx =
function(i, j) {
	var w = 0;
	for (var k = i; k <= j; k++)
		w += this.groups[k].group.widthPx();
	for (var k = i; k < j; k++)
		w += this.ops[k].sizePx();
	return w;
};
ResHorgroup.prototype.heightFromToPx =
function(i, j) {
	return this.heightPx();
};
ResHorgroup.prototype.sideScaledLeft =
function() {
	return this.groups[0].group.sideScaledLeft();
};
ResHorgroup.prototype.sideScaledRight =
function() {
	return this.groups[this.groups.length-1].group.sideScaledRight();
};
ResHorgroup.prototype.sideScaledTop =
function() {
	var scaled = 0;
	for (var i = 0; i < this.groups.length; i++)
		scaled = Math.max(scaled, this.groups[i].group.sideScaledTop());
	return scaled;
};
ResHorgroup.prototype.sideScaledBottom =
function() {
	var scaled = 0;
	for (var i = 0; i < this.groups.length; i++)
		scaled = Math.max(scaled, this.groups[i].group.sideScaledBottom());
	return scaled;
};
ResHorgroup.prototype.scaleDown =
function(f) {
	this.dynScale *= f;
	for (var i = 0; i < this.groups.length; i++)
		this.scaleDownGroup(this.groups[i].group, f);
	for (var i = 0; i < this.ops.length; i++) {
		var prev = this.groups[i].group;
		var op = this.ops[i];
		var next = this.groups[i+1].group;
		op.scaleDown(f);
		var sideScale1 = prev.sideScaledRight();
		var sideScale2 = next.sideScaledLeft();
		var sideScale = Math.max(sideScale1, sideScale2);
		if (this.dynScale > 0)
			op.dynSideScale = sideScale / this.dynScale;
		else
			op.dynSideScale = sideScale;
	}
	for (var i = 0; i < this.ops.length; i++) {
		var op = this.ops[i];
		if (op.effectiveFit())
			op.fitSizeEm = this.fitAroundPx(i) / this.resContext.emSizePx;
	}
};
ResHorgroup.prototype.scaleDownGroup =
function(group, f) {
	group.scaleDown(f);
	var unit = this.globals.size;
	if (this.ops[0].size === "inf") {
		unit = Number.MAX_VALUE;
		return;
	} else if (this.ops[0].size !== null)
		unit = this.ops[0].size;
	var targetHeight = this.dynScale * unit;
	for (var i = 0; i < this.resContext.iterateLimit; i++) {
		var height = group.heightEm();
		if (height < this.resContext.scaleLimitEm || height <= targetHeight)
			break;
		f = targetHeight / height;
		group.scaleDown(f);
	}
};

ResOp.prototype.resetScaling =
function(context) {
	this.resContext = context;
	this.dynScale = 1;
	this.dynSideScale = 1;
	this.dynSize = 0;
	this.fitSizeEm = null;
};
ResOp.prototype.noFitSizeEm =
function() {
	return this.dynSideScale * this.dynScale * this.effectiveSep() * this.resContext.opSepEm;
};
ResOp.prototype.sizeEm =
function() {
	return this.fitSizeEm !== null ? this.fitSizeEm : this.noFitSizeEm();
};
ResOp.prototype.noFitSizePx =
function() {
	return this.resContext.emSizePx * this.noFitSizeEm();
};
ResOp.prototype.sizePx =
function() {
	return this.resContext.emSizePx * this.sizeEm();
};
ResOp.prototype.scaleDown =
function(f) {
	this.dynScale *= f;
};

ResNamedglyph.prototype.resetScaling =
function(context) {
	this.resContext = context;
	var key = context.unMnemonic(this.name);
	key = context.hieroPoints[key];
	if (key) {
		this.font = "Hieroglyphic";
		this.charName = String.fromCharCode(key);
	} else if (this.name === "open" || this.name === "close") {
		key = context.auxPoints[this.name];
		if (key) {
			this.font = "HieroglyphicAux";
			this.charName = String.fromCharCode(key);
		}
	} else if (this.name === "\"\\\"\"") {
		this.font = "HieroglyphicPlain";
		this.charName = "\"";
	} else if (this.name === "\"\\\\\"") {
		this.font = "HieroglyphicPlain";
		this.charName = "\\";
	} else if (this.name.match(/^"."$/)) {
		this.font = "HieroglyphicPlain";
		this.charName = this.name.charAt(1);
	} else {
		this.font = "HieroglyphicPlain"
		this.charName = '?';
	}
	if (this.font === "HieroglyphicPlain")
		this.dynScale = this.plainCorrection();
	else
		this.dynScale = 1;
	this.scaleDown(1);
};
ResNamedglyph.prototype.widthEm =
function() {
	return this.dynWidthEm;
};
ResNamedglyph.prototype.heightEm =
function() {
	return this.dynHeightEm;
};
ResNamedglyph.prototype.widthPx =
function() {
	return this.resContext.emSizePx * this.widthEm();
};
ResNamedglyph.prototype.heightPx =
function() {
	return this.resContext.emSizePx * this.heightEm();
};
ResNamedglyph.prototype.sideScaledLeft =
function() {
	return this.dynScale;
};
ResNamedglyph.prototype.sideScaledRight =
function() {
	return this.dynScale;
};
ResNamedglyph.prototype.sideScaledTop =
function() {
	return this.dynScale;
};
ResNamedglyph.prototype.sideScaledBottom =
function() {
	return this.dynScale;
};
ResNamedglyph.prototype.scaleDown =
function(f) {
	this.dynScale *= f;
	this.testRect = this.testPrint();
	this.dynWidthEm = this.testRect.width / this.resContext.emSizePx;
	this.dynHeightEm = this.testRect.height / this.resContext.emSizePx;
};

ResEmptyglyph.prototype.resetScaling =
function(context) {
	this.resContext = context;
	this.dynScale = 1;
};
ResEmptyglyph.prototype.widthEm =
function() {
	return this.dynScale * this.width;
};
ResEmptyglyph.prototype.heightEm =
function() {
	return this.dynScale * this.height;
};
ResEmptyglyph.prototype.widthPx =
function() {
	return this.resContext.emSizePx * this.widthEm();
};
ResEmptyglyph.prototype.heightPx =
function() {
	return this.resContext.emSizePx * this.heightEm();
};
ResEmptyglyph.prototype.sideScaledLeft =
function() {
	return this.dynScale;
};
ResEmptyglyph.prototype.sideScaledRight =
function() {
	return this.dynScale;
};
ResEmptyglyph.prototype.sideScaledTop =
function() {
	return this.dynScale;
};
ResEmptyglyph.prototype.sideScaledBottom =
function() {
	return this.dynScale;
};
ResEmptyglyph.prototype.scaleDown =
function(f) {
	this.dynScale *= f;
};

ResBox.prototype.resetScaling =
function(context) {
	this.resContext = context;
	this.dynScale = 1;
	if (this.hiero !== null) 
		this.hiero.resetScaling(context);
	var type = context.auxPoints[this.type + 'open'] ? this.type : 'cartouche';
	this.charOpenName = String.fromCharCode(context.auxPoints[type + 'open']);
	this.charCloseName = String.fromCharCode(context.auxPoints[type + 'close']);
	this.charSegmentName = String.fromCharCode(context.auxPoints[type + 'segment']);
	this.scaleDown(1);
};
ResBox.prototype.openChar =
function() {
	return !this.effectiveIsH() || !this.effectiveMirror() ? 
		this.charOpenName : this.charCloseName;
};
ResBox.prototype.closeChar =
function() {
	return !this.effectiveIsH() || !this.effectiveMirror() ? 
		this.charCloseName : this.charOpenName;
};
ResBox.prototype.segmentRotate =
function() {
	return this.effectiveIsH() ? 0 : this.effectiveMirror() ? 270 : 90;
};
ResBox.prototype.openCloseRotate =
function() {
	return this.effectiveIsH() ? 0 : this.effectiveMirror() ? 270 : 90;
};
ResBox.prototype.mapSep =
function(d, x) {
	var s = this.resContext.boxSepEm;
	if (x <= 1)
		return x * s;
	else {
		var a = (d/2 - s) / 9;
		var b = (10 * s - d/2) / 9;
		return a * x + b
	}
};
ResBox.prototype.widthEm =
function() {
	if (this.effectiveIsH())
		return this.openSizeEm + this.closeSizeEm + 
			Math.max(0, (this.hiero === null ? 0 : this.hiero.widthEm()) +
						this.openFitSizeEm + this.closeFitSizeEm);
	else
		return this.dynSegmentSizeEm
};
ResBox.prototype.heightEm =
function() {
	if (this.effectiveIsH())
		return this.dynSegmentSizeEm
	else
		return this.openSizeEm + this.closeSizeEm + 
			Math.max(0, (this.hiero === null ? 0 : this.hiero.heightEm()) +
						this.openFitSizeEm + this.closeFitSizeEm);
};
ResBox.prototype.overSizeEm =
function() {
	return this.mapSep(this.innerSizeEm, this.effectiveOversep());
};
ResBox.prototype.underSizeEm =
function() {
	return this.mapSep(this.innerSizeEm, this.effectiveUndersep());
};
ResBox.prototype.openSepEm =
function() {
	return this.dynScale * this.resContext.boxSepEm * this.effectiveOpensep();
};
ResBox.prototype.closeSepEm =
function() {
	return this.dynScale * this.resContext.boxSepEm * this.effectiveClosesep();
};
ResBox.prototype.openDistEm =
function() {
	return this.openSizeEm + this.openFitSizeEm;
};
ResBox.prototype.closeDistEm =
function() {
	return this.closeSizeEm + this.closeFitSizeEm;
};
ResBox.prototype.overDistEm =
function() {
	return this.overThicknessEm + this.overSizeEm();
};
ResBox.prototype.underDistEm =
function() {
	return this.underThicknessEm + this.underSizeEm();
};
ResBox.prototype.widthPx =
function() {
	return this.resContext.emSizePx * this.widthEm();
};
ResBox.prototype.heightPx =
function() {
	return this.resContext.emSizePx * this.heightEm();
};
ResBox.prototype.innerSizePx =
function() {
	return this.resContext.emSizePx * this.innerSizeEm;
};
ResBox.prototype.overSizePx =
function() {
	return this.resContext.emSizePx * this.overSizeEm();
};
ResBox.prototype.underSizePx =
function() {
	return this.resContext.emSizePx * this.underSizeEm();
};
ResBox.prototype.openSepPx =
function() {
	return this.resContext.emSizePx * this.openSepEm();
};
ResBox.prototype.closeSepPx =
function() {
	return this.resContext.emSizePx * this.closeSepEm();
};
ResBox.prototype.openSizePx =
function() {
	return this.resContext.emSizePx * this.openSizeEm;
};
ResBox.prototype.closeSizePx =
function() {
	return this.resContext.emSizePx * this.closeSizeEm;
};
ResBox.prototype.openDistPx =
function() {
	return this.resContext.emSizePx * this.openDistEm();
};
ResBox.prototype.closeDistPx =
function() {
	return this.resContext.emSizePx * this.closeDistEm();
};
ResBox.prototype.overDistPx =
function() {
	return this.resContext.emSizePx * this.overDistEm();
};
ResBox.prototype.underDistPx =
function() {
	return this.resContext.emSizePx * this.underDistEm();
};
ResBox.prototype.sideScaledLeft =
function() {
	return this.dynScale;
};
ResBox.prototype.sideScaledRight =
function() {
	return this.dynScale;
};
ResBox.prototype.sideScaledTop =
function() {
	return this.dynScale;
};
ResBox.prototype.sideScaledBottom =
function() {
	return this.dynScale;
};
ResBox.prototype.scaleDown =
function(f) {
	this.dynScale *= f;
	this.testRectOpen = this.testPrintOpen();
	this.testRectClose = this.testPrintClose();
	this.testRectSegment = this.testPrintSegment();
	if (this.effectiveIsH()) {
		this.openSizeEm = this.testRectOpen.width / this.resContext.emSizePx;
		this.closeSizeEm = this.testRectClose.width / this.resContext.emSizePx;
		this.dynSegmentSizeEm = this.testRectSegment.height / this.resContext.emSizePx;
	} else {
		this.openSizeEm = this.testRectOpen.height / this.resContext.emSizePx;
		this.closeSizeEm = this.testRectClose.height / this.resContext.emSizePx;
		this.dynSegmentSizeEm = this.testRectSegment.width / this.resContext.emSizePx;
	}
	this.overThicknessEm = this.testRectSegment.over / this.resContext.emSizePx;
	this.underThicknessEm = this.testRectSegment.under / this.resContext.emSizePx;
	this.innerSizeEm = this.dynSegmentSizeEm - 
				this.overThicknessEm - this.underThicknessEm;
	if (this.hiero !== null) {
		var targetSize = this.innerSizeEm - this.overSizeEm() - this.underSizeEm();
		this.hiero.scaleDown(f);
		for (var i = 0; i < this.resContext.iterateLimit; i++) {
			var size = this.effectiveIsH() ? this.hiero.heightEm() : this.hiero.widthEm();
			if (size < this.resContext.scaleLimitEm || size <= targetSize)
				break;
			this.hiero.scaleDown(targetSize / size);
		}
		if (this.effectiveIsH()) {
			this.openFitSizeEm = this.fitLeftPx() / this.resContext.emSizePx;
			this.closeFitSizeEm = this.fitRightPx() / this.resContext.emSizePx;
		} else {
			this.openFitSizeEm = this.fitTopPx() / this.resContext.emSizePx;
			this.closeFitSizeEm = this.fitBottomPx() / this.resContext.emSizePx;
		}
	} else {
		this.openFitSizeEm = 0;
		this.closeFitSizeEm = 0;
	}
};

ResStack.prototype.resetScaling =
function(context) {
	this.resContext = context;
	this.group1.resetScaling(context);
	this.group2.resetScaling(context);
};
ResStack.prototype.widthEm =
function() {
	var w1 = this.group1.widthEm();
	var w2 = this.group2.widthEm();
	var min1 = 0;
	var max1 = w1;
	var x = this.x * w1;
	var min2 = x - w2/2;
	var max2 = x + w2/2;
	var min = Math.min(min1, min2);
	var max = Math.max(max1, max2);
	return max - min;
};
ResStack.prototype.heightEm =
function() {
	var h1 = this.group1.heightEm();
	var h2 = this.group2.heightEm();
	var min1 = 0;
	var max1 = h1;
	var y = this.y * h1;
	var min2 = y - h2/2;
	var max2 = y + h2/2;
	var min = Math.min(min1, min2);
	var max = Math.max(max1, max2);
	return max - min;
};
ResStack.prototype.widthPx =
function() {
	return this.resContext.emSizePx * this.widthEm();
};
ResStack.prototype.heightPx =
function() {
	return this.resContext.emSizePx * this.heightEm();
};
ResStack.prototype.sideScaledLeft =
function() {
	return Math.max(this.group1.sideScaledLeft(), this.group2.sideScaledLeft());
};
ResStack.prototype.sideScaledRight =
function() {
	return Math.max(this.group1.sideScaledRight(), this.group2.sideScaledRight());
};
ResStack.prototype.sideScaledTop =
function() {
	return Math.max(this.group1.sideScaledTop(), this.group2.sideScaledTop());
};
ResStack.prototype.sideScaledBottom =
function() {
	return Math.max(this.group1.sideScaledBottom(), this.group2.sideScaledBottom());
};
ResStack.prototype.scaleDown =
function(f) {
	this.group1.scaleDown(f);
	this.group2.scaleDown(f);
};

ResInsert.prototype.resetScaling =
function(context) {
	this.resContext = context;
	this.group1.resetScaling(context);
	this.group2.resetScaling(context);
	this.scaleDown(1);
};
ResInsert.prototype.widthEm =
function() {
	return this.group1.widthEm();
};
ResInsert.prototype.heightEm =
function() {
	return this.group1.heightEm();
};
ResInsert.prototype.widthPx =
function() {
	return this.resContext.emSizePx * this.widthEm();
};
ResInsert.prototype.heightPx =
function() {
	return this.resContext.emSizePx * this.heightEm();
};
ResInsert.prototype.sideScaledLeft =
function() {
	return Math.max(this.group1.sideScaledLeft(), this.group2.sideScaledLeft());
};
ResInsert.prototype.sideScaledRight =
function() {
	return Math.max(this.group1.sideScaledRight(), this.group2.sideScaledRight());
};
ResInsert.prototype.sideScaledTop =
function() {
	return Math.max(this.group1.sideScaledTop(), this.group2.sideScaledTop());
};
ResInsert.prototype.sideScaledBottom =
function() {
	return Math.max(this.group1.sideScaledBottom(), this.group2.sideScaledBottom());
};
ResInsert.prototype.internSideScale =
function() {
	if (this.place === "t")
		return Math.max(this.group2.sideScaledBottom(),
				this.group2.sideScaledLeft(),
				this.group2.sideScaledRight());
	else if (this.place === "b")
		return Math.max(this.group2.sideScaledTop(),
				this.group2.sideScaledLeft(),
				this.group2.sideScaledRight());
	else if (this.place === "s")
		return Math.max(this.group2.sideScaledTop(),
				this.group2.sideScaledBottom(),
				this.group2.sideScaledRight());
	else if (this.place === "e")
		return Math.max(this.group2.sideScaledTop(),
				this.group2.sideScaledBottom(),
				this.group2.sideScaledLeft());
	else if (this.place === "ts")
		return Math.max(this.group2.sideScaledBottom(),
				this.group2.sideScaledRight());
	else if (this.place === "te")
		return Math.max(this.group2.sideScaledBottom(),
				this.group2.sideScaledLeft());
	else if (this.place === "bs")
		return Math.max(this.group2.sideScaledTop(),
				this.group2.sideScaledRight());
	else if (this.place === "be")
		return Math.max(this.group2.sideScaledTop(),
				this.group2.sideScaledLeft());
	else 
		return Math.max(this.group2.sideScaledTop(),
				this.group2.sideScaledBottom(),
				this.group2.sideScaledLeft(),
				this.group2.sideScaledRight());
};
ResInsert.prototype.sepEm =
function() {
	return this.internSideScale() * this.effectiveSep() * this.resContext.opSepEm;
};
ResInsert.prototype.sepPx =
function() {
	return this.resContext.emSizePx * this.sepEm();
};
ResInsert.prototype.scaleDown =
function(f) {
	this.group1.scaleDown(f);
	this.group2.scaleDown((f+1)/2);
	var w1 = this.group1.widthPx();
	var h1 = this.group1.heightPx();
	for (var i = 0; i < this.resContext.iterateLimit; i++) {
		var w2 = this.group2.widthPx();
		var h2 = this.group2.heightPx();
		if ((w2 < this.resContext.scaleLimitEm || w2 <= w1) &&
				(h2 < this.resContext.scaleLimitEm || h2 <= h1))
			break;
		var f2 = Math.min(w1/w2,h1/h2);
		this.group2.scaleDown(f2);
	}
	var fitResults = this.fitSecond();
	this.dynX = fitResults.x;
	this.dynY = fitResults.y;
	this.group2.scaleDown(fitResults.scale);
};

ResModify.prototype.resetScaling =
function(context) {
	this.resContext = context;
	this.dynScale = 1;
	this.group.resetScaling(context);
};
ResModify.prototype.widthEm =
function() {
	var share = 1 / (this.before + 1 + this.after);
	var w = this.group.widthEm();
	if (this.width !== null) 
		w = this.dynScale * this.width;
	return share * w;
};
ResModify.prototype.heightEm =
function() {
	var share = 1 / (this.above + 1 + this.below);
	var h = this.group.heightEm();
	if (this.height !== null) 
		h = this.dynScale * this.height;
	return share * h;
};
ResModify.prototype.widthPx =
function() {
	return this.resContext.emSizePx * this.widthEm();
};
ResModify.prototype.heightPx =
function() {
	return this.resContext.emSizePx * this.heightEm();
};
ResModify.prototype.sideScaledLeft =
function() {
	return this.group.sideScaledLeft();
};
ResModify.prototype.sideScaledRight =
function() {
	return this.group.sideScaledRight();
};
ResModify.prototype.sideScaledTop =
function() {
	return this.group.sideScaledTop();
};
ResModify.prototype.sideScaledBottom =
function() {
	return this.group.sideScaledBottom();
};
ResModify.prototype.scaleDown =
function(f) {
	this.dynScale *= f;
	this.group.scaleDown(f);
	var targetW = this.width === null ? Number.MAX_VALUE :
			this.dynScale * this.width;
	var targetH = this.height === null ? Number.MAX_VALUE :
			this.dynScale * this.height;
	for (var i = 0; i < this.resContext.iterateLimit; i++) {
		var w = this.group.widthEm();
		var h = this.group.heightEm();
		if ((w < this.resContext.scaleLimitEm || w <= targetW) &&
				(h < this.resContext.scaleLimitEm || h <= targetH))
			break;
		var fW = (w < this.resContext.scaleLimitEm || w <= targetW) ?
				Number.MAX_VALUE : targetW / w;
		var fH = (h < this.resContext.scaleLimitEm || h <= targetH) ?
				Number.MAX_VALUE : targetH / h;
		this.group.scaleDown(Math.min(fW, fH));
	}
};
