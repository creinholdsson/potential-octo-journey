webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#main-container {\r\n    margin-top: 30px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n    <app-navmenu></app-navmenu>\n</header>\n\n<main role=\"main\" class=\"container\" id=\"main-container\">\n    <spinner spinner=\"sk-wave\"></spinner>\n    <div baseZIndex=\"-999999999\">\n        <p-growl [(value)]=\"msgs\"></p-growl>\n    </div>\n    <router-outlet></router-outlet>\n</main>\n\n<app-footer></app-footer>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng_http_loader_ng_http_loader_module__ = __webpack_require__("../../../../ng-http-loader/ng-http-loader.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng_http_loader_ng_http_loader_module___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng_http_loader_ng_http_loader_module__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_components_common_messageservice__ = __webpack_require__("../../../../primeng/components/common/messageservice.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_components_common_messageservice___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_primeng_components_common_messageservice__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__interceptors_token_interceptor__ = __webpack_require__("../../../../../src/app/interceptors/token.interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__navmenu_navmenu_component__ = __webpack_require__("../../../../../src/app/navmenu/navmenu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__game_list_game_list_component__ = __webpack_require__("../../../../../src/app/game-list/game-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__index_index_component__ = __webpack_require__("../../../../../src/app/index/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__game_game_component__ = __webpack_require__("../../../../../src/app/game/game.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_game_service__ = __webpack_require__("../../../../../src/app/services/game.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__directives_order_by_pipe__ = __webpack_require__("../../../../../src/app/directives/order-by-pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__game_create_game_create_component__ = __webpack_require__("../../../../../src/app/game-create/game-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__login_component_login_component_component__ = __webpack_require__("../../../../../src/app/login-component/login-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_authentication_service_service__ = __webpack_require__("../../../../../src/app/services/authentication-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__directives_taken_username_directive__ = __webpack_require__("../../../../../src/app/directives/taken-username.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__user_user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__game_edit_game_edit_component__ = __webpack_require__("../../../../../src/app/game-edit/game-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__directives_has_permission_directive__ = __webpack_require__("../../../../../src/app/directives/has-permission.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__top_list_top_list_component__ = __webpack_require__("../../../../../src/app/top-list/top-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__limit_to_pipe__ = __webpack_require__("../../../../../src/app/limit-to.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_16__index_index_component__["a" /* IndexComponent */] },
    { path: 'game/add', component: __WEBPACK_IMPORTED_MODULE_20__game_create_game_create_component__["a" /* GameCreateComponent */] },
    { path: 'game/edit/:id', component: __WEBPACK_IMPORTED_MODULE_27__game_edit_game_edit_component__["a" /* GameEditComponent */] },
    { path: 'game/:id', component: __WEBPACK_IMPORTED_MODULE_17__game_game_component__["a" /* GameComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_23__register_register_component__["a" /* RegisterComponent */] },
    { path: 'user/:username', component: __WEBPACK_IMPORTED_MODULE_25__user_user_component__["a" /* UserComponent */] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_13__navmenu_navmenu_component__["a" /* NavmenuComponent */],
                __WEBPACK_IMPORTED_MODULE_14__game_list_game_list_component__["a" /* GameListComponent */],
                __WEBPACK_IMPORTED_MODULE_15__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_16__index_index_component__["a" /* IndexComponent */],
                __WEBPACK_IMPORTED_MODULE_17__game_game_component__["a" /* GameComponent */],
                __WEBPACK_IMPORTED_MODULE_19__directives_order_by_pipe__["a" /* OrderByPipe */],
                __WEBPACK_IMPORTED_MODULE_20__game_create_game_create_component__["a" /* GameCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_21__login_component_login_component_component__["a" /* LoginComponentComponent */],
                __WEBPACK_IMPORTED_MODULE_23__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_24__directives_taken_username_directive__["a" /* TakenUsernameDirective */],
                __WEBPACK_IMPORTED_MODULE_25__user_user_component__["a" /* UserComponent */],
                __WEBPACK_IMPORTED_MODULE_27__game_edit_game_edit_component__["a" /* GameEditComponent */],
                __WEBPACK_IMPORTED_MODULE_28__directives_has_permission_directive__["a" /* HasPermissionDirective */],
                __WEBPACK_IMPORTED_MODULE_29__top_list_top_list_component__["a" /* TopListComponent */],
                __WEBPACK_IMPORTED_MODULE_30__limit_to_pipe__["a" /* LimitToPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forRoot(appRoutes, { enableTracing: true }),
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["InputTextModule"],
                __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["ButtonModule"],
                __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["CardModule"],
                __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["DropdownModule"],
                __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["InputTextareaModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["GrowlModule"],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["HttpClientModule"],
                __WEBPACK_IMPORTED_MODULE_7_ng_http_loader_ng_http_loader_module__["NgHttpLoaderModule"],
                __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["ChartModule"],
                __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_18__services_game_service__["a" /* GameService */],
                __WEBPACK_IMPORTED_MODULE_9_primeng_components_common_messageservice__["MessageService"],
                __WEBPACK_IMPORTED_MODULE_26__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_22__services_authentication_service_service__["a" /* AuthenticationService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["HTTP_INTERCEPTORS"],
                    useClass: __WEBPACK_IMPORTED_MODULE_11__interceptors_token_interceptor__["a" /* TokenInterceptor */],
                    multi: true
                },
                __WEBPACK_IMPORTED_MODULE_28__directives_has_permission_directive__["a" /* HasPermissionDirective */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/directives/has-permission.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HasPermissionDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service_service__ = __webpack_require__("../../../../../src/app/services/authentication-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HasPermissionDirective = /** @class */ (function () {
    function HasPermissionDirective(authenticationService, element, renderer) {
        this.authenticationService = authenticationService;
        this.element = element;
        this.renderer = renderer;
    }
    HasPermissionDirective.prototype.ngOnInit = function () {
        var _this = this;
        console.log('Initialized with ' + this.hasPermission);
        this.applyPermission(this.hasPermission);
        this.authenticationService.getEmitter().asObservable().subscribe(function (x) {
            console.log('got event!');
            _this.applyPermission(_this.hasPermission);
        });
    };
    HasPermissionDirective.prototype.applyPermission = function (role) {
        if (this.hasPermission) {
            if (this.authenticationService.hasRole(this.hasPermission)) {
                console.log('User has permission');
                this.renderer.setElementStyle(this.element.nativeElement, 'display', 'inline-block');
            }
            else {
                console.log('User doesnt have permission');
                this.renderer.setElementStyle(this.element.nativeElement, 'display', 'none');
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('appHasPermission'),
        __metadata("design:type", String)
    ], HasPermissionDirective.prototype, "hasPermission", void 0);
    HasPermissionDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appHasPermission]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_authentication_service_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
    ], HasPermissionDirective);
    return HasPermissionDirective;
}());



/***/ }),

/***/ "../../../../../src/app/directives/order-by-pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderByPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OrderByPipe = /** @class */ (function () {
    function OrderByPipe() {
    }
    OrderByPipe_1 = OrderByPipe;
    OrderByPipe.prototype.transform = function (value, expression, reverse) {
        if (!value) {
            return value;
        }
        var isArray = value instanceof Array;
        if (isArray) {
            return this.sortArray(value, expression, reverse);
        }
        if (typeof value === 'object') {
            return this.transformObject(value, expression, reverse);
        }
        return value;
    };
    /**
     * Sort array
     *
     * @param value
     * @param expression
     * @param reverse
     * @returns {any[]}
     */
    OrderByPipe.prototype.sortArray = function (value, expression, reverse) {
        var isDeepLink = expression && expression.indexOf('.') !== -1;
        if (isDeepLink) {
            expression = OrderByPipe_1.parseExpression(expression);
        }
        var array = value.sort(function (a, b) {
            if (!expression) {
                return a > b ? 1 : -1;
            }
            if (!isDeepLink) {
                return a[expression] > b[expression] ? 1 : -1;
            }
            return OrderByPipe_1.getValue(a, expression) > OrderByPipe_1.getValue(b, expression) ? 1 : -1;
        });
        if (reverse) {
            return array.reverse();
        }
        return array;
    };
    /**
     * Transform Object
     *
     * @param value
     * @param expression
     * @param reverse
     * @returns {any[]}
     */
    OrderByPipe.prototype.transformObject = function (value, expression, reverse) {
        var parsedExpression = OrderByPipe_1.parseExpression(expression);
        var lastPredicate = parsedExpression.pop();
        var oldValue = OrderByPipe_1.getValue(value, parsedExpression);
        if (!(oldValue instanceof Array)) {
            parsedExpression.push(lastPredicate);
            lastPredicate = null;
            oldValue = OrderByPipe_1.getValue(value, parsedExpression);
        }
        if (!oldValue) {
            return value;
        }
        var newValue = this.transform(oldValue, lastPredicate, reverse);
        OrderByPipe_1.setValue(value, newValue, parsedExpression);
        return value;
    };
    /**
     * Parse expression, split into items
     * @param expression
     * @returns {string[]}
     */
    OrderByPipe.parseExpression = function (expression) {
        expression = expression.replace(/\[(\w+)\]/g, '.$1');
        expression = expression.replace(/^\./, '');
        return expression.split('.');
    };
    /**
     * Get value by expression
     *
     * @param object
     * @param expression
     * @returns {any}
     */
    OrderByPipe.getValue = function (object, expression) {
        for (var i = 0, n = expression.length; i < n; ++i) {
            var k = expression[i];
            if (!(k in object)) {
                return;
            }
            object = object[k];
        }
        return object;
    };
    /**
     * Set value by expression
     *
     * @param object
     * @param value
     * @param expression
     */
    OrderByPipe.setValue = function (object, value, expression) {
        var i;
        for (i = 0; i < expression.length - 1; i++) {
            object = object[expression[i]];
        }
        object[expression[i]] = value;
    };
    OrderByPipe = OrderByPipe_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'orderBy' })
    ], OrderByPipe);
    return OrderByPipe;
    var OrderByPipe_1;
}());



/***/ }),

/***/ "../../../../../src/app/directives/taken-username.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TakenUsernameDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service_service__ = __webpack_require__("../../../../../src/app/services/authentication-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TakenUsernameDirective = /** @class */ (function () {
    function TakenUsernameDirective(authenticationService) {
        this.authenticationService = authenticationService;
    }
    TakenUsernameDirective_1 = TakenUsernameDirective;
    TakenUsernameDirective.prototype.validate = function (c) {
        return this.validateUniqueUsername(this.userName);
    };
    TakenUsernameDirective.prototype.registerOnValidatorChange = function (fn) {
        throw new Error("Method not implemented.");
    };
    TakenUsernameDirective.prototype.validateUniqueUsername = function (username) {
        var _this = this;
        return new Promise(function (resolve) { return _this.authenticationService.checkUsername(username).then(function (result) {
            if (result) {
                resolve(null);
            }
            else {
                resolve({ asyncInvalid: true });
            }
        }); });
    };
    TakenUsernameDirective.prototype.validateUniqueUsernameObservable = function (username) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
            _this.authenticationService.checkUsername(username).then(function (result) {
                if (result) {
                    observer.next(null);
                }
                else {
                    observer.next({ asyncInvalid: true });
                }
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], TakenUsernameDirective.prototype, "userName", void 0);
    TakenUsernameDirective = TakenUsernameDirective_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appTakenUsername]',
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_2__angular_forms__["NG_ASYNC_VALIDATORS"], useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return TakenUsernameDirective_1; }), multi: true }]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_authentication_service_service__["a" /* AuthenticationService */]])
    ], TakenUsernameDirective);
    return TakenUsernameDirective;
    var TakenUsernameDirective_1;
}());



/***/ }),

/***/ "../../../../../src/app/domain/auth/authentication-event.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationEvent; });
var AuthenticationEvent = /** @class */ (function () {
    function AuthenticationEvent(isLoggedIn) {
        this.isLoggedIn = isLoggedIn;
    }
    return AuthenticationEvent;
}());



/***/ }),

/***/ "../../../../../src/app/domain/auth/user-for-creation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserForCreation; });
var UserForCreation = /** @class */ (function () {
    function UserForCreation() {
    }
    return UserForCreation;
}());



/***/ }),

/***/ "../../../../../src/app/domain/auth/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User() {
        this.rank = 0;
    }
    return User;
}());



/***/ }),

/***/ "../../../../../src/app/domain/bet-for-creation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BetForCreation; });
var BetForCreation = /** @class */ (function () {
    function BetForCreation() {
    }
    return BetForCreation;
}());



/***/ }),

/***/ "../../../../../src/app/domain/game-for-creation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameForCreation; });
var GameForCreation = /** @class */ (function () {
    function GameForCreation() {
        this.leagueId = 1;
    }
    return GameForCreation;
}());



/***/ }),

/***/ "../../../../../src/app/domain/game-for-update.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameForUpdate; });
var GameForUpdate = /** @class */ (function () {
    function GameForUpdate() {
    }
    GameForUpdate.copyFrom = function (game) {
        var a = new GameForUpdate();
        a.id = game.id;
        a.description = game.description;
        a.gameType = game.gameType;
        a.isOpenForBets = game.isOpenForBets;
        a.leagueId = game.leagueId;
        a.pointsResult = game.pointsResult;
        a.pointsWinner = game.pointsWinner;
        a.scoreTeam1 = game.scoreTeam1;
        a.scoreTeam2 = game.scoreTeam2;
        a.sportId = game.sportId;
        a.startsOn = game.startsOn;
        a.title = game.title;
        return a;
    };
    return GameForUpdate;
}());



/***/ }),

/***/ "../../../../../src/app/domain/option-value.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OptionValue; });
var OptionValue = /** @class */ (function () {
    function OptionValue() {
    }
    return OptionValue;
}());



