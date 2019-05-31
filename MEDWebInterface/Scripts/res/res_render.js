// Rendering.

// Render with initial margin. If things were printed outside margin
// (so if margin became bigger) do again.
// The 'env' object is the environment of printing; it contains
// the rectangle, the margin, the canvas context, etc.
// return: list of rectangle, one for each top-level group, plus separation in
// between, plus some space at the beginning.
ResFragment.prototype.render =
function(canvas, size) {
	var context = new ResContext();
	context.emSizePx = size;
	this.format(context);

	var env = new ResEnv(context); 
	env.mirror = this.globals.isRL();
	while (true) {
		var w = Math.round(this.widthPx());
		var h = Math.round(this.heightPx());
		env.totalWidthPx = w + env.leftMarginPx + env.rightMarginPx;
		env.totalHeightPx = h + env.topMarginPx + env.bottomMarginPx;
		env.isH = this.globals.isH();
		canvas.width = env.totalWidthPx;
		canvas.height = env.totalHeightPx;
		env.ctx = canvas.getContext("2d");
		env.ctx.clearRect(0, 0, canvas.width, canvas.height);
		if (env.mirror) {
			env.ctx.save();
			env.ctx.translate(canvas.width, 0);
			env.ctx.scale(-1, 1);
		}
		var rect = new ResRectangle(env.leftMarginPx, env.topMarginPx, w, h);
		env.shading = new ResShading(context, env.mirror); 
		var groupRects = env.isH ? [new ResRectangle(0, 0, env.leftMarginPx, h)] :
									[new ResRectangle(0, 0, w, env.topMarginPx)];
		if (this.hiero !== null) {
			var hieroRects = this.hiero.render(env, rect, rect, null, false);
			groupRects = groupRects.concat(hieroRects);
		}
		env.shading.compress();
		env.shading.print(env.ctx);
		if (this.hiero !== null)
			this.hiero.renderNotes(env);
		if (env.marginsUnchanged()) {
			break;
		} else
			env.updateMargins();
	}
	if (env.mirror) {
		env.ctx.restore();
		var rev = [];
		for (var i = 0; i < groupRects.length; i++)
			rev.push(groupRects[i].mirror(env.totalWidthPx));
		return rev;
	} else
		return groupRects;
};

ResHieroglyphic.prototype.render =
function(env, rect, shadeRect, clip, fitting) {
	var groupRects = [];
	for (var i = 0; i < this.groups.length; i++) {
		var group = this.groups[i];
		if (this.effectiveIsH()) {
			var w = group.widthPx();
			var groupRect = rect.chopStartH(rect.x + w);
			var groupShadeRect = shadeRect.chopStartH(rect.x + w);
			group.render(env, groupRect, groupShadeRect, clip, fitting);
			groupRects.push(groupRect);
			shadeRect = shadeRect.chopEndH(rect.x + w);
			rect = rect.chopEndH(rect.x + w);
		} else {
			var h = group.heightPx();
			var groupRect = rect.chopStartV(rect.y + h);
			var groupShadeRect = shadeRect.chopStartV(rect.y + h);
			group.render(env, groupRect, groupShadeRect, clip, fitting);
			groupRects.push(groupRect);
			shadeRect = shadeRect.chopEndV(rect.y + h);
			rect = rect.chopEndV(rect.y + h);
		}
		if (i < this.ops.length) {
			var op = this.ops[i];
			var size = op.sizePx();
			if (this.effectiveIsH()) {
				var opRect = shadeRect.chopStartH(rect.x + size);
				op.render(env, opRect, fitting);
				groupRects.push(opRect);
				shadeRect = shadeRect.chopEndH(rect.x + size);
				rect = rect.chopEndH(rect.x + size);
			} else {
				var opRect = shadeRect.chopStartV(rect.y + size);
				op.render(env, opRect, fitting);
				groupRects.push(opRect);
				shadeRect = shadeRect.chopEndV(rect.y + size);
				rect = rect.chopEndV(rect.y + size);
			}
		}
	}
	return groupRects;
};
ResHieroglyphic.prototype.renderFromTo =
function(env, rect, i, j) {
	for (var k = i; k <= j; k++) {
		var group = this.groups[k];
		if (this.effectiveIsH()) {
			var w = group.widthPx();
			var groupRect = rect.chopStartH(rect.x + w);
			group.render(env, groupRect, groupRect, null, true);
			rect = rect.chopEndH(rect.x + w);
		} else {
			var h = group.heightPx();
			var groupRect = rect.chopStartV(rect.y + h);
			group.render(env, groupRect, groupRect, null, true);
			rect = rect.chopEndV(rect.y + h);
		}
		if (k < j) {
			var op = this.ops[k];
			var size = op.sizePx();
			if (this.effectiveIsH()) {
				rect = rect.chopEndH(rect.x + size);
			} else {
				rect = rect.chopEndV(rect.y + size);
			}
		}
	}
};
ResHieroglyphic.prototype.fitAroundPx =
function(i) {
	var j;
	for (j = i; j > 0; j--)
		if (!this.ops[j-1].effectiveFit())
			break;
	var sep = Math.round(this.ops[i].noFitSizePx());
	if (this.effectiveIsH()) {
		var wBefore = Math.round(this.widthFromToPx(j, i));
		var wLast = Math.round(this.widthFromToPx(i, i));
		var wAfter = Math.round(this.widthFromToPx(i+1, i+1));
		var h = Math.round(this.heightPx());
		var sepMax = Math.min(wLast, wAfter);
		var rectBefore = new ResRectangle(0, 0, wBefore, h);
		var rectAfter = new ResRectangle(0, 0, wAfter, h);
	} else {
		var w = Math.round(this.widthPx());
		var hBefore = Math.round(this.heightFromToPx(j, i));
		var hLast = Math.round(this.heightFromToPx(i, i));
		var hAfter = Math.round(this.heightFromToPx(i+1, i+1));
		var sepMax = Math.min(hLast, hAfter);
		var rectBefore = new ResRectangle(0, 0, w, hBefore);
		var rectAfter = new ResRectangle(0, 0, w, hAfter);
	}
	var canvasBefore = ResCanvas.make(rectBefore.width, rectBefore.height);
	var envBefore = new ResEnv(this.resContext);
	envBefore.ctx = canvasBefore.getContext("2d");
	envBefore.mirror = this.globals.isRL();
	envBefore.totalWidthPx = rectBefore.width;
	envBefore.totalHeightPx = rectBefore.height;
	envBefore.isH = this.effectiveIsH();
	this.renderFromTo(envBefore, rectBefore, j, i);
	var canvasAfter = ResCanvas.make(rectAfter.width, rectAfter.height);
	var envAfter = new ResEnv(this.resContext);
	envAfter.ctx = canvasAfter.getContext("2d");
	envAfter.mirror = this.globals.isRL();
	envAfter.totalWidthPx = rectAfter.width;
	envAfter.totalHeightPx = rectAfter.height;
	envAfter.isH = this.effectiveIsH();
	this.renderFromTo(envAfter, rectAfter, i+1, i+1);
	if (this.effectiveIsH())
		return ResCanvas.fitHor(envBefore.ctx, envAfter.ctx, wBefore, wAfter, h, sep, sepMax);
	else
		return ResCanvas.fitVert(envBefore.ctx, envAfter.ctx, w, hBefore, hAfter, sep, sepMax);
};
ResHieroglyphic.prototype.renderNotes =
function(env) {
	for (var i = 0; i < this.groups.length; i++) 
		this.groups[i].renderNotes(env);
};

