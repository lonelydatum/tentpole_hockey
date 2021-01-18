(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var banner = document.getElementById('banner');
var size = { w: banner.offsetWidth, h: banner.offsetHeight };

TweenLite.defaultEase = Power2.easeInOut;

function frameEnd() {
	var tl = new TimelineMax();

	tl.set(".frame2", { opacity: 1 });
	tl.from(".bg2", .2, { opacity: 0 });

	tl.to(".phone", .3, { y: 0, opacity: 1 }, "+=.3");
	tl.from(".ill", .3, { scale: 0 });

	tl.from(".t2", .01, { opacity: 0 }, "+=.3");
	tl.from(".cta1", .01, { opacity: 0 }, "+=1.5");
	tl.to(".cta1", .01, { opacity: 0 }, "+=2.5");
	tl.from(".cta2", .2, { opacity: 0 }, "+=.2");

	return tl;
}

function frameEndPool() {
	var tl = new TimelineMax();

	tl.set(".frame2", { opacity: 1 });
	tl.from(".bg2", .2, { opacity: 0 });

	tl.to(".phone", .3, { y: 0, opacity: 1 }, "+=.3");
	tl.from(".ill", .3, { scale: 0 });

	tl.from(".t2", .01, { opacity: 0 }, "+=.3");
	tl.from(".cta1", .01, { opacity: 0 }, "+=1.5");
	tl.to([".t2", ".cta1"], .01, { opacity: 0 }, "+=2");
	tl.from(".t3", .2, { opacity: 0 }, "+=.2");

	return tl;
}

function transformOrigin(id, percent) {
	var el = document.getElementById(id);
	var w = el.offsetWidth;
	var h = el.offsetHeight;
	var transformOrigin = {
		x: w * percent.w,
		y: h * percent.h
	};
	var pos = {
		x: -transformOrigin.x / 2,
		y: -transformOrigin.y / 2
	};

	var result = _extends({
		transformOrigin: transformOrigin.x + "px " + transformOrigin.y + "px"
	}, pos);

	return result;
}

function init(id) {
	void 0;
	TweenLite.defaultEase = Power3.easeOut;
	var tl = new TimelineMax();
	tl.set(".frame1", { opacity: 1 });
	var w = size.w;
	var h = size.h;

	switch (id) {
		case "970x250":
			tl.set(".ill", { transformOrigin: w * .75 + "px " + h + "px", x: 0, y: 0 });
			tl.set(".phone", { y: "+=200" });
			break;

		case "300x250":

			tl.set(".ill", { transformOrigin: w / 2 + "px " + h + "px" });
			tl.set(".phone", { y: 200 });
			break;

		case "300x600":
			tl.set(".ill", { transformOrigin: w / 2 + "px " + h / 2 + "px", x: 0, y: 0 });
			tl.set(".phone", { y: "+=100", opacity: 0 });
			break;

		case "320x50":
			tl.set(".ill", transformOrigin("ill", { w: .375, h: 1 }));
			break;

		case "728x90":
			tl.set(".ill", { transformOrigin: w * .75 + "px " + h + "px", x: 0, y: 0 });
			tl.set(".phone", { y: "+=200" });
			break;

		default:
			tl.set(".ill", { transformOrigin: w / 2 + "px " + h + "px" });
			break;
	}
	return tl;
}

var starttime = .7;
var endTime = 1.6;
var endTimeShot = 2;

exports.size = size;
exports.frameEnd = frameEnd;
exports.frameEndPool = frameEndPool;
exports.init = init;
exports.starttime = starttime;
exports.endTime = endTime;
exports.endTimeShot = endTimeShot;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function player() {
	var speed = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];

	var tl = new TimelineMax();

	tl.add("start", 0);
	var total = 4;
	// for(let i=total; i>0;i--){
	for (var i = 1; i <= total; i++) {
		var percent = i / total * .17;

		var obj = { x: 0, y: 0, ease: Power4.easeOut };
		if (i !== total) {
			obj = _extends({}, obj, { opacity: 0 });
		}
		void 0;
		tl.to("#player" + i, .8 * speed, obj, "start+=" + percent);
	}

	TweenLite.to(".ball", 1.2 * speed, { x: 0, y: 0, ease: Power4.easeOut, delay: .17 });
	return tl;
}

exports.player = player;

},{}],3:[function(require,module,exports){
'use strict';

var _commonJsCommonJs = require('../../_common/js/common.js');

var _commonJsStrikerJs = require('../../_common/js/striker.js');

function start() {

	var tl = (0, _commonJsCommonJs.init)("970x250");
	// return

	TweenMax.to(".player2", 1, { x: 0, y: 0 });
	TweenMax.to(".puck", 1.8, { x: 0, y: 0 });
	(0, _commonJsStrikerJs.player)(1.5);
	tl.from(".t1a", .2, { x: "-=450", opacity: 0 }, _commonJsCommonJs.starttime);
	tl.from(".t1b", .01, { opacity: 0 }, "+=.5");

	tl.add((0, _commonJsCommonJs.frameEnd)(), '+=' + _commonJsCommonJs.endTime);
}

start();

module.exports = {};

},{"../../_common/js/common.js":1,"../../_common/js/striker.js":2}]},{},[3])


//# sourceMappingURL=main.js.map
