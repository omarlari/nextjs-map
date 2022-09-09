module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./map/addDataLayer.js":
/*!*****************************!*\
  !*** ./map/addDataLayer.js ***!
  \*****************************/
/*! exports provided: addDataLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addDataLayer\", function() { return addDataLayer; });\nfunction addDataLayer(map, data) {\n  if (!map.getSource(\"dcmusic.live\")) {\n    map.addSource(\"dcmusic.live\", {\n      type: \"geojson\",\n      data: data,\n      cluster: true,\n      clusterMaxZoom: 14,\n      clusterRadius: 50,\n      clusterProperties: {\n        sum: [\"+\", [\"get\", \"event_count\"]]\n      }\n    });\n  } else {\n    map.getSource(\"dcmusic.live\").setData(data);\n  }\n\n  map.addLayer({\n    id: \"clusters\",\n    type: \"circle\",\n    source: \"dcmusic.live\",\n    filter: [\"has\", \"point_count\"],\n    paint: {\n      \"circle-color\": \"rgb(229, 36, 59)\",\n      \"circle-radius\": [\"step\", [\"get\", \"point_count\"], 20, 100, 30, 750, 40],\n      \"circle-opacity\": 0.75,\n      \"circle-stroke-width\": 4,\n      \"circle-stroke-color\": \"#fff\",\n      \"circle-stroke-opacity\": 0.5\n    }\n  });\n  map.addLayer({\n    id: \"cluster-count\",\n    type: \"symbol\",\n    source: \"dcmusic.live\",\n    filter: [\"has\", \"point_count\"],\n    layout: {\n      \"text-field\": \"{sum}\",\n      \"text-font\": [\"Open Sans Bold\"],\n      \"text-size\": 16\n    },\n    paint: {\n      \"text-color\": \"white\"\n    }\n  });\n  map.addLayer({\n    id: \"unclustered-point\",\n    type: \"circle\",\n    source: \"dcmusic.live\",\n    filter: [\"!\", [\"has\", \"point_count\"]],\n    paint: {\n      \"circle-radius\": [\"step\", [\"get\", \"event_count\"], 20, 100, 30, 750, 40],\n      \"circle-color\": \"rgb(229, 36, 59)\",\n      \"circle-opacity\": 0.75,\n      \"circle-stroke-width\": 4,\n      \"circle-stroke-color\": \"#fff\",\n      \"circle-stroke-opacity\": 0.5\n    }\n  });\n  map.addLayer({\n    id: \"event-count\",\n    type: \"symbol\",\n    source: \"dcmusic.live\",\n    filter: [\"!\", [\"has\", \"point_count\"]],\n    layout: {\n      \"text-field\": \"{event_count}\",\n      \"text-font\": [\"Open Sans Bold\"],\n      \"text-size\": 16\n    },\n    paint: {\n      \"text-color\": \"white\"\n    }\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tYXAvYWRkRGF0YUxheWVyLmpzPzEyZGYiXSwibmFtZXMiOlsiYWRkRGF0YUxheWVyIiwibWFwIiwiZGF0YSIsImdldFNvdXJjZSIsImFkZFNvdXJjZSIsInR5cGUiLCJjbHVzdGVyIiwiY2x1c3Rlck1heFpvb20iLCJjbHVzdGVyUmFkaXVzIiwiY2x1c3RlclByb3BlcnRpZXMiLCJzdW0iLCJzZXREYXRhIiwiYWRkTGF5ZXIiLCJpZCIsInNvdXJjZSIsImZpbHRlciIsInBhaW50IiwibGF5b3V0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQU8sU0FBU0EsWUFBVCxDQUFzQkMsR0FBdEIsRUFBMkJDLElBQTNCLEVBQWlDO0FBQ3RDLE1BQUksQ0FBQ0QsR0FBRyxDQUFDRSxTQUFKLENBQWMsY0FBZCxDQUFMLEVBQW9DO0FBQ2xDRixPQUFHLENBQUNHLFNBQUosQ0FBYyxjQUFkLEVBQThCO0FBQzVCQyxVQUFJLEVBQUUsU0FEc0I7QUFFNUJILFVBQUksRUFBRUEsSUFGc0I7QUFHNUJJLGFBQU8sRUFBRSxJQUhtQjtBQUk1QkMsb0JBQWMsRUFBRSxFQUpZO0FBSzVCQyxtQkFBYSxFQUFFLEVBTGE7QUFNNUJDLHVCQUFpQixFQUFFO0FBQ2pCQyxXQUFHLEVBQUUsQ0FBQyxHQUFELEVBQU0sQ0FBQyxLQUFELEVBQVEsYUFBUixDQUFOO0FBRFk7QUFOUyxLQUE5QjtBQVVELEdBWEQsTUFXTztBQUNMVCxPQUFHLENBQUNFLFNBQUosQ0FBYyxjQUFkLEVBQThCUSxPQUE5QixDQUFzQ1QsSUFBdEM7QUFDRDs7QUFFREQsS0FBRyxDQUFDVyxRQUFKLENBQWE7QUFDWEMsTUFBRSxFQUFFLFVBRE87QUFFWFIsUUFBSSxFQUFFLFFBRks7QUFHWFMsVUFBTSxFQUFFLGNBSEc7QUFJWEMsVUFBTSxFQUFFLENBQUMsS0FBRCxFQUFRLGFBQVIsQ0FKRztBQUtYQyxTQUFLLEVBQUU7QUFDTCxzQkFBZ0Isa0JBRFg7QUFFTCx1QkFBaUIsQ0FBQyxNQUFELEVBQVMsQ0FBQyxLQUFELEVBQVEsYUFBUixDQUFULEVBQWlDLEVBQWpDLEVBQXFDLEdBQXJDLEVBQTBDLEVBQTFDLEVBQThDLEdBQTlDLEVBQW1ELEVBQW5ELENBRlo7QUFHTCx3QkFBa0IsSUFIYjtBQUlMLDZCQUF1QixDQUpsQjtBQUtMLDZCQUF1QixNQUxsQjtBQU1MLCtCQUF5QjtBQU5wQjtBQUxJLEdBQWI7QUFlQWYsS0FBRyxDQUFDVyxRQUFKLENBQWE7QUFDWEMsTUFBRSxFQUFFLGVBRE87QUFFWFIsUUFBSSxFQUFFLFFBRks7QUFHWFMsVUFBTSxFQUFFLGNBSEc7QUFJWEMsVUFBTSxFQUFFLENBQUMsS0FBRCxFQUFRLGFBQVIsQ0FKRztBQUtYRSxVQUFNLEVBQUU7QUFDTixvQkFBYyxPQURSO0FBRU4sbUJBQWEsQ0FBQyxnQkFBRCxDQUZQO0FBR04sbUJBQWE7QUFIUCxLQUxHO0FBVVhELFNBQUssRUFBRTtBQUNMLG9CQUFjO0FBRFQ7QUFWSSxHQUFiO0FBZUFmLEtBQUcsQ0FBQ1csUUFBSixDQUFhO0FBQ1hDLE1BQUUsRUFBRSxtQkFETztBQUVYUixRQUFJLEVBQUUsUUFGSztBQUdYUyxVQUFNLEVBQUUsY0FIRztBQUlYQyxVQUFNLEVBQUUsQ0FBQyxHQUFELEVBQU0sQ0FBQyxLQUFELEVBQVEsYUFBUixDQUFOLENBSkc7QUFLWEMsU0FBSyxFQUFFO0FBQ0wsdUJBQWlCLENBQUMsTUFBRCxFQUFTLENBQUMsS0FBRCxFQUFRLGFBQVIsQ0FBVCxFQUFpQyxFQUFqQyxFQUFxQyxHQUFyQyxFQUEwQyxFQUExQyxFQUE4QyxHQUE5QyxFQUFtRCxFQUFuRCxDQURaO0FBRUwsc0JBQWdCLGtCQUZYO0FBR0wsd0JBQWtCLElBSGI7QUFJTCw2QkFBdUIsQ0FKbEI7QUFLTCw2QkFBdUIsTUFMbEI7QUFNTCwrQkFBeUI7QUFOcEI7QUFMSSxHQUFiO0FBZUFmLEtBQUcsQ0FBQ1csUUFBSixDQUFhO0FBQ1hDLE1BQUUsRUFBRSxhQURPO0FBRVhSLFFBQUksRUFBRSxRQUZLO0FBR1hTLFVBQU0sRUFBRSxjQUhHO0FBSVhDLFVBQU0sRUFBRSxDQUFDLEdBQUQsRUFBTSxDQUFDLEtBQUQsRUFBUSxhQUFSLENBQU4sQ0FKRztBQUtYRSxVQUFNLEVBQUU7QUFDTixvQkFBYyxlQURSO0FBRU4sbUJBQWEsQ0FBQyxnQkFBRCxDQUZQO0FBR04sbUJBQWE7QUFIUCxLQUxHO0FBVVhELFNBQUssRUFBRTtBQUNMLG9CQUFjO0FBRFQ7QUFWSSxHQUFiO0FBY0QiLCJmaWxlIjoiLi9tYXAvYWRkRGF0YUxheWVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGFkZERhdGFMYXllcihtYXAsIGRhdGEpIHtcbiAgaWYgKCFtYXAuZ2V0U291cmNlKFwiZGNtdXNpYy5saXZlXCIpKSB7XG4gICAgbWFwLmFkZFNvdXJjZShcImRjbXVzaWMubGl2ZVwiLCB7XG4gICAgICB0eXBlOiBcImdlb2pzb25cIixcbiAgICAgIGRhdGE6IGRhdGEsXG4gICAgICBjbHVzdGVyOiB0cnVlLFxuICAgICAgY2x1c3Rlck1heFpvb206IDE0LFxuICAgICAgY2x1c3RlclJhZGl1czogNTAsXG4gICAgICBjbHVzdGVyUHJvcGVydGllczoge1xuICAgICAgICBzdW06IFtcIitcIiwgW1wiZ2V0XCIsIFwiZXZlbnRfY291bnRcIl1dLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBtYXAuZ2V0U291cmNlKFwiZGNtdXNpYy5saXZlXCIpLnNldERhdGEoZGF0YSk7XG4gIH1cblxuICBtYXAuYWRkTGF5ZXIoe1xuICAgIGlkOiBcImNsdXN0ZXJzXCIsXG4gICAgdHlwZTogXCJjaXJjbGVcIixcbiAgICBzb3VyY2U6IFwiZGNtdXNpYy5saXZlXCIsXG4gICAgZmlsdGVyOiBbXCJoYXNcIiwgXCJwb2ludF9jb3VudFwiXSxcbiAgICBwYWludDoge1xuICAgICAgXCJjaXJjbGUtY29sb3JcIjogXCJyZ2IoMjI5LCAzNiwgNTkpXCIsXG4gICAgICBcImNpcmNsZS1yYWRpdXNcIjogW1wic3RlcFwiLCBbXCJnZXRcIiwgXCJwb2ludF9jb3VudFwiXSwgMjAsIDEwMCwgMzAsIDc1MCwgNDBdLFxuICAgICAgXCJjaXJjbGUtb3BhY2l0eVwiOiAwLjc1LFxuICAgICAgXCJjaXJjbGUtc3Ryb2tlLXdpZHRoXCI6IDQsXG4gICAgICBcImNpcmNsZS1zdHJva2UtY29sb3JcIjogXCIjZmZmXCIsXG4gICAgICBcImNpcmNsZS1zdHJva2Utb3BhY2l0eVwiOiAwLjUsXG4gICAgfSxcbiAgfSk7XG5cbiAgbWFwLmFkZExheWVyKHtcbiAgICBpZDogXCJjbHVzdGVyLWNvdW50XCIsXG4gICAgdHlwZTogXCJzeW1ib2xcIixcbiAgICBzb3VyY2U6IFwiZGNtdXNpYy5saXZlXCIsXG4gICAgZmlsdGVyOiBbXCJoYXNcIiwgXCJwb2ludF9jb3VudFwiXSxcbiAgICBsYXlvdXQ6IHtcbiAgICAgIFwidGV4dC1maWVsZFwiOiBcIntzdW19XCIsXG4gICAgICBcInRleHQtZm9udFwiOiBbXCJPcGVuIFNhbnMgQm9sZFwiXSxcbiAgICAgIFwidGV4dC1zaXplXCI6IDE2LFxuICAgIH0sXG4gICAgcGFpbnQ6IHtcbiAgICAgIFwidGV4dC1jb2xvclwiOiBcIndoaXRlXCIsXG4gICAgfSxcbiAgfSk7XG5cbiAgbWFwLmFkZExheWVyKHtcbiAgICBpZDogXCJ1bmNsdXN0ZXJlZC1wb2ludFwiLFxuICAgIHR5cGU6IFwiY2lyY2xlXCIsXG4gICAgc291cmNlOiBcImRjbXVzaWMubGl2ZVwiLFxuICAgIGZpbHRlcjogW1wiIVwiLCBbXCJoYXNcIiwgXCJwb2ludF9jb3VudFwiXV0sXG4gICAgcGFpbnQ6IHtcbiAgICAgIFwiY2lyY2xlLXJhZGl1c1wiOiBbXCJzdGVwXCIsIFtcImdldFwiLCBcImV2ZW50X2NvdW50XCJdLCAyMCwgMTAwLCAzMCwgNzUwLCA0MF0sXG4gICAgICBcImNpcmNsZS1jb2xvclwiOiBcInJnYigyMjksIDM2LCA1OSlcIixcbiAgICAgIFwiY2lyY2xlLW9wYWNpdHlcIjogMC43NSxcbiAgICAgIFwiY2lyY2xlLXN0cm9rZS13aWR0aFwiOiA0LFxuICAgICAgXCJjaXJjbGUtc3Ryb2tlLWNvbG9yXCI6IFwiI2ZmZlwiLFxuICAgICAgXCJjaXJjbGUtc3Ryb2tlLW9wYWNpdHlcIjogMC41LFxuICAgIH0sXG4gIH0pO1xuXG4gIG1hcC5hZGRMYXllcih7XG4gICAgaWQ6IFwiZXZlbnQtY291bnRcIixcbiAgICB0eXBlOiBcInN5bWJvbFwiLFxuICAgIHNvdXJjZTogXCJkY211c2ljLmxpdmVcIixcbiAgICBmaWx0ZXI6IFtcIiFcIiwgW1wiaGFzXCIsIFwicG9pbnRfY291bnRcIl1dLFxuICAgIGxheW91dDoge1xuICAgICAgXCJ0ZXh0LWZpZWxkXCI6IFwie2V2ZW50X2NvdW50fVwiLFxuICAgICAgXCJ0ZXh0LWZvbnRcIjogW1wiT3BlbiBTYW5zIEJvbGRcIl0sXG4gICAgICBcInRleHQtc2l6ZVwiOiAxNixcbiAgICB9LFxuICAgIHBhaW50OiB7XG4gICAgICBcInRleHQtY29sb3JcIjogXCJ3aGl0ZVwiLFxuICAgIH0sXG4gIH0pO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./map/addDataLayer.js\n");

/***/ }),

