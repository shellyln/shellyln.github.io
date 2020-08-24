(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["opensoql"] = factory();
	else
		root["opensoql"] = factory();
})(this, function() {
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

/***/ "./node_modules/fruitsconfits/modules/lib/object-parser.js":
/*!*****************************************************************!*\
  !*** ./node_modules/fruitsconfits/modules/lib/object-parser.js ***!
  \*****************************************************************/
/*! exports provided: objSequence, objClass, objClassNot, objClassByNeedleFn, getObjectParsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objSequence", function() { return objSequence; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objClass", function() { return objClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objClassNot", function() { return objClassNot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objClassByNeedleFn", function() { return objClassByNeedleFn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getObjectParsers", function() { return getObjectParsers; });
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parser */ "./node_modules/fruitsconfits/modules/lib/parser.js");
// Copyright (c) 2019 Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln

function objSequence(helper, comparator) {
  return needle => {
    return input => {
      const len = Math.max(0, input.end - input.start);
      let matched = true;

      if (len >= needle.length) {
        for (let i = 0; i < needle.length; i++) {
          if (!comparator(input.src[input.start + i], needle[i])) {
            matched = false;
            break;
          }
        }
      } else {
        matched = false;
      }

      return matched ? {
        succeeded: true,
        next: {
          src: input.src,
          start: input.start + needle.length,
          end: input.end,
          context: input.context,
          templateArgs: input.templateArgs,
          templateArgsPos: input.templateArgsPos
        },
        tokens: [helper(needle)]
      } : {
        succeeded: false,
        error: false,
        src: input.src,
        pos: input.start,
        message: `operator "objSequence(${needle})"`
      };
    };
  };
}
function objClass(helper, comparator) {
  // NOTE: <T> version `needles` type is `T`.
  return (...needles) => {
    return input => {
      const len = Math.max(0, input.end - input.start);
      let index = -1;
      const succeeded = len > 0 ? needles.some((needle, idx) => {
        if (comparator(input.src[input.start], needle)) {
          index = idx;
          return true;
        }
      }) : false;
      return succeeded ? {
        succeeded: true,
        next: {
          src: input.src,
          start: input.start + 1,
          end: input.end,
          context: input.context,
          templateArgs: input.templateArgs,
          templateArgsPos: input.templateArgsPos
        },
        tokens: [helper(needles[index])]
      } : {
        succeeded: false,
        error: false,
        src: input.src,
        pos: input.start,
        message: `operator "objClass(${needles.join(',')})"`
      };
    };
  };
}
function objClassNot(helper, comparator) {
  // NOTE: <T> version `needles` type is `T`.
  return (...needles) => {
    return input => {
      const len = Math.max(0, input.end - input.start);

      if (len > 0) {
        for (const needle of needles) {
          let matched = true;

          if (!comparator(input.src[input.start], needle)) {
            matched = false;
            break;
          }

          if (matched) {
            return {
              succeeded: false,
              error: false,
              src: input.src,
              pos: input.start,
              message: `operator "objClassNot(${needles.join(',')})"`
            };
          }
        }
      }

      return {
        succeeded: true,
        next: {
          src: input.src,
          start: input.start + 1,
          end: input.end,
          context: input.context,
          templateArgs: input.templateArgs,
          templateArgsPos: input.templateArgsPos
        },
        tokens: [helper(input.src[input.start])]
      };
    };
  };
}
function objClassByNeedleFn(helper, comparator) {
  // NOTE: needles[i] should be one character. surrogate pair and/or ligature are accepted.
  // NOTE: <T> version `needles` type is `T`.
  return needle => {
    return input => {
      const len = Math.max(0, input.end - input.start);
      const matched = len > 0 ? needle(input.src[input.start]) : false;
      return matched ? {
        succeeded: true,
        next: {
          src: input.src,
          start: input.start + 1,
          end: input.end,
          context: input.context,
          templateArgs: input.templateArgs,
          templateArgsPos: input.templateArgsPos
        },
        tokens: [helper(input.src[input.start])]
      } : {
        succeeded: false,
        error: false,
        src: input.src,
        pos: input.start,
        message: `operator "objClassByNeedleFn"`
      };
    };
  };
}
function getObjectParsers(params) {
  const clsFn = objClassByNeedleFn(params.rawToToken, params.comparator);
  const isAny = clsFn(src => true); // TODO: reduce unneccessary call for adding types.

  return {
    seq: objSequence(params.rawToToken, params.comparator),
    cls: objClass(params.rawToToken, params.comparator),
    notCls: objClassNot(params.rawToToken, params.comparator),
    clsFn,
    classes: {
      any: isAny
    },
    cat: Object(_parser__WEBPACK_IMPORTED_MODULE_0__["transform"])(params.concatTokens),
    once: Object(_parser__WEBPACK_IMPORTED_MODULE_0__["quantify"])(1, 1),
    repeat: Object(_parser__WEBPACK_IMPORTED_MODULE_0__["quantify"])(),
    qty: (min, max) => Object(_parser__WEBPACK_IMPORTED_MODULE_0__["quantify"])(min, max),
    zeroWidth: helper => Object(_parser__WEBPACK_IMPORTED_MODULE_0__["zeroWidth"])(helper),
    err: message => Object(_parser__WEBPACK_IMPORTED_MODULE_0__["zeroWidthError"])(message),
    beginning: helper => Object(_parser__WEBPACK_IMPORTED_MODULE_0__["beginning"])(helper),
    end: helper => Object(_parser__WEBPACK_IMPORTED_MODULE_0__["end"])(helper),
    first: (...parsers) => Object(_parser__WEBPACK_IMPORTED_MODULE_0__["first"])(...parsers),
    or: (...parsers) => Object(_parser__WEBPACK_IMPORTED_MODULE_0__["or"])(...parsers),
    combine: Object(_parser__WEBPACK_IMPORTED_MODULE_0__["transform"])(),
    erase: Object(_parser__WEBPACK_IMPORTED_MODULE_0__["transform"])(tokens => []),
    trans: fn => Object(_parser__WEBPACK_IMPORTED_MODULE_0__["transform"])(fn),
    ahead: (...parsers) => Object(_parser__WEBPACK_IMPORTED_MODULE_0__["lookAhead"])(...parsers),
    behind: (n, helper) => Object(_parser__WEBPACK_IMPORTED_MODULE_0__["lookBehind"])(n, helper),
    rules: args => Object(_parser__WEBPACK_IMPORTED_MODULE_0__["applyProductionRules"])(args),
    makeProgram: _parser__WEBPACK_IMPORTED_MODULE_0__["makeProgram"]
  };
}

/***/ }),

/***/ "./node_modules/fruitsconfits/modules/lib/parser.js":
/*!**********************************************************!*\
  !*** ./node_modules/fruitsconfits/modules/lib/parser.js ***!
  \**********************************************************/
/*! exports provided: formatErrorMessage, zeroWidth, zeroWidthError, beginning, end, quantify, first, or, transform, combine, lookAhead, lookBehind, applyProductionRules, makeProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatErrorMessage", function() { return formatErrorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zeroWidth", function() { return zeroWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zeroWidthError", function() { return zeroWidthError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "beginning", function() { return beginning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "end", function() { return end; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantify", function() { return quantify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "first", function() { return first; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "or", function() { return or; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transform", function() { return transform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combine", function() { return combine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lookAhead", function() { return lookAhead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lookBehind", function() { return lookBehind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyProductionRules", function() { return applyProductionRules; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeProgram", function() { return makeProgram; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./node_modules/fruitsconfits/modules/lib/types.js");
// Copyright (c) 2019 Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln


function getLineAndCol(src, pos) {
  let line = 1;
  let col = 1;

  for (let i = 0; i <= pos; i++) {
    switch (src[i]) {
      case '\r':
        if (src[i + 1] === '\n') {
          i++;
        }

      // FALL_TURU

      case '\n':
        line++;
        col = 1;
        break;

      default:
        col++;
        break;
    }
  }

  return {
    line,
    col
  };
}

function formatErrorMessage(result) {
  let msg = '';
  let src = '';

  if (typeof result.src === 'string') {
    src = result.src.slice(Math.max(result.pos - 5, 0), result.pos + 55);
    let ar = src.split(/\r\n|\n|\r/);
    ar = ar.slice(0, 1).concat('          ^~~~~~~~').concat(...ar.slice(1));
    src = ar.join('\n') + '\n\n';
    const lineAndCol = getLineAndCol(result.src, result.pos);
    msg = `parse failed at position:${result.pos} line:${lineAndCol.line} col:${lineAndCol.col} ${result.message ? ` ${result.message}` : ''}\n     ${src}`;
  } else {
    src = '     (object)\n          ^~~~~~~~';

    try {
      src = '     ' + JSON.stringify(result.src.slice(Math.max(result.pos - 10, 0), result.pos)) + '\n          ' + JSON.stringify(result.src.slice(result.pos, result.pos + 1)) + '\n          ' + JSON.stringify(result.src.slice(result.pos + 1, result.pos + 10));
      let ar = src.split(/\r\n|\n|\r/);
      ar = ar.slice(0, 2).concat('          ^~~~~~~~').concat(...ar.slice(2));
      src = ar.join('\n') + '\n\n';
    } catch (e) {}

    msg = `parse failed at position:${result.pos} ${result.message ? ` ${result.message}` : ''}\n     ${src}`;
  }

  return msg;
}
function zeroWidth(helper) {
  return input => {
    return {
      succeeded: true,
      next: {
        src: input.src,
        start: input.start,
        end: input.end,
        context: input.context,
        templateArgs: input.templateArgs,
        templateArgsPos: input.templateArgsPos
      },
      tokens: helper ? [helper()] : []
    };
  };
}
function zeroWidthError(message) {
  return input => {
    throw new _types__WEBPACK_IMPORTED_MODULE_0__["ParseError"]({
      succeeded: false,
      error: true,
      src: input.src,
      pos: input.start,
      message: message || ''
    }); // return ({
    //     succeeded: false,
    //     error: true,
    //     src: input.src,
    //     pos: input.start,
    //     message: message || '',
    // });
  };
}
function beginning(helper) {
  return input => {
    return input.start === 0 ? {
      succeeded: true,
      next: {
        src: input.src,
        start: input.start,
        end: input.end,
        context: input.context,
        templateArgs: input.templateArgs,
        templateArgsPos: input.templateArgsPos
      },
      tokens: helper ? [helper()] : []
    } : {
      succeeded: false,
      error: false,
      src: input.src,
      pos: input.start,
      message: 'operator "beginning"'
    };
  };
}
function end(helper) {
  return input => {
    return input.start === input.end ? {
      succeeded: true,
      next: {
        src: input.src,
        start: input.start,
        end: input.end,
        context: input.context,
        templateArgs: input.templateArgs,
        templateArgsPos: input.templateArgsPos
      },
      tokens: helper ? [helper()] : []
    } : {
      succeeded: false,
      error: false,
      src: input.src,
      pos: input.start,
      message: 'operator "end"'
    };
  };
} // TODO: match by callback function parser
// TODO: `nesting` parser

function quantify(min, max) {
  min = min || 0;
  return parser => {
    return input => {
      let next = input;
      const matched = [];

      for (;;) {
        const x = parser(next);

        if (x.succeeded) {
          next = x.next;
          matched.push({
            next: x.next,
            tokens: x.tokens
          });

          if (max && max === matched.length) {
            break;
          }
        } else {
          if (x.error) {
            return x;
          }

          if (matched.length >= min) {
            break;
          } else {
            return {
              succeeded: false,
              error: false,
              src: next.src,
              pos: next.start,
              message: 'operator "quantify"'
            };
          }
        }
      }

      if (matched.length > 0) {
        const r = [];

        for (const x of matched) {
          r.push(...x.tokens);
        }

        return {
          succeeded: true,
          next: matched[matched.length - 1].next,
          tokens: r
        };
      } else {
        return {
          succeeded: true,
          next: {
            src: input.src,
            start: input.start,
            end: input.end,
            context: input.context,
            templateArgs: input.templateArgs,
            templateArgsPos: input.templateArgsPos
          },
          tokens: []
        };
      }
    };
  };
}
function first(...parsers) {
  return input => {
    let matched = null;
    let last = null;

    for (const parser of parsers) {
      const x = parser(input);

      if (x.succeeded) {
        matched = {
          next: x.next,
          tokens: x.tokens
        };
        break;
      }

      if (last) {
        if (x.error) {
          if (!last.error || last.pos < x.pos) {
            last = x;
          }
        } else if (last.pos < x.pos) {
          last = x;
        }
      } else {
        last = x;
      }
    }

    return matched ? {
      succeeded: true,
      next: matched.next,
      tokens: matched.tokens
    } : last ? last : {
      succeeded: false,
      error: false,
      src: input.src,
      pos: input.start,
      message: 'operator "first"'
    };
  };
}
function or(...parsers) {
  return input => {
    const matched = [];
    let last = null;

    for (const parser of parsers) {
      const x = parser(input);

      if (x.succeeded) {
        matched.push({
          next: x.next,
          tokens: x.tokens
        });
      } else {
        if (last) {
          if (x.error) {
            if (!last.error || last.pos < x.pos) {
              last = x;
            }
          } else if (last.pos < x.pos) {
            last = x;
          }
        } else {
          last = x;
        }
      }
    }

    if (matched.length > 0) {
      const z = matched.reduce((a, b) => a.next.start >= b.next.start ? a : b);
      return {
        succeeded: true,
        next: z.next,
        tokens: z.tokens
      };
    }

    return last ? last : {
      succeeded: false,
      error: false,
      src: input.src,
      pos: input.start,
      message: 'operator "or"'
    };
  };
}
function transform(trans, ctxTrans) {
  return (...parsers) => {
    return input => {
      let next = input;
      const tokens = [];

      for (const parser of parsers) {
        const x = parser(next);

        if (!x.succeeded) {
          return x;
        }

        next = x.next;
        tokens.push(...x.tokens);
      } // TODO: report errors while transforming


      const t2 = trans ? trans(tokens, input) : tokens;
      return {
        succeeded: true,
        next: ctxTrans ? {
          src: next.src,
          start: next.start,
          end: next.end,
          context: ctxTrans(next.context),
          templateArgs: next.templateArgs,
          templateArgsPos: next.templateArgsPos
        } : next,
        tokens: t2
      };
    };
  };
}
function combine(...parsers) {
  return transform()(...parsers);
}
function lookAhead(...parsers) {
  return input => {
    let next = input;

    for (const parser of parsers) {
      const x = parser(next);

      if (!x.succeeded) {
        return x;
      }

      next = x.next;
    }

    return {
      succeeded: true,
      next: input,
      tokens: []
    };
  };
}
function lookBehind(n, helper) {
  return (...parsers) => {
    return input => {
      if (input.start - n < 0) {
        return {
          succeeded: false,
          error: false,
          src: input.src,
          pos: input.start,
          message: 'lookBehind: src is too short'
        };
      }

      let next = {
        src: input.src,
        start: input.start - n,
        end: input.end,
        context: input.context,
        templateArgs: input.templateArgs,
        templateArgsPos: input.templateArgsPos
      };

      for (const parser of parsers) {
        const x = parser(next);

        if (!x.succeeded) {
          return x;
        }

        next = x.next;
      }

      return {
        succeeded: true,
        next: input,
        tokens: helper ? [helper()] : []
      };
    };
  };
}
function applyProductionRules(args) {
  return lexer => {
    return lexerInput => {
      const lexResult = lexer(lexerInput);

      if (!lexResult.succeeded) {
        return lexResult;
      }

      const input = Object(_types__WEBPACK_IMPORTED_MODULE_0__["parserInput"])(lexResult.tokens, lexerInput.context);
      let next = input;
      let completed = false;

      if (args.check(next).succeeded) {
        return {
          succeeded: true,
          next: lexResult.next,
          tokens: lexResult.tokens
        };
      }

      completed: for (let i = 0; args.maxApply !== void 0 ? i < args.maxApply : true; i++) {
        let matched = false;

        rules: for (const rule of args.rules) {
          const {
            parser,
            rtol
          } = typeof rule === 'function' ? {
            parser: rule,
            rtol: false
          } : rule;
          const len = next.src.length;

          for (let s = 0; s <= len; s++) {
            const x = parser({
              src: next.src,
              start: rtol ? len - s : s,
              end: next.src.length,
              context: next.context,
              templateArgs: next.templateArgs,
              templateArgsPos: next.templateArgsPos
            });

            if (x.succeeded) {
              matched = true;
              const nextSrc = next.src.slice(0, rtol ? len - s : s);
              nextSrc.push(...x.tokens);
              nextSrc.push(...next.src.slice(x.next.start));
              next = {
                src: nextSrc,
                start: 0,
                end: nextSrc.length,
                context: x.next.context,
                templateArgs: x.next.templateArgs,
                templateArgsPos: x.next.templateArgsPos
              };

              if (args.check(next).succeeded) {
                completed = true;
                break completed;
              }

              break rules;
            }
          }
        }

        if (!matched) {
          break;
        }
      }

      if (!completed) {
        if (!args.check(next).succeeded) {
          throw new _types__WEBPACK_IMPORTED_MODULE_0__["ParseError"]({
            succeeded: false,
            error: true,
            src: input.src,
            pos: input.start,
            message: 'The application of production rules was not finished'
          });
        }
      }

      return {
        succeeded: true,
        next: lexResult.next,
        tokens: next.src
      };
    };
  };
}
function makeProgram(parser) {
  return input => {
    try {
      return parser(input);
    } catch (e) {
      if (e.result) {
        return e.result;
      } else {
        throw e;
      }
    }
  };
}

/***/ }),

/***/ "./node_modules/fruitsconfits/modules/lib/string-parser.js":
/*!*****************************************************************!*\
  !*** ./node_modules/fruitsconfits/modules/lib/string-parser.js ***!
  \*****************************************************************/
/*! exports provided: charSequence, charClass, charClassNot, charClassByNeedleFn, templateStringsParam, getStringParsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "charSequence", function() { return charSequence; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "charClass", function() { return charClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "charClassNot", function() { return charClassNot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "charClassByNeedleFn", function() { return charClassByNeedleFn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "templateStringsParam", function() { return templateStringsParam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStringParsers", function() { return getStringParsers; });
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parser */ "./node_modules/fruitsconfits/modules/lib/parser.js");
// Copyright (c) 2019 Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln

function charSequence(helper) {
  return needle => {
    return input => {
      const src = input.src.slice(input.start, input.end);
      return src.startsWith(needle) ? {
        succeeded: true,
        next: {
          src: input.src,
          start: input.start + needle.length,
          end: input.end,
          context: input.context,
          templateArgs: input.templateArgs,
          templateArgsPos: input.templateArgsPos
        },
        tokens: [helper(needle)]
      } : {
        succeeded: false,
        error: false,
        src: input.src,
        pos: input.start,
        message: `operator "charSequence(${needle})"`
      };
    };
  };
}
function charClass(helper) {
  // NOTE: needles[i] should be one character. surrogate pair and/or ligature are accepted.
  return (...needles) => {
    return input => {
      const src = input.src.slice(input.start, input.end);
      let index = -1;
      const succeeded = needles.some((needle, idx) => {
        const matched = src.startsWith(needle);

        if (matched) {
          index = idx;
          return true;
        }
      });
      return succeeded ? {
        succeeded: true,
        next: {
          src: input.src,
          start: input.start + needles[index].length,
          end: input.end,
          context: input.context,
          templateArgs: input.templateArgs,
          templateArgsPos: input.templateArgsPos
        },
        tokens: [helper(needles[index])]
      } : {
        succeeded: false,
        error: false,
        src: input.src,
        pos: input.start,
        message: `operator "charClass(${needles.join(',')})"`
      };
    };
  };
}
function charClassNot(helper) {
  // NOTE: needles[i] should be one character. surrogate pair and/or ligature are accepted.
  return (...needles) => {
    return input => {
      const src = input.src.slice(input.start, input.end);

      for (const needle of needles) {
        const matched = src.startsWith(needle);

        if (matched) {
          return {
            succeeded: false,
            error: false,
            src: input.src,
            pos: input.start,
            message: `operator "charClassNot(${needles.join(',')})"`
          };
        }
      }

      const p = input.src.codePointAt(input.start);

      if (p === void 0) {
        return {
          succeeded: false,
          error: false,
          src: input.src,
          pos: input.start,
          message: `operator "charClassNot(${needles.join(',')})"`
        };
      }

      const c = String.fromCodePoint(p);
      return {
        succeeded: true,
        next: {
          src: input.src,
          start: input.start + c.length,
          end: input.end,
          context: input.context,
          templateArgs: input.templateArgs,
          templateArgsPos: input.templateArgsPos
        },
        tokens: [helper(c)]
      };
    };
  };
}
function charClassByNeedleFn(helper) {
  // NOTE: needles[i] should be one character. surrogate pair and/or ligature are accepted.
  return needle => {
    return input => {
      const src = input.src.slice(input.start, input.end);
      const len = needle(src);
      return len >= 0 ? {
        succeeded: true,
        next: {
          src: input.src,
          start: input.start + len,
          end: input.end,
          context: input.context,
          templateArgs: input.templateArgs,
          templateArgsPos: input.templateArgsPos
        },
        tokens: [helper(src.substring(0, len))]
      } : {
        succeeded: false,
        error: false,
        src: input.src,
        pos: input.start,
        message: `operator "charClassByNeedleFn"`
      };
    };
  };
}
function templateStringsParam(criteria, conv) {
  return input => {
    const src = input.src.slice(input.start, input.start + 1);

    if (src === '\x00') {
      if (input.templateArgsPos) {
        let argIdx = -1;
        const strIdx = input.templateArgsPos.findIndex((v, i) => {
          argIdx = i;
          return v === input.start;
        });

        if (0 <= strIdx) {
          const o = input.templateArgs[argIdx];

          if (criteria(o)) {
            return {
              succeeded: true,
              next: {
                src: input.src,
                start: input.start + 1,
                end: input.end,
                context: input.context,
                templateArgs: input.templateArgs,
                templateArgsPos: input.templateArgsPos
              },
              tokens: [conv ? conv(o) : o]
            };
          }
        }
      }
    }

    return {
      succeeded: false,
      error: false,
      src: input.src,
      pos: input.start,
      message: `operator "stringTemplatesParam()"`
    };
  };
}
function getStringParsers(params) {
  const seq = charSequence(params.rawToToken);
  const cls = charClass(params.rawToToken);
  const notCls = charClassNot(params.rawToToken);
  const clsFn = charClassByNeedleFn(params.rawToToken);
  const cat = Object(_parser__WEBPACK_IMPORTED_MODULE_0__["transform"])(params.concatTokens);
  const once = Object(_parser__WEBPACK_IMPORTED_MODULE_0__["quantify"])(1, 1);
  const repeat = Object(_parser__WEBPACK_IMPORTED_MODULE_0__["quantify"])(); // TODO: reduce unneccessary call for adding types.

  const qty = (min, max) => Object(_parser__WEBPACK_IMPORTED_MODULE_0__["quantify"])(min, max);

  const combine = Object(_parser__WEBPACK_IMPORTED_MODULE_0__["transform"])();
  const erase = Object(_parser__WEBPACK_IMPORTED_MODULE_0__["transform"])(tokens => []);
  const isAlpha = clsFn(src => {
    const p = src.codePointAt(0);

    if (p === void 0) {
      return -1;
    }

    const c = String.fromCodePoint(p);
    return 'A' <= c && c <= 'Z' || 'a' <= c && c <= 'z' ? c.length : -1;
  });
  const isUpper = clsFn(src => {
    const p = src.codePointAt(0);

    if (p === void 0) {
      return -1;
    }

    const c = String.fromCodePoint(p);
    return 'A' <= c && c <= 'Z' ? c.length : -1;
  });
  const isLower = clsFn(src => {
    const p = src.codePointAt(0);

    if (p === void 0) {
      return -1;
    }

    const c = String.fromCodePoint(p);
    return 'a' <= c && c <= 'z' ? c.length : -1;
  });
  const isNumber = clsFn(src => {
    const p = src.codePointAt(0);

    if (p === void 0) {
      return -1;
    }

    const c = String.fromCodePoint(p);
    return '0' <= c && c <= '9' ? c.length : -1;
  });
  const isNonZeroNumber = clsFn(src => {
    const p = src.codePointAt(0);

    if (p === void 0) {
      return -1;
    }

    const c = String.fromCodePoint(p);
    return '1' <= c && c <= '9' ? c.length : -1;
  });
  const isBinNum = clsFn(src => {
    const p = src.codePointAt(0);

    if (p === void 0) {
      return -1;
    }

    const c = String.fromCodePoint(p);
    return '0' <= c && c <= '1' ? c.length : -1;
  });
  const isOctNum = clsFn(src => {
    const p = src.codePointAt(0);

    if (p === void 0) {
      return -1;
    }

    const c = String.fromCodePoint(p);
    return '0' <= c && c <= '7' ? c.length : -1;
  });
  const isHexNum = clsFn(src => {
    const p = src.codePointAt(0);

    if (p === void 0) {
      return -1;
    }

    const c = String.fromCodePoint(p);
    return 'A' <= c && c <= 'F' || 'a' <= c && c <= 'f' || '0' <= c && c <= '9' ? c.length : -1;
  });
  const isAlNum = clsFn(src => {
    const p = src.codePointAt(0);

    if (p === void 0) {
      return -1;
    }

    const c = String.fromCodePoint(p);
    return 'A' <= c && c <= 'Z' || 'a' <= c && c <= 'z' || '0' <= c && c <= '9' ? c.length : -1;
  });
  const isSpace = clsFn(src => {
    const p = src.codePointAt(0);

    if (p === void 0) {
      return -1;
    }

    const c = String.fromCodePoint(p);
    return (' \f\n\r\t\v​\u00a0\u1680​\u180e' + '\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a' + '​\u2028\u2029\u202f\u205f​\u3000\ufeff').includes(c) ? c.length : -1;
  });
  const isSpaceWithinSingleLine = clsFn(src => {
    const p = src.codePointAt(0);

    if (p === void 0) {
      return -1;
    }

    const c = String.fromCodePoint(p);
    return (' \f\t\v​\u00a0\u1680​\u180e' + '\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a' + '​\u2028\u2029\u202f\u205f​\u3000\ufeff').includes(c) ? c.length : -1;
  });
  const isControl = clsFn(src => {
    const p = src.codePointAt(0);

    if (p === void 0) {
      return -1;
    }

    const c = String.fromCodePoint(p);
    return 0x0000 <= p && p <= 0x001f || 0x007f <= p && p <= 0x009f ? c.length : -1;
  });
  const isWord = clsFn(src => {
    const p = src.codePointAt(0);

    if (p === void 0) {
      return -1;
    }

    const c = String.fromCodePoint(p);
    return (' \f\n\r\t\v​\u00a0\u1680​\u180e' + '\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a' + '​\u2028\u2029\u202f\u205f​\u3000\ufeff').includes(c) || 0x0000 <= p && p <= 0x001f || 0x007f <= p && p <= 0x009f ? -1 : c.length;
  });
  const isNewline = cls('\r\n', '\n', '\r');
  const isAny = clsFn(src => {
    const p = src.codePointAt(0);

    if (p === void 0) {
      return -1;
    }

    const c = String.fromCodePoint(p);
    return c.length;
  });
  const binSep = Object(_parser__WEBPACK_IMPORTED_MODULE_0__["first"])(isBinNum, cls('_'));
  const octSep = Object(_parser__WEBPACK_IMPORTED_MODULE_0__["first"])(isOctNum, cls('_'));
  const hexSep = Object(_parser__WEBPACK_IMPORTED_MODULE_0__["first"])(isHexNum, cls('_'));

  const binaryIntegerNumber = (...prefixes) => combine(erase(Object(_parser__WEBPACK_IMPORTED_MODULE_0__["first"])(...prefixes)), cat(once(isBinNum), repeat(binSep)));

  const octalIntegerNumber = (...prefixes) => combine(erase(Object(_parser__WEBPACK_IMPORTED_MODULE_0__["first"])(...prefixes)), cat(once(isOctNum), repeat(octSep)));

  const hexIntegerValue = (...prefixes) => combine(erase(Object(_parser__WEBPACK_IMPORTED_MODULE_0__["first"])(...prefixes)), cat(once(isHexNum), repeat(hexSep)));

  const decimalIntegerNumber = combine(cat(qty(0, 1)(cls('+', '-')), Object(_parser__WEBPACK_IMPORTED_MODULE_0__["first"])(combine(once(isNonZeroNumber), repeat(Object(_parser__WEBPACK_IMPORTED_MODULE_0__["first"])(isNumber, cls('_')))), seq('0'))));
  const bigDecimalIntegerNumber = combine(cat(decimalIntegerNumber, erase(seq('n'))));
  const floatingPointNumber = combine(cat(qty(0, 1)(cls('+', '-')), Object(_parser__WEBPACK_IMPORTED_MODULE_0__["first"])(combine(once(isNonZeroNumber), repeat(Object(_parser__WEBPACK_IMPORTED_MODULE_0__["first"])(isNumber, cls('_')))), seq('0')), qty(0, 1)(combine(seq('.'), qty(1)(Object(_parser__WEBPACK_IMPORTED_MODULE_0__["first"])(isNumber, cls('_'))))), qty(0, 1)(combine(cls('E', 'e'), qty(0, 1)(cls('+', '-')), Object(_parser__WEBPACK_IMPORTED_MODULE_0__["first"])(combine(once(isNonZeroNumber), repeat(isNumber)), seq('0')))))); // TODO: reduce unneccessary call for adding types.

  return {
    seq,
    cls,
    notCls,
    clsFn,
    classes: {
      alpha: isAlpha,
      upper: isUpper,
      lower: isLower,
      num: isNumber,
      nonzero: isNonZeroNumber,
      bin: isBinNum,
      oct: isOctNum,
      hex: isHexNum,
      alnum: isAlNum,
      space: isSpace,
      spaceWithinSingleLine: isSpaceWithinSingleLine,
      ctrl: isControl,
      newline: isNewline,
      word: isWord,
      any: isAny
    },
    numbers: {
      bin: binaryIntegerNumber,
      oct: octalIntegerNumber,
      hex: hexIntegerValue,
      int: decimalIntegerNumber,
      bigint: bigDecimalIntegerNumber,
      float: floatingPointNumber
    },
    isParam: templateStringsParam,
    cat,
    once,
    repeat,
    qty,
    zeroWidth: helper => Object(_parser__WEBPACK_IMPORTED_MODULE_0__["zeroWidth"])(helper),
    err: message => Object(_parser__WEBPACK_IMPORTED_MODULE_0__["zeroWidthError"])(message),
    beginning: helper => Object(_parser__WEBPACK_IMPORTED_MODULE_0__["beginning"])(helper),
    end: helper => Object(_parser__WEBPACK_IMPORTED_MODULE_0__["end"])(helper),
    first: (...parsers) => Object(_parser__WEBPACK_IMPORTED_MODULE_0__["first"])(...parsers),
    or: (...parsers) => Object(_parser__WEBPACK_IMPORTED_MODULE_0__["or"])(...parsers),
    combine,
    erase,
    trans: fn => Object(_parser__WEBPACK_IMPORTED_MODULE_0__["transform"])(fn),
    ahead: (...parsers) => Object(_parser__WEBPACK_IMPORTED_MODULE_0__["lookAhead"])(...parsers),
    behind: (n, helper) => Object(_parser__WEBPACK_IMPORTED_MODULE_0__["lookBehind"])(n, helper),
    rules: args => Object(_parser__WEBPACK_IMPORTED_MODULE_0__["applyProductionRules"])(args),
    makeProgram: _parser__WEBPACK_IMPORTED_MODULE_0__["makeProgram"]
  };
}

/***/ }),

/***/ "./node_modules/fruitsconfits/modules/lib/types.js":
/*!*********************************************************!*\
  !*** ./node_modules/fruitsconfits/modules/lib/types.js ***!
  \*********************************************************/
/*! exports provided: ParseError, parserInput, templateStringsParserInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParseError", function() { return ParseError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parserInput", function() { return parserInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "templateStringsParserInput", function() { return templateStringsParserInput; });
// Copyright (c) 2019 Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln
class ParseError extends Error {
  constructor(result) {
    super(result.message);
    this.result = result;
  }

}
function parserInput(src, context) {
  return {
    src,
    start: 0,
    end: src.length,
    context: context,
    templateArgs: [],
    templateArgsPos: []
  };
}
function templateStringsParserInput(strings, values, context) {
  const templateArgsPos = [];
  let pos = 0;

  if (values.length) {
    for (let i = 0; i < strings.length; i++) {
      const x = strings[i];

      if (i < values.length) {
        templateArgsPos.push(pos + x.length);
        pos += x.length + 1;
      }
    }
  }

  const joined = strings.join('\x00');
  return {
    src: joined,
    start: 0,
    end: joined.length,
    context: context,
    templateArgs: values,
    templateArgsPos
  };
}

/***/ }),

/***/ "./src/builder.ts":
/*!************************!*\
  !*** ./src/builder.ts ***!
  \************************/
/*! exports provided: build */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "build", function() { return build; });
/* harmony import */ var _lib_prepare__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/prepare */ "./src/lib/prepare.ts");
/* harmony import */ var _lib_run_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/run-query */ "./src/lib/run-query.ts");
/* harmony import */ var _lib_run_dml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/run-dml */ "./src/lib/run-dml.ts");
// Copyright (c) 2020 Shellyl_N and Authors
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



 // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types

function build(builder) {
  const preparedBI = Object(_lib_prepare__WEBPACK_IMPORTED_MODULE_0__["prepareBuilderInfo"])(builder);

  function createTransactionScope(scopeTr, scopeTrOptions, isIsolated) {
    function withTransactionEvents(tr, trOptions, run) {
      return __awaiter(this, void 0, void 0, function* () {
        try {
          if (preparedBI.events.beginTransaction) {
            yield preparedBI.events.beginTransaction({
              resolverData: {},
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              transactionData: tr,
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              transactionOptions: trOptions
            });
          } // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment


          const ret = yield run(tr, trOptions);

          if (preparedBI.events.endTransaction) {
            yield preparedBI.events.endTransaction({
              resolverData: {},
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              transactionData: tr,
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              transactionOptions: trOptions
            }, null);
          } // eslint-disable-next-line @typescript-eslint/no-unsafe-return


          return ret;
        } catch (e) {
          if (preparedBI.events.endTransaction) {
            yield preparedBI.events.endTransaction({
              resolverData: {},
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              transactionData: tr,
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              transactionOptions: trOptions
            }, e);
          }

          throw e;
        }
      });
    }

    function runQuery(strings, ...values) {
      return __awaiter(this, void 0, void 0, function* () {
        const run = (tr, trOptions) => __awaiter(this, void 0, void 0, function* () {
          const query = Object(_lib_prepare__WEBPACK_IMPORTED_MODULE_0__["prepareQuery"])(preparedBI, strings, ...values);
          const ret = yield Object(_lib_run_query__WEBPACK_IMPORTED_MODULE_1__["executeCompiledQuery"])(preparedBI, tr, trOptions, query, null, null, null, null); // eslint-disable-next-line @typescript-eslint/no-unsafe-return

          return ret;
        });

        if (isIsolated) {
          return yield withTransactionEvents({}, void 0, run);
        } else {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-return
          return yield run(scopeTr, scopeTrOptions);
        }
      });
    }

    function runInsert(resolver, obj) {
      return __awaiter(this, void 0, void 0, function* () {
        const run = (tr, trOptions) => __awaiter(this, void 0, void 0, function* () {
          const isArray = Array.isArray(obj);
          const ret = yield Object(_lib_run_dml__WEBPACK_IMPORTED_MODULE_2__["executeInsertDML"])(preparedBI, tr, trOptions, resolver, isArray ? obj : [obj]);

          if (isArray) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            return ret;
          } else {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            return ret[0];
          }
        });

        if (isIsolated) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-return
          return yield withTransactionEvents({}, void 0, run);
        } else {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-return
          return yield run(scopeTr, scopeTrOptions);
        }
      });
    }

    function runUpdate(resolver, obj) {
      return __awaiter(this, void 0, void 0, function* () {
        const run = (tr, trOptions) => __awaiter(this, void 0, void 0, function* () {
          const isArray = Array.isArray(obj);
          const ret = yield Object(_lib_run_dml__WEBPACK_IMPORTED_MODULE_2__["executeUpdateDML"])(preparedBI, tr, trOptions, resolver, isArray ? obj : [obj]);

          if (isArray) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            return ret;
          } else {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            return ret[0];
          }
        });

        if (isIsolated) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-return
          return yield withTransactionEvents({}, void 0, run);
        } else {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-return
          return yield run(scopeTr, scopeTrOptions);
        }
      });
    }

    function runRemove(resolver, obj) {
      return __awaiter(this, void 0, void 0, function* () {
        const run = (tr, trOptions) => __awaiter(this, void 0, void 0, function* () {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-return
          return yield Object(_lib_run_dml__WEBPACK_IMPORTED_MODULE_2__["executeRemoveDML"])(preparedBI, tr, trOptions, resolver, Array.isArray(obj) ? obj : [obj]);
        });

        if (isIsolated) {
          return yield withTransactionEvents({}, void 0, run);
        } else {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-return
          return yield run(scopeTr, scopeTrOptions);
        }
      });
    }

    function transaction(callback, trOptions) {
      return __awaiter(this, void 0, void 0, function* () {
        const tr = {};
        const commands = createTransactionScope(tr, trOptions, false);

        const run = _tr => __awaiter(this, void 0, void 0, function* () {
          yield callback({
            soql: commands.soql,
            insert: commands.insert,
            update: commands.update,
            remove: commands.remove
          }, tr);
        });

        return yield withTransactionEvents(tr, trOptions, run);
      });
    }

    return {
      soql: runQuery,
      insert: runInsert,
      update: runUpdate,
      remove: runRemove,
      transaction
    };
  }

  return createTransactionScope({}, void 0, true);
}

/***/ }),

/***/ "./src/filters.ts":
/*!************************!*\
  !*** ./src/filters.ts ***!
  \************************/
/*! exports provided: applyWhereConditions, applyHavingConditions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyWhereConditions", function() { return applyWhereConditions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyHavingConditions", function() { return applyHavingConditions; });
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/util */ "./src/lib/util.ts");
/* harmony import */ var _lib_call__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/call */ "./src/lib/call.ts");
/* harmony import */ var _lib_cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/cache */ "./src/lib/cache.ts");
// Copyright (c) 2020 Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln




const getOp1Noop = (fieldNameMap, ctx, cache, record) => void 0;

const getOp1AggregateFnValue = (fieldNameMap, ctx, cache, record) => {
  const {
    op,
    op2FieldResultType,
    fnInfo
  } = cache; // eslint-disable-next-line @typescript-eslint/no-unsafe-return

  return Object(_lib_call__WEBPACK_IMPORTED_MODULE_1__["callAggregateFunction"])(ctx, op, fnInfo, op2FieldResultType, record);
};

const getOp1ScalarOnAggFnValue = (fieldNameMap, ctx, cache, record) => {
  const {
    op,
    op2FieldResultType,
    fnInfo
  } = cache; // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access

  const firstRec = record[0]; // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-assignment

  return Object(_lib_call__WEBPACK_IMPORTED_MODULE_1__["callScalarFunction"])(ctx, op, fnInfo, op2FieldResultType, firstRec, record);
};

const getOp1ScalarOnNonAggFnValue = (fieldNameMap, ctx, cache, record) => {
  const {
    op,
    op2FieldResultType,
    fnInfo
  } = cache; // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-assignment

  return Object(_lib_call__WEBPACK_IMPORTED_MODULE_1__["callScalarFunction"])(ctx, op, fnInfo, op2FieldResultType, record, null);
};

const getOp1ImmediateScalarOnAggFnValue = (fieldNameMap, ctx, cache, record) => {
  const {
    op,
    op2FieldResultType,
    fnInfo
  } = cache; // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-assignment

  return Object(_lib_call__WEBPACK_IMPORTED_MODULE_1__["callImmediateScalarFunction"])(ctx, op, fnInfo, op2FieldResultType, null, record);
};

const getOp1ImmediateScalarOnNonAggFnValue = (fieldNameMap, ctx, cache, record) => {
  const {
    op,
    op2FieldResultType,
    fnInfo
  } = cache; // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-assignment

  return Object(_lib_call__WEBPACK_IMPORTED_MODULE_1__["callImmediateScalarFunction"])(ctx, op, fnInfo, op2FieldResultType, record, null);
};

function createOp1Cache(groupFields, isAggregation, ctx, cond) {
  let cache = _lib_cache__WEBPACK_IMPORTED_MODULE_2__["condOp1FnCache"].get(cond);
  const op = cond.operands[0];
  const op2 = cond.operands[1];
  let op2IsDateOrDatetime = false;
  let op2FieldResultType = 'any';

  switch (typeof op2) {
    case 'object':
      if (op2 === null) {// nothing to do
      } else if (Array.isArray(op2)) {// nothing to do
      } else {
        switch (op2.type) {
          case 'date':
          case 'datetime':
            op2IsDateOrDatetime = true;
            op2FieldResultType = op2.type;
            break;
        }
      }

  }

  switch (typeof op) {
    case 'object':
      if (op === null) {// nothing to do (v is null)
      } else if (Array.isArray(op)) {
        throw new Error(`Array is not allowed in the operand(1).`);
      } else {
        switch (op.type) {
          case 'field':
            cache = {
              isField: true,
              isDateOrDatetime: op2IsDateOrDatetime,
              op,
              op2FieldResultType,
              fnInfo: null,
              fn: getOp1Noop
            };
            _lib_cache__WEBPACK_IMPORTED_MODULE_2__["condOp1FnCache"].set(cond, cache);
            break;

          case 'fncall':
            {
              const fnNameI = op.fn.toLowerCase();
              const fnInfo = ctx.functions.find(x => x.name.toLowerCase() === fnNameI);

              switch (fnInfo === null || fnInfo === void 0 ? void 0 : fnInfo.type) {
                case 'aggregate':
                  if (!isAggregation) {
                    throw new Error(`Aggregate function ${fnInfo.name} is not allowed.`);
                  }

                  cache = {
                    isField: false,
                    isDateOrDatetime: false,
                    op,
                    op2FieldResultType,
                    fnInfo,
                    fn: getOp1AggregateFnValue
                  };
                  _lib_cache__WEBPACK_IMPORTED_MODULE_2__["condOp1FnCache"].set(cond, cache);
                  break;

                case 'scalar':
                  if (isAggregation) {
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    if (!Object(_lib_call__WEBPACK_IMPORTED_MODULE_1__["isScalarFnCallable"])(ctx, groupFields, op.args)) {
                      throw new Error(`${op.fn} is not allowed. Aggregate function is needed.`);
                    }

                    cache = {
                      isField: false,
                      isDateOrDatetime: false,
                      op,
                      op2FieldResultType,
                      fnInfo,
                      fn: getOp1ScalarOnAggFnValue
                    };
                    _lib_cache__WEBPACK_IMPORTED_MODULE_2__["condOp1FnCache"].set(cond, cache);
                  } else {
                    cache = {
                      isField: false,
                      isDateOrDatetime: false,
                      op,
                      op2FieldResultType,
                      fnInfo,
                      fn: getOp1ScalarOnNonAggFnValue
                    };
                    _lib_cache__WEBPACK_IMPORTED_MODULE_2__["condOp1FnCache"].set(cond, cache);
                  }

                  break;

                case 'immediate-scalar':
                  cache = {
                    isField: false,
                    isDateOrDatetime: false,
                    op,
                    op2FieldResultType,
                    fnInfo,
                    fn: isAggregation ? getOp1ImmediateScalarOnAggFnValue : getOp1ImmediateScalarOnNonAggFnValue
                  };
                  _lib_cache__WEBPACK_IMPORTED_MODULE_2__["condOp1FnCache"].set(cond, cache);
                  break;

                default:
                  throw new Error(`Unexpected type appears in the operand(1).`);
              }
            }
            break;

          default:
            throw new Error(`Unexpected type appears in the operand(1).`);
        }
      }

      break;

    default:
      throw new Error(`Unexpected type appears in the operand(1).`);
  }

  return cache;
}

function getOp1Value(fieldNameMap, groupFields, isAggregation, ctx, cond, record) {
  var _a;

  let v = null;
  const op = cond.operands[0];
  const cache = (_a = _lib_cache__WEBPACK_IMPORTED_MODULE_2__["condOp1FnCache"].get(cond)) !== null && _a !== void 0 ? _a : createOp1Cache(groupFields, isAggregation, ctx, cond);

  if (op === null) {// NOTE: `cache` is possibly undefined.
    // nothing to do (v is null)
  } else if (Array.isArray(op)) {
    throw new Error(`Array is not allowed in the operand(1).`);
  } else if (cache.isField) {
    // NOTE: Inline expansion
    const {
      isDateOrDatetime,
      op
    } = cache; // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment

    v = Object(_lib_util__WEBPACK_IMPORTED_MODULE_0__["getObjectValueWithFieldNameMap"])(fieldNameMap, record, op.name[op.name.length - 1]);

    if (isDateOrDatetime && v !== null) {
      v = new Date(v).getTime();
    }
  } else {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    v = cache.fn(fieldNameMap, ctx, cache, record);
  } // eslint-disable-next-line @typescript-eslint/no-unsafe-return


  return v;
}