/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n    <div class=\"container\">\n      <hr />\n        <span class=\"text-muted\">Kass funktionalitet? <a href=\"https://github.com/creinholdsson/potential-octo-journey\">Bidra!</a> </span>\n    </div>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/game-create/game-create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/game-create/game-create.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Nytt spel</h1>\n<div class=\"row\">\n  <div class=\"col col-lg-6\">\n    <p-card>\n      <form #gameForm=\"ngForm\" (ngSubmit)=\"addGame()\">\n        Titel <br />\n        <input type=\"text\" pInputText [(ngModel)]=\"game.title\" name=\"title\" size=\"45\" required/>\n        <br /> <br />\n\n\n        Sport <br />\n        <p-dropdown [options]=\"sports\" [(ngModel)]=\"game.sportId\" name=\"sportId\" autoDisplayFirst=\"false\" [style]=\"{'width':'433px'}\" placeholder=\"V&auml;lj ett alternativ\" required></p-dropdown>\n        <br /> <br />\n\n        Typ <br />\n        <p-dropdown [options]=\"gameTypes\" [(ngModel)]=\"game.gameType\" name=\"gameType\" autoDisplayFirst=\"false\" [style]=\"{'width':'433px'}\" placeholder=\"V&auml;lj ett alternativ\" required></p-dropdown>\n        <br /><br />\n        \n        Starttid <br />\n        <p-calendar [(ngModel)]=\"game.startsOn\" [showTime]=\"true\" name=\"startsOn\" [inline]=\"true\" required></p-calendar>\n        <br /><br />\n\n        Poäng rätt resultat <br />\n        <p-dropdown [options]=\"points\" [(ngModel)]=\"game.pointsResult\" name=\"pointsResult\" [style]=\"{'width':'433px'}\" placeholder=\"V&auml;lj ett alternativ\" required></p-dropdown>\n\n        <div *ngIf=\"game.gameType == 0\">\n          Poäng rätt vinnare <br />\n          <p-dropdown [options]=\"points\" [(ngModel)]=\"game.pointsWinner\" name=\"pointsWinner\" [style]=\"{'width':'433px'}\" placeholder=\"V&auml;lj ett alternativ\"></p-dropdown>\n        </div>\n        \n        Beskrivning <br/>\n        <textarea pInputTextarea [rows]=\"7\" [cols]=\"42\" [(ngModel)]=\"game.description\" name=\"description\" required></textarea>\n        <br /><br />\n        <p-button icon=\"fa fa-save\" type=\"submit\" label=\"Spara\" [disabled]=\"!gameForm.form.valid\"></p-button>\n      </form>\n    </p-card>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/game-create/game-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__domain_option_value__ = __webpack_require__("../../../../../src/app/domain/option-value.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_game_service__ = __webpack_require__("../../../../../src/app/services/game.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__domain_game_for_creation__ = __webpack_require__("../../../../../src/app/domain/game-for-creation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_components_common_messageservice__ = __webpack_require__("../../../../primeng/components/common/messageservice.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_components_common_messageservice___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_components_common_messageservice__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GameCreateComponent = /** @class */ (function () {
    function GameCreateComponent(gameService, messageSerive) {
        this.gameService = gameService;
        this.messageSerive = messageSerive;
        this.gameTypes = [];
        this.sports = [];
        this.points = [
            { label: '0', value: 0 },
            { label: '1', value: 1 },
            { label: '2', value: 2 },
            { label: '3', value: 3 },
            { label: '4', value: 4 },
            { label: '5', value: 5 },
            { label: '6', value: 6 },
            { label: '7', value: 7 },
            { label: '8', value: 8 },
            { label: '9', value: 9 },
            { label: '10', value: 10 },
            { label: '11', value: 11 },
            { label: '12', value: 12 },
            { label: '13', value: 13 },
            { label: '14', value: 14 },
            { label: '15', value: 15 },
            { label: '16', value: 16 },
        ];
        this.game = new __WEBPACK_IMPORTED_MODULE_3__domain_game_for_creation__["a" /* GameForCreation */]();
    }
    GameCreateComponent.prototype.getSports = function () {
        var _this = this;
        this.gameService.getSports().subscribe(function (sports) {
            _this.sports = [];
            for (var _i = 0, sports_1 = sports; _i < sports_1.length; _i++) {
                var sport = sports_1[_i];
                var newSport = new __WEBPACK_IMPORTED_MODULE_1__domain_option_value__["a" /* OptionValue */]();
                newSport.label = sport.name;
                newSport.value = sport.id;
                _this.sports.push(newSport);
            }
            _this.gameTypes = [{ label: 'Resultat', value: 0 }, { label: 'Placering', value: 1 }];
        });
    };
    GameCreateComponent.prototype.addGame = function (value) {
        var _this = this;
        console.log(this.game);
        this.gameService.addGame(this.game).subscribe(function (game) {
            _this.messageSerive.add({ severity: 'success', summary: 'Spel skapat', detail: 'Spelet har lagts till' });
            _this.game = new __WEBPACK_IMPORTED_MODULE_3__domain_game_for_creation__["a" /* GameForCreation */]();
        });
    };
    GameCreateComponent.prototype.ngOnInit = function () {
        this.getSports();
    };
    GameCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-game-create',
            template: __webpack_require__("../../../../../src/app/game-create/game-create.component.html"),
            styles: [__webpack_require__("../../../../../src/app/game-create/game-create.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_game_service__["a" /* GameService */], __WEBPACK_IMPORTED_MODULE_4_primeng_components_common_messageservice__["MessageService"]])
    ], GameCreateComponent);
    return GameCreateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/game-edit/game-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/game-edit/game-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Ändra spel</h1>\n<div class=\"row\">\n  <div class=\"col col-lg-6\">\n    <p-card>\n      <form #gameForm=\"ngForm\" (ngSubmit)=\"updateGame()\">\n        Titel <br />\n        <input type=\"text\" pInputText [(ngModel)]=\"game.title\" name=\"title\" size=\"45\" required/>\n        <br /> <br />\n\n        Sport <br />\n        <p-dropdown [options]=\"sports\" [(ngModel)]=\"game.sportId\" name=\"sportId\" autoDisplayFirst=\"false\" [style]=\"{'width':'433px'}\" placeholder=\"V&auml;lj ett alternativ\" required></p-dropdown>\n        <br /> <br />\n\n        Typ <br />\n        <p-dropdown [options]=\"gameTypes\" [(ngModel)]=\"game.gameType\" name=\"gameType\" autoDisplayFirst=\"false\" [style]=\"{'width':'433px'}\" placeholder=\"V&auml;lj ett alternativ\" required></p-dropdown>\n        <br /><br />\n        \n        Starttid <br />\n        <p-calendar [(ngModel)]=\"game.startsOn\" [showTime]=\"true\" name=\"startsOn\" [inline]=\"true\" required></p-calendar>\n        <br /><br />\n\n        Poäng rätt resultat <br />\n        <p-dropdown [options]=\"points\" [(ngModel)]=\"game.pointsResult\" name=\"pointsResult\" [style]=\"{'width':'433px'}\" placeholder=\"V&auml;lj ett alternativ\" required></p-dropdown>\n\n        <div *ngIf=\"game.gameType == 0\">\n          Poäng rätt vinnare <br />\n          <p-dropdown [options]=\"points\" [(ngModel)]=\"game.pointsWinner\" name=\"winnerResult\" [style]=\"{'width':'433px'}\" placeholder=\"V&auml;lj ett alternativ\"></p-dropdown>\n        </div>\n        \n        Beskrivning <br/>\n        <textarea pInputTextarea [rows]=\"7\" [cols]=\"42\" [(ngModel)]=\"game.description\" name=\"description\" required></textarea>\n        <br /><br />\n\n        Resultat\n        <div *ngIf=\"game.gameType == 0\">\n          <p-dropdown [options]=\"possibleResults\" [(ngModel)]=\"game.scoreTeam1\" name=\"scoreTeam1\" placeholder=\"V&auml;lj ett alternativ\"></p-dropdown>\n          -\n          <p-dropdown [options]=\"possibleResults\" [(ngModel)]=\"game.scoreTeam2\" name=\"scoreTeam2\" placeholder=\"V&auml;lj ett alternativ\"></p-dropdown>\n        </div>\n        <div *ngIf=\"game.gameType == 1\">\n            <p-dropdown [options]=\"possibleResults\" [(ngModel)]=\"game.scoreTeam1\" name=\"scoreTeam1\" placeholder=\"V&auml;lj ett alternativ\"></p-dropdown>\n        </div>\n\n        <br /> <br />\n        <p-button icon=\"fa fa-save\" type=\"submit\" label=\"Spara\" [disabled]=\"!gameForm.form.valid\"></p-button>\n      </form>\n    </p-card>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/game-edit/game-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_game_service__ = __webpack_require__("../../../../../src/app/services/game.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain_option_value__ = __webpack_require__("../../../../../src/app/domain/option-value.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__domain_game_for_update__ = __webpack_require__("../../../../../src/app/domain/game-for-update.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_components_common_messageservice__ = __webpack_require__("../../../../primeng/components/common/messageservice.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_components_common_messageservice___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_primeng_components_common_messageservice__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var GameEditComponent = /** @class */ (function () {
    function GameEditComponent(gameService, route, router, messageService) {
        this.gameService = gameService;
        this.route = route;
        this.router = router;
        this.messageService = messageService;
        this.gameTypes = [];
        this.sports = [];
        this.points = [
            { label: '0', value: 0 },
            { label: '1', value: 1 },
            { label: '2', value: 2 },
            { label: '3', value: 3 },
            { label: '4', value: 4 },
            { label: '5', value: 5 },
            { label: '6', value: 6 },
            { label: '7', value: 7 },
            { label: '8', value: 8 },
            { label: '9', value: 9 },
            { label: '10', value: 10 },
            { label: '11', value: 11 },
            { label: '12', value: 12 },
            { label: '13', value: 13 },
            { label: '14', value: 14 },
            { label: '15', value: 15 },
            { label: '16', value: 16 },
        ];
        this.possibleResults = [
            { label: 'Inget', value: null },
            { label: '0', value: 0 },
            { label: '1', value: 1 },
            { label: '2', value: 2 },
            { label: '3', value: 3 },
            { label: '4', value: 4 },
            { label: '5', value: 5 },
            { label: '6', value: 6 },
            { label: '7', value: 7 },
            { label: '8', value: 8 },
            { label: '9', value: 9 },
            { label: '10', value: 10 },
            { label: '11', value: 11 },
            { label: '12', value: 12 },
            { label: '13', value: 13 },
            { label: '14', value: 14 },
            { label: '15', value: 15 },
            { label: '16', value: 16 },
        ];
        this.game = new __WEBPACK_IMPORTED_MODULE_3__domain_game_for_update__["a" /* GameForUpdate */]();
    }
    GameEditComponent.prototype.getGame = function (id) {
        var _this = this;
        this.gameService.getGame(id).subscribe(function (game) {
            _this.game = __WEBPACK_IMPORTED_MODULE_3__domain_game_for_update__["a" /* GameForUpdate */].copyFrom(game);
            _this.game.startsOn = new Date(_this.game.startsOn);
        });
    };
    GameEditComponent.prototype.getSports = function () {
        var _this = this;
        this.gameService.getSports().subscribe(function (sports) {
            _this.sports = [];
            for (var _i = 0, sports_1 = sports; _i < sports_1.length; _i++) {
                var sport = sports_1[_i];
                var newSport = new __WEBPACK_IMPORTED_MODULE_2__domain_option_value__["a" /* OptionValue */]();
                newSport.label = sport.name;
                newSport.value = sport.id;
                _this.sports.push(newSport);
            }
            _this.gameTypes = [{ label: 'Resultat', value: 0 }, { label: 'Placering', value: 1 }];
        });
    };
    GameEditComponent.prototype.ngOnInit = function () {
        this.gameId = Number.parseInt(this.route.snapshot.paramMap.get('id'));
        this.getSports();
        this.getGame(this.gameId);
    };
    GameEditComponent.prototype.updateGame = function () {
        var _this = this;
        this.gameService.updateGame(this.game).subscribe(function (game) {
            _this.messageService.add({ severity: 'success', summary: 'Spel uppdaterat', detail: 'Spelet har uppdaterats' });
            _this.router.navigate(['/game/' + _this.game.id.toString()]);
        });
    };
    GameEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-game-edit',
            template: __webpack_require__("../../../../../src/app/game-edit/game-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/game-edit/game-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_game_service__["a" /* GameService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_5_primeng_components_common_messageservice__["MessageService"]])
    ], GameEditComponent);
    return GameEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/game-list/game-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".test {\r\n    min-height: 100px;\r\n}\r\n\r\n\r\n\r\n.test>img.icon {\r\n    opacity: 0.4;\r\n    right: 20px;\r\n    position: absolute;\r\n    height: 60px;\r\n    width: 60px;\r\n}\r\n\r\n\r\n\r\na:hover {\r\n    text-decoration: none;\r\n    color: #000;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/game-list/game-list.component.html":
/***/ (function(module, exports) {

module.exports = "<a *ngFor=\"let game of games | orderBy: orderBy : reverseOrder; let i=index\" routerLink=\"/game/{{game.id}}\">\n  <div class=\"test\" *ngIf=\"i<itemsShown\">\n    <img src=\"{{game.sportIcon}}\" class=\"icon\" />\n    <div class=\"d-flex w-100 justify-content-between\">\n        <h5 class=\"mb-1\">{{game.title}}</h5>\n        <small>{{game.startsOn | date: 'yyyy-MM-dd HH:mm'}}</small>\n    </div>\n    <p class=\"mb-3\">{{game.description | limitTo: 55}}</p>\n  </div>\n</a>\n<p>\n  <p-button *ngIf=\"hasMoreItems\" (click)=\"showMoreItems()\" label=\"Visa fler\"></p-button>\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/game-list/game-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_game_service__ = __webpack_require__("../../../../../src/app/services/game.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GameListComponent = /** @class */ (function () {
    function GameListComponent(gameService) {
        this.gameService = gameService;
        this.orderBy = 'startsOn';
        this.reverseOrder = false;
        this.itemsShown = 5;
        this.hasMoreItems = false;
    }
    GameListComponent.prototype.getOpenGames = function () {
        var _this = this;
        this.gameService.getGames(this.gameType).subscribe(function (games) {
            _this.games = games;
            if (_this.games.length > _this.itemsShown) {
                _this.hasMoreItems = true;
            }
        });
    };
    GameListComponent.prototype.showMoreItems = function () {
        this.itemsShown += 5;
        if (this.itemsShown >= this.games.length) {
            this.hasMoreItems = false;
        }
    };
    GameListComponent.prototype.ngOnInit = function () {
        this.getOpenGames();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], GameListComponent.prototype, "gameType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], GameListComponent.prototype, "orderBy", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], GameListComponent.prototype, "reverseOrder", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], GameListComponent.prototype, "itemsShown", void 0);
    GameListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-game-list',
            template: __webpack_require__("../../../../../src/app/game-list/game-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/game-list/game-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_game_service__["a" /* GameService */]])
    ], GameListComponent);
    return GameListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/game/game.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h3 {\r\n    font-family: 'Roboto', 'Trebuchet MS', Arial, Helvetica, sans-serif;\r\n    font-size: 1.5em;\r\n    font-weight: bold;\r\n    margin-bottom: .5em;\r\n}\r\n\r\n.gold {\r\n    color: #ffd700;\r\n}\r\n\r\n.silver {\r\n    color: #c0c0c0;\r\n}\r\n\r\n.sportIcon {\r\n    float: right;\r\n    margin-top: -20px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/game/game.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"game != null\">\n  <h1>{{game.title}}</h1>\n    <div class=\"row\" *ngIf=\"game.gameType == 1\">\n        <div class=\"col col-lg-6 col-md-12 col-sm-12 col-xs-12\">\n            <p-card title=\"Spelinformation\">\n                <img src=\"{{game.sportIcon}}\" class=\"sportIcon\" />\n                <p>{{game.description}}</p>\n                <p>Rätt placering ger {{game.pointsResult}} poäng</p>\n                <p *ngIf=\"game.scoreTeam1 != null\"><b>Slutgiltig placering</b>: {{game.scoreTeam1}}</p>\n                <p *ngIf=\"game.isOpenForBets == false && game.scoreTeam1 == null\">Inget resultat ännu</p>\n\n            \n                <div *ngIf=\"game.isOpenForBets\">\n                    <h3>Tippa placering</h3>\n                    Sista tid att tippa: {{game.startsOn | date: 'yyyy-MM-dd HH:mm'}} <br />\n                    Har du redan tippat på spelet uppdateras din tippade placering.\n                    <p-dropdown [options]=\"availableOptionsPlacement\" [(ngModel)]=\"selectedResult1\"></p-dropdown>\n                    <br /> <br />\n                    <p-button icon=\"fa fa-play\" styleClass=\"ui-button-success\" label=\"Tippa\" (click)=\"placeBet()\"></p-button>\n                </div>\n\n                <p><br /><a routerLink=\"/game/edit/{{game.id}}\" [appHasPermission]=\"'Administrator'\" pButton label=\"Uppdatera spel\"></a></p>\n            </p-card>\n            <br /> <br />\n        </div>\n\n        <div class=\"col col-lg-6 col-md-12 col-sm-12 col-xs-12\">\n\n            <p-card *ngIf=\"game.gameType == 1\" title=\"Tippade placeringar\">\n                <div class=\"d-flex w-100 justify-content-between\">\n                    <h5 class=\"mb-1\">Namn</h5>\n                    <h5 class=\"mb-1\">Resultat</h5>\n                </div>\n                <div class=\"w-100\" style=\"border-bottom: 1px solid lightgray\"></div>\n                <div *ngFor=\"let bet of bets | orderBy: 'userName'\">\n                    <div class=\"d-flex w-100 justify-content-between\">\n                        <span class=\"mb-1\">{{bet.userName}}</span>\n                        <span class=\"mb-1\">{{bet.scoreTeam1}} \n                            <i *ngIf=\"bet.awardedPoints != null && bet.awardedPoints == game.pointsResult\" class=\"fa fa-trophy gold\"></i>\n                            <i *ngIf=\"bet.awardedPoints != null && bet.awardedPoints == game.pointsWinner\" class=\"fa fa-trophy silver\"></i>\n                        </span>\n                    </div>\n                </div>\n                <div *ngIf=\"bets && bets.length == 0\">\n                    Inga tippade placeringar.\n                </div>\n            </p-card>\n        </div>\n    </div>\n    <div class=\"row\" *ngIf=\"game.gameType == 0\">\n            <div class=\"col col-lg-6 col-md-12 col-sm-12 col-xs-12\">\n                <p-card title=\"Spelinformation\">\n                    <img src=\"{{game.sportIcon}}\" class=\"sportIcon\" />\n                    <p>{{game.description}}</p>\n                    <p>Rätt resultat ger {{game.pointsResult}} poäng, medan rätt vinnare ger {{game.pointsWinner}} poäng</p>\n\n                    <p *ngIf=\"game.scoreTeam1 != null && game.scoreTeam2 != null\"><b>Slutgiltigt resultat: {{game.scoreTeam1}}-{{game.scoreTeam2}}</b></p>\n                    <p *ngIf=\"game.isOpenForBets == false && game.scoreTeam1 == null && game.scoreTeam2 == null\">Inget resultat ännu</p>\n                \n\n                    <div *ngIf=\"isBettingOpen\">\n                        <h3>Tippa resultat</h3>\n                        Sista tid att tippa: {{game.startsOn | date }} <br />\n                        Har du redan tippat på spelet uppdateras ditt tippade resultat. <br /> <br />\n                        <p-dropdown [options]=\"availableOptionsResult\" [(ngModel)]=\"selectedResult1\"></p-dropdown> - \n                        <p-dropdown [options]=\"availableOptionsResult\" [(ngModel)]=\"selectedResult2\"></p-dropdown>\n                        <br /> <br />\n                        <p-button icon=\"fa fa-play\" styleClass=\"ui-button-success\" label=\"Tippa\" (click)=\"placeBet()\"></p-button>\n                    </div>\n\n                    <p><br /><a routerLink=\"/game/edit/{{game.id}}\" [appHasPermission]=\"'Administrator'\" pButton label=\"Uppdatera spel\"></a></p>\n\n                </p-card>\n                <br /> <br />\n            </div>\n    \n            <div class=\"col col-lg-6 col-md-12 col-sm-12 col-xs-12\">\n                <p-card title=\"Tippade resultat\">\n                    <div *ngIf=\"bets && bets.length > 0\">\n                        <div class=\"d-flex w-100 justify-content-between\">\n                            <h5 class=\"mb-1\">Namn</h5>\n                            <h5 class=\"mb-1\">Resultat</h5>\n                        </div>\n                        <div class=\"w-100\" style=\"border-bottom: 1px solid lightgray\"></div>\n                        <div *ngFor=\"let bet of bets | orderBy: 'userName'\">\n                            <div class=\"d-flex w-100 justify-content-between\">\n                                <span class=\"mb-1\">{{bet.userName}}</span>\n                                <span class=\"mb-1\">{{bet.scoreTeam1}}-{{bet.scoreTeam2}}\n                                    <i *ngIf=\"bet.awardedPoints != null && bet.awardedPoints == game.pointsResult\" class=\"fa fa-trophy gold\"></i>\n                                    <i *ngIf=\"bet.awardedPoints != null && bet.awardedPoints == game.pointsWinner\" class=\"fa fa-trophy silver\"></i>\n                                </span>\n                            </div>\n                        </div>\n                    </div>\n                    <div *ngIf=\"bets && bets.length == 0\">\n                        Inga tippade resultat.\n                    </div>\n                </p-card>\n            </div>\n        </div>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/game/game.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_game_service__ = __webpack_require__("../../../../../src/app/services/game.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__domain_bet_for_creation__ = __webpack_require__("../../../../../src/app/domain/bet-for-creation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GameComponent = /** @class */ (function () {
    function GameComponent(gameService, route, location) {
        this.gameService = gameService;
        this.route = route;
        this.location = location;
        this.isBettingOpen = false;
        this.availableOptionsPlacement = [
            { label: 1, value: 1 },
            { label: 2, value: 2 },
            { label: 3, value: 3 },
            { label: 4, value: 4 },
            { label: 5, value: 5 },
            { label: 6, value: 6 },
            { label: 7, value: 7 },
            { label: 8, value: 8 },
            { label: 9, value: 9 },
            { label: 10, value: 10 },
            { label: 11, value: 11 },
            { label: 12, value: 12 },
            { label: 13, value: 13 },
            { label: 14, value: 14 },
            { label: 15, value: 15 }
        ];
        this.availableOptionsResult = [
            { label: 1, value: 1 },
            { label: 2, value: 2 },
            { label: 3, value: 3 },
            { label: 4, value: 4 },
            { label: 5, value: 5 },
            { label: 6, value: 6 },
            { label: 7, value: 7 },
            { label: 8, value: 8 },
            { label: 9, value: 9 },
            { label: 10, value: 10 },
            { label: 11, value: 11 },
            { label: 12, value: 12 },
            { label: 13, value: 13 },
            { label: 14, value: 14 },
            { label: 15, value: 15 }
        ];
        this.selectedResult1 = 1;
        this.selectedResult2 = 1;
    }
    GameComponent.prototype.getGame = function (id) {
        var _this = this;
        this.gameService.getGame(id).subscribe(function (game) {
            _this.game = game;
            _this.isBettingOpen = new Date(game.startsOn) > new Date();
            if (game.gameType == 0) {
                _this.selectedResult1 = 1;
                _this.selectedResult2 = 1;
            }
            else {
                _this.selectedResult1 = 1;
                _this.selectedResult2 = null;
            }
        });
    };
    GameComponent.prototype.getBetsForGame = function (gameId) {
        var _this = this;
        this.gameService.getBets(gameId).subscribe(function (bets) {
            _this.bets = bets;
        });
    };
    GameComponent.prototype.placeBet = function () {
        var _this = this;
        var bet = new __WEBPACK_IMPORTED_MODULE_4__domain_bet_for_creation__["a" /* BetForCreation */]();
        bet.scoreTeam1 = this.selectedResult1;
        bet.scoreTeam2 = this.selectedResult2;
        bet.gameId = this.game.id;
        console.log(bet);
        console.log(this.selectedResult1);
        this.gameService.placeBet(bet).subscribe(function (createdBet) {
            _this.bet = createdBet;
            var hasBeenUpdated = false;
            for (var _i = 0, _a = _this.bets; _i < _a.length; _i++) {
                var bet_1 = _a[_i];
                if (bet_1.userId == createdBet.userId) {
                    bet_1.scoreTeam1 = createdBet.scoreTeam1;
                    bet_1.scoreTeam2 = createdBet.scoreTeam2;
                    hasBeenUpdated = true;
                    break;
                }
            }
            if (hasBeenUpdated == false) {
                _this.bets.push(createdBet);
            }
        });
    };
    GameComponent.prototype.ngOnInit = function () {
        var id = +this.route.snapshot.paramMap.get('id');
        this.getGame(id);
        this.getBetsForGame(id);
    };
    GameComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-game',
            template: __webpack_require__("../../../../../src/app/game/game.component.html"),
            styles: [__webpack_require__("../../../../../src/app/game/game.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_game_service__["a" /* GameService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"]])
    ], GameComponent);
    return GameComponent;
}());



/***/ }),

