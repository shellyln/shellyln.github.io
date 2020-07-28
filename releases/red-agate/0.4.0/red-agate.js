(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react-dom/server"));
	else if(typeof define === 'function' && define.amd)
		define(["react-dom/server"], factory);
	else if(typeof exports === 'object')
		exports["RedAgate"] = factory(require("react-dom/server"));
	else
		root["RedAgate"] = factory(root["ReactDOMServer"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_react_dom_server__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../red-agate-barcode/modules/barcode/BarcodeBase.js":
/*!***********************************************************!*\
  !*** ../red-agate-barcode/modules/barcode/BarcodeBase.js ***!
  \***********************************************************/
/*! exports provided: barcodeBasePropsDefault, BarcodeBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "barcodeBasePropsDefault", function() { return barcodeBasePropsDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarcodeBase", function() { return BarcodeBase; });
/* harmony import */ var red_agate_modules_red_agate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! red-agate/modules/red-agate */ "../red-agate/modules/red-agate/index.js");
/* harmony import */ var red_agate_svg_canvas_modules_drawing_canvas_SvgCanvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! red-agate-svg-canvas/modules/drawing/canvas/SvgCanvas */ "../red-agate-svg-canvas/modules/drawing/canvas/SvgCanvas.js");
/* harmony import */ var red_agate_modules_red_agate_tags_Shape__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! red-agate/modules/red-agate/tags/Shape */ "../red-agate/modules/red-agate/tags/Shape.js");
// Copyright (c) 2017, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln



const barcodeBasePropsDefault = Object.assign({}, red_agate_modules_red_agate_tags_Shape__WEBPACK_IMPORTED_MODULE_2__["shapePropsDefault"], {
  fillColor: "black",
  font: "normal 3.5px 'OCRB'",
  rotation: 0,
  height: 6.35,
  quietWidth: 2.54,
  quietHeight: 0.66,
  unit: "mm",
  drawText: true,
  useRawDataAsText: false,
  textHeight: 3.55
});
class BarcodeBase extends red_agate_modules_red_agate_tags_Shape__WEBPACK_IMPORTED_MODULE_2__["Shape"] {
  constructor(props, charactersMap) {
    super(Object.assign({}, barcodeBasePropsDefault, props));
    this.charactersMap = charactersMap;
  }

  toImgTag() {
    return Object(red_agate_modules_red_agate_tags_Shape__WEBPACK_IMPORTED_MODULE_2__["toImgTag"])(this);
  }

  toElementStyle() {
    return Object(red_agate_modules_red_agate_tags_Shape__WEBPACK_IMPORTED_MODULE_2__["toElementStyle"])(this);
  }

  toDataUrl() {
    return Object(red_agate_modules_red_agate_tags_Shape__WEBPACK_IMPORTED_MODULE_2__["toDataUrl"])(this);
  }

  toSvg() {
    return Object(red_agate_modules_red_agate_tags_Shape__WEBPACK_IMPORTED_MODULE_2__["toSvg"])(this);
  }

  toRendered() {
    return red_agate_modules_red_agate__WEBPACK_IMPORTED_MODULE_0__["renderAsHtml_noDefer"](this);
  }

  render(contexts, children) {
    let canvas = this.getContext(contexts, red_agate_modules_red_agate_tags_Shape__WEBPACK_IMPORTED_MODULE_2__["CONTEXT_SVG_CANVAS"]);
    const contextHasCanvas = Boolean(canvas);

    if (!contextHasCanvas) {
      canvas = new red_agate_svg_canvas_modules_drawing_canvas_SvgCanvas__WEBPACK_IMPORTED_MODULE_1__["SvgCanvas"]();
      this.setContext(contexts, red_agate_modules_red_agate_tags_Shape__WEBPACK_IMPORTED_MODULE_2__["CONTEXT_SVG_CANVAS"], canvas);
      super.beforeRender(contexts);
    }

    let data = this.props.data || "";
    let text = this.props.text;
    const originalData = data;
    let heightData, labelText, startChar, stopChar;
    ({
      data,
      heightData,
      labelText,
      startChar,
      stopChar
    } = this.encodeData(data));
    const cdChar = this.calcCheckDigit(data); // tw: total width (quiet + data + start + stop + cd)
    // th: total height (quiet + bar + text)

    const {
      tw,
      th
    } = this.calcSymbolSize(data, startChar, stopChar, cdChar);
    data = `${startChar}${data}${cdChar}${stopChar}`;

    if (labelText !== void 0) {
      text = labelText;
    } else {
      if (text === void 0 || text === null) text = this.props.text;
      if (text === void 0 || text === null) text = originalData;
    }

    let rotation = this.props.rotation === void 0 || this.props.rotation === null ? 0 : Math.floor(this.props.rotation / 90) % 4;
    if (rotation < 0) rotation += 4;

    switch (rotation) {
      case 1:
        canvas.rotate(Math.PI * 1.5);
        canvas.translate(-tw, 0);
        break;

      case 2:
        canvas.rotate(Math.PI);
        canvas.translate(-tw, -th);
        break;

      case 3:
        canvas.rotate(Math.PI * 0.5);
        canvas.translate(0, -th);
        break;
    }

    if (this.props.drawText) {
      canvas.beginGroup();
    }

    if (this.isHeightModulated) {
      this.renderHeightModulatedBarData(canvas, tw, th, data, heightData, text);
    } else {
      this.renderBarData(canvas, tw, th, data, heightData, text);
    }

    this.renderAdditional(canvas, tw, th, data, text);

    if (this.props.drawText) {
      canvas.endGroup();
      canvas.beginGroup();
    }

    if (this.props.drawText) {
      if (this.props.font) canvas.font = this.props.font;
      this.renderText(canvas, tw, th, data, text);
    }

    if (this.props.drawText) {
      canvas.endGroup();
    }

    if (contextHasCanvas) {
      return ``;
    } else {
      super.afterRender(contexts);
      this.unsetContext(contexts, red_agate_modules_red_agate_tags_Shape__WEBPACK_IMPORTED_MODULE_2__["CONTEXT_SVG_CANVAS"]);
      const imageWidth = tw + (this.props.x || 0);
      const imageHeight = th + (this.props.y || 0);
      return Object(red_agate_modules_red_agate_tags_Shape__WEBPACK_IMPORTED_MODULE_2__["renderSvgCanvas"])(this.props, canvas, imageWidth, imageHeight);
    }
  } // total width (quiet + data + start + stop + cd)
  // total height (quiet + bar + text)


  calcSymbolSize(data, startChar, stopChar, cdChar) {
    return {
      // total width (quiet + data + start + stop + cd)
      tw: 0,
      // total height (quiet + bar + text)
      th: 0
    };
  }

  calcCheckDigit(data) {
    return "";
  }

  encodeData(data) {
    return {
      data,
      startChar: "",
      stopChar: ""
    };
  }

  getBarSpaceWidth() {
    return [];
  }

  getBarSpaceHeight() {
    const props = this.props;
    return [[{
      offset: 0,
      height: props.height
    }]];
  }

  getRenderStartCoodinate(data, text) {
    const props = this.props;
    return {
      rx: props.quietWidth,
      ry: props.quietHeight
    };
  }

  get isHeightModulated() {
    return false;
  }

  renderBarData(canvas, tw, th, data, heightData, text) {
    const bw = this.getBarSpaceWidth();
    const vseg = this.getBarSpaceHeight(); // tslint:disable-next-line:prefer-const

    let {
      rx,
      ry
    } = this.getRenderStartCoodinate(data, text);

    for (let i = 0; i < data.length; i++) {
      const cmap = this.charactersMap.get(data[i]);

      if (!cmap) {
        throw new Error("BarcodeBase#renderBarData: character is out of range.");
      }

      const pattern = cmap.pattern;
      let bar = true;
      let dx = 0;

      for (let j = 0; j < pattern.length; j++) {
        const c = pattern[j];

        switch (c) {
          case "0":
          case "1":
          case "2":
          case "3":
          case "4":
          case "5":
          case "6":
          case "7":
          case "8":
          case "9":
            // "0" is character gap
            {
              const w = bw[Number.parseInt(c, 10)];

              if (bar) {
                const ss = heightData === void 0 ? vseg[0] : vseg[Number.parseInt(heightData[i], 10)];

                for (const seg of ss) {
                  canvas.rect(rx + dx, ry + seg.offset, w, seg.height);
                }
              }

              dx += w;
              bar = !bar;
            }
            break;

          case "+":
            bar = true;
            break;

          case "-":
            bar = false;
            break;
        }
      }

      rx += dx;
    }

    canvas.fill();
    canvas.beginPath();
  }

  renderHeightModulatedBarData(canvas, tw, th, data, heightData, text) {
    const bw = this.getBarSpaceWidth();
    const w = bw[1];
    const vseg = this.getBarSpaceHeight(); // tslint:disable-next-line:prefer-const

    let {
      rx,
      ry
    } = this.getRenderStartCoodinate(data, text);

    for (let i = 0; i < data.length; i++) {
      const pattern = this.charactersMap.get(data[i]).pattern;
      const bar = true;
      let dx = 0;

      for (let j = 0; j < pattern.length; j++) {
        const c = pattern[j];

        switch (c) {
          case "1":
          case "2":
          case "3":
          case "4":
          case "5":
          case "6":
          case "7":
          case "8":
          case "9":
            {
              const ss = vseg[Number.parseInt(c, 10)];

              for (const seg of ss) {
                canvas.rect(rx + dx, ry + seg.offset, w, seg.height);
              }
            }
          // FALL THRU

          case "0":
            // "0" is space
            dx += w * 2;
            break;
        }
      }

      rx += dx;
    }

    canvas.fill();
    canvas.beginPath();
  }

  renderAdditional(canvas, tw, th, data, text) {}

  renderText(canvas, tw, th, data, text) {
    const props = this.props;
    canvas.textAlign = "center";
    canvas.textBaseline = "alphabetic";
    canvas.fillText(props.useRawDataAsText ? data : text, tw / 2, th - props.quietHeight);
  }

}

/***/ }),

/***/ "../red-agate-barcode/modules/barcode/Code128.js":
/*!*******************************************************!*\
  !*** ../red-agate-barcode/modules/barcode/Code128.js ***!
  \*******************************************************/
/*! exports provided: code128PropsDefault, Code128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "code128PropsDefault", function() { return code128PropsDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Code128", function() { return Code128; });
/* harmony import */ var _BarcodeBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BarcodeBase */ "../red-agate-barcode/modules/barcode/BarcodeBase.js");
/* harmony import */ var _data_Code128_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/Code128.data */ "../red-agate-barcode/modules/barcode/data/Code128.data.js");
// Copyright (c) 2017, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln


const code128PropsDefault = Object.assign({}, _BarcodeBase__WEBPACK_IMPORTED_MODULE_0__["barcodeBasePropsDefault"], {
  elementWidth: 0.33,
  useLatin1: false,
  raw: false
});
class Code128 extends _BarcodeBase__WEBPACK_IMPORTED_MODULE_0__["BarcodeBase"] {
  constructor(props) {
    super(Object.assign({}, code128PropsDefault, props), _data_Code128_data__WEBPACK_IMPORTED_MODULE_1__["charactersMap"]);
  }

  calcSymbolSize(data, startChar, stopChar, cdChar) {
    const props = this.props; // module width (bar + space + gap)

    const mw = props.elementWidth * 11;
    return {
      // total width (quiet + data + start + stop + cd)
      tw: props.quietWidth * 2 + mw * data.length + props.elementWidth * 13,
      // total height (quiet + bar + text)
      th: props.quietHeight * 2 + props.height + (props.drawText ? props.textHeight : 0)
    };
  }

  calcMod103Checksum(data) {
    let v = _data_Code128_data__WEBPACK_IMPORTED_MODULE_1__["charactersMap"].get(data[0]);

    if (v === void 0) {
      throw new Error("code128: character is out of range.");
    }

    let s = v.index % 103;

    for (let i = 1; i < data.length; i++) {
      v = _data_Code128_data__WEBPACK_IMPORTED_MODULE_1__["charactersMap"].get(data[i]);

      if (v === void 0) {
        throw new Error("code128: character is out of range.");
      }

      s = (s + v.index * i) % 103;
    }

    return s;
  }

  encodeData(data) {
    if (this.props.raw) {
      return {
        data,
        startChar: "",
        stopChar: "\x6A"
      };
    }

    let d = "";
    let cLimit = 4;
    let mode = null; // 0: A, 1: B, 2: C

    let scanned = 0;

    const detC = i => {
      let j = i + 1;
      let continuing = 1;

      for (; j < data.length; j++) {
        const c2 = data.charCodeAt(j);

        if (0x30 <= c2 && c2 <= 0x39) {
          continuing++;
        } else if (c2 === 0x80) {
          if (continuing % 2) break;
        } else {
          break;
        }
      }

      if (j >= data.length && j - i >= 4) {
        return true;
      } else {
        return j - i >= cLimit ? true : false;
      }
    };

    const encodeC = i => {
      // code C
      d += mode === null ? "\x69" : "\x63"; // start / change mode

      let j = i,
          v = 0,
          continuing = 0;

      for (; j < data.length; j++) {
        let c2 = data.charCodeAt(j);

        if (0x30 <= c2 && c2 <= 0x39) {
          v = v * 10 + (c2 - 0x30);
          continuing++;

          if (continuing % 2 === 0) {
            d += String.fromCharCode(v);
            v = 0;
          }
        } else {
          if (this.props.useLatin1 && c2 > 127) {
            c2 -= 128;
          }

          if (c2 === 0x80) {
            if (continuing % 2) {
              break;
            } else {
              d += "\x66"; // FNC1
            }
          } else {
            break;
          }
        }
      }

      if (j < data.length || continuing % 2) {
        mode = detAB(j);
        d += mode === 0 ? "\x65" : "\x64";
      }

      if (continuing % 2) {
        const z = _data_Code128_data__WEBPACK_IMPORTED_MODULE_1__["fullAsciiMap"].get(0x30 + v);

        if (z === void 0) {
          throw new Error("code128: character is out of range.");
        }

        if (mode === null) {
          throw new Error("code128: mode === null. Assertion failed.");
        }

        d += z[mode];
      }

      return j;
    };

    const detAB = i => {
      let cA = 0,
          cB = 0;
      let j = Math.max(i, scanned);

      for (; j < data.length; j++) {
        let c2 = data.charCodeAt(j);

        if (this.props.useLatin1 && c2 > 127) {
          c2 -= 128;
        }

        const z = _data_Code128_data__WEBPACK_IMPORTED_MODULE_1__["fullAsciiMap"].get(c2);

        if (z === void 0) {
          throw new Error("code128: character is out of range.");
        }

        const bA = z[0];
        const bB = z[1];

        if (bA === void 0 || bB === void 0) {
          break;
        }
      }

      const N = Math.min(data.length, j + 6);

      for (; j < N; j++) {
        let c2 = data.charCodeAt(j);

        if (this.props.useLatin1 && c2 > 127) {
          c2 -= 128;
        }

        const z = _data_Code128_data__WEBPACK_IMPORTED_MODULE_1__["fullAsciiMap"].get(c2);

        if (z === void 0) {
          throw new Error("code128: character is out of range.");
        }

        const bA = z[0];
        if (bA === void 0) cA++;
        const bB = z[1];
        if (bB === void 0) cB++;
      }

      scanned = j;
      const mode2 = mode === null ? 1 : mode;
      if (cA < cB) return cB - cA < 2 ? mode2 : 0;else if (cA > cB) return cA - cB < 2 ? mode2 : 1;else return mode2;
    };

    for (let i = 0; i < data.length;) {
      const ci = data.charCodeAt(i);
      let done = false,
          latin1 = false;

      if (0x30 <= ci && ci <= 0x39 || !this.props.useLatin1 && ci === 0x80 || this.props.useLatin1 && ci === 0x100) {
        if (detC(i)) {
          i = encodeC(i);
          done = true;
        }

        cLimit = 6;
      }

      if (!done) {
        let c2 = data.charCodeAt(i);

        if (this.props.useLatin1 && c2 > 127) {
          c2 -= 128;

          if (128 <= c2 && c2 <= 135) {
            // FNC1-4, CODE A-C, SHIFT A-B
            if (c2 === 131) {
              latin1 = true; // escape FNC4
            }
          } else {
            latin1 = true;
          }
        }

        const z = _data_Code128_data__WEBPACK_IMPORTED_MODULE_1__["fullAsciiMap"].get(c2);

        if (z === void 0) {
          throw new Error("code128: character is out of range.");
        }

        let b = mode !== null ? z[mode] : void 0;

        if (b === void 0) {
          const newMode = detAB(i);

          if (mode === newMode) {
            d += "\x62"; // shift

            b = z[(mode + 1) % 2];
          } else {
            if (mode === null) d += mode === 0 ? "\x67" : "\x68"; // start
            else d += mode === 0 ? "\x64" : "\x65"; // change mode

            mode = newMode;
            b = z[mode];
          }
        }

        if (b === null) {
          throw new Error("code128: character is out of range.");
        }

        if (latin1) {
          const fnc4 = _data_Code128_data__WEBPACK_IMPORTED_MODULE_1__["fullAsciiMap"].get(131);

          if (fnc4 === void 0) {
            throw new Error("code128: character is out of range.");
          }

          if (mode === null) {
            throw new Error("code128: mode === null. Assertion failed.");
          }

          d += fnc4[mode]; // FNC4
        }

        d += b;
        i++;
      }
    }

    d += String.fromCharCode(this.calcMod103Checksum(d));
    return {
      data: d,
      startChar: "",
      stopChar: "\x6A"
    };
  }

  getBarSpaceWidth() {
    const props = this.props;
    const w = props.elementWidth;
    return [0, w, w * 2, w * 3, w * 4];
  }

}

/***/ }),

/***/ "../red-agate-barcode/modules/barcode/Code39.js":
/*!******************************************************!*\
  !*** ../red-agate-barcode/modules/barcode/Code39.js ***!
  \******************************************************/
/*! exports provided: code39PropsDefault, Code39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "code39PropsDefault", function() { return code39PropsDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Code39", function() { return Code39; });
/* harmony import */ var _BarcodeBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BarcodeBase */ "../red-agate-barcode/modules/barcode/BarcodeBase.js");
/* harmony import */ var _data_Code39_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/Code39.data */ "../red-agate-barcode/modules/barcode/data/Code39.data.js");
// Copyright (c) 2017, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln


const code39PropsDefault = Object.assign({}, _BarcodeBase__WEBPACK_IMPORTED_MODULE_0__["barcodeBasePropsDefault"], {
  addCheckDigit: true,
  fullAscii: false,
  narrowWidth: 0.33,
  wideWidth: 0.66,
  charGapWidth: void 0
});
class Code39 extends _BarcodeBase__WEBPACK_IMPORTED_MODULE_0__["BarcodeBase"] {
  constructor(props) {
    super(Object.assign({}, code39PropsDefault, props), _data_Code39_data__WEBPACK_IMPORTED_MODULE_1__["charactersMap"]);
  }

  calcSymbolSize(data, startChar, stopChar, cdChar) {
    const props = this.props;
    const gw = props.charGapWidth || props.narrowWidth; // module width (bar + space + gap)

    const mw = props.narrowWidth * 6 + props.wideWidth * 3 + gw;
    return {
      // total width (quiet + data + start + stop + cd)
      tw: props.quietWidth * 2 + mw * (data.length + 2 + (props.addCheckDigit ? 1 : 0)) - gw,
      // total height (quiet + bar + text)
      th: props.quietHeight * 2 + props.height + (props.drawText ? props.textHeight : 0)
    };
  }

  calcCheckDigit(data) {
    let cdChar = "";

    if (this.props.addCheckDigit) {
      let cd = 0;

      for (let i = 0; i < data.length; i++) {
        const v = _data_Code39_data__WEBPACK_IMPORTED_MODULE_1__["charactersMap"].get(data[i]);

        if (v === void 0) {
          throw new Error("code39: character is out of range.");
        }

        cd = (cd + v.index) % 43;
      }

      const cdch = _data_Code39_data__WEBPACK_IMPORTED_MODULE_1__["reverseMap"].get(cd);

      if (cdch === void 0) {
        throw new Error("code39 (trace): checkdigit is out of range.");
      }

      cdChar = cdch;
    }

    return cdChar;
  }

  encodeData(data) {
    let d = data;

    if (this.props.fullAscii) {
      d = "";

      for (let i = 0; i < data.length; i++) {
        const c = _data_Code39_data__WEBPACK_IMPORTED_MODULE_1__["fullAsciiMap"].get(data.charCodeAt(i));

        if (c === void 0) {
          throw new Error("code39 fullascii: character is out of range.");
        }

        d += c;
      }
    }

    return {
      data: d,
      startChar: "*",
      stopChar: "*"
    };
  }

  getBarSpaceWidth() {
    const props = this.props;
    const gw = props.charGapWidth || props.narrowWidth;
    return [gw, props.narrowWidth, props.wideWidth];
  }

}

/***/ }),

/***/ "../red-agate-barcode/modules/barcode/Ean.js":
/*!***************************************************!*\
  !*** ../red-agate-barcode/modules/barcode/Ean.js ***!
  \***************************************************/
/*! exports provided: eanPropsDefault, EanBase, Ean13, Gtin13, Ean8, Gtin8, Ean5, Ean2, UpcA, UpcE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eanPropsDefault", function() { return eanPropsDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EanBase", function() { return EanBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ean13", function() { return Ean13; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gtin13", function() { return Gtin13; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ean8", function() { return Ean8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gtin8", function() { return Gtin8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ean5", function() { return Ean5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ean2", function() { return Ean2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpcA", function() { return UpcA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpcE", function() { return UpcE; });
/* harmony import */ var _BarcodeBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BarcodeBase */ "../red-agate-barcode/modules/barcode/BarcodeBase.js");
/* harmony import */ var _data_Ean_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/Ean.data */ "../red-agate-barcode/modules/barcode/data/Ean.data.js");
// Copyright (c) 2017, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln


const eanPropsDefault = Object.assign({}, _BarcodeBase__WEBPACK_IMPORTED_MODULE_0__["barcodeBasePropsDefault"], {
  smallFont: "normal 3.0px 'OCRB'",
  elementWidth: 0.33,
  guardExtHeight: 2
});
class EanBase extends _BarcodeBase__WEBPACK_IMPORTED_MODULE_0__["BarcodeBase"] {
  constructor(props) {
    super(Object.assign({}, eanPropsDefault, props), _data_Ean_data__WEBPACK_IMPORTED_MODULE_1__["charactersMap"]);
  }

  get eanTypes() {
    throw new Error("EAN#eanTypes: abstract property");
  }

  calcSymbolSize(data, startChar, stopChar, cdChar) {
    const props = this.props;
    let len;
    let guard = 0;

    switch (this.eanTypes) {
      case "ean-13":
      case "upc-a":
        len = 12;
        guard = 11;
        break;

      case "ean-8":
        len = 8;
        guard = 11;
        break;

      case "ean-5":
        len = 5;
        guard = 13; // start + character separator

        break;

      case "upc-e":
        len = 6;
        guard = 10;
        break;

      case "ean-2":
        len = 2;
        guard = 7; // start + character separator

        break;

      default:
        throw new Error("bad data length");
    }

    return {
      // total width (quiet + data + cd + guard bar + center bar)
      tw: props.quietWidth * 2 + props.elementWidth * (7 * len + guard),
      // total height (quiet + bar + text)
      th: props.quietHeight * 2 + props.height + (props.drawText ? props.textHeight : 0)
    };
  }

  calcEanMod10W3Checksum(data) {
    let odd = 0,
        even = 0;

    for (let i = 0; i < data.length; i++) {
      // most right -> odd
      const z = this.charactersMap.get(data[data.length - 1 - i]);

      if (z === void 0) {
        throw new Error("EAN: character is out of range.");
      }

      if ((i + 1) % 2) {
        odd = (odd + z.index) % 10;
      } else {
        even = (even + z.index) % 10;
      }
    }

    return (10 - (odd * 3 + even) % 10) % 10;
  }

  calcEan5Checksum(data) {
    let s = 0;

    for (let i = 0; i < data.length; i++) {
      s = (s + Number.parseInt(data[i], 10) * (i % 2 ? 3 : 9)) % 10;
    }

    return s;
  }

  calcEan2Checksum(data) {
    return Number.parseInt(data, 10) % 4;
  }

  encodeData(data) {
    let originalData = data;
    let d = "";
    let hd = void 0;
    let text;

    if (this.eanTypes === "upc-a" || this.eanTypes === "upc-e") {
      switch (data.length) {
        case 12:
        case 11:
          // UPC-A
          data = "0" + data;
          break;
      }

      if (this.eanTypes === "upc-e") {
        let ma;

        switch (data.length) {
          case 13:
          case 12:
            {
              originalData = data.slice(0, 12); // tslint:disable-next-line:no-conditional-assignment

              if (ma = data.match(/^0([01])([0-9]{5})0{4}([5-9])/)) {
                // [01]XXXXX-0000[5-9] -> [01]XXXXX[5-9]
                data = `${ma[1]}${ma[2]}${ma[3]}`;
              } // tslint:disable-next-line:no-conditional-assignment
              else if (ma = data.match(/^0([01])([0-9]{4})0{5}([0-9])/)) {
                  // [01]XXXX0-0000N     -> [01]XXXXN4
                  data = `${ma[1]}${ma[2]}${ma[3]}4`;
                } // tslint:disable-next-line:no-conditional-assignment
                else if (ma = data.match(/^0([01])([0-9]{3})0{5}([0-9]{2})/)) {
                    // [01]XXX00-000NN     -> [01]XXXNN3
                    data = `${ma[1]}${ma[2]}${ma[3]}3`;
                  } // tslint:disable-next-line:no-conditional-assignment
                  else if (ma = data.match(/^0([01])([0-9]{2})([0-2])0{4}([0-9]{3})/)) {
                      // [01]XX[0-2]00-00NNN -> [01]XXNNN[0-2]
                      data = `${ma[1]}${ma[2]}${ma[4]}${ma[3]}`;
                    } else {
                      throw new Error("EAN: bad data format");
                    }

              const cd = this.calcEanMod10W3Checksum(originalData);
              originalData += cd;
              data += cd;
            }
            break;

          case 8:
          case 7:
            {
              if (!data.match(/^[01]/)) {
                throw new Error("EAN: bad data format");
              }

              switch (data[6]) {
                case "0":
                case "1":
                case "2":
                  // [01]XX[0-2]00-00NNN <- [01]XXNNN[0-2]
                  originalData = `0${data[0]}${data.slice(1, 3)}${data.slice(6, 7)}0000${data.slice(3, 6)}`;
                  break;

                case "3":
                  // [01]XXX00-000NN     <- [01]XXXNN3
                  originalData = `0${data[0]}${data.slice(1, 4)}00000${data.slice(4, 6)}`;
                  break;

                case "4":
                  // [01]XXXX0-0000N     <- [01]XXXXN4
                  originalData = `0${data[0]}${data.slice(1, 5)}00000${data.slice(5, 6)}`;
                  break;

                case "5":
                case "6":
                case "7":
                case "8":
                case "9":
                  // [01]XXXXX-0000[5-9] <- [01]XXXXX[5-9]
                  originalData = `0${data[0]}${data.slice(1, 6)}0000${data.slice(6, 7)}`;
                  break;

                default:
                  throw new Error("EAN: bad data format");
              }

              const cd = this.calcEanMod10W3Checksum(originalData);
              originalData += cd;
              data = data.slice(0, 7) + cd;
            }
            break;
        }
      }
    }

    switch (this.eanTypes) {
      case "ean-13":
      case "upc-a":
        {
          hd = "";
          text = data.slice(0, 12);
          d += "\x40";
          hd += "1";
          const z = this.charactersMap.get(String.fromCharCode(0x30 + Number.parseInt(data[0], 10)));

          if (z === void 0) {
            throw new Error("EAN: character is out of range.");
          }

          const eo = z.pattern;

          for (let i = 1; i < 7; i++) {
            const p = Number.parseInt(eo[i - 1], 10);
            d += String.fromCharCode(p * 0x10 + Number.parseInt(data[i], 10));
            if (this.eanTypes === "upc-a" && i === 1) hd += "1";else hd += "0";
          }

          d += "\x50";
          hd += "1";

          for (let i = 7; i < 12; i++) {
            d += String.fromCharCode(0x20 + Number.parseInt(data[i], 10));
            hd += "0";
          }

          const cd = this.calcEanMod10W3Checksum(text);
          text += String.fromCharCode(0x30 + cd);
          d += String.fromCharCode(0x20 + cd);
          if (this.eanTypes === "upc-a") hd += "1";else hd += "0";
          d += "\x60";
          hd += "1";
        }
        break;

      case "ean-8":
        {
          hd = "";
          text = data.slice(0, 7);
          d += "\x40";
          hd += "1";

          for (let i = 0; i < 4; i++) {
            d += String.fromCharCode(0x10 + Number.parseInt(data[i], 10));
            hd += "0";
          }

          d += "\x50";
          hd += "1";

          for (let i = 4; i < 7; i++) {
            d += String.fromCharCode(0x20 + Number.parseInt(data[i], 10));
            hd += "0";
          }

          const cd = this.calcEanMod10W3Checksum(text);
          text += String.fromCharCode(0x30 + cd);
          d += String.fromCharCode(0x20 + cd);
          hd += "0";
          d += "\x60";
          hd += "1";
        }
        break;

      case "upc-e":
        {
          hd = "";
          text = data;
          d += "\x92";
          hd += "1";
          const z = this.charactersMap.get(String.fromCharCode((data[0] === "0" ? 0xa0 : 0xb0) + Number.parseInt(data[7], 10)));

          if (z === void 0) {
            throw new Error("EAN: character is out of range.");
          }

          const eo = z.pattern;

          for (let i = 1; i < 7; i++) {
            const p = Number.parseInt(eo[i - 1], 10);
            d += String.fromCharCode(p * 0x10 + Number.parseInt(data[i], 10));
            hd += "0";
          }

          d += "\x93";
          hd += "1";
        }
        break;

      case "ean-5":
        {
          text = data.slice(0, 5);
          d += "\x90";
          const z = this.charactersMap.get(String.fromCharCode(0x70 + this.calcEan5Checksum(data)));

          if (z === void 0) {
            throw new Error("EAN: character is out of range.");
          }

          const eo = z.pattern;

          for (let i = 0; i < 5; i++) {
            const p = Number.parseInt(eo[i], 10);
            if (i > 0) d += "\x91";
            d += String.fromCharCode(p * 0x10 + Number.parseInt(data[i], 10));
          }
        }
        break;

      case "ean-2":
        {
          text = data.slice(0, 2);
          d += "\x90";
          const z = this.charactersMap.get(String.fromCharCode(0x80 + this.calcEan2Checksum(data)));

          if (z === void 0) {
            throw new Error("EAN: character is out of range.");
          }

          const eo = z.pattern;

          for (let i = 0; i < 2; i++) {
            const p = Number.parseInt(eo[i], 10);
            if (i > 0) d += "\x91";
            d += String.fromCharCode(p * 0x10 + Number.parseInt(data[i], 10));
          }
        }
        break;

      default:
        throw new Error("EAN: bad data length");
    }

    return {
      data: d,
      heightData: hd,
      labelText: text,
      startChar: "",
      stopChar: ""
    };
  }

  getBarSpaceWidth() {
    const props = this.props;
    const w = props.elementWidth;
    return [0, w, w * 2, w * 3, w * 4];
  }

  getBarSpaceHeight() {
    const props = this.props;
    const h = props.height;
    const gh = props.guardExtHeight;
    return [[{
      offset: 0,
      height: h
    }], [{
      offset: 0,
      height: h + gh
    }]];
  }

  getRenderStartCoodinate(data, text) {
    const props = this.props;
    const qw = props.quietWidth;
    const qh = props.quietHeight;

    switch (this.eanTypes) {
      case "ean-13":
      case "ean-8":
      case "upc-a":
      case "upc-e":
        {
          return {
            rx: qw,
            ry: qh
          };
        }

      case "ean-5":
      case "ean-2":
        {
          return {
            rx: qw,
            ry: qh + (props.drawText ? props.textHeight : 0)
          };
        }

      default:
        throw new Error("EAN: bad data length");
    }
  }

  renderText(canvas, tw, th, data, text) {
    const props = this.props;

    switch (this.eanTypes) {
      case "ean-13":
        if (props.guardExtHeight > 0) {
          canvas.textBaseline = "alphabetic"; // "bottom";

          canvas.textAlign = "start";
          canvas.fillText(text.slice(0, 1), props.quietWidth - props.elementWidth * 14, th - props.quietHeight);
          canvas.textAlign = "center";
          canvas.fillText(text.slice(1, 7), props.quietWidth + props.elementWidth * 24, th - props.quietHeight);
          canvas.fillText(text.slice(7, 13), props.quietWidth + props.elementWidth * 71, th - props.quietHeight);
        } else {
          canvas.textAlign = "center";
          canvas.textBaseline = "alphabetic"; // "bottom";

          canvas.fillText(text, tw / 2, th - props.quietHeight);
        }

        break;

      case "upc-a":
        if (props.guardExtHeight > 0) {
          canvas.textBaseline = "alphabetic"; // "bottom";

          canvas.font = props.smallFont || canvas.font;
          canvas.textAlign = "start";
          canvas.fillText(text.slice(1, 2), props.quietWidth - props.elementWidth * 12, th - props.quietHeight - props.textHeight * 0.2);
          canvas.font = props.font || canvas.font;
          canvas.textAlign = "center";
          canvas.fillText(text.slice(2, 7), props.quietWidth + props.elementWidth * 27.5, th - props.quietHeight);
          canvas.fillText(text.slice(7, 12), props.quietWidth + props.elementWidth * 67.5, th - props.quietHeight);
          canvas.font = props.smallFont || canvas.font;
          canvas.textAlign = "start";
          canvas.fillText(text.slice(12, 13), tw - props.quietWidth + props.elementWidth * 7, th - props.quietHeight - props.textHeight * 0.2);
        } else {
          canvas.textAlign = "center";
          canvas.textBaseline = "alphabetic"; // "bottom";

          canvas.fillText(text.slice(1), tw / 2, th - props.quietHeight);
        }

        break;

      case "ean-8":
        if (props.guardExtHeight > 0) {
          canvas.textAlign = "center";
          canvas.textBaseline = "alphabetic"; // "bottom";

          canvas.fillText(text.slice(0, 4), props.quietWidth + props.elementWidth * 17, th - props.quietHeight);
          canvas.fillText(text.slice(4, 8), props.quietWidth + props.elementWidth * 50, th - props.quietHeight);
        } else {
          canvas.textAlign = "center";
          canvas.textBaseline = "alphabetic"; // "bottom";

          canvas.fillText(text, tw / 2, th - props.quietHeight);
        }

        break;

      case "upc-e":
        if (props.guardExtHeight > 0) {
          canvas.font = props.smallFont || canvas.font;
          canvas.textAlign = "start";
          canvas.fillText(text.slice(0, 1), props.quietWidth - props.elementWidth * 12, th - props.quietHeight - props.textHeight * 0.2);
          canvas.font = props.font || canvas.font;
          canvas.textAlign = "center";
          canvas.fillText(text.slice(1, 7), tw / 2, th - props.quietHeight);
          canvas.font = props.smallFont || canvas.font;
          canvas.textAlign = "start";
          canvas.fillText(text.slice(7, 8), tw - props.quietWidth + props.elementWidth * 7, th - props.quietHeight - props.textHeight * 0.2);
        } else {
          canvas.textAlign = "center";
          canvas.textBaseline = "alphabetic"; // "bottom";

          canvas.fillText(text, tw / 2, th - props.quietHeight);
        }

        break;

      case "ean-5":
      case "ean-2":
        {
          canvas.textAlign = "center";
          canvas.textBaseline = "alphabetic"; // "bottom";

          canvas.fillText(text, tw / 2, props.quietHeight + props.textHeight);
        }
        break;

      default:
        throw new Error("EAN: bad data length");
    }
  }

}
class Ean13 extends EanBase {
  get eanTypes() {
    return "ean-13";
  }

}
const Gtin13 = Ean13;
class Ean8 extends EanBase {
  get eanTypes() {
    return "ean-8";
  }

}
const Gtin8 = Ean8;
class Ean5 extends EanBase {
  get eanTypes() {
    return "ean-5";
  }

}
class Ean2 extends EanBase {
  get eanTypes() {
    return "ean-2";
  }

}
class UpcA extends EanBase {
  get eanTypes() {
    return "upc-a";
  }

}
class UpcE extends EanBase {
  get eanTypes() {
    return "upc-e";
  }

}

/***/ }),

/***/ "../red-agate-barcode/modules/barcode/Itf.js":
/*!***************************************************!*\
  !*** ../red-agate-barcode/modules/barcode/Itf.js ***!
  \***************************************************/
/*! exports provided: itfPropsDefault, Itf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "itfPropsDefault", function() { return itfPropsDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Itf", function() { return Itf; });
/* harmony import */ var _BarcodeBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BarcodeBase */ "../red-agate-barcode/modules/barcode/BarcodeBase.js");
/* harmony import */ var _data_Itf_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/Itf.data */ "../red-agate-barcode/modules/barcode/data/Itf.data.js");
// Copyright (c) 2017, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln


const itfPropsDefault = Object.assign({}, _BarcodeBase__WEBPACK_IMPORTED_MODULE_0__["barcodeBasePropsDefault"], {
  addCheckDigit: true,
  narrowWidth: 0.33,
  wideWidth: 0.66
});
class Itf extends _BarcodeBase__WEBPACK_IMPORTED_MODULE_0__["BarcodeBase"] {
  constructor(props) {
    super(Object.assign({}, itfPropsDefault, props), _data_Itf_data__WEBPACK_IMPORTED_MODULE_1__["charactersMap"]);
  }

  calcSymbolSize(data, startChar, stopChar, cdChar) {
    const props = this.props; // module width (bar + space + gap)

    const mw = props.narrowWidth * 3 + props.wideWidth * 2;
    return {
      // total width (quiet + data + start + stop + cd)
      tw: props.quietWidth * 2 + props.narrowWidth * 8 + mw * data.length * 2,
      // total height (quiet + bar + text)
      th: props.quietHeight * 2 + props.height + (props.drawText ? props.textHeight : 0)
    };
  }

  calcItfMod10W3Checksum(data) {
    let odd = 0,
        even = 0;

    for (let i = 0; i < data.length; i++) {
      // most right -> odd
      if ((i + 1) % 2) {
        odd = (odd + Number.parseInt(data[data.length - 1 - i], 10)) % 10;
      } else {
        even = (even + Number.parseInt(data[data.length - 1 - i], 10)) % 10;
      }
    }

    return String((10 - (odd * 3 + even) % 10) % 10);
  }

  encodeData(data) {
    let labelText = data;

    if (this.props.addCheckDigit) {
      const cd = this.calcItfMod10W3Checksum(data);
      labelText += cd;
    }

    let d = "";

    if (labelText.length % 2) {
      throw new Error("bad data length");
    }

    for (let i = 0; i < labelText.length; i += 2) {
      const c = Number.parseInt(labelText.slice(i, i + 2), 10);
      d += String.fromCharCode(c);
    }

    return {
      data: d,
      labelText,
      startChar: "\x64",
      stopChar: "\x65"
    };
  }

  getBarSpaceWidth() {
    const props = this.props;
    return [0, props.narrowWidth, props.wideWidth];
  }

}

/***/ }),

/***/ "../red-agate-barcode/modules/barcode/JapanPostal.js":
/*!***********************************************************!*\
  !*** ../red-agate-barcode/modules/barcode/JapanPostal.js ***!
  \***********************************************************/
/*! exports provided: japanPostalPropsDefault, JapanPostal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "japanPostalPropsDefault", function() { return japanPostalPropsDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JapanPostal", function() { return JapanPostal; });
/* harmony import */ var _BarcodeBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BarcodeBase */ "../red-agate-barcode/modules/barcode/BarcodeBase.js");
/* harmony import */ var _data_JapanPostal_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/JapanPostal.data */ "../red-agate-barcode/modules/barcode/data/JapanPostal.data.js");
// Copyright (c) 2017, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln


const japanPostalPropsDefault = Object.assign({}, _BarcodeBase__WEBPACK_IMPORTED_MODULE_0__["barcodeBasePropsDefault"], {
  elementWidth: 0.6,
  height: 1.2 * 3
});
class JapanPostal extends _BarcodeBase__WEBPACK_IMPORTED_MODULE_0__["BarcodeBase"] {
  constructor(props) {
    super(Object.assign({}, japanPostalPropsDefault, props), _data_JapanPostal_data__WEBPACK_IMPORTED_MODULE_1__["charactersMap"]);
  }

  calcSymbolSize(data, startChar, stopChar, cdChar) {
    const props = this.props; // module width (bar + space)

    const mw = props.elementWidth * 6;
    return {
      // total width (quiet + data + start + stop + cd)
      tw: props.quietWidth * 2 + mw * 21 + props.elementWidth * (4 + 3),
      // total height (quiet + bar)
      th: props.quietHeight * 2 + props.height
    };
  }

  calcCheckDigit(data) {
    let cdChar = "";
    let cd = 0;

    for (let i = 0; i < data.length; i++) {
      const z = this.charactersMap.get(data[i]);

      if (z === void 0) {
        throw new Error("Japan Post: character is out of range.");
      }

      cd = (cd + z.index) % 19;
    }

    const cdch = _data_JapanPostal_data__WEBPACK_IMPORTED_MODULE_1__["reverseMap"].get(cd);

    if (cdch === void 0) {
      throw new Error("Japan Post: check digit is out of range.");
    }

    cdChar = cdch;
    return cdChar;
  }

  encodeData(data) {
    let d = "";

    for (let i = 0; i < data.length; i++) {
      const c = _data_JapanPostal_data__WEBPACK_IMPORTED_MODULE_1__["fullAsciiMap"].get(data.charCodeAt(i));

      if (c === void 0) {
        throw new Error("Japan Post: character is out of range.");
      }

      d += c;
    }

    d += "DDDDDDDDDDDDDDDDD";
    return {
      data: d.slice(0, 20),
      startChar: "[",
      stopChar: "]"
    };
  }

  getBarSpaceWidth() {
    const props = this.props;
    return [0, props.elementWidth];
  }

  getBarSpaceHeight() {
    const props = this.props;
    const h = props.height;
    return [[{
      offset: 0,
      height: h
    }], [{
      offset: 0,
      height: h
    }], [{
      offset: 0,
      height: h * 2 / 3
    }], [{
      offset: h / 3,
      height: h * 2 / 3
    }], [{
      offset: h / 3,
      height: h / 3
    }] // 4: timing
    ];
  }

  get isHeightModulated() {
    return true;
  }

  renderText(canvas, tw, th, data, text) {}

}

/***/ }),

/***/ "../red-agate-barcode/modules/barcode/Nw7.js":
/*!***************************************************!*\
  !*** ../red-agate-barcode/modules/barcode/Nw7.js ***!
  \***************************************************/
/*! exports provided: nw7PropsDefault, Nw7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nw7PropsDefault", function() { return nw7PropsDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nw7", function() { return Nw7; });
/* harmony import */ var _BarcodeBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BarcodeBase */ "../red-agate-barcode/modules/barcode/BarcodeBase.js");
/* harmony import */ var _data_Nw7_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/Nw7.data */ "../red-agate-barcode/modules/barcode/data/Nw7.data.js");
// Copyright (c) 2017, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln


const nw7PropsDefault = Object.assign({}, _BarcodeBase__WEBPACK_IMPORTED_MODULE_0__["barcodeBasePropsDefault"], {
  useRawDataAsText: true,
  addCheckDigit: true,
  narrowWidth: 0.33,
  wideWidth: 0.66,
  charGapWidth: void 0,
  startChar: "",
  stopChar: ""
});
class Nw7 extends _BarcodeBase__WEBPACK_IMPORTED_MODULE_0__["BarcodeBase"] {
  constructor(props) {
    super(Object.assign({}, nw7PropsDefault, props), _data_Nw7_data__WEBPACK_IMPORTED_MODULE_1__["charactersMap"]);
  }

  calcSymbolSize(data, startChar, stopChar, cdChar) {
    const props = this.props;
    const gw = props.charGapWidth || props.narrowWidth; // module width (bar + space + gap)

    const mw = props.narrowWidth * 4 + props.wideWidth * 3 + gw;
    let tw = props.quietWidth * 2 - gw;
    const data2 = `${startChar}${data}${cdChar}${stopChar}`;

    for (const c of data2) {
      const z = _data_Nw7_data__WEBPACK_IMPORTED_MODULE_1__["charactersMap"].get(c);

      if (z === void 0) {
        throw new Error("NW7: character is out of range.");
      }

      const wide = z.width - 7;
      const narrow = 7 - wide;
      tw += props.narrowWidth * narrow + props.wideWidth * wide + gw;
    }

    return {
      // total width (quiet + data + start + stop + cd)
      tw,
      // total height (quiet + bar + text)
      th: props.quietHeight * 2 + props.height + (props.drawText ? props.textHeight : 0)
    };
  }

  calcCheckDigit(data) {
    let cdChar = "";

    if (this.props.addCheckDigit) {
      let cd = 0;

      for (let i = 0; i < data.length; i++) {
        const z = _data_Nw7_data__WEBPACK_IMPORTED_MODULE_1__["charactersMap"].get(data[i]);

        if (z === void 0) {
          throw new Error("NW7: character is out of range.");
        }

        cd = (cd + z.index) % 16;
      }

      const cdch = _data_Nw7_data__WEBPACK_IMPORTED_MODULE_1__["reverseMap"].get((16 - cd) % 16);

      if (cdch === void 0) {
        throw new Error("NW7: check digit is out of range.");
      }

      cdChar = cdch;
    }

    return cdChar;
  }

  encodeData(data) {
    return {
      data,
      startChar: this.props.startChar || "",
      stopChar: this.props.stopChar || ""
    };
  }

  getBarSpaceWidth() {
    const props = this.props;
    const gw = props.charGapWidth || props.narrowWidth;
    return [gw, props.narrowWidth, props.wideWidth];
  }

}

/***/ }),

/***/ "../red-agate-barcode/modules/barcode/Qr.defs.js":
/*!*******************************************************!*\
  !*** ../red-agate-barcode/modules/barcode/Qr.defs.js ***!
  \*******************************************************/
/*! exports provided: QrDataChunkType, ecLevelMap, numberModeCharMap, alnumModeCharMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrDataChunkType", function() { return QrDataChunkType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ecLevelMap", function() { return ecLevelMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberModeCharMap", function() { return numberModeCharMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alnumModeCharMap", function() { return alnumModeCharMap; });
// Copyright (c) 2017, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln
var QrDataChunkType;

(function (QrDataChunkType) {
  QrDataChunkType[QrDataChunkType["Control"] = 0] = "Control";
  QrDataChunkType[QrDataChunkType["Number"] = 1] = "Number";
  QrDataChunkType[QrDataChunkType["Alnum"] = 2] = "Alnum";
  QrDataChunkType[QrDataChunkType["Binary"] = 3] = "Binary";
})(QrDataChunkType || (QrDataChunkType = {}));

const ecLevelMap = new Map([["L", 1], ["M", 0], ["Q", 3], ["H", 2]]);
const numberModeCharMap = new Map([["0", 0], ["1", 1], ["2", 2], ["3", 3], ["4", 4], ["5", 5], ["6", 6], ["7", 7], ["8", 8], ["9", 9]]);
const alnumModeCharMap = new Map([["0", 0], ["1", 1], ["2", 2], ["3", 3], ["4", 4], ["5", 5], ["6", 6], ["7", 7], ["8", 8], ["9", 9], ["A", 10], ["B", 11], ["C", 12], ["D", 13], ["E", 14], ["F", 15], ["G", 16], ["H", 17], ["I", 18], ["J", 19], ["K", 20], ["L", 21], ["M", 22], ["N", 23], ["O", 24], ["P", 25], ["Q", 26], ["R", 27], ["S", 28], ["T", 29], ["U", 30], ["V", 31], ["W", 32], ["X", 33], ["Y", 34], ["Z", 35], [" ", 36], ["$", 37], ["%", 38], ["*", 39], ["+", 40], ["-", 41], [".", 42], ["/", 43], [",", 44]]);

/***/ }),

/***/ "../red-agate-barcode/modules/barcode/Qr.js":
/*!**************************************************!*\
  !*** ../red-agate-barcode/modules/barcode/Qr.js ***!
  \**************************************************/
/*! exports provided: qrPropsDefault, Qr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "qrPropsDefault", function() { return qrPropsDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Qr", function() { return Qr; });
/* harmony import */ var red_agate_modules_red_agate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! red-agate/modules/red-agate */ "../red-agate/modules/red-agate/index.js");
/* harmony import */ var red_agate_svg_canvas_modules_drawing_canvas_SvgCanvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! red-agate-svg-canvas/modules/drawing/canvas/SvgCanvas */ "../red-agate-svg-canvas/modules/drawing/canvas/SvgCanvas.js");
/* harmony import */ var red_agate_modules_red_agate_tags_Shape__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! red-agate/modules/red-agate/tags/Shape */ "../red-agate/modules/red-agate/tags/Shape.js");
/* harmony import */ var red_agate_math_modules_math_Gf2Ext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! red-agate-math/modules/math/Gf2Ext */ "../red-agate-math/modules/math/Gf2Ext.js");
/* harmony import */ var red_agate_math_modules_error_correction_BCH__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! red-agate-math/modules/error-correction/BCH */ "../red-agate-math/modules/error-correction/BCH.js");
/* harmony import */ var red_agate_math_modules_error_correction_ReedSolomon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! red-agate-math/modules/error-correction/ReedSolomon */ "../red-agate-math/modules/error-correction/ReedSolomon.js");
/* harmony import */ var red_agate_util_modules_io_BitStream__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! red-agate-util/modules/io/BitStream */ "../red-agate-util/modules/io/BitStream.js");
/* harmony import */ var red_agate_util_modules_convert_TextEncoding__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! red-agate-util/modules/convert/TextEncoding */ "../red-agate-util/modules/convert/TextEncoding.js");
/* harmony import */ var red_agate_util_modules_imaging_Bitmap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! red-agate-util/modules/imaging/Bitmap */ "../red-agate-util/modules/imaging/Bitmap.js");
/* harmony import */ var _Qr_defs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Qr.defs */ "../red-agate-barcode/modules/barcode/Qr.defs.js");
/* harmony import */ var _data_Qr_m2_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./data/Qr.m2.data */ "../red-agate-barcode/modules/barcode/data/Qr.m2.data.js");
// Copyright (c) 2017, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln











const qrPropsDefault = Object.assign({}, red_agate_modules_red_agate_tags_Shape__WEBPACK_IMPORTED_MODULE_2__["shapePropsDefault"], {
  version: "auto",
  ecLevel: "M",
  encoding: "auto",
  cellSize: 0.33,
  unit: "mm"
});
const field = new red_agate_math_modules_math_Gf2Ext__WEBPACK_IMPORTED_MODULE_3__["Gf2e8Field"]();
let gxList = [];
const masks = [{
  index: 0x00,
  fn: (x, y) => (x + y) % 2 === 0
}, {
  index: 0x01,
  fn: (x, y) => y % 2 === 0
}, {
  index: 0x02,
  fn: (x, y) => x % 3 === 0
}, {
  index: 0x03,
  fn: (x, y) => (x + y) % 3 === 0
}, {
  index: 0x04,
  fn: (x, y) => (Math.floor(x / 3) + Math.floor(y / 2)) % 2 === 0
}, {
  index: 0x05,
  fn: (x, y) => x * y % 2 + x * y % 3 === 0
}, {
  index: 0x06,
  fn: (x, y) => (x * y % 2 + x * y % 3) % 2 === 0
}, {
  index: 0x07,
  fn: (x, y) => (x * y % 3 + (x + y) % 2) % 2 === 0
}];
class Qr extends red_agate_modules_red_agate_tags_Shape__WEBPACK_IMPORTED_MODULE_2__["Shape"] {
  constructor(props) {
    super(Object.assign({}, qrPropsDefault, props));
  }

  toImgTag() {
    return Object(red_agate_modules_red_agate_tags_Shape__WEBPACK_IMPORTED_MODULE_2__["toImgTag"])(this);
  }

  toElementStyle() {
    return Object(red_agate_modules_red_agate_tags_Shape__WEBPACK_IMPORTED_MODULE_2__["toElementStyle"])(this);
  }

  toDataUrl() {
    return Object(red_agate_modules_red_agate_tags_Shape__WEBPACK_IMPORTED_MODULE_2__["toDataUrl"])(this);
  }

  toSvg() {
    return Object(red_agate_modules_red_agate_tags_Shape__WEBPACK_IMPORTED_MODULE_2__["toSvg"])(this);
  }

  toRendered() {
    return red_agate_modules_red_agate__WEBPACK_IMPORTED_MODULE_0__["renderAsHtml_noDefer"](this);
  }

  render(contexts, children) {
    let canvas = this.getContext(contexts, red_agate_modules_red_agate_tags_Shape__WEBPACK_IMPORTED_MODULE_2__["CONTEXT_SVG_CANVAS"]);
    const contextHasCanvas = Boolean(canvas);

    if (!contextHasCanvas) {
      canvas = new red_agate_svg_canvas_modules_drawing_canvas_SvgCanvas__WEBPACK_IMPORTED_MODULE_1__["SvgCanvas"]();
      this.setContext(contexts, red_agate_modules_red_agate_tags_Shape__WEBPACK_IMPORTED_MODULE_2__["CONTEXT_SVG_CANVAS"], canvas);
      super.beforeRender(contexts);
    }

    const data = this.props.data || "";
    const encoded = this.encodeData(data);
    const bitmap = this.buildBitmap(encoded.data, encoded.version);
    this.drawBitmap(canvas, bitmap);

    if (contextHasCanvas) {
      return ``;
    } else {
      super.afterRender(contexts);
      this.unsetContext(contexts, red_agate_modules_red_agate_tags_Shape__WEBPACK_IMPORTED_MODULE_2__["CONTEXT_SVG_CANVAS"]);
      const total = bitmap.width * this.props.cellSize + this.props.margin * 2;
      const imageWidth = total + (this.props.x || 0);
      const imageHeight = total + (this.props.y || 0);
      return Object(red_agate_modules_red_agate_tags_Shape__WEBPACK_IMPORTED_MODULE_2__["renderSvgCanvas"])(this.props, canvas, imageWidth, imageHeight);
    }
  }

  evaluteMask(bitmap) {
    const nx = bitmap.width,
          ny = bitmap.height;
    let z = 0;

    for (let i = 0; i < ny; i++) {
      let p = null;
      let c = 1;

      for (let j = 0; j < nx; j++) {
        const q = bitmap.get(j, i);
        if (p !== q) c = 1;else c += 1;
        if (5 === c) z += 3;else if (5 < c) z += 1;
        p = q;
      }
    }

    for (let i = 0; i < nx; i++) {
      let p = null;
      let c = 1;

      for (let j = 0; j < ny; j++) {
        const q = bitmap.get(i, j);
        if (p !== q) c = 1;else c += 1;
        if (5 === c) z += 3;else if (5 < c) z += 1;
        p = q;
      }
    }

    for (let i = 0; i < ny - 1; i++) {
      for (let j = 0; j < nx - 1; j++) {
        const v = bitmap.get(j, i);

        if (v === bitmap.get(j + 1, i) && v === bitmap.get(j, i + 1) && v === bitmap.get(j + 1, i + 1)) {
          z += 3;
        }
      }
    }

    for (let i = 0; i < ny; i++) {
      for (let j = 0; j < nx - 10; j++) {
        if (bitmap.get(j, i) !== 0 && bitmap.get(j + 1, i) === 0 && bitmap.get(j + 2, i) !== 0 && bitmap.get(j + 3, i) !== 0 && bitmap.get(j + 4, i) !== 0 && bitmap.get(j + 5, i) === 0 && bitmap.get(j + 6, i) !== 0 && bitmap.get(j + 7, i) === 0 && bitmap.get(j + 8, i) === 0 && bitmap.get(j + 9, i) === 0 && bitmap.get(j + 10, i) === 0) {
          z += 40;
        } else if (bitmap.get(j, i) === 0 && bitmap.get(j + 1, i) === 0 && bitmap.get(j + 2, i) === 0 && bitmap.get(j + 3, i) === 0 && bitmap.get(j + 4, i) !== 0 && bitmap.get(j + 5, i) === 0 && bitmap.get(j + 6, i) !== 0 && bitmap.get(j + 7, i) !== 0 && bitmap.get(j + 8, i) !== 0 && bitmap.get(j + 9, i) === 0 && bitmap.get(j + 10, i) !== 0) {
          z += 40;
        }
      }
    }

    for (let i = 0; i < nx; i++) {
      for (let j = 0; j < ny - 10; j++) {
        if (bitmap.get(i, j) !== 0 && bitmap.get(i, j + 1) === 0 && bitmap.get(i, j + 2) !== 0 && bitmap.get(i, j + 3) !== 0 && bitmap.get(i, j + 4) !== 0 && bitmap.get(i, j + 5) === 0 && bitmap.get(i, j + 6) !== 0 && bitmap.get(i, j + 7) === 0 && bitmap.get(i, j + 8) === 0 && bitmap.get(i, j + 9) === 0 && bitmap.get(i, j + 10) === 0) {
          z += 40;
        } else if (bitmap.get(i, j) === 0 && bitmap.get(i, j + 1) === 0 && bitmap.get(i, j + 2) === 0 && bitmap.get(i, j + 3) === 0 && bitmap.get(i, j + 4) !== 0 && bitmap.get(i, j + 5) === 0 && bitmap.get(i, j + 6) !== 0 && bitmap.get(i, j + 7) !== 0 && bitmap.get(i, j + 8) !== 0 && bitmap.get(i, j + 9) === 0 && bitmap.get(i, j + 10) !== 0) {
          z += 40;
        }
      }
    }

    let white = 0,
        black = 0;

    for (let i = 0; i < ny; i++) {
      for (let j = 0; j < nx; j++) {
        if (bitmap.get(j, i) === 0) {
          white++;
        } else {
          black++;
        }
      }
    }

    z += Math.floor(Math.abs(black / (white + black) * 100 - 50) / 5) * 10;
    return z;
  }

  encodeNumberData(data) {
    const length = Math.ceil(data.length * 10 / 24);
    const buf = new red_agate_util_modules_io_BitStream__WEBPACK_IMPORTED_MODULE_6__["BitStreamWriter"](length);
    let i = 0,
        v = 0;

    for (; i < data.length; i++) {
      const c = _Qr_defs__WEBPACK_IMPORTED_MODULE_9__["numberModeCharMap"].get(data[i]);
      if (c === void 0) return null;
      v = v * 10 + c;

      if (2 === i % 3) {
        // 10 bits
        buf.writeBits(v, 10);
        v = 0;
      }
    }

    i = i % 3;

    if (i) {
      // i is  1: 4bits, 2: 7bits
      buf.writeBits8(v, 1 + 3 * i);
    }

    return {
      data: buf,
      charLength: data.length
    };
  }

  encodeAlnumData(data) {
    const length = Math.ceil(data.length * 11 / 16);
    const buf = new red_agate_util_modules_io_BitStream__WEBPACK_IMPORTED_MODULE_6__["BitStreamWriter"](length);
    let i = 0,
        v = 0;

    for (; i < data.length; i++) {
      const c = _Qr_defs__WEBPACK_IMPORTED_MODULE_9__["alnumModeCharMap"].get(data[i]);
      if (c === void 0) return null;
      v = v * 45 + c;

      if (1 === i % 2) {
        // 11 bits
        buf.writeBits(v, 11);
        v = 0;
      }
    }

    if (i % 2) {
      buf.writeBits8(v, 6);
    }

    return {
      data: buf,
      charLength: data.length
    };
  }

  encode8bitData(data) {
    const buf = new red_agate_util_modules_io_BitStream__WEBPACK_IMPORTED_MODULE_6__["BitStreamWriter"](0, red_agate_util_modules_convert_TextEncoding__WEBPACK_IMPORTED_MODULE_7__["TextEncoding"].encodeToUtf8(data));
    return {
      data: buf,
      charLength: buf.byteLength
    };
  }

  encodeChunks(data) {
    if (!Array.isArray(data)) {
      data = [data];
    }

    const chunks = [];

    for (const d of data) {
      if (d instanceof red_agate_util_modules_io_BitStream__WEBPACK_IMPORTED_MODULE_6__["BitStreamWriter"]) chunks.push({
        type: _Qr_defs__WEBPACK_IMPORTED_MODULE_9__["QrDataChunkType"].Binary,
        data: d,
        charLength: d.byteLength
      });else if (d instanceof Uint8Array) chunks.push({
        type: _Qr_defs__WEBPACK_IMPORTED_MODULE_9__["QrDataChunkType"].Binary,
        data: new red_agate_util_modules_io_BitStream__WEBPACK_IMPORTED_MODULE_6__["BitStreamWriter"](0, d),
        charLength: d.length
      });else if (typeof d === "string") {
        let chunk = null;
        let type;
        let isManual = true;

        switch (this.props.encoding) {
          case "auto":
            isManual = false;

          case "number":
            chunk = this.encodeNumberData(d);
            type = _Qr_defs__WEBPACK_IMPORTED_MODULE_9__["QrDataChunkType"].Number;
            if (isManual || chunk) break;

          case "alnum":
            chunk = this.encodeAlnumData(d);
            type = _Qr_defs__WEBPACK_IMPORTED_MODULE_9__["QrDataChunkType"].Alnum;
            if (isManual || chunk) break;

          case "8bit":
          default:
            chunk = this.encode8bitData(d);
            type = _Qr_defs__WEBPACK_IMPORTED_MODULE_9__["QrDataChunkType"].Binary;
            break;
        }

        if (chunk === null) {
          throw new Error("QrModel2: character is out of range.");
        }

        chunks.push({
          type,
          data: chunk.data,
          charLength: chunk.charLength
        });
      } else if (typeof d === "number") {// TODO: not imple
      }
    }

    return chunks;
  }

  determineSymbolVersion(chunks) {
    let version = this.props.version === "auto" ? 1 : this.props.version || 1;
    let segments;
    let maxDataLength = 0;
    let dataLength = 0;

    while (true) {
      dataLength = 0;

      for (const c of chunks) {
        switch (c.type) {
          case _Qr_defs__WEBPACK_IMPORTED_MODULE_9__["QrDataChunkType"].Number:
            if (version < 10) dataLength += 14;else if (version < 27) dataLength += 16;else dataLength += 18;
            break;

          case _Qr_defs__WEBPACK_IMPORTED_MODULE_9__["QrDataChunkType"].Alnum:
            if (version < 10) dataLength += 13;else if (version < 27) dataLength += 15;else dataLength += 17;
            break;

          case _Qr_defs__WEBPACK_IMPORTED_MODULE_9__["QrDataChunkType"].Binary:
            if (version < 10) dataLength += 12;else dataLength += 20;
            break;
        }

        dataLength += c.data.bitLength;
      }

      switch (this.props.ecLevel) {
        case "L":
          segments = _data_Qr_m2_data__WEBPACK_IMPORTED_MODULE_10__["segments"][version].L;
          maxDataLength = 8 * _data_Qr_m2_data__WEBPACK_IMPORTED_MODULE_10__["dataCodewords"].L[version];
          break;

        case "Q":
          segments = _data_Qr_m2_data__WEBPACK_IMPORTED_MODULE_10__["segments"][version].Q;
          maxDataLength = 8 * _data_Qr_m2_data__WEBPACK_IMPORTED_MODULE_10__["dataCodewords"].Q[version];
          break;

        case "H":
          segments = _data_Qr_m2_data__WEBPACK_IMPORTED_MODULE_10__["segments"][version].H;
          maxDataLength = 8 * _data_Qr_m2_data__WEBPACK_IMPORTED_MODULE_10__["dataCodewords"].H[version];
          break;

        case "M":
        default:
          segments = _data_Qr_m2_data__WEBPACK_IMPORTED_MODULE_10__["segments"][version].M;
          maxDataLength = 8 * _data_Qr_m2_data__WEBPACK_IMPORTED_MODULE_10__["dataCodewords"].M[version];
          break;
      } // check total length


      if (dataLength <= maxDataLength) {
        break;
      }

      if (this.props.version !== "auto" || !_data_Qr_m2_data__WEBPACK_IMPORTED_MODULE_10__["segments"][++version]) {
        throw new Error("QrModel2: data is too large.");
      }
    }

    return {
      version,
      segments,
      dataLength,
      maxDataLength
    };
  }

  encodeData(data) {
    // determine chunks' encoding, and encoding data.
    const chunks = this.encodeChunks(data); // determine symbol's version.

    const {
      version,
      segments,
      dataLength,
      maxDataLength
    } = this.determineSymbolVersion(chunks); // convert chunks to QR data structure bit stream

    let bytes;
    {
      const bits = []; // make global headers.
      // build data from chunks.

      for (const c of chunks) {
        let n = 0;
        const header = new red_agate_util_modules_io_BitStream__WEBPACK_IMPORTED_MODULE_6__["BitStreamWriter"](3);

        switch (c.type) {
          case _Qr_defs__WEBPACK_IMPORTED_MODULE_9__["QrDataChunkType"].Number:
            header.writeBits8(1, 4);
            if (version < 10) n = 10;else if (version < 27) n = 12;else n = 14;
            header.writeBits(c.charLength, n);
            break;

          case _Qr_defs__WEBPACK_IMPORTED_MODULE_9__["QrDataChunkType"].Alnum:
            header.writeBits8(2, 4);
            if (version < 10) n = 9;else if (version < 27) n = 11;else n = 13;
            header.writeBits(c.charLength, n);
            break;

          case _Qr_defs__WEBPACK_IMPORTED_MODULE_9__["QrDataChunkType"].Binary:
            header.writeBits8(4, 4);
            if (version < 10) n = 8;else n = 16;
            header.writeBits(c.charLength, n);
            break;
        }

        if (0 < header.bitLength) bits.push(header);
        bits.push(c.data);
      } // make global footers.
      // finalize data.
      // if data bits and codewords are remained, add terminator, padding bits, padding codewords.


      if (dataLength < maxDataLength) {
        let rem = maxDataLength - dataLength;
        const fin = new red_agate_util_modules_io_BitStream__WEBPACK_IMPORTED_MODULE_6__["BitStreamWriter"](Math.ceil(rem / 8)); // terminator

        let len = Math.min(4, rem);
        fin.writeBits8(0, len);
        rem -= len; // padding bits

        if (0 < rem && 0 !== rem % 8) {
          len = rem % 8;
          fin.writeBits8(0, len);
          rem -= len;
        } // padding codewords


        for (let i = 0; 0 < rem; i++) {
          len = Math.min(8, rem);
          fin.writeBits8(0 === i % 2 ? 0x00ec : 0x0011, len);
          rem -= len;
        }

        bits.push(fin);
      }

      bytes = red_agate_util_modules_io_BitStream__WEBPACK_IMPORTED_MODULE_6__["BitStreamWriter"].concat(...bits).toBytes();
    } // make data codewords, generate error correction codewords.

    let totalLength = 0;
    const dataCwStack = [];
    const ecCwStack = [];

    for (let i = 0, p = 0; i < segments.length; i++) {
      const repeats = segments[i][0];
      const dataCwSize = segments[i][2];
      const ecCwSize = segments[i][1] - dataCwSize;
      let gx;

      if (gxList.length <= ecCwSize - 1) {
        gxList = red_agate_math_modules_error_correction_ReedSolomon__WEBPACK_IMPORTED_MODULE_5__["ReedSolomon"].listGx(field, gxList, ecCwSize, 0);
      }

      gx = gxList[ecCwSize - 1];
      const rs = new red_agate_math_modules_error_correction_ReedSolomon__WEBPACK_IMPORTED_MODULE_5__["ReedSolomon"](field, gx, 0);

      for (let j = 0; j < repeats; j++) {
        const dataCodewords = bytes.slice(p, p + dataCwSize).reverse();
        const ecCodewords = Uint8Array.from(rs.encode(dataCodewords));
        dataCwStack.push(dataCodewords.reverse());
        ecCwStack.push(ecCodewords.reverse());
        totalLength += dataCwSize + ecCwSize;
        p += dataCwSize;
      }
    } // interleaving codewords.


    const codewords = new Uint8Array(totalLength);
    {
      const stacks = [dataCwStack, ecCwStack];
      let p = 0;

      for (const stack of stacks) {
        for (let i = 0, z = true; z; i++) {
          z = false;

          for (let j = 0; j < stack.length; j++) {
            if (i < stack[j].length) {
              codewords[p++] = stack[j][i];
              z = true;
            }
          }
        }
      }
    }
    const props = this.props;
    return {
      data: codewords,
      version,
      ecLevel: props.ecLevel
    };
  }

  applyMask(bitmap, funcPatternsMap, fn) {
    const nx = bitmap.width,
          ny = bitmap.width;

    for (let x = 0; x < nx; x++) {
      for (let y = 0; y < ny; y++) {
        if (0 === funcPatternsMap.get(nx - 1 - x, ny - 1 - y)) {
          bitmap.set(nx - 1 - x, ny - 1 - y, bitmap.get(nx - 1 - x, ny - 1 - y) ^ (fn(x, y) ? 1 : 0));
        }
      }
    }
  }

  buildBitmap(data, version) {
    const width = _data_Qr_m2_data__WEBPACK_IMPORTED_MODULE_10__["matrixSize"][version];
    const nx = width,
          ny = width;
    const bitmap = new red_agate_util_modules_imaging_Bitmap__WEBPACK_IMPORTED_MODULE_8__["Bitmap"](width, width);
    const funcPatternsMap = new red_agate_util_modules_imaging_Bitmap__WEBPACK_IMPORTED_MODULE_8__["Bitmap"](width, width);
    {
      {
        // finder patterns + format info
        funcPatternsMap.fill(0, ny - 9, 8, 9, 1);
        funcPatternsMap.fill(nx - 9, 0, 9, 8, 1);
        funcPatternsMap.fill(nx - 9, ny - 9, 9, 9, 1); // version info

        if (7 <= version) {
          funcPatternsMap.fill(8, ny - 6, 3, 6, 1);
          funcPatternsMap.fill(nx - 6, 8, 6, 3, 1);
        }
      } // finder patterns

      for (const {
        px,
        py
      } of [{
        px: nx - 7,
        py: ny - 7
      }, {
        px: 0,
        py: ny - 7
      }, {
        px: nx - 7,
        py: 0
      }]) {
        bitmap.set(px + 0, py + 0, 1);
        bitmap.set(px + 0, py + 1, 1);
        bitmap.set(px + 0, py + 2, 1);
        bitmap.set(px + 0, py + 3, 1);
        bitmap.set(px + 0, py + 4, 1);
        bitmap.set(px + 0, py + 5, 1);
        bitmap.set(px + 0, py + 6, 1);
        bitmap.set(px + 1, py + 0, 1);
        bitmap.set(px + 2, py + 0, 1);
        bitmap.set(px + 3, py + 0, 1);
        bitmap.set(px + 4, py + 0, 1);
        bitmap.set(px + 5, py + 0, 1);
        bitmap.set(px + 6, py + 0, 1);
        bitmap.set(px + 6, py + 1, 1);
        bitmap.set(px + 6, py + 2, 1);
        bitmap.set(px + 6, py + 3, 1);
        bitmap.set(px + 6, py + 4, 1);
        bitmap.set(px + 6, py + 5, 1);
        bitmap.set(px + 1, py + 6, 1);
        bitmap.set(px + 2, py + 6, 1);
        bitmap.set(px + 3, py + 6, 1);
        bitmap.set(px + 4, py + 6, 1);
        bitmap.set(px + 5, py + 6, 1);
        bitmap.set(px + 6, py + 6, 1);
        bitmap.set(px + 2, py + 2, 1);
        bitmap.set(px + 2, py + 3, 1);
        bitmap.set(px + 2, py + 4, 1);
        bitmap.set(px + 3, py + 2, 1);
        bitmap.set(px + 4, py + 2, 1);
        bitmap.set(px + 4, py + 3, 1);
        bitmap.set(px + 4, py + 4, 1);
        bitmap.set(px + 3, py + 4, 1);
        bitmap.set(px + 3, py + 3, 1);
      } // alignment patterns


      const aps = _data_Qr_m2_data__WEBPACK_IMPORTED_MODULE_10__["alignmentPatterns"][version];

      for (let i = 0; i < aps.length; i++) {
        const a = nx - aps[i] - 1;

        for (let j = 0; j < aps.length; j++) {
          const b = ny - aps[j] - 1;
          let q = true;

          for (let x = a - 2; x <= a + 2; x++) {
            for (let y = b - 2; y <= b + 2; y++) {
              if (funcPatternsMap.get(x, y)) {
                q = false;
                break;
              }
            }

            if (!q) break;
          }

          if (q) {
            funcPatternsMap.fill(a - 2, b - 2, 5, 5, 1);
            bitmap.set(a - 2, b + 2, 1);
            bitmap.set(a - 2, b + 1, 1);
            bitmap.set(a - 2, b, 1);
            bitmap.set(a - 2, b - 1, 1);
            bitmap.set(a - 2, b - 2, 1);
            bitmap.set(a + 2, b + 2, 1);
            bitmap.set(a + 2, b + 1, 1);
            bitmap.set(a + 2, b, 1);
            bitmap.set(a + 2, b - 1, 1);
            bitmap.set(a + 2, b - 2, 1);
            bitmap.set(a + 1, b - 2, 1);
            bitmap.set(a + 1, b + 2, 1);
            bitmap.set(a, b + 2, 1);
            bitmap.set(a, b, 1);
            bitmap.set(a, b - 2, 1);
            bitmap.set(a - 1, b - 2, 1);
            bitmap.set(a - 1, b + 2, 1);
          }
        }
      } // timing pattern


      funcPatternsMap.fill(8, ny - 7, nx - 17, 1, 1);
      funcPatternsMap.fill(nx - 7, 8, 1, ny - 17, 1); // timing pattern

      for (let i = 8; i <= ny - 9; i += 2) {
        bitmap.set(nx - 7, i, 1);
        bitmap.set(i, ny - 7, 1);
      }
    } // place codewords

    {
      let cx = 1;
      let cy = -1;
      let b2t = true; // bottom to top

      let odd = false;

      for (let i = 0; i < data.length; i++) {
        for (let j = 7; j >= 0; j--) {
          for (;;) {
            if (odd) {
              cx += 1;
            } else if (ny - 1 === cy && b2t || 0 === cy && !b2t) {
              if (cx === nx - 8) cx += 2;else cx += 1;
              b2t = !b2t;
            } else {
              cx -= 1;
              if (b2t) cy += 1;else cy -= 1;
            }

            odd = !odd; // determine

            if (0 === funcPatternsMap.get(cx, cy)) {
              bitmap.set(cx, cy, data[i] >>> j & 0x01);
              break;
            } else {
              continue;
            }
          }
        }
      }
    } // place version info

    if (7 <= version) {
      // gx=0x1f25 BCH Code is built on GF(2^4). but BCH#encode() is not use arithmetic on GF.
      const vi = version << 12 | new red_agate_math_modules_error_correction_BCH__WEBPACK_IMPORTED_MODULE_4__["BCH"](field, 0x1f25).encode(version);
      bitmap.set(nx - 1, 10, vi >>> 0 & 1);
      bitmap.set(nx - 1, 9, vi >>> 1 & 1);
      bitmap.set(nx - 1, 8, vi >>> 2 & 1);
      bitmap.set(nx - 2, 10, vi >>> 3 & 1);
      bitmap.set(nx - 2, 9, vi >>> 4 & 1);
      bitmap.set(nx - 2, 8, vi >>> 5 & 1);
      bitmap.set(nx - 3, 10, vi >>> 6 & 1);
      bitmap.set(nx - 3, 9, vi >>> 7 & 1);
      bitmap.set(nx - 3, 8, vi >>> 8 & 1);
      bitmap.set(nx - 4, 10, vi >>> 9 & 1);
      bitmap.set(nx - 4, 9, vi >>> 10 & 1);
      bitmap.set(nx - 4, 8, vi >>> 11 & 1);
      bitmap.set(nx - 5, 10, vi >>> 12 & 1);
      bitmap.set(nx - 5, 9, vi >>> 13 & 1);
      bitmap.set(nx - 5, 8, vi >>> 14 & 1);
      bitmap.set(nx - 6, 10, vi >>> 15 & 1);
      bitmap.set(nx - 6, 9, vi >>> 16 & 1);
      bitmap.set(nx - 6, 8, vi >>> 17 & 1);
      bitmap.set(10, ny - 1, vi >>> 0 & 1);
      bitmap.set(9, ny - 1, vi >>> 1 & 1);
      bitmap.set(8, ny - 1, vi >>> 2 & 1);
      bitmap.set(10, ny - 2, vi >>> 3 & 1);
      bitmap.set(9, ny - 2, vi >>> 4 & 1);
      bitmap.set(8, ny - 2, vi >>> 5 & 1);
      bitmap.set(10, ny - 3, vi >>> 6 & 1);
      bitmap.set(9, ny - 3, vi >>> 7 & 1);
      bitmap.set(8, ny - 3, vi >>> 8 & 1);
      bitmap.set(10, ny - 4, vi >>> 9 & 1);
      bitmap.set(9, ny - 4, vi >>> 10 & 1);
      bitmap.set(8, ny - 4, vi >>> 11 & 1);
      bitmap.set(10, ny - 5, vi >>> 12 & 1);
      bitmap.set(9, ny - 5, vi >>> 13 & 1);
      bitmap.set(8, ny - 5, vi >>> 14 & 1);
      bitmap.set(10, ny - 6, vi >>> 15 & 1);
      bitmap.set(9, ny - 6, vi >>> 16 & 1);
      bitmap.set(8, ny - 6, vi >>> 17 & 1);
    } // masking


    let maskNo = 0;
    {
      let maskScore = Number.MAX_SAFE_INTEGER; // for each mask procs

      for (const mask of masks) {
        // mask
        this.applyMask(bitmap, funcPatternsMap, mask.fn); // calculate score

        const score = this.evaluteMask(bitmap);

        if (score < maskScore) {
          maskNo = mask.index;
          maskScore = score;
        } // unmask


        this.applyMask(bitmap, funcPatternsMap, mask.fn);
      } // mask


      this.applyMask(bitmap, funcPatternsMap, masks[maskNo].fn);
    } // place format info

    {
      const props = this.props;
      const ecLevel = _Qr_defs__WEBPACK_IMPORTED_MODULE_9__["ecLevelMap"].get(props.ecLevel);

      if (ecLevel === void 0) {
        throw new Error(`Qr#buildBitmap: bad ecLevel '${props.ecLevel}' is specified.`);
      }

      let fi = ecLevel << 3 | masks[maskNo].index; // gx=0x0537 BCH Code is built on GF(2^4). but BCH#encode() is not use arithmetic on GF.

      fi = (fi << 10 | new red_agate_math_modules_error_correction_BCH__WEBPACK_IMPORTED_MODULE_4__["BCH"](field, 0x0537).encode(fi)) ^ 0x5412;

      for (let i = 0; i <= 7; i++) {
        bitmap.set(i, ny - 9, fi >>> i & 1);
      }

      {
        bitmap.set(nx - 8, ny - 9, fi >>> 8 & 1);
      }

      for (let i = 9; i <= 14; i++) {
        bitmap.set(i + nx - 15, ny - 9, fi >>> i & 1);
      }

      for (let i = 0; i <= 5; i++) {
        bitmap.set(nx - 9, ny - 1 - i, fi >>> i & 1);
      }

      for (let i = 6; i <= 7; i++) {
        bitmap.set(nx - 9, ny - 2 - i, fi >>> i & 1);
      }

      {
        bitmap.set(nx - 9, 7, 1);
      }

      for (let i = 8; i <= 14; i++) {
        bitmap.set(nx - 9, 14 - i, fi >>> i & 1);
      }
    }
    return bitmap;
  }

  drawBitmap(canvas, bitmap) {
    // bitmap's coodinate origin is right-bottom.
    const c = this.props.cellSize;
    const nx = bitmap.width,
          ny = bitmap.height;

    for (let i = 0; i < nx; i++) {
      for (let j = 0; j < ny; j++) {
        if (bitmap.get(i, j)) canvas.rect((nx - 1 - i) * c, (ny - 1 - j) * c, c, c);
      }
    }

    canvas.fill();
    canvas.beginPath();
  }

}

/***/ }),

/***/ "../red-agate-barcode/modules/barcode/data/Code128.data.js":
/*!*****************************************************************!*\
  !*** ../red-agate-barcode/modules/barcode/data/Code128.data.js ***!
  \*****************************************************************/
/*! exports provided: charactersMap, fullAsciiMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "charactersMap", function() { return charactersMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fullAsciiMap", function() { return fullAsciiMap; });
// Copyright (c) 2017, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln
const charactersMap = new Map([["\x00", {
  index: 0,
  pattern: "212222"
}], ["\x01", {
  index: 1,
  pattern: "222122"
}], ["\x02", {
  index: 2,
  pattern: "222221"
}], ["\x03", {
  index: 3,
  pattern: "121223"
}], ["\x04", {
  index: 4,
  pattern: "121322"
}], ["\x05", {
  index: 5,
  pattern: "131222"
}], ["\x06", {
  index: 6,
  pattern: "122213"
}], ["\x07", {
  index: 7,
  pattern: "122312"
}], ["\x08", {
  index: 8,
  pattern: "132212"
}], ["\x09", {
  index: 9,
  pattern: "221213"
}], ["\x0A", {
  index: 10,
  pattern: "221312"
}], ["\x0B", {
  index: 11,
  pattern: "231212"
}], ["\x0C", {
  index: 12,
  pattern: "112232"
}], ["\x0D", {
  index: 13,
  pattern: "122132"
}], ["\x0E", {
  index: 14,
  pattern: "122231"
}], ["\x0F", {
  index: 15,
  pattern: "113222"
}], ["\x10", {
  index: 16,
  pattern: "123122"
}], ["\x11", {
  index: 17,
  pattern: "123221"
}], ["\x12", {
  index: 18,
  pattern: "223211"
}], ["\x13", {
  index: 19,
  pattern: "221132"
}], ["\x14", {
  index: 20,
  pattern: "221231"
}], ["\x15", {
  index: 21,
  pattern: "213212"
}], ["\x16", {
  index: 22,
  pattern: "223112"
}], ["\x17", {
  index: 23,
  pattern: "312131"
}], ["\x18", {
  index: 24,
  pattern: "311222"
}], ["\x19", {
  index: 25,
  pattern: "321122"
}], ["\x1A", {
  index: 26,
  pattern: "321221"
}], ["\x1B", {
  index: 27,
  pattern: "312212"
}], ["\x1C", {
  index: 28,
  pattern: "322112"
}], ["\x1D", {
  index: 29,
  pattern: "322211"
}], ["\x1E", {
  index: 30,
  pattern: "212123"
}], ["\x1F", {
  index: 31,
  pattern: "212321"
}], ["\x20", {
  index: 32,
  pattern: "232121"
}], ["\x21", {
  index: 33,
  pattern: "111323"
}], ["\x22", {
  index: 34,
  pattern: "131123"
}], ["\x23", {
  index: 35,
  pattern: "131321"
}], ["\x24", {
  index: 36,
  pattern: "112313"
}], ["\x25", {
  index: 37,
  pattern: "132113"
}], ["\x26", {
  index: 38,
  pattern: "132311"
}], ["\x27", {
  index: 39,
  pattern: "211313"
}], ["\x28", {
  index: 40,
  pattern: "231113"
}], ["\x29", {
  index: 41,
  pattern: "231311"
}], ["\x2A", {
  index: 42,
  pattern: "112133"
}], ["\x2B", {
  index: 43,
  pattern: "112331"
}], ["\x2C", {
  index: 44,
  pattern: "132131"
}], ["\x2D", {
  index: 45,
  pattern: "113123"
}], ["\x2E", {
  index: 46,
  pattern: "113321"
}], ["\x2F", {
  index: 47,
  pattern: "133121"
}], ["\x30", {
  index: 48,
  pattern: "313121"
}], ["\x31", {
  index: 49,
  pattern: "211331"
}], ["\x32", {
  index: 50,
  pattern: "231131"
}], ["\x33", {
  index: 51,
  pattern: "213113"
}], ["\x34", {
  index: 52,
  pattern: "213311"
}], ["\x35", {
  index: 53,
  pattern: "213131"
}], ["\x36", {
  index: 54,
  pattern: "311123"
}], ["\x37", {
  index: 55,
  pattern: "311321"
}], ["\x38", {
  index: 56,
  pattern: "331121"
}], ["\x39", {
  index: 57,
  pattern: "312113"
}], ["\x3A", {
  index: 58,
  pattern: "312311"
}], ["\x3B", {
  index: 59,
  pattern: "332111"
}], ["\x3C", {
  index: 60,
  pattern: "314111"
}], ["\x3D", {
  index: 61,
  pattern: "221411"
}], ["\x3E", {
  index: 62,
  pattern: "431111"
}], ["\x3F", {
  index: 63,
  pattern: "111224"
}], ["\x40", {
  index: 64,
  pattern: "111422"
}], ["\x41", {
  index: 65,
  pattern: "121124"
}], ["\x42", {
  index: 66,
  pattern: "121421"
}], ["\x43", {
  index: 67,
  pattern: "141122"
}], ["\x44", {
  index: 68,
  pattern: "141221"
}], ["\x45", {
  index: 69,
  pattern: "112214"
}], ["\x46", {
  index: 70,
  pattern: "112412"
}], ["\x47", {
  index: 71,
  pattern: "122114"
}], ["\x48", {
  index: 72,
  pattern: "122411"
}], ["\x49", {
  index: 73,
  pattern: "142112"
}], ["\x4A", {
  index: 74,
  pattern: "142211"
}], ["\x4B", {
  index: 75,
  pattern: "241211"
}], ["\x4C", {
  index: 76,
  pattern: "221114"
}], ["\x4D", {
  index: 77,
  pattern: "413111"
}], ["\x4E", {
  index: 78,
  pattern: "241112"
}], ["\x4F", {
  index: 79,
  pattern: "134111"
}], ["\x50", {
  index: 80,
  pattern: "111242"
}], ["\x51", {
  index: 81,
  pattern: "121142"
}], ["\x52", {
  index: 82,
  pattern: "121241"
}], ["\x53", {
  index: 83,
  pattern: "114212"
}], ["\x54", {
  index: 84,
  pattern: "124112"
}], ["\x55", {
  index: 85,
  pattern: "124211"
}], ["\x56", {
  index: 86,
  pattern: "411212"
}], ["\x57", {
  index: 87,
  pattern: "421112"
}], ["\x58", {
  index: 88,
  pattern: "421211"
}], ["\x59", {
  index: 89,
  pattern: "212141"
}], ["\x5A", {
  index: 90,
  pattern: "214121"
}], ["\x5B", {
  index: 91,
  pattern: "412121"
}], ["\x5C", {
  index: 92,
  pattern: "111143"
}], ["\x5D", {
  index: 93,
  pattern: "111341"
}], ["\x5E", {
  index: 94,
  pattern: "131141"
}], ["\x5F", {
  index: 95,
  pattern: "114113"
}], ["\x60", {
  index: 96,
  pattern: "114311"
}], ["\x61", {
  index: 97,
  pattern: "411113"
}], ["\x62", {
  index: 98,
  pattern: "411311"
}], ["\x63", {
  index: 99,
  pattern: "113141"
}], ["\x64", {
  index: 100,
  pattern: "114131"
}], ["\x65", {
  index: 101,
  pattern: "311141"
}], ["\x66", {
  index: 102,
  pattern: "411131"
}], ["\x67", {
  index: 103,
  pattern: "211412"
}], ["\x68", {
  index: 104,
  pattern: "211214"
}], ["\x69", {
  index: 105,
  pattern: "211232"
}], ["\x6A", {
  index: 106,
  pattern: "2331112"
}] // stop
]);
const fullAsciiMap = new Map([[0, ["\x40", null]], [1, ["\x41", null]], [2, ["\x42", null]], [3, ["\x43", null]], [4, ["\x44", null]], [5, ["\x45", null]], [6, ["\x46", null]], [7, ["\x47", null]], [8, ["\x48", null]], [9, ["\x49", null]], [0, ["\x4A", null]], [11, ["\x4B", null]], [12, ["\x4C", null]], [13, ["\x4D", null]], [14, ["\x4E", null]], [15, ["\x4F", null]], [16, ["\x50", null]], [17, ["\x51", null]], [18, ["\x52", null]], [19, ["\x53", null]], [20, ["\x54", null]], [21, ["\x55", null]], [22, ["\x56", null]], [23, ["\x57", null]], [24, ["\x58", null]], [25, ["\x59", null]], [26, ["\x5A", null]], [27, ["\x5B", null]], [28, ["\x5C", null]], [29, ["\x5D", null]], [30, ["\x5E", null]], [31, ["\x5F", null]], [32, ["\x00", "\x00"]], [33, ["\x01", "\x01"]], [34, ["\x02", "\x02"]], [35, ["\x03", "\x03"]], [36, ["\x04", "\x04"]], [37, ["\x05", "\x05"]], [38, ["\x06", "\x06"]], [39, ["\x07", "\x07"]], [40, ["\x08", "\x08"]], [41, ["\x09", "\x09"]], [42, ["\x0A", "\x0A"]], [43, ["\x0B", "\x0B"]], [44, ["\x0C", "\x0C"]], [45, ["\x0D", "\x0D"]], [46, ["\x0E", "\x0E"]], [47, ["\x0F", "\x0F"]], [48, ["\x10", "\x10"]], [49, ["\x11", "\x11"]], [50, ["\x12", "\x12"]], [51, ["\x13", "\x13"]], [52, ["\x14", "\x14"]], [53, ["\x15", "\x15"]], [54, ["\x16", "\x16"]], [55, ["\x17", "\x17"]], [56, ["\x18", "\x18"]], [57, ["\x19", "\x19"]], [58, ["\x1A", "\x1A"]], [59, ["\x1B", "\x1B"]], [60, ["\x1C", "\x1C"]], [61, ["\x1D", "\x1D"]], [62, ["\x1E", "\x1E"]], [63, ["\x1F", "\x1F"]], [64, ["\x20", "\x20"]], [65, ["\x21", "\x21"]], [66, ["\x22", "\x22"]], [67, ["\x23", "\x23"]], [68, ["\x24", "\x24"]], [69, ["\x25", "\x25"]], [70, ["\x26", "\x26"]], [71, ["\x27", "\x27"]], [72, ["\x28", "\x28"]], [73, ["\x29", "\x29"]], [74, ["\x2A", "\x2A"]], [75, ["\x2B", "\x2B"]], [76, ["\x2C", "\x2C"]], [77, ["\x2D", "\x2D"]], [78, ["\x2E", "\x2E"]], [79, ["\x2F", "\x2F"]], [80, ["\x30", "\x30"]], [81, ["\x31", "\x31"]], [82, ["\x32", "\x32"]], [83, ["\x33", "\x33"]], [84, ["\x34", "\x34"]], [85, ["\x35", "\x35"]], [86, ["\x36", "\x36"]], [87, ["\x37", "\x37"]], [88, ["\x38", "\x38"]], [89, ["\x39", "\x39"]], [90, ["\x3A", "\x3A"]], [91, ["\x3B", "\x3B"]], [92, ["\x3C", "\x3C"]], [93, ["\x3D", "\x3D"]], [94, ["\x3E", "\x3E"]], [95, ["\x3F", "\x3F"]], [96, [null, "\x40"]], [97, [null, "\x41"]], [98, [null, "\x42"]], [99, [null, "\x43"]], [100, [null, "\x44"]], [101, [null, "\x45"]], [102, [null, "\x46"]], [103, [null, "\x47"]], [104, [null, "\x48"]], [105, [null, "\x49"]], [106, [null, "\x4A"]], [107, [null, "\x4B"]], [108, [null, "\x4C"]], [109, [null, "\x4D"]], [110, [null, "\x4E"]], [111, [null, "\x4F"]], [112, [null, "\x50"]], [113, [null, "\x51"]], [114, [null, "\x52"]], [115, [null, "\x53"]], [116, [null, "\x54"]], [117, [null, "\x55"]], [118, [null, "\x56"]], [119, [null, "\x57"]], [120, [null, "\x58"]], [121, [null, "\x59"]], [122, [null, "\x5A"]], [123, [null, "\x5B"]], [124, [null, "\x5C"]], [125, [null, "\x5D"]], [126, [null, "\x5E"]], [127, [null, "\x5F"]], [128, ["\x66", "\x66", "\x66"]], [129, ["\x61", "\x61", null]], [130, ["\x60", "\x60", null]], [131, ["\x65", "\x64", null]], [132, [null, "\x65", "\x65"]], [133, ["\x64", null, "\x64"]], [134, ["\x63", "\x63", null]], [135, [null, "\x62", null]], [135, ["\x62", null, null]]]);

/***/ }),

/***/ "../red-agate-barcode/modules/barcode/data/Code39.data.js":
/*!****************************************************************!*\
  !*** ../red-agate-barcode/modules/barcode/data/Code39.data.js ***!
  \****************************************************************/
/*! exports provided: charactersMap, reverseMap, fullAsciiMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "charactersMap", function() { return charactersMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reverseMap", function() { return reverseMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fullAsciiMap", function() { return fullAsciiMap; });
// Copyright (c) 2017, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln
const charactersMap = new Map([["0", {
  index: 0,
  pattern: "1112212110"
}], ["1", {
  index: 1,
  pattern: "2112111120"
}], ["2", {
  index: 2,
  pattern: "1122111120"
}], ["3", {
  index: 3,
  pattern: "2122111110"
}], ["4", {
  index: 4,
  pattern: "1112211120"
}], ["5", {
  index: 5,
  pattern: "2112211110"
}], ["6", {
  index: 6,
  pattern: "1122211110"
}], ["7", {
  index: 7,
  pattern: "1112112120"
}], ["8", {
  index: 8,
  pattern: "2112112110"
}], ["9", {
  index: 9,
  pattern: "1122112110"
}], ["A", {
  index: 10,
  pattern: "2111121120"
}], ["B", {
  index: 11,
  pattern: "1121121120"
}], ["C", {
  index: 12,
  pattern: "2121121110"
}], ["D", {
  index: 13,
  pattern: "1111221120"
}], ["E", {
  index: 14,
  pattern: "2111221110"
}], ["F", {
  index: 15,
  pattern: "1121221110"
}], ["G", {
  index: 16,
  pattern: "1111122120"
}], ["H", {
  index: 17,
  pattern: "2111122110"
}], ["I", {
  index: 18,
  pattern: "1121122110"
}], ["J", {
  index: 19,
  pattern: "1111222110"
}], ["K", {
  index: 20,
  pattern: "2111111220"
}], ["L", {
  index: 21,
  pattern: "1121111220"
}], ["M", {
  index: 22,
  pattern: "2121111210"
}], ["N", {
  index: 23,
  pattern: "1111211220"
}], ["O", {
  index: 24,
  pattern: "2111211210"
}], ["P", {
  index: 25,
  pattern: "1121211210"
}], ["Q", {
  index: 26,
  pattern: "1111112220"
}], ["R", {
  index: 27,
  pattern: "2111112210"
}], ["S", {
  index: 28,
  pattern: "1121112210"
}], ["T", {
  index: 29,
  pattern: "1111212210"
}], ["U", {
  index: 30,
  pattern: "2211111120"
}], ["V", {
  index: 31,
  pattern: "1221111120"
}], ["W", {
  index: 32,
  pattern: "2221111110"
}], ["X", {
  index: 33,
  pattern: "1211211120"
}], ["Y", {
  index: 34,
  pattern: "2211211110"
}], ["Z", {
  index: 35,
  pattern: "1221211110"
}], ["-", {
  index: 36,
  pattern: "1211112120"
}], [".", {
  index: 37,
  pattern: "2211112110"
}], [" ", {
  index: 38,
  pattern: "1221112110"
}], ["$", {
  index: 39,
  pattern: "1212121110"
}], ["/", {
  index: 40,
  pattern: "1212111210"
}], ["+", {
  index: 41,
  pattern: "1211121210"
}], ["%", {
  index: 42,
  pattern: "1112121210"
}], ["*", {
  index: 43,
  pattern: "1211212110"
}]]);
const reverseMap = new Map();

for (const e of charactersMap.entries()) reverseMap.set(e[1].index, e[0]);

const fullAsciiMap = new Map([[0, "%U"], [1, "$A"], [2, "$B"], [3, "$C"], [4, "$D"], [5, "$E"], [6, "$F"], [7, "$G"], [8, "$H"], [9, "$I"], [0, "$J"], [11, "$K"], [12, "$L"], [13, "$M"], [14, "$N"], [15, "$O"], [16, "$P"], [17, "$Q"], [18, "$R"], [19, "$S"], [20, "$T"], [21, "$U"], [22, "$V"], [23, "$W"], [24, "$X"], [25, "$Y"], [26, "$Z"], [27, "%A"], [28, "%B"], [29, "%C"], [30, "%D"], [31, "%E"], [32, " "], [33, "/A"], [34, "/B"], [35, "/C"], [36, "/D"], [37, "/E"], [38, "/F"], [39, "/G"], [40, "/H"], [41, "/I"], [42, "/J"], [43, "/K"], [44, "/L"], [45, "-"], [46, "."], [47, "/"], [48, "0"], [49, "1"], [50, "2"], [51, "3"], [52, "4"], [53, "5"], [54, "6"], [55, "7"], [56, "8"], [57, "9"], [58, "/Z"], [59, "%F"], [60, "%G"], [61, "%H"], [62, "%I"], [63, "%J"], [64, "%V"], [65, "A"], [66, "B"], [67, "C"], [68, "D"], [69, "E"], [70, "F"], [71, "G"], [72, "H"], [73, "I"], [74, "J"], [75, "K"], [76, "L"], [77, "M"], [78, "N"], [79, "O"], [80, "P"], [81, "Q"], [82, "R"], [83, "S"], [84, "T"], [85, "U"], [86, "V"], [87, "W"], [88, "X"], [89, "Y"], [90, "Z"], [91, "%K"], [92, "%L"], [93, "%M"], [94, "%N"], [95, "%O"], [96, "%W"], [97, "+A"], [98, "+B"], [99, "+C"], [100, "+D"], [101, "+E"], [102, "+F"], [103, "+G"], [104, "+H"], [105, "+I"], [106, "+J"], [107, "+K"], [108, "+L"], [109, "+M"], [110, "+N"], [111, "+O"], [112, "+P"], [113, "+Q"], [114, "+R"], [115, "+S"], [116, "+T"], [117, "+U"], [118, "+V"], [119, "+W"], [120, "+X"], [121, "+Y"], [122, "+Z"], [123, "%P"], [124, "%Q"], [125, "%R"], [126, "%S"], [127, "%T"] // DEL
]);

/***/ }),

/***/ "../red-agate-barcode/modules/barcode/data/Ean.data.js":
/*!*************************************************************!*\
  !*** ../red-agate-barcode/modules/barcode/data/Ean.data.js ***!
  \*************************************************************/
/*! exports provided: charactersMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "charactersMap", function() { return charactersMap; });
// Copyright (c) 2017, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln
const charactersMap = new Map([// left even(G)
["\x00", {
  index: 0,
  pattern: "-1123"
}], ["\x01", {
  index: 1,
  pattern: "-1222"
}], ["\x02", {
  index: 2,
  pattern: "-2212"
}], ["\x03", {
  index: 3,
  pattern: "-1141"
}], ["\x04", {
  index: 4,
  pattern: "-2311"
}], ["\x05", {
  index: 5,
  pattern: "-1321"
}], ["\x06", {
  index: 6,
  pattern: "-4111"
}], ["\x07", {
  index: 7,
  pattern: "-2131"
}], ["\x08", {
  index: 8,
  pattern: "-3121"
}], ["\x09", {
  index: 9,
  pattern: "-2113"
}], // left odd(L)
["\x10", {
  index: 10,
  pattern: "-3211"
}], ["\x11", {
  index: 11,
  pattern: "-2221"
}], ["\x12", {
  index: 12,
  pattern: "-2122"
}], ["\x13", {
  index: 13,
  pattern: "-1411"
}], ["\x14", {
  index: 14,
  pattern: "-1132"
}], ["\x15", {
  index: 15,
  pattern: "-1231"
}], ["\x16", {
  index: 16,
  pattern: "-1114"
}], ["\x17", {
  index: 17,
  pattern: "-1312"
}], ["\x18", {
  index: 18,
  pattern: "-1213"
}], ["\x19", {
  index: 19,
  pattern: "-3112"
}], // right even(R)
["\x20", {
  index: 20,
  pattern: "3211"
}], ["\x21", {
  index: 21,
  pattern: "2221"
}], ["\x22", {
  index: 22,
  pattern: "2122"
}], ["\x23", {
  index: 23,
  pattern: "1411"
}], ["\x24", {
  index: 24,
  pattern: "1132"
}], ["\x25", {
  index: 25,
  pattern: "1231"
}], ["\x26", {
  index: 26,
  pattern: "1114"
}], ["\x27", {
  index: 27,
  pattern: "1312"
}], ["\x28", {
  index: 28,
  pattern: "1213"
}], ["\x29", {
  index: 29,
  pattern: "3112"
}], // left even-odd (even(G):0, odd(L):1)
["\x30", {
  index: 30,
  pattern: "111111"
}], ["\x31", {
  index: 31,
  pattern: "110100"
}], ["\x32", {
  index: 32,
  pattern: "110010"
}], ["\x33", {
  index: 33,
  pattern: "110001"
}], ["\x34", {
  index: 34,
  pattern: "101100"
}], ["\x35", {
  index: 35,
  pattern: "100110"
}], ["\x36", {
  index: 36,
  pattern: "100011"
}], ["\x37", {
  index: 37,
  pattern: "101010"
}], ["\x38", {
  index: 38,
  pattern: "101001"
}], ["\x39", {
  index: 39,
  pattern: "100101"
}], // left guard bar
["\x40", {
  index: 40,
  pattern: "111"
}], // center bar
["\x50", {
  index: 50,
  pattern: "-11111"
}], // right guard bar
["\x60", {
  index: 60,
  pattern: "111"
}], // EAN-5 checksum (even(G):0, odd(L):1)
["\x70", {
  index: 70,
  pattern: "00111"
}], ["\x71", {
  index: 71,
  pattern: "01011"
}], ["\x72", {
  index: 72,
  pattern: "01101"
}], ["\x73", {
  index: 73,
  pattern: "01110"
}], ["\x74", {
  index: 74,
  pattern: "10011"
}], ["\x75", {
  index: 75,
  pattern: "11001"
}], ["\x76", {
  index: 76,
  pattern: "11100"
}], ["\x77", {
  index: 77,
  pattern: "10101"
}], ["\x78", {
  index: 78,
  pattern: "10110"
}], ["\x79", {
  index: 79,
  pattern: "11010"
}], // EAN-2 checksum (even(G):0, odd(L):1)
["\x80", {
  index: 80,
  pattern: "11"
}], ["\x81", {
  index: 81,
  pattern: "10"
}], ["\x82", {
  index: 82,
  pattern: "01"
}], ["\x83", {
  index: 83,
  pattern: "00"
}], // EAN-5/2 start
["\x90", {
  index: 90,
  pattern: "-1112"
}], // EAN-5/2 character separator
["\x91", {
  index: 91,
  pattern: "-11"
}], // UPC-E start
["\x92", {
  index: 92,
  pattern: "112"
}], // UPC-E stop
["\x93", {
  index: 93,
  pattern: "-111111"
}], // UPC-E Number system 0 even-odd (even(G):0, odd(L):1)
["\xA0", {
  index: 100,
  pattern: "000111"
}], ["\xA1", {
  index: 101,
  pattern: "001011"
}], ["\xA2", {
  index: 102,
  pattern: "001101"
}], ["\xA3", {
  index: 103,
  pattern: "001110"
}], ["\xA4", {
  index: 104,
  pattern: "010011"
}], ["\xA5", {
  index: 105,
  pattern: "011001"
}], ["\xA6", {
  index: 106,
  pattern: "011100"
}], ["\xA7", {
  index: 107,
  pattern: "010101"
}], ["\xA8", {
  index: 108,
  pattern: "010110"
}], ["\xA9", {
  index: 109,
  pattern: "011010"
}], // UPC-E Number system 1 even-odd (even(G):0, odd(L):1)
["\xB0", {
  index: 110,
  pattern: "111000"
}], ["\xB1", {
  index: 111,
  pattern: "110100"
}], ["\xB2", {
  index: 112,
  pattern: "110010"
}], ["\xB3", {
  index: 113,
  pattern: "110001"
}], ["\xB4", {
  index: 114,
  pattern: "101100"
}], ["\xB5", {
  index: 115,
  pattern: "100110"
}], ["\xB6", {
  index: 116,
  pattern: "100011"
}], ["\xB7", {
  index: 117,
  pattern: "101010"
}], ["\xB8", {
  index: 118,
  pattern: "101001"
}], ["\xB9", {
  index: 119,
  pattern: "100101"
}]]);

/***/ }),

/***/ "../red-agate-barcode/modules/barcode/data/Itf.data.js":
/*!*************************************************************!*\
  !*** ../red-agate-barcode/modules/barcode/data/Itf.data.js ***!
  \*************************************************************/
/*! exports provided: charactersMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "charactersMap", function() { return charactersMap; });
// Copyright (c) 2017, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln
const characterPatterns = new Map([[0, "11221"], [1, "21112"], [2, "12112"], [3, "22111"], [4, "11212"], [5, "21211"], [6, "12211"], [7, "11122"], [8, "21121"], [9, "12121"]]);
const charactersMap = new Map();

for (const a of characterPatterns) {
  for (const b of characterPatterns) {
    const x = a[0] * 10 + b[0];
    const c = String.fromCharCode(x);
    let p = "";

    for (let i = 0; i < 5; i++) {
      p += a[1][i] + b[1][i];
    }

    charactersMap.set(c, {
      index: x,
      pattern: p
    });
  }
}

charactersMap.set("\x64", {
  index: 100,
  pattern: "1111"
}); // start

charactersMap.set("\x65", {
  index: 101,
  pattern: "211"
}); // stop

/***/ }),

/***/ "../red-agate-barcode/modules/barcode/data/JapanPostal.data.js":
/*!*********************************************************************!*\
  !*** ../red-agate-barcode/modules/barcode/data/JapanPostal.data.js ***!
  \*********************************************************************/
/*! exports provided: charactersMap, reverseMap, fullAsciiMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "charactersMap", function() { return charactersMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reverseMap", function() { return reverseMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fullAsciiMap", function() { return fullAsciiMap; });
// Copyright (c) 2017, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln
const charactersMap = new Map([["0", {
  index: 0,
  pattern: "144"
}], ["1", {
  index: 1,
  pattern: "114"
}], ["2", {
  index: 2,
  pattern: "132"
}], ["3", {
  index: 3,
  pattern: "312"
}], ["4", {
  index: 4,
  pattern: "123"
}], ["5", {
  index: 5,
  pattern: "141"
}], ["6", {
  index: 6,
  pattern: "321"
}], ["7", {
  index: 7,
  pattern: "213"
}], ["8", {
  index: 8,
  pattern: "231"
}], ["9", {
  index: 9,
  pattern: "411"
}], ["-", {
  index: 10,
  pattern: "414"
}], ["A", {
  index: 11,
  pattern: "324"
}], ["B", {
  index: 12,
  pattern: "342"
}], ["C", {
  index: 13,
  pattern: "234"
}], ["D", {
  index: 14,
  pattern: "432"
}], ["E", {
  index: 15,
  pattern: "243"
}], ["F", {
  index: 16,
  pattern: "423"
}], ["G", {
  index: 17,
  pattern: "441"
}], ["H", {
  index: 18,
  pattern: "111"
}], ["[", {
  index: 19,
  pattern: "13"
}], ["]", {
  index: 38,
  pattern: "31"
}] // stop
]);
const reverseMap = new Map();

for (const e of charactersMap.entries()) reverseMap.set(e[1].index, e[0]);

const fullAsciiMap = new Map([[45, "-"], [48, "0"], [49, "1"], [50, "2"], [51, "3"], [52, "4"], [53, "5"], [54, "6"], [55, "7"], [56, "8"], [57, "9"], [65, "A0"], [66, "A1"], [67, "A2"], [68, "A3"], [69, "A4"], [70, "A5"], [71, "A6"], [72, "A7"], [73, "A8"], [74, "A9"], [75, "B0"], [76, "B1"], [77, "B2"], [78, "B3"], [79, "B4"], [80, "B5"], [81, "B6"], [82, "B7"], [83, "B8"], [84, "B9"], [85, "C0"], [86, "C1"], [87, "C2"], [88, "C3"], [89, "C4"], [90, "C5"]]);

/***/ }),

/***/ "../red-agate-barcode/modules/barcode/data/Nw7.data.js":
/*!*************************************************************!*\
  !*** ../red-agate-barcode/modules/barcode/data/Nw7.data.js ***!
  \*************************************************************/
/*! exports provided: charactersMap, reverseMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "charactersMap", function() { return charactersMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reverseMap", function() { return reverseMap; });
// Copyright (c) 2017, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln
const charactersMap = new Map([["0", {
  index: 0,
  pattern: "11111220",
  width: 9
}], ["1", {
  index: 1,
  pattern: "11112210",
  width: 9
}], ["2", {
  index: 2,
  pattern: "11121120",
  width: 9
}], ["3", {
  index: 3,
  pattern: "22111110",
  width: 9
}], ["4", {
  index: 4,
  pattern: "11211210",
  width: 9
}], ["5", {
  index: 5,
  pattern: "21111210",
  width: 9
}], ["6", {
  index: 6,
  pattern: "12111120",
  width: 9
}], ["7", {
  index: 7,
  pattern: "12112110",
  width: 9
}], ["8", {
  index: 8,
  pattern: "12211110",
  width: 9
}], ["9", {
  index: 9,
  pattern: "21121110",
  width: 9
}], ["-", {
  index: 10,
  pattern: "11122110",
  width: 9
}], ["$", {
  index: 11,
  pattern: "11221110",
  width: 9
}], [":", {
  index: 12,
  pattern: "21112120",
  width: 10
}], ["/", {
  index: 13,
  pattern: "21211120",
  width: 10
}], [".", {
  index: 14,
  pattern: "21212110",
  width: 10
}], ["+", {
  index: 15,
  pattern: "11212120",
  width: 10
}], ["A", {
  index: 16,
  pattern: "11221210",
  width: 10
}], ["B", {
  index: 17,
  pattern: "12121120",
  width: 10
}], ["C", {
  index: 18,
  pattern: "11121220",
  width: 10
}], ["D", {
  index: 19,
  pattern: "11122210",
  width: 10
}]]);
const reverseMap = new Map();

for (const e of charactersMap.entries()) reverseMap.set(e[1].index, e[0]);

/***/ }),

/***/ "../red-agate-barcode/modules/barcode/data/Qr.m2.data.js":
/*!***************************************************************!*\
  !*** ../red-agate-barcode/modules/barcode/data/Qr.m2.data.js ***!
  \***************************************************************/
/*! exports provided: matrixSize, dataCodewords, segments, alignmentPatterns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matrixSize", function() { return matrixSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataCodewords", function() { return dataCodewords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "segments", function() { return segments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alignmentPatterns", function() { return alignmentPatterns; });
// Copyright (c) 2017, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln
// tslint:disable:whitespace
const matrixSize = [0, 21, 25, 29, 33, 37, 41, 45, 49, 53, 57, 61, 65, 69, 73, 77, 81, 85, 89, 93, 97, 101, 105, 109, 113, 117, 121, 125, 129, 133, 137, 141, 145, 149, 153, 157, 161, 165, 169, 173, 177];
const dataCodewords = {
  L: [0, 19, 34, 55, 80, 108, 136, 156, 194, 232, 274, 324, 370, 428, 461, 523, 589, 647, 721, 795, 861, 932, 1006, 1094, 1174, 1276, 1370, 1468, 1531, 1631, 1735, 1843, 1955, 2071, 2191, 2306, 2434, 2566, 2702, 2812, 2956],
  M: [0, 16, 28, 44, 64, 86, 108, 124, 154, 182, 216, 254, 290, 334, 365, 415, 453, 507, 563, 627, 669, 714, 782, 860, 914, 1000, 1062, 1128, 1193, 1267, 1373, 1455, 1541, 1631, 1725, 1812, 1914, 1992, 2102, 2216, 2334],
  Q: [0, 13, 22, 34, 48, 62, 76, 88, 110, 132, 154, 180, 206, 244, 261, 295, 325, 367, 397, 445, 485, 512, 568, 614, 664, 718, 754, 808, 871, 911, 985, 1033, 1115, 1171, 1231, 1286, 1354, 1426, 1502, 1582, 1666],
  H: [0, 9, 16, 26, 36, 46, 60, 66, 86, 100, 122, 140, 158, 180, 197, 223, 253, 283, 313, 341, 385, 406, 442, 464, 514, 538, 596, 628, 661, 701, 745, 793, 845, 901, 961, 986, 1054, 1096, 1142, 1222, 1276]
};
const segments = [// [[repeat, totalCodewords, dataCodewords, correctableCodewords], ...]
{
  L: [[0, 0, 0, 0]],
  M: [[0, 0, 0, 0]],
  Q: [[0, 0, 0, 0]],
  H: [[0, 0, 0, 0]]
}, {
  L: [[1, 26, 19, 2]],
  M: [[1, 26, 16, 4]],
  Q: [[1, 26, 13, 6]],
  H: [[1, 26, 9, 8]]
}, {
  L: [[1, 44, 34, 4]],
  M: [[1, 44, 28, 8]],
  Q: [[1, 44, 22, 11]],
  H: [[1, 44, 16, 14]]
}, {
  L: [[1, 70, 55, 7]],
  M: [[1, 70, 44, 13]],
  Q: [[2, 35, 17, 9]],
  H: [[2, 35, 13, 11]]
}, {
  L: [[1, 100, 80, 10]],
  M: [[2, 50, 32, 9]],
  Q: [[2, 50, 24, 13]],
  H: [[4, 25, 9, 8]]
}, {
  L: [[1, 134, 108, 13]],
  M: [[2, 67, 43, 12]],
  Q: [[2, 33, 15, 9], [2, 34, 16, 9]],
  H: [[2, 33, 11, 11], [2, 34, 12, 11]]
}, {
  L: [[2, 86, 68, 9]],
  M: [[4, 43, 27, 8]],
  Q: [[4, 43, 19, 12]],
  H: [[4, 43, 15, 14]]
}, {
  L: [[2, 98, 78, 10]],
  M: [[4, 49, 31, 9]],
  Q: [[2, 32, 14, 9], [4, 33, 15, 9]],
  H: [[4, 39, 13, 13], [1, 40, 14, 13]]
}, {
  L: [[2, 121, 97, 12]],
  M: [[2, 60, 38, 11], [2, 61, 39, 11]],
  Q: [[4, 40, 18, 11], [2, 41, 19, 11]],
  H: [[4, 40, 14, 13], [2, 41, 15, 13]]
}, {
  L: [[2, 146, 116, 15]],
  M: [[3, 58, 36, 11], [2, 59, 37, 11]],
  Q: [[4, 36, 16, 10], [4, 37, 17, 10]],
  H: [[4, 36, 12, 12], [4, 37, 13, 12]]
}, {
  L: [[2, 86, 68, 9], [2, 87, 69, 9]],
  M: [[4, 69, 43, 13], [1, 70, 44, 13]],
  Q: [[6, 43, 19, 12], [2, 44, 20, 12]],
  H: [[6, 43, 15, 14], [2, 44, 16, 14]]
}, {
  L: [[4, 101, 81, 10]],
  M: [[1, 80, 50, 15], [4, 81, 51, 15]],
  Q: [[4, 50, 22, 14], [4, 51, 23, 14]],
  H: [[3, 36, 12, 12], [8, 37, 13, 12]]
}, {
  L: [[2, 116, 92, 12], [2, 117, 93, 12]],
  M: [[6, 58, 36, 11], [2, 59, 37, 11]],
  Q: [[4, 46, 20, 13], [6, 47, 21, 13]],
  H: [[7, 42, 14, 14], [4, 43, 15, 14]]
}, {
  L: [[4, 133, 107, 13]],
  M: [[8, 59, 37, 11], [1, 60, 38, 11]],
  Q: [[8, 44, 20, 13], [4, 45, 21, 13]],
  H: [[12, 33, 11, 14], [4, 34, 12, 14]]
}, {
  L: [[3, 145, 115, 15], [1, 146, 116, 15]],
  M: [[4, 64, 40, 12], [5, 65, 41, 12]],
  Q: [[11, 36, 16, 10], [5, 37, 17, 10]],
  H: [[11, 36, 12, 12], [5, 37, 13, 12]]
}, {
  L: [[5, 109, 87, 11], [1, 110, 88, 11]],
  M: [[5, 65, 41, 12], [5, 66, 42, 12]],
  Q: [[5, 54, 24, 15], [7, 55, 25, 15]],
  H: [[11, 36, 12, 12], [7, 37, 13, 12]]
}, {
  L: [[5, 122, 98, 12], [1, 123, 99, 12]],
  M: [[7, 73, 45, 14], [3, 74, 46, 14]],
  Q: [[15, 43, 19, 12], [2, 44, 20, 12]],
  H: [[3, 45, 15, 15], [13, 46, 16, 15]]
}, {
  L: [[1, 135, 107, 14], [5, 136, 108, 14]],
  M: [[10, 74, 46, 14], [1, 75, 47, 14]],
  Q: [[1, 50, 22, 14], [15, 51, 23, 14]],
  H: [[2, 42, 14, 14], [17, 43, 15, 14]]
}, {
  L: [[5, 150, 120, 15], [1, 151, 121, 15]],
  M: [[9, 69, 43, 13], [4, 70, 44, 13]],
  Q: [[17, 50, 22, 14], [1, 51, 23, 14]],
  H: [[2, 42, 14, 14], [19, 43, 15, 14]]
}, {
  L: [[3, 141, 113, 14], [4, 142, 114, 14]],
  M: [[3, 70, 44, 13], [11, 71, 45, 13]],
  Q: [[17, 47, 21, 13], [4, 48, 22, 13]],
  H: [[9, 39, 13, 13], [16, 40, 14, 13]]
}, {
  L: [[3, 135, 107, 14], [5, 136, 108, 14]],
  M: [[3, 67, 41, 13], [13, 68, 42, 13]],
  Q: [[15, 54, 24, 15], [5, 55, 25, 15]],
  H: [[15, 43, 15, 14], [10, 44, 16, 14]]
}, {
  L: [[4, 144, 116, 14], [4, 145, 117, 14]],
  M: [[17, 68, 42, 13]],
  Q: [[17, 50, 22, 14], [6, 51, 23, 14]],
  H: [[19, 46, 16, 15], [6, 47, 17, 15]]
}, {
  L: [[2, 139, 111, 14], [7, 140, 112, 14]],
  M: [[17, 74, 46, 14]],
  Q: [[7, 54, 24, 15], [16, 55, 25, 15]],
  H: [[34, 37, 13, 12]]
}, {
  L: [[4, 151, 121, 15], [5, 152, 122, 15]],
  M: [[4, 75, 47, 14], [14, 76, 48, 14]],
  Q: [[11, 54, 24, 15], [14, 55, 25, 15]],
  H: [[16, 45, 15, 15], [14, 46, 16, 15]]
}, {
  L: [[6, 147, 117, 15], [4, 148, 118, 15]],
  M: [[6, 73, 45, 14], [14, 74, 46, 14]],
  Q: [[11, 54, 24, 15], [16, 55, 25, 15]],
  H: [[30, 46, 16, 15], [2, 47, 17, 15]]
}, {
  L: [[8, 132, 106, 13], [4, 133, 107, 13]],
  M: [[8, 75, 47, 14], [13, 76, 48, 14]],
  Q: [[7, 54, 24, 15], [22, 55, 25, 15]],
  H: [[22, 45, 15, 15], [13, 46, 16, 15]]
}, {
  L: [[10, 142, 114, 14], [2, 143, 115, 14]],
  M: [[19, 74, 46, 14], [4, 75, 47, 14]],
  Q: [[28, 50, 22, 14], [6, 51, 23, 14]],
  H: [[33, 46, 16, 15], [4, 47, 17, 15]]
}, {
  L: [[8, 152, 122, 15], [4, 153, 123, 15]],
  M: [[22, 73, 45, 14], [3, 74, 46, 14]],
  Q: [[8, 53, 23, 15], [26, 54, 24, 15]],
  H: [[12, 45, 15, 15], [28, 46, 16, 15]]
}, {
  L: [[3, 147, 117, 15], [10, 148, 118, 15]],
  M: [[3, 73, 45, 14], [23, 74, 46, 14]],
  Q: [[4, 54, 24, 15], [31, 55, 25, 15]],
  H: [[11, 45, 15, 15], [31, 46, 16, 15]]
}, {
  L: [[7, 146, 116, 15], [7, 147, 117, 15]],
  M: [[21, 73, 45, 14], [7, 74, 46, 14]],
  Q: [[1, 53, 23, 15], [37, 54, 24, 15]],
  H: [[19, 45, 15, 15], [26, 46, 16, 15]]
}, {
  L: [[5, 145, 115, 15], [10, 146, 116, 15]],
  M: [[19, 75, 47, 14], [10, 76, 48, 14]],
  Q: [[15, 54, 24, 15], [25, 55, 25, 15]],
  H: [[23, 45, 15, 15], [25, 46, 16, 15]]
}, {
  L: [[13, 145, 115, 15], [3, 146, 116, 15]],
  M: [[2, 74, 46, 14], [29, 75, 47, 14]],
  Q: [[42, 54, 24, 15], [1, 55, 25, 15]],
  H: [[23, 45, 15, 15], [28, 46, 16, 15]]
}, {
  L: [[17, 145, 115, 15]],
  M: [[10, 74, 46, 14], [23, 75, 47, 14]],
  Q: [[10, 54, 24, 15], [35, 55, 25, 15]],
  H: [[19, 45, 15, 15], [35, 46, 16, 15]]
}, {
  L: [[17, 145, 115, 15], [1, 146, 116, 15]],
  M: [[14, 74, 46, 14], [21, 75, 47, 14]],
  Q: [[29, 54, 24, 15], [19, 55, 25, 15]],
  H: [[11, 44, 15, 15], [46, 45, 16, 15]]
}, {
  L: [[13, 145, 115, 15], [6, 146, 116, 15]],
  M: [[14, 74, 46, 14], [23, 75, 47, 14]],
  Q: [[44, 54, 24, 15], [7, 55, 25, 15]],
  H: [[59, 46, 16, 15], [1, 47, 17, 15]]
}, {
  L: [[12, 151, 121, 15], [7, 152, 122, 15]],
  M: [[12, 75, 47, 14], [26, 76, 48, 14]],
  Q: [[39, 54, 24, 15], [14, 55, 25, 15]],
  H: [[22, 45, 15, 15], [41, 46, 16, 15]]
}, {
  L: [[6, 151, 121, 15], [14, 152, 122, 15]],
  M: [[6, 75, 47, 14], [34, 76, 48, 14]],
  Q: [[46, 54, 24, 15], [10, 55, 25, 15]],
  H: [[2, 45, 15, 15], [64, 46, 16, 15]]
}, {
  L: [[17, 152, 122, 15], [4, 153, 123, 15]],
  M: [[29, 74, 46, 14], [14, 75, 47, 14]],
  Q: [[49, 54, 24, 15], [10, 55, 25, 15]],
  H: [[24, 45, 15, 15], [46, 46, 16, 15]]
}, {
  L: [[4, 152, 122, 15], [18, 153, 123, 15]],
  M: [[13, 74, 46, 14], [32, 75, 47, 14]],
  Q: [[48, 54, 24, 15], [14, 55, 25, 15]],
  H: [[42, 45, 15, 15], [32, 46, 16, 15]]
}, {
  L: [[20, 147, 117, 15], [4, 148, 118, 15]],
  M: [[40, 75, 47, 14], [7, 76, 48, 14]],
  Q: [[43, 54, 24, 15], [22, 55, 25, 15]],
  H: [[10, 45, 15, 15], [67, 46, 16, 15]]
}, {
  L: [[19, 148, 118, 15], [6, 149, 119, 15]],
  M: [[18, 75, 47, 14], [31, 76, 48, 14]],
  Q: [[34, 54, 24, 15], [34, 55, 25, 15]],
  H: [[20, 45, 15, 15], [61, 46, 16, 15]]
} // 40
];
const alignmentPatterns = [[], [], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170] // 40 (24,28)
];

/***/ }),

/***/ "../red-agate-barcode/modules/index.js":
/*!*********************************************!*\
  !*** ../red-agate-barcode/modules/index.js ***!
  \*********************************************/
/*! exports provided: barcodeBasePropsDefault, BarcodeBase, code39PropsDefault, Code39, code128PropsDefault, Code128, eanPropsDefault, EanBase, Ean13, Gtin13, Ean8, Gtin8, Ean5, Ean2, UpcA, UpcE, itfPropsDefault, Itf, japanPostalPropsDefault, JapanPostal, nw7PropsDefault, Nw7, qrPropsDefault, Qr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _barcode_BarcodeBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./barcode/BarcodeBase */ "../red-agate-barcode/modules/barcode/BarcodeBase.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "barcodeBasePropsDefault", function() { return _barcode_BarcodeBase__WEBPACK_IMPORTED_MODULE_0__["barcodeBasePropsDefault"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BarcodeBase", function() { return _barcode_BarcodeBase__WEBPACK_IMPORTED_MODULE_0__["BarcodeBase"]; });

/* harmony import */ var _barcode_Code39__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./barcode/Code39 */ "../red-agate-barcode/modules/barcode/Code39.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "code39PropsDefault", function() { return _barcode_Code39__WEBPACK_IMPORTED_MODULE_1__["code39PropsDefault"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Code39", function() { return _barcode_Code39__WEBPACK_IMPORTED_MODULE_1__["Code39"]; });

/* harmony import */ var _barcode_Code128__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./barcode/Code128 */ "../red-agate-barcode/modules/barcode/Code128.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "code128PropsDefault", function() { return _barcode_Code128__WEBPACK_IMPORTED_MODULE_2__["code128PropsDefault"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Code128", function() { return _barcode_Code128__WEBPACK_IMPORTED_MODULE_2__["Code128"]; });

/* harmony import */ var _barcode_Ean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./barcode/Ean */ "../red-agate-barcode/modules/barcode/Ean.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eanPropsDefault", function() { return _barcode_Ean__WEBPACK_IMPORTED_MODULE_3__["eanPropsDefault"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EanBase", function() { return _barcode_Ean__WEBPACK_IMPORTED_MODULE_3__["EanBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ean13", function() { return _barcode_Ean__WEBPACK_IMPORTED_MODULE_3__["Ean13"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Gtin13", function() { return _barcode_Ean__WEBPACK_IMPORTED_MODULE_3__["Gtin13"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ean8", function() { return _barcode_Ean__WEBPACK_IMPORTED_MODULE_3__["Ean8"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Gtin8", function() { return _barcode_Ean__WEBPACK_IMPORTED_MODULE_3__["Gtin8"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ean5", function() { return _barcode_Ean__WEBPACK_IMPORTED_MODULE_3__["Ean5"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ean2", function() { return _barcode_Ean__WEBPACK_IMPORTED_MODULE_3__["Ean2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpcA", function() { return _barcode_Ean__WEBPACK_IMPORTED_MODULE_3__["UpcA"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpcE", function() { return _barcode_Ean__WEBPACK_IMPORTED_MODULE_3__["UpcE"]; });

/* harmony import */ var _barcode_Itf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./barcode/Itf */ "../red-agate-barcode/modules/barcode/Itf.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "itfPropsDefault", function() { return _barcode_Itf__WEBPACK_IMPORTED_MODULE_4__["itfPropsDefault"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Itf", function() { return _barcode_Itf__WEBPACK_IMPORTED_MODULE_4__["Itf"]; });

/* harmony import */ var _barcode_JapanPostal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./barcode/JapanPostal */ "../red-agate-barcode/modules/barcode/JapanPostal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "japanPostalPropsDefault", function() { return _barcode_JapanPostal__WEBPACK_IMPORTED_MODULE_5__["japanPostalPropsDefault"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JapanPostal", function() { return _barcode_JapanPostal__WEBPACK_IMPORTED_MODULE_5__["JapanPostal"]; });

/* harmony import */ var _barcode_Nw7__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./barcode/Nw7 */ "../red-agate-barcode/modules/barcode/Nw7.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nw7PropsDefault", function() { return _barcode_Nw7__WEBPACK_IMPORTED_MODULE_6__["nw7PropsDefault"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Nw7", function() { return _barcode_Nw7__WEBPACK_IMPORTED_MODULE_6__["Nw7"]; });

/* harmony import */ var _barcode_Qr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./barcode/Qr */ "../red-agate-barcode/modules/barcode/Qr.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "qrPropsDefault", function() { return _barcode_Qr__WEBPACK_IMPORTED_MODULE_7__["qrPropsDefault"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Qr", function() { return _barcode_Qr__WEBPACK_IMPORTED_MODULE_7__["Qr"]; });

// Copyright (c) 2017, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln









/***/ }),

/***/ "../red-agate-math/modules/error-correction/BCH.js":
/*!*********************************************************!*\
  !*** ../red-agate-math/modules/error-correction/BCH.js ***!
  \*********************************************************/
/*! exports provided: BCH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BCH", function() { return BCH; });
/* harmony import */ var red_agate_util_modules_types_Integer53__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! red-agate-util/modules/types/Integer53 */ "../red-agate-util/modules/types/Integer53.js");
/* harmony import */ var _math_ArrayPolynomialRing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math/ArrayPolynomialRing */ "../red-agate-math/modules/math/ArrayPolynomialRing.js");
/* harmony import */ var _math_Gf2PrimeHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../math/Gf2PrimeHelper */ "../red-agate-math/modules/math/Gf2PrimeHelper.js");
/* harmony import */ var _math_Equation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../math/Equation */ "../red-agate-math/modules/math/Equation.js");
// Copyright (c) 2017, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln




/**
 * BCH code encoder / decoder.
 *
 * Generate error correction redundant code, Correct errors from redundant code.
 */

class BCH {
  /**
   *
   */
  constructor(field, gx, aDegree = 1) {
    this.field = field;
    this.aDegree = aDegree;
    this.gx = gx;
  }
  /**
   *
   */


  set gx(fx) {
    this._gx = fx;
    this._gxLength = red_agate_util_modules_types_Integer53__WEBPACK_IMPORTED_MODULE_0__["Integer53"].highestBit(fx) + 1;
  }
  /**
   *
   */


  get gx() {
    return this._gx;
  }
  /**
   *
   */


  get gxLength() {
    return this._gxLength;
  }
  /**
   * list generator polynomials.
   *
   * generator polynominal that correct t places of error is:
   * G(X) = (x-a^1)(x-a^2) ... (x-a^2t)F(x)
   *      = P_i1(x)P_i2(x) ... P_iq(x)
   *
   * a      : generator element of GF(2^m)
   * P_i(x) : one of GF(2) m_th or lower order minimal prime polynomials
   *
   * -> substitute a^j for each P_i(x) and get roots of P_i(x).
   * -> P_i(x) = (x-a^j_1)(x-a^j_2)...(x-a^j_n) = 0
   */


  static getGx(field, numCorrect, aDegree = 1) {
    const nth = Math.log2(field.MODULO);
    const pxs = _math_Gf2PrimeHelper__WEBPACK_IMPORTED_MODULE_2__["Gf2PrimeFieldHelper"].listPx(nth, true);
    const roots = [];
    const c = Math.min(2 * numCorrect, field.MODULO - 1);

    for (let i = 0; i < field.MODULO - 1; i++) {
      for (let j = 0; j < pxs.length; j++) {
        const px = pxs[j];
        let v = px & 1;

        for (let k = 1; k <= nth; k++) {
          v = field.add(v, red_agate_util_modules_types_Integer53__WEBPACK_IMPORTED_MODULE_0__["Integer53"].bitRShift(px, k) & 1 ? field.exp(k * i) : 0);
        }

        if (v === 0) {
          roots[i] = px;
        }
      }
    }

    let gx = roots[aDegree];

    for (let i = 1; i < c; i++) {
      let d = false;
      const r = roots[i + aDegree];

      for (let j = i - 1; j >= 0; j--) {
        if (r === roots[j + aDegree]) {
          d = true;
          break;
        }
      }

      if (d) continue;
      gx = _math_Gf2PrimeHelper__WEBPACK_IMPORTED_MODULE_2__["Gf2PrimeFieldHelper"].bitPolyMul(gx, r);
    }

    return gx;
  }
  /**
   *
   */


  encode(message) {
    return _math_Gf2PrimeHelper__WEBPACK_IMPORTED_MODULE_2__["Gf2PrimeFieldHelper"].bitPolyDiv(message, this._gx, this._gxLength - 1).r;
  }
  /**
   *
   */


  decode(received, maxErrors) {
    // calculate syndromes
    const receivedLength = this.field.MODULO - 1;
    let hasError = false;
    const ss = [];
    ss.length = maxErrors * 2;

    for (let i = 0; i < ss.length; i++) {
      let v = (received & 1) * this.field.ONE;

      for (let j = 1; j < receivedLength; j++) {
        const a = this.field.exp((this.aDegree + i) * j);
        v = this.field.add((red_agate_util_modules_types_Integer53__WEBPACK_IMPORTED_MODULE_0__["Integer53"].bitRShift(received, j) & 1) * a, v);
      }

      ss[i] = v;
      hasError = hasError || this.field.noteq(v, this.field.ZERO);
    }

    if (!hasError) return red_agate_util_modules_types_Integer53__WEBPACK_IMPORTED_MODULE_0__["Integer53"].bitRShift(received, this._gxLength - 1);
    const equ = new _math_Equation__WEBPACK_IMPORTED_MODULE_3__["Equation"](new _math_ArrayPolynomialRing__WEBPACK_IMPORTED_MODULE_1__["ArrayPolynomialRing"](this.field)); // calculate number of errors
    // det|S_(k-1)| = 0;
    //
    //                 [k-1]     [k-2]            [0]
    //
    //             |ss_(k-1)  ss_(k-2)   ... ss_0    |
    // |S_(k-1)| = | ...                             |
    //             |ss_(2k-2) ss_(2k-3)  ... ss_(k-1)|
    //
    // number of errors = k-1

    let errors = Math.floor(ss.length / 2);
    const mat = [];

    for (; errors > 0; errors--) {
      mat.length = 0;

      for (let i = 0; i < errors; i++) {
        mat[i] = ss.slice(i, i + errors);
      }

      if (this.field.noteq(equ.det(mat, 0, 0, mat.length), this.field.ZERO)) break;
    }

    if (errors === 0) return red_agate_util_modules_types_Integer53__WEBPACK_IMPORTED_MODULE_0__["Integer53"].bitRShift(received, this._gxLength - 1); // calculate error locations
    //
    //       [k]     [k-1]            [1]              negate([0])
    //
    // |ss_(k-1)  ss_(k-2)   ... ss_0    | |l_0    |   |ss_k     |
    // | ...                             | |       | = |         |
    // |ss_(2k-2) ss_(2k-3)  ... ss_(k-1)| |l_(k-1)|   |ss_(2k-1)|
    //
    // error locations polynominal is:
    // l(x) = 1 + l_0*x^1 + l_1*x^2 + ... + l_(k-1)*x^k
    //
    // error locations are where   l(a^(-(m_i))) = 0 ; (0 <= i <= k-1).

    for (let i = 0; i < errors; i++) {
      mat[i] = [this.field.neg(ss[errors + i])].concat(mat[i]);
    }

    const lx = [this.field.ONE].concat(equ.solve(mat, 0, 0, errors).reverse());
    const locations = [];

    for (let i = 0; i < this.field.MODULO - 1; i++) {
      let v = lx[0];

      for (let j = 1; j < lx.length; j++) {
        const a = this.field.exp((this.aDegree + i) * j);
        v = this.field.add(this.field.mul(lx[j], a), v);
      }

      if (this.field.eq(this.field.ZERO, v)) {
        locations.push(this.field.MODULO - 1 - i - this.aDegree);
      }
    } // correct errors
    // solve equation to let syndromes zero.
    // reverse bit of error locations.
    //
    // corrected(x) = received(x) + e(x)


    let ex = 0;

    for (let i = 0; i < errors; i++) {
      ex += Math.pow(2, locations[i]);
    }

    received = red_agate_util_modules_types_Integer53__WEBPACK_IMPORTED_MODULE_0__["Integer53"].bitXor(received, ex);
    return red_agate_util_modules_types_Integer53__WEBPACK_IMPORTED_MODULE_0__["Integer53"].bitRShift(received, this._gxLength - 1);
  }

}

/***/ }),

/***/ "../red-agate-math/modules/error-correction/CRC32.js":
/*!***********************************************************!*\
  !*** ../red-agate-math/modules/error-correction/CRC32.js ***!
  \***********************************************************/
/*! exports provided: CRC32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CRC32", function() { return CRC32; });
// Copyright (c) 2017, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln

/**
 *
 */
class CRC32 {
  /**
   *
   */
  constructor(reversedGx = 0x0edb88320) {
    this.reversedGx = reversedGx;
    this.table = [];

    for (let i = 0; i < 256; i++) {
      let c = i;

      for (let j = 0; j < 8; j++) {
        c = c & 1 ? reversedGx ^ c >>> 1 : c >>> 1;
      }

      this.table[i] = c;
    }
  }
  /**
   *
   */


  calc(message) {
    let c = 0x0ffffffff;

    for (let i = 0; i < message.length; i++) {
      c = this.table[(c ^ message[i]) & 0x00ff] ^ c >>> 8;
    }

    return c ^ 0x0ffffffff;
  }

}

/***/ }),

/***/ "../red-agate-math/modules/error-correction/ReedSolomon.js":
/*!*****************************************************************!*\
  !*** ../red-agate-math/modules/error-correction/ReedSolomon.js ***!
  \*****************************************************************/
/*! exports provided: ReedSolomon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReedSolomon", function() { return ReedSolomon; });
/* harmony import */ var _math_ArrayPolynomialRing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math/ArrayPolynomialRing */ "../red-agate-math/modules/math/ArrayPolynomialRing.js");
/* harmony import */ var _math_Equation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math/Equation */ "../red-agate-math/modules/math/Equation.js");
// Copyright (c) 2017, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln


/**
 * Reed-Solomon code encoder / decoder.
 *
 * Generate error correction redundant code, Correct errors from redundant code.
 */

class ReedSolomon {
  /**
   *
   */
  constructor(field, gx, aDegree = 0) {
    this.field = field;
    this.gx = gx;
    this.aDegree = aDegree;
    this.poly = new _math_ArrayPolynomialRing__WEBPACK_IMPORTED_MODULE_0__["ArrayPolynomialRing"](field);
  }
  /**
   * list generator polynomials.
   *
   * generator polynominal that correct (n-1)/2 places of error is:
   * G(X) = (x-a^0)(x-a^1) ... (x-a^n)
   */


  static listGx(field, gxList, nth, aDegree = 0) {
    const poly = new _math_ArrayPolynomialRing__WEBPACK_IMPORTED_MODULE_0__["ArrayPolynomialRing"](field);
    const gxs = gxList || [];
    let u = [field.exp(aDegree), field.ONE];
    const v = [field.exp(aDegree + 1), field.ONE];

    if (gxs.length === 0) {
      gxs.push(u);
    } else {
      u = gxs[gxs.length - 1];
      v[0] = field.exp(aDegree + gxs.length);
    }

    for (let i = gxs.length + 1; i <= nth; i++) {
      u = poly.mul(u, v);
      gxs.push(u);
      v[0] = field.exp(aDegree + i);
    }

    return gxs;
  }
  /**
   * list generator polynomials.
   *
   * generator polynominal that correct (n-1)/2 places of error is:
   * G(X) = (x-a^0)(x-a^1) ... (x-a^n)
   */


  static getGx(field, nth, aDegree = 0) {
    const poly = new _math_ArrayPolynomialRing__WEBPACK_IMPORTED_MODULE_0__["ArrayPolynomialRing"](field);
    let u = [field.exp(aDegree), field.ONE];
    const v = [field.exp(aDegree + 1), field.ONE];

    for (let i = 2; i <= nth; i++) {
      u = poly.mul(u, v);
      v[0] = field.exp(aDegree + i);
    }

    return u;
  }
  /**
   *
   */


  encode(message) {
    return this.poly.divmod(message, this.gx, this.gx.length - 1).r;
  }
  /**
   *
   */


  decode(received, maxErrors = 0) {
    // calculate syndromes
    let hasError = false;
    const ss = [];
    ss.length = this.gx.length - 1;
    if (ss.length <= maxErrors * 2) ss.length = maxErrors * 2;

    for (let i = 0; i < ss.length; i++) {
      let v = received[0];

      for (let j = 1; j < received.length; j++) {
        const a = this.field.exp((this.aDegree + i) * j);
        v = this.field.add(this.field.mul(received[j], a), v);
      }

      ss[i] = v;
      hasError = hasError || this.field.noteq(v, this.field.ZERO);
    }

    if (!hasError) return Array.prototype.slice.call(received, this.gx.length - 1);
    const field = this.poly.field;
    const equ = new _math_Equation__WEBPACK_IMPORTED_MODULE_1__["Equation"](this.poly); // calculate number of errors
    // det|S_(k-1)| = 0;
    //
    //                 [k-1]     [k-2]            [0]
    //
    //             |ss_(k-1)  ss_(k-2)   ... ss_0    |
    // |S_(k-1)| = | ...                             |
    //             |ss_(2k-2) ss_(2k-3)  ... ss_(k-1)|
    //
    // number of errors = k-1

    let errors = Math.floor(ss.length / 2);
    let mat = [];

    for (; errors > 0; errors--) {
      mat.length = 0;

      for (let i = 0; i < errors; i++) {
        mat[i] = ss.slice(i, i + errors);
      }

      if (field.noteq(equ.det(mat, 0, 0, mat.length), field.ZERO)) break;
    }

    if (errors === 0) return Array.prototype.slice.call(received, this.gx.length - 1); // calculate error locations
    //
    //       [k]     [k-1]            [1]              negate([0])
    //
    // |ss_(k-1)  ss_(k-2)   ... ss_0    | |l_0    |   |ss_k     |
    // | ...                             | |       | = |         |
    // |ss_(2k-2) ss_(2k-3)  ... ss_(k-1)| |l_(k-1)|   |ss_(2k-1)|
    //
    // error locations polynominal is:
    // l(x) = 1 + l_0*x^1 + l_1*x^2 + ... + l_(k-1)*x^k
    //
    // error locations are where   l(a^(-(m_i))) = 0 ; (0 <= i <= k-1).

    for (let i = 0; i < errors; i++) {
      mat[i] = [field.neg(ss[errors + i])].concat(mat[i]);
    }

    const lx = [field.ONE].concat(equ.solve(mat, 0, 0, errors).reverse());
    const locations = [];

    for (let i = 0; i < field.MODULO - 1; i++) {
      let v = lx[0];

      for (let j = 1; j < lx.length; j++) {
        const a = field.exp((this.aDegree + i) * j);
        v = field.add(field.mul(lx[j], a), v);
      }

      if (field.eq(field.ZERO, v)) {
        locations.push(field.MODULO - 1 - i - this.aDegree);
      }
    } // correct errors
    // solve equation to let syndromes zero.
    //
    //                [k]               [k-1]                [1]              negate([0])
    //
    // |a^(m_(k-1)*   0 )  a^(m_k-2) *    0 )  ... a^(m_0*   0 )| |e_(k-1)|   |ss_0    |
    // | ...                                                    | |       | = |        |
    // |a^(m_(k-1)*(k-1))  a^(m_k-2) * (k-1))  ... a^(m_0*(k-1))| |e_0    |   |ss_(k-1)|
    //
    // errors polynominal is:
    // e(x) = e_0*x^m_0 + e_1*x^m_1 + e_(k-1)*x^m(k-1)
    //
    // corrected(x) = received(x) + e(x)


    mat = [];

    for (let i = 0; i < errors; i++) {
      mat[i] = [field.neg(ss[i])];

      for (let j = 0; j < locations.length; j++) {
        mat[i].push(field.exp((this.aDegree + i) * locations[j]));
      }
    }

    const ex = equ.solve(mat, 0, 0, errors);

    for (let i = 0; i < errors; i++) {
      received[locations[i]] = field.add(received[locations[i]], ex[i]);
    }

    return Array.prototype.slice.call(received, this.gx.length - 1);
  }

}

/***/ }),

/***/ "../red-agate-math/modules/index.js":
/*!******************************************!*\
  !*** ../red-agate-math/modules/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _math_ArrayPolynomialRing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math/ArrayPolynomialRing */ "../red-agate-math/modules/math/ArrayPolynomialRing.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArrayPolynomialRing", function() { return _math_ArrayPolynomialRing__WEBPACK_IMPORTED_MODULE_0__["ArrayPolynomialRing"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NumberArrayPolynomialRing", function() { return _math_ArrayPolynomialRing__WEBPACK_IMPORTED_MODULE_0__["NumberArrayPolynomialRing"]; });

/* harmony import */ var _math_Equation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math/Equation */ "../red-agate-math/modules/math/Equation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Equation", function() { return _math_Equation__WEBPACK_IMPORTED_MODULE_1__["Equation"]; });

/* harmony import */ var _math_Field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math/Field */ "../red-agate-math/modules/math/Field.js");
/* harmony import */ var _math_Field__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_math_Field__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _math_Field__WEBPACK_IMPORTED_MODULE_2__) if(["ArrayPolynomialRing","NumberArrayPolynomialRing","Equation","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _math_Field__WEBPACK_IMPORTED_MODULE_2__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _math_Gf2Ext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./math/Gf2Ext */ "../red-agate-math/modules/math/Gf2Ext.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Gf2Ext", function() { return _math_Gf2Ext__WEBPACK_IMPORTED_MODULE_3__["Gf2Ext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Gf2e8Field", function() { return _math_Gf2Ext__WEBPACK_IMPORTED_MODULE_3__["Gf2e8Field"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Gf2e6Field", function() { return _math_Gf2Ext__WEBPACK_IMPORTED_MODULE_3__["Gf2e6Field"]; });

/* harmony import */ var _math_Gf2PrimeHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./math/Gf2PrimeHelper */ "../red-agate-math/modules/math/Gf2PrimeHelper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Gf2PrimeFieldHelper", function() { return _math_Gf2PrimeHelper__WEBPACK_IMPORTED_MODULE_4__["Gf2PrimeFieldHelper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Gf2PrimeBitPolynomialRing", function() { return _math_Gf2PrimeHelper__WEBPACK_IMPORTED_MODULE_4__["Gf2PrimeBitPolynomialRing"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Gf2PrimeArrayPolynomialRing", function() { return _math_Gf2PrimeHelper__WEBPACK_IMPORTED_MODULE_4__["Gf2PrimeArrayPolynomialRing"]; });

/* harmony import */ var _math_GfPrime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./math/GfPrime */ "../red-agate-math/modules/math/GfPrime.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GfPrime", function() { return _math_GfPrime__WEBPACK_IMPORTED_MODULE_5__["GfPrime"]; });

/* harmony import */ var _math_RealField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./math/RealField */ "../red-agate-math/modules/math/RealField.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RealField", function() { return _math_RealField__WEBPACK_IMPORTED_MODULE_6__["RealField"]; });

/* harmony import */ var _error_correction_BCH__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./error-correction/BCH */ "../red-agate-math/modules/error-correction/BCH.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BCH", function() { return _error_correction_BCH__WEBPACK_IMPORTED_MODULE_7__["BCH"]; });

/* harmony import */ var _error_correction_CRC32__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./error-correction/CRC32 */ "../red-agate-math/modules/error-correction/CRC32.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CRC32", function() { return _error_correction_CRC32__WEBPACK_IMPORTED_MODULE_8__["CRC32"]; });

/* harmony import */ var _error_correction_ReedSolomon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./error-correction/ReedSolomon */ "../red-agate-math/modules/error-correction/ReedSolomon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReedSolomon", function() { return _error_correction_ReedSolomon__WEBPACK_IMPORTED_MODULE_9__["ReedSolomon"]; });

// Copyright (c) 2017, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln











/***/ }),

/***/ "../red-agate-math/modules/math/ArrayPolynomialRing.js":
/*!*************************************************************!*\
  !*** ../red-agate-math/modules/math/ArrayPolynomialRing.js ***!
  \*************************************************************/
/*! exports provided: ArrayPolynomialRing, NumberArrayPolynomialRing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayPolynomialRing", function() { return ArrayPolynomialRing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberArrayPolynomialRing", function() { return NumberArrayPolynomialRing; });
// Copyright (c) 2017, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln

/**
 *
 */
class ArrayPolynomialRing {
  /**
   *
   */
  constructor(field) {
    this.field = field;
    this._zero = [field.ZERO];
    this._one = [field.ONE];
    this._nan = [field.NaN];
  }
  /**
   *
   */


  listPx(nth) {
    throw new Error("not supported operation");
  }

  getAt(x, index) {
    return x[index];
  }

  setAt(x, index, v) {
    x[index] = v;
    return x;
  }

  slice(x, start, end) {
    return x.slice(start, end);
  }

  map(x, fn) {
    return this.mapToSelf(Array.from(x), fn);
  }

  mapToSelf(x, fn) {
    for (let i = 0; i < x.length; i++) x[i] = fn(x[i]);

    return x;
  }

  newNthPolynomial(n) {
    const r = [];
    r.length = n + 1;
    r.fill(this.field.ZERO);
    return r;
  }
  /**
   *
   */


  get ZERO() {
    return Array.from(this._zero);
  }
  /**
   *
   */


  get ONE() {
    return Array.from(this._one);
  }
  /**
   *
   */


  get NaN() {
    return this._nan;
  }
  /**
   *
   */


  normalize(x) {
    return (Array.isArray(x) ? x : Array.from(x)).map(v => this.field.normalize(v));
  }
  /**
   *
   */


  isNaN(x) {
    if (x !== this.NaN) {
      if (x.length === 1 && x[0] === this.field.NaN) return true;
      return false;
    }

    return true;
  }
  /**
   *
   */


  eq(x, y) {
    if (this.isNaN(x) || this.isNaN(y)) return false;
    const zero = this.field.ZERO;
    const len = Math.max(x.length, y.length);

    for (let i = 0; i < len; i++) {
      if (!this.field.eq(x[i] !== void 0 ? x[i] : zero, y[i] !== void 0 ? y[i] : zero)) return false;
    }

    return true;
  }
  /**
   *
   */


  noteq(x, y) {
    return !this.eq(x, y);
  }
  /**
   *
   */


  neg(x) {
    const r = [];

    for (let i = 0; i < x.length; i++) {
      r[i] = this.field.neg(x[i]);
    }

    return r;
  }
  /**
   *
   */


  add(x, y) {
    const r = [];
    const zero = this.field.ZERO;
    r.length = Math.max(x.length, y.length);

    for (let i = 0; i < r.length; i++) {
      r[i] = this.field.add(x[i] !== void 0 ? x[i] : zero, y[i] !== void 0 ? y[i] : zero);
    }

    return r;
  }
  /**
   *
   */


  sub(x, y) {
    const r = [];
    const zero = this.field.ZERO;
    r.length = Math.max(x.length, y.length);

    for (let i = 0; i < r.length; i++) {
      r[i] = this.field.sub(x[i] !== void 0 ? x[i] : zero, y[i] !== void 0 ? y[i] : zero);
    }

    return r;
  }
  /**
   *
   */


  mul(x, y) {
    const r = [];
    const zero = this.field.ZERO;
    r.length = x.length + y.length - 1;

    for (let i = 0; i < r.length; i++) {
      r[i] = zero;
    }

    for (let i = 0; i < y.length; i++) {
      for (let j = 0; j < x.length; j++) {
        r[j + i] = this.field.add(r[j + i], this.field.mul(x[j], y[i]));
      }
    }

    return r;
  }
  /**
   *
   */


  mod(x, y, extendDividendLength = 0) {
    return this.divmod(x, y, extendDividendLength).r;
  }
  /**
   *
   */


  divmod(x, y, extendDividendLength = 0) {
    x = Array.from(x);
    const zero = this.field.ZERO;

    if (extendDividendLength > 0) {
      const ext = [];
      ext.length = extendDividendLength;

      for (let i = 0; i < extendDividendLength; i++) {
        ext[i] = zero;
      }

      x = ext.concat(x);
    }

    let ylen = y.length;

    for (let i = 0; i < ylen; i++, ylen--) {
      if (y[ylen - 1] !== void 0 && this.field.noteq(y[ylen - 1], zero)) break;
    }

    if (ylen === 0) return {
      q: this.NaN,
      r: this.NaN,
      divisible: false
    };
    const n = x.length - ylen + 1;
    const q = [];
    q.length = n;

    for (let i = 0; i < n; i++) {
      if (this.field.noteq(x[x.length - 1 - i], zero)) {
        const c = this.field.divmod(x[x.length - 1 - i], y[ylen - 1]);
        q[n - 1 - i] = c.q;

        for (let j = 0; j < ylen - 1; j++) {
          x[n - 1 - i + j] = this.field.sub(x[n - 1 - i + j], this.field.mul(y[j], c.q));
        }

        x[x.length - 1 - i] = c.r;
      } else {
        x[x.length - 1 - i] = zero;
      }
    }

    let divisible = true;
    const r = [];
    r.length = ylen - 1;

    for (let i = 0; i < r.length; i++) {
      if (x[i]) divisible = false;
      r[i] = x[i];
    }

    return {
      q,
      r,
      divisible
    };
  }
  /**
   *
   */


  pow(a, x) {
    throw new Error("not supported operation");
  }
  /**
   *
   */


  exp(x) {
    throw new Error("not supported operation");
  }

}
/**
 *
 */

class NumberArrayPolynomialRing extends ArrayPolynomialRing {}

/***/ }),

/***/ "../red-agate-math/modules/math/Equation.js":
/*!**************************************************!*\
  !*** ../red-agate-math/modules/math/Equation.js ***!
  \**************************************************/
/*! exports provided: Equation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Equation", function() { return Equation; });
// Copyright (c) 2017, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln

/**
 *
 */
class Equation {
  constructor(ring) {
    this.ring = ring;
  }
  /**
   * solve a equation.
   *
   *                  [0]             [1]                   [n]
   *
   *   S0     =     S_0_0 +     S_0_1*x_1 + ... +     S_0_n*x_n = 0
   *   S1     =     S_1_0 +     S_1_1*x_1 + ... +     S_1_n*x_n = 0
   *     ...
   *   S(n-1) = S_(n-1)_0 + S_(n-1)_1*x_1 + ... + S_(n-1)_n*x_n = 0
   *
   *
   * matrix expression:
   *        [n]          [n-1]            [1]           negate([0])
   *
   * |S_0_n      S_0_(n-1)      ...  S_0_1    | |x_n|   |S_0_0    |
   * | ...                                    | |   | = |         |
   * |S_(n-1)_n  S_(n-1)_(n-1)  ...  S_(n-1)_1| |x_1|   |S_(n-1)_0|
   *
   *
   * equation[n][n+1: coefficient of x^0,...,x^n]
   * equation is stored into n+1 x n matrix
   * [offsetY <=  <= offsetY + n - 1][offsetX <=  <= offsetX + n]
   *
   * returns [x_1, x_2, ... , x_n]
   */


  solve(equation, offsetX, offsetY, n) {
    const field = this.ring.field;

    for (let i = 0; i < n; i++) {
      let c = this.ring.getAt(equation[i], n - i);

      if (field.eq(c, field.ZERO)) {
        for (let j = i + 1; j < n; j++) {
          if (field.noteq(this.ring.getAt(equation[j], n - i), field.ZERO)) {
            const r = equation[i];
            equation[i] = equation[j];
            equation[j] = r;
            break;
          }
        }

        c = this.ring.getAt(equation[i], n - i);
      }

      if (field.eq(c, field.ZERO)) continue;
      equation[i] = this.ring.mapToSelf(equation[i], v => field.div(v, c));

      for (let j = i + 1; j < n; j++) {
        const m = this.ring.getAt(equation[j], n - i);
        const r = this.ring.map(equation[i], v => field.mul(v, m));
        equation[j] = this.ring.sub(equation[j], r);
      }
    }

    for (let i = n - 1; i >= 0; i--) {
      const c = this.ring.getAt(equation[i], n - i);
      if (field.eq(c, field.ZERO)) continue;

      for (let j = 0; j < i; j++) {
        const m = this.ring.getAt(equation[j], n - i);
        const r = this.ring.map(equation[i], v => field.mul(v, m));
        equation[j] = this.ring.sub(equation[j], r);
      }
    }

    const ss = this.ring.newNthPolynomial(n - 1);

    for (let i = 0; i < n; i++) {
      if (field.eq(this.ring.getAt(equation[i], n - i), field.ZERO)) this.ring.setAt(ss, n - 1 - i, field.NaN);else this.ring.setAt(ss, n - 1 - i, field.neg(this.ring.getAt(equation[i], 0)));
    }

    return ss;
  }
  /**
   * get determinant of n x n matrix.
   * the determinant of matrix A is:
   *
   *               [n-1]           [n-2]                 [0]
   *
   *             | S_0_(n-1)       S_0_(n-2)       ...   S_0_0     |
   *   det(A)  = | S_1_(n-1)       S_1_(n-2)       ...   S_1_0     |
   *               ...
   *             | S_(n-1)_(n-1)   S_(n-1)_(n-2)   ...   S_(n-1)_0 |
   *
   * argument matrix layout is:
   *
   *   | a  b |  = [[b, a], [d, c]]
   *   | c  d |
   *
   * return value of 2x2 matrix's determinant is (ad - bc)
   */


  det(matrix, offsetX, offsetY, n) {
    const field = this.ring.field;
    if (n <= 0) return field.NaN;

    const fn = (mat, len) => {
      if (len < 2) {
        return this.ring.getAt(mat[0], 0);
      }

      if (len === 2) {
        // ad - bc
        return field.sub(field.mul(this.ring.getAt(mat[0], 1), this.ring.getAt(mat[1], 0)), field.mul(this.ring.getAt(mat[1], 1), this.ring.getAt(mat[0], 0)));
      }

      let v = field.ZERO;

      for (let i = 0; i < len; i++) {
        const m2 = [];

        for (let j = 0; j < len; j++) {
          if (i === j) continue;
          m2.push(this.ring.slice(mat[j], 0, len - 1));
        }

        const sign = (len - 1 + len - i) % 2 ? 1 : -1;
        const d = fn(m2, len - 1);
        v = field.add(v, field.mul(this.ring.getAt(mat[i], len - 1), sign >= 0 ? d : field.neg(d)));
      }

      return v;
    };

    if (offsetX === 0) {
      if (offsetY === 0) return fn(matrix, n);else return fn(matrix.slice(offsetY), n);
    }

    const matr = [];

    for (let i = 0; i < n; i++) {
      matr.push(this.ring.slice(matrix[offsetY + i], offsetX, offsetX + n));
    }

    return fn(matr, n);
  }

}

/***/ }),

/***/ "../red-agate-math/modules/math/Field.js":
/*!***********************************************!*\
  !*** ../red-agate-math/modules/math/Field.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Copyright (c) 2017, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln

/***/ }),

/***/ "../red-agate-math/modules/math/Gf2Ext.js":
/*!************************************************!*\
  !*** ../red-agate-math/modules/math/Gf2Ext.js ***!
  \************************************************/
/*! exports provided: Gf2Ext, Gf2e8Field, Gf2e6Field */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gf2Ext", function() { return Gf2Ext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gf2e8Field", function() { return Gf2e8Field; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gf2e6Field", function() { return Gf2e6Field; });
// Copyright (c) 2017, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln

/**
 * GF(2^n) ; Extension Finite Field
 */
class Gf2Ext {
  /**
   *
   */
  constructor(nth = 8, px = 0x011d) {
    this.nth = nth;
    this.px = px;
    this.expDict = [];
    this.lnDict = [this.NaN];
    let v = 1;
    this.numElements = Math.pow(2, nth); // 1 << nth

    this.mask = this.numElements - 1;
    this.expDict.length = this.mask;
    this.lnDict.length = this.numElements;

    for (let i = 0; i < this.mask; i++) {
      this.expDict[i] = v;
      this.lnDict[v] = i;
      v *= 2; // left shift 1. polynomial multipy by alpha(=2).

      if (v > this.mask) {
        // (v & ~this.mask)
        v = ((v ^ px) & this.mask) >>> 0;
      }
    }
  }
  /**
   * 53bits x & this.mask
   */


  bitMask(x) {
    x = Math.abs(x);
    const loX = (x & 0xffffffff) >>> 0;
    const hiX = (x - loX) / 4294967296;
    return ((hiX & this.maskHi) >>> 0) * 4294967296 + ((loX & this.maskLo) >>> 0);
  }
  /**
   *
   */


  checkGenerationResult() {
    for (let i = 1; i < this.numElements; i++) {
      if (this.lnDict[i] === void 0) {
        return false;
      }
    }

    return true;
  }
  /**
   * order of this field
   */


  get MODULO() {
    return this.numElements;
  }
  /**
   *
   */


  get ZERO() {
    return 0;
  }
  /**
   *
   */


  get ONE() {
    return 1;
  }
  /**
   *
   */


  get ALPHA() {
    return 2;
  }
  /**
   *
   */


  get NaN() {
    return Number.NaN;
  }
  /**
   *
   */


  normalize(x) {
    return (x & this.mask) >>> 0;
  }
  /**
   *
   */


  isNaN(x) {
    return Number.isNaN(x);
  }
  /**
   *
   */


  eq(x, y) {
    return (x & this.mask) >>> 0 === (y & this.mask) >>> 0;
  }
  /**
   *
   */


  noteq(x, y) {
    return (x & this.mask) >>> 0 !== (y & this.mask) >>> 0;
  }
  /**
   *
   */


  neg(x) {
    return (x & this.mask) >>> 0;
  }
  /**
   *
   */


  inv(x) {
    x = (x & this.mask) >>> 0;
    return x === 0 ? this.NaN : this.expDict[(this.mask - this.lnDict[x]) % this.mask];
  }
  /**
   *
   */


  add(x, y) {
    return ((x ^ y) & this.mask) >>> 0;
  }
  /**
   *
   */


  sub(x, y) {
    return ((x ^ y) & this.mask) >>> 0;
  }
  /**
   *
   */


  mul(x, y) {
    x = (x & this.mask) >>> 0;
    y = (y & this.mask) >>> 0;
    if (x === 0 || y === 0) return 0;
    return this.expDict[(this.lnDict[x] + this.lnDict[y]) % this.mask];
  }
  /**
   *
   */


  div(x, y) {
    x = (x & this.mask) >>> 0;
    y = (y & this.mask) >>> 0;
    if (y === 0) return this.NaN;
    if (x === 0) return 0;
    return this.expDict[(this.lnDict[x] + (this.mask - this.lnDict[y]) % this.mask) % this.mask];
  }
  /**
   *
   */


  mod(x, y) {
    return (y & this.mask) >>> 0 === 0 ? this.NaN : 0;
  }
  /**
   *
   */


  divmod(x, y) {
    return (y & this.mask) >>> 0 === 0 ? {
      q: this.NaN,
      r: this.NaN,
      divisible: false
    } : {
      q: this.div(x, y),
      r: 0,
      divisible: true
    };
  }
  /**
   *
   */


  pow(a, x) {
    a = this.normalize(a);
    x = x % this.mask;

    if (a === 0) {
      return x === 0 ? 1 : 0;
    }

    return x >= 0 ? this.exp(this.ln(a) * x) : this.inv(this.exp(this.ln(a) * -x));
  }
  /**
   *
   */


  log(a, x) {
    // y = log(a,pow(a,y))
    //        // log(a,x) = ln(x) / ln(a)
    //        let p = this.ln(x);
    //        let q = this.ln(a);
    //        return this.div(p, q); // don't work
    const logDict = [this.NaN];

    for (let y = 0; y < this.mask; y++) {
      const v = this.pow(a, y);
      if (logDict[v] === void 0) logDict[v] = y;
    }

    const r = logDict[(x & this.mask) >>> 0];
    return r !== void 0 ? r : this.NaN;
  }
  /**
   *
   */


  exp(x) {
    return x >= 0 ? this.expDict[x % this.mask] : this.inv(this.expDict[-x % this.mask]);
  }
  /**
   *
   */


  ln(x) {
    return this.lnDict[(x & this.mask) >>> 0];
  }

}
/**
 *
 */

class Gf2e8Field extends Gf2Ext {
  /**
   *
   */
  constructor(px = 0x011d) {
    super(8, px);
  }

}
/**
 *
 */

class Gf2e6Field extends Gf2Ext {
  /**
   *
   */
  constructor(px = 0x0043) {
    super(6, px);
  }

}

/***/ }),

/***/ "../red-agate-math/modules/math/Gf2PrimeHelper.js":
/*!********************************************************!*\
  !*** ../red-agate-math/modules/math/Gf2PrimeHelper.js ***!
  \********************************************************/
/*! exports provided: Gf2PrimeFieldHelper, Gf2PrimeBitPolynomialRing, Gf2PrimeArrayPolynomialRing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gf2PrimeFieldHelper", function() { return Gf2PrimeFieldHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gf2PrimeBitPolynomialRing", function() { return Gf2PrimeBitPolynomialRing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gf2PrimeArrayPolynomialRing", function() { return Gf2PrimeArrayPolynomialRing; });
/* harmony import */ var red_agate_util_modules_types_Integer53__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! red-agate-util/modules/types/Integer53 */ "../red-agate-util/modules/types/Integer53.js");
/* harmony import */ var _Gf2Ext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gf2Ext */ "../red-agate-math/modules/math/Gf2Ext.js");
/* harmony import */ var _GfPrime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GfPrime */ "../red-agate-math/modules/math/GfPrime.js");
// Copyright (c) 2017, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln



/**
 *
 */

class Gf2PrimeFieldHelper {
  static listPx(nth, listAll = false) {
    // GF(p^m)      's primitive polynomials P(X) are:
    // x^(p^m-1)-1  's factor that degree of m irreducible polynomial
    // (p:prime, m:degree of field extension)
    const numElements = Math.pow(2, nth); // 1 << nth

    const mask = numElements - 1;
    const zx = [];
    const pxs = [];
    zx[mask] = 1;
    zx[0] = 1;
    const n = Math.pow(2, nth + 1);

    for (let i = 2; i < n; i++) {
      const result = Gf2PrimeFieldHelper.polyDiv(zx, Gf2PrimeFieldHelper.bitToPoly(i));
      if (result.divisible && (pxs.length === 0 || pxs.every(px => !Gf2PrimeFieldHelper.bitPolyDiv(i, px).divisible))) pxs.push(i);
    }

    if (listAll) return pxs;else return pxs.filter(v => Boolean(red_agate_util_modules_types_Integer53__WEBPACK_IMPORTED_MODULE_0__["Integer53"].bitRShift(v, nth) & 1)).filter(v => {
      const gf = new _Gf2Ext__WEBPACK_IMPORTED_MODULE_1__["Gf2Ext"](nth, v);
      return gf.checkGenerationResult();
    });
  }
  /**
   *
   */


  static bitToPoly(x) {
    const r = [];
    x = Math.abs(x);
    const loX = (x & 0xffffffff) >>> 0;
    const hiX = (x - loX) / 4294967296;

    for (let i = 0; i < 32; i++) {
      r[i] = (loX & 1 << i) >>> 0 ? 1 : 0;
    }

    for (let i = 0; i < 21; i++) {
      r[32 + i] = (hiX & 1 << i) >>> 0 ? 1 : 0;
    }

    for (let i = 52; i > 0; i--) {
      if (r[i]) {
        r.length = i + 1;
        return r;
      }
    }

    r.length = 1;
    return r;
  }
  /**
   *
   */


  static polyToBit(x) {
    let r = 0;
    const n = Math.min(53, x.length);

    for (let i = 0; i < n; i++) {
      if (x[i]) r += Math.pow(2, i);
    }

    return r;
  }
  /**
   *
   */


  static polyAdd(x, y) {
    // GF2 prime finite field's calculation.
    const r = [];
    r.length = Math.max(x.length, y.length);

    for (let i = 0; i < r.length; i++) {
      r[i] = (x[i] !== void 0 ? x[i] : 0) ^ (y[i] !== void 0 ? y[i] : 0);
    }

    return r;
  }
  /**
   *
   */


  static polySub(x, y) {
    // GF2 prime finite field's calculation.
    return this.polyAdd(x, y);
  }
  /**
   *
   */


  static bitPolyAdd(x, y) {
    // GF2 prime finite field's calculation.
    return red_agate_util_modules_types_Integer53__WEBPACK_IMPORTED_MODULE_0__["Integer53"].bitXor(x, y);
  }
  /**
   *
   */


  static bitPolySub(x, y) {
    // GF2 prime finite field's calculation.
    return red_agate_util_modules_types_Integer53__WEBPACK_IMPORTED_MODULE_0__["Integer53"].bitXor(x, y);
  }
  /**
   *
   */


  static polyMul(x, y) {
    // GF2 prime finite field's calculation.
    const r = [];
    r.length = x.length + y.length - 1;

    for (let i = 0; i < y.length; i++) {
      for (let j = 0; j < x.length; j++) {
        // r[j + i] is undefined but bitwise operators implicitly cast NaN as 0.
        r[j + i] ^= x[j] & y[i];
      }
    }

    return r;
  }
  /**
   *
   */


  static bitPolyMul(x, y) {
    // GF2 prime finite field's calculation.
    let r = 0;

    for (let i = 0; i < 53; i++) {
      r = red_agate_util_modules_types_Integer53__WEBPACK_IMPORTED_MODULE_0__["Integer53"].bitXor(r, x * (red_agate_util_modules_types_Integer53__WEBPACK_IMPORTED_MODULE_0__["Integer53"].bitRShift(y, i) & 1) * Math.pow(2, i));
    }

    return r;
  }
  /**
   *
   */


  static polyDiv(x, y, extendDividendLength = 0) {
    // GF2 prime finite field's calculation.
    x = Array.from(x);

    if (extendDividendLength > 0) {
      const ext = [];
      ext.length = extendDividendLength;

      for (let i = 0; i < extendDividendLength; i++) {
        ext[i] = 0;
      }

      x = ext.concat(x);
    }

    let ylen = y.length;

    for (let i = 0; i < ylen; i++, ylen--) {
      if (y[ylen - 1]) break;
    }

    if (ylen === 0) return {
      q: [Number.NaN],
      r: [Number.NaN],
      divisible: false
    };
    const n = x.length - ylen + 1;
    const q = [];
    q.length = n;

    for (let i = 0; i < n; i++) {
      if (x[x.length - 1 - i]) {
        q[n - 1 - i] = 1;

        for (let j = 0; j < ylen; j++) {
          x[n - 1 - i + j] ^= y[j];
        }
      } else {
        x[x.length - 1 - i] = 0;
      }
    }

    let divisible = true;
    const r = [];
    r.length = ylen - 1;

    for (let i = 0; i < r.length; i++) {
      if (x[i]) divisible = false;
      r[i] = x[i];
    }

    return {
      q,
      r,
      divisible
    };
  }
  /**
   *
   */


  static bitPolyDiv(x, y, extendDividendLength = 0) {
    // GF2 prime finite field's calculation.
    if (extendDividendLength) x = red_agate_util_modules_types_Integer53__WEBPACK_IMPORTED_MODULE_0__["Integer53"].bitLShift(x, extendDividendLength);
    let ylen = 53;

    for (let i = 0; i < 53; i++, ylen--) {
      if (red_agate_util_modules_types_Integer53__WEBPACK_IMPORTED_MODULE_0__["Integer53"].bitRShift(y, 52 - i)) break;
    }

    if (ylen === 0) return {
      q: Number.NaN,
      r: Number.NaN,
      divisible: false
    };
    const n = 53 - ylen + 1;
    let q = 0;

    for (let i = 0, m = Math.pow(2, 52); i < n; i++, m /= 2) {
      if (Math.trunc(x / m) & 1) {
        const w = Math.pow(2, n - 1 - i);
        q += w;
        x = red_agate_util_modules_types_Integer53__WEBPACK_IMPORTED_MODULE_0__["Integer53"].bitXor(x, y * w);
      }
    }

    return {
      q,
      r: x,
      divisible: x === 0
    };
  }
  /**
   *
   */


  static polyIsZero(x) {
    const n = Math.min(52, x.length);

    for (let i = 0; i < n; i++) {
      if (x[i]) return true;
    }

    return false;
  }

}
class Gf2PrimeBitPolynomialRing {
  get field() {
    if (this._field) return this._field;
    this._field = new _GfPrime__WEBPACK_IMPORTED_MODULE_2__["GfPrime"](2);
    return this._field;
  }

  listPx(nth, listAll = false) {
    return Gf2PrimeFieldHelper.listPx(nth, listAll);
  }

  getAt(x, index) {
    return red_agate_util_modules_types_Integer53__WEBPACK_IMPORTED_MODULE_0__["Integer53"].bitRShift(x, index) & 1;
  }

  setAt(x, index, v) {
    return red_agate_util_modules_types_Integer53__WEBPACK_IMPORTED_MODULE_0__["Integer53"].bitNot(red_agate_util_modules_types_Integer53__WEBPACK_IMPORTED_MODULE_0__["Integer53"].bitLShift(v & 1 ? 0 : 1, index));
  }

  slice(x, start, end) {
    return red_agate_util_modules_types_Integer53__WEBPACK_IMPORTED_MODULE_0__["Integer53"].bitAnd(red_agate_util_modules_types_Integer53__WEBPACK_IMPORTED_MODULE_0__["Integer53"].bitRShift(red_agate_util_modules_types_Integer53__WEBPACK_IMPORTED_MODULE_0__["Integer53"].MAX_INT, end - start), red_agate_util_modules_types_Integer53__WEBPACK_IMPORTED_MODULE_0__["Integer53"].bitRShift(x, start));
  }

  map(x, fn) {
    return this.mapToSelf(x, fn);
  }

  mapToSelf(x, fn) {
    for (let i = 0; i < 53; i++) x = this.setAt(x, i, fn(this.getAt(x, i)));

    return x;
  }

  newNthPolynomial(n) {
    return 0;
  }
  /**
   * additive identity element
   */


  get ZERO() {
    return 0;
  }
  /**
   * multiplicative identity element
   */


  get ONE() {
    return 1;
  }
  /**
   * NaN value
   */


  get NaN() {
    return Number.NaN;
  }
  /**
   * normalize a value
   */


  normalize(x) {
    return x;
  }
  /**
   * check value is NaN
   */


  isNaN(x) {
    return Number.isNaN(x);
  }
  /**
   * compare element and return true if x equals to y
   * eq(v,v)     -> true
   * eq(NaN,NaN) -> false
   */


  eq(x, y) {
    return x === y;
  }
  /**
   * compare element and return false if x equals to y
   */


  noteq(x, y) {
    return x !== y;
  }
  /**
   * negate; additive inverse (-x)
   */


  neg(x) {
    return x;
  }
  /**
   * addition (x+y)
   */


  add(x, y) {
    return red_agate_util_modules_types_Integer53__WEBPACK_IMPORTED_MODULE_0__["Integer53"].bitXor(x, y);
  }
  /**
   * subtraction (x-y)
   */


  sub(x, y) {
    return red_agate_util_modules_types_Integer53__WEBPACK_IMPORTED_MODULE_0__["Integer53"].bitXor(x, y);
  }
  /**
   * multiplication (x*y)
   */


  mul(x, y) {
    return Gf2PrimeFieldHelper.bitPolyMul(x, y);
  }
  /**
   * modulation (x%y)
   */


  mod(x, y, extendDividendLength = 0) {
    return Gf2PrimeFieldHelper.bitPolyDiv(x, y, extendDividendLength).r;
  }
  /**
   * division (x/y)
   *             ? = div(x,ZERO) ; depends on field definition
   * mul(x,inv(y)) = div(x,y)    ;  when  y != ZERO
   */


  divmod(x, y, extendDividendLength = 0) {
    return Gf2PrimeFieldHelper.bitPolyDiv(x, y, extendDividendLength);
  }
  /**
   * exponentiation (a^x)
   *   y = pow(a,x)
   *   x = log(a,y)
   * ONE = pow(a,0)
   *   a = pow(a,1)
   */


  pow(a, x) {
    throw new Error("not supported operation");
  }
  /**
   * pow(ALPHA,x) = exp(x)
   *          ONE = exp(0)
   *        ALPHA = exp(1)
   */


  exp(x) {
    throw new Error("not supported operation");
  }

}
class Gf2PrimeArrayPolynomialRing {
  /**
   *
   */
  constructor() {
    this._nan = [Number.NaN];
  }

  get field() {
    if (this._field) return this._field;
    this._field = new _GfPrime__WEBPACK_IMPORTED_MODULE_2__["GfPrime"](2);
    return this._field;
  }

  listPx(nth, listAll = false) {
    return Gf2PrimeFieldHelper.listPx(nth, listAll).map(x => Gf2PrimeFieldHelper.bitToPoly(x));
  }

  getAt(x, index) {
    return x[index];
  }

  setAt(x, index, v) {
    x[index] = v;
    return x;
  }

  slice(x, start, end) {
    return x.slice(start, end);
  }

  map(x, fn) {
    return this.mapToSelf(Array.from(x), fn);
  }

  mapToSelf(x, fn) {
    for (let i = 0; i < x.length; i++) x[i] = fn(x[i]);

    return x;
  }

  newNthPolynomial(n) {
    const r = [];
    r.length = n + 1;
    r.fill(0);
    return r;
  }
  /**
   * additive identity element
   */


  get ZERO() {
    return [0];
  }
  /**
   * multiplicative identity element
   */


  get ONE() {
    throw [1];
  }
  /**
   * NaN value
   */


  get NaN() {
    return this._nan;
  }
  /**
   * normalize a value
   */


  normalize(x) {
    return (Array.isArray(x) ? x : Array.from(x)).map(v => Boolean(v & 1) ? 1 : 0);
  }
  /**
   * check value is NaN
   */


  isNaN(x) {
    if (x !== this.NaN) {
      if (x.length === 1 && x[0] === Number.NaN) return true;
      return false;
    }

    return true;
  }
  /**
   * compare element and return true if x equals to y
   * eq(v,v)     -> true
   * eq(NaN,NaN) -> false
   */


  eq(x, y) {
    if (this.isNaN(x) || this.isNaN(y)) return false;
    const len = Math.max(x.length, y.length);

    for (let i = 0; i < len; i++) {
      if ((x[i] !== void 0 ? Boolean(x[i] & 1) ? 1 : 0 : 0) !== (y[i] !== void 0 ? Boolean(y[i] & 1) ? 1 : 0 : 0)) return false;
    }

    return true;
  }
  /**
   * compare element and return false if x equals to y
   */


  noteq(x, y) {
    return !this.eq(x, y);
  }
  /**
   * negate; additive inverse (-x)
   */


  neg(x) {
    return Array.from(x);
  }
  /**
   * addition (x+y)
   */


  add(x, y) {
    return Gf2PrimeFieldHelper.polyAdd(x, y);
  }
  /**
   * subtraction (x-y)
   */


  sub(x, y) {
    return Gf2PrimeFieldHelper.polySub(x, y);
  }
  /**
   * multiplication (x*y)
   */


  mul(x, y) {
    return Gf2PrimeFieldHelper.polyMul(x, y);
  }
  /**
   * modulation (x%y)
   */


  mod(x, y, extendDividendLength = 0) {
    return Gf2PrimeFieldHelper.polyDiv(x, y, extendDividendLength).r;
  }
  /**
   * division (x/y)
   *             ? = div(x,ZERO) ; depends on field definition
   * mul(x,inv(y)) = div(x,y)    ;  when  y != ZERO
   */


  divmod(x, y, extendDividendLength = 0) {
    return Gf2PrimeFieldHelper.polyDiv(x, y, extendDividendLength);
  }
  /**
   * exponentiation (a^x)
   *   y = pow(a,x)
   *   x = log(a,y)
   * ONE = pow(a,0)
   *   a = pow(a,1)
   */


  pow(a, x) {
    throw new Error("not supported operation");
  }
  /**
   * pow(ALPHA,x) = exp(x)
   *          ONE = exp(0)
   *        ALPHA = exp(1)
   */


  exp(x) {
    throw new Error("not supported operation");
  }

}

/***/ }),

/***/ "../red-agate-math/modules/math/GfPrime.js":
/*!*************************************************!*\
  !*** ../red-agate-math/modules/math/GfPrime.js ***!
  \*************************************************/
/*! exports provided: GfPrime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GfPrime", function() { return GfPrime; });
// Copyright (c) 2017, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln

/**
 * GF(p) ; Prime Finite Field
 */
class GfPrime {
  /**
   *
   */
  constructor(prime, alpha = 3) {
    this.prime = prime;
    this.alpha = alpha;
    this.expDict = [];
    this.lnDict = [this.NaN];
    let v = 1;

    for (let i = 0; i < prime - 1; i++) {
      this.expDict[i] = v;
      this.lnDict[v] = i;
      v = v * alpha % prime;
    }
  }
  /**
   *
   */


  checkGenerationResult() {
    for (let i = 1; i < this.prime; i++) {
      if (this.lnDict[i] === void 0) return false;
    }

    return true;
  }
  /**
   * order of this field
   */


  get MODULO() {
    return this.prime;
  }
  /**
   *
   */


  get ZERO() {
    return 0;
  }
  /**
   *
   */


  get ONE() {
    return 1;
  }
  /**
   *
   */


  get ALPHA() {
    return this.alpha;
  }
  /**
   *
   */


  get NaN() {
    return Number.NaN;
  }
  /**
   *
   */


  normalize(x) {
    return (x < 0 ? this.prime - -x % this.prime : x) % this.prime;
  }
  /**
   *
   */


  isNaN(x) {
    return Number.isNaN(x);
  }
  /**
   *
   */


  eq(x, y) {
    return this.normalize(x) === this.normalize(y);
  }
  /**
   *
   */


  noteq(x, y) {
    return this.normalize(x) !== this.normalize(y);
  }
  /**
   *
   */


  neg(x) {
    return (this.prime - x % this.prime) % this.prime;
  }
  /**
   *
   */


  inv(x) {
    x = this.normalize(x);
    return x === 0 ? this.NaN : this.expDict[(this.prime - 1 - this.ln(x)) % (this.prime - 1)];
  }
  /**
   *
   */


  inv_withoutTable(x) {
    x = this.normalize(x);
    if (x === 0) return this.NaN;
    let v = 1; // make  1/x (mod P)

    for (let i = 0; i < this.prime; i++) {
      if (v % x === 0) return v / x % this.prime;
      v = v + this.prime;
    }

    return this.NaN;
  }
  /**
   *
   */


  add(x, y) {
    return (this.normalize(x) + this.normalize(y)) % this.prime;
  }
  /**
   *
   */


  sub(x, y) {
    return this.normalize(this.normalize(x) - this.normalize(y));
  }
  /**
   *
   */


  mul(x, y) {
    return this.normalize(x) * this.normalize(y) % this.prime;
  }
  /**
   *
   */


  div(x, y) {
    return this.normalize(x) * this.inv(y) % this.prime;
  }
  /**
   *
   */


  mod(x, y) {
    return y % this.prime === 0 ? this.NaN : 0;
  }
  /**
   *
   */


  divmod(x, y) {
    return y % this.prime === 0 ? {
      q: this.NaN,
      r: this.NaN,
      divisible: false
    } : {
      q: this.div(x, y),
      r: 0,
      divisible: true
    };
  }
  /**
   *
   */


  pow(a, x) {
    a = this.normalize(a);
    x = x % (this.prime - 1);

    if (a === 0) {
      return x === 0 ? 1 : 0;
    }

    return x >= 0 ? this.exp(this.ln(a) * x) : this.inv(this.exp(this.ln(a) * -x));
  }
  /**
   *
   */


  pow_withoutTable(a, x) {
    a = this.normalize(a);
    x = x % (this.prime - 1);

    if (a === 0) {
      return x === 0 ? 1 : 0;
    }

    return x >= 0 ? this.exp_withoutTable(this.ln_withoutTable(a) * x) : this.inv_withoutTable(this.exp_withoutTable(this.ln(a) * -x));
  }
  /**
   *
   */


  log(a, x) {
    // y = log(a,pow(a,y))
    const logDict = [this.NaN];

    for (let y = 0; y < this.prime - 1; y++) {
      const v = this.pow(a, y);
      if (logDict[v] === void 0) logDict[v] = y;
    }

    const r = logDict[this.normalize(x)];
    return r !== void 0 ? r : this.NaN;
  }
  /**
   *
   */


  log_withoutTable(a, x) {
    // log(a,x) = ln(x) / ln(a)
    let p = this.ln_withoutTable(x);
    const q = this.ln_withoutTable(a);
    if (this.isNaN(p) || this.isNaN(q)) return this.NaN;

    for (let i = 0; i < this.prime; i++) {
      if (p % q === 0) return p / q % this.prime;
      p = p + this.prime - 1; // on GF(P):  alpha^x = alpha^(x + P - 1)
    }

    return this.NaN;
  }
  /**
   *
   */


  exp(x) {
    return x >= 0 ? this.expDict[x % (this.prime - 1)] : this.inv(this.expDict[-x % (this.prime - 1)]);
  }
  /**
   *
   */


  exp_withoutTable(x) {
    return x >= 0 ? Math.pow(this.alpha, x % (this.prime - 1)) % this.prime : this.inv_withoutTable(Math.pow(this.alpha, -x % (this.prime - 1)));
  }
  /**
   *
   */


  ln(x) {
    return this.lnDict[this.normalize(x)];
  }
  /**
   *
   */


  ln_withoutTable(x) {
    x = this.normalize(x);
    if (x === 0) return this.NaN;
    let v = 1;

    for (let i = 0; i < this.prime - 1; i++) {
      if (x === v) return i;
      v = v * this.alpha % this.prime;
    }

    return this.NaN;
  }

}

/***/ }),

/***/ "../red-agate-math/modules/math/RealField.js":
/*!***************************************************!*\
  !*** ../red-agate-math/modules/math/RealField.js ***!
  \***************************************************/
/*! exports provided: RealField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealField", function() { return RealField; });
// Copyright (c) 2017, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln

/**
 * GF(p) ; Real Number Field
 */
class RealField {
  /**
   *
   */
  get ZERO() {
    return 0;
  }
  /**
   *
   */


  get ONE() {
    return 1;
  }
  /**
   *
   */


  get ALPHA() {
    return Math.E;
  }
  /**
   *
   */


  get NaN() {
    return Number.NaN;
  }
  /**
   *
   */


  normalize(x) {
    return x;
  }
  /**
   *
   */


  isNaN(x) {
    return Number.isNaN(x);
  }
  /**
   *
   */


  eq(x, y) {
    return x === y;
  }
  /**
   *
   */


  noteq(x, y) {
    return x !== y;
  }
  /**
   *
   */


  neg(x) {
    return -x;
  }
  /**
   *
   */


  inv(x) {
    return 1 / x;
  }
  /**
   *
   */


  add(x, y) {
    return x + y;
  }
  /**
   *
   */


  sub(x, y) {
    return x - y;
  }
  /**
   *
   */


  mul(x, y) {
    return x * y;
  }
  /**
   *
   */


  div(x, y) {
    return x / y;
  }
  /**
   *
   */


  mod(x, y) {
    return x % y;
  }
  /**
   *
   */


  divmod(x, y) {
    return y === 0 ? {
      q: this.NaN,
      r: this.NaN,
      divisible: false
    } : {
      q: Math.sign(x) * (Math.abs(x) - Math.abs(x % y)) / y,
      r: x % y,
      divisible: x % y === 0
    };
  }
  /**
   *
   */


  pow(a, x) {
    return Math.pow(a, x);
  }
  /**
   *
   */


  log(a, x) {
    return Math.log(x) / Math.log(a);
  }
  /**
   *
   */


  exp(x) {
    return Math.exp(x);
  }
  /**
   *
   */


  ln(x) {
    return Math.log(x);
  }

}

/***/ }),

/***/ "../red-agate-react-host/modules/index.js":
/*!************************************************!*\
  !*** ../red-agate-react-host/modules/index.js ***!
  \************************************************/
/*! exports provided: ReactDOMServer, ReactHost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _react_host__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./react-host */ "../red-agate-react-host/modules/react-host.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReactDOMServer", function() { return _react_host__WEBPACK_IMPORTED_MODULE_0__["ReactDOMServer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReactHost", function() { return _react_host__WEBPACK_IMPORTED_MODULE_0__["ReactHost"]; });

// Copyright (c) 2017, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln


/***/ }),

/***/ "../red-agate-react-host/modules/react-host.js":
/*!*****************************************************!*\
  !*** ../red-agate-react-host/modules/react-host.js ***!
  \*****************************************************/
/*! exports provided: ReactDOMServer, ReactHost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactDOMServer", function() { return ReactDOMServer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactHost", function() { return ReactHost; });
/* harmony import */ var red_agate_modules_red_agate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! red-agate/modules/red-agate */ "../red-agate/modules/red-agate/index.js");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);
 // NOTE: hack bad .d.ts definition for ESM.


const ReactDOMServer = react_dom_server__WEBPACK_IMPORTED_MODULE_1___default.a || react_dom_server__WEBPACK_IMPORTED_MODULE_1__;
class ReactHost extends red_agate_modules_red_agate__WEBPACK_IMPORTED_MODULE_0__["RedAgateComponent"] {
  constructor(props) {
    super(props);
  }

  transform() {
    return [];
  }

  render() {
    return ReactDOMServer.renderToStaticMarkup(this.props.element);
  }

}

/***/ }),

/***/ "../red-agate-svg-canvas/modules/drawing/canvas/SvgCanvas.js":
/*!*******************************************************************!*\
  !*** ../red-agate-svg-canvas/modules/drawing/canvas/SvgCanvas.js ***!
  \*******************************************************************/
/*! exports provided: SvgCanvasImageData, SvgCanvas2DGradient, SvgCanvas2DLinerGradient, SvgCanvas2DRadialGradient, SvgCanvas2DPattern, SvgCanvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgCanvasImageData", function() { return SvgCanvasImageData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgCanvas2DGradient", function() { return SvgCanvas2DGradient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgCanvas2DLinerGradient", function() { return SvgCanvas2DLinerGradient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgCanvas2DRadialGradient", function() { return SvgCanvas2DRadialGradient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgCanvas2DPattern", function() { return SvgCanvas2DPattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgCanvas", function() { return SvgCanvas; });
/* harmony import */ var red_agate_util_modules_convert_TextEncoding__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! red-agate-util/modules/convert/TextEncoding */ "../red-agate-util/modules/convert/TextEncoding.js");
/* harmony import */ var red_agate_util_modules_convert_Base64__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! red-agate-util/modules/convert/Base64 */ "../red-agate-util/modules/convert/Base64.js");
/* harmony import */ var red_agate_util_modules_convert_Escape__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! red-agate-util/modules/convert/Escape */ "../red-agate-util/modules/convert/Escape.js");
/* harmony import */ var red_agate_util_modules_convert_WordWrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! red-agate-util/modules/convert/WordWrap */ "../red-agate-util/modules/convert/WordWrap.js");
/* harmony import */ var _WebColor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./WebColor */ "../red-agate-svg-canvas/modules/drawing/canvas/WebColor.js");
/* harmony import */ var _TransferMatrix2D__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TransferMatrix2D */ "../red-agate-svg-canvas/modules/drawing/canvas/TransferMatrix2D.js");
// Copyright (c) 2017, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln






class SvgCanvasImageData {
  constructor(url, x, y, width, height) {
    this.url = url;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

}
class SvgCanvas2DGradient {}
class SvgCanvas2DLinerGradient extends SvgCanvas2DGradient {
  constructor(id, x0, y0, x1, y1) {
    super();
    this.id = id;
    this.x0 = x0;
    this.y0 = y0;
    this.x1 = x1;
    this.y1 = y1;
    this.content = `<linearGradient id="${id}" gradientUnits="userSpaceOnUse" x1="${x0}" y1="${y0}" x2="${x1}" y2="${y1}" >\n`;
  }

  addColorStop(offset, color, opacity = 1) {
    this.content += `<stop offset="${offset}" stop-color="${color}" stop-opacity="${opacity}" />\n`;
  }

  toDef() {
    return this.content + "</linearGradient>";
  }

  toString() {
    return `url(#${this.id})`;
  }

}
class SvgCanvas2DRadialGradient extends SvgCanvas2DGradient {
  /** fr is ignored. fr is always 0. */
  constructor(id, cx, cy, r, fx, fy) {
    super();
    this.id = id;
    this.cx = cx;
    this.cy = cy;
    this.r = r;
    this.fx = fx;
    this.fy = fy;
    this.content = `<radialGradient id="${id}" gradientUnits="userSpaceOnUse" cx="${cx}" cy="${cy}" r="${r}" fx="${fx}" fy="${fy}" >\n`;
  }

  addColorStop(offset, color, opacity = 1) {
    this.content += `<stop offset="${offset}" stop-color="${color}" stop-opacity="${opacity}" />\n`;
  }

  toDef() {
    return this.content + "</radialGradient>";
  }

  toString() {
    return `url(#${this.id})`;
  }

}
class SvgCanvas2DPattern {
  constructor(id, imageData) {
    this.id = id;
    this.imageData = imageData;
  }

  toDef() {
    const content = `<image x="0" y="0" width="${this.imageData.width}" height="${this.imageData.height}" \n` + `xlink:href="${this.imageData.url}" />`;
    return `<pattern id="${this.id}"  patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse" ` + `x="${this.imageData.x}" y="${this.imageData.y}" ` + `width="${this.imageData.width}" height="${this.imageData.height}">${content}</pattern>`;
  }

  toString() {
    return `url(#${this.id})`;
  }

}

class SvgCanvasGraphicState {
  constructor(src) {
    this.globalAlpha = 1;
    /**
     * canvas: source-over|source-in|source-out|source-atop|
     *         destination-over|destination-in|destination-out|destination-atop|
     *         lighter|copy|xor
     *    svg: over|in|out|atop|xor|arithmetic
     */

    this.globalCompositeOperation = "source-over";
    this.shadowBlur = 0;
    /**
     * canvas   : <'web-color'>|#000|#000000|rgb(0,0,0)|rgba(0,0,0,0)
     * SvgCanvas: rgb(0,0,0)|rgba(0,0,0,0)
     */

    this.shadowColor = "rgba(0,0,0,1)";
    this.shadowOffsetX = 0;
    this.shadowOffsetY = 0;
    this.filterIdUrl = null;
    /**
     * canvas: "italic bold 26px 'Times New Roman'"
     *    svg: font-family ="Times New Roman"
     *         font-style  =normal|italic|oblique
     *         font-variant=normal|small-caps
     *         font-weight =normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900
     *         font-stretch=normal|wider|narrower|ultra-condensed|extra-condensed|condensed|
     *                      semi-condensed|semi-expanded|expanded|extra-expanded|ultra-expanded
     *         font-size   =<absolute-size>|<relative-size>|<length>|<percentage>
     *         font-size-adjust=<number>|none
     *         font        =[[<'font-style'>||<'font-variant'>||<'font-weight'>]?<'font-size'>[/<'line-height'>]?<'font-family'>]
     */

    this.font = "normal 12px 'Times New Roman'";
    /**
     * text-anchor
     * canvas:start|end|left|right|center
     *    svg:start|middle|end
     */

    this.textAlign = "start";
    /**
     * dominant-baseline
     * default is 'auto'.
     * canvas:top|hanging|middle|alphabetic|ideographic|bottom
     *        ('alphabetic' is default)
     *    svg:auto|use-script|no-change|reset-size|ideographic|alphabetic|hanging|mathematical|central|middle|text-after-edge|text-before-edge
     *        ('auto' is default. 'auto's effective value is depends on writing mode. if mode is horizontal then it is alphabetic. else then it is central)
     */

    this.textBaseline = "auto";
    /**
     * stroke-linecap
     * butt|round|square
     */

    this.lineCap = "butt";
    this.lineDashOffset = 0;
    /**
     * stroke-linejoin
     * miter|round|bevel
     */

    this.lineJoin = "miter";
    this.lineWidth = 1;
    this.miterLimit = 4;
    this.strokeStyle = "black";
    this.fillStyle = "black";
    this.ctm = new _TransferMatrix2D__WEBPACK_IMPORTED_MODULE_5__["TransferMatrix2D"]();
    this.currentPoint = null;
    this.currentPointOnCtm = null;
    this.subpath = [];
    this.lineDash = [];
    this.clipPath = "";
    if (!src) return;

    for (const key in this) {
      if (this.hasOwnProperty(key) && src.hasOwnProperty(key)) {
        this[key] = src[key];
      }
    }

    this.subpath = Array.from(this.subpath);
  }

}
/**
 * subset of CanvasRenderingContext2D
 */


class SvgCanvas {
  constructor() {
    this.graphicsStack = [];
    this.assets = [];
    this.content = "";
    this.contentSaved = "";
    this.idCount = 0;
    this.template = null; // tslint:disable-next-line:variable-name

    this._fontHeightRatio = 1.25;
    this.graphicsStack.push(new SvgCanvasGraphicState());
  }

  get globalAlpha() {
    return this.graphicsStack[this.graphicsStack.length - 1].globalAlpha;
  }

  set globalAlpha(value) {
    this.graphicsStack[this.graphicsStack.length - 1].globalAlpha = value;
  }

  get globalCompositeOperation() {
    return this.graphicsStack[this.graphicsStack.length - 1].globalCompositeOperation;
  }

  set globalCompositeOperation(value) {
    this.filterIdUrl = null;
    this.graphicsStack[this.graphicsStack.length - 1].globalCompositeOperation = value;
  }

  get shadowBlur() {
    return this.graphicsStack[this.graphicsStack.length - 1].shadowBlur;
  }

  set shadowBlur(value) {
    this.filterIdUrl = null;
    this.graphicsStack[this.graphicsStack.length - 1].shadowBlur = value;
  }

  get shadowColor() {
    return this.graphicsStack[this.graphicsStack.length - 1].shadowColor;
  }

  set shadowColor(value) {
    this.filterIdUrl = null;
    this.graphicsStack[this.graphicsStack.length - 1].shadowColor = value;
  }

  get shadowOffsetX() {
    return this.graphicsStack[this.graphicsStack.length - 1].shadowOffsetX;
  }

  set shadowOffsetX(value) {
    this.filterIdUrl = null;
    this.graphicsStack[this.graphicsStack.length - 1].shadowOffsetX = value;
  }

  get shadowOffsetY() {
    return this.graphicsStack[this.graphicsStack.length - 1].shadowOffsetY;
  }

  set shadowOffsetY(value) {
    this.filterIdUrl = null;
    this.graphicsStack[this.graphicsStack.length - 1].shadowOffsetY = value;
  }

  get filterIdUrl() {
    return this.graphicsStack[this.graphicsStack.length - 1].filterIdUrl;
  }

  set filterIdUrl(value) {
    this.graphicsStack[this.graphicsStack.length - 1].filterIdUrl = value;
  }
  /**
   * canvas: "italic bold 26px 'Times New Roman'"
   *    svg: font-family ="Times New Roman"
   *         font-style  =normal|italic|oblique
   *         font-variant=normal|small-caps
   *         font-weight =normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900
   *         font-stretch=normal|wider|narrower|ultra-condensed|extra-condensed|condensed|
   *                      semi-condensed|semi-expanded|expanded|extra-expanded|ultra-expanded
   *         font-size   =<absolute-size>|<relative-size>|<length>|<percentage>
   *         font-size-adjust=<number>|none
   *         font        =[[<'font-style'>||<'font-variant'>||<'font-weight'>]?<'font-size'>[/<'line-height'>]?<'font-family'>]
   */


  get font() {
    return this.graphicsStack[this.graphicsStack.length - 1].font;
  }
  /**
   * canvas: "italic bold 26px 'Times New Roman'"
   *         [<‘font-style’>||<font-variant>||<‘font-weight’>||<‘font-stretch’>]?<‘font-size’>[/<‘line-height’>]?<‘font-family’>
   *
   *    svg: font-family ="Times New Roman"
   *         font-style  =normal|italic|oblique
   *         font-variant=normal|small-caps
   *         font-weight =normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900
   *         font-stretch=normal|wider|narrower|ultra-condensed|extra-condensed|condensed|
   *                      semi-condensed|semi-expanded|expanded|extra-expanded|ultra-expanded
   *         font-size   =<absolute-size>|<relative-size>|<length>|<percentage>
   *         font-size-adjust=<number>|none
   *         font        =[<'font-style'>||<'font-variant'>||<'font-weight'>]?<'font-size'>[/<'line-height'>]?<'font-family'>
   */


  set font(value) {
    this.graphicsStack[this.graphicsStack.length - 1].font = value;
  }
  /**
   * text-anchor
   * canvas:start|end|left|right|center
   *    svg:start|middle|end
   */


  get textAlign() {
    return this.graphicsStack[this.graphicsStack.length - 1].textAlign;
  }
  /**
   * text-anchor
   * canvas:start|end|left|right|center
   *    svg:start|middle|end
   */


  set textAlign(value) {
    this.graphicsStack[this.graphicsStack.length - 1].textAlign = value;
  }
  /**
   * dominant-baseline
   * canvas:top|hanging|middle|alphabetic|ideographic|bottom
   *    svg:auto|use-script|no-change|reset-size|ideographic|alphabetic|hanging|mathematical|central|middle|text-after-edge|text-before-edge
   */


  get textBaseline() {
    return this.graphicsStack[this.graphicsStack.length - 1].textBaseline;
  }
  /**
   * dominant-baseline
   * canvas:top|hanging|middle|alphabetic|ideographic|bottom
   *    svg:auto|use-script|no-change|reset-size|ideographic|alphabetic|hanging|mathematical|central|middle|text-after-edge|text-before-edge
   */


  set textBaseline(value) {
    this.graphicsStack[this.graphicsStack.length - 1].textBaseline = value;
  }
  /**
   * stroke-linecap
   * butt|round|square
   */


  get lineCap() {
    return this.graphicsStack[this.graphicsStack.length - 1].lineCap;
  }
  /**
   * stroke-linecap
   * butt|round|square
   */


  set lineCap(value) {
    this.graphicsStack[this.graphicsStack.length - 1].lineCap = value;
  }

  get lineDashOffset() {
    return this.graphicsStack[this.graphicsStack.length - 1].lineDashOffset;
  }

  set lineDashOffset(value) {
    this.graphicsStack[this.graphicsStack.length - 1].lineDashOffset = value;
  }
  /**
   * stroke-linejoin
   * miter|round|bevel
   */


  get lineJoin() {
    return this.graphicsStack[this.graphicsStack.length - 1].lineJoin;
  }
  /**
   * stroke-linejoin
   * miter|round|bevel
   */


  set lineJoin(value) {
    this.graphicsStack[this.graphicsStack.length - 1].lineJoin = value;
  }

  get lineWidth() {
    return this.graphicsStack[this.graphicsStack.length - 1].lineWidth;
  }

  set lineWidth(value) {
    this.graphicsStack[this.graphicsStack.length - 1].lineWidth = value;
  }

  get miterLimit() {
    return this.graphicsStack[this.graphicsStack.length - 1].miterLimit;
  }

  set miterLimit(value) {
    this.graphicsStack[this.graphicsStack.length - 1].miterLimit = value;
  }

  get strokeStyle() {
    return this.graphicsStack[this.graphicsStack.length - 1].strokeStyle;
  }

  set strokeStyle(value) {
    this.graphicsStack[this.graphicsStack.length - 1].strokeStyle = value.toString();
  }

  get fillStyle() {
    return this.graphicsStack[this.graphicsStack.length - 1].fillStyle;
  }

  set fillStyle(value) {
    this.graphicsStack[this.graphicsStack.length - 1].fillStyle = value.toString();
  }

  get ctm() {
    return this.graphicsStack[this.graphicsStack.length - 1].ctm;
  }

  set ctm(value) {
    this.graphicsStack[this.graphicsStack.length - 1].ctm = value;
  }

  get currentPoint() {
    return this.graphicsStack[this.graphicsStack.length - 1].currentPoint;
  }

  set currentPoint(value) {
    this.graphicsStack[this.graphicsStack.length - 1].currentPoint = value;
  }

  get currentPointOnCtm() {
    return this.graphicsStack[this.graphicsStack.length - 1].currentPointOnCtm;
  }

  set currentPointOnCtm(value) {
    this.graphicsStack[this.graphicsStack.length - 1].currentPointOnCtm = value;
  }

  get subpath() {
    return this.graphicsStack[this.graphicsStack.length - 1].subpath;
  }

  set subpath(value) {
    this.graphicsStack[this.graphicsStack.length - 1].subpath = value;
  }

  get lineDash() {
    return this.graphicsStack[this.graphicsStack.length - 1].lineDash;
  }

  set lineDash(value) {
    this.graphicsStack[this.graphicsStack.length - 1].lineDash = value;
  }

  get clipPath() {
    return this.graphicsStack[this.graphicsStack.length - 1].clipPath;
  }

  set clipPath(value) {
    this.graphicsStack[this.graphicsStack.length - 1].clipPath = value;
  }

  get subpathIsEmptyOrClosed() {
    return this.subpath.length === 0 || this.subpath[this.subpath.length - 1] === "Z";
  }

  static fromTemplate(template) {
    const c = new SvgCanvas();
    c.template = template;
    c.idCount = new Date().getTime();
    return c;
  }

  render(viewbox, unit = "mm") {
    const svgns = `xmlns="http://www.w3.org/2000/svg"`;
    const xlinkns = `xmlns:xlink="http://www.w3.org/1999/xlink"`;
    const vbox = `viewBox="${viewbox.x} ${viewbox.y} ${viewbox.w} ${viewbox.h}"`;
    const defs = `<defs>\n${this.assets.map(x => typeof x === "string" ? x : x.toDef()).join("\n")}</defs>`;

    if (!this.template) {
      return `<svg ${svgns} ${xlinkns} version="1.1" width="${viewbox.w}${unit}" height="${viewbox.h}${unit}" ${vbox}>\n${defs}\n${this.contentSaved}${this.content}</svg>`;
    } else {
      let tmpl = this.template.replace(/<\/svg>\s*$/, '');
      {
        const re = /(<svg[^>]*?)\s+?width\s*?=\s*?["'](?:[^"'>]+?)["']([^>]*?>)/;

        if (re.test(tmpl)) {
          tmpl = tmpl.replace(re, `$1 width="${viewbox.w}${unit}"$2`);
        } else {
          tmpl = tmpl.replace(/<svg\s/, `<svg width="${viewbox.w}${unit}" `);
        }
      }
      {
        const re = /(<svg[^>]*?)\s+?height\s*?=\s*?["'](?:[^"'>]+?)["']([^>]*?>)/;

        if (re.test(tmpl)) {
          tmpl = tmpl.replace(re, `$1 height="${viewbox.h}${unit}"$2`);
        } else {
          tmpl = tmpl.replace(/<svg\s/, `<svg height="${viewbox.h}${unit}" `);
        }
      }
      {
        const re = /(<svg[^>]*?)\s+?viewBox\s*?=\s*?["'](?:[^"'>]+?)["']([^>]*?>)/;

        if (re.test(tmpl)) {
          tmpl = tmpl.replace(re, `$1 ${vbox}$2`);
        } else {
          tmpl = tmpl.replace(/<svg\s/, `<svg ${vbox} `);
        }
      }

      if (!tmpl.match(/<svg[^>]*?\s+?xmlns:xlink\s*?=/)) {
        tmpl = tmpl.replace(/<svg\s/, `<svg ${xlinkns} `);
      }

      if (!tmpl.match(/<svg[^>]*?\s+?xmlns\s*?=/)) {
        tmpl = tmpl.replace(/<svg\s/, `<svg ${svgns} `);
      }

      return `${tmpl}\n${defs}\n${this.contentSaved}${this.content}</svg>`;
    }
  }

  toDataUrl(viewbox, unit = "mm", lineLength = 120) {
    return "data:image/svg+xml;base64," + red_agate_util_modules_convert_Base64__WEBPACK_IMPORTED_MODULE_1__["Base64"].encode(red_agate_util_modules_convert_TextEncoding__WEBPACK_IMPORTED_MODULE_0__["TextEncoding"].encodeToUtf8(this.render(viewbox, unit)), lineLength);
  }
  /** postscript gsave */


  save() {
    const s = new SvgCanvasGraphicState(this.graphicsStack[this.graphicsStack.length - 1]);
    this.graphicsStack.push(s);
  }
  /** postscript grestore */


  restore(restorePath = false) {
    if (restorePath) {
      if (0 < this.graphicsStack.length) this.graphicsStack.pop();
    } else {
      if (0 < this.graphicsStack.length) {
        const subpath = this.subpath;
        const cpt = this.currentPoint;
        const cptoctm = this.currentPointOnCtm;
        this.graphicsStack.pop();
        this.subpath = subpath;
        this.currentPoint = cpt;
        this.currentPointOnCtm = cptoctm;
      }
    }
  }
  /** postscript x y scale */


  scale(x, y) {
    if (this.currentPointOnCtm !== null) {
      const tm = new _TransferMatrix2D__WEBPACK_IMPORTED_MODULE_5__["TransferMatrix2D"]().scale(x, y);
      this.currentPointOnCtm = tm.transfer(this.currentPointOnCtm);
    }

    this.ctm = this.ctm.scale(x, y);
  }
  /** postscript x y translate */


  translate(x, y) {
    if (this.currentPointOnCtm !== null) {
      const tm = new _TransferMatrix2D__WEBPACK_IMPORTED_MODULE_5__["TransferMatrix2D"]().translate(x, y);
      this.currentPointOnCtm = tm.transfer(this.currentPointOnCtm);
    }

    this.ctm = this.ctm.translate(x, y);
  }
  /** postscript (angle*180/PI) rotate */


  rotate(angle) {
    if (this.currentPointOnCtm !== null) {
      const tm = new _TransferMatrix2D__WEBPACK_IMPORTED_MODULE_5__["TransferMatrix2D"]().rotate(angle);
      this.currentPointOnCtm = tm.transfer(this.currentPointOnCtm);
    }

    this.ctm = this.ctm.rotate(angle);
  }
  /** postscript [m11 m12 m21 m22 dx dy] concat */


  transform(m11, m12, m21, m22, dx, dy) {
    const tm = new _TransferMatrix2D__WEBPACK_IMPORTED_MODULE_5__["TransferMatrix2D"](m11, m12, m21, m22, dx, dy);
    if (this.currentPointOnCtm !== null) this.currentPointOnCtm = tm.transfer(this.currentPointOnCtm);
    this.ctm = this.ctm.concat(tm);
  }
  /** postscript [m11 m12 m21 m22 dx dy] setmatrix */


  setTransform(m11, m12, m21, m22, dx, dy) {
    this.currentPointOnCtm = null;
    this.ctm = new _TransferMatrix2D__WEBPACK_IMPORTED_MODULE_5__["TransferMatrix2D"](m11, m12, m21, m22, dx, dy);
  }
  /** postscript newpath */


  beginPath() {
    this.subpath = [];
    this.currentPoint = null;
    this.currentPointOnCtm = null;
  }
  /** postscript closepath */


  closePath() {
    this.subpath.push("Z");
    this.currentPoint = null;
    this.currentPointOnCtm = null;
  }
  /** postscript x y moveto */


  moveTo(x, y) {
    const p = new _TransferMatrix2D__WEBPACK_IMPORTED_MODULE_5__["Point2D"](x, y);
    this.subpath.push("M", this.ctm.transfer(p));
    this.currentPoint = this.subpath[this.subpath.length - 1];
    this.currentPointOnCtm = p;
  }
  /** postscript x y lineto */


  lineTo(x, y, ...extra) {
    let p = new _TransferMatrix2D__WEBPACK_IMPORTED_MODULE_5__["Point2D"](x, y);
    this.subpath.push("L", this.ctm.transfer(p));

    if (extra && extra.length % 4 === 0) {
      for (let i = 0; i < extra.length; i += 2) {
        if (extra.length <= i + 1) break;
        p = new _TransferMatrix2D__WEBPACK_IMPORTED_MODULE_5__["Point2D"](extra[i], extra[i + 1]);
        this.subpath.push(this.ctm.transfer(p));
      }
    }

    this.currentPoint = this.subpath[this.subpath.length - 1];
    this.currentPointOnCtm = p;
  }

  quadraticCurveTo(cpx, cpy, x, y, ...extra) {
    let p = new _TransferMatrix2D__WEBPACK_IMPORTED_MODULE_5__["Point2D"](x, y);
    this.subpath.push("Q", this.ctm.transfer(new _TransferMatrix2D__WEBPACK_IMPORTED_MODULE_5__["Point2D"](cpx, cpy)), this.ctm.transfer(p));

    if (extra && extra.length % 4 === 0) {
      for (let i = 0; i < extra.length; i += 2) {
        if (extra.length <= i + 1) break;
        p = new _TransferMatrix2D__WEBPACK_IMPORTED_MODULE_5__["Point2D"](extra[i], extra[i + 1]);
        this.subpath.push(this.ctm.transfer(p));
      }
    }

    this.currentPoint = this.subpath[this.subpath.length - 1];
    this.currentPointOnCtm = p;
  }
  /** postscript cp1x cp1y cp2x cp2y x y curveto */


  bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y, ...extra) {
    let p = new _TransferMatrix2D__WEBPACK_IMPORTED_MODULE_5__["Point2D"](x, y);
    this.subpath.push("C", this.ctm.transfer(new _TransferMatrix2D__WEBPACK_IMPORTED_MODULE_5__["Point2D"](cp1x, cp1y)), this.ctm.transfer(new _TransferMatrix2D__WEBPACK_IMPORTED_MODULE_5__["Point2D"](cp2x, cp2y)), this.ctm.transfer(p));

    if (extra && extra.length % 6 === 0) {
      for (let i = 0; i < extra.length; i += 2) {
        p = new _TransferMatrix2D__WEBPACK_IMPORTED_MODULE_5__["Point2D"](extra[i], extra[i + 1]);
        this.subpath.push(this.ctm.transfer(p));
      }
    }

    this.currentPoint = this.subpath[this.subpath.length - 1];
    this.currentPointOnCtm = p;
  }
  /**
   * postscript arc / arcn
   * anticlockwise= true: x y startAngle endAngle arc
   * anticlockwise=false: x y startAngle endAngle arcn
   * center: (x,y)
   */


  arc(x, y, radius, startAngle, endAngle, anticlockwise = false) {
    const entired = Math.abs(endAngle - startAngle) >= 2 * Math.PI;
    if (Math.abs(startAngle) > 2 * Math.PI) startAngle = startAngle % (2 * Math.PI);
    if (startAngle < 0) startAngle = 2 * Math.PI + startAngle;
    if (Math.abs(endAngle) > 2 * Math.PI) endAngle = endAngle % (2 * Math.PI);
    if (endAngle < 0) endAngle = 2 * Math.PI + endAngle;

    if (entired) {
      endAngle = startAngle + 2 * Math.PI;
    } else {
      if (anticlockwise) {
        [startAngle, endAngle] = [endAngle, startAngle];
      }

      if (endAngle < startAngle) {
        endAngle = endAngle + 2 * Math.PI;
      }
    }

    let angle = endAngle - startAngle;
    let r = 0;
    const PI_2 = Math.PI / 2; // approximate the arc by a Bezier curve.

    const k0 = 4 * (Math.sqrt(2) - 1) / 3; // 0.55228474983...

    const tm0 = new _TransferMatrix2D__WEBPACK_IMPORTED_MODULE_5__["TransferMatrix2D"]().translate(x, y).scale(radius, radius);
    let points = []; // tslint:disable-next-line:ban-comma-operator

    for (; PI_2 < angle; r += PI_2, angle -= PI_2) {
      const tm = tm0.rotate(startAngle + r);
      if (points.length === 0) points.push(tm.transfer(new _TransferMatrix2D__WEBPACK_IMPORTED_MODULE_5__["Point2D"](1, 0)));
      points.push(tm.transfer(new _TransferMatrix2D__WEBPACK_IMPORTED_MODULE_5__["Point2D"](1, k0)));
      points.push(tm.transfer(new _TransferMatrix2D__WEBPACK_IMPORTED_MODULE_5__["Point2D"](k0, 1)));
      points.push(tm.transfer(new _TransferMatrix2D__WEBPACK_IMPORTED_MODULE_5__["Point2D"](0, 1)));
    }

    const k1 = 4 * Math.tan(angle / 4) / 3;
    {
      const tm = tm0.rotate(startAngle + r);
      if (points.length === 0) points.push(tm.transfer(new _TransferMatrix2D__WEBPACK_IMPORTED_MODULE_5__["Point2D"](1, 0)));
      points.push(tm.transfer(new _TransferMatrix2D__WEBPACK_IMPORTED_MODULE_5__["Point2D"](1, k1)));
      points.push(tm.transfer(new _TransferMatrix2D__WEBPACK_IMPORTED_MODULE_5__["Point2D"](Math.cos(angle) + k1 * Math.sin(angle), Math.sin(angle) - k1 * Math.cos(angle))));
      points.push(tm.transfer(new _TransferMatrix2D__WEBPACK_IMPORTED_MODULE_5__["Point2D"](Math.cos(angle), Math.sin(angle))));
    }
    if (anticlockwise) points = points.reverse();
    const p = points[points.length - 1];
    points = points.map(pt => this.ctm.transfer(pt));
    this.subpath.push(this.subpathIsEmptyOrClosed ? "M" : "L", points.shift(), "C");
    this.subpath.push(...points);
    this.currentPoint = this.subpath[this.subpath.length - 1];
    this.currentPointOnCtm = p;
  }
  /** postscript x1 y1 x2 y2 arcto */


  arcTo(x1, y1, x2, y2, radius) {
    const p0 = this.currentPointOnCtm;

    if (p0 === null) {
      return;
    }

    const p1 = new _TransferMatrix2D__WEBPACK_IMPORTED_MODULE_5__["Point2D"](x1, y1);
    const p2 = new _TransferMatrix2D__WEBPACK_IMPORTED_MODULE_5__["Point2D"](x2, y2);
    const v1 = _TransferMatrix2D__WEBPACK_IMPORTED_MODULE_5__["Vector2D"].fromPoints(p0, p1);
    const v2 = _TransferMatrix2D__WEBPACK_IMPORTED_MODULE_5__["Vector2D"].fromPoints(p1, p2);

    if (v1.x === 0 && v2.x === 0 || v1.y === 0 && v2.y === 0 || v1.isZero() || v2.isZero()) {
      this.subpath.push("L", this.ctm.transfer(p1), this.ctm.transfer(p2));
      this.currentPointOnCtm = p2;
      return;
    }

    const arcAngle = _TransferMatrix2D__WEBPACK_IMPORTED_MODULE_5__["Vector2D"].getAngle(v1, v2);

    if (arcAngle === 0 || arcAngle === Math.PI) {
      this.subpath.push("L", this.ctm.transfer(p1), this.ctm.transfer(p2));
      this.currentPointOnCtm = p2;
      return;
    }

    const linesAngle = Math.PI - arcAngle;
    const a = radius / Math.sin(linesAngle / 2);
    const b = Math.abs(Math.cos(linesAngle / 2) * a);
    let vang1 = _TransferMatrix2D__WEBPACK_IMPORTED_MODULE_5__["Vector2D"].fromPoints(p1, p0).getAngle();
    let vang2 = v2.getAngle();
    const cp1 = new _TransferMatrix2D__WEBPACK_IMPORTED_MODULE_5__["Point2D"](b * Math.cos(vang1) + p1.x, b * Math.sin(vang1) + p1.y);
    const cp2 = new _TransferMatrix2D__WEBPACK_IMPORTED_MODULE_5__["Point2D"](b * Math.cos(vang2) + p1.x, b * Math.sin(vang2) + p1.y);

    if (Math.abs(vang2 - vang1) > Math.PI) {
      if (vang2 > vang1) vang1 += Math.PI * 2;else vang2 += Math.PI * 2;
    }

    const center = new _TransferMatrix2D__WEBPACK_IMPORTED_MODULE_5__["Point2D"](a * Math.cos((vang1 + vang2) / 2) + p1.x, a * Math.sin((vang1 + vang2) / 2) + p1.y);
    const vcp1 = _TransferMatrix2D__WEBPACK_IMPORTED_MODULE_5__["Vector2D"].fromPoints(center, cp1);
    const vcp2 = _TransferMatrix2D__WEBPACK_IMPORTED_MODULE_5__["Vector2D"].fromPoints(center, cp2);
    let angcp1 = vcp1.getAngle();
    let angcp2 = vcp2.getAngle();

    if (Math.abs(angcp2 - angcp1) > Math.PI) {
      if (angcp2 > angcp1) angcp1 += Math.PI * 2;else angcp2 += Math.PI * 2;
    } // this.subpath.push("L", this.ctm.transfer(cp1), this.ctm.transfer(center), this.ctm.transfer(cp2)); // debug


    this.arc(center.x, center.y, radius, angcp1, angcp2, angcp1 >= angcp2);
    this.lineTo(x2, y2);
  }

  circle(x, y, radius, anticlockwise = true) {
    if (!this.subpathIsEmptyOrClosed) this.closePath();
    this.arc(x, y, radius, 0, 2 * Math.PI, anticlockwise);
    this.closePath();
  }

  rect(x, y, w, h, anticlockwise = true) {
    if (anticlockwise) {
      this.subpath.push("M", this.ctm.transfer(new _TransferMatrix2D__WEBPACK_IMPORTED_MODULE_5__["Point2D"](x, y)), "L", this.ctm.transfer(new _TransferMatrix2D__WEBPACK_IMPORTED_MODULE_5__["Point2D"](x, y + h)), this.ctm.transfer(new _TransferMatrix2D__WEBPACK_IMPORTED_MODULE_5__["Point2D"](x + w, y + h)), this.ctm.transfer(new _TransferMatrix2D__WEBPACK_IMPORTED_MODULE_5__["Point2D"](x + w, y)), "Z");
    } else {
      this.subpath.push("M", this.ctm.transfer(new _TransferMatrix2D__WEBPACK_IMPORTED_MODULE_5__["Point2D"](x, y)), "L", this.ctm.transfer(new _TransferMatrix2D__WEBPACK_IMPORTED_MODULE_5__["Point2D"](x + w, y)), this.ctm.transfer(new _TransferMatrix2D__WEBPACK_IMPORTED_MODULE_5__["Point2D"](x + w, y + h)), this.ctm.transfer(new _TransferMatrix2D__WEBPACK_IMPORTED_MODULE_5__["Point2D"](x, y + h)), "Z");
    }

    this.currentPoint = null;
    this.currentPointOnCtm = null;
  }

  roundRect(x, y, w, h, radius, anticlockwise = true) {
    if (anticlockwise) {
      this.moveTo(x, y + h / 2);
      this.arcTo(x, y + h, x + w / 2, y + h, radius);
      this.arcTo(x + w, y + h, x + w, y + h / 2, radius);
      this.arcTo(x + w, y, x + w / 2, y, radius);
      this.arcTo(x, y, x, y + h / 2, radius);
    } else {
      this.moveTo(x + w / 2, y);
      this.arcTo(x + w, y, x + w, y + h / 2, radius);
      this.arcTo(x + w, y + h, x + w / 2, y + h, radius);
      this.arcTo(x, y + h, x, y + h / 2, radius);
      this.arcTo(x, y, x + w / 2, y, radius);
    }

    this.closePath();
  }

  getInheritedStyle(style) {
    let found;
    const styleStr = style.toString();
    let alpha = this.globalAlpha;
    let color; // tslint:disable-next-line:no-conditional-assignment

    if (color = _WebColor__WEBPACK_IMPORTED_MODULE_4__["WebColor"].isRgb(styleStr)) {
      const rgba = color;
      alpha *= rgba.a;
      style = `rgb(${rgba.r},${rgba.g},${rgba.b})`;
    } // tslint:disable-next-line:no-conditional-assignment
    else if (color = _WebColor__WEBPACK_IMPORTED_MODULE_4__["WebColor"].isHsl(styleStr)) {
        const hsla = color;
        alpha *= hsla.a;
        style = `hsl(${hsla.h},${hsla.s * 100}%,${hsla.l * 100}%)`;
      } else if (!this.ctm.isIdentity()) {
        // tslint:disable-next-line:no-conditional-assignment
        if (found = styleStr.match(/^url\(\#lgrad-(.+)\)$/)) {
          this.assets.push(`<linearGradient id="lgrad-${++this.idCount}" xlink:href="#lgrad-${found[1]}" ` + `gradientTransform="matrix(${this.ctm.toString()})" />`);
          style = `url(#lgrad-${this.idCount})`;
        } // tslint:disable-next-line:no-conditional-assignment
        else if (found = styleStr.match(/^url\(\#rgrad-(.+)\)$/)) {
            this.assets.push(`<radialGradient id="rgrad-${++this.idCount}" xlink:href="#rgrad-${found[1]}" ` + `gradientTransform="matrix(${this.ctm.toString()})" />`);
            style = `url(#rgrad-${this.idCount})`;
          } // tslint:disable-next-line:no-conditional-assignment
          else if (found = styleStr.match(/^url\(\#pat-(.+)\)$/)) {
              this.assets.push(`<pattern id="pat-${++this.idCount}" xlink:href="#pat-${found[1]}" ` + `patternTransform="matrix(${this.ctm.toString()})" />`);
              style = `url(#pat-${this.idCount})`;
            }
      }

    return {
      style,
      alpha
    };
  }

  getStrokeAttrs() {
    const styleAndAlpha = this.getInheritedStyle(this.strokeStyle);
    return `stroke="${styleAndAlpha.style}" stroke-width="${this.lineWidth}" ` + `stroke-linecap="${this.lineCap}" stroke-linejoin="${this.lineJoin}" stroke-miterlimit="${this.miterLimit}" ` + (this.getLineDash().length > 0 ? `stroke-dasharray="${this.getLineDash().join(",")}" stroke-dashoffset="${this.lineDashOffset}" ` : "") + `stroke-opacity="${styleAndAlpha.alpha}" `;
  }

  getFillAttrs(fillRule) {
    const styleAndAlpha = this.getInheritedStyle(this.fillStyle);
    return `fill="${styleAndAlpha.style}" fill-rule="${fillRule}" fill-opacity="${styleAndAlpha.alpha}" `;
  }

  getFilterAttrs() {
    if (this.filterIdUrl === "") {// do nothing.
    } else if (this.filterIdUrl === null) {
      if (0 < this.shadowBlur || this.globalCompositeOperation && this.globalCompositeOperation !== "source-over") {
        let content = "";
        let merge = "";

        if (0 < this.shadowBlur) {
          content += `<feGaussianBlur stdDeviation="${this.shadowBlur}" result="blur" />\n` + `<feOffset in="blur" dx="${this.shadowOffsetX}" dy="${this.shadowOffsetY}" result="offsetBlur" />\n`;

          if (this.shadowColor === null) {
            merge += `<feMergeNode in="offsetBlur" />`;
          } else {
            const c = new _WebColor__WEBPACK_IMPORTED_MODULE_4__["WebColor"](this.shadowColor);
            content += `<feColorMatrix in="offsetBlur" type="matrix" values="` + ` 1 1 1 0 0 ` + ` 1 1 1 0 0 ` + ` 1 1 1 0 0 ` + ` 0 0 0 1 0 " result="color1" />\n` + `<feColorMatrix in="color1" type="matrix" values="` + ` ${c.r / 255} 0 0 0 0 ` + ` 0 ${c.g / 255} 0 0 0 ` + ` 0 0 ${c.b / 255} 0 0 ` + ` 0 0 0 ${c.a} 0 " result="color2" />\n`;
            merge += `<feMergeNode in="color2" />\n`;
          }
        }

        if (this.globalCompositeOperation && this.globalCompositeOperation !== "source-over") {
          let op = this.globalCompositeOperation;
          let reverse = false;

          switch (op) {
            case "destination-in":
              reverse = true;

            case "source-in":
              op = "in";
              break;

            case "destination-out":
              reverse = true;

            case "source-out":
              op = "out";
              break;

            case "destination-atop":
              reverse = true;

            case "source-atop":
              op = "atop";
              break;

            case "xor":
              op = "xor";
              break;

            case "destination-over":
              reverse = true;

            default:
              // lighter|copy|arithmetic
              op = "over";
              break;
          }

          content += `<feComposite in${reverse ? "2" : ""}="SourceGraphic" ` + `in${reverse ? "" : "2"}="BackgroundImage" operator="${op}" result="comp"/>\n`;
          merge += `<feMergeNode in="comp" />\n`;
        } else {
          merge += `<feMergeNode in="SourceGraphic" />\n`;
        }

        this.assets.push(`<filter id="filter-${++this.idCount}" filterUnits="userSpaceOnUse">\n` + `${content}<feMerge>\n${merge}</feMerge>\n</filter>`);
        this.filterIdUrl = `url(#filter-${this.idCount})`;
        return `filter="${this.filterIdUrl}" `;
      } else {
        this.filterIdUrl = "";
      }
    } else if (this.filterIdUrl !== "") {
      return `filter="${this.filterIdUrl}" `;
    }

    return "";
  }

  getMultilineTextHeight(c) {
    // NOTE: Inherited classes can adjust the value of `lineHeight` (adjust argument and call super).
    if (c.multiline && typeof this.font === 'string' && (c.lineHeight === void 0 || c.lineHeight === null)) {
      const re = new RegExp('^\\s*(?:normal|italic|oblique)?\s*' + '(?:normal|small-caps)?\\s*' + '(?:normal|bold|lighter|bolder|100|200|300|400|500|600|700|800|900)??\\s*' + '(?:([0-9.]+)(px|pt|mm|cm|in|pc)?)(?:\\/(?:([0-9.]+|normal)(px|pt|mm|cm|in|em|%)?))?');
      const x = re.exec(this.font);

      if (x) {
        // px
        let fontSizePx = Number(x[1]);

        switch (x[2]) {
          case 'pt':
            // 1pt === 1/72in === (1/72)*96px
            fontSizePx = fontSizePx / 72.0 * 96.0;
            break;

          case 'pc':
            fontSizePx = fontSizePx / 72.0 * 96.0 / 12.0;
            break;

          case 'mm':
            // 1mm === 1/25.4in === (1/25.4)*96px
            fontSizePx = fontSizePx / 25.4 * 96.0;
            break;

          case 'cm':
            fontSizePx = fontSizePx / 25.4 * 96.0 * 100.0;
            break;

          case 'in':
            // 1in === 96px
            fontSizePx = fontSizePx * 96.0;
            break;
        }

        let lineHeight = fontSizePx;

        if (x[3]) {
          lineHeight = Number(x[3]) || 1.3;

          switch (x[4]) {
            case 'px':
              break;

            case 'pt':
              // 1pt === 1/72in === (1/72)*96px
              lineHeight = lineHeight / 72.0 * 96.0;
              break;

            case 'pc':
              lineHeight = lineHeight / 72.0 * 96.0 / 12.0;
              break;

            case 'mm':
              // 1mm === 1/25.4in === (1/25.4)*96px
              lineHeight = lineHeight / 25.4 * 96.0;
              break;

            case 'cm':
              lineHeight = lineHeight / 25.4 * 96.0 * 100.0;
              break;

            case 'in':
              // 1in === 96px
              lineHeight = lineHeight * 96.0;
              break;

            case '%':
              lineHeight = lineHeight / 100 * fontSizePx;
              break;

            default:
              lineHeight = lineHeight * fontSizePx;
              break;
          }
        }

        c.lineHeight = lineHeight;
      }
    }

    return c;
  }
  /**
   * @returns CSS font properties styles for Text tag.
   */


  getTextFontStyles() {
    // NOTE: issue #1: CairoSVG, Inkscape, and some libraries can't understand `font` shorthand style property.
    //                 (Inkscape (v0.92.4) may understand partly)
    //       Inherited classes can split `font` property to `font-family`, `font-weight`, `font-size`, ...
    return `font:${red_agate_util_modules_convert_Escape__WEBPACK_IMPORTED_MODULE_2__["Escape"].xml(this.font)};`;
  }

  getTextAttributes(maxWidthOrExtraAttrs) {
    // NOTE: Firefox and Inkscape will render text justified if `textLength` is set.
    //       Chromium and Safari don't justify in this case.
    //       This is due to the  difference of `SVG: <text textLength>` and `Canvas: fillText(,,,maxWidth)`.
    //       Inherited classes can adjust the value of `textLength` (adjust argument and call super).
    let textAlign;

    switch (this.textAlign) {
      case "left":
        textAlign = "start";
        break;

      case "right":
        textAlign = "end";
        break;

      case "center":
        textAlign = "middle";
        break;

      default:
        textAlign = this.textAlign;
        break;
    }

    let textBaseline;

    switch (this.textBaseline) {
      case "top":
        textBaseline = "text-before-edge";
        break;

      case "bottom":
        textBaseline = "text-after-edge";
        break;

      default:
        textBaseline = this.textBaseline;
        break;
    }

    let a = ` style="${this.getTextFontStyles()}" text-anchor="${textAlign}" dominant-baseline="${textBaseline}"`;

    if (maxWidthOrExtraAttrs === void 0 || maxWidthOrExtraAttrs === null) {
      return a;
    } else if (typeof maxWidthOrExtraAttrs === "number") {
      a += ` textLength="${maxWidthOrExtraAttrs}"`;
      return a;
    }

    const c = this.getMultilineTextHeight(maxWidthOrExtraAttrs);
    if (c.textLength !== void 0 && c.textLength !== null) a += ` textLength="${c.textLength}"`;
    if (c.lengthAdjust !== void 0 && c.lengthAdjust !== null) a += ` lengthAdjust="${c.lengthAdjust}"`;
    if (c.rotate !== void 0 && c.rotate !== null) a += ` rotate="${c.rotate}"`;
    if (c.writingMode !== void 0 && c.writingMode !== null) a += ` writing-mode="${c.writingMode}"`;
    if (c.glyphOrientationVertical !== void 0 && c.glyphOrientationVertical !== null) a += ` glyph-orientation-vertical="${c.glyphOrientationVertical}"`;
    if (c.glyphOrientationHorizontal !== void 0 && c.glyphOrientationHorizontal !== null) a += ` glyph-orientation-horizontal="${c.glyphOrientationHorizontal}"`;
    if (c.direction !== void 0 && c.direction !== null) a += ` direction="${c.direction}"`;
    if (c.unicodeBidi !== void 0 && c.unicodeBidi !== null) a += ` unicode-bidi="${c.unicodeBidi}"`;
    if (c.textDecoration !== void 0 && c.textDecoration !== null) a += ` text-decoration="${c.textDecoration}"`;
    if (c.kerning !== void 0 && c.kerning !== null) a += ` kerning="${c.kerning}"`;
    if (c.letterSpacing !== void 0 && c.letterSpacing !== null) a += ` letter-spacing="${c.letterSpacing}"`;
    if (c.wordSpacing !== void 0 && c.wordSpacing !== null) a += ` word-spacing="${c.wordSpacing}"`;
    return a;
  }

  getTextPath(maxWidthOrExtraAttrs) {
    if (maxWidthOrExtraAttrs !== void 0 && maxWidthOrExtraAttrs !== null && typeof maxWidthOrExtraAttrs === "object") {
      if (maxWidthOrExtraAttrs.textPath) {
        const inv = this.ctm.getInverse();
        const subpath = [];

        for (const v of this.subpath) {
          if (v instanceof _TransferMatrix2D__WEBPACK_IMPORTED_MODULE_5__["Point2D"]) {
            subpath.push(inv.transfer(v));
          } else {
            subpath.push(v);
          }
        }

        const id = `path-${++this.idCount}`;
        this.assets.push(`<path id="${id}" d="${red_agate_util_modules_convert_WordWrap__WEBPACK_IMPORTED_MODULE_3__["WordWrap"].loose(subpath.join(" "))}" />\n`);
        this.subpath = [];
        this.currentPoint = null;
        this.currentPointOnCtm = null;
        const r = {
          id: `#${id}`
        };

        if (maxWidthOrExtraAttrs.textPathOffset !== void 0 && maxWidthOrExtraAttrs.textPathOffset !== null) {
          r.offset = maxWidthOrExtraAttrs.textPathOffset;
        }

        return r;
      }
    }

    return null;
  }

  convertToMultiline(text, x, y, maxWidthOrExtraAttrs) {
    if (maxWidthOrExtraAttrs !== void 0 && maxWidthOrExtraAttrs !== null && typeof maxWidthOrExtraAttrs === "object") {
      if (maxWidthOrExtraAttrs.multiline && !maxWidthOrExtraAttrs.textPath) {
        const h = maxWidthOrExtraAttrs.lineHeight || 12;
        const s = text.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
        const a = red_agate_util_modules_convert_Escape__WEBPACK_IMPORTED_MODULE_2__["Escape"].xml(s).split("\n");

        switch (maxWidthOrExtraAttrs.writingMode) {
          case "tb":
          case "tb-rl":
            return `<tspan>${a.join(`</tspan><tspan dx="${-h}" y="${y}">`)}</tspan>`;

          default:
            return `<tspan>${a.join(`</tspan><tspan x="${x}" dy="${h}">`)}</tspan>`;
        }
      }
    }

    return `<tspan x="${x}" y="${y}">${red_agate_util_modules_convert_Escape__WEBPACK_IMPORTED_MODULE_2__["Escape"].xml(text)}</tspan>`;
  }

  stroke() {
    this.content += `<g ${this.getStrokeAttrs()}fill="none"${this.getFilterAttrs()}` + (this.clipPath.length > 0 ? ` clip-path="${this.clipPath}" ` : "") + `>\n<path d="${red_agate_util_modules_convert_WordWrap__WEBPACK_IMPORTED_MODULE_3__["WordWrap"].loose(this.subpath.join(" "))}" />\n</g>\n`;
  }

  strokeRect(x, y, w, h) {
    this.content += `<g ${this.getStrokeAttrs()}fill="none"${this.getFilterAttrs()}` + (this.clipPath.length > 0 ? ` clip-path="${this.clipPath}" ` : "") + `>\n<rect x="${x}" y="${y}" width="${w}" height="${h}" ` + `transform="matrix(${this.ctm.toString()})" ` + "/></g>\n";
  }

  strokeText(text, x, y, maxWidthOrExtraAttrs) {
    const path = this.getTextPath(maxWidthOrExtraAttrs);
    this.content += `<g ${this.getStrokeAttrs()}fill="none"${this.getFilterAttrs()}` + (this.clipPath.length > 0 ? ` clip-path="${this.clipPath}" ` : "") + `>\n<text` + `${this.getTextAttributes(maxWidthOrExtraAttrs)} transform="matrix(${this.ctm.toString()})" ` + `\n>${path !== null ? `<textPath xlink:href="${path.id}"${path.offset !== void 0 ? ` startOffset="${path.offset}"` : ""}\n>` : ""}` + this.convertToMultiline(text, x, y, maxWidthOrExtraAttrs) + `${path !== null ? "</textPath>" : ""}</text></g>\n`;
  }
  /**
   * fillRule: nonzero|evenodd
   */


  fill(fillRule = "nonzero") {
    this.content += `<g stroke="none" ${this.getFillAttrs(fillRule)}${this.getFilterAttrs()}` + (this.clipPath.length > 0 ? ` clip-path="${this.clipPath}" ` : "") + `>\n<path d="${red_agate_util_modules_convert_WordWrap__WEBPACK_IMPORTED_MODULE_3__["WordWrap"].loose(this.subpath.join(" "))}" />\n</g>\n`;
  }

  fillRect(x, y, w, h) {
    this.content += `<g stroke="none" ${this.getFillAttrs("nonzero")}${this.getFilterAttrs()}` + (this.clipPath.length > 0 ? ` clip-path="${this.clipPath}" ` : "") + `>\n<rect x="${x}" y="${y}" width="${w}" height="${h}" ` + `transform="matrix(${this.ctm.toString()})" ` + "/></g>\n";
  }

  fillText(text, x, y, maxWidthOrExtraAttrs) {
    const path = this.getTextPath(maxWidthOrExtraAttrs);
    this.content += `<g stroke="none" ${this.getFillAttrs("nonzero")}${this.getFilterAttrs()}` + (this.clipPath.length > 0 ? ` clip-path="${this.clipPath}" ` : "") + `>\n<text` + `${this.getTextAttributes(maxWidthOrExtraAttrs)} transform="matrix(${this.ctm.toString()})" ` + `\n>${path !== null ? `<textPath xlink:href="${path.id}"${path.offset !== void 0 ? ` startOffset="${path.offset}"` : ""}\n>` : ""}` + this.convertToMultiline(text, x, y, maxWidthOrExtraAttrs) + `${path !== null ? "</textPath>" : ""}</text></g>\n`;
  }
  /**
   * fillRule: nonzero|evenodd
   */


  fillStroke(fillRule = "nonzero") {
    this.content += `<g ${this.getFillAttrs(fillRule)}${this.getStrokeAttrs()}${this.getFilterAttrs()}` + (this.clipPath.length > 0 ? ` clip-path="${this.clipPath}" ` : "") + `>\n<path d="${red_agate_util_modules_convert_WordWrap__WEBPACK_IMPORTED_MODULE_3__["WordWrap"].loose(this.subpath.join(" "))}" />\n</g>\n`;
  }

  fillStrokeRect(x, y, w, h) {
    this.content += `<g ${this.getFillAttrs("nonzero")}${this.getStrokeAttrs()}${this.getFilterAttrs()}` + (this.clipPath.length > 0 ? ` clip-path="${this.clipPath}" ` : "") + `>\n<rect x="${x}" y="${y}" width="${w}" height="${h}" ` + `transform="matrix(${this.ctm.toString()})" ` + "/></g>\n";
  }

  fillStrokeText(text, x, y, maxWidthOrExtraAttrs) {
    const path = this.getTextPath(maxWidthOrExtraAttrs);
    this.content += `<g ${this.getFillAttrs("nonzero")}${this.getStrokeAttrs()}${this.getFilterAttrs()}` + (this.clipPath.length > 0 ? ` clip-path="${this.clipPath}" ` : "") + `>\n<text` + `${this.getTextAttributes(maxWidthOrExtraAttrs)} transform="matrix(${this.ctm.toString()})" ` + `\n>${path !== null ? `<textPath xlink:href="${path.id}"${path.offset !== void 0 ? ` startOffset="${path.offset}"` : ""}\n>` : ""}` + this.convertToMultiline(text, x, y, maxWidthOrExtraAttrs) + `${path !== null ? "</textPath>" : ""}</text></g>\n`;
  }

  getLineDash() {
    return this.lineDash;
  }

  setLineDash(segments) {
    this.lineDash = segments;
  }
  /**
   * fillRule: nonzero|evenodd
   */


  clip(fillRule = "nonzero") {
    const a = `<clipPath id="clip-${++this.idCount}" fill-rule="${fillRule}" >` + `<path d="${red_agate_util_modules_convert_WordWrap__WEBPACK_IMPORTED_MODULE_3__["WordWrap"].loose(this.subpath.join(" "))}" /></clipPath>`;
    this.assets.push(a);
    this.clipPath = `url(#clip-${this.idCount})`;
  }

  registerImage(imageData, id) {
    const img = imageData = this.convertImageToSvgImageData(imageData);
    const imgId = id === null || id === void 0 ? `img-${++this.idCount}_w${img.width}_h${img.height}` : id;
    const a = `<image id="${imgId}" \n` + `x="${0}" y="${0}" width="${1}" height="${1}" ` + `preserveAspectRatio="none" ` + `xlink:href="${img.url}" />`;
    this.assets.push(a);
    return `#${imgId}`;
  }

  registerCustomFilter(id, markup) {
    this.assets.push(markup);
    this.filterIdUrl = `url(#${id})`;
  }

  registerCustomAsset(markup) {
    this.assets.push(markup);
  }

  appendCustomContent(markup) {
    this.content += `<g transform="matrix(${this.ctm.toString()})">${markup}</g>\n`;
  }

  createLinearGradient(x0, y0, x1, y1) {
    const a = new SvgCanvas2DLinerGradient(`lgrad-${++this.idCount}`, x0, y0, x1, y1);
    this.assets.push(a);
    return a;
  }
  /** fr is ignored. fr is always 0. */


  createRadialGradient(cx, cy, r, fx, fy, fr) {
    const a = new SvgCanvas2DRadialGradient(`rgrad-${++this.idCount}`, cx, cy, r, fx, fy);
    this.assets.push(a);
    return a;
  }

  createPattern(imageData, repetition) {
    const a = new SvgCanvas2DPattern(`pat-${++this.idCount}`, this.convertImageToSvgImageData(imageData));
    this.assets.push(a);
    return a;
  }

  beginPattern() {
    this.contentSaved = this.content;
    this.content = "";
    const s = new SvgCanvasGraphicState();
    this.graphicsStack.push(s);
  }

  endPattern(x, y, width, height) {
    const id = ++this.idCount;
    const a = `<pattern id="pat-${id}" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse" ` + `x="${x}" y="${y}" width="${width}" height="${height}">\n${this.content}</pattern>`;
    this.assets.push(a);
    this.content = this.contentSaved;
    this.contentSaved = "";
    this.restore();
    return `url(#pat-${id})`;
  }

  convertImageToSvgImageData(imageData) {
    let img;

    if (typeof HTMLImageElement !== "undefined" && imageData instanceof HTMLImageElement) {
      const c = document.createElement("canvas");
      c.width = imageData.width;
      c.height = imageData.height;
      const ctx = c.getContext("2d");

      if (ctx === null) {
        throw new Error("SvgCanvas#convertImageToSvgImageData: Can't get context from Canvas.");
      }

      ctx.drawImage(imageData, 0, 0);
      img = new SvgCanvasImageData(c.toDataURL(), 0, 0, c.width, c.height);
    } else if (typeof HTMLCanvasElement !== "undefined" && imageData instanceof HTMLCanvasElement) {
      img = new SvgCanvasImageData(imageData.toDataURL(), 0, 0, imageData.width, imageData.height);
    } else {
      img = imageData;
    }

    return img;
  }

  drawImage(imageData, canvasOffsetX, canvasOffsetY, canvasImageWidth, canvasImageHeight) {
    let img;
    if (typeof imageData === "string") img = new SvgCanvasImageData(imageData, 0, 0, canvasImageWidth, canvasImageHeight);else img = this.convertImageToSvgImageData(imageData);

    if (img.url.startsWith("#")) {
      const tm = this.ctm.translate(canvasOffsetX, canvasOffsetY).scale(canvasImageWidth, canvasImageHeight);
      this.content += `<g><use x="0" y="0" ` + `transform="matrix(${tm.toString()})" ` + `\nxlink:href="${img.url}" /></g>\n`;
    } else {
      this.content += `<g><image x="${canvasOffsetX}" y="${canvasOffsetY}" ` + `width="${canvasImageWidth}" height="${canvasImageHeight}" ` + `preserveAspectRatio="none" ` + `transform="matrix(${this.ctm.toString()})" ` + `\nxlink:href="${img.url}" /></g>\n`;
    }
  }

  beginGroup() {
    this.content += "<g>";
  }

  endGroup() {
    this.content += "</g>";
  }

  get fontHeightRatio() {
    return this._fontHeightRatio;
  }

  set fontHeightRatio(value) {
    this._fontHeightRatio = value;
  }

  measureText(text) {
    const re = this.font.match(/(\d+(?:.\d+)?)(px|pt|in|mm|em|rem|%)/);
    let scale = 1;
    let size = 12;

    if (re) {
      // 96px === 1in (not 72px === 1in)
      // 72pt === 1in
      //  1mm === 1/25.4in
      switch (re[2]) {
        case "pt":
          // pt -> px
          scale = 96 / 72;
          break;

        case "in":
          // in -> px
          scale = 96;
          break;

        case "mm":
          // mm -> px
          scale = 96 * (1 / 25.4);
          break;

        case "em":
        case "rem":
          scale = 12;
          break;

        case "%":
          scale = 1 / 100;
          break;
      }

      size = Number.parseFloat(re[1]);
    }

    return {
      width: Math.round(scale * size * Array.from(text.replace(/[\u200B-\u200D\uFEFF\u200E\u200F]/g, '').normalize('NFKC')).length / this.fontHeightRatio)
    };
  }

  clearRect(x, y, w, h) {
    this.save();
    this.fillStyle = 'white';
    this.fillRect(x, y, w, h);
    this.restore();
  }

}

/***/ }),

/***/ "../red-agate-svg-canvas/modules/drawing/canvas/TransferMatrix2D.js":
/*!**************************************************************************!*\
  !*** ../red-agate-svg-canvas/modules/drawing/canvas/TransferMatrix2D.js ***!
  \**************************************************************************/
/*! exports provided: Point2D, Vector2D, Rect2D, TransferMatrix2D */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Point2D", function() { return Point2D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vector2D", function() { return Vector2D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rect2D", function() { return Rect2D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferMatrix2D", function() { return TransferMatrix2D; });
/* harmony import */ var red_agate_util_modules_convert_NumberPrecision__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! red-agate-util/modules/convert/NumberPrecision */ "../red-agate-util/modules/convert/NumberPrecision.js");
// Copyright (c) 2017, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln

const dp = red_agate_util_modules_convert_NumberPrecision__WEBPACK_IMPORTED_MODULE_0__["NumberPrecision"].decimalPlaces(6);
class Point2D {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return `${this.x},${this.y}`;
  }

}
class Vector2D {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static fromPoints(p1, p2) {
    return new Vector2D(p2.x - p1.x, p2.y - p1.y);
  }

  isZero() {
    return this.x === 0 && this.y === 0;
  }

  getLength() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }
  /** returns 0..2*PI */


  getAngle() {
    let angle = Math.acos(this.x / Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))); // returns 0..PI

    if (0 > this.y) {
      // 180deg < angle < 360deg
      angle = Math.PI * 2 - angle;
    }

    return angle;
  }
  /** returns 0..PI */


  static getAngle(v1, v2) {
    const vlen1 = Math.sqrt(Math.pow(v1.x, 2) + Math.pow(v1.y, 2));
    const vlen2 = Math.sqrt(Math.pow(v2.x, 2) + Math.pow(v2.y, 2));
    return Math.acos((v1.x * v2.x + v1.y * v2.y) / (vlen1 * vlen2));
  }

  toString() {
    return `${this.x},${this.y}`;
  }

}
class Rect2D {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

}
class TransferMatrix2D {
  // tslint:disable-next-line:variable-name
  constructor(m11_or_src, m12, m21, m22, dx, dy) {
    // [m11 m21 dx]
    // [m12 m22 dy]
    // [  0   0  1]
    this.m11 = 1;
    this.m21 = 0;
    this.dx = 0;
    this.m12 = 0;
    this.m22 = 1;
    this.dy = 0;
    if (!m11_or_src) return;

    if (typeof m11_or_src === "object") {
      this.m11 = m11_or_src.m11 || this.m11;
      this.m12 = m11_or_src.m12 || this.m12;
      this.m21 = m11_or_src.m21 || this.m21;
      this.m22 = m11_or_src.m22 || this.m22;
      this.dx = m11_or_src.dx || this.dx;
      this.dy = m11_or_src.dy || this.dy;
    } else {
      this.m11 = m11_or_src || this.m11;
      this.m12 = m12 || this.m12;
      this.m21 = m21 || this.m21;
      this.m22 = m22 || this.m22;
      this.dx = dx || this.dx;
      this.dy = dy || this.dy;
    }
  }

  toString() {
    return `${this.m11} ${this.m12} ${this.m21} ${this.m22} ${this.dx} ${this.dy}`;
  }

  isIdentity() {
    return this.m11 === 1 && this.m21 === 0 && this.dx === 0 && this.m12 === 0 && this.m22 === 1 && this.dy === 0;
  }

  scale(x, y) {
    return this.concat(new TransferMatrix2D(x, 0, 0, y, 0, 0));
  }

  translate(x, y) {
    return this.concat(new TransferMatrix2D(1, 0, 0, 1, x, y));
  }

  rotate(angle) {
    return this.concat(new TransferMatrix2D(Math.cos(angle), Math.sin(angle), -Math.sin(angle), Math.cos(angle), 0, 0));
  }

  skewX(angle) {
    return this.concat(new TransferMatrix2D(1, 0, Math.tan(angle), 1, 0, 0));
  }

  skewY(angle) {
    return this.concat(new TransferMatrix2D(1, Math.tan(angle), 0, 1, 0, 0));
  }

  concat(mat) {
    // [m11' m21' dx']   [m11*n11 + m21*n12, m11*n21 + m21*n22, m11*tx + m21*ty + dx]   [m11 m21 dx]   [n11 n21 tx]
    // [m12' m22' dy'] = [m12*n11 + m22*n12, m12*n21 + m22*n22, m12*tx + m22*ty + dy] = [m12 m22 dy] * [n12 n22 ty]
    // [  0    0   1 ]   [                0,                 0,                    1]   [  0   0  1]   [  0   0  1]
    return new TransferMatrix2D(this.m11 * mat.m11 + this.m21 * mat.m12, // m11
    this.m12 * mat.m11 + this.m22 * mat.m12, // m12
    this.m11 * mat.m21 + this.m21 * mat.m22, // m21
    this.m12 * mat.m21 + this.m22 * mat.m22, // m22
    this.m11 * mat.dx + this.m21 * mat.dy + this.dx, // dx
    this.m12 * mat.dx + this.m22 * mat.dy + this.dy // dy
    );
  } // tslint:disable-next-line:variable-name


  transfer(x_or_p, y) {
    // [x']   [m11 m21 dx]   [x]
    // [y'] = [m12 m22 dy] * [y]
    // [1 ]   [  0   0  1]   [1]
    if (typeof x_or_p === "object") return new Point2D(dp(this.m11 * x_or_p.x + this.m21 * x_or_p.y + this.dx), dp(this.m12 * x_or_p.x + this.m22 * x_or_p.y + this.dy));else return [dp(this.m11 * x_or_p + this.m21 * y + this.dx), dp(this.m12 * x_or_p + this.m22 * y + this.dy)];
  } //        [m11, m21, dx]
  // A    = [m12, m22, dy]
  //        [  0,   0,  1]
  //
  //        [ m22,  -m21,  m21* dy- dx*m22]
  // A^-1 = [-m12,   m11,   dx*m12-m11* dy]
  //        [   0,     0,  m11*m22-m21*m12]


  getInverse() {
    return new TransferMatrix2D(this.m22, -this.m12, -this.m21, this.m11, this.m21 * this.dy - this.dx * this.m22, this.dx * this.m12 - this.m11 * this.dy);
  }

}

/***/ }),

/***/ "../red-agate-svg-canvas/modules/drawing/canvas/VectorCanvas2D.js":
/*!************************************************************************!*\
  !*** ../red-agate-svg-canvas/modules/drawing/canvas/VectorCanvas2D.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Copyright (c) 2017, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln

/***/ }),

/***/ "../red-agate-svg-canvas/modules/drawing/canvas/WebColor.js":
/*!******************************************************************!*\
  !*** ../red-agate-svg-canvas/modules/drawing/canvas/WebColor.js ***!
  \******************************************************************/
/*! exports provided: WebColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebColor", function() { return WebColor; });
// Copyright (c) 2017, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln
class WebColor {
  // tslint:disable-next-line:variable-name
  constructor(name_or_code) {
    /**
     * red
     */
    // tslint:disable-next-line:variable-name
    this._r = 0;
    /**
     * green
     */
    // tslint:disable-next-line:variable-name

    this._g = 0;
    /**
     * blue
     */
    // tslint:disable-next-line:variable-name

    this._b = 0;
    /**
     * alpha channel
     */
    // tslint:disable-next-line:variable-name

    this._a = 1;
    if (!name_or_code) return;
    let rgba = {
      r: 0,
      g: 0,
      b: 0,
      a: 1
    };

    if (typeof name_or_code === "object") {
      if (name_or_code.hasOwnProperty("r")) {
        const c2 = name_or_code;
        rgba = {
          r: WebColor.cutoff255(c2.r),
          g: WebColor.cutoff255(c2.g),
          b: WebColor.cutoff255(c2.b),
          a: WebColor.cutoff1(c2.a || 1)
        };
      } else if (name_or_code.hasOwnProperty("h")) {
        const hsla = name_or_code;
        rgba = WebColor.hslToRgb(hsla.h, hsla.s, hsla.l, hsla.a || 1);
      }
    } else if (typeof name_or_code === "string") {
      let c; // tslint:disable-next-line:no-conditional-assignment

      if (c = WebColor.isCode(name_or_code) || WebColor.isName(name_or_code) || WebColor.isRgb(name_or_code)) {
        const c2 = c;
        rgba = c2;
      } // tslint:disable-next-line:no-conditional-assignment
      else if (c = WebColor.isHsl(name_or_code)) {
          const hsla = c;
          rgba = WebColor.hslToRgb(hsla.h, hsla.s, hsla.l, hsla.a);
        }
    }

    this._r = rgba.r;
    this._g = rgba.g;
    this._b = rgba.b;
    this._a = rgba.a;
  }

  static cutoff255(x) {
    if (x < 0) return 0;
    if (x > 255) return 255;
    return x;
  }

  static cutoff1(x) {
    if (x < 0) return 0;
    if (x > 1) return 1;
    return x;
  }

  static isRgb(str) {
    let r,
        g,
        b,
        a = 1;
    let match; // tslint:disable-next-line:no-conditional-assignment

    if (match = str.match(/^\s*rgb(a?)\(\s*(-?(?:\d+\.)?\d+%?)\s*,\s*(-?(?:\d+\.)?\d+%?)\s*,\s*(-?(?:\d+\.)?\d+%?)\s*(?:,\s*((?:[01]?\.)?\d+)\s*)?\)\s*$/)) {
      r = WebColor.cutoff255(match[2].endsWith("%") ? Math.round(Number.parseFloat(match[2]) / 100 * 255) : Number.parseInt(match[2], 10));
      g = WebColor.cutoff255(match[3].endsWith("%") ? Math.round(Number.parseFloat(match[3]) / 100 * 255) : Number.parseInt(match[3], 10));
      b = WebColor.cutoff255(match[4].endsWith("%") ? Math.round(Number.parseFloat(match[4]) / 100 * 255) : Number.parseInt(match[4], 10));

      if (match[1] === "a") {
        a = WebColor.cutoff1(Number.parseFloat(match[5]));
      }

      return {
        r,
        g,
        b,
        a
      };
    }

    return false;
  }

  static isHsl(str) {
    let h,
        s,
        l,
        a = 1;
    let match; // tslint:disable-next-line:no-conditional-assignment

    if (match = str.match(/^\s*hsl(a?)\(\s*(-?(?:\d+\.)?\d+)\s*,\s*(-?(?:\d+\.)?\d+%?)\s*,\s*(-?(?:\d+\.)?\d+%?)\s*,\s*((?:[01]?\.)?\d+)\s*\)\s*$/)) {
      h = Number.parseFloat(match[2]) % 360;
      if (h < 0) h = 360 - h;
      s = WebColor.cutoff1(match[3].endsWith("%") ? Math.round(Number.parseFloat(match[3]) / 100) : Number.parseFloat(match[3]));
      l = WebColor.cutoff1(match[4].endsWith("%") ? Math.round(Number.parseFloat(match[4]) / 100) : Number.parseFloat(match[4]));

      if (match[1] === "a") {
        a = WebColor.cutoff1(Number.parseFloat(match[5]));
      }

      return {
        h,
        s,
        l,
        a
      };
    }

    return false;
  }

  static isCode(str) {
    let r, g, b;
    const a = 1;
    let match; // tslint:disable-next-line:no-conditional-assignment

    if (match = str.match(/^\s*#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])\s*$/)) {
      r = Number.parseInt(`${match[1]}${match[1]}`, 16);
      g = Number.parseInt(`${match[2]}${match[2]}`, 16);
      b = Number.parseInt(`${match[3]}${match[3]}`, 16);
      return {
        r,
        g,
        b,
        a
      };
    } // tslint:disable-next-line:no-conditional-assignment
    else if (match = str.match(/^\s*#([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})\s*$/)) {
        r = Number.parseInt(match[1], 16);
        g = Number.parseInt(match[2], 16);
        b = Number.parseInt(match[3], 16);
        return {
          r,
          g,
          b,
          a
        };
      }

    return false;
  }

  static isName(str) {
    if (WebColor.colorNames.has(str)) {
      const c = WebColor.colorNames.get(str);
      return {
        r: c.r,
        g: c.g,
        b: c.b,
        a: 1
      };
    }

    return false;
  }

  static fromRgba(r, g, b, a = 1) {
    const c = new WebColor();
    c._r = WebColor.cutoff255(r);
    c._g = WebColor.cutoff255(g);
    c._b = WebColor.cutoff255(b);
    c._a = WebColor.cutoff1(a);
    return c;
  }

  static hueToRgb(m1, m2, h) {
    if (h < 0) h += 1;
    if (h > 1) h -= 1;
    if (h * 6 < 1) return m1 + (m2 - m1) * h * 6;
    if (h * 2 < 1) return m2;
    if (h * 3 < 2) return m1 + (m2 - m1) * (2 / 3 - h) * 6;
    return m1;
  }

  static hslToRgb(h, s, l, a = 1) {
    // tslint:disable-next-line:ban-comma-operator
    h = h % 360, s = WebColor.cutoff1(s), l = WebColor.cutoff1(l);
    if (h < 0) h = 360 - h;
    const m2 = l <= 0.5 ? l * (s + 1) : l + s - l * s,
          m1 = l * 2 - m2;
    return {
      r: WebColor.hueToRgb(m1, m2, h + 1 / 3),
      g: WebColor.hueToRgb(m1, m2, h),
      b: WebColor.hueToRgb(m1, m2, h - 1 / 3),
      a: WebColor.cutoff1(a)
    };
  }

  static fromHsla(h, s, l, a = 1) {
    // tslint:disable-next-line:ban-comma-operator
    h = h % 360, s = WebColor.cutoff1(s), l = WebColor.cutoff1(l);
    if (h < 0) h = 360 - h;
    const c = new WebColor();
    const m2 = l <= 0.5 ? l * (s + 1) : l + s - l * s,
          m1 = l * 2 - m2;
    c._r = WebColor.hueToRgb(m1, m2, h + 1 / 3);
    c._g = WebColor.hueToRgb(m1, m2, h);
    c._b = WebColor.hueToRgb(m1, m2, h - 1 / 3);
    c._a = WebColor.cutoff1(a);
    return c;
  }

  static fromGray(gray, a = 1) {
    const c = new WebColor();
    c._r = WebColor.cutoff255(gray);
    c._g = WebColor.cutoff255(gray);
    c._b = WebColor.cutoff255(gray);
    c._a = WebColor.cutoff1(a);
    return c;
  }

  get r() {
    return this._r;
  }

  get g() {
    return this._g;
  }

  get b() {
    return this._b;
  }

  get a() {
    return this._a;
  }

  toString() {
    if (this._a !== 1) return this.toRgbaString();else return this.toCode();
  }

  toCode() {
    return "#" + `0${this._r.toString(16)}`.slice(-2) + `0${this._g.toString(16)}`.slice(-2) + `0${this._b.toString(16)}`.slice(-2);
  }

  toRgbString() {
    return `rgb(${this._r},${this._g},${this._b})`;
  }

  toRgbaString() {
    return `rgb(${this._r},${this._g},${this._b},${this._a})`;
  }

  toHsla() {
    const r = this._r / 255,
          g = this._g / 255,
          b = this._b / 255;
    const max = Math.max(g, b),
          min = Math.min(g, b);
    let h = 0,
        s = 0;
    const l = (max + min) / 2,
          c = max - min;

    if (max !== min) {
      if (max === r) h = (g - b) / c;else if (max === g) h = (b - r) / c + 2;else h = (r - g) / c + 4;
      h = h * 60 + (h < 0 ? 360 : 0);
      s = c / (l < 0.5 ? max + min : 2 - max - min);
    }

    return {
      h,
      s,
      l,
      a: this._a
    };
  }

  toHslString() {
    const c = this.toHsla();
    return `hsl(${c.h},${c.s}%,${c.l}%)`;
  }

  toHslaString() {
    const c = this.toHsla();
    return `hsl(${c.h},${c.s}%,${c.l}%,${this._a})`;
  }

}
WebColor.colorNames = new Map([["red", {
  r: 255,
  g: 0,
  b: 0
}], ["darkred", {
  r: 139,
  g: 0,
  b: 0
}], ["maroon", {
  r: 128,
  g: 0,
  b: 0
}], ["brown", {
  r: 165,
  g: 42,
  b: 42
}], ["firebrick", {
  r: 178,
  g: 34,
  b: 34
}], ["sienna", {
  r: 160,
  g: 82,
  b: 45
}], ["saddlebrown", {
  r: 139,
  g: 69,
  b: 19
}], ["peru", {
  r: 205,
  g: 133,
  b: 63
}], ["indianred", {
  r: 205,
  g: 92,
  b: 92
}], ["rosybrown", {
  r: 188,
  g: 143,
  b: 143
}], ["lightcoral", {
  r: 240,
  g: 128,
  b: 128
}], ["salmon", {
  r: 250,
  g: 128,
  b: 114
}], ["darksalmon", {
  r: 233,
  g: 150,
  b: 122
}], ["coral", {
  r: 255,
  g: 127,
  b: 80
}], ["tomato", {
  r: 255,
  g: 99,
  b: 71
}], ["sandybrown", {
  r: 244,
  g: 164,
  b: 96
}], ["lightsalmon", {
  r: 255,
  g: 160,
  b: 122
}], ["chocolate", {
  r: 210,
  g: 105,
  b: 30
}], ["orangered", {
  r: 255,
  g: 69,
  b: 0
}], ["orange", {
  r: 255,
  g: 165,
  b: 0
}], ["darkorange", {
  r: 255,
  g: 140,
  b: 0
}], ["tan", {
  r: 210,
  g: 180,
  b: 140
}], ["peachpuff", {
  r: 255,
  g: 218,
  b: 185
}], ["bisque", {
  r: 255,
  g: 228,
  b: 196
}], ["moccasin", {
  r: 255,
  g: 228,
  b: 181
}], ["navajowhite", {
  r: 255,
  g: 222,
  b: 173
}], ["wheat", {
  r: 245,
  g: 222,
  b: 179
}], ["burlywood", {
  r: 222,
  g: 184,
  b: 135
}], ["darkgoldenrod", {
  r: 184,
  g: 134,
  b: 11
}], ["goldenrod", {
  r: 218,
  g: 165,
  b: 32
}], ["gold", {
  r: 255,
  g: 215,
  b: 0
}], ["yellow", {
  r: 255,
  g: 255,
  b: 0
}], ["lightgoldenrodyellow", {
  r: 250,
  g: 250,
  b: 210
}], ["palegoldenrod", {
  r: 238,
  g: 232,
  b: 170
}], ["khaki", {
  r: 240,
  g: 230,
  b: 140
}], ["darkkhaki", {
  r: 189,
  g: 183,
  b: 107
}], ["blanchedalmond", {
  r: 255,
  g: 235,
  b: 205
}], ["lightyellow", {
  r: 255,
  g: 255,
  b: 224
}], ["cornsilk", {
  r: 255,
  g: 248,
  b: 220
}], ["antiquewhite", {
  r: 250,
  g: 235,
  b: 215
}], ["papayawhip", {
  r: 255,
  g: 239,
  b: 213
}], ["papayawhite", {
  r: 255,
  g: 239,
  b: 213
}], ["lemonchiffon", {
  r: 255,
  g: 250,
  b: 205
}], ["beige", {
  r: 245,
  g: 245,
  b: 220
}], ["oldlace", {
  r: 253,
  g: 245,
  b: 230
}], ["lightcyan", {
  r: 224,
  g: 255,
  b: 255
}], ["aliceblue", {
  r: 240,
  g: 248,
  b: 255
}], ["whitesmoke", {
  r: 245,
  g: 245,
  b: 245
}], ["lavenderblush", {
  r: 255,
  g: 240,
  b: 245
}], ["floralwhite", {
  r: 255,
  g: 250,
  b: 240
}], ["mintcream", {
  r: 245,
  g: 255,
  b: 250
}], ["ghostwhite", {
  r: 248,
  g: 248,
  b: 255
}], ["honeydew", {
  r: 240,
  g: 255,
  b: 240
}], ["seashell", {
  r: 255,
  g: 245,
  b: 238
}], ["ivory", {
  r: 255,
  g: 255,
  b: 240
}], ["azure", {
  r: 240,
  g: 255,
  b: 255
}], ["snow", {
  r: 255,
  g: 250,
  b: 250
}], ["white", {
  r: 255,
  g: 255,
  b: 255
}], ["gainsboro", {
  r: 220,
  g: 220,
  b: 220
}], ["lightgrey", {
  r: 211,
  g: 211,
  b: 211
}], ["silver", {
  r: 192,
  g: 192,
  b: 192
}], ["darkgray", {
  r: 169,
  g: 169,
  b: 169
}], ["lightslategray", {
  r: 119,
  g: 136,
  b: 153
}], ["slategray", {
  r: 112,
  g: 128,
  b: 144
}], ["gray", {
  r: 128,
  g: 128,
  b: 128
}], ["dimgray", {
  r: 105,
  g: 105,
  b: 105
}], ["darkslategray", {
  r: 47,
  g: 79,
  b: 79
}], ["black", {
  r: 0,
  g: 0,
  b: 0
}], ["lawngreen", {
  r: 124,
  g: 252,
  b: 0
}], ["greenyellow", {
  r: 173,
  g: 255,
  b: 47
}], ["chartreuse", {
  r: 127,
  g: 255,
  b: 0
}], ["lime", {
  r: 0,
  g: 255,
  b: 0
}], ["limegreen", {
  r: 50,
  g: 205,
  b: 50
}], ["yellowgreen", {
  r: 154,
  g: 205,
  b: 50
}], ["olive", {
  r: 128,
  g: 128,
  b: 0
}], ["olivedrab", {
  r: 107,
  g: 142,
  b: 35
}], ["darkolivegreen", {
  r: 85,
  g: 107,
  b: 47
}], ["forestgreen", {
  r: 34,
  g: 139,
  b: 34
}], ["darkgreen", {
  r: 0,
  g: 100,
  b: 0
}], ["green", {
  r: 0,
  g: 128,
  b: 0
}], ["seagreen", {
  r: 46,
  g: 139,
  b: 87
}], ["mediumseagreen", {
  r: 60,
  g: 179,
  b: 113
}], ["darkseagreen", {
  r: 143,
  g: 188,
  b: 143
}], ["lightgreen", {
  r: 144,
  g: 238,
  b: 144
}], ["palegreen", {
  r: 152,
  g: 251,
  b: 152
}], ["springgreen", {
  r: 0,
  g: 255,
  b: 127
}], ["mediumspringgreen", {
  r: 0,
  g: 250,
  b: 154
}], ["teal", {
  r: 0,
  g: 128,
  b: 128
}], ["darkcyan", {
  r: 0,
  g: 139,
  b: 139
}], ["lightseagreen", {
  r: 51,
  g: 153,
  b: 153
}], ["mediumaquamarine", {
  r: 102,
  g: 205,
  b: 170
}], ["cadetblue", {
  r: 95,
  g: 158,
  b: 160
}], ["steelblue", {
  r: 70,
  g: 130,
  b: 180
}], ["aquamarine", {
  r: 127,
  g: 255,
  b: 212
}], ["powderblue", {
  r: 176,
  g: 224,
  b: 230
}], ["paleturquoise", {
  r: 175,
  g: 238,
  b: 238
}], ["lightblue", {
  r: 173,
  g: 216,
  b: 230
}], ["lightsteelblue", {
  r: 176,
  g: 196,
  b: 222
}], ["skyblue", {
  r: 135,
  g: 206,
  b: 235
}], ["lightskyblue", {
  r: 135,
  g: 206,
  b: 250
}], ["mediumturquoise", {
  r: 72,
  g: 209,
  b: 204
}], ["turquoise", {
  r: 64,
  g: 224,
  b: 208
}], ["darkturquoise", {
  r: 0,
  g: 206,
  b: 209
}], ["aqua", {
  r: 0,
  g: 255,
  b: 255
}], ["cyan", {
  r: 0,
  g: 255,
  b: 255
}], ["deepskyblue", {
  r: 0,
  g: 191,
  b: 255
}], ["dodgerblue", {
  r: 30,
  g: 144,
  b: 255
}], ["cornflowerblue", {
  r: 100,
  g: 149,
  b: 237
}], ["royalblue", {
  r: 65,
  g: 105,
  b: 225
}], ["blue", {
  r: 0,
  g: 0,
  b: 255
}], ["mediumblue", {
  r: 0,
  g: 0,
  b: 205
}], ["navy", {
  r: 0,
  g: 0,
  b: 128
}], ["darkblue", {
  r: 0,
  g: 0,
  b: 139
}], ["midnightblue", {
  r: 25,
  g: 25,
  b: 112
}], ["darkslateblue", {
  r: 72,
  g: 61,
  b: 139
}], ["mediumslateblue", {
  r: 123,
  g: 104,
  b: 238
}], ["slateblue", {
  r: 106,
  g: 90,
  b: 205
}], ["darkorchid", {
  r: 153,
  g: 50,
  b: 204
}], ["darkviolet", {
  r: 148,
  g: 0,
  b: 211
}], ["blueviolet", {
  r: 138,
  g: 43,
  b: 226
}], ["mediumorchid", {
  r: 186,
  g: 85,
  b: 211
}], ["plum", {
  r: 221,
  g: 160,
  b: 221
}], ["lavender", {
  r: 230,
  g: 230,
  b: 250
}], ["thistle", {
  r: 216,
  g: 191,
  b: 216
}], ["orchid", {
  r: 218,
  g: 112,
  b: 214
}], ["magenta", {
  r: 255,
  g: 0,
  b: 255
}], ["fuchsia", {
  r: 255,
  g: 0,
  b: 255
}], ["violet", {
  r: 238,
  g: 130,
  b: 238
}], ["indigo", {
  r: 75,
  g: 0,
  b: 130
}], ["darkmagenta", {
  r: 139,
  g: 0,
  b: 139
}], ["purple", {
  r: 128,
  g: 0,
  b: 128
}], ["mediumpurple", {
  r: 147,
  g: 112,
  b: 219
}], ["mediumvioletred", {
  r: 199,
  g: 21,
  b: 133
}], ["deeppink", {
  r: 255,
  g: 20,
  b: 147
}], ["hotpink", {
  r: 255,
  g: 105,
  b: 180
}], ["crimson", {
  r: 220,
  g: 20,
  b: 60
}], ["palevioletred", {
  r: 219,
  g: 112,
  b: 147
}], ["lightpink", {
  r: 255,
  g: 182,
  b: 193
}], ["pink", {
  r: 255,
  g: 192,
  b: 203
}], ["mistyrose", {
  r: 255,
  g: 228,
  b: 225
}]]);

/***/ }),

/***/ "../red-agate-svg-canvas/modules/index.js":
/*!************************************************!*\
  !*** ../red-agate-svg-canvas/modules/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _drawing_canvas_SvgCanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drawing/canvas/SvgCanvas */ "../red-agate-svg-canvas/modules/drawing/canvas/SvgCanvas.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SvgCanvasImageData", function() { return _drawing_canvas_SvgCanvas__WEBPACK_IMPORTED_MODULE_0__["SvgCanvasImageData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SvgCanvas2DGradient", function() { return _drawing_canvas_SvgCanvas__WEBPACK_IMPORTED_MODULE_0__["SvgCanvas2DGradient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SvgCanvas2DLinerGradient", function() { return _drawing_canvas_SvgCanvas__WEBPACK_IMPORTED_MODULE_0__["SvgCanvas2DLinerGradient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SvgCanvas2DRadialGradient", function() { return _drawing_canvas_SvgCanvas__WEBPACK_IMPORTED_MODULE_0__["SvgCanvas2DRadialGradient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SvgCanvas2DPattern", function() { return _drawing_canvas_SvgCanvas__WEBPACK_IMPORTED_MODULE_0__["SvgCanvas2DPattern"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SvgCanvas", function() { return _drawing_canvas_SvgCanvas__WEBPACK_IMPORTED_MODULE_0__["SvgCanvas"]; });

/* harmony import */ var _drawing_canvas_TransferMatrix2D__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drawing/canvas/TransferMatrix2D */ "../red-agate-svg-canvas/modules/drawing/canvas/TransferMatrix2D.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Point2D", function() { return _drawing_canvas_TransferMatrix2D__WEBPACK_IMPORTED_MODULE_1__["Point2D"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Vector2D", function() { return _drawing_canvas_TransferMatrix2D__WEBPACK_IMPORTED_MODULE_1__["Vector2D"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Rect2D", function() { return _drawing_canvas_TransferMatrix2D__WEBPACK_IMPORTED_MODULE_1__["Rect2D"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransferMatrix2D", function() { return _drawing_canvas_TransferMatrix2D__WEBPACK_IMPORTED_MODULE_1__["TransferMatrix2D"]; });

/* harmony import */ var _drawing_canvas_VectorCanvas2D__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drawing/canvas/VectorCanvas2D */ "../red-agate-svg-canvas/modules/drawing/canvas/VectorCanvas2D.js");
/* harmony import */ var _drawing_canvas_VectorCanvas2D__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_drawing_canvas_VectorCanvas2D__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _drawing_canvas_VectorCanvas2D__WEBPACK_IMPORTED_MODULE_2__) if(["SvgCanvasImageData","SvgCanvas2DGradient","SvgCanvas2DLinerGradient","SvgCanvas2DRadialGradient","SvgCanvas2DPattern","SvgCanvas","Point2D","Vector2D","Rect2D","TransferMatrix2D","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _drawing_canvas_VectorCanvas2D__WEBPACK_IMPORTED_MODULE_2__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _drawing_canvas_WebColor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drawing/canvas/WebColor */ "../red-agate-svg-canvas/modules/drawing/canvas/WebColor.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebColor", function() { return _drawing_canvas_WebColor__WEBPACK_IMPORTED_MODULE_3__["WebColor"]; });

// Copyright (c) 2017, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln





/***/ }),

/***/ "../red-agate-util/modules/convert/Base64.js":
/*!***************************************************!*\
  !*** ../red-agate-util/modules/convert/Base64.js ***!
  \***************************************************/
/*! exports provided: Base64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Base64", function() { return Base64; });
// Copyright (c) 2017, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln

/**
 * Base64 encoder / decoder.
 */
class Base64 {
  /**
   * Base64 encoder.
   * @param message Plaintext message.
   * @param lineLength The maximum line length of the encoded message. If set, the encoded message is split with a newline character.
   * @return Base64 encoded message.
   */
  static encode(message, lineLength) {
    // A-Z: 0x00 -> 0x41
    // a-z: 0x1a -> 0x61
    // 0-9: 0x34 -> 0x30
    //   +: 0x3e -> 0x2b
    //   /: 0x3f -> 0x2f
    // 0-5/6-3/4-8
    let buf = [];
    const n = message.length;
    let v = 0,
        q = 0,
        r = 0;

    for (let i = 0, m = 0; i < n; i++) {
      m = i % 3;

      if (m === 0) {
        v = message[i];
        r = v << 4 & 0x30; // 2bit

        v = v >>> 2 & 0x3f; // 6bit
      } else if (m === 1) {
        v = message[i];
        q = v << 2 & 0x3c; // 4bit

        v = v >>> 4 & 0x0f | r; // 4bit

        r = q;
      } else {
        q = message[i];
        v = q >>> 6 & 0x03 | r; // 2bit

        if (v < 0x1a) v += 0x41;else if (v < 0x34) v += 0x47;else if (v < 0x3e) v -= 0x04;else if (v < 0x3f) v = 0x2b;else v = 0x2f;
        buf.push(v);
        v = q & 0x3f; // 6bit
      }

      if (v < 0x1a) v += 0x41;else if (v < 0x34) v += 0x47;else if (v < 0x3e) v -= 0x04;else if (v < 0x3f) v = 0x2b;else v = 0x2f;
      buf.push(v);
    }

    if (n % 3) {
      if (r < 0x1a) r += 0x41;else if (r < 0x34) r += 0x47;else if (r < 0x3e) r -= 0x04;else if (r < 0x3f) r = 0x2b;else r = 0x2f;
      buf.push(r);
    }

    while (buf.length % 4) {
      buf.push(0x3d);
    }

    if (lineLength && 0 < lineLength) {
      const s = [];

      for (let i = 0; i < buf.length; i += lineLength) {
        s.push(...buf.slice(i, i + lineLength), 0x0a);
      }

      buf = s;
    }

    let z = "";

    for (let i = 0; i < buf.length; i++) {
      // NOTE: spread operator (...buf) causes stack overflow.
      z += String.fromCharCode(buf[i]);
    }

    return z;
  }
  /**
   * Base64 decoder.
   * @param message Base64 encoded message.
   * @return Plaintext message.
   */


  static decode(message) {
    const buf = [];
    let i = 0,
        m = 0,
        s = 0;
    const n = message.length;
    let v = 0,
        r = 0;

    for (; i < n; i++) {
      m = (i + s) % 4;
      v = message.charCodeAt(i);
      if (0x41 <= v && v <= 0x5a) v -= 0x41;else if (0x61 <= v && v <= 0x7a) v -= 0x47;else if (0x30 <= v && v <= 0x39) v += 0x04;else if (v === 0x2b) v = 0x3e;else if (v === 0x2f) v = 0x3f;else if (v === 0x3d) {
        break;
      } else {
        s++;
        continue;
      }

      if (m === 0) {
        r = v << 2 & 0xfc; // 6bit
      } else if (m === 1) {
        buf.push(r | v >>> 4 & 0x03); // 2bit

        r = v << 4 & 0xf0; // 4bit
      } else if (m === 2) {
        buf.push(r | v >>> 2 & 0x0f); // 4bit

        r = v << 6 & 0xc0; // 2bit
      } else {
        buf.push(r | v & 0x3f); // 6bit
      }
    }

    return buf;
  }

}

/***/ }),

/***/ "../red-agate-util/modules/convert/Escape.js":
/*!***************************************************!*\
  !*** ../red-agate-util/modules/convert/Escape.js ***!
  \***************************************************/
/*! exports provided: Escape, Unescape */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Escape", function() { return Escape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Unescape", function() { return Unescape; });
// Copyright (c) 2017, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln

/**
 * Escape sequences encoder.
 */
class Escape {
  /**
   * Escape html special characters.
   * @param s Plaintext.
   * @return Html escaped text.
   */
  static html(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  /**
   * Escape xml special characters.
   * @param s Plaintext.
   * @return Xml escaped text.
   */


  static xml(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
  }

}
/**
 * Escape sequences decoder.
 */

class Unescape {
  /**
   * Unescape html character references.
   * @param s Html escaped text.
   * @return Plaintext.
   */
  static html(s) {
    return s.replace(/&#39;/g, "'").replace(/&#x(?:0{0,2})27;/ig, "'").replace(/&apos;/g, "'").replace(/&#34;/g, "\"").replace(/&#x(?:0{0,2})22;/ig, "\"").replace(/&quot;/g, "\"").replace(/&#62;/g, ">").replace(/&#x(?:0{0,2})3e;/ig, ">").replace(/&gt;/g, ">").replace(/&#60;/g, "<").replace(/&#x(?:0{0,2})3c;/ig, "<").replace(/&lt;/g, "<").replace(/&#38;/g, "&").replace(/&#x(?:0{0,2})26;/ig, "&").replace(/&amp;/g, "&");
  }
  /**
   * Unescape xml character references.
   * @param s Xml escaped text.
   * @return Plaintext.
   */


  static xml(s) {
    return Escape.html(s);
  }

}

/***/ }),

/***/ "../red-agate-util/modules/convert/NumberPrecision.js":
/*!************************************************************!*\
  !*** ../red-agate-util/modules/convert/NumberPrecision.js ***!
  \************************************************************/
/*! exports provided: NumberPrecision */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberPrecision", function() { return NumberPrecision; });
// Copyright (c) 2017, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln

/**
 * Number precision / significant figure
 */
class NumberPrecision {
  static decimalPlaces(n) {
    return v => {
      return Number(v.toFixed(n));
    };
  }

  static precision(n) {
    return v => {
      return Number(v.toPrecision(n));
    };
  }

}

/***/ }),

/***/ "../red-agate-util/modules/convert/QueryString.js":
/*!********************************************************!*\
  !*** ../red-agate-util/modules/convert/QueryString.js ***!
  \********************************************************/
/*! exports provided: QueryString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryString", function() { return QueryString; });
// Copyright (c) 2017, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln
class QueryString {
  static *entries(obj) {
    for (const key of Object.keys(obj)) {
      yield [key, obj[key]];
    }
  }

  static build(params) {
    let qs = "";
    let i = 0;

    for (const [key, value] of this.entries(params)) {
      qs += `${i++ ? "&" : ""}${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
    }

    return qs;
  }

  static decode(search) {
    const query = search.substr(1);
    const result = {};
    query.split("&").forEach(part => {
      const item = part.split("=");
      result[item[0]] = decodeURIComponent(item[1]);
    });
    return result;
  }

}

/***/ }),

/***/ "../red-agate-util/modules/convert/TextEncoding.js":
/*!*********************************************************!*\
  !*** ../red-agate-util/modules/convert/TextEncoding.js ***!
  \*********************************************************/
/*! exports provided: TextEncoding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextEncoding", function() { return TextEncoding; });
// src/convert/TextEncoding.ts#__encodeToUtf8Impl
//
// Original Author:
// http://qiita.com/ukyo/items/1626defd020b2157e6bf
// (c) 2012 ukyo (http://qiita.com/ukyo, https://ukyoweb.com)
class TextEncoding {
  static encodeToUtf8(str) {
    return TextEncoding.__encodeToUtf8(str);
  }

  static decodeUtf8(buf) {
    return TextEncoding.__decodeUtf8(buf);
  }

  static __encodeToUtf8Impl(str) {
    // Original Author:
    // http://qiita.com/ukyo/items/1626defd020b2157e6bf
    // (c) 2012 ukyo (http://qiita.com/ukyo, https://ukyoweb.com)
    // NOTE: We have modified from original source.
    const n = str.length;
    let idx = -1,
        byteLength = 512,
        bytes = new Uint8Array(byteLength),
        i,
        c;

    for (i = 0; i < n; ++i) {
      // surrogate pairs (U+D800..U+DFFF) should be decoded to U+010000..U+10FFFF
      // before convert to UTF-8.
      const cp = str.codePointAt(i);

      if (cp === void 0) {
        throw new Error("Can't convert string to UTF-8. string include unexpected sequence.");
      }

      c = cp;

      if (c <= 0x7F) {
        bytes[++idx] = c;
      } else if (c <= 0x7FF) {
        bytes[++idx] = 0xC0 | c >>> 6;
        bytes[++idx] = 0x80 | c & 0x3F;
      } else if (c <= 0xFFFF) {
        bytes[++idx] = 0xE0 | c >>> 12;
        bytes[++idx] = 0x80 | c >>> 6 & 0x3F;
        bytes[++idx] = 0x80 | c & 0x3F;
      } else if (c <= 0x10FFFF) {
        // UTF-8 4bytes range is (0x010000..0x1FFFFF) but Unicode codepoint uses <= U+10FFFF.
        bytes[++idx] = 0xF0 | c >>> 18;
        bytes[++idx] = 0x80 | c >>> 12 & 0x3F;
        bytes[++idx] = 0x80 | c >>> 6 & 0x3F;
        bytes[++idx] = 0x80 | c & 0x3F;
        if (0x010000 <= c) ++i;
      } else {
        throw new Error("Can't convert string to UTF-8. string include unexpected sequence.");
      }

      if (byteLength - idx <= 4) {
        // tslint:disable-next-line:variable-name
        const _bytes = bytes;
        byteLength *= 2;
        bytes = new Uint8Array(byteLength);
        bytes.set(_bytes);
      }
    }

    return bytes.subarray(0, ++idx);
  }

  static __decodeUtf8Impl(buf) {
    // Original Author:
    // http://www.onicos.com/staff/iz/amuse/javascript/expert/utf.txt
    // utf.js - UTF-8 <=> UTF-16 convertion
    // Copyright (C) 1999 Masanao Izumo <iz@onicos.co.jp>
    // Version: 1.0
    // LastModified: Dec 25 1999
    // This library is free.  You can redistribute it and/or modify it.
    // NOTE: We have modified from original source.
    let out = "",
        i = 0;
    const len = buf.length;
    let c, char2, char3, char4;

    while (i < len) {
      c = buf[i++];

      switch (c >>> 4) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
          // 0xxx xxxx    ( 7bit)
          out += String.fromCodePoint(c);
          break;

        case 12:
        case 13:
          // 110x xxxx,  10xx xxxx    (11bit)
          char2 = buf[i++];
          out += String.fromCodePoint((c & 0x1F) << 6 | char2 & 0x3F);
          break;

        case 14:
          // 1110 xxxx,  10xx xxxx,  10xx xxxx    (16bit)
          char2 = buf[i++];
          char3 = buf[i++];
          out += String.fromCodePoint((c & 0x0F) << 12 | (char2 & 0x3F) << 6 | (char3 & 0x3F) << 0);
          break;

        case 16:
          // 1111 0xxx,  10xx xxxx,  10xx xxxx,  10xx xxxx                            (21bit)
          // 1111 10xx,  10xx xxxx,  10xx xxxx,  10xx xxxx,  10xx xxxx                (26bit; invalid Unicode codepoint)
          // 1111 110x,  10xx xxxx,  10xx xxxx,  10xx xxxx,  10xx xxxx,  10xx xxxx    (31bit; invalid Unicode codepoint)
          if (c >>> 3 & 1) {
            throw new Error("Can't convert UTF-8 to string. UTF-8 include unexpected sequence.");
          }

          char2 = buf[i++];
          char3 = buf[i++];
          char4 = buf[i++];
          out += String.fromCodePoint((c & 0x07) << 18 | (char2 & 0x3F) << 12 | (char3 & 0x3F) << 6 | (char4 & 0x3F) << 0);
          break;
      }
    }

    return out;
  }

}
/** static constructor */
// tslint:disable-next-line:variable-name

TextEncoding.__ctor = (() => {
  TextEncoding.isNode = typeof Buffer !== "undefined";
  TextEncoding.isTextEncoder = typeof TextEncoder !== "undefined";

  if (TextEncoding.isNode) {
    TextEncoding.__encodeToUtf8 = str => Buffer.from(str, "utf8");

    TextEncoding.__decodeUtf8 = buf => Buffer.from(Array.isArray(buf) ? buf : Array.from(buf)).toString("utf8");
  } else if (TextEncoding.isTextEncoder) {
    TextEncoding.utf8Encoder = new TextEncoder("utf8");

    TextEncoding.__encodeToUtf8 = str => TextEncoding.utf8Encoder.encode(str);

    TextEncoding.utfDecoder = new TextDecoder("utf8");

    TextEncoding.__decodeUtf8 = buf => TextEncoding.utfDecoder.decode(buf);
  } else {
    TextEncoding.__encodeToUtf8 = TextEncoding.__encodeToUtf8Impl;
    TextEncoding.__decodeUtf8 = TextEncoding.__decodeUtf8Impl;
  }
})();

/***/ }),

/***/ "../red-agate-util/modules/convert/WordWrap.js":
/*!*****************************************************!*\
  !*** ../red-agate-util/modules/convert/WordWrap.js ***!
  \*****************************************************/
/*! exports provided: WordWrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordWrap", function() { return WordWrap; });
// Copyright (c) 2017, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln
class WordWrap {
  static loose(str, charsPerLine = 120) {
    let r = "";
    let i = 0;

    for (const c of str) {
      i++;

      if (i >= charsPerLine && " \f\t\v".indexOf(c) > -1) {
        r += "\n";
        i = 0;
      } else {
        r += c;
      }
    }

    return r;
  }

  static normal(str, charsPerLine = 120) {
    // TODO: not implemented.
    //       do normal word-wrap.
    return WordWrap.loose(str, charsPerLine);
  }

  static force(str, charsPerLine = 120) {
    // TODO: not implemented.
    //       do break-word word-wrap.
    return WordWrap.loose(str, charsPerLine);
  }

}

/***/ }),

/***/ "../red-agate-util/modules/imaging/Bitmap.js":
/*!***************************************************!*\
  !*** ../red-agate-util/modules/imaging/Bitmap.js ***!
  \***************************************************/
/*! exports provided: Bitmap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bitmap", function() { return Bitmap; });
/* harmony import */ var _io_BitStream__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../io/BitStream */ "../red-agate-util/modules/io/BitStream.js");
// Copyright (c) 2017, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln

class Bitmap {
  constructor(width, height, src) {
    this.w = width;
    this.h = height;
    this.widthAligned = Math.ceil(width / 8) * 8;
    this.buf = new _io_BitStream__WEBPACK_IMPORTED_MODULE_0__["BitStreamWriter"](this.widthAligned * height, src);
    this.buf.seek(0, _io_BitStream__WEBPACK_IMPORTED_MODULE_0__["StreamSeekOrigin"].End);
  }

  get width() {
    return this.w;
  }

  get height() {
    return this.h;
  }

  toBytes() {
    return this.buf.toBytes();
  }

  set(x, y, v) {
    this.buf.setBit(y * this.widthAligned + x, v);
  }

  get(x, y) {
    return this.buf.getBit(y * this.widthAligned + x);
  }

  clear(x, y, width, height) {
    x = Math.max(0, x);
    y = Math.max(0, y);
    width = Math.max(0, Math.min(width, Math.max(0, this.w - x)));
    height = Math.max(0, Math.min(height, Math.max(0, this.h - y)));

    for (let j = 0; j < height; j++) {
      const offset = (y + j) * this.widthAligned + x;

      for (let i = 0; i < width; i++) {
        this.buf.setBit(offset + i, 0);
      }
    }

    return this;
  }

  fill(x, y, width, height, v) {
    x = Math.max(0, x);
    y = Math.max(0, y);
    width = Math.max(0, Math.min(width, Math.max(0, this.w - x)));
    height = Math.max(0, Math.min(height, Math.max(0, this.h - y)));

    for (let j = 0; j < height; j++) {
      const offset = (y + j) * this.widthAligned + x;

      for (let i = 0; i < width; i++) {
        this.buf.setBit(offset + i, v);
      }
    }

    return this;
  }

  clearAll() {
    const length = this.buf.byteLength;

    for (let i = 0; i < length; i++) {
      this.buf.setByte(i, 0);
    }

    return this;
  }

}

/***/ }),

/***/ "../red-agate-util/modules/index.js":
/*!******************************************!*\
  !*** ../red-agate-util/modules/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _convert_Base64__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./convert/Base64 */ "../red-agate-util/modules/convert/Base64.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Base64", function() { return _convert_Base64__WEBPACK_IMPORTED_MODULE_0__["Base64"]; });

/* harmony import */ var _convert_Escape__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./convert/Escape */ "../red-agate-util/modules/convert/Escape.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Escape", function() { return _convert_Escape__WEBPACK_IMPORTED_MODULE_1__["Escape"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Unescape", function() { return _convert_Escape__WEBPACK_IMPORTED_MODULE_1__["Unescape"]; });

/* harmony import */ var _convert_QueryString__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./convert/QueryString */ "../red-agate-util/modules/convert/QueryString.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QueryString", function() { return _convert_QueryString__WEBPACK_IMPORTED_MODULE_2__["QueryString"]; });

/* harmony import */ var _convert_TextEncoding__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./convert/TextEncoding */ "../red-agate-util/modules/convert/TextEncoding.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextEncoding", function() { return _convert_TextEncoding__WEBPACK_IMPORTED_MODULE_3__["TextEncoding"]; });

/* harmony import */ var _convert_WordWrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./convert/WordWrap */ "../red-agate-util/modules/convert/WordWrap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WordWrap", function() { return _convert_WordWrap__WEBPACK_IMPORTED_MODULE_4__["WordWrap"]; });

/* harmony import */ var _imaging_Bitmap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./imaging/Bitmap */ "../red-agate-util/modules/imaging/Bitmap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Bitmap", function() { return _imaging_Bitmap__WEBPACK_IMPORTED_MODULE_5__["Bitmap"]; });

/* harmony import */ var _io_BitStream__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./io/BitStream */ "../red-agate-util/modules/io/BitStream.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StreamSeekOrigin", function() { return _io_BitStream__WEBPACK_IMPORTED_MODULE_6__["StreamSeekOrigin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BitStreamWriter", function() { return _io_BitStream__WEBPACK_IMPORTED_MODULE_6__["BitStreamWriter"]; });

/* harmony import */ var _io_FileFetcher__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./io/FileFetcher */ "../red-agate-util/modules/io/FileFetcher.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileFetcher", function() { return _io_FileFetcher__WEBPACK_IMPORTED_MODULE_7__["FileFetcher"]; });

/* harmony import */ var _io_FileSaver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./io/FileSaver */ "../red-agate-util/modules/io/FileSaver.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileSaver", function() { return _io_FileSaver__WEBPACK_IMPORTED_MODULE_8__["FileSaver"]; });

/* harmony import */ var _io_Html5FileFetcher__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./io/Html5FileFetcher */ "../red-agate-util/modules/io/Html5FileFetcher.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Html5FileFetcher", function() { return _io_Html5FileFetcher__WEBPACK_IMPORTED_MODULE_9__["Html5FileFetcher"]; });

/* harmony import */ var _io_Logger__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./io/Logger */ "../red-agate-util/modules/io/Logger.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoggerLogLevel", function() { return _io_Logger__WEBPACK_IMPORTED_MODULE_10__["LoggerLogLevel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return _io_Logger__WEBPACK_IMPORTED_MODULE_10__["Logger"]; });

/* harmony import */ var _io_Uri__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./io/Uri */ "../red-agate-util/modules/io/Uri.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Uri", function() { return _io_Uri__WEBPACK_IMPORTED_MODULE_11__["Uri"]; });

/* harmony import */ var _types_Integer53__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./types/Integer53 */ "../red-agate-util/modules/types/Integer53.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Integer53", function() { return _types_Integer53__WEBPACK_IMPORTED_MODULE_12__["Integer53"]; });

/* harmony import */ var _types_WritableArrayLike__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./types/WritableArrayLike */ "../red-agate-util/modules/types/WritableArrayLike.js");
/* harmony import */ var _types_WritableArrayLike__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_types_WritableArrayLike__WEBPACK_IMPORTED_MODULE_13__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _types_WritableArrayLike__WEBPACK_IMPORTED_MODULE_13__) if(["Base64","Escape","Unescape","QueryString","TextEncoding","WordWrap","Bitmap","StreamSeekOrigin","BitStreamWriter","FileFetcher","FileSaver","Html5FileFetcher","LoggerLogLevel","Logger","Uri","Integer53","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _types_WritableArrayLike__WEBPACK_IMPORTED_MODULE_13__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Copyright (c) 2017, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln















/***/ }),

/***/ "../red-agate-util/modules/io/BitStream.js":
/*!*************************************************!*\
  !*** ../red-agate-util/modules/io/BitStream.js ***!
  \*************************************************/
/*! exports provided: StreamSeekOrigin, BitStreamWriter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StreamSeekOrigin", function() { return StreamSeekOrigin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BitStreamWriter", function() { return BitStreamWriter; });
/* harmony import */ var _types_Integer53__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/Integer53 */ "../red-agate-util/modules/types/Integer53.js");
// Copyright (c) 2017, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln

var StreamSeekOrigin;

(function (StreamSeekOrigin) {
  StreamSeekOrigin[StreamSeekOrigin["Start"] = 0] = "Start";
  StreamSeekOrigin[StreamSeekOrigin["Current"] = 1] = "Current";
  StreamSeekOrigin[StreamSeekOrigin["End"] = 2] = "End";
})(StreamSeekOrigin || (StreamSeekOrigin = {}));
/** MSB first */


class BitStreamWriter {
  constructor(initialSizeBytes, data) {
    this.pos = 0;

    if (data) {
      this.data = data;
      this.pos = data.length * 8;
    } else {
      this.data = new Uint8Array(initialSizeBytes);
    }
  }

  static fromBytes(initialSizeBytes, bytes) {
    const s = new BitStreamWriter(initialSizeBytes);
    const n = s.byteLength;
    const d = s.data;

    if (n < bytes.length) {
      if (bytes instanceof Uint8Array) {
        s.data.set(bytes.subarray(0, n));
      } else {
        for (let i = 0; i < n; i++) {
          d[i] = bytes[i];
        }
      }
    } else {
      s.data.set(bytes);
    }

    s.pos = bytes.length * 8;
    return s;
  }

  writeBits8(v, bitLength) {
    if (0 < bitLength) {
      const p = Math.floor(this.pos / 8);
      const m = this.pos % 8;
      const w = v & 0x00ff >>> 8 - bitLength;
      const s = 8 - m - bitLength;
      this.data[p] &= 0x00ff << 8 - m;

      if (s >= 0) {
        this.data[p] |= w << s;
      } else {
        this.data[p] |= w >>> -s;
        this.data[p + 1] &= 0x00ff >>> -s;
        this.data[p + 1] |= w << 8 + s;
      }

      this.pos += bitLength;
    }

    return this;
  }

  writeBits(v, bitLength) {
    if (0 < bitLength) {
      let p = Math.floor(this.pos / 8);
      let m = this.pos % 8;
      let l = bitLength;
      const q = l % 8 || 8;
      const w = _types_Integer53__WEBPACK_IMPORTED_MODULE_0__["Integer53"].slice(v, l - q, l);
      const s = 8 - m - q;
      this.data[p] &= 0x00ff << 8 - m;

      if (s >= 0) {
        this.data[p] |= w << s;
        if (s === 0) p += 1;
      } else {
        this.data[p] |= w >>> -s;
        this.data[p + 1] &= 0x00ff >>> -s;
        this.data[p + 1] |= w << 8 + s;
        p += 1;
      }

      l -= q;
      m = (m + q) % 8;

      if (m === 0) {
        // tslint:disable-next-line:ban-comma-operator
        for (; 0 < l; l -= 8, p++) {
          this.data[p] = _types_Integer53__WEBPACK_IMPORTED_MODULE_0__["Integer53"].slice(v, l - 8, l);
        }
      } else {
        // tslint:disable-next-line:ban-comma-operator
        for (; 0 < l; l -= 8, p++) {
          const w2 = _types_Integer53__WEBPACK_IMPORTED_MODULE_0__["Integer53"].slice(v, l - 8, l);
          this.data[p] &= 0x00ff << 8 - m;
          this.data[p] |= w2 >>> m;
          this.data[p + 1] &= 0x00ff >>> m;
          this.data[p + 1] |= w2 << 8 - m;
        }
      }

      this.pos += bitLength;
    }

    return this;
  }

  writeBitsFromArray(bytes, bitOffset, bitLength) {
    if (0 < bitLength) {
      if (bitOffset % 8 === 0) {
        const o = bitOffset / 8;
        const n = Math.floor(bitLength / 8);
        const m = bitLength % 8;
        let i = 0;

        if (this.pos % 8 === 0) {
          const p = this.pos / 8;

          if (0 < n) {
            for (; i < n; i++) {
              this.data[p + i] = bytes[o + i];
            }
          }

          if (m) {
            this.data[p + i] &= 0x00ff >>> m;
            this.data[p + i] |= bytes[o + i] >>> 8 - m << 8 - m;
          }

          this.pos += bitLength;
        } else {
          if (0 < n) {
            for (; i < n; i++) {
              this.writeBits8(bytes[o + i], 8);
            }
          }

          this.writeBits8(bytes[o + i] >>> 8 - m, m);
        }
      } else {
        const s1 = Math.floor(bitOffset / 8);
        const e1 = Math.floor((bitOffset + bitLength) / 8);
        const s2 = bitOffset % 8;
        const e2 = (bitOffset + bitLength) % 8;

        if (s1 === e1) {
          this.writeBits8(bytes[e1] >>> 8 - e2, bitLength);
        } else {
          this.writeBits8(bytes[s1], 8 - s2);

          for (let i = s1 + 1; i < e1; i++) {
            this.writeBits8(bytes[i], 8);
          }

          this.writeBits8(bytes[e1] >>> 8 - e2, e2);
        }
      }
    }

    return this;
  }

  seek(bitOffset, offset) {
    switch (offset) {
      case StreamSeekOrigin.Start:
        this.pos = bitOffset;
        break;

      case StreamSeekOrigin.Current:
        this.pos += bitOffset;
        break;

      case StreamSeekOrigin.End:
        this.pos = this.data.length * 8 + bitOffset;
        break;
    }

    return this;
  }

  resize(sizeBytes) {
    if (this.data.length > sizeBytes) {
      this.data = this.data.subarray(0, sizeBytes);
      this.pos = Math.min(this.pos, sizeBytes * 8);
    } else if (this.data.length < sizeBytes) {
      const d = new Uint8Array(sizeBytes);
      d.set(this.data, 0);
      this.data = d;
    }

    return this;
  }

  writeAlignedSingleByte(v) {
    const p = Math.ceil(this.pos / 8);
    this.data[p] = v & 0x00ff;
    this.pos = (p + 1) * 8;
    return this;
  }

  writeAlignedBytes(bytes, byteOffset, byteLength) {
    const p = Math.ceil(this.pos / 8);

    for (let i = 0; i < byteLength; i++) {
      this.data[p + i] = bytes[byteOffset + i];
    }

    this.pos = (p + byteLength) * 8;
    return this;
  }

  toBytes() {
    return this.data.subarray(0, this.byteLength);
  }

  get byteLength() {
    return Math.ceil(this.pos / 8);
  }

  get bitLength() {
    return this.pos;
  }

  slice(startBit, endBit) {
    if (endBit < 0) endBit = this.pos + endBit;
    const r = new BitStreamWriter(Math.ceil((endBit - startBit) / 8));
    r.writeBitsFromArray(this.data, startBit, endBit - startBit);
    return r;
  }

  setBit(i, v) {
    const p = Math.floor(i / 8);
    const m = i % 8;
    this.data[p] = this.data[p] & ~(0x0080 >>> m) | (v ? 0x0080 : 0) >>> m;
  }

  getBit(i) {
    const p = Math.floor(i / 8);
    const m = i % 8;
    return this.data[p] & 0x0080 >>> m ? 1 : 0;
  }

  setByte(i, v) {
    this.data[i] = v;
  }

  getByte(i) {
    return this.data[i];
  }

  concat(...a) {
    return BitStreamWriter.concat(this, ...a);
  }

  static concat(...a) {
    let n = 0;

    for (const b of a) {
      n += b.bitLength;
    }

    const r = new BitStreamWriter(Math.ceil(n / 8));

    for (let i = 0; i < a.length; i++) {
      r.writeBitsFromArray(a[i].data, 0, a[i].bitLength);
    }

    return r;
  }

}

/***/ }),

/***/ "../red-agate-util/modules/io/FileFetcher.js":
/*!***************************************************!*\
  !*** ../red-agate-util/modules/io/FileFetcher.js ***!
  \***************************************************/
/*! exports provided: FileFetcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileFetcher", function() { return FileFetcher; });
/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logger */ "../red-agate-util/modules/io/Logger.js");
/* harmony import */ var _runtime_is_node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../runtime/is-node */ "../red-agate-util/modules/runtime/is-node.js");
/* harmony import */ var _runtime_require_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../runtime/require-dynamic */ "../red-agate-util/modules/runtime/require-dynamic.js");
// Copyright (c) 2017, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln



/**
 * Fetching file via HTTP/HTTPS or local file.
 *
 * @static
 */

class FileFetcher {
  static fetchLocation_node(uri, config) {
    const promise = new Promise((resolve, reject) => {
      try {
        const uriLower = uri.toLowerCase();

        if (uriLower.startsWith("http:") || uriLower.startsWith("https:")) {
          // HTTP or HTTPS
          const http = Object(_runtime_require_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(uriLower.startsWith("http:") ? "http" : "https");
          const url = Object(_runtime_require_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])("url"); // TODO: set method and options

          http.get(uri, res => {
            // DO NOT CALL "res.setEncoding('binary' or null)" to receive chunks as Buffer !
            if (res.statusCode === 200) {
              const contentType = res.headers["content-type"];
              const data = [];
              res.on("data", chunk => {
                data.push(chunk);
              });
              res.on("end", () => {
                resolve({
                  contentType,
                  data: Buffer.concat(data)
                });
              });
              res.on("error", e => {
                _Logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].log("FileFetcher#fetchLocation_node:http.get:on-error:" + e);
                reject(e);
              });
            } else {
              _Logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].log("FileFetcher#fetchLocation_node:http.get:bad-status-code:" + res.statusCode);
              reject(res);
            }
          });
        } else if (uri.match(/^[A-Za-z][-+.A-Za-z0-9]*:/) && !uriLower.toLowerCase().startsWith("file:") && !(process.platform === "win32" && uri.match(/^[A-Za-z]:/))) {
          // unknown URI scheme
          reject(uri);
        } else {
          // File
          const fs = Object(_runtime_require_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])("fs");
          let path = uri;

          if (process.platform === "win32") {
            path = path.replace(/^file:\/+([A-Za-z])\//i, "$1:/");
            path = path.replace(/^\/+([A-Za-z])\//, "$1:/");
          }

          path = path.replace(/^file\:\/+/i, "/");
          const data = [];
          fs.createReadStream(path).on("data", chunk => {
            data.push(chunk);
          }).on("end", () => {
            resolve({
              contentType: null,
              data: Buffer.concat(data)
            });
          }).on("error", e => {
            _Logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].log("FileFetcher#fetchLocation_node:fs.createReadStream:on-error:" + e);
            reject(e);
          });
        }
      } catch (e) {
        _Logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].log("FileFetcher#fetchLocation_node:" + e);
        reject(e);
      }
    });
    return promise;
  }

  static fetchLocation_xhr(uri, config) {
    const promise = new Promise((resolve, reject) => {
      try {
        const xhr = new XMLHttpRequest();

        xhr.onload = e => {
          if (xhr.status === 200 || xhr.status === 304) {
            const contentType = xhr.getResponseHeader("content-type");
            const arrayBuffer = xhr.response;

            if (arrayBuffer) {
              resolve({
                contentType,
                data: new Uint8Array(arrayBuffer)
              });
            } else {
              _Logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].log("FileFetcher#fetchLocation_xhr:xhr.onload:empty-response:" + e);
              reject(e);
            }
          } else {
            _Logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].log("FileFetcher#fetchLocation_xhr:xhr.onload:bad-status-code:" + xhr.status + ":" + e);
            reject(e);
          }
        };

        xhr.onerror = e => {
          _Logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].log("FileFetcher#fetchLocation_xhr:xhr.onerror:" + e);
          reject(e);
        };

        xhr.open(config !== void 0 && config !== null && config.method !== void 0 && config.method !== null ? config.method : "GET", uri, true, config !== void 0 && config !== null ? config.user : void 0, config !== void 0 && config !== null ? config.password : void 0);

        if (config !== void 0 && config !== null && config.headers !== void 0 && config.headers !== null) {
          for (const h of config.headers) {
            xhr.setRequestHeader(h.header, h.value);
          }
        }

        xhr.responseType = "arraybuffer";
        xhr.send(config !== void 0 && config !== null && config.data !== void 0 && config.data !== null ? config.data : void 0);
      } catch (e) {
        _Logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].log("FileFetcher#fetchLocation_xhr:" + e);
        reject(e);
      }
    });
    return promise;
  }
  /**
   * Fetch file from URI location.
   *
   * @param  uri   file location's relative/absolute uri.
   * @return       Promise of fetching file.
   */


  static fetchLocation(uri, config) {
    if (_runtime_is_node__WEBPACK_IMPORTED_MODULE_1__["default"]) {
      return this.fetchLocation_node(uri, config);
    } else {
      return this.fetchLocation_xhr(uri, config);
    }
  }

}

/***/ }),

/***/ "../red-agate-util/modules/io/FileSaver.js":
/*!*************************************************!*\
  !*** ../red-agate-util/modules/io/FileSaver.js ***!
  \*************************************************/
/*! exports provided: FileSaver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileSaver", function() { return FileSaver; });
/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logger */ "../red-agate-util/modules/io/Logger.js");
/* harmony import */ var _runtime_is_node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../runtime/is-node */ "../red-agate-util/modules/runtime/is-node.js");
/* harmony import */ var _runtime_require_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../runtime/require-dynamic */ "../red-agate-util/modules/runtime/require-dynamic.js");
// Copyright (c) 2017, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln



class FileSaver {
  static saveTextAs_node(pathOrFileName, text, encoding) {
    const promise = new Promise((resolve, reject) => {
      try {
        const fs = Object(_runtime_require_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])("fs");
        fs.writeFile(pathOrFileName, text, encoding === "utf-8" || encoding === "UTF-8" ? "utf8" : encoding, err => {
          if (err) {
            _Logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].log("FileSaver#saveTextAs_node:writeFile:" + err);
            reject(err);
          } else {
            resolve(true);
          }
        });
      } catch (e) {
        _Logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].log("FileSaver#saveTextAs_node:" + e);
        reject(e);
      }
    });
    return promise;
  }

  static saveTextAs_html5(pathOrFileName, text, encoding) {
    const promise = new Promise((resolve, reject) => {
      try {
        if (encoding === "utf-8" || encoding === "UTF-8") {
          const blob = new Blob([text], {
            type: "text/plain"
          });

          if (window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveOrOpenBlob(blob, pathOrFileName);
            resolve(true);
          } else {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = pathOrFileName;
            const ua = window.navigator.userAgent.toLowerCase(); // const isMSIE    = ua.indexOf('trident/') !== -1;
            // const isMSEdge  = ua.indexOf('edge/')    !== -1;
            // const isFirefox = ua.indexOf('firefox/') !== -1 && ua.indexOf('edge/') === -1;

            const isChrome = ua.indexOf("chrome/") !== -1 && ua.indexOf("edge/") === -1;
            if (!isChrome) document.body.appendChild(a);
            a.click();
            window.setTimeout(() => {
              window.URL.revokeObjectURL(url);
              if (!isChrome) document.body.removeChild(a);
              resolve(true);
            }, 10);
          }
        } else {
          _Logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].log("FileSaver#saveTextAs_html5:unsupported text encoding:" + encoding);
          reject("unsupported text encoding");
        }
      } catch (e) {
        _Logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].log("FileSaver#saveTextAs_html5:" + e);
        reject(e);
      }
    });
    return promise;
  }

  static saveBinaryAs_node(pathOrFileName, data) {
    const promise = new Promise((resolve, reject) => {
      try {
        const fs = Object(_runtime_require_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])("fs");
        fs.writeFile(pathOrFileName, data, err => {
          if (err) {
            _Logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].log("FileSaver#saveBinaryAs_node:writeFile:" + err);
            reject(err);
          } else {
            resolve(true);
          }
        });
      } catch (e) {
        _Logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].log("FileSaver#saveBinaryAs_node:" + e);
        reject(e);
      }
    });
    return promise;
  }

  static saveBinaryAs_html5(pathOrFileName, data) {
    const promise = new Promise((resolve, reject) => {
      try {
        const blob = new Blob([data], {
          type: "application/octet-binary"
        });

        if (window.navigator.msSaveOrOpenBlob) {
          window.navigator.msSaveOrOpenBlob(blob, pathOrFileName);
          resolve(true);
        } else {
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = pathOrFileName;
          const ua = window.navigator.userAgent.toLowerCase(); // const isMSIE    = ua.indexOf('trident/') !== -1;
          // const isMSEdge  = ua.indexOf('edge/')    !== -1;
          // const isFirefox = ua.indexOf('firefox/') !== -1 && ua.indexOf('edge/') === -1;

          const isChrome = ua.indexOf("chrome/") !== -1 && ua.indexOf("edge/") === -1;
          if (!isChrome) document.body.appendChild(a);
          a.click();
          window.setTimeout(() => {
            window.URL.revokeObjectURL(url);
            if (!isChrome) document.body.removeChild(a);
            resolve(true);
          }, 10);
        }
      } catch (e) {
        _Logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].log("FileSaver#saveBinaryAs_html5:" + e);
        reject(e);
      }
    });
    return promise;
  }

  static saveTextAs(pathOrFileName, text, encoding = "utf-8") {
    if (_runtime_is_node__WEBPACK_IMPORTED_MODULE_1__["default"]) {
      return this.saveTextAs_node(pathOrFileName, text, encoding);
    } else {
      return this.saveTextAs_html5(pathOrFileName, text, encoding);
    }
  }

  static saveBinaryAs(pathOrFileName, data) {
    if (_runtime_is_node__WEBPACK_IMPORTED_MODULE_1__["default"]) {
      return this.saveBinaryAs_node(pathOrFileName, data);
    } else {
      return this.saveBinaryAs_html5(pathOrFileName, data);
    }
  }

}

/***/ }),

/***/ "../red-agate-util/modules/io/Html5FileFetcher.js":
/*!********************************************************!*\
  !*** ../red-agate-util/modules/io/Html5FileFetcher.js ***!
  \********************************************************/
/*! exports provided: Html5FileFetcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Html5FileFetcher", function() { return Html5FileFetcher; });
/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logger */ "../red-agate-util/modules/io/Logger.js");
// Copyright (c) 2017, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln

class Html5FileFetcher {
  /**
   * read data from File interface(HTML5 File API).
   */
  static fetch(file) {
    const promise = new Promise((resolve, reject) => {
      try {
        const reader = new FileReader();

        reader.onload = ev => {
          resolve({
            contentType: file.type,
            data: new Uint8Array(ev.target.result)
          });
        };

        reader.onerror = ev => {
          _Logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].log("Html5FileFetcher#fetch:onerror:" + ev);
          reject(ev);
        };

        reader.onabort = ev => {
          _Logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].log("Html5FileFetcher#fetch:onabort:" + ev);
          reject(ev);
        };

        reader.readAsArrayBuffer(file);
      } catch (e) {
        _Logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].log("Html5FileFetcher#fetch:" + e);
        reject(e);
      }
    });
    return promise;
  }

}

/***/ }),

/***/ "../red-agate-util/modules/io/Logger.js":
/*!**********************************************!*\
  !*** ../red-agate-util/modules/io/Logger.js ***!
  \**********************************************/
/*! exports provided: LoggerLogLevel, Logger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggerLogLevel", function() { return LoggerLogLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return Logger; });
/* harmony import */ var _runtime_is_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../runtime/is-node */ "../red-agate-util/modules/runtime/is-node.js");
// Copyright (c) 2017, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln

var LoggerLogLevel;

(function (LoggerLogLevel) {
  LoggerLogLevel[LoggerLogLevel["NO_LOG"] = 0] = "NO_LOG";
  LoggerLogLevel[LoggerLogLevel["ERROR"] = 1] = "ERROR";
  LoggerLogLevel[LoggerLogLevel["PRODUCTION"] = 1] = "PRODUCTION";
  LoggerLogLevel[LoggerLogLevel["ASSERT"] = 2] = "ASSERT";
  LoggerLogLevel[LoggerLogLevel["WARN"] = 3] = "WARN";
  LoggerLogLevel[LoggerLogLevel["STAGING"] = 3] = "STAGING";
  LoggerLogLevel[LoggerLogLevel["INFO"] = 4] = "INFO";
  LoggerLogLevel[LoggerLogLevel["LOG"] = 5] = "LOG";
  LoggerLogLevel[LoggerLogLevel["DEVELOPMENT"] = 5] = "DEVELOPMENT";
  LoggerLogLevel[LoggerLogLevel["TRACE"] = 6] = "TRACE";
  LoggerLogLevel[LoggerLogLevel["DEBUG"] = 6] = "DEBUG";
  LoggerLogLevel[LoggerLogLevel["VERBOSE"] = 6] = "VERBOSE";
})(LoggerLogLevel || (LoggerLogLevel = {}));

class Logger {
  static assert(test, message, ...optionalParams) {
    if (this.logLevel <= LoggerLogLevel.PRODUCTION) {
      return this;
    }

    let succeeded = false;

    try {
      succeeded = Boolean(test);
    } catch (e) {
      succeeded = false;
    }

    if (!succeeded) {
      try {
        Logger.con.assert(test, message, ...optionalParams);
      } catch (e) {
        // node's assert() throws AssertionError.
        if (this.logLevel <= LoggerLogLevel.STAGING) {
          throw e;
        }
      }

      if (this.logLevel <= LoggerLogLevel.STAGING) {
        let m = "";

        try {
          m = String(message);
        } catch (e) {}

        throw new Error("Assertion failed:" + m);
      }
    }

    return this;
  }

  static dir(value, ...optionalParams) {
    if (this.logLevel <= LoggerLogLevel.DEBUG) {
      return this;
    }

    try {
      Logger.con.dir(value, ...optionalParams);
    } catch (e) {}

    return this;
  }

  static error(message, ...optionalParams) {
    if (this.logLevel < LoggerLogLevel.ERROR) {
      return this;
    }

    try {
      Logger.con.error(message, ...optionalParams);
    } catch (e) {}

    return this;
  }

  static info(message, ...optionalParams) {
    if (this.logLevel < LoggerLogLevel.INFO) {
      return this;
    }

    try {
      Logger.con.info(message, ...optionalParams);
    } catch (e) {}

    return this;
  }

  static log(message, ...optionalParams) {
    if (this.logLevel < LoggerLogLevel.LOG) {
      return this;
    }

    try {
      Logger.con.log(message, ...optionalParams);
    } catch (e) {}

    return this;
  }

  static time(timerName) {
    if (this.logLevel <= LoggerLogLevel.DEBUG) {
      return this;
    }

    try {
      Logger.con.time(timerName);
    } catch (e) {}

    return this;
  }

  static timeEnd(timerName) {
    if (this.logLevel <= LoggerLogLevel.DEBUG) {
      return this;
    }

    try {
      Logger.con.timeEnd(timerName);
    } catch (e) {}

    return this;
  }

  static trace(message, ...optionalParams) {
    if (this.logLevel < LoggerLogLevel.TRACE) {
      return this;
    }

    try {
      Logger.con.trace(message, ...optionalParams);
    } catch (e) {}

    return this;
  }

  static warn(message, ...optionalParams) {
    if (this.logLevel < LoggerLogLevel.WARN) {
      return this;
    }

    try {
      Logger.con.warn(message, ...optionalParams);
    } catch (e) {}

    return this;
  }

}
/** static constructor */
// tslint:disable-next-line:variable-name

Logger.__ctor = (() => {
  if (_runtime_is_node__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    Logger.con = new console.Console(process.stderr);

    if (true) {
      switch ("development") {
        case "production":
          Logger.logLevel = LoggerLogLevel.PRODUCTION;
          break;

        case "staging":
          Logger.logLevel = LoggerLogLevel.STAGING;
          break;

        case "development":
        default:
          Logger.logLevel = LoggerLogLevel.DEVELOPMENT;
          break;
      }
    }
  } else {
    Logger.con = console;
    Logger.logLevel = LoggerLogLevel.DEVELOPMENT;
  }
})();

/***/ }),

/***/ "../red-agate-util/modules/io/Uri.js":
/*!*******************************************!*\
  !*** ../red-agate-util/modules/io/Uri.js ***!
  \*******************************************/
/*! exports provided: Uri */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Uri", function() { return Uri; });
// Copyright (c) 2017, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln
class Uri {
  static isAbsolute(uri) {
    const x = uri.toLowerCase();

    if (x.startsWith('/') || x.startsWith('\\')) {
      // absolute local directory
      // or UNC paths (e.g. \\\\server\\path, \\\\?\\long\\path)
      return true;
    }

    if (x === '.' || x.startsWith('./') || x.startsWith('.\\')) {
      return false;
    }

    if (x === '..' || x.startsWith('../') || x.startsWith('..\\')) {
      return false;
    }

    if (x.match(/^([a-z][a-z0-9+\-.]*):/)) {
      // url scheme
      return true;
    }

    if (x.match(/^[a-z]:[/\/]/)) {
      // windows drive letter + root
      return true;
    }

    return false;
  }

  static getDirectory(uri) {
    let p = '';
    let x = uri;

    if (x.startsWith('\\\\?\\')) {
      p += '\\\\?\\';
      x = x.substring(3);
    }

    let query = x.indexOf('?');
    if (query < 0) query = x.length;
    let hash = x.indexOf('#');
    if (hash < 0) hash = x.length;
    x = x.substring(0, Math.min(query, hash));

    if (x.endsWith('/') || x.endsWith('\\')) {
      return p + x;
    }

    while (x.length > 0) {
      x = x.substring(0, x.length - 1);

      if (x.endsWith('/') || x.endsWith('\\')) {
        return p + x;
      }
    }

    return p + x || '/';
  }

  static join(base, needle) {
    if (Uri.isAbsolute(needle)) {
      return needle;
    }

    return Uri.getDirectory(base) + needle;
  }

  static getPathExt(path) {
    return path.slice((path.lastIndexOf(".") - 1 >>> 0) + 2).toLowerCase();
  }

  static pathExtToContentType(pathExt) {
    let contentType = null;

    switch (pathExt) {
      case "jpeg":
      case "jpg":
        contentType = "image/jpeg";
        break;

      case "png":
        contentType = "image/png";
        break;

      case "gif":
        contentType = "image/gif";
        break;

      case "svg":
      case "svgz":
        contentType = "image/svg+xml";
        break;

      case "tiff":
      case "tif":
        contentType = "image/tiff";
        break;

      case "jp2":
      case "j2c":
        contentType = "image/jp2";
        break;

      case "css":
        contentType = "text/css";
        break;

      case "js":
        contentType = "text/javascript";
        break;

      case "csv":
        contentType = "text/csv";
        break;

      case "txt":
        contentType = "text/plain";
        break;

      case "html":
      case "htm":
        contentType = "text/plain";
        break;
    }

    return contentType;
  }

}

/***/ }),

/***/ "../red-agate-util/modules/runtime/commonjs/require-cjs.js":
/*!*****************************************************************!*\
  !*** ../red-agate-util/modules/runtime/commonjs/require-cjs.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () {
  return eval('require');
};

/***/ }),

/***/ "../red-agate-util/modules/runtime/is-node.js":
/*!****************************************************!*\
  !*** ../red-agate-util/modules/runtime/is-node.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln
let isNode = false;

if (typeof process === 'object') {
  if (typeof process.versions === 'object') {
    if (typeof process.versions.node !== 'undefined') {
      if (typeof process.type !== 'undefined' && process.type === 'renderer') {// electron renderer process
      } else {
        isNode = true;
      }
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (isNode);

/***/ }),

/***/ "../red-agate-util/modules/runtime/require-dynamic.js":
/*!************************************************************!*\
  !*** ../red-agate-util/modules/runtime/require-dynamic.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _is_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-node */ "../red-agate-util/modules/runtime/is-node.js");
/* harmony import */ var _commonjs_require_cjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commonjs/require-cjs */ "../red-agate-util/modules/runtime/commonjs/require-cjs.js");
/* harmony import */ var _commonjs_require_cjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_commonjs_require_cjs__WEBPACK_IMPORTED_MODULE_1__);
// Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln
 // @ts-ignore TS7016 Could not find a declaration file


const requireDynamicGen = _commonjs_require_cjs__WEBPACK_IMPORTED_MODULE_1___default.a || _commonjs_require_cjs__WEBPACK_IMPORTED_MODULE_1__; // tslint:disable-next-line:no-eval

/* harmony default export */ __webpack_exports__["default"] = (_is_node__WEBPACK_IMPORTED_MODULE_0__["default"] ? requireDynamicGen() : id => void 0);

/***/ }),

/***/ "../red-agate-util/modules/types/Integer53.js":
/*!****************************************************!*\
  !*** ../red-agate-util/modules/types/Integer53.js ***!
  \****************************************************/
/*! exports provided: Integer53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Integer53", function() { return Integer53; });
// Copyright (c) 2017, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln

/**
 *
 */
class Integer53 {
  static get MAX_INT() {
    return 0x1fffffffffffff; // Number.MAX_SAFE_INTEGER (== pow(2, 53) - 1)
  }

  static highestBit(x) {
    x = Math.abs(x);

    for (let i = 52; i >= 0; i--) {
      if (Math.trunc(x / Math.pow(2, i)) > 0) return i;
    }

    return -1;
  }
  /**
   * 53bits x | y
   */


  static bitOr(x, y) {
    x = Math.abs(x);
    y = Math.abs(y);
    const loX = (x & 0xffffffff) >>> 0;
    const hiX = (x - loX) / 4294967296;
    const loY = (y & 0xffffffff) >>> 0;
    const hiY = (y - loY) / 4294967296;
    return ((hiX | hiY) >>> 0) * 4294967296 + ((loX | loY) >>> 0);
  }
  /**
   * 53bits x & y
   */


  static bitAnd(x, y) {
    x = Math.abs(x);
    y = Math.abs(y);
    const loX = (x & 0xffffffff) >>> 0;
    const hiX = (x - loX) / 4294967296;
    const loY = (y & 0xffffffff) >>> 0;
    const hiY = (y - loY) / 4294967296;
    return ((hiX & hiY) >>> 0) * 4294967296 + ((loX & loY) >>> 0);
  }
  /**
   * 53bits x ^ y
   */


  static bitXor(x, y) {
    x = Math.abs(x);
    y = Math.abs(y);
    const loX = (x & 0xffffffff) >>> 0;
    const hiX = (x - loX) / 4294967296;
    const loY = (y & 0xffffffff) >>> 0;
    const hiY = (y - loY) / 4294967296;
    return ((hiX ^ hiY) >>> 0) * 4294967296 + ((loX ^ loY) >>> 0);
  }
  /**
   * 53bits ~x
   */


  static bitNot(x) {
    x = Math.abs(x);
    const loX = (x & 0xffffffff) >>> 0;
    const hiX = (x - loX) / 4294967296;
    return ((~hiX & 0x001fffff) >>> 0) * 4294967296 + (~loX >>> 0);
  }
  /**
   * 53bits x << s
   */


  static bitLShift(x, s) {
    x = Math.abs(x);

    if (s >= 0) {
      if (s <= 52) return x % Math.pow(2, 53 - s) * Math.pow(2, s);else return 0;
    } else {
      if (s >= -52) return Math.trunc(x / Math.pow(2, -s));else return 0;
    }
  }
  /**
   * 53bits x >>> s
   */


  static bitRShift(x, s) {
    x = Math.abs(x);

    if (s <= 0) {
      if (s >= -52) return x % Math.pow(2, 53 + s) * Math.pow(2, -s);else return 0;
    } else {
      if (s <= 52) return Math.trunc(x / Math.pow(2, s));else return 0;
    }
  }
  /**
   * Slice bits. indexes are LSB first.
   */


  static slice(x, start, end) {
    x = Math.abs(x);
    if (end < 0) end += 53;

    if (0 < start) {
      x = Math.trunc(x / Math.pow(2, start));
      end -= start;
    }

    return x % Math.pow(2, end);
  }

}

/***/ }),

/***/ "../red-agate-util/modules/types/WritableArrayLike.js":
/*!************************************************************!*\
  !*** ../red-agate-util/modules/types/WritableArrayLike.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Copyright (c) 2017, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln

/***/ }),

/***/ "../red-agate/modules/index.js":
/*!*************************************!*\
  !*** ../red-agate/modules/index.js ***!
  \*************************************/
/*! exports provided: RedAgateComponent, RedAgatePhantomComponent, createElement, cloneElement, createElementFromComponentInstance, transform, elementStyleRenderer, htmlAttributesRenderer, htmlRenderer, renderAsHtml, renderAsHtml_noDefer, render, renderOnAwsLambda, renderOnExpress, Fragment, Query, query, CONTEXT_SVG_CANVAS, CONTEXT_SVG_PATH, CONTEXT_ASSET_, shapePropsDefault, Shape, renderSvgCanvas, toImgTag, toElementStyle, toDataUrl, toSvg, Repeat, ForEach, If, Do, Facet, Template, Html4_01_Strict, Html4_01_Transitional, Html4_01_Frameset, Xhtml1_0_Strict, Xhtml1_0_Transitional, Xhtml1_0_Frameset, Html5, Xml, HtmlImposition, Svg, ambientPropsDefault, Ambient, arcPropsDefault, Arc, canvasPropsDefault, Canvas, circlePropsDefault, Circle, curvePropsDefault, Curve, gridLinePropsDefault, GridLine, Group, linePropsDefault, Line, pathPropsDefault, Path, piePropsDefault, Pie, polygonPropsDefault, Polygon, rectPropsDefault, Rect, roundRectPropsDefault, RoundRect, svgAssetFragmentPropsDefault, SvgAssetFragment, svgFragmentPropsDefault, SvgFragment, textPropsDefault, Text, SvgImposition, Asset, Image, Script, Style, Font, SingleFont, printerMarksDefault, PrinterMarks, Lambdas, App, HtmlRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _red_agate_red_agate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./red-agate/red-agate */ "../red-agate/modules/red-agate/red-agate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RedAgateComponent", function() { return _red_agate_red_agate__WEBPACK_IMPORTED_MODULE_0__["RedAgateComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RedAgatePhantomComponent", function() { return _red_agate_red_agate__WEBPACK_IMPORTED_MODULE_0__["RedAgatePhantomComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return _red_agate_red_agate__WEBPACK_IMPORTED_MODULE_0__["createElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return _red_agate_red_agate__WEBPACK_IMPORTED_MODULE_0__["cloneElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createElementFromComponentInstance", function() { return _red_agate_red_agate__WEBPACK_IMPORTED_MODULE_0__["createElementFromComponentInstance"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transform", function() { return _red_agate_red_agate__WEBPACK_IMPORTED_MODULE_0__["transform"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "elementStyleRenderer", function() { return _red_agate_red_agate__WEBPACK_IMPORTED_MODULE_0__["elementStyleRenderer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "htmlAttributesRenderer", function() { return _red_agate_red_agate__WEBPACK_IMPORTED_MODULE_0__["htmlAttributesRenderer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "htmlRenderer", function() { return _red_agate_red_agate__WEBPACK_IMPORTED_MODULE_0__["htmlRenderer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "renderAsHtml", function() { return _red_agate_red_agate__WEBPACK_IMPORTED_MODULE_0__["renderAsHtml"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "renderAsHtml_noDefer", function() { return _red_agate_red_agate__WEBPACK_IMPORTED_MODULE_0__["renderAsHtml_noDefer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _red_agate_red_agate__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "renderOnAwsLambda", function() { return _red_agate_red_agate__WEBPACK_IMPORTED_MODULE_0__["renderOnAwsLambda"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "renderOnExpress", function() { return _red_agate_red_agate__WEBPACK_IMPORTED_MODULE_0__["renderOnExpress"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Fragment", function() { return _red_agate_red_agate__WEBPACK_IMPORTED_MODULE_0__["Fragment"]; });

/* harmony import */ var _red_agate_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./red-agate/data */ "../red-agate/modules/red-agate/data.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Query", function() { return _red_agate_data__WEBPACK_IMPORTED_MODULE_1__["Query"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "query", function() { return _red_agate_data__WEBPACK_IMPORTED_MODULE_1__["query"]; });

/* harmony import */ var _red_agate_tags_Shape__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./red-agate/tags/Shape */ "../red-agate/modules/red-agate/tags/Shape.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CONTEXT_SVG_CANVAS", function() { return _red_agate_tags_Shape__WEBPACK_IMPORTED_MODULE_2__["CONTEXT_SVG_CANVAS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CONTEXT_SVG_PATH", function() { return _red_agate_tags_Shape__WEBPACK_IMPORTED_MODULE_2__["CONTEXT_SVG_PATH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CONTEXT_ASSET_", function() { return _red_agate_tags_Shape__WEBPACK_IMPORTED_MODULE_2__["CONTEXT_ASSET_"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shapePropsDefault", function() { return _red_agate_tags_Shape__WEBPACK_IMPORTED_MODULE_2__["shapePropsDefault"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Shape", function() { return _red_agate_tags_Shape__WEBPACK_IMPORTED_MODULE_2__["Shape"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "renderSvgCanvas", function() { return _red_agate_tags_Shape__WEBPACK_IMPORTED_MODULE_2__["renderSvgCanvas"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toImgTag", function() { return _red_agate_tags_Shape__WEBPACK_IMPORTED_MODULE_2__["toImgTag"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toElementStyle", function() { return _red_agate_tags_Shape__WEBPACK_IMPORTED_MODULE_2__["toElementStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toDataUrl", function() { return _red_agate_tags_Shape__WEBPACK_IMPORTED_MODULE_2__["toDataUrl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toSvg", function() { return _red_agate_tags_Shape__WEBPACK_IMPORTED_MODULE_2__["toSvg"]; });

/* harmony import */ var _red_agate_taglib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./red-agate/taglib */ "../red-agate/modules/red-agate/taglib.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Repeat", function() { return _red_agate_taglib__WEBPACK_IMPORTED_MODULE_3__["Repeat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ForEach", function() { return _red_agate_taglib__WEBPACK_IMPORTED_MODULE_3__["ForEach"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "If", function() { return _red_agate_taglib__WEBPACK_IMPORTED_MODULE_3__["If"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Do", function() { return _red_agate_taglib__WEBPACK_IMPORTED_MODULE_3__["Do"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Facet", function() { return _red_agate_taglib__WEBPACK_IMPORTED_MODULE_3__["Facet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Template", function() { return _red_agate_taglib__WEBPACK_IMPORTED_MODULE_3__["Template"]; });

/* harmony import */ var _red_agate_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./red-agate/html */ "../red-agate/modules/red-agate/html.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Html4_01_Strict", function() { return _red_agate_html__WEBPACK_IMPORTED_MODULE_4__["Html4_01_Strict"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Html4_01_Transitional", function() { return _red_agate_html__WEBPACK_IMPORTED_MODULE_4__["Html4_01_Transitional"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Html4_01_Frameset", function() { return _red_agate_html__WEBPACK_IMPORTED_MODULE_4__["Html4_01_Frameset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Xhtml1_0_Strict", function() { return _red_agate_html__WEBPACK_IMPORTED_MODULE_4__["Xhtml1_0_Strict"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Xhtml1_0_Transitional", function() { return _red_agate_html__WEBPACK_IMPORTED_MODULE_4__["Xhtml1_0_Transitional"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Xhtml1_0_Frameset", function() { return _red_agate_html__WEBPACK_IMPORTED_MODULE_4__["Xhtml1_0_Frameset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Html5", function() { return _red_agate_html__WEBPACK_IMPORTED_MODULE_4__["Html5"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Xml", function() { return _red_agate_html__WEBPACK_IMPORTED_MODULE_4__["Xml"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HtmlImposition", function() { return _red_agate_html__WEBPACK_IMPORTED_MODULE_4__["HtmlImposition"]; });

/* harmony import */ var _red_agate_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./red-agate/svg */ "../red-agate/modules/red-agate/svg.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Svg", function() { return _red_agate_svg__WEBPACK_IMPORTED_MODULE_5__["Svg"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ambientPropsDefault", function() { return _red_agate_svg__WEBPACK_IMPORTED_MODULE_5__["ambientPropsDefault"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ambient", function() { return _red_agate_svg__WEBPACK_IMPORTED_MODULE_5__["Ambient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arcPropsDefault", function() { return _red_agate_svg__WEBPACK_IMPORTED_MODULE_5__["arcPropsDefault"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Arc", function() { return _red_agate_svg__WEBPACK_IMPORTED_MODULE_5__["Arc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "canvasPropsDefault", function() { return _red_agate_svg__WEBPACK_IMPORTED_MODULE_5__["canvasPropsDefault"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Canvas", function() { return _red_agate_svg__WEBPACK_IMPORTED_MODULE_5__["Canvas"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "circlePropsDefault", function() { return _red_agate_svg__WEBPACK_IMPORTED_MODULE_5__["circlePropsDefault"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Circle", function() { return _red_agate_svg__WEBPACK_IMPORTED_MODULE_5__["Circle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curvePropsDefault", function() { return _red_agate_svg__WEBPACK_IMPORTED_MODULE_5__["curvePropsDefault"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Curve", function() { return _red_agate_svg__WEBPACK_IMPORTED_MODULE_5__["Curve"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gridLinePropsDefault", function() { return _red_agate_svg__WEBPACK_IMPORTED_MODULE_5__["gridLinePropsDefault"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridLine", function() { return _red_agate_svg__WEBPACK_IMPORTED_MODULE_5__["GridLine"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return _red_agate_svg__WEBPACK_IMPORTED_MODULE_5__["Group"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "linePropsDefault", function() { return _red_agate_svg__WEBPACK_IMPORTED_MODULE_5__["linePropsDefault"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Line", function() { return _red_agate_svg__WEBPACK_IMPORTED_MODULE_5__["Line"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pathPropsDefault", function() { return _red_agate_svg__WEBPACK_IMPORTED_MODULE_5__["pathPropsDefault"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Path", function() { return _red_agate_svg__WEBPACK_IMPORTED_MODULE_5__["Path"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "piePropsDefault", function() { return _red_agate_svg__WEBPACK_IMPORTED_MODULE_5__["piePropsDefault"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pie", function() { return _red_agate_svg__WEBPACK_IMPORTED_MODULE_5__["Pie"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "polygonPropsDefault", function() { return _red_agate_svg__WEBPACK_IMPORTED_MODULE_5__["polygonPropsDefault"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Polygon", function() { return _red_agate_svg__WEBPACK_IMPORTED_MODULE_5__["Polygon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rectPropsDefault", function() { return _red_agate_svg__WEBPACK_IMPORTED_MODULE_5__["rectPropsDefault"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Rect", function() { return _red_agate_svg__WEBPACK_IMPORTED_MODULE_5__["Rect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "roundRectPropsDefault", function() { return _red_agate_svg__WEBPACK_IMPORTED_MODULE_5__["roundRectPropsDefault"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RoundRect", function() { return _red_agate_svg__WEBPACK_IMPORTED_MODULE_5__["RoundRect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "svgAssetFragmentPropsDefault", function() { return _red_agate_svg__WEBPACK_IMPORTED_MODULE_5__["svgAssetFragmentPropsDefault"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SvgAssetFragment", function() { return _red_agate_svg__WEBPACK_IMPORTED_MODULE_5__["SvgAssetFragment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "svgFragmentPropsDefault", function() { return _red_agate_svg__WEBPACK_IMPORTED_MODULE_5__["svgFragmentPropsDefault"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SvgFragment", function() { return _red_agate_svg__WEBPACK_IMPORTED_MODULE_5__["SvgFragment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "textPropsDefault", function() { return _red_agate_svg__WEBPACK_IMPORTED_MODULE_5__["textPropsDefault"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _red_agate_svg__WEBPACK_IMPORTED_MODULE_5__["Text"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SvgImposition", function() { return _red_agate_svg__WEBPACK_IMPORTED_MODULE_5__["SvgImposition"]; });

/* harmony import */ var _red_agate_bundler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./red-agate/bundler */ "../red-agate/modules/red-agate/bundler.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Asset", function() { return _red_agate_bundler__WEBPACK_IMPORTED_MODULE_6__["Asset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return _red_agate_bundler__WEBPACK_IMPORTED_MODULE_6__["Image"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Script", function() { return _red_agate_bundler__WEBPACK_IMPORTED_MODULE_6__["Script"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Style", function() { return _red_agate_bundler__WEBPACK_IMPORTED_MODULE_6__["Style"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Font", function() { return _red_agate_bundler__WEBPACK_IMPORTED_MODULE_6__["Font"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SingleFont", function() { return _red_agate_bundler__WEBPACK_IMPORTED_MODULE_6__["SingleFont"]; });

/* harmony import */ var _red_agate_printing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./red-agate/printing */ "../red-agate/modules/red-agate/printing.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "printerMarksDefault", function() { return _red_agate_printing__WEBPACK_IMPORTED_MODULE_7__["printerMarksDefault"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PrinterMarks", function() { return _red_agate_printing__WEBPACK_IMPORTED_MODULE_7__["PrinterMarks"]; });

/* harmony import */ var _red_agate_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./red-agate/app */ "../red-agate/modules/red-agate/app.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Lambdas", function() { return _red_agate_app__WEBPACK_IMPORTED_MODULE_8__["Lambdas"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "App", function() { return _red_agate_app__WEBPACK_IMPORTED_MODULE_8__["App"]; });

/* harmony import */ var _red_agate_renderer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./red-agate/renderer */ "../red-agate/modules/red-agate/renderer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HtmlRenderer", function() { return _red_agate_renderer__WEBPACK_IMPORTED_MODULE_9__["HtmlRenderer"]; });

// Copyright (c) 2017, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln











/***/ }),

/***/ "../red-agate/modules/red-agate/app.js":
/*!*********************************************!*\
  !*** ../red-agate/modules/red-agate/app.js ***!
  \*********************************************/
/*! exports provided: Lambdas, App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lambdas", function() { return Lambdas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
// Copyright (c) 2017, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln
class Lambdas {
  static pipe(handler1, handler2) {
    return (event, context, callback) => {
      handler1(event, context, (error, evt2) => {
        if (error) {
          callback(error, null);
        } else {
          handler2(evt2, context, (err, res) => callback(err, res));
        }
      });
    };
  }

}
class App {
  static cli(options, handler) {
    if (App.suppressRun) {
      return this;
    }

    const optsMap = new Map();

    for (let op of options) {
      let matched = false;
      let isOptional = false;

      if (op.startsWith('?')) {
        op = op.substring(1);
        isOptional = true;
      }

      for (const arg of process.argv.slice(2)) {
        if (op.endsWith('*')) {
          if (arg.startsWith(op.substring(0, op.length - 1))) {
            matched = true;
            optsMap.set(op, arg.substring(op.length - 1));
            break;
          }
        } else {
          if (arg === op) {
            matched = true;
            optsMap.set(op, arg.substring(op.length));
            break;
          }
        }
      }

      if (!isOptional && !matched) {
        return this;
      }
    }

    handler(optsMap);
    App.suppressRun = true;
    return this;
  }

  static route(name, lambda) {
    App.lambdas.set(name, lambda);
    return this;
  }

  static run(context, lambda) {
    if (App.suppressRun) {
      return;
    }

    process.stdin.resume();
    process.stdin.setEncoding('utf8');
    let inputData = '';
    process.stdin.on('data', chunk => {
      inputData += chunk;
    });
    process.stdin.on('end', () => {
      const write = (data, exitCode) => {
        const done = process.stdout.write(data);

        if (done) {
          process.exit(exitCode);
        } else {
          process.stdout.once('drain', () => {
            process.exit(exitCode);
          });
        }
      };

      try {
        const event = JSON.parse(inputData); // tslint:disable-next-line:variable-name

        let lambda_ = lambda;

        if (!lambda_) {
          if (event && event.eventName) {
            lambda_ = App.lambdas.get(event.eventName);
          }
        }

        lambda_ = lambda_ || ((evt, ctx, cb) => {
          cb({
            message: `Error: event name ${event && event.eventName || ''} is not found.`
          }, null);
        });

        lambda_(event, context, (error, result) => {
          if (error) {
            write(String(error), -1);
          } else {
            write(result, 0);
          }
        });
      } catch (e) {
        write(String(e), -1);
      }
    });
  }

}
App.lambdas = new Map();
App.suppressRun = false;

/***/ }),

/***/ "../red-agate/modules/red-agate/bundler.js":
/*!*************************************************!*\
  !*** ../red-agate/modules/red-agate/bundler.js ***!
  \*************************************************/
/*! exports provided: Asset, Image, Script, Style, Font, SingleFont */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Asset", function() { return Asset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Script", function() { return Script; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Style", function() { return Style; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Font", function() { return Font; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleFont", function() { return SingleFont; });
/* harmony import */ var _red_agate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./red-agate */ "../red-agate/modules/red-agate/red-agate.js");
/* harmony import */ var _tags_Shape__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tags/Shape */ "../red-agate/modules/red-agate/tags/Shape.js");
/* harmony import */ var red_agate_util_modules_convert_Base64__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! red-agate-util/modules/convert/Base64 */ "../red-agate-util/modules/convert/Base64.js");
/* harmony import */ var red_agate_util_modules_convert_TextEncoding__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! red-agate-util/modules/convert/TextEncoding */ "../red-agate-util/modules/convert/TextEncoding.js");
/* harmony import */ var red_agate_util_modules_io_FileFetcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! red-agate-util/modules/io/FileFetcher */ "../red-agate-util/modules/io/FileFetcher.js");
/* harmony import */ var red_agate_util_modules_io_Logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! red-agate-util/modules/io/Logger */ "../red-agate-util/modules/io/Logger.js");
/* harmony import */ var red_agate_util_modules_io_Uri__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! red-agate-util/modules/io/Uri */ "../red-agate-util/modules/io/Uri.js");
// Copyright (c) 2017, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln







class Asset extends _red_agate__WEBPACK_IMPORTED_MODULE_0__["RedAgatePhantomComponent"] {
  constructor(props) {
    super(props);
    this.content = '';
  }

  defer() {
    if (this.props.src === void 0 || this.props.src === null || this.props.src === '') {
      return Promise.resolve();
    } else {
      const src = this.props.src;
      const promise = new Promise((resolve, reject) => {
        try {
          red_agate_util_modules_io_FileFetcher__WEBPACK_IMPORTED_MODULE_4__["FileFetcher"].fetchLocation(this.props.src).then(result => {
            let contentType = result.contentType;

            if (contentType === null) {
              const pathExt = red_agate_util_modules_io_Uri__WEBPACK_IMPORTED_MODULE_6__["Uri"].getPathExt(src);
              contentType = red_agate_util_modules_io_Uri__WEBPACK_IMPORTED_MODULE_6__["Uri"].pathExtToContentType(pathExt);

              if (contentType === null) {
                red_agate_util_modules_io_Logger__WEBPACK_IMPORTED_MODULE_5__["Logger"].log("Asset#defer:unknown content-type:" + pathExt);
                reject("unknown content-type");
                return;
              }
            }

            this.content = `data:${contentType};base64,` + red_agate_util_modules_convert_Base64__WEBPACK_IMPORTED_MODULE_2__["Base64"].encode(result.data, 120);
            resolve();
          }).catch(e => {
            red_agate_util_modules_io_Logger__WEBPACK_IMPORTED_MODULE_5__["Logger"].log("Asset#defer:catch:" + e);
            reject(e);
          });
        } catch (e) {
          red_agate_util_modules_io_Logger__WEBPACK_IMPORTED_MODULE_5__["Logger"].log("Asset#defer:catch:" + e);
          reject(e);
        }
      });
      return promise;
    }
  }

  beforeRender(contexts) {
    this.setContext(contexts, _tags_Shape__WEBPACK_IMPORTED_MODULE_1__["CONTEXT_ASSET_"] + this.props.contextName, this.content);
  }

  render(contexts, children) {
    return '';
  }

}
class Image extends _tags_Shape__WEBPACK_IMPORTED_MODULE_1__["Shape"] {
  constructor(props) {
    super(props);
    this.content = '';
  }

  transform() {
    return this.props.children !== null && this.props.children !== void 0 ? this.props.children : [];
  }

  defer() {
    if (this.props.use !== void 0 && this.props.use !== null && this.props.use !== "") {
      return Promise.resolve();
    } else if (this.content !== null && this.content !== void 0 && this.content !== "") {
      return Promise.resolve();
    } else if (this.props.src === null || this.props.src === void 0 || this.props.src === "") {
      return Promise.resolve();
    } else if (this.props.noDownload) {
      this.content = this.props.src;
      return Promise.resolve();
    } else {
      const src = this.props.src;
      const promise = new Promise((resolve, reject) => {
        red_agate_util_modules_io_FileFetcher__WEBPACK_IMPORTED_MODULE_4__["FileFetcher"].fetchLocation(src).then(result => {
          let contentType = result.contentType;

          if (contentType === null) {
            const pathExt = red_agate_util_modules_io_Uri__WEBPACK_IMPORTED_MODULE_6__["Uri"].getPathExt(src);
            contentType = red_agate_util_modules_io_Uri__WEBPACK_IMPORTED_MODULE_6__["Uri"].pathExtToContentType(pathExt);

            if (contentType === null) {
              red_agate_util_modules_io_Logger__WEBPACK_IMPORTED_MODULE_5__["Logger"].log("Image#defer:unknown content-type:" + pathExt);
              reject("unknown content-type");
              return;
            }
          }

          this.content = `data:${contentType};base64,` + red_agate_util_modules_convert_Base64__WEBPACK_IMPORTED_MODULE_2__["Base64"].encode(result.data, 120);
          resolve();
        }).catch(e => {
          red_agate_util_modules_io_Logger__WEBPACK_IMPORTED_MODULE_5__["Logger"].log("Image#defer:" + e);
          reject(e);
        });
      });
      return promise;
    }
  }

  renderAsHtml(contexts) {
    let r = '';

    if (this.props.asAsset) {
      r = `<script>(Function("return this")())['#img_asset_mb3vhWjBUxDX__${this.props.id}']="${this.content.replace(/\r/g, '').replace(/\n/g, '')}";</script>`;
    } else {
      if (this.props.use !== void 0 && this.props.use !== null && this.props.use !== "") {
        const id = this.props.id || `__img_node_id_mb3vhWjBUxDX_${this.props.__nodeId}`;
        r = `<img id="${id}" style="width:${this.props.width}${this.props.unit || 'px'};height:${this.props.height}${this.props.unit || 'px'};"${_red_agate__WEBPACK_IMPORTED_MODULE_0__["htmlAttributesRenderer"](this.props, new Set(['id', 'src', 'unit', 'width', 'height'])).attrs}></img><script>document.getElementById("${id}").src=(Function("return this")())['#img_asset_mb3vhWjBUxDX__${this.props.use}'];</script>`;
      } else {
        r = `<img src="${this.content}" style="width:${this.props.width}${this.props.unit || 'px'};height:${this.props.height}${this.props.unit || 'px'};"${_red_agate__WEBPACK_IMPORTED_MODULE_0__["htmlAttributesRenderer"](this.props, new Set(['src', 'unit', 'width', 'height'])).attrs}></img>`;
      }
    }

    return r;
  }

  renderAsSvg(canvas) {
    const img = this.props.use !== void 0 && this.props.use !== null && this.props.use !== "" ? "#" + this.props.use : canvas.registerImage({
      url: this.content,
      x: 0,
      y: 0,
      width: 1,
      height: 1
    }, this.props.id);

    if (!this.props.asAsset) {
      canvas.drawImage(img, this.props.x || 0, this.props.y || 0, this.props.width, this.props.height);
    }
  }

  render(contexts, children) {
    const canvas = this.getContext(contexts, _tags_Shape__WEBPACK_IMPORTED_MODULE_1__["CONTEXT_SVG_CANVAS"]);

    if (this.props.srcContext !== void 0 && this.props.srcContext !== null && this.props.srcContext !== "") {
      this.content = this.getContext(contexts, _tags_Shape__WEBPACK_IMPORTED_MODULE_1__["CONTEXT_ASSET_"] + this.props.srcContext);
    }

    if (canvas) {
      this.renderAsSvg(canvas);
      return '';
    } else {
      return this.renderAsHtml(contexts);
    }
  }

}
class Script extends _red_agate__WEBPACK_IMPORTED_MODULE_0__["RedAgatePhantomComponent"] {
  constructor(props) {
    super(props);
    this.content = '';
  }

  defer() {
    if (this.props.src === void 0 || this.props.src === null || this.props.src === '') {
      return Promise.resolve();
    } else if (this.props.noDownload) {
      return Promise.resolve();
    } else {
      const promise = new Promise((resolve, reject) => {
        try {
          red_agate_util_modules_io_FileFetcher__WEBPACK_IMPORTED_MODULE_4__["FileFetcher"].fetchLocation(this.props.src).then(result => {
            this.content = red_agate_util_modules_convert_TextEncoding__WEBPACK_IMPORTED_MODULE_3__["TextEncoding"].decodeUtf8(result.data);
            resolve();
          }).catch(e => {
            red_agate_util_modules_io_Logger__WEBPACK_IMPORTED_MODULE_5__["Logger"].log("Script#defer:catch:" + e);
            reject(e);
          });
        } catch (e) {
          red_agate_util_modules_io_Logger__WEBPACK_IMPORTED_MODULE_5__["Logger"].log("Script#defer:catch:" + e);
          reject(e);
        }
      });
      return promise;
    }
  }

  render(contexts, children) {
    let r = '';

    if (this.props.noDownload) {
      r = `<script${_red_agate__WEBPACK_IMPORTED_MODULE_0__["htmlAttributesRenderer"](this.props, new Set([])).attrs}></script>`;
    } else {
      r = `<script${_red_agate__WEBPACK_IMPORTED_MODULE_0__["htmlAttributesRenderer"](this.props, new Set(['src'])).attrs}>${this.content}</script>`;
    }

    const canvas = this.getContext(contexts, _tags_Shape__WEBPACK_IMPORTED_MODULE_1__["CONTEXT_SVG_CANVAS"]);

    if (canvas) {
      canvas.registerCustomAsset(r);
      return '';
    } else {
      return r;
    }
  }

}
class Style extends _red_agate__WEBPACK_IMPORTED_MODULE_0__["RedAgatePhantomComponent"] {
  constructor(props) {
    super(props);
    this.content = '';
  }

  defer() {
    if (this.props.src === void 0 || this.props.src === null || this.props.src === '') {
      return Promise.resolve();
    } else if (this.props.noDownload) {
      return Promise.resolve();
    } else {
      const promise = new Promise((resolve, reject) => {
        try {
          red_agate_util_modules_io_FileFetcher__WEBPACK_IMPORTED_MODULE_4__["FileFetcher"].fetchLocation(this.props.src).then(result => {
            this.content = red_agate_util_modules_convert_TextEncoding__WEBPACK_IMPORTED_MODULE_3__["TextEncoding"].decodeUtf8(result.data);
            const reSplit = /(url\(.+?\))/;
            const reReplace = /^url\((.+?)\)$/;
            const fragments = this.content.split(reSplit);
            const promises = [];
            const indexes = [];

            for (let i = 0; i < fragments.length; i++) {
              const m = reReplace.exec(fragments[i]);

              if (m && !m[1].startsWith('data:')) {
                promises.push(red_agate_util_modules_io_FileFetcher__WEBPACK_IMPORTED_MODULE_4__["FileFetcher"].fetchLocation(red_agate_util_modules_io_Uri__WEBPACK_IMPORTED_MODULE_6__["Uri"].join(this.props.src, m[1])).then(fmntResult => {
                  // Warning: Don't insert newlines to base64 encoded font!
                  // Fonts will not rendered if you insert it.
                  fragments[i] = fragments[i].replace(reReplace, `url(${`data:${fmntResult.contentType};charset=utf-8;base64,` + red_agate_util_modules_convert_Base64__WEBPACK_IMPORTED_MODULE_2__["Base64"].encode(fmntResult.data)})`);
                }));
                indexes.push(i);
              }
            }

            Promise.all(promises).then(() => {
              this.content = fragments.join('');
              resolve();
            }).catch(e => {
              red_agate_util_modules_io_Logger__WEBPACK_IMPORTED_MODULE_5__["Logger"].log("Style#defer:catch(1):" + e);
              reject(e);
            });
          }).catch(e => {
            red_agate_util_modules_io_Logger__WEBPACK_IMPORTED_MODULE_5__["Logger"].log("Style#defer:catch(2):" + e);
            reject(e);
          });
        } catch (e) {
          red_agate_util_modules_io_Logger__WEBPACK_IMPORTED_MODULE_5__["Logger"].log("Style#defer:catch(3):" + e);
          reject(e);
        }
      });
      return promise;
    }
  }

  render(contexts, children) {
    let r = '';

    if (this.props.noDownload) {
      r = `<style type="text/css">@import url("${this.props.src}");</style>`;
    } else {
      r = `<style${_red_agate__WEBPACK_IMPORTED_MODULE_0__["htmlAttributesRenderer"](this.props, new Set(['src'])).attrs}>${this.content}</style>`;
    }

    const canvas = this.getContext(contexts, _tags_Shape__WEBPACK_IMPORTED_MODULE_1__["CONTEXT_SVG_CANVAS"]);

    if (canvas) {
      canvas.registerCustomAsset(r);
      return '';
    } else {
      return r;
    }
  }

}
const Font = Style;
class SingleFont extends _red_agate__WEBPACK_IMPORTED_MODULE_0__["RedAgatePhantomComponent"] {
  constructor(props) {
    super(props);
    this.content = '';
  }

  defer() {
    if (this.props.src === void 0 || this.props.src === null || this.props.src === '') {
      return Promise.resolve();
    } else if (this.props.noDownload) {
      return Promise.resolve();
    } else {
      const promise = new Promise((resolve, reject) => {
        try {
          red_agate_util_modules_io_FileFetcher__WEBPACK_IMPORTED_MODULE_4__["FileFetcher"].fetchLocation(this.props.src).then(result => {
            this.content = `data:${result.contentType};charset=utf-8;base64,` + red_agate_util_modules_convert_Base64__WEBPACK_IMPORTED_MODULE_2__["Base64"].encode(result.data);
            resolve();
          }).catch(e => {
            red_agate_util_modules_io_Logger__WEBPACK_IMPORTED_MODULE_5__["Logger"].log("SingleFont#defer:catch:" + e);
            reject(e);
          });
        } catch (e) {
          red_agate_util_modules_io_Logger__WEBPACK_IMPORTED_MODULE_5__["Logger"].log("SingleFont#defer:catch:" + e);
          reject(e);
        }
      });
      return promise;
    }
  }

  render(contexts, children) {
    let r = '';

    if (this.props.noDownload) {} else {}

    r = `<style type="text/css">@font-face{font-family:${this.props.fontFamily};font-style:${this.props.fontStyle};font-weight:${this.props.fontWeight};src:${this.props.localNames ? this.props.localNames.map(x => ` local(${x})`) : ''} url(${this.props.noDownload ? this.props.src : this.content});unicode-range:${this.props.unicodeRange};}</style>`;
    const canvas = this.getContext(contexts, _tags_Shape__WEBPACK_IMPORTED_MODULE_1__["CONTEXT_SVG_CANVAS"]);

    if (canvas) {
      canvas.registerCustomAsset(r);
      return '';
    } else {
      return r;
    }
  }

}

/***/ }),

/***/ "../red-agate/modules/red-agate/data.js":
/*!**********************************************!*\
  !*** ../red-agate/modules/red-agate/data.js ***!
  \**********************************************/
/*! exports provided: Query, query */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Query", function() { return Query; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "query", function() { return query; });
// Copyright (c) 2017, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln
class Query {
  constructor(data) {
    this.data = data;
  }

  orderBy(condition) {
    let fn;

    if (Array.isArray(condition)) {
      fn = (x, y) => {
        for (const c of condition) {
          if (typeof c === 'string') {
            if (x[c] > y[c]) return 1;
            if (x[c] < y[c]) return -1;
          } else {
            const desc = c[1] === 'desc' ? -1 : 1;
            if (x[c[0]] > y[c[0]]) return 1 * desc;
            if (x[c[0]] < y[c[0]]) return -1 * desc;
          }
        }

        return 0;
      };
    } else {
      fn = condition;
    }

    return new Query(this.data.slice(0).sort(fn));
  }

  groupBy(condition) {
    let fn;

    if (Array.isArray(condition)) {
      fn = (x, y) => {
        for (const c of condition) {
          if (x[c] !== y[c]) return false;
        }

        return true;
      };
    } else {
      fn = condition;
    }

    const r = [];
    let start = 0;
    let i = 1;

    for (; i < this.data.length; i++) {
      if (!fn(this.data[start], this.data[i], i, this.data)) {
        r.push(this.data.slice(start, i));
        start = i;
      }
    }

    r.push(this.data.slice(start, i));
    return new Query(r);
  }

  groupEvery(n) {
    if (typeof n === 'number') {
      return this.groupBy((a, b, index, array) => {
        if (index % n === 0) return false;
        return true;
      });
    } else {
      const w = Object.assign({
        first: n.intermediate,
        last: n.intermediate
      }, n);
      const r = this.groupBy((a, b, index, array) => {
        if (w.single >= array.length) {
          if (index % w.single === 0) return false;
          return true;
        } else if (index <= w.first) {
          if (index % w.first === 0) return false;
          return true;
        } else {
          if ((index - w.first) % w.intermediate === 0) return false;
          return true;
        }
      });

      if (r.data.length === 1) {
        if (w.single < r.data[0].length) {
          r.data.push([]);
        }
      } else {
        if (w.first < r.data[0].length) {
          // case of w.first === 0
          r.data.unshift([]);
        }
      }

      if (r.data.length > 1) {
        if (r.data[r.data.length - 1].length > w.last) {
          r.data.push([]);
        }
      }

      return r;
    }
  }

  where(fn) {
    return new Query(this.data.filter(fn));
  }

  select(fn) {
    return fn ? this.data.map(fn) : this.data;
  }

}
function query(data) {
  return new Query(data);
}

/***/ }),

/***/ "../red-agate/modules/red-agate/html.js":
/*!**********************************************!*\
  !*** ../red-agate/modules/red-agate/html.js ***!
  \**********************************************/
/*! exports provided: Html4_01_Strict, Html4_01_Transitional, Html4_01_Frameset, Xhtml1_0_Strict, Xhtml1_0_Transitional, Xhtml1_0_Frameset, Html5, Xml, HtmlImposition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Html4_01_Strict", function() { return Html4_01_Strict; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Html4_01_Transitional", function() { return Html4_01_Transitional; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Html4_01_Frameset", function() { return Html4_01_Frameset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Xhtml1_0_Strict", function() { return Xhtml1_0_Strict; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Xhtml1_0_Transitional", function() { return Xhtml1_0_Transitional; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Xhtml1_0_Frameset", function() { return Xhtml1_0_Frameset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Html5", function() { return Html5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Xml", function() { return Xml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtmlImposition", function() { return HtmlImposition; });
/* harmony import */ var _red_agate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./red-agate */ "../red-agate/modules/red-agate/red-agate.js");
// Copyright (c) 2017, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln

/** @jsx RedAgate.createElement */
 // tslint:disable-next-line:class-name

class Html4_01_Strict extends _red_agate__WEBPACK_IMPORTED_MODULE_0__["RedAgatePhantomComponent"] {
  constructor(props) {
    super(props);
  }

  render(contexts, children) {
    const x = _red_agate__WEBPACK_IMPORTED_MODULE_0__["htmlAttributesRenderer"](this.props);
    return `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"><html${x.attrs}>${x.children}${children}</html>`;
  }

} // tslint:disable-next-line:class-name

class Html4_01_Transitional extends _red_agate__WEBPACK_IMPORTED_MODULE_0__["RedAgatePhantomComponent"] {
  constructor(props) {
    super(props);
  }

  render(contexts, children) {
    const x = _red_agate__WEBPACK_IMPORTED_MODULE_0__["htmlAttributesRenderer"](this.props);
    return `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"><html${x.attrs}>${x.children}${children}</html>`;
  }

} // tslint:disable-next-line:class-name

class Html4_01_Frameset extends _red_agate__WEBPACK_IMPORTED_MODULE_0__["RedAgatePhantomComponent"] {
  constructor(props) {
    super(props);
  }

  render(contexts, children) {
    const x = _red_agate__WEBPACK_IMPORTED_MODULE_0__["htmlAttributesRenderer"](this.props);
    return `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd"><html${x.attrs}>${x.children}${children}</html>`;
  }

} // tslint:disable-next-line:class-name

class Xhtml1_0_Strict extends _red_agate__WEBPACK_IMPORTED_MODULE_0__["RedAgatePhantomComponent"] {
  constructor(props) {
    super(props);
  }

  render(contexts, children) {
    const x = _red_agate__WEBPACK_IMPORTED_MODULE_0__["htmlAttributesRenderer"](this.props);
    return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"><html${x.attrs}>${x.children}${children}</html>`;
  }

} // tslint:disable-next-line:class-name

class Xhtml1_0_Transitional extends _red_agate__WEBPACK_IMPORTED_MODULE_0__["RedAgatePhantomComponent"] {
  constructor(props) {
    super(props);
  }

  render(contexts, children) {
    const x = _red_agate__WEBPACK_IMPORTED_MODULE_0__["htmlAttributesRenderer"](this.props);
    return `<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html${x.attrs}>${x.children}${children}</html>`;
  }

} // tslint:disable-next-line:class-name

class Xhtml1_0_Frameset extends _red_agate__WEBPACK_IMPORTED_MODULE_0__["RedAgatePhantomComponent"] {
  constructor(props) {
    super(props);
  }

  render(contexts, children) {
    const x = _red_agate__WEBPACK_IMPORTED_MODULE_0__["htmlAttributesRenderer"](this.props);
    return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd"><html${x.attrs}>${x.children}${children}</html>`;
  }

}
class Html5 extends _red_agate__WEBPACK_IMPORTED_MODULE_0__["RedAgatePhantomComponent"] {
  constructor(props) {
    super(props);
  }

  render(contexts, children) {
    const x = _red_agate__WEBPACK_IMPORTED_MODULE_0__["htmlAttributesRenderer"](this.props);
    return `<!DOCTYPE html><html${x.attrs}>${x.children}${children}</html>`;
  }

}
class Xml extends _red_agate__WEBPACK_IMPORTED_MODULE_0__["RedAgatePhantomComponent"] {
  constructor(props) {
    super(props);
  }

  render(contexts, children) {
    return `<?xml version="${typeof this.props.version === 'string' ? this.props.version : '1.0'}" encoding="${typeof this.props.encoding === 'string' ? this.props.encoding : 'UTF-8'}"?>${children}`;
  }

}
class HtmlImposition extends _red_agate__WEBPACK_IMPORTED_MODULE_0__["RedAgateComponent"] {
  constructor(props) {
    super(props);
  }

  transform() {
    const repeater = Array.isArray(this.props.children) ? this.props.children.find(x => typeof x === 'function') : this.props.children;
    const a = [];
    const scope = Object.assign({}, this.props.scope || {});

    for (let i = 0; i < this.props.items.length; i++) {
      a.push(_red_agate__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        style: {
          position: 'absolute',
          left: this.props.paperWidth / this.props.cols * (i % this.props.cols),
          top: this.props.paperHeight / this.props.rows * Math.floor(i / this.props.cols)
        }
      }, repeater(this.props.items[i], i, this.props.items, scope)));
    }

    return a;
  }

}

/***/ }),

/***/ "../red-agate/modules/red-agate/index.js":
/*!***********************************************!*\
  !*** ../red-agate/modules/red-agate/index.js ***!
  \***********************************************/
/*! exports provided: RedAgateComponent, RedAgatePhantomComponent, createElement, cloneElement, createElementFromComponentInstance, transform, elementStyleRenderer, htmlAttributesRenderer, htmlRenderer, renderAsHtml, renderAsHtml_noDefer, render, renderOnAwsLambda, renderOnExpress, Fragment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _red_agate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./red-agate */ "../red-agate/modules/red-agate/red-agate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RedAgateComponent", function() { return _red_agate__WEBPACK_IMPORTED_MODULE_0__["RedAgateComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RedAgatePhantomComponent", function() { return _red_agate__WEBPACK_IMPORTED_MODULE_0__["RedAgatePhantomComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return _red_agate__WEBPACK_IMPORTED_MODULE_0__["createElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return _red_agate__WEBPACK_IMPORTED_MODULE_0__["cloneElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createElementFromComponentInstance", function() { return _red_agate__WEBPACK_IMPORTED_MODULE_0__["createElementFromComponentInstance"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transform", function() { return _red_agate__WEBPACK_IMPORTED_MODULE_0__["transform"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "elementStyleRenderer", function() { return _red_agate__WEBPACK_IMPORTED_MODULE_0__["elementStyleRenderer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "htmlAttributesRenderer", function() { return _red_agate__WEBPACK_IMPORTED_MODULE_0__["htmlAttributesRenderer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "htmlRenderer", function() { return _red_agate__WEBPACK_IMPORTED_MODULE_0__["htmlRenderer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "renderAsHtml", function() { return _red_agate__WEBPACK_IMPORTED_MODULE_0__["renderAsHtml"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "renderAsHtml_noDefer", function() { return _red_agate__WEBPACK_IMPORTED_MODULE_0__["renderAsHtml_noDefer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _red_agate__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "renderOnAwsLambda", function() { return _red_agate__WEBPACK_IMPORTED_MODULE_0__["renderOnAwsLambda"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "renderOnExpress", function() { return _red_agate__WEBPACK_IMPORTED_MODULE_0__["renderOnExpress"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Fragment", function() { return _red_agate__WEBPACK_IMPORTED_MODULE_0__["Fragment"]; });

// Copyright (c) 2017, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln


/***/ }),

/***/ "../red-agate/modules/red-agate/printing.js":
/*!**************************************************!*\
  !*** ../red-agate/modules/red-agate/printing.js ***!
  \**************************************************/
/*! exports provided: printerMarksDefault, PrinterMarks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printerMarksDefault", function() { return printerMarksDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrinterMarks", function() { return PrinterMarks; });
/* harmony import */ var _tags_Shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tags/Shape */ "../red-agate/modules/red-agate/tags/Shape.js");
// Copyright (c) 2017, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln

const printerMarksDefault = Object.assign({}, _tags_Shape__WEBPACK_IMPORTED_MODULE_0__["shapePropsDefault"], {
  fill: false,
  stroke: true,
  strokeColor: "black",
  lineWidth: 0.105834,
  width: 210,
  height: 297,
  cropMarkLength: 9,
  bleedMarks: true,
  northBleed: 3,
  southBleed: 3,
  eastBleed: 3,
  westBleed: 3,
  centerMarks: true,
  centerMarkArmLength: 15,
  centerMarkArmMargin: 3
});
class PrinterMarks extends _tags_Shape__WEBPACK_IMPORTED_MODULE_0__["Shape"] {
  constructor(props) {
    super(Object.assign({}, printerMarksDefault, props));
  }

  render(contexts, children) {
    const c = this.getContext(contexts, _tags_Shape__WEBPACK_IMPORTED_MODULE_0__["CONTEXT_SVG_CANVAS"]);
    const p = this.props; // Crop Marks

    {
      // H
      c.moveTo(-p.westBleed, 0);
      c.lineTo(-p.westBleed - p.cropMarkLength, 0);
      c.moveTo(-p.westBleed, p.height);
      c.lineTo(-p.westBleed - p.cropMarkLength, p.height);
      c.moveTo(p.width + p.eastBleed, 0);
      c.lineTo(p.width + p.eastBleed + p.cropMarkLength, 0);
      c.moveTo(p.width + p.eastBleed, p.height);
      c.lineTo(p.width + p.eastBleed + p.cropMarkLength, p.height); // V

      c.moveTo(0, -p.northBleed);
      c.lineTo(0, -p.northBleed - p.cropMarkLength);
      c.moveTo(p.width, -p.northBleed);
      c.lineTo(p.width, -p.northBleed - p.cropMarkLength);
      c.moveTo(0, p.height + p.southBleed);
      c.lineTo(0, p.height + p.southBleed + p.cropMarkLength);
      c.moveTo(p.width, p.height + p.southBleed);
      c.lineTo(p.width, p.height + p.southBleed + p.cropMarkLength);
    } // Bleed Marks

    if (p.bleedMarks) {
      // H
      c.moveTo(0, -p.northBleed);
      c.lineTo(-p.westBleed - p.cropMarkLength, -p.northBleed);
      c.moveTo(0, p.height + p.southBleed);
      c.lineTo(-p.westBleed - p.cropMarkLength, p.height + p.southBleed);
      c.moveTo(p.width, -p.northBleed);
      c.lineTo(p.width + p.eastBleed + p.cropMarkLength, -p.northBleed);
      c.moveTo(p.width, p.height + p.southBleed);
      c.lineTo(p.width + p.eastBleed + p.cropMarkLength, p.height + p.southBleed); // V

      c.moveTo(-p.westBleed, 0);
      c.lineTo(-p.westBleed, -p.northBleed - p.cropMarkLength);
      c.moveTo(p.width + p.eastBleed, 0);
      c.lineTo(p.width + p.eastBleed, -p.northBleed - p.cropMarkLength);
      c.moveTo(-p.westBleed, p.height);
      c.lineTo(-p.westBleed, p.height + p.southBleed + p.cropMarkLength);
      c.moveTo(p.width + p.eastBleed, p.height);
      c.lineTo(p.width + p.eastBleed, p.height + p.southBleed + p.cropMarkLength);
    } // Center Marks


    if (p.centerMarks) {
      // H
      c.moveTo(p.width / 2, -p.northBleed);
      c.lineTo(p.width / 2, -p.northBleed - p.cropMarkLength);
      c.moveTo(p.width / 2, p.height + p.southBleed);
      c.lineTo(p.width / 2, p.height + p.southBleed + p.cropMarkLength); // H arms

      c.moveTo(p.width / 2 - p.centerMarkArmLength / 2, -p.northBleed - p.centerMarkArmMargin);
      c.lineTo(p.width / 2 + p.centerMarkArmLength / 2, -p.northBleed - p.centerMarkArmMargin);
      c.moveTo(p.width / 2 - p.centerMarkArmLength / 2, p.height + p.southBleed + p.centerMarkArmMargin);
      c.lineTo(p.width / 2 + p.centerMarkArmLength / 2, p.height + p.southBleed + p.centerMarkArmMargin); // V

      c.moveTo(-p.westBleed, p.height / 2);
      c.lineTo(-p.westBleed - p.cropMarkLength, p.height / 2);
      c.moveTo(p.width + p.eastBleed, p.height / 2);
      c.lineTo(p.width + p.eastBleed + p.cropMarkLength, p.height / 2); // V arms

      c.moveTo(-p.westBleed - p.centerMarkArmMargin, p.height / 2 - p.centerMarkArmLength / 2);
      c.lineTo(-p.westBleed - p.centerMarkArmMargin, p.height / 2 + p.centerMarkArmLength / 2);
      c.moveTo(p.width + p.eastBleed + p.centerMarkArmMargin, p.height / 2 - p.centerMarkArmLength / 2);
      c.lineTo(p.width + p.eastBleed + p.centerMarkArmMargin, p.height / 2 + p.centerMarkArmLength / 2);
    }

    if (p.hFold) {
      let x = 0;

      for (const dx of p.hFold) {
        x += dx;
        c.moveTo(x, -p.northBleed);
        c.lineTo(x, -p.northBleed - p.cropMarkLength);
        c.moveTo(x, p.height + p.southBleed);
        c.lineTo(x, p.height + p.southBleed + p.cropMarkLength);
      }
    }

    if (p.vFold) {
      let y = 0;

      for (const dy of p.vFold) {
        y += dy;
        c.moveTo(-p.westBleed, y);
        c.lineTo(-p.westBleed - p.cropMarkLength, y);
        c.moveTo(p.width + p.eastBleed, y);
        c.lineTo(p.width + p.eastBleed + p.cropMarkLength, y);
      }
    }

    return ``;
  }

}

/***/ }),

/***/ "../red-agate/modules/red-agate/red-agate.js":
/*!***************************************************!*\
  !*** ../red-agate/modules/red-agate/red-agate.js ***!
  \***************************************************/
/*! exports provided: RedAgateComponent, RedAgatePhantomComponent, createElement, cloneElement, createElementFromComponentInstance, transform, elementStyleRenderer, htmlAttributesRenderer, htmlRenderer, renderAsHtml, renderAsHtml_noDefer, render, renderOnAwsLambda, renderOnExpress, Fragment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedAgateComponent", function() { return RedAgateComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedAgatePhantomComponent", function() { return RedAgatePhantomComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return cloneElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElementFromComponentInstance", function() { return createElementFromComponentInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transform", function() { return transform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementStyleRenderer", function() { return elementStyleRenderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "htmlAttributesRenderer", function() { return htmlAttributesRenderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "htmlRenderer", function() { return htmlRenderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderAsHtml", function() { return renderAsHtml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderAsHtml_noDefer", function() { return renderAsHtml_noDefer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderOnAwsLambda", function() { return renderOnAwsLambda; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderOnExpress", function() { return renderOnExpress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fragment", function() { return Fragment; });
/* harmony import */ var red_agate_util_modules_convert_Escape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! red-agate-util/modules/convert/Escape */ "../red-agate-util/modules/convert/Escape.js");
// Copyright (c) 2017, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln

const HTML_NO_CLOSE_TAGS = new Set(['area', 'base', 'br', 'col', 'command', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr']);
class RedAgateComponent {
  // tslint:disable-next-line:no-object-literal-type-assertion
  constructor(props = {}) {
    this.props = props;
    this.savedContexts = new Map();
  }

  defer() {
    return Promise.resolve();
  }

  setContext(contexts, key, value) {
    if (this.savedContexts.has(key)) {
      throw new Error(`RedAgateComponent#setContext: the key '${key}' has already set by myself.`);
    }

    if (contexts.has(key)) {
      contexts.set(key, contexts.get(key));
    }

    contexts.set(key, value);
  }

  unsetContext(contexts, key) {
    contexts.delete(key);

    if (this.savedContexts.has(key)) {
      contexts.set(key, this.savedContexts.get(key));
      this.savedContexts.delete(key);
    }
  }

  getContext(contexts, key) {
    return contexts.get(key);
  }

}
class RedAgatePhantomComponent extends RedAgateComponent {
  transform() {
    return this.props.children !== null && this.props.children !== void 0 ? this.props.children : [];
  }

}

class RedAgateSimpleComponent extends RedAgateComponent {
  constructor(fn, props) {
    super(props);
    this.fn = fn;
  }

  transform() {
    return this.fn(this.props);
  }

}

function getPromises(promises, element) {
  if (element === null || element === void 0) {
    return promises;
  }

  if (Array.isArray(element)) {
    element.forEach(x => getPromises(promises, x));
    return promises;
  }

  if (typeof element !== 'object') {
    return promises;
  }

  if (element.component && element.component.defer) {
    const el = element;
    const p = el.component.defer();
    if (p) promises.push(p);
  }

  if (element.children) {
    getPromises(promises, element.children);
  }

  return promises;
}

function buildElementProps(props, children) {
  if (children) {
    if (children.length === 1) {
      props.children = children[0];
    } else if (children.length > 1) {
      props.children = children;
    }

    let refs = {};
    let hasRefs = false;

    for (const c of children) {
      if (c === null || c === void 0) {// do nothing
      } else if (Array.isArray(c)) {// do nothing
      } else if (typeof c !== 'object') {// do nothing
      } else {
        if (c.props) {
          const p = c.props;

          if (typeof p.refs === 'object') {
            hasRefs = true;
            refs = Object.assign(refs, p.refs);
          }

          if (typeof p.ref === 'string') {
            hasRefs = true;
            refs[p.ref] = c;
          }
        }
      }
    }

    if (hasRefs) {
      props.refs = refs;
    }
  }

  return props;
}

function createElement(type, props, ...children) {
  // tslint:disable-next-line:no-object-literal-type-assertion
  props = buildElementProps(props || {}, children);

  if (typeof type === 'function') {
    return {
      type,
      props,
      nodeId: null,
      children,
      // ES6 arrow function have no prototype.
      component: type.prototype && type.prototype.earlyConstruct && type.prototype.transform ? new type(props) : null
    };
  }

  if (typeof type === 'string') {
    return {
      type,
      props,
      nodeId: null,
      children,
      component: null
    };
  }

  throw new Error('createElement receives invalid parameter type.');
}
function cloneElement(el) {
  let props = Object.assign({}, el.props || {});
  delete props.__nodeId;
  const children = Array.isArray(el.children) ? el.children.slice(0) : el.children;
  props = buildElementProps(props, children);
  return {
    type: el.type,
    props,
    nodeId: null,
    children,
    component: null
  };
}
function createElementFromComponentInstance(c) {
  return {
    type: c.constructor,
    props: c.props,
    nodeId: null,
    children: Array.isArray(c.props.children) ? c.props.children : [],
    component: c
  };
}

function constructComponent(el, transformContext) {
  if (el.nodeId === null || el.nodeId === void 0) {
    el.nodeId = transformContext.counter++;
    el.props.__nodeId = el.nodeId;
  }

  if (el.component === null || el.component === void 0) {
    if (typeof el.type === 'function') {
      // ES6 arrow function have no prototype.
      el.component = el.type.prototype && el.type.prototype.transform ? new el.type(el.props) : new RedAgateSimpleComponent(el.type, el.props);
    }
  }

  return el;
}

function duplicateElement(el) {
  return {
    type: el.type,
    props: el.props,
    nodeId: el.nodeId,
    children: Array.isArray(el.children) ? el.children.slice(0) : el.children,
    component: el.component
  };
}

function transform(element, transformContext) {
  if (!transformContext) {
    transformContext = {
      counter: 0
    };
  }

  if (element === null || element === void 0) {
    return element;
  } else if (Array.isArray(element)) {
    return element.map(x => transform(x, transformContext)).filter(x => x !== null && x !== void 0);
  } else if (typeof element !== 'object') {
    return element;
  }

  const el = duplicateElement(constructComponent(element, transformContext));

  if (el.component && el.component.transform) {
    const z = el.component.transform();

    if (z === null || z === void 0) {
      el.children = [];
    } else if (Array.isArray(z)) {
      el.children = z;
    } else if (typeof z !== 'object') {
      el.children = [z];
    } else {
      el.children = [z];
    }
  } else if (!el.children) {
    el.children = [];
  }

  el.children = el.children.map(x => transform(x, transformContext)).filter(x => x !== null && x !== void 0);
  return el;
}

function camelToKebabCase(s) {
  return s.replace(/([a-z0-9])([A-Z])/g, (match, p1, p2) => `${p1}-${p2.toLowerCase()}`);
}

function elementStyleRenderer(style) {
  return typeof style === 'string' ? style : Object.getOwnPropertyNames(style).filter(x => style[x] !== null && style[x] !== void 0).map(x => `${red_agate_util_modules_convert_Escape__WEBPACK_IMPORTED_MODULE_0__["Escape"].html(camelToKebabCase(x))}:${red_agate_util_modules_convert_Escape__WEBPACK_IMPORTED_MODULE_0__["Escape"].html(style[x])};`).join('');
}
function htmlAttributesRenderer(props, omitKeys, whiteListKeys) {
  let attrs = '';
  let children = '';

  const formatArrayProp = prop => {
    if (Array.isArray(prop)) {
      return prop.map(x => red_agate_util_modules_convert_Escape__WEBPACK_IMPORTED_MODULE_0__["Escape"].html(x.toString())).filter(x => x !== null && x !== void 0).join(' ');
    } else {
      if (prop === null || prop === void 0) {
        return '';
      } else switch (typeof prop) {
        case 'function':
        case 'object':
        case 'symbol':
          return '';

        default:
          return String(prop);
      }
    }
  };

  for (const key of Object.getOwnPropertyNames(props)) {
    switch (key) {
      case 'styleClass':
      case 'className':
      case 'class':
        attrs += ` class="${formatArrayProp(props[key])}"`;
        break;

      case 'style':
        attrs += ` style="${elementStyleRenderer(props.style)}"`;
        break;

      case 'children':
      case '__nodeId':
        break;

      case 'dangerouslySetInnerHTML':
        children += props[key].__html;
        break;

      case 'setInnerText':
        children += red_agate_util_modules_convert_Escape__WEBPACK_IMPORTED_MODULE_0__["Escape"].html(props[key].__text).replace(/\r?\n/g, '<br/>').replace(/\r/g, '<br/>');
        break;

      default:
        if (omitKeys && omitKeys.has(key)) {// no output
        } else if (whiteListKeys && !whiteListKeys.has(key) && key !== 'id') {// no output
        } else if (props[key] === null || props[key] === void 0 || props[key] === false) {// no output
        } else if (props[key] === true) {
          attrs += ` ${red_agate_util_modules_convert_Escape__WEBPACK_IMPORTED_MODULE_0__["Escape"].html(key)}`;
        } else {
          attrs += ` ${red_agate_util_modules_convert_Escape__WEBPACK_IMPORTED_MODULE_0__["Escape"].html(key)}="${formatArrayProp(props[key])}"`;
        }

    }
  }

  return {
    attrs,
    children
  };
}
function htmlRenderer(element, contexts) {
  if (element === null || element === void 0) {
    return '';
  }

  if (Array.isArray(element)) {
    return element.map(x => htmlRenderer(x, contexts)).join('');
  }

  if (typeof element !== 'object') {
    return red_agate_util_modules_convert_Escape__WEBPACK_IMPORTED_MODULE_0__["Escape"].html(element.toString());
  }

  if (!element.props) {
    return red_agate_util_modules_convert_Escape__WEBPACK_IMPORTED_MODULE_0__["Escape"].html(element.toString());
  }

  const el = element; // tslint:disable-next-line:prefer-const

  let {
    attrs,
    children
  } = htmlAttributesRenderer(el.props);

  if (el.component && el.component.beforeRender) {
    el.component.beforeRender(contexts);
  }

  if (el.children !== null && el.children !== void 0) {
    children += el.children.map(x => htmlRenderer(x, contexts)).join('');
  }

  let r = '';

  if (el.component && el.component.render) {
    r = el.component.render(contexts, children);
  } else if (typeof el.type === 'string') {
    const type = red_agate_util_modules_convert_Escape__WEBPACK_IMPORTED_MODULE_0__["Escape"].html(el.type);

    if ((children === '' || children === null || children === void 0) && HTML_NO_CLOSE_TAGS.has(type)) {
      r = `<${type}${attrs}/>`;
    } else {
      r = `<${type}${attrs}>${children}</${type}>`;
    }
  } else {
    r = children;
  }

  if (el.component && el.component.afterRender) {
    el.component.afterRender(contexts);
  }

  return r;
}
function renderAsHtml(element) {
  const contexts = new Map();
  const transformContext = {
    counter: 0
  };
  const z = transform(element, transformContext);
  return Promise.all(getPromises([], z)).then(d => htmlRenderer(z, contexts));
}
function renderAsHtml_noDefer(element) {
  const contexts = new Map();
  const transformContext = {
    counter: 0
  };
  const z = transform(element, transformContext);
  return htmlRenderer(z, contexts);
}
function render(element, container, callback) {
  renderAsHtml(element).then(html => {
    container.innerHTML = html;
    if (callback) callback(html, null);
  }).catch(error => {
    if (callback) callback(null, error);
  });
}
function renderOnAwsLambda(element, callback) {
  renderAsHtml(element).then(html => {
    callback(null, html);
  }).catch(error => {
    callback(error, null);
  });
}
function renderOnExpress(element, req, res, headers) {
  renderAsHtml(element).then(content => {
    if (headers) {
      headers.forEach(x => res.set(x[0], typeof x[1] === 'string' ? x[1] : void 0));
    }

    res.send(content);
  }).catch(error => {
    console.error(JSON.stringify(error));
    res.status(500).send('');
  });
}
class Fragment extends RedAgatePhantomComponent {
  constructor(props) {
    super(props);
  }

}

/***/ }),

/***/ "../red-agate/modules/red-agate/renderer.js":
/*!**************************************************!*\
  !*** ../red-agate/modules/red-agate/renderer.js ***!
  \**************************************************/
/*! exports provided: HtmlRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtmlRenderer", function() { return HtmlRenderer; });
/* harmony import */ var red_agate_util_modules_convert_Base64__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! red-agate-util/modules/convert/Base64 */ "../red-agate-util/modules/convert/Base64.js");
/* harmony import */ var red_agate_util_modules_convert_TextEncoding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! red-agate-util/modules/convert/TextEncoding */ "../red-agate-util/modules/convert/TextEncoding.js");
/* harmony import */ var red_agate_util_modules_runtime_require_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! red-agate-util/modules/runtime/require-dynamic */ "../red-agate-util/modules/runtime/require-dynamic.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app */ "../red-agate/modules/red-agate/app.js");
// Copyright (c) 2017, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};





class HtmlRenderer {
  static get rendererPackageName() {
    return HtmlRenderer._rendererPackageName;
  }

  static set rendererPackageName(name) {
    HtmlRenderer._rendererPackageName = name;
  }

  static get launchOptions() {
    return HtmlRenderer._launchOptions;
  }

  static set launchOptions(opts) {
    HtmlRenderer._launchOptions = opts;
  }

  static writeToTempFile(html, tmpPath) {
    return __awaiter(this, void 0, void 0, function* () {
      const path = Object(red_agate_util_modules_runtime_require_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])('path');
      const fs = Object(red_agate_util_modules_runtime_require_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])('fs');
      const util = Object(red_agate_util_modules_runtime_require_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])('util');

      for (let i = 0; i < 3; i++) {
        let tmp = tmpPath;

        if (tmp.includes('*')) {
          const crypto = Object(red_agate_util_modules_runtime_require_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])('crypto');
          tmp = tmp.replace(/\*/g, red_agate_util_modules_convert_Base64__WEBPACK_IMPORTED_MODULE_0__["Base64"].encode(crypto.randomBytes(6)).replace(/\+/g, 'A').replace(/\//g, 'B'));
        }

        let url = '';
        const tmpFullPath = path.resolve(tmp);
        const fd = yield util.promisify(fs.open)(tmpFullPath, 'ax');

        try {
          yield util.promisify(fs.writeFile)(fd, html, 'utf8');
          let p = encodeURI(tmpFullPath.replace(/\\/g, '/'));

          if (!p.startsWith('/')) {
            // Windows absolute paths except UNC paths.
            p = '/' + p;
          }

          url = 'file://' + p;
        } finally {
          yield util.promisify(fs.close)(fd);
        }

        return {
          tmpFullPath,
          url
        };
      }

      throw new Error("HtmlRenderer#writeToTempFile: Can't create a temp file.");
    });
  }

  static _toPdf(html, navigateOptions, pdfOptions, tmpPath) {
    return __awaiter(this, void 0, void 0, function* () {
      const puppeteer = Object(red_agate_util_modules_runtime_require_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlRenderer._rendererPackageName);
      let buffer = null;
      let browser = null;
      let tmpFullPath = '';
      let url = '';

      try {
        if (tmpPath) {
          ({
            tmpFullPath,
            url
          } = yield HtmlRenderer.writeToTempFile(html, tmpPath));
        } else {
          url = 'data:text/html;base64,' + red_agate_util_modules_convert_Base64__WEBPACK_IMPORTED_MODULE_0__["Base64"].encode(red_agate_util_modules_convert_TextEncoding__WEBPACK_IMPORTED_MODULE_1__["TextEncoding"].encodeToUtf8(html));
        }

        browser = yield puppeteer.launch(HtmlRenderer._launchOptions);
        const page = yield browser.newPage();
        yield page.goto(url, Object.assign({
          waitUntil: 'load'
        }, navigateOptions || {}));
        buffer = yield page.pdf(Object.assign({
          width: '210mm',
          height: '297mm',
          printBackground: true
        }, pdfOptions || {}));
      } finally {
        try {
          if (browser) {
            yield browser.close();
          }
        } catch (e) {}

        try {
          if (tmpPath && tmpFullPath) {
            const fs = Object(red_agate_util_modules_runtime_require_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])('fs');
            const util = Object(red_agate_util_modules_runtime_require_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])('util');
            yield util.promisify(fs.unlink)(tmpFullPath);
          }
        } catch (e) {}
      }

      return buffer;
    });
  }

  static toPdf(html, navigateOptions, pdfOptions, tmpPath) {
    return __awaiter(this, void 0, void 0, function* () {
      if (typeof html === 'string') {
        return HtmlRenderer._toPdf(html, navigateOptions, pdfOptions, tmpPath);
      } else {
        return HtmlRenderer._toPdf(yield html, navigateOptions, pdfOptions, tmpPath);
      }
    });
  }

  static toPdfHandler(handler, navigateOptions, pdfOptions, tmpPath) {
    return _app__WEBPACK_IMPORTED_MODULE_3__["Lambdas"].pipe(handler, (html, ctx, cb) => {
      HtmlRenderer.toPdf(html, navigateOptions, pdfOptions, tmpPath).then(buf => cb(null, buf)).catch(err => cb(err, null));
    });
  }

  static _toImage(html, navigateOptions, imageOptions, tmpPath) {
    return __awaiter(this, void 0, void 0, function* () {
      const puppeteer = Object(red_agate_util_modules_runtime_require_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlRenderer._rendererPackageName);
      let buffer = null;
      let browser = null;
      let tmpFullPath = '';
      let url = '';

      try {
        if (tmpPath) {
          ({
            tmpFullPath,
            url
          } = yield HtmlRenderer.writeToTempFile(html, tmpPath));
        } else {
          url = 'data:text/html;base64,' + red_agate_util_modules_convert_Base64__WEBPACK_IMPORTED_MODULE_0__["Base64"].encode(red_agate_util_modules_convert_TextEncoding__WEBPACK_IMPORTED_MODULE_1__["TextEncoding"].encodeToUtf8(html));
        }

        browser = yield puppeteer.launch(HtmlRenderer._launchOptions);
        const page = yield browser.newPage();
        yield page.goto(url, Object.assign({
          waitUntil: 'load'
        }, navigateOptions || {}));
        yield page.emulateMediaType('print');
        buffer = yield page.screenshot(Object.assign({
          type: 'png',
          fullPage: true,
          omitBackground: false
        }, imageOptions || {}));
      } finally {
        try {
          if (browser) {
            yield browser.close();
          }
        } catch (e) {}

        try {
          if (tmpPath && tmpFullPath) {
            const fs = Object(red_agate_util_modules_runtime_require_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])('fs');
            const util = Object(red_agate_util_modules_runtime_require_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])('util');
            yield util.promisify(fs.unlink)(tmpFullPath);
          }
        } catch (e) {}
      }

      return buffer;
    });
  }

  static toImage(html, navigateOptions, imageOptions, tmpPath) {
    return __awaiter(this, void 0, void 0, function* () {
      if (typeof html === 'string') {
        return HtmlRenderer._toImage(html, navigateOptions, imageOptions, tmpPath);
      } else {
        return HtmlRenderer._toImage(yield html, navigateOptions, imageOptions, tmpPath);
      }
    });
  }

  static toImageHandler(handler, navigateOptions, imageOptions, tmpPath) {
    return _app__WEBPACK_IMPORTED_MODULE_3__["Lambdas"].pipe(handler, (html, ctx, cb) => {
      HtmlRenderer.toImage(html, navigateOptions, imageOptions, tmpPath).then(buf => cb(null, buf)).catch(err => cb(err, null));
    });
  }

} // tslint:disable-next-line:variable-name

HtmlRenderer._rendererPackageName = 'puppeteer'; // tslint:disable-next-line:variable-name

HtmlRenderer._launchOptions = void 0;

/***/ }),

/***/ "../red-agate/modules/red-agate/svg.js":
/*!*********************************************!*\
  !*** ../red-agate/modules/red-agate/svg.js ***!
  \*********************************************/
/*! exports provided: Svg, ambientPropsDefault, Ambient, arcPropsDefault, Arc, canvasPropsDefault, Canvas, circlePropsDefault, Circle, curvePropsDefault, Curve, gridLinePropsDefault, GridLine, Group, linePropsDefault, Line, pathPropsDefault, Path, piePropsDefault, Pie, polygonPropsDefault, Polygon, rectPropsDefault, Rect, roundRectPropsDefault, RoundRect, svgAssetFragmentPropsDefault, SvgAssetFragment, svgFragmentPropsDefault, SvgFragment, textPropsDefault, Text, SvgImposition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Svg", function() { return Svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ambientPropsDefault", function() { return ambientPropsDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ambient", function() { return Ambient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arcPropsDefault", function() { return arcPropsDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Arc", function() { return Arc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canvasPropsDefault", function() { return canvasPropsDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Canvas", function() { return Canvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circlePropsDefault", function() { return circlePropsDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Circle", function() { return Circle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "curvePropsDefault", function() { return curvePropsDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Curve", function() { return Curve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridLinePropsDefault", function() { return gridLinePropsDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridLine", function() { return GridLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return Group; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linePropsDefault", function() { return linePropsDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Line", function() { return Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathPropsDefault", function() { return pathPropsDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Path", function() { return Path; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "piePropsDefault", function() { return piePropsDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pie", function() { return Pie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polygonPropsDefault", function() { return polygonPropsDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Polygon", function() { return Polygon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rectPropsDefault", function() { return rectPropsDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rect", function() { return Rect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roundRectPropsDefault", function() { return roundRectPropsDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoundRect", function() { return RoundRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svgAssetFragmentPropsDefault", function() { return svgAssetFragmentPropsDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgAssetFragment", function() { return SvgAssetFragment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svgFragmentPropsDefault", function() { return svgFragmentPropsDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgFragment", function() { return SvgFragment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textPropsDefault", function() { return textPropsDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgImposition", function() { return SvgImposition; });
/* harmony import */ var _red_agate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./red-agate */ "../red-agate/modules/red-agate/red-agate.js");
/* harmony import */ var red_agate_svg_canvas_modules_drawing_canvas_SvgCanvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! red-agate-svg-canvas/modules/drawing/canvas/SvgCanvas */ "../red-agate-svg-canvas/modules/drawing/canvas/SvgCanvas.js");
/* harmony import */ var red_agate_util_modules_convert_TextEncoding__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! red-agate-util/modules/convert/TextEncoding */ "../red-agate-util/modules/convert/TextEncoding.js");
/* harmony import */ var red_agate_util_modules_io_FileFetcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! red-agate-util/modules/io/FileFetcher */ "../red-agate-util/modules/io/FileFetcher.js");
/* harmony import */ var red_agate_util_modules_io_Logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! red-agate-util/modules/io/Logger */ "../red-agate-util/modules/io/Logger.js");
/* harmony import */ var _tags_Shape__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tags/Shape */ "../red-agate/modules/red-agate/tags/Shape.js");
// Copyright (c) 2017, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln

/** @jsx RedAgate.createElement */






class Svg extends _red_agate__WEBPACK_IMPORTED_MODULE_0__["RedAgatePhantomComponent"] {
  constructor(props) {
    super(props);
    this.template = null;

    if (props.template) {
      this.template = props.template;
    }
  }

  defer() {
    if (this.template !== null) {
      return Promise.resolve();
    } else if (this.props.templateUrl === void 0 || this.props.templateUrl === null || this.props.templateUrl === '') {
      return Promise.resolve();
    } else {
      const url = this.props.templateUrl;
      const promise = new Promise((resolve, reject) => {
        try {
          red_agate_util_modules_io_FileFetcher__WEBPACK_IMPORTED_MODULE_3__["FileFetcher"].fetchLocation(url).then(result => {
            this.template = red_agate_util_modules_convert_TextEncoding__WEBPACK_IMPORTED_MODULE_2__["TextEncoding"].decodeUtf8(result.data);
            resolve();
          }).catch(e => {
            red_agate_util_modules_io_Logger__WEBPACK_IMPORTED_MODULE_4__["Logger"].log("Svg#defer:catch:" + e);
            reject(e);
          });
        } catch (e) {
          red_agate_util_modules_io_Logger__WEBPACK_IMPORTED_MODULE_4__["Logger"].log("Svg#defer:catch:" + e);
          reject(e);
        }
      });
      return promise;
    }
  }

  toImgTag() {
    return Object(_tags_Shape__WEBPACK_IMPORTED_MODULE_5__["toImgTag"])(this);
  }

  toElementStyle() {
    return Object(_tags_Shape__WEBPACK_IMPORTED_MODULE_5__["toElementStyle"])(this);
  }

  toDataUrl() {
    return Object(_tags_Shape__WEBPACK_IMPORTED_MODULE_5__["toDataUrl"])(this);
  }

  toSvg() {
    return Object(_tags_Shape__WEBPACK_IMPORTED_MODULE_5__["toSvg"])(this);
  }

  toRendered() {
    return _red_agate__WEBPACK_IMPORTED_MODULE_0__["renderAsHtml_noDefer"](this);
  }

  beforeRender(contexts) {
    this.setContext(contexts, _tags_Shape__WEBPACK_IMPORTED_MODULE_5__["CONTEXT_SVG_CANVAS"], this.template === null ? new red_agate_svg_canvas_modules_drawing_canvas_SvgCanvas__WEBPACK_IMPORTED_MODULE_1__["SvgCanvas"]() : red_agate_svg_canvas_modules_drawing_canvas_SvgCanvas__WEBPACK_IMPORTED_MODULE_1__["SvgCanvas"].fromTemplate(this.template));
  }

  render(contexts, children) {
    const canvas = this.getContext(contexts, _tags_Shape__WEBPACK_IMPORTED_MODULE_5__["CONTEXT_SVG_CANVAS"]);
    return Object(_tags_Shape__WEBPACK_IMPORTED_MODULE_5__["renderSvgCanvas"])(this.props, canvas, this.props.width, this.props.height);
  }

  afterRender(contexts) {
    this.unsetContext(contexts, _tags_Shape__WEBPACK_IMPORTED_MODULE_5__["CONTEXT_SVG_CANVAS"]);
  }

}
const ambientPropsDefault = Object.assign({}, _tags_Shape__WEBPACK_IMPORTED_MODULE_5__["shapePropsDefault"], {});
class Ambient extends _tags_Shape__WEBPACK_IMPORTED_MODULE_5__["Shape"] {
  constructor(props) {
    super(Object.assign({}, ambientPropsDefault, props));
    this.isAmbient = true;
    this.isGroup = false;
  }

  render(contexts, children) {
    return ``;
  }

}
const arcPropsDefault = Object.assign({}, _tags_Shape__WEBPACK_IMPORTED_MODULE_5__["shapePropsDefault"], {
  r: 1,
  startDeg: 0,
  endDeg: 180,
  anticlockwise: true
});
class Arc extends _tags_Shape__WEBPACK_IMPORTED_MODULE_5__["Shape"] {
  constructor(props) {
    super(Object.assign({}, arcPropsDefault, props));
  }

  render(contexts, children) {
    const canvas = this.getContext(contexts, _tags_Shape__WEBPACK_IMPORTED_MODULE_5__["CONTEXT_SVG_CANVAS"]);
    canvas.arc(this.props.r, this.props.r, this.props.r, this.props.startDeg / 180 * Math.PI, this.props.endDeg / 180 * Math.PI, this.props.anticlockwise);
    return ``;
  }

}
const canvasPropsDefault = Object.assign({}, _tags_Shape__WEBPACK_IMPORTED_MODULE_5__["shapePropsDefault"], {});
class Canvas extends _tags_Shape__WEBPACK_IMPORTED_MODULE_5__["Shape"] {
  constructor(props) {
    super(Object.assign({}, canvasPropsDefault, props));
  }

  render(contexts, children) {
    const canvas = this.getContext(contexts, _tags_Shape__WEBPACK_IMPORTED_MODULE_5__["CONTEXT_SVG_CANVAS"]);
    const fn = Array.isArray(this.props.children) ? this.props.children.find(x => typeof x === 'function') : this.props.children;
    fn(canvas);
    return ``;
  }

}
const circlePropsDefault = Object.assign({}, _tags_Shape__WEBPACK_IMPORTED_MODULE_5__["shapePropsDefault"], {
  r: 1,
  anticlockwise: true
});
class Circle extends _tags_Shape__WEBPACK_IMPORTED_MODULE_5__["Shape"] {
  constructor(props) {
    super(Object.assign({}, circlePropsDefault, props));
  }

  render(contexts, children) {
    const canvas = this.getContext(contexts, _tags_Shape__WEBPACK_IMPORTED_MODULE_5__["CONTEXT_SVG_CANVAS"]);
    canvas.arc(this.props.r, this.props.r, this.props.r, 0, 2 * Math.PI, this.props.anticlockwise);
    canvas.closePath();
    return ``;
  }

}
const curvePropsDefault = Object.assign({}, _tags_Shape__WEBPACK_IMPORTED_MODULE_5__["shapePropsDefault"], {
  move: true,
  points: []
});
class Curve extends _tags_Shape__WEBPACK_IMPORTED_MODULE_5__["Shape"] {
  constructor(props) {
    super(Object.assign({}, curvePropsDefault, props));
  }

  render(contexts, children) {
    const canvas = this.getContext(contexts, _tags_Shape__WEBPACK_IMPORTED_MODULE_5__["CONTEXT_SVG_CANVAS"]);
    if (this.props.move) canvas.moveTo(this.props.points[0], this.props.points[1]);

    for (let i = this.props.move ? 2 : 0; i < this.props.points.length; i += 6) {
      canvas.bezierCurveTo(this.props.points[i + 0], this.props.points[i + 1], this.props.points[i + 2], this.props.points[i + 3], this.props.points[i + 4], this.props.points[i + 5]);
    }

    return ``;
  }

}
const gridLinePropsDefault = Object.assign({}, _tags_Shape__WEBPACK_IMPORTED_MODULE_5__["shapePropsDefault"], {
  lineWidth: 0.1,
  fill: false,
  stroke: true,
  strokeColor: "#ccc",
  startX: 0,
  endX: 210,
  startY: 0,
  endY: 296,
  gridSize: 5,
  bleed: 13
});
class GridLine extends _tags_Shape__WEBPACK_IMPORTED_MODULE_5__["Shape"] {
  constructor(props) {
    super(Object.assign({}, gridLinePropsDefault, props));
  }

  render(contexts, children) {
    const props = this.props;
    const canvas = this.getContext(contexts, _tags_Shape__WEBPACK_IMPORTED_MODULE_5__["CONTEXT_SVG_CANVAS"]);
    const m1 = Math.ceil(props.bleed / props.gridSize) * props.gridSize;
    const mX = Math.ceil((props.endX - props.startX + props.bleed) / props.gridSize) * props.gridSize;
    const mY = Math.ceil((props.endY - props.startY + props.bleed) / props.gridSize) * props.gridSize;

    for (let dx = props.startX - m1; dx <= mX; dx += props.gridSize) {
      canvas.moveTo(props.startX + dx, props.startY - m1);
      canvas.lineTo(props.startX + dx, props.startY + mY);
    }

    for (let dy = props.startY - m1; dy <= mY; dy += props.gridSize) {
      canvas.moveTo(props.startX - m1, props.startY + dy);
      canvas.lineTo(props.startX + mX, props.startY + dy);
    }

    canvas.rect(props.startX || 0, props.startY || 0, props.endX - props.startX, props.endY - props.startY);
    return ``;
  }

}
class Group extends _tags_Shape__WEBPACK_IMPORTED_MODULE_5__["Shape"] {
  constructor(props) {
    super(Object.assign({}, {}, props));
    this.isAmbient = true;
  }

  render(contexts, children) {
    return ``;
  }

}
const linePropsDefault = Object.assign({}, _tags_Shape__WEBPACK_IMPORTED_MODULE_5__["shapePropsDefault"], {
  move: true,
  points: []
});
class Line extends _tags_Shape__WEBPACK_IMPORTED_MODULE_5__["Shape"] {
  constructor(props) {
    super(Object.assign({}, linePropsDefault, props));
  }

  render(contexts, children) {
    const canvas = this.getContext(contexts, _tags_Shape__WEBPACK_IMPORTED_MODULE_5__["CONTEXT_SVG_CANVAS"]);
    if (this.props.move) canvas.moveTo(this.props.points[0], this.props.points[1]);

    for (let i = this.props.move ? 2 : 0; i < this.props.points.length; i += 2) {
      canvas.lineTo(this.props.points[i], this.props.points[i + 1]);
    }

    return ``;
  }

}
const pathPropsDefault = Object.assign({}, _tags_Shape__WEBPACK_IMPORTED_MODULE_5__["shapePropsDefault"], {
  close: false,
  clip: false,
  width: 10,
  height: 10,
  paths: []
});
class Path extends _tags_Shape__WEBPACK_IMPORTED_MODULE_5__["Shape"] {
  constructor(props) {
    super(Object.assign({}, pathPropsDefault, props));
  }

  beforeRender(contexts) {
    super.beforeRender(contexts);
    this.setContext(contexts, _tags_Shape__WEBPACK_IMPORTED_MODULE_5__["CONTEXT_SVG_PATH"], true);
  }

  render(contexts, children) {
    return ``;
  }

  afterRender(contexts) {
    this.unsetContext(contexts, _tags_Shape__WEBPACK_IMPORTED_MODULE_5__["CONTEXT_SVG_PATH"]);
    const canvas = this.getContext(contexts, _tags_Shape__WEBPACK_IMPORTED_MODULE_5__["CONTEXT_SVG_CANVAS"]);

    if (canvas) {
      if (this.props.close) {
        canvas.closePath();
      }

      if (this.props.clip) {
        canvas.clip();
      } else {
        this.fillStrokePaths(canvas);
        this.restoreGraphicState(canvas);
      }
    }
  }

}
const piePropsDefault = Object.assign({}, _tags_Shape__WEBPACK_IMPORTED_MODULE_5__["shapePropsDefault"], {
  r: 1,
  startDeg: 0,
  endDeg: 180,
  anticlockwise: true
});
class Pie extends _tags_Shape__WEBPACK_IMPORTED_MODULE_5__["Shape"] {
  constructor(props) {
    super(Object.assign({}, piePropsDefault, props));
  }

  render(contexts, children) {
    const canvas = this.getContext(contexts, _tags_Shape__WEBPACK_IMPORTED_MODULE_5__["CONTEXT_SVG_CANVAS"]);
    canvas.moveTo(this.props.r, this.props.r);
    canvas.arc(this.props.r, this.props.r, this.props.r, this.props.startDeg / 180 * Math.PI, this.props.endDeg / 180 * Math.PI, this.props.anticlockwise);
    canvas.closePath();
    return ``;
  }

}
const polygonPropsDefault = Object.assign({}, _tags_Shape__WEBPACK_IMPORTED_MODULE_5__["shapePropsDefault"], {
  points: []
});
class Polygon extends _tags_Shape__WEBPACK_IMPORTED_MODULE_5__["Shape"] {
  constructor(props) {
    super(Object.assign({}, polygonPropsDefault, props));
  }

  render(contexts, children) {
    const canvas = this.getContext(contexts, _tags_Shape__WEBPACK_IMPORTED_MODULE_5__["CONTEXT_SVG_CANVAS"]);
    canvas.moveTo(this.props.points[0], this.props.points[1]);

    for (let i = 2; i < this.props.points.length; i += 2) {
      canvas.lineTo(this.props.points[i], this.props.points[i + 1]);
    }

    canvas.closePath();
    return ``;
  }

}
const rectPropsDefault = Object.assign({}, _tags_Shape__WEBPACK_IMPORTED_MODULE_5__["shapePropsDefault"], {
  width: 10,
  height: 10
});
class Rect extends _tags_Shape__WEBPACK_IMPORTED_MODULE_5__["Shape"] {
  constructor(props) {
    super(Object.assign({}, rectPropsDefault, props));
  }

  render(contexts, children) {
    const canvas = this.getContext(contexts, _tags_Shape__WEBPACK_IMPORTED_MODULE_5__["CONTEXT_SVG_CANVAS"]);
    canvas.rect(0, 0, this.props.width, this.props.height);
    return ``;
  }

}
const roundRectPropsDefault = Object.assign({}, _tags_Shape__WEBPACK_IMPORTED_MODULE_5__["shapePropsDefault"], {
  width: 10,
  height: 10,
  r: 1
});
class RoundRect extends _tags_Shape__WEBPACK_IMPORTED_MODULE_5__["Shape"] {
  constructor(props) {
    super(Object.assign({}, roundRectPropsDefault, props));
  }

  render(contexts, children) {
    const canvas = this.getContext(contexts, _tags_Shape__WEBPACK_IMPORTED_MODULE_5__["CONTEXT_SVG_CANVAS"]);
    canvas.roundRect(0, 0, this.props.width, this.props.height, this.props.r);
    return ``;
  }

}
const svgAssetFragmentPropsDefault = Object.assign({}, _tags_Shape__WEBPACK_IMPORTED_MODULE_5__["shapePropsDefault"], {});
class SvgAssetFragment extends _tags_Shape__WEBPACK_IMPORTED_MODULE_5__["Shape"] {
  constructor(props) {
    super(Object.assign({}, canvasPropsDefault, props));
  }

  render(contexts, children) {
    const canvas = this.getContext(contexts, _tags_Shape__WEBPACK_IMPORTED_MODULE_5__["CONTEXT_SVG_CANVAS"]);
    canvas.registerCustomAsset(children);
    return ``;
  }

}
const svgFragmentPropsDefault = Object.assign({}, _tags_Shape__WEBPACK_IMPORTED_MODULE_5__["shapePropsDefault"], {});
class SvgFragment extends _tags_Shape__WEBPACK_IMPORTED_MODULE_5__["Shape"] {
  constructor(props) {
    super(Object.assign({}, canvasPropsDefault, props));
  }

  render(contexts, children) {
    const canvas = this.getContext(contexts, _tags_Shape__WEBPACK_IMPORTED_MODULE_5__["CONTEXT_SVG_CANVAS"]);
    canvas.appendCustomContent(children);
    return ``;
  }

}
const textPropsDefault = Object.assign({}, _tags_Shape__WEBPACK_IMPORTED_MODULE_5__["shapePropsDefault"], {
  text: ""
});
class Text extends _tags_Shape__WEBPACK_IMPORTED_MODULE_5__["Shape"] {
  constructor(props) {
    super(Object.assign({}, textPropsDefault, props));
  }

  fillStrokeText(canvas) {
    if (this.props.font) canvas.font = this.props.font;
    if (this.props.textAlign) canvas.textAlign = this.props.textAlign;
    if (this.props.textBaseline) canvas.textBaseline = this.props.textBaseline;
    if (this.props.fill && this.props.stroke) canvas.fillStrokeText(this.props.text, 0, 0, this.props);else if (this.props.fill) canvas.fillText(this.props.text, 0, 0, this.props);else if (this.props.stroke) canvas.strokeText(this.props.text, 0, 0, this.props);
  }

  render(contexts, children) {
    return ``;
  }

  afterRender(contexts) {
    const canvas = this.getContext(contexts, _tags_Shape__WEBPACK_IMPORTED_MODULE_5__["CONTEXT_SVG_CANVAS"]);

    if (!this.isPathFragment) {
      this.fillStrokeText(canvas);
      this.restoreGraphicState(canvas);
    }
  }

}
class SvgImposition extends _red_agate__WEBPACK_IMPORTED_MODULE_0__["RedAgateComponent"] {
  constructor(props) {
    super(props);
  }

  transform() {
    const repeater = Array.isArray(this.props.children) ? this.props.children.find(x => typeof x === 'function') : this.props.children;
    const a = [];
    const scope = Object.assign({}, this.props.scope || {});

    for (let i = 0; i < this.props.items.length; i++) {
      a.push(_red_agate__WEBPACK_IMPORTED_MODULE_0__["createElement"](Group, {
        x: this.props.paperWidth / this.props.cols * (i % this.props.cols) + (Array.isArray(this.props.itemTranslation) ? Array.isArray(this.props.itemTranslation[i]) ? this.props.itemTranslation[i][0] || 0 : this.props.itemTranslation[0] || 0 : 0),
        y: this.props.paperHeight / this.props.rows * Math.floor(i / this.props.cols) + (Array.isArray(this.props.itemTranslation) ? Array.isArray(this.props.itemTranslation[i]) ? this.props.itemTranslation[i][1] || 0 : this.props.itemTranslation[1] || 0 : 0),
        scaleX: Array.isArray(this.props.itemScale) ? Array.isArray(this.props.itemScale[i]) ? this.props.itemScale[i][0] || 1 : this.props.itemScale[0] || 1 : 1,
        scaleY: Array.isArray(this.props.itemScale) ? Array.isArray(this.props.itemScale[i]) ? this.props.itemScale[i][1] || 1 : this.props.itemScale[1] || 1 : 1,
        rotationDeg: Array.isArray(this.props.itemRotationDeg) ? this.props.itemRotationDeg[i] || 0 : this.props.itemRotationDeg || 0
      }, repeater(this.props.items[i], i, this.props.items, scope)));
    }

    return a;
  }

}

/***/ }),

/***/ "../red-agate/modules/red-agate/taglib.js":
/*!************************************************!*\
  !*** ../red-agate/modules/red-agate/taglib.js ***!
  \************************************************/
/*! exports provided: Repeat, ForEach, If, Do, Facet, Template */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Repeat", function() { return Repeat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForEach", function() { return ForEach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "If", function() { return If; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Do", function() { return Do; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Facet", function() { return Facet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Template", function() { return Template; });
/* harmony import */ var _red_agate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./red-agate */ "../red-agate/modules/red-agate/red-agate.js");
// Copyright (c) 2017, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln

class Repeat extends _red_agate__WEBPACK_IMPORTED_MODULE_0__["RedAgateComponent"] {
  constructor(props) {
    super(props);
  }

  transform() {
    const repeater = Array.isArray(this.props.children) ? this.props.children.find(x => typeof x === 'function') : this.props.children;
    const a = [];
    const scope = Object.assign({}, this.props.scope || {});

    for (let i = 0; i < this.props.times; i++) {
      a.push(repeater(i, scope));
    }

    return a;
  }

}
class ForEach extends _red_agate__WEBPACK_IMPORTED_MODULE_0__["RedAgateComponent"] {
  constructor(props) {
    super(props);
  }

  transform() {
    const repeater = Array.isArray(this.props.children) ? this.props.children.find(x => typeof x === 'function') : this.props.children;
    const a = [];
    const scope = Object.assign({}, this.props.scope || {});

    for (let i = 0; i < this.props.items.length; i++) {
      a.push(repeater(this.props.items[i], i, this.props.items, scope));
    }

    return a;
  }

}
class If extends _red_agate__WEBPACK_IMPORTED_MODULE_0__["RedAgateComponent"] {
  constructor(props) {
    super(props);
  }

  transform() {
    if (this.props.condition) return this.props.children;else return [];
  }

}
class Do extends _red_agate__WEBPACK_IMPORTED_MODULE_0__["RedAgateComponent"] {
  constructor(props) {
    super(props);
    const fn = Array.isArray(this.props.children) ? this.props.children.find(x => typeof x === 'function') : this.props.children;
    fn();
  }

  earlyConstruct() {}

  transform() {
    return [];
  }

  render(contexts, children) {
    return ``;
  }

}
class Facet extends _red_agate__WEBPACK_IMPORTED_MODULE_0__["Fragment"] {
  constructor(props) {
    super(props);
  }

}
const Template = Facet;

/***/ }),

/***/ "../red-agate/modules/red-agate/tags/Shape.js":
/*!****************************************************!*\
  !*** ../red-agate/modules/red-agate/tags/Shape.js ***!
  \****************************************************/
/*! exports provided: CONTEXT_SVG_CANVAS, CONTEXT_SVG_PATH, CONTEXT_ASSET_, shapePropsDefault, Shape, renderSvgCanvas, toImgTag, toElementStyle, toDataUrl, toSvg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTEXT_SVG_CANVAS", function() { return CONTEXT_SVG_CANVAS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTEXT_SVG_PATH", function() { return CONTEXT_SVG_PATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTEXT_ASSET_", function() { return CONTEXT_ASSET_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shapePropsDefault", function() { return shapePropsDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shape", function() { return Shape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderSvgCanvas", function() { return renderSvgCanvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toImgTag", function() { return toImgTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toElementStyle", function() { return toElementStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toDataUrl", function() { return toDataUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toSvg", function() { return toSvg; });
/* harmony import */ var _red_agate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../red-agate */ "../red-agate/modules/red-agate/red-agate.js");
/* harmony import */ var red_agate_svg_canvas_modules_drawing_canvas_TransferMatrix2D__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! red-agate-svg-canvas/modules/drawing/canvas/TransferMatrix2D */ "../red-agate-svg-canvas/modules/drawing/canvas/TransferMatrix2D.js");
// Copyright (c) 2017, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln


const CONTEXT_SVG_CANVAS = 'CONTEXT_SVG_CANVAS';
const CONTEXT_SVG_PATH = 'CONTEXT_SVG_PATH';
const CONTEXT_ASSET_ = 'CONTEXT_ASSET_';
const shapePropsDefault = {
  x: 0,
  y: 0,
  margin: 0
};
class Shape extends _red_agate__WEBPACK_IMPORTED_MODULE_0__["RedAgatePhantomComponent"] {
  constructor(props) {
    super(props);
    this.isAmbient = false;
    this.isPathFragment = false;
    this.isGroup = true;
  }

  initializeCanvas(canvas) {
    if (this.props.fill || this.isAmbient) {
      if (this.props.fillColor !== void 0 && this.props.fillColor !== null) canvas.fillStyle = this.props.fillColor.toString();
    }

    if (this.props.stroke || this.isAmbient) {
      if (this.props.strokeColor !== void 0 && this.props.strokeColor !== null) canvas.strokeStyle = this.props.strokeColor.toString();
      if (this.props.lineCap !== void 0 && this.props.lineCap !== null) canvas.lineCap = this.props.lineCap;
      if (this.props.lineJoin !== void 0 && this.props.lineJoin !== null) canvas.lineJoin = this.props.lineJoin;
      if (this.props.lineWidth !== void 0 && this.props.lineWidth !== null) canvas.lineWidth = this.props.lineWidth;
      if (this.props.miterLimit !== void 0 && this.props.miterLimit !== null) canvas.miterLimit = this.props.miterLimit;
      if (this.props.lineDash !== void 0 && this.props.lineDash !== null) canvas.setLineDash(this.props.lineDash);
      if (this.props.lineDashOffset !== void 0 && this.props.lineDashOffset !== null) canvas.lineDashOffset = this.props.lineDashOffset;
    }

    if (this.isAmbient) {
      const ambientProps = this.props;

      if (ambientProps.margin || ambientProps.x || ambientProps.y) {
        canvas.translate((ambientProps.margin || 0) + (ambientProps.x || 0), (ambientProps.margin || 0) + (ambientProps.y || 0));
      }

      if (ambientProps.scaleX !== void 0 && ambientProps.scaleX !== null) {
        canvas.scale(ambientProps.scaleX, 1);
      }

      if (ambientProps.scaleY !== void 0 && ambientProps.scaleY !== null) {
        canvas.scale(1, ambientProps.scaleY);
      }

      if (ambientProps.rotationDeg !== void 0 && ambientProps.rotationDeg !== null) {
        canvas.rotate(ambientProps.rotationDeg * Math.PI / 180);
      }

      if (ambientProps.tm !== void 0 && ambientProps.tm !== null && ambientProps.tm.length >= 6) {
        canvas.transform(ambientProps.tm[0], ambientProps.tm[1], ambientProps.tm[2], ambientProps.tm[3], ambientProps.tm[4], ambientProps.tm[5]);
      }
    }
  }

  setGraphicState(canvas) {
    if (this.isGroup) {
      canvas.beginGroup();
    }

    canvas.save();
    canvas.translate(this.props.margin + this.props.x, this.props.margin + this.props.y);
    this.initializeCanvas(canvas);
  }

  restoreGraphicState(canvas) {
    canvas.restore();

    if (this.isGroup) {
      canvas.endGroup();
    }
  }

  fillStrokePaths(canvas) {
    if (this.props.fill && this.props.stroke) {
      canvas.fillStroke();
    } else if (this.props.fill) canvas.fill();else if (this.props.stroke) canvas.stroke();

    if (this.props.fill || this.props.stroke) {
      canvas.beginPath();
    }
  }

  beforeRender(contexts) {
    this.isPathFragment = this.getContext(contexts, CONTEXT_SVG_PATH) || false;
    const canvas = this.getContext(contexts, CONTEXT_SVG_CANVAS);

    if (canvas) {
      if (!this.isPathFragment) {
        this.setGraphicState(canvas);
      }
    }
  }

  afterRender(contexts) {
    const canvas = this.getContext(contexts, CONTEXT_SVG_CANVAS);

    if (canvas) {
      if (!this.isPathFragment) {
        this.fillStrokePaths(canvas);
        this.restoreGraphicState(canvas);
      }
    }
  }

}
function renderSvgCanvas(props, canvas, imageWidth, imageHeight) {
  if (props.asImgTag) {
    return `<img style="width:${imageWidth}${props.unit};height:${imageHeight}${props.unit};" src="${canvas.toDataUrl(new red_agate_svg_canvas_modules_drawing_canvas_TransferMatrix2D__WEBPACK_IMPORTED_MODULE_1__["Rect2D"](0, 0, imageWidth, imageHeight), props.unit, 120)}"${_red_agate__WEBPACK_IMPORTED_MODULE_0__["htmlAttributesRenderer"](props, void 0, new Set([])).attrs}></img>`;
  } else if (props.asElementStyle) {
    return `${props.style ? _red_agate__WEBPACK_IMPORTED_MODULE_0__["elementStyleRenderer"](props.style) : ''}${_red_agate__WEBPACK_IMPORTED_MODULE_0__["elementStyleRenderer"]({
      'background-image': `url("${canvas.toDataUrl(new red_agate_svg_canvas_modules_drawing_canvas_TransferMatrix2D__WEBPACK_IMPORTED_MODULE_1__["Rect2D"](0, 0, imageWidth, imageHeight), props.unit, 0)}")`
    })}`;
  } else if (props.asDataUrl) {
    return canvas.toDataUrl(new red_agate_svg_canvas_modules_drawing_canvas_TransferMatrix2D__WEBPACK_IMPORTED_MODULE_1__["Rect2D"](0, 0, imageWidth, imageHeight), props.unit, 0);
  } else {
    return canvas.render(new red_agate_svg_canvas_modules_drawing_canvas_TransferMatrix2D__WEBPACK_IMPORTED_MODULE_1__["Rect2D"](0, 0, imageWidth, imageHeight), props.unit);
  }
}
function toImgTag(component) {
  const propsNew = Object.assign({}, component.props);
  propsNew.asImgTag = true;
  propsNew.asElementStyle = false;
  propsNew.asDataUrl = false;
  const propsSaved = component.props;
  component.props = propsNew;
  const r = _red_agate__WEBPACK_IMPORTED_MODULE_0__["renderAsHtml_noDefer"](_red_agate__WEBPACK_IMPORTED_MODULE_0__["createElementFromComponentInstance"](component));
  component.props = propsSaved;
  return r;
}
function toElementStyle(component) {
  const propsNew = Object.assign({}, component.props);
  propsNew.asImgTag = false;
  propsNew.asElementStyle = true;
  propsNew.asDataUrl = false;
  const propsSaved = component.props;
  component.props = propsNew;
  const r = _red_agate__WEBPACK_IMPORTED_MODULE_0__["renderAsHtml_noDefer"](_red_agate__WEBPACK_IMPORTED_MODULE_0__["createElementFromComponentInstance"](component));
  component.props = propsSaved;
  return r;
}
function toDataUrl(component) {
  const propsNew = Object.assign({}, component.props);
  propsNew.asImgTag = false;
  propsNew.asElementStyle = false;
  propsNew.asDataUrl = true;
  const propsSaved = component.props;
  component.props = propsNew;
  const r = _red_agate__WEBPACK_IMPORTED_MODULE_0__["renderAsHtml_noDefer"](_red_agate__WEBPACK_IMPORTED_MODULE_0__["createElementFromComponentInstance"](component));
  component.props = propsSaved;
  return r;
}
function toSvg(component) {
  const propsNew = Object.assign({}, component.props);
  propsNew.asImgTag = false;
  propsNew.asElementStyle = false;
  propsNew.asDataUrl = false;
  const propsSaved = component.props;
  component.props = propsNew;
  const r = _red_agate__WEBPACK_IMPORTED_MODULE_0__["renderAsHtml_noDefer"](_red_agate__WEBPACK_IMPORTED_MODULE_0__["createElementFromComponentInstance"](component));
  component.props = propsSaved;
  return r;
}

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var red_agate_util_modules___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! red-agate-util/modules/ */ "../red-agate-util/modules/index.js");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in red_agate_util_modules___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return red_agate_util_modules___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var red_agate_math_modules___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! red-agate-math/modules/ */ "../red-agate-math/modules/index.js");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in red_agate_math_modules___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return red_agate_math_modules___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var red_agate_svg_canvas_modules___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! red-agate-svg-canvas/modules/ */ "../red-agate-svg-canvas/modules/index.js");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in red_agate_svg_canvas_modules___WEBPACK_IMPORTED_MODULE_2__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return red_agate_svg_canvas_modules___WEBPACK_IMPORTED_MODULE_2__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var red_agate_modules___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! red-agate/modules/ */ "../red-agate/modules/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RedAgateComponent", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["RedAgateComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RedAgatePhantomComponent", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["RedAgatePhantomComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["createElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["cloneElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createElementFromComponentInstance", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["createElementFromComponentInstance"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transform", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["transform"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "elementStyleRenderer", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["elementStyleRenderer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "htmlAttributesRenderer", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["htmlAttributesRenderer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "htmlRenderer", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["htmlRenderer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "renderAsHtml", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["renderAsHtml"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "renderAsHtml_noDefer", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["renderAsHtml_noDefer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "renderOnAwsLambda", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["renderOnAwsLambda"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "renderOnExpress", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["renderOnExpress"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Fragment", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["Fragment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Query", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["Query"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "query", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["query"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CONTEXT_SVG_CANVAS", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["CONTEXT_SVG_CANVAS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CONTEXT_SVG_PATH", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["CONTEXT_SVG_PATH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CONTEXT_ASSET_", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["CONTEXT_ASSET_"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shapePropsDefault", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["shapePropsDefault"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Shape", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["Shape"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "renderSvgCanvas", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["renderSvgCanvas"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toImgTag", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["toImgTag"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toElementStyle", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["toElementStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toDataUrl", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["toDataUrl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toSvg", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["toSvg"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Repeat", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["Repeat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ForEach", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["ForEach"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "If", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["If"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Do", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["Do"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Facet", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["Facet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Template", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["Template"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Html4_01_Strict", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["Html4_01_Strict"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Html4_01_Transitional", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["Html4_01_Transitional"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Html4_01_Frameset", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["Html4_01_Frameset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Xhtml1_0_Strict", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["Xhtml1_0_Strict"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Xhtml1_0_Transitional", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["Xhtml1_0_Transitional"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Xhtml1_0_Frameset", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["Xhtml1_0_Frameset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Html5", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["Html5"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Xml", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["Xml"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HtmlImposition", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["HtmlImposition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Svg", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["Svg"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ambientPropsDefault", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["ambientPropsDefault"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ambient", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["Ambient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arcPropsDefault", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["arcPropsDefault"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Arc", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["Arc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "canvasPropsDefault", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["canvasPropsDefault"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Canvas", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["Canvas"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "circlePropsDefault", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["circlePropsDefault"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Circle", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["Circle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curvePropsDefault", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["curvePropsDefault"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Curve", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["Curve"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gridLinePropsDefault", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["gridLinePropsDefault"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridLine", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["GridLine"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["Group"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "linePropsDefault", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["linePropsDefault"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Line", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["Line"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pathPropsDefault", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["pathPropsDefault"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Path", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["Path"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "piePropsDefault", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["piePropsDefault"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pie", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["Pie"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "polygonPropsDefault", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["polygonPropsDefault"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Polygon", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["Polygon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rectPropsDefault", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["rectPropsDefault"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Rect", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["Rect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "roundRectPropsDefault", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["roundRectPropsDefault"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RoundRect", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["RoundRect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "svgAssetFragmentPropsDefault", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["svgAssetFragmentPropsDefault"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SvgAssetFragment", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["SvgAssetFragment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "svgFragmentPropsDefault", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["svgFragmentPropsDefault"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SvgFragment", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["SvgFragment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "textPropsDefault", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["textPropsDefault"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["Text"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SvgImposition", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["SvgImposition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Asset", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["Asset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["Image"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Script", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["Script"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Style", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["Style"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Font", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["Font"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SingleFont", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["SingleFont"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "printerMarksDefault", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["printerMarksDefault"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PrinterMarks", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["PrinterMarks"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Lambdas", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["Lambdas"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "App", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["App"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HtmlRenderer", function() { return red_agate_modules___WEBPACK_IMPORTED_MODULE_3__["HtmlRenderer"]; });

/* harmony import */ var red_agate_react_host_modules___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! red-agate-react-host/modules/ */ "../red-agate-react-host/modules/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReactDOMServer", function() { return red_agate_react_host_modules___WEBPACK_IMPORTED_MODULE_4__["ReactDOMServer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReactHost", function() { return red_agate_react_host_modules___WEBPACK_IMPORTED_MODULE_4__["ReactHost"]; });

/* harmony import */ var red_agate_barcode_modules___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! red-agate-barcode/modules/ */ "../red-agate-barcode/modules/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "barcodeBasePropsDefault", function() { return red_agate_barcode_modules___WEBPACK_IMPORTED_MODULE_5__["barcodeBasePropsDefault"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BarcodeBase", function() { return red_agate_barcode_modules___WEBPACK_IMPORTED_MODULE_5__["BarcodeBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "code39PropsDefault", function() { return red_agate_barcode_modules___WEBPACK_IMPORTED_MODULE_5__["code39PropsDefault"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Code39", function() { return red_agate_barcode_modules___WEBPACK_IMPORTED_MODULE_5__["Code39"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "code128PropsDefault", function() { return red_agate_barcode_modules___WEBPACK_IMPORTED_MODULE_5__["code128PropsDefault"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Code128", function() { return red_agate_barcode_modules___WEBPACK_IMPORTED_MODULE_5__["Code128"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eanPropsDefault", function() { return red_agate_barcode_modules___WEBPACK_IMPORTED_MODULE_5__["eanPropsDefault"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EanBase", function() { return red_agate_barcode_modules___WEBPACK_IMPORTED_MODULE_5__["EanBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ean13", function() { return red_agate_barcode_modules___WEBPACK_IMPORTED_MODULE_5__["Ean13"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Gtin13", function() { return red_agate_barcode_modules___WEBPACK_IMPORTED_MODULE_5__["Gtin13"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ean8", function() { return red_agate_barcode_modules___WEBPACK_IMPORTED_MODULE_5__["Ean8"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Gtin8", function() { return red_agate_barcode_modules___WEBPACK_IMPORTED_MODULE_5__["Gtin8"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ean5", function() { return red_agate_barcode_modules___WEBPACK_IMPORTED_MODULE_5__["Ean5"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ean2", function() { return red_agate_barcode_modules___WEBPACK_IMPORTED_MODULE_5__["Ean2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpcA", function() { return red_agate_barcode_modules___WEBPACK_IMPORTED_MODULE_5__["UpcA"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpcE", function() { return red_agate_barcode_modules___WEBPACK_IMPORTED_MODULE_5__["UpcE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "itfPropsDefault", function() { return red_agate_barcode_modules___WEBPACK_IMPORTED_MODULE_5__["itfPropsDefault"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Itf", function() { return red_agate_barcode_modules___WEBPACK_IMPORTED_MODULE_5__["Itf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "japanPostalPropsDefault", function() { return red_agate_barcode_modules___WEBPACK_IMPORTED_MODULE_5__["japanPostalPropsDefault"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JapanPostal", function() { return red_agate_barcode_modules___WEBPACK_IMPORTED_MODULE_5__["JapanPostal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nw7PropsDefault", function() { return red_agate_barcode_modules___WEBPACK_IMPORTED_MODULE_5__["nw7PropsDefault"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Nw7", function() { return red_agate_barcode_modules___WEBPACK_IMPORTED_MODULE_5__["Nw7"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "qrPropsDefault", function() { return red_agate_barcode_modules___WEBPACK_IMPORTED_MODULE_5__["qrPropsDefault"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Qr", function() { return red_agate_barcode_modules___WEBPACK_IMPORTED_MODULE_5__["Qr"]; });








/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /builds/shellyln/red-agate/packages/_lib-dist/src/index.ts */"./src/index.ts");


/***/ }),

/***/ "react-dom/server":
/*!*********************************************************************************************************************************************************!*\
  !*** external {"root":"ReactDOMServer","commonjs2":"react-dom/server","commonjs":"react-dom/server","amd":"react-dom/server","umd":"react-dom/server"} ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom_server__;

/***/ })

/******/ });
});
//# sourceMappingURL=red-agate.js.map