function getOp2Value(ctx, cond, record) {
  const cached = _lib_cache__WEBPACK_IMPORTED_MODULE_2__["condOp2ValueCache"].get(cond);

  if (cached) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return cached.value;
  }

  let v = null;
  const op = cond.operands[1];

  switch (typeof op) {
    case 'object':
      if (op === null) {// nothing to do (v is null)
      } else if (Array.isArray(op)) {
        v = op;
      } else {
        switch (op.type) {
          case 'fncall':
            {
              const fnNameI = op.fn.toLowerCase();
              const fnInfo = ctx.functions.find(x => x.name.toLowerCase() === fnNameI);

              switch (fnInfo === null || fnInfo === void 0 ? void 0 : fnInfo.type) {
                case 'immediate-scalar':
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                  v = Object(_lib_call__WEBPACK_IMPORTED_MODULE_1__["callImmediateScalarFunction"])(ctx, op, fnInfo, 'any', null, null);
                  break;

                default:
                  throw new Error(`Unexpected type appears in the operand(2).`);
              }
            }

          default:
            switch (op.type) {
              case 'date':
              case 'datetime':
                v = new Date(op.value).getTime();
                break;

              default:
                throw new Error(`Unexpected type appears in the operand(2).`);
            }

            break;
        }
      }

      break;

    default:
      v = op; // string or number

      break;
  }

  _lib_cache__WEBPACK_IMPORTED_MODULE_2__["condOp2ValueCache"].set(cond, {
    value: v
  });
  return v;
}

function evalRecursiveCondition(fieldNameMap, groupFields, isAggregation, ctx, w, record) {
  let ret = true;

  switch (typeof w) {
    case 'object':
      if (Array.isArray(w)) {
        throw new Error(`Array is not allowed in the condition.`);
      } else {
        if (w === null) {
          throw new Error(`Unexpected type appears in the condition.`);
        }

        switch (w.type) {
          case 'condition':
            ret = evalCondition(fieldNameMap, groupFields, isAggregation, ctx, w, record);
            break;

          default:
            throw new Error(`Unexpected type appears in the condition.`);
        }
      }

      break;

    default:
      throw new Error(`Unexpected type appears in the condition.`);
  }

  return ret;
}

function convertPattern(v) {
  // NOTE: wildcards are '%' (= /.*/) and '_' (= /./)
  //       wildcard escape sequences are '\%' and '\_'
  const pat0 = v.replace(/[.*+?^=!:${}()|[\]\/]/g, '\\$&');
  let pattern = '';
  let prev = void 0;

  for (const c of pat0) {
    switch (c) {
      case '%':
        if (prev === '\\') {
          pattern += '%';
        } else {
          pattern += '.*';
        }

        break;

      case '_':
        if (prev === '\\') {
          pattern += '_';
        } else {
          pattern += '.';
        }

        break;

      case '\\':
        break;

      default:
        if (prev === '\\') {
          pattern += '\\';
        }

        pattern += c;
    }

    prev = c;
  }

  if (prev === '\\') {
    pattern += '\\';
  }

  return `^${pattern}$`;
}

function evalCondition(fieldNameMap, groupFields, isAggregation, ctx, cond, record) {
  let ret = true;

  EVAL: switch (cond.op) {
    case 'true':
      break;

    case 'and':
      for (const w of cond.operands) {
        if (!evalRecursiveCondition(fieldNameMap, groupFields, isAggregation, ctx, w, record)) {
          ret = false;
          break EVAL;
        }
      }

      break;

    case 'or':
      for (const w of cond.operands) {
        if (evalRecursiveCondition(fieldNameMap, groupFields, isAggregation, ctx, w, record)) {
          break EVAL;
        }
      }

      ret = false;
      break;

    case 'not':
      ret = !evalRecursiveCondition(fieldNameMap, groupFields, isAggregation, ctx, cond.operands[0], record);
      break;

    default:
      {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const v1 = getOp1Value(fieldNameMap, groupFields, isAggregation, ctx, cond, record);
        const v2 = getOp2Value(ctx, cond, record);

        switch (cond.op) {
          case '=':
            if (!(v1 === v2)) {
              ret = false;
            }

            break;

          case '!=':
            if (!(v1 !== v2)) {
              ret = false;
            }

            break;

          case '<':
            if (v1 === null) {
              ret = false;
              break;
            }

            if (v2 === null) {
              ret = false;
              break;
            }

            if (!(v1 < v2)) {
              ret = false;
            }

            break;

          case '<=':
            if (v1 === null) {
              ret = false;
              break;
            }

            if (v2 === null) {
              ret = false;
              break;
            }

            if (!(v1 <= v2)) {
              ret = false;
            }

            break;

          case '>':
            if (v1 === null) {
              ret = false;
              break;
            }

            if (v2 === null) {
              ret = false;
              break;
            }

            if (!(v1 > v2)) {
              ret = false;
            }

            break;

          case '>=':
            if (v1 === null) {
              ret = false;
              break;
            }

            if (v2 === null) {
              ret = false;
              break;
            }

            if (!(v1 >= v2)) {
              ret = false;
            }

            break;

          case 'like':
            if (typeof v1 !== 'string') {
              ret = false;
              break;
            }

            if (typeof v2 !== 'string') {
              throw new Error(`Operator "like": operand(2) should be string.`);
            }

            {
              const re = new RegExp(convertPattern(v2), 'i');

              if (!re.test(v1)) {
                ret = false;
              }
            }
            break;

          case 'not_like':
            if (typeof v1 !== 'string') {
              ret = false;
              break;
            }

            if (typeof v2 !== 'string') {
              throw new Error(`Operator "not_like": operand(2) should be string.`);
            }

            {
              const re = new RegExp(convertPattern(v2), 'i');

              if (re.test(v1)) {
                ret = false;
              }
            }
            break;

          case 'in':
            if (!Array.isArray(v2)) {
              throw new Error(`Operator "in": operand(2) should be array.`);
            }

            if (!v2.filter(w => w !== null).includes(v1)) {
              // NOTE: `(null = ?)`, `(? = null)` and `(null = null)` always FALSE.
              ret = false;
            }

            break;

          case 'not_in':
            if (!Array.isArray(v2)) {
              throw new Error(`Operator "not_in": operand(2) should be array.`);
            }

            if (v1 === null) {
              // NOTE: Emulate SQL's 'not in'; `(null <> null)` always FALSE.
              ret = false;
              break;
            }

            if (v2.includes(null)) {
              ret = false;
              break;
            }

            if (v2.includes(v1)) {
              ret = false;
            }

            break;

          case 'includes':
            if (typeof v1 !== 'string') {
              ret = false;
              break;
            }

            if (!Array.isArray(v2)) {
              throw new Error(`Operator "includes": operand(2) should be array.`);
            }

            ret = false;

            OUTER: for (const p of v2) {
              if (typeof p !== 'string') {
                throw new Error(`Operator "includes": operand(2) array items should be string.`);
              }

              const v1Items = v1.split(';');
              const v2Items = p.split(';');

              for (const q of v2Items) {
                if (!v1Items.includes(q)) {
                  continue OUTER;
                }
              }

              ret = true;
              break;
            }

            break;

          case 'excludes':
            if (typeof v1 !== 'string') {
              // NOTE: Emulate SQL's 'not in'; `(null <> null)` always FALSE.
              ret = false;
              break;
            }

            if (!Array.isArray(v2)) {
              throw new Error(`Operator "excludes": operand(2) should be array.`);
            }

            {
              const v1Items = v1.split(';');

              for (const p of v2) {
                if (typeof p !== 'string') {
                  throw new Error(`Operator "excludes": operand(2) array items should be string.`);
                }

                const v2Items = p.split(';');
                let matched = true;

                for (const q of v2Items) {
                  if (!v1Items.includes(q)) {
                    matched = false;
                    break;
                  }
                }

                if (matched) {
                  ret = false;
                  break;
                }
              }
            }
            break;
        }
      }
      break;
  }

  return ret;
} // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types


function applyWhereConditions(ctx, conds, records) {
  const ret = [];

  if (!records.length) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return ret;
  }

  const fieldNameMap = new Map(Object.keys(records[0]).map(x => [x.toLowerCase(), x]));

  NEXTREC: for (const record of records) {
    for (const cond of conds) {
      if (!evalCondition(fieldNameMap, null, false, ctx, cond, record)) {
        continue NEXTREC;
      }
    }

    ret.push(record);
  } // eslint-disable-next-line @typescript-eslint/no-unsafe-return


  return ret;
} // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types

function applyHavingConditions(ctx, conds, groupedRecsArray) {
  var _a, _b;

  const ret = [];

  if (!groupedRecsArray.length) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return ret;
  }

  const fieldNameMap = new Map(Object.keys(groupedRecsArray[0][0]).map(x => [x.toLowerCase(), x])); // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment

  const firstRec = groupedRecsArray[0][0];
  const groupFields = new Map((_b = (_a = ctx.query) === null || _a === void 0 ? void 0 : _a.groupBy) === null || _b === void 0 ? void 0 : _b.map(w => {
    var _a;

    return [w.toLowerCase(), (_a = Object(_lib_util__WEBPACK_IMPORTED_MODULE_0__["getTrueCaseFieldName"])(firstRec, w)) !== null && _a !== void 0 ? _a : ''];
  }));

  NEXTREC: for (const groupedRecs of groupedRecsArray) {
    for (const cond of conds) {
      if (!evalCondition(fieldNameMap, groupFields, true, ctx, cond, groupedRecs)) {
        continue NEXTREC;
      }
    }

    ret.push(groupedRecs);
  } // eslint-disable-next-line @typescript-eslint/no-unsafe-return


  return ret;
}

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: applyWhereConditions, applyHavingConditions, sortRecords, build, setDefaultStaticResolverConfig, staticJsonResolverBuilder, staticCsvResolverBuilder, passThroughResolverBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/types.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filters */ "./src/filters.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyWhereConditions", function() { return _filters__WEBPACK_IMPORTED_MODULE_1__["applyWhereConditions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyHavingConditions", function() { return _filters__WEBPACK_IMPORTED_MODULE_1__["applyHavingConditions"]; });

/* harmony import */ var _sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sort */ "./src/sort.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sortRecords", function() { return _sort__WEBPACK_IMPORTED_MODULE_2__["sortRecords"]; });

/* harmony import */ var _builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./builder */ "./src/builder.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "build", function() { return _builder__WEBPACK_IMPORTED_MODULE_3__["build"]; });

/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resolvers */ "./src/resolvers.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setDefaultStaticResolverConfig", function() { return _resolvers__WEBPACK_IMPORTED_MODULE_4__["setDefaultStaticResolverConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticJsonResolverBuilder", function() { return _resolvers__WEBPACK_IMPORTED_MODULE_4__["staticJsonResolverBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticCsvResolverBuilder", function() { return _resolvers__WEBPACK_IMPORTED_MODULE_4__["staticCsvResolverBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "passThroughResolverBuilder", function() { return _resolvers__WEBPACK_IMPORTED_MODULE_4__["passThroughResolverBuilder"]; });

// Copyright (c) 2020 Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln






/***/ }),

/***/ "./src/lib/cache.ts":
/*!**************************!*\
  !*** ./src/lib/cache.ts ***!
  \**************************/
/*! exports provided: condOp1FnCache, condOp2ValueCache, nestedFnInfoCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "condOp1FnCache", function() { return condOp1FnCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "condOp2ValueCache", function() { return condOp2ValueCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nestedFnInfoCache", function() { return nestedFnInfoCache; });
// Copyright (c) 2020 Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln
const condOp1FnCache = new WeakMap();
const condOp2ValueCache = new WeakMap();
const nestedFnInfoCache = new WeakMap();

/***/ }),

/***/ "./src/lib/call.ts":
/*!*************************!*\
  !*** ./src/lib/call.ts ***!
  \*************************/
/*! exports provided: callScalarFunction, callImmediateScalarFunction, callAggregateFunction, getGroupFieldTrueCaseName, isScalarFnCallable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callScalarFunction", function() { return callScalarFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callImmediateScalarFunction", function() { return callImmediateScalarFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callAggregateFunction", function() { return callAggregateFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGroupFieldTrueCaseName", function() { return getGroupFieldTrueCaseName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isScalarFnCallable", function() { return isScalarFnCallable; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/lib/util.ts");
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cache */ "./src/lib/cache.ts");
// Copyright (c) 2020 Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln


function callScalarFunction(ctx, field, fnInfo, fieldResultType, // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
record, groupedRecs) {
  const args = field.args.map(a => {
    switch (typeof a) {
      case 'object':
        if (a === null) {
          return a;
        }

        switch (a.type) {
          case 'field':
            {
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              let z = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getObjectValue"])(record, a.name[a.name.length - 1]);

              switch (fieldResultType) {
                case 'date':
                case 'datetime':
                  z = new Date(z).getTime();
                  break;
              } // eslint-disable-next-line @typescript-eslint/no-unsafe-return


              return z;
            }

          case 'date':
          case 'datetime':
            switch (fieldResultType) {
              case 'date':
              case 'datetime':
                return new Date(a.value).getTime();

              default:
                return a.value;
            }

          case 'fncall':
            {
              let argFnInfoTmp = _cache__WEBPACK_IMPORTED_MODULE_1__["nestedFnInfoCache"].get(a);

              if (!argFnInfoTmp) {
                const argFnNameI = a.fn.toLowerCase();
                argFnInfoTmp = ctx.functions.find(x => x.name.toLowerCase() === argFnNameI);
              }

              const argFnInfo = argFnInfoTmp;

              switch (argFnInfo === null || argFnInfo === void 0 ? void 0 : argFnInfo.type) {
                case 'aggregate':
                  if (!groupedRecs) {
                    throw new Error(`Nested function ${a.fn} is not allowed.`);
                  } // eslint-disable-next-line @typescript-eslint/no-unsafe-return


                  return callAggregateFunction(ctx, a, argFnInfo, 'any', groupedRecs);

                case 'scalar':
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
                  return callScalarFunction(ctx, a, argFnInfo, 'any', record, groupedRecs);

                case 'immediate-scalar':
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
                  return callImmediateScalarFunction(ctx, a, argFnInfo, 'any', record, groupedRecs);

                default:
                  throw new Error(`Nested function ${a.fn} is not allowed.`);
              }
            }

          default:
            return a;
        }

      default:
        return a;
    }
  }); // eslint-disable-next-line @typescript-eslint/no-unsafe-return

  return fnInfo.fn(ctx, args, record);
}
function callImmediateScalarFunction(ctx, field, fnInfo, fieldResultType, record, groupedRecs) {
  const args = field.args.map(a => {
    switch (typeof a) {
      case 'object':
        if (a === null) {
          return a;
        }

        switch (a.type) {
          case 'field':
            throw new Error(`Immediate scalar function should not refer the field (${a.name.join('.')}).`);

          case 'date':
          case 'datetime':
            switch (fieldResultType) {
              case 'date':
              case 'datetime':
                return new Date(a.value).getTime();

              default:
                return a.value;
            }

          case 'fncall':
            {
              let argFnInfoTmp = _cache__WEBPACK_IMPORTED_MODULE_1__["nestedFnInfoCache"].get(a);

              if (!argFnInfoTmp) {
                const argFnNameI = a.fn.toLowerCase();
                argFnInfoTmp = ctx.functions.find(x => x.name.toLowerCase() === argFnNameI);
              }

              const argFnInfo = argFnInfoTmp;

              switch (argFnInfo === null || argFnInfo === void 0 ? void 0 : argFnInfo.type) {
                case 'aggregate':
                  if (groupedRecs === null) {
                    throw new Error(`Nested function ${a.fn} is not allowed.`);
                  } // eslint-disable-next-line @typescript-eslint/no-unsafe-return


                  return callAggregateFunction(ctx, a, argFnInfo, 'any', groupedRecs);

                case 'scalar':
                  if (record === null) {
                    throw new Error(`Nested function ${a.fn} is not allowed.`);
                  } // eslint-disable-next-line @typescript-eslint/no-unsafe-return


                  return callScalarFunction(ctx, a, argFnInfo, 'any', record, groupedRecs);

                case 'immediate-scalar':
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
                  return callImmediateScalarFunction(ctx, a, argFnInfo, 'any', record, groupedRecs);

                default:
                  throw new Error(`Nested function ${a.fn} is not allowed.`);
              }
            }

          default:
            return a;
        }

      default:
        return a;
    }
  }); // eslint-disable-next-line @typescript-eslint/no-unsafe-return

  return fnInfo.fn(ctx, args);
}
function callAggregateFunction(ctx, field, fnInfo, fieldResultType, records) {
  const args = field.args.map(a => {
    switch (typeof a) {
      case 'object':
        if (a === null) {
          return a;
        }

        switch (a.type) {
          case 'field':
            {
              // eslint-disable-next-line @typescript-eslint/no-unsafe-return
              let z = records.map(w => Object(_util__WEBPACK_IMPORTED_MODULE_0__["getObjectValue"])(w, a.name[a.name.length - 1]));

              switch (fieldResultType) {
                case 'date':
                case 'datetime':
                  z = z.map(w => new Date(w).getTime());
                  break;
              } // eslint-disable-next-line @typescript-eslint/no-unsafe-return


              return z;
            }

          case 'date':
          case 'datetime':
            switch (fieldResultType) {
              case 'date':
              case 'datetime':
                return new Date(a.value).getTime();

              default:
                return a.value;
            }

          case 'fncall':
            {
              let argFnInfoTmp = _cache__WEBPACK_IMPORTED_MODULE_1__["nestedFnInfoCache"].get(a);

              if (!argFnInfoTmp) {
                const argFnNameI = a.fn.toLowerCase();
                argFnInfoTmp = ctx.functions.find(x => x.name.toLowerCase() === argFnNameI);
              }

              const argFnInfo = argFnInfoTmp;

              switch (argFnInfo === null || argFnInfo === void 0 ? void 0 : argFnInfo.type) {
                case 'scalar':
                  {
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
                    const z = records.map(w => callScalarFunction(ctx, a, argFnInfo, 'any', w, records)); // eslint-disable-next-line @typescript-eslint/no-unsafe-return

                    return z;
                  }

                case 'immediate-scalar':
                  {
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
                    const z = records.map(w => callImmediateScalarFunction(ctx, a, argFnInfo, 'any', w, records)); // eslint-disable-next-line @typescript-eslint/no-unsafe-return

                    return z;
                  }

                default:
                  throw new Error(`Nested function ${a.fn} is not allowed.`);
              }
            }

          default:
            return a;
        }

      default:
        return a;
    }
  }); // eslint-disable-next-line @typescript-eslint/no-unsafe-return

  return fnInfo.fn(ctx, args, records);
}
function getGroupFieldTrueCaseName(groupFields, name) {
  if (groupFields.has(name)) {
    const trueCaseName = groupFields.get(name);

    if (trueCaseName) {
      return trueCaseName;
    }
  }

  return null;
}
function isScalarFnCallable(ctx, groupFields, args) {
  for (const a of args) {
    switch (typeof a) {
      case 'object':
        switch (a === null || a === void 0 ? void 0 : a.type) {
          case 'field':
            {
              const trueCaseName = getGroupFieldTrueCaseName(groupFields, a.name[a.name.length - 1]);

              if (!trueCaseName) {
                return false;
              }
            }
            break;

          case 'fncall':
            {
              const argFnNameI = a.fn.toLowerCase();
              const argFnInfo = ctx.functions.find(x => x.name.toLowerCase() === argFnNameI);

              switch (argFnInfo === null || argFnInfo === void 0 ? void 0 : argFnInfo.type) {
                case 'scalar':
                  if (!isScalarFnCallable(ctx, groupFields, a.args)) {
                    return false;
                  }

              }
            }
            break;
        }

        break;
    }
  }

  return true;
}

/***/ }),

/***/ "./src/lib/compiler.ts":
/*!*****************************!*\
  !*** ./src/lib/compiler.ts ***!
  \*****************************/
/*! exports provided: compile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compile", function() { return compile; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/lib/util.ts");
// Copyright (c) 2020 Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln


function makeResolverTree(builder, path, args) {
  const argResolverNameI = args.resolverName.toLowerCase();
  const argfieldOrRelNameI = args.fieldOrRelName.toLowerCase();
  const trueCaseArgResolverName = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getTrueCaseFieldName"])(builder.relationships, args.resolverName);

  if (!trueCaseArgResolverName) {
    throw new Error(`Resolver '${args.resolverName}' is not found.`);
  }

  const found = path.find(x => x.resolverName.toLowerCase() === argResolverNameI && x.fieldOrRelName.toLowerCase() === argfieldOrRelNameI);

  if (found) {
    return found;
  }

  const children = [];
  const ret = {
    fieldOrRelName: args.fieldOrRelName,
    resolverName: trueCaseArgResolverName,
    // fkeyIdName: '', // TODO:
    direction: args.direction,
    children: children
  };
  const q = builder.relationships[trueCaseArgResolverName];
  const nextPath = path.concat([ret]);

  for (const k of Object.keys(q)) {
    const c = q[k];

    if (Array.isArray(c)) {
      children.push(makeResolverTree(builder, nextPath, {
        resolverName: c[0],
        fieldOrRelName: k,
        direction: 2
        /* MasterToDetail */

      }));
    } else if (typeof c === 'string') {
      children.push(makeResolverTree(builder, nextPath, {
        resolverName: c,
        fieldOrRelName: k,
        direction: 1
        /* DetailsToMaster */

      }));
    } else {
      children.push(makeResolverTree(builder, nextPath, {
        resolverName: c.resolver,
        fieldOrRelName: k,
        direction: 1
        /* DetailsToMaster */

      }));
    }
  }

  return ret;
}

function findResolver(query, x) {
  const rn = x.name.slice(0, x.name.length - 1);
  return query.from.find(w => Object(_util__WEBPACK_IMPORTED_MODULE_0__["isEqualComplexName"])(w.name, rn));
}

function registerFields(query, x, defaultResolver, fn) {
  var _a;

  const resolver = (_a = findResolver(query, x)) !== null && _a !== void 0 ? _a : defaultResolver;

  if (resolver) {
    fn(resolver).add(x.name[x.name.length - 1]);
  }
}

function flatConditions(dest, parentOp, cond) {
  const recurse = (op, x) => {
    const c = [];
    flatConditions(c, op, x);
    x.operands = c;
    dest.push(x);
  };

  const pushOperands = () => {
    for (const x of cond.operands) {
      switch (typeof x) {
        case 'object':
          if (x === null || Array.isArray(x)) {
            throw new Error(`Unexpected AST is found.`);
          } else {
            switch (x.type) {
              case 'condition':
                switch (x.op) {
                  case 'and':
                  case 'or':
                  case 'not':
                    if (x.op !== 'not' && x.op === parentOp) {
                      flatConditions(dest, x.op, x);
                    } else {
                      recurse(x.op, x);
                    }

                    break;

                  default:
                    dest.push(x);
                    break;
                }

                break;

              default:
                throw new Error(`Unexpected AST ${x.type} is found.`);
            }
          }

          break;

        default:
          throw new Error(`Unexpected AST is found.`);
      }
    }
  };

  switch (cond.op) {
    case 'and':
    case 'or':
    case 'not':
      if (cond.op === parentOp) {
        pushOperands();
      } else {
        recurse(cond.op, cond);
      }

      break;

    default:
      dest.push(cond);
      break;
  }
}

function recureseForEachConditionFieldsFncall(x, fn) {
  for (const arg of x.args) {
    switch (typeof arg) {
      case 'object':
        if (arg === null) {// NOTE: Nothing to do.
        } else {
          switch (arg.type) {
            case 'field':
              fn(arg);
              break;

            case 'fncall':
              recureseForEachConditionFieldsFncall(arg, fn);
              break;
          }
        }

        break;
    }
  }
}

