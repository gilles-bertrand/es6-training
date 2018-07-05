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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/apple.js":
/*!**********************!*\
  !*** ./src/apple.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Apple; });
class Apple {
  constructor(position = [10, 10]) {
    this.position = position;
  }

  setNewPosition(widthInBlocks, heightInBlocks) {
    const newX = Math.round(Math.random() * (widthInBlocks - 1));
    const newY = Math.round(Math.random() * (heightInBlocks - 1));
    this.position = [newX, newY];
  }

  isOnSnake(snakeToCheck) {
    let isOnSnake = false;
    snakeToCheck.body.map(block => {
      if (this.position[0] === block[0] && this.position[1] === block[1]) {
        isOnSnake = true;
      }
    });

    return isOnSnake;
  }
}


/***/ }),

/***/ "./src/drawing.js":
/*!************************!*\
  !*** ./src/drawing.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Drawing; });
class Drawing {
  static gameOver(ctx, centreX, centreY) {
    ctx.save();
    ctx.font = "bold 70px sans-serif";
    ctx.fillStyle = "#000";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.strokeStyle = "white";
    ctx.lineWidth = 5;
    ctx.strokeText("Game Over", centreX, centreY - 180);
    ctx.fillText("Game Over", centreX, centreY - 180);
    ctx.font = "bold 30px sans-serif";
    ctx.strokeText(
      "Appuyer sur la touche Espace pour rejouer",
      centreX,
      centreY - 120
    );
    ctx.fillText(
      "Appuyer sur la touche Espace pour rejouer",
      centreX,
      centreY - 120
    );
    ctx.restore();
  }

  static drawScore(ctx, centreX, centreY, score) {
    ctx.save();
    ctx.font = "bold 200px sans-serif";
    ctx.fillStyle = "gray";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(score.toString(), centreX, centreY);
    ctx.restore();
  }

  static drawSnake(ctx, blockSize, snake) {
    ctx.save();
    ctx.fillStyle = "#ff0000";
    snake.body.map(block => this.drawBlock(ctx, block, blockSize));

    ctx.restore();
  }

  static drawApple(ctx, blockSize, apple) {
    const radius = blockSize / 2;
    const x = apple.position[0] * blockSize + radius;
    const y = apple.position[1] * blockSize + radius;
    ctx.save();
    ctx.fillStyle = "#33cc33";
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.restore();
  }

  static drawBlock(ctx, position, blockSize) {
    const [x, y] = position;
    ctx.fillRect(x * blockSize, y * blockSize, blockSize, blockSize);
  }
}


/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var _snake__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snake */ "./src/snake.js");
/* harmony import */ var _apple__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apple */ "./src/apple.js");
/* harmony import */ var _drawing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drawing */ "./src/drawing.js");
/* global  document */




class Game {
  constructor(canvasWidth = 900, canvasHeight = 600) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.blockSize = 30;
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.widthInBlocks = this.canvasWidth / this.blockSize;
    this.heightInBlocks = this.canvasHeight / this.blockSize;
    this.centreX = this.canvasWidth / 2;
    this.centreY = this.canvasHeight / 2;
    this.delay = 100;
    this.snakee = null;
    this.applee = null;
    this.score = null;
    this.timeOut = null;
  }

  init() {
    this.canvas.width = this.canvasWidth;
    this.canvas.height = this.canvasHeight;
    this.canvas.style.border = "30px solid gray";
    this.canvas.style.margin = "50px auto";
    this.canvas.style.display = "block";
    this.canvas.style.backgroundColor = "#ddd";
    document.body.appendChild(this.canvas);
    this.launch();
  }

  launch() {
    this.snakee = new _snake__WEBPACK_IMPORTED_MODULE_0__["default"]("right", [6, 4], [5, 4], [4, 4], [3, 4], [2, 4]);
    this.applee = new _apple__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.score = 0;
    clearTimeout(this.timeOut);
    this.delay = 100;
    this.refreshCanvas();
  }

  refreshCanvas() {
    this.snakee.advance();
    if (this.snakee.checkCollision(this.widthInBlocks, this.heightInBlocks)) {
      _drawing__WEBPACK_IMPORTED_MODULE_2__["default"].gameOver(this.ctx, this.centreX, this.centreY);
    } else {
      if (this.snakee.isEatingApple(this.applee)) {
        this.score += 1;
        this.snakee.ateApple = true;

        do {
          this.applee.setNewPosition(this.widthInBlocks, this.heightInBlocks);
        } while (this.applee.isOnSnake(this.snakee));

        if (this.score % 5 === 0) {
          this.speedUp();
        }
      }
      this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
      _drawing__WEBPACK_IMPORTED_MODULE_2__["default"].drawScore(this.ctx, this.centreX, this.centreY, this.score);
      _drawing__WEBPACK_IMPORTED_MODULE_2__["default"].drawSnake(this.ctx, this.blockSize, this.snakee);
      _drawing__WEBPACK_IMPORTED_MODULE_2__["default"].drawApple(this.ctx, this.blockSize, this.applee);
      this.timeOut = setTimeout(this.refreshCanvas.bind(this), this.delay);
    }
  }

  speedUp() {
    this.delay /= 2;
  }
}


/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");
/* global window document */


window.onload = () => {
  document.onkeydown = e => {
    const key = e.keyCode;
    let newDirection;
    switch (key) {
      case 37:
        newDirection = "left";
        break;
      case 38:
        newDirection = "up";
        break;
      case 39:
        newDirection = "right";
        break;
      case 40:
        newDirection = "down";
        break;
      case 32:
        myGame.launch();
        return;
      default:
        return;
    }
    myGame.snakee.setDirection(newDirection);
  };

  let myGame = new _game__WEBPACK_IMPORTED_MODULE_0__["default"]();
  myGame.init();
};


/***/ }),

/***/ "./src/snake.js":
/*!**********************!*\
  !*** ./src/snake.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Snake; });
class Snake {
  constructor(direction, ...body) {
    this.body = body;
    this.direction = direction;
    this.ateApple = false;
  }

  advance() {
    const nextPosition = this.body[0].slice();
    switch (this.direction) {
      case "left":
        nextPosition[0] -= 1;
        break;
      case "right":
        nextPosition[0] += 1;
        break;
      case "down":
        nextPosition[1] += 1;
        break;
      case "up":
        nextPosition[1] -= 1;
        break;
      default:
        throw new Error("invalid direction");
    }
    this.body.unshift(nextPosition);
    if (!this.ateApple) this.body.pop();
    else this.ateApple = false;
  }

  setDirection(newDirection) {
    let allowedDirections;
    switch (this.direction) {
      case "left":
      case "right":
        allowedDirections = ["up", "down"];
        break;
      case "down":
      case "up":
        allowedDirections = ["left", "right"];
        break;
      default:
        throw new Error("invalid direction");
    }
    if (allowedDirections.includes(newDirection)) {
      this.direction = newDirection;
    }
  }

  checkCollision(widthInBlocks, heightInBlocks) {
    let wallCollision = false;
    let snakeCollision = false;
    const [head, ...rest] = this.body;
    const [snakeX, snakeY] = head;
    const minX = 0;
    const minY = 0;
    const maxX = widthInBlocks - 1;
    const maxY = heightInBlocks - 1;
    const isNotBetweenHorizontalWalls = snakeX < minX || snakeX > maxX;
    const isNotBetweenVerticalWalls = snakeY < minY || snakeY > maxY;

    if (isNotBetweenHorizontalWalls || isNotBetweenVerticalWalls)
      wallCollision = true;

    rest.map(block => {
      if (snakeX === block[0] && snakeY === block[1]) snakeCollision = true;
    });
    return wallCollision || snakeCollision;
  }

  isEatingApple(appleToEat) {
    const head = this.body[0];
    if (
      head[0] === appleToEat.position[0] &&
      head[1] === appleToEat.position[1]
    )
      return true;
    else return false;
  }
}


/***/ })

/******/ });
//# sourceMappingURL=main.js.map