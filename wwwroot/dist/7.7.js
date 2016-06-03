webpackJsonp([7],{

/***/ 745:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(746));


/***/ },

/***/ 746:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(281);
	var router_deprecated_1 = __webpack_require__(579);
	var RegisterContainerComponent = (function () {
	    function RegisterContainerComponent() {
	    }
	    RegisterContainerComponent = __decorate([
	        core_1.Component({
	            template: '<router-outlet></router-outlet>'
	        }),
	        router_deprecated_1.RouteConfig([
	            { path: '/', name: 'Register', loader: function () { return __webpack_require__(747)('RegisterComponent'); }, useAsDefault: true },
	            { path: '/registerconfirmation', name: 'RegisterConfirmation', loader: function () { return __webpack_require__(753)('RegisterConfirmationComponent'); } }
	        ]), 
	        __metadata('design:paramtypes', [])
	    ], RegisterContainerComponent);
	    return RegisterContainerComponent;
	}());
	exports.RegisterContainerComponent = RegisterContainerComponent;


/***/ },

/***/ 747:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(8, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(748)[namespace]);
	      } else {
	        resolve(__webpack_require__(748));
	      }
	    });
	  });
	}

/***/ },

/***/ 753:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(9, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(754)[namespace]);
	      } else {
	        resolve(__webpack_require__(754));
	      }
	    });
	  });
	}

/***/ }

});
//# sourceMappingURL=7.7.js.map