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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_animal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/animal */ \"./src/modules/animal.js\");\n/* harmony import */ var _modules_chat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/chat */ \"./src/modules/chat.js\");\n\n\n\nconst init = () => {\n  const bull = new _modules_animal__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('taureau');\n  console.log(bull.type);\n  console.log(bull.walk());\n  const chat = new _modules_chat__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n  console.log(chat.type);\n  console.log(chat.walk());\n  console.log(chat.cri());\n};\n\ninit();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcz8xMTEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBbmltYWwgZnJvbSAnLi9tb2R1bGVzL2FuaW1hbCc7XG5pbXBvcnQgQ2hhdCBmcm9tICcuL21vZHVsZXMvY2hhdCc7XG5cbmNvbnN0IGluaXQgPSAoKSA9PiB7XG4gIGNvbnN0IGJ1bGwgPSBuZXcgQW5pbWFsKCd0YXVyZWF1Jyk7XG4gIGNvbnNvbGUubG9nKGJ1bGwudHlwZSk7XG4gIGNvbnNvbGUubG9nKGJ1bGwud2FsaygpKTtcbiAgY29uc3QgY2hhdCA9IG5ldyBDaGF0KCk7XG4gIGNvbnNvbGUubG9nKGNoYXQudHlwZSk7XG4gIGNvbnNvbGUubG9nKGNoYXQud2FsaygpKTtcbiAgY29uc29sZS5sb2coY2hhdC5jcmkoKSk7XG59O1xuXG5pbml0KCk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/app.js\n");

/***/ }),

/***/ "./src/modules/animal.js":
/*!*******************************!*\
  !*** ./src/modules/animal.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Animal; });\nclass Animal {\n  constructor(type) {\n    this.type = type;\n  }\n\n  walk() {\n    return `${this.type} is walking`;\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9hbmltYWwuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9hbmltYWwuanM/ZDc4ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBBbmltYWwge1xuICBjb25zdHJ1Y3Rvcih0eXBlKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIHdhbGsoKSB7XG4gICAgcmV0dXJuIGAke3RoaXMudHlwZX0gaXMgd2Fsa2luZ2A7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/animal.js\n");

/***/ }),

/***/ "./src/modules/chat.js":
/*!*****************************!*\
  !*** ./src/modules/chat.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Chat; });\n/* harmony import */ var _animal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animal */ \"./src/modules/animal.js\");\n\n\nclass Chat extends _animal__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    super('chat');\n  }\n\n  cri() {\n    return `${this.type} miaule`;\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9jaGF0LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvY2hhdC5qcz8xMmI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBbmltYWwgZnJvbSAnLi9hbmltYWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGF0IGV4dGVuZHMgQW5pbWFsIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoJ2NoYXQnKTtcbiAgfVxuXG4gIGNyaSgpIHtcbiAgICByZXR1cm4gYCR7dGhpcy50eXBlfSBtaWF1bGVgO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/chat.js\n");

/***/ })

/******/ });