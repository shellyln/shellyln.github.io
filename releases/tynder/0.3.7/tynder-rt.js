(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["tynder"] = factory();
	else
		root["tynder"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index-rt.ts":
/*!*************************!*\
  !*** ./src/index-rt.ts ***!
  \*************************/
/*! exports provided: ErrorTypes, picked, omit, partial, intersect, oneOf, subtract, primitive, regexpPatternStringType, primitiveValue, optional, repeated, sequenceOf, spread, enumType, objectType, derived, symlinkType, withName, withTypeName, withOriginalTypeName, withDocComment, withRange, withMinValue, withMaxValue, withGreaterThan, withLessThan, withMinLength, withMaxLength, withMatch, withStereotype, withForceCast, withRecordType, withMeta, withMsg, withMsgId, validateRoot, validate, getType, pickRoot, pick, patch, stereotypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stereotypes", function() { return stereotypes; });
/* harmony import */ var _stereotypes_date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stereotypes/date */ "./src/stereotypes/date.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./src/types.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorTypes", function() { return _types__WEBPACK_IMPORTED_MODULE_1__["ErrorTypes"]; });

/* harmony import */ var _operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./operators */ "./src/operators.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "picked", function() { return _operators__WEBPACK_IMPORTED_MODULE_2__["picked"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "omit", function() { return _operators__WEBPACK_IMPORTED_MODULE_2__["omit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "partial", function() { return _operators__WEBPACK_IMPORTED_MODULE_2__["partial"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "intersect", function() { return _operators__WEBPACK_IMPORTED_MODULE_2__["intersect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "oneOf", function() { return _operators__WEBPACK_IMPORTED_MODULE_2__["oneOf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return _operators__WEBPACK_IMPORTED_MODULE_2__["subtract"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "primitive", function() { return _operators__WEBPACK_IMPORTED_MODULE_2__["primitive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "regexpPatternStringType", function() { return _operators__WEBPACK_IMPORTED_MODULE_2__["regexpPatternStringType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "primitiveValue", function() { return _operators__WEBPACK_IMPORTED_MODULE_2__["primitiveValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "optional", function() { return _operators__WEBPACK_IMPORTED_MODULE_2__["optional"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "repeated", function() { return _operators__WEBPACK_IMPORTED_MODULE_2__["repeated"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sequenceOf", function() { return _operators__WEBPACK_IMPORTED_MODULE_2__["sequenceOf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "spread", function() { return _operators__WEBPACK_IMPORTED_MODULE_2__["spread"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enumType", function() { return _operators__WEBPACK_IMPORTED_MODULE_2__["enumType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "objectType", function() { return _operators__WEBPACK_IMPORTED_MODULE_2__["objectType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "derived", function() { return _operators__WEBPACK_IMPORTED_MODULE_2__["derived"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symlinkType", function() { return _operators__WEBPACK_IMPORTED_MODULE_2__["symlinkType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withName", function() { return _operators__WEBPACK_IMPORTED_MODULE_2__["withName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withTypeName", function() { return _operators__WEBPACK_IMPORTED_MODULE_2__["withTypeName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withOriginalTypeName", function() { return _operators__WEBPACK_IMPORTED_MODULE_2__["withOriginalTypeName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withDocComment", function() { return _operators__WEBPACK_IMPORTED_MODULE_2__["withDocComment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withRange", function() { return _operators__WEBPACK_IMPORTED_MODULE_2__["withRange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withMinValue", function() { return _operators__WEBPACK_IMPORTED_MODULE_2__["withMinValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withMaxValue", function() { return _operators__WEBPACK_IMPORTED_MODULE_2__["withMaxValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withGreaterThan", function() { return _operators__WEBPACK_IMPORTED_MODULE_2__["withGreaterThan"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withLessThan", function() { return _operators__WEBPACK_IMPORTED_MODULE_2__["withLessThan"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withMinLength", function() { return _operators__WEBPACK_IMPORTED_MODULE_2__["withMinLength"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withMaxLength", function() { return _operators__WEBPACK_IMPORTED_MODULE_2__["withMaxLength"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withMatch", function() { return _operators__WEBPACK_IMPORTED_MODULE_2__["withMatch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withStereotype", function() { return _operators__WEBPACK_IMPORTED_MODULE_2__["withStereotype"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withForceCast", function() { return _operators__WEBPACK_IMPORTED_MODULE_2__["withForceCast"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withRecordType", function() { return _operators__WEBPACK_IMPORTED_MODULE_2__["withRecordType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withMeta", function() { return _operators__WEBPACK_IMPORTED_MODULE_2__["withMeta"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withMsg", function() { return _operators__WEBPACK_IMPORTED_MODULE_2__["withMsg"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withMsgId", function() { return _operators__WEBPACK_IMPORTED_MODULE_2__["withMsgId"]; });

/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validator */ "./src/validator.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validateRoot", function() { return _validator__WEBPACK_IMPORTED_MODULE_3__["validateRoot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validate", function() { return _validator__WEBPACK_IMPORTED_MODULE_3__["validate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getType", function() { return _validator__WEBPACK_IMPORTED_MODULE_3__["getType"]; });

/* harmony import */ var _picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./picker */ "./src/picker.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pickRoot", function() { return _picker__WEBPACK_IMPORTED_MODULE_4__["pickRoot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pick", function() { return _picker__WEBPACK_IMPORTED_MODULE_4__["pick"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "patch", function() { return _picker__WEBPACK_IMPORTED_MODULE_4__["patch"]; });

// Copyright (c) 2019 Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln





const stereotypes = [..._stereotypes_date__WEBPACK_IMPORTED_MODULE_0__["stereotypes"]];

/***/ }),

/***/ "./src/lib/errors.ts":
/*!***************************!*\
  !*** ./src/lib/errors.ts ***!
  \***************************/
/*! exports provided: ValidationError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationError", function() { return ValidationError; });
// Copyright (c) 2019 Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln
class ValidationError extends Error {
  constructor(message, ty, ctx) {
    super(message);
    this.ty = ty;
    this.ctx = ctx;
  }

}

/***/ }),

/***/ "./src/lib/escape.ts":
/*!***************************!*\
  !*** ./src/lib/escape.ts ***!
  \***************************/
/*! exports provided: escapeString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escapeString", function() { return escapeString; });
// Copyright (c) 2019 Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln
function escapeString(s) {
  return s.replace(/\x08/g, '\\b').replace(/\f/g, '\\f').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\t/g, '\\t').replace(/\v/g, '\\v').replace(/\\/g, '\\\\').replace(/\'/g, '\\\'').replace(/\"/g, '\\\"').replace(/\`/g, '\\\`');
}

/***/ }),

/***/ "./src/lib/reporter.ts":
/*!*****************************!*\
  !*** ./src/lib/reporter.ts ***!
  \*****************************/
/*! exports provided: errorTypeNames, defaultMessages, formatErrorMessage, reportError, reportErrorWithPush */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorTypeNames", function() { return errorTypeNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultMessages", function() { return defaultMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatErrorMessage", function() { return formatErrorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reportError", function() { return reportError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reportErrorWithPush", function() { return reportErrorWithPush; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./src/types.ts");
/* harmony import */ var _escape__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./escape */ "./src/lib/escape.ts");
// Copyright (c) 2019 Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln


const errorTypeNames = ['', 'InvalidDefinition', 'Required', 'TypeUnmatched', 'AdditionalPropUnmatched', 'RepeatQtyUnmatched', 'SequenceUnmatched', 'ValueRangeUnmatched', 'ValuePatternUnmatched', 'ValueLengthUnmatched', 'ValueUnmatched'];
const defaultMessages = {
  invalidDefinition: '"%{name}" of "%{parentType}" type definition is invalid.',
  required: '"%{name}" of "%{parentType}" is required.',
  typeUnmatched: '"%{name}" of "%{parentType}" should be type "%{expectedType}".',
  additionalPropUnmatched: '"%{addtionalProps}" of "%{parentType}" are not matched to additional property patterns.',
  repeatQtyUnmatched: '"%{name}" of "%{parentType}" should repeat %{repeatQty} times.',
  sequenceUnmatched: '"%{name}" of "%{parentType}" sequence is not matched',
  valueRangeUnmatched: '"%{name}" of "%{parentType}" value should be in the range %{minValue} to %{maxValue}.',
  valuePatternUnmatched: '"%{name}" of "%{parentType}" value should be matched to pattern "%{pattern}"',
  valueLengthUnmatched: '"%{name}" of "%{parentType}" length should be in the range %{minLength} to %{maxLength}.',
  valueUnmatched: '"%{name}" of "%{parentType}" value should be "%{expectedValue}".'
};

function getErrorMessage(errType, ...messages) {
  for (const m of messages) {
    switch (errType) {
      case _types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].InvalidDefinition:
        if (m.invalidDefinition) {
          return m.invalidDefinition;
        }

        break;

      case _types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].Required:
        if (m.required) {
          return m.required;
        }

        break;

      case _types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].TypeUnmatched:
        if (m.typeUnmatched) {
          return m.typeUnmatched;
        }

        break;

      case _types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].AdditionalPropUnmatched:
        if (m.additionalPropUnmatched) {
          return m.additionalPropUnmatched;
        }

        break;

      case _types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].RepeatQtyUnmatched:
        if (m.repeatQtyUnmatched) {
          return m.repeatQtyUnmatched;
        }

        break;

      case _types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].SequenceUnmatched:
        if (m.sequenceUnmatched) {
          return m.sequenceUnmatched;
        }

        break;

      case _types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].ValueRangeUnmatched:
        if (m.valueRangeUnmatched) {
          return m.valueRangeUnmatched;
        }

        break;

      case _types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].ValuePatternUnmatched:
        if (m.valuePatternUnmatched) {
          return m.valuePatternUnmatched;
        }

        break;

      case _types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].ValueLengthUnmatched:
        if (m.valueLengthUnmatched) {
          return m.valueLengthUnmatched;
        }

        break;

      case _types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].ValueUnmatched:
        if (m.valueUnmatched) {
          return m.valueUnmatched;
        }

        break;
    }
  }

  return '';
}

function nvl(v, alt) {
  return v !== null && v !== void 0 ? v : alt;
}

function findTopRepeatableAssertion(ctx) {
  const ret = ctx.typeStack.slice().reverse().map(x => Array.isArray(x) ? x[0] : x).find(x => x.kind === 'repeated' || x.kind === 'spread' || x.kind === 'optional') || null;
  return ret;
}

function getExpectedType(ty) {
  switch (ty.kind) {
    case 'repeated':
      return `(repeated ${getExpectedType(ty.repeated)})`;

    case 'spread':
      return getExpectedType(ty.spread);

    case 'sequence':
      return '(sequence)';

    case 'primitive':
      return ty.primitiveName;

    case 'primitive-value':
      return `(value ${typeof ty.value === 'string' ? `'${String(ty.value)}'` : String(ty.value)})`;

    case 'optional':
      return getExpectedType(ty.optional);

    case 'one-of':
      return `(one of ${ty.oneOf.map(x => getExpectedType(x)).join(', ')})`;

    case 'never':
    case 'any':
    case 'unknown':
      return ty.kind;

    case 'symlink':
      return ty.symlinkTargetName;

    default:
      return ty.typeName ? ty.typeName : '?';
  }
}

function formatErrorMessage(msg, data, ty, args, values) {
  let ret = msg; // TODO: complex type object members' custom error messages are not displayed?
  // TODO: escapeString() is needed?

  const tr = values.topRepeatable;
  const dict = new Map([['expectedType', ty.stereotype ? ty.stereotype : Object(_escape__WEBPACK_IMPORTED_MODULE_1__["escapeString"])(getExpectedType(ty))], ['type', Object(_escape__WEBPACK_IMPORTED_MODULE_1__["escapeString"])(typeof data)], ['expectedValue', Object(_escape__WEBPACK_IMPORTED_MODULE_1__["escapeString"])(ty.kind === 'primitive-value' ? String(ty.value) : ty.kind === 'enum' ? ty.typeName ? `enum member of ${ty.typeName}` : '?' : '?')], ['value', Object(_escape__WEBPACK_IMPORTED_MODULE_1__["escapeString"])(String(data))], ['repeatQty', Object(_escape__WEBPACK_IMPORTED_MODULE_1__["escapeString"])(tr ? tr.kind !== 'optional' ? `${nvl(tr.min, '')}${tr.min !== null && tr.min !== void 0 || tr.max !== null && tr.max !== void 0 ? '..' : ''}${nvl(tr.max, '')}` : '0..1' : '?')], ['minValue', Object(_escape__WEBPACK_IMPORTED_MODULE_1__["escapeString"])(ty.kind === 'primitive' ? `${nvl(ty.minValue, nvl(ty.greaterThanValue, '(smallest)'))}` : '?')], ['maxValue', Object(_escape__WEBPACK_IMPORTED_MODULE_1__["escapeString"])(ty.kind === 'primitive' ? `${nvl(ty.maxValue, nvl(ty.lessThanValue, '(biggest)'))}` : '?')], ['pattern', Object(_escape__WEBPACK_IMPORTED_MODULE_1__["escapeString"])(ty.kind === 'primitive' ? `${ty.pattern ? `/${ty.pattern.source}/${ty.pattern.flags}` : '(pattern)'}` : '?')], ['minLength', Object(_escape__WEBPACK_IMPORTED_MODULE_1__["escapeString"])(ty.kind === 'primitive' ? `${nvl(ty.minLength, '0')}` : '?')], ['maxLength', Object(_escape__WEBPACK_IMPORTED_MODULE_1__["escapeString"])(ty.kind === 'primitive' ? `${nvl(ty.maxLength, '(biggest)')}` : '?')], ['name', Object(_escape__WEBPACK_IMPORTED_MODULE_1__["escapeString"])(`${ty.kind !== 'repeated' && values.dataPath.endsWith('repeated)') ? 'repeated item of ' : ty.kind !== 'sequence' && values.dataPath.endsWith('sequence)') ? 'sequence item of ' : ''}${values.entryName || '?'}`)], ['parentType', Object(_escape__WEBPACK_IMPORTED_MODULE_1__["escapeString"])(values.parentType || '?')], ['dataPath', values.dataPath], ...(args.substitutions || [])]);

  for (const ent of dict.entries()) {
    ret = ret.replace(new RegExp(`%{${ent[0]}}`), ent[1]);
  }

  return ret;
}
function reportError(errType, data, ty, args) {
  const messages = [];

  if (ty.messages) {
    messages.push(ty.messages);
  }

  if (args.ctx.errorMessages) {
    messages.push(args.ctx.errorMessages);
  }

  messages.push(defaultMessages);
  const dataPathEntryArray = [];

  for (let i = 0; i < args.ctx.typeStack.length; i++) {
    const p = args.ctx.typeStack[i];
    const next = args.ctx.typeStack[i + 1];
    const pt = Array.isArray(p) ? p[0] : p;
    const pi = Array.isArray(next) ? next[1] : void 0;
    let isSet = false;

    if (pt.kind === 'repeated') {
      if (i !== args.ctx.typeStack.length - 1) {
        if (pt.name) {
          dataPathEntryArray.push({
            kind: 'key',
            name: pt.name
          });
        }

        dataPathEntryArray.push({
          kind: 'index',
          name: `(${pi !== void 0 ? `${pi}:` : ''}repeated)`
        });
        isSet = true;
      }
    } else if (pt.kind === 'sequence') {
      if (i !== args.ctx.typeStack.length - 1) {
        if (pt.name) {
          dataPathEntryArray.push({
            kind: 'key',
            name: pt.name
          });
        }

        dataPathEntryArray.push({
          kind: 'index',
          name: `(${pi !== void 0 ? `${pi}:` : ''}sequence)`
        });
        isSet = true;
      }
    }

    if (!isSet) {
      if (pt.name) {
        if (i === 0) {
          if (pt.typeName) {
            dataPathEntryArray.push({
              kind: 'type',
              name: pt.typeName
            });
          } else {
            dataPathEntryArray.push({
              kind: 'key',
              name: pt.name
            });
          }
        } else {
          const len = dataPathEntryArray.length;

          if (len && dataPathEntryArray[len - 1].kind === 'type') {
            if (pt.kind === 'object' && next && pt.typeName) {
              dataPathEntryArray.push({
                kind: 'type',
                name: pt.typeName
              });
            } else {
              dataPathEntryArray.push({
                kind: 'key',
                name: pt.name
              }); // NOTE: type inference failed
            }
          } else {
            if (pt.typeName) {
              dataPathEntryArray.push({
                kind: 'type',
                name: pt.typeName
              });
            } else {
              dataPathEntryArray.push({
                kind: 'key',
                name: pt.name
              });
            }
          }
        }
      } else if (pt.typeName) {
        dataPathEntryArray.push({
          kind: 'type',
          name: pt.typeName
        });
      }
    }
  }

  let dataPath = '';

  for (let i = 0; i < dataPathEntryArray.length; i++) {
    const p = dataPathEntryArray[i];
    dataPath += p.name;

    if (i + 1 === dataPathEntryArray.length) {
      break;
    }

    dataPath += p.kind === 'type' ? ':' : '.';
  }

  let parentType = '';
  let entryName = '';

  for (let i = dataPathEntryArray.length - 1; 0 <= i; i--) {
    const p = dataPathEntryArray[i];

    if (p.kind === 'type') {
      if (i !== 0 && i === dataPathEntryArray.length - 1) {
        const q = dataPathEntryArray[i - 1];

        if (q.kind === 'index') {
          continue; // e.g.: "File:acl.(0:repeated).ACL"
        }
      } // else: "File:acl.(0:repeated).ACL:target"


      parentType = p.name;

      for (let j = i + 1; j < dataPathEntryArray.length; j++) {
        const q = dataPathEntryArray[j];

        if (q.kind === 'key') {
          entryName = q.name;
          break;
        }
      }

      break;
    }
  }

  if (!parentType) {
    for (let i = args.ctx.typeStack.length - 1; 0 <= i; i--) {
      const p = args.ctx.typeStack[i];
      const pt = Array.isArray(p) ? p[0] : p;

      if (pt.typeName) {
        parentType = pt.typeName;
      }
    }
  }

  const topRepeatable = findTopRepeatableAssertion(args.ctx);
  const values = {
    dataPath,
    topRepeatable,
    parentType,
    entryName
  };
  const constraints = {};
  const cSrces = [ty];

  if (errType === _types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].RepeatQtyUnmatched && topRepeatable) {
    cSrces.unshift(topRepeatable);
  }

  for (const cSrc of cSrces) {
    if (nvl(cSrc.minValue, false)) {
      constraints.minValue = cSrc.minValue;
    }

    if (nvl(cSrc.maxValue, false)) {
      constraints.maxValue = cSrc.maxValue;
    }

    if (nvl(cSrc.greaterThanValue, false)) {
      constraints.greaterThanValue = cSrc.greaterThanValue;
    }

    if (nvl(cSrc.lessThanValue, false)) {
      constraints.lessThanValue = cSrc.lessThanValue;
    }

    if (nvl(cSrc.minLength, false)) {
      constraints.minLength = cSrc.minLength;
    }

    if (nvl(cSrc.maxLength, false)) {
      constraints.maxLength = cSrc.maxLength;
    }

    if (nvl(cSrc.pattern, false)) {
      const pat = cSrc.pattern;
      constraints.pattern = `/${pat.source}/${pat.flags}`;
    }

    if (nvl(cSrc.min, false)) {
      constraints.min = cSrc.min;
    }

    if (nvl(cSrc.max, false)) {
      constraints.max = cSrc.max;
    }
  }

  const val = {};

  switch (typeof data) {
    case 'number':
    case 'bigint':
    case 'string':
    case 'boolean':
    case 'undefined':
      val.value = data;
      break;

    case 'object':
      if (data === null) {
        val.value = data;
      }

  }

  if (ty.messageId) {
    args.ctx.errors.push(Object.assign({
      code: `${ty.messageId}-${errorTypeNames[errType]}`,
      message: formatErrorMessage(ty.message ? ty.message : getErrorMessage(errType, ...messages), data, ty, args, values),
      dataPath,
      constraints
    }, val));
  } else if (ty.message) {
    args.ctx.errors.push(Object.assign({
      code: `${errorTypeNames[errType]}`,
      message: formatErrorMessage(ty.message, data, ty, args, values),
      dataPath,
      constraints
    }, val));
  } else {
    args.ctx.errors.push(Object.assign({
      code: `${errorTypeNames[errType]}`,
      message: formatErrorMessage(getErrorMessage(errType, ...messages), data, ty, args, values),
      dataPath,
      constraints
    }, val));
  }
}
function reportErrorWithPush(errType, data, tyidx, args) {
  try {
    args.ctx.typeStack.push(tyidx);
    reportError(errType, data, tyidx[0], args);
  } finally {
    args.ctx.typeStack.pop();
  }
}

/***/ }),

/***/ "./src/lib/resolver.ts":
/*!*****************************!*\
  !*** ./src/lib/resolver.ts ***!
  \*****************************/
/*! exports provided: resolveMemberNames, resolveSymbols, resolveSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveMemberNames", function() { return resolveMemberNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveSymbols", function() { return resolveSymbols; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveSchema", function() { return resolveSchema; });
/* harmony import */ var _operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../operators */ "./src/operators.ts");
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/util */ "./src/lib/util.ts");
// Copyright (c) 2019 Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln



function mergeTypeAndSymlink(ty, link) {
  const link2 = Object.assign({}, link);
  delete link2.kind;
  delete link2.symlinkTargetName;
  delete link2.memberTree;
  return Object.assign(Object.assign({}, ty), link2);
}

function updateSchema(original, schema, ty, typeName) {
  if (typeName && schema.has(typeName)) {
    const z = schema.get(typeName);

    if (z.ty === original) {
      schema.set(typeName, Object.assign(Object.assign({}, z), {
        ty,
        resolved: true
      }));
    }
  }

  return ty;
}

function resolveMemberNames(ty, rootSym, memberTreeSymbols, memberPos) {
  const addTypeName = (mt, typeName, memberSym) => {
    if (typeName) {
      return Object.assign(Object.assign({}, mt), {
        typeName: memberPos === 0 ? `${rootSym}.${memberTreeSymbols.join('.')}` : `${typeName}.${memberSym}`
      });
    } else {
      return mt;
    }
  };

  for (let i = memberPos; i < memberTreeSymbols.length; i++) {
    const memberSym = memberTreeSymbols[i];

    switch (ty.kind) {
      case 'optional':
        return resolveMemberNames(ty.optional, rootSym, memberTreeSymbols, i + 1);

      case 'object':
        for (const m of ty.members) {
          if (memberSym === m[0]) {
            return addTypeName(resolveMemberNames(m[1], rootSym, memberTreeSymbols, i + 1), ty.typeName, memberSym);
          }
        }

        if (ty.additionalProps) {
          for (const m of ty.additionalProps) {
            for (const k of m[0]) {
              switch (k) {
                case 'number':
                  if (_lib_util__WEBPACK_IMPORTED_MODULE_1__["NumberPattern"].test(memberSym)) {
                    return resolveMemberNames(m[1], rootSym, memberTreeSymbols, i + 1);
                  }

                  break;

                case 'string':
                  return resolveMemberNames(m[1], rootSym, memberTreeSymbols, i + 1);

                default:
                  if (k.test(memberSym)) {
                    return resolveMemberNames(m[1], rootSym, memberTreeSymbols, i + 1);
                  }

                  break;
              }
            }
          }
        }

        throw new Error(`Undefined member name is appeared: ${memberSym}`);

      case 'symlink':
        if (!ty.typeName) {
          throw new Error(`Reference of anonymous type is appeared: ${memberSym}`);
        }

        return Object.assign({
          kind: 'symlink',
          symlinkTargetName: rootSym,
          name: memberSym,
          typeName: rootSym
        }, 0 < memberTreeSymbols.length ? {
          memberTree: memberTreeSymbols
        } : {});

      default:
        // TODO: kind === 'operator'
        throw new Error(`Unsupported type kind is appeared: (kind:${ty.kind}).${memberSym}`);
    }
  }

  return ty;
}
function resolveSymbols(schema, ty, ctx) {
  var _a;

  const ctx2 = Object.assign(Object.assign({}, ctx), {
    nestLevel: ctx.nestLevel + 1
  });

  switch (ty.kind) {
    case 'symlink':
      {
        const x = schema.get(ty.symlinkTargetName);

        if (!x) {
          throw new Error(`Undefined symbol '${ty.symlinkTargetName}' is referred.`);
        }

        if (0 <= ctx.symlinkStack.findIndex(s => s === ty.symlinkTargetName)) {
          return ty;
        }

        const ty2 = Object.assign({}, ty);
        let xTy = x.ty;

        if (ty.memberTree && 0 < ty.memberTree.length) {
          xTy = Object.assign({}, resolveMemberNames(xTy, ty.symlinkTargetName, ty.memberTree, 0));
          ty2.typeName = xTy.typeName;
        }

        return resolveSymbols(schema, mergeTypeAndSymlink(xTy, ty2), Object.assign(Object.assign({}, ctx2), {
          symlinkStack: [...ctx2.symlinkStack, ty2.symlinkTargetName]
        }));
      }

    case 'repeated':
      return updateSchema(ty, schema, Object.assign(Object.assign({}, ty), {
        repeated: resolveSymbols(schema, ty.repeated, ctx2)
      }), ty.typeName);

    case 'spread':
      return updateSchema(ty, schema, Object.assign(Object.assign({}, ty), {
        spread: resolveSymbols(schema, ty.spread, ctx2)
      }), ty.typeName);

    case 'sequence':
      return updateSchema(ty, schema, Object.assign(Object.assign({}, ty), {
        sequence: ty.sequence.map(x => resolveSymbols(schema, x, ctx2))
      }), ty.typeName);

    case 'one-of':
      return updateSchema(ty, schema, Object.assign(Object.assign({}, ty), {
        oneOf: ty.oneOf.map(x => resolveSymbols(schema, x, ctx2))
      }), ty.typeName);

    case 'optional':
      return updateSchema(ty, schema, Object.assign(Object.assign({}, ty), {
        optional: resolveSymbols(schema, ty.optional, ctx2)
      }), ty.typeName);

    case 'object':
      {
        if (0 < ctx.nestLevel && ty.typeName && 0 <= ctx.symlinkStack.findIndex(s => s === ty.typeName)) {
          if (schema.has(ty.typeName)) {
            const z = schema.get(ty.typeName);

            if (z.resolved) {
              return z.ty;
            }
          }
        }

        const baseSymlinks = (_a = ty.baseTypes) === null || _a === void 0 ? void 0 : _a.filter(x => x.kind === 'symlink');

        if (baseSymlinks && baseSymlinks.length > 0 && !ctx.isDeserialization) {
          const exts = baseSymlinks.map(x => resolveSymbols(schema, x, ctx2)).filter(x => x.kind === 'object'); // TODO: if x.kind !== 'object' items exist -> error?

          const d2 = resolveSymbols(schema, _operators__WEBPACK_IMPORTED_MODULE_0__["derived"](Object.assign(Object.assign({}, ty), ty.baseTypes ? {
            baseTypes: ty.baseTypes.filter(x => x.kind !== 'symlink')
          } : {}), ...exts), ty.typeName ? Object.assign(Object.assign({}, ctx2), {
            symlinkStack: [...ctx2.symlinkStack, ty.typeName]
          }) : ctx2);
          return updateSchema(ty, schema, Object.assign(Object.assign({}, ty), d2), ty.typeName);
        } else {
          return updateSchema(ty, schema, Object.assign(Object.assign(Object.assign({}, Object.assign(Object.assign({}, ty), {
            members: ty.members.map(x => [x[0], resolveSymbols(schema, x[1], ty.typeName ? Object.assign(Object.assign({}, ctx2), {
              symlinkStack: [...ctx2.symlinkStack, ty.typeName]
            }) : ctx2), ...x.slice(2)])
          })), ty.additionalProps && 0 < ty.additionalProps.length ? {
            additionalProps: ty.additionalProps.map(x => [x[0], resolveSymbols(schema, x[1], ty.typeName ? Object.assign(Object.assign({}, ctx2), {
              symlinkStack: [...ctx2.symlinkStack, ty.typeName]
            }) : ctx2), ...x.slice(2)])
          } : {}), ty.baseTypes && 0 < ty.baseTypes.length ? {
            baseTypes: ctx.isDeserialization ? ty.baseTypes.map(x => x.kind === 'symlink' ? resolveSymbols(schema, x, ctx2) : x).filter(x => x.kind === 'object') : ty.baseTypes
          } : {}), ty.typeName);
        }
      }

    case 'operator':
      if (ctx2.operators) {
        const ctx3 = ty.typeName ? Object.assign(Object.assign({}, ctx2), {
          symlinkStack: [...ctx2.symlinkStack, ty.typeName]
        }) : ctx2;
        const operands = ty.operands.map(x => {
          if (typeof x === 'object' && x.kind) {
            return resolveSymbols(schema, x, ctx3);
          }

          return x;
        });

        if (0 < operands.filter(x => x && typeof x === 'object' && (x.kind === 'symlink' || x.kind === 'operator')).length) {
          throw new Error(`Unresolved type operator is found: ${ty.operator}`);
        }

        if (!ctx2.operators[ty.operator]) {
          throw new Error(`Undefined type operator is found: ${ty.operator}`);
        }

        const ty2 = Object.assign({}, ty);
        delete ty2.operator;
        delete ty2.operands;
        return updateSchema(ty, schema, Object.assign(Object.assign({}, ty2), resolveSymbols(schema, ctx2.operators[ty.operator](...operands), ctx3)), ty.typeName);
      } else {
        return ty;
      }

    default:
      return ty;
  }
}
const resolverOps = {
  picked: _operators__WEBPACK_IMPORTED_MODULE_0__["picked"],
  omit: _operators__WEBPACK_IMPORTED_MODULE_0__["omit"],
  partial: _operators__WEBPACK_IMPORTED_MODULE_0__["partial"],
  intersect: _operators__WEBPACK_IMPORTED_MODULE_0__["intersect"],
  subtract: _operators__WEBPACK_IMPORTED_MODULE_0__["subtract"]
};
function resolveSchema(schema, opts) {
  for (const ent of schema.entries()) {
    const ty = resolveSymbols(schema, ent[1].ty, Object.assign(Object.assign({}, opts), {
      nestLevel: 0,
      symlinkStack: [ent[0]],
      operators: resolverOps
    }));
    ent[1].ty = ty;
  }

  return schema;
}

/***/ }),

/***/ "./src/lib/util.ts":
/*!*************************!*\
  !*** ./src/lib/util.ts ***!
  \*************************/
/*! exports provided: NumberPattern, DatePattern, DateTimePattern, DateTimeNoTzPattern, dummyTargetObject, isUnsafeVarNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberPattern", function() { return NumberPattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePattern", function() { return DatePattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateTimePattern", function() { return DateTimePattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateTimeNoTzPattern", function() { return DateTimeNoTzPattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dummyTargetObject", function() { return dummyTargetObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUnsafeVarNames", function() { return isUnsafeVarNames; });
// Copyright (c) 2020 Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln
// tslint:disable-next-line:function-constructor
const globalObj = Function('return this')();
const objConstructor = {}.constructor; // NOTE: objConstructor            === Object

const funConstructor = Function; // NOTE: ({}).toString.constructor === Function

const NumberPattern = /^([\+\-]?\d*\.?\d+(?:[Ee][\+\-]?\d+)?)$/;
const DatePattern = /^(\d{4}-[01]\d-[0-3]\d)$/;
const DateTimePattern = /^((?:(?:\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+)|(?:\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d)|(?:\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d))(?:[+-][0-2]\d:[0-5]\d|Z))$/;
const DateTimeNoTzPattern = /^((?:\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+)|(?:\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d)|(?:\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d))$/;
const dummyTargetObject = {};
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
      if (con.hasOwnProperty(varName)) {
        return true;
      }

      con = con.__proto__;
    }
  }

  if (typeof target === 'function') {
    if (!target.hasOwnProperty(varName)) {
      // function's prototypes' members
      return true;
    }
  }

  return false;
}

/***/ }),

/***/ "./src/operators.ts":
/*!**************************!*\
  !*** ./src/operators.ts ***!
  \**************************/
/*! exports provided: picked, omit, partial, intersect, oneOf, subtract, primitive, regexpPatternStringType, primitiveValue, optional, repeated, sequenceOf, spread, enumType, objectType, derived, symlinkType, withName, withTypeName, withOriginalTypeName, withDocComment, withRange, withMinValue, withMaxValue, withGreaterThan, withLessThan, withMinLength, withMaxLength, withMatch, withStereotype, withForceCast, withRecordType, withMeta, withMsg, withMsgId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "picked", function() { return picked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "omit", function() { return omit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "partial", function() { return partial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersect", function() { return intersect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "oneOf", function() { return oneOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "primitive", function() { return primitive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regexpPatternStringType", function() { return regexpPatternStringType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "primitiveValue", function() { return primitiveValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optional", function() { return optional; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "repeated", function() { return repeated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sequenceOf", function() { return sequenceOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spread", function() { return spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enumType", function() { return enumType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectType", function() { return objectType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "derived", function() { return derived; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "symlinkType", function() { return symlinkType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withName", function() { return withName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withTypeName", function() { return withTypeName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withOriginalTypeName", function() { return withOriginalTypeName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withDocComment", function() { return withDocComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withRange", function() { return withRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withMinValue", function() { return withMinValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withMaxValue", function() { return withMaxValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withGreaterThan", function() { return withGreaterThan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withLessThan", function() { return withLessThan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withMinLength", function() { return withMinLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withMaxLength", function() { return withMaxLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withMatch", function() { return withMatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withStereotype", function() { return withStereotype; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withForceCast", function() { return withForceCast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withRecordType", function() { return withRecordType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withMeta", function() { return withMeta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withMsg", function() { return withMsg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withMsgId", function() { return withMsgId; });
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/util */ "./src/lib/util.ts");
// Copyright (c) 2019 Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln
 // emulate Pick<T> // ex. Pick<Foo, 'a' | 'b'>

function picked(ty, ...names) {
  switch (ty.kind) {
    case 'object':
      {
        const members = [];

        for (const name of names) {
          const member = ty.members.find(x => x[0] === name);

          if (member) {
            if (member[2]) {
              const m2 = [...member];

              if (3 < m2.length) {
                m2[2] = false;
              } else {
                m2.length = 2;
              }

              members.push(m2);
            } else {
              members.push(member);
            }
          }
        }

        return {
          kind: 'object',
          members
        };
      }

    case 'symlink':
    case 'operator':
      {
        return {
          kind: 'operator',
          operator: 'picked',
          operands: [ty, ...names]
        };
      }

    default:
      return {
        kind: 'object',
        members: []
      };
  }
} // emulate Omit<T> // ex. Omit<Foo, 'a' | 'b'>

function omit(ty, ...names) {
  switch (ty.kind) {
    case 'object':
      {
        const members = [];

        for (const member of ty.members) {
          if (!names.find(name => member[0] === name)) {
            if (member[2]) {
              const m2 = [...member];

              if (3 < m2.length) {
                m2[2] = false;
              } else {
                m2.length = 2;
              }

              members.push(m2);
            } else {
              members.push(member);
            }
          }
        }

        return {
          kind: 'object',
          members
        };
      }

    case 'symlink':
    case 'operator':
      {
        return {
          kind: 'operator',
          operator: 'omit',
          operands: [ty, ...names]
        };
      }

    default:
      return {
        kind: 'object',
        members: []
      };
  }
} // emulate Partial<T>

function partial(ty) {
  switch (ty.kind) {
    case 'object':
      {
        const members = [];

        for (const member of ty.members) {
          let m = member[1].kind === 'optional' ? member : [member[0], optional(member[1]), ...member.slice(2)];

          if (m[2]) {
            m = [...m];

            if (3 < m.length) {
              m[2] = false;
            } else {
              m.length = 2;
            }
          }

          m[1].name = m[0];
          const optTy = Object.assign({}, m[1].optional);
          m[1].optional = optTy;

          if (optTy.name && optTy.name !== optTy.typeName) {
            delete optTy.name;
          }

          if (!optTy.name && optTy.typeName) {
            optTy.name = optTy.typeName;
          }

          members.push(m);
        }

        return {
          kind: 'object',
          members
        };
      }

    case 'symlink':
    case 'operator':
      {
        return {
          kind: 'operator',
          operator: 'partial',
          operands: [ty]
        };
      }

    default:
      return ty;
  }
} // intersection (a & b)

function intersect(...types) {
  if (types.length === 0) {
    throw new Error(`Empty intersection type is not allowed.`);
  }

  if (0 < types.filter(x => x && typeof x === 'object' && (x.kind === 'symlink' || x.kind === 'operator')).length) {
    return {
      kind: 'operator',
      operator: 'intersect',
      operands: types.slice()
    };
  }

  let lastTy = null;
  const members = new Map();

  for (const ty of types) {
    if (ty && typeof ty === 'object') {
      if (lastTy && lastTy.kind !== ty.kind) {
        return {
          kind: 'never'
        };
      }

      lastTy = ty;

      if (ty.kind === 'object') {
        for (const m of ty.members) {
          if (m[2]) {
            const m2 = [...m];

            if (3 < m2.length) {
              m2[2] = false;
            } else {
              m2.length = 2;
            }

            members.set(m[0], m2); // Overwrite if exists
          } else {
            members.set(m[0], m); // Overwrite if exists
          }
        }
      }
    } else {
      return {
        kind: 'never'
      };
    }
  }

  if (lastTy && lastTy.kind !== 'object') {
    return lastTy;
  } else {
    return {
      kind: 'object',
      members: Array.from(members.values())
    };
  }
} // union (a | b)

function oneOf(...types) {
  if (types.length === 0) {
    throw new Error(`Empty union type is not allowed.`);
  }

  if (types.length === 1) {
    const ty = types[0];

    if (ty && typeof ty === 'object') {
      return ty;
    } else {
      return primitiveValue(ty);
    }
  }

  const ret = {
    kind: 'one-of',
    oneOf: []
  };

  for (const ty of types) {
    // TODO: remove same type
    if (ty && typeof ty === 'object') {
      if (ty.kind === 'one-of') {
        ret.oneOf = ret.oneOf.concat(ty.oneOf);
      } else {
        ret.oneOf.push(ty);
      }
    } else {
      ret.oneOf.push(primitiveValue(ty));
    }
  }

  return ret;
} // subtraction (a - b)

function subtract(...types) {
  if (types.length === 0) {
    throw new Error(`Empty subtraction type is not allowed.`);
  }

  if (0 < types.filter(x => x && typeof x === 'object' && (x.kind === 'symlink' || x.kind === 'operator')).length) {
    return {
      kind: 'operator',
      operator: 'subtract',
      operands: types.slice()
    };
  }

  let ret = types[0];

  if (!ret || typeof ret !== 'object' || ret.kind !== 'object') {
    throw new Error(`First parameter of subtraction type should be 'object'.`);
  }

  for (const ty of types.slice(1)) {
    if (ty && typeof ty === 'object' && ty.kind === 'object') {
      ret = omit(ret, ...ty.members.map(m => m[0]));
    }
  }

  return ret;
}
function primitive(typeName) {
  switch (typeName) {
    case 'never':
      return {
        kind: 'never'
      };

    case 'any':
      return {
        kind: 'any'
      };

    case 'unknown':
      return {
        kind: 'unknown'
      };

    case 'number': // FALL_THRU

    case 'integer': // FALL_THRU

    case 'bigint': // FALL_THRU

    case 'string': // FALL_THRU

    case 'boolean': // FALL_THRU

    case 'null': // FALL_THRU

    case 'undefined':
      return {
        kind: 'primitive',
        primitiveName: typeName
      };

    case 'never?':
      return optional({
        kind: 'never'
      });

    case 'any?':
      return optional({
        kind: 'any'
      });

    case 'unknown?':
      return optional({
        kind: 'unknown'
      });

    case 'number?': // FALL_THRU

    case 'integer?': // FALL_THRU

    case 'bigint?': // FALL_THRU

    case 'string?': // FALL_THRU

    case 'boolean?': // FALL_THRU

    case 'null?': // FALL_THRU

    case 'undefined?':
      return optional({
        kind: 'primitive',
        primitiveName: typeName.substring(0, typeName.length - 1)
      });

    default:
      throw new Error(`Unknown primitive type assertion: ${typeName}`);
  } // TODO: Function, DateStr, DateTimeStr, Funtion?, DateStr?, DateTimeStr?

}
function regexpPatternStringType(pattern) {
  return {
    kind: 'primitive',
    primitiveName: 'string',
    pattern
  };
}
function primitiveValue(value) {
  if (value === null || value === void 0) {
    return {
      kind: 'primitive-value',
      value
    };
  } else switch (typeof value) {
    case 'number': // FALL_THRU

    case 'bigint': // FALL_THRU

    case 'string': // FALL_THRU

    case 'boolean':
      return {
        kind: 'primitive-value',
        value
      };

    default:
      throw new Error(`Unknown primitive value assertion: ${value}`);
  }
}
function optional(ty) {
  if (ty && typeof ty === 'object' && ty.kind) {
    if (ty.kind === 'optional') {
      return ty;
    } else {
      return Object.assign({
        kind: 'optional',
        optional: ty
      }, ty.typeName ? {
        typeName: ty.typeName
      } : {});
    }
  } else {
    return {
      kind: 'optional',
      optional: primitiveValue(ty)
    };
  }
}
function repeated(ty, option) {
  if (ty && typeof ty === 'object' && ty.kind) {
    return {
      kind: 'repeated',
      min: option && typeof option.min === 'number' ? option.min : null,
      max: option && typeof option.max === 'number' ? option.max : null,
      repeated: ty
    };
  } else {
    return {
      kind: 'repeated',
      min: option && typeof option.min === 'number' ? option.min : null,
      max: option && typeof option.max === 'number' ? option.max : null,
      repeated: primitive(ty)
    };
  }
}
function sequenceOf(...seq) {
  return {
    kind: 'sequence',
    sequence: seq.map(ty => ty && typeof ty === 'object' && ty.kind ? ty : primitiveValue(ty))
  };
}
function spread(ty, option) {
  if (ty && typeof ty === 'object' && ty.kind) {
    return {
      kind: 'spread',
      min: option && typeof option.min === 'number' ? option.min : null,
      max: option && typeof option.max === 'number' ? option.max : null,
      spread: ty
    };
  } else {
    return {
      kind: 'spread',
      min: option && typeof option.min === 'number' ? option.min : null,
      max: option && typeof option.max === 'number' ? option.max : null,
      spread: primitiveValue(ty)
    };
  }
}
function enumType(...values) {
  const ar = values.slice();
  let value = 0;

  for (let i = 0; i < ar.length; i++) {
    if (Object(_lib_util__WEBPACK_IMPORTED_MODULE_0__["isUnsafeVarNames"])(_lib_util__WEBPACK_IMPORTED_MODULE_0__["dummyTargetObject"], ar[i][0])) {
      throw new Error(`Unsafe symbol name is appeared in enum assertion: ${ar[i][0]}`);
    }

    if (ar[i][1] === null || ar[i][1] === void 0) {
      ar[i][1] = value++;
    } else if (typeof ar[i][1] === 'number') {
      value = ar[i][1] + 1;
    }

    if (!ar[i][2]) {
      ar[i].length = 2;
    }
  }

  return {
    kind: 'enum',
    values: ar
  };
}
function objectType(...members) {
  const revMembers = members.slice().reverse();

  for (const x of members) {
    if (typeof x[0] === 'string') {
      if (Object(_lib_util__WEBPACK_IMPORTED_MODULE_0__["isUnsafeVarNames"])(_lib_util__WEBPACK_IMPORTED_MODULE_0__["dummyTargetObject"], x[0])) {
        throw new Error(`Unsafe symbol name is appeared in object assertion: ${x[0]}`);
      }

      if (members.find(m => m[0] === x[0]) !== revMembers.find(m => m[0] === x[0])) {
        throw new Error(`Duplicated member is found: ${x[0]}`);
      }
    }
  }

  const membersProps = members.filter(x => typeof x[0] === 'string').map(x => x[1] && typeof x[1] === 'object' && x[1].kind ? [x[0], withName(x[1], x[0]), x[2]] : [x[0], withName(primitiveValue(x[1]), x[0]), x[2]]).map(x => x[2] ? [x[0], x[1], false, ...x.slice(2)] : [x[0], x[1]]);
  const additionalProps = members.filter(x => typeof x[0] !== 'string').map(x => x[1] && typeof x[1] === 'object' && x[1].kind ? x : [x[0], primitiveValue(x[1]), x[2]]).map(x => x[2] ? [x[0], x[1], false, ...x.slice(2)] : [x[0], x[1]]);
  return Object.assign({
    kind: 'object',
    members: membersProps
  }, 0 < additionalProps.length ? {
    additionalProps
  } : {});
}

function checkRecursiveExtends(ty, base) {
  if (ty === base) {
    return false;
  }

  if (ty.typeName && (ty.typeName === base.typeName || base.kind === 'symlink' && ty.typeName === base.symlinkTargetName)) {
    return false;
  }

  if (base.kind === 'object' && base.baseTypes) {
    for (const z of base.baseTypes) {
      if (!checkRecursiveExtends(ty, z)) {
        return false;
      }
    }
  }

  return true;
}

function derived(ty, ...exts) {
  const ret = {
    kind: 'object',
    members: [],
    baseTypes: []
  };

  for (const ext of exts) {
    switch (ext.kind) {
      case 'object':
        if (!checkRecursiveExtends(ty, ext)) {
          throw new Error(`Recursive extend is found: ${ty.name || '(unnamed)'}`);
        }

        for (const m of ext.members) {
          if (!ret.members.find(x => x[0] === m[0])) {
            ret.members.push([m[0], m[1], true, ...m.slice(3)]);
          } // TODO: Check for different types with the same name.

        }

      // FALL_THRU

      case 'symlink':
        ret.baseTypes.push(ext);
        break;

      case 'operator':
        {
          throw new Error(`Unresolved type operator is found: ${ext.operator}`);
        }
    } // NOTE: 'symlink' base types will resolved by calling `resolveSymbols()`.
    //       `resolveSymbols()` will call `derived()` after resolve symlink exts.

  }

  ret.members = ty.members.concat(ret.members);

  if (ty.baseTypes) {
    ret.baseTypes = ty.baseTypes.filter(x => x.kind !== 'symlink').concat(ret.baseTypes);
  }

  if (ret.baseTypes.length === 0) {
    delete ret.baseTypes;
  }

  const revMembers = ret.members.slice().reverse();

  for (const x of ret.members) {
    if (ret.members.find(m => m[0] === x[0]) !== revMembers.find(m => m[0] === x[0])) {
      throw new Error(`Duplicated member is found: ${x[0]} in ${ty.name || '(unnamed)'}`);
    }
  }

  let additionalProps = [];

  if (ret.baseTypes) {
    for (const base of ret.baseTypes) {
      if (base.kind === 'object') {
        if (base.additionalProps && 0 < base.additionalProps.length) {
          additionalProps = additionalProps.concat(base.additionalProps.map(x => [x[0], x[1], true, ...x.slice(3)]));
        }
      } // NOTE: 'symlink' base types will resolved by calling `resolveSymbols()`.
      //       `resolveSymbols()` will call `derived()` after resolve symlink exts.

    }
  }

  if (ty.additionalProps && 0 < ty.additionalProps.length) {
    additionalProps = additionalProps.concat(ty.additionalProps); // TODO: concat order
  }

  if (0 < additionalProps.length) {
    ret.additionalProps = additionalProps;
  }

  return ret;
}
function symlinkType(name) {
  return {
    kind: 'symlink',
    symlinkTargetName: name
  };
}
function withName(ty, name) {
  if (!name) {
    return ty;
  }

  return Object.assign(Object.assign({}, ty), {
    name
  });
}
function withTypeName(ty, typeName) {
  if (!typeName) {
    return ty;
  }

  return Object.assign(Object.assign({}, ty), {
    typeName
  });
}
function withOriginalTypeName(ty, originalTypeName) {
  if (!originalTypeName) {
    return ty;
  }

  return Object.assign(Object.assign({}, ty), {
    originalTypeName
  });
}
function withDocComment(ty, docComment) {
  if (!docComment) {
    return ty;
  }

  return Object.assign(Object.assign({}, ty), {
    docComment
  });
}
function withRange(minValue, maxValue) {
  return ty => {
    if (typeof minValue !== 'number' && typeof minValue !== 'string') {
      throw new Error(`Decorator '@range' parameter 'minValue' should be number or string.`);
    }

    if (typeof maxValue !== 'number' && typeof maxValue !== 'string') {
      throw new Error(`Decorator '@range' parameter 'maxValue' should be number or string.`);
    }

    if (ty.kind === 'optional') {
      const opt = ty.optional;

      if (opt.kind !== 'primitive') {
        throw new Error(`Decorator '@range' cannot be applied to anything other than 'primitive'.`);
      }

      return Object.assign(Object.assign({}, ty), {
        optional: Object.assign(Object.assign({}, opt), {
          minValue,
          maxValue
        })
      });
    } else {
      if (!ty || ty.kind !== 'primitive') {
        throw new Error(`Decorator '@range' cannot be applied to anything other than 'primitive'.`);
      }

      return Object.assign(Object.assign({}, ty), {
        minValue,
        maxValue
      });
    }
  };
}
function withMinValue(minValue) {
  return ty => {
    if (typeof minValue !== 'number' && typeof minValue !== 'string') {
      throw new Error(`Decorator '@minValue' parameter 'minValue' should be number or string.`);
    }

    if (ty.kind === 'optional') {
      const opt = ty.optional;

      if (opt.kind !== 'primitive') {
        throw new Error(`Decorator '@minValue' cannot be applied to anything other than 'primitive'.`);
      }

      return Object.assign(Object.assign({}, ty), {
        optional: Object.assign(Object.assign({}, opt), {
          minValue
        })
      });
    } else {
      if (!ty || ty.kind !== 'primitive') {
        throw new Error(`Decorator '@minValue' cannot be applied to anything other than 'primitive'.`);
      }

      return Object.assign(Object.assign({}, ty), {
        minValue
      });
    }
  };
}
function withMaxValue(maxValue) {
  return ty => {
    if (typeof maxValue !== 'number' && typeof maxValue !== 'string') {
      throw new Error(`Decorator '@maxValue' parameter 'maxValue' should be number or string.`);
    }

    if (ty.kind === 'optional') {
      const opt = ty.optional;

      if (opt.kind !== 'primitive') {
        throw new Error(`Decorator '@maxValue' cannot be applied to anything other than 'primitive'.`);
      }

      return Object.assign(Object.assign({}, ty), {
        optional: Object.assign(Object.assign({}, opt), {
          maxValue
        })
      });
    } else {
      if (!ty || ty.kind !== 'primitive') {
        throw new Error(`Decorator '@maxValue' cannot be applied to anything other than 'primitive'.`);
      }

      return Object.assign(Object.assign({}, ty), {
        maxValue
      });
    }
  };
}
function withGreaterThan(greaterThanValue) {
  return ty => {
    if (typeof greaterThanValue !== 'number' && typeof greaterThanValue !== 'string') {
      throw new Error(`Decorator '@greaterThan' parameter 'greaterThan' should be number or string.`);
    }

    if (ty.kind === 'optional') {
      const opt = ty.optional;

      if (opt.kind !== 'primitive') {
        throw new Error(`Decorator '@greaterThan' cannot be applied to anything other than 'primitive'.`);
      }

      return Object.assign(Object.assign({}, ty), {
        optional: Object.assign(Object.assign({}, opt), {
          greaterThanValue
        })
      });
    } else {
      if (!ty || ty.kind !== 'primitive') {
        throw new Error(`Decorator '@greaterThan' cannot be applied to anything other than 'primitive'.`);
      }

      return Object.assign(Object.assign({}, ty), {
        greaterThanValue
      });
    }
  };
}
function withLessThan(lessThanValue) {
  return ty => {
    if (typeof lessThanValue !== 'number' && typeof lessThanValue !== 'string') {
      throw new Error(`Decorator '@lessThan' parameter 'lessThan' should be number or string.`);
    }

    if (ty.kind === 'optional') {
      const opt = ty.optional;

      if (opt.kind !== 'primitive') {
        throw new Error(`Decorator '@lessThan' cannot be applied to anything other than 'primitive'.`);
      }

      return Object.assign(Object.assign({}, ty), {
        optional: Object.assign(Object.assign({}, opt), {
          lessThanValue
        })
      });
    } else {
      if (!ty || ty.kind !== 'primitive') {
        throw new Error(`Decorator '@lessThan' cannot be applied to anything other than 'primitive'.`);
      }

      return Object.assign(Object.assign({}, ty), {
        lessThanValue
      });
    }
  };
}
function withMinLength(minLength) {
  return ty => {
    if (typeof minLength !== 'number') {
      throw new Error(`Decorator '@minLength' parameter 'minLength' should be number.`);
    }

    if (ty.kind === 'optional') {
      const opt = ty.optional;

      if (opt.kind !== 'primitive') {
        throw new Error(`Decorator '@minLength' cannot be applied to anything other than 'primitive'.`);
      }

      return Object.assign(Object.assign({}, ty), {
        optional: Object.assign(Object.assign({}, opt), {
          minLength
        })
      });
    } else {
      if (!ty || ty.kind !== 'primitive') {
        throw new Error(`Decorator '@minLength' cannot be applied to anything other than 'primitive'.`);
      }

      return Object.assign(Object.assign({}, ty), {
        minLength
      });
    }
  };
}
function withMaxLength(maxLength) {
  return ty => {
    if (typeof maxLength !== 'number') {
      throw new Error(`Decorator '@maxLength' parameter 'maxLength' should be number.`);
    }

    if (ty.kind === 'optional') {
      const opt = ty.optional;

      if (opt.kind !== 'primitive') {
        throw new Error(`Decorator '@maxLength' cannot be applied to anything other than 'primitive'.`);
      }

      return Object.assign(Object.assign({}, ty), {
        optional: Object.assign(Object.assign({}, opt), {
          maxLength
        })
      });
    } else {
      if (!ty || ty.kind !== 'primitive') {
        throw new Error(`Decorator '@maxLength' cannot be applied to anything other than 'primitive'.`);
      }

      return Object.assign(Object.assign({}, ty), {
        maxLength
      });
    }
  };
}
function withMatch(pattern) {
  return ty => {
    if (typeof pattern !== 'object') {
      throw new Error(`Decorator '@match' parameter 'pattern' should be RegExp.`);
    }

    if (ty.kind === 'optional') {
      const opt = ty.optional;

      if (opt.kind !== 'primitive') {
        throw new Error(`Decorator '@match' cannot be applied to anything other than 'primitive'.`);
      }

      return Object.assign(Object.assign({}, ty), {
        optional: Object.assign(Object.assign({}, opt), {
          pattern
        })
      });
    } else {
      if (!ty || ty.kind !== 'primitive' || ty.primitiveName !== 'string') {
        throw new Error(`Decorator '@match' cannot be applied to anything other than 'primitive'.`);
      }

      return Object.assign(Object.assign({}, ty), {
        pattern
      });
    }
  };
}
function withStereotype(stereotype) {
  if (typeof stereotype !== 'string') {
    throw new Error(`Decorator '@stereotype' parameter 'pattern' stereotype be string.`);
  }

  return ty => {
    if (ty.kind === 'optional') {
      const ret = Object.assign(Object.assign({}, ty), {
        optional: Object.assign(Object.assign({}, ty.optional), {
          stereotype
        })
      });
      return ret;
    } else {
      const ret = Object.assign(Object.assign({}, ty), {
        stereotype
      });
      return ret;
    }
  };
}
function withForceCast() {
  return ty => {
    if (ty.kind === 'optional') {
      const ret = Object.assign(Object.assign({}, ty), {
        optional: Object.assign(Object.assign({}, ty.optional), {
          forceCast: true
        })
      });
      return ret;
    } else {
      const ret = Object.assign(Object.assign({}, ty), {
        forceCast: true
      });
      return ret;
    }
  };
}
function withRecordType() {
  return ty => {
    if (ty.kind === 'optional') {
      const ret = Object.assign(Object.assign({}, ty), {
        optional: Object.assign(Object.assign({}, ty.optional), {
          isRecordTypeField: true
        })
      });
      return ret;
    } else {
      const ret = Object.assign(Object.assign({}, ty), {
        isRecordTypeField: true
      });
      return ret;
    }
  };
}
function withMeta(meta) {
  return ty => {
    const ret = Object.assign(Object.assign({}, ty), {
      meta
    });
    return ret;
  };
}
function withMsg(messages) {
  return ty => {
    if (ty.kind === 'optional') {
      if (typeof messages === 'string') {
        const ret = Object.assign(Object.assign({}, ty), {
          message: messages,
          optional: Object.assign(Object.assign({}, ty.optional), {
            message: messages
          })
        });
        delete ret.messages;
        delete ret.optional.messages;
        return ret;
      } else {
        const ret = Object.assign(Object.assign({}, ty), {
          messages,
          optional: Object.assign(Object.assign({}, ty.optional), {
            messages
          })
        });
        delete ret.message;
        delete ret.optional.message;
        return ret;
      }
    } else {
      if (typeof messages === 'string') {
        const ret = Object.assign(Object.assign({}, ty), {
          message: messages
        });
        delete ret.messages;
        return ret;
      } else {
        const ret = Object.assign(Object.assign({}, ty), {
          messages
        });
        delete ret.message;
        return ret;
      }
    }
  };
}
function withMsgId(messageId) {
  return ty => {
    if (ty.kind === 'optional') {
      return Object.assign(Object.assign({}, ty), {
        messageId,
        optional: Object.assign(Object.assign({}, ty.optional), {
          messageId
        })
      });
    } else {
      return Object.assign(Object.assign({}, ty), {
        messageId
      });
    }
  };
}

/***/ }),

/***/ "./src/picker.ts":
/*!***********************!*\
  !*** ./src/picker.ts ***!
  \***********************/
/*! exports provided: pickRoot, pick, patch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pickRoot", function() { return pickRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pick", function() { return pick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patch", function() { return patch; });
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/errors */ "./src/lib/errors.ts");
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/util */ "./src/lib/util.ts");
/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validator */ "./src/validator.ts");
// Copyright (c) 2019 Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln




function pickMapper(value, ty) {
  switch (ty.kind) {
    case 'object':
      {
        const ret = Array.isArray(value) ? [] : {};
        const dataMembers = new Set();

        if (!Array.isArray(value)) {
          for (const m in value) {
            if (Object.prototype.hasOwnProperty.call(value, m)) {
              dataMembers.add(m);
            }
          }
        }

        for (const x of ty.members) {
          if (Object.hasOwnProperty.call(value, x[0])) {
            dataMembers.delete(x[0]);
            ret[x[0]] = value[x[0]];
          }
        }

        if (ty.additionalProps && 0 < ty.additionalProps.length) {
          function* getAdditionalMembers() {
            for (const m of dataMembers.values()) {
              yield m;
            }

            if (Array.isArray(value)) {
              for (let i = 0; i < value.length; i++) {
                yield String(i);
              }
            }
          }

          for (const m of getAdditionalMembers()) {
            ret[m] = value[m];
          }
        }

        return ret;
      }

    default:
      return value;
  }
}

function pickRoot(data, ty, ctx) {
  switch (ty.kind) {
    case 'never':
      throw new _lib_errors__WEBPACK_IMPORTED_MODULE_0__["ValidationError"](`Type unmatched: ${ty.kind}`, ty, ctx);

    case 'any': // FALL_THRU

    case 'unknown': // FALL_THRU

    case 'primitive': // FALL_THRU

    case 'primitive-value': // FALL_THRU

    case 'repeated': // FALL_THRU

    case 'sequence': // FALL_THRU

    case 'one-of': // FALL_THRU

    case 'enum': // FALL_THRU

    case 'object':
      {
        const r = Object(_validator__WEBPACK_IMPORTED_MODULE_2__["validate"])(data, ty, ctx);

        if (r) {
          return r.value;
        } else {
          throw new _lib_errors__WEBPACK_IMPORTED_MODULE_0__["ValidationError"]('Validation failed.', ty, ctx);
        }
      }

    case 'spread':
    case 'optional':
    case 'symlink':
    case 'operator':
      throw new _lib_errors__WEBPACK_IMPORTED_MODULE_0__["ValidationError"](`Unexpected type assertion: ${ty.kind}`, ty, ctx);

    default:
      throw new _lib_errors__WEBPACK_IMPORTED_MODULE_0__["ValidationError"](`Unknown type assertion: ${ty.kind}`, ty, ctx);
  }
}
function pick(data, ty, ctx) {
  const ctx2 = Object.assign(Object.assign({
    errors: [],
    typeStack: []
  }, ctx || {}), {
    mapper: pickMapper
  });

  try {
    return pickRoot(data, ty, ctx2);
  } finally {
    if (ctx) {
      ctx.errors = ctx2.errors;
    }
  }
}