/***/ "./map/initializeMap.js":
/*!******************************!*\
  !*** ./map/initializeMap.js ***!
  \******************************/
/*! exports provided: initializeMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initializeMap\", function() { return initializeMap; });\nfunction initializeMap(mapboxgl, map) {\n  map.on(\"click\", \"data\", function (e) {\n    var features = map.queryRenderedFeatures(e.point, {\n      layers: [\"data\"]\n    });\n    var clusterId = features[0].properties.cluster_id;\n    map.getSource(\"dcmusic.live\").getClusterExpansionZoom(clusterId, function (err, zoom) {\n      if (err) return;\n      map.easeTo({\n        center: features[0].geometry.coordinates,\n        zoom: zoom\n      });\n    });\n  });\n  map.on(\"click\", \"unclustered-point\", function (e) {\n    var coordinates = e.features[0].geometry.coordinates.slice();\n    var mag = e.features[0].properties.mag;\n    var tsunami;\n\n    if (e.features[0].properties.tsunami === 1) {\n      tsunami = \"yes\";\n    } else {\n      tsunami = \"no\";\n    }\n\n    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {\n      coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;\n    }\n\n    new mapboxgl.Popup().setLngLat(coordinates) //.setHTML(\"magnitude: \" + mag + \"<br>Was there a tsunami?: \" + tsunami)\n    .setHTML(\"This is a spot\").addTo(map);\n  });\n  map.addControl(new mapboxgl.GeolocateControl({\n    positionOptions: {\n      enableHighAccuracy: true\n    },\n    trackUserLocation: true\n  }));\n  map.on(\"mouseenter\", \"data\", function () {\n    map.getCanvas().style.cursor = \"pointer\";\n  });\n  map.on(\"mouseleave\", \"data\", function () {\n    map.getCanvas().style.cursor = \"\";\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tYXAvaW5pdGlhbGl6ZU1hcC5qcz85ZmQ4Il0sIm5hbWVzIjpbImluaXRpYWxpemVNYXAiLCJtYXBib3hnbCIsIm1hcCIsIm9uIiwiZSIsImZlYXR1cmVzIiwicXVlcnlSZW5kZXJlZEZlYXR1cmVzIiwicG9pbnQiLCJsYXllcnMiLCJjbHVzdGVySWQiLCJwcm9wZXJ0aWVzIiwiY2x1c3Rlcl9pZCIsImdldFNvdXJjZSIsImdldENsdXN0ZXJFeHBhbnNpb25ab29tIiwiZXJyIiwiem9vbSIsImVhc2VUbyIsImNlbnRlciIsImdlb21ldHJ5IiwiY29vcmRpbmF0ZXMiLCJzbGljZSIsIm1hZyIsInRzdW5hbWkiLCJNYXRoIiwiYWJzIiwibG5nTGF0IiwibG5nIiwiUG9wdXAiLCJzZXRMbmdMYXQiLCJzZXRIVE1MIiwiYWRkVG8iLCJhZGRDb250cm9sIiwiR2VvbG9jYXRlQ29udHJvbCIsInBvc2l0aW9uT3B0aW9ucyIsImVuYWJsZUhpZ2hBY2N1cmFjeSIsInRyYWNrVXNlckxvY2F0aW9uIiwiZ2V0Q2FudmFzIiwic3R5bGUiLCJjdXJzb3IiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBTyxTQUFTQSxhQUFULENBQXVCQyxRQUF2QixFQUFpQ0MsR0FBakMsRUFBc0M7QUFDM0NBLEtBQUcsQ0FBQ0MsRUFBSixDQUFPLE9BQVAsRUFBZ0IsTUFBaEIsRUFBd0IsVUFBVUMsQ0FBVixFQUFhO0FBQ25DLFFBQUlDLFFBQVEsR0FBR0gsR0FBRyxDQUFDSSxxQkFBSixDQUEwQkYsQ0FBQyxDQUFDRyxLQUE1QixFQUFtQztBQUNoREMsWUFBTSxFQUFFLENBQUMsTUFBRDtBQUR3QyxLQUFuQyxDQUFmO0FBR0EsUUFBSUMsU0FBUyxHQUFHSixRQUFRLENBQUMsQ0FBRCxDQUFSLENBQVlLLFVBQVosQ0FBdUJDLFVBQXZDO0FBQ0FULE9BQUcsQ0FDQVUsU0FESCxDQUNhLGNBRGIsRUFFR0MsdUJBRkgsQ0FFMkJKLFNBRjNCLEVBRXNDLFVBQVVLLEdBQVYsRUFBZUMsSUFBZixFQUFxQjtBQUN2RCxVQUFJRCxHQUFKLEVBQVM7QUFDVFosU0FBRyxDQUFDYyxNQUFKLENBQVc7QUFDVEMsY0FBTSxFQUFFWixRQUFRLENBQUMsQ0FBRCxDQUFSLENBQVlhLFFBQVosQ0FBcUJDLFdBRHBCO0FBRVRKLFlBQUksRUFBRUE7QUFGRyxPQUFYO0FBSUQsS0FSSDtBQVNELEdBZEQ7QUFnQkFiLEtBQUcsQ0FBQ0MsRUFBSixDQUFPLE9BQVAsRUFBZ0IsbUJBQWhCLEVBQXFDLFVBQVVDLENBQVYsRUFBYTtBQUNoRCxRQUFJZSxXQUFXLEdBQUdmLENBQUMsQ0FBQ0MsUUFBRixDQUFXLENBQVgsRUFBY2EsUUFBZCxDQUF1QkMsV0FBdkIsQ0FBbUNDLEtBQW5DLEVBQWxCO0FBQ0EsUUFBSUMsR0FBRyxHQUFHakIsQ0FBQyxDQUFDQyxRQUFGLENBQVcsQ0FBWCxFQUFjSyxVQUFkLENBQXlCVyxHQUFuQztBQUNBLFFBQUlDLE9BQUo7O0FBQ0EsUUFBSWxCLENBQUMsQ0FBQ0MsUUFBRixDQUFXLENBQVgsRUFBY0ssVUFBZCxDQUF5QlksT0FBekIsS0FBcUMsQ0FBekMsRUFBNEM7QUFDMUNBLGFBQU8sR0FBRyxLQUFWO0FBQ0QsS0FGRCxNQUVPO0FBQ0xBLGFBQU8sR0FBRyxJQUFWO0FBQ0Q7O0FBQ0QsV0FBT0MsSUFBSSxDQUFDQyxHQUFMLENBQVNwQixDQUFDLENBQUNxQixNQUFGLENBQVNDLEdBQVQsR0FBZVAsV0FBVyxDQUFDLENBQUQsQ0FBbkMsSUFBMEMsR0FBakQsRUFBc0Q7QUFDcERBLGlCQUFXLENBQUMsQ0FBRCxDQUFYLElBQWtCZixDQUFDLENBQUNxQixNQUFGLENBQVNDLEdBQVQsR0FBZVAsV0FBVyxDQUFDLENBQUQsQ0FBMUIsR0FBZ0MsR0FBaEMsR0FBc0MsQ0FBQyxHQUF6RDtBQUNEOztBQUNELFFBQUlsQixRQUFRLENBQUMwQixLQUFiLEdBQ0dDLFNBREgsQ0FDYVQsV0FEYixFQUVFO0FBRkYsS0FHR1UsT0FISCxDQUdXLGdCQUhYLEVBSUdDLEtBSkgsQ0FJUzVCLEdBSlQ7QUFLRCxHQWpCRDtBQWtCQUEsS0FBRyxDQUFDNkIsVUFBSixDQUNFLElBQUk5QixRQUFRLENBQUMrQixnQkFBYixDQUE4QjtBQUM1QkMsbUJBQWUsRUFBRTtBQUNmQyx3QkFBa0IsRUFBRTtBQURMLEtBRFc7QUFJNUJDLHFCQUFpQixFQUFFO0FBSlMsR0FBOUIsQ0FERjtBQVNBakMsS0FBRyxDQUFDQyxFQUFKLENBQU8sWUFBUCxFQUFxQixNQUFyQixFQUE2QixZQUFZO0FBQ3ZDRCxPQUFHLENBQUNrQyxTQUFKLEdBQWdCQyxLQUFoQixDQUFzQkMsTUFBdEIsR0FBK0IsU0FBL0I7QUFDRCxHQUZEO0FBR0FwQyxLQUFHLENBQUNDLEVBQUosQ0FBTyxZQUFQLEVBQXFCLE1BQXJCLEVBQTZCLFlBQVk7QUFDdkNELE9BQUcsQ0FBQ2tDLFNBQUosR0FBZ0JDLEtBQWhCLENBQXNCQyxNQUF0QixHQUErQixFQUEvQjtBQUNELEdBRkQ7QUFHRCIsImZpbGUiOiIuL21hcC9pbml0aWFsaXplTWFwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVNYXAobWFwYm94Z2wsIG1hcCkge1xuICBtYXAub24oXCJjbGlja1wiLCBcImRhdGFcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgZmVhdHVyZXMgPSBtYXAucXVlcnlSZW5kZXJlZEZlYXR1cmVzKGUucG9pbnQsIHtcbiAgICAgIGxheWVyczogW1wiZGF0YVwiXSxcbiAgICB9KTtcbiAgICB2YXIgY2x1c3RlcklkID0gZmVhdHVyZXNbMF0ucHJvcGVydGllcy5jbHVzdGVyX2lkO1xuICAgIG1hcFxuICAgICAgLmdldFNvdXJjZShcImRjbXVzaWMubGl2ZVwiKVxuICAgICAgLmdldENsdXN0ZXJFeHBhbnNpb25ab29tKGNsdXN0ZXJJZCwgZnVuY3Rpb24gKGVyciwgem9vbSkge1xuICAgICAgICBpZiAoZXJyKSByZXR1cm47XG4gICAgICAgIG1hcC5lYXNlVG8oe1xuICAgICAgICAgIGNlbnRlcjogZmVhdHVyZXNbMF0uZ2VvbWV0cnkuY29vcmRpbmF0ZXMsXG4gICAgICAgICAgem9vbTogem9vbSxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfSk7XG5cbiAgbWFwLm9uKFwiY2xpY2tcIiwgXCJ1bmNsdXN0ZXJlZC1wb2ludFwiLCBmdW5jdGlvbiAoZSkge1xuICAgIHZhciBjb29yZGluYXRlcyA9IGUuZmVhdHVyZXNbMF0uZ2VvbWV0cnkuY29vcmRpbmF0ZXMuc2xpY2UoKTtcbiAgICB2YXIgbWFnID0gZS5mZWF0dXJlc1swXS5wcm9wZXJ0aWVzLm1hZztcbiAgICB2YXIgdHN1bmFtaTtcbiAgICBpZiAoZS5mZWF0dXJlc1swXS5wcm9wZXJ0aWVzLnRzdW5hbWkgPT09IDEpIHtcbiAgICAgIHRzdW5hbWkgPSBcInllc1wiO1xuICAgIH0gZWxzZSB7XG4gICAgICB0c3VuYW1pID0gXCJub1wiO1xuICAgIH1cbiAgICB3aGlsZSAoTWF0aC5hYnMoZS5sbmdMYXQubG5nIC0gY29vcmRpbmF0ZXNbMF0pID4gMTgwKSB7XG4gICAgICBjb29yZGluYXRlc1swXSArPSBlLmxuZ0xhdC5sbmcgPiBjb29yZGluYXRlc1swXSA/IDM2MCA6IC0zNjA7XG4gICAgfVxuICAgIG5ldyBtYXBib3hnbC5Qb3B1cCgpXG4gICAgICAuc2V0TG5nTGF0KGNvb3JkaW5hdGVzKVxuICAgICAgLy8uc2V0SFRNTChcIm1hZ25pdHVkZTogXCIgKyBtYWcgKyBcIjxicj5XYXMgdGhlcmUgYSB0c3VuYW1pPzogXCIgKyB0c3VuYW1pKVxuICAgICAgLnNldEhUTUwoXCJUaGlzIGlzIGEgc3BvdFwiKVxuICAgICAgLmFkZFRvKG1hcCk7XG4gIH0pO1xuICBtYXAuYWRkQ29udHJvbChcbiAgICBuZXcgbWFwYm94Z2wuR2VvbG9jYXRlQ29udHJvbCh7XG4gICAgICBwb3NpdGlvbk9wdGlvbnM6IHtcbiAgICAgICAgZW5hYmxlSGlnaEFjY3VyYWN5OiB0cnVlLFxuICAgICAgfSxcbiAgICAgIHRyYWNrVXNlckxvY2F0aW9uOiB0cnVlLFxuICAgIH0pXG4gICk7XG5cbiAgbWFwLm9uKFwibW91c2VlbnRlclwiLCBcImRhdGFcIiwgZnVuY3Rpb24gKCkge1xuICAgIG1hcC5nZXRDYW52YXMoKS5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcbiAgfSk7XG4gIG1hcC5vbihcIm1vdXNlbGVhdmVcIiwgXCJkYXRhXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBtYXAuZ2V0Q2FudmFzKCkuc3R5bGUuY3Vyc29yID0gXCJcIjtcbiAgfSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./map/initializeMap.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _map_addDataLayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../map/addDataLayer */ \"./map/addDataLayer.js\");\n/* harmony import */ var _map_initializeMap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../map/initializeMap */ \"./map/initializeMap.js\");\n/* harmony import */ var _utilities_fetcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utilities/fetcher */ \"./utilities/fetcher.js\");\n/* harmony import */ var _utilities_fetcher__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_utilities_fetcher__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);\nvar _jsxFileName = \"/Users/olari/github-repos/nextjs-map/front-end/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\nconst mapboxgl = __webpack_require__(/*! mapbox-gl/dist/mapbox-gl.js */ \"mapbox-gl/dist/mapbox-gl.js\");\n\nfunction Home() {\n  const {\n    0: pageIsMounted,\n    1: setPageIsMounted\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  const {\n    0: Map,\n    1: setMap\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])();\n  const {\n    data,\n    error\n  } = swr__WEBPACK_IMPORTED_MODULE_2___default()(\"/api/liveMusic\", _utilities_fetcher__WEBPACK_IMPORTED_MODULE_5__[\"fetcher\"]);\n\n  if (error) {\n    console.error(error);\n  }\n\n  mapboxgl.accessToken = \"pk.eyJ1Ijoib21hcmxhcmkiLCJhIjoiY2w3dGVmdnRrMDByNjNvcXBpbW5sOWQ2MiJ9.8clE078kiXf9pbcsk60UJg\";\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    setPageIsMounted(true);\n    let map = new mapboxgl.Map({\n      container: \"my-map\",\n      style: \"mapbox://styles/mapbox/light-v10\",\n      center: [-122.433247, 37.742646],\n      zoom: 13,\n      pitch: 45,\n      maxBounds: [[-122.66336, 37.492987], // Southwest coordinates\n      [-122.250481, 37.871651] // Northeast coordinates\n      ]\n    });\n    Object(_map_initializeMap__WEBPACK_IMPORTED_MODULE_4__[\"initializeMap\"])(mapboxgl, map);\n    setMap(map);\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    if (pageIsMounted && data) {\n      Map.on(\"load\", function () {\n        Object(_map_addDataLayer__WEBPACK_IMPORTED_MODULE_3__[\"addDataLayer\"])(Map, data);\n      });\n    }\n  }, [pageIsMounted, setMap, data, Map]);\n  return __jsx(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.container,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 9\n    }\n  }, \"Create Next App\"), __jsx(\"link\", {\n    rel: \"icon\",\n    href: \"/favicon.ico\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 9\n    }\n  }), __jsx(\"link\", {\n    href: \"https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css\",\n    rel: \"stylesheet\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 9\n    }\n  })), __jsx(\"main\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.main,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    id: \"my-map\",\n    style: {\n      height: 750,\n      width: 1000\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 9\n    }\n  })), __jsx(\"footer\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.footer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 7\n    }\n  }, __jsx(\"a\", {\n    href: \"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app\",\n    target: \"_blank\",\n    rel: \"noopener noreferrer\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 9\n    }\n  }, \"Powered by\", \" \", __jsx(\"img\", {\n    src: \"/vercel.svg\",\n    alt: \"Vercel Logo\",\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.logo,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 11\n    }\n  }))));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIm1hcGJveGdsIiwicmVxdWlyZSIsIkhvbWUiLCJwYWdlSXNNb3VudGVkIiwic2V0UGFnZUlzTW91bnRlZCIsInVzZVN0YXRlIiwiTWFwIiwic2V0TWFwIiwiZGF0YSIsImVycm9yIiwidXNlU1dSIiwiZmV0Y2hlciIsImNvbnNvbGUiLCJhY2Nlc3NUb2tlbiIsInByb2Nlc3MiLCJ1c2VFZmZlY3QiLCJtYXAiLCJjb250YWluZXIiLCJzdHlsZSIsImNlbnRlciIsInpvb20iLCJwaXRjaCIsIm1heEJvdW5kcyIsImluaXRpYWxpemVNYXAiLCJvbiIsImFkZERhdGFMYXllciIsInN0eWxlcyIsIm1haW4iLCJoZWlnaHQiLCJ3aWR0aCIsImZvb3RlciIsImxvZ28iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsTUFBTUEsUUFBUSxHQUFHQyxtQkFBTyxDQUFDLGdFQUFELENBQXhCOztBQUVlLFNBQVNDLElBQVQsR0FBZ0I7QUFDN0IsUUFBTTtBQUFBLE9BQUNDLGFBQUQ7QUFBQSxPQUFnQkM7QUFBaEIsTUFBb0NDLHNEQUFRLENBQUMsS0FBRCxDQUFsRDtBQUNBLFFBQU07QUFBQSxPQUFDQyxHQUFEO0FBQUEsT0FBTUM7QUFBTixNQUFnQkYsc0RBQVEsRUFBOUI7QUFDQSxRQUFNO0FBQUVHLFFBQUY7QUFBUUM7QUFBUixNQUFrQkMsMENBQU0sQ0FBQyxnQkFBRCxFQUFtQkMsMERBQW5CLENBQTlCOztBQUVBLE1BQUlGLEtBQUosRUFBVztBQUNURyxXQUFPLENBQUNILEtBQVIsQ0FBY0EsS0FBZDtBQUNEOztBQUVEVCxVQUFRLENBQUNhLFdBQVQsR0FBdUJDLDRGQUF2QjtBQUVBQyx5REFBUyxDQUFDLE1BQU07QUFDZFgsb0JBQWdCLENBQUMsSUFBRCxDQUFoQjtBQUVBLFFBQUlZLEdBQUcsR0FBRyxJQUFJaEIsUUFBUSxDQUFDTSxHQUFiLENBQWlCO0FBQ3pCVyxlQUFTLEVBQUUsUUFEYztBQUV6QkMsV0FBSyxFQUFFLGtDQUZrQjtBQUd6QkMsWUFBTSxFQUFFLENBQUMsQ0FBQyxVQUFGLEVBQWMsU0FBZCxDQUhpQjtBQUl6QkMsVUFBSSxFQUFFLEVBSm1CO0FBS3pCQyxXQUFLLEVBQUUsRUFMa0I7QUFNekJDLGVBQVMsRUFBRSxDQUNULENBQUMsQ0FBQyxTQUFGLEVBQWEsU0FBYixDQURTLEVBQ2dCO0FBQ3pCLE9BQUMsQ0FBQyxVQUFGLEVBQWMsU0FBZCxDQUZTLENBRWdCO0FBRmhCO0FBTmMsS0FBakIsQ0FBVjtBQVlBQyw0RUFBYSxDQUFDdkIsUUFBRCxFQUFXZ0IsR0FBWCxDQUFiO0FBQ0FULFVBQU0sQ0FBQ1MsR0FBRCxDQUFOO0FBQ0QsR0FqQlEsRUFpQk4sRUFqQk0sQ0FBVDtBQW1CQUQseURBQVMsQ0FBQyxNQUFNO0FBQ2QsUUFBSVosYUFBYSxJQUFJSyxJQUFyQixFQUEyQjtBQUN6QkYsU0FBRyxDQUFDa0IsRUFBSixDQUFPLE1BQVAsRUFBZSxZQUFZO0FBQ3pCQyw4RUFBWSxDQUFDbkIsR0FBRCxFQUFNRSxJQUFOLENBQVo7QUFDRCxPQUZEO0FBR0Q7QUFDRixHQU5RLEVBTU4sQ0FBQ0wsYUFBRCxFQUFnQkksTUFBaEIsRUFBd0JDLElBQXhCLEVBQThCRixHQUE5QixDQU5NLENBQVQ7QUFRQSxTQUNFO0FBQUssYUFBUyxFQUFFb0IsOERBQU0sQ0FBQ1QsU0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsRUFFRTtBQUFNLE9BQUcsRUFBQyxNQUFWO0FBQWlCLFFBQUksRUFBQyxjQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRTtBQUNFLFFBQUksRUFBQywyREFEUDtBQUVFLE9BQUcsRUFBQyxZQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixDQURGLEVBVUU7QUFBTSxhQUFTLEVBQUVTLDhEQUFNLENBQUNDLElBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE1BQUUsRUFBQyxRQUFSO0FBQWlCLFNBQUssRUFBRTtBQUFFQyxZQUFNLEVBQUUsR0FBVjtBQUFlQyxXQUFLLEVBQUU7QUFBdEIsS0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBVkYsRUFjRTtBQUFRLGFBQVMsRUFBRUgsOERBQU0sQ0FBQ0ksTUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsUUFBSSxFQUFDLHdHQURQO0FBRUUsVUFBTSxFQUFDLFFBRlQ7QUFHRSxPQUFHLEVBQUMscUJBSE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFLYSxHQUxiLEVBTUU7QUFBSyxPQUFHLEVBQUMsYUFBVDtBQUF1QixPQUFHLEVBQUMsYUFBM0I7QUFBeUMsYUFBUyxFQUFFSiw4REFBTSxDQUFDSyxJQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkYsQ0FERixDQWRGLENBREY7QUEyQkQiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xuaW1wb3J0IHsgYWRkRGF0YUxheWVyIH0gZnJvbSBcIi4uL21hcC9hZGREYXRhTGF5ZXJcIjtcbmltcG9ydCB7IGluaXRpYWxpemVNYXAgfSBmcm9tIFwiLi4vbWFwL2luaXRpYWxpemVNYXBcIjtcbmltcG9ydCB7IGZldGNoZXIgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2ZldGNoZXJcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmNvbnN0IG1hcGJveGdsID0gcmVxdWlyZShcIm1hcGJveC1nbC9kaXN0L21hcGJveC1nbC5qc1wiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3BhZ2VJc01vdW50ZWQsIHNldFBhZ2VJc01vdW50ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbTWFwLCBzZXRNYXBdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFwiL2FwaS9saXZlTXVzaWNcIiwgZmV0Y2hlcik7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gIH1cblxuICBtYXBib3hnbC5hY2Nlc3NUb2tlbiA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX01BUEJPWF9HTF9BQ0NFU1NfVE9LRU47XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRQYWdlSXNNb3VudGVkKHRydWUpO1xuXG4gICAgbGV0IG1hcCA9IG5ldyBtYXBib3hnbC5NYXAoe1xuICAgICAgY29udGFpbmVyOiBcIm15LW1hcFwiLFxuICAgICAgc3R5bGU6IFwibWFwYm94Oi8vc3R5bGVzL21hcGJveC9saWdodC12MTBcIixcbiAgICAgIGNlbnRlcjogWy0xMjIuNDMzMjQ3LCAzNy43NDI2NDZdLFxuICAgICAgem9vbTogMTMsXG4gICAgICBwaXRjaDogNDUsXG4gICAgICBtYXhCb3VuZHM6IFtcbiAgICAgICAgWy0xMjIuNjYzMzYsIDM3LjQ5Mjk4N10sIC8vIFNvdXRod2VzdCBjb29yZGluYXRlc1xuICAgICAgICBbLTEyMi4yNTA0ODEsIDM3Ljg3MTY1MV0gLy8gTm9ydGhlYXN0IGNvb3JkaW5hdGVzXG4gICAgICBdLFxuICAgIH0pO1xuXG4gICAgaW5pdGlhbGl6ZU1hcChtYXBib3hnbCwgbWFwKTtcbiAgICBzZXRNYXAobWFwKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHBhZ2VJc01vdW50ZWQgJiYgZGF0YSkge1xuICAgICAgTWFwLm9uKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGFkZERhdGFMYXllcihNYXAsIGRhdGEpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCBbcGFnZUlzTW91bnRlZCwgc2V0TWFwLCBkYXRhLCBNYXBdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIGhyZWY9XCJodHRwczovL2FwaS5tYXBib3guY29tL21hcGJveC1nbC1qcy92MS4xMi4wL21hcGJveC1nbC5jc3NcIlxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGRpdiBpZD1cIm15LW1hcFwiIHN0eWxlPXt7IGhlaWdodDogNzUwLCB3aWR0aDogMTAwMCB9fSAvPlxuICAgICAgPC9tYWluPlxuXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vdmVyY2VsLmNvbT91dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWRlZmF1bHQtdGVtcGxhdGUmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIFBvd2VyZWQgYnl7XCIgXCJ9XG4gICAgICAgICAgPGltZyBzcmM9XCIvdmVyY2VsLnN2Z1wiIGFsdD1cIlZlcmNlbCBMb2dvXCIgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30gLz5cbiAgICAgICAgPC9hPlxuICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__1EcsU\",\n\t\"main\": \"Home_main__1x8gC\",\n\t\"footer\": \"Home_footer__1WdhD\",\n\t\"title\": \"Home_title__3DjR7\",\n\t\"description\": \"Home_description__17Z4F\",\n\t\"code\": \"Home_code__axx2Y\",\n\t\"grid\": \"Home_grid__2Ei2F\",\n\t\"card\": \"Home_card__2SdtB\",\n\t\"logo\": \"Home_logo__1YbrH\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzPzRmYmEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkhvbWVfY29udGFpbmVyX18xRWNzVVwiLFxuXHRcIm1haW5cIjogXCJIb21lX21haW5fXzF4OGdDXCIsXG5cdFwiZm9vdGVyXCI6IFwiSG9tZV9mb290ZXJfXzFXZGhEXCIsXG5cdFwidGl0bGVcIjogXCJIb21lX3RpdGxlX18zRGpSN1wiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiSG9tZV9kZXNjcmlwdGlvbl9fMTdaNEZcIixcblx0XCJjb2RlXCI6IFwiSG9tZV9jb2RlX19heHgyWVwiLFxuXHRcImdyaWRcIjogXCJIb21lX2dyaWRfXzJFaTJGXCIsXG5cdFwiY2FyZFwiOiBcIkhvbWVfY2FyZF9fMlNkdEJcIixcblx0XCJsb2dvXCI6IFwiSG9tZV9sb2dvX18xWWJySFwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "./utilities/fetcher.js":
/*!******************************!*\
  !*** ./utilities/fetcher.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("async function fetcher(params) {\n  try {\n    const response = await fetch(params);\n    const responseJSON = await response.json();\n    return responseJSON;\n  } catch (error) {\n    console.error(\"Fetcher error: \" + error);\n    return {};\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlsaXRpZXMvZmV0Y2hlci5qcz9hMTc2Il0sIm5hbWVzIjpbImZldGNoZXIiLCJwYXJhbXMiLCJyZXNwb25zZSIsImZldGNoIiwicmVzcG9uc2VKU09OIiwianNvbiIsImVycm9yIiwiY29uc29sZSJdLCJtYXBwaW5ncyI6IkFBQUEsZUFBZUEsT0FBZixDQUF1QkMsTUFBdkIsRUFBK0I7QUFDN0IsTUFBSTtBQUNGLFVBQU1DLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUNGLE1BQUQsQ0FBNUI7QUFDQSxVQUFNRyxZQUFZLEdBQUcsTUFBTUYsUUFBUSxDQUFDRyxJQUFULEVBQTNCO0FBQ0EsV0FBT0QsWUFBUDtBQUNELEdBSkQsQ0FJRSxPQUFPRSxLQUFQLEVBQWM7QUFDZEMsV0FBTyxDQUFDRCxLQUFSLENBQWMsb0JBQW9CQSxLQUFsQztBQUNBLFdBQU8sRUFBUDtBQUNEO0FBQ0YiLCJmaWxlIjoiLi91dGlsaXRpZXMvZmV0Y2hlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImFzeW5jIGZ1bmN0aW9uIGZldGNoZXIocGFyYW1zKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChwYXJhbXMpO1xuICAgIGNvbnN0IHJlc3BvbnNlSlNPTiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gcmVzcG9uc2VKU09OO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJGZXRjaGVyIGVycm9yOiBcIiArIGVycm9yKTtcbiAgICByZXR1cm4ge307XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utilities/fetcher.js\n");

/***/ }),

/***/ "mapbox-gl/dist/mapbox-gl.js":
/*!**********************************************!*\
  !*** external "mapbox-gl/dist/mapbox-gl.js" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mapbox-gl/dist/mapbox-gl.js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtYXBib3gtZ2wvZGlzdC9tYXBib3gtZ2wuanNcIj84OWU4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im1hcGJveC1nbC9kaXN0L21hcGJveC1nbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1hcGJveC1nbC9kaXN0L21hcGJveC1nbC5qc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mapbox-gl/dist/mapbox-gl.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"swr\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzd3JcIj9jMjg5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InN3ci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN3clwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///swr\n");

/***/ })

/******/ });