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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nUtil.inherits(Asteroid, MovingObject); \n\nfunction Asteroid(pos) {\n    this.COLOR = \"#FFA500\";\n    this.RADIUS = 10;\n    this.pos = pos;\n    this.vel = Util.randomVec(this.RADIUS); // random velocity\n    // this.game = obj[\"game\"];\n    MovingObject.call(this, { color: this.COLOR, radius: this.RADIUS, pos: this.pos, vel: this.vel }); // game: this.game\n};\n\nmodule.exports = Asteroid;\n\n// const Util = require(\"./utils.js\");\n// const MovingObject = require(\"./moving_object.js\");\n// Util.inherits(Asteroid, MovingObject);\n// Asteroid.COLOR = 'pink';\n// Asteroid.RADIUS = 25;\n// function Asteroid(option) {\n//     const vel = Util.randomVec(10);\n//     MovingObject.call(this, { game: option.game, pos: option.pos, vel: vel, radius: Asteroid.RADIUS, color: Asteroid.COLOR });\n// };\n// module.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\n\nfunction Game() {\n   this.asteroids = this.addAsteroids();\n}\n\nGame.DIM_X = 500;\nGame.DIM_Y = 500;\nGame.NUM_ASTEROIDS = 100;\n\nGame.prototype.addAsteroids = function () {\n    const asteroids = [];\n\n    while (asteroids.length < Game.NUM_ASTEROIDS) {\n        asteroids.push(new Asteroid(this.randomPosition()))\n    }\n    return asteroids;\n};\n\nGame.prototype.randomPosition = function () {\n    const pos = [];\n    pos.push(Math.random() * Math.floor(Game.DIM_X));\n    pos.push(Math.random() * Math.floor(Game.DIM_Y));\n    return pos;\n};\n\nGame.prototype.draw = function (ctx){\n    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);\n    \n    this.asteroids.forEach(function (asteroid) {\n        asteroid.draw(ctx);\n    });\n};\n\nGame.prototype.moveObjects = function(){\n    this.asteroids.forEach(function (asteroid) {\n        asteroid.move();\n    });\n};\n\nGame.prototype.wrap = function(pos){\n    let xPos = pos[0];\n    let yPos = pos[1];\n\n    // Wrap X Coordinates\n    if (xPos > Game.DIM_X) {\n        xPos = xPos - Game.DIM_X ;\n    } else if (xPos < 0) {\n        xPos = Game.DIM_X - xPos;\n    }\n    // Wrap Y Coodinates\n    if (yPos > Game.DIM_Y) {\n        yPos = yPos - Game.DIM_Y;\n    } else if (yPos < 0){\n        yPos = Game.DIM_Y - yPos;\n    }\n\n    return [xPos, yPos];\n};\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\nfunction GameView(game, ctx){\n    this.game = game;\n    this.ctx = ctx;\n};\n\nGameView.prototype.start = function(){\n    // debugger;\n    // invoke it immidately  \n    setInterval(function () { this.game.draw.bind(this.game)(this.ctx) }, 20);\n        // this.game.moveObjects.bind(this.game)()}, 20);\n    setInterval(this.game.moveObjects.bind(this.game), 20);\n};\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("console.log(\"hello\")\n\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\n\nwindow.addEventListener('DOMContentLoaded', (event) => {\n    const canvasEl = document.getElementById(\"game-canvas\");\n    const ctx = canvasEl.getContext(\"2d\");\n    window.ctx = ctx; \n    window.MovingObject = MovingObject;\n    // window.asteroid = Asteroid;\n    game = new Game();\n    gameView = new GameView(game, ctx);\n    gameView.start();\n});\n\n\n/* TESTING--------------------\nwindow.mo = new MovingObject({\n        pos: [30, 30],\n        vel: [10, 10],\n        radius: 5,\n        color: \"#00FF00\"\n    });\n    window.ast = new Asteroid([70, 60]);\n    mo.draw(ctx);\n    ast.draw(ctx);\n    mo.move();\n    ast.move();\n    setInterval(mo.draw.bind(mo, ctx), 6000);\n    setInterval(ast.draw.bind(ast, ctx), 6000);\n*/\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function MovingObject(obj) {\n    this.pos = obj[\"pos\"];\n    this.vel = obj[\"vel\"];\n    this.radius = obj[\"radius\"];\n    this.color = obj[\"color\"];\n    // this.game = obj[\"game\"];\n};\n\n// function MovingObject(options) {\n//     this.game = options.game;\n//     this.pos = options.pos;\n//     this.vel = options.vel;\n//     this.radius = options.radius;\n//     this.color = options.color;\n// }\n\n\nMovingObject.prototype.draw = function(ctx){\n    ctx.fillStyle = this.color; \n    ctx.beginPath();\n    // debugger;\n    ctx.arc(\n        this.pos[0],\n        this.pos[1],\n        this.radius,\n        0,\n        2 * Math.PI,\n        false\n    );\n    ctx.fill();\n};\n\nMovingObject.prototype.move = function(){\n    this.pos[0] += this.vel[0];\n    this.pos[1] += this.vel[1];\n    // if (this.game.wrap(this.pos)) {\n    //     this.pos = this.game.wrap(this.pos);\n    // }\n};\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n    inherits(childClass, parentClass) {\n    function Surrogate(){};\n    Surrogate.prototype = parentClass.prototype;\n    childClass.prototype = new Surrogate();\n    childClass.prototype.constructor = childClass;\n    },\n\n    randomVec(length) {\n        const deg = 2 * Math.PI * Math.random();\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n    },\n    \n    // Scale the length of a vector by the given amount.\n    scale(vec, m) {\n        return [vec[0] * m, vec[1] * m];\n    }\n};\n\nmodule.exports = Util;\n\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });