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
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* global window document $*/\n\nconst show = elem => {\n  elem.style.display = \"block\";\n};\nconst hide = elem => {\n  elem.style.display = \"none\";\n};\nconst changeScreen = screenToShow => {\n  const screens = [\"home\", \"addForm\"];\n  screens.map(screen => {\n    hide(document.querySelector(`#${screen}`));\n  });\n  show(document.querySelector(`#${screenToShow}`));\n};\n\nconst addInteractivity = () => {\n  const addAnimalButton = document.querySelector(\"button\");\n  addAnimalButton.addEventListener(\"click\", () => {\n    changeScreen(\"addForm\");\n  });\n};\n\nconst init = () => {\n  mapboxgl.accessToken =\n    \"pk.eyJ1IjoidHJpcHR5ayIsImEiOiJjampjemtuZjEzcjQwM3dtbnN0OWY1ZjNiIn0.GikR8T10cdWqqaim5MJUXg\";\n  const carte = new mapboxgl.Map({\n    container: \"map\",\n    style: \"mapbox://styles/mapbox/streets-v9\",\n    center: [-74.5, 40],\n    zoom: 10\n  });\n  addInteractivity();\n};\n\ninit();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcz8xMTEyIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGdsb2JhbCB3aW5kb3cgZG9jdW1lbnQgJCovXG5cbmNvbnN0IHNob3cgPSBlbGVtID0+IHtcbiAgZWxlbS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xufTtcbmNvbnN0IGhpZGUgPSBlbGVtID0+IHtcbiAgZWxlbS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59O1xuY29uc3QgY2hhbmdlU2NyZWVuID0gc2NyZWVuVG9TaG93ID0+IHtcbiAgY29uc3Qgc2NyZWVucyA9IFtcImhvbWVcIiwgXCJhZGRGb3JtXCJdO1xuICBzY3JlZW5zLm1hcChzY3JlZW4gPT4ge1xuICAgIGhpZGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7c2NyZWVufWApKTtcbiAgfSk7XG4gIHNob3coZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7c2NyZWVuVG9TaG93fWApKTtcbn07XG5cbmNvbnN0IGFkZEludGVyYWN0aXZpdHkgPSAoKSA9PiB7XG4gIGNvbnN0IGFkZEFuaW1hbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b25cIik7XG4gIGFkZEFuaW1hbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNoYW5nZVNjcmVlbihcImFkZEZvcm1cIik7XG4gIH0pO1xufTtcblxuY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgbWFwYm94Z2wuYWNjZXNzVG9rZW4gPVxuICAgIFwicGsuZXlKMUlqb2lkSEpwY0hSNWF5SXNJbUVpT2lKamFtcGplbXR1WmpFemNqUXdNM2R0Ym5OME9XWTFaak5pSW4wLkdpa1I4VDEwY2RXcXFhaW01TUpVWGdcIjtcbiAgY29uc3QgY2FydGUgPSBuZXcgbWFwYm94Z2wuTWFwKHtcbiAgICBjb250YWluZXI6IFwibWFwXCIsXG4gICAgc3R5bGU6IFwibWFwYm94Oi8vc3R5bGVzL21hcGJveC9zdHJlZXRzLXY5XCIsXG4gICAgY2VudGVyOiBbLTc0LjUsIDQwXSxcbiAgICB6b29tOiAxMFxuICB9KTtcbiAgYWRkSW50ZXJhY3Rpdml0eSgpO1xufTtcblxuaW5pdCgpO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/app.js\n");

/***/ })

/******/ });