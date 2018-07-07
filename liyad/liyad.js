var liyad =
/******/ (function(modules) { // webpackBootstrap
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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sExpression = __webpack_require__(/*! ./s-exp/s-expression */ "./src/s-exp/s-expression.ts");

Object.keys(_sExpression).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _sExpression[key];
    }
  });
});

/***/ }),

/***/ "./src/s-exp/evaluate.ts":
/*!*******************************!*\
  !*** ./src/s-exp/evaluate.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.resolveMacro = resolveMacro;
exports.resolveFunctionSymbol = resolveFunctionSymbol;
exports.resolveValueSymbolScope = resolveValueSymbolScope;
exports.resolveValueSymbol = resolveValueSymbol;
exports.installScope = installScope;
exports.uninstallScope = uninstallScope;
exports.getScope = getScope;
exports.getGlobalScope = getGlobalScope;
exports.optimizeTailCall = optimizeTailCall;
exports.evaluate = evaluate;

var _types = __webpack_require__(/*! ./types */ "./src/s-exp/types.ts");

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } // Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln


function resolveMacro(state, x) {
    var macroInfo = state.macroMap.get(x.symbol);
    if (macroInfo) {
        return macroInfo.fn(state, x.symbol);
    } else {
        return false;
    }
}
function resolveFunctionSymbol(state, x) {
    if (typeof x === 'function') {
        return x;
    }
    var funcInfo = state.funcMap.get(x.symbol);
    if (funcInfo) {
        return funcInfo.fn(state, x.symbol);
    } else {
        var v = resolveValueSymbol(state, x);
        if (typeof v === 'function') {
            return v;
        }
        if (state.config.funcSymbolResolverFallback) {
            return state.config.funcSymbolResolverFallback(state, x.symbol);
        }
        if (state.config.raiseOnUnresolvedSymbol) {
            throw new Error('[SX] resolveFunctionSymbol: Unresolved symbol: ' + x.symbol + '.');
        }
        return x.symbol;
    }
}
function resolveValueSymbolScope(state, x, nullIfNotDefined) {
    for (var i = state.scopes.length - 1; i > 0; i--) {
        var localScope = state.scopes[i];
        if (localScope && Object.prototype.hasOwnProperty.call(localScope.scope, x.symbol)) {
            return localScope.scope;
        }
        if (!localScope.isBlockLocal) {
            break;
        }
    }
    var globalScope = getGlobalScope(state);
    if (Object.prototype.hasOwnProperty.call(globalScope.scope, x.symbol)) {
        return globalScope.scope;
    }
    return nullIfNotDefined ? null : getScope(state).scope;
}
function resolveValueSymbol(state, x) {
    var scope = resolveValueSymbolScope(state, x, true);
    if (scope) {
        return scope[x.symbol];
    }
    var symInfo = state.symbolMap.get(x.symbol);
    if (symInfo) {
        return symInfo.fn(state, x.symbol);
    } else {
        if (state.config.valueSymbolResolverFallback) {
            return state.config.valueSymbolResolverFallback(state, x.symbol);
        }
        if (state.config.raiseOnUnresolvedSymbol) {
            throw new Error('[SX] resolveValueSymbol: Unresolved symbol: ' + x.symbol + '.');
        }
        return x.symbol;
    }
}
function installScope(state, scope, isBlockLocal) {
    state.scopes.push({ isBlockLocal: isBlockLocal, scope: scope });
}
function uninstallScope(state) {
    if (state.scopes.length < 2) {
        throw new Error('[SX] uninstallScope: Unable to pop stack.');
    }
    return state.scopes.pop();
}
function getScope(state) {
    return state.scopes[state.scopes.length - 1];
}
function getGlobalScope(state) {
    return state.scopes[0];
}
function optimizeTailCall(state, formalArgs, fnBody) {
    // S expression: ($__lambda '(sym1 ... symN) 'expr1 ... 'exprN)
    //    formalArgs: 'sym1 ... 'symN
    //        fnBody: 'expr1 ... 'exprN
    if (Array.isArray(fnBody[fnBody.length - 1])) {
        var front = fnBody.slice(0, fnBody.length - 1);
        var tail = fnBody[fnBody.length - 1];
        if (tail && tail[0].symbol === state.config.reservedNames.if) {
            // S expression: ($if cond t-expr f-expr)
            if (tail[3][0].symbol === state.config.reservedNames.self) {
                // S expression (recursive):
                //     (   ;; fnBody
                //         expr1 ... exprN-1             ;; front
                //         ($if cond                     ;; tail[0] [1]
                //             t-expr                    ;;     [2]
                //             ($self                    ;;     [3]
                //                 rArgs1 ... rArgsN) )  ;; tail
                //     )
                //
                //  -> S exp (tail call optimization):
                //     (   ;; fnBody
                //         ($do-until cond
                //             expr1 ... exprN-1
                //             ($let sym1 rArgs1) ... ($let symN rArgsN) )
                //         t-expr
                //     )
                return [[{ symbol: state.config.reservedNames.until }, tail[1]].concat(_toConsumableArray(front), _toConsumableArray(tail[3].slice(1).map(function (x, idx) {
                    return [{ symbol: state.config.reservedNames.let }, formalArgs[idx], x];
                }))), tail[2]];
            }
        }
    }
    return fnBody;
}
function evaluate(state, x) {
    if (x === null || x === void 0) {
        return x;
    }
    var r = x;
    for (;;) {
        if (Array.isArray(r)) {
            if (r.length === 0) {
                return r;
            }
            var sym = (0, _types.isSymbol)(r[0]);
            if (sym) {
                var m = resolveMacro(state, sym);
                if (m) {
                    r = m(r);
                } else {
                    break;
                }
            } else {
                break;
            }
        } else {
            break;
        }
    }
    if (Array.isArray(r)) {
        r = r.slice(0);
        if (0 < r.length) {
            var _sym = (0, _types.isSymbol)(r[0]);
            if (_sym) {
                if (_sym.symbol === state.config.reservedNames.quote) {
                    return r.slice(1, 2)[0];
                }
                if (_sym.symbol === state.config.reservedNames.eval) {
                    return evaluate(state, r[1]);
                }
            }
            for (var i = r.length - 1; i > 0; i--) {
                r[i] = evaluate(state, r[i]);
            }
            var fn = void 0;
            if (typeof r[0] === 'function') {
                fn = r[0];
            } else if (_sym) {
                fn = resolveFunctionSymbol(state, _sym);
            } else {
                fn = evaluate(state, r[0]);
            }
            if (typeof fn === 'function') {
                r = fn.apply(undefined, _toConsumableArray(r.slice(1)));
            } else {
                throw new Error('[SX] evaluate: First item of list is not a function: ' + JSON.stringify(r) + '.');
            }
        }
    } else if (state.config.wrapExternalValue && Object.prototype.hasOwnProperty.call(r, 'value')) {
        r = r.value;
    } else if (Object.prototype.hasOwnProperty.call(r, 'symbol')) {
        r = resolveValueSymbol(state, r);
    } else if (Object.prototype.hasOwnProperty.call(r, 'car')) {
        if (Array.isArray(r.cdr)) {
            var a = r.cdr.slice(0);
            a.unshift(r.car);
            r = evaluate(state, a);
        } else {
            r = {
                car: evaluate(state, r.car),
                cdr: evaluate(state, r.cdr)
            };
        }
    } else if (Object.prototype.hasOwnProperty.call(r, 'dotted')) {
        r = [evaluate(state, r.dotted)];
    } else if (Object.prototype.hasOwnProperty.call(r, 'comment')) {
        r = state.config.strippedCommentValue;
    }
    return r;
}

/***/ }),

/***/ "./src/s-exp/operators/arithmetic.fn.ts":
/*!**********************************************!*\
  !*** ./src/s-exp/operators/arithmetic.fn.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.$$round = exports.$round = exports.$$ceil = exports.$ceil = exports.$$floor = exports.$floor = exports.$$avg = exports.$avg = exports.$$min = exports.$min = exports.$$max = exports.$max = exports.$$mod = exports.$mod = exports.$$div = exports.$div = exports.$$sup = exports.$sup = exports.$$mul = exports.$mul = exports.$$sub = exports.$sub = exports.$$add = exports.$add = exports.$$bitXor = exports.$bitXor = exports.$$bitOr = exports.$bitOr = exports.$$bitAnd = exports.$bitAnd = exports.$$bitNot = exports.$bitNot = undefined;

var _core = __webpack_require__(/*! ./core.fn */ "./src/s-exp/operators/core.fn.ts");

var $bitNot = exports.$bitNot = function $bitNot(state, name) {
    return function () {
        var car = _core.$$first.apply(undefined, arguments);
        return ~Number(car);
    };
}; // Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln
var $$bitNot = exports.$$bitNot = $bitNot(null, null);
var $bitAnd = exports.$bitAnd = function $bitAnd(state, name) {
    return function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var car = _core.$$first.apply(undefined, args);
        return args.slice(1).reduce(function (prev, curr) {
            return Number(prev) & Number(curr);
        }, Number(car));
    };
};
var $$bitAnd = exports.$$bitAnd = $bitAnd(null, null);
var $bitOr = exports.$bitOr = function $bitOr(state, name) {
    return function () {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        var car = _core.$$first.apply(undefined, args);
        return args.slice(1).reduce(function (prev, curr) {
            return Number(prev) | Number(curr);
        }, Number(car));
    };
};
var $$bitOr = exports.$$bitOr = $bitOr(null, null);
var $bitXor = exports.$bitXor = function $bitXor(state, name) {
    return function () {
        for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
        }

        var car = _core.$$first.apply(undefined, args);
        return args.slice(1).reduce(function (prev, curr) {
            return Number(prev) ^ Number(curr);
        }, Number(car));
    };
};
var $$bitXor = exports.$$bitXor = $bitXor(null, null);
var $add = exports.$add = function $add(state, name) {
    return function () {
        for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
        }

        return args.reduce(function (prev, curr) {
            return Number(prev) + Number(curr);
        }, 0);
    };
};
var $$add = exports.$$add = $add(null, null);
var $sub = exports.$sub = function $sub(state, name) {
    return function () {
        for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
            args[_key5] = arguments[_key5];
        }

        var car = _core.$$first.apply(undefined, args);
        var last = args.slice(1);
        if (last.length === 0) {
            // negate
            return -Number(car);
        } else {
            // subtract
            return args.slice(1).reduce(function (prev, curr) {
                return Number(prev) - Number(curr);
            }, Number(car));
        }
    };
};
var $$sub = exports.$$sub = $sub(null, null);
var $mul = exports.$mul = function $mul(state, name) {
    return function () {
        for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
            args[_key6] = arguments[_key6];
        }

        var car = _core.$$first.apply(undefined, args);
        return args.slice(1).reduce(function (prev, curr) {
            return Number(prev) * Number(curr);
        }, Number(car));
    };
};
var $$mul = exports.$$mul = $mul(null, null);
var $sup = exports.$sup = function $sup(state, name) {
    return function () {
        for (var _len7 = arguments.length, args = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
            args[_key7] = arguments[_key7];
        }

        var car = _core.$$first.apply(undefined, args);
        return args.slice(1).reduce(function (prev, curr) {
            return Math.pow(Number(prev), Number(curr));
        }, Number(car));
    };
};
var $$sup = exports.$$sup = $sup(null, null);
var $div = exports.$div = function $div(state, name) {
    return function () {
        for (var _len8 = arguments.length, args = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
            args[_key8] = arguments[_key8];
        }

        var car = _core.$$first.apply(undefined, args);
        return args.slice(1).reduce(function (prev, curr) {
            return Number(prev) / Number(curr);
        }, Number(car));
    };
};
var $$div = exports.$$div = $div(null, null);
var $mod = exports.$mod = function $mod(state, name) {
    return function () {
        for (var _len9 = arguments.length, args = Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
            args[_key9] = arguments[_key9];
        }

        var car = _core.$$first.apply(undefined, args);
        return args.slice(1).reduce(function (prev, curr) {
            return Number(prev) % Number(curr);
        }, Number(car));
    };
};
var $$mod = exports.$$mod = $mod(null, null);
var $max = exports.$max = function $max(state, name) {
    return function () {
        return Math.max.apply(Math, arguments);
    };
};
var $$max = exports.$$max = $max(null, null);
var $min = exports.$min = function $min(state, name) {
    return function () {
        return Math.min.apply(Math, arguments);
    };
};
var $$min = exports.$$min = $min(null, null);
var $avg = exports.$avg = function $avg(state, name) {
    return function () {
        for (var _len10 = arguments.length, args = Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
            args[_key10] = arguments[_key10];
        }

        return args.length > 0 ? args.reduce(function (prev, curr) {
            return Number(prev) + Number(curr);
        }, 0) / args.length : null;
    };
};
var $$avg = exports.$$avg = $avg(null, null);
var $floor = exports.$floor = function $floor(state, name) {
    return function () {
        return Math.floor(Number(_core.$$first.apply(undefined, arguments)));
    };
};
var $$floor = exports.$$floor = $floor(null, null);
var $ceil = exports.$ceil = function $ceil(state, name) {
    return function () {
        return Math.ceil(Number(_core.$$first.apply(undefined, arguments)));
    };
};
var $$ceil = exports.$$ceil = $ceil(null, null);
var $round = exports.$round = function $round(state, name) {
    return function () {
        return Math.round(Number(_core.$$first.apply(undefined, arguments)));
    };
};
var $$round = exports.$$round = $round(null, null);

/***/ }),