/***/ "../../../../../src/app/index/index.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content-column {\r\n    padding-bottom: 50px;\r\n}\r\n\r\n#header {\r\n    background-image: url(" + escape(__webpack_require__("../../../../../src/assets/header.png")) + ");\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: contain;\r\n    height: 150px;\r\n    margin-bottom: 20px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/index/index.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-12\" id=\"header\"></div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-12 col-sm-12 col-md-6 col-lg-4 content-column\">\n    <p-card title=\"Öppna spel\">\n        <app-game-list [gameType]=\"'open'\" [itemsShown]=\"5\"></app-game-list>\n        <p><a routerLink=\"/game/add\" [appHasPermission]=\"'Administrator'\" pButton label=\"Lägg till nytt spel\" id=\"#createlink\"></a></p>\n    </p-card>\n  </div>\n  <div class=\"col-12 col-sm-12 col-md-6 col-lg-4 content-column\">\n    <p-card title=\"Senast avslutade\">\n        <app-game-list [gameType]=\"'closed'\" [reverseOrder]=\"true\"></app-game-list>\n    </p-card>\n  </div>\n  <div class=\"col-12 col-sm-12 col-md-6 col-lg-4 content-column\">\n    <p-card title=\"Topplista\">\n      <app-top-list></app-top-list>\n    </p-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/index/index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IndexComponent = /** @class */ (function () {
    function IndexComponent() {
    }
    IndexComponent.prototype.ngOnInit = function () {
    };
    IndexComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-index',
            template: __webpack_require__("../../../../../src/app/index/index.component.html"),
            styles: [__webpack_require__("../../../../../src/app/index/index.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "../../../../../src/app/interceptors/token.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service_service__ = __webpack_require__("../../../../../src/app/services/authentication-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor(inj) {
        this.inj = inj;
    }
    TokenInterceptor.prototype.intercept = function (request, next) {
        this.auth = this.inj.get(__WEBPACK_IMPORTED_MODULE_1__services_authentication_service_service__["a" /* AuthenticationService */]);
        var token = this.auth.getToken();
        if (token != null) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + token
                }
            });
        }
        return next.handle(request);
    };
    TokenInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], TokenInterceptor);
    return TokenInterceptor;
}());