ResVertgroup.prototype.render =
function(env, rect, shadeRect, clip, fitting) {
	var w = this.widthPx();
	var h = this.heightPx();
	var horSurplus = rect.width - w;
	var vertSurplus = rect.height - h;
	var leftSurplus = horSurplus / 2;
	var nPad = this.nPaddable();
	if (nPad < 1) {
		var topSurplus = vertSurplus / 2;
		rect = new ResRectangle(rect.x + leftSurplus, rect.y + topSurplus, w, h);
		vertSurplus = 0;
	} else
		rect = new ResRectangle(rect.x + leftSurplus, rect.y, w, rect.h);
	for (var i = 0; i < this.groups.length; i++) {
		var group = this.groups[i].group;
		var groupH = group.heightPx();
		var groupRect = rect.chopStartV(rect.y + groupH);
		var groupShadeRect = 
			(i == this.groups.length - 1) ? shadeRect :
				shadeRect.chopStartV(rect.y + groupH);
		group.render(env, groupRect, groupShadeRect, clip, fitting);
		shadeRect = shadeRect.chopEndV(rect.y + groupH);
		rect = rect.chopEndV(rect.y + groupH);
		if (i < this.ops.length) {
			var op = this.ops[i];
			var size = op.sizePx();
			if (!op.fix) {
				var extra = vertSurplus / nPad;
				vertSurplus -= extra;
				nPad--;
				size += extra;
			}
			var opRect = shadeRect.chopStartV(rect.y + size);
			op.render(env, opRect, fitting);
			shadeRect = shadeRect.chopEndV(rect.y + size);
			rect = rect.chopEndV(rect.y + size);
		}
	}
};
ResVertgroup.prototype.renderFromTo =
function(env, rect, i, j) {
	for (var k = i; k <= j; k++) {
		var group = this.groups[k].group;
		var h = group.heightPx();
		var groupRect = rect.chopStartV(rect.y + h);
		group.render(env, groupRect, groupRect, null, true);
		rect = rect.chopEndV(rect.y + h);
		if (k < j) {
			var op = this.ops[k];
			var size = op.sizePx();
			rect = rect.chopEndV(rect.y + size);
		}
	}
};
ResVertgroup.prototype.fitAroundPx =
function(i) {
	var j;
	for (j = i; j > 0; j--)
		if (!this.ops[j-1].effectiveFit())
			break;
	var sep = Math.round(this.ops[i].noFitSizePx());
	var w = Math.round(this.widthPx());
	var hBefore = Math.round(this.heightFromToPx(j, i));
	var hLast = Math.round(this.heightFromToPx(i, i));
	var hAfter = Math.round(this.heightFromToPx(i+1, i+1));
	var sepMax = Math.min(hLast, hAfter);
	var rectBefore = new ResRectangle(0, 0, w, hBefore);
	var rectAfter = new ResRectangle(0, 0, w, hAfter);
	var canvasBefore = ResCanvas.make(rectBefore.width, rectBefore.height);
	var envBefore = new ResEnv(this.resContext);
	envBefore.ctx = canvasBefore.getContext("2d");
	envBefore.mirror = this.globals.isRL();
	envBefore.totalWidthPx = rectBefore.width;
	envBefore.totalHeightPx = rectBefore.height;
	envBefore.isH = this.globals.isH();
	this.renderFromTo(envBefore, rectBefore, j, i);
	var canvasAfter = ResCanvas.make(rectAfter.width, rectAfter.height);
	var envAfter = new ResEnv(this.resContext);
	envAfter.ctx = canvasAfter.getContext("2d");
	envAfter.mirror = this.globals.isRL();
	envAfter.totalWidthPx = rectAfter.width;
	envAfter.totalHeightPx = rectAfter.height;
	envAfter.isH = this.globals.isH();
	this.renderFromTo(envAfter, rectAfter, i+1, i+1);
	return ResCanvas.fitVert(envBefore.ctx, envAfter.ctx, w, hBefore, hAfter, sep, sepMax);
};
ResVertgroup.prototype.renderNotes =
function(env) {
	for (var i = 0; i < this.groups.length; i++) 
		this.groups[i].group.renderNotes(env);
};

ResHorgroup.prototype.render =
function(env, rect, shadeRect, clip, fitting) {
	var w = this.widthPx();
	var h = this.heightPx();
	var horSurplus = rect.width - w;
	var vertSurplus = rect.height - h;
	var topSurplus = vertSurplus / 2;
	var nPad = this.nPaddable();
	if (nPad < 1) {
		var leftSurplus = horSurplus / 2;
		rect = new ResRectangle(rect.x + leftSurplus, rect.y + topSurplus, w, h);
		horSurplus = 0;
	} else
		rect = new ResRectangle(rect.x, rect.y + topSurplus, rect.width, h);
	for (var i = 0; i < this.groups.length; i++) {
		var group = this.groups[i].group;
		var groupW = group.widthPx();
		var groupRect = rect.chopStartH(rect.x + groupW);
		var groupShadeRect = 
			(i == this.groups.length - 1) ? shadeRect :
				shadeRect.chopStartH(rect.x + groupW);
		group.render(env, groupRect, groupShadeRect, clip, fitting);
		shadeRect = shadeRect.chopEndH(rect.x + groupW);
		rect = rect.chopEndH(rect.x + groupW);
		if (i < this.ops.length) {
			var op = this.ops[i];
			var size = op.sizePx();
			if (!op.fix) {
				var extra = horSurplus / nPad;
				horSurplus -= extra;
				nPad--;
				size += extra;
			}
			var opRect = shadeRect.chopStartH(rect.x + size);
			op.render(env, opRect, fitting);
			shadeRect = shadeRect.chopEndH(rect.x + size);
			rect = rect.chopEndH(rect.x + size);
		}
	}
};
ResHorgroup.prototype.renderFromTo =
function(env, rect, i, j) {
	for (var k = i; k <= j; k++) {
		var group = this.groups[k].group;
		var w = group.widthPx();
		var groupRect = rect.chopStartH(rect.x + w);
		group.render(env, groupRect, groupRect, null, true);
		rect = rect.chopEndH(rect.x + w);
		if (k < j) {
			var op = this.ops[k];
			var size = op.sizePx();
			rect = rect.chopEndH(rect.x + size);
		}
	}
};
ResHorgroup.prototype.fitAroundPx =
function(i) {
	var j;
	for (j = i; j > 0; j--)
		if (!this.ops[j-1].effectiveFit())
			break;
	var sep = Math.round(this.ops[i].noFitSizePx());
	var wBefore = Math.round(this.widthFromToPx(j, i));
	var wLast = Math.round(this.widthFromToPx(i, i));
	var wAfter = Math.round(this.widthFromToPx(i+1, i+1));
	var h = Math.round(this.heightPx());
	var sepMax = Math.min(wLast, wAfter);
	var rectBefore = new ResRectangle(0, 0, wBefore, h);
	var rectAfter = new ResRectangle(0, 0, wAfter, h);
	var canvasBefore = ResCanvas.make(rectBefore.width, rectBefore.height);
	var envBefore = new ResEnv(this.resContext);
	envBefore.ctx = canvasBefore.getContext("2d");
	envBefore.mirror = this.globals.isRL();
	envBefore.totalWidthPx = rectBefore.width;
	envBefore.totalHeightPx = rectBefore.height;
	envBefore.isH = this.globals.isH();
	this.renderFromTo(envBefore, rectBefore, j, i);
	var canvasAfter = ResCanvas.make(rectAfter.width, rectAfter.height);
	var envAfter = new ResEnv(this.resContext);
	envAfter.ctx = canvasAfter.getContext("2d");
	envAfter.mirror = this.globals.isRL();
	envAfter.totalWidthPx = rectAfter.width;
	envAfter.totalHeightPx = rectAfter.height;
	envAfter.isH = this.globals.isH();
	this.renderFromTo(envAfter, rectAfter, i+1, i+1);
	return ResCanvas.fitHor(envBefore.ctx, envAfter.ctx, wBefore, wAfter, h, sep, sepMax);
};
ResHorgroup.prototype.renderNotes =
function(env) {
	for (var i = 0; i < this.groups.length; i++) 
		this.groups[i].group.renderNotes(env);
};

ResOp.prototype.render =
function(env, shadeRect, fitting) {
	if (!fitting)
		ResShading.shadeBasicgroup(env, this, shadeRect);
};

ResNamedglyph.prototype.render =
function(env, rect, shadeRect, clip, fitting) {
	var color = fitting ? "black" : this.effectiveColor();
	var centRect = rect.center(new ResRectangle(0, 0, this.testRect.width, this.testRect.height));
	var mirror = this.effectiveMirror();
	var size = this.resContext.emSizePx * this.dynScale * this.scale * this.yscale;
	var xScale = this.xscale / this.yscale;
	var x = centRect.x;
	var y = centRect.y;
	if (clip !== null) {
		env.ctx.save();
		env.ctx.beginPath();
		env.ctx.rect(clip.x, clip.y, clip.width, clip.height);
		env.ctx.clip();
	}
	ResCanvas.printGlyph(env.ctx, x, y, this.testRect, this.charName, 
				size, xScale, this.font, color, this.rotate, mirror);
	if (clip !== null)
		env.ctx.restore();
	if (!fitting) {
		env.ensureRect(clip !== null ? clip : centRect);
		ResShading.shadeBasicgroup(env, this, shadeRect);
	}
	this.noteRect = centRect;
};
ResNamedglyph.prototype.testPrint =
function() {
	if (this.font === undefined)
		return new ResRectangle(0, 0, 1, 1);
	var mirror = this.effectiveMirror();
	var ySize = this.resContext.emSizePx * this.dynScale * this.scale * this.yscale;
	var xScale = this.xscale / this.yscale;
	return ResCanvas.glyphRect(this.charName, ySize, xScale, this.font, this.rotate, mirror);
};
ResNamedglyph.prototype.plainCorrection =
function() {
	if (ResNamedglyph.plainCorrectionFactor === undefined) {
		var size = this.resContext.emSizePx;
		var rect = ResCanvas.glyphRect("[", size, 1, "HieroglyphicPlain", 0, false);
		ResNamedglyph.plainCorrectionFactor = size / rect.height;
	}
	return ResNamedglyph.plainCorrectionFactor;
};
ResNamedglyph.prototype.renderNotes =
function(env) {
	for (var i = 0; i < this.notes.length; i++)
		this.notes[i].render(env, this.noteRect);
};