function recureseForEachConditionFields(cond, fn) {
  switch (cond.type) {
    case 'condition':
      for (const x of cond.operands) {
        switch (typeof x) {
          case 'object':
            if (x === null) {// NOTE: never reach here.
            } else if (Array.isArray(x)) {// NOTE: Nothing to do. It is data.
            } else {
              switch (x.type) {
                case 'condition':
                  recureseForEachConditionFields(x, fn);
                  break;

                case 'field':
                  fn(x);
                  break;

                case 'fncall':
                  for (const arg of x.args) {
                    switch (typeof arg) {
                      case 'object':
                        if (arg === null) {// NOTE: Nothing to do.
                        } else {
                          switch (arg.type) {
                            case 'field':
                              fn(arg);
                              break;

                            case 'fncall':
                              recureseForEachConditionFieldsFncall(arg, fn);
                              break;
                          }
                        }

                        break;
                    }
                  }

                  break;
              }
            }

            break;
        }
      }

      break;
  }

  return cond;
}

function normalize(builder, query, parentName, parentAliases) {
  var _a, _b, _c, _d; // Check and normalize `from` resolvers


  const resolverAliases = new Map(parentAliases !== null && parentAliases !== void 0 ? parentAliases : []);

  if (parentName.length === 0 && query.from[0].name.length > 1) {
    throw new Error('Relationship name is not allowed at first item of root level from clause.');
  }

  {
    const x = query.from[0];

    if (query.from[0].name.length > 1) {
      while (resolverAliases.has(x.name[0].toLowerCase())) {
        // TODO: set max loop
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        x.name = resolverAliases.get(x.name[0].toLowerCase()).concat(x.name.slice(1));
      }
    }

    if (parentName.length > 0) {
      x.name = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getFullQualifiedName"])(parentName, x.name);

      if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isEqualComplexName"])(x.name.slice(0, parentName.length), parentName)) {
        throw new Error(`Resolver name ${x.name.join('.')} is not match to parent resolver ${parentName.join('.')}`);
      }
    }
  }
  const primaryResolverName = query.from[0].name;

  if (query.from[0].aliasName) {
    resolverAliases.set(query.from[0].aliasName.toLowerCase(), primaryResolverName);
  }

  query.whereSubQueries = [];
  query.havingSubQueries = [];
  query.selectSubQueries = [];

  for (const x of query.from.slice(1)) {
    if (x.name.length === 1) {
      x.name = primaryResolverName.concat(x.name);
    } else {
      let nameI = x.name[0].toLowerCase();

      while (resolverAliases.has(nameI)) {
        // TODO: set max loop
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        x.name = resolverAliases.get(nameI).concat(x.name.slice(1));
        nameI = x.name[0].toLowerCase();
      }

      x.name = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getFullQualifiedName"])(primaryResolverName, x.name);
    }

    if (x.aliasName) {
      resolverAliases.set(x.aliasName.toLowerCase(), x.name);
    }
  }

  const fieldAliasNames = new Map();
  let normalizeTarget = 'select';

  const normalizeSelectField = x => {
    // Resolve field alias names
    switch (normalizeTarget) {
      case 'select':
        if (x.aliasName) {
          fieldAliasNames.set(x.aliasName.toLowerCase(), x.name);
        }

        break;

      case 'where':
      case 'having':
      case 'orderby':
        if (x.name.length === 1) {
          const nameI = x.name[0].toLowerCase();

          if (fieldAliasNames.has(nameI)) {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            x.name = fieldAliasNames.get(nameI);
          }
        }

        break;
    } // Resolve resolver alias names


    if (x.name.length === 1) {
      x.name = primaryResolverName.concat(x.name);
    } else {
      let nameI = x.name[0].toLowerCase();

      while (resolverAliases.has(nameI)) {
        // TODO: set max loop
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        x.name = resolverAliases.get(nameI).concat(x.name.slice(1));
        nameI = x.name[0].toLowerCase();
      }

      x.name = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getFullQualifiedName"])(primaryResolverName, x.name);
      const rn = x.name.slice(0, x.name.length - 1);

      if (!query.from.find(w => Object(_util__WEBPACK_IMPORTED_MODULE_0__["isEqualComplexName"])(w.name, rn))) {
        query.from.push({
          name: rn,
          aliasName: null
        });
      }
    }

    return x;
  };

  const normalizeFnCall = (x, opIndex) => {
    const fnNameI = x.fn.toLowerCase();
    const found = builder.functions.find(z => z.name.toLowerCase() === fnNameI);

    if (!found) {
      throw new Error(`Function '${x.fn}' is not found.`);
    }

    switch (normalizeTarget) {
      case 'select':
        if (found.type === 'aggregate' && !query.groupBy) {
          query.groupBy = [];
        }

        break;

      case 'where':
        if (found.type === 'aggregate') {
          // NOTE: scalar and immediate-scalar is allowed.
          throw new Error(`Aggregate function '${x.fn}' is not allowed.`);
        }

        if (opIndex !== 0 && found.type !== 'immediate-scalar') {
          throw new Error(`Function '${x.fn}' is not allowed at operand ${opIndex + 1}.`);
        }

        break;

      case 'having':
        if (opIndex !== 0 && found.type !== 'immediate-scalar') {
          throw new Error(`Function '${x.fn}' is not allowed at operand ${opIndex + 1}.`);
        }

        break;
    }

    for (const arg of x.args) {
      switch (typeof arg) {
        case 'object':
          if (arg === null) {// NOTE: Nothing to do.
          } else {
            switch (arg.type) {
              case 'field':
                normalizeSelectField(arg);
                break;

              case 'fncall':
                normalizeFnCall(arg, 0); // NOTE: treat as opIndex = 0 (always correct)

                break;
            }
          }

          break;
      }
    }

    return x;
  };

  const normalizeCondition = cond => {
    switch (cond.type) {
      case 'condition':
        for (let i = 0; i < cond.operands.length; i++) {
          const x = cond.operands[i];

          switch (typeof x) {
            case 'object':
              if (x === null) {// NOTE: never reach here.
              } else if (Array.isArray(x)) {// NOTE: Nothing to do. It is data.
              } else {
                switch (x.type) {
                  case 'condition':
                    normalizeCondition(x);
                    break;

                  case 'field':
                    normalizeSelectField(x);
                    break;

                  case 'fncall':
                    normalizeFnCall(x, i);
                    break;

                  case 'subquery':
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    (normalizeTarget === 'where' ? query.whereSubQueries : query.havingSubQueries).push(x);
                    x.query = normalize(builder, x.query, [], null);
                    break;
                }
              }

              break;
          }
        }

        break;
    }

    return cond;
  }; // Check and normalize `select` fields


  for (let i = 0; i < query.select.length; i++) {
    const x = query.select[i];

    switch (x.type) {
      case 'field':
        normalizeSelectField(x);
        break;

      case 'fncall':
        normalizeFnCall(x, i);
        break;

      case 'subquery':
        query.selectSubQueries.push(x);
        x.query = normalize(builder, x.query, primaryResolverName, resolverAliases);
        break;
    }
  } // Check and normalize `where` fields


  if (query.where) {
    normalizeTarget = 'where';
    normalizeCondition(query.where[0]);
  } // Check and normalize `having` fields


  if (query.having) {
    normalizeTarget = 'having';
    normalizeCondition(query.having[0]);
  } // Check and normalize `orderBy` fields


  if (query.orderBy) {
    normalizeTarget = 'orderby';

    for (const x of query.orderBy) {
      normalizeSelectField(x);
    }
  }

  for (const x of query.from) {
    x.queryFields = new Set();
    x.queryFieldsMap = new Map();
    x.condFields = new Set();
    x.condAliasFields = new Set();
    x.havingCondFields = new Set(); // fieldAliasNames
    // sortFieldNames

    x.relationshipIdFields = new Set();
  }

  const registerQueryFields = x => // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  registerFields(query, x, query.from[0], rslv => rslv.queryFields);

  const registerCondFields = x => // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  registerFields(query, x, query.from[0], rslv => rslv.condFields);

  const registerHavingCondFields = x => // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  registerFields(query, x, query.from[0], rslv => rslv.havingCondFields);

  let exprCount = 0;

  const collectFncallQueryFields = (x, nested) => {
    if (!nested) {
      if (!x.aliasName) {
        x.aliasName = `expr${exprCount++}`; // TODO: Check conflict
      }
    }

    let resolver = void 0;

    for (const arg of x.args) {
      switch (typeof arg) {
        case 'object':
          if (arg === null) {// NOTE: Nothing to do.
          } else {
            switch (arg.type) {
              case 'field':
                registerQueryFields(arg);

                if (!resolver) {
                  // BUG: TODO: Check all arguments are same resolver's field.
                  resolver = findResolver(query, arg);
                }

                break;

              case 'fncall':
                {
                  const resolverTmp = collectFncallQueryFields(arg, true);

                  if (!resolver) {
                    resolver = resolverTmp;
                  }
                }
                break;
            }
          }

          break;
      }
    }

    if (!nested) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      (resolver !== null && resolver !== void 0 ? resolver : query.from[0]).queryFieldsMap.set(x.aliasName, x);
    }

    return resolver;
  };

  for (const x of query.select) {
    switch (x.type) {
      case 'field':
        {
          registerQueryFields(x);
          const resolver = findResolver(query, x); // TODO: find twice!
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

          resolver === null || resolver === void 0 ? void 0 : resolver.queryFieldsMap.set(x.name[x.name.length - 1], x);
        }
        break;

      case 'fncall':
        collectFncallQueryFields(x, false);
        break;
    }
  }

  if (query.where) {
    recureseForEachConditionFields(query.where[0], registerCondFields);
  }

  if (query.having) {
    recureseForEachConditionFields(query.having[0], registerHavingCondFields);
  }

  if (query.groupBy) {
    for (const x of query.groupBy) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      query.from[0].havingCondFields.add(x);
    }
  }

  query.from[0].name = primaryResolverName; // Check resolvers' paths

  const primaryResolverRootTrueCaseName = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getTrueCaseFieldName"])(builder.relationships, primaryResolverName[0]);

  if (!primaryResolverRootTrueCaseName) {
    throw new Error(`Resolver '${primaryResolverName[0]}' is not found.`);
  }

  const resolverTree = makeResolverTree(builder, [], {
    resolverName: primaryResolverRootTrueCaseName,
    fieldOrRelName: primaryResolverRootTrueCaseName,
    direction: 1
    /* DetailsToMaster */

  });

  for (const x of query.from) {
    let rt = [resolverTree];
    let lastFound;

    for (let j = 0; j < x.name.length; j++) {
      const name = x.name[j];
      const nameI = name.toLowerCase();
      const found = rt.find(z => z.fieldOrRelName.toLowerCase() === nameI);

      if (found) {
        lastFound = found;
        rt = found.children;
        x.name[j] = found.fieldOrRelName; // NOTE: fix case
      } else {
        throw new Error(`Resolver '${name}' is not found.`);
      }
    }

    if (lastFound) {
      x.resolver = builder.resolvers.query[lastFound.resolverName];
      x.resolverName = lastFound.resolverName;
    }
  }

  if (query.where) {
    const c = [];
    flatConditions(c, 'and', query.where[0]);
    query.where = c;
  }

  if (query.having) {
    const c = [];
    flatConditions(c, 'and', query.having[0]);
    query.having = c;
  } // TODO: Error if subquery appears `or`'s 2nd or later operand.


  query.from = query.from.slice(0, 1).concat(query.from.slice(1).sort((a, b) => a.name.length - b.name.length));

  for (let i = 0; i < query.from.length; i++) {
    const x = query.from[i];
    {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      x.fieldAliasNames = new Set(Array.from(x.queryFieldsMap.entries()).map(c => {
        const f = c[1]; // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

        if (f.aliasName && !x.queryFields.has(f.aliasName)) {
          return f.aliasName.toLowerCase();
        } else {
          return '';
        }
      }).filter(c => !!c));

      for (const c of x.fieldAliasNames) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        if (x.condFields.has(c)) {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          x.condFields.delete(c); // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

          x.condAliasFields.add(c);
        }
      }
    }
    {
      x.sortFieldNames = new Set(query.orderBy ? query.orderBy.filter(c => x.name.length + 1 === c.name.length && Object(_util__WEBPACK_IMPORTED_MODULE_0__["isEqualComplexName"])(x.name, c.name.slice(0, x.name.length))) // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      .filter(c => !x.fieldAliasNames.has(c.name[c.name.length - 1].toLowerCase())).map(c => c.name[c.name.length - 1]) : []);
    }
    {
      const resolverName = (_a = x.resolverName) !== null && _a !== void 0 ? _a : '';

      for (let j = i + 1; j < query.from.length; j++) {
        const c = query.from[j];

        if (x.name.length + 1 === c.name.length && Object(_util__WEBPACK_IMPORTED_MODULE_0__["isEqualComplexName"])(x.name, c.name.slice(0, x.name.length))) {
          const childResolverName = (_b = c.resolverName) !== null && _b !== void 0 ? _b : ''; // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-non-null-assertion

          const childRelationshipInfo = (_d = ((_c = builder.relationships[resolverName]) !== null && _c !== void 0 ? _c : {})[childResolverName]) !== null && _d !== void 0 ? _d : {}; // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access

          const childIdField = childRelationshipInfo.id // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          ? childRelationshipInfo.id // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          : builder.rules.foreignIdFieldName(childResolverName);

          if (childIdField) {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            x.relationshipIdFields.add(childIdField);
          }
        }
      }
    }
  }

  return query;
}

function compile(builder, query) {
  return normalize(builder, query, [], null);
}

/***/ }),

/***/ "./src/lib/csv-parser.ts":
/*!*******************************!*\
  !*** ./src/lib/csv-parser.ts ***!
  \*******************************/
/*! exports provided: parse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony import */ var fruitsconfits_modules_lib_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fruitsconfits/modules/lib/types */ "./node_modules/fruitsconfits/modules/lib/types.js");
/* harmony import */ var fruitsconfits_modules_lib_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fruitsconfits/modules/lib/parser */ "./node_modules/fruitsconfits/modules/lib/parser.js");
/* harmony import */ var fruitsconfits_modules_lib_string_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fruitsconfits/modules/lib/string-parser */ "./node_modules/fruitsconfits/modules/lib/string-parser.js");
// Copyright (c) 2020 Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln



const $s = Object(fruitsconfits_modules_lib_string_parser__WEBPACK_IMPORTED_MODULE_2__["getStringParsers"])({
  rawToToken: rawToken => rawToken,
  concatTokens: tokens => tokens.length ? // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
  [tokens.reduce((a, b) => a + b)] : []
});
const {
  seq,
  cls,
  notCls,
  classes,
  numbers,
  cat,
  repeat,
  end,
  first,
  combine,
  erase,
  trans,
  ahead,
  makeProgram
} = $s;
const decimalIntegerValue = trans(tokens => [Number.parseInt(tokens[0].replace(/_/g, ''), 10)])(numbers.int);
const floatingPointNumberValue = trans(tokens => [Number.parseFloat(tokens[0].replace(/_/g, ''))])(numbers.float);
const numberValue = first(floatingPointNumberValue, decimalIntegerValue);
const trueValue = trans(tokens => [true])(seq('true'));
const falseValue = trans(tokens => [false])(seq('false'));
const quoted = trans(input => input.length ? input : [''])(erase(repeat(classes.spaceWithinSingleLine), cls('"')), cat(repeat(first(trans(input => ['"'])(seq('""')), notCls('"')))), erase(cls('"'), repeat(erase(classes.spaceWithinSingleLine))));
const nakidNum = trans(input => input.length ? input : [null])(erase(repeat(classes.spaceWithinSingleLine)), first(trueValue, falseValue, numberValue), erase(repeat(classes.spaceWithinSingleLine)), ahead(first(cls(',', '\r\n', '\n', '\r'), end())));
const nakid = trans(input => input.length ? [input[0] ? input[0].trim() : ''] : [null])(erase(repeat(classes.spaceWithinSingleLine)), cat(repeat(first(erase(classes.spaceWithinSingleLine, ahead(cls(',', '\r\n', '\n', '\r'))), notCls(',', '\r\n', '\n', '\r')))));
const cell = first(quoted, nakidNum, nakid);
const row = trans(input => [input])(cell, repeat(combine(erase(seq(',')), cell)));
const rows = makeProgram(combine(row, repeat(combine(erase(classes.newline), row)), end())); // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types

function parse(s) {
  const z = rows(Object(fruitsconfits_modules_lib_types__WEBPACK_IMPORTED_MODULE_0__["parserInput"])(s));

  if (!z.succeeded) {
    throw new Error(Object(fruitsconfits_modules_lib_parser__WEBPACK_IMPORTED_MODULE_1__["formatErrorMessage"])(z));
  }

  return z.tokens;
}

/***/ }),

/***/ "./src/lib/datetime-util.ts":
/*!**********************************!*\
  !*** ./src/lib/datetime-util.ts ***!
  \**********************************/
/*! exports provided: getUTCDayInYear, getDayInYear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUTCDayInYear", function() { return getUTCDayInYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDayInYear", function() { return getDayInYear; });
// Copyright (c) 2020 Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function getUTCDayInYear(d) {
  const d0 = Date.UTC(d.getUTCFullYear(), 0, 1);
  const d1 = Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());
  return (d1 - d0) / (1000 * 60 * 60 * 24) + 1;
} // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types

function getDayInYear(d) {
  const d0 = Date.UTC(d.getFullYear(), 0, 1);
  const d1 = Date.UTC(d.getFullYear(), d.getMonth(), d.getDate());
  return (d1 - d0) / (1000 * 60 * 60 * 24) + 1;
}
/*
export function getUTCWeekInYearISO(d: Date) {
    // ISO 8601 week number
    // Weeks starting on Monday.
    // The first week of year (W1) contains first Thursday.
    const dcMon = d.getUTCMonth();
    const dcDate = d.getUTCDate();

    if (dcMon === 11 && dcDate >= 29) {
        const d2 = new Date(Date.UTC(d.getUTCFullYear() + 1, 0, 1));
        const day2 = (d2.getUTCDay() + 6) % 7; // Monday is 0
        if (day2 <= 3) {
            // Mon, Tue, Wed, Thu
            //  29   30   31   01  (day2 === 3)
            //  30   31   01       (day2 === 2)
            //  31   01            (day2 === 1)
            //  01                 (day2 === 0)
            // Next year's first week is W01.
            if (day2 + dcDate >= 32) {
                return 1;
            }
        }
    }

    const d0 = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    const day0 = (d0.getUTCDay() + 6) % 7; // Monday is 0

    const ds = d0.getTime() - ((1000 * 60 * 60 * 24) * day0);

    const dc = Date.UTC(d.getUTCFullYear(), dcMon, dcDate);
    const diff = Math.floor((dc - ds) / (1000 * 60 * 60 * 24 * 7));

    if (day0 > 3) {
        // First day of year is: Fri, Sat, Sun
        // First day of year is last year's final week.
        if (diff === 0) {
            // Last year's final week.
            const d1 = new Date(Date.UTC(d.getUTCFullYear() - 1, 0, 1));
            const day1 = (d1.getUTCDay() + 6) % 7; // Monday is 0

            const dp = d1.getTime() - ((1000 * 60 * 60 * 24) * day1);
            const diff1 = Math.floor((dc - dp) / (1000 * 60 * 60 * 24 * 7));
            if (day1 > 3) {
                // Fri, Sat, Sun
                return diff1;
            } else {
                // Mon, Tue, Wed, Thu
                return diff1 + 1;
            }
        } else {
            return diff;
        }
    } else {
        // First day of year is: Mon, Tue, Wed, Thu
        // First day of year is this year's first week.
        return diff + 1;
    }
}
*/

/***/ }),

/***/ "./src/lib/functions.ts":
/*!******************************!*\
  !*** ./src/lib/functions.ts ***!
  \******************************/
/*! exports provided: fnInfo_cast_to_string, fnInfo_cast_to_number, fnInfo_cast_to_boolean, fnInfo_concat, fnInfo_add, fnInfo_sub, fnInfo_mul, fnInfo_div, fnInfo_mod, fnInfo_count, fnInfo_count_distinct, fnInfo_sum, fnInfo_avg, fnInfo_max, fnInfo_min, fnInfo_calendar_month, fnInfo_calendar_month_lc, fnInfo_calendar_quarter, fnInfo_calendar_quarter_lc, fnInfo_calendar_year, fnInfo_calendar_year_lc, fnInfo_day_in_month, fnInfo_day_in_month_lc, fnInfo_day_in_week, fnInfo_day_in_week_lc, fnInfo_day_in_year, fnInfo_day_in_year_lc, fnInfo_day_only, fnInfo_day_only_lc, fnInfo_hour_in_day, fnInfo_hour_in_day_lc, fnInfo_week_in_month, fnInfo_week_in_month_lc, fnInfo_week_in_year, fnInfo_week_in_year_lc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnInfo_cast_to_string", function() { return fnInfo_cast_to_string; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnInfo_cast_to_number", function() { return fnInfo_cast_to_number; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnInfo_cast_to_boolean", function() { return fnInfo_cast_to_boolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnInfo_concat", function() { return fnInfo_concat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnInfo_add", function() { return fnInfo_add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnInfo_sub", function() { return fnInfo_sub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnInfo_mul", function() { return fnInfo_mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnInfo_div", function() { return fnInfo_div; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnInfo_mod", function() { return fnInfo_mod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnInfo_count", function() { return fnInfo_count; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnInfo_count_distinct", function() { return fnInfo_count_distinct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnInfo_sum", function() { return fnInfo_sum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnInfo_avg", function() { return fnInfo_avg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnInfo_max", function() { return fnInfo_max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnInfo_min", function() { return fnInfo_min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnInfo_calendar_month", function() { return fnInfo_calendar_month; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnInfo_calendar_month_lc", function() { return fnInfo_calendar_month_lc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnInfo_calendar_quarter", function() { return fnInfo_calendar_quarter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnInfo_calendar_quarter_lc", function() { return fnInfo_calendar_quarter_lc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnInfo_calendar_year", function() { return fnInfo_calendar_year; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnInfo_calendar_year_lc", function() { return fnInfo_calendar_year_lc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnInfo_day_in_month", function() { return fnInfo_day_in_month; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnInfo_day_in_month_lc", function() { return fnInfo_day_in_month_lc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnInfo_day_in_week", function() { return fnInfo_day_in_week; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnInfo_day_in_week_lc", function() { return fnInfo_day_in_week_lc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnInfo_day_in_year", function() { return fnInfo_day_in_year; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnInfo_day_in_year_lc", function() { return fnInfo_day_in_year_lc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnInfo_day_only", function() { return fnInfo_day_only; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnInfo_day_only_lc", function() { return fnInfo_day_only_lc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnInfo_hour_in_day", function() { return fnInfo_hour_in_day; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnInfo_hour_in_day_lc", function() { return fnInfo_hour_in_day_lc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnInfo_week_in_month", function() { return fnInfo_week_in_month; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnInfo_week_in_month_lc", function() { return fnInfo_week_in_month_lc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnInfo_week_in_year", function() { return fnInfo_week_in_year; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnInfo_week_in_year_lc", function() { return fnInfo_week_in_year_lc; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/lib/util.ts");
/* harmony import */ var _datetime_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datetime-util */ "./src/lib/datetime-util.ts");
// Copyright (c) 2020 Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln


const fnInfo_cast_to_string = {
  type: 'scalar',
  name: 'cast_to_string',
  fn: (ctx, args, records) => {
    if (args.length > 0) {
      if (args[0] === null) {
        return null;
      }

      return String(args[0]);
    }

    throw new Error(`Argument of function "cast_to_string" should be field.`);
  }
};
const fnInfo_cast_to_number = {
  type: 'scalar',
  name: 'cast_to_number',
  fn: (ctx, args, records) => {
    if (args.length > 0) {
      if (args[0] === null) {
        return null;
      }

      return Number(args[0]);
    }

    throw new Error(`Argument of function "cast_to_number" should be field.`);
  }
};
const fnInfo_cast_to_boolean = {
  type: 'scalar',
  name: 'cast_to_boolean',
  fn: (ctx, args, records) => {
    if (args.length > 0) {
      if (args[0] === null) {
        return null;
      }

      return Boolean(args[0]);
    }

    throw new Error(`Argument of function "cast_to_boolean" should be field.`);
  }
};
const fnInfo_concat = {
  type: 'scalar',
  name: 'concat',
  fn: (ctx, args, records) => {
    if (args.length > 0) {
      const z = args.filter(c => c !== null);

      if (z.length === 0) {
        return null;
      }

      return z.map(c => String(c)).join('');
    }

    throw new Error(`Argument of function "concat" should be field.`);
  }
};
const fnInfo_add = {
  type: 'scalar',
  name: 'add',
  fn: (ctx, args, records) => {
    if (args.length > 1) {
      const z = args.filter(c => c !== null);

      if (z.length === 0) {
        return null;
      }

      return z.map(c => Number(c)).reduce((a, b) => a + b);
    }

    throw new Error(`Argument of function "add" should be field.`);
  }
};
const fnInfo_sub = {
  type: 'scalar',
  name: 'sub',
  fn: (ctx, args, records) => {
    if (args.length > 1) {
      if (args[0] === null) {
        return null;
      }

      return args.filter(c => c !== null).map(c => Number(c)).reduce((a, b) => a - b);
    }

    throw new Error(`Argument of function "sub" should be field.`);
  }
};
const fnInfo_mul = {
  type: 'scalar',
  name: 'mul',
  fn: (ctx, args, records) => {
    if (args.length > 1) {
      const z = args.filter(c => c !== null);

      if (z.length === 0) {
        return null;
      }

      return z.map(c => Number(c)).reduce((a, b) => a * b);
    }

    throw new Error(`Argument of function "mul" should be field.`);
  }
};
const fnInfo_div = {
  type: 'scalar',
  name: 'div',
  fn: (ctx, args, records) => {
    if (args.length > 1) {
      if (args[0] === null) {
        return null;
      }

      return args.filter(c => c !== null).map(c => Number(c)).reduce((a, b) => a / b);
    }

    throw new Error(`Argument of function "div" should be field.`);
  }
};
const fnInfo_mod = {
  type: 'scalar',
  name: 'mod',
  fn: (ctx, args, records) => {
    if (args.length > 1) {
      if (args[0] === null) {
        return null;
      }

      return args.filter(c => c !== null).map(c => Number(c)).reduce((a, b) => a % b);
    }

    throw new Error(`Argument of function "div" should be field.`);
  }
};
const fnInfo_count = {
  type: 'aggregate',
  name: 'count',
  fn: (ctx, args, records) => {
    if (args.length === 0) {
      return records.length;
    } else {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const arg = args[0];

      if (Array.isArray(arg)) {
        return arg.filter(r => r === null || r === void 0 ? false : true).length;
      }

      throw new Error(`Argument of function "count" should be field.`);
    }
  }
};
const fnInfo_count_distinct = {
  type: 'aggregate',
  name: 'count_distinct',
  fn: (ctx, args, records) => {
    if (args.length > 0) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const arg = args[0];

      if (Array.isArray(arg)) {
        const w = arg.filter(r => r === null || r === void 0 ? false : true).map(x => JSON.stringify(x));
        return new Set(w).size;
      }
    }

    throw new Error(`Argument of function "count_distinct" should be field.`);
  }
};
const fnInfo_sum = {
  type: 'aggregate',
  name: 'sum',
  fn: (ctx, args, records) => {
    if (args.length > 0) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const arg = args[0];

      if (Array.isArray(arg)) {
        const w = arg.filter(r => typeof r === 'number' && !Number.isNaN(r) ? true : false);

        if (w.length) {
          return w.reduce((a, b) => a + b);
        } else {
          return null;
        }
      }
    }

    throw new Error(`Argument of function "sum" should be field.`);
  }
};
const fnInfo_avg = {
  type: 'aggregate',
  name: 'avg',
  fn: (ctx, args, records) => {
    if (args.length > 0) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const arg = args[0];

      if (Array.isArray(arg)) {
        const w = arg.filter(r => typeof r === 'number' && !Number.isNaN(r) ? true : false);

        if (w.length) {
          return w.reduce((a, b) => a + b) / w.length;
        } else {
          return null;
        }
      }
    }

    throw new Error(`Argument of function "avg" should be field.`);
  }
};
const fnInfo_max = {
  type: 'aggregate',
  name: 'max',
  fn: (ctx, args, records) => {
    if (args.length > 0) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const arg = args[0];

      if (Array.isArray(arg)) {
        const w = arg.filter(r => typeof r === 'number' && !Number.isNaN(r) || typeof r === 'string' ? true : false);

        if (w.length) {
          return w.reduce((a, b) => a > b ? a : b);
        } else {
          return null;
        }
      }
    }

    throw new Error(`Argument of function "max" should be field.`);
  }
};
const fnInfo_min = {
  type: 'aggregate',
  name: 'min',
  fn: (ctx, args, records) => {
    if (args.length > 0) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const arg = args[0];

      if (Array.isArray(arg)) {
        const w = arg.filter(r => typeof r === 'number' && !Number.isNaN(r) || typeof r === 'string' ? true : false);

        if (w.length) {
          return w.reduce((a, b) => a < b ? a : b);
        } else {
          return null;
        }
      }
    }

    throw new Error(`Argument of function "min" should be field.`);
  }
};

function dateScalarFunctionGen(fnName, fn) {
  return (ctx, args, record) => {
    if (args.length > 0) {
      const arg = args[0];

      switch (typeof arg) {
        case 'object':
          if (arg === null) {
            return null;
          } else {
            switch (arg.type) {
              case 'date':
              case 'datetime':
                // eslint-disable-next-line @typescript-eslint/no-unsafe-return
                return fn(arg.value);

              default:
                return null;
            }
          }

        case 'string':
          if (_util__WEBPACK_IMPORTED_MODULE_0__["DatePattern"].test(arg) || _util__WEBPACK_IMPORTED_MODULE_0__["DateTimePattern"].test(arg)) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            return fn(arg);
          } else {
            return null;
          }

      }
    }

    throw new Error(`Argument of function "${fnName}" should be field.`);
  };
}

const fnInfo_calendar_month = {
  type: 'scalar',
  name: 'calendar_month',
  fn: dateScalarFunctionGen('calendar_month', dateStr => new Date(dateStr).getUTCMonth() + 1)
};
const fnInfo_calendar_month_lc = {
  type: 'scalar',
  name: 'calendar_month_lc',
  fn: dateScalarFunctionGen('calendar_month_lc', dateStr => new Date(dateStr).getMonth() + 1)
};
const fnInfo_calendar_quarter = {
  type: 'scalar',
  name: 'calendar_quarter',
  fn: dateScalarFunctionGen('calendar_quarter', dateStr => Math.floor(new Date(dateStr).getUTCMonth() / 3) + 1)
};
const fnInfo_calendar_quarter_lc = {
  type: 'scalar',
  name: 'calendar_quarter_lc',
  fn: dateScalarFunctionGen('calendar_quarter_lc', dateStr => Math.floor(new Date(dateStr).getMonth() / 3) + 1)
};
const fnInfo_calendar_year = {
  type: 'scalar',
  name: 'calendar_year',
  fn: dateScalarFunctionGen('calendar_year', dateStr => new Date(dateStr).getUTCFullYear())
};
const fnInfo_calendar_year_lc = {
  type: 'scalar',
  name: 'calendar_year_lc',
  fn: dateScalarFunctionGen('calendar_year_lc', dateStr => new Date(dateStr).getFullYear())
};
const fnInfo_day_in_month = {
  type: 'scalar',
  name: 'day_in_month',
  fn: dateScalarFunctionGen('day_in_month', dateStr => new Date(dateStr).getUTCDate())
};
const fnInfo_day_in_month_lc = {
  type: 'scalar',
  name: 'day_in_month_lc',
  fn: dateScalarFunctionGen('day_in_month_lc', dateStr => new Date(dateStr).getDate())
};
const fnInfo_day_in_week = {
  type: 'scalar',
  name: 'day_in_week',
  fn: dateScalarFunctionGen('day_in_week', dateStr => new Date(dateStr).getUTCDay() + 1)
};
const fnInfo_day_in_week_lc = {
  type: 'scalar',
  name: 'day_in_week_lc',
  fn: dateScalarFunctionGen('day_in_week_lc', dateStr => new Date(dateStr).getDay() + 1)
};
const fnInfo_day_in_year = {
  type: 'scalar',
  name: 'day_in_year',
  fn: dateScalarFunctionGen('day_in_year', dateStr => Object(_datetime_util__WEBPACK_IMPORTED_MODULE_1__["getUTCDayInYear"])(new Date(dateStr)))
};
const fnInfo_day_in_year_lc = {
  type: 'scalar',
  name: 'day_in_year_lc',
  fn: dateScalarFunctionGen('day_in_year_lc', dateStr => Object(_datetime_util__WEBPACK_IMPORTED_MODULE_1__["getDayInYear"])(new Date(dateStr)))
};
const fnInfo_day_only = {
  type: 'scalar',
  name: 'day_only',
  fn: dateScalarFunctionGen('day_only', dateStr => new Date(dateStr).toISOString().split('T')[0])
};
const fnInfo_day_only_lc = {
  type: 'scalar',
  name: 'day_only_lc',
  fn: dateScalarFunctionGen('day_only_lc', dateStr => {
    const d = new Date(dateStr);
    return new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate())).toISOString().split('T')[0];
  })
};
const fnInfo_hour_in_day = {
  type: 'scalar',
  name: 'hour_in_day',
  fn: dateScalarFunctionGen('hour_in_day', dateStr => new Date(dateStr).getUTCHours())
};
const fnInfo_hour_in_day_lc = {
  type: 'scalar',
  name: 'hour_in_day_lc',
  fn: dateScalarFunctionGen('hour_in_day_lc', dateStr => new Date(dateStr).getHours())
};
const fnInfo_week_in_month = {
  type: 'scalar',
  name: 'week_in_month',
  fn: dateScalarFunctionGen('week_in_month', dateStr => Math.floor((new Date(dateStr).getUTCDate() - 1) / 7) + 1)
};
const fnInfo_week_in_month_lc = {
  type: 'scalar',
  name: 'week_in_month_lc',
  fn: dateScalarFunctionGen('week_in_month_lc', dateStr => Math.floor((new Date(dateStr).getDate() - 1) / 7) + 1)
};
const fnInfo_week_in_year = {
  type: 'scalar',
  name: 'week_in_year',
  fn: dateScalarFunctionGen('week_in_year', dateStr => Math.floor((Object(_datetime_util__WEBPACK_IMPORTED_MODULE_1__["getUTCDayInYear"])(new Date(dateStr)) - 1) / 7) + 1)
};
const fnInfo_week_in_year_lc = {
  type: 'scalar',
  name: 'week_in_year_lc',
  fn: dateScalarFunctionGen('week_in_year_lc', dateStr => Math.floor((Object(_datetime_util__WEBPACK_IMPORTED_MODULE_1__["getDayInYear"])(new Date(dateStr)) - 1) / 7) + 1)
};

/***/ }),

/***/ "./src/lib/parser.ts":
/*!***************************!*\
  !*** ./src/lib/parser.ts ***!
  \***************************/
/*! exports provided: parse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony import */ var fruitsconfits_modules_lib_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fruitsconfits/modules/lib/types */ "./node_modules/fruitsconfits/modules/lib/types.js");
/* harmony import */ var fruitsconfits_modules_lib_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fruitsconfits/modules/lib/parser */ "./node_modules/fruitsconfits/modules/lib/parser.js");
/* harmony import */ var fruitsconfits_modules_lib_string_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fruitsconfits/modules/lib/string-parser */ "./node_modules/fruitsconfits/modules/lib/string-parser.js");
/* harmony import */ var fruitsconfits_modules_lib_object_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fruitsconfits/modules/lib/object-parser */ "./node_modules/fruitsconfits/modules/lib/object-parser.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util */ "./src/lib/util.ts");
// Copyright (c) 2020 Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln





const $s = Object(fruitsconfits_modules_lib_string_parser__WEBPACK_IMPORTED_MODULE_2__["getStringParsers"])({
  rawToToken: rawToken => rawToken,
  concatTokens: tokens => tokens.length ? // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
  [tokens.reduce((a, b) => String(a) + b)] : []
});
const $o = Object(fruitsconfits_modules_lib_object_parser__WEBPACK_IMPORTED_MODULE_3__["getObjectParsers"])({
  rawToToken: rawToken => rawToken,
  concatTokens: tokens => tokens.length ? // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
  [tokens.reduce((a, b) => String(a) + b)] : [],
  comparator: (a, b) => a === b
});
const {
  seq,
  cls,
  notCls,
  clsFn,
  classes,
  numbers,
  isParam,
  cat,
  once,
  repeat,
  qty,
  zeroWidth,
  err,
  beginning,
  end,
  first,
  or,
  combine,
  erase,
  trans,
  ahead,
  rules,
  makeProgram
} = $s;

const seqI = x => clsFn(c => c.slice(0, x.length).toLocaleLowerCase() === x ? x.length : -1);

const unaryOp = (op, op1) => {
  return {
    type: 'condition',
    op,
    operands: [op1]
  };
};

const binaryOp = (op, op1, op2) => {
  return {
    type: 'condition',
    op,
    operands: [op1, op2]
  };
};

const isOperator = (v, op) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  if (typeof v === 'object' && v.type === 'rawop' && v.op === op) {
    return true;
  }

  return false;
};

const isValue = v => {
  // TODO: check type
  return true;
};

const lineComment = combine(erase(qty(2)(cls('-'))), first(combine(repeat(notCls('\r\n', '\n', '\r')), first(classes.newline, ahead(end()))), first(classes.newline, ahead(end()))));
const blockComment = combine(seq('/*'), repeat(notCls('*/')), seq('*/'));
const commentOrSpace = first(classes.space, lineComment, blockComment);
const reservedKeywords = first(combine(seqI('select'), input => wordBoundary(input)), combine(seqI('from'), input => wordBoundary(input)), combine(seqI('where'), input => wordBoundary(input)), cat(combine(seqI('order'), erase(qty(1)(commentOrSpace)), seqI('by'))), cat(combine(seqI('group'), erase(qty(1)(commentOrSpace)), seqI('by'))), combine(seqI('having'), input => wordBoundary(input)), combine(seqI('offset'), input => wordBoundary(input)), combine(seqI('limit'), input => wordBoundary(input)));
const notAheadReservedKeywords = ahead(input => {
  const result = combine(reservedKeywords, first(qty(1)(commentOrSpace), cls('(', ')', "'", '"', '=', '!', '<', '>'), end()))(input);

  if (result.succeeded) {
    return {
      succeeded: false,
      error: false,
      src: input.src,
      pos: input.start,
      message: 'Unexpected reserved keyword aheads'
    };
  } else {
    return {
      succeeded: true,
      next: {
        src: input.src,
        start: input.start,
        end: input.end,
        context: input.context
      },
      tokens: []
    };
  }
});

const isWord = s => {
  if (typeof s !== 'string') {
    return false;
  }

  return /^[A-Za-z0-9$_"]$/.test(s);
};

const wordBoundary = ahead(input => {
  let w = false;

  if (input.src.length === 0) {
    w = true;
  } else if (input.start === input.end) {
    w = isWord(input.src[input.start - 1]);
  } else if (input.start === 0) {
    w = isWord(input.src[input.start]);
  } else {
    w = !isWord(input.src[input.start - 1]) && isWord(input.src[input.start]) || isWord(input.src[input.start - 1]) && !isWord(input.src[input.start]);
  }

  if (w) {
    return {
      succeeded: true,
      next: {
        src: input.src,
        start: input.start,
        end: input.end,
        context: input.context
      },
      tokens: []
    };
  } else {
    return {
      succeeded: false,
      error: false,
      src: input.src,
      pos: input.start,
      message: 'Expect word break'
    };
  }
});
const trueValue = trans(tokens => [true])(seqI('true'), wordBoundary);
const falseValue = trans(tokens => [false])(seqI('false'), wordBoundary);
const nullValue = trans(tokens => [null])(seqI('null'), wordBoundary);
const positiveInfinityValue = trans(tokens => [Number.POSITIVE_INFINITY])(qty(0, 1)(seq('+')), seq('Infinity'), wordBoundary);
const negativeInfinityValue = trans(tokens => [Number.NEGATIVE_INFINITY])(seq('-Infinity'), wordBoundary);
const nanValue = trans(tokens => [Number.NaN])(seq('NaN'), wordBoundary);
const binaryIntegerValue = trans(tokens => [Number.parseInt(tokens[0].replace(/_/g, ''), 2)])(numbers.bin(seq('0b')));
const octalIntegerValue = trans(tokens => [Number.parseInt(tokens[0].replace(/_/g, ''), 8)])(numbers.oct(seq('0o'), seq('0')));
const hexIntegerValue = trans(tokens => [Number.parseInt(tokens[0].replace(/_/g, ''), 16)])(numbers.hex(seq('0x'), seq('0X')));
const decimalIntegerValue = trans(tokens => [Number.parseInt(tokens[0].replace(/_/g, ''), 10)])(numbers.int);
const floatingPointNumberValue = trans(tokens => [Number.parseFloat(tokens[0].replace(/_/g, ''))])(numbers.float);
const numberValue = first(octalIntegerValue, hexIntegerValue, binaryIntegerValue, floatingPointNumberValue, decimalIntegerValue, positiveInfinityValue, negativeInfinityValue, nanValue);
const stringEscapeSeq = first(trans(t => ['\''])(seq('\\\'')), trans(t => ['\"'])(seq('\\"')), trans(t => ['\`'])(seq('\\`')), trans(t => ['/'])(seq('\\/')), trans(t => ['\\'])(seq('\\\\')), trans(t => [''])(seq('\\\r\n')), trans(t => [''])(seq('\\\r')), trans(t => [''])(seq('\\\n')), trans(t => ['\n'])(seq('\\n')), trans(t => ['\n'])(seq('\\N')), trans(t => ['\r'])(seq('\\r')), trans(t => ['\r'])(seq('\\R')), trans(t => ['\v'])(seq('\\v')), trans(t => ['\t'])(seq('\\t')), trans(t => ['\t'])(seq('\\T')), trans(t => ['\b'])(seq('\\b')), trans(t => ['\b'])(seq('\\B')), trans(t => ['\f'])(seq('\\f')), trans(t => ['\f'])(seq('\\F')), trans(t => [String.fromCodePoint(Number.parseInt(t[0], 16))])(cat(erase(seq('\\u')), qty(4, 4)(classes.hex))), trans(t => [String.fromCodePoint(Number.parseInt(t[0], 16))])(cat(erase(seq('\\u{')), qty(1, 6)(classes.hex), erase(seq('}')))), trans(t => [String.fromCodePoint(Number.parseInt(t[0], 16))])(cat(erase(seq('\\x')), qty(2, 2)(classes.hex))), trans(t => [String.fromCodePoint(Number.parseInt(t[0], 8))])(cat(erase(seq('\\')), qty(3, 3)(classes.oct))));
const stringValue = trans(tokens => {
  var _a;

  return [(_a = tokens[0]) !== null && _a !== void 0 ? _a : ''];
})(erase(seq("'")), cat(repeat(first(stringEscapeSeq, combine(cls('\r', '\n'), err('Line breaks within strings are not allowed.')), notCls("'")))), erase(seq("'")));
const dateValue = trans(tokens => [{
  type: 'date',
  value: tokens[0]
}])(cat(qty(4, 4)(classes.num), cls('-'), qty(2, 2)(classes.num), cls('-'), qty(2, 2)(classes.num), wordBoundary));
const dateTimeValue = trans(tokens => [{
  type: 'datetime',
  value: tokens[0]
}])(cat(qty(4, 4)(classes.num), cls('-'), qty(2, 2)(classes.num), cls('-'), qty(2, 2)(classes.num), cls('T'), qty(2, 2)(classes.num), cls(':'), qty(2, 2)(classes.num), qty(0, 1)(combine(cls(':'), qty(2, 2)(classes.num))), first(cls('Z'), combine(first(cls('+'), cls('-')), qty(2, 2)(classes.num), cls(':'), qty(2, 2)(classes.num))), wordBoundary));
const literalValue = first(isParam(o => {
  switch (typeof o) {
    case 'number':
    case 'string':
    case 'boolean':
      return true;

    case 'object':
      if (o === null) {
        return true;
      } // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access


      if (o.type) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        switch (o.type) {
          case 'date':
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            if (typeof o.value === 'string') {
              // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
              return _util__WEBPACK_IMPORTED_MODULE_4__["DatePattern"].test(o.value);
            }

            break;

          case 'datetime':
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            if (typeof o.value === 'string') {
              // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
              return _util__WEBPACK_IMPORTED_MODULE_4__["DateTimePattern"].test(o.value);
            }

            break;
        }
      }

      break;
  }

  return false;
}), dateTimeValue, dateValue, numberValue, stringValue, trueValue, falseValue, nullValue);
const symbolStringValue = trans(tokens => {
  var _a;

  const sym = (_a = tokens[0]) !== null && _a !== void 0 ? _a : '';

  if (Object(_util__WEBPACK_IMPORTED_MODULE_4__["isUnsafeVarNames"])(_util__WEBPACK_IMPORTED_MODULE_4__["dummyTargetObject"], sym)) {
    throw new Error(`Unsafe symbol name is appeared: ${sym}`);
  }

  return [sym];
})(erase(seq('"')), cat(repeat(first(stringEscapeSeq, combine(cls('\r', '\n'), err('Line breaks within strings are not allowed.')), notCls('"')))), erase(seq('"')));
const symbolName = trans(tokens => {
  if (Object(_util__WEBPACK_IMPORTED_MODULE_4__["isUnsafeVarNames"])(_util__WEBPACK_IMPORTED_MODULE_4__["dummyTargetObject"], tokens[0])) {
    throw new Error(`Unsafe symbol name is appeared: ${tokens[0]}`);
  }

  return tokens;
})(cat(combine(first(classes.alpha, cls('$', '_')), repeat(first(classes.alnum, cls('$', '_'))))));
const complexSymbolName = trans(tokens => [{
  name: tokens
}])(first(symbolName, symbolStringValue), repeat(combine(erase(repeat(commentOrSpace), cls('.'), repeat(commentOrSpace)), first(symbolName, symbolStringValue))));
const selectFieldFunctionCall = // eslint-disable-next-line @typescript-eslint/no-unsafe-return
trans(tokens => [{
  fn: tokens[0],
  args: tokens.slice(1)
}])(symbolName, erase(repeat(commentOrSpace)), erase(cls('(')), erase(repeat(commentOrSpace)), repeat(first( // eslint-disable-next-line @typescript-eslint/ban-types
trans(tokens => [Object.assign({
  type: 'fncall'
}, tokens[0])])(input => selectFieldFunctionCall(input)), literalValue, // eslint-disable-next-line @typescript-eslint/ban-types
trans(tokens => [Object.assign({
  type: 'field'
}, tokens[0])])(complexSymbolName))), repeat(combine(erase(repeat(commentOrSpace)), erase(cls(',')), erase(repeat(commentOrSpace)), first( // eslint-disable-next-line @typescript-eslint/ban-types
trans(tokens => [Object.assign({
  type: 'fncall'
}, tokens[0])])(input => selectFieldFunctionCall(input)), literalValue, // eslint-disable-next-line @typescript-eslint/ban-types
trans(tokens => [Object.assign({
  type: 'field'
}, tokens[0])])(complexSymbolName)))), erase(repeat(commentOrSpace)), erase(cls(')'))); // eslint-disable-next-line @typescript-eslint/no-unsafe-return