/***/ }),

/***/ "../../../../../src/app/limit-to.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LimitToPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LimitToPipe = /** @class */ (function () {
    function LimitToPipe() {
    }
    LimitToPipe.prototype.transform = function (value, args) {
        var limit = args ? parseInt(args, 10) : 10;
        var trail = '...';
        return value.length > limit ? value.substring(0, limit) + trail : value;
    };
    LimitToPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'limitTo'
        })
    ], LimitToPipe);
    return LimitToPipe;
}());



/***/ }),

/***/ "../../../../../src/app/login-component/login-component.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#login-dp{\r\n    margin-left: -170px;\r\n    min-width: 250px;\r\n    padding: 14px;\r\n    overflow:hidden;\r\n    background-color:rgba(255,255,255);\r\n}\r\n#login-dp .help-block{\r\n    font-size:12px    \r\n}\r\n#login-dp .bottom{\r\n    background-color:rgba(255,255,255,.8);\r\n    border-top:1px solid #ddd;\r\n    clear:both;\r\n    padding:14px;\r\n}\r\n.error-message {\r\n    color: red;\r\n}\r\n#login-dp .form-group {\r\n    margin-bottom: 10px;\r\n}\r\n@media (max-width: 768px) {\r\n    #login-dp {\r\n        margin-left: 0;\r\n    }\r\n }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login-component/login-component.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav navbar-nav navbar-right\">\n<li class=\"nav-item dropdown\" *ngIf=\"user == null\" ngbDropdown #loginDropdown=\"ngbDropdown\">\n  <a href=\"\" (click)=\"$event.preventDefault()\" ngbDropdownToggle class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\">Logga in <span class=\"caret\"></span></a>\n  <ul id=\"login-dp\" class=\"dropdown-menu\" ngbDropdownMenu>\n    <li>\n      <div class=\"row\" (click)=\"$event.stopPropagation(); loginDropdown.open();\">\n        <div class=\"col col-lg-12\">\n          <form #loginForm=\"ngForm\" (ngSubmit)=\"login()\">\n            <div class=\"form-group\">\n              <input pInputText type=\"text\" placeholder=\"användarnamn\" [(ngModel)]=\"username\" name=\"username\" required />\n            </div>\n            <div class=\"form-group\">\n              <input pInputText type=\"password\" placeholder=\"lösenord\" [(ngModel)]=\"password\" name=\"password\" required />\n            </div>\n            <p *ngIf=\"logonFailed\" class=\"error-message\">Användarnamnet eller lösenordet är felaktigt.</p>\n\n            <div class=\"form-group\">\n              <p-button type=\"submit\" [disabled]=\"!loginForm.form.valid\" label=\"Logga in\" icon=\"fa fa-sign-in\"></p-button>\n            </div>\n          </form>\n          <p><a routerLink=\"/register\" (click)=\"loginDropdown.close();\">Registrera</a></p>\n        </div>\n      </div>\n    </li>\n  </ul>\n</li>\n<li class=\"nav-item dropdown\" *ngIf=\"user != null\" ngbDropdown #loginDropdown=\"ngbDropdown\">\n    <a href=\"\" (click)=\"$event.preventDefault()\" ngbDropdownToggle class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\">{{user.username}}</a>\n    <ul id=\"login-dp\" class=\"dropdown-menu\" ngbDropdownMenu>\n      <li>\n        <div class=\"row\" (click)=\"$event.stopPropagation(); loginDropdown.open();\">\n          <div class=\"col col-lg-12\">\n            <ul class=\"list-unstyled\">\n              <li><a routerLink=\"/user/{{user.username}}\">Profil</a></li>\n              <li><a href=\"\" (click)=\"$event.preventDefault();signOut()\">Logga ut</a></li>\n            </ul>\n          </div>\n        </div>\n      </li>\n    </ul>\n  </li>\n</ul>"