ResEmptyglyph.prototype.render =
function(env, rect, shadeRect, clip, fitting) {
	if (!fitting)
		ResShading.shadeBasicgroup(env, this, shadeRect);
	if (fitting && this.firm) {
		env.ctx.fillStyle = "black";
		if (rect.width > 0 && rect.height > 0)
			env.ctx.rect(rect.x, rect.y, rect.width, rect.height);
		else
			env.ctx.rect(rect.x-1, rect.y-1, rect.width+2, rect.height+2);
		env.ctx.stroke();
	}
	this.noteRect = new ResRectangle(rect.x + rect.width/2, rect.y + rect.height/2, 1, 1);
};
ResEmptyglyph.prototype.renderNotes =
function(env) {
	if (this.note !== null)
		this.note.render(env, this.noteRect);
};

ResBox.prototype.render =
function(env, rect, shadeRect, clip, fitting) {
	var color = fitting ? "black" : this.effectiveColor();
	var size = this.resContext.emSizePx * this.dynScale * this.scale;
	var font = "HieroglyphicAux";
	var rot = this.openCloseRotate();
	var mirror = this.effectiveMirror();
	var segmentRot = this.segmentRotate();
	var overlap = this.resContext.boxOverlapPx;
	var clipMargin = 3;
	var w = this.widthPx();
	var h = this.heightPx();
	var centRect = rect.center(new ResRectangle(0, 0, w, h));
	var x = centRect.x;
	var y = centRect.y;
	if (clip !== null) {
		env.ctx.save();
		env.ctx.beginPath();
		env.ctx.rect(clip.x, clip.y, clip.width, clip.height);
		env.ctx.clip();
	}
	ResCanvas.printGlyph(env.ctx, x, y, this.testRectOpen, 
				this.openChar(), size, 1, font, color, rot, mirror);
	if (this.effectiveIsH()) {
		ResCanvas.printGlyph(env.ctx, x+w-this.testRectClose.width, y, this.testRectClose, 
				this.closeChar(), size, 1, font, color, rot, mirror);
		var incr = Math.max(1, this.testRectSegment.width - overlap);
		var segX;
		var segY = y;
		for (segX = x + this.testRectOpen.width - overlap;
				segX + this.testRectSegment.width < x+w-this.testRectClose.width+overlap;
				segX += incr)
			ResCanvas.printGlyph(env.ctx, segX, y, this.testRectSegment, 
					this.charSegmentName, size, 1, font, color, segmentRot, mirror);
	} else {
		ResCanvas.printGlyph(env.ctx, x, y+h-this.testRectClose.height, this.testRectClose, 
			this.closeChar(), size, 1, font, color, rot, mirror);
		var incr = Math.max(1, this.testRectSegment.height - overlap);
		var segX = x;
		var segY;
		for (segY = y + this.testRectOpen.height - overlap;
				segY + this.testRectSegment.height < y+h-this.testRectClose.height+overlap;
				segY += incr)
			ResCanvas.printGlyph(env.ctx, x, segY, this.testRectSegment, 
					this.charSegmentName, size, 1, font, color, segmentRot, mirror);
	}
	if (clip !== null)
		env.ctx.restore();
	if (this.effectiveIsH()) {
		var lastRect = new ResRectangle(segX, y-clipMargin, 
				x+w-this.testRectClose.width+overlap-segX, h + 2*clipMargin);
	} else {
		var lastRect = new ResRectangle(x - clipMargin, segY,
				w + 2*clipMargin, y+h-this.testRectClose.height+overlap-segY);
	}
	if (clip !== null) 
		lastRect = lastRect.intersect(clip);
	env.ctx.save();
	env.ctx.beginPath();
	env.ctx.rect(lastRect.x, lastRect.y, lastRect.width, lastRect.height);
	env.ctx.clip();
	ResCanvas.printGlyph(env.ctx, segX, segY, this.testRectSegment, 
			this.charSegmentName, size, 1, font, color, segmentRot, mirror);
	env.ctx.restore();
	if (this.hiero !== null) {
		var targetSize = this.innerSizePx() - this.overSizePx() - this.underSizePx();
		if (this.effectiveIsH()) {
			var topSurplus = (targetSize - this.hiero.heightPx()) / 2;
			var hieroX = x + this.openDistPx();
			var hieroY = y + this.overDistPx() + topSurplus;
			var hieroRect = new ResRectangle(hieroX, hieroY, this.hiero.widthPx(), this.hiero.heightPx());
			this.hiero.render(env, hieroRect, hieroRect, clip, fitting);
		} else {
			var leftSurplus = (targetSize - this.hiero.widthPx()) / 2;
			var hieroX = x + this.underDistPx() + leftSurplus;
			var hieroY = y + this.openDistPx();
			var hieroRect = new ResRectangle(hieroX, hieroY, this.hiero.widthPx(), this.hiero.heightPx());
			this.hiero.render(env, hieroRect, hieroRect, clip, fitting);
		}
	} else
		var hieroRect = null;
	if (!fitting) {
		env.ensureRect(clip !== null ? clip : centRect);
		if (hieroRect !== null)
			ResShading.shadeBox(env, this, shadeRect, hieroRect); 
		else
			ResShading.shadeBasicgroup(env, this, shadeRect); 
	}
	this.noteRect = centRect;
};
ResBox.prototype.testPrintOpen =
function() {
	return this.testPrint(this.openChar(), this.openCloseRotate(), 
			this.effectiveMirror());
};
ResBox.prototype.testPrintClose =
function() {
	return this.testPrint(this.closeChar(), this.openCloseRotate(), 
			this.effectiveMirror());
};
ResBox.prototype.testPrintSegment =
function() {
	var rect = this.testPrint(this.charSegmentName, this.segmentRotate(), 
				this.effectiveMirror());
	var canvas = ResCanvas.make(rect.width, rect.height);
	var ctx = canvas.getContext("2d");
	var size = this.resContext.emSizePx * this.dynScale * this.scale;
	ResCanvas.printGlyph(ctx, 0, 0, rect, this.charSegmentName,
				size, 1, "HieroglyphicAux", "black", 
				this.segmentRotate(), this.effectiveMirror());
	if (this.effectiveIsH()) {
		var intern = ResCanvas.internalHor(ctx, rect.width, rect.height);
		rect.over = intern.over;
		rect.under = intern.under;
	} else {
		var intern = ResCanvas.internalVert(ctx, rect.width, rect.height);
		rect.over = this.effectiveMirror() ? intern.under : intern.over;
		rect.under = this.effectiveMirror() ? intern.over : intern.under;
	}
	return rect;
};
// name: character name of open or close or segment.
ResBox.prototype.testPrint =
function(name, rotate, mirror) {
	var size = this.resContext.emSizePx * this.dynScale * this.scale;
	return ResCanvas.glyphRect(name, size, 1, "HieroglyphicAux", rotate, mirror);
};
ResBox.prototype.fitLeftPx =
function() {
	var size = this.resContext.emSizePx * this.dynScale * this.scale;
	var sep = Math.round(this.openSepPx());
	var rot = this.openCloseRotate();
	var mirror = this.effectiveMirror();
	var canvasBefore = ResCanvas.make(this.openSizePx(), this.heightPx());
	var envBefore = new ResEnv(this.resContext);
	envBefore.ctx = canvasBefore.getContext("2d");
	envBefore.mirror = false;
	envBefore.totalWidthPx = this.openSizePx();
	envBefore.totalHeightPx = this.heightPx();
	envBefore.isH = true;
	ResCanvas.printGlyph(envBefore.ctx, 0, 0, this.testRectOpen,
				this.openChar(), size, 1, "HieroglyphicAux", "black", rot, mirror);

	var targetSize = this.innerSizePx() - this.overSizePx() - this.underSizePx();
	var topSurplus = (targetSize - this.hiero.heightPx()) / 2;
	var y = this.overDistPx() + topSurplus;
	var lastGroup = Math.min(2, this.hiero.groups.length-1);
	var wAfter = this.hiero.widthFromToPx(0, lastGroup);
	var hAfter = this.hiero.heightFromToPx(0, lastGroup);
	var canvasAfter = ResCanvas.make(wAfter, this.heightPx());
	var envAfter = new ResEnv(this.resContext);
	envAfter.ctx = canvasAfter.getContext("2d");
	envAfter.mirror = false;
	envAfter.totalWidthPx = wAfter;
	envAfter.totalHeightPx = this.heightPx();
	envAfter.isH = true;
	var rectAfter = new ResRectangle(0, y, wAfter, hAfter);
	this.hiero.renderFromTo(envAfter, rectAfter, 0, lastGroup);

	return ResCanvas.fitHor(envBefore.ctx, envAfter.ctx, 
				canvasBefore.width, canvasAfter.width, canvasBefore.height,
				sep, canvasBefore.width);
};
ResBox.prototype.fitRightPx =
function() {
	var size = this.resContext.emSizePx * this.dynScale * this.scale;
	var sep = Math.round(this.closeSepPx());
	var rot = this.openCloseRotate();
	var mirror = this.effectiveMirror();
	var canvasAfter = ResCanvas.make(this.closeSizePx(), this.heightPx());
	var envAfter = new ResEnv(this.resContext);
	envAfter.ctx = canvasAfter.getContext("2d");
	envAfter.mirror = false;
	envAfter.totalWidthPx = this.closeSizePx();
	envAfter.totalHeightPx = this.heightPx();
	envAfter.isH = true;
	ResCanvas.printGlyph(envAfter.ctx, 0, 0, this.testRectClose,
				this.closeChar(), size, 1, "HieroglyphicAux", "black", rot, mirror);

	var targetSize = this.innerSizePx() - this.overSizePx() - this.underSizePx();
	var topSurplus = (targetSize - this.hiero.heightPx()) / 2;
	var y = this.overDistPx() + topSurplus;
	var firstGroup = Math.max(0, this.hiero.groups.length-3);
	var lastGroup = this.hiero.groups.length-1;
	var wBefore = this.hiero.widthFromToPx(firstGroup, lastGroup);
	var hBefore = this.hiero.heightFromToPx(firstGroup, lastGroup);
	var canvasBefore = ResCanvas.make(wBefore, this.heightPx());
	var envBefore = new ResEnv(this.resContext);
	envBefore.ctx = canvasBefore.getContext("2d");
	envBefore.mirror = false;
	envBefore.totalWidthPx = wBefore;
	envBefore.totalHeightPx = this.heightPx();
	envBefore.isH = true;
	var rectBefore = new ResRectangle(0, y, wBefore, hBefore);
	this.hiero.renderFromTo(envBefore, rectBefore, firstGroup, lastGroup);

	return ResCanvas.fitHor(envBefore.ctx, envAfter.ctx, 
				canvasBefore.width, canvasAfter.width, canvasBefore.height,
				sep, canvasAfter.width);
};
ResBox.prototype.fitTopPx =
function() {
	var size = this.resContext.emSizePx * this.dynScale * this.scale;
	var sep = Math.round(this.openSepPx());
	var rot = this.openCloseRotate();
	var mirror = this.effectiveMirror();
	var canvasBefore = ResCanvas.make(this.widthPx(), this.openSizePx());
	var envBefore = new ResEnv(this.resContext);
	envBefore.ctx = canvasBefore.getContext("2d");
	envBefore.mirror = false;
	envBefore.totalWidthPx = this.widthPx();
	envBefore.totalHeightPx = this.openSizePx();
	envBefore.isH = true;
	ResCanvas.printGlyph(envBefore.ctx, 0, 0, this.testRectOpen,
				this.openChar(), size, 1, "HieroglyphicAux", "black", rot, mirror);

	var targetSize = this.innerSizePx() - this.overSizePx() - this.underSizePx();
	var leftSurplus = (targetSize - this.hiero.widthPx()) / 2;
	var x = this.underDistPx() + leftSurplus;
	var lastGroup = Math.min(2, this.hiero.groups.length-1);
	var wAfter = this.hiero.widthFromToPx(0, lastGroup);
	var hAfter = this.hiero.heightFromToPx(0, lastGroup);
	var canvasAfter = ResCanvas.make(this.widthPx(), hAfter);
	var envAfter = new ResEnv(this.resContext);
	envAfter.ctx = canvasAfter.getContext("2d");
	envAfter.mirror = false;
	envAfter.totalWidthPx = this.widthPx();
	envAfter.totalHeightPx = hAfter;
	envAfter.isH = true;
	var rectAfter = new ResRectangle(x, 0, wAfter, hAfter);
	this.hiero.renderFromTo(envAfter, rectAfter, 0, lastGroup);

	return ResCanvas.fitVert(envBefore.ctx, envAfter.ctx, 
				canvasBefore.width, canvasBefore.height, canvasAfter.height,
				sep, canvasBefore.height);
};
ResBox.prototype.fitBottomPx =
function() {
	var size = this.resContext.emSizePx * this.dynScale * this.scale;
	var sep = Math.round(this.closeSepPx());
	var rot = this.openCloseRotate();
	var mirror = this.effectiveMirror();
	var canvasAfter = ResCanvas.make(this.widthPx(), this.closeSizePx());
	var envAfter = new ResEnv(this.resContext);
	envAfter.ctx = canvasAfter.getContext("2d");
	envAfter.mirror = false;
	envAfter.totalWidthPx = this.widthPx();
	envAfter.totalHeightPx = this.closeSizePx();
	envAfter.isH = true;
	ResCanvas.printGlyph(envAfter.ctx, 0, 0, this.testRectClose,
				this.closeChar(), size, 1, "HieroglyphicAux", "black", rot, mirror);

	var targetSize = this.innerSizePx() - this.overSizePx() - this.underSizePx();
	var leftSurplus = (targetSize - this.hiero.widthPx()) / 2;
	var x = this.underDistPx() + leftSurplus;
	var firstGroup = Math.max(0, this.hiero.groups.length-3);
	var lastGroup = this.hiero.groups.length-1;
	var wBefore = this.hiero.widthFromToPx(firstGroup, lastGroup);
	var hBefore = this.hiero.heightFromToPx(firstGroup, lastGroup);
	var canvasBefore = ResCanvas.make(this.widthPx(), hBefore);
	var envBefore = new ResEnv(this.resContext);
	envBefore.ctx = canvasBefore.getContext("2d");
	envBefore.mirror = false;
	envBefore.totalWidthPx = this.widthPx();
	envBefore.totalHeightPx = hBefore;
	envBefore.isH = true;
	var rectBefore = new ResRectangle(x, 0, wBefore, hBefore);
	this.hiero.renderFromTo(envBefore, rectBefore, firstGroup, lastGroup);

	return ResCanvas.fitVert(envBefore.ctx, envAfter.ctx, 
				canvasBefore.width, canvasBefore.height, canvasBefore.height,
				sep, canvasAfter.height);
};
ResBox.prototype.renderNotes =
function(env) {
	for (var i = 0; i < this.notes.length; i++)
		this.notes[i].render(env, this.noteRect);
	if (this.hiero !== null) 
		this.hiero.renderNotes(env);
};