const subQuery = trans(tokens => [{
  query: tokens[0]
}])(erase(cls('('), repeat(commentOrSpace)), input => selectStatement(input), erase(repeat(commentOrSpace), cls(')')));
const listValue = trans(tokens => [tokens])(erase(cls('('), repeat(commentOrSpace)), literalValue, erase(repeat(commentOrSpace)), repeat(combine(erase(cls(','), repeat(commentOrSpace)), literalValue)), erase(repeat(commentOrSpace), cls(')')));
const complexSelectFieldName = // eslint-disable-next-line @typescript-eslint/no-unsafe-return
trans(tokens => [Object.assign(Object.assign({}, tokens[0]), {
  aliasName: tokens.length > 1 ? tokens[1] : null
})])(notAheadReservedKeywords, first( // eslint-disable-next-line @typescript-eslint/ban-types
trans(tokens => [Object.assign({
  type: 'fncall'
}, tokens[0])])(selectFieldFunctionCall), // eslint-disable-next-line @typescript-eslint/ban-types
trans(tokens => [Object.assign({
  type: 'field'
}, tokens[0])])(complexSymbolName), // eslint-disable-next-line @typescript-eslint/ban-types
trans(tokens => [Object.assign({
  type: 'subquery'
}, tokens[0])])(subQuery)), first(combine(erase(repeat(commentOrSpace)), // TODO:
notAheadReservedKeywords, symbolName), zeroWidth(() => null)));
const selectFieldList = // eslint-disable-next-line @typescript-eslint/no-unsafe-return
trans(tokens => [{
  select: tokens
}])(complexSelectFieldName, erase(repeat(commentOrSpace)), repeat(combine(erase(cls(',')), erase(repeat(commentOrSpace)), complexSelectFieldName, erase(repeat(commentOrSpace)))));
const fromClause = // eslint-disable-next-line @typescript-eslint/no-unsafe-return
trans(tokens => [{
  from: tokens
}])(erase(seqI('from')), // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/ban-types
trans(tokens => {
  var _a;

  return [Object.assign(Object.assign({}, tokens[0]), {
    aliasName: (_a = tokens[1]) !== null && _a !== void 0 ? _a : null
  })];
})(erase(qty(1)(commentOrSpace)), notAheadReservedKeywords, complexSymbolName, qty(0, 1)(combine(erase(qty(1)(commentOrSpace)), notAheadReservedKeywords, symbolName))), // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/ban-types
repeat(trans(tokens => {
  var _a;

  return [Object.assign(Object.assign({}, tokens[0]), {
    aliasName: (_a = tokens[1]) !== null && _a !== void 0 ? _a : null
  })];
})(erase(repeat(commentOrSpace), cls(','), repeat(commentOrSpace)), notAheadReservedKeywords, complexSymbolName, first(combine(erase(qty(1)(commentOrSpace)), notAheadReservedKeywords, symbolName), zeroWidth(() => null)))));
const conditionalOperator = first(seq('!='), seq('<='), seq('>='), seq('='), seq('<'), seq('>'), // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
trans(tokens => [`${tokens[0]}_${tokens[1]}`])(seqI('not'), erase(qty(1)(commentOrSpace)), first(seqI('like'), seqI('in')), erase(wordBoundary, repeat(commentOrSpace))), combine(seqI('like'), erase(wordBoundary, repeat(commentOrSpace))), combine(seqI('in'), erase(wordBoundary, repeat(commentOrSpace))), combine(seqI('includes'), erase(wordBoundary, repeat(commentOrSpace))), combine(seqI('excludes'), erase(wordBoundary, repeat(commentOrSpace)))); // production rules:
//   S -> S "not" S

const conditionExpressionExprRule3 = $o.trans(tokens => [unaryOp('not', tokens[1])])($o.clsFn(t => isOperator(t, 'not')), $o.clsFn(t => isValue(t))); // production rules:
//   S -> S "and" S

const conditionExpressionExprRule2 = $o.trans(tokens => [binaryOp('and', tokens[0], tokens[2])])($o.clsFn(t => isValue(t)), $o.clsFn(t => isOperator(t, 'and')), $o.clsFn(t => isValue(t))); // production rules:
//   S -> S "or" S

const conditionExpressionExprRule1 = $o.trans(tokens => [binaryOp('or', tokens[0], tokens[2])])($o.clsFn(t => isValue(t)), $o.clsFn(t => isOperator(t, 'or')), $o.clsFn(t => isValue(t)));
const whereFieldExpression = trans(tokens => [{
  type: 'condition',
  op: tokens[1],
  operands: tokens.slice(0, 1).concat(tokens.slice(2))
}])(notAheadReservedKeywords, first( // eslint-disable-next-line @typescript-eslint/ban-types
trans(tokens => [Object.assign({
  type: 'fncall'
}, tokens[0])])(selectFieldFunctionCall), // eslint-disable-next-line @typescript-eslint/ban-types
trans(tokens => [Object.assign({
  type: 'field'
}, tokens[0])])(complexSymbolName)), erase(repeat(commentOrSpace)), conditionalOperator, erase(repeat(commentOrSpace)), first(literalValue, // eslint-disable-next-line @typescript-eslint/ban-types
trans(tokens => [Object.assign({
  type: 'subquery'
}, tokens[0])])(subQuery), // eslint-disable-next-line @typescript-eslint/ban-types
trans(tokens => [Object.assign({
  type: 'fncall'
}, tokens[0])])(selectFieldFunctionCall), listValue));
const whereConditionExpressionInnerRoot = trans(tokens => tokens)(qty(0, 1)(combine(trans(tokens => [{
  type: 'rawop',
  op: tokens[0]
}])(seqI('not')), erase(wordBoundary, repeat(commentOrSpace)))), first(trans(tokens => tokens)(erase(repeat(commentOrSpace)), erase(cls('(')), erase(repeat(commentOrSpace)), input => whereConditionExpression(input), erase(repeat(commentOrSpace)), erase(cls(')'))), whereFieldExpression), repeat(combine(erase(repeat(commentOrSpace)), trans(tokens => [{
  type: 'rawop',
  op: tokens[0]
}])(first(seqI('and'), seqI('or'))), erase(wordBoundary, repeat(commentOrSpace)), input => whereConditionExpression(input))));
const whereConditionExpression = rules({
  rules: [conditionExpressionExprRule3, conditionExpressionExprRule2, conditionExpressionExprRule1],
  check: $o.combine($o.classes.any, $o.end())
})(trans(tokens => tokens)(whereConditionExpressionInnerRoot));
const whereClause = // eslint-disable-next-line @typescript-eslint/no-unsafe-return
trans(tokens => [{
  where: [tokens[0]]
}])(erase(repeat(commentOrSpace), wordBoundary), erase(seqI('where')), erase(first(ahead(cls('(')), qty(1)(commentOrSpace), combine(repeat(commentOrSpace), wordBoundary))), whereConditionExpression);
const groupByClause = // eslint-disable-next-line @typescript-eslint/no-unsafe-return
trans(tokens => [{
  groupBy: tokens
}])(erase(repeat(commentOrSpace), wordBoundary), erase(seqI('group'), qty(1)(commentOrSpace), seqI('by'), qty(1)(commentOrSpace)), symbolName, repeat(combine(erase(repeat(commentOrSpace), cls(','), repeat(commentOrSpace)), symbolName)));
const havingFieldExpression = trans(tokens => [{
  type: 'condition',
  op: tokens[1],
  operands: tokens.slice(0, 1).concat(tokens.slice(2))
}])(notAheadReservedKeywords, // eslint-disable-next-line @typescript-eslint/ban-types
trans(tokens => [Object.assign({
  type: 'fncall'
}, tokens[0])])(selectFieldFunctionCall), erase(repeat(commentOrSpace)), conditionalOperator, erase(repeat(commentOrSpace)), first(literalValue, // eslint-disable-next-line @typescript-eslint/ban-types
trans(tokens => [Object.assign({
  type: 'subquery'
}, tokens[0])])(subQuery, // eslint-disable-next-line @typescript-eslint/ban-types
trans(tokens => [Object.assign({
  type: 'fncall'
}, tokens[0])])(selectFieldFunctionCall), listValue)));
const havingConditionExpressionInnerRoot = trans(tokens => tokens)(qty(0, 1)(combine(trans(tokens => [{
  type: 'rawop',
  op: tokens[0]
}])(seqI('not')), erase(wordBoundary, repeat(commentOrSpace)))), first(trans(tokens => tokens)(erase(repeat(commentOrSpace)), erase(cls('(')), erase(repeat(commentOrSpace)), input => havingConditionExpression(input), erase(repeat(commentOrSpace)), erase(cls(')'))), havingFieldExpression), repeat(combine(erase(repeat(commentOrSpace)), trans(tokens => [{
  type: 'rawop',
  op: tokens[0]
}])(first(seqI('and'), seqI('or'))), erase(wordBoundary, repeat(commentOrSpace)), input => havingConditionExpression(input))));
const havingConditionExpression = rules({
  rules: [conditionExpressionExprRule3, conditionExpressionExprRule2, conditionExpressionExprRule1],
  check: $o.combine($o.classes.any, $o.end())
})(trans(tokens => tokens)(havingConditionExpressionInnerRoot));
const havingClause = // eslint-disable-next-line @typescript-eslint/no-unsafe-return
trans(tokens => [{
  having: [tokens[0]]
}])(erase(repeat(commentOrSpace), wordBoundary), erase(seqI('having')), erase(first(ahead(cls('(')), qty(1)(commentOrSpace), combine(repeat(commentOrSpace), wordBoundary))), havingConditionExpression);
const orderByDirection = first(qty(1, 1)(combine(erase(qty(1)(commentOrSpace)), trans(tokens => [tokens[0].toLowerCase()])(first(seqI('asc'), seqI('desc'))), erase(wordBoundary))), zeroWidth(() => 'asc'));
const orderByNulls = first(qty(1, 1)(combine(erase(qty(1)(commentOrSpace), seqI('nulls'), qty(1)(commentOrSpace)), trans(tokens => [tokens[0].toLowerCase()])(first(seqI('first'), seqI('last'))), erase(wordBoundary))), zeroWidth(() => 'first'));
const orderByClause = // eslint-disable-next-line @typescript-eslint/no-unsafe-return
trans(tokens => [{
  orderBy: tokens
}])(erase(repeat(commentOrSpace), wordBoundary), erase(seqI('order'), qty(1)(commentOrSpace), seqI('by'), qty(1)(commentOrSpace)), // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/ban-types
trans(tokens => [Object.assign(Object.assign({}, tokens[0]), {
  direction: tokens[1],
  nulls: tokens[2]
})])(complexSymbolName, orderByDirection, orderByNulls), repeat(combine(erase(repeat(commentOrSpace), cls(','), repeat(commentOrSpace)), // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/ban-types
trans(tokens => [Object.assign(Object.assign({}, tokens[0]), {
  direction: tokens[1],
  nulls: tokens[2]
})])(complexSymbolName, orderByDirection, orderByNulls))));
const offsetClause = // eslint-disable-next-line @typescript-eslint/no-unsafe-return
trans(tokens => [{
  offset: tokens[0]
}])(erase(repeat(commentOrSpace), wordBoundary), erase(seqI('offset'), qty(1)(commentOrSpace)), decimalIntegerValue);
const limitClause = // eslint-disable-next-line @typescript-eslint/no-unsafe-return
trans(tokens => [{
  limit: tokens[0]
}])(erase(repeat(commentOrSpace), wordBoundary), erase(seqI('limit'), qty(1)(commentOrSpace)), decimalIntegerValue);
const forViewClause = trans(tokens => [{
  for: tokens.map(x => x.toLowerCase())
}])(erase(repeat(commentOrSpace), wordBoundary), erase(seqI('for'), qty(1)(commentOrSpace)), first(combine(seqI('view'), qty(0, 1)(combine(erase(repeat(commentOrSpace), cls(','), repeat(commentOrSpace)), seqI('reference')))), combine(seqI('reference'), qty(0, 1)(combine(erase(repeat(commentOrSpace), cls(','), repeat(commentOrSpace)), seqI('view'))))), erase(wordBoundary));
const forUpdateClause = trans(tokens => [{
  for: tokens.map(x => x.toLowerCase())
}])(erase(repeat(commentOrSpace), wordBoundary), erase(seqI('for'), qty(1)(commentOrSpace)), seqI('update'), first(combine(erase(qty(1)(commentOrSpace)), seqI('tracking'), qty(0, 1)(combine(erase(repeat(commentOrSpace), cls(','), repeat(commentOrSpace)), seqI('viewstat')))), combine(erase(qty(1)(commentOrSpace)), seqI('viewstat'), qty(0, 1)(combine(erase(repeat(commentOrSpace), cls(','), repeat(commentOrSpace)), seqI('tracking')))), zeroWidth(() => void 0)), erase(wordBoundary));
const selectStatement = trans(tokens => {
  let z = {};

  for (const t of tokens) {
    // eslint-disable-next-line @typescript-eslint/ban-types
    z = Object.assign(Object.assign({}, z), t);
  } // eslint-disable-next-line @typescript-eslint/no-unsafe-return


  return [z];
})(erase(seqI('select')), erase(qty(1)(commentOrSpace)), selectFieldList, fromClause, // TODO: using scope
qty(0, 1)(whereClause), // TODO: with
qty(0, 1)(combine(groupByClause, // TODO: rollup, cube
qty(0, 1)(havingClause))), qty(0, 1)(orderByClause), qty(0, 1)(first(combine(offsetClause, qty(0, 1)(limitClause)), combine(limitClause, qty(0, 1)(offsetClause)))), qty(0, 1)(first(forViewClause, forUpdateClause)), erase(repeat(commentOrSpace)));
const program = makeProgram(combine(beginning(), erase(repeat(commentOrSpace)), selectStatement, erase(repeat(commentOrSpace)), end()));
function parse(strings, ...values) {
  // TODO: deny dangerous names
  const z = program(typeof strings === 'string' ? Object(fruitsconfits_modules_lib_types__WEBPACK_IMPORTED_MODULE_0__["parserInput"])(strings, {}) : Object(fruitsconfits_modules_lib_types__WEBPACK_IMPORTED_MODULE_0__["templateStringsParserInput"])(strings, values, {}));

  if (!z.succeeded) {
    throw new Error(Object(fruitsconfits_modules_lib_parser__WEBPACK_IMPORTED_MODULE_1__["formatErrorMessage"])(z));
  } // eslint-disable-next-line @typescript-eslint/no-unsafe-return


  return z.tokens[0];
}

/***/ }),

/***/ "./src/lib/prepare.ts":
/*!****************************!*\
  !*** ./src/lib/prepare.ts ***!
  \****************************/
/*! exports provided: prepareBuilderInfo, prepareQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepareBuilderInfo", function() { return prepareBuilderInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepareQuery", function() { return prepareQuery; });
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parser */ "./src/lib/parser.ts");
/* harmony import */ var _compiler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compiler */ "./src/lib/compiler.ts");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions */ "./src/lib/functions.ts");
// Copyright (c) 2020 Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln



const builtinFunctions = [_functions__WEBPACK_IMPORTED_MODULE_2__["fnInfo_cast_to_string"], _functions__WEBPACK_IMPORTED_MODULE_2__["fnInfo_cast_to_number"], _functions__WEBPACK_IMPORTED_MODULE_2__["fnInfo_cast_to_boolean"], _functions__WEBPACK_IMPORTED_MODULE_2__["fnInfo_concat"], _functions__WEBPACK_IMPORTED_MODULE_2__["fnInfo_add"], _functions__WEBPACK_IMPORTED_MODULE_2__["fnInfo_sub"], _functions__WEBPACK_IMPORTED_MODULE_2__["fnInfo_mul"], _functions__WEBPACK_IMPORTED_MODULE_2__["fnInfo_div"], _functions__WEBPACK_IMPORTED_MODULE_2__["fnInfo_mod"], _functions__WEBPACK_IMPORTED_MODULE_2__["fnInfo_count"], _functions__WEBPACK_IMPORTED_MODULE_2__["fnInfo_count_distinct"], _functions__WEBPACK_IMPORTED_MODULE_2__["fnInfo_sum"], _functions__WEBPACK_IMPORTED_MODULE_2__["fnInfo_avg"], _functions__WEBPACK_IMPORTED_MODULE_2__["fnInfo_max"], _functions__WEBPACK_IMPORTED_MODULE_2__["fnInfo_min"], _functions__WEBPACK_IMPORTED_MODULE_2__["fnInfo_calendar_month"], _functions__WEBPACK_IMPORTED_MODULE_2__["fnInfo_calendar_quarter"], _functions__WEBPACK_IMPORTED_MODULE_2__["fnInfo_calendar_year"], _functions__WEBPACK_IMPORTED_MODULE_2__["fnInfo_day_in_month"], _functions__WEBPACK_IMPORTED_MODULE_2__["fnInfo_day_in_week"], _functions__WEBPACK_IMPORTED_MODULE_2__["fnInfo_day_in_year"], _functions__WEBPACK_IMPORTED_MODULE_2__["fnInfo_day_only"], _functions__WEBPACK_IMPORTED_MODULE_2__["fnInfo_hour_in_day"], _functions__WEBPACK_IMPORTED_MODULE_2__["fnInfo_week_in_month"], _functions__WEBPACK_IMPORTED_MODULE_2__["fnInfo_week_in_year"], _functions__WEBPACK_IMPORTED_MODULE_2__["fnInfo_calendar_month_lc"], _functions__WEBPACK_IMPORTED_MODULE_2__["fnInfo_calendar_quarter_lc"], _functions__WEBPACK_IMPORTED_MODULE_2__["fnInfo_calendar_year_lc"], _functions__WEBPACK_IMPORTED_MODULE_2__["fnInfo_day_in_month_lc"], _functions__WEBPACK_IMPORTED_MODULE_2__["fnInfo_day_in_week_lc"], _functions__WEBPACK_IMPORTED_MODULE_2__["fnInfo_day_in_year_lc"], _functions__WEBPACK_IMPORTED_MODULE_2__["fnInfo_day_only_lc"], _functions__WEBPACK_IMPORTED_MODULE_2__["fnInfo_hour_in_day_lc"], _functions__WEBPACK_IMPORTED_MODULE_2__["fnInfo_week_in_month_lc"], _functions__WEBPACK_IMPORTED_MODULE_2__["fnInfo_week_in_year_lc"]];
const builtinRules = {
  idFieldName: () => 'Id',
  foreignIdFieldName: masterResolverName => masterResolverName ? `${masterResolverName}Id` : void 0
};
function prepareBuilderInfo(builder) {
  const ret = Object.assign({}, builder);

  if (!ret.relationships) {
    ret.relationships = {};
  }

  for (const k of Object.keys(ret.resolvers.query)) {
    if (!ret.relationships[k]) {
      ret.relationships[k] = {};
    }
  }

  if (!ret.resolvers.insert) {
    ret.resolvers.insert = {};
  }

  if (!ret.resolvers.update) {
    ret.resolvers.update = {};
  }

  if (!ret.resolvers.remove) {
    ret.resolvers.remove = {};
  }

  if (!ret.functions) {
    ret.functions = [];
  }

  ret.functions = ret.functions.concat(builtinFunctions);

  if (!ret.rules) {
    ret.rules = {};
  }

  ret.rules = Object.assign(Object.assign({}, builtinRules), ret.rules);

  if (!ret.events) {
    ret.events = {};
  }

  return ret;
}
function prepareQuery(builder, strings, ...values) {
  return Object(_compiler__WEBPACK_IMPORTED_MODULE_1__["compile"])(builder, Object(_parser__WEBPACK_IMPORTED_MODULE_0__["parse"])(strings, ...values));
}

/***/ }),

/***/ "./src/lib/run-dml.ts":
/*!****************************!*\
  !*** ./src/lib/run-dml.ts ***!
  \****************************/
