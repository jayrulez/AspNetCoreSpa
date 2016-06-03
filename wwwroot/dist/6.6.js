webpackJsonp([6],{

/***/ 734:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(735));


/***/ },

/***/ 735:
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
	var user_profile_service_1 = __webpack_require__(736);
	var change_name_component_1 = __webpack_require__(737);
	var change_password_component_1 = __webpack_require__(740);
	var UserProfileComponent = (function () {
	    function UserProfileComponent() {
	    }
	    UserProfileComponent.prototype.notify = function (message) {
	        this.notificationMessage = message;
	    };
	    UserProfileComponent = __decorate([
	        core_1.Component({
	            selector: 'sd-user-profile',
	            providers: [user_profile_service_1.UserProfileService],
	            directives: [change_name_component_1.ChangeNameComponent, change_password_component_1.ChangePasswordComponent],
	            template: __webpack_require__(743)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], UserProfileComponent);
	    return UserProfileComponent;
	}());
	exports.UserProfileComponent = UserProfileComponent;


/***/ },

/***/ 736:
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
	var shared_1 = __webpack_require__(631);
	var UserProfileService = (function () {
	    function UserProfileService(dataService) {
	        this.dataService = dataService;
	        this.userNameApi = 'api/profile/username/';
	        this.changePasswordApi = 'api/profile/changepassword/';
	    }
	    UserProfileService.prototype.changePassword = function (changePasswordModel) {
	        return this.dataService.post(this.changePasswordApi, changePasswordModel);
	    };
	    UserProfileService.prototype.userName = function (userNameModel) {
	        if (userNameModel) {
	            return this.dataService.post(this.userNameApi, userNameModel);
	        }
	        else {
	            return this.dataService.get(this.userNameApi);
	        }
	    };
	    UserProfileService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [shared_1.DataService])
	    ], UserProfileService);
	    return UserProfileService;
	}());
	exports.UserProfileService = UserProfileService;


/***/ },

/***/ 737:
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
	var user_profile_service_1 = __webpack_require__(736);
	var user_name_model_1 = __webpack_require__(738);
	var shared_1 = __webpack_require__(631);
	var ChangeNameComponent = (function () {
	    function ChangeNameComponent(profileService) {
	        this.profileService = profileService;
	        this.userNameModel = new user_name_model_1.UserNameModel('', '');
	        this.notification = new core_1.EventEmitter();
	    }
	    ChangeNameComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.profileService.userName()
	            .subscribe(function (res) {
	            _this.userNameModel.firstName = res.firstName;
	            _this.userNameModel.lastName = res.lastName;
	        }, function (errors) { return _this.notification.emit(errors[0]); });
	    };
	    ChangeNameComponent.prototype.save = function () {
	        var _this = this;
	        this.profileService.userName(this.userNameModel)
	            .subscribe(function (res) {
	            _this.userNameModel.firstName = res.firstName;
	            _this.userNameModel.lastName = res.lastName;
	            _this.notification.emit("Profile name changed to " + res.firstName + " " + res.lastName);
	        }, function (errors) { return _this.notification.emit(errors[0]); });
	    };
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], ChangeNameComponent.prototype, "notification", void 0);
	    ChangeNameComponent = __decorate([
	        core_1.Component({
	            selector: 'sd-change-name',
	            directives: [shared_1.PageHeading],
	            template: __webpack_require__(739)
	        }), 
	        __metadata('design:paramtypes', [user_profile_service_1.UserProfileService])
	    ], ChangeNameComponent);
	    return ChangeNameComponent;
	}());
	exports.ChangeNameComponent = ChangeNameComponent;


/***/ },

/***/ 738:
/***/ function(module, exports) {

	"use strict";
	var UserNameModel = (function () {
	    function UserNameModel(firstName, lastName) {
	        this.firstName = firstName;
	        this.lastName = lastName;
	    }
	    return UserNameModel;
	}());
	exports.UserNameModel = UserNameModel;


/***/ },