/***/ "./src/s-exp/operators/arithmetic.macro.ts":
/*!*************************************************!*\
  !*** ./src/s-exp/operators/arithmetic.macro.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln
var macros = exports.macros = [];
exports.default = macros;

/***/ }),

/***/ "./src/s-exp/operators/arithmetic.operator.ts":
/*!****************************************************!*\
  !*** ./src/s-exp/operators/arithmetic.operator.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.funcs = undefined;

var _arithmetic = __webpack_require__(/*! ./arithmetic.fn */ "./src/s-exp/operators/arithmetic.fn.ts");

var ops = _interopRequireWildcard(_arithmetic);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var funcs = exports.funcs = [{
    name: '$bit-not',
    fn: ops.$bitNot
}, {
    name: '$bit-and',
    fn: ops.$bitAnd
}, {
    name: '$bit-or',
    fn: ops.$bitOr
}, {
    name: '$bit-xor',
    fn: ops.$bitXor
}, {
    name: '+',
    fn: ops.$add
}, {
    name: '$add',
    fn: ops.$add
}, {
    name: '$sum',
    fn: ops.$add
}, {
    name: '-',
    fn: ops.$sub
}, {
    name: '$sub',
    fn: ops.$sub
}, {
    name: '$neg',
    fn: ops.$sub
}, {
    name: '*',
    fn: ops.$mul
}, {
    name: '$mul',
    fn: ops.$mul
}, {
    name: '**',
    fn: ops.$sup
}, {
    name: '$sup',
    fn: ops.$sup
}, {
    name: '/',
    fn: ops.$div
}, {
    name: '$div',
    fn: ops.$div
}, {
    name: '%',
    fn: ops.$mod
}, {
    name: '$mod',
    fn: ops.$mod
}, {
    name: '$max',
    fn: ops.$max
}, {
    name: '$min',
    fn: ops.$min
}, {
    name: '$avg',
    fn: ops.$avg
}, {
    name: '$floor',
    fn: ops.$floor
}, {
    name: '$ceil',
    fn: ops.$ceil
}, {
    name: '$round',
    fn: ops.$round
}]; // Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln
exports.default = funcs;

/***/ }),

/***/ "./src/s-exp/operators/arithmetic.symbol.ts":
/*!**************************************************!*\
  !*** ./src/s-exp/operators/arithmetic.symbol.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln
var symbols = exports.symbols = [];
exports.default = symbols;

/***/ }),

/***/ "./src/s-exp/operators/arithmetic.ts":
/*!*******************************************!*\
  !*** ./src/s-exp/operators/arithmetic.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = install;

var _arithmetic = __webpack_require__(/*! ./arithmetic.operator */ "./src/s-exp/operators/arithmetic.operator.ts");

var _arithmetic2 = _interopRequireDefault(_arithmetic);

var _arithmetic3 = __webpack_require__(/*! ./arithmetic.macro */ "./src/s-exp/operators/arithmetic.macro.ts");

var _arithmetic4 = _interopRequireDefault(_arithmetic3);

var _arithmetic5 = __webpack_require__(/*! ./arithmetic.symbol */ "./src/s-exp/operators/arithmetic.symbol.ts");

var _arithmetic6 = _interopRequireDefault(_arithmetic5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function install(config) {
    config.funcs = (config.funcs || []).concat(_arithmetic2.default);
    config.macros = (config.macros || []).concat(_arithmetic4.default);
    config.symbols = (config.symbols || []).concat(_arithmetic6.default);
    return config;
} // Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln

/***/ }),

/***/ "./src/s-exp/operators/core.fn.ts":
/*!****************************************!*\
  !*** ./src/s-exp/operators/core.fn.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.$$toNumber = exports.$toNumber = exports.$$toString = exports.$toString = exports.$$isInteger = exports.$isInteger = exports.$$isFinite = exports.$isFinite = exports.$$isNaN = exports.$isNaN = exports.$$isNumber = exports.$isNumber = exports.$$isString = exports.$isString = exports.$$isList = exports.$isList = exports.$$ge = exports.$ge = exports.$$gt = exports.$gt = exports.$$le = exports.$le = exports.$$lt = exports.$lt = exports.$$ambiguousNotEq = exports.$ambiguousNotEq = exports.$$ambiguousEq = exports.$ambiguousEq = exports.$$or = exports.$or = exports.$$and = exports.$and = exports.$$not = exports.$not = exports.$$boolean = exports.$boolean = exports.$__set = exports.$__let = exports.$__get = exports.$__for = exports.$__repeat = exports.$__doUntil = exports.$__until = exports.$__doWhile = exports.$__while = exports.$__cond = exports.$__if = exports.$__defun = exports.$__lambda = exports.$__globalScope = exports.$__scope = exports.$$list = exports.$list = exports.$$notEq = exports.$notEq = exports.$$eq = exports.$eq = exports.$$atom = exports.$atom = exports.$$firstAndSecond = exports.$firstAndSecond = exports.$$rest = exports.$rest = exports.$$second = exports.$second = exports.$$first = exports.$first = exports.$$cons = exports.$cons = exports.$$cdr = exports.$cdr = exports.$$car = exports.$car = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; // Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln


var _types = __webpack_require__(/*! ../types */ "./src/s-exp/types.ts");