/*! exports provided: executeInsertDML, executeUpdateDML, executeRemoveDML */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "executeInsertDML", function() { return executeInsertDML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "executeUpdateDML", function() { return executeUpdateDML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "executeRemoveDML", function() { return executeRemoveDML; });
// Copyright (c) 2020 Shellyl_N and Authors
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

function executeInsertDML(builder, // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
tr, trOptions, resolverName, records) {
  return __awaiter(this, void 0, void 0, function* () {
    const resolvers = builder.resolvers.insert;
    let resolverInfo = null;

    for (const key of Object.keys(resolvers)) {
      if (key.toLowerCase() === resolverName.toLowerCase()) {
        resolverInfo = resolvers[key];
      }
    }

    if (!resolverInfo) {
      throw new Error(`Resolver name ${resolverName} is not resolved.`);
    }

    const evt = {
      resolverData: {},
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      transactionData: tr,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      transactionOptions: trOptions
    };

    if (builder.events.beginExecute) {
      yield builder.events.beginExecute(evt);
    } // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment


    let ret = null;

    try {
      const ctx = {
        functions: builder.functions,
        graphPath: [],
        resolverName: resolverName,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        resolverData: evt.resolverData,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        transactionData: tr,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        transactionOptions: trOptions,
        resolverCapabilities: {
          filtering: false,
          sorting: false,
          limit: false,
          offset: false
        }
      };
      ret = yield resolverInfo(records, ctx);

      if (builder.events.endExecute) {
        yield builder.events.endExecute(evt, null);
      }
    } catch (e) {
      if (builder.events.endExecute) {
        yield builder.events.endExecute(evt, e);
      }

      throw e;
    } // eslint-disable-next-line @typescript-eslint/no-unsafe-return


    return ret;
  });
}
function executeUpdateDML(builder, // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
tr, trOptions, resolverName, records) {
  return __awaiter(this, void 0, void 0, function* () {
    const resolvers = builder.resolvers.update;
    let resolverInfo = null;

    for (const key of Object.keys(resolvers)) {
      if (key.toLowerCase() === resolverName.toLowerCase()) {
        resolverInfo = resolvers[key];
      }
    }

    if (!resolverInfo) {
      throw new Error(`Resolver name ${resolverName} is not resolved.`);
    }

    const evt = {
      resolverData: {},
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      transactionData: tr,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      transactionOptions: trOptions
    };

    if (builder.events.beginExecute) {
      yield builder.events.beginExecute(evt);
    } // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment


    let ret = null;

    try {
      const ctx = {
        functions: builder.functions,
        graphPath: [],
        resolverName: resolverName,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        resolverData: evt.resolverData,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        transactionData: tr,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        transactionOptions: trOptions,
        resolverCapabilities: {
          filtering: false,
          sorting: false,
          limit: false,
          offset: false
        }
      };
      ret = yield resolverInfo(records, ctx);

      if (builder.events.endExecute) {
        yield builder.events.endExecute(evt, null);
      }
    } catch (e) {
      if (builder.events.endExecute) {
        yield builder.events.endExecute(evt, e);
      }

      throw e;
    } // eslint-disable-next-line @typescript-eslint/no-unsafe-return


    return ret;
  });
}
function executeRemoveDML(builder, // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
tr, trOptions, resolverName, records) {
  return __awaiter(this, void 0, void 0, function* () {
    const resolvers = builder.resolvers.remove;
    let resolverInfo = null;

    for (const key of Object.keys(resolvers)) {
      if (key.toLowerCase() === resolverName.toLowerCase()) {
        resolverInfo = resolvers[key];
      }
    }

    if (!resolverInfo) {
      throw new Error(`Resolver name ${resolverName} is not resolved.`);
    }

    const evt = {
      resolverData: {},
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      transactionData: tr,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      transactionOptions: trOptions
    };

    if (builder.events.beginExecute) {
      yield builder.events.beginExecute(evt);
    }

    try {
      const ctx = {
        functions: builder.functions,
        graphPath: [],
        resolverName: resolverName,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        resolverData: evt.resolverData,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        transactionData: tr,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        transactionOptions: trOptions,
        resolverCapabilities: {
          filtering: false,
          sorting: false,
          limit: false,
          offset: false
        }
      };
      yield resolverInfo(records, ctx);

      if (builder.events.endExecute) {
        yield builder.events.endExecute(evt, null);
      }
    } catch (e) {
      if (builder.events.endExecute) {
        yield builder.events.endExecute(evt, e);
      }

      throw e;
    }
  });
}

/***/ }),

/***/ "./src/lib/run-query.ts":
/*!******************************!*\
  !*** ./src/lib/run-query.ts ***!
  \******************************/
/*! exports provided: executeCompiledQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "executeCompiledQuery", function() { return executeCompiledQuery; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/lib/util.ts");
/* harmony import */ var _call__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./call */ "./src/lib/call.ts");
/* harmony import */ var _sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sort */ "./src/sort.ts");
/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../filters */ "./src/filters.ts");
// Copyright (c) 2020 Shellyl_N and Authors
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






function filterZeroLengthCondFn(cond) {
  switch (cond.op) {
    case 'true':
      return false;

    case 'not':
    case 'and':
    case 'or':
      if (cond.operands.length === 0) {
        return false;
      }

  }

  return true;
}

function filterCondOperands(name, cond) {
  cond.operands = cond.operands.map(x => {
    switch (typeof x) {
      case 'object':
        if (Array.isArray(x)) {
          return x;
        } else {
          if (x === null) {
            // NOTE: never reach here.
            return x;
          }

          switch (x.type) {
            case 'condition':
              return pruneCondition(name, x);

            default:
              return x;
          }
        }

      default:
        return x;
    }
  }).filter(x => {
    switch (typeof x) {
      case 'object':
        if (x !== null && !Array.isArray(x) && x.type === 'condition') {
          return filterZeroLengthCondFn(x);
        }

    }

    return true;
  });
  return cond;
}

function pruneConditionCheckFncall(name, x) {
  for (const arg of x.args) {
    switch (typeof arg) {
      case 'object':
        if (arg === null) {// NOTE: Nothing to do.
        } else {
          switch (arg.type) {
            case 'field':
              // TODO: Check all arguments' resolver are equal
              if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isEqualComplexName"])(name, arg.name.slice(0, arg.name.length - 1))) {
                return {
                  type: 'condition',
                  op: 'true',
                  operands: []
                };
              } else {
                arg.name = arg.name.slice(arg.name.length - 1);
              }

              break;

            case 'fncall':
              {
                const tmp = pruneConditionCheckFncall(name, arg);

                if (tmp) {
                  return tmp;
                }
              }
              break;
          }
        }

        break;
    }
  }

  return null;
}

function pruneCondition(name, cond) {
  if (cond.operands.length) {
    const x = cond.operands[0];

    switch (typeof x) {
      case 'object':
        if (x === null) {// NOTE: never reach here.
          // NOTE: Nothing to do.
        } else if (Array.isArray(x)) {// NOTE: Nothing to do. It is data.
        } else {
          switch (x.type) {
            case 'field':
              if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isEqualComplexName"])(name, x.name.slice(0, x.name.length - 1))) {
                return {
                  type: 'condition',
                  op: 'true',
                  operands: []
                };
              } else {
                x.name = x.name.slice(x.name.length - 1);
              }

              break;

            case 'fncall':
              {
                const tmp = pruneConditionCheckFncall(name, x);

                if (tmp) {
                  return tmp;
                }
              }
          }
        }

        break;
    }
  }

  return filterCondOperands(name, cond);
}

function collectSubQueriesFromCondition(subQueries, cond) {
  switch (cond.type) {
    case 'condition':
      for (let i = 0; i < cond.operands.length; i++) {
        const x = cond.operands[i];

        switch (typeof x) {
          case 'object':
            if (x === null) {// NOTE: never reach here.
              // NOTE: Nothing to do.
            } else if (Array.isArray(x)) {// NOTE: Nothing to do. It is data.
            } else {
              switch (x.type) {
                case 'condition':
                  collectSubQueriesFromCondition(subQueries, x);
                  break;

                case 'subquery':
                  subQueries.push({
                    cond,
                    index: i,
                    subQuery: x
                  });
                  break;
              }
            }

            break;
        }
      }

      break;
  }

  return cond;
}

function execCondSubQueries(builder, // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
tr, trOptions, condTemplate, resolverData) {
  return __awaiter(this, void 0, void 0, function* () {
    const condSubQueries = [];
    condTemplate.forEach(x => collectSubQueriesFromCondition(condSubQueries, x));
    const condSubQueryResults = condSubQueries.map(x => executeCompiledQuery(builder, tr, trOptions, x.subQuery.query, null, null, null, resolverData).then(r => ({
      cond: x.cond,
      index: x.index,
      subQuery: x.subQuery,
      result: r
    })));
    (yield Promise.all(condSubQueryResults)).map(x => {
      var _a;

      const field = x.subQuery.query.select[0];
      let fieldName = '';

      switch (field.type) {
        case 'field':
          fieldName = field.name[field.name.length - 1];
          break;

        default:
          fieldName = (_a = field.aliasName) !== null && _a !== void 0 ? _a : '';
          break;
      }

      if (x.result.length) {
        const fieldNameMap = new Map(Object.keys(x.result[0]).map(x => [x.toLowerCase(), x])); // eslint-disable-next-line @typescript-eslint/no-unsafe-return

        x.cond.operands[x.index] = x.result.map(w => Object(_util__WEBPACK_IMPORTED_MODULE_0__["getObjectValueWithFieldNameMap"])(fieldNameMap, w, fieldName));
      } else {
        x.cond.operands[x.index] = [];
      }
    });
  });
}

function mapSelectFields(ctx, x, records, isAggregation) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const queryFieldsMapEntries = new Array(x.queryFieldsMap.size); // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment

  const fnInfos = new Array(x.queryFieldsMap.size);

  const fnScaler = (i, fieldName, field, record) => {
    const fnInfo = fnInfos[i]; // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access

    record[field.aliasName] = Object(_call__WEBPACK_IMPORTED_MODULE_1__["callScalarFunction"])(ctx, field, fnInfo, 'any', record, null);
  };

  const fnImmediateScaler = (i, fieldName, field, record) => {
    const fnInfo = fnInfos[i]; // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access

    record[field.aliasName] = Object(_call__WEBPACK_IMPORTED_MODULE_1__["callImmediateScalarFunction"])(ctx, field, fnInfo, 'any', record, null);
  };

  const fnNoop = (i, fieldName, field, record) => void 0;

  {
    let i = 0;

    for (const ent of x.queryFieldsMap.entries()) {
      const [fieldName, field] = ent;

      switch (field.type) {
        case 'field':
          queryFieldsMapEntries[i] = {
            isField: true,
            fieldName,
            field,
            fn: fnNoop
          };
          break;

        case 'fncall':
          // NOTE: If aggregation, function will be called at `aggregateFields()`.
          if (isAggregation) {
            queryFieldsMapEntries[i] = {
              isField: false,
              fieldName,
              field,
              fn: fnNoop
            };
          } else {
            const fnNameI = field.fn.toLowerCase();
            const fnInfo = ctx.functions.find(x => x.name.toLowerCase() === fnNameI); // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

            fnInfos[i] = fnInfo;

            switch (fnInfo === null || fnInfo === void 0 ? void 0 : fnInfo.type) {
              case 'scalar':
                queryFieldsMapEntries[i] = {
                  isField: false,
                  fieldName,
                  field,
                  fn: fnScaler
                };
                break;

              case 'immediate-scalar':
                queryFieldsMapEntries[i] = {
                  isField: false,
                  fieldName,
                  field,
                  fn: fnImmediateScaler
                };
                break;

              default:
                queryFieldsMapEntries[i] = {
                  isField: false,
                  fieldName,
                  field,
                  fn: fnNoop
                };
                break;
            }
          }

          break;

        default:
          queryFieldsMapEntries[i] = {
            isField: false,
            fieldName,
            field,
            fn: fnNoop
          };
          break;
      }

      i++;
    }
  }

  for (const record of records) {
    for (let i = 0; i < queryFieldsMapEntries.length; i++) {
      const {
        isField,
        fieldName,
        field,
        fn
      } = queryFieldsMapEntries[i];

      if (isField) {
        // NOTE: Inline expansion
        if (field.aliasName) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-non-null-assertion
          record[field.aliasName] = record[fieldName];
        }
      } else {
        fn(i, fieldName, field, record);
      }
    }
  } // eslint-disable-next-line @typescript-eslint/no-unsafe-return


  return records;
}

function groupRecords(ctx, groupBy, x, records) {
  if (records.length === 0) {
    return [];
  }

  if (records.length === 1 || groupBy.length === 0) {
    return [records];
  }

  const result = new Map();

  if (records.length) {
    let i = 0;
    const fieldNameMap = new Map(Object.keys(records[0]).map(x => [x.toLowerCase(), x]));

    for (const record of records) {
      const key = [];

      for (const k of groupBy) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        let v = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getObjectValueWithFieldNameMap"])(fieldNameMap, record, k);

        if (v === null || v === void 0) {
          v = `__$$GENSYM_VT4iHbNbZW3C7taC7J6bx8pruw40cX5X$$_${i++}`;
        }

        key.push(v);
      }

      const keystr = JSON.stringify(key);

      if (result.has(keystr)) {
        const a = result.get(keystr); // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

        a.push(record);
      } else {
        result.set(keystr, [record]);
      }
    }
  }

  return Array.from(result.values());
}

function aggregateFields(ctx, groupBy, x, records) {
  var _a, _b;

  const result = [];

  if (!records.length) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return result;
  } // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment


  const firstRec = records[0][0];
  const groupFields = new Map(groupBy.map(w => {
    var _a;

    return [w.toLowerCase(), (_a = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getTrueCaseFieldName"])(firstRec, w)) !== null && _a !== void 0 ? _a : ''];
  })); // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment

  const queryFieldsMapEntries = new Array(x.queryFieldsMap.size); // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment

  const fnInfos = new Array(x.queryFieldsMap.size);

  const fnAggregate = (i, field, g, agg) => {
    const fnInfo = fnInfos[i]; // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access

    agg[field.aliasName] = Object(_call__WEBPACK_IMPORTED_MODULE_1__["callAggregateFunction"])(ctx, field, fnInfo, 'any', g);
  };

  const fnImmediateScalar = (i, field, g, agg) => {
    const fnInfo = fnInfos[i]; // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access

    agg[field.aliasName] = Object(_call__WEBPACK_IMPORTED_MODULE_1__["callImmediateScalarFunction"])(ctx, field, fnInfo, 'any', null, g);
  };

  const fnScalar = (i, field, g, agg) => {
    const fnInfo = fnInfos[i]; // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access

    agg[field.aliasName] = Object(_call__WEBPACK_IMPORTED_MODULE_1__["callScalarFunction"])(ctx, field, fnInfo, 'any', g[0], g);
  };

  const fnNoop = (i, field, g, agg) => void 0;

  {
    let i = 0;

    for (const ent of x.queryFieldsMap.entries()) {
      const [, field] = ent;

      switch (field.type) {
        case 'field':
          {
            const trueCaseName = Object(_call__WEBPACK_IMPORTED_MODULE_1__["getGroupFieldTrueCaseName"])(groupFields, field.name[field.name.length - 1]);

            if (!trueCaseName) {
              throw new Error(`${field.name.join('.')} is not allowed. Aggregate function is needed.`);
            }

            queryFieldsMapEntries[i] = {
              isField: true,
              field,
              trueCaseName,
              fn: fnNoop
            };
          }
          break;

        case 'fncall':
          {
            const fnNameI = field.fn.toLowerCase();
            const fnInfo = ctx.functions.find(x => x.name.toLowerCase() === fnNameI); // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

            fnInfos[i] = fnInfo;

            switch (fnInfo === null || fnInfo === void 0 ? void 0 : fnInfo.type) {
              case 'aggregate':
                queryFieldsMapEntries[i] = {
                  isField: false,
                  field,
                  trueCaseName: '',
                  fn: fnAggregate
                };
                break;

              case 'immediate-scalar':
                queryFieldsMapEntries[i] = {
                  isField: false,
                  field,
                  trueCaseName: '',
                  fn: fnImmediateScalar
                };
                break;

              case 'scalar':
                if (!Object(_call__WEBPACK_IMPORTED_MODULE_1__["isScalarFnCallable"])(ctx, groupFields, field.args)) {
                  throw new Error(`${(_a = field.aliasName) !== null && _a !== void 0 ? _a : '(unnamed)'} is not allowed. Aggregate function is needed.`);
                }

                queryFieldsMapEntries[i] = {
                  isField: false,
                  field,
                  trueCaseName: '',
                  fn: fnScalar
                };
                break;

              default:
                throw new Error(`${(_b = field.aliasName) !== null && _b !== void 0 ? _b : '(unnamed)'} is not allowed. Aggregate function is needed.`);
            }
          }
          break;

        default:
          queryFieldsMapEntries[i] = {
            isField: false,
            field,
            trueCaseName: '',
            fn: fnNoop
          };
          break;
      }

      i++;
    }
  }

  for (const g of records) {
    const agg = {};

    for (let i = 0; i < queryFieldsMapEntries.length; i++) {
      const {
        isField,
        field,
        trueCaseName,
        fn
      } = queryFieldsMapEntries[i];

      if (isField) {
        // NOTE: Inline expansion
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
        agg[trueCaseName] = g[0][trueCaseName];

        if (field.aliasName) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
          agg[field.aliasName] = g[0][trueCaseName];
        }
      } else {
        fn(i, field, g, agg);
      }
    }

    result.push(agg);
  } // eslint-disable-next-line @typescript-eslint/no-unsafe-return


  return result;
}

function getRemovingFields(x, records, isAggregation) {
  const removingFields = new Set();

  if (records.length) {
    const requestedFields = new Set(); // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment

    const rec = records[0];

    for (const ent of x.queryFieldsMap.entries()) {
      const f = ent[1];

      if (isAggregation && f.type === 'field' && f.aliasName) {
        requestedFields.add(f.aliasName);
      } else {
        const name = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getTrueCaseFieldName"])(rec, ent[0]);

        if (name) {
          requestedFields.add(name);
        }
      }
    }

    for (const k of Object.keys(rec)) {
      if (!requestedFields.has(k)) {
        removingFields.add(k);
      }
    }
  }

  return removingFields;
}

function getResolversInfo(builder, resolverNames, x, i) {
  var _a, _b, _c, _d;

  const parentType = i === 0 ? 'master' : 'detail';
  const parentKey = JSON.stringify(x.name.slice(0, x.name.length - 1));
  const currentKey = JSON.stringify(x.name);
  const resolverName = (_a = x.resolverName) !== null && _a !== void 0 ? _a : '';
  const parentResolverName = resolverNames.get(parentKey); // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment

  const masterRelationshipInfo = (_d = i === 0 ? // for subquery's primary resolver
  ((_b = builder.relationships[resolverName]) !== null && _b !== void 0 ? _b : {})[// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  parentResolverName] : // for detail->master relationship
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  ((_c = builder.relationships[parentResolverName]) !== null && _c !== void 0 ? _c : {})[resolverName]) !== null && _d !== void 0 ? _d : {}; // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access

  const foreignIdField = typeof masterRelationshipInfo === 'object' && masterRelationshipInfo.id ? // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  masterRelationshipInfo.id : i === 0 // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  ? builder.rules.foreignIdFieldName(parentResolverName) : builder.rules.foreignIdFieldName(resolverName);
  const parentIdFieldName = parentResolverName ? builder.rules.idFieldName(parentResolverName) : void 0;
  const currentIdFieldName = builder.rules.idFieldName(resolverName);
  return {
    parentType,
    parentKey,
    currentKey,
    resolverName,
    parentResolverName,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    masterRelationshipInfo,
    foreignIdField,
    parentIdFieldName,
    currentIdFieldName
  };
}

function executeCompiledQuery(builder, // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
tr, trOptions, query, parent, parentQueriedRecords, parentResolverNames, parentResolverData) {
  var _a, _b;

  return __awaiter(this, void 0, void 0, function* () {
    let primaryRecords;
    let primaryCapabilities;
    const queriedRecords = parentQueriedRecords !== null && parentQueriedRecords !== void 0 ? parentQueriedRecords : new Map();
    const resolverNames = parentResolverNames !== null && parentResolverNames !== void 0 ? parentResolverNames : new Map(); // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment

    const resolverData = parentResolverData !== null && parentResolverData !== void 0 ? parentResolverData : {};

    if (!parent && builder.events.beginExecute) {
      yield builder.events.beginExecute({
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        resolverData,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        transactionData: tr,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        transactionOptions: trOptions
      });
    }

    try {
      const condWhereTemplate = query.where ? Object(_util__WEBPACK_IMPORTED_MODULE_0__["deepCloneObject"])(query.where) : [];
      const condHavingTemplate = query.having ? Object(_util__WEBPACK_IMPORTED_MODULE_0__["deepCloneObject"])(query.having) : [];
      yield execCondSubQueries(builder, tr, trOptions, condWhereTemplate, resolverData);
      yield execCondSubQueries(builder, tr, trOptions, condHavingTemplate, resolverData);
      const removingFieldsAndRecords = [];
      const removingFieldsMap = new Map();

      for (let i = 0; i < query.from.length; i++) {
        const x = query.from[i];
        const {
          parentType,
          parentKey,
          currentKey,
          resolverName,
          parentResolverName,
          foreignIdField,
          parentIdFieldName,
          currentIdFieldName
        } = getResolversInfo(builder, resolverNames, x, i);

        if (!x.resolver) {
          throw new Error(`Resolver name ${x.name.join('.')} is not resolved.`);
        }

        let records = [];
        const parentRecords = queriedRecords.get(parentKey);
        const hasAliasNameCond = x.condAliasFields.size > 0 ? true : false;
        const isAggregation = i === 0 && query.groupBy ? true : false;
        const queryFields = Array.from(x.queryFields.values());
        const condFields = Array.from(x.condFields.values());
        const havingCondFields = Array.from(x.havingCondFields.values());
        const groupFields = i === 0 && query.groupBy ? query.groupBy : []; // NOTE: condition is same as `isAggregation`

        const sortFields = Array.from(x.sortFieldNames.values());
        const relationshipIdFields = Array.from(x.relationshipIdFields.values());
        const resolvingFields = Array.from(new Set(queryFields.concat(condFields).concat(havingCondFields).concat(builder.rules.idFieldName ? [builder.rules.idFieldName(resolverName)] : []).concat(groupFields).concat(sortFields).concat(relationshipIdFields)).values());
        const condWhere = Object(_util__WEBPACK_IMPORTED_MODULE_0__["deepCloneObject"])(condWhereTemplate).map(cond => pruneCondition(x.name, cond)).filter(filterZeroLengthCondFn);
        const condHaving = Object(_util__WEBPACK_IMPORTED_MODULE_0__["deepCloneObject"])(condHavingTemplate).map(cond => pruneCondition(x.name, cond)).filter(filterZeroLengthCondFn);
        const ctxGen = {
          functions: builder.functions,
          query,
          graphPath: x.name,
          resolverName,
          parentResolverName,
          parentType,
          foreignIdField,
          masterIdField: i === 0 ? parentIdFieldName : currentIdFieldName,
          detailIdField: i === 0 ? currentIdFieldName : parentIdFieldName,
          parentRecords,
          conditions: condWhere,
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          resolverData,
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          transactionData: tr,
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          transactionOptions: trOptions
        };

        if (i === 0) {
          const ctx = Object.assign(Object.assign({}, ctxGen), {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            parent,
            resolverCapabilities: {
              filtering: false,
              sorting: false,
              limit: false,
              offset: false
            }
          });
          records = yield x.resolver(resolvingFields, hasAliasNameCond ? [] : condWhere, isAggregation || hasAliasNameCond ? null : (_a = query.limit) !== null && _a !== void 0 ? _a : null, isAggregation || hasAliasNameCond ? null : (_b = query.offset) !== null && _b !== void 0 ? _b : null, ctx);
          primaryCapabilities = ctx.resolverCapabilities;

          if (hasAliasNameCond) {
            primaryCapabilities.filtering = false;
            primaryCapabilities.limit = false;
            primaryCapabilities.offset = false;
            primaryCapabilities.sorting = false;
          }

          if (hasAliasNameCond) {
            records = mapSelectFields(ctxGen, x, records, isAggregation);
          }

          if (!ctx.resolverCapabilities.filtering) {
            records = Object(_filters__WEBPACK_IMPORTED_MODULE_3__["applyWhereConditions"])(ctxGen, condWhere, records);
          }

          if (!hasAliasNameCond) {
            records = mapSelectFields(ctxGen, x, records, isAggregation);
          }

          if (isAggregation) {
            // TODO: `count()` on non-aggregation query
            primaryCapabilities.limit = false;
            primaryCapabilities.offset = false;
            primaryCapabilities.sorting = false;
            const grouped = groupRecords(ctxGen, groupFields, x, records);
            const filteredGrouped = Object(_filters__WEBPACK_IMPORTED_MODULE_3__["applyHavingConditions"])(ctxGen, condHaving, grouped);
            records = aggregateFields(ctxGen, groupFields, x, filteredGrouped);
          }

          primaryRecords = records;
        } else if (parentRecords && parentRecords.length) {
          // Get master relationships.
          // For N+1 Query problem
          if (builder.events.beforeMasterSubQueries) {
            yield builder.events.beforeMasterSubQueries(ctxGen);
          }

          const parentFieldName = x.name[x.name.length - 1];

          for (const p of parentRecords) {
            const ctx = Object.assign(Object.assign({}, ctxGen), {
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              parent: p,
              resolverCapabilities: {
                filtering: false,
                sorting: false,
                limit: false,
                offset: false
              }
            });
            let recs = (yield x.resolver(resolvingFields, hasAliasNameCond ? [] : condWhere, 1, 0, ctx)).slice(0, 1);

            if (hasAliasNameCond) {
              ctx.resolverCapabilities.filtering = false;
              ctx.resolverCapabilities.limit = false;
              ctx.resolverCapabilities.offset = false;
              ctx.resolverCapabilities.sorting = false;
            }

            if (hasAliasNameCond) {
              recs = mapSelectFields(ctxGen, x, recs, isAggregation);
            }

            if (!ctx.resolverCapabilities.filtering) {
              recs = Object(_filters__WEBPACK_IMPORTED_MODULE_3__["applyWhereConditions"])(ctxGen, condWhere, recs);
            }

            if (!hasAliasNameCond) {
              recs = mapSelectFields(ctxGen, x, recs, isAggregation);
            } // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access


            p[parentFieldName] = recs.length > 0 ? recs[0] : null;
            records = records.concat(recs);
          }

          if (builder.events.afterMasterSubQueries) {
            yield builder.events.afterMasterSubQueries(ctxGen);
          }

          const parentRemovingFields = removingFieldsMap.get(parentKey);

          if (parentRemovingFields) {
            parentRemovingFields.delete(parentFieldName);
          }
        }

        const removingFields = getRemovingFields(x, records, isAggregation);
        removingFieldsAndRecords.push([removingFields, records]);
        removingFieldsMap.set(currentKey, removingFields);
        queriedRecords.set(currentKey, records);
        resolverNames.set(currentKey, resolverName);
      }

      if (query.selectSubQueries && primaryRecords) {
        const promises = [];

        for (const x of query.selectSubQueries) {
          const subQueryName = x.query.from[0].name;
          const parentKey = JSON.stringify(subQueryName.slice(0, subQueryName.length - 1));
          const parentRecords = queriedRecords.get(parentKey);

          if (parentRecords) {
            // For N+1 Query problem // TODO: reduce descendants (grandchildren and ...) queries
            const {
              parentType,
              resolverName,
              parentResolverName,
              foreignIdField,
              parentIdFieldName,
              currentIdFieldName
            } = getResolversInfo(builder, resolverNames, x.query.from[0], 0);

            if (builder.events.beforeDetailSubQueries) {
              yield builder.events.beforeDetailSubQueries({
                functions: builder.functions,
                query: x.query,
                graphPath: subQueryName,
                resolverName,
                parentResolverName,
                parentType,
                foreignIdField,
                masterIdField: parentIdFieldName,
                detailIdField: currentIdFieldName,
                parentRecords,
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                resolverData,
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                transactionData: tr,
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                transactionOptions: trOptions
              });
            }

            for (const p of parentRecords) {
              promises.push(executeCompiledQuery(builder, tr, trOptions, x.query, p, queriedRecords, resolverNames, resolverData).then(q => ({
                name: subQueryName,
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                parent: p,
                result: q
              })));
            }

            if (builder.events.afterDetailSubQueries) {
              yield builder.events.afterDetailSubQueries({
                functions: builder.functions,
                query: x.query,
                graphPath: subQueryName,
                parentRecords,
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                resolverData,
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                transactionData: tr,
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                transactionOptions: trOptions
              });
            }
          }

          const parentRemovingFields = removingFieldsMap.get(parentKey);

          if (parentRemovingFields) {
            parentRemovingFields.delete(subQueryName[subQueryName.length - 1]);
          }
        }

        const results = yield Promise.all(promises);
        results.forEach(r => {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          r.parent[r.name[r.name.length - 1]] = r.result;
        });
      }

      if (primaryRecords) {
        if (primaryCapabilities) {
          if (!primaryCapabilities.sorting) {
            primaryRecords = Object(_sort__WEBPACK_IMPORTED_MODULE_2__["sortRecords"])(query, primaryRecords);
          }

          if (!(primaryCapabilities.offset || primaryCapabilities.limit)) {
            if (typeof query.offset === 'number' && typeof query.limit === 'number') {
              primaryRecords = primaryRecords.slice(query.offset, query.offset + query.limit);
            } else if (typeof query.offset === 'number') {
              primaryRecords = primaryRecords.slice(query.offset);
            } else if (typeof query.limit === 'number') {
              primaryRecords = primaryRecords.slice(0, query.limit);
            }
          } else if (!primaryCapabilities.offset) {
            if (typeof query.offset === 'number') {
              primaryRecords = primaryRecords.slice(query.offset);
            }
          } else if (!primaryCapabilities.limit) {
            if (typeof query.limit === 'number') {
              primaryRecords = primaryRecords.slice(0, query.limit);
            }
          }
        }
      } else {
        // NOTE: never reach here.
        primaryRecords = [];
      }

      for (const ent of removingFieldsAndRecords) {
        const [removingFields, records] = ent;

        for (const r of records) {
          for (const name of removingFields) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            delete r[name];
          }
        }
      }

      if (!parent && builder.events.endExecute) {
        yield builder.events.endExecute({
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          resolverData,
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          transactionData: tr,
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          transactionOptions: trOptions
        }, null);
      }
    } catch (e) {
      if (!parent && builder.events.endExecute) {
        yield builder.events.endExecute({
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          resolverData,
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          transactionData: tr,
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          transactionOptions: trOptions
        }, e);
      }

      throw e;
    } // eslint-disable-next-line @typescript-eslint/no-unsafe-return


    return primaryRecords;
  });
}

