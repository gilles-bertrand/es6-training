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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/application */ \"./src/modules/application.js\");\n\n\nasync function init() {\n  const app = new _modules_application__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('https://picsum.photos/list');\n  await app.loadJson();\n  document.querySelector('#wrapper ul').innerHTML = app.getTitles();\n}\ninit();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcz8xMTEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHBsaWNhdGlvbiBmcm9tICcuL21vZHVsZXMvYXBwbGljYXRpb24nO1xuXG5hc3luYyBmdW5jdGlvbiBpbml0KCkge1xuICBjb25zdCBhcHAgPSBuZXcgQXBwbGljYXRpb24oJ2h0dHBzOi8vcGljc3VtLnBob3Rvcy9saXN0Jyk7XG4gIGF3YWl0IGFwcC5sb2FkSnNvbigpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd3JhcHBlciB1bCcpLmlubmVySFRNTCA9IGFwcC5nZXRUaXRsZXMoKTtcbn1cbmluaXQoKTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/app.js\n");

/***/ }),

/***/ "./src/modules/application.js":
/*!************************************!*\
  !*** ./src/modules/application.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Application; });\nclass Application {\n  constructor(url) {\n    this.url = url;\n    this.data = null;\n    // this.loadJson();\n  }\n\n  loadJson() {\n    return new Promise((resolve, reject) => {\n      fetch(this.url)\n        .then(result => result.json())\n        .then(dataJson => {\n          this.data = dataJson;\n          resolve('data loaded');\n        })\n        .catch(err => {\n          reject(err);\n        });\n    });\n  }\n\n  getTitles() {\n    return this.data.reduce((prev, next) => `${prev}<li>${next.filename}</li>`, '');\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9hcHBsaWNhdGlvbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2FwcGxpY2F0aW9uLmpzPzQzZDkiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwbGljYXRpb24ge1xuICBjb25zdHJ1Y3Rvcih1cmwpIHtcbiAgICB0aGlzLnVybCA9IHVybDtcbiAgICB0aGlzLmRhdGEgPSBudWxsO1xuICAgIC8vIHRoaXMubG9hZEpzb24oKTtcbiAgfVxuXG4gIGxvYWRKc29uKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBmZXRjaCh0aGlzLnVybClcbiAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHJlc3VsdC5qc29uKCkpXG4gICAgICAgIC50aGVuKGRhdGFKc29uID0+IHtcbiAgICAgICAgICB0aGlzLmRhdGEgPSBkYXRhSnNvbjtcbiAgICAgICAgICByZXNvbHZlKCdkYXRhIGxvYWRlZCcpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRUaXRsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5yZWR1Y2UoKHByZXYsIG5leHQpID0+IGAke3ByZXZ9PGxpPiR7bmV4dC5maWxlbmFtZX08L2xpPmAsICcnKTtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/application.js\n");

/***/ })

/******/ });