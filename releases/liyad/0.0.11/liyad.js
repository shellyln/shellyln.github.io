(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["liyad"] = factory();
	else
		root["liyad"] = factory();
})(window, function() {
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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: installCore, installArithmetic, installSequence, installJsx, installConcurrent, builtinOperators, builtinMacros, builtinSymbols, defaultReservedNames, defaultConfig, SExpression, SExpressionAsync, S, L, LS, lisp, L_async, LS_async, lisp_async, LM, LM_async, LSX, LSX_async */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "builtinOperators", function() { return builtinOperators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "builtinMacros", function() { return builtinMacros; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "builtinSymbols", function() { return builtinSymbols; });
/* harmony import */ var _s_exp_s_expression__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./s-exp/s-expression */ "./src/s-exp/s-expression.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultReservedNames", function() { return _s_exp_s_expression__WEBPACK_IMPORTED_MODULE_0__["defaultReservedNames"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultConfig", function() { return _s_exp_s_expression__WEBPACK_IMPORTED_MODULE_0__["defaultConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SExpression", function() { return _s_exp_s_expression__WEBPACK_IMPORTED_MODULE_0__["SExpression"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SExpressionAsync", function() { return _s_exp_s_expression__WEBPACK_IMPORTED_MODULE_0__["SExpressionAsync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "S", function() { return _s_exp_s_expression__WEBPACK_IMPORTED_MODULE_0__["S"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "L", function() { return _s_exp_s_expression__WEBPACK_IMPORTED_MODULE_0__["L"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LS", function() { return _s_exp_s_expression__WEBPACK_IMPORTED_MODULE_0__["LS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lisp", function() { return _s_exp_s_expression__WEBPACK_IMPORTED_MODULE_0__["lisp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "L_async", function() { return _s_exp_s_expression__WEBPACK_IMPORTED_MODULE_0__["L_async"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LS_async", function() { return _s_exp_s_expression__WEBPACK_IMPORTED_MODULE_0__["LS_async"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lisp_async", function() { return _s_exp_s_expression__WEBPACK_IMPORTED_MODULE_0__["lisp_async"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LM", function() { return _s_exp_s_expression__WEBPACK_IMPORTED_MODULE_0__["LM"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LM_async", function() { return _s_exp_s_expression__WEBPACK_IMPORTED_MODULE_0__["LM_async"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LSX", function() { return _s_exp_s_expression__WEBPACK_IMPORTED_MODULE_0__["LSX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LSX_async", function() { return _s_exp_s_expression__WEBPACK_IMPORTED_MODULE_0__["LSX_async"]; });

/* harmony import */ var _s_exp_operators_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./s-exp/operators/core */ "./src/s-exp/operators/core/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "installCore", function() { return _s_exp_operators_core__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _s_exp_operators_arithmetic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./s-exp/operators/arithmetic */ "./src/s-exp/operators/arithmetic/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "installArithmetic", function() { return _s_exp_operators_arithmetic__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _s_exp_operators_sequence__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./s-exp/operators/sequence */ "./src/s-exp/operators/sequence/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "installSequence", function() { return _s_exp_operators_sequence__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _s_exp_operators_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./s-exp/operators/jsx */ "./src/s-exp/operators/jsx/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "installJsx", function() { return _s_exp_operators_jsx__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _s_exp_operators_concurrent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./s-exp/operators/concurrent */ "./src/s-exp/operators/concurrent/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "installConcurrent", function() { return _s_exp_operators_concurrent__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _s_exp_operators_core_core_operator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./s-exp/operators/core/core.operator */ "./src/s-exp/operators/core/core.operator.ts");
/* harmony import */ var _s_exp_operators_core_core_macro__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./s-exp/operators/core/core.macro */ "./src/s-exp/operators/core/core.macro.ts");
/* harmony import */ var _s_exp_operators_core_core_symbol__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./s-exp/operators/core/core.symbol */ "./src/s-exp/operators/core/core.symbol.ts");
/* harmony import */ var _s_exp_operators_arithmetic_arithmetic_operator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./s-exp/operators/arithmetic/arithmetic.operator */ "./src/s-exp/operators/arithmetic/arithmetic.operator.ts");
/* harmony import */ var _s_exp_operators_arithmetic_arithmetic_macro__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./s-exp/operators/arithmetic/arithmetic.macro */ "./src/s-exp/operators/arithmetic/arithmetic.macro.ts");
/* harmony import */ var _s_exp_operators_arithmetic_arithmetic_symbol__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./s-exp/operators/arithmetic/arithmetic.symbol */ "./src/s-exp/operators/arithmetic/arithmetic.symbol.ts");
/* harmony import */ var _s_exp_operators_sequence_sequence_operator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./s-exp/operators/sequence/sequence.operator */ "./src/s-exp/operators/sequence/sequence.operator.ts");
/* harmony import */ var _s_exp_operators_sequence_sequence_macro__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./s-exp/operators/sequence/sequence.macro */ "./src/s-exp/operators/sequence/sequence.macro.ts");
/* harmony import */ var _s_exp_operators_sequence_sequence_symbol__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./s-exp/operators/sequence/sequence.symbol */ "./src/s-exp/operators/sequence/sequence.symbol.ts");
/* harmony import */ var _s_exp_operators_jsx_jsx_operator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./s-exp/operators/jsx/jsx.operator */ "./src/s-exp/operators/jsx/jsx.operator.ts");
/* harmony import */ var _s_exp_operators_jsx_jsx_macro__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./s-exp/operators/jsx/jsx.macro */ "./src/s-exp/operators/jsx/jsx.macro.ts");
/* harmony import */ var _s_exp_operators_jsx_jsx_symbol__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./s-exp/operators/jsx/jsx.symbol */ "./src/s-exp/operators/jsx/jsx.symbol.ts");
/* harmony import */ var _s_exp_operators_concurrent_concurrent_operator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./s-exp/operators/concurrent/concurrent.operator */ "./src/s-exp/operators/concurrent/concurrent.operator.ts");
/* harmony import */ var _s_exp_operators_concurrent_concurrent_macro__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./s-exp/operators/concurrent/concurrent.macro */ "./src/s-exp/operators/concurrent/concurrent.macro.ts");
/* harmony import */ var _s_exp_operators_concurrent_concurrent_symbol__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./s-exp/operators/concurrent/concurrent.symbol */ "./src/s-exp/operators/concurrent/concurrent.symbol.ts");
// Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln





















const builtinOperators = {
  core: _s_exp_operators_core_core_operator__WEBPACK_IMPORTED_MODULE_6__["default"],
  arithmetic: _s_exp_operators_arithmetic_arithmetic_operator__WEBPACK_IMPORTED_MODULE_9__["default"],
  sequence: _s_exp_operators_sequence_sequence_operator__WEBPACK_IMPORTED_MODULE_12__["default"],
  jsx: _s_exp_operators_jsx_jsx_operator__WEBPACK_IMPORTED_MODULE_15__["default"],
  concurrent: _s_exp_operators_concurrent_concurrent_operator__WEBPACK_IMPORTED_MODULE_18__["default"]
};
const builtinMacros = {
  core: _s_exp_operators_core_core_macro__WEBPACK_IMPORTED_MODULE_7__["default"],
  arithmetic: _s_exp_operators_arithmetic_arithmetic_macro__WEBPACK_IMPORTED_MODULE_10__["default"],
  sequence: _s_exp_operators_sequence_sequence_macro__WEBPACK_IMPORTED_MODULE_13__["default"],
  jsx: _s_exp_operators_jsx_jsx_macro__WEBPACK_IMPORTED_MODULE_16__["default"],
  concurrent: _s_exp_operators_concurrent_concurrent_macro__WEBPACK_IMPORTED_MODULE_19__["default"]
};
const builtinSymbols = {
  core: _s_exp_operators_core_core_symbol__WEBPACK_IMPORTED_MODULE_8__["default"],
  arithmetic: _s_exp_operators_arithmetic_arithmetic_symbol__WEBPACK_IMPORTED_MODULE_11__["default"],
  sequence: _s_exp_operators_sequence_sequence_symbol__WEBPACK_IMPORTED_MODULE_14__["default"],
  jsx: _s_exp_operators_jsx_jsx_symbol__WEBPACK_IMPORTED_MODULE_17__["default"],
  concurrent: _s_exp_operators_concurrent_concurrent_symbol__WEBPACK_IMPORTED_MODULE_20__["default"]
};

/***/ }),

/***/ "./src/lib/data.ts":
/*!*************************!*\
  !*** ./src/lib/data.ts ***!
  \*************************/
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

/***/ "./src/s-exp/errors.ts":
/*!*****************************!*\
  !*** ./src/s-exp/errors.ts ***!
  \*****************************/
/*! exports provided: setEvaluationCount, checkParamsLength */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setEvaluationCount", function() { return setEvaluationCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkParamsLength", function() { return checkParamsLength; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/s-exp/types.ts");
// Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln

function setEvaluationCount(state) {
  state.evalCount++;

  if (state.config.maxEvalCount && state.config.maxEvalCount < state.evalCount) {
    throw new _types__WEBPACK_IMPORTED_MODULE_0__["MaxEvaluationCountError"]();
  }
}
function checkParamsLength(name, args, min, max) {
  if (args.length < min) {
    throw new Error(`[SX] ${name}: Invalid argument length: expected: ${min} / args: ${args.length}.`);
  }

  if (max && max < args.length) {
    throw new Error(`[SX] ${name}: Invalid argument length: expected: ${max} / args: ${args.length}.`);
  }

  return true;
}

/***/ }),

/***/ "./src/s-exp/evaluate.ts":
/*!*******************************!*\
  !*** ./src/s-exp/evaluate.ts ***!
  \*******************************/
/*! exports provided: toNumber, resolveMacro, resolveFunctionSymbol, resolveValueSymbolScope, resolveValueSymbol, installScope, uninstallScope, getScope, getGlobalScope, optimizeTailCall, evaluate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toNumber", function() { return toNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveMacro", function() { return resolveMacro; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveFunctionSymbol", function() { return resolveFunctionSymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveValueSymbolScope", function() { return resolveValueSymbolScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveValueSymbol", function() { return resolveValueSymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "installScope", function() { return installScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uninstallScope", function() { return uninstallScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScope", function() { return getScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGlobalScope", function() { return getGlobalScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optimizeTailCall", function() { return optimizeTailCall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "evaluate", function() { return evaluate; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/s-exp/types.ts");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errors */ "./src/s-exp/errors.ts");
// Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln


function toNumber(x) {
  switch (typeof x) {
    case 'object':
    case 'symbol':
    case 'function':
      return NaN;

    default:
      return Number(x);
  }
}
function resolveMacro(state, x) {
  const macroInfo = state.macroMap.get(x.symbol);

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

  const funcInfo = state.funcMap.get(x.symbol);

  if (funcInfo) {
    return funcInfo.fn(state, x.symbol);
  } else {
    const v = resolveValueSymbol(state, x);

    if (typeof v === 'function') {
      return v;
    }

    if (state.config.funcSymbolResolverFallback) {
      return state.config.funcSymbolResolverFallback(state, x.symbol);
    }

    if (state.config.raiseOnUnresolvedSymbol) {
      throw new Error(`[SX] resolveFunctionSymbol: Unresolved symbol: ${x.symbol}.`);
    }

    return x.symbol;
  }
}
function resolveValueSymbolScope(state, x, nullIfNotDefined) {
  for (let i = state.scopes.length - 1; i > 0; i--) {
    const localScope = state.scopes[i];

    if (localScope && Object.prototype.hasOwnProperty.call(localScope.scope, x.symbol)) {
      return localScope.scope;
    }

    if (!localScope.isBlockLocal) {
      break;
    }
  }

  const globalScope = getGlobalScope(state);

  if (Object.prototype.hasOwnProperty.call(globalScope.scope, x.symbol)) {
    return globalScope.scope;
  }

  return nullIfNotDefined ? null : getScope(state).scope;
}
function resolveValueSymbol(state, x) {
  const scope = resolveValueSymbolScope(state, x, true);

  if (scope) {
    return scope[x.symbol];
  }

  const symInfo = state.symbolMap.get(x.symbol);

  if (symInfo) {
    return symInfo.fn(state, x.symbol);
  } else {
    if (state.config.valueSymbolResolverFallback) {
      return state.config.valueSymbolResolverFallback(state, x.symbol);
    }

    if (state.config.raiseOnUnresolvedSymbol) {
      throw new Error(`[SX] resolveValueSymbol: Unresolved symbol: ${x.symbol}.`);
    }

    return x.symbol;
  }
}
function installScope(state, scope, isBlockLocal) {
  state.scopes.push({
    isBlockLocal,
    scope
  });
}
function uninstallScope(state) {
  if (state.scopes.length < 2) {
    throw new Error(`[SX] uninstallScope: Unable to pop stack.`);
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
    const front = fnBody.slice(0, fnBody.length - 1);
    const tail = fnBody[fnBody.length - 1];

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
        return [[{
          symbol: state.config.reservedNames.until
        }, tail[1], ...front, ...tail[3].slice(1).map((x, idx) => [{
          symbol: state.config.reservedNames.let
        }, formalArgs[idx], x])], tail[2]];
      }
    }
  }

  return fnBody;
}
function evaluate(state, x) {
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["setEvaluationCount"])(state);

  if (x === null || x === void 0) {
    return x;
  }

  let r = x;

  for (;;) {
    if (Array.isArray(r)) {
      if (r.length === 0) {
        return r;
      }

      const sym = Object(_types__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])(r[0]);

      if (sym) {
        const m = resolveMacro(state, sym);

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

    Object(_errors__WEBPACK_IMPORTED_MODULE_1__["setEvaluationCount"])(state);
  }

  if (Array.isArray(r)) {
    r = r.slice(0);

    if (0 < r.length) {
      const sym = Object(_types__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])(r[0]);

      if (sym) {
        if (sym.symbol === state.config.reservedNames.quote) {
          return r.slice(1, 2)[0];
        }

        if (sym.symbol === state.config.reservedNames.eval) {
          return evaluate(state, r[1]);
        }
      }

      const sprs = [];

      for (let i = 1; i < r.length; i++) {
        const symSpr = Array.isArray(r[i]) && Object(_types__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])(r[i][0], state.config.reservedNames.spread);

        if (symSpr) {
          sprs.push(i);
          const a = evaluate(state, r[i][1]);
          r[i] = Array.isArray(a) ? a : [a];
        } else {
          r[i] = evaluate(state, r[i]);
        }
      }

      for (const i of sprs.reverse()) {
        r = r.slice(0, i).concat(r[i], r.slice(i + 1));
      }

      let fn;

      if (typeof r[0] === 'function') {
        fn = r[0];
      } else if (sym) {
        fn = resolveFunctionSymbol(state, sym);
      } else {
        fn = evaluate(state, r[0]);
      }

      if (typeof fn === 'function') {
        r = fn(...r.slice(1));
      } else {
        throw new Error(`[SX] evaluate: First item of list is not a function: ${JSON.stringify(r)}.`);
      }
    }
  } else if (state.config.wrapExternalValue && Object.prototype.hasOwnProperty.call(r, 'value')) {
    r = r.value;
  } else if (Object.prototype.hasOwnProperty.call(r, 'symbol')) {
    r = resolveValueSymbol(state, r);
  } else if (Object.prototype.hasOwnProperty.call(r, 'car')) {
    const car = evaluate(state, r.car);
    const cdr = evaluate(state, r.cdr);

    if (Array.isArray(cdr)) {
      const a = cdr.slice(0);
      a.unshift(car);
      r = a;
    } else {
      r = {
        car,
        cdr
      };
    }
  } else if (Object.prototype.hasOwnProperty.call(r, 'dotted')) {
    r = [evaluate(state, r.dotted)];
  } else if (Object.prototype.hasOwnProperty.call(r, 'comment')) {
    r = [];
  }

  return r;
}

/***/ }),

/***/ "./src/s-exp/operators/arithmetic/arithmetic.fn.ts":
/*!*********************************************************!*\
  !*** ./src/s-exp/operators/arithmetic/arithmetic.fn.ts ***!
  \*********************************************************/
