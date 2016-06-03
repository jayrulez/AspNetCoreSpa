webpackJsonp([9],{

/***/ 754:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(755));


/***/ },

/***/ 755:
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
	var RegisterConfirmationComponent = (function () {
	    function RegisterConfirmationComponent(router, routeParams) {
	        this.router = router;
	        this.routeParams = routeParams;
	    }
	    RegisterConfirmationComponent.prototype.ngOnInit = function () {
	        this.emailConfirmed = (this.routeParams.get('emailConfirmed') && this.routeParams.get('emailConfirmed').toLowerCase() === 'true');
	    };
	    RegisterConfirmationComponent = __decorate([
	        core_1.Component({
	            selector: 'sd-register-confirmation',
	            directives: [shared_1.PageHeading],
	            template: __webpack_require__(756)
	        }), 
	        __metadata('design:paramtypes', [router_deprecated_1.Router, router_deprecated_1.RouteParams])
	    ], RegisterConfirmationComponent);
	    return RegisterConfirmationComponent;
	}());
	exports.RegisterConfirmationComponent = RegisterConfirmationComponent;


/***/ },

/***/ 756:
/***/ function(module, exports) {

	module.exports = "<div>\r\n    <page-heading text=\"Registration confirmed\">\r\n    </page-heading>\r\n\r\n    <p *ngIf=\"!emailConfirmed\">\r\n        We have sent you a confirmation email, please visit your inbox and confirm by clicking the confirmation link.\r\n    </p>\r\n\r\n    <p *ngIf=\"emailConfirmed\">\r\n        Thank you for confirming your email, please <a [routerLink]=\"['Login']\">Login</a> now.\r\n    </p>\r\n</div>"

/***/ }

});
//# sourceMappingURL=9.9.js.map