/***/ }),

/***/ "./src/lib/util.ts":
/*!*************************!*\
  !*** ./src/lib/util.ts ***!
  \*************************/
/*! exports provided: DatePattern, DateTimePattern, DateTimeNoTzPattern, dummyTargetObject, isUnsafeVarNames, deepCloneObject, isEqualComplexName, getFullQualifiedName, getTrueCaseFieldName, getObjectValue, getObjectValueWithFieldNameMap, getTrueCasePathName, getObjectTrueCasePathValue, getObjectPathValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePattern", function() { return DatePattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateTimePattern", function() { return DateTimePattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateTimeNoTzPattern", function() { return DateTimeNoTzPattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dummyTargetObject", function() { return dummyTargetObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUnsafeVarNames", function() { return isUnsafeVarNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepCloneObject", function() { return deepCloneObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEqualComplexName", function() { return isEqualComplexName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFullQualifiedName", function() { return getFullQualifiedName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTrueCaseFieldName", function() { return getTrueCaseFieldName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getObjectValue", function() { return getObjectValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getObjectValueWithFieldNameMap", function() { return getObjectValueWithFieldNameMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTrueCasePathName", function() { return getTrueCasePathName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getObjectTrueCasePathValue", function() { return getObjectTrueCasePathValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getObjectPathValue", function() { return getObjectPathValue; });
// Copyright (c) 2020 Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-implied-eval
const globalObj = Function('return this')();
const objConstructor = {}.constructor; // NOTE: objConstructor            === Object

const funConstructor = Function; // NOTE: ({}).toString.constructor === Function

const DatePattern = /^(\d{4}-[01]\d-[0-3]\d)$/;
const DateTimePattern = /^((?:(?:\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+)|(?:\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d)|(?:\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d))(?:[+-][0-2]\d:[0-5]\d|Z))$/;
const DateTimeNoTzPattern = /^((?:\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+)|(?:\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d)|(?:\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d))$/;
const dummyTargetObject = {}; // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types

function isUnsafeVarNames(target, varName) {
  if (target === globalObj || varName === '__proto__' || varName === '__defineGetter__' || varName === '__defineSetter__' || varName === '__lookupGetter__' || varName === '__lookupSetter__') {
    return true;
  }

  if (varName === 'prototype' || varName === 'constructor') {
    if (target === null || target === void 0 || typeof target === 'function') {
      return true;
    }
  }

  if (target === null || target === void 0 || target === objConstructor) {
    if (objConstructor.hasOwnProperty(varName)) {
      return true;
    }
  }

  if (target === null || target === void 0 || target === funConstructor) {
    // checking 'call', 'arguments', 'caller', ...
    let con = funConstructor;

    while (con) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      if (con.hasOwnProperty(varName)) {
        return true;
      } // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access


      con = con.__proto__;
    }
  }

  if (typeof target === 'function') {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    if (!target.hasOwnProperty(varName)) {
      // function's prototypes' members
      return true;
    }
  }

  return false;
}
function deepCloneObject(obj) {
  switch (typeof obj) {
    case 'object':
      if (Array.isArray(obj)) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return obj.slice().map(x => deepCloneObject(x));
      } else if (obj === null) {
        return obj;
      } else {
        if (obj instanceof Map) {
          const ent = Array.from(obj.entries()).map(x => [deepCloneObject(x[0]), deepCloneObject(x[1])]); // eslint-disable-next-line @typescript-eslint/no-unsafe-return

          return new Map(ent);
        } else if (obj instanceof Set) {
          const ent = Array.from(obj.values()) // eslint-disable-next-line @typescript-eslint/no-unsafe-return
          .map(x => deepCloneObject(x)); // eslint-disable-next-line @typescript-eslint/no-unsafe-return

          return new Set(ent);
        } else {
          const r = {};

          for (const k of Object.keys(obj)) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            r[k] = deepCloneObject(obj[k]);
          } // eslint-disable-next-line @typescript-eslint/no-unsafe-return


          return r;
        }
      }

    default:
      return obj;
  }
}
function isEqualComplexName(a, b) {
  if (a.length !== b.length) {
    return false;
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i].toLowerCase() !== b[i].toLowerCase()) {
      return false;
    }
  }

  return true;
} // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types

function getFullQualifiedName(primaryResolverName, name) {
  const ns = [];

  for (let i = 0; i < primaryResolverName.length; i++) {
    const sliced = primaryResolverName.slice(i);

    if (isEqualComplexName(name.slice(0, sliced.length), sliced)) {
      break;
    } else {
      ns.push(primaryResolverName[i]);
    }
  }

  if (ns.length) {
    return ns.concat(name);
  } else {
    return name;
  }
} // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types

function getTrueCaseFieldName(record, name) {
  const keys = Object.keys(record);
  const ni = name.toLowerCase();
  const index = keys.findIndex(x => x.toLowerCase() === ni);

  if (0 > index) {
    return null;
  } // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access


  return keys[index];
} // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types

function getObjectValue(record, name) {
  const keys = Object.keys(record);
  const ni = name.toLowerCase();
  const index = keys.findIndex(x => x.toLowerCase() === ni);

  if (0 > index) {
    return null;
  } // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access


  return record[keys[index]];
} // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types

function getObjectValueWithFieldNameMap(map, record, name) {
  const ni = name.toLowerCase();

  if (!map.has(ni)) {
    return null;
  } // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-non-null-assertion


  return record[map.get(ni)];
} // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types

function getTrueCasePathName(record, name) {
  const ret = []; // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment

  let r = record;

  for (const n of name) {
    if (r === null || r === void 0) {
      return null;
    }

    const keys = Object.keys(r);
    const ni = n.toLowerCase();
    const index = keys.findIndex(x => x.toLowerCase() === ni);

    if (0 > index) {
      return null;
    } // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access


    r = r[keys[index]];
    ret.push(keys[index]);
  } // eslint-disable-next-line @typescript-eslint/no-unsafe-return


  return ret;
} // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types

function getObjectTrueCasePathValue(record, name) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  let r = record;

  for (const n of name) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    r = r[n];

    if (r === null || r === void 0) {
      return null;
    }
  } // eslint-disable-next-line @typescript-eslint/no-unsafe-return


  return r;
} // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types

function getObjectPathValue(record, name) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  let r = record;

  for (const n of name) {
    const keys = Object.keys(r);
    const ni = n.toLowerCase();
    const index = keys.findIndex(x => x.toLowerCase() === ni);

    if (0 > index) {
      return null;
    } // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access


    r = r[keys[index]];

    if (r === null || r === void 0) {
      return null;
    }
  } // eslint-disable-next-line @typescript-eslint/no-unsafe-return


  return r;
}

/***/ }),

/***/ "./src/resolvers.ts":
/*!**************************!*\
  !*** ./src/resolvers.ts ***!
  \**************************/
/*! exports provided: setDefaultStaticResolverConfig, staticJsonResolverBuilder, staticCsvResolverBuilder, passThroughResolverBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDefaultStaticResolverConfig", function() { return setDefaultStaticResolverConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticJsonResolverBuilder", function() { return staticJsonResolverBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticCsvResolverBuilder", function() { return staticCsvResolverBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passThroughResolverBuilder", function() { return passThroughResolverBuilder; });
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/util */ "./src/lib/util.ts");
/* harmony import */ var _lib_csv_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/csv-parser */ "./src/lib/csv-parser.ts");
/* harmony import */ var _sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sort */ "./src/sort.ts");
/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filters */ "./src/filters.ts");
// Copyright (c) 2020 Shellyl_N and Authors
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




 // const defaultStaticResolverConfig: StaticResolverConfig = {
//     noCache: true,
//     noFiltering: true,
//     noSorting: true,
// };

const defaultStaticResolverConfig = {
  noCache: false,
  noFiltering: false,
  noSorting: false
};
function setDefaultStaticResolverConfig(conf) {
  Object.assign(defaultStaticResolverConfig, conf);
}

function jsonRecordsParser(src) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const records = JSON.parse(src);

  if (!Array.isArray(records)) {
    throw new Error(`jsonRecordsParser: Records should be array.`);
  } // eslint-disable-next-line @typescript-eslint/no-unsafe-return


  return records;
}

function csvRecordsParser(src) {
  const rawRecords = Object(_lib_csv_parser__WEBPACK_IMPORTED_MODULE_1__["parse"])(src.trim());

  if (!rawRecords.length) {
    throw new Error(`csvRecordsParser: Header row is needed.`);
  }

  const header = rawRecords[0];

  for (let c = 0; c < header.length; c++) {
    if (Object(_lib_util__WEBPACK_IMPORTED_MODULE_0__["isUnsafeVarNames"])(_lib_util__WEBPACK_IMPORTED_MODULE_0__["dummyTargetObject"], header[c])) {
      throw new Error(`Unsafe symbol name is appeared: ${header[c]}`);
    }
  }

  const records = [];

  for (let i = 1; i < rawRecords.length; i++) {
    const cur = rawRecords[i];
    const rec = {};

    for (let c = 0; c < header.length; c++) {
      rec[header[c]] = cur[c];
    }

    records.push(rec);
  } // eslint-disable-next-line @typescript-eslint/no-unsafe-return


  return records;
}

function passThroughParser(src) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return src;
}

function filterAndSliceRecords(records, fields, conditions, limit, offset, ctx, config) {
  if (!records.length) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return records;
  }

  const removingFields = new Set();
  const recordFields = new Map(Object.keys(records[0]).map(x => [x.toLowerCase(), x]));
  const requestedFields = new Set(fields.map(x => x.toLowerCase()));

  for (const field of requestedFields.keys()) {
    if (!recordFields.has(field)) {
      throw new Error(`Field "${field}" is not supplied from resolver "${ctx.resolverName}".`);
    }
  }

  if (!config.noFiltering) {
    records = Object(_filters__WEBPACK_IMPORTED_MODULE_3__["applyWhereConditions"])(ctx, conditions, records);
    ctx.resolverCapabilities.filtering = true;
  }

  if (records.length && ctx.parent) {
    switch (ctx.parentType) {
      case 'master':
        if (ctx.foreignIdField) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-non-null-assertion
          const parentId = Object(_lib_util__WEBPACK_IMPORTED_MODULE_0__["getObjectValue"])(ctx.parent, ctx.masterIdField); // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

          const fName = Object(_lib_util__WEBPACK_IMPORTED_MODULE_0__["getTrueCaseFieldName"])(records[0], ctx.foreignIdField); // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-non-null-assertion

          records = records.filter(x => x[fName] === parentId);
        }

        break;

      case 'detail':
        if (ctx.foreignIdField) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-non-null-assertion
          const parentId = Object(_lib_util__WEBPACK_IMPORTED_MODULE_0__["getObjectValue"])(ctx.parent, ctx.foreignIdField); // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

          const fName = Object(_lib_util__WEBPACK_IMPORTED_MODULE_0__["getTrueCaseFieldName"])(records[0], ctx.masterIdField); // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-non-null-assertion

          records = records.filter(x => x[fName] === parentId);
        }

        break;
    }
  }

  if (config.noFiltering) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return records;
  }

  if (!config.noSorting && ctx.query && ctx.query.orderBy) {
    const primaryPathLen = ctx.query.from[0].name.length;

    if (ctx.graphPath.length === primaryPathLen && Object(_lib_util__WEBPACK_IMPORTED_MODULE_0__["isEqualComplexName"])(ctx.graphPath, ctx.query.from[0].name)) {
      if (ctx.query.orderBy.every(w => w.name.length === primaryPathLen + 1 && recordFields.has(w.name[w.name.length - 1].toLowerCase()))) {
        records = Object(_sort__WEBPACK_IMPORTED_MODULE_2__["sortRecords"])(ctx.query, records);
        ctx.resolverCapabilities.sorting = true;
      }
    }
  }

  for (const field of recordFields.keys()) {
    if (!requestedFields.has(field)) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      removingFields.add(recordFields.get(field));
    }
  }

  for (const record of records) {
    for (const field of removingFields) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      delete record[field];
    }
  }

  if (ctx.resolverCapabilities.sorting) {
    if (typeof offset === 'number') {
      records = records.slice(offset);
    }

    if (typeof limit === 'number') {
      records = records.slice(0, limit);
    }

    ctx.resolverCapabilities.limit = true;
    ctx.resolverCapabilities.offset = true;
  } // eslint-disable-next-line @typescript-eslint/no-unsafe-return


  return records;
}

function staticResolverBuilderGen(parser) {
  return (resolverName, fetcher, config) => {
    return (fields, conditions, limit, offset, ctx) => __awaiter(this, void 0, void 0, function* () {
      let cache;
      let cachedRecords = null; // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access

      if (ctx.resolverData.cache) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
        cache = ctx.resolverData.cache; // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

        if (cache.has(resolverName)) {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          cachedRecords = cache.get(resolverName);
        }
      } else {
        cache = new Map();

        if (!config.noCache) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          ctx.resolverData.cache = cache;
        }
      }

      let records = null;

      if (cachedRecords === null) {
        const fetched = yield fetcher();
        records = parser(fetched); // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-unsafe-return

        cache.set(resolverName, records.map(x => Object.assign({}, x)));
      } else {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        records = cachedRecords.map(x => Object.assign({}, x));
      } // eslint-disable-next-line @typescript-eslint/no-unsafe-return


      return filterAndSliceRecords(records, fields, conditions, limit, offset, ctx, config);
    });
  };
}

const staticJsonResolverBuilder = (resolverName, fetcher, config) => {
  return staticResolverBuilderGen(jsonRecordsParser)(resolverName, fetcher, config !== null && config !== void 0 ? config : defaultStaticResolverConfig);
};
const staticCsvResolverBuilder = (resolverName, fetcher, config) => {
  return staticResolverBuilderGen(csvRecordsParser)(resolverName, fetcher, config !== null && config !== void 0 ? config : defaultStaticResolverConfig);
};
const passThroughResolverBuilder = (resolverName, fetcher, config) => {
  return staticResolverBuilderGen(passThroughParser)(resolverName, fetcher, config !== null && config !== void 0 ? config : defaultStaticResolverConfig);
};

/***/ }),

/***/ "./src/sort.ts":
/*!*********************!*\
  !*** ./src/sort.ts ***!
  \*********************/
/*! exports provided: sortRecords */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortRecords", function() { return sortRecords; });
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/util */ "./src/lib/util.ts");
// Copyright (c) 2020 Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln
 // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types

function sortRecords(query, records) {
  if (query.orderBy) {
    const primaryPathLen = query.from[0].name.length;
    const orderFields = query.orderBy;
    records = records.sort((a, b) => {
      const direction = (f, r) => f.direction === 'desc' ? -r : r;

      const fieldAndFNames = orderFields.map(f => ({
        f,
        fName: Object(_lib_util__WEBPACK_IMPORTED_MODULE_0__["getTrueCasePathName"])(records[0], f.name.slice(primaryPathLen))
      })); // eslint-disable-next-line prefer-const

      LOOP: for (let {
        f,
        fName
      } of fieldAndFNames) {
        let va = null;
        let vb = null;

        if (fName !== null) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          va = Object(_lib_util__WEBPACK_IMPORTED_MODULE_0__["getObjectTrueCasePathValue"])(a, fName); // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment

          vb = Object(_lib_util__WEBPACK_IMPORTED_MODULE_0__["getObjectTrueCasePathValue"])(b, fName);
        } else {
          // Fallback (when the child relationship of records[0] is null)
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          va = Object(_lib_util__WEBPACK_IMPORTED_MODULE_0__["getObjectPathValue"])(a, f.name.slice(primaryPathLen));
          fName = Object(_lib_util__WEBPACK_IMPORTED_MODULE_0__["getTrueCasePathName"])(b, f.name.slice(primaryPathLen)); // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment

          vb = fName !== null ? Object(_lib_util__WEBPACK_IMPORTED_MODULE_0__["getObjectTrueCasePathValue"])(b, fName) : null;
        }

        if (va === vb) {
          continue;
        }

        if (va === null) {
          return direction(f, f.nulls === 'last' ? 1 : -1); // default is `nulls first`
        }

        if (vb === null) {
          return direction(f, f.nulls === 'last' ? -1 : 1); // default is `nulls first`
        }

        switch (typeof va) {
          case 'number':
          case 'bigint':
            return direction(f, va - vb);

          case 'string':
            // TODO: date and datetime
            return direction(f, va > vb ? 1 : -1);

          default:
            // Ignore this field
            continue LOOP;
        }
      }

      return 0;
    });
  } // eslint-disable-next-line @typescript-eslint/no-unsafe-return


  return records;
}

/***/ }),

/***/ "./src/types.ts":
/*!**********************!*\
  !*** ./src/types.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Copyright (c) 2020 Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln


/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /builds/shellyln/open-soql/src/index.ts */"./src/index.ts");


/***/ })

/******/ });
});
//# sourceMappingURL=opensoql.js.map