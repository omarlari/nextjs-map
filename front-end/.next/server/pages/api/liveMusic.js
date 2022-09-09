module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/liveMusic.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/liveMusic.js":
/*!********************************!*\
  !*** ./pages/api/liveMusic.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ((req, res) => {\n  res.statusCode = 200;\n  res.json({\n    type: \"FeatureCollection\",\n    features: [{\n      type: \"Feature\",\n      geometry: {\n        type: \"Point\",\n        coordinates: [-122.47008831446263, 37.77183742087868]\n      },\n      properties: {\n        title: \"Omar's House\",\n        cluster: false,\n        venue: \"blackcat\",\n        event_count: 10\n      }\n    }]\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvbGl2ZU11c2ljLmpzP2YwMzgiXSwibmFtZXMiOlsicmVxIiwicmVzIiwic3RhdHVzQ29kZSIsImpzb24iLCJ0eXBlIiwiZmVhdHVyZXMiLCJnZW9tZXRyeSIsImNvb3JkaW5hdGVzIiwicHJvcGVydGllcyIsInRpdGxlIiwiY2x1c3RlciIsInZlbnVlIiwiZXZlbnRfY291bnQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQWUsZ0VBQUNBLEdBQUQsRUFBTUMsR0FBTixLQUFjO0FBQzNCQSxLQUFHLENBQUNDLFVBQUosR0FBaUIsR0FBakI7QUFDQUQsS0FBRyxDQUFDRSxJQUFKLENBQVM7QUFDUEMsUUFBSSxFQUFFLG1CQURDO0FBRVBDLFlBQVEsRUFBRSxDQUNSO0FBQ0VELFVBQUksRUFBRSxTQURSO0FBRUVFLGNBQVEsRUFBRTtBQUFFRixZQUFJLEVBQUUsT0FBUjtBQUFpQkcsbUJBQVcsRUFBRSxDQUFDLENBQUMsa0JBQUYsRUFBc0IsaUJBQXRCO0FBQTlCLE9BRlo7QUFHRUMsZ0JBQVUsRUFBRTtBQUNWQyxhQUFLLEVBQUUsY0FERztBQUVWQyxlQUFPLEVBQUUsS0FGQztBQUdWQyxhQUFLLEVBQUUsVUFIRztBQUlWQyxtQkFBVyxFQUFFO0FBSkg7QUFIZCxLQURRO0FBRkgsR0FBVDtBQWVELENBakJEIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL2xpdmVNdXNpYy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IChyZXEsIHJlcykgPT4ge1xuICByZXMuc3RhdHVzQ29kZSA9IDIwMDtcbiAgcmVzLmpzb24oe1xuICAgIHR5cGU6IFwiRmVhdHVyZUNvbGxlY3Rpb25cIixcbiAgICBmZWF0dXJlczogW1xuICAgICAge1xuICAgICAgICB0eXBlOiBcIkZlYXR1cmVcIixcbiAgICAgICAgZ2VvbWV0cnk6IHsgdHlwZTogXCJQb2ludFwiLCBjb29yZGluYXRlczogWy0xMjIuNDcwMDg4MzE0NDYyNjMsIDM3Ljc3MTgzNzQyMDg3ODY4XSB9LFxuICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgdGl0bGU6IFwiT21hcidzIEhvdXNlXCIsXG4gICAgICAgICAgY2x1c3RlcjogZmFsc2UsXG4gICAgICAgICAgdmVudWU6IFwiYmxhY2tjYXRcIixcbiAgICAgICAgICBldmVudF9jb3VudDogMTAsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIF0sXG4gIH0pO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/liveMusic.js\n");

/***/ })

/******/ });