/*! exports provided: $bitLShift, $$bitLShift, $bitSRShift, $$bitSRShift, $bitURShift, $$bitURShift, $bitNot, $$bitNot, $bitAnd, $$bitAnd, $bitOr, $$bitOr, $bitXor, $$bitXor, $add, $$add, $sub, $$sub, $mul, $$mul, $sup, $$sup, $div, $$div, $mod, $$mod, $max, $$max, $min, $$min, $avg, $$avg, $floor, $$floor, $ceil, $$ceil, $round, $$round, $abs, $$abs, $sign, $$sign */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$bitLShift", function() { return $bitLShift; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$bitLShift", function() { return $$bitLShift; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$bitSRShift", function() { return $bitSRShift; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$bitSRShift", function() { return $$bitSRShift; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$bitURShift", function() { return $bitURShift; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$bitURShift", function() { return $$bitURShift; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$bitNot", function() { return $bitNot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$bitNot", function() { return $$bitNot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$bitAnd", function() { return $bitAnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$bitAnd", function() { return $$bitAnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$bitOr", function() { return $bitOr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$bitOr", function() { return $$bitOr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$bitXor", function() { return $bitXor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$bitXor", function() { return $$bitXor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$add", function() { return $add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$add", function() { return $$add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$sub", function() { return $sub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$sub", function() { return $$sub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$mul", function() { return $mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$mul", function() { return $$mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$sup", function() { return $sup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$sup", function() { return $$sup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$div", function() { return $div; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$div", function() { return $$div; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$mod", function() { return $mod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$mod", function() { return $$mod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$max", function() { return $max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$max", function() { return $$max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$min", function() { return $min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$min", function() { return $$min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$avg", function() { return $avg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$avg", function() { return $$avg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$floor", function() { return $floor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$floor", function() { return $$floor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$ceil", function() { return $ceil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$ceil", function() { return $$ceil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$round", function() { return $round; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$round", function() { return $$round; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$abs", function() { return $abs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$abs", function() { return $$abs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$sign", function() { return $sign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$sign", function() { return $$sign; });
/* harmony import */ var _evaluate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../evaluate */ "./src/s-exp/evaluate.ts");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../errors */ "./src/s-exp/errors.ts");
/* harmony import */ var _core_core_fn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/core.fn */ "./src/s-exp/operators/core/core.fn.ts");
// Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln



const $bitLShift = (state, name) => (...args) => {
  // S expression: (<< number shift)
  //  -> S expr  : number
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$bitLShift', args, 2, 2);
  let {
    car,
    cdr
  } = Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_2__["$$firstAndSecond"])(...args);
  car = Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(car);
  cdr = Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(cdr);

  if (0 <= cdr) {
    return cdr < 32 ? car << cdr : 0;
  } else {
    return cdr > -32 ? car >>> -cdr : 0;
  }
};
const $$bitLShift = $bitLShift(null, null);
const $bitSRShift = (state, name) => (...args) => {
  // S expression: (>> number shift)
  //  -> S expr  : number
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$bitSRShift', args, 2, 2);
  let {
    car,
    cdr
  } = Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_2__["$$firstAndSecond"])(...args);
  car = Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(car);
  cdr = Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(cdr);

  if (0 <= cdr) {
    return cdr < 32 ? car >> cdr : car & 0x080000000 ? -1 : 0;
  } else {
    return cdr > -32 ? car << -cdr : 0;
  }
};
const $$bitSRShift = $bitSRShift(null, null);
const $bitURShift = (state, name) => (...args) => {
  // S expression: (>>> number shift)
  //  -> S expr  : number
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$bitURShift', args, 2, 2);
  let {
    car,
    cdr
  } = Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_2__["$$firstAndSecond"])(...args);
  car = Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(car);
  cdr = Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(cdr);

  if (0 <= cdr) {
    return cdr < 32 ? car >>> cdr : 0;
  } else {
    return cdr > -32 ? car << -cdr : 0;
  }
};
const $$bitURShift = $bitURShift(null, null);
const $bitNot = (state, name) => (...args) => {
  // S expression: ($bit-not number)
  //  -> S expr  : number
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$bitNot', args, 1, 1);
  const car = Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_2__["$$first"])(...args);
  return ~Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(car);
};
const $$bitNot = $bitNot(null, null);
const $bitAnd = (state, name) => (...args) => {
  // S expression: ($bit-and numberA numberB)
  //  -> S expr  : number
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$bitAnd', args, 2);
  const car = Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_2__["$$first"])(...args);
  return args.slice(1).reduce((prev, curr) => Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(prev) & Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(curr), Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(car));
};
const $$bitAnd = $bitAnd(null, null);
const $bitOr = (state, name) => (...args) => {
  // S expression: ($bit-or numberA numberB)
  //  -> S expr  : number
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$bitOr', args, 2);
  const car = Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_2__["$$first"])(...args);
  return args.slice(1).reduce((prev, curr) => Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(prev) | Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(curr), Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(car));
};
const $$bitOr = $bitOr(null, null);
const $bitXor = (state, name) => (...args) => {
  // S expression: ($bit-xor numberA numberB)
  //  -> S expr  : number
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$bitXor', args, 2);
  const car = Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_2__["$$first"])(...args);
  return args.slice(1).reduce((prev, curr) => Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(prev) ^ Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(curr), Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(car));
};
const $$bitXor = $bitXor(null, null);
const $add = (state, name) => (...args) => {
  // S expression: (+ number1 ... numberN)
  //  -> S expr  : number
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$add', args, 1);
  return args.reduce((prev, curr) => Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(prev) + Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(curr), 0);
};
const $$add = $add(null, null);
const $sub = (state, name) => (...args) => {
  // S expression: (- number1 ... numberN)
  //  -> S expr  : number
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$sub', args, 1);
  const car = Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_2__["$$first"])(...args);
  const last = args.slice(1);

  if (last.length === 0) {
    // negate
    return -Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(car);
  } else {
    // subtract
    return args.slice(1).reduce((prev, curr) => Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(prev) - Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(curr), Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(car));
  }
};
const $$sub = $sub(null, null);
const $mul = (state, name) => (...args) => {
  // S expression: (* number1 ... numberN)
  //  -> S expr  : number
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$mul', args, 2);
  const car = Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_2__["$$first"])(...args);
  return args.slice(1).reduce((prev, curr) => Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(prev) * Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(curr), Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(car));
};
const $$mul = $mul(null, null);
const $sup = (state, name) => (...args) => {
  // S expression: (** number1 ... numberN)
  //  -> S expr  : number
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$sup', args, 2);
  const car = Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_2__["$$first"])(...args);
  return args.slice(1).reduce((prev, curr) => Math.pow(Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(prev), Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(curr)), Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(car));
};
const $$sup = $sup(null, null);
const $div = (state, name) => (...args) => {
  // S expression: (/ number1 ... numberN)
  //  -> S expr  : number
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$div', args, 2);
  const car = Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_2__["$$first"])(...args);
  return args.slice(1).reduce((prev, curr) => Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(prev) / Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(curr), Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(car));
};
const $$div = $div(null, null);
const $mod = (state, name) => (...args) => {
  // S expression: (% number1 ... numberN)
  //  -> S expr  : number
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$mod', args, 2);
  const car = Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_2__["$$first"])(...args);
  return args.slice(1).reduce((prev, curr) => Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(prev) % Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(curr), Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(car));
};
const $$mod = $mod(null, null);
const $max = (state, name) => (...args) => {
  // S expression: ($max val1 ... valN)
  //  -> S expr  : value
  return Math.max(...args.map(x => Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(x)));
};
const $$max = $max(null, null);
const $min = (state, name) => (...args) => {
  // S expression: ($min val1 ... valN)
  //  -> S expr  : value
  return Math.min(...args.map(x => Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(x)));
};
const $$min = $min(null, null);
const $avg = (state, name) => (...args) => {
  // S expression: ($avg val1 ... valN)
  //  -> S expr  : value
  const a = args.map(x => Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(x));
  return a.length > 0 ? a.reduce((prev, curr) => prev + curr, 0) / a.length : NaN;
};
const $$avg = $avg(null, null);
const $floor = (state, name) => (...args) => {
  // S expression: ($floor number)
  //  -> S expr  : number
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$floor', args, 1, 1);
  return Math.floor(Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_2__["$$first"])(...args)));
};
const $$floor = $floor(null, null);
const $ceil = (state, name) => (...args) => {
  // S expression: ($ceil number)
  //  -> S expr  : number
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$ceil', args, 1, 1);
  return Math.ceil(Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_2__["$$first"])(...args)));
};
const $$ceil = $ceil(null, null);
const $round = (state, name) => (...args) => {
  // S expression: ($round number)
  //  -> S expr  : number
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$round', args, 1, 1);
  return Math.round(Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_2__["$$first"])(...args)));
};
const $$round = $round(null, null);
const $abs = (state, name) => (...args) => {
  // S expression: ($abs number)
  //  -> S expr  : number
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$abs', args, 1, 1);
  return Math.abs(Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_2__["$$first"])(...args)));
};
const $$abs = $abs(null, null);
const $sign = (state, name) => (...args) => {
  // S expression: ($sign number)
  //  -> S expr  : number
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$sign', args, 1, 1);
  return Math.sign(Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_2__["$$first"])(...args)));
};
const $$sign = $sign(null, null);

/***/ }),

/***/ "./src/s-exp/operators/arithmetic/arithmetic.macro.ts":
/*!************************************************************!*\
  !*** ./src/s-exp/operators/arithmetic/arithmetic.macro.ts ***!
  \************************************************************/
/*! exports provided: macros, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "macros", function() { return macros; });
// Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln
const macros = [];
/* harmony default export */ __webpack_exports__["default"] = (macros);

/***/ }),

/***/ "./src/s-exp/operators/arithmetic/arithmetic.operator.ts":
/*!***************************************************************!*\
  !*** ./src/s-exp/operators/arithmetic/arithmetic.operator.ts ***!
  \***************************************************************/
/*! exports provided: funcs, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "funcs", function() { return funcs; });
/* harmony import */ var _arithmetic_fn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arithmetic.fn */ "./src/s-exp/operators/arithmetic/arithmetic.fn.ts");
// Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln

const funcs = [{
  name: '<<',
  fn: _arithmetic_fn__WEBPACK_IMPORTED_MODULE_0__["$bitLShift"]
}, {
  name: '$bit-l-shift',
  fn: _arithmetic_fn__WEBPACK_IMPORTED_MODULE_0__["$bitLShift"]
}, {
  name: '>>',
  fn: _arithmetic_fn__WEBPACK_IMPORTED_MODULE_0__["$bitSRShift"]
}, {
  name: '$bit-sr-shift',
  fn: _arithmetic_fn__WEBPACK_IMPORTED_MODULE_0__["$bitSRShift"]
}, {
  name: '>>>',
  fn: _arithmetic_fn__WEBPACK_IMPORTED_MODULE_0__["$bitURShift"]
}, {
  name: '$bit-ur-shift',
  fn: _arithmetic_fn__WEBPACK_IMPORTED_MODULE_0__["$bitURShift"]
}, {
  name: '$bit-not',
  fn: _arithmetic_fn__WEBPACK_IMPORTED_MODULE_0__["$bitNot"]
}, {
  name: '$bit-and',
  fn: _arithmetic_fn__WEBPACK_IMPORTED_MODULE_0__["$bitAnd"]
}, {
  name: '$bit-or',
  fn: _arithmetic_fn__WEBPACK_IMPORTED_MODULE_0__["$bitOr"]
}, {
  name: '$bit-xor',
  fn: _arithmetic_fn__WEBPACK_IMPORTED_MODULE_0__["$bitXor"]
}, {
  name: '+',
  fn: _arithmetic_fn__WEBPACK_IMPORTED_MODULE_0__["$add"]
}, {
  name: '$add',
  fn: _arithmetic_fn__WEBPACK_IMPORTED_MODULE_0__["$add"]
}, {
  name: '$sum',
  fn: _arithmetic_fn__WEBPACK_IMPORTED_MODULE_0__["$add"]
}, {
  name: '-',
  fn: _arithmetic_fn__WEBPACK_IMPORTED_MODULE_0__["$sub"]
}, {
  name: '$sub',
  fn: _arithmetic_fn__WEBPACK_IMPORTED_MODULE_0__["$sub"]
}, {
  name: '$neg',
  fn: _arithmetic_fn__WEBPACK_IMPORTED_MODULE_0__["$sub"]
}, {
  name: '*',
  fn: _arithmetic_fn__WEBPACK_IMPORTED_MODULE_0__["$mul"]
}, {
  name: '$mul',
  fn: _arithmetic_fn__WEBPACK_IMPORTED_MODULE_0__["$mul"]
}, {
  name: '**',
  fn: _arithmetic_fn__WEBPACK_IMPORTED_MODULE_0__["$sup"]
}, {
  name: '$sup',
  fn: _arithmetic_fn__WEBPACK_IMPORTED_MODULE_0__["$sup"]
}, {
  name: '/',
  fn: _arithmetic_fn__WEBPACK_IMPORTED_MODULE_0__["$div"]
}, {
  name: '$div',
  fn: _arithmetic_fn__WEBPACK_IMPORTED_MODULE_0__["$div"]
}, {
  name: '%',
  fn: _arithmetic_fn__WEBPACK_IMPORTED_MODULE_0__["$mod"]
}, {
  name: '$mod',
  fn: _arithmetic_fn__WEBPACK_IMPORTED_MODULE_0__["$mod"]
}, {
  name: '$max',
  fn: _arithmetic_fn__WEBPACK_IMPORTED_MODULE_0__["$max"]
}, {
  name: '$min',
  fn: _arithmetic_fn__WEBPACK_IMPORTED_MODULE_0__["$min"]
}, {
  name: '$avg',
  fn: _arithmetic_fn__WEBPACK_IMPORTED_MODULE_0__["$avg"]
}, {
  name: '$floor',
  fn: _arithmetic_fn__WEBPACK_IMPORTED_MODULE_0__["$floor"]
}, {
  name: '$ceil',
  fn: _arithmetic_fn__WEBPACK_IMPORTED_MODULE_0__["$ceil"]
}, {
  name: '$round',
  fn: _arithmetic_fn__WEBPACK_IMPORTED_MODULE_0__["$round"]
}, {
  name: '$abs',
  fn: _arithmetic_fn__WEBPACK_IMPORTED_MODULE_0__["$abs"]
}, {
  name: '$sign',
  fn: _arithmetic_fn__WEBPACK_IMPORTED_MODULE_0__["$sign"]
}];
/* harmony default export */ __webpack_exports__["default"] = (funcs);

/***/ }),

/***/ "./src/s-exp/operators/arithmetic/arithmetic.symbol.ts":
/*!*************************************************************!*\
  !*** ./src/s-exp/operators/arithmetic/arithmetic.symbol.ts ***!
  \*************************************************************/
/*! exports provided: symbols, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "symbols", function() { return symbols; });
// Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln
const symbols = [];
/* harmony default export */ __webpack_exports__["default"] = (symbols);

/***/ }),

/***/ "./src/s-exp/operators/arithmetic/index.ts":
/*!*************************************************!*\
  !*** ./src/s-exp/operators/arithmetic/index.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return install; });
/* harmony import */ var _arithmetic_operator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arithmetic.operator */ "./src/s-exp/operators/arithmetic/arithmetic.operator.ts");
/* harmony import */ var _arithmetic_macro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arithmetic.macro */ "./src/s-exp/operators/arithmetic/arithmetic.macro.ts");
/* harmony import */ var _arithmetic_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./arithmetic.symbol */ "./src/s-exp/operators/arithmetic/arithmetic.symbol.ts");
// Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln



function install(config) {
  config.funcs = (config.funcs || []).concat(_arithmetic_operator__WEBPACK_IMPORTED_MODULE_0__["default"]);
  config.macros = (config.macros || []).concat(_arithmetic_macro__WEBPACK_IMPORTED_MODULE_1__["default"]);
  config.symbols = (config.symbols || []).concat(_arithmetic_symbol__WEBPACK_IMPORTED_MODULE_2__["default"]);
  return config;
}

/***/ }),

/***/ "./src/s-exp/operators/concurrent/concurrent.fn.ts":
/*!*********************************************************!*\
  !*** ./src/s-exp/operators/concurrent/concurrent.fn.ts ***!
  \*********************************************************/
/*! exports provided: $__letAsync, $$__letAsync, $__setAsync, $$__setAsync, $then, $$then, $resolveAll, $$resolveAll, $resolveAny, $$resolveAny, $resolvePipe, $$resolvePipe, $resolveFork, $$resolveFork */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$__letAsync", function() { return $__letAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$__letAsync", function() { return $$__letAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$__setAsync", function() { return $__setAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$__setAsync", function() { return $$__setAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$then", function() { return $then; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$then", function() { return $$then; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$resolveAll", function() { return $resolveAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$resolveAll", function() { return $$resolveAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$resolveAny", function() { return $resolveAny; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$resolveAny", function() { return $$resolveAny; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$resolvePipe", function() { return $resolvePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$resolvePipe", function() { return $$resolvePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$resolveFork", function() { return $resolveFork; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$resolveFork", function() { return $$resolveFork; });
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../errors */ "./src/s-exp/errors.ts");
/* harmony import */ var _core_core_fn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/core.fn */ "./src/s-exp/operators/core/core.fn.ts");
// Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln

 // tslint:disable-next-line:variable-name

const $__letAsync = (state, name) => (...args) => {
  // S expression: ($__let-async 'nameStrOrSymbol promise)
  //  -> S expr  : promise
  Object(_errors__WEBPACK_IMPORTED_MODULE_0__["checkParamsLength"])('$__letAsync', args, 2, 2);
  let promise = args[1];

  if (typeof promise !== 'object' || typeof promise.then !== 'function') {
    promise = Promise.resolve(promise);
  }

  promise = promise.then(v => {
    try {
      Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_1__["$__let"])(state, '')(args[0], v);
      return v;
    } catch (e) {
      return Promise.reject(e);
    }
  });
  return promise;
}; // tslint:disable-next-line:variable-name

const $$__letAsync = $__letAsync(null, null); // tslint:disable-next-line:variable-name

const $__setAsync = (state, name) => (...args) => {
  // S expression: ($__set-async 'nameOrListOfNameOrIndex promise)
  //  -> S expr  : promise
  Object(_errors__WEBPACK_IMPORTED_MODULE_0__["checkParamsLength"])('$__setAsync', args, 2, 2);
  let promise = args[1];

  if (typeof promise !== 'object' || typeof promise.then !== 'function') {
    promise = Promise.resolve(promise);
  }

  promise = promise.then(v => {
    try {
      Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_1__["$__set"])(state, '')(args[0], v);
      return v;
    } catch (e) {
      return Promise.reject(e);
    }
  });
  return promise;
}; // tslint:disable-next-line:variable-name

const $$__setAsync = $__setAsync(null, null);
const $then = (state, name) => (...args) => {
  // S expression: ($then promise (lambda (val) ...) (lambda (err) ...))
  //  -> S expr  : promise
  Object(_errors__WEBPACK_IMPORTED_MODULE_0__["checkParamsLength"])('$then', args, 2, 3);
  let promise = args[0];

  if (typeof promise !== 'object' || typeof promise.then !== 'function') {
    promise = Promise.resolve(promise);
  }

  if (typeof args[2] === 'function') {
    promise = promise.then(args[1], args[2]);
  } else {
    if (typeof args[1] !== 'function') {
      throw new Error(`[SX] $then: Invalid argument(s): args[1] is not function.`);
    }

    promise = promise.then(args[1]);
  }

  return promise;
};
const $$then = $then(null, null);
const $resolveAll = (state, name) => (...args) => {
  // S expression: ($resolve-all promise1 ... promiseN)
  //  -> S expr  : promise
  const promises = args.slice(0);

  for (let i = 0; i < promises.length; i++) {
    if (typeof promises[i] !== 'object' || typeof promises[i].then !== 'function') {
      promises[i] = Promise.resolve(promises[i]);
    }
  }

  return Promise.all(promises);
};
const $$resolveAll = $resolveAll(null, null);
const $resolveAny = (state, name) => (...args) => {
  // S expression: ($resolve-any promise1 ... promiseN)
  //  -> S expr  : promise
  const promises = args.slice(0);

  for (let i = 0; i < promises.length; i++) {
    if (typeof promises[i] !== 'object' || typeof promises[i].then !== 'function') {
      promises[i] = Promise.resolve(promises[i]);
    }
  } // https://stackoverflow.com/questions/39940152/get-first-fulfilled-promise
  // firstOf: This will return the value of the first fulfilled promise,
  //          or if all reject, an array of rejection reasons.


  const invert = p => new Promise((res, rej) => p.then(rej, res));

  const firstOf = ps => invert(Promise.all(ps.map(invert)));

  return firstOf(promises);
};
const $$resolveAny = $resolveAny(null, null);
const $resolvePipe = (state, name) => (...args) => {
  // S expression: ($resolve-pipe promise<val1> (lambda (val1) ... promiseOrVal2) (lambda (val2) ... promiseOrVal3) ... (lambda (valN-1) ... promiseOrValN))
  //  -> S expr  : promise
  // remarks: If the formal argument lambda is a non-lambda value, the value is then piped as is.
  Object(_errors__WEBPACK_IMPORTED_MODULE_0__["checkParamsLength"])('$resolvePipe', args, 1);
  let promise = args[0];

  if (typeof promise !== 'object' || typeof promise.then !== 'function') {
    promise = Promise.resolve(promise);
  }

  const lambdas = args.slice(1);

  for (let i = 0; i < lambdas.length; i++) {
    if (typeof lambdas[i] !== 'function') {
      const v = lambdas[i];

      lambdas[i] = () => v;
    }
  }

  let p = promise;

  for (const l of lambdas) {
    p = p.then(l);
  }

  return p;
};
const $$resolvePipe = $resolvePipe(null, null);
const $resolveFork = (state, name) => (...args) => {
  // S expression: ($resolve-fork promise<val1> (lambda (val1) ... promiseOrVal2a) ... (lambda (val1) ... promiseOrVal2z))
  //  -> S expr  : (promise<val2a> ... promise<val2z>)
  // remarks: If the formal argument lambda is a non-lambda value, the value is then piped as is.
  Object(_errors__WEBPACK_IMPORTED_MODULE_0__["checkParamsLength"])('$resolveFork', args, 1);
  let promise = args[0];

  if (typeof promise !== 'object' || typeof promise.then !== 'function') {
    promise = Promise.resolve(promise);
  }

  const lambdas = args.slice(1);

  for (let i = 0; i < lambdas.length; i++) {
    if (typeof lambdas[i] !== 'function') {
      const v = lambdas[i];

      lambdas[i] = () => v;
    }
  }

  const resolvers = new Array(lambdas.length);
  const rejectors = new Array(lambdas.length);
  const pa = [];

  for (let i = 0; i < lambdas.length; i++) {
    pa.push(new Promise((resolve, reject) => {
      resolvers[i] = v => {
        let lp = lambdas[i](v);

        if (typeof lp !== 'object' || typeof lp.then !== 'function') {
          lp = Promise.resolve(lp);
        }

        lp.then(x => resolve(x)).catch(e => reject(e));
      };

      rejectors[i] = reject;
    }));
  }

  promise.then(v => resolvers.forEach(f => f(v)), e => rejectors.forEach(f => f(e)));
  return pa;
};
const $$resolveFork = $resolveFork(null, null);

/***/ }),

/***/ "./src/s-exp/operators/concurrent/concurrent.macro.ts":
/*!************************************************************!*\
  !*** ./src/s-exp/operators/concurrent/concurrent.macro.ts ***!
  \************************************************************/
/*! exports provided: macros, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "macros", function() { return macros; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types */ "./src/s-exp/types.ts");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../errors */ "./src/s-exp/errors.ts");
// Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln


const macros = [{
  name: '$let-async',
  fn: (state, name) => list => {
    // S expression: ($let-async nameStrOrSymbol promise)
    //  -> S expr  : ($__let-async 'nameStrOrSymbol promise)
    Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$let-async', list, 3, 3);
    return [{
      symbol: '$__let-async'
    }, Object(_types__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, list[1]), list[2]];
  }
}, {
  name: '$set-async',
  fn: (state, name) => list => {
    // S expression: ($set-async nameOrListOfNameOrIndex promise)
    //  -> S expr  : ($__set-async 'nameOrListOfNameOrIndex promise)
    Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$set-async', list, 3, 3);
    return [{
      symbol: '$__set-async'
    }, Object(_types__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, list[1]), list[2]];
  }
}];
/* harmony default export */ __webpack_exports__["default"] = (macros);

/***/ }),

/***/ "./src/s-exp/operators/concurrent/concurrent.operator.ts":
/*!***************************************************************!*\
  !*** ./src/s-exp/operators/concurrent/concurrent.operator.ts ***!
  \***************************************************************/
/*! exports provided: funcs, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "funcs", function() { return funcs; });
/* harmony import */ var _concurrent_fn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./concurrent.fn */ "./src/s-exp/operators/concurrent/concurrent.fn.ts");
// Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln

const funcs = [{
  name: '$__let-async',
  fn: _concurrent_fn__WEBPACK_IMPORTED_MODULE_0__["$__letAsync"]
}, {
  name: '$__set-async',
  fn: _concurrent_fn__WEBPACK_IMPORTED_MODULE_0__["$__setAsync"]
}, {
  name: '$then',
  fn: _concurrent_fn__WEBPACK_IMPORTED_MODULE_0__["$then"]
}, {
  name: '$resolve-all',
  fn: _concurrent_fn__WEBPACK_IMPORTED_MODULE_0__["$resolveAll"]
}, {
  name: '$resolve-any',
  fn: _concurrent_fn__WEBPACK_IMPORTED_MODULE_0__["$resolveAny"]
}, {
  name: '$resolve-pipe',
  fn: _concurrent_fn__WEBPACK_IMPORTED_MODULE_0__["$resolvePipe"]
}, {
  name: '$resolve-fork',
  fn: _concurrent_fn__WEBPACK_IMPORTED_MODULE_0__["$resolveFork"]
}];
/* harmony default export */ __webpack_exports__["default"] = (funcs);

/***/ }),

/***/ "./src/s-exp/operators/concurrent/concurrent.symbol.ts":
/*!*************************************************************!*\
  !*** ./src/s-exp/operators/concurrent/concurrent.symbol.ts ***!
  \*************************************************************/
/*! exports provided: symbols, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "symbols", function() { return symbols; });
// Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln
const symbols = [];
/* harmony default export */ __webpack_exports__["default"] = (symbols);

/***/ }),

/***/ "./src/s-exp/operators/concurrent/index.ts":
/*!*************************************************!*\
  !*** ./src/s-exp/operators/concurrent/index.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return install; });
/* harmony import */ var _concurrent_operator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./concurrent.operator */ "./src/s-exp/operators/concurrent/concurrent.operator.ts");
/* harmony import */ var _concurrent_macro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./concurrent.macro */ "./src/s-exp/operators/concurrent/concurrent.macro.ts");
/* harmony import */ var _concurrent_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./concurrent.symbol */ "./src/s-exp/operators/concurrent/concurrent.symbol.ts");
// Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln



function install(config) {
  config.funcs = (config.funcs || []).concat(_concurrent_operator__WEBPACK_IMPORTED_MODULE_0__["default"]);
  config.macros = (config.macros || []).concat(_concurrent_macro__WEBPACK_IMPORTED_MODULE_1__["default"]);
  config.symbols = (config.symbols || []).concat(_concurrent_symbol__WEBPACK_IMPORTED_MODULE_2__["default"]);
  return config;
}

/***/ }),

/***/ "./src/s-exp/operators/core/core.fn.ts":
/*!*********************************************!*\
  !*** ./src/s-exp/operators/core/core.fn.ts ***!
  \*********************************************/
/*! exports provided: $car, $$car, $cdr, $$cdr, $cons, $$cons, $first, $$first, $second, $$second, $last, $$last, $rest, $$rest, $firstAndSecond, $$firstAndSecond, $atom, $$atom, $eq, $$eq, $notEq, $$notEq, $list, $$list, $__scope, $__globalScope, $__lambda, $__defun, $apply, $$apply, $__call, $__try, $raise, $$raise, $__if, $__ifNull, $__cond, $__while, $__doWhile, $__until, $__doUntil, $__repeat, $__for, $pipe, $$pipe, $__get, $__let, $__set, $boolean, $$boolean, $not, $$not, $__and, $$__and, $__or, $$__or, $ambiguousEq, $$ambiguousEq, $ambiguousNotEq, $$ambiguousNotEq, $lt, $$lt, $le, $$le, $gt, $$gt, $ge, $$ge, $isList, $$isList, $isString, $$isString, $isNumber, $$isNumber, $isNaN, $$isNaN, $isFinite, $$isFinite, $isInteger, $$isInteger, $toString, $$toString, $toNumber, $$toNumber, $__toObject, $objectAssign, $$objectAssign, $jsonStringify, $$jsonStringify, $jsonParse, $$jsonParse, $consoleLog, $$consoleLog, $consoleError, $$consoleError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$car", function() { return $car; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$car", function() { return $$car; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$cdr", function() { return $cdr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$cdr", function() { return $$cdr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$cons", function() { return $cons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$cons", function() { return $$cons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$first", function() { return $first; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$first", function() { return $$first; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$second", function() { return $second; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$second", function() { return $$second; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$last", function() { return $last; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$last", function() { return $$last; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$rest", function() { return $rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$rest", function() { return $$rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$firstAndSecond", function() { return $firstAndSecond; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$firstAndSecond", function() { return $$firstAndSecond; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$atom", function() { return $atom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$atom", function() { return $$atom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$eq", function() { return $eq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$eq", function() { return $$eq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$notEq", function() { return $notEq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$notEq", function() { return $$notEq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$list", function() { return $list; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$list", function() { return $$list; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$__scope", function() { return $__scope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$__globalScope", function() { return $__globalScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$__lambda", function() { return $__lambda; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$__defun", function() { return $__defun; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$apply", function() { return $apply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$apply", function() { return $$apply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$__call", function() { return $__call; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$__try", function() { return $__try; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$raise", function() { return $raise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$raise", function() { return $$raise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$__if", function() { return $__if; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$__ifNull", function() { return $__ifNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$__cond", function() { return $__cond; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$__while", function() { return $__while; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$__doWhile", function() { return $__doWhile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$__until", function() { return $__until; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$__doUntil", function() { return $__doUntil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$__repeat", function() { return $__repeat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$__for", function() { return $__for; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$pipe", function() { return $pipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$pipe", function() { return $$pipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$__get", function() { return $__get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$__let", function() { return $__let; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$__set", function() { return $__set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$boolean", function() { return $boolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$boolean", function() { return $$boolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$not", function() { return $not; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$not", function() { return $$not; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$__and", function() { return $__and; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$__and", function() { return $$__and; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$__or", function() { return $__or; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$__or", function() { return $$__or; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$ambiguousEq", function() { return $ambiguousEq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$ambiguousEq", function() { return $$ambiguousEq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$ambiguousNotEq", function() { return $ambiguousNotEq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$ambiguousNotEq", function() { return $$ambiguousNotEq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$lt", function() { return $lt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$lt", function() { return $$lt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$le", function() { return $le; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$le", function() { return $$le; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$gt", function() { return $gt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$gt", function() { return $$gt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$ge", function() { return $ge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$ge", function() { return $$ge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$isList", function() { return $isList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$isList", function() { return $$isList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$isString", function() { return $isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$isString", function() { return $$isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$isNumber", function() { return $isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$isNumber", function() { return $$isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$isNaN", function() { return $isNaN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$isNaN", function() { return $$isNaN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$isFinite", function() { return $isFinite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$isFinite", function() { return $$isFinite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$isInteger", function() { return $isInteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$isInteger", function() { return $$isInteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$toString", function() { return $toString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$toString", function() { return $$toString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$toNumber", function() { return $toNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$toNumber", function() { return $$toNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$__toObject", function() { return $__toObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$objectAssign", function() { return $objectAssign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$objectAssign", function() { return $$objectAssign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$jsonStringify", function() { return $jsonStringify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$jsonStringify", function() { return $$jsonStringify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$jsonParse", function() { return $jsonParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$jsonParse", function() { return $$jsonParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$consoleLog", function() { return $consoleLog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$consoleLog", function() { return $$consoleLog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$consoleError", function() { return $consoleError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$consoleError", function() { return $$consoleError; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types */ "./src/s-exp/types.ts");
/* harmony import */ var _evaluate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../evaluate */ "./src/s-exp/evaluate.ts");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../errors */ "./src/s-exp/errors.ts");
// Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln



const $car = (state, name) => (...args) => {
  // S expression: ($car '(first second ... last))
  //  -> S expr  : first
  Object(_errors__WEBPACK_IMPORTED_MODULE_2__["checkParamsLength"])('$car', args, 1, 1);
  const car = $$first(...args);

  if (!Array.isArray(car)) {
    throw new Error(`[SX] $car: Invalid argument(s): args[0] is not array.`);
  }

  if (car.length === 0) {
    throw new Error(`[SX] $car: Invalid argument(s): args[0] is nil.`);
  }

  return car[0];
};
const $$car = $car(null, null);
const $cdr = (state, name) => (...args) => {
  // S expression: ($cdr '(first second ... last))
  //  -> S expr  : (second ... last)
  Object(_errors__WEBPACK_IMPORTED_MODULE_2__["checkParamsLength"])('$cdr', args, 1, 1);
  const car = $$first(...args);

  if (!Array.isArray(car)) {
    throw new Error(`[SX] $car: Invalid argument(s): args[0] is not array.`);
  }

  if (car.length === 0) {
    throw new Error(`[SX] $car: Invalid argument(s): args[0] is nil.`);
  }

  return car.slice(1);
};
const $$cdr = $cdr(null, null);
const $cons = (state, name) => (...args) => {
  // S expression: ($cons arg1 '(arg2-item1 ...) ... argN)
  //  -> S expr  : (arg1 arg2-item1 ...)
  // S expression: ($cons arg1 nilOrNull ... argN)
  //  -> S expr  : (arg1)
  // S expression: ($cons arg1 arg2 ... argN)
  //  -> S expr  : arg1.arg2
  Object(_errors__WEBPACK_IMPORTED_MODULE_2__["checkParamsLength"])('$cons', args, 2, 2);
  let {
    car,
    cdr
  } = $$firstAndSecond(...args);

  if (car === null) {
    car = [];
  }

  if (cdr === null) {
    cdr = [];
  }

  if (Array.isArray(cdr)) {
    cdr.unshift(car);
    return cdr;
  } else {
    return {
      car,
      cdr
    };
  }
};
const $$cons = $cons(null, null);
const $first = (state, name) => (...args) => {
  // S expression: ($first first second ... last)
  //  -> S expr  : first
  // S expression: ($first)
  //  -> S expr  : null
  const car = args.slice(0, 1);
  return car.length === 1 ? car[0] : null;
};
const $$first = $first(null, null);
const $second = (state, name) => (...args) => {
  // S expression: ($second first second ... last)
  //  -> S expr  : second
  // S expression: ($second first)
  //  -> S expr  : null
  const cdr = args.slice(1, 2);
  return cdr.length === 1 ? cdr[0] : null;
};
const $$second = $second(null, null);
const $last = (state, name) => (...args) => {
  // S expression: ($last first second ... last)
  //  -> S expr  : last
  // S expression: ($last)
  //  -> S expr  : null
  const car = args.slice(args.length - 1, args.length);
  return car.length === 1 ? car[0] : null;
};
const $$last = $last(null, null);
const $rest = (state, name) => (...args) => {
  // S expression: ($rest first second ... last)
  //  -> S expr  : (second ... last)
  // S expression: ($rest first)
  //  -> S expr  : null
  const cdr = args.slice(1);
  return 0 < cdr.length ? cdr : null;
};
const $$rest = $rest(null, null);
const $firstAndSecond = (state, name) => (...args) => {
  // S expression: ($first-and-second first second ... last)
  //  -> S expr  : first.second
  let car = args.slice(0, 1);
  car = car.length === 1 ? car[0] : null;
  let cdr = args.slice(1, 2);
  cdr = cdr.length === 1 ? cdr[0] : null;
  return {
    car,
    cdr
  };
};
const $$firstAndSecond = $firstAndSecond(null, null);
const $atom = (state, name) => (...args) => {
  // S expression: ($atom arg1 ...)
  //  -> (if arg1 is list or dotted pair)  S expr  : false
  //  -> (if arg1 is nil or anything else) S expr  : true
  Object(_errors__WEBPACK_IMPORTED_MODULE_2__["checkParamsLength"])('$atom', args, 1, 1);
  const car = $$first(...args);

  if (car === null || car === void 0) {
    return true;
  }

  if (Array.isArray(car)) {
    if (car.length === 0) return true;else return false;
  }

  switch (typeof car) {
    case 'number':
    case 'string':
    case 'function':
    case 'boolean':
      return true;

    case 'object':
      return Object(_types__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])(car) ? true : false;
  }

  return false;
};
const $$atom = $atom(null, null);
const $eq = (state, name) => (...args) => {
  // S expression: ($eq arg1 arg2)
  //  -> (if arg1 === arg2)  S expr  : true
  //  -> (else)              S expr  : false
  Object(_errors__WEBPACK_IMPORTED_MODULE_2__["checkParamsLength"])('$eq', args, 2, 2);
  const {
    car,
    cdr
  } = $$firstAndSecond(...args);
  return car === cdr;
};
const $$eq = $eq(null, null);
const $notEq = (state, name) => (...args) => {
  // S expression: ($not-eq arg1 arg2)
  //  -> (if arg1 !== arg2)  S expr  : true
  //  -> (else)              S expr  : false
  Object(_errors__WEBPACK_IMPORTED_MODULE_2__["checkParamsLength"])('$notEq', args, 2, 2);
  const {
    car,
    cdr
  } = $$firstAndSecond(...args);
  return car !== cdr;
};
const $$notEq = $notEq(null, null);
const $list = (state, name) => (...args) => // S expression: ($list arg1 ... argN)
//  -> S expr  : (arg1 ... argN)
args.slice(0);
const $$list = $list(null, null); // tslint:disable-next-line:variable-name

const $__scope = (state, name) => (...args) => {
  // S expression: ($__scope isBlockLocal returnMultiple '((name value) | name ...) 'expr1 ... 'exprN)
  //  -> (if returnMultiple)  S expr  : [expr1 ... exprN]
  //  -> (else)               S expr  : exprN
  Object(_errors__WEBPACK_IMPORTED_MODULE_2__["checkParamsLength"])('$__scope', args, 3);
  const isBlockLocal = $$first(...args);
  const returnMultiple = $$second(...args);
  const {
    car,
    cdr
  } = $$firstAndSecond(...args.slice(2));
  let r = null;
  let scopeInstalled = false;

  try {
    const scope = {};

    if (Array.isArray(car)) {
      for (const x of car) {
        if (Array.isArray(x)) {
          const kv = $$firstAndSecond(...x);
          const kvSym = Object(_types__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])(kv.car);
          scope[kvSym ? kvSym.symbol : String(kv.car)] = Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["evaluate"])(state, kv.cdr);
        } else {
          const xSym = Object(_types__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])(x);
          scope[xSym ? xSym.symbol : String(x)] = null;
        }
      }
    }

    Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["installScope"])(state, scope, isBlockLocal);
    scopeInstalled = true;

    if (4 < args.length) {
      if (returnMultiple) {
        r = [];

        for (const x of args.slice(3)) {
          r.push(Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["evaluate"])(state, x));
        }
      } else {
        for (const x of args.slice(3)) {
          r = Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["evaluate"])(state, x);
        }
      }
    } else {
      r = Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["evaluate"])(state, cdr);
    }
  } finally {
    if (scopeInstalled) {
      Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["uninstallScope"])(state);
    }
  }

  return r;
}; // tslint:disable-next-line:variable-name

const $__globalScope = (state, name) => (...args) => {
  // S expression: ($__global returnMultiple 'expr1 ... 'exprN)
  //  -> (if returnMultiple)  S expr  : [expr1 ... exprN]
  //  -> (else)               S expr  : exprN
  Object(_errors__WEBPACK_IMPORTED_MODULE_2__["checkParamsLength"])('$__globalScope', args, 1);
  const returnMultiple = $$first(...args);
  const cdr = $$second(...args);
  let r = null;

  try {
    Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["installScope"])(state, Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["getGlobalScope"])(state).scope, true);

    if (2 < args.length) {
      if (returnMultiple) {
        r = [];

        for (const x of args.slice(1)) {
          r.push(Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["evaluate"])(state, x));
        }
      } else {
        for (const x of args.slice(1)) {
          r = Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["evaluate"])(state, x);
        }
      }
    } else {
      r = Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["evaluate"])(state, cdr);
    }
  } finally {
    Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["uninstallScope"])(state);
  }

  return r;
}; // tslint:disable-next-line:variable-name

const $__lambda = (state, name) => (...args) => {
  // S expression: ($__lambda '(sym1 ... symN) 'expr1 ... 'exprN)
  //  -> S expr  : fn
  Object(_errors__WEBPACK_IMPORTED_MODULE_2__["checkParamsLength"])('$__lambda', args, 2);
  const formalArgs = args[0];

  if (!Array.isArray(formalArgs)) {
    throw new Error(`[SX] $__lambda: Invalid argument(s): args[0] is not array.`);
  }

  let lastIsSpread = false;

  for (let i = 0; i < formalArgs.length; i++) {
    const fa = formalArgs[i];

    if (i === formalArgs.length - 1 && state.config.enableSpread && Array.isArray(fa) && Object(_types__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])(fa[0], state.config.reservedNames.spread)) {
      if (!Object(_types__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])(fa[1])) {
        throw new Error(`[SX] $__lambda: Invalid formal argument(s): item(s) of args[${i}] is not symbol.`);
      }

      formalArgs[i] = fa[1];
      lastIsSpread = true;
    } else if (!Object(_types__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])(fa)) {
      throw new Error(`[SX] $__lambda: Invalid formal argument(s): item(s) of args[${i}] is not symbol.`);
    }
  }

  let fnBody = args.slice(1);

  if (state.config.enableTailCallOptimization) {
    fnBody = Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["optimizeTailCall"])(state, formalArgs, fnBody);
  }

  const fn = (...actualArgs) => {
    if (actualArgs.length + (lastIsSpread ? 1 : 0) < formalArgs.length) {
      throw new Error(`[SX] func call: Actual args too short: actual ${actualArgs.length} / formal ${formalArgs.length}.`);
    }

    return $__scope(state, name)(false, false, [[state.config.reservedNames.self, fn], ...formalArgs.map((x, index) => [x.symbol, Object(_types__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, lastIsSpread && index === formalArgs.length - 1 ? actualArgs.slice(index) : actualArgs[index])])], ...fnBody);
  };

  return fn;
}; // tslint:disable-next-line:variable-name

const $__defun = (state, name) => (...args) => {
  // S expression: ($__defun 'name '(sym1 ... symN) 'expr ... 'expr)
  //  -> S expr  : fn
  Object(_errors__WEBPACK_IMPORTED_MODULE_2__["checkParamsLength"])('$__defun', args, 3);
  const car = $$first(...args);
  const fn = $__lambda(state, name)(...args.slice(1));
  state.funcMap.set(car.symbol, {
    name: car.symbol,
    fn: (st, nm) => fn
  });
  return fn;
};
const $apply = (state, name) => (...args) => {
  // S expression: ($apply fn arg1 ... argN)
  //  -> S expr  : fn'
  Object(_errors__WEBPACK_IMPORTED_MODULE_2__["checkParamsLength"])('$apply', args, 1);
  const car = $$first(...args);

  if (typeof car !== 'function') {
    throw new Error(`[SX] $apply: Invalid argument(s): args[0] is not function.`);
  }

  return (...p) => car.apply(null, args.slice(1).concat(p));
};
const $$apply = $apply(null, null); // tslint:disable-next-line:variable-name