var _evaluate = __webpack_require__(/*! ../evaluate */ "./src/s-exp/evaluate.ts");

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var $car = exports.$car = function $car(state, name) {
    return function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        // S expression: ($car atomOrNilOrNull arg2 ... argN)
        //  -> S expr  : null
        // S expression: ($car '(first second ... last) arg2 ... argN)
        //  -> S expr  : first
        var arg0 = args.slice(0, 1);
        var car = arg0.length === 1 && Array.isArray(arg0) ? arg0.slice(0, 1) : [];
        return car.length === 1 ? car[0] : null;
    };
};
var $$car = exports.$$car = $car(null, null);
var $cdr = exports.$cdr = function $cdr(state, name) {
    return function () {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        // S expression: ($cdr atomOrNilOrNull arg2 ... argN)
        //  -> S expr  : null
        // S expression: ($cdr '(first second ... last) arg2 ... argN)
        //  -> S expr  : (second ... last)
        // S expression: ($cdr '(first) arg2 ... argN)
        //  -> S expr  : null
        var arg0 = args.slice(0, 1);
        var cdr = arg0.length === 1 && Array.isArray(arg0) ? args.slice(1) : [];
        if (cdr.length === 0) {
            cdr = null;
        }
        return cdr;
    };
};
var $$cdr = exports.$$cdr = $cdr(null, null);
var $cons = exports.$cons = function $cons(state, name) {
    return function () {
        for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
        }

        // S expression: ($cons arg1 '(arg2-item1 ...) ... argN)
        //  -> S expr  : (arg1 arg2-item1 ...)
        // S expression: ($cons arg1 nilOrNull ... argN)
        //  -> S expr  : (arg1)
        // S expression: ($cons arg1 arg2 ... argN)
        //  -> S expr  : arg1.arg2
        var car = args.slice(0, 1);
        car = car.length === 1 ? car[0] : null;
        var cdr = args.slice(1, 2);
        cdr = cdr.length === 1 ? cdr[0] : null;
        if (Array.isArray(cdr)) {
            cdr.unshift(car);
            return cdr;
        } else if (cdr === null) {
            return [car];
        } else {
            return { car: car, cdr: cdr };
        }
    };
};
var $$cons = exports.$$cons = $cons(null, null);
var $first = exports.$first = function $first(state, name) {
    return function () {
        for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
        }

        // S expression: ($first first second ... last)
        //  -> S expr  : first
        // S expression: ($first)
        //  -> S expr  : null
        var car = args.slice(0, 1);
        return car.length === 1 ? car[0] : null;
    };
};
var $$first = exports.$$first = $first(null, null);
var $second = exports.$second = function $second(state, name) {
    return function () {
        for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
            args[_key5] = arguments[_key5];
        }

        // S expression: ($second first second ... last)
        //  -> S expr  : second
        // S expression: ($second first)
        //  -> S expr  : null
        var cdr = args.slice(1, 2);
        return cdr.length === 1 ? cdr[0] : null;
    };
};
var $$second = exports.$$second = $second(null, null);
var $rest = exports.$rest = function $rest(state, name) {
    return function () {
        for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
            args[_key6] = arguments[_key6];
        }

        // S expression: ($rest first second ... last)
        //  -> S expr  : (second ... last)
        // S expression: ($rest first)
        //  -> S expr  : null
        var cdr = args.slice(1);
        return 0 < cdr.length ? cdr : null;
    };
};
var $$rest = exports.$$rest = $rest(null, null);
var $firstAndSecond = exports.$firstAndSecond = function $firstAndSecond(state, name) {
    return function () {
        for (var _len7 = arguments.length, args = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
            args[_key7] = arguments[_key7];
        }

        // S expression: ($car first second ... last)
        //  -> S expr  : first.second
        var car = args.slice(0, 1);
        car = car.length === 1 ? car[0] : null;
        var cdr = args.slice(1, 2);
        cdr = cdr.length === 1 ? cdr[0] : null;
        return { car: car, cdr: cdr };
    };
};
var $$firstAndSecond = exports.$$firstAndSecond = $firstAndSecond(null, null);
var $atom = exports.$atom = function $atom(state, name) {
    return function () {
        for (var _len8 = arguments.length, args = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
            args[_key8] = arguments[_key8];
        }

        // S expression: ($atom arg1 ...)
        //  -> (if arg1 is list or dotted pair)  S expr  : false
        //  -> (if arg1 is nil or anything else) S expr  : true
        var car = args.slice(0, 1);
        car = car.length === 1 ? car[0] : null;
        if (car === null || car === void 0) {
            return true;
        }
        if (Array.isArray(car)) {
            if (car.length === 0) return true;else return false;
        }
        switch (typeof car === 'undefined' ? 'undefined' : _typeof(car)) {
            case 'number':
            case 'string':
            case 'function':
                return true;
            case 'object':
                return (0, _types.isSymbol)(car);
        }
        return false;
    };
};
var $$atom = exports.$$atom = $atom(null, null);
var $eq = exports.$eq = function $eq(state, name) {
    return function () {
        // S expression: ($eq arg1 arg2 ...)
        //  -> (if arg1 === arg2)  S expr  : true
        //  -> (else)              S expr  : false
        var _$$firstAndSecond = $$firstAndSecond.apply(undefined, arguments),
            car = _$$firstAndSecond.car,
            cdr = _$$firstAndSecond.cdr;

        return car === cdr;
    };
};
var $$eq = exports.$$eq = $eq(null, null);
var $notEq = exports.$notEq = function $notEq(state, name) {
    return function () {
        // S expression: ($not-eq arg1 arg2 ...)
        //  -> (if arg1 !== arg2)  S expr  : true
        //  -> (else)              S expr  : false
        var _$$firstAndSecond2 = $$firstAndSecond.apply(undefined, arguments),
            car = _$$firstAndSecond2.car,
            cdr = _$$firstAndSecond2.cdr;

        return car !== cdr;
    };
};
var $$notEq = exports.$$notEq = $notEq(null, null);
var $list = exports.$list = function $list(state, name) {
    return function () {
        for (var _len9 = arguments.length, args = Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
            args[_key9] = arguments[_key9];
        }

        return (
            // S expression: ($list arg1 ... argN)
            //  -> S expr  : (arg1 ... argN)
            args.slice(0)
        );
    };
};
var $$list = exports.$$list = $list(null, null);
// tslint:disable-next-line:variable-name
var $__scope = exports.$__scope = function $__scope(state, name) {
    return function () {
        for (var _len10 = arguments.length, args = Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
            args[_key10] = arguments[_key10];
        }

        // S expression: ($__scope isBlockLocal returnMultiple '((name value) | name ...) 'expr1 ... 'exprN)
        //  -> (if returnMultiple)  S expr  : [expr1 ... exprN]
        //  -> (else)               S expr  : exprN
        var isBlockLocal = $$first.apply(undefined, args);
        var returnMultiple = $$second.apply(undefined, args);

        var _$$firstAndSecond3 = $$firstAndSecond.apply(undefined, _toConsumableArray(args.slice(2))),
            car = _$$firstAndSecond3.car,
            cdr = _$$firstAndSecond3.cdr;

        var r = null;
        try {
            var scope = {};
            if (Array.isArray(car)) {
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = car[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var x = _step.value;

                        if (Array.isArray(x)) {
                            var kv = $$firstAndSecond.apply(undefined, _toConsumableArray(x));
                            var kvSym = (0, _types.isSymbol)(kv.car);
                            scope[kvSym ? kvSym.symbol : String(kv.car)] = (0, _evaluate.evaluate)(state, kv.cdr);
                        } else {
                            var xSym = (0, _types.isSymbol)(x);
                            scope[xSym ? xSym.symbol : String(x)] = null;
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
            (0, _evaluate.installScope)(state, scope, isBlockLocal);
            if (4 < args.length) {
                if (returnMultiple) {
                    r = [];
                    var _iteratorNormalCompletion2 = true;
                    var _didIteratorError2 = false;
                    var _iteratorError2 = undefined;

                    try {
                        for (var _iterator2 = args.slice(3)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                            var _x = _step2.value;

                            r.push((0, _evaluate.evaluate)(state, _x));
                        }
                    } catch (err) {
                        _didIteratorError2 = true;
                        _iteratorError2 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                _iterator2.return();
                            }
                        } finally {
                            if (_didIteratorError2) {
                                throw _iteratorError2;
                            }
                        }
                    }
                } else {
                    var _iteratorNormalCompletion3 = true;
                    var _didIteratorError3 = false;
                    var _iteratorError3 = undefined;

                    try {
                        for (var _iterator3 = args.slice(3)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                            var _x2 = _step3.value;

                            r = (0, _evaluate.evaluate)(state, _x2);
                        }
                    } catch (err) {
                        _didIteratorError3 = true;
                        _iteratorError3 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion3 && _iterator3.return) {
                                _iterator3.return();
                            }
                        } finally {
                            if (_didIteratorError3) {
                                throw _iteratorError3;
                            }
                        }
                    }
                }
            } else {
                r = (0, _evaluate.evaluate)(state, cdr);
            }
        } finally {
            (0, _evaluate.uninstallScope)(state);
        }
        return r;
    };
};
// tslint:disable-next-line:variable-name
var $__globalScope = exports.$__globalScope = function $__globalScope(state, name) {
    return function () {
        for (var _len11 = arguments.length, args = Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
            args[_key11] = arguments[_key11];
        }

        // S expression: ($__global returnMultiple 'expr1 ... 'exprN)
        //  -> (if returnMultiple)  S expr  : [expr1 ... exprN]
        //  -> (else)               S expr  : exprN
        var returnMultiple = $$first.apply(undefined, args);

        var _$$firstAndSecond4 = $$firstAndSecond.apply(undefined, _toConsumableArray(args.slice(2))),
            car = _$$firstAndSecond4.car,
            cdr = _$$firstAndSecond4.cdr;

        var r = null;
        try {
            (0, _evaluate.installScope)(state, (0, _evaluate.getGlobalScope)(state), true);
            if (2 < args.length) {
                if (returnMultiple) {
                    r = [];
                    var _iteratorNormalCompletion4 = true;
                    var _didIteratorError4 = false;
                    var _iteratorError4 = undefined;

                    try {
                        for (var _iterator4 = args.slice(1)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                            var x = _step4.value;

                            r.push((0, _evaluate.evaluate)(state, x));
                        }
                    } catch (err) {
                        _didIteratorError4 = true;
                        _iteratorError4 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion4 && _iterator4.return) {
                                _iterator4.return();
                            }
                        } finally {
                            if (_didIteratorError4) {
                                throw _iteratorError4;
                            }
                        }
                    }
                } else {
                    var _iteratorNormalCompletion5 = true;
                    var _didIteratorError5 = false;
                    var _iteratorError5 = undefined;

                    try {
                        for (var _iterator5 = args.slice(1)[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                            var _x3 = _step5.value;

                            r = (0, _evaluate.evaluate)(state, _x3);
                        }
                    } catch (err) {
                        _didIteratorError5 = true;
                        _iteratorError5 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion5 && _iterator5.return) {
                                _iterator5.return();
                            }
                        } finally {
                            if (_didIteratorError5) {
                                throw _iteratorError5;
                            }
                        }
                    }
                }
            } else {
                r = (0, _evaluate.evaluate)(state, cdr);
            }
        } finally {
            (0, _evaluate.uninstallScope)(state);
        }
        return r;
    };
};
// tslint:disable-next-line:variable-name
var $__lambda = exports.$__lambda = function $__lambda(state, name) {
    return function () {
        for (var _len12 = arguments.length, args = Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
            args[_key12] = arguments[_key12];
        }

        // S expression: ($__lambda '(sym1 ... symN) 'expr1 ... 'exprN)
        //  -> S expr  : fn
        if (args.length < 2) {
            throw new Error('[SX] $__lambda: Invalid argument length: expected: ' + 3 + ' / args: ' + args.length + '.');
        }
        var formalArgs = args[0];
        if (!Array.isArray(formalArgs)) {
            throw new Error('[SX] $__lambda: Invalid argument(s): args[0] is not array.');
        }
        var _iteratorNormalCompletion6 = true;
        var _didIteratorError6 = false;
        var _iteratorError6 = undefined;

        try {
            for (var _iterator6 = formalArgs[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                var fa = _step6.value;

                if (!(0, _types.isSymbol)(fa)) {
                    throw new Error('[SX] $__lambda: Invalid argument(s): item(s) of args[0] is not symbol.');
                }
            }
        } catch (err) {
            _didIteratorError6 = true;
            _iteratorError6 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion6 && _iterator6.return) {
                    _iterator6.return();
                }
            } finally {
                if (_didIteratorError6) {
                    throw _iteratorError6;
                }
            }
        }

        var fnBody = args.slice(1);
        if (state.config.enableTailCallOptimization) {
            fnBody = (0, _evaluate.optimizeTailCall)(state, formalArgs, fnBody);
        }
        var fn = function fn() {
            for (var _len13 = arguments.length, actualArgs = Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
                actualArgs[_key13] = arguments[_key13];
            }

            if (actualArgs.length < formalArgs.length) {
                throw new Error('[SX] func call: Actual args too short: actual ' + actualArgs.length + ' / formal ' + formalArgs.length + '.');
            }
            return $__scope(state, name).apply(undefined, [false, false, [[state.config.reservedNames.self, fn]].concat(_toConsumableArray(formalArgs.map(function (x, index) {
                return [x.symbol, actualArgs[index]];
            })))].concat(_toConsumableArray(fnBody)));
        };
        return fn;
    };
};
// tslint:disable-next-line:variable-name
var $__defun = exports.$__defun = function $__defun(state, name) {
    return function () {
        for (var _len14 = arguments.length, args = Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
            args[_key14] = arguments[_key14];
        }

        // S expression: ($__defun 'name '(sym1 ... symN) 'expr ... 'expr)
        //  -> S expr  : fn
        var car = $$first.apply(undefined, args);
        if (args.length < 3) {
            throw new Error('[SX] $__defun: Invalid argument length: expected: ' + 3 + ' / args: ' + args.length + '.');
        }
        var _fn = $__lambda(state, name).apply(undefined, _toConsumableArray(args.slice(1)));
        state.funcMap.set(car.symbol, {
            name: car.symbol,
            fn: function fn(st, nm) {
                return _fn;
            }
        });
        return _fn;
    };
};
// tslint:disable-next-line:variable-name
var $__if = exports.$__if = function $__if(state, name) {
    return function () {
        // S expression: ($__if condition 't-expr 'f-expr)
        //  -> (if condition is true ) S expr  : t-expr
        //  -> (if condition is false) S expr  : f-expr
        var car = $$first.apply(undefined, arguments);
        var r = [];
        if ($$boolean(car)) {
            r = (0, _evaluate.evaluate)(state, arguments.length <= 1 ? undefined : arguments[1]);
        } else {
            r = (0, _evaluate.evaluate)(state, arguments.length <= 2 ? undefined : arguments[2]);
        }
        return r;
    };
};
// tslint:disable-next-line:variable-name
var $__cond = exports.$__cond = function $__cond(state, name) {
    return function () {
        // S expression: ($__cond 'cond1 'expr1 ... 'condN 'exprN)
        //  -> (if (eval condI) is true ) S expr  : exprI
        //  -> (if no matched)            S expr  : null
        for (var i = 0; i < arguments.length - 1; i += 2) {
            var c = arguments.length <= i ? undefined : arguments[i];
            var x = arguments.length <= i + 1 ? undefined : arguments[i + 1];
            if ($$boolean((0, _evaluate.evaluate)(state, c))) {
                return (0, _evaluate.evaluate)(state, x);
            }
        }
        return null;
    };
};
// tslint:disable-next-line:variable-name
var $__while = exports.$__while = function $__while(state, name) {
    return function () {
        for (var _len15 = arguments.length, args = Array(_len15), _key15 = 0; _key15 < _len15; _key15++) {
            args[_key15] = arguments[_key15];
        }

        // S expression: ($__while 'condition 'expr1 'exprN)
        //  -> (if condition is true at least 1 or more times) S expr  : exprN
        //  -> (else)                                          S expr  : null
        var car = $$first.apply(undefined, args);
        var cdr = args.slice(1);
        var r = null;
        while ($$boolean((0, _evaluate.evaluate)(state, car))) {
            var _iteratorNormalCompletion7 = true;
            var _didIteratorError7 = false;
            var _iteratorError7 = undefined;

            try {
                for (var _iterator7 = cdr[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                    var x = _step7.value;

                    r = (0, _evaluate.evaluate)(state, x);
                }
            } catch (err) {
                _didIteratorError7 = true;
                _iteratorError7 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion7 && _iterator7.return) {
                        _iterator7.return();
                    }
                } finally {
                    if (_didIteratorError7) {
                        throw _iteratorError7;
                    }
                }
            }
        }
        return r;
    };
};
// tslint:disable-next-line:variable-name
var $__doWhile = exports.$__doWhile = function $__doWhile(state, name) {
    return function () {
        for (var _len16 = arguments.length, args = Array(_len16), _key16 = 0; _key16 < _len16; _key16++) {
            args[_key16] = arguments[_key16];
        }

        // S expression: ($__do-while 'condition 'expr1 'exprN)
        //  -> (if condition is true at least 1 or more times) S expr  : exprN
        //  -> (else)                                          S expr  : null
        var car = $$first.apply(undefined, args);
        var cdr = args.slice(1);
        var r = null;
        do {
            var _iteratorNormalCompletion8 = true;
            var _didIteratorError8 = false;
            var _iteratorError8 = undefined;

            try {
                for (var _iterator8 = cdr[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                    var x = _step8.value;

                    r = (0, _evaluate.evaluate)(state, x);
                }
            } catch (err) {
                _didIteratorError8 = true;
                _iteratorError8 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion8 && _iterator8.return) {
                        _iterator8.return();
                    }
                } finally {
                    if (_didIteratorError8) {
                        throw _iteratorError8;
                    }
                }
            }
        } while ($$boolean((0, _evaluate.evaluate)(state, car)));
        return r;
    };
};
// tslint:disable-next-line:variable-name
var $__until = exports.$__until = function $__until(state, name) {
    return function () {
        for (var _len17 = arguments.length, args = Array(_len17), _key17 = 0; _key17 < _len17; _key17++) {
            args[_key17] = arguments[_key17];
        }

        // S expression: ($__until 'condition 'expr1 'exprN)
        //  -> (if condition is true at least 1 or more times) S expr  : exprN
        //  -> (else)                                          S expr  : null
        var car = $$first.apply(undefined, args);
        var cdr = args.slice(1);
        var r = null;
        while ($$not((0, _evaluate.evaluate)(state, car))) {
            var _iteratorNormalCompletion9 = true;
            var _didIteratorError9 = false;
            var _iteratorError9 = undefined;

            try {
                for (var _iterator9 = cdr[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                    var x = _step9.value;

                    r = (0, _evaluate.evaluate)(state, x);
                }
            } catch (err) {
                _didIteratorError9 = true;
                _iteratorError9 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion9 && _iterator9.return) {
                        _iterator9.return();
                    }
                } finally {
                    if (_didIteratorError9) {
                        throw _iteratorError9;
                    }
                }
            }
        }
        return r;
    };
};
// tslint:disable-next-line:variable-name
var $__doUntil = exports.$__doUntil = function $__doUntil(state, name) {
    return function () {
        for (var _len18 = arguments.length, args = Array(_len18), _key18 = 0; _key18 < _len18; _key18++) {
            args[_key18] = arguments[_key18];
        }

        // S expression: ($__do-until 'condition 'expr1 'exprN)
        //  -> (if condition is true at least 1 or more times) S expr  : exprN
        //  -> (else)                                          S expr  : null
        var car = $$first.apply(undefined, args);
        var cdr = args.slice(1);
        var r = null;
        do {
            var _iteratorNormalCompletion10 = true;
            var _didIteratorError10 = false;
            var _iteratorError10 = undefined;

            try {
                for (var _iterator10 = cdr[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
                    var x = _step10.value;

                    r = (0, _evaluate.evaluate)(state, x);
                }
            } catch (err) {
                _didIteratorError10 = true;
                _iteratorError10 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion10 && _iterator10.return) {
                        _iterator10.return();
                    }
                } finally {
                    if (_didIteratorError10) {
                        throw _iteratorError10;
                    }
                }
            }
        } while ($$not((0, _evaluate.evaluate)(state, car)));
        return r;
    };
};
// tslint:disable-next-line:variable-name
var $__repeat = exports.$__repeat = function $__repeat(state, name) {
    return function () {
        for (var _len19 = arguments.length, args = Array(_len19), _key19 = 0; _key19 < _len19; _key19++) {
            args[_key19] = arguments[_key19];
        }

        // S expression: ($__repeat 'i n-times 'expr1 'exprN)
        //  -> (if n > 0) S expr  : exprN
        //  -> (else)     S expr  : null
        var sym = (0, _types.isSymbol)($$first.apply(undefined, args));
        if (!sym) {
            throw new Error('[SX] $__repeat: Invalid argument(s): item(s) of args[0] is not symbol.');
        }
        var scope = (0, _evaluate.resolveValueSymbolScope)(state, sym, false);
        var n = Number($$second.apply(undefined, args));
        var cdr = args.slice(2);
        var r = null;
        for (var i = 0; i < n; i++) {
            scope[sym.symbol] = i;
            var _iteratorNormalCompletion11 = true;
            var _didIteratorError11 = false;
            var _iteratorError11 = undefined;

            try {
                for (var _iterator11 = cdr[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
                    var x = _step11.value;

                    r = (0, _evaluate.evaluate)(state, x);
                }
            } catch (err) {
                _didIteratorError11 = true;
                _iteratorError11 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion11 && _iterator11.return) {
                        _iterator11.return();
                    }
                } finally {
                    if (_didIteratorError11) {
                        throw _iteratorError11;
                    }
                }
            }
        }
        return r;
    };
};
// tslint:disable-next-line:variable-name
var $__for = exports.$__for = function $__for(state, name) {
    return function () {
        for (var _len20 = arguments.length, args = Array(_len20), _key20 = 0; _key20 < _len20; _key20++) {
            args[_key20] = arguments[_key20];
        }

        // S expression: ($__for 'x list 'expr1 'exprN)
        //  -> (if list.length > 0) S expr  : exprN
        //  -> (else)               S expr  : null
        var sym = (0, _types.isSymbol)($$first.apply(undefined, args));
        if (!sym) {
            throw new Error('[SX] $__for: Invalid argument(s): item(s) of args[0] is not symbol.');
        }
        var scope = (0, _evaluate.resolveValueSymbolScope)(state, sym, false);
        var list = Number($$second.apply(undefined, args));
        if (!Array.isArray(list)) {
            throw new Error('[SX] $__for: Invalid argument(s): item(s) of args[1] is not array.');
        }
        var cdr = args.slice(2);
        var r = null;
        var _iteratorNormalCompletion12 = true;
        var _didIteratorError12 = false;
        var _iteratorError12 = undefined;

        try {
            for (var _iterator12 = list[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
                var q = _step12.value;

                scope[sym.symbol] = q;
                var _iteratorNormalCompletion13 = true;
                var _didIteratorError13 = false;
                var _iteratorError13 = undefined;

                try {
                    for (var _iterator13 = cdr[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
                        var x = _step13.value;

                        r = (0, _evaluate.evaluate)(state, x);
                    }
                } catch (err) {
                    _didIteratorError13 = true;
                    _iteratorError13 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion13 && _iterator13.return) {
                            _iterator13.return();
                        }
                    } finally {
                        if (_didIteratorError13) {
                            throw _iteratorError13;
                        }
                    }
                }
            }
        } catch (err) {
            _didIteratorError12 = true;
            _iteratorError12 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion12 && _iterator12.return) {
                    _iterator12.return();
                }
            } finally {
                if (_didIteratorError12) {
                    throw _iteratorError12;
                }
            }
        }

        return r;
    };
};
// tslint:disable-next-line:variable-name
var $__get = exports.$__get = function $__get(state, name) {
    return function () {
        for (var _len21 = arguments.length, args = Array(_len21), _key21 = 0; _key21 < _len21; _key21++) {
            args[_key21] = arguments[_key21];
        }

        // S expression: ($__get 'nameOrIndex1 ... 'nameOrIndexN)
        //  -> S expr  : any
        if (args.length === 0) return null;
        var sym = (0, _types.isSymbol)(args[0]);
        var v = (0, _evaluate.resolveValueSymbol)(state, sym ? sym : { symbol: String(args[0]) });
        for (var i = 1; i < args.length; i++) {
            switch (_typeof(args[i])) {
                case 'object':
                    sym = (0, _types.isSymbol)(args[i]);
                    if (sym) {
                        v = v[(0, _evaluate.evaluate)(state, sym)];
                    } else {
                        throw new Error('[SX] $__get: Invalid argument(s): invalid name path.');
                    }
                    break;
                case 'string':
                    v = v[args[i]];
                    break;
                case 'number':
                    if (args[i] >= 0) {
                        v = v[args[i]];
                    } else {
                        v = v[v.length + args[i]];
                    }
                    break;
                default:
                    throw new Error('[SX] $__get: Invalid argument(s): invalid name path.');
            }
        }
        return v;
    };
};
// tslint:disable-next-line:variable-name
var $__let = exports.$__let = function $__let(state, name) {
    return function () {
        // S expression: ($__let 'nameStrOrSymbol expr)
        //  -> S expr  : any
        if (arguments.length < 2) return null;
        var sym = (0, _types.isSymbol)($$first.apply(undefined, arguments));
        if (!sym) {
            if (typeof (arguments.length <= 0 ? undefined : arguments[0]) === 'string') {
                sym = { symbol: arguments.length <= 0 ? undefined : arguments[0] };
            } else {
                throw new Error('[SX] $__let: Invalid argument(s): invalid name.');
            }
        }
        var scope = (0, _evaluate.resolveValueSymbolScope)(state, sym, false);
        scope[sym.symbol] = arguments.length <= 1 ? undefined : arguments[1];
        return arguments.length <= 1 ? undefined : arguments[1];
    };
};
// tslint:disable-next-line:variable-name
var $__set = exports.$__set = function $__set(state, name) {
    return function () {
        // S expression: ($__set 'nameOrListOfNameOrIndex expr)
        //  -> S expr  : any
        if (arguments.length < 2) return null;
        var path = [];
        if (Array.isArray(arguments.length <= 0 ? undefined : arguments[0])) {
            path = arguments.length <= 0 ? undefined : arguments[0];
        } else {
            path.push(arguments.length <= 0 ? undefined : arguments[0]);
        }
        var sym = (0, _types.isSymbol)(path[0]);
        if (!sym) {
            if (typeof path[0] === 'string') {
                sym = { symbol: path[0] };
            } else {
                throw new Error('[SX] $__set: Invalid argument(s): invalid name.');
            }
        }
        var scope = (0, _evaluate.resolveValueSymbolScope)(state, sym, true);
        if (scope === null) {
            throw new Error('[SX] $__set: Unresolved symbol: ' + sym.symbol + '.');
        }
        var i = 0;
        for (; i < path.length - 1; i++) {
            switch (_typeof(path[i])) {
                case 'object':
                    sym = (0, _types.isSymbol)(path[i]);
                    if (sym) {
                        scope = scope[(0, _evaluate.evaluate)(state, sym)];
                    } else {
                        throw new Error('[SX] $__set: Invalid argument(s): invalid name.');
                    }
                    break;
                case 'string':
                    scope = scope[path[i]];
                    break;
                case 'number':
                    if (path[i] >= 0) {
                        scope = scope[path[i]];
                    } else {
                        scope = scope[scope.length + path[i]];
                    }
                    break;
                default:
                    throw new Error('[SX] $__set: Invalid argument(s): invalid name.');
            }
        }
        for (; i < path.length; i++) {
            switch (_typeof(path[i])) {
                case 'object':
                    sym = (0, _types.isSymbol)(path[i]);
                    if (sym) {
                        scope[(0, _evaluate.evaluate)(state, sym)] = arguments.length <= 1 ? undefined : arguments[1];
                    } else {
                        throw new Error('[SX] $__set: Invalid argument(s): invalid name.');
                    }
                    break;
                case 'string':
                    scope[path[i]] = arguments.length <= 1 ? undefined : arguments[1];
                    break;
                case 'number':
                    if (path[i] >= 0) {
                        scope[path[i]] = arguments.length <= 1 ? undefined : arguments[1];
                    } else {
                        scope[scope.length + path[i]] = arguments.length <= 1 ? undefined : arguments[1];
                    }
                    break;
                default:
                    throw new Error('[SX] $__set: Invalid argument(s): invalid name.');
            }
        }
        return arguments.length <= 1 ? undefined : arguments[1];
    };
};
var $boolean = exports.$boolean = function $boolean(state, name) {
    return function () {
        var car = $$first.apply(undefined, arguments);
        if (Array.isArray(car) && car.length === 0) return false;else return Boolean(car);
    };
};
var $$boolean = exports.$$boolean = $boolean(null, null);
var $not = exports.$not = function $not(state, name) {
    return function () {
        return !$$boolean.apply(undefined, arguments);
    };
};
var $$not = exports.$$not = $not(null, null);
var $and = exports.$and = function $and(state, name) {
    return function () {
        for (var _len22 = arguments.length, args = Array(_len22), _key22 = 0; _key22 < _len22; _key22++) {
            args[_key22] = arguments[_key22];
        }

        return args.reduce(function (prev, curr) {
            return prev && curr;
        }, true);
    };
};
var $$and = exports.$$and = $and(null, null);
var $or = exports.$or = function $or(state, name) {
    return function () {
        for (var _len23 = arguments.length, args = Array(_len23), _key23 = 0; _key23 < _len23; _key23++) {
            args[_key23] = arguments[_key23];
        }

        return args.reduce(function (prev, curr) {
            return prev || curr;
        }, false);
    };
};
var $$or = exports.$$or = $or(null, null);
var $ambiguousEq = exports.$ambiguousEq = function $ambiguousEq(state, name) {
    return function () {
        var _$$firstAndSecond5 = $$firstAndSecond.apply(undefined, arguments),
            car = _$$firstAndSecond5.car,
            cdr = _$$firstAndSecond5.cdr;

        if (Array.isArray(car) && car.length === 0) car = null;
        if (Array.isArray(cdr) && cdr.length === 0) cdr = null;
        if (car === void 0) car = null;
        if (cdr === void 0) cdr = null;
        // tslint:disable-next-line:triple-equals
        return car == cdr;
    };
};
var $$ambiguousEq = exports.$$ambiguousEq = $ambiguousEq(null, null);
var $ambiguousNotEq = exports.$ambiguousNotEq = function $ambiguousNotEq(state, name) {
    return function () {
        return !$$ambiguousEq.apply(undefined, arguments);
    };
};
var $$ambiguousNotEq = exports.$$ambiguousNotEq = $ambiguousNotEq(null, null);
var $lt = exports.$lt = function $lt(state, name) {
    return function () {
        var _$$firstAndSecond6 = $$firstAndSecond.apply(undefined, arguments),
            car = _$$firstAndSecond6.car,
            cdr = _$$firstAndSecond6.cdr;

        return Number(car) < Number(cdr);
    };
};
var $$lt = exports.$$lt = $lt(null, null);
var $le = exports.$le = function $le(state, name) {
    return function () {
        var _$$firstAndSecond7 = $$firstAndSecond.apply(undefined, arguments),
            car = _$$firstAndSecond7.car,
            cdr = _$$firstAndSecond7.cdr;

        return Number(car) <= Number(cdr);
    };
};
var $$le = exports.$$le = $le(null, null);
var $gt = exports.$gt = function $gt(state, name) {
    return function () {
        var _$$firstAndSecond8 = $$firstAndSecond.apply(undefined, arguments),
            car = _$$firstAndSecond8.car,
            cdr = _$$firstAndSecond8.cdr;

        return Number(car) > Number(cdr);
    };
};
var $$gt = exports.$$gt = $gt(null, null);
var $ge = exports.$ge = function $ge(state, name) {
    return function () {
        var _$$firstAndSecond9 = $$firstAndSecond.apply(undefined, arguments),
            car = _$$firstAndSecond9.car,
            cdr = _$$firstAndSecond9.cdr;

        return Number(car) >= Number(cdr);
    };
};
var $$ge = exports.$$ge = $ge(null, null);
var $isList = exports.$isList = function $isList(state, name) {
    return function () {
        return Array.isArray($$first.apply(undefined, arguments));
    };
};
var $$isList = exports.$$isList = $isList(null, null);
var $isString = exports.$isString = function $isString(state, name) {
    return function () {
        return typeof $$first.apply(undefined, arguments) === 'string';
    };
};
var $$isString = exports.$$isString = $isString(null, null);
var $isNumber = exports.$isNumber = function $isNumber(state, name) {
    return function () {
        return typeof $$first.apply(undefined, arguments) === 'number';
    };
};
var $$isNumber = exports.$$isNumber = $isNumber(null, null);
var $isNaN = exports.$isNaN = function $isNaN(state, name) {
    return function () {
        return Number.isNaN(Number($$first.apply(undefined, arguments)));
    };
};
var $$isNaN = exports.$$isNaN = $isNaN(null, null);
var $isFinite = exports.$isFinite = function $isFinite(state, name) {
    return function () {
        return Number.isFinite(Number($$first.apply(undefined, arguments)));
    };
};
var $$isFinite = exports.$$isFinite = $isFinite(null, null);
var $isInteger = exports.$isInteger = function $isInteger(state, name) {
    return function () {
        return Number.isInteger(Number($$first.apply(undefined, arguments)));
    };
};
var $$isInteger = exports.$$isInteger = $isInteger(null, null);
var $toString = exports.$toString = function $toString(state, name) {
    return function () {
        return String($$first.apply(undefined, arguments));
    };
};
var $$toString = exports.$$toString = $toString(null, null);
var $toNumber = exports.$toNumber = function $toNumber(state, name) {
    return function () {
        return Number($$first.apply(undefined, arguments));
    };
};
var $$toNumber = exports.$$toNumber = $toNumber(null, null);

