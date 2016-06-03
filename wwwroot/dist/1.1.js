webpackJsonp([1],{

/***/ 703:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(704));


/***/ },

/***/ 704:
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
	var shared_1 = __webpack_require__(631);
	/*
	 * We're loading this component asynchronously
	 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
	 * see https://github.com/gdi2290/es6-promise-loader for more info
	 */
	var AboutComponent = (function () {
	    function AboutComponent() {
	    }
	    AboutComponent.prototype.ngOnInit = function () {
	        console.log('About component is lazily loaded');
	    };
	    AboutComponent = __decorate([
	        core_1.Component({
	            selector: 'sc-about',
	            styles: [__webpack_require__(705)],
	            directives: [shared_1.PageHeading],
	            template: "\n  <page-heading text='About page'></page-heading>\n  <p>With nested Angular 2 routing</p>\n    <div class=\"nav\">\n        <a [routerLink]=\"['AboutMe']\">About me</a>\n        <a [routerLink]=\"['AboutYou']\">About you</a>\n    </div>    \n    <router-outlet></router-outlet>\n  "
	        }),
	        router_deprecated_1.RouteConfig([
	            { path: '/me', name: 'AboutMe', loader: function () { return __webpack_require__(706)('AboutMeComponent'); }, useAsDefault: true },
	            { path: '/you', name: 'AboutYou', loader: function () { return __webpack_require__(711)('AboutYouComponent'); } }
	        ]), 
	        __metadata('design:paramtypes', [])
	    ], AboutComponent);
	    return AboutComponent;
	}());
	exports.AboutComponent = AboutComponent;


/***/ },

/***/ 705:
/***/ function(module, exports) {

	module.exports = "a {\n  font-size: 20px;\n  margin: 10px;\n  border: 4px solid lightslategrey;\n  padding: 10px; }\n\n.router-link-active {\n  background-color: lightblue; }\n"

/***/ },

/***/ 706:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(2, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(707)[namespace]);
	      } else {
	        resolve(__webpack_require__(707));
	      }
	    });
	  });
	}

/***/ },

/***/ 711:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(3, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(712)[namespace]);
	      } else {
	        resolve(__webpack_require__(712));
	      }
	    });
	  });
	}

/***/ }

});
//# sourceMappingURL=1.1.js.map