const $__call = (state, name) => (...args) => {
  // S expression: ($__call thisArg 'symbol arg1 ... argN)
  //  -> S expr  : fn
  Object(_errors__WEBPACK_IMPORTED_MODULE_2__["checkParamsLength"])('$__call', args, 2);
  const {
    car,
    cdr
  } = $$firstAndSecond(...args);
  const sym = Object(_types__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])(cdr);
  return Function.prototype.apply.call(car[sym ? sym.symbol : Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["evaluate"])(state, cdr)], car, args.slice(2));
}; // tslint:disable-next-line:variable-name

const $__try = (state, name) => (...args) => {
  // S expression: ($__try 'expr 'catch-expr)
  //  ->                               S expr  : expr
  //  -> (if error is raised in expr)  S expr  : catch-expr
  Object(_errors__WEBPACK_IMPORTED_MODULE_2__["checkParamsLength"])('$__try', args, 1, 2);
  let r = [];

  try {
    r = Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["evaluate"])(state, args[0]);
  } catch (e) {
    if (e instanceof _types__WEBPACK_IMPORTED_MODULE_0__["FatalError"]) {
      throw e;
    }

    if (1 < args.length) {
      r = $__scope(state, name)(true, false, [['$error', Object(_types__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, e)], ['$parent', Object(_types__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["getScope"])(state))]], args[1]);
    } else {
      r = null;
    }
  }

  return r;
};
const $raise = (state, name) => (...args) => {
  // S expression: ($raise 'expr)
  //  -> S expr  : -
  const car = $$first(...args);
  throw car;
};
const $$raise = $raise(null, null); // tslint:disable-next-line:variable-name

const $__if = (state, name) => (...args) => {
  // S expression: ($__if condition 't-expr 'f-expr)
  //  -> (if condition is true ) S expr  : t-expr
  //  -> (if condition is false) S expr  : f-expr
  Object(_errors__WEBPACK_IMPORTED_MODULE_2__["checkParamsLength"])('$__if', args, 2, 3);
  const car = $$first(...args);
  let r = [];

  if ($$boolean(car)) {
    r = Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["evaluate"])(state, args[1]);
  } else {
    if (2 < args.length) {
      r = Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["evaluate"])(state, args[2]);
    } else {
      r = null;
    }
  }

  return r;
}; // tslint:disable-next-line:variable-name

const $__ifNull = (state, name) => (...args) => {
  // S expression: ($__if-null condition 'null-expr)
  //  -> (if condition is not null ) S expr  : condition
  //  -> (if condition is null)      S expr  : null-expr
  Object(_errors__WEBPACK_IMPORTED_MODULE_2__["checkParamsLength"])('$__ifNull', args, 2, 2);
  const {
    car,
    cdr
  } = $$firstAndSecond(...args);
  let r = [];

  if (!$$ambiguousEq(car, null)) {
    r = car;
  } else {
    r = Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["evaluate"])(state, cdr);
  }

  return r;
}; // tslint:disable-next-line:variable-name

const $__cond = (state, name) => (...args) => {
  // S expression: ($__cond 'cond1 'expr1 ... 'condN 'exprN)
  //  -> (if (eval condI) is true ) S expr  : exprI
  //  -> (if no matched)            S expr  : null
  Object(_errors__WEBPACK_IMPORTED_MODULE_2__["checkParamsLength"])('$__cond', args, 1);

  for (let i = 0; i < args.length - 1; i += 2) {
    const c = args[i];
    const x = args[i + 1];

    if ($$boolean(Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["evaluate"])(state, c))) {
      return Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["evaluate"])(state, x);
    }
  }

  return null;
}; // tslint:disable-next-line:variable-name

const $__while = (state, name) => (...args) => {
  // S expression: ($__while 'condition 'expr1 ... 'exprN)
  //  -> (if condition is true at least 1 or more times) S expr  : exprN
  //  -> (else)                                          S expr  : null
  Object(_errors__WEBPACK_IMPORTED_MODULE_2__["checkParamsLength"])('$__while', args, 1);
  const car = $$first(...args);
  const cdr = args.slice(1);
  let r = null;

  while ($$boolean(Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["evaluate"])(state, car))) {
    for (const x of cdr) {
      r = Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["evaluate"])(state, x);
    }
  }

  return r;
}; // tslint:disable-next-line:variable-name

const $__doWhile = (state, name) => (...args) => {
  // S expression: ($__do-while 'condition 'expr1 ... 'exprN)
  //  -> (if condition is true at least 1 or more times) S expr  : exprN
  //  -> (else)                                          S expr  : null
  Object(_errors__WEBPACK_IMPORTED_MODULE_2__["checkParamsLength"])('$__doWhile', args, 1);
  const car = $$first(...args);
  const cdr = args.slice(1);
  let r = null;

  do {
    for (const x of cdr) {
      r = Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["evaluate"])(state, x);
    }
  } while ($$boolean(Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["evaluate"])(state, car)));

  return r;
}; // tslint:disable-next-line:variable-name

const $__until = (state, name) => (...args) => {
  // S expression: ($__until 'condition 'expr1 ... 'exprN)
  //  -> (if condition is true at least 1 or more times) S expr  : exprN
  //  -> (else)                                          S expr  : null
  Object(_errors__WEBPACK_IMPORTED_MODULE_2__["checkParamsLength"])('$__until', args, 1);
  const car = $$first(...args);
  const cdr = args.slice(1);
  let r = null;

  while ($$not(Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["evaluate"])(state, car))) {
    for (const x of cdr) {
      r = Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["evaluate"])(state, x);
    }
  }

  return r;
}; // tslint:disable-next-line:variable-name

const $__doUntil = (state, name) => (...args) => {
  // S expression: ($__do-until 'condition 'expr1 ... 'exprN)
  //  -> (if condition is true at least 1 or more times) S expr  : exprN
  //  -> (else)                                          S expr  : null
  Object(_errors__WEBPACK_IMPORTED_MODULE_2__["checkParamsLength"])('$__doUntil', args, 1);
  const car = $$first(...args);
  const cdr = args.slice(1);
  let r = null;

  do {
    for (const x of cdr) {
      r = Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["evaluate"])(state, x);
    }
  } while ($$not(Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["evaluate"])(state, car)));

  return r;
}; // tslint:disable-next-line:variable-name

const $__repeat = (state, name) => (...args) => {
  // S expression: ($__repeat 'i n-times 'expr1 ... 'exprN)
  //  -> (if n > 0) S expr  : exprN
  //  -> (else)     S expr  : null
  Object(_errors__WEBPACK_IMPORTED_MODULE_2__["checkParamsLength"])('$__repeat', args, 2);
  const sym = Object(_types__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])($$first(...args));

  if (!sym) {
    throw new Error(`[SX] $__repeat: Invalid argument(s): item(s) of args[0] is not symbol.`);
  }

  const scope = Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["resolveValueSymbolScope"])(state, sym, false);
  const n = Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["toNumber"])($$second(...args));
  const cdr = args.slice(2);
  let r = null;

  for (let i = 0; i < n; i++) {
    scope[sym.symbol] = i;

    for (const x of cdr) {
      r = Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["evaluate"])(state, x);
    }
  }

  return r;
}; // tslint:disable-next-line:variable-name

const $__for = (state, name) => (...args) => {
  // S expression: ($__for 'x list 'expr1 ... 'exprN)
  //  -> (if list.length > 0) S expr  : exprN
  //  -> (else)               S expr  : null
  Object(_errors__WEBPACK_IMPORTED_MODULE_2__["checkParamsLength"])('$__for', args, 2);
  const sym = Object(_types__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])($$first(...args));

  if (!sym) {
    throw new Error(`[SX] $__for: Invalid argument(s): item(s) of args[0] is not symbol.`);
  }

  const scope = Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["resolveValueSymbolScope"])(state, sym, false);
  const list = $$second(...args);

  if (!Array.isArray(list)) {
    throw new Error(`[SX] $__for: Invalid argument(s): item(s) of args[1] is not array.`);
  }

  const cdr = args.slice(2);
  let r = null;

  for (const q of list) {
    scope[sym.symbol] = q;

    for (const x of cdr) {
      r = Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["evaluate"])(state, x);
    }
  }

  return r;
}; // tslint:disable-next-line:variable-name

const $pipe = (state, name) => (...args) => {
  // S expression: ($__get v fn1 ... fnN)
  //  -> S expr  : any
  Object(_errors__WEBPACK_IMPORTED_MODULE_2__["checkParamsLength"])('$pipe', args, 1);
  let v = args[0];

  for (let i = 1; i < args.length; i++) {
    v = args[i](v);
  }

  return v;
};
const $$pipe = $pipe(null, null); // tslint:disable-next-line:variable-name

const $__get = (state, name) => (...args) => {
  // S expression: ($__get 'nameOrIndex1 ... 'nameOrIndexN)
  //  -> S expr  : any
  Object(_errors__WEBPACK_IMPORTED_MODULE_2__["checkParamsLength"])('$__get', args, 1);
  let v = null;
  let sym = Object(_types__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])(args[0]);

  if (!sym) {
    switch (typeof args[0]) {
      case 'string':
      case 'number':
        sym = {
          symbol: String(args[0])
        };
        break;

      default:
        v = Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["evaluate"])(state, args[0]);
        break;
    }
  }

  if (sym) {
    const scope = Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["resolveValueSymbolScope"])(state, sym, true);

    if (!scope) {
      throw new Error(`[SX] $__get: Invalid argument(s): args[0]: symbol "${sym.symbol}" is not defined.`);
    }

    v = scope[sym.symbol];
  }

  for (let i = 1; i < args.length; i++) {
    let q = args[i];
    let inprog = true;

    while (inprog) {
      switch (typeof q) {
        case 'function':
          v = q(v);
          inprog = false;
          break;

        case 'object':
          if (Array.isArray(q)) {
            q = Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["evaluate"])(state, q);
          } else {
            sym = Object(_types__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])(q);

            if (sym) {
              q = sym.symbol;
            } else if (Object.prototype.hasOwnProperty.call(q, 'value')) {
              q = Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["evaluate"])(state, q);
            } else {
              throw new Error(`[SX] $__get: Invalid argument(s): invalid name path.`);
            }
          }

          break;

        case 'number':
          if (q < 0) {
            q = v.length + q;
          }

        // FALL_THRU

        case 'string':
          v = v[q];
          inprog = false;
          break;

        default:
          throw new Error(`[SX] $__get: Invalid argument(s): invalid name path.`);
      }
    }
  }

  return v;
}; // tslint:disable-next-line:variable-name

const $__let = (state, name) => (...args) => {
  // S expression: ($__let 'nameStrOrSymbol expr)
  //  -> S expr  : any
  Object(_errors__WEBPACK_IMPORTED_MODULE_2__["checkParamsLength"])('$__let', args, 2, 2);
  let sym = Object(_types__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])($$first(...args));

  if (!sym) {
    if (typeof args[0] === 'string') {
      sym = {
        symbol: args[0]
      };
    } else {
      throw new Error(`[SX] $__let: Invalid argument(s): invalid name.`);
    }
  }

  const scope = Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["resolveValueSymbolScope"])(state, sym, false);
  scope[sym.symbol] = args[1];
  return args[1];
}; // tslint:disable-next-line:variable-name

const $__set = (state, name) => (...args) => {
  // S expression: ($__set 'nameOrListOfNameOrIndex expr)
  //  -> S expr  : any
  Object(_errors__WEBPACK_IMPORTED_MODULE_2__["checkParamsLength"])('$__set', args, 2, 2);
  let path = [];

  if (Array.isArray(args[0])) {
    path = args[0];
  } else {
    path.push(args[0]);
  }

  let sym = Object(_types__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])(path[0]);

  if (!sym) {
    if (typeof path[0] === 'string') {
      sym = {
        symbol: path[0]
      };
    } else {
      throw new Error(`[SX] $__set: Invalid argument(s): invalid name.`);
    }
  }

  let scope = Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["resolveValueSymbolScope"])(state, sym, true);

  if (scope === null) {
    throw new Error(`[SX] $__set: Unresolved symbol: ${sym.symbol}.`);
  }

  let subst = false;

  for (let i = 0; i < path.length; i++) {
    let q = path[i];
    let inprog = true;
    const last = i === path.length - 1;

    while (inprog) {
      switch (typeof q) {
        case 'function':
          scope = q(scope);
          inprog = false;
          break;

        case 'object':
          if (Array.isArray(q)) {
            q = Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["evaluate"])(state, q);
          } else {
            sym = Object(_types__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])(q);

            if (sym) {
              q = sym.symbol;
            } else if (Object.prototype.hasOwnProperty.call(q, 'value')) {
              q = Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["evaluate"])(state, q);
            } else {
              throw new Error(`[SX] $__set: Invalid argument(s): invalid name.`);
            }
          }

          break;

        case 'number':
          if (q < 0) {
            q = scope.length + q;
          }

        // FALL_THRU

        case 'string':
          if (last) {
            scope[q] = args[1];
            subst = true;
          } else {
            scope = scope[q];
          }

          inprog = false;
          break;

        default:
          throw new Error(`[SX] $__set: Invalid argument(s): invalid name.`);
      }
    }
  }

  if (!subst) {
    throw new Error(`[SX] $__set: Invalid argument(s): last path is not lvalue.`);
  }

  return args[1];
};
const $boolean = (state, name) => (...args) => {
  // S expression: ($boolean any)
  //  -> S expr  : boolean
  Object(_errors__WEBPACK_IMPORTED_MODULE_2__["checkParamsLength"])('$boolean', args, 1, 1);
  const car = $$first(...args);
  if (Array.isArray(car) && car.length === 0) return false;else return Boolean(car);
};
const $$boolean = $boolean(null, null);
const $not = (state, name) => (...args) => {
  // S expression: ($not any)
  //  -> S expr  : boolean
  Object(_errors__WEBPACK_IMPORTED_MODULE_2__["checkParamsLength"])('$not', args, 1, 1);
  return !$$boolean(...args);
};
const $$not = $not(null, null); // tslint:disable-next-line:variable-name

const $__and = (state, name) => (...args) => {
  // S expression: ($__and 'expr1 ... 'exprN)
  //  -> (if all of ($boolean expr1) ... ($boolean exprN) are true) S expr  : exprN
  //  -> (else)                                                     S expr  : expr-i (false left most)
  Object(_errors__WEBPACK_IMPORTED_MODULE_2__["checkParamsLength"])('$__and', args, 1);
  let prev = null;

  for (let i = 0; i < args.length; i++) {
    const curr = Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["evaluate"])(state, args[i]);

    if (!$$boolean(curr)) {
      return curr;
    }

    prev = curr;
  }

  return prev;
}; // tslint:disable-next-line:variable-name

const $$__and = $__and(null, null); // tslint:disable-next-line:variable-name

const $__or = (state, name) => (...args) => {
  // S expression: ($__or 'expr1 ... 'exprN)
  //  -> (if any ($boolean expr1) ... ($boolean exprN) are true) S expr  : expr-i (where i: index of item first ($boolean expr-i) is to be true)
  //  -> (else)                                                  S expr  : expr-i (false right most)
  Object(_errors__WEBPACK_IMPORTED_MODULE_2__["checkParamsLength"])('$__or', args, 1);
  let prev = null;

  for (let i = 0; i < args.length; i++) {
    const curr = Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["evaluate"])(state, args[i]);

    if ($$boolean(curr)) {
      return curr;
    }

    prev = curr;
  }

  return prev;
}; // tslint:disable-next-line:variable-name

const $$__or = $__or(null, null);
const $ambiguousEq = (state, name) => (...args) => {
  // S expression: (== a b)
  //  -> S expr  : boolean
  Object(_errors__WEBPACK_IMPORTED_MODULE_2__["checkParamsLength"])('$ambiguousEq', args, 2, 2);
  let {
    car,
    cdr
  } = $$firstAndSecond(...args);
  if (Array.isArray(car) && car.length === 0) car = null;
  if (Array.isArray(cdr) && cdr.length === 0) cdr = null;
  if (car === void 0) car = null;
  if (cdr === void 0) cdr = null; // tslint:disable-next-line:triple-equals

  return car == cdr;
};
const $$ambiguousEq = $ambiguousEq(null, null);
const $ambiguousNotEq = (state, name) => (...args) => {
  // S expression: (!= a b)
  //  -> S expr  : boolean
  return !$$ambiguousEq(...args);
};
const $$ambiguousNotEq = $ambiguousNotEq(null, null);
const $lt = (state, name) => (...args) => {
  // S expression: (< a b)
  //  -> S expr  : boolean
  Object(_errors__WEBPACK_IMPORTED_MODULE_2__["checkParamsLength"])('$lt', args, 2, 2);
  const {
    car,
    cdr
  } = $$firstAndSecond(...args);
  return Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["toNumber"])(car) < Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["toNumber"])(cdr);
};
const $$lt = $lt(null, null);
const $le = (state, name) => (...args) => {
  // S expression: (<= a b)
  //  -> S expr  : boolean
  Object(_errors__WEBPACK_IMPORTED_MODULE_2__["checkParamsLength"])('$le', args, 2, 2);
  const {
    car,
    cdr
  } = $$firstAndSecond(...args);
  return Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["toNumber"])(car) <= Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["toNumber"])(cdr);
};
const $$le = $le(null, null);
const $gt = (state, name) => (...args) => {
  // S expression: (> a b)
  //  -> S expr  : boolean
  Object(_errors__WEBPACK_IMPORTED_MODULE_2__["checkParamsLength"])('$gt', args, 2, 2);
  const {
    car,
    cdr
  } = $$firstAndSecond(...args);
  return Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["toNumber"])(car) > Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["toNumber"])(cdr);
};
const $$gt = $gt(null, null);
const $ge = (state, name) => (...args) => {
  // S expression: (>= a b)
  //  -> S expr  : boolean
  Object(_errors__WEBPACK_IMPORTED_MODULE_2__["checkParamsLength"])('$ge', args, 2, 2);
  const {
    car,
    cdr
  } = $$firstAndSecond(...args);
  return Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["toNumber"])(car) >= Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["toNumber"])(cdr);
};
const $$ge = $ge(null, null);
const $isList = (state, name) => (...args) => {
  // S expression: ($is-list x)
  //  -> S expr  : boolean
  Object(_errors__WEBPACK_IMPORTED_MODULE_2__["checkParamsLength"])('$isList', args, 1, 1);
  return Array.isArray($$first(...args));
};
const $$isList = $isList(null, null);
const $isString = (state, name) => (...args) => {
  // S expression: ($is-string x)
  //  -> S expr  : boolean
  Object(_errors__WEBPACK_IMPORTED_MODULE_2__["checkParamsLength"])('$isString', args, 1, 1);
  return typeof $$first(...args) === 'string';
};
const $$isString = $isString(null, null);
const $isNumber = (state, name) => (...args) => {
  // S expression: ($is-number x)
  //  -> S expr  : boolean
  Object(_errors__WEBPACK_IMPORTED_MODULE_2__["checkParamsLength"])('$isNumber', args, 1, 1);
  return typeof $$first(...args) === 'number';
};
const $$isNumber = $isNumber(null, null);
const $isNaN = (state, name) => (...args) => {
  // S expression: ($is-NaN x)
  //  -> S expr  : boolean
  Object(_errors__WEBPACK_IMPORTED_MODULE_2__["checkParamsLength"])('$isNaN', args, 1, 1);
  return Number.isNaN($$first(...args));
};
const $$isNaN = $isNaN(null, null);
const $isFinite = (state, name) => (...args) => {
  // S expression: ($is-finate x)
  //  -> S expr  : boolean
  Object(_errors__WEBPACK_IMPORTED_MODULE_2__["checkParamsLength"])('$isFinite', args, 1, 1);
  return Number.isFinite($$first(...args));
};
const $$isFinite = $isFinite(null, null);
const $isInteger = (state, name) => (...args) => {
  // S expression: ($is-integer x)
  //  -> S expr  : boolean
  Object(_errors__WEBPACK_IMPORTED_MODULE_2__["checkParamsLength"])('$isInteger', args, 1, 1);
  return Number.isInteger($$first(...args));
};
const $$isInteger = $isInteger(null, null);
const $toString = (state, name) => (...args) => {
  // S expression: ($to-string x)
  //  -> S expr  : string
  Object(_errors__WEBPACK_IMPORTED_MODULE_2__["checkParamsLength"])('$toString', args, 1, 1);
  return String($$first(...args));
};
const $$toString = $toString(null, null);
const $toNumber = (state, name) => (...args) => {
  // S expression: ($to-number x)
  //  -> S expr  : number
  Object(_errors__WEBPACK_IMPORTED_MODULE_2__["checkParamsLength"])('$toNumber', args, 1, 1);
  return Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["toNumber"])($$first(...args));
};
const $$toNumber = $toNumber(null, null); // tslint:disable-next-line:variable-name

const $__toObject = (state, name) => (...args) => {
  // S expression: ($__# '(name value...)...)
  //  -> JSON    : {name: value, ...}
  const r = {};

  for (const x of args) {
    if (Array.isArray(x) && 0 < x.length) {
      const sym = Object(_types__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])(x[0]);
      const keyName = sym ? sym.symbol : String(Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["evaluate"])(state, x[0]));

      if (x.length === 1) {
        // S expression: (# ... (keyName) ...)
        //  -> JSON    : {..., keyName: true, ...}
        r[keyName] = true;
      } else if (x.length === 2) {
        // S expression: (# ... (keyName value) ...)
        //  -> JSON    : {..., keyName: value, ...}
        r[keyName] = Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["evaluate"])(state, x[1]);
      } else {
        // S expression: (# ... (keyName value1 value2 ...) ...)
        //  -> JSON    : {..., keyName: [value1, value2, ], ...}
        r[keyName] = Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["evaluate"])(state, [{
          symbol: state.config.reservedNames.list
        }].concat(x.slice(1)));
      }
    } else {
      throw new Error(`[SX] $__toObject: Invalid argument(s): args[?] is not array.`);
    }
  }

  return r;
};
const $objectAssign = (state, name) => (...args) => {
  // S expression: ($object-assign x)
  //  -> S expr  : string
  Object(_errors__WEBPACK_IMPORTED_MODULE_2__["checkParamsLength"])('$objectAssign', args, 1);
  return Object.assign(args[0], ...args.slice(1));
};
const $$objectAssign = $objectAssign(null, null);
const $jsonStringify = (state, name) => (...args) => {
  // S expression: ($json-stringify x)
  //  -> S expr  : string
  Object(_errors__WEBPACK_IMPORTED_MODULE_2__["checkParamsLength"])('$jsonStringify', args, 1, 1);
  return JSON.stringify($$first(...args));
};
const $$jsonStringify = $jsonStringify(null, null);
const $jsonParse = (state, name) => (...args) => {
  // S expression: ($json-parse x)
  //  -> S expr  : object
  Object(_errors__WEBPACK_IMPORTED_MODULE_2__["checkParamsLength"])('$jsonParse', args, 1, 1);
  const s = $$first(...args);

  if (typeof s !== 'string') {
    throw new Error(`[SX] $jsonParse: Invalid argument(s): args[0] is not string.`);
  }

  return JSON.parse(s);
};
const $$jsonParse = $jsonParse(null, null);
const $consoleLog = (state, name) => (...args) => {
  // S expression: ($console-log expr1 ... exprN)
  //  -> S expr  : null
  console.log(...args);
  return null;
};
const $$consoleLog = $consoleLog(null, null);
const $consoleError = (state, name) => (...args) => {
  // S expression: ($console-error expr1 ... exprN)
  //  -> S expr  : null
  console.error(...args);
  return null;
};
const $$consoleError = $consoleError(null, null);

/***/ }),

/***/ "./src/s-exp/operators/core/core.macro.ts":
/*!************************************************!*\
  !*** ./src/s-exp/operators/core/core.macro.ts ***!
  \************************************************/
/*! exports provided: macros, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "macros", function() { return macros; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types */ "./src/s-exp/types.ts");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../errors */ "./src/s-exp/errors.ts");
// Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln


const macros = [{
  name: '$scope',
  fn: (state, name) => list => {
    // S expression: ($scope isBlockLocal returnMultiple ((name value) | name ...) expr ... expr)
    //  -> S expr  : ($__scope isBlockLocal returnMultiple '((name value) | name ...) 'expr ... 'expr)
    return [{
      symbol: '$__scope'
    }, list[1], list[2], ...list.slice(3).map(x => Object(_types__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, x))];
  }
}, {
  name: '$local',
  fn: (state, name) => list => {
    // S expression: ($local ((name value) | name ...) expr ... expr)
    //  -> S expr  : ($__scope isBlockLocal=true returnMultiple=false '((name value) | name ...) 'expr ... 'expr)
    return [{
      symbol: '$__scope'
    }, true, false, ...list.slice(1).map(x => Object(_types__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, x))];
  }
}, {
  name: '$global',
  fn: (state, name) => list => {
    // S expression: ($__global expr1 ... exprN)
    //  -> S expr  : ($__global returnMultiple=false 'expr ... 'expr)
    return [{
      symbol: '$__global'
    }, false, ...list.slice(1).map(x => Object(_types__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, x))];
  }
}, {
  name: '$clisp-let',
  fn: (state, name) => list => {
    // S expression: ($clisp-let ((name value) | name ...) expr ... expr)
    //  -> S expr  : ($__scope isBlockLocal=true returnMultiple=false '((name value) | name ...) 'expr ... 'expr)
    return [{
      symbol: '$__scope'
    }, true, false, ...list.slice(1).map(x => Object(_types__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, x))];
  }
}, {
  name: '$lambda',
  fn: (state, name) => list => {
    // S expression: ($lambda (sym1 ... symN) expr ... expr)
    //  -> S expr  : ($__lambda '(sym1 ... symN) 'expr ... 'expr)
    return [{
      symbol: '$__lambda'
    }, ...list.slice(1).map(x => Object(_types__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, x))];
  }
}, {
  name: '->',
  fn: (state, name) => list => {
    // S expression: ($lambda (sym1 ... symN) expr ... expr)
    //  -> S expr  : ($__lambda '(sym1 ... symN) 'expr ... 'expr)
    return [{
      symbol: '$__lambda'
    }, ...list.slice(1).map(x => Object(_types__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, x))];
  }
}, {
  name: '$defun',
  fn: (state, name) => list => {
    // S expression: ($defun name (sym1 ... symN) expr ... expr)
    //  -> S expr  : ($__defun 'name '(sym1 ... symN) 'expr ... 'expr)
    return [{
      symbol: '$__defun'
    }, ...list.slice(1).map(x => Object(_types__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, x))];
  }
}, {
  name: '$call',
  fn: (state, name) => list => {
    // S expression: ($call thisArg symbol arg1 ... argN)
    //  -> S expr  : ($__call thisArg 'symbol arg1 ... argN)
    Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$call', list, 3);
    return [{
      symbol: '$__call'
    }, list[1], Object(_types__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, list[2]), ...list.slice(3)];
  }
}, {
  name: '$try',
  fn: (state, name) => list => {
    // S expression: ($try expr catch-expr)
    //  -> S expr  : ($__try 't-expr 'catch-expr)
    return [{
      symbol: '$__try'
    }, ...list.slice(1).map(x => Object(_types__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, x))];
  }
}, {
  name: '$if',
  fn: (state, name) => list => {
    // S expression: ($if cond t-expr f-expr)
    //  -> S expr  : ($__if cond 't-expr 'f-expr)
    return [{
      symbol: '$__if'
    }, list[1], ...list.slice(2).map(x => Object(_types__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, x))];
  }
}, {
  name: '$if-null',
  fn: (state, name) => list => {
    // S expression: ($if-null cond null-expr)
    //  -> S expr  : ($__if-null cont 'null-expr)
    return [{
      symbol: '$__if-null'
    }, list[1], ...list.slice(2).map(x => Object(_types__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, x))];
  }
}, {
  name: '??',
  fn: (state, name) => list => {
    // S expression: (?? cond null-expr)
    //  -> S expr  : ($__if-null cont 'null-expr)
    return [{
      symbol: '$__if-null'
    }, list[1], ...list.slice(2).map(x => Object(_types__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, x))];
  }
}, {
  name: '$cond',
  fn: (state, name) => list => {
    // S expression: ($cond cond1 expr1 ... condN exprN)
    //  -> S expr  : ($__cond 'cond1 'expr1 ... 'condN 'exprN)
    return [{
      symbol: '$__cond'
    }, ...list.slice(1).map(x => Object(_types__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, x))];
  }
}, {
  name: '$while',
  fn: (state, name) => list => {
    // S expression: ($while condition expr1 exprN)
    //  -> S expr  : ($__while 'condition 'expr1 'exprN)
    return [{
      symbol: '$__while'
    }, ...list.slice(1).map(x => Object(_types__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, x))];
  }
}, {
  name: '$do-while',
  fn: (state, name) => list => {
    // S expression: ($do-while condition expr1 exprN)
    //  -> S expr  : ($__do-while 'condition 'expr1 'exprN)
    return [{
      symbol: '$__do-while'
    }, ...list.slice(1).map(x => Object(_types__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, x))];
  }
}, {
  name: '$until',
  fn: (state, name) => list => {
    // S expression: ($until condition expr1 exprN)
    //  -> S expr  : ($__until 'condition 'expr1 'exprN)
    return [{
      symbol: '$__until'
    }, ...list.slice(1).map(x => Object(_types__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, x))];
  }
}, {
  name: '$do-until',
  fn: (state, name) => list => {
    // S expression: ($do-until condition expr1 exprN)
    //  -> S expr  : ($__do-until 'condition 'expr1 'exprN)
    return [{
      symbol: '$__do-until'
    }, ...list.slice(1).map(x => Object(_types__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, x))];
  }
}, {
  name: '$repeat',
  fn: (state, name) => list => {
    // S expression: ($repeat i of n-times expr1 exprN)
    //  -> S expr  : ($__repeat 'i n-times 'expr1 'exprN)
    const symOf = Object(_types__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])(list[2], 'of');

    if (!symOf) {
      throw new Error(`[SX] $repeat: Invalid syntax: missing 'of' keyword.`);
    }

    return [{
      symbol: '$__repeat'
    }, Object(_types__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, list[1]), list[3], ...list.slice(4).map(x => Object(_types__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, x))];
  }
}, {
  name: '$for',
  fn: (state, name) => list => {
    // S expression: ($for x of list expr1 exprN)
    //  -> S expr  : ($__for 'x list 'expr1 'exprN)
    const symOf = Object(_types__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])(list[2], 'of');

    if (!symOf) {
      throw new Error(`[SX] $for: Invalid syntax: missing 'of' keyword.`);
    }

    return [{
      symbol: '$__for'
    }, Object(_types__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, list[1]), list[3], ...list.slice(4).map(x => Object(_types__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, x))];
  }
}, {
  name: '$get',
  fn: (state, name) => list => {
    // S expression: ($get nameOrIndex1 ... nameOrIndexN)
    //  -> S expr  : ($__get 'nameOrIndex1 ... 'nameOrIndexN)
    return [{
      symbol: '$__get'
    }, ...list.slice(1).map(x => Object(_types__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, x))];
  }
}, {
  name: '$let',
  fn: (state, name) => list => {
    // S expression: ($let nameStrOrSymbol expr)
    //  -> S expr  : ($__let 'nameStrOrSymbol expr)
    Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$let', list, 3, 3);
    return [{
      symbol: '$__let'
    }, Object(_types__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, list[1]), list[2]];
  }
}, {
  name: '$clisp-defvar',
  fn: (state, name) => list => {
    // S expression: ($let nameStrOrSymbol expr)
    //  -> S expr  : ($__let 'nameStrOrSymbol expr)
    Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$clisp-defvar', list, 3, 3);
    return [{
      symbol: '$global'
    }, [{
      symbol: '$__let'
    }, Object(_types__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, list[1]), list[2]]];
  }
}, {
  name: '$set',
  fn: (state, name) => list => {
    // S expression: ($set nameOrListOfNameOrIndex expr)
    //  -> S expr  : ($__set 'nameOrListOfNameOrIndex expr)
    Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$set', list, 3, 3);
    return [{
      symbol: '$__set'
    }, Object(_types__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, list[1]), list[2]];
  }
}, {
  name: '$clisp-setq',
  fn: (state, name) => list => {
    // S expression: ($clisp-setq symbol expr)
    //  -> S expr  : ($__set 'symbol expr)
    Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$clisp-setq', list, 3, 3);
    return [{
      symbol: '$__set'
    }, Object(_types__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, list[1]), list[2]];
  }
}, {
  name: '$and',
  fn: (state, name) => list => {
    // S expression: ($and expr1 ... exprN)
    //  -> S expr  : ($__and 'expr1 ... 'exprN)
    return [{
      symbol: '$__and'
    }, ...list.slice(1).map(x => Object(_types__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, x))];
  }
}, {
  name: '$or',
  fn: (state, name) => list => {
    // S expression: ($or expr1 ... exprN)
    //  -> S expr  : ($__or 'expr1 ... 'exprN)
    return [{
      symbol: '$__or'
    }, ...list.slice(1).map(x => Object(_types__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, x))];
  }
}, {
  name: '#',
  fn: (state, name) => list => {
    // S expression: (# (name value...)...)
    //  -> S expr  : ($__# '(name value...)...)
    return [{
      symbol: '$__#'
    }, ...list.slice(1).map(x => Object(_types__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, x))];
  }
}];
/* harmony default export */ __webpack_exports__["default"] = (macros);

/***/ }),

/***/ "./src/s-exp/operators/core/core.operator.ts":
/*!***************************************************!*\
  !*** ./src/s-exp/operators/core/core.operator.ts ***!
  \***************************************************/
/*! exports provided: funcs, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "funcs", function() { return funcs; });
/* harmony import */ var _core_fn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.fn */ "./src/s-exp/operators/core/core.fn.ts");
// Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln

const funcs = [{
  name: '$car',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$car"]
}, {
  name: '$cdr',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$cdr"]
}, {
  name: '$cons',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$cons"]
}, {
  name: '$first',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$first"]
}, {
  name: '$second',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$second"]
}, {
  name: '$last',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$last"]
}, {
  name: '$progn',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$last"]
}, {
  name: '$rest',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$rest"]
}, {
  name: '$first-and-second',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$firstAndSecond"]
}, {
  name: '$atom',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$atom"]
}, {
  name: '$eq',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$eq"]
}, {
  name: '===',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$eq"]
}, {
  name: '$not-eq',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$notEq"]
}, {
  name: '!==',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$notEq"]
}, {
  name: '$list',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$list"]
}, {
  name: '$__scope',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$__scope"]
}, {
  name: '$__global',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$__globalScope"]
}, {
  name: '$__lambda',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$__lambda"]
}, {
  name: '$__defun',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$__defun"]
}, {
  name: '$apply',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$apply"]
}, {
  name: '$__call',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$__call"]
}, {
  name: '$__try',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$__try"]
}, {
  name: '$raise',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$raise"]
}, {
  name: '$__if',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$__if"]
}, {
  name: '$__if-null',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$__ifNull"]
}, {
  name: '$__cond',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$__cond"]
}, {
  name: '$__while',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$__while"]
}, {
  name: '$__do-while',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$__doWhile"]
}, {
  name: '$__until',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$__until"]
}, {
  name: '$__do-until',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$__doUntil"]
}, {
  name: '$__repeat',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$__repeat"]
}, {
  name: '$__for',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$__for"]
}, {
  name: '$pipe',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$pipe"]
}, {
  name: '$__get',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$__get"]
}, {
  name: '$__let',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$__let"]
}, {
  name: '$__set',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$__set"]
}, {
  name: '$boolean',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$boolean"]
}, {
  name: '$not',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$not"]
}, {
  name: '$__and',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$__and"]
}, {
  name: '$__or',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$__or"]
}, {
  name: '==',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$ambiguousEq"]
}, {
  name: '!=',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$ambiguousNotEq"]
}, {
  name: '<',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$lt"]
}, {
  name: '<=',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$le"]
}, {
  name: '>',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$gt"]
}, {
  name: '>=',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$ge"]
}, {
  name: '$is-list',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$isList"]
}, {
  name: '$is-string',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$isString"]
}, {
  name: '$is-number',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$isNumber"]
}, {
  name: '$is-NaN',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$isNaN"]
}, {
  name: '$is-finite',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$isFinite"]
}, {
  name: '$is-integer',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$isInteger"]
}, {
  name: '$to-string',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$toString"]
}, {
  name: '$to-number',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$toNumber"]
}, {
  name: '$__#',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$__toObject"]
}, {
  name: '$object-assign',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$objectAssign"]
}, {
  name: '$json-stringify',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$jsonStringify"]
}, {
  name: '$json-parse',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$jsonParse"]
}, {
  name: '$console-log',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$consoleLog"]
}, {
  name: '$console-error',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$consoleError"]
}];
/* harmony default export */ __webpack_exports__["default"] = (funcs);

/***/ }),

/***/ "./src/s-exp/operators/core/core.symbol.ts":
/*!*************************************************!*\
  !*** ./src/s-exp/operators/core/core.symbol.ts ***!
  \*************************************************/
/*! exports provided: symbols, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "symbols", function() { return symbols; });
// Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln
const symbols = [{
  name: 'nil',
  fn: (state, name) => []
}, {
  name: 'null',
  fn: (state, name) => null
}, {
  name: 'undefined',
  fn: (state, name) => void 0
}, {
  name: 'true',
  fn: (state, name) => true
}, {
  name: '#true',
  fn: (state, name) => true
}, {
  name: '#t',
  fn: (state, name) => true
}, {
  name: 'false',
  fn: (state, name) => false
}, {
  name: '#false',
  fn: (state, name) => false
}, {
  name: '#f',
  fn: (state, name) => false
}, {
  name: '#Number:Infinity',
  fn: (state, name) => Number.POSITIVE_INFINITY
}, {
  name: '+Infinity',
  fn: (state, name) => Number.POSITIVE_INFINITY
}, {
  name: '-Infinity',
  fn: (state, name) => Number.NEGATIVE_INFINITY
}, {
  name: '#Number:Epsilon',
  fn: (state, name) => Number.EPSILON
}, {
  name: '#Number:MaxValue',
  fn: (state, name) => Number.MAX_VALUE
}, {
  name: '#Number:MinValue',
  fn: (state, name) => Number.MIN_VALUE
}, {
  name: '#Number:MinSafeInteger',
  fn: (state, name) => Number.MAX_SAFE_INTEGER
}, {
  name: '#Number:MinSafeInteger',
  fn: (state, name) => Number.MIN_SAFE_INTEGER
}, {
  name: 'NaN',
  fn: (state, name) => Number.NaN
}];
/* harmony default export */ __webpack_exports__["default"] = (symbols);

/***/ }),

/***/ "./src/s-exp/operators/core/index.ts":
/*!*******************************************!*\
  !*** ./src/s-exp/operators/core/index.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return install; });
/* harmony import */ var _core_operator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.operator */ "./src/s-exp/operators/core/core.operator.ts");
/* harmony import */ var _core_macro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core.macro */ "./src/s-exp/operators/core/core.macro.ts");
/* harmony import */ var _core_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core.symbol */ "./src/s-exp/operators/core/core.symbol.ts");
// Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln



function install(config) {
  config.funcs = (config.funcs || []).concat(_core_operator__WEBPACK_IMPORTED_MODULE_0__["default"]);
  config.macros = (config.macros || []).concat(_core_macro__WEBPACK_IMPORTED_MODULE_1__["default"]);
  config.symbols = (config.symbols || []).concat(_core_symbol__WEBPACK_IMPORTED_MODULE_2__["default"]);
  return config;
}

/***/ }),

/***/ "./src/s-exp/operators/jsx/index.ts":
/*!******************************************!*\
  !*** ./src/s-exp/operators/jsx/index.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return install; });
/* harmony import */ var _jsx_operator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jsx.operator */ "./src/s-exp/operators/jsx/jsx.operator.ts");
/* harmony import */ var _jsx_macro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jsx.macro */ "./src/s-exp/operators/jsx/jsx.macro.ts");
/* harmony import */ var _jsx_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jsx.symbol */ "./src/s-exp/operators/jsx/jsx.symbol.ts");
/* harmony import */ var _jsx_fn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jsx.fn */ "./src/s-exp/operators/jsx/jsx.fn.ts");
// Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln




function install(config, lsxConf) {
  config.funcs = (config.funcs || []).concat(_jsx_operator__WEBPACK_IMPORTED_MODULE_0__["default"]);
  config.macros = (config.macros || []).concat(_jsx_macro__WEBPACK_IMPORTED_MODULE_1__["default"]);
  config.symbols = (config.symbols || []).concat(_jsx_symbol__WEBPACK_IMPORTED_MODULE_2__["default"]);
  const components = Object.entries(lsxConf.components).map(x => ({
    name: x[0],
    fn: Object(_jsx_fn__WEBPACK_IMPORTED_MODULE_3__["$jsxComponentTag"])(x[1])
  }));
  config.funcs = config.funcs.concat({
    name: config.reservedNames.Template,
    fn: Object(_jsx_fn__WEBPACK_IMPORTED_MODULE_3__["$jsxComponentTag"])(lsxConf.jsxFlagment)
  }, ...components);
  config.funcSymbolResolverFallback = _jsx_fn__WEBPACK_IMPORTED_MODULE_3__["$jsxStandardTag"];
  config.jsx = lsxConf.jsx;
  config.JsxFragment = lsxConf.jsxFlagment;
  return config;
}

/***/ }),

/***/ "./src/s-exp/operators/jsx/jsx.fn.ts":
/*!*******************************************!*\
  !*** ./src/s-exp/operators/jsx/jsx.fn.ts ***!
  \*******************************************/
/*! exports provided: $__outputIf, $__outputForOf, $jsxProps, $jsxStandardTag, $jsxComponentTag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$__outputIf", function() { return $__outputIf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$__outputForOf", function() { return $__outputForOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$jsxProps", function() { return $jsxProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$jsxStandardTag", function() { return $jsxStandardTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$jsxComponentTag", function() { return $jsxComponentTag; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types */ "./src/s-exp/types.ts");
/* harmony import */ var _evaluate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../evaluate */ "./src/s-exp/evaluate.ts");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../errors */ "./src/s-exp/errors.ts");
/* harmony import */ var _core_core_fn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/core.fn */ "./src/s-exp/operators/core/core.fn.ts");
// Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln



 // tslint:disable-next-line:variable-name

const $__outputIf = (state, name) => (...args) => {
  // S expression: ($__outputIf cond 'expr)
  //  -> (if cond is true ) S expr  : expr
  //  -> (if cond is false) S expr  : ()
  Object(_errors__WEBPACK_IMPORTED_MODULE_2__["checkParamsLength"])('$__outputIf', args, 2);
  const {
    car,
    cdr
  } = Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_3__["$$firstAndSecond"])(...args);
  let r = [];

  if (Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_3__["$$boolean"])(car)) {
    if (2 < args.length) {
      r.push({
        symbol: state.config.reservedNames.Template
      }, ...args.slice(1));
      r = Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["evaluate"])(state, r);
    } else {
      r = Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["evaluate"])(state, cdr);
    }
  }

  return r;
}; // tslint:disable-next-line:variable-name

const $__outputForOf = (state, name) => (...args) => {
  // S expression: ($__outputForOf list 'expr)
  //  -> S expr  : (Template expr ... expr)
  Object(_errors__WEBPACK_IMPORTED_MODULE_2__["checkParamsLength"])('$__outputForOf', args, 2);
  const car = Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_3__["$$first"])(...args);
  const r = [];

  if (Array.isArray(car)) {
    for (let i = 0; i < car.length; i++) {
      const x = car[i];
      const v = Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_3__["$__scope"])(state, name)(true, true, [['$data', Object(_types__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, x)], ['$index', i], ['$array', Object(_types__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, car)], ['$parent', Object(_types__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["getScope"])(state).scope)]], ...args.slice(1));

      if (2 < args.length && Array.isArray(v)) {
        r.push(...v);
      } else {
        r.push(v);
      }
    }
  } else {
    throw new Error(`[SX] $__outputForOf: Invalid argument(s): args[0] is not array.`);
  } // All of r items are already evaluated.


  return Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["evaluate"])(state, [{
    symbol: state.config.reservedNames.Template
  }].concat(r.map(z => [{
    symbol: state.config.reservedNames.quote
  }, z])));
};
const $jsxProps = (state, name) => (...args) => {
  // S expression: (@ (name value...)...)
  //  -> JSON    : {name: value, ...}
  const r = {};

  for (const x of args) {
    if (Array.isArray(x) && 0 < x.length) {
      const sym = Object(_types__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])(x[0]);
      const keyName = sym ? sym.symbol : String(Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["evaluate"])(state, x[0]));

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
              const styles = {};

              for (const s of x.slice(1)) {
                if (Array.isArray(s) && 1 < s.length) {
                  styles[String(Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["evaluate"])(state, s[0]))] = String(Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["evaluate"])(state, s[1]));
                } else if (typeof s === 'string') {
                  for (const v of s.split(';')) {
                    const matched = /^\s*(\S+)\s*:\s*(.*?)\s*$/.exec(v);

                    if (matched) {
                      styles[matched[1]] = matched[2];
                    }
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
              let classes = [];

              for (const c of x.slice(1)) {
                if (Array.isArray(c)) {
                  classes = classes.concat(c.map(z => Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["evaluate"])(state, z)));
                } else if (typeof c === 'string') {
                  classes = classes.concat(c.split(' '));
                }
              }

              const cs = [];

              const fn = a => a.forEach(c => c === null || c === void 0 ? void 0 : Array.isArray(c) ? fn(c) : cs.push(String(c)));

              fn(classes);
              r[keyName] = cs;
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
              let classes = '';

              for (const c of x.slice(1)) {
                let fragment = '';

                if (Array.isArray(c)) {
                  const cs = [];

                  const fn = a => a.map(z => Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["evaluate"])(state, z)).forEach(z => z === null || z === void 0 ? void 0 : Array.isArray(z) ? fn(z) : cs.push(String(z)));

                  fn(c);
                  fragment = cs.join(' ');
                } else if (typeof c === 'string') {
                  fragment = c;
                }

                if (0 < classes.length) classes += ' ' + fragment;else classes = fragment;
              }

              r[keyName] = classes;
            }
          }
          break;

        case 'dangerouslySetInnerHTML':
          {
            if (x.length === 1) {
              r[keyName] = {
                __html: ''
              };
            } else if (x.length >= 2) {
              r[keyName] = {
                __html: Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["evaluate"])(state, x[1])
              };
            } else {
              r[keyName] = {
                __html: Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["evaluate"])(state, [{
                  symbol: state.config.reservedNames.list
                }].concat(x.slice(1)))
              };
            }
          }
          break;

        case 'setInnerText':
          {
            if (x.length === 1) {
              r[keyName] = {
                __text: ''
              };
            } else if (x.length >= 2) {
              r[keyName] = {
                __text: Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["evaluate"])(state, x[1])
              };
            } else {
              r[keyName] = {
                __text: Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["evaluate"])(state, [{
                  symbol: state.config.reservedNames.list
                }].concat(x.slice(1)))
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
              r[keyName] = Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["evaluate"])(state, x[1]);
            } else {
              // S expression: (@ ... (keyName value1 value2 ...) ...)
              //  -> JSON    : {..., keyName: [value1, value2, ], ...}
              r[keyName] = Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["evaluate"])(state, [{
                symbol: state.config.reservedNames.list
              }].concat(x.slice(1)));
            }
          }
          break;
      }
    } else {
      throw new Error(`[SX] $jsxProps: Invalid argument(s): args[?] is not array.`);
    }
  }

  return r;
};

function getJsxTagsParams(state, ...args) {
  let children = args;
  let props = {};

  if (0 < args.length && Array.isArray(args[0])) {
    const sym = Object(_types__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])(args[0][0], '@');

    if (sym) {
      props = $jsxProps(state, '')(...args[0].slice(1));
      children = children.slice(1);
    }
  }

  return {
    props,
    children
  };
}

const $jsxStandardTag = (state, name) => (...args) => {
  const {
    props,
    children
  } = getJsxTagsParams(state, ...args);
  return state.config.jsx(name, props, ...children);
};
const $jsxComponentTag = component => (state, name) => (...args) => {
  const {
    props,
    children
  } = getJsxTagsParams(state, ...args);
  return state.config.jsx(component, props, ...children);
};

/***/ }),

/***/ "./src/s-exp/operators/jsx/jsx.macro.ts":
/*!**********************************************!*\
  !*** ./src/s-exp/operators/jsx/jsx.macro.ts ***!
  \**********************************************/
/*! exports provided: macros, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "macros", function() { return macros; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types */ "./src/s-exp/types.ts");
// Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln

const macros = [{
  name: '@',
  fn: (state, name) => list => {
    return Object(_types__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, list);
  }
}, {
  name: '$=if',
  fn: (state, name) => list => {
    // S expression: ($=if cond expr)
    //  -> S expr  : ($=__if cond 'expr)
    return [{
      symbol: '$=__if'
    }, list[1], ...list.slice(2).map(x => Object(_types__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, x))];
  }
}, {
  name: '$=for',
  fn: (state, name) => list => {
    // S expression: ($=for list expr)
    //  -> S expr  : ($=__for list 'expr)
    return [{
      symbol: '$=__for'
    }, list[1], ...list.slice(2).map(x => Object(_types__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, x))];
  }
}];
/* harmony default export */ __webpack_exports__["default"] = (macros);

/***/ }),

/***/ "./src/s-exp/operators/jsx/jsx.operator.ts":
/*!*************************************************!*\
  !*** ./src/s-exp/operators/jsx/jsx.operator.ts ***!
  \*************************************************/
/*! exports provided: funcs, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "funcs", function() { return funcs; });
/* harmony import */ var _jsx_fn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jsx.fn */ "./src/s-exp/operators/jsx/jsx.fn.ts");
// Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln

const funcs = [{
  name: '$=__if',
  fn: _jsx_fn__WEBPACK_IMPORTED_MODULE_0__["$__outputIf"]
}, {
  name: '$=__for',
  fn: _jsx_fn__WEBPACK_IMPORTED_MODULE_0__["$__outputForOf"]
}];
/* harmony default export */ __webpack_exports__["default"] = (funcs);

/***/ }),

/***/ "./src/s-exp/operators/jsx/jsx.symbol.ts":
/*!***********************************************!*\
  !*** ./src/s-exp/operators/jsx/jsx.symbol.ts ***!
  \***********************************************/
/*! exports provided: symbols, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "symbols", function() { return symbols; });
// Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln
const symbols = [];
/* harmony default export */ __webpack_exports__["default"] = (symbols);

/***/ }),

/***/ "./src/s-exp/operators/sequence/index.ts":
/*!***********************************************!*\
  !*** ./src/s-exp/operators/sequence/index.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return install; });
/* harmony import */ var _sequence_operator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sequence.operator */ "./src/s-exp/operators/sequence/sequence.operator.ts");
/* harmony import */ var _sequence_macro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sequence.macro */ "./src/s-exp/operators/sequence/sequence.macro.ts");
/* harmony import */ var _sequence_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sequence.symbol */ "./src/s-exp/operators/sequence/sequence.symbol.ts");
// Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln



function install(config) {
  config.funcs = (config.funcs || []).concat(_sequence_operator__WEBPACK_IMPORTED_MODULE_0__["default"]);
  config.macros = (config.macros || []).concat(_sequence_macro__WEBPACK_IMPORTED_MODULE_1__["default"]);
  config.symbols = (config.symbols || []).concat(_sequence_symbol__WEBPACK_IMPORTED_MODULE_2__["default"]);
  return config;
}

/***/ }),

/***/ "./src/s-exp/operators/sequence/sequence.fn.ts":
/*!*****************************************************!*\
  !*** ./src/s-exp/operators/sequence/sequence.fn.ts ***!
  \*****************************************************/
/*! exports provided: $range, $length, $$length, $trim, $$trim, $trimHead, $$trimHead, $trimTail, $$trimTail, $replaceAll, $$replaceAll, $split, $$split, $join, $$join, $concat, $$concat, $slice, $$slice, $top, $$top, $tail, $$tail, $__at, $$__at, $reverse, $$reverse, $reverseDestructive, $$reverseDestructive, $find, $$find, $filter, $$filter, $map, $$map, $reduce, $$reduce, $reduceFromTail, $$reduceFromTail, $sort, $$sort, $sortDestructive, $$sortDestructive, $groupEvery, $$groupEvery, $groupBy, $$groupBy, $orderBy, $$orderBy, $where, $$where */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$range", function() { return $range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$length", function() { return $length; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$length", function() { return $$length; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$trim", function() { return $trim; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$trim", function() { return $$trim; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$trimHead", function() { return $trimHead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$trimHead", function() { return $$trimHead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$trimTail", function() { return $trimTail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$trimTail", function() { return $$trimTail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$replaceAll", function() { return $replaceAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$replaceAll", function() { return $$replaceAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$split", function() { return $split; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$split", function() { return $$split; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$join", function() { return $join; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$join", function() { return $$join; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$concat", function() { return $concat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$concat", function() { return $$concat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$slice", function() { return $slice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$slice", function() { return $$slice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$top", function() { return $top; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$top", function() { return $$top; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$tail", function() { return $tail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$tail", function() { return $$tail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$__at", function() { return $__at; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$__at", function() { return $$__at; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$reverse", function() { return $reverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$reverse", function() { return $$reverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$reverseDestructive", function() { return $reverseDestructive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$reverseDestructive", function() { return $$reverseDestructive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$find", function() { return $find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$find", function() { return $$find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$filter", function() { return $filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$filter", function() { return $$filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$map", function() { return $map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$map", function() { return $$map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$reduce", function() { return $reduce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$reduce", function() { return $$reduce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$reduceFromTail", function() { return $reduceFromTail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$reduceFromTail", function() { return $$reduceFromTail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$sort", function() { return $sort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$sort", function() { return $$sort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$sortDestructive", function() { return $sortDestructive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$sortDestructive", function() { return $$sortDestructive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$groupEvery", function() { return $groupEvery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$groupEvery", function() { return $$groupEvery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$groupBy", function() { return $groupBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$groupBy", function() { return $$groupBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$orderBy", function() { return $orderBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$orderBy", function() { return $$orderBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$where", function() { return $where; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$where", function() { return $$where; });
/* harmony import */ var _evaluate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../evaluate */ "./src/s-exp/evaluate.ts");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../errors */ "./src/s-exp/errors.ts");
/* harmony import */ var _core_core_fn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/core.fn */ "./src/s-exp/operators/core/core.fn.ts");
/* harmony import */ var _lib_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/data */ "./src/lib/data.ts");
// Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln




const $range = (state, name) => (...args) => {
  // S expression: ($range start end)
  // S expression: ($range start end step)
  //  -> S expr  : list
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$range', args, 2, 3);
  const {
    car,
    cdr
  } = Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_2__["$$firstAndSecond"])(...args);
  const start = Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(car) || 0;
  const stop = Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(cdr) || 0;
  const step = (args.length > 2 ? Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(args[2]) || 0 : 0) || (start <= stop ? 1 : -1);
  const n = Math.sign(stop - start) + Math.sign(step) !== 0 ? Math.floor(Math.abs(stop - start) / Math.abs(step)) + 1 : 0;
  state.evalCount += n;
  Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["evaluate"])(state, 0);
  return Array.from({
    length: n
  }, (x, i) => start + i * step);
};
const $length = (state, name) => (...args) => {
  // S expression: ($length listOrString)
  //  -> S expr  : number
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$length', args, 1, 1);
  const car = Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_2__["$$first"])(...args);

  switch (typeof car) {
    case 'object':
      if (!('length' in car)) {
        break;
      }

    // FALL_THRU

    case 'string':
      return car.length;
  }

  throw new Error(`[SX] $length: Invalid argument type: object has no property 'length'.`);
};
const $$length = $length(null, null);
const $trim = (state, name) => (...args) => {
  // S expression: ($trim string)
  //  -> S expr  : string
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$trim', args, 1, 1);
  const car = Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_2__["$$first"])(...args);

  if (typeof car === 'string') {
    return car.trim();
  }

  throw new Error(`[SX] $trim: Invalid argument type: args[0] is not string.`);
};
const $$trim = $trim(null, null);
const $trimHead = (state, name) => (...args) => {
  // S expression: ($trim-head string)
  //  -> S expr  : string
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$trimHead', args, 1, 1);
  const car = Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_2__["$$first"])(...args);

  if (typeof car === 'string') {
    return car.trimLeft();
  }

  throw new Error(`[SX] $trimHead: Invalid argument type: args[0] is not string.`);
};
const $$trimHead = $trimHead(null, null);
const $trimTail = (state, name) => (...args) => {
  // S expression: ($trim-tail string)
  //  -> S expr  : string
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$trimTail', args, 1, 1);
  const car = Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_2__["$$first"])(...args);

  if (typeof car === 'string') {
    return car.trimRight();
  }

  throw new Error(`[SX] $trimTail: Invalid argument type: args[0] is not string.`);
};
const $$trimTail = $trimTail(null, null);
const $replaceAll = (state, name) => (...args) => {
  // S expression: ($replace-all src-string match-string replacement-string)
  //  -> S expr  : string
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$replaceAll', args, 3, 3);

  if (typeof args[0] === 'string' && typeof args[1] === 'string' && typeof args[2] === 'string') {
    return args[0].split(args[1]).join(args[2]);
  }

  throw new Error(`[SX] $replaceAll: Invalid argument type: args[0] or [1] or [2] is not string.`);
};
const $$replaceAll = $replaceAll(null, null);
const $split = (state, name) => (...args) => {
  // S expression: ($split src-string match-string)
  //  -> S expr  : (string ... string)
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$split', args, 2, 2);

  if (typeof args[0] === 'string' && typeof args[1] === 'string') {
    return args[0].split(args[1]);
  }

  throw new Error(`[SX] $split: Invalid argument type: args[0] or [1] is not string.`);
};
const $$split = $split(null, null);
const $join = (state, name) => (...args) => {
  // S expression: ($join '(str1 ... strN) separator)
  //  -> S expr  : (string ... string)
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$join', args, 1, 2);

  if (typeof Array.isArray(args[0])) {
    if (args.length > 1) {
      if (typeof args[1] === 'string') {
        return args[0].join(args[1]);
      }

      throw new Error(`[SX] $join: Invalid argument type: args[1] is not string.`);
    } else {
      return args[0].join();
    }
  }

  throw new Error(`[SX] $join: Invalid argument type: args[0] is not array.`);
};
const $$join = $join(null, null);
const $concat = (state, name) => (...args) => {
  // S expression: ($concat listOrString1 ... listOrStringN)
  //  -> S expr  : listOrString
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$concat', args, 1);
  const car = Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_2__["$$first"])(...args);

  switch (typeof car) {
    case 'object':
      if (!('concat' in car)) {
        break;
      }

    // FALL_THRU

    case 'string':
      return car.concat(...args.slice(1));
  }

  throw new Error(`[SX] $concat: Invalid argument type: object has no property 'concat'.`);
};
const $$concat = $concat(null, null);
const $slice = (state, name) => (...args) => {
  // S expression: ($slice start end listOrString)
  // S expression: ($slice start listOrString)
  //  -> S expr  : listOrString
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$slice', args, 2, 3);

  if (args.length === 3) {
    if (typeof args[2] === 'string' || Array.isArray(args[2])) {
      return args[2].slice(Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(args[0]), Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(args[1]));
    }
  }

  if (args.length === 2) {
    if (typeof args[1] === 'string' || Array.isArray(args[1])) {
      return args[1].slice(Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(args[0]));
    }
  }

  throw new Error(`[SX] $slice: Invalid argument type: args[${args.length - 1}] is not string or array.`);
};
const $$slice = $slice(null, null);
const $top = (state, name) => (...args) => {
  // S expression: ($top n listOrString)
  //  -> S expr  : listOrString
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$top', args, 2, 2);

  if (typeof args[1] === 'string' || Array.isArray(args[1])) {
    return args[1].slice(0, Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(args[0]));
  }

  throw new Error(`[SX] $top: Invalid argument type: args[1] is not string or array.`);
};
const $$top = $top(null, null);
const $tail = (state, name) => (...args) => {
  // S expression: ($tail n listOrString)
  //  -> S expr  : listOrString
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$tail', args, 2, 2);

  if (typeof args[1] === 'string' || Array.isArray(args[1])) {
    const n = -Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(args[0]);
    return args[1].slice(n >= 0 || Number.isNaN(n) ? args[1].length : n);
  }

  throw new Error(`[SX] $tail: Invalid argument type: args[1] is not string or array.`);
};
const $$tail = $tail(null, null); // tslint:disable-next-line:variable-name

const $__at = (state, name) => (...args) => {
  // S expression: ($__at index listOrString)
  //  -> S expr  : any
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$__at', args, 2, 2);
  const {
    car,
    cdr
  } = Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_2__["$$firstAndSecond"])(...args);
  return cdr[car];
}; // tslint:disable-next-line:variable-name

const $$__at = $__at(null, null);
const $reverse = (state, name) => (...args) => {
  // S expression: ($reverse listOrString)
  //  -> S expr  : listOrString
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$reverse', args, 1, 1);
  const car = Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_2__["$$first"])(...args);

  if (Array.isArray(car)) {
    return car.slice(0).reverse();
  }

  throw new Error(`[SX] $reverse: Invalid argument type: args[0] is not array.`);
};
const $$reverse = $reverse(null, null);
const $reverseDestructive = (state, name) => (...args) => {
  // S expression: ($reverse! listOrString)
  //  -> S expr  : listOrString
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$reverse!', args, 1, 1);
  const car = Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_2__["$$first"])(...args);

  if (Array.isArray(car)) {
    return car.reverse();
  }

  throw new Error(`[SX] $reverse!: Invalid argument type: args[0] is not array.`);
};
const $$reverseDestructive = $reverseDestructive(null, null);
const $find = (state, name) => (...args) => {
  // S expression: ($find list (lambda (v index array) (... boolean)))
  //  -> S expr  : list
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$find', args, 2, 2);
  const {
    car,
    cdr
  } = Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_2__["$$firstAndSecond"])(...args);

  if (Array.isArray(car)) {
    return car.find(cdr);
  }

  throw new Error(`[SX] $find: Invalid argument type: args[0] is not array.`);
};
const $$find = $find(null, null);
const $filter = (state, name) => (...args) => {
  // S expression: ($filter list (lambda (v index array) (... boolean)))
  //  -> S expr  : list
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$filter', args, 2, 2);
  const {
    car,
    cdr
  } = Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_2__["$$firstAndSecond"])(...args);

  if (Array.isArray(car)) {
    return car.filter(cdr);
  }

  throw new Error(`[SX] $filter: Invalid argument type: args[0] is not array.`);
};
const $$filter = $filter(null, null);
const $map = (state, name) => (...args) => {
  // S expression: ($map list (lambda (v index array) (... any)))
  //  -> S expr  : list
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$map', args, 2, 2);
  const {
    car,
    cdr
  } = Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_2__["$$firstAndSecond"])(...args);

  if (Array.isArray(car)) {
    return car.map(cdr);
  }

  throw new Error(`[SX] $map: Invalid argument type: args[0] is not array.`);
};
const $$map = $map(null, null);
const $reduce = (state, name) => (...args) => {
  // S expression: ($reduce list (lambda (acc v index array) (... any)) initial-value)
  // S expression: ($reduce list (lambda (acc v index array) (... any)))
  //  -> S expr  : list
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$reduce', args, 2, 3);
  const {
    car,
    cdr
  } = Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_2__["$$firstAndSecond"])(...args);

  if (Array.isArray(car)) {
    if (args.length < 3) {
      return car.reduce(cdr);
    } else {
      return car.reduce(cdr, args[2]);
    }
  }

  throw new Error(`[SX] $reduce: Invalid argument type: args[0] is not array.`);
};
const $$reduce = $reduce(null, null);
const $reduceFromTail = (state, name) => (...args) => {
  // S expression: ($reduce-from-tail list (lambda (acc v index array) (... any)) initial-value)
  // S expression: ($reduce-from-tail list (lambda (acc v index array) (... any)))
  //  -> S expr  : list
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$reduceFromTail', args, 2, 3);
  const {
    car,
    cdr
  } = Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_2__["$$firstAndSecond"])(...args);

  if (Array.isArray(car)) {
    if (args.length < 3) {
      return car.reduceRight(cdr);
    } else {
      return car.reduceRight(cdr, args[2]);
    }
  }

  throw new Error(`[SX] $reduceFromTail: Invalid argument type: args[0] is not array.`);
};
const $$reduceFromTail = $reduceFromTail(null, null);
const $sort = (state, name) => (...args) => {
  // S expression: ($sort list (lambda (a b) (... number_a-b)))
  //  -> S expr  : list
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$sort', args, 2, 2);
  const {
    car,
    cdr
  } = Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_2__["$$firstAndSecond"])(...args);

  if (Array.isArray(car)) {
    return car.slice(0).sort(cdr);
  }

  throw new Error(`[SX] $sort: Invalid argument type: args[0] is not array.`);
};
const $$sort = $sort(null, null);
const $sortDestructive = (state, name) => (...args) => {
  // S expression: ($sort! list (lambda (a b) (... number_a-b)))
  //  -> S expr  : list
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$sort!', args, 2, 2);
  const {
    car,
    cdr
  } = Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_2__["$$firstAndSecond"])(...args);

  if (Array.isArray(car)) {
    return car.sort(cdr);
  }

  throw new Error(`[SX] $sort!: Invalid argument type: args[0] is not array.`);
};
const $$sortDestructive = $sortDestructive(null, null);
const $groupEvery = (state, name) => (...args) => {
  // S expression: ($group-every optionsOrNumber (x1 ... xN))
  //  -> S expr  : ((x1 ... ) ... ( ... xN))
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$group-every', args, 2, 2);
  const {
    car,
    cdr
  } = Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_2__["$$firstAndSecond"])(...args);

  if (!Array.isArray(cdr)) {
    throw new Error(`[SX] $group-every: Invalid argument type: args[1] is not array.`);
  }

  return Object(_lib_data__WEBPACK_IMPORTED_MODULE_3__["query"])(cdr).groupEvery(car).select();
};
const $$groupEvery = $groupEvery(null, null);
const $groupBy = (state, name) => (...args) => {
  // S expression: ($group-by conditions (x1 ... xN))
  //  -> S expr  : ((x1 ... ) ... ( ... xN))
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$group-by', args, 2, 2);
  const {
    car,
    cdr
  } = Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_2__["$$firstAndSecond"])(...args);

  if (!Array.isArray(cdr)) {
    throw new Error(`[SX] $group-by: Invalid argument type: args[1] is not array.`);
  }

  return Object(_lib_data__WEBPACK_IMPORTED_MODULE_3__["query"])(cdr).groupBy(car).select();
};
const $$groupBy = $groupBy(null, null);
const $orderBy = (state, name) => (...args) => {
  // S expression: ($order-by conditions (x1 ... xN))
  //  -> S expr  : (x1 ... xN)
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$order-by', args, 2, 2);
  const {
    car,
    cdr
  } = Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_2__["$$firstAndSecond"])(...args);

  if (!Array.isArray(cdr)) {
    throw new Error(`[SX] $order-by: Invalid argument type: args[1] is not array.`);
  }

  return Object(_lib_data__WEBPACK_IMPORTED_MODULE_3__["query"])(cdr).orderBy(car).select();
};
const $$orderBy = $orderBy(null, null);
const $where = (state, name) => (...args) => {
  // S expression: ($where (-> (v index array) ... boolean) (x1 ... xN))
  //  -> S expr  : ((x1 ... ) ... ( ... xN))
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$where', args, 2, 2);
  const {
    car,
    cdr
  } = Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_2__["$$firstAndSecond"])(...args);

  if (typeof args[0] !== 'function') {
    throw new Error(`[SX] $where: Invalid argument type: args[0] is not function.`);
  }

  if (!Array.isArray(cdr)) {
    throw new Error(`[SX] $where: Invalid argument type: args[1] is not array.`);
  }

  return Object(_lib_data__WEBPACK_IMPORTED_MODULE_3__["query"])(cdr).where(car).select();
};
const $$where = $where(null, null);

/***/ }),

/***/ "./src/s-exp/operators/sequence/sequence.macro.ts":
/*!********************************************************!*\
  !*** ./src/s-exp/operators/sequence/sequence.macro.ts ***!
  \********************************************************/
/*! exports provided: macros, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "macros", function() { return macros; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types */ "./src/s-exp/types.ts");
// Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln

const macros = [{
  name: '$[',
  fn: (state, name) => list => {
    // S expression: ($[ index ] listOrObject)
    //  -> S expr  : ($__at listOrObject)
    const symOf = Object(_types__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])(list[2], ']');

    if (!symOf) {
      throw new Error(`[SX] $repeat: Invalid syntax: missing ']' keyword.`);
    }

    return [{
      symbol: '$__at'
    }, list[1], list[3]];
  }
}];
/* harmony default export */ __webpack_exports__["default"] = (macros);

/***/ }),

/***/ "./src/s-exp/operators/sequence/sequence.operator.ts":
/*!***********************************************************!*\
  !*** ./src/s-exp/operators/sequence/sequence.operator.ts ***!
  \***********************************************************/
/*! exports provided: funcs, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "funcs", function() { return funcs; });
/* harmony import */ var _sequence_fn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sequence.fn */ "./src/s-exp/operators/sequence/sequence.fn.ts");
// Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln

const funcs = [{
  name: '$range',
  fn: _sequence_fn__WEBPACK_IMPORTED_MODULE_0__["$range"]
}, {
  name: '$length',
  fn: _sequence_fn__WEBPACK_IMPORTED_MODULE_0__["$length"]
}, {
  name: '$trim',
  fn: _sequence_fn__WEBPACK_IMPORTED_MODULE_0__["$trim"]
}, {
  name: '$trim-head',
  fn: _sequence_fn__WEBPACK_IMPORTED_MODULE_0__["$trimHead"]
}, {
  name: '$trim-tail',
  fn: _sequence_fn__WEBPACK_IMPORTED_MODULE_0__["$trimTail"]
}, {
  name: '$replace-all',
  fn: _sequence_fn__WEBPACK_IMPORTED_MODULE_0__["$replaceAll"]
}, {
  name: '$split',
  fn: _sequence_fn__WEBPACK_IMPORTED_MODULE_0__["$split"]
}, {
  name: '$join',
  fn: _sequence_fn__WEBPACK_IMPORTED_MODULE_0__["$join"]
}, {
  name: '$concat',
  fn: _sequence_fn__WEBPACK_IMPORTED_MODULE_0__["$concat"]
}, {
  name: '$slice',
  fn: _sequence_fn__WEBPACK_IMPORTED_MODULE_0__["$slice"]
}, {
  name: '$top',
  fn: _sequence_fn__WEBPACK_IMPORTED_MODULE_0__["$top"]
}, {
  name: '$tail',
  fn: _sequence_fn__WEBPACK_IMPORTED_MODULE_0__["$tail"]
}, {
  name: '$__at',
  fn: _sequence_fn__WEBPACK_IMPORTED_MODULE_0__["$__at"]
}, {
  name: '$reverse',
  fn: _sequence_fn__WEBPACK_IMPORTED_MODULE_0__["$reverse"]
}, {
  name: '$reverse!',
  fn: _sequence_fn__WEBPACK_IMPORTED_MODULE_0__["$reverseDestructive"]
}, {
  name: '$find',
  fn: _sequence_fn__WEBPACK_IMPORTED_MODULE_0__["$find"]
}, {
  name: '$filter',
  fn: _sequence_fn__WEBPACK_IMPORTED_MODULE_0__["$filter"]
}, {
  name: '$map',
  fn: _sequence_fn__WEBPACK_IMPORTED_MODULE_0__["$map"]
}, {
  name: '$reduce',
  fn: _sequence_fn__WEBPACK_IMPORTED_MODULE_0__["$reduce"]
}, {
  name: '$reduce-from-head',
  fn: _sequence_fn__WEBPACK_IMPORTED_MODULE_0__["$reduce"]
}, {
  name: '$reduce-from-tail',
  fn: _sequence_fn__WEBPACK_IMPORTED_MODULE_0__["$reduceFromTail"]
}, {
  name: '$sort',
  fn: _sequence_fn__WEBPACK_IMPORTED_MODULE_0__["$sort"]
}, {
  name: '$sort!',
  fn: _sequence_fn__WEBPACK_IMPORTED_MODULE_0__["$sortDestructive"]
}, {
  name: '$group-every',
  fn: _sequence_fn__WEBPACK_IMPORTED_MODULE_0__["$groupEvery"]
}, {
  name: '$group-by',
  fn: _sequence_fn__WEBPACK_IMPORTED_MODULE_0__["$groupBy"]
}, {
  name: '$order-by',
  fn: _sequence_fn__WEBPACK_IMPORTED_MODULE_0__["$orderBy"]
}, {
  name: '$where',
  fn: _sequence_fn__WEBPACK_IMPORTED_MODULE_0__["$where"]
}];
/* harmony default export */ __webpack_exports__["default"] = (funcs);

/***/ }),

/***/ "./src/s-exp/operators/sequence/sequence.symbol.ts":
/*!*********************************************************!*\
  !*** ./src/s-exp/operators/sequence/sequence.symbol.ts ***!
  \*********************************************************/
/*! exports provided: symbols, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "symbols", function() { return symbols; });
// Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln
const symbols = [];
/* harmony default export */ __webpack_exports__["default"] = (symbols);

/***/ }),

/***/ "./src/s-exp/parser.ts":
/*!*****************************!*\
  !*** ./src/s-exp/parser.ts ***!
  \*****************************/