/***/ }),

/***/ "../../../../../src/app/login-component/login-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service_service__ = __webpack_require__("../../../../../src/app/services/authentication-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponentComponent = /** @class */ (function () {
    function LoginComponentComponent(authenticationService) {
        this.authenticationService = authenticationService;
        this.username = null;
        this.password = null;
        this.isLoggedIn = false;
        this.user = null;
        this.logonFailed = false;
    }
    LoginComponentComponent.prototype.login = function () {
        var _this = this;
        this.logonFailed = false;
        this.authenticationService.signIn(this.username, this.password).then(function (result) {
            _this.user = _this.authenticationService.getUser();
        }, function (rejected) {
            _this.logonFailed = true;
            _this.user = null;
        });
    };
    LoginComponentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.authenticationService.getUser();
        this.authenticationService.getEmitter().asObservable().subscribe(function (x) {
            _this.user = _this.authenticationService.getUser();
        });
    };
    LoginComponentComponent.prototype.signOut = function () {
        this.authenticationService.signOut();
        this.user = null;
    };
    LoginComponentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login-component',
            template: __webpack_require__("../../../../../src/app/login-component/login-component.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login-component/login-component.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_authentication_service_service__["a" /* AuthenticationService */]])
    ], LoginComponentComponent);
    return LoginComponentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/navmenu/navmenu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navmenu/navmenu.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n    <a class=\"navbar-brand\" routerLink=\"/\">Pyeongchangkampen</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" (click)=\"isNavbarCollapsed = !isNavbarCollapsed\"\n      data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div [ngbCollapse]=\"!isNavbarCollapsed\" class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n      <ul class=\"navbar-nav mr-auto\">\n        <!-- <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"/\">Home <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Link</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\n        </li>\n        <li class=\"nav-item dropdown\" ngbDropdown>\n          <a class=\"nav-link dropdown-toggle\" ngbDropdownToggle href=\"#\" id=\"dropdown01\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown</a>\n          <div class=\"dropdown-menu\" aria-labelledby=\"dropdown01\" ngbDropdownMenu>\n            <a class=\"dropdown-item\" href=\"#\">Action</a>\n            <a class=\"dropdown-item\" href=\"#\">Another action</a>\n            <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n          </div>\n        </li> -->\n        \n      </ul>\n      <app-login-component></app-login-component>\n    </div>\n  </nav>\n"

/***/ }),

/***/ "../../../../../src/app/navmenu/navmenu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavmenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavmenuComponent = /** @class */ (function () {
    function NavmenuComponent() {
    }
    NavmenuComponent.prototype.ngOnInit = function () {
    };
    NavmenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navmenu',
            template: __webpack_require__("../../../../../src/app/navmenu/navmenu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navmenu/navmenu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavmenuComponent);
    return NavmenuComponent;
}());