ResStack.prototype.render =
function(env, rect, shadeRect, clip, fitting) {
	var box = new ResRectangle(0, 0, this.widthPx(), this.heightPx());
	rect = rect.center(box);
	var w1 = this.group1.widthPx();
	var w2 = this.group2.widthPx();
	var h1 = this.group1.heightPx();
	var h2 = this.group2.heightPx();
	var x = this.x * w1;
	var y = this.y * h1;
	var xMin2 = x - w2 / 2;
	var yMin2 = y - h2 / 2;
	var x0 = Math.min(0, xMin2);
	var y0 = Math.min(0, yMin2);
	var x1 = -x0;
	var y1 = -y0;
	var x2 = xMin2 - x0;
	var y2 = yMin2 - y0;
	var rect1 = new ResRectangle(rect.x + x1, rect.y + y1, w1, h1);
	var rect2 = new ResRectangle(rect.x + x2, rect.y + y2, w2, h2);
	if (this.onunder === "on" || this.onunder === "under") {
		var extra = this.resContext.milEmToPx(2000);
		if (env.isH) {
			var pre = Math.min(extra, rect.x);
			var post = Math.min(extra, env.totalWidthPx - (rect.x + rect.width));
			var w = Math.round(rect.width + pre + post);
			var h = Math.round(env.totalHeightPx);
			var x = pre;
			var y = rect.y;
		} else {
			var pre = Math.min(extra, rect.y);
			var post = Math.min(extra, env.totalHeightPx - (rect.y + rect.height));
			var w = Math.round(env.totalWidthPx);
			var h = Math.round(rect.height + pre + post);
			var x = rect.x
			var y = pre;
		}
		var xRef = rect.x - x;
		var yRef = rect.y - y;
		var canvas1 = ResCanvas.make(w, h);
		var ctx1 = canvas1.getContext("2d");
		ctx1.translate(-xRef, -yRef);
		var canvas2 = ResCanvas.make(w, h);
		var ctx2 = canvas2.getContext("2d");
		ctx2.translate(-xRef, -yRef);
		var savedCtx = env.ctx;
		env.ctx = ctx1;
		this.group1.render(env, rect1, shadeRect, clip, fitting);
		env.ctx = ctx2;
		this.group2.render(env, rect2, rect2, clip, fitting);
		if (this.onunder === "on") {
			var external = ResCanvas.externalPixels(ctx2, w, h);
			ResCanvas.erasePixels(ctx1, w, h, external);
		} else {
			var external = ResCanvas.externalPixels(ctx1, w, h);
			ResCanvas.erasePixels(ctx2, w, h, external);
		}
		env.ctx = savedCtx;
		env.ctx.drawImage(canvas1, xRef, yRef);
		env.ctx.drawImage(canvas2, xRef, yRef);
	} else {
		this.group1.render(env, rect1, shadeRect, clip, fitting);
		this.group2.render(env, rect2, rect2, clip, fitting);
	}
};
ResStack.prototype.renderNotes =
function(env) {
	this.group1.renderNotes(env);
	this.group2.renderNotes(env);
};

ResInsert.prototype.fitSecond =
function() {
	var w1 = Math.round(this.group1.widthPx());
	var h1 = Math.round(this.group1.heightPx());
	var canvas1 = ResCanvas.make(w1, h1);
	var env1 = new ResEnv(this.resContext);
	env1.ctx = canvas1.getContext("2d");
	env1.mirror = false;
	env1.totalWidthPx = w1;
	env1.totalHeightPx = h1;
	env1.isH = true;
	var rect1 = new ResRectangle(0, 0, w1, h1);
	this.group1.render(env1, rect1, rect1, null, true);
	var w2 = Math.round(this.group2.widthPx());
	var h2 = Math.round(this.group2.heightPx());
	var canvas2 = ResCanvas.make(w2, h2);
	var env2 = new ResEnv(this.resContext);
	env2.ctx = canvas2.getContext("2d");
	env2.mirror = false;
	env2.totalWidthPx = w2;
	env2.totalHeightPx = h2;
	env2.isH = true;
	var rect2 = new ResRectangle(0, 0, w2, h2);
	this.group2.render(env2, rect2, rect2, null, true);
	if (this.fix ||
		this.place === "ts" ||
		this.place === "te" ||
		this.place === "bs" ||
		this.place === "be")
		return this.insertFix(env1.ctx, canvas2, rect1, rect2, this.x, this.y, this.resContext.scaleInit);
	else 
		return this.insertFloat(env1.ctx, canvas2, rect1, rect2);
};
ResInsert.prototype.insertFix =
function(ctx1, canvas2, rect1, rect2, fixX, fixY, scale) {
	var canvas = ResCanvas.make(rect1.width, rect1.height);
	var ctx = canvas.getContext("2d");
	var x = 0;
	var y = 0;
	var scaleMax = 1;
	for (var step = this.resContext.scaleStep; 
			step >= this.resContext.scaleStepMin; 
			step *= this.resContext.scaleStepFactor) {
		for (var newScale = scale*(1+step); newScale <= scaleMax; newScale *= 1+step) {
			var w = Math.round(rect2.width * newScale);
			var h = Math.round(rect2.height * newScale);
			if (this.place === "ts" || this.place === "bs" || this.place === "s")
				x = 0;
			else if (this.place === "te" || this.place === "be" || this.place === "e")
				x = rect1.width - w;
			else
				x = fixX * rect1.width - w/2;
			if (this.place === "ts" || this.place === "te" || this.place === "t")
				y = 0;
			else if (this.place === "bs" || this.place === "be" || this.place === "b")
				y = rect1.height - h;
			else
				y = fixY * rect1.height - h/2;
			if (x < 0 || x+w > rect1.width || y < 0 || y+h > rect1.height) {
				scaleMax = newScale;
				break;
			}
			ctx.clearRect(0, 0, rect1.width, rect1.height);
			ResCanvas.drawWithAura(ctx, canvas2, x, y, w, h, this.sepPx());
			if (ResCanvas.disjoint(ctx1, ctx, rect1.width, rect1.height)) 
				scale = newScale;
			else {
				scaleMax = newScale;
				break;
			} 
		}
	}
	return {x: x, y: y, scale: scale};
};
ResInsert.prototype.insertFloat =
function(ctx1, canvas2, rect1, rect2) {
	var fixX = this.x;
	var fixY = this.y;
	var bestParams = this.insertFix(ctx1, canvas2, rect1, rect2, fixX, fixY, this.resContext.scaleInit);
	var xMove = rect2.width/rect1.width/2;
	var yMove = rect2.height/rect1.height/2;
	while (xMove > this.resContext.moveStepMin && yMove > this.resContext.moveStepMin) {
		var changed = true;
		while (changed) {
			changed = false;
			if (this.place === "t" || this.place === "b" || this.place === "") {
				var leftParams = this.insertFix(ctx1, canvas2, rect1, rect2, fixX - xMove, fixY, bestParams.scale);
				if (leftParams.scale > bestParams.scale) {
					fixX -= xMove;
					bestParams = leftParams;
					changed = true;
				}
				var rightParams = this.insertFix(ctx1, canvas2, rect1, rect2, fixX + xMove, fixY, bestParams.scale);
				if (rightParams.scale > bestParams.scale) {
					fixX += xMove;
					bestParams = rightParams;
					changed = true;
				}
			}
			if (this.place === "s" || this.place === "e" || this.place === "") {
				var upParams = this.insertFix(ctx1, canvas2, rect1, rect2, fixX, fixY - yMove, bestParams.scale);
				if (upParams.scale > bestParams.scale) {
					fixY -= yMove;
					bestParams = upParams;
					changed = true;
				}
				var downParams = this.insertFix(ctx1, canvas2, rect1, rect2, fixX, fixY + yMove, bestParams.scale);
				if (downParams.scale > bestParams.scale) {
					fixY += yMove;
					bestParams = downParams;
					changed = true;
				}
			}
		}
		xMove *= this.resContext.moveStepFactor;
		yMove *= this.resContext.moveStepFactor;
	}
	return bestParams;
};
ResInsert.prototype.render =
function(env, rect, shadeRect, clip, fitting) {
	var box = new ResRectangle(0, 0, this.widthPx(), this.heightPx());
	rect = rect.center(box);
	this.group1.render(env, rect, shadeRect, clip, fitting);
	var w2 = this.group2.widthPx();
	var h2 = this.group2.heightPx();
	var rect2 = new ResRectangle(rect.x + this.dynX, rect.y + this.dynY, w2, h2);
	this.group2.render(env, rect2, rect2, clip, fitting);
};
ResInsert.prototype.renderNotes =
function(env) {
	this.group1.renderNotes(env);
	this.group2.renderNotes(env);
};

