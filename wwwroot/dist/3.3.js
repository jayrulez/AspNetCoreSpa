webpackJsonp([3],{

/***/ 712:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(713));


/***/ },

/***/ 713:
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
	var AboutYouComponent = (function () {
	    function AboutYouComponent() {
	    }
	    AboutYouComponent.prototype.ngOnInit = function () {
	        console.log('About you component loaded');
	    };
	    AboutYouComponent = __decorate([
	        core_1.Component({
	            selector: 'sc-about-you',
	            styles: [__webpack_require__(714)],
	            template: __webpack_require__(715)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AboutYouComponent);
	    return AboutYouComponent;
	}());
	exports.AboutYouComponent = AboutYouComponent;


/***/ },

/***/ 714:
/***/ function(module, exports) {

	module.exports = "h1 {\n  background-color: blueviolet; }\n"

/***/ },

/***/ 715:
/***/ function(module, exports) {

	module.exports = "<h1>About You</h1>"

/***/ }

});
//# sourceMappingURL=3.3.js.map