/*! exports provided: parse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/s-exp/types.ts");
// Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln


function isEOF(ch) {
  return typeof ch === 'object' && Object.prototype.hasOwnProperty.call(ch, 'eof');
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
  return `line: ${state.line} / strings: ${state.index} / pos: ${state.pos} :${state.strings.length > state.index ? state.strings[state.index].slice(state.pos, state.pos + 20) : ''}`;
}

function getChar(state, virtualEof) {
  if (state.strings.length <= state.index) {
    return {
      eof: true
    };
  }

  if (state.strings[state.index].length <= state.pos) {
    if (!state.values || state.values.length <= state.index) {
      state.pos = 0;
      state.index++;
      return getChar(state);
    } else {
      const ch = {
        value: state.values[state.index]
      };
      state.pos = 0;
      state.index++;
      return ch;
    }
  }

  if (virtualEof) {
    for (const v of virtualEof) {
      const ch = state.strings[state.index].slice(state.pos, state.pos + v.length);

      if (ch === v) {
        state.pos += v.length;
        state.line += ch.split('\n').length - 1;
        return {
          eof: false,
          eofSeq: v
        };
      }
    }
  }

  {
    let ch = state.strings[state.index].slice(state.pos, state.pos + 1);
    state.pos++;

    if (ch === '\n') {
      state.line++;
    }

    if (ch === '\\') {
      if (state.strings[state.index].length <= state.pos) {
        throw new Error(`[SX] getChar: Invalid syntax at: ${lookCurrentLineHint(state)}.`);
      }

      ch = state.strings[state.index].slice(state.pos, state.pos + 1);
      state.pos++;

      switch (ch) {
        case 'b':
          ch = '\b';
          break;

        case 't':
          ch = '\t';
          break;

        case 'n':
          ch = '\n';
          break;

        case 'v':
          ch = '\v';
          break;

        case 'f':
          ch = '\f';
          break;

        case 'r':
          ch = '\r';
          break;

        case 'U':
        case 'u':
          {
            if (state.strings[state.index].slice(state.pos, state.pos + 1) === '{') {
              let ch1 = '';

              for (let i = 0; i < 6; i++) {
                const ch2 = state.strings[state.index].slice(state.pos + i, state.pos + 1 + i);

                if (ch2 === '}') {
                  if (i === 0) {
                    throw new Error(`[SX] getChar: Invalid syntax at: ${lookCurrentLineHint(state)}.`);
                  }

                  state.pos += i;
                  break;
                } else if (!/^[0-9A-Fa-f]{1}$/.test(ch1)) {
                  throw new Error(`[SX] getChar: Invalid syntax at: ${lookCurrentLineHint(state)}.`);
                }

                ch1 += ch2;
              }

              if (state.strings[state.index].slice(state.pos, state.pos + 1) !== '}') {
                throw new Error(`[SX] getChar: Invalid syntax at: ${lookCurrentLineHint(state)}.`);
              }

              state.pos++;
              ch = String.fromCodePoint(Number.parseInt(ch1, 16));
            } else {
              const ch1 = state.strings[state.index].slice(state.pos, state.pos + 4);

              if (!/^[0-9A-Fa-f]{4}$/.test(ch1)) {
                throw new Error(`[SX] getChar: Invalid syntax at: ${lookCurrentLineHint(state)}.`);
              }

              state.pos += 4;
              ch = String.fromCodePoint(Number.parseInt(ch1, 16));
            }
          }
          break;
      }
    }

    return ch;
  }
}

function lookAheads(state, n, virtualEof) {
  const index = state.index;
  const pos = state.pos;
  const line = state.line;
  const chs = [];

  try {
    for (let i = 0; i < n; i++) {
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
  const index = state.index;
  const pos = state.pos;
  const line = state.line;
  let ch;

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
  let ch = lookAhead(state);

  while (!isEOF(ch) && isSpace(ch)) {
    getChar(state);
    ch = lookAhead(state);
  }
}

function parseNumber(state, virtualEof) {
  let s = '';
  let ch = lookAhead(state, virtualEof);

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
    throw new Error(`[SX] parseNumber: Invalid syntax at: ${lookCurrentLineHint(state)}.`);
  }

  return Number(s);
}

function parseSymbol(state, virtualEof) {
  let s = '';
  let ch = lookAhead(state, virtualEof);

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
      if (typeof ch === 'object' && Object.prototype.hasOwnProperty.call(ch, 'value')) {
        getChar(state, virtualEof);
        const v = ch.value;
        s += String(ch);
      } else {
        throw new Error(`[SX] parseSymbol: Invalid syntax at: ${lookCurrentLineHint(state)}.`);
      }
    }

    ch = lookAhead(state, virtualEof);
  }

  return {
    symbol: s
  };
}

function parseStringOrComment(state, eof, valuesStartSeq, valuesStopChar) {
  const eofSeqs = valuesStartSeq ? [...eof, valuesStartSeq] : eof;
  const strings = [];
  const values = [];

  for (;;) {
    let s = '';
    let ch = lookAhead(state, eofSeqs);

    while (!isEOF(ch)) {
      if (typeof ch === 'string') {
        getChar(state, eofSeqs);
        s += ch;
      } else {
        if (typeof ch === 'object' && Object.prototype.hasOwnProperty.call(ch, 'value')) {
          getChar(state, eofSeqs);
          const v = ch.value;
          s += String(ch);
        } else {
          throw new Error(`[SX] parseStringOrComment: Invalid syntax at: ${lookCurrentLineHint(state)}.`);
        }
      }

      ch = lookAhead(state, eofSeqs);
    }

    getChar(state, eofSeqs);

    if (ch.eof === true) {
      throw new _types__WEBPACK_IMPORTED_MODULE_0__["ScriptTerminationError"]('parseStringOrComment');
    }

    strings.push(s);

    if (ch.eofSeq === valuesStartSeq) {
      values.push(parseList(state, valuesStopChar, []));
    } else {
      break;
    }
  }

  return {
    strings,
    values
  };
}

function parseString(state) {
  return parseStringOrComment(state, ['"'], null, ')').strings[0];
}

function parseHereDoc(state, symbol, attrs) {
  const q = [symbol];

  if (attrs) {
    q.push(attrs);
  }

  const inner = parseStringOrComment(state, ['"""'], '%%%(', ')');

  for (let i = 0; i < inner.strings.length; i++) {
    q.push(inner.strings[i]);

    if (i < inner.values.length) {
      q.push(inner.values[i]);
    }
  }

  return q;
}

function parseSingleLineComment(state) {
  return {
    comment: parseStringOrComment(state, ['\r', '\n'], null, ')').strings[0]
  };
}

function parseMultiLineComment(state) {
  return {
    comment: parseStringOrComment(state, ['|#'], null, ')').strings[0]
  };
}

function parseOneToken(state) {
  skipWhitespaces(state);
  let ch = lookAhead(state);

  while (!isEOF(ch)) {
    switch (ch) {
      case ')':
        throw new Error(`[SX] parseOneToken: Invalid syntax at: ${lookCurrentLineHint(state)}.`);

      case '(':
        getChar(state);
        return parseList(state, ')', []);

      case "'":
        {
          getChar(state);
          skipWhitespaces(state);
          return Object(_types__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, parseOneToken(state));
        }

      case ".":
        {
          getChar(state);
          const aheads = lookAheads(state, 2);

          if (state.config.enableSpread && aheads[0] === '.' && aheads[1] === '.') {
            getChar(state);
            getChar(state);
            skipWhitespaces(state);
            return Object(_types__WEBPACK_IMPORTED_MODULE_0__["spread"])(state, parseOneToken(state));
          } else {
            skipWhitespaces(state);
            return {
              dotted: parseOneToken(state)
            };
          }
        }

      case '"':
        {
          getChar(state);
          const aheads = lookAheads(state, 4);

          if (state.config.enableHereDoc && aheads[0] === '"' && aheads[1] === '"') {
            let isHereDoc = true;

            if (isEOF(aheads[2]) || isSpace(aheads[2])) {// here doc
            } else if (isNumberFirstChar(aheads[2])) {
              // TODO: single +/- char is a symbol.
              if (aheads[2] === '+' || aheads[2] === '-') {
                if (!isNumberAfterSignChar(aheads[3])) {
                  isHereDoc = false;
                }
              } // here doc

            } else if (isSymbolFirstChar(aheads[2])) {
              isHereDoc = false;
            } else {// here doc
            }

            getChar(state);
            getChar(state);
            let sym = null;
            let attrs = null;

            if (isHereDoc) {
              sym = {
                symbol: state.config.reservedNames.Template
              };
            } else {
              sym = parseSymbol(state, ['@']);

              if (sym === null) {
                throw new Error(`[SX] parseOneToken: Invalid syntax at: ${lookCurrentLineHint(state)}.`);
              }

              if (typeof sym === 'number') {
                throw new Error(`[SX] parseOneToken: Invalid syntax at: ${lookCurrentLineHint(state)}.`);
              }

              const ahs = lookAheads(state, 2);

              if (ahs[0] === '@') {
                if (ahs[1] !== '{') {
                  throw new Error(`[SX] parseOneToken: Invalid syntax at: ${lookCurrentLineHint(state)}.`);
                }

                getChar(state);
                getChar(state);
                const a = parseList(state, '}', [{
                  symbol: '@'
                }]);

                if (Array.isArray(a)) {
                  attrs = a;
                }
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
          const aheads = lookAheads(state, 2);

          if (aheads[1] === '|') {
            getChar(state);
            getChar(state);
            return parseMultiLineComment(state);
          } else {
            return parseSymbol(state);
          }
        }

      default:
        if (typeof ch !== 'string') {
          if (typeof ch === 'object' && Object.prototype.hasOwnProperty.call(ch, 'value')) {
            getChar(state);
            return state.config.wrapExternalValue ? ch : ch.value;
          } else {
            throw new Error(`[SX] parseOneToken: Invalid syntax at: ${lookCurrentLineHint(state)}.`);
          }
        } else if (isSpace(ch)) {
          break;
        } else if (isNumberFirstChar(ch)) {
          // TODO: single +/- char is a symbol.
          if (ch === '+' || ch === '-') {
            const aheads = lookAheads(state, 2);

            if (!isNumberAfterSignChar(aheads[1])) {
              return parseSymbol(state);
            }
          }

          return parseNumber(state);
        } else if (isSymbolFirstChar(ch)) {
          return parseSymbol(state);
        } else {
          throw new Error(`[SX] parseOneToken: Invalid syntax at: ${lookCurrentLineHint(state)}.`);
        }

    }

    skipWhitespaces(state);
    ch = lookAhead(state);
  }

  throw new _types__WEBPACK_IMPORTED_MODULE_0__["ScriptTerminationError"]('parseOneToken');
}

function parseList(state, listStopChar, initialList) {
  const r = initialList.slice(0);
  let dotted = false;
  skipWhitespaces(state);
  let ch = lookAhead(state);

  while (!isEOF(ch)) {
    switch (ch) {
      case listStopChar:
        getChar(state);

        if (dotted) {
          return r[0];
        } else {
          return r;
        }

      default:
        {
          const t = parseOneToken(state);

          if (typeof t === 'object' && Object.prototype.hasOwnProperty.call(t, 'dotted')) {
            if (r.length !== 1) {
              throw new Error(`[SX] parseList: Invalid syntax at: ${lookCurrentLineHint(state)}.`);
            }

            dotted = true;

            if (Array.isArray(t)) {
              t.unshift(r.pop());
              r.push(t);
            } else {
              r.push({
                car: r.pop(),
                cdr: t.dotted
              });
            }
          } else if (typeof t === 'object' && Object.prototype.hasOwnProperty.call(t, 'comment')) {
            if (!state.config.stripComments) {
              r.push(t);
            }
          } else {
            if (dotted) {
              throw new Error(`[SX] parseList: Invalid syntax at: ${lookCurrentLineHint(state)}.`);
            }

            r.push(t);
          }
        }
        break;
    }

    skipWhitespaces(state);
    ch = lookAhead(state);
  }

  throw new _types__WEBPACK_IMPORTED_MODULE_0__["ScriptTerminationError"]('parseList');
}

function parse(state) {
  const r = [];
  skipWhitespaces(state);
  let ch = lookAhead(state);

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

          for (;;) {
            const t = parseOneToken(state);

            if (typeof t === 'object' && Object.prototype.hasOwnProperty.call(t, 'comment')) {
              if (!state.config.stripComments) {
                r.push(t);
              }
            } else {
              r.push(Object(_types__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, t));
              break;
            }
          }

          break;
        }

      case ';':
        getChar(state);

        if (state.config.stripComments) {
          parseSingleLineComment(state);
        } else {
          r.push(parseSingleLineComment(state));
        }

        break;

      case '#':
        {
          const aheads = lookAheads(state, 2);

          if (aheads[1] === '|') {
            getChar(state);
            getChar(state);

            if (state.config.stripComments) {
              parseMultiLineComment(state);
            } else {
              r.push(parseMultiLineComment(state));
            }
          } else {
            getChar(state);

            if (state.config.stripComments) {
              parseSingleLineComment(state);
            } else {
              r.push(parseSingleLineComment(state));
            }
          }
        }
        break;

      case '"':
        {
          const aheads = lookAheads(state, 3);

          if (aheads[1] === '"' && aheads[2] === '"') {
            r.push(parseOneToken(state));
            break;
          }
        }
      // FALL_THRU

      default:
        throw new Error(`[SX] parseInitialState: Invalid syntax at: ${lookCurrentLineHint(state)}.`);
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
/*! exports provided: defaultReservedNames, defaultConfig, SExpression, SExpressionAsync, S, L, LS, lisp, L_async, LS_async, lisp_async, LM, LM_async, LSX, LSX_async */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultReservedNames", function() { return defaultReservedNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultConfig", function() { return defaultConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SExpression", function() { return SExpression; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SExpressionAsync", function() { return SExpressionAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LS", function() { return LS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lisp", function() { return lisp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L_async", function() { return L_async; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LS_async", function() { return LS_async; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lisp_async", function() { return lisp_async; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LM", function() { return LM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LM_async", function() { return LM_async; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LSX", function() { return LSX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LSX_async", function() { return LSX_async; });
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parser */ "./src/s-exp/parser.ts");
/* harmony import */ var _evaluate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./evaluate */ "./src/s-exp/evaluate.ts");
/* harmony import */ var _operators_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./operators/core */ "./src/s-exp/operators/core/index.ts");
/* harmony import */ var _operators_arithmetic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./operators/arithmetic */ "./src/s-exp/operators/arithmetic/index.ts");
/* harmony import */ var _operators_sequence__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./operators/sequence */ "./src/s-exp/operators/sequence/index.ts");
/* harmony import */ var _operators_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./operators/jsx */ "./src/s-exp/operators/jsx/index.ts");
/* harmony import */ var _operators_concurrent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./operators/concurrent */ "./src/s-exp/operators/concurrent/index.ts");
// Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
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
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};








const defaultReservedNames = {
  eval: '$eval',
  quote: '$quote',
  spread: '$spread',
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
const defaultConfig = {
  raiseOnUnresolvedSymbol: false,
  enableEvaluate: true,
  enableHereDoc: true,
  enableSpread: true,
  enableTailCallOptimization: true,
  stripComments: false,
  wrapExternalValue: true,
  returnMultipleRoot: false,
  maxEvalCount: 0,
  reservedNames: defaultReservedNames,
  symbols: [],
  macros: [],
  funcs: []
};

function initState(config, globals, strings, values) {
  return {
    strings: typeof strings === 'string' ? [strings] : strings,
    values: values || [],
    index: 0,
    pos: 0,
    line: 0,
    evalCount: 0,
    scopes: [{
      isBlockLocal: false,
      scope: globals
    }],
    macroMap: new Map(config.macros.map(x => [x.name, x])),
    funcMap: new Map(config.funcs.map(x => [x.name, x])),
    symbolMap: new Map(config.symbols.map(x => [x.name, x])),
    config
  };
}

function resetState(state, strings, values) {
  state.strings = typeof strings === 'string' ? [strings] : strings;
  state.values = values || [];
  state.index = 0;
  state.pos = 0;
  state.line = 0;
  state.evalCount = 0;
  return state;
}

function SExpression(conf) {
  let config = conf || Object.assign({}, defaultConfig);
  let globalScope = {};
  let startup = [];

  const exec = (state, s) => {
    if (config.enableEvaluate) {
      for (let i = 0; i < s.length; i++) {
        s[i] = Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["evaluate"])(state, s[i]);
      }
    }

    if (config.returnMultipleRoot) {
      return s.length === 1 ? s[0] : s;
    } else {
      return s[s.length - 1];
    }
  };

  const f = (strings, ...values) => {
    const state = initState(config, Object.assign({}, globalScope), strings, values);
    return exec(state, startup.concat(Object(_parser__WEBPACK_IMPORTED_MODULE_0__["parse"])(state)));
  };

  f.evaluateAST = ast => {
    const state = initState(config, Object.assign({}, globalScope), '');
    return exec(state, startup.concat(ast));
  };

  f.repl = () => {
    const state = initState(config, Object.assign({}, globalScope), '');
    exec(state, startup.slice(0));

    const fRepl = (strings, ...values) => {
      resetState(state, strings, values);
      return exec(state, Object(_parser__WEBPACK_IMPORTED_MODULE_0__["parse"])(state));
    };

    return fRepl;
  };

  f.setGlobals = globals => {
    globalScope = Object.assign({}, globals || {});
    return f;
  };

  f.appendGlobals = globals => {
    globalScope = Object.assign({}, globalScope, globals || {});
    return f;
  };

  f.setStartup = (strings, ...values) => {
    const state = initState(config, Object.assign({}, globalScope), strings, values);
    startup = Object(_parser__WEBPACK_IMPORTED_MODULE_0__["parse"])(state);
    return f;
  };

  f.setStartupAST = ast => {
    startup = ast;
    return f;
  };

  f.appendStartup = (strings, ...values) => {
    const state = initState(config, Object.assign({}, globalScope), strings, values);
    startup = startup.concat(Object(_parser__WEBPACK_IMPORTED_MODULE_0__["parse"])(state));
    return f;
  };

  f.appendStartupAST = ast => {
    startup = startup.concat(ast);
    return f;
  };

  f.install = installer => {
    config = installer(config);
    return f;
  };

  return f;
}
function SExpressionAsync(conf) {
  let config = conf || Object.assign({}, defaultConfig);
  let globalScope = {};
  let startup = [];

  const exec = (state, s) => __awaiter(this, void 0, void 0, function* () {
    if (config.enableEvaluate) {
      for (let i = 0; i < s.length; i++) {
        s[i] = Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["evaluate"])(state, s[i]);

        if (typeof s[i] === 'object' && typeof s[i].then === 'function') {
          s[i] = yield s[i];
        }
      }
    }

    if (config.returnMultipleRoot) {
      return s.length === 1 ? s[0] : s;
    } else {
      return s[s.length - 1];
    }
  });

  const f = (strings, ...values) => __awaiter(this, void 0, void 0, function* () {
    const state = initState(config, Object.assign({}, globalScope), strings, values);
    return exec(state, startup.concat(Object(_parser__WEBPACK_IMPORTED_MODULE_0__["parse"])(state)));
  });

  f.evaluateAST = ast => {
    const state = initState(config, Object.assign({}, globalScope), '');
    return exec(state, startup.concat(ast));
  };

  f.repl = () => {
    const state = initState(config, Object.assign({}, globalScope), '');
    exec(state, startup.slice(0));

    const fRepl = (strings, ...values) => __awaiter(this, void 0, void 0, function* () {
      resetState(state, strings, values);
      return exec(state, Object(_parser__WEBPACK_IMPORTED_MODULE_0__["parse"])(state));
    });

    return fRepl;
  };

  f.setGlobals = globals => {
    globalScope = Object.assign({}, globals || {});
    return f;
  };

  f.appendGlobals = globals => {
    globalScope = Object.assign({}, globalScope, globals || {});
    return f;
  };

  f.setStartup = (strings, ...values) => {
    const state = initState(config, Object.assign({}, globalScope), strings, values);
    startup = Object(_parser__WEBPACK_IMPORTED_MODULE_0__["parse"])(state);
    return f;
  };

  f.setStartupAST = ast => {
    startup = ast;
    return f;
  };

  f.appendStartup = (strings, ...values) => {
    const state = initState(config, Object.assign({}, globalScope), strings, values);
    startup = startup.concat(Object(_parser__WEBPACK_IMPORTED_MODULE_0__["parse"])(state));
    return f;
  };

  f.appendStartupAST = ast => {
    startup = startup.concat(ast);
    return f;
  };

  f.install = installer => {
    config = installer(config);
    return f;
  };

  return f;
}
const S = (() => {
  const config = Object.assign({}, defaultConfig);
  config.enableEvaluate = false;
  config.returnMultipleRoot = true;
  return SExpression(config);
})();
const L = (() => {
  let config = Object.assign({}, defaultConfig);
  config = Object(_operators_core__WEBPACK_IMPORTED_MODULE_2__["default"])(config);
  config = Object(_operators_arithmetic__WEBPACK_IMPORTED_MODULE_3__["default"])(config);
  config = Object(_operators_sequence__WEBPACK_IMPORTED_MODULE_4__["default"])(config);
  config.stripComments = true;
  return SExpression(config);
})();
const LS = L;
const lisp = L; // tslint:disable-next-line:variable-name

const L_async = (() => {
  let config = Object.assign({}, defaultConfig);
  config = Object(_operators_core__WEBPACK_IMPORTED_MODULE_2__["default"])(config);
  config = Object(_operators_arithmetic__WEBPACK_IMPORTED_MODULE_3__["default"])(config);
  config = Object(_operators_sequence__WEBPACK_IMPORTED_MODULE_4__["default"])(config);
  config = Object(_operators_concurrent__WEBPACK_IMPORTED_MODULE_6__["default"])(config);
  config.stripComments = true;
  return SExpressionAsync(config);
})(); // tslint:disable-next-line:variable-name

const LS_async = L_async; // tslint:disable-next-line:variable-name

const lisp_async = L_async;
const LM = (() => {
  let config = Object.assign({}, defaultConfig);
  config = Object(_operators_core__WEBPACK_IMPORTED_MODULE_2__["default"])(config);
  config = Object(_operators_arithmetic__WEBPACK_IMPORTED_MODULE_3__["default"])(config);
  config = Object(_operators_sequence__WEBPACK_IMPORTED_MODULE_4__["default"])(config);
  config.stripComments = true;
  config.returnMultipleRoot = true;
  return SExpression(config);
})(); // tslint:disable-next-line:variable-name

const LM_async = (() => {
  let config = Object.assign({}, defaultConfig);
  config = Object(_operators_core__WEBPACK_IMPORTED_MODULE_2__["default"])(config);
  config = Object(_operators_arithmetic__WEBPACK_IMPORTED_MODULE_3__["default"])(config);
  config = Object(_operators_sequence__WEBPACK_IMPORTED_MODULE_4__["default"])(config);
  config = Object(_operators_concurrent__WEBPACK_IMPORTED_MODULE_6__["default"])(config);
  config.stripComments = true;
  config.returnMultipleRoot = true;
  return SExpressionAsync(config);
})();
function LSX(lsxConf) {
  let config = Object.assign({}, defaultConfig);
  config = Object(_operators_core__WEBPACK_IMPORTED_MODULE_2__["default"])(config);
  config = Object(_operators_arithmetic__WEBPACK_IMPORTED_MODULE_3__["default"])(config);
  config = Object(_operators_sequence__WEBPACK_IMPORTED_MODULE_4__["default"])(config);
  config = Object(_operators_jsx__WEBPACK_IMPORTED_MODULE_5__["default"])(config, lsxConf);
  config.stripComments = true;
  return SExpression(config);
}
function LSX_async(lsxConf) {
  let config = Object.assign({}, defaultConfig);
  config = Object(_operators_core__WEBPACK_IMPORTED_MODULE_2__["default"])(config);
  config = Object(_operators_arithmetic__WEBPACK_IMPORTED_MODULE_3__["default"])(config);
  config = Object(_operators_sequence__WEBPACK_IMPORTED_MODULE_4__["default"])(config);
  config = Object(_operators_concurrent__WEBPACK_IMPORTED_MODULE_6__["default"])(config);
  config = Object(_operators_jsx__WEBPACK_IMPORTED_MODULE_5__["default"])(config, lsxConf);
  config.stripComments = true;
  return SExpressionAsync(config);
}

/***/ }),

/***/ "./src/s-exp/types.ts":
/*!****************************!*\
  !*** ./src/s-exp/types.ts ***!
  \****************************/
/*! exports provided: quote, isQuoted, spread, isSymbol, FatalError, MaxEvaluationCountError, ScriptTerminationError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quote", function() { return quote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isQuoted", function() { return isQuoted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spread", function() { return spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSymbol", function() { return isSymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FatalError", function() { return FatalError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaxEvaluationCountError", function() { return MaxEvaluationCountError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptTerminationError", function() { return ScriptTerminationError; });
function quote(state, x) {
  return [{
    symbol: state.config.reservedNames.quote
  }, x];
}
function isQuoted(state, x) {
  if (Array.isArray(x) && 0 < x.length) {
    const q = isSymbol(x);

    if (q && q.symbol === state.config.reservedNames.quote) {
      return true;
    }
  }

  return false;
}
function spread(state, x) {
  return [{
    symbol: state.config.reservedNames.spread
  }, x];
}
function isSymbol(x, name) {
  if (x && typeof x === 'object' && Object.prototype.hasOwnProperty.call(x, 'symbol')) {
    if (name !== void 0) {
      return x.symbol === name ? x : null;
    } else {
      return x;
    }
  }

  return null;
}
class FatalError extends Error {
  constructor(message) {
    super(message);
  }

}
class MaxEvaluationCountError extends FatalError {
  constructor() {
    super(`[SX] evaluate: The maximum count of evaluations has been exceeded.`);
  }

}
class ScriptTerminationError extends FatalError {
  constructor(where) {
    super(`[SX] ${where}: Unexpected termination of script.`);
  }

}

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/index.ts");


/***/ })

/******/ });
});
//# sourceMappingURL=liyad.js.map