ResModify.prototype.render =
function(env, rect, shadeRect, clip, fitting) {
	var box = new ResRectangle(0, 0, this.widthPx(), this.heightPx());
	rect = rect.center(box);
	var beforeShare = this.before / (this.before + 1 + this.after);
	var afterShare = this.after / (this.before + 1 + this.after);
	var aboveShare = this.above / (this.above + 1 + this.below);
	var belowShare = this.below / (this.above + 1 + this.below);
	var w = this.width === null ? this.group.widthPx() :
				this.resContext.emSizePx * this.dynScale * this.width;
	var h = this.height === null ? this.group.heightPx() :
				this.resContext.emSizePx * this.dynScale * this.height;
	var beforePart = beforeShare * w;
	var afterPart = afterShare * w;
	var abovePart = aboveShare * h;
	var belowPart = belowShare * h;
	if (this.omit && (beforePart > 0 || afterPart > 0 ||
				abovePart > 0 || belowPart > 0)) {
		if (clip === null)
			clip = rect;
		else
			clip = clip.intersect(rect);
	}
	rect = new ResRectangle(rect.x - beforePart, rect.y - abovePart, w, h);
	this.group.render(env, rect, shadeRect, clip, fitting);
	if (!fitting)
		ResShading.shadeBasicgroup(env, this, shadeRect); 
};
ResModify.prototype.renderNotes =
function(env) {
	this.group.renderNotes(env);
};