function merge(data, needle) {
  if (data === null || data === void 0) {
    return needle;
  }

  switch (typeof data) {
    case 'object':
      if (Array.isArray(data)) {
        return [...needle];
      } else {
        const r = Object.assign({}, data);

        for (const k in needle) {
          if (Object.prototype.hasOwnProperty.call(needle, k)) {
            if (Object(_lib_util__WEBPACK_IMPORTED_MODULE_1__["isUnsafeVarNames"])(r, k)) {
              continue;
            }

            r[k] = merge(r[k], needle[k]);
          }
        }

        return r;
      }

    default:
      return needle;
  }
}

function patch(data, needle, ty, ctx) {
  const ctx2 = Object.assign({
    errors: [],
    typeStack: []
  }, ctx || {});
  const validated = pick(needle, ty, ctx2);
  return merge(data, validated);
}

/***/ }),

/***/ "./src/stereotypes/date.ts":
/*!*********************************!*\
  !*** ./src/stereotypes/date.ts ***!
  \*********************************/
/*! exports provided: dateStereotype, lcDateStereotype, datetimeStereotype, lcDatetimeStereotype, stereotypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateStereotype", function() { return dateStereotype; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lcDateStereotype", function() { return lcDateStereotype; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "datetimeStereotype", function() { return datetimeStereotype; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lcDatetimeStereotype", function() { return lcDatetimeStereotype; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stereotypes", function() { return stereotypes; });
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/util */ "./src/lib/util.ts");
// Copyright (c) 2020 Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln

const FyPattern = /^first-date-of-fy\(([0-9]+)\)$/;
const FormulaPattern = /^([-+@])([0-9]+)(yr|mo|day|days|hr|min|sec|ms)$/;

class UtcDate extends Date {
  constructor(year, month, date, hours, minutes, seconds, ms) {
    super();

    if (year === void 0) {
      return;
    }

    if (typeof year === 'string') {
      if (_lib_util__WEBPACK_IMPORTED_MODULE_0__["DateTimePattern"].test(year)) {
        // string parameter is expected to be treated as specified TZ
        this.setTime(Date.parse(year)); // returns date in specified TZ
      } else if (_lib_util__WEBPACK_IMPORTED_MODULE_0__["DatePattern"].test(year)) {
        // string parameter is expected to be treated as UTC
        const d = new Date(year); // returns date in UTC TZ (getUTC??? returns string parameter's date & time digits)

        this.setTime(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));
      } else if (_lib_util__WEBPACK_IMPORTED_MODULE_0__["DateTimeNoTzPattern"].test(year)) {
        // string parameter is expected to be treated as UTC
        const d = new Date(year); // returns date in local TZ (get??? returns string parameter's date & time digits)

        this.setTime(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds()));
      } else {
        this.setTime(NaN);
      }

      return;
    }

    this.setUTCFullYear(year);
    this.setUTCMonth(typeof month === 'number' ? month : 0);
    this.setUTCDate(typeof date === 'number' ? date : 1);
    this.setUTCHours(typeof hours === 'number' ? hours : 0);
    this.setUTCMinutes(typeof minutes === 'number' ? minutes : 0);
    this.setUTCSeconds(typeof seconds === 'number' ? seconds : 0);
    this.setUTCMilliseconds(typeof ms === 'number' ? ms : 0);
  }

  getFullYear() {
    return this.getUTCFullYear();
  }

  getMonth() {
    return this.getUTCMonth();
  }

  getDate() {
    return this.getUTCDate();
  }

  getHours() {
    return this.getUTCHours();
  }

  getMinutes() {
    return this.getUTCMinutes();
  }

  getSeconds() {
    return this.getUTCSeconds();
  }

  getMilliseconds() {
    return this.getUTCMilliseconds();
  }

}