/***/ 739:
/***/ function(module, exports) {

	module.exports = "<div class=\"col-lg-4\">\r\n    <div class=\"ibox float-e-margins\">\r\n        <div class=\"ibox-title\">\r\n            <page-heading text=\"Change username\"></page-heading>\r\n        </div>\r\n\r\n        <div class=\"ibox-content\">\r\n            <div *ngFor=\"let error of errors\">\r\n                <label class=\"error\">{{error}}</label>\r\n            </div>\r\n            <form class=\"form-horizontal\" #hf=\"ngForm\" novalidate>\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-lg-2 control-label\">First name</label>\r\n\r\n                    <div class=\"col-lg-10\">\r\n                        <input type=\"text\" [class.error]=\"!firstName.valid\" class=\"form-control input-lg\" placeholder=\"First name\"\r\n                               [(ngModel)]=\"userNameModel.firstName\" name=\"firstName\" ngControl=\"firstName\" required #firstName=\"ngForm\" />\r\n                        <label *ngIf=\"!firstName.valid && firstName.touched\" class=\"error\">\r\n                            FirstName is required\r\n                        </label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-lg-2 control-label\">Last name</label>\r\n                    <div class=\"col-lg-10\">\r\n                        <input type=\"text\" [class.error]=\"!lastName.valid\" class=\"form-control input-lg\" placeholder=\"LastName\"\r\n                               [(ngModel)]=\"userNameModel.lastName\" name=\"lastName\" ngControl=\"lastName\" required #lastName=\"ngForm\" />\r\n                        <label *ngIf=\"!lastName.valid && lastName.touched\" class=\"error\">\r\n                            LastName is required\r\n                        </label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <div class=\"col-lg-offset-2 col-lg-10\">\r\n                        <button class=\"btn btn-primary pull-right\" (click)=\"save()\" [disabled]=\"!hf.form.valid\">Update</button>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ },

/***/ 740:
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
	var common_1 = __webpack_require__(380);
	var user_profile_service_1 = __webpack_require__(736);
	var change_password_model_1 = __webpack_require__(741);
	var shared_1 = __webpack_require__(631);
	var ChangePasswordComponent = (function () {
	    function ChangePasswordComponent(userProfileService, fb) {
	        this.userProfileService = userProfileService;
	        this.fb = fb;
	        this.changePasswordModel = new change_password_model_1.ChangePasswordModel('', '', '');
	        this.notification = new core_1.EventEmitter();
	        this.changePasswordForm = this.fb.group({
	            'oldPassword': ['', common_1.Validators.compose([common_1.Validators.required, shared_1.ValidationService.passwordValidator])],
	            'newPassword': ['', common_1.Validators.compose([common_1.Validators.required, shared_1.ValidationService.passwordValidator])],
	            'confirmPassword': ['', common_1.Validators.compose([common_1.Validators.required, shared_1.ValidationService.passwordValidator])]
	        });
	    }
	    ChangePasswordComponent.prototype.changePassword = function (form) {
	        var _this = this;
	        if (this.changePasswordForm.valid && this.changePasswordForm.dirty) {
	            this.changePasswordModel.oldPassword = this.changePasswordForm.value.oldPassword;
	            this.changePasswordModel.newPassword = this.changePasswordForm.value.newPassword;
	            this.changePasswordModel.confirmPassword = this.changePasswordForm.value.confirmPassword;
	            this.userProfileService.changePassword(this.changePasswordModel)
	                .subscribe(function (res) {
	                _this.notification.emit("Password changed successfully");
	            }, function (errors) {
	                _this.notification.emit(errors[0]);
	                _this.changePasswordModel = new change_password_model_1.ChangePasswordModel('', '', '');
	            });
	        }
	    };
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], ChangePasswordComponent.prototype, "notification", void 0);
	    ChangePasswordComponent = __decorate([
	        core_1.Component({
	            selector: 'sd-change-password',
	            directives: [shared_1.PageHeading],
	            template: __webpack_require__(742)
	        }), 
	        __metadata('design:paramtypes', [user_profile_service_1.UserProfileService, common_1.FormBuilder])
	    ], ChangePasswordComponent);
	    return ChangePasswordComponent;
	}());
	exports.ChangePasswordComponent = ChangePasswordComponent;


/***/ },

/***/ 741:
/***/ function(module, exports) {

	"use strict";
	var ChangePasswordModel = (function () {
	    function ChangePasswordModel(oldPassword, newPassword, confirmPassword) {
	        this.oldPassword = oldPassword;
	        this.newPassword = newPassword;
	        this.confirmPassword = confirmPassword;
	    }
	    return ChangePasswordModel;
	}());
	exports.ChangePasswordModel = ChangePasswordModel;


/***/ },

/***/ 742:
/***/ function(module, exports) {

	module.exports = "<div class=\"col-lg-6\">\r\n    <div class=\"ibox float-e-margins\">\r\n        <div class=\"ibox-title\">\r\n            <page-heading text=\"Change password\"></page-heading>\r\n        </div>\r\n\r\n        <div class=\"ibox-content\">\r\n            <div *ngFor=\"let error of errors\">\r\n                <label class=\"error\">{{error}}</label>\r\n            </div>\r\n\r\n            <form class=\"form-horizontal\" [ngFormModel]=\"changePasswordForm\" (submit)=\"changePassword()\" novalidate>\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-lg-2 control-label\">Old password</label>\r\n                    <div class=\"col-lg-10\">\r\n                        <input ngControl=\"oldPassword\" #oldPassword type=\"password\" id=\"oldPassword\" name=\"oldPassword\" [class.error]=\"!oldPassword.valid\" class=\"form-control input-lg\" placeholder=\"Old password\" />\r\n                        <control-messages control=\"oldPassword\"></control-messages>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-lg-2 control-label\">New password</label>\r\n                    <div class=\"col-lg-10\">\r\n                        <input ngControl=\"newPassword\" #newPassword type=\"password\" id=\"newPassword\" name=\"newPassword\" [class.error]=\"!newPassword.valid\" class=\"form-control input-lg\" placeholder=\"New password\" />\r\n                        <control-messages control=\"newPassword\"></control-messages>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-lg-2 control-label\">Confirm password</label>\r\n                    <div class=\"col-lg-10\">\r\n                        <input ngControl=\"confirmPassword\" #confirmPassword type=\"password\" id=\"confirmPassword\" name=\"confirmPassword\" [class.error]=\"!confirmPassword.valid\" class=\"form-control input-lg\" placeholder=\"Confirm password\" />\r\n                        <control-messages control=\"confirmPassword\"></control-messages>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <div class=\"col-lg-offset-2 col-lg-10\">\r\n                        <button class=\"btn btn-primary pull-right\" [disabled]=\"!changePasswordForm.valid\">Change password</button>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ },

/***/ 743:
/***/ function(module, exports) {

	module.exports = "<!--Alert message-->\r\n<div class=\"row\">\r\n    <div class=\"container col-md-4 alert alert-success animated fadeInRight\" *ngIf=\"notificationMessage\">\r\n        <button aria-hidden=\"true\" data-dismiss=\"alert\" class=\"close\" type=\"button\" (click)=\"notificationMessage = ''\">&times;</button>\r\n        {{notificationMessage}}\r\n    </div>\r\n</div>\r\n\r\n<sd-change-name (notification)=\"notify($event)\"></sd-change-name>\r\n\r\n<sd-change-password (notification)=\"notify($event)\"></sd-change-password>\r\n\r\n"

/***/ }

});
//# sourceMappingURL=6.6.js.map