/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.form-group > span {\r\n    color: #a94442;\r\n    font-size: small;\r\n    display: block;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Registrera konto</h1>\n<div class=\"row\">\n  <div class=\"col col-lg-12\">\n      <p>Användarnamnet är det som används som login-namn och är vad som identifierar dig på sidan.</p>\n      <form [formGroup]=\"registerForm\" novalidate (ngSubmit)=\"register()\">\n        <div class=\"form-group\">\n          <label>Användarnamn</label><br/>\n          <input pInputText type=\"text\" formControlName=\"username\" required size=\"34\" (ngModelChange)=\"resetUsernameTakenStatus()\">\n          <span *ngIf=\"registerForm.controls.username.touched && \n                       registerForm.controls.username.errors != null &&\n                       registerForm.controls.username.errors.minlength\">Användarnamnet är för kort</span>\n          <span *ngIf=\"registerForm.controls.username.touched && \n                       registerForm.controls.username.errors != null &&\n                       registerForm.controls.username.errors.maxlength\">Användarnamnet är för långt</span>\n          <span *ngIf=\"registerForm.controls.username.touched && \n                       registerForm.controls.username.errors != null &&\n                       registerForm.controls.username.errors.pattern\">Användarnamnet innehåller otillåtna tecken. Det får innehålla a-ö samt _ och -</span>\n          <span *ngIf=\"usernameTaken\">Användarnamnet är upptaget</span>\n        </div>\n        <div class=\"form-group\">\n          <label>E-postadress</label><br/>\n          <input pInputText type=\"email\" formControlName=\"email\" name=\"email\" required size=\"34\">\n          <span *ngIf=\"registerForm.controls.email.touched && registerForm.controls.email.errors\">Inte en giltig e-mailadress</span>\n        </div>\n        <div formGroupName=\"passwords\">\n          <div class=\"form-group\">\n            <label>Lösenord</label><br/>\n            <input pInputText type=\"password\" formControlName=\"password\" name=\"password\" required size=\"34\">\n            <span *ngIf=\"registerForm.controls['passwords'].controls.password.touched && registerForm.controls['passwords'].controls.password.errors\">Lösenordet är för kort</span>\n          </div>\n          <div class=\"form-group\">\n            <label>Upprepa lösenord</label><br/>\n            <input pInputText type=\"password\" formControlName=\"passwordRepeat\" name=\"repeatPassword\" required size=\"34\">\n            <span *ngIf=\"\n            registerForm.controls['passwords'].errors &&\n            registerForm.controls['passwords'].errors.areEqual &&\n            registerForm.controls['passwords'].controls.password.touched &&\n            registerForm.controls['passwords'].controls.passwordRepeat.touched\">Lösenorden matchar inte</span>\n          </div>\n        </div>\n        <div class=\"form-group\"><br/>\n          <p-button type=\"submit\" label=\"Registrera\" [disabled]=\"registerForm.invalid\"></p-button>\n        </div>\n      </form>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain_auth_user_for_creation__ = __webpack_require__("../../../../../src/app/domain/auth/user-for-creation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authentication_service_service__ = __webpack_require__("../../../../../src/app/services/authentication-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authenticationService) {
        this.authenticationService = authenticationService;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__domain_auth_user_for_creation__["a" /* UserForCreation */]();
        this.usernameTaken = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            'username': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](this.user.username, [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(5),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(25),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern('^[a-zA-Z-_0-9]+$')
            ]),
            'email': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](this.user.email, [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].email
            ]),
            'passwords': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
                'password': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](this.user.password, [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(6)
                ]),
                'passwordRepeat': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](this.passwordRepeat, [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required
                ])
            }, { validators: this.areEqual })
        });
    };
    RegisterComponent.prototype.areEqual = function (c) {
        var keys = Object.keys(c.value);
        for (var i in keys) {
            if (i !== '0' && c.value[keys[+i - 1]] !== c.value[keys[i]]) {
                return { areEqual: true };
            }
        }
    };
    RegisterComponent.prototype.mustEqualPasswordValidator = function () {
        var _this = this;
        return function (control) {
            var equal = _this.user.password == _this.passwordRepeat;
            return !equal ? { 'passwordRepeat': { value: control.value } } : null;
        };
    };
    Object.defineProperty(RegisterComponent.prototype, "username", {
        get: function () { return this.registerForm.get('username'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "email", {
        get: function () { return this.registerForm.get('email'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "password", {
        get: function () { return this.registerForm.get('password'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "repeatPassword", {
        get: function () { return this.registerForm.get('repeatPassword'); },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.resetUsernameTakenStatus = function () {
        this.usernameTaken = false;
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.usernameTaken = false;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__domain_auth_user_for_creation__["a" /* UserForCreation */]();
        this.user.username = this.registerForm.value.username;
        this.user.email = this.registerForm.value.email;
        this.user.password = this.registerForm.value.passwords.password;
        this.authenticationService.checkUsername(this.user.username).then(function (x) {
            if (x) {
                _this.authenticationService.createUser(_this.user);
            }
            else {
                _this.usernameTaken = true;
            }
        }, function (error) {
            _this.usernameTaken = true;
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_authentication_service_service__["a" /* AuthenticationService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/authentication-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__domain_auth_user__ = __webpack_require__("../../../../../src/app/domain/auth/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_components_common_messageservice__ = __webpack_require__("../../../../primeng/components/common/messageservice.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_components_common_messageservice___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_components_common_messageservice__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__domain_auth_authentication_event__ = __webpack_require__("../../../../../src/app/domain/auth/authentication-event.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { PACKAGE_ROOT_URL } from '@angular/core/src/application_tokens';



var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(httpClient, messageService, router) {
        this.httpClient = httpClient;
        this.messageService = messageService;
        this.router = router;
        this.dispatcher = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.user = null;
        this.usersBaseUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiBaseUrl + 'api/auth/';
        this.user = this.getUserFromLocalStorage();
    }
    AuthenticationService.prototype.createUser = function (user) {
        var _this = this;
        return this.httpClient.post(this.usersBaseUrl + '/register', user).subscribe(function (result) {
            localStorage.setItem('user', JSON.stringify(result));
            _this.router.navigate(['/']);
            _this.messageService.add({ severity: 'success', summary: 'Välkommen', detail: 'Registering lyckades, du har blivit inloggad' });
            _this.dispatcher.emit(new __WEBPACK_IMPORTED_MODULE_6__domain_auth_authentication_event__["a" /* AuthenticationEvent */](true));
        }, function (error) {
            _this.messageService.add({ severity: 'error', summary: 'Fel', detail: JSON.stringify(error) });
        });
    };
    AuthenticationService.prototype.getUserFromLocalStorage = function () {
        var storageUser = JSON.parse(localStorage.getItem('user'));
        var user;
        if (storageUser != undefined) {
            user = new __WEBPACK_IMPORTED_MODULE_3__domain_auth_user__["a" /* User */]();
            Object.assign(user, storageUser);
        }
        return user;
    };
    AuthenticationService.prototype.getUser = function () {
        if (this.user == null) {
            this.user = this.getUserFromLocalStorage();
        }
        return this.user;
    };
    AuthenticationService.prototype.getToken = function () {
        var user = JSON.parse(localStorage.getItem('user'));
        if (user != undefined) {
            return user.token;
        }
    };
    AuthenticationService.prototype.getEmitter = function () {
        return this.dispatcher;
    };
    AuthenticationService.prototype.checkUsername = function (username) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.httpClient.get(_this.usersBaseUrl + 'check/?username=' + username).toPromise().then(function (result) {
                if (result.isAvailable == true) {
                    resolve(true);
                }
                else {
                    resolve(false);
                }
            }, function (reject) {
                resolve(false);
            });
        });
        return promise;
    };
    AuthenticationService.prototype.signIn = function (username, password) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.httpClient.post(_this.usersBaseUrl + 'signin/', { 'username': username, 'password': password }).toPromise().then(function (result) {
                localStorage.setItem('user', JSON.stringify(result));
                _this.dispatcher.emit(new __WEBPACK_IMPORTED_MODULE_6__domain_auth_authentication_event__["a" /* AuthenticationEvent */](true));
                resolve(true);
            }, function (rejected) {
                reject(false);
            });
        });
        return promise;
    };
    AuthenticationService.prototype.signOut = function () {
        localStorage.removeItem('user');
        var event = new __WEBPACK_IMPORTED_MODULE_6__domain_auth_authentication_event__["a" /* AuthenticationEvent */](false);
        this.user = null;
        this.dispatcher.emit(event);
    };
    AuthenticationService.prototype.hasRole = function (role) {
        if (this.getUser() == null) {
            return false;
        }
        if (this.user.roles == null) {
            return false;
        }
        for (var _i = 0, _a = this.user.roles; _i < _a.length; _i++) {
            var userRole = _a[_i];
            if (role.toLowerCase() == userRole.toLowerCase()) {
                return true;
            }
        }
        return false;
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["HttpClient"],
            __WEBPACK_IMPORTED_MODULE_4_primeng_components_common_messageservice__["MessageService"],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "../../../../../src/app/services/game.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GameService = /** @class */ (function () {
    function GameService(http) {
        this.http = http;
        this.openGamesUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiBaseUrl + 'api/games';
        this.betsPlacementUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiBaseUrl + 'api/bets';
        this.sportsUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiBaseUrl + 'api/sports';
        this.leagueUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiBaseUrl + 'api/leagues';
    }
    GameService.prototype.getGames = function (filter) {
        if (filter === void 0) { filter = null; }
        var gamesUrl = this.openGamesUrl;
        if (filter != null) {
            gamesUrl = gamesUrl + '/?filter=' + filter;
        }
        return this.http.get(gamesUrl);
    };
    GameService.prototype.getGame = function (gameId) {
        return this.http.get(this.openGamesUrl + '/' + gameId.toString());
    };
    GameService.prototype.placeBet = function (bet) {
        return this.http.post(this.betsPlacementUrl, bet);
    };
    GameService.prototype.getBets = function (gameId) {
        return this.http.get(this.betsPlacementUrl + '/game/' + gameId.toString());
    };
    GameService.prototype.getSports = function () {
        return this.http.get(this.sportsUrl + '/league/1');
    };
    GameService.prototype.addGame = function (game) {
        return this.http.post(this.openGamesUrl, game);
    };
    GameService.prototype.updateGame = function (game) {
        return this.http.put(this.openGamesUrl + '/' + game.id, game);
    };
    GameService.prototype.getTopList = function () {
        return this.http.get(this.leagueUrl + '/1/toplist');
    };
    GameService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["HttpClient"]])
    ], GameService);
    return GameService;
}());