/***/ }),

/***/ "./src/s-exp/operators/core.macro.ts":
/*!*******************************************!*\
  !*** ./src/s-exp/operators/core.macro.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.macros = undefined;

var _types = __webpack_require__(/*! ../types */ "./src/s-exp/types.ts");

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } // Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln


var macros = exports.macros = [{
    name: '$scope',
    fn: function fn(state, name) {
        return function (list) {
            // S expression: ($scope isBlockLocal returnMultiple ((name value) | name ...) expr ... expr)
            //  -> S expr  : ($__scope isBlockLocal returnMultiple '((name value) | name ...) 'expr ... 'expr)
            return [{ symbol: '$__scope' }, list[1], list[2]].concat(_toConsumableArray(list.slice(3).map(function (x) {
                return (0, _types.quote)(state, x);
            })));
        };
    }
}, {
    name: '$local',
    fn: function fn(state, name) {
        return function (list) {
            // S expression: ($local ((name value) | name ...) expr ... expr)
            //  -> S expr  : ($__scope isBlockLocal=true returnMultiple=false '((name value) | name ...) 'expr ... 'expr)
            return [{ symbol: '$__scope' }, true, false].concat(_toConsumableArray(list.slice(1).map(function (x) {
                return (0, _types.quote)(state, x);
            })));
        };
    }
}, {
    name: '$global',
    fn: function fn(state, name) {
        return function (list) {
            // S expression: ($__global expr1 ... exprN)
            //  -> S expr  : ($__global returnMultiple=false 'expr ... 'expr)
            return [{ symbol: '$__scope' }, true, false].concat(_toConsumableArray(list.slice(1).map(function (x) {
                return (0, _types.quote)(state, x);
            })));
        };
    }
}, {
    name: '$clisp-let',
    fn: function fn(state, name) {
        return function (list) {
            // S expression: ($clisp-let ((name value) | name ...) expr ... expr)
            //  -> S expr  : ($__scope isBlockLocal=true returnMultiple=false '((name value) | name ...) 'expr ... 'expr)
            return [{ symbol: '$__scope' }, true, false].concat(_toConsumableArray(list.slice(1).map(function (x) {
                return (0, _types.quote)(state, x);
            })));
        };
    }
}, {
    name: '$lambda',
    fn: function fn(state, name) {
        return function (list) {
            // S expression: ($lambda (sym1 ... symN) expr ... expr)
            //  -> S expr  : ($__lambda '(sym1 ... symN) 'expr ... 'expr)
            return [{ symbol: '$__lambda' }].concat(_toConsumableArray(list.slice(1).map(function (x) {
                return (0, _types.quote)(state, x);
            })));
        };
    }
}, {
    name: '$defun',
    fn: function fn(state, name) {
        return function (list) {
            // S expression: ($defun name (sym1 ... symN) expr ... expr)
            //  -> S expr  : ($__defun 'name '(sym1 ... symN) 'expr ... 'expr)
            return [{ symbol: '$__defun' }].concat(_toConsumableArray(list.slice(1).map(function (x) {
                return (0, _types.quote)(state, x);
            })));
        };
    }
}, {
    name: '$if',
    fn: function fn(state, name) {
        return function (list) {
            // S expression: ($if cond t-expr f-expr)
            //  -> S expr  : ($__if cond 't-expr 'f-expr)
            return [{ symbol: '$__if' }, list[1]].concat(_toConsumableArray(list.slice(2).map(function (x) {
                return (0, _types.quote)(state, x);
            })));
        };
    }
}, {
    name: '$cond',
    fn: function fn(state, name) {
        return function (list) {
            // S expression: ($cond cond1 expr1 ... condN exprN)
            //  -> S expr  : ($__cond 'cond1 'expr1 ... 'condN 'exprN)
            return [{ symbol: '$__cond' }].concat(_toConsumableArray(list.slice(1).map(function (x) {
                return (0, _types.quote)(state, x);
            })));
        };
    }
}, {
    name: '$while',
    fn: function fn(state, name) {
        return function (list) {
            // S expression: ($while condition expr1 exprN)
            //  -> S expr  : ($__while 'condition 'expr1 'exprN)
            return [{ symbol: '$__while' }].concat(_toConsumableArray(list.slice(1).map(function (x) {
                return (0, _types.quote)(state, x);
            })));
        };
    }
}, {
    name: '$do-while',
    fn: function fn(state, name) {
        return function (list) {
            // S expression: ($do-while condition expr1 exprN)
            //  -> S expr  : ($__do-while 'condition 'expr1 'exprN)
            return [{ symbol: '$__do-while' }].concat(_toConsumableArray(list.slice(1).map(function (x) {
                return (0, _types.quote)(state, x);
            })));
        };
    }
}, {
    name: '$until',
    fn: function fn(state, name) {
        return function (list) {
            // S expression: ($until condition expr1 exprN)
            //  -> S expr  : ($__until 'condition 'expr1 'exprN)
            return [{ symbol: '$__until' }].concat(_toConsumableArray(list.slice(1).map(function (x) {
                return (0, _types.quote)(state, x);
            })));
        };
    }
}, {
    name: '$do-until',
    fn: function fn(state, name) {
        return function (list) {
            // S expression: ($do-until condition expr1 exprN)
            //  -> S expr  : ($__do-until 'condition 'expr1 'exprN)
            return [{ symbol: '$__do-until' }].concat(_toConsumableArray(list.slice(1).map(function (x) {
                return (0, _types.quote)(state, x);
            })));
        };
    }
}, {
    name: '$repeat',
    fn: function fn(state, name) {
        return function (list) {
            // S expression: ($repeat i of n-times expr1 exprN)
            //  -> S expr  : ($__repeat 'i n-times 'expr1 'exprN)
            var symOf = (0, _types.isSymbol)(list[2], 'of');
            if (!symOf) {
                throw new Error('[SX] $repeat: Invalid syntax: missing \'of\' keyword.');
            }
            return [{ symbol: '$__repeat' }, (0, _types.quote)(state, list[1]), list[3]].concat(_toConsumableArray(list.slice(4).map(function (x) {
                return (0, _types.quote)(state, x);
            })));
        };
    }
}, {
    name: '$for',
    fn: function fn(state, name) {
        return function (list) {
            // S expression: ($for x of list expr1 exprN)
            //  -> S expr  : ($__for 'x list 'expr1 'exprN)
            var symOf = (0, _types.isSymbol)(list[2], 'of');
            if (!symOf) {
                throw new Error('[SX] $for: Invalid syntax: missing \'of\' keyword.');
            }
            return [{ symbol: '$__for' }, (0, _types.quote)(state, list[1]), list[3]].concat(_toConsumableArray(list.slice(4).map(function (x) {
                return (0, _types.quote)(state, x);
            })));
        };
    }
}, {
    name: '$get',
    fn: function fn(state, name) {
        return function (list) {
            // S expression: ($get nameOrIndex1 ... nameOrIndexN)
            //  -> S expr  : ($__get 'nameOrIndex1 ... 'nameOrIndexN)
            return [{ symbol: '$__get' }].concat(_toConsumableArray(list.slice(1).map(function (x) {
                return (0, _types.quote)(state, x);
            })));
        };
    }
}, {
    name: '$let',
    fn: function fn(state, name) {
        return function (list) {
            // S expression: ($let nameStrOrSymbol expr)
            //  -> S expr  : ($__let 'nameStrOrSymbol expr)
            return [{ symbol: '$__let' }, (0, _types.quote)(state, list[1]), list[2]];
        };
    }
}, {
    name: '$clisp-defvar',
    fn: function fn(state, name) {
        return function (list) {
            // S expression: ($let nameStrOrSymbol expr)
            //  -> S expr  : ($__let 'nameStrOrSymbol expr)
            return [{ symbol: '$global' }, [{ symbol: '$__let' }, (0, _types.quote)(state, list[1]), list[2]]];
        };
    }
}, {
    name: '$set',
    fn: function fn(state, name) {
        return function (list) {
            // S expression: ($set nameOrListOfNameOrIndex expr)
            //  -> S expr  : ($__set 'nameOrListOfNameOrIndex expr)
            return [{ symbol: '$__set' }, (0, _types.quote)(state, list[1]), list[2]];
        };
    }
}, {
    name: '$clisp-setq',
    fn: function fn(state, name) {
        return function (list) {
            // S expression: ($clisp-setq symbol expr)
            //  -> S expr  : ($__set 'symbol expr)
            return [{ symbol: '$__set' }, (0, _types.quote)(state, list[1]), list[2]];
        };
    }
}];
exports.default = macros;