class LcDate extends Date {
  constructor(year, month, date, hours, minutes, seconds, ms) {
    super();

    if (year === void 0) {
      return;
    }

    if (typeof year === 'string') {
      if (_lib_util__WEBPACK_IMPORTED_MODULE_0__["DateTimePattern"].test(year)) {
        // string parameter is expected to be treated as specified TZ
        this.setTime(Date.parse(year)); // returns date in specified TZ
      } else if (_lib_util__WEBPACK_IMPORTED_MODULE_0__["DatePattern"].test(year)) {
        // string parameter is expected to be treated as local TZ
        const d = new Date(year); // returns date in UTC TZ (getUTC??? returns string parameter's date & time digits)

        const l = new Date(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());
        this.setTime(l.getTime());
      } else if (_lib_util__WEBPACK_IMPORTED_MODULE_0__["DateTimeNoTzPattern"].test(year)) {
        // string parameter is expected to be treated as local TZ
        const d = new Date(year); // returns date in local TZ (get??? returns string parameter's date & time digits)

        this.setTime(d.getTime());
      } else {
        this.setTime(NaN);
      }

      return;
    }

    this.setFullYear(year);
    this.setMonth(typeof month === 'number' ? month : 0);
    this.setDate(typeof date === 'number' ? date : 1);
    this.setHours(typeof hours === 'number' ? hours : 0);
    this.setMinutes(typeof minutes === 'number' ? minutes : 0);
    this.setSeconds(typeof seconds === 'number' ? seconds : 0);
    this.setMilliseconds(typeof ms === 'number' ? ms : 0);
  }

}

function evaluateFormulaBase(dateCtor, valueOrFormula) {
  const errMsg = `evaluateFormula: invalid parameter ${valueOrFormula}`;

  if (typeof valueOrFormula !== 'string') {
    throw new Error(errMsg);
  }

  if (valueOrFormula.startsWith('=')) {
    const formula = valueOrFormula.slice(1).split(' ');
    let d = new dateCtor();
    const now = new dateCtor(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes());
    const today = new dateCtor(d.getFullYear(), d.getMonth(), d.getDate());
    d = now;

    for (const f of formula) {
      switch (f) {
        case 'current':
        case 'now':
          d = now;
          break;

        case 'today':
          d = today;
          break;

        case 'first-date-of-yr':
        case 'first-date-of-fy(1)':
          d = new dateCtor(d.getFullYear(), 0, 1);
          break;

        case 'last-date-of-yr':
          d = new dateCtor(d.getFullYear(), 11, 31);
          break;

        case 'first-date-of-mo':
          d = new dateCtor(d.getFullYear(), d.getMonth(), 1);
          break;

        case 'last-date-of-mo':
          d = new dateCtor(d.getFullYear(), d.getMonth() + 1, 0);
          break;

        default:
          if (f.startsWith('first-date-of-fy(')) {
            const m = FyPattern.exec(f);

            if (m) {
              const n = Number.parseInt(m[1], 10);

              if (0 < n && n <= 12) {
                const mo = d.getMonth() + 1;
                let yr = d.getFullYear();

                if (mo < n) {
                  yr--;
                }

                d = new dateCtor(yr, n - 1, 1);
              } else {
                throw new Error(errMsg);
              }
            } else {
              throw new Error(errMsg);
            }
          } else {
            const m = FormulaPattern.exec(f);

            if (m) {
              let n = Number.parseInt(m[2], 10);

              switch (m[3]) {
                case 'yr':
                  switch (m[1]) {
                    case '@':
                      break;

                    case '+':
                      n = d.getFullYear() + n;
                      break;

                    case '-':
                      n = d.getFullYear() - n;
                      break;
                  }

                  d = new dateCtor(n, d.getMonth(), d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds());
                  break;

                case 'mo':
                  switch (m[1]) {
                    case '@':
                      n -= 1;
                      break;

                    case '+':
                      n = d.getMonth() + n;
                      break;

                    case '-':
                      n = d.getMonth() - n;
                      break;
                  }

                  d = new dateCtor(d.getFullYear(), n, d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds());
                  break;

                case 'day':
                case 'days':
                  switch (m[1]) {
                    case '@':
                      break;

                    case '+':
                      n = d.getDate() + n;
                      break;

                    case '-':
                      n = d.getDate() - n;
                      break;
                  }

                  d = new dateCtor(d.getFullYear(), d.getMonth(), n, d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds());
                  break;

                case 'hr':
                  switch (m[1]) {
                    case '@':
                      break;

                    case '+':
                      n = d.getHours() + n;
                      break;

                    case '-':
                      n = d.getHours() - n;
                      break;
                  }

                  d = new dateCtor(d.getFullYear(), d.getMonth(), d.getDate(), n, d.getMinutes(), d.getSeconds(), d.getMilliseconds());
                  break;

                case 'min':
                  switch (m[1]) {
                    case '@':
                      break;

                    case '+':
                      n = d.getMinutes() + n;
                      break;

                    case '-':
                      n = d.getMinutes() - n;
                      break;
                  }

                  d = new dateCtor(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), n, d.getSeconds(), d.getMilliseconds());
                  break;

                case 'sec':
                  switch (m[1]) {
                    case '@':
                      break;

                    case '+':
                      n = d.getSeconds() + n;
                      break;

                    case '-':
                      n = d.getSeconds() - n;
                      break;
                  }

                  d = new dateCtor(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes(), n, d.getMilliseconds());
                  break;

                case 'ms':
                  switch (m[1]) {
                    case '@':
                      break;

                    case '+':
                      n = d.getMilliseconds() + n;
                      break;

                    case '-':
                      n = d.getMilliseconds() - n;
                      break;
                  }

                  d = new dateCtor(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds(), n);
                  break;

                default:
                  throw new Error(errMsg);
              }
            } else {
              if (!(_lib_util__WEBPACK_IMPORTED_MODULE_0__["DatePattern"].test(f) || _lib_util__WEBPACK_IMPORTED_MODULE_0__["DateTimePattern"].test(f) || _lib_util__WEBPACK_IMPORTED_MODULE_0__["DateTimeNoTzPattern"].test(f))) {
                throw new Error(errMsg);
              }

              d = new dateCtor(f);
            }
          }

      }
    }

    return d;
  } else {
    if (!_lib_util__WEBPACK_IMPORTED_MODULE_0__["DatePattern"].test(valueOrFormula)) {
      throw new Error(errMsg);
    }

    return new dateCtor(valueOrFormula);
  }
}

const dateStereotype = {
  tryParse: value => {
    return typeof value === 'string' && _lib_util__WEBPACK_IMPORTED_MODULE_0__["DatePattern"].test(value) ? {
      value: new UtcDate(value).getTime()
    } : null;
  },
  evaluateFormula: valueOrFormula => {
    const d = evaluateFormulaBase(UtcDate, valueOrFormula);
    return new UtcDate(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
  },
  compare: (a, b) => a - b,
  doCast: false
};
const lcDateStereotype = Object.assign(Object.assign({}, dateStereotype), {
  tryParse: value => {
    if (typeof value === 'string' && _lib_util__WEBPACK_IMPORTED_MODULE_0__["DatePattern"].test(value)) {
      return {
        value: new LcDate(value).getTime()
      };
    } else {
      return null;
    }
  },
  evaluateFormula: valueOrFormula => {
    const d = evaluateFormulaBase(LcDate, valueOrFormula);
    return new LcDate(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
  }
});
const datetimeStereotype = {
  tryParse: value => {
    return typeof value === 'string' && (_lib_util__WEBPACK_IMPORTED_MODULE_0__["DateTimePattern"].test(value) || _lib_util__WEBPACK_IMPORTED_MODULE_0__["DateTimeNoTzPattern"].test(value)) ? {
      value: new UtcDate(value).getTime()
    } // If timezone is not specified, it is local time
    : null;
  },
  evaluateFormula: valueOrFormula => evaluateFormulaBase(UtcDate, valueOrFormula).getTime(),
  compare: (a, b) => a - b,
  doCast: false
};
const lcDatetimeStereotype = Object.assign(Object.assign({}, datetimeStereotype), {
  tryParse: value => {
    return typeof value === 'string' && (_lib_util__WEBPACK_IMPORTED_MODULE_0__["DateTimePattern"].test(value) || _lib_util__WEBPACK_IMPORTED_MODULE_0__["DateTimeNoTzPattern"].test(value)) ? {
      value: new LcDate(value).getTime()
    } : null;
  },
  evaluateFormula: valueOrFormula => evaluateFormulaBase(LcDate, valueOrFormula).getTime()
});
const stereotypes = [['date', dateStereotype], ['lcdate', lcDateStereotype], ['datetime', datetimeStereotype], ['lcdatetime', lcDatetimeStereotype]];

/***/ }),

/***/ "./src/stereotypes/noop.ts":
/*!*********************************!*\
  !*** ./src/stereotypes/noop.ts ***!
  \*********************************/
/*! exports provided: noopStereotype */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noopStereotype", function() { return noopStereotype; });
// Copyright (c) 2020 Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln
const noopStereotype = {
  tryParse: value => {
    return {
      value
    };
  },
  evaluateFormula: valueOrFormula => {
    return valueOrFormula;
  },
  compare: (a, b) => {
    // NOTE: You should pass assertion value (schema value) into 'a'.
    const tyA = typeof a;
    const tyB = typeof b;

    if (tyA !== tyB) {
      return NaN;
    }

    switch (tyA) {
      case 'number':
        if (Number.isNaN(a) && Number.isNaN(b)) {
          return 0;
        } else {
          return a - b;
        }

      default:
        if (a === b) {
          return 0;
        } else if (a > b) {
          return 1;
        } else if (a < b) {
          return -1;
        } else {
          return NaN;
        }

    }
  },
  doCast: false
};

/***/ }),

/***/ "./src/types.ts":
/*!**********************!*\
  !*** ./src/types.ts ***!
  \**********************/
/*! exports provided: ErrorTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types_tynder_schema_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types/tynder-schema-types */ "./src/types/tynder-schema-types.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorTypes", function() { return _types_tynder_schema_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"]; });

// Copyright (c) 2019 Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln


/***/ }),

/***/ "./src/types/tynder-schema-types.ts":
/*!******************************************!*\
  !*** ./src/types/tynder-schema-types.ts ***!
  \******************************************/