/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(httpClient) {
        this.httpClient = httpClient;
        this.userApiBase = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiBaseUrl + 'api/auth';
        this.gamesApiBase = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiBaseUrl + '/games';
        this.betsApiBase = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiBaseUrl + 'api/bets';
    }
    UserService.prototype.getUser = function (username) {
        return this.httpClient.get(this.userApiBase + '/user/' + username);
    };
    UserService.prototype.getUserBets = function (username) {
        return this.httpClient.get(this.betsApiBase + '/user/' + username + '?leagueId=1');
    };
    UserService.prototype.makeAdministrator = function (username) {
        return this.httpClient.post(this.userApiBase + '/' + username + '/addasadmin', null);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/top-list/top-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".table-borderless > tbody > tr > td,\r\n.table-borderless > tbody > tr > th,\r\n.table-borderless > tfoot > tr > td,\r\n.table-borderless > tfoot > tr > th,\r\n.table-borderless > thead > tr > td,\r\n.table-borderless > thead > tr > th {\r\n    border: none;\r\n}\r\n\r\n.clickable {\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/top-list/top-list.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <a *ngFor=\"let user of topList\" routerLink=\"/user/{{user.username}}\">\n  <div class=\"w-100\">\n    <div class=\"row\">\n      <div class=\"col-lg-1\"><h6 class=\"mb-1\">{{user.rank}}</h6></div>\n      <div class=\"col-lg-8\"><h6 class=\"mb-1\">{{user.username}}</h6></div>\n      <div class=\"col-lg-2\"><h6 class=\"mb-1\">{{user.totalPoints}}</h6></div>\n    </div>\n      \n      <h6 class=\"mb-1\">{{user.username}}</h6>\n      <h6 class=\"mb-1\">{{user.totalPoints}}</h6> \n  </div> \n</a> -->\n<table class=\"table table-borderless\">\n  <tbody>\n    <tr *ngFor=\"let user of topList\" routerLink=\"/user/{{user.username}}\" class=\"clickable\">\n      <td class=\"col-lg-1\">{{user.rank}}</td>\n      <td class=\"col-lg-8\">{{user.username}}</td>\n      <td class=\"col-lg-3\">{{user.totalPoints}}</td>\n    </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "../../../../../src/app/top-list/top-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_game_service__ = __webpack_require__("../../../../../src/app/services/game.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TopListComponent = /** @class */ (function () {
    function TopListComponent(gameService) {
        this.gameService = gameService;
    }
    TopListComponent.prototype.ngOnInit = function () {
        this.getTopList();
    };
    TopListComponent.prototype.getTopList = function () {
        var _this = this;
        this.gameService.getTopList().subscribe(function (toplist) {
            _this.topList = toplist;
        });
    };
    TopListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-top-list',
            template: __webpack_require__("../../../../../src/app/top-list/top-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/top-list/top-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_game_service__["a" /* GameService */]])
    ], TopListComponent);
    return TopListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user != null\">\n  <h1>{{user.username}}</h1>\n  <p-button [appHasPermission]=\"'Administrator'\" label=\"Gör till administratör\" (click)=\"makeAdministrator()\"></p-button>\n  <div class=\"row\">\n      <div class=\"col-12 col-sm-12 col-md-6 col-lg-6\">\n        <p-card title=\"Tippningar (avslutade spel)\">\n            <div class=\"row\">\n                <div class=\"col-lg-2\"><b>Datum</b></div>\n                <div class=\"col-lg-8\"><b>Spel</b></div>\n                <div class=\"col-lg-2\"><b>Poäng</b></div>\n              </div>\n\n          <div *ngFor=\"let bet of bets\" class=\"row\">\n              <div class=\"col-lg-2\"><a routerLink=\"/game/{{bet.gameId}}\">{{bet.gameStartedOn | date: 'yyyy-MM-dd'}}</a></div>\n              <div class=\"col-lg-8\"><a routerLink=\"/game/{{bet.gameId}}\">{{bet.gameTitle | limitTo: 20}}</a></div>\n              <div class=\"col-lg-2\"><a routerLink=\"/game/{{bet.gameId}}\">{{bet.awardedPoints}}</a></div>\n          </div>\n\n\n        </p-card>\n      </div>\n      <div class=\"col-12 col-sm-12 col-md-6 col-lg-6\">\n          <p-card title=\"Poängutveckling\">\n            <p-chart type=\"line\" [data]=\"data\" [options]=\"options\"></p-chart>\n          </p-card>\n        </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_components_common_messageservice__ = __webpack_require__("../../../../primeng/components/common/messageservice.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_components_common_messageservice___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_primeng_components_common_messageservice__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserComponent = /** @class */ (function () {
    function UserComponent(userService, route, messageService) {
        this.userService = userService;
        this.route = route;
        this.messageService = messageService;
        this.user = null;
        this.bets = null;
        this.data = {
            labels: [],
            datasets: []
        };
        this.options = {
            scales: {
                xAxes: [{
                        type: 'time',
                        time: {
                            unit: 'day'
                        }
                    }]
            },
            title: {
                display: false,
                text: 'My Title',
                fontSize: 16
            },
            legend: {
                position: 'none'
            }
        };
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        var username = this.route.snapshot.paramMap.get('username');
        this.userService.getUser(username).subscribe(function (user) {
            _this.user = user;
            _this.userService.getUserBets(username).subscribe(function (bets) {
                _this.initializeGraph(bets);
                _this.bets = bets;
            });
        });
    };
    UserComponent.prototype.initializeGraph = function (bets) {
        var labels = [];
        var dataset = [{ label: this.user.username, data: [], borderColor: '#4bc0c0', fill: false }];
        for (var _i = 0, bets_1 = bets; _i < bets_1.length; _i++) {
            var bet = bets_1[_i];
            labels.push(new Date(bet.gameStartedOn));
            dataset[0].data.push(bet.accumulatedScore);
        }
        this.data = { labels: labels, datasets: dataset };
    };
    UserComponent.prototype.makeAdministrator = function () {
        var _this = this;
        this.userService.makeAdministrator(this.user.username).subscribe(function (x) {
            _this.messageService.add({ severity: 'success', summary: 'Användaren är administratör', detail: x });
        }, function (error) {
            _this.messageService.add({ severity: 'error', summary: 'Fel', detail: "Status: " + error.status + ". Detaljer: " + error.error });
        });
    };
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user',
            template: __webpack_require__("../../../../../src/app/user/user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_components_common_messageservice__["MessageService"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "../../../../../src/assets/header.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "header.28521147caea6bfe06cc.png";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    apiBaseUrl: '/'
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map