/***/ }),

/***/ "./src/s-exp/operators/core.operator.ts":
/*!**********************************************!*\
  !*** ./src/s-exp/operators/core.operator.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.funcs = undefined;

var _core = __webpack_require__(/*! ./core.fn */ "./src/s-exp/operators/core.fn.ts");

var ops = _interopRequireWildcard(_core);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var funcs = exports.funcs = [{
    name: '$car',
    fn: ops.$car
}, {
    name: '$cdr',
    fn: ops.$cdr
}, {
    name: '$cons',
    fn: ops.$cons
}, {
    name: '$first',
    fn: ops.$first
}, {
    name: '$second',
    fn: ops.$second
}, {
    name: '$rest',
    fn: ops.$rest
}, {
    name: '$first-and-second',
    fn: ops.$firstAndSecond
}, {
    name: '$atom',
    fn: ops.$atom
}, {
    name: '$eq',
    fn: ops.$eq
}, {
    name: '$not-eq',
    fn: ops.$notEq
}, {
    name: '$list',
    fn: ops.$list
}, {
    name: '$__scope',
    fn: ops.$__scope
}, {
    name: '$__global',
    fn: ops.$__globalScope
}, {
    name: '$__lambda',
    fn: ops.$__lambda
}, {
    name: '$__defun',
    fn: ops.$__defun
}, {
    name: '$__if',
    fn: ops.$__if
}, {
    name: '$__cond',
    fn: ops.$__cond
}, {
    name: '$__while',
    fn: ops.$__while
}, {
    name: '$__do-while',
    fn: ops.$__doWhile
}, {
    name: '$__until',
    fn: ops.$__until
}, {
    name: '$__do-until',
    fn: ops.$__doUntil
}, {
    name: '$__repeat',
    fn: ops.$__repeat
}, {
    name: '$__for',
    fn: ops.$__for
}, {
    name: '$__get',
    fn: ops.$__get
}, {
    name: '$__let',
    fn: ops.$__let
}, {
    name: '$__set',
    fn: ops.$__set
}, {
    name: '$boolean',
    fn: ops.$boolean
}, {
    name: '$not',
    fn: ops.$not
}, {
    name: '$and',
    fn: ops.$and
}, {
    name: '$or',
    fn: ops.$or
}, {
    name: '==',
    fn: ops.$ambiguousEq
}, {
    name: '!=',
    fn: ops.$ambiguousNotEq
}, {
    name: '<',
    fn: ops.$lt
}, {
    name: '<=',
    fn: ops.$le
}, {
    name: '>',
    fn: ops.$gt
}, {
    name: '>=',
    fn: ops.$ge
}, {
    name: '$is-list',
    fn: ops.$isList
}, {
    name: '$is-string',
    fn: ops.$isString
}, {
    name: '$is-number',
    fn: ops.$isNumber
}, {
    name: '$is-NaN',
    fn: ops.$isNaN
}, {
    name: '$is-finite',
    fn: ops.$isFinite
}, {
    name: '$is-integer',
    fn: ops.$isInteger
}, {
    name: '$to-string',
    fn: ops.$toString
}, {
    name: '$to-number',
    fn: ops.$toNumber
}]; // Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln
exports.default = funcs;

/***/ }),

/***/ "./src/s-exp/operators/core.symbol.ts":
/*!********************************************!*\
  !*** ./src/s-exp/operators/core.symbol.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
// Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln
var symbols = exports.symbols = [{ name: 'nil', fn: function fn(state, name) {
        return [];
    } }, { name: 'null', fn: function fn(state, name) {
        return null;
    } }, { name: 'undefined', fn: function fn(state, name) {
        return void 0;
    } }, { name: 'true', fn: function fn(state, name) {
        return true;
    } }, { name: '#true', fn: function fn(state, name) {
        return true;
    } }, { name: '#t', fn: function fn(state, name) {
        return true;
    } }, { name: 'false', fn: function fn(state, name) {
        return false;
    } }, { name: '#false', fn: function fn(state, name) {
        return false;
    } }, { name: '#f', fn: function fn(state, name) {
        return false;
    } }, { name: '+Infinity', fn: function fn(state, name) {
        return +Infinity;
    } }, { name: '-Infinity', fn: function fn(state, name) {
        return -Infinity;
    } }, { name: 'NaN', fn: function fn(state, name) {
        return NaN;
    } }];
exports.default = symbols;

/***/ }),

/***/ "./src/s-exp/operators/core.ts":
/*!*************************************!*\
  !*** ./src/s-exp/operators/core.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = install;

var _core = __webpack_require__(/*! ./core.operator */ "./src/s-exp/operators/core.operator.ts");

var _core2 = _interopRequireDefault(_core);

var _core3 = __webpack_require__(/*! ./core.macro */ "./src/s-exp/operators/core.macro.ts");

var _core4 = _interopRequireDefault(_core3);

var _core5 = __webpack_require__(/*! ./core.symbol */ "./src/s-exp/operators/core.symbol.ts");

var _core6 = _interopRequireDefault(_core5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function install(config) {
    config.funcs = (config.funcs || []).concat(_core2.default);
    config.macros = (config.macros || []).concat(_core4.default);
    config.symbols = (config.symbols || []).concat(_core6.default);
    return config;
} // Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln

/***/ }),

/***/ "./src/s-exp/operators/jsx.fn.ts":
/*!***************************************!*\
  !*** ./src/s-exp/operators/jsx.fn.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.$jsxComponentTag = exports.$jsxStandardTag = exports.$jsxProps = exports.$__toObject = exports.$__outputForOf = exports.$__outputIf = undefined;

var _types = __webpack_require__(/*! ../types */ "./src/s-exp/types.ts");

var _evaluate = __webpack_require__(/*! ../evaluate */ "./src/s-exp/evaluate.ts");

var _core = __webpack_require__(/*! ./core.fn */ "./src/s-exp/operators/core.fn.ts");

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } // Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln


// tslint:disable-next-line:variable-name
var $__outputIf = exports.$__outputIf = function $__outputIf(state, name) {
    return function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        // S expression: ($__outputIf cond 'expr)
        //  -> (if cond is true ) S expr  : expr
        //  -> (if cond is false) S expr  : ()
        var _$$firstAndSecond = _core.$$firstAndSecond.apply(undefined, args),
            car = _$$firstAndSecond.car,
            cdr = _$$firstAndSecond.cdr;

        var r = [];
        if ((0, _core.$$boolean)(car)) {
            if (2 < args.length) {
                var _r;

                (_r = r).push.apply(_r, [{ symbol: state.config.reservedNames.Template }].concat(_toConsumableArray(args.slice(1))));
                r = (0, _evaluate.evaluate)(state, r);
            } else {
                r = (0, _evaluate.evaluate)(state, cdr);
            }
        }
        return r;
    };
};
// tslint:disable-next-line:variable-name
var $__outputForOf = exports.$__outputForOf = function $__outputForOf(state, name) {
    return function () {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        // S expression: ($__outputForOf list 'expr)
        //  -> S expr  : (Template expr ... expr)
        var car = _core.$$first.apply(undefined, args);
        var r = [];
        if (Array.isArray(car)) {
            for (var i = 0; i < car.length; i++) {
                var x = car[i];
                var v = (0, _core.$__scope)(state, name).apply(undefined, [true, true, [['$data', (0, _types.quote)(state, x)], ['$index', i], ['$parent', (0, _evaluate.getScope)(state)]]].concat(_toConsumableArray(args.slice(1))));
                if (2 < args.length && Array.isArray(v)) {
                    r.push.apply(r, _toConsumableArray(v));
                } else {
                    r.push(v);
                }
            }
        }
        // All of r items are already evaluated.
        return (0, _evaluate.evaluate)(state, [{ symbol: state.config.reservedNames.Template }].concat(r.map(function (z) {
            return [{ symbol: state.config.reservedNames.quote }, z];
        })));
    };
};
// tslint:disable-next-line:variable-name
var $__toObject = exports.$__toObject = function $__toObject(state, name) {
    return function () {
        for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
        }

        // S expression: ($__# '(name value...)...)
        //  -> JSON    : {name: value, ...}
        var r = {};
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = args[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var x = _step.value;

                if (Array.isArray(x) && 0 < x.length) {
                    var sym = (0, _types.isSymbol)(x[0]);
                    var keyName = sym ? sym.symbol : String((0, _evaluate.evaluate)(state, x[0]));
                    if (x.length === 1) {
                        // S expression: (# ... (keyName) ...)
                        //  -> JSON    : {..., keyName: true, ...}
                        r[keyName] = true;
                    } else if (x.length === 2) {
                        // S expression: (# ... (keyName value) ...)
                        //  -> JSON    : {..., keyName: value, ...}
                        r[keyName] = (0, _evaluate.evaluate)(state, x[1]);
                    } else {
                        // S expression: (# ... (keyName value1 value2 ...) ...)
                        //  -> JSON    : {..., keyName: [value1, value2, ], ...}
                        r[keyName] = (0, _evaluate.evaluate)(state, [{ symbol: state.config.reservedNames.list }].concat(x.slice(1)));
                    }
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        return r;
    };
};
var $jsxProps = exports.$jsxProps = function $jsxProps(state, name) {
    return function () {
        for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
        }

        // S expression: (@ (name value...)...)
        //  -> JSON    : {name: value, ...}
        var r = {};
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
            for (var _iterator2 = args[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var x = _step2.value;

                if (Array.isArray(x) && 0 < x.length) {
                    var sym = (0, _types.isSymbol)(x[0]);
                    var keyName = sym ? sym.symbol : String((0, _evaluate.evaluate)(state, x[0]));
                    switch (keyName) {
                        case 'style':
                            {
                                if (x.length === 1) {
                                    // S expression: (@ ... (style) ...)
                                    //  -> JSON    : {..., style: "", ...}
                                    r[keyName] = "";
                                } else if (x.length >= 2) {
                                    // S expression: (@ ... (style "styleName1: styleValue1; ..." ...) ...)
                                    // S expression: (@ ... (style (styleName1 styleValue1) ...) ...)
                                    //  -> JSON    : {..., style: {styleName1: styleValue1}, ...}
                                    var styles = {};
                                    var _iteratorNormalCompletion3 = true;
                                    var _didIteratorError3 = false;
                                    var _iteratorError3 = undefined;

                                    try {
                                        for (var _iterator3 = x.slice(1)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                                            var s = _step3.value;

                                            if (Array.isArray(s) && 1 < s.length) {
                                                styles[String((0, _evaluate.evaluate)(state, s[0]))] = String((0, _evaluate.evaluate)(state, s[1]));
                                            } else if (typeof s === 'string') {
                                                var _iteratorNormalCompletion4 = true;
                                                var _didIteratorError4 = false;
                                                var _iteratorError4 = undefined;

                                                try {
                                                    for (var _iterator4 = s.split(';')[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                                                        var v = _step4.value;

                                                        var matched = /^\s*(\S+)\s*:\s*(.*?)\s*$/.exec(v);
                                                        if (matched) {
                                                            styles[matched[1]] = matched[2];
                                                        }
                                                    }
                                                } catch (err) {
                                                    _didIteratorError4 = true;
                                                    _iteratorError4 = err;
                                                } finally {
                                                    try {
                                                        if (!_iteratorNormalCompletion4 && _iterator4.return) {
                                                            _iterator4.return();
                                                        }
                                                    } finally {
                                                        if (_didIteratorError4) {
                                                            throw _iteratorError4;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    } catch (err) {
                                        _didIteratorError3 = true;
                                        _iteratorError3 = err;
                                    } finally {
                                        try {
                                            if (!_iteratorNormalCompletion3 && _iterator3.return) {
                                                _iterator3.return();
                                            }
                                        } finally {
                                            if (_didIteratorError3) {
                                                throw _iteratorError3;
                                            }
                                        }
                                    }

                                    r[keyName] = styles;
                                }
                            }
                            break;
                        case 'class':
                        case 'styleClass':
                            {
                                if (x.length === 1) {
                                    // S expression: (@ ... (class) ...)
                                    //  -> JSON    : {..., class: [], ...}
                                    r[keyName] = [];
                                } else if (x.length >= 2) {
                                    // S expression: (@ ... (class "className1 className2 ...") ...)
                                    // S expression: (@ ... (class (className1 className2 ...)) ...)
                                    //  -> JSON    : {..., class: [className1 className2 ...], ...}
                                    var classes = [];
                                    var _iteratorNormalCompletion5 = true;
                                    var _didIteratorError5 = false;
                                    var _iteratorError5 = undefined;

                                    try {
                                        for (var _iterator5 = x.slice(1)[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                                            var c = _step5.value;

                                            if (Array.isArray(c)) {
                                                classes = classes.concat(c.map(function (z) {
                                                    return (0, _evaluate.evaluate)(state, z);
                                                }));
                                            } else if (typeof c === 'string') {
                                                classes = classes.concat(c.split(' '));
                                            }
                                        }
                                    } catch (err) {
                                        _didIteratorError5 = true;
                                        _iteratorError5 = err;
                                    } finally {
                                        try {
                                            if (!_iteratorNormalCompletion5 && _iterator5.return) {
                                                _iterator5.return();
                                            }
                                        } finally {
                                            if (_didIteratorError5) {
                                                throw _iteratorError5;
                                            }
                                        }
                                    }

                                    r[keyName] = classes.map(function (c) {
                                        return c === null || c === void 0 ? "" : String(c);
                                    });
                                }
                            }
                            break;
                        case 'className':
                            {
                                if (x.length === 1) {
                                    // S expression: (@ ... (class) ...)
                                    //  -> JSON    : {..., class: "", ...}
                                    r[keyName] = '';
                                } else if (x.length >= 2) {
                                    // S expression: (@ ... (class "className1 className2 ...") ...)
                                    // S expression: (@ ... (class (className1 className2 ...)) ...)
                                    //  -> JSON    : {..., class: "className1 className2 ...", ...}
                                    var _classes = '';
                                    var _iteratorNormalCompletion6 = true;
                                    var _didIteratorError6 = false;
                                    var _iteratorError6 = undefined;

                                    try {
                                        for (var _iterator6 = x.slice(1)[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                                            var _c = _step6.value;

                                            var f = '';
                                            if (Array.isArray(_c)) {
                                                f = _c.map(function (z) {
                                                    return (0, _evaluate.evaluate)(state, z);
                                                }).map(function (z) {
                                                    return z === null || z === void 0 ? "" : String(z);
                                                }).join(' ');
                                            } else if (typeof _c === 'string') {
                                                f = _c;
                                            }
                                            if (0 < _classes.length) _classes += ' ' + f;else _classes = f;
                                        }
                                    } catch (err) {
                                        _didIteratorError6 = true;
                                        _iteratorError6 = err;
                                    } finally {
                                        try {
                                            if (!_iteratorNormalCompletion6 && _iterator6.return) {
                                                _iterator6.return();
                                            }
                                        } finally {
                                            if (_didIteratorError6) {
                                                throw _iteratorError6;
                                            }
                                        }
                                    }

                                    r[keyName] = _classes;
                                }
                            }
                            break;
                        case 'dangerouslySetInnerHTML':
                            {
                                if (x.length === 1) {
                                    r[keyName] = { __html: '' };
                                } else if (x.length >= 2) {
                                    r[keyName] = { __html: (0, _evaluate.evaluate)(state, x[1]) };
                                } else {
                                    r[keyName] = { __html: (0, _evaluate.evaluate)(state, [{ symbol: state.config.reservedNames.list }].concat(x.slice(1)))
                                    };
                                }
                            }
                            break;
                        default:
                            {
                                if (x.length === 1) {
                                    // S expression: (@ ... (keyName) ...)
                                    //  -> JSON    : {..., keyName: true, ...}
                                    r[keyName] = true;
                                } else if (x.length === 2) {
                                    // S expression: (@ ... (keyName value) ...)
                                    //  -> JSON    : {..., keyName: value, ...}
                                    r[keyName] = (0, _evaluate.evaluate)(state, x[1]);
                                } else {
                                    // S expression: (@ ... (keyName value1 value2 ...) ...)
                                    //  -> JSON    : {..., keyName: [value1, value2, ], ...}
                                    r[keyName] = (0, _evaluate.evaluate)(state, [{ symbol: state.config.reservedNames.list }].concat(x.slice(1)));
                                }
                            }
                            break;
                    }
                }
            }
        } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                    _iterator2.return();
                }
            } finally {
                if (_didIteratorError2) {
                    throw _iteratorError2;
                }
            }
        }

        return r;
    };
};
function getJsxTagsParams(state) {
    for (var _len5 = arguments.length, args = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
        args[_key5 - 1] = arguments[_key5];
    }

    var children = args;
    var props = {};
    if (0 < args.length && Array.isArray(args[0])) {
        var sym = (0, _types.isSymbol)(args[0][0], '@');
        if (sym) {
            props = $jsxProps(state, '').apply(undefined, _toConsumableArray(args[0].slice(1)));
            children = children.slice(1);
        }
    }
    return { props: props, children: children };
}
var $jsxStandardTag = exports.$jsxStandardTag = function $jsxStandardTag(state, name) {
    return function () {
        var _state$config;

        for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
            args[_key6] = arguments[_key6];
        }

        var _getJsxTagsParams = getJsxTagsParams.apply(undefined, [state].concat(args)),
            props = _getJsxTagsParams.props,
            children = _getJsxTagsParams.children;

        return (_state$config = state.config).jsx.apply(_state$config, [name, props].concat(_toConsumableArray(children)));
    };
};
var $jsxComponentTag = exports.$jsxComponentTag = function $jsxComponentTag(component) {
    return function (state, name) {
        return function () {
            var _state$config2;

            for (var _len7 = arguments.length, args = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
                args[_key7] = arguments[_key7];
            }

            var _getJsxTagsParams2 = getJsxTagsParams.apply(undefined, [state].concat(args)),
                props = _getJsxTagsParams2.props,
                children = _getJsxTagsParams2.children;

            return (_state$config2 = state.config).jsx.apply(_state$config2, [component, props].concat(_toConsumableArray(children)));
        };
    };
};

/***/ }),

/***/ "./src/s-exp/operators/jsx.macro.ts":
/*!******************************************!*\
  !*** ./src/s-exp/operators/jsx.macro.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.macros = undefined;

var _types = __webpack_require__(/*! ../types */ "./src/s-exp/types.ts");

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } // Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln


var macros = exports.macros = [{
    name: '#',
    fn: function fn(state, name) {
        return function (list) {
            // S expression: (# (name value...)...)
            //  -> S expr  : ($__# '(name value...)...)
            return [{ symbol: '$__#' }].concat(_toConsumableArray(list.slice(1).map(function (x) {
                return (0, _types.quote)(state, x);
            })));
        };
    }
}, {
    name: '@',
    fn: function fn(state, name) {
        return function (list) {
            return (0, _types.quote)(state, list);
        };
    }
}, {
    name: '$=if',
    fn: function fn(state, name) {
        return function (list) {
            // S expression: ($=if cond expr)
            //  -> S expr  : ($=__if cond 'expr)
            return [{ symbol: '$=__if' }, list[1]].concat(_toConsumableArray(list.slice(2).map(function (x) {
                return (0, _types.quote)(state, x);
            })));
        };
    }
}, {
    name: '$=for',
    fn: function fn(state, name) {
        return function (list) {
            // S expression: ($=for list expr)
            //  -> S expr  : ($=__for list 'expr)
            return [{ symbol: '$=__for' }, list[1]].concat(_toConsumableArray(list.slice(2).map(function (x) {
                return (0, _types.quote)(state, x);
            })));
        };
    }
}];
exports.default = macros;