/*! exports provided: ErrorTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorTypes", function() { return ErrorTypes; });
// Copyright (c) 2019 Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln
var ErrorTypes;

(function (ErrorTypes) {
  ErrorTypes[ErrorTypes["InvalidDefinition"] = 1] = "InvalidDefinition";
  ErrorTypes[ErrorTypes["Required"] = 2] = "Required";
  ErrorTypes[ErrorTypes["TypeUnmatched"] = 3] = "TypeUnmatched";
  ErrorTypes[ErrorTypes["AdditionalPropUnmatched"] = 4] = "AdditionalPropUnmatched";
  ErrorTypes[ErrorTypes["RepeatQtyUnmatched"] = 5] = "RepeatQtyUnmatched";
  ErrorTypes[ErrorTypes["SequenceUnmatched"] = 6] = "SequenceUnmatched";
  ErrorTypes[ErrorTypes["ValueRangeUnmatched"] = 7] = "ValueRangeUnmatched";
  ErrorTypes[ErrorTypes["ValuePatternUnmatched"] = 8] = "ValuePatternUnmatched";
  ErrorTypes[ErrorTypes["ValueLengthUnmatched"] = 9] = "ValueLengthUnmatched";
  ErrorTypes[ErrorTypes["ValueUnmatched"] = 10] = "ValueUnmatched";
})(ErrorTypes || (ErrorTypes = {}));

/***/ }),

/***/ "./src/validator.ts":
/*!**************************!*\
  !*** ./src/validator.ts ***!
  \**************************/
/*! exports provided: validateRoot, validate, getType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateRoot", function() { return validateRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validate", function() { return validate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getType", function() { return getType; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/types.ts");
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/errors */ "./src/lib/errors.ts");
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/util */ "./src/lib/util.ts");
/* harmony import */ var _lib_reporter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/reporter */ "./src/lib/reporter.ts");
/* harmony import */ var _lib_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/resolver */ "./src/lib/resolver.ts");
/* harmony import */ var _stereotypes_noop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stereotypes/noop */ "./src/stereotypes/noop.ts");
// Copyright (c) 2019 Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln







function checkStereotypes(data, ty, ctx) {
  if (ty.stereotype && ctx.stereotypes) {
    if (ctx.stereotypes.has(ty.stereotype)) {
      const stereotype = ctx.stereotypes.get(ty.stereotype);
      const parsed = stereotype.tryParse(data);

      if (parsed) {
        return {
          value: parsed.value,
          stereotype
        };
      } else {
        return null;
      }
    } else {
      throw new Error(`Undefined stereotype is specified: ${ty.stereotype}`);
    }
  }

  return false;
}

function forceCast(targetType, value) {
  switch (targetType) {
    case 'number':
      if (typeof value === 'number') {
        return value;
      } else {
        const a = Number.parseFloat(String(value));

        if (Number.isNaN(a)) {
          return Number(value !== null && value !== void 0 ? value : 0);
        } else {
          return a;
        }
      }

    case 'integer':
      if (typeof value === 'number' && Math.trunc(value) === value) {
        return value;
      } else {
        let a = Number.parseFloat(String(value));

        if (Number.isNaN(a)) {
          a = Number(value !== null && value !== void 0 ? value : 0);
        }

        return Math.trunc(a);
      }

    case 'bigint':
      try {
        return BigInt(value !== null && value !== void 0 ? value : 0);
      } catch (_a) {
        return NaN;
      }

    case 'string':
      return String(value);

    case 'boolean':
      return Boolean(value);

    case 'undefined':
      return void 0;

    case 'null':
      return null;

    default:
      return value;
  }
}

function validateNeverTypeAssertion(data, ty, ctx) {
  Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportError"])(_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].TypeUnmatched, data, ty, {
    ctx
  });
  return null;
}

function validateAnyTypeAssertion(data, ty, ctx) {
  let chkSt = checkStereotypes(data, ty, ctx);

  if (chkSt === null) {
    return null;
  } else if (chkSt === false) {
    chkSt = {
      value: data,
      stereotype: _stereotypes_noop__WEBPACK_IMPORTED_MODULE_5__["noopStereotype"]
    };
  }

  const styp = chkSt.stereotype; // always matched

  return {
    value: ctx.mapper ? ctx.mapper(styp.doCast ? chkSt.value : data, ty) : styp.doCast ? chkSt.value : data
  };
}

function validateUnknownTypeAssertion(data, ty, ctx) {
  let chkSt = checkStereotypes(data, ty, ctx);

  if (chkSt === null) {
    return null;
  } else if (chkSt === false) {
    chkSt = {
      value: data,
      stereotype: _stereotypes_noop__WEBPACK_IMPORTED_MODULE_5__["noopStereotype"]
    };
  }

  const styp = chkSt.stereotype; // always matched

  return {
    value: ctx.mapper ? ctx.mapper(styp.doCast ? chkSt.value : data, ty) : styp.doCast ? chkSt.value : data
  };
}

function validatePrimitiveTypeAssertion(data, ty, ctx) {
  const chkTarget = ty.forceCast ? forceCast(ty.primitiveName, data) : data;

  if (ty.primitiveName === 'null') {
    if (chkTarget !== null) {
      Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportError"])(_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].TypeUnmatched, data, ty, {
        ctx
      });
      return null;
    }
  } else if (ty.primitiveName === 'integer') {
    if (typeof chkTarget !== 'number') {
      Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportError"])(_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].TypeUnmatched, data, ty, {
        ctx
      });
      return null;
    }

    if (Math.trunc(chkTarget) !== chkTarget) {
      Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportError"])(_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].TypeUnmatched, data, ty, {
        ctx
      });
      return null;
    }
  } else if (typeof chkTarget !== ty.primitiveName) {
    Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportError"])(_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].TypeUnmatched, data, ty, {
      ctx
    });
    return null;
  } // TODO: Function, DateStr, DateTimeStr


  let chkSt = checkStereotypes(chkTarget, ty, ctx);

  if (chkSt === null) {
    Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportError"])(_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].TypeUnmatched, data, ty, {
      ctx
    });
    return null;
  } else if (chkSt === false) {
    chkSt = {
      value: chkTarget,
      stereotype: ty.forceCast ? _stereotypes_noop__WEBPACK_IMPORTED_MODULE_5__["noopStereotype"] : _stereotypes_noop__WEBPACK_IMPORTED_MODULE_5__["noopStereotype"]
    };
  }

  const styVal = chkSt.value;
  const styp = chkSt.stereotype;
  let err = false;
  let valueRangeErr = false;

  switch (typeof ty.minValue) {
    case 'number':
    case 'string':
      // TODO: bigint
      if (styp.compare(styVal, styp.evaluateFormula(ty.minValue)) < 0) {
        if (!valueRangeErr) {
          Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportError"])(_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].ValueRangeUnmatched, data, ty, {
            ctx
          });
        }

        valueRangeErr = true;
        err = true;
      }

  }

  switch (typeof ty.maxValue) {
    case 'number':
    case 'string':
      // TODO: bigint
      if (styp.compare(styVal, styp.evaluateFormula(ty.maxValue)) > 0) {
        if (!valueRangeErr) {
          Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportError"])(_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].ValueRangeUnmatched, data, ty, {
            ctx
          });
        }

        valueRangeErr = true;
        err = true;
      }

  }

  switch (typeof ty.greaterThanValue) {
    case 'number':
    case 'string':
      // TODO: bigint
      if (styp.compare(styVal, styp.evaluateFormula(ty.greaterThanValue)) <= 0) {
        if (!valueRangeErr) {
          Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportError"])(_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].ValueRangeUnmatched, data, ty, {
            ctx
          });
        }

        valueRangeErr = true;
        err = true;
      }

  }

  switch (typeof ty.lessThanValue) {
    case 'number':
    case 'string':
      // TODO: bigint
      if (styp.compare(styVal, styp.evaluateFormula(ty.lessThanValue)) >= 0) {
        if (!valueRangeErr) {
          Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportError"])(_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].ValueRangeUnmatched, data, ty, {
            ctx
          });
        }

        valueRangeErr = true;
        err = true;
      }

  }

  let valueLengthErr = false;

  switch (typeof ty.minLength) {
    case 'number':
      if (typeof styVal !== 'string' || styVal.length < ty.minLength) {
        if (!valueLengthErr) {
          Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportError"])(_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].ValueLengthUnmatched, data, ty, {
            ctx
          });
        }

        valueLengthErr = true;
        err = true;
      }

  }

  switch (typeof ty.maxLength) {
    case 'number':
      if (typeof styVal !== 'string' || styVal.length > ty.maxLength) {
        if (!valueLengthErr) {
          Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportError"])(_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].ValueLengthUnmatched, data, ty, {
            ctx
          });
        }

        valueLengthErr = true;
        err = true;
      }

  }

  if (ty.pattern) {
    if (typeof styVal !== 'string' || !ty.pattern.test(styVal)) {
      Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportError"])(_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].ValuePatternUnmatched, data, ty, {
        ctx
      });
      err = true;
    }
  }

  const ret = !err ? {
    value: ctx.mapper ? ctx.mapper(styp.doCast ? chkSt.value : chkTarget, ty) : styp.doCast ? chkSt.value : chkTarget
  } : null;
  return ret;
}

function validatePrimitiveValueTypeAssertion(data, ty, ctx) {
  const chkTarget = ty.forceCast ? forceCast(typeof ty.value, data) : data;
  let chkSt = checkStereotypes(chkTarget, ty, ctx);

  if (chkSt === null) {
    return null;
  } else if (chkSt === false) {
    chkSt = {
      value: chkTarget,
      stereotype: ty.forceCast ? _stereotypes_noop__WEBPACK_IMPORTED_MODULE_5__["noopStereotype"] : _stereotypes_noop__WEBPACK_IMPORTED_MODULE_5__["noopStereotype"]
    };
  }

  const styp = chkSt.stereotype;
  const ret = styp.compare(chkSt.value, styp.evaluateFormula(ty.value)) === 0 ? {
    value: ctx.mapper ? ctx.mapper(styp.doCast ? chkSt.value : chkTarget, ty) : styp.doCast ? chkSt.value : chkTarget
  } : null;

  if (!ret) {
    Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportError"])(_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].ValueUnmatched, data, ty, {
      ctx
    });
  }

  return ret;
}

function validateRepeatedAssertion(data, ty, ctx) {
  if (!Array.isArray(data)) {
    Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportError"])(_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].TypeUnmatched, data, ty, {
      ctx
    });
    return null;
  }

  if (typeof ty.min === 'number' && data.length < ty.min) {
    Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportError"])(_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].RepeatQtyUnmatched, data, ty, {
      ctx
    });
    return null;
  }

  if (typeof ty.max === 'number' && data.length > ty.max) {
    Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportError"])(_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].RepeatQtyUnmatched, data, ty, {
      ctx
    });
    return null;
  }

  const retVals = [];

  for (let i = 0; i < data.length; i++) {
    const x = data[i];
    const r = validateRoot(x, ty.repeated, ctx, i);

    if (!r) {
      return null;
    }

    retVals.push(r.value);
  }

  return {
    value: retVals
  };
}

function validateSequenceAssertion(data, ty, ctx) {
  if (!Array.isArray(data)) {
    Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportError"])(_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].TypeUnmatched, data, ty, {
      ctx
    });
    return null;
  }

  let dIdx = 0,
      // index of data
  sIdx = 0; // index of types

  let spreadLen = 0;
  let optionalOmitted = false;

  const checkSpreadQuantity = (ts, index) => {
    if (typeof ts.min === 'number' && spreadLen < ts.min) {
      Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportErrorWithPush"])(spreadLen === 0 ? _types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].TypeUnmatched : _types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].RepeatQtyUnmatched, data, [ts, index], {
        ctx
      });
      return null;
    }

    if (typeof ts.max === 'number' && spreadLen > ts.max) {
      Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportErrorWithPush"])(_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].RepeatQtyUnmatched, data, [ts, index], {
        ctx
      });
      return null;
    }

    return ts;
  };

  const checkOptionalQuantity = (ts, index) => {
    if (spreadLen === 0) {
      // All subsequent 'optional' assertions should be 'spreadLen === 0'.
      optionalOmitted = true;
    } else if (optionalOmitted) {
      Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportErrorWithPush"])(_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].RepeatQtyUnmatched, data, [ts, index], {
        ctx
      });
      return null;
    } else if (spreadLen > 1) {
      Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportErrorWithPush"])(_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].RepeatQtyUnmatched, data, [ts, index], {
        ctx
      });
      return null;
    }

    return ts;
  };

  const retVals = [];

  while (dIdx < data.length && sIdx < ty.sequence.length) {
    const ts = ty.sequence[sIdx];

    if (ts.kind === 'spread') {
      const savedErrLen = ctx.errors.length;
      const r = validateRoot(data[dIdx], ts.spread, ctx, dIdx);

      if (r) {
        retVals.push(r.value);
        dIdx++;
        spreadLen++;
      } else {
        // End of spreading
        // rollback reported errors
        ctx.errors.length = savedErrLen;

        if (!checkSpreadQuantity(ts, dIdx)) {
          return null;
        }

        spreadLen = 0;
        sIdx++;
      }
    } else if (ts.kind === 'optional') {
      const savedErrLen = ctx.errors.length;
      const r = validateRoot(data[dIdx], ts.optional, ctx, dIdx);

      if (r) {
        retVals.push(r.value);
        dIdx++;
        spreadLen++;
      } else {
        // End of spreading
        // rollback reported errors
        ctx.errors.length = savedErrLen;

        if (!checkOptionalQuantity(ts, dIdx)) {
          return null;
        }

        spreadLen = 0;
        sIdx++;
      }
    } else {
      const r = validateRoot(data[dIdx], ts, ctx, dIdx);

      if (r) {
        retVals.push(r.value);
        dIdx++;
        sIdx++;
      } else {
        return null;
      }
    }
  }

  while (sIdx < ty.sequence.length) {
    const ts = ty.sequence[sIdx];

    if (ts.kind === 'spread') {
      if (!checkSpreadQuantity(ts, dIdx)) {
        return null;
      }

      spreadLen = 0;
      sIdx++;
    } else if (ts.kind === 'optional') {
      if (!checkOptionalQuantity(ts, dIdx)) {
        return null;
      }

      spreadLen = 0;
      sIdx++;
    } else {
      Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportErrorWithPush"])(_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].RepeatQtyUnmatched, data, [ts, dIdx], {
        ctx
      });
      return null;
    }
  }

  const ret = data.length === dIdx ? {
    value: retVals
  } : null;

  if (!ret) {
    Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportError"])(_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].SequenceUnmatched, data, ty, {
      ctx
    });
  }

  return ret;
}