ResNote.prototype.render =
function(env, rect) {
	var str = this.displayString();
	var size = env.resContext.noteSizePx;
	var mirror = env.mirror;
	var color = this.color !== null ? this.color : env.resContext.noteColor;
	var margin = env.resContext.noteMargin;
	var testRect = ResCanvas.glyphRect(str, size, 1, "HieroglyphicPlain", 0, mirror);
	var fullWidth = testRect.width + 2*margin;
	var fullHeight = testRect.height + 2*margin;
	while (true) {
		var topRect = new ResRectangle(rect.x, rect.y-fullHeight/2,
				Math.max(fullWidth, rect.width), fullHeight);
		var bottomRect = new ResRectangle(rect.x, rect.y+rect.height-fullHeight/2,
				Math.max(fullWidth, rect.width), fullHeight);
		var leftRect = new ResRectangle(rect.x-fullWidth/2, rect.y,
				fullWidth, Math.max(fullHeight, rect.height));
		var rightRect = new ResRectangle(rect.x+rect.width-fullWidth/2, rect.y,
				fullWidth, Math.max(fullHeight, rect.height));
		if (env.isH) 
			var p = this.findFreeRectHor(env, topRect, fullWidth) || 
					this.findFreeRectHor(env, bottomRect, fullWidth) || 
					this.findFreeRectVert(env, leftRect, fullHeight) || 
					this.findFreeRectVert(env, rightRect, fullHeight);
		else
			var p = this.findFreeRectVert(env, leftRect, fullHeight) || 
					this.findFreeRectVert(env, rightRect, fullHeight)  || 
					this.findFreeRectHor(env, topRect, fullWidth) || 
					this.findFreeRectHor(env, bottomRect, fullWidth);
		if (p) {
			ResCanvas.printGlyph(env.ctx, p.x+margin, p.y+margin, testRect, str, size, 1, 
				"HieroglyphicPlain", color, 0, mirror);
			env.ensureRect(new ResRectangle(p.x+margin, p.y+margin, testRect.width, testRect.height));
			break;
		}
		rect = new ResRectangle(rect.x - testRect.width/2, rect.y - testRect.height/2, 
						rect.width + testRect.width, rect.height + testRect.height);
	}
};
ResNote.prototype.findFreeRectHor =
function(env, rect, width) {
	if (env.mirror)
		rect = rect.mirror(env.totalWidthPx);
	var x = Math.round(rect.x);
	var y = Math.round(rect.y);
	var halfX = Math.round(rect.x + rect.width/2 - width/2);
	var halfWidth = Math.round(rect.width/2 + width/2);
	var height = Math.round(rect.height);
	var left = new ResRectangle(x, y, halfWidth, height);
	var right = new ResRectangle(halfX, y, halfWidth, height);
	var pos = ResCanvas.findFreeRectRightLeft(env.ctx, env.totalWidthPx, env.totalHeightPx, left, width) ||
			ResCanvas.findFreeRectLeftRight(env.ctx, env.totalWidthPx, env.totalHeightPx, right, width);
	if (pos && env.mirror)
		pos = new ResPoint(env.totalWidthPx - pos.x - width, pos.y);
	return pos;
};
ResNote.prototype.findFreeRectVert =
function(env, rect, height) {
	if (env.mirror)
		rect = rect.mirror(env.totalWidthPx);
	var x = Math.round(rect.x);
	var y = Math.round(rect.y);
	var halfY = Math.round(rect.y + rect.height/2 - height/2);
	var halfHeight = Math.round(rect.height/2 + height/2);
	var width = Math.round(rect.width);
	var top = new ResRectangle(x, y, width, halfHeight);
	var bottom = new ResRectangle(x, halfY, width, halfHeight);
	var pos = ResCanvas.findFreeRectBottomTop(env.ctx, env.totalWidthPx, env.totalHeightPx, top, height) ||
			ResCanvas.findFreeRectTopBottom(env.ctx, env.totalWidthPx, env.totalHeightPx, bottom, height);
	if (pos && env.mirror)
		pos = new ResPoint(env.totalWidthPx - pos.x - width, pos.y);
	return pos;
};