/***/ }),

/***/ "./src/s-exp/operators/jsx.operator.ts":
/*!*********************************************!*\
  !*** ./src/s-exp/operators/jsx.operator.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.funcs = undefined;

var _jsx = __webpack_require__(/*! ./jsx.fn */ "./src/s-exp/operators/jsx.fn.ts");

var ops = _interopRequireWildcard(_jsx);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var funcs = exports.funcs = [{
    name: '$=__if',
    fn: ops.$__outputIf
}, {
    name: '$=__for',
    fn: ops.$__outputForOf
}, {
    name: '$__#',
    fn: ops.$__toObject
}]; // Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln
exports.default = funcs;

/***/ }),

/***/ "./src/s-exp/operators/jsx.symbol.ts":
/*!*******************************************!*\
  !*** ./src/s-exp/operators/jsx.symbol.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln
var symbols = exports.symbols = [];
exports.default = symbols;

/***/ }),

/***/ "./src/s-exp/operators/jsx.ts":
/*!************************************!*\
  !*** ./src/s-exp/operators/jsx.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = install;

var _jsx = __webpack_require__(/*! ./jsx.operator */ "./src/s-exp/operators/jsx.operator.ts");

var _jsx2 = _interopRequireDefault(_jsx);

var _jsx3 = __webpack_require__(/*! ./jsx.macro */ "./src/s-exp/operators/jsx.macro.ts");

var _jsx4 = _interopRequireDefault(_jsx3);

var _jsx5 = __webpack_require__(/*! ./jsx.symbol */ "./src/s-exp/operators/jsx.symbol.ts");

var _jsx6 = _interopRequireDefault(_jsx5);

var _jsx7 = __webpack_require__(/*! ./jsx.fn */ "./src/s-exp/operators/jsx.fn.ts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } // Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln


function install(config, lsxConf) {
    var _config$funcs;

    config.funcs = (config.funcs || []).concat(_jsx2.default);
    config.macros = (config.macros || []).concat(_jsx4.default);
    config.symbols = (config.symbols || []).concat(_jsx6.default);
    var components = Object.entries(lsxConf.components).map(function (x) {
        return { name: x[0], fn: (0, _jsx7.$jsxComponentTag)(x[1]) };
    });
    config.funcs = (_config$funcs = config.funcs).concat.apply(_config$funcs, [{ name: config.reservedNames.Template, fn: (0, _jsx7.$jsxComponentTag)(lsxConf.jsxFlagment) }].concat(_toConsumableArray(components)));
    config.funcSymbolResolverFallback = _jsx7.$jsxStandardTag;
    config.jsx = lsxConf.jsx;
    config.JsxFragment = lsxConf.jsxFlagment;
    return config;
}

/***/ }),

/***/ "./src/s-exp/operators/sequence.fn.ts":
/*!********************************************!*\
  !*** ./src/s-exp/operators/sequence.fn.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.$$slice = exports.$slice = exports.$$concat = exports.$concat = exports.$$length = exports.$length = undefined;

var _core = __webpack_require__(/*! ./core.fn */ "./src/s-exp/operators/core.fn.ts");

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } // Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln


var $length = exports.$length = function $length(state, name) {
    return function () {
        var car = _core.$$first.apply(undefined, arguments);
        return car.length();
    };
};
var $$length = exports.$$length = $length(null, null);
var $concat = exports.$concat = function $concat(state, name) {
    return function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var car = _core.$$first.apply(undefined, args);
        return car.concat.apply(car, _toConsumableArray(args.slice(1)));
    };
};
var $$concat = exports.$$concat = $concat(null, null);
var $slice = exports.$slice = function $slice(state, name) {
    return function () {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        return args.slice(2).slice(Number(args[0]), Number(args[1]));
    };
};
var $$slice = exports.$$slice = $slice(null, null);

/***/ }),

/***/ "./src/s-exp/operators/sequence.macro.ts":
/*!***********************************************!*\
  !*** ./src/s-exp/operators/sequence.macro.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln
var macros = exports.macros = [];
exports.default = macros;

/***/ }),

/***/ "./src/s-exp/operators/sequence.operator.ts":
/*!**************************************************!*\
  !*** ./src/s-exp/operators/sequence.operator.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.funcs = undefined;

var _sequence = __webpack_require__(/*! ./sequence.fn */ "./src/s-exp/operators/sequence.fn.ts");

var ops = _interopRequireWildcard(_sequence);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var funcs = exports.funcs = [{
    name: '$length',
    fn: ops.$length
}, {
    name: '$concat',
    fn: ops.$concat
}, {
    name: '$slice',
    fn: ops.$slice
}]; // Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln
exports.default = funcs;

/***/ }),

/***/ "./src/s-exp/operators/sequence.symbol.ts":
/*!************************************************!*\
  !*** ./src/s-exp/operators/sequence.symbol.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln
var symbols = exports.symbols = [];
exports.default = symbols;

/***/ }),

/***/ "./src/s-exp/operators/sequence.ts":
/*!*****************************************!*\
  !*** ./src/s-exp/operators/sequence.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = install;

var _sequence = __webpack_require__(/*! ./sequence.operator */ "./src/s-exp/operators/sequence.operator.ts");

var _sequence2 = _interopRequireDefault(_sequence);

var _sequence3 = __webpack_require__(/*! ./sequence.macro */ "./src/s-exp/operators/sequence.macro.ts");

var _sequence4 = _interopRequireDefault(_sequence3);

var _sequence5 = __webpack_require__(/*! ./sequence.symbol */ "./src/s-exp/operators/sequence.symbol.ts");

var _sequence6 = _interopRequireDefault(_sequence5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function install(config) {
    config.funcs = (config.funcs || []).concat(_sequence2.default);
    config.macros = (config.macros || []).concat(_sequence4.default);
    config.symbols = (config.symbols || []).concat(_sequence6.default);
    return config;
} // Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln

/***/ }),