function validateOneOfAssertion(data, ty, ctx) {
  let choosed = false;
  const savedCtxRecordTypeFieldValidated = ctx.recordTypeFieldValidated;
  ctx.recordTypeFieldValidated = false;
  const savedErrLen = ctx.errors.length;
  let count = 0;
  let firstErrLen = savedErrLen;

  for (const tyOne of ty.oneOf) {
    const r = validateRoot(data, tyOne, ctx);

    if (r) {
      // rollback reported errors
      ctx.errors.length = savedErrLen;
      ctx.recordTypeFieldValidated = savedCtxRecordTypeFieldValidated;
      return r;
    }

    if (ctx.recordTypeFieldValidated) {
      if (count !== 0) {
        const e2 = ctx.errors.slice(firstErrLen);
        ctx.errors.length = savedErrLen;
        ctx.errors.push(...e2);
      }

      choosed = true;
      break;
    }

    if (count === 0) {
      firstErrLen = ctx.errors.length;
    } else {
      ctx.errors.length = firstErrLen;
    }

    count++;
  }

  if (!choosed) {
    if (!ctx.checkAll) {
      // rollback reported errors
      ctx.errors.length = savedErrLen;
    }

    Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportError"])(_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].TypeUnmatched, data, ty, {
      ctx
    });
  }

  ctx.recordTypeFieldValidated = savedCtxRecordTypeFieldValidated;
  return null;
}

function validateEnumAssertion(data, ty, ctx) {
  for (const v of ty.values) {
    if (data === v[1]) {
      return {
        value: ctx.mapper ? ctx.mapper(data, ty) : data
      };
    }
  }

  Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportError"])(_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].ValueUnmatched, data, ty, {
    ctx
  });
  return null;
}

function validateObjectAssertion(data, ty, ctx) {
  let retVal = Array.isArray(data) ? [...data] : Object.assign({}, data);
  const revMembers = ty.members.slice().reverse();

  for (const x of ty.members) {
    if (ty.members.find(m => m[0] === x[0]) !== revMembers.find(m => m[0] === x[0])) {
      Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportError"])(_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].InvalidDefinition, data, ty, {
        ctx
      });
      throw new _lib_errors__WEBPACK_IMPORTED_MODULE_1__["ValidationError"](`Duplicated member is found: ${x[0]} in ${ty.name || '(unnamed)'}`, ty, ctx);
    }
  }

  if (data === null || typeof data !== 'object') {
    Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportError"])(_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].TypeUnmatched, data, ty, {
      ctx
    });

    if (ctx && ctx.checkAll) {
      retVal = null;
    } else {
      return null;
    }
  } else {
    const dataMembers = new Set();

    if (ctx.noAdditionalProps || ty.additionalProps && 0 < ty.additionalProps.length) {
      if (!Array.isArray(data)) {
        for (const m in data) {
          if (Object.prototype.hasOwnProperty.call(data, m)) {
            dataMembers.add(m);
          }
        }
      }
    }

    if (ctx.noAdditionalProps && Array.isArray(data) && 0 < data.length) {
      const aps = ty.additionalProps || [];

      if (aps.filter(x => x[0].includes('number')).length === 0) {
        Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportError"])(_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].AdditionalPropUnmatched, data, ty, {
          ctx,
          substitutions: [['addtionalProps', '[number]']]
        });

        if (ctx && ctx.checkAll) {
          retVal = null;
        } else {
          return null;
        }
      }
    }

    for (const x of ty.members) {
      dataMembers.delete(x[0]);

      if (Object.prototype.hasOwnProperty.call(data, x[0])) {
        const mt = x[1].kind === 'optional' ? // TODO: set name at compile time
        Object.assign(Object.assign({}, x[1].optional), {
          name: x[0],
          message: x[1].message,
          messages: x[1].messages,
          messageId: x[1].messageId
        }) : x[1];
        const ret = validateRoot(data[x[0]], mt, ctx);

        if (ret) {
          if (retVal) {
            if (Object(_lib_util__WEBPACK_IMPORTED_MODULE_2__["isUnsafeVarNames"])(retVal, x[0])) {
              continue;
            }

            retVal[x[0]] = ret.value;

            if (mt.isRecordTypeField) {
              ctx.recordTypeFieldValidated = true;
            }
          }
        } else {
          if (ctx && ctx.checkAll) {
            retVal = null;
          } else {
            return null;
          }
        }
      } else {
        if (x[1].kind !== 'optional') {
          Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportErrorWithPush"])(_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].Required, data, [x[1], void 0], {
            ctx
          });

          if (ctx && ctx.checkAll) {
            retVal = null;
          } else {
            return null;
          }
        }
      }
    }

    if (ty.additionalProps && 0 < ty.additionalProps.length) {
      function* getAdditionalMembers() {
        for (const m of dataMembers.values()) {
          yield m;
        }

        if (Array.isArray(data)) {
          for (let i = 0; i < data.length; i++) {
            yield String(i);
          }
        }
      }

      for (const m of getAdditionalMembers()) {
        let allowImplicit = false;
        const matchedAssertions = [];

        for (const ap of ty.additionalProps) {
          for (const pt of ap[0]) {
            const at = ap[1];

            if (pt === 'number') {
              if (_lib_util__WEBPACK_IMPORTED_MODULE_2__["NumberPattern"].test(m)) {
                matchedAssertions.push(at);
              }
            } else if (pt === 'string') {
              matchedAssertions.push(at);
            } else {
              if (pt.test(m)) {
                matchedAssertions.push(at);
              }
            }

            if (at.kind === 'optional') {
              allowImplicit = true;
            }
          }
        }

        if (matchedAssertions.length === 0) {
          if (allowImplicit) {
            continue;
          }

          Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportError"])(_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].AdditionalPropUnmatched, data, ty, {
            ctx,
            substitutions: [['addtionalProps', m]]
          });

          if (ctx && ctx.checkAll) {
            retVal = null;
            continue;
          } else {
            return null;
          }
        }

        dataMembers.delete(m);
        let hasError = false;
        const savedErrLen = ctx.errors.length;

        for (const at of matchedAssertions) {
          const ret = validateRoot(data[m], at.kind === 'optional' ? Object.assign(Object.assign({}, at.optional), {
            message: at.message,
            messages: at.messages,
            messageId: at.messageId,
            name: m
          }) : Object.assign(Object.assign({}, at), {
            name: m
          }), ctx);

          if (ret) {
            if (retVal) {
              hasError = false;
              ctx.errors.length = savedErrLen;

              if (Object(_lib_util__WEBPACK_IMPORTED_MODULE_2__["isUnsafeVarNames"])(retVal, m)) {
                continue;
              }

              retVal[m] = ret.value;
            }

            break;
          } else {
            hasError = true;
          }
        }

        if (hasError) {
          if (ctx && ctx.checkAll) {
            retVal = null;
          } else {
            return null;
          }
        }
      }
    }

    if (ctx.noAdditionalProps && 0 < dataMembers.size) {
      Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportError"])(_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].AdditionalPropUnmatched, data, ty, {
        ctx,
        substitutions: [['addtionalProps', Array.from(dataMembers.values()).join(', ')]]
      });

      if (ctx && ctx.checkAll) {
        retVal = null;
      } else {
        return null;
      }
    }
  }

  if (!retVal) {// TODO: Child is unmatched. reportError?
    // TODO: report object's custom error message
  }

  return retVal ? {
    value: ctx && ctx.mapper ? ctx.mapper(retVal, ty) : retVal
  } : null;
}

function validateRoot(data, ty, ctx, dataIndex) {
  try {
    ctx.typeStack.push(typeof dataIndex === 'number' || typeof dataIndex === 'string' ? [ty, dataIndex] : ty);

    switch (ty.kind) {
      case 'never':
        return validateNeverTypeAssertion(data, ty, ctx);

      case 'any':
        return validateAnyTypeAssertion(data, ty, ctx);

      case 'unknown':
        return validateUnknownTypeAssertion(data, ty, ctx);

      case 'primitive':
        return validatePrimitiveTypeAssertion(data, ty, ctx);

      case 'primitive-value':
        return validatePrimitiveValueTypeAssertion(data, ty, ctx);

      case 'repeated':
        return validateRepeatedAssertion(data, ty, ctx);

      case 'sequence':
        return validateSequenceAssertion(data, ty, ctx);

      case 'one-of':
        return validateOneOfAssertion(data, ty, ctx);

      case 'enum':
        return validateEnumAssertion(data, ty, ctx);

      case 'object':
        return validateObjectAssertion(data, ty, ctx);

      case 'symlink':
        if (ctx.schema) {
          return validateRoot(data, Object(_lib_resolver__WEBPACK_IMPORTED_MODULE_4__["resolveSymbols"])(ctx.schema, ty, {
            nestLevel: 0,
            symlinkStack: []
          }), ctx);
        }

        Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportError"])(_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].InvalidDefinition, data, ty, {
          ctx
        });
        throw new _lib_errors__WEBPACK_IMPORTED_MODULE_1__["ValidationError"](`Unresolved symbol '${ty.symlinkTargetName}' is appeared.`, ty, ctx);

      case 'operator':
        if (ctx.schema) {
          return validateRoot(data, Object(_lib_resolver__WEBPACK_IMPORTED_MODULE_4__["resolveSymbols"])(ctx.schema, ty, {
            nestLevel: 0,
            symlinkStack: []
          }), ctx);
        }

        Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportError"])(_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].InvalidDefinition, data, ty, {
          ctx
        });
        throw new _lib_errors__WEBPACK_IMPORTED_MODULE_1__["ValidationError"](`Unresolved type operator is found: ${ty.operator}`, ty, ctx);

      case 'spread':
      case 'optional':
        Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportError"])(_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].InvalidDefinition, data, ty, {
          ctx
        });
        throw new _lib_errors__WEBPACK_IMPORTED_MODULE_1__["ValidationError"](`Unexpected type assertion: ${ty.kind}`, ty, ctx);

      default:
        Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportError"])(_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].InvalidDefinition, data, ty, {
          ctx
        });
        throw new _lib_errors__WEBPACK_IMPORTED_MODULE_1__["ValidationError"](`Unknown type assertion: ${ty.kind}`, ty, ctx);
    }
  } finally {
    ctx.typeStack.pop();
  }
}
function validate(data, ty, ctx) {
  const ctx2 = Object.assign({
    errors: [],
    typeStack: []
  }, ctx || {});

  try {
    return validateRoot(data, ty, ctx2);
  } finally {
    if (ctx) {
      ctx.errors = ctx2.errors;
    }
  }
}
function getType(schema, name) {
  var _a;

  if (schema.has(name)) {
    return (_a = schema.get(name)) === null || _a === void 0 ? void 0 : _a.ty;
  }

  throw new Error(`Undefined type name is referred: ${name}`);
}

/***/ }),

/***/ 1:
/*!*******************************!*\
  !*** multi ./src/index-rt.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /builds/shellyln/tynder/src/index-rt.ts */"./src/index-rt.ts");


/***/ })

/******/ });
});
//# sourceMappingURL=tynder-rt.js.map