/***/ "./src/s-exp/parser.ts":
/*!*****************************!*\
  !*** ./src/s-exp/parser.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; // Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln


exports.parse = parse;

var _types = __webpack_require__(/*! ./types */ "./src/s-exp/types.ts");

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function isEOF(ch) {
    return (typeof ch === 'undefined' ? 'undefined' : _typeof(ch)) === 'object' && Object.prototype.hasOwnProperty.call(ch, 'eof');
}
function isSpace(ch) {
    return typeof ch === 'string' && ch.trim().length === 0;
}
function isNumberFirstChar(ch) {
    return typeof ch === 'string' && /^[0-9\+\-]$/.test(ch);
}
function isNumberAfterSignChar(ch) {
    return typeof ch === 'string' && /^[0-9]$/.test(ch);
}
function isSymbolFirstChar(ch) {
    return typeof ch === 'string' && !isSpace(ch) && !isNumberFirstChar(ch);
}
function lookCurrentLineHint(state) {
    return 'line: ' + state.line + ' / strings: ' + state.index + ' / pos: ' + state.pos + ' :' + (state.strings.length > state.index ? state.strings[state.index].slice(state.pos, state.pos + 20) : '');
}
function getChar(state, virtualEof) {
    if (state.strings.length <= state.index) {
        return { eof: true };
    }
    if (state.strings[state.index].length <= state.pos) {
        if (!state.values || state.values.length <= state.index) {
            state.pos = 0;
            state.index++;
            return getChar(state);
        } else {
            var ch = { value: state.values[state.index] };
            state.pos = 0;
            state.index++;
            return ch;
        }
    }
    if (virtualEof) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = virtualEof[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var v = _step.value;

                var _ch = state.strings[state.index].slice(state.pos, state.pos + v.length);
                if (_ch === v) {
                    state.pos += v.length;
                    state.line += _ch.split('\n').length - 1;
                    return { eof: false, eofSeq: v };
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    {
        var _ch2 = state.strings[state.index].slice(state.pos, state.pos + 1);
        state.pos++;
        if (_ch2 === '\n') {
            state.line++;
        }
        if (_ch2 === '\\') {
            if (state.strings[state.index].length <= state.pos) {
                throw new Error('[SX] getChar: Invalid syntax at: ' + lookCurrentLineHint(state) + '.');
            }
            _ch2 = state.strings[state.index].slice(state.pos, state.pos + 1);
            state.pos++;
            switch (_ch2) {
                case 'b':
                    _ch2 = '\b';
                    break;
                case 't':
                    _ch2 = '\t';
                    break;
                case 'n':
                    _ch2 = '\n';
                    break;
                case 'v':
                    _ch2 = '\v';
                    break;
                case 'f':
                    _ch2 = '\f';
                    break;
                case 'r':
                    _ch2 = '\r';
                    break;
                case 'U':
                case 'u':
                    {
                        if (state.strings[state.index].slice(state.pos, state.pos + 1) === '{') {
                            var ch1 = '';
                            for (var i = 0; i < 6; i++) {
                                var ch2 = state.strings[state.index].slice(state.pos + i, state.pos + 1 + i);
                                if (ch2 === '}') {
                                    if (i === 0) {
                                        throw new Error('[SX] getChar: Invalid syntax at: ' + lookCurrentLineHint(state) + '.');
                                    }
                                    state.pos += i;
                                    break;
                                } else if (!/^[0-9A-Fa-f]{1}$/.test(ch1)) {
                                    throw new Error('[SX] getChar: Invalid syntax at: ' + lookCurrentLineHint(state) + '.');
                                }
                                ch1 += ch2;
                            }
                            if (state.strings[state.index].slice(state.pos, state.pos + 1) !== '}') {
                                throw new Error('[SX] getChar: Invalid syntax at: ' + lookCurrentLineHint(state) + '.');
                            }
                            state.pos++;
                            _ch2 = String.fromCodePoint(Number.parseInt(ch1, 16));
                        } else {
                            var _ch3 = state.strings[state.index].slice(state.pos, state.pos + 4);
                            if (!/^[0-9A-Fa-f]{4}$/.test(_ch3)) {
                                throw new Error('[SX] getChar: Invalid syntax at: ' + lookCurrentLineHint(state) + '.');
                            }
                            state.pos += 4;
                            _ch2 = String.fromCodePoint(Number.parseInt(_ch3, 16));
                        }
                    }
                    break;
            }
        }
        return _ch2;
    }
}
function lookAheads(state, n, virtualEof) {
    var index = state.index;
    var pos = state.pos;
    var line = state.line;
    var chs = [];
    try {
        for (var i = 0; i < n; i++) {
            chs.push(getChar(state, virtualEof));
        }
    } finally {
        state.index = index;
        state.pos = pos;
        state.line = line;
    }
    return chs;
}
function lookAhead(state, virtualEof) {
    var index = state.index;
    var pos = state.pos;
    var line = state.line;
    var ch = void 0;
    try {
        ch = getChar(state, virtualEof);
    } finally {
        state.index = index;
        state.pos = pos;
        state.line = line;
    }
    return ch;
}
function skipWhitespaces(state) {
    var ch = lookAhead(state);
    while (!isEOF(ch) && isSpace(ch)) {
        getChar(state);
        ch = lookAhead(state);
    }
}
function parseNumber(state, virtualEof) {
    var s = '';
    var ch = lookAhead(state, virtualEof);
    while (!isEOF(ch)) {
        if (typeof ch === 'string') {
            if (/^[0-9\+\-\.EeInfinityNaN]+$/.test(s + ch)) {
                getChar(state, virtualEof);
                s += ch;
            } else {
                break;
            }
        } else {
            break;
        }
        ch = lookAhead(state, virtualEof);
    }
    if (!/^([\+\-]?\d*\.?\d+(?:[Ee][\+\-]?\d+)?)|([\+\-]Infinity)|(NaN)$/.test(s)) {
        throw new Error('[SX] parseNumber: Invalid syntax at: ' + lookCurrentLineHint(state) + '.');
    }
    return Number(s);
}
function parseSymbol(state, virtualEof) {
    var s = '';
    var ch = lookAhead(state, virtualEof);
    while (!isEOF(ch)) {
        if (typeof ch === 'string') {
            if (isSpace(ch)) {
                break;
            } else if (ch === '#' && lookAheads(state, 2, virtualEof)[1] === '|') {
                break;
            } else if (/^[^.;()"]+$/.test(s + ch)) {
                getChar(state, virtualEof);
                s += ch;
            } else {
                break;
            }
        } else {
            if ((typeof ch === 'undefined' ? 'undefined' : _typeof(ch)) === 'object' && Object.prototype.hasOwnProperty.call(ch, 'value')) {
                getChar(state, virtualEof);
                var v = ch.value;
                s += String(ch);
            } else {
                throw new Error('[SX] parseSymbol: Invalid syntax at: ' + lookCurrentLineHint(state) + '.');
            }
        }
        ch = lookAhead(state, virtualEof);
    }
    return { symbol: s };
}
function parseStringOrComment(state, eof, valuesStartSeq, valuesStopChar) {
    var eofSeqs = valuesStartSeq ? [].concat(_toConsumableArray(eof), [valuesStartSeq]) : eof;
    var strings = [];
    var values = [];
    for (;;) {
        var s = '';
        var ch = lookAhead(state, eofSeqs);
        while (!isEOF(ch)) {
            if (typeof ch === 'string') {
                getChar(state, eofSeqs);
                s += ch;
            } else {
                if ((typeof ch === 'undefined' ? 'undefined' : _typeof(ch)) === 'object' && Object.prototype.hasOwnProperty.call(ch, 'value')) {
                    getChar(state, eofSeqs);
                    var v = ch.value;
                    s += String(ch);
                } else {
                    throw new Error('[SX] parseStringOrComment: Invalid syntax at: ' + lookCurrentLineHint(state) + '.');
                }
            }
            ch = lookAhead(state, eofSeqs);
        }
        getChar(state, eofSeqs);
        if (ch.eof === true) {
            throw new Error('[SX] parseStringOrComment: Unexpected termination of script.');
        }
        strings.push(s);
        if (ch.eofSeq === valuesStartSeq) {
            values.push(parseList(state, valuesStopChar, []));
        } else {
            break;
        }
    }
    return { strings: strings, values: values };
}
function parseString(state) {
    return parseStringOrComment(state, ['"'], null, ')').strings[0];
}
function parseHereDoc(state, symbol, attrs) {
    var q = [symbol];
    if (attrs) {
        q.push(attrs);
    }
    var inner = parseStringOrComment(state, ['"""'], '%%%(', ')');
    for (var i = 0; i < inner.strings.length; i++) {
        q.push(inner.strings[i]);
        if (i < inner.values.length) {
            q.push(inner.values[i]);
        }
    }
    return q;
}
function parseSingleLineComment(state) {
    return state.config.stripComments ? state.config.strippedCommentValue : { comment: parseStringOrComment(state, ['\r', '\n'], null, ')').strings[0] };
}
function parseMultiLineComment(state) {
    return state.config.stripComments ? state.config.strippedCommentValue : { comment: parseStringOrComment(state, ['|#'], null, ')').strings[0] };
}
function parseOneToken(state) {
    skipWhitespaces(state);
    var ch = lookAhead(state);
    while (!isEOF(ch)) {
        switch (ch) {
            case ')':
                throw new Error('[SX] parseOneToken: Invalid syntax at: ' + lookCurrentLineHint(state) + '.');
            case '(':
                getChar(state);
                return parseList(state, ')', []);
            case "'":
                {
                    getChar(state);
                    skipWhitespaces(state);
                    return (0, _types.quote)(state, parseOneToken(state));
                }
            case ".":
                getChar(state);
                skipWhitespaces(state);
                return { dotted: parseOneToken(state) };
            case '"':
                {
                    getChar(state);
                    var aheads = lookAheads(state, 4);
                    if (state.config.enableHereDoc && aheads[0] === '"' && aheads[1] === '"') {
                        var isHereDoc = true;
                        if (isEOF(aheads[2]) || isSpace(aheads[2])) {
                            // here doc
                        } else if (isNumberFirstChar(aheads[2])) {
                            // TODO: single +/- char is a symbol.
                            if (aheads[2] === '+' || aheads[2] === '-') {
                                if (!isNumberAfterSignChar(aheads[3])) {
                                    isHereDoc = false;
                                }
                            }
                            // here doc
                        } else if (isSymbolFirstChar(aheads[2])) {
                            isHereDoc = false;
                        } else {
                            // here doc
                        }
                        getChar(state);
                        getChar(state);
                        var sym = null;
                        var attrs = null;
                        if (isHereDoc) {
                            sym = { symbol: state.config.reservedNames.Template };
                        } else {
                            sym = parseSymbol(state, ['@']);
                            if (sym === null) {
                                throw new Error('[SX] parseOneToken: Invalid syntax at: ' + lookCurrentLineHint(state) + '.');
                            }
                            if (typeof sym === 'number') {
                                throw new Error('[SX] parseOneToken: Invalid syntax at: ' + lookCurrentLineHint(state) + '.');
                            }
                            var ahs = lookAheads(state, 2);
                            if (ahs[0] === '@') {
                                if (ahs[1] !== '{') {
                                    throw new Error('[SX] parseOneToken: Invalid syntax at: ' + lookCurrentLineHint(state) + '.');
                                }
                                getChar(state);
                                getChar(state);
                                attrs = parseList(state, '}', [{ symbol: '@' }]);
                            }
                        }
                        return parseHereDoc(state, sym, attrs);
                    } else {
                        return parseString(state);
                    }
                }
            case ';':
                getChar(state);
                return parseSingleLineComment(state);
            case '#':
                {
                    var _aheads = lookAheads(state, 2);
                    if (_aheads[1] === '|') {
                        getChar(state);
                        getChar(state);
                        return parseMultiLineComment(state);
                    } else {
                        return parseSymbol(state);
                    }
                }
            default:
                if (typeof ch !== 'string') {
                    if ((typeof ch === 'undefined' ? 'undefined' : _typeof(ch)) === 'object' && Object.prototype.hasOwnProperty.call(ch, 'value')) {
                        getChar(state);
                        return state.config.wrapExternalValue ? ch : ch.value;
                    } else {
                        throw new Error('[SX] parseOneToken: Invalid syntax at: ' + lookCurrentLineHint(state) + '.');
                    }
                } else if (isSpace(ch)) {
                    break;
                } else if (isNumberFirstChar(ch)) {
                    // TODO: single +/- char is a symbol.
                    if (ch === '+' || ch === '-') {
                        var _aheads2 = lookAheads(state, 2);
                        if (!isNumberAfterSignChar(_aheads2[1])) {
                            return parseSymbol(state);
                        }
                    }
                    return parseNumber(state);
                } else if (isSymbolFirstChar(ch)) {
                    return parseSymbol(state);
                } else {
                    throw new Error('[SX] parseOneToken: Invalid syntax at: ' + lookCurrentLineHint(state) + '.');
                }
        }
        skipWhitespaces(state);
        ch = lookAhead(state);
    }
    throw new Error('[SX] parseOneToken: Unexpected termination of script.');
}
function parseList(state, listStopChar, initialList) {
    var r = initialList.slice(0);
    skipWhitespaces(state);
    var ch = lookAhead(state);
    while (!isEOF(ch)) {
        switch (ch) {
            case listStopChar:
                getChar(state);
                return r;
            default:
                {
                    var t = parseOneToken(state);
                    if ((typeof t === 'undefined' ? 'undefined' : _typeof(t)) === 'object' && Object.prototype.hasOwnProperty.call(t, 'dotted')) {
                        if (r.length === 0 || Array.isArray(r[r.length - 1])) {
                            throw new Error('[SX] parseList: Invalid syntax at: ' + lookCurrentLineHint(state) + '.');
                        }
                        if (Array.isArray(t)) {
                            t.unshift(r.pop());
                            r.push(t);
                        } else {
                            r.push({ car: r.pop(), cdr: t });
                        }
                    } else {
                        r.push(t);
                    }
                }
                break;
        }
        skipWhitespaces(state);
        ch = lookAhead(state);
    }
    throw new Error('[SX] parseList: Unexpected termination of script.');
}
function parse(state) {
    var r = [];
    skipWhitespaces(state);
    var ch = lookAhead(state);
    while (!isEOF(ch)) {
        switch (ch) {
            case '(':
                getChar(state);
                r.push(parseList(state, ')', []));
                break;
            case "'":
                {
                    getChar(state);
                    skipWhitespaces(state);
                    r.push((0, _types.quote)(state, parseOneToken(state)));
                    break;
                }
            case ';':
                getChar(state);
                r.push(parseSingleLineComment(state));
                break;
            case '#':
                {
                    var aheads = lookAheads(state, 2);
                    if (aheads[1] === '|') {
                        getChar(state);
                        getChar(state);
                        r.push(parseMultiLineComment(state));
                    } else {
                        getChar(state);
                        r.push(parseSingleLineComment(state));
                    }
                }
                break;
            default:
                throw new Error('[SX] parseInitialState: Invalid syntax at: ' + lookCurrentLineHint(state) + '.');
        }
        skipWhitespaces(state);
        ch = lookAhead(state);
    }
    return r;
}

/***/ }),

/***/ "./src/s-exp/s-expression.ts":
/*!***********************************!*\
  !*** ./src/s-exp/s-expression.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LM = exports.lisp = exports.LS = exports.L = exports.S = exports.defaultConfig = exports.defaultReservedNames = undefined;
exports.SExpression = SExpression;
exports.LSX = LSX;

var _parser = __webpack_require__(/*! ./parser */ "./src/s-exp/parser.ts");

var _evaluate = __webpack_require__(/*! ./evaluate */ "./src/s-exp/evaluate.ts");

var _core = __webpack_require__(/*! ./operators/core */ "./src/s-exp/operators/core.ts");

var _core2 = _interopRequireDefault(_core);

var _arithmetic = __webpack_require__(/*! ./operators/arithmetic */ "./src/s-exp/operators/arithmetic.ts");

var _arithmetic2 = _interopRequireDefault(_arithmetic);

var _sequence = __webpack_require__(/*! ./operators/sequence */ "./src/s-exp/operators/sequence.ts");

var _sequence2 = _interopRequireDefault(_sequence);

var _jsx = __webpack_require__(/*! ./operators/jsx */ "./src/s-exp/operators/jsx.ts");

var _jsx2 = _interopRequireDefault(_jsx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln
var defaultReservedNames = exports.defaultReservedNames = {
    eval: '$eval',
    quote: '$quote',
    car: '$car',
    cdr: '$cdr',
    cons: '$cons',
    atom: '$atom',
    eq: '$eq',
    list: '$list',
    let: '$clisp-let',
    lambda: '$lambda',
    self: '$self',
    defun: '$defun',
    if: '$if',
    cond: '$cond',
    while: '$while',
    doWhile: '$do-while',
    until: '$until',
    doUntil: '$do-until',
    get: '$get',
    defvar: '$clisp-defvar',
    setq: '$clisp-setq',
    set: '$set',
    not: '$not',
    and: '$and',
    or: '$or',
    Template: 'Template'
};
var defaultConfig = exports.defaultConfig = {
    raiseOnUnresolvedSymbol: false,
    enableEvaluate: true,
    enableHereDoc: true,
    enableTailCallOptimization: true,
    stripComments: false,
    strippedCommentValue: [],
    wrapExternalValue: true,
    returnMultipleRoot: false,
    reservedNames: defaultReservedNames,
    symbols: [],
    macros: [],
    funcs: []
};
function SExpression(config) {
    return function (strings) {
        for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            values[_key - 1] = arguments[_key];
        }

        var state = {
            strings: typeof strings === 'string' ? [strings] : strings,
            values: values || [],
            index: 0,
            pos: 0,
            line: 0,
            scopes: [{ isBlockLocal: false, scope: {} }],
            macroMap: new Map(config.macros.map(function (x) {
                return [x.name, x];
            })),
            funcMap: new Map(config.funcs.map(function (x) {
                return [x.name, x];
            })),
            symbolMap: new Map(config.symbols.map(function (x) {
                return [x.name, x];
            })),
            config: config
        };
        var s = (0, _parser.parse)(state);
        if (config.enableEvaluate) {
            for (var i = 0; i < s.length; i++) {
                s[i] = (0, _evaluate.evaluate)(state, s[i]);
            }
        }
        if (config.returnMultipleRoot) {
            return s.length === 1 ? s[0] : s;
        } else {
            return s[s.length - 1];
        }
    };
}
var S = exports.S = function () {
    var config = Object.assign({}, defaultConfig);
    config = (0, _core2.default)(config);
    config = (0, _arithmetic2.default)(config);
    config = (0, _sequence2.default)(config);
    config.enableEvaluate = false;
    config.returnMultipleRoot = true;
    return SExpression(config);
}();
var L = exports.L = function () {
    var config = Object.assign({}, defaultConfig);
    config = (0, _core2.default)(config);
    config = (0, _arithmetic2.default)(config);
    config = (0, _sequence2.default)(config);
    return SExpression(config);
}();
var LS = exports.LS = L;
var lisp = exports.lisp = L;
var LM = exports.LM = function () {
    var config = Object.assign({}, defaultConfig);
    config = (0, _core2.default)(config);
    config = (0, _arithmetic2.default)(config);
    config = (0, _sequence2.default)(config);
    config.returnMultipleRoot = true;
    return SExpression(config);
}();
function LSX(lsxConf) {
    var config = Object.assign({}, defaultConfig);
    config = (0, _core2.default)(config);
    config = (0, _arithmetic2.default)(config);
    config = (0, _sequence2.default)(config);
    config = (0, _jsx2.default)(config, lsxConf);
    return SExpression(config);
}

/***/ }),

/***/ "./src/s-exp/types.ts":
/*!****************************!*\
  !*** ./src/s-exp/types.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.quote = quote;
exports.isQuoted = isQuoted;
exports.isSymbol = isSymbol;
function quote(state, x) {
    return [{ symbol: state.config.reservedNames.quote }, x];
}
function isQuoted(state, x) {
    if (Array.isArray(x) && 0 < x.length) {
        var q = isSymbol(x);
        if (q && q.symbol === state.config.reservedNames.quote) {
            return true;
        }
    }
    return false;
}
function isSymbol(x, name) {
    if (x && (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && Object.prototype.hasOwnProperty.call(x, 'symbol')) {
        if (name !== void 0) {
            return x.symbol === name ? x : null;
        } else {
            return x;
        }
    }
    return null;
}

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Kazuhisa\Documents\GitHub\liyad\src\index.ts */"./src/index.ts");


/***/ })

/******/ });
//# sourceMappingURL=liyad.js.map