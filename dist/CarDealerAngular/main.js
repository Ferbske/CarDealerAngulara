(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/employee-list/employee-list.component */ "./src/app/components/employee-list/employee-list.component.ts");
/* harmony import */ var _components_car_create_car_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/car-create/car-create.component */ "./src/app/components/car-create/car-create.component.ts");
/* harmony import */ var _components_car_edit_car_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/car-edit/car-edit.component */ "./src/app/components/car-edit/car-edit.component.ts");
/* harmony import */ var _components_car_customer_car_customer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/car-customer/car-customer.component */ "./src/app/components/car-customer/car-customer.component.ts");
/* harmony import */ var _components_car_customer_edit_car_customer_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/car-customer-edit/car-customer-edit.component */ "./src/app/components/car-customer-edit/car-customer-edit.component.ts");
/* harmony import */ var _components_employee_create_employee_create_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/employee-create/employee-create.component */ "./src/app/components/employee-create/employee-create.component.ts");
/* harmony import */ var _components_employee_edit_employee_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/employee-edit/employee-edit.component */ "./src/app/components/employee-edit/employee-edit.component.ts");
/* harmony import */ var _components_sold_by_edit_sold_by_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/sold-by-edit/sold-by-edit.component */ "./src/app/components/sold-by-edit/sold-by-edit.component.ts");
/* harmony import */ var _components_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/auth/auth-guard.service */ "./src/app/components/auth/auth-guard.service.ts");
/* harmony import */ var _components_auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/auth/signup/signup.component */ "./src/app/components/auth/signup/signup.component.ts");
/* harmony import */ var _components_auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/auth/signin/signin.component */ "./src/app/components/auth/signin/signin.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var routes = [
    { path: '', redirectTo: '/signin', pathMatch: 'full' },
    { path: 'signin', component: _components_auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_13__["SigninComponent"] },
    { path: 'signup', component: _components_auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_12__["SignupComponent"] },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], canActivate: [_components_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__["AuthGuardService"]] },
    { path: 'home/:index', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], canActivate: [_components_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__["AuthGuardService"]] },
    { path: 'car/create', component: _components_car_create_car_create_component__WEBPACK_IMPORTED_MODULE_4__["CarCreateComponent"], canActivate: [_components_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__["AuthGuardService"]] },
    { path: 'car/edit/:index', component: _components_car_edit_car_edit_component__WEBPACK_IMPORTED_MODULE_5__["CarEditComponent"], canActivate: [_components_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__["AuthGuardService"]] },
    { path: 'car/customer/:index', component: _components_car_customer_car_customer_component__WEBPACK_IMPORTED_MODULE_6__["CarCustomerComponent"], canActivate: [_components_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__["AuthGuardService"]] },
    { path: 'car/customer/edit/:index', component: _components_car_customer_edit_car_customer_edit_component__WEBPACK_IMPORTED_MODULE_7__["CarCustomerEditComponent"], canActivate: [_components_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__["AuthGuardService"]] },
    { path: 'employee', component: _components_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeListComponent"], canActivate: [_components_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__["AuthGuardService"]] },
    { path: 'employee/detail/:index', component: _components_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeListComponent"], canActivate: [_components_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__["AuthGuardService"]] },
    { path: 'employee/create', component: _components_employee_create_employee_create_component__WEBPACK_IMPORTED_MODULE_8__["EmployeeCreateComponent"], canActivate: [_components_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__["AuthGuardService"]] },
    { path: 'employee/edit/:index', component: _components_employee_edit_employee_edit_component__WEBPACK_IMPORTED_MODULE_9__["EmployeeEditComponent"], canActivate: [_components_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__["AuthGuardService"]] },
    { path: 'car/soldby/:index', component: _components_sold_by_edit_sold_by_edit_component__WEBPACK_IMPORTED_MODULE_10__["SoldByEditComponent"], canActivate: [_components_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__["AuthGuardService"]] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [apptitle]='title'></app-header>\r\n<div class=\"container main show-outlet\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'CarDealerAngular';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_car_list_car_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/car-list/car-list.component */ "./src/app/components/car-list/car-list.component.ts");
/* harmony import */ var _components_car_detail_car_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/car-detail/car-detail.component */ "./src/app/components/car-detail/car-detail.component.ts");
/* harmony import */ var _components_car_create_car_create_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/car-create/car-create.component */ "./src/app/components/car-create/car-create.component.ts");
/* harmony import */ var _components_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/employee-list/employee-list.component */ "./src/app/components/employee-list/employee-list.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_car_edit_car_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/car-edit/car-edit.component */ "./src/app/components/car-edit/car-edit.component.ts");
/* harmony import */ var _models_car_car_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./models/car/car.service */ "./src/app/models/car/car.service.ts");
/* harmony import */ var _components_car_customer_car_customer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/car-customer/car-customer.component */ "./src/app/components/car-customer/car-customer.component.ts");
/* harmony import */ var _components_car_customer_edit_car_customer_edit_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/car-customer-edit/car-customer-edit.component */ "./src/app/components/car-customer-edit/car-customer-edit.component.ts");
/* harmony import */ var _components_employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/employee-details/employee-details.component */ "./src/app/components/employee-details/employee-details.component.ts");
/* harmony import */ var _components_employee_create_employee_create_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/employee-create/employee-create.component */ "./src/app/components/employee-create/employee-create.component.ts");
/* harmony import */ var _components_employee_edit_employee_edit_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/employee-edit/employee-edit.component */ "./src/app/components/employee-edit/employee-edit.component.ts");
/* harmony import */ var _models_employee_employee_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./models/employee/employee.service */ "./src/app/models/employee/employee.service.ts");
/* harmony import */ var _components_sold_by_edit_sold_by_edit_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/sold-by-edit/sold-by-edit.component */ "./src/app/components/sold-by-edit/sold-by-edit.component.ts");
/* harmony import */ var _components_auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/auth/signin/signin.component */ "./src/app/components/auth/signin/signin.component.ts");
/* harmony import */ var _components_auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/auth/signup/signup.component */ "./src/app/components/auth/signup/signup.component.ts");
/* harmony import */ var _components_auth_auth_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/auth/auth.service */ "./src/app/components/auth/auth.service.ts");
/* harmony import */ var _components_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/auth/auth-guard.service */ "./src/app/components/auth/auth-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _components_car_list_car_list_component__WEBPACK_IMPORTED_MODULE_8__["CarListComponent"],
                _components_car_detail_car_detail_component__WEBPACK_IMPORTED_MODULE_9__["CarDetailComponent"],
                _components_car_create_car_create_component__WEBPACK_IMPORTED_MODULE_10__["CarCreateComponent"],
                _components_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_11__["EmployeeListComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                _components_car_edit_car_edit_component__WEBPACK_IMPORTED_MODULE_13__["CarEditComponent"],
                _components_car_customer_car_customer_component__WEBPACK_IMPORTED_MODULE_15__["CarCustomerComponent"],
                _components_car_customer_edit_car_customer_edit_component__WEBPACK_IMPORTED_MODULE_16__["CarCustomerEditComponent"],
                _components_employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_17__["EmployeeDetailsComponent"],
                _components_employee_create_employee_create_component__WEBPACK_IMPORTED_MODULE_18__["EmployeeCreateComponent"],
                _components_employee_edit_employee_edit_component__WEBPACK_IMPORTED_MODULE_19__["EmployeeEditComponent"],
                _components_sold_by_edit_sold_by_edit_component__WEBPACK_IMPORTED_MODULE_21__["SoldByEditComponent"],
                _components_auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_23__["SignupComponent"],
                _components_auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_22__["SigninComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"]
            ],
            providers: [_models_car_car_service__WEBPACK_IMPORTED_MODULE_14__["CarService"], _models_employee_employee_service__WEBPACK_IMPORTED_MODULE_20__["EmployeeService"], _components_auth_auth_service__WEBPACK_IMPORTED_MODULE_24__["AuthService"], _components_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_25__["AuthGuardService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/auth/auth-guard.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/auth/auth-guard.service.ts ***!
  \*******************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/components/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(authService) {
        this.authService = authService;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        return this.authService.isAuthenticated();
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/components/auth/auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/components/auth/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.url = 'https://cardealer-api.herokuapp.com';
    }
    AuthService.prototype.signupUser = function (username, email, password) {
        return this.http.post(this.url + '/register', {
            username: username,
            email: email,
            password: password
        });
    };
    AuthService.prototype.signinUser = function (username, password) {
        return this.http.post(this.url + '/login', {
            username: username,
            password: password
        });
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('Token');
        this.router.navigate(['/signin']);
    };
    AuthService.prototype.getToken = function () {
        return localStorage.getItem('Token');
    };
    AuthService.prototype.isAuthenticated = function () {
        return localStorage.getItem('Token') != null;
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/components/auth/signin/signin.component.css":
/*!*************************************************************!*\
  !*** ./src/app/components/auth/signin/signin.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXV0aC9zaWduaW4vc2lnbmluLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/auth/signin/signin.component.html":
/*!**************************************************************!*\
  !*** ./src/app/components/auth/signin/signin.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12 col-sm-10 col-md-8 col-smoffset-1 col-md-offset-2 thumbnail clearfix sign\">\r\n  <form (ngSubmit)=\"onLogin()\" #f=\"ngForm\">\r\n    <div class=\"form-group\">\r\n      <label for=\"username\">Username</label>\r\n      <input type=\"username\" id=\"username\" name=\"username\" ngModel class=\"form-control\" required #username=\"ngModel\">\r\n      <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">Please enter a valid username</span>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"password\">Password</label>\r\n      <input type=\"password\" id=\"password\" name=\"password\" ngModel class=\"form-control\" required #password=\"ngModel\">\r\n      <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">Please enter your password</span>\r\n    </div>\r\n    <div>\r\n      <span class=\"alerttext\" *ngIf=\"errorcode == 401\">Please enter the right credentials</span>\r\n    </div>\r\n    <button class=\"btn btn-primary button\" type=\"submit\" [disabled]=\"!f.valid\">Sign in</button>\r\n\r\n    <p><br/>Don't have an account yet? Please <a routerLink=\"/signup\"> sign up</a>.</p>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/auth/signin/signin.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/auth/signin/signin.component.ts ***!
  \************************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/components/auth/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SigninComponent = /** @class */ (function () {
    function SigninComponent(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent.prototype.onLogin = function () {
        var _this = this;
        this.authenticationService.signinUser(this.signinForm.value.username, this.signinForm.value.password)
            .subscribe(function (response) {
            localStorage.setItem('Token', response['token']);
            _this.errorcode = 200;
            _this.router.navigate(['/home']);
        }, function (error) {
            console.log(error);
            _this.errorcode = error.status;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], SigninComponent.prototype, "signinForm", void 0);
    SigninComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/components/auth/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/components/auth/signin/signin.component.css")],
            providers: [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/components/auth/signup/signup.component.css":
/*!*************************************************************!*\
  !*** ./src/app/components/auth/signup/signup.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/auth/signup/signup.component.html":
/*!**************************************************************!*\
  !*** ./src/app/components/auth/signup/signup.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12 col-sm-10 col-md-8 col-smoffset-1 col-md-offset-2 thumbnail clearfix sign\">\r\n  <form class=\"col-sm-12\" (ngSubmit)=\"onRegister()\" #f=\"ngForm\">\r\n    <div class=\"form-group\">\r\n      <label for=\"username\">Username</label>\r\n      <input type=\"username\" id=\"username\" name=\"username\" ngModel class=\"form-control\" required #username=\"ngModel\">\r\n      <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">Please enter a valid username longer than two characters</span>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"email\">Mail</label>\r\n      <input type=\"email\" id=\"email\" name=\"email\" ngModel class=\"form-control\" required email #email=\"ngModel\">\r\n      <span class=\"help-block\" *ngIf=\"!email.valid && email.touched\">Please enter a valid email address</span>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"password\">Password</label>\r\n      <input type=\"password\" id=\"password\" name=\"password\" ngModel class=\"form-control\" required #password=\"ngModel\">\r\n      <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">Please enter a valid password</span>\r\n    </div>\r\n    <div>\r\n      <span class=\"alerttext\" *ngIf=\"errorcode == 409\">User already exists</span>\r\n    </div>\r\n    <button class=\"btn btn-primary button\" type=\"submit\" [disabled]=\"!f.valid\">Sign up</button>\r\n    <p><br/>Already have an account? Please <a routerLink=\"/signin\"> sign in</a>.</p>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/auth/signup/signup.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/auth/signup/signup.component.ts ***!
  \************************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/components/auth/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = /** @class */ (function () {
    function SignupComponent(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.onRegister = function () {
        var _this = this;
        this.authenticationService.signupUser(this.signupForm.value.username, this.signupForm.value.email, this.signupForm.value.password)
            .subscribe(function (response) {
            localStorage.setItem('Token', response['token']);
            _this.errorcode = 200;
            console.log(_this.authenticationService.getToken());
            _this.router.navigate(['/home']);
        }, function (error) {
            console.log(error);
            _this.errorcode = 409;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], SignupComponent.prototype, "signupForm", void 0);
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/components/auth/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/components/auth/signup/signup.component.css")],
            providers: [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/components/car-create/car-create.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/car-create/car-create.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FyLWNyZWF0ZS9jYXItY3JlYXRlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/car-create/car-create.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/car-create/car-create.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<p>Chassis Number:</p>\r\n<input id=\"chassisNumber\" name=\"chassisNumber\" class=\"form-control\"\r\n       required minlength=\"4\"\r\n       [(ngModel)]=\"chassisNumber\" #chassisInput=\"ngModel\" >\r\n\r\n<div *ngIf=\"chassisInput.invalid && (chassisInput.dirty || chassisInput.touched)\"\r\n     class=\"alert alert-danger\">\r\n  <div *ngIf=\"chassisInput.errors.required\">\r\n    Chassis Number is required.\r\n  </div>\r\n  <div *ngIf=\"chassisInput.errors.minlength\">\r\n    Chassis Number must be at least 4 characters long.\r\n  </div>\r\n</div>\r\n\r\n<br>\r\n<p>Brand:</p>\r\n<input id=\"brand\" name=\"brand\" class=\"form-control\"\r\n       required\r\n       [(ngModel)]=\"brand\" #brandInput=\"ngModel\" >\r\n\r\n<div *ngIf=\"brandInput.invalid && (brandInput.dirty || brandInput.touched)\"\r\n     class=\"alert alert-danger\">\r\n  <div *ngIf=\"brandInput.errors.required\">\r\n    Brand is required.\r\n  </div>\r\n</div>\r\n\r\n<br>\r\n<p>Fuel Type:</p>\r\n<input id=\"fuelType\" name=\"fuelType\" class=\"form-control\"\r\n       required\r\n       [(ngModel)]=\"fuelType\" #fuelTypeInput=\"ngModel\" >\r\n\r\n<div *ngIf=\"fuelTypeInput.invalid && (fuelTypeInput.dirty || fuelTypeInput.touched)\"\r\n     class=\"alert alert-danger\">\r\n  <div *ngIf=\"fuelTypeInput.errors.required\">\r\n    Fuel Type is required.\r\n  </div>\r\n</div>\r\n\r\n<br>\r\n<p>Type Car:</p>\r\n<input id=\"typeCar\" name=\"typeCar\" class=\"form-control\"\r\n       required\r\n       [(ngModel)]=\"typeCar\" #typeCarInput=\"ngModel\" >\r\n\r\n<div *ngIf=\"typeCarInput.invalid && (typeCarInput.dirty || typeCarInput.touched)\"\r\n     class=\"alert alert-danger\">\r\n  <div *ngIf=\"typeCarInput.errors.required\">\r\n    Type Car is required.\r\n  </div>\r\n</div>\r\n\r\n<br>\r\n<button class=\"btn btn-primary\"\r\n        [disabled]=\"chassisInput.invalid || brandInput.invalid || fuelTypeInput.invalid || typeCarInput.invalid\"\r\n        (click)=\"onSubmitCreateCar()\" routerLink=\"/home\">Create Car</button>\r\n"

/***/ }),

/***/ "./src/app/components/car-create/car-create.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/car-create/car-create.component.ts ***!
  \***************************************************************/
/*! exports provided: CarCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarCreateComponent", function() { return CarCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_car_car_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/car/car.service */ "./src/app/models/car/car.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CarCreateComponent = /** @class */ (function () {
    function CarCreateComponent(carService) {
        this.carService = carService;
        this.inputsEmpty = true;
        this.check();
    }
    CarCreateComponent.prototype.ngOnInit = function () {
    };
    CarCreateComponent.prototype.check = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.chassisNumber != null && _this.brand != null && _this.fuelType != null && _this.typeCar != null) {
                _this.inputsEmpty = false;
                _this.check();
            }
            else {
                _this.check();
            }
        }, 100);
    };
    CarCreateComponent.prototype.onSubmitCreateCar = function () {
        this.carService.addCar(this.chassisNumber, this.brand, this.fuelType, this.typeCar)
            .subscribe(function (response) { return console.log(response); }, function (error) { return console.log(error); });
    };
    CarCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-car-create',
            template: __webpack_require__(/*! ./car-create.component.html */ "./src/app/components/car-create/car-create.component.html"),
            styles: [__webpack_require__(/*! ./car-create.component.css */ "./src/app/components/car-create/car-create.component.css")],
            providers: []
        }),
        __metadata("design:paramtypes", [_models_car_car_service__WEBPACK_IMPORTED_MODULE_1__["CarService"]])
    ], CarCreateComponent);
    return CarCreateComponent;
}());



/***/ }),

/***/ "./src/app/components/car-customer-edit/car-customer-edit.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/car-customer-edit/car-customer-edit.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FyLWN1c3RvbWVyLWVkaXQvY2FyLWN1c3RvbWVyLWVkaXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/car-customer-edit/car-customer-edit.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/car-customer-edit/car-customer-edit.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<h1>Chassis Number: {{ index }}</h1>\r\n\r\n<br>\r\n<p>Customer First Name:</p>\r\n<input id=\"firstName\" name=\"firstName\" class=\"form-control\"\r\n       required\r\n       [(ngModel)]=\"customer.firstName\" #firstNameInput=\"ngModel\" >\r\n\r\n<div *ngIf=\"firstNameInput.invalid && (firstNameInput.dirty || firstNameInput.touched)\"\r\n     class=\"alert alert-danger\">\r\n  <div *ngIf=\"firstNameInput.errors.required\">\r\n    First Name is required.\r\n  </div>\r\n</div>\r\n\r\n<br>\r\n<p>Customer Last Name:</p>\r\n<input id=\"lastName\" name=\"lastName\" class=\"form-control\"\r\n       required\r\n       [(ngModel)]=\"customer.lastName\" #lastNameInput=\"ngModel\" >\r\n\r\n<div *ngIf=\"lastNameInput.invalid && (lastNameInput.dirty || lastNameInput.touched)\"\r\n     class=\"alert alert-danger\">\r\n  <div *ngIf=\"lastNameInput.errors.required\">\r\n    Last Name is required.\r\n  </div>\r\n</div>\r\n\r\n<br>\r\n<p>Age:</p>\r\n<input id=\"age\" name=\"age\" class=\"form-control\"\r\n       required\r\n       [(ngModel)]=\"customer.age\" #ageInput=\"ngModel\" >\r\n\r\n<div *ngIf=\"ageInput.invalid && (ageInput.dirty || ageInput.touched)\"\r\n     class=\"alert alert-danger\">\r\n  <div *ngIf=\"ageInput.errors.required\">\r\n    Age is required.\r\n  </div>\r\n  <div *ngIf=\"ageInput.errors.minlength\">\r\n    Age must be 18 or above.\r\n  </div>\r\n</div>\r\n\r\n<br>\r\n<p>Street:</p>\r\n<input id=\"street\" name=\"street\" class=\"form-control\"\r\n       required\r\n       [(ngModel)]=\"customer.street\" #streetInput=\"ngModel\" >\r\n\r\n<div *ngIf=\"streetInput.invalid && (streetInput.dirty || streetInput.touched)\"\r\n     class=\"alert alert-danger\">\r\n  <div *ngIf=\"streetInput.errors.required\">\r\n    Street is required.\r\n  </div>\r\n</div>\r\n\r\n<br>\r\n<p>House Number:</p>\r\n<input id=\"houseNumber\" name=\"houseNumber\" class=\"form-control\"\r\n       required\r\n       [(ngModel)]=\"customer.houseNumber\" #houseNumberInput=\"ngModel\" >\r\n\r\n<div *ngIf=\"houseNumberInput.invalid && (houseNumberInput.dirty || houseNumberInput.touched)\"\r\n     class=\"alert alert-danger\">\r\n  <div *ngIf=\"houseNumberInput.errors.required\">\r\n    House Number is required.\r\n  </div>\r\n</div>\r\n\r\n<br>\r\n<p>Postal Code:</p>\r\n<input id=\"postalCode\" name=\"postalCode\" class=\"form-control\"\r\n       required\r\n       [(ngModel)]=\"customer.postalCode\" #postalCodeInput=\"ngModel\" >\r\n\r\n<div *ngIf=\"postalCodeInput.invalid && (postalCodeInput.dirty || postalCodeInput.touched)\"\r\n     class=\"alert alert-danger\">\r\n  <div *ngIf=\"postalCodeInput.errors.required\">\r\n    Postal Code is required.\r\n  </div>\r\n</div>\r\n\r\n<br>\r\n<button class=\"btn btn-primary\"\r\n        [disabled]=\"firstNameInput.invalid || lastNameInput.invalid || ageInput.invalid || streetInput.invalid || houseNumberInput.invalid || postalCodeInput.invalid\"\r\n        (click)=\"onSubmitEditCustomer()\">Edit Customer of Car</button>\r\n"

/***/ }),

/***/ "./src/app/components/car-customer-edit/car-customer-edit.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/car-customer-edit/car-customer-edit.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CarCustomerEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarCustomerEditComponent", function() { return CarCustomerEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_car_car_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/car/car.service */ "./src/app/models/car/car.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CarCustomerEditComponent = /** @class */ (function () {
    function CarCustomerEditComponent(route, carService, router) {
        this.route = route;
        this.carService = carService;
        this.router = router;
        this.customer = {
            'firstName': 'Loading',
            'lastName': 'Loading',
            'age': 1,
            'street': 'Loading',
            'houseNumber': 99999,
            'postalCode': 'Loading'
        };
        this.getCar();
        // this.subscriptionParams = this.route.params.subscribe(params => {
        //   this.index = params['index'];
        //   this.subscriptionCarService = this.carService.getACar(this.index)
        //     .subscribe(
        //       (car: CarModel[]) => {
        //         const carSelected = car[0];
        //         this.customer = carSelected.ownedBy;
        //       },
        //       (error) => console.log(error)
        //     );
        // });
    }
    CarCustomerEditComponent.prototype.ngOnInit = function () {
    };
    CarCustomerEditComponent.prototype.getCar = function () {
        var _this = this;
        this.route.params.subscribe(function (param) {
            _this.index = param['index'];
            _this.carService.getACar(_this.index)
                .subscribe(function (response) {
                _this.customer = response.ownedBy;
            }, function (error) {
                console.log(error);
            });
        });
    };
    CarCustomerEditComponent.prototype.onSubmitEditCustomer = function () {
        var _this = this;
        this.carService.editCustomer(this.index, this.customer.firstName, this.customer.lastName, this.customer.age, this.customer.street, this.customer.houseNumber, this.customer.postalCode)
            .subscribe(function (response) { return _this.router.navigate(['/home']); });
    };
    CarCustomerEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-car-customer-edit',
            template: __webpack_require__(/*! ./car-customer-edit.component.html */ "./src/app/components/car-customer-edit/car-customer-edit.component.html"),
            styles: [__webpack_require__(/*! ./car-customer-edit.component.css */ "./src/app/components/car-customer-edit/car-customer-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _models_car_car_service__WEBPACK_IMPORTED_MODULE_2__["CarService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CarCustomerEditComponent);
    return CarCustomerEditComponent;
}());



/***/ }),

/***/ "./src/app/components/car-customer/car-customer.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/car-customer/car-customer.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FyLWN1c3RvbWVyL2Nhci1jdXN0b21lci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/car-customer/car-customer.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/car-customer/car-customer.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<h1>Chassis Number: {{ index }}</h1>\r\n\r\n<br>\r\n<p>Customer First Name:</p>\r\n<input id=\"firstName\" name=\"firstName\" class=\"form-control\"\r\n       required\r\n       [(ngModel)]=\"firstName\" #firstNameInput=\"ngModel\" >\r\n\r\n<div *ngIf=\"firstNameInput.invalid && (firstNameInput.dirty || firstNameInput.touched)\"\r\n     class=\"alert alert-danger\">\r\n  <div *ngIf=\"firstNameInput.errors.required\">\r\n    First Name is required.\r\n  </div>\r\n</div>\r\n\r\n<br>\r\n<p>Customer Last Name:</p>\r\n<input id=\"lastName\" name=\"lastName\" class=\"form-control\"\r\n       required\r\n       [(ngModel)]=\"lastName\" #lastNameInput=\"ngModel\" >\r\n\r\n<div *ngIf=\"lastNameInput.invalid && (lastNameInput.dirty || lastNameInput.touched)\"\r\n     class=\"alert alert-danger\">\r\n  <div *ngIf=\"lastNameInput.errors.required\">\r\n    Last Name is required.\r\n  </div>\r\n</div>\r\n\r\n<br>\r\n<p>Age:</p>\r\n<input id=\"age\" name=\"age\" class=\"form-control\"\r\n       required\r\n       [(ngModel)]=\"age\" #ageInput=\"ngModel\" >\r\n\r\n<div *ngIf=\"ageInput.invalid && (ageInput.dirty || ageInput.touched)\"\r\n     class=\"alert alert-danger\">\r\n  <div *ngIf=\"ageInput.errors.required\">\r\n    Age is required.\r\n  </div>\r\n  <div *ngIf=\"ageInput.errors.minlength\">\r\n    Age must be 18 or above.\r\n  </div>\r\n</div>\r\n\r\n<br>\r\n<p>Street:</p>\r\n<input id=\"street\" name=\"street\" class=\"form-control\"\r\n       required\r\n       [(ngModel)]=\"street\" #streetInput=\"ngModel\" >\r\n\r\n<div *ngIf=\"streetInput.invalid && (streetInput.dirty || streetInput.touched)\"\r\n     class=\"alert alert-danger\">\r\n  <div *ngIf=\"streetInput.errors.required\">\r\n    Street is required.\r\n  </div>\r\n</div>\r\n\r\n<br>\r\n<p>House Number:</p>\r\n<input id=\"houseNumber\" name=\"houseNumber\" class=\"form-control\"\r\n       required\r\n       [(ngModel)]=\"houseNumber\" #houseNumberInput=\"ngModel\" >\r\n\r\n<div *ngIf=\"houseNumberInput.invalid && (houseNumberInput.dirty || houseNumberInput.touched)\"\r\n     class=\"alert alert-danger\">\r\n  <div *ngIf=\"houseNumberInput.errors.required\">\r\n    House Number is required.\r\n  </div>\r\n</div>\r\n\r\n<br>\r\n<p>Postal Code:</p>\r\n<input id=\"postalCode\" name=\"postalCode\" class=\"form-control\"\r\n       required\r\n       [(ngModel)]=\"postalCode\" #postalCodeInput=\"ngModel\" >\r\n\r\n<div *ngIf=\"postalCodeInput.invalid && (postalCodeInput.dirty || postalCodeInput.touched)\"\r\n     class=\"alert alert-danger\">\r\n  <div *ngIf=\"postalCodeInput.errors.required\">\r\n    Postal Code is required.\r\n  </div>\r\n</div>\r\n\r\n<br>\r\n<button class=\"btn btn-primary\"\r\n        [disabled]=\"firstNameInput.invalid || lastNameInput.invalid || ageInput.invalid || streetInput.invalid || houseNumberInput.invalid || postalCodeInput.invalid\"\r\n        (click)=\"onSubmitAddCustomer()\">Add Customer to Car</button>\r\n"

/***/ }),

/***/ "./src/app/components/car-customer/car-customer.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/car-customer/car-customer.component.ts ***!
  \*******************************************************************/
/*! exports provided: CarCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarCustomerComponent", function() { return CarCustomerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_car_car_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/car/car.service */ "./src/app/models/car/car.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CarCustomerComponent = /** @class */ (function () {
    function CarCustomerComponent(route, carService, router) {
        this.route = route;
        this.carService = carService;
        this.router = router;
        this.inputsEmpty = true;
        this.check();
    }
    CarCustomerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.index = params['index'];
        });
    };
    CarCustomerComponent.prototype.onSubmitAddCustomer = function () {
        var _this = this;
        this.carService.addCustomer(this.index, this.firstName, this.lastName, this.age, this.street, this.houseNumber, this.postalCode)
            .subscribe(function (response) { return _this.router.navigate(['/home']); });
    };
    CarCustomerComponent.prototype.check = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.firstName != null && _this.lastName != null && _this.age != null && _this.street != null && _this.houseNumber != null && _this.postalCode != null) {
                _this.inputsEmpty = false;
                _this.check();
            }
            else {
                _this.check();
            }
        }, 100);
    };
    CarCustomerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-car-customer',
            template: __webpack_require__(/*! ./car-customer.component.html */ "./src/app/components/car-customer/car-customer.component.html"),
            styles: [__webpack_require__(/*! ./car-customer.component.css */ "./src/app/components/car-customer/car-customer.component.css")],
            providers: []
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _models_car_car_service__WEBPACK_IMPORTED_MODULE_2__["CarService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CarCustomerComponent);
    return CarCustomerComponent;
}());



/***/ }),

/***/ "./src/app/components/car-detail/car-detail.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/car-detail/car-detail.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FyLWRldGFpbC9jYXItZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/car-detail/car-detail.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/car-detail/car-detail.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br>\r\n<div class=\"row\">\r\n  <div class=\"col-sm\">\r\n    <h5>ChassisNr: {{ car.chassisNumber }}</h5>\r\n  </div>\r\n  <div class=\"col-sm-12\">\r\n    Brand:\r\n    {{ car.brand }}\r\n  </div>\r\n  <div class=\"col-sm-12\">\r\n    Fuel Type:\r\n    {{ car.fuelType }}\r\n  </div>\r\n  <div class=\"col-sm-12\">\r\n    Type Car:\r\n    {{ car.typeCar }}\r\n  </div>\r\n  <div class=\"col-sm-12\">\r\n    Owned By:\r\n    {{ owner }}\r\n  </div>\r\n  <div class=\"col-sm-12\">\r\n    Sold By:\r\n    {{ seller }}\r\n  </div>\r\n  <div class=\"col-sm-12\">\r\n    <button class=\"btn btn-primary\" routerLink=\"/car/edit/{{ car.chassisNumber }}\">Edit Car</button>\r\n    <br>\r\n    <button class=\"btn btn-danger\" (click)=\"deleteCar()\">Delete Car</button>\r\n    <br>\r\n    <button *ngIf=\"hasCustomer; else editCustomer\" class=\"btn btn-primary\" routerLink=\"/car/customer/{{ car.chassisNumber }}\">Add Owner</button>\r\n    <ng-template #editCustomer>\r\n      <button class=\"btn btn-primary\" routerLink=\"/car/customer/edit/{{ car.chassisNumber }}\">Edit Owner</button>\r\n    </ng-template>\r\n    <br>\r\n    <button class=\"btn btn-danger\" (click)=\"deleteCustomer()\">Delete Owner</button>\r\n    <br>\r\n    <button class=\"btn btn-primary\" routerLink=\"/car/soldby/{{ car.chassisNumber }}\">Edit Seller</button>\r\n    <br>\r\n    <button class=\"btn btn-danger\" (click)=\"deleteSeller()\">Delete Seller</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/car-detail/car-detail.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/car-detail/car-detail.component.ts ***!
  \***************************************************************/
/*! exports provided: CarDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarDetailComponent", function() { return CarDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_car_car_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/car/car.service */ "./src/app/models/car/car.service.ts");
/* harmony import */ var _models_employee_employee_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/employee/employee.service */ "./src/app/models/employee/employee.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CarDetailComponent = /** @class */ (function () {
    function CarDetailComponent(route, carService, employeeService, router) {
        this.route = route;
        this.carService = carService;
        this.employeeService = employeeService;
        this.router = router;
        this.car = {
            'chassisNumber': 1111,
            'brand': 'Loading',
            'fuelType': 'Loading',
            'typeCar': 'Loading',
            'ownedBy': null,
            'soldBy': null
        };
        this.getCar();
    }
    CarDetailComponent.prototype.ngOnInit = function () {
    };
    CarDetailComponent.prototype.getCar = function () {
        var _this = this;
        this.route.params.subscribe(function (param) {
            _this.carService.getACar(param['index'])
                .subscribe(function (response) {
                _this.car = response;
                if (_this.car.ownedBy != null) {
                    _this.owner = _this.car.ownedBy.firstName + ' ' + _this.car.ownedBy.lastName;
                    _this.hasCustomer = false;
                }
                else {
                    _this.hasCustomer = true;
                    _this.owner = 'Not Owned';
                }
                if (_this.car.soldBy != null) {
                    _this.employeeService.getAEmployee(_this.car.soldBy)
                        .subscribe(function (response2) {
                        _this.seller = response2.firstName + ' ' + response2.lastName;
                    }, function (error) {
                        console.log(error);
                    });
                }
                else {
                    _this.seller = 'Not Sold';
                }
            }, function (error) {
                console.log(error);
            });
        });
    };
    CarDetailComponent.prototype.deleteCar = function () {
        var _this = this;
        this.carService.deleteCar(this.car.chassisNumber)
            .subscribe(function (response) { return _this.router.navigate(['/home']); }, function (error) { return console.log(error); });
    };
    CarDetailComponent.prototype.deleteCustomer = function () {
        var _this = this;
        this.carService.deleteCustomer(this.car.chassisNumber)
            .subscribe(function (response) { return _this.getCar(); }, function (error) { return console.log(error); });
    };
    CarDetailComponent.prototype.deleteSeller = function () {
        var _this = this;
        this.carService.deleteSoldBy(this.car.chassisNumber)
            .subscribe(function (response) { return _this.getCar(); }, function (error) { return console.log(error); });
    };
    CarDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-car-detail',
            template: __webpack_require__(/*! ./car-detail.component.html */ "./src/app/components/car-detail/car-detail.component.html"),
            styles: [__webpack_require__(/*! ./car-detail.component.css */ "./src/app/components/car-detail/car-detail.component.css")],
            providers: [_models_car_car_service__WEBPACK_IMPORTED_MODULE_2__["CarService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _models_car_car_service__WEBPACK_IMPORTED_MODULE_2__["CarService"], _models_employee_employee_service__WEBPACK_IMPORTED_MODULE_3__["EmployeeService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CarDetailComponent);
    return CarDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/car-edit/car-edit.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/car-edit/car-edit.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FyLWVkaXQvY2FyLWVkaXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/car-edit/car-edit.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/car-edit/car-edit.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<h1>Chassis Number: {{ car.chassisNumber }}</h1>\r\n\r\n<br>\r\n<p>Brand:</p>\r\n<input id=\"brand\" name=\"brand\" class=\"form-control\"\r\n       required\r\n       [(ngModel)]=\"car.brand\" #brandInput=\"ngModel\" >\r\n\r\n<div *ngIf=\"brandInput.invalid && (brandInput.dirty || brandInput.touched)\"\r\n     class=\"alert alert-danger\">\r\n  <div *ngIf=\"brandInput.errors.required\">\r\n    Brand is required.\r\n  </div>\r\n</div>\r\n\r\n<br>\r\n<p>Fuel Type:</p>\r\n<input id=\"fuelType\" name=\"fuelType\" class=\"form-control\"\r\n       required\r\n       [(ngModel)]=\"car.fuelType\" #fuelTypeInput=\"ngModel\" >\r\n\r\n<div *ngIf=\"fuelTypeInput.invalid && (fuelTypeInput.dirty || fuelTypeInput.touched)\"\r\n     class=\"alert alert-danger\">\r\n  <div *ngIf=\"fuelTypeInput.errors.required\">\r\n    Fuel Type is required.\r\n  </div>\r\n</div>\r\n\r\n<br>\r\n<p>Type Car:</p>\r\n<input id=\"typeCar\" name=\"typeCar\" class=\"form-control\"\r\n       required\r\n       [(ngModel)]=\"car.typeCar\" #typeCarInput=\"ngModel\" >\r\n\r\n<div *ngIf=\"typeCarInput.invalid && (typeCarInput.dirty || typeCarInput.touched)\"\r\n     class=\"alert alert-danger\">\r\n  <div *ngIf=\"typeCarInput.errors.required\">\r\n    Type Car is required.\r\n  </div>\r\n</div>\r\n\r\n<br>\r\n<button class=\"btn btn-primary\"\r\n        [disabled]=\"brandInput.invalid || fuelTypeInput.invalid || typeCarInput.invalid\"\r\n        (click)=\"onSubmitEditCar()\">Edit Car</button>\r\n"

/***/ }),

/***/ "./src/app/components/car-edit/car-edit.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/car-edit/car-edit.component.ts ***!
  \***********************************************************/
/*! exports provided: CarEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarEditComponent", function() { return CarEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_car_car_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/car/car.service */ "./src/app/models/car/car.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CarEditComponent = /** @class */ (function () {
    function CarEditComponent(route, carService, router) {
        this.route = route;
        this.carService = carService;
        this.router = router;
        this.car = {
            'chassisNumber': 1111,
            'brand': 'Loading',
            'fuelType': 'Loading',
            'typeCar': 'Loading',
            'ownedBy': null,
            'soldBy': null
        };
        this.getCar();
        // this.route.params.subscribe(params => {
        //   const index = params['index'];
        //   console.log(index)
        //   this.carService.getACar(this.index)
        //     .subscribe(
        //       (car: CarModel[]) => {
        //         this.car = car[0];
        //         console.log(this.car);
        //       },
        //       (error) => console.log(error)
        //     );
        // });
    }
    CarEditComponent.prototype.ngOnInit = function () {
    };
    CarEditComponent.prototype.getCar = function () {
        var _this = this;
        this.route.params.subscribe(function (param) {
            _this.carService.getACar(param['index'])
                .subscribe(function (response) {
                _this.car = response;
            }, function (error) {
                console.log(error);
            });
        });
    };
    CarEditComponent.prototype.onSubmitEditCar = function () {
        var _this = this;
        this.carService.editCar(this.car.chassisNumber, this.car.brand, this.car.fuelType, this.car.typeCar)
            .subscribe(function (response) { return _this.router.navigate(['/home']); }, function (error) { return console.log(error); });
    };
    CarEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-car-edit',
            template: __webpack_require__(/*! ./car-edit.component.html */ "./src/app/components/car-edit/car-edit.component.html"),
            styles: [__webpack_require__(/*! ./car-edit.component.css */ "./src/app/components/car-edit/car-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _models_car_car_service__WEBPACK_IMPORTED_MODULE_2__["CarService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CarEditComponent);
    return CarEditComponent;
}());



/***/ }),

/***/ "./src/app/components/car-list/car-list.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/car-list/car-list.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FyLWxpc3QvY2FyLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/car-list/car-list.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/car-list/car-list.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <button class=\"btn btn-primary\" routerLink=\"/car/create\" [routerLinkActive]=\"['active']\" href=\"#\">New Car</button>\r\n  <table class=\"table table-hover\">\r\n    <thead>\r\n    <th>Index</th>\r\n    <th>ChassisNr</th>\r\n    <th>Brand</th>\r\n    <th>Fuel Type</th>\r\n    <th>Type Car</th>\r\n    </thead>\r\n    <tbody>\r\n    <tr\r\n      *ngFor=\"let car of cars; let i = index\" [attr.data-index]=\"i\">\r\n      <td>{{ i + 1 }}</td>\r\n      <td>\r\n        <a\r\n          class=\"clearfix\"\r\n          routerLink=\"/home/{{ car.chassisNumber }}\"\r\n          [routerLinkActive]=\"['active']\"\r\n          href=\"#\"\r\n          (click)=\"onSelected(car)\"\r\n        >{{ car.chassisNumber }}</a></td>\r\n      <td>{{ car.brand }}</td>\r\n      <td>{{ car.fuelType }}</td>\r\n      <td>{{ car.typeCar }}</td>\r\n    </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/car-list/car-list.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/car-list/car-list.component.ts ***!
  \***********************************************************/
/*! exports provided: CarListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarListComponent", function() { return CarListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_car_car_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/car/car.service */ "./src/app/models/car/car.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CarListComponent = /** @class */ (function () {
    function CarListComponent(carService) {
        this.carService = carService;
        this.carSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showCars();
    }
    CarListComponent.prototype.ngOnInit = function () {
    };
    CarListComponent.prototype.onSelected = function (car) {
        this.carSelected.emit(car);
    };
    CarListComponent.prototype.showCars = function () {
        var _this = this;
        this.carService.getCars()
            .subscribe(function (response) {
            _this.cars = response.results;
        }, function (error) { return console.log(error); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CarListComponent.prototype, "carSelected", void 0);
    CarListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-car-list',
            template: __webpack_require__(/*! ./car-list.component.html */ "./src/app/components/car-list/car-list.component.html"),
            styles: [__webpack_require__(/*! ./car-list.component.css */ "./src/app/components/car-list/car-list.component.css")],
            providers: []
        }),
        __metadata("design:paramtypes", [_models_car_car_service__WEBPACK_IMPORTED_MODULE_1__["CarService"]])
    ], CarListComponent);
    return CarListComponent;
}());



/***/ }),

/***/ "./src/app/components/employee-create/employee-create.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/employee-create/employee-create.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW1wbG95ZWUtY3JlYXRlL2VtcGxveWVlLWNyZWF0ZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/employee-create/employee-create.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/employee-create/employee-create.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<p>First Name:</p>\r\n<input id=\"firstName\" name=\"firstName\" class=\"form-control\"\r\n       required\r\n       [(ngModel)]=\"firstName\" #firstNameInput=\"ngModel\" >\r\n\r\n<div *ngIf=\"firstNameInput.invalid && (firstNameInput.dirty || firstNameInput.touched)\"\r\n     class=\"alert alert-danger\">\r\n  <div *ngIf=\"firstNameInput.errors.required\">\r\n    First Name is required.\r\n  </div>\r\n</div>\r\n\r\n<br>\r\n<p>Last Name:</p>\r\n<input id=\"lastName\" name=\"lastName\" class=\"form-control\"\r\n       required\r\n       [(ngModel)]=\"lastName\" #lastNameInput=\"ngModel\" >\r\n\r\n<div *ngIf=\"lastNameInput.invalid && (lastNameInput.dirty || lastNameInput.touched)\"\r\n     class=\"alert alert-danger\">\r\n  <div *ngIf=\"lastNameInput.errors.required\">\r\n    Last Name is required.\r\n  </div>\r\n</div>\r\n\r\n<br>\r\n<p>Department:</p>\r\n<input id=\"department\" name=\"department\" class=\"form-control\"\r\n       required\r\n       [(ngModel)]=\"department\" #departmentInput=\"ngModel\" >\r\n\r\n<div *ngIf=\"departmentInput.invalid && (departmentInput.dirty || departmentInput.touched)\"\r\n     class=\"alert alert-danger\">\r\n  <div *ngIf=\"departmentInput.errors.required\">\r\n    Department  is required.\r\n  </div>\r\n</div>\r\n\r\n<br>\r\n<p>Job:</p>\r\n<input id=\"job\" name=\"job\" class=\"form-control\"\r\n       required\r\n       [(ngModel)]=\"job\" #jobInput=\"ngModel\" >\r\n\r\n<div *ngIf=\"jobInput.invalid && (jobInput.dirty || jobInput.touched)\"\r\n     class=\"alert alert-danger\">\r\n  <div *ngIf=\"jobInput.errors.required\">\r\n    Job  is required.\r\n  </div>\r\n</div>\r\n\r\n<br>\r\n<button class=\"btn btn-primary\"\r\n        [disabled]=\"firstNameInput.invalid || lastNameInput.invalid || departmentInput.invalid || jobInput.invalid\"\r\n        (click)=\"onSubmitCreateEmployee()\" routerLink=\"/employee\">Create Employee</button>\r\n"

/***/ }),

/***/ "./src/app/components/employee-create/employee-create.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/employee-create/employee-create.component.ts ***!
  \*************************************************************************/
/*! exports provided: EmployeeCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeCreateComponent", function() { return EmployeeCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_employee_employee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/employee/employee.service */ "./src/app/models/employee/employee.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmployeeCreateComponent = /** @class */ (function () {
    function EmployeeCreateComponent(employeeService) {
        this.employeeService = employeeService;
        this.inputsEmpty = true;
        this.check();
    }
    EmployeeCreateComponent.prototype.ngOnInit = function () {
    };
    EmployeeCreateComponent.prototype.check = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.firstName != null && _this.lastName != null && _this.department != null && _this.job != null) {
                _this.inputsEmpty = false;
                _this.check();
            }
            else {
                _this.check();
            }
        }, 100);
    };
    EmployeeCreateComponent.prototype.onSubmitCreateEmployee = function () {
        this.employeeService.addEmployee(this.firstName, this.lastName, this.department, this.job)
            .subscribe(function (response) { return console.log(response); }, function (error) { return console.log(error); });
    };
    EmployeeCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employee-create',
            template: __webpack_require__(/*! ./employee-create.component.html */ "./src/app/components/employee-create/employee-create.component.html"),
            styles: [__webpack_require__(/*! ./employee-create.component.css */ "./src/app/components/employee-create/employee-create.component.css")]
        }),
        __metadata("design:paramtypes", [_models_employee_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"]])
    ], EmployeeCreateComponent);
    return EmployeeCreateComponent;
}());



/***/ }),

/***/ "./src/app/components/employee-details/employee-details.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/employee-details/employee-details.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW1wbG95ZWUtZGV0YWlscy9lbXBsb3llZS1kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/employee-details/employee-details.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/employee-details/employee-details.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br>\r\n<div class=\"row\">\r\n  <div class=\"col-sm\">\r\n    <h5>ID: {{ employee._id }}</h5>\r\n  </div>\r\n  <div class=\"col-sm-12\">\r\n    First Name:\r\n    {{ employee.firstName }}\r\n  </div>\r\n  <div class=\"col-sm-12\">\r\n    Last Name:\r\n    {{ employee.lastName }}\r\n  </div>\r\n  <div class=\"col-sm-12\">\r\n    Department:\r\n    {{ employee.department }}\r\n  </div>\r\n  <div class=\"col-sm-12\">\r\n    Job:\r\n    {{ employee.job }}\r\n  </div>\r\n  <div class=\"col-sm-12\">\r\n    <button class=\"btn btn-primary\" routerLink=\"/employee/edit/{{ employee._id }}\">Edit Employee</button>\r\n    <br>\r\n    <button class=\"btn btn-danger\" (click)=\"deleteEmployee(employee._id)\">Delete Employee</button>\r\n    <br>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/employee-details/employee-details.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/employee-details/employee-details.component.ts ***!
  \***************************************************************************/
/*! exports provided: EmployeeDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeDetailsComponent", function() { return EmployeeDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_employee_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/employee/employee.service */ "./src/app/models/employee/employee.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployeeDetailsComponent = /** @class */ (function () {
    function EmployeeDetailsComponent(route, employeeService, router) {
        this.route = route;
        this.employeeService = employeeService;
        this.router = router;
        this.employee = {
            '_id': 'null',
            'firstName': 'Loading',
            'lastName': 'Loading',
            'department': 'Loading',
            'job': 'Loading'
        };
        this.getEmployee();
    }
    EmployeeDetailsComponent.prototype.ngOnInit = function () {
    };
    EmployeeDetailsComponent.prototype.getEmployee = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.employeeService.getAEmployee(params['index'])
                .subscribe(function (response) {
                _this.employee = response;
            }, function (error) { return console.log(error); });
        });
    };
    EmployeeDetailsComponent.prototype.deleteEmployee = function () {
        var _this = this;
        this.employeeService.deleteEmployee(this.employee._id)
            .subscribe(function (response) { return _this.router.navigate(['/employee']); }, function (error) { return console.log(error); });
    };
    EmployeeDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employee-details',
            template: __webpack_require__(/*! ./employee-details.component.html */ "./src/app/components/employee-details/employee-details.component.html"),
            styles: [__webpack_require__(/*! ./employee-details.component.css */ "./src/app/components/employee-details/employee-details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _models_employee_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], EmployeeDetailsComponent);
    return EmployeeDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/employee-edit/employee-edit.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/employee-edit/employee-edit.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW1wbG95ZWUtZWRpdC9lbXBsb3llZS1lZGl0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/employee-edit/employee-edit.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/employee-edit/employee-edit.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<h1>ID: {{ index }}</h1>\r\n<br>\r\n<p>First Name:</p>\r\n<input id=\"firstName\" name=\"firstName\" class=\"form-control\"\r\n       required\r\n       [(ngModel)]=\"employee.firstName\" #firstNameInput=\"ngModel\" >\r\n\r\n<div *ngIf=\"firstNameInput.invalid && (firstNameInput.dirty || firstNameInput.touched)\"\r\n     class=\"alert alert-danger\">\r\n  <div *ngIf=\"firstNameInput.errors.required\">\r\n    First Name is required.\r\n  </div>\r\n</div>\r\n\r\n<br>\r\n<p>Last Name:</p>\r\n<input id=\"lastName\" name=\"lastName\" class=\"form-control\"\r\n       required\r\n       [(ngModel)]=\"employee.lastName\" #lastNameInput=\"ngModel\" >\r\n\r\n<div *ngIf=\"lastNameInput.invalid && (lastNameInput.dirty || lastNameInput.touched)\"\r\n     class=\"alert alert-danger\">\r\n  <div *ngIf=\"lastNameInput.errors.required\">\r\n    Last Name is required.\r\n  </div>\r\n</div>\r\n\r\n<br>\r\n<p>Department:</p>\r\n<input id=\"department\" name=\"department\" class=\"form-control\"\r\n       required\r\n       [(ngModel)]=\"employee.department\" #departmentInput=\"ngModel\" >\r\n\r\n<div *ngIf=\"departmentInput.invalid && (departmentInput.dirty || departmentInput.touched)\"\r\n     class=\"alert alert-danger\">\r\n  <div *ngIf=\"departmentInput.errors.required\">\r\n    Department  is required.\r\n  </div>\r\n</div>\r\n\r\n<br>\r\n<p>Job:</p>\r\n<input id=\"job\" name=\"job\" class=\"form-control\"\r\n       required\r\n       [(ngModel)]=\"employee.job\" #jobInput=\"ngModel\" >\r\n\r\n<div *ngIf=\"jobInput.invalid && (jobInput.dirty || jobInput.touched)\"\r\n     class=\"alert alert-danger\">\r\n  <div *ngIf=\"jobInput.errors.required\">\r\n    Job  is required.\r\n  </div>\r\n</div>\r\n\r\n<br>\r\n<button class=\"btn btn-primary\"\r\n        [disabled]=\"firstNameInput.invalid || lastNameInput.invalid || departmentInput.invalid || jobInput.invalid\"\r\n        (click)=\"onSubmitEditEmployee()\">Edit Employee</button>\r\n"

/***/ }),

/***/ "./src/app/components/employee-edit/employee-edit.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/employee-edit/employee-edit.component.ts ***!
  \*********************************************************************/
/*! exports provided: EmployeeEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeEditComponent", function() { return EmployeeEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_employee_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/employee/employee.service */ "./src/app/models/employee/employee.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployeeEditComponent = /** @class */ (function () {
    function EmployeeEditComponent(route, employeeService, router) {
        this.route = route;
        this.employeeService = employeeService;
        this.router = router;
        this.employee = {
            '_id': 'null',
            'firstName': 'Loading',
            'lastName': 'Loading',
            'department': 'Loading',
            'job': 'Loading'
        };
        this.getAEmployee();
    }
    EmployeeEditComponent.prototype.ngOnInit = function () {
    };
    EmployeeEditComponent.prototype.getAEmployee = function () {
        var _this = this;
        this.route.params.subscribe(function (param) {
            _this.employeeService.getAEmployee(param['index'])
                .subscribe(function (response) {
                _this.employee = response;
            }, function (error) { return console.log(error); });
        });
    };
    EmployeeEditComponent.prototype.onSubmitEditEmployee = function () {
        var _this = this;
        this.employeeService.editEmployee(this.employee._id, this.employee.firstName, this.employee.lastName, this.employee.department, this.employee.job)
            .subscribe(function (response) { return _this.router.navigate(['/employee']); });
    };
    EmployeeEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employee-edit',
            template: __webpack_require__(/*! ./employee-edit.component.html */ "./src/app/components/employee-edit/employee-edit.component.html"),
            styles: [__webpack_require__(/*! ./employee-edit.component.css */ "./src/app/components/employee-edit/employee-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _models_employee_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], EmployeeEditComponent);
    return EmployeeEditComponent;
}());



/***/ }),

/***/ "./src/app/components/employee-list/employee-list.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/employee-list/employee-list.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW1wbG95ZWUtbGlzdC9lbXBsb3llZS1saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/employee-list/employee-list.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/employee-list/employee-list.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-5\" (carSelected)=\"showDetails = true\">\r\n    <button class=\"btn btn-primary\" routerLink=\"/employee/create\" [routerLinkActive]=\"['active']\" href=\"#\">New\r\n      Employee\r\n    </button>\r\n    <table class=\"table table-hover\">\r\n      <thead>\r\n      <th>Index</th>\r\n      <th>First Name</th>\r\n      <th>Last Name</th>\r\n      </thead>\r\n      <tbody>\r\n      <tr\r\n        *ngFor=\"let employee of employees; let i = index\" [attr.data-index]=\"i\">\r\n        <td>{{ i + 1 }}</td>\r\n        <td>\r\n          <a\r\n            class=\"clearfix\"\r\n            routerLink=\"/employee/detail/{{ employee._id }}\"\r\n            [routerLinkActive]=\"['active']\"\r\n            href=\"#\"\r\n            (click)=\"onSelected()\"\r\n          >\r\n            {{ employee.firstName }}\r\n          </a>\r\n        </td>\r\n        <td>{{ employee.lastName }}</td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n  <div class=\"col-md-7\">\r\n    <app-employee-details\r\n      *ngIf=\"showDetails; else infoText\"\r\n    ></app-employee-details>\r\n    <ng-template #infoText><br>\r\n      <p>Please select a Employee for more details</p></ng-template>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/employee-list/employee-list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/employee-list/employee-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: EmployeeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeListComponent", function() { return EmployeeListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_employee_employee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/employee/employee.service */ "./src/app/models/employee/employee.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmployeeListComponent = /** @class */ (function () {
    function EmployeeListComponent(employeeService) {
        this.employeeService = employeeService;
        this.showEmployees();
        this.showDetails = false;
    }
    EmployeeListComponent.prototype.ngOnInit = function () {
    };
    EmployeeListComponent.prototype.onSelected = function () {
        this.showDetails = true;
    };
    EmployeeListComponent.prototype.showEmployees = function () {
        var _this = this;
        this.employeeService.getEmployees()
            .subscribe(function (response) {
            _this.employees = response.results;
        }, function (error) { return console.log(error); });
    };
    EmployeeListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employee-list',
            template: __webpack_require__(/*! ./employee-list.component.html */ "./src/app/components/employee-list/employee-list.component.html"),
            styles: [__webpack_require__(/*! ./employee-list.component.css */ "./src/app/components/employee-list/employee-list.component.css")]
        }),
        __metadata("design:paramtypes", [_models_employee_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"]])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n  <div class=\"container-fluid\">\r\n    <a class=\"navbar-brand\" routerLink=\"/home\" href=\"#\">{{ apptitle }}</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExample07\"\r\n            aria-controls=\"navbarsExample07\"\r\n            aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/home\" [routerLinkActive]=\"['active']\" href=\"#\">All Cars</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/employee\" [routerLinkActive]=\"['active']\" href=\"#\">All Employees</a>\r\n        </li>\r\n      </ul>\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n        <li>\r\n          <a (click)=\"logOut()\" style=\"cursor: pointer\"> Logout </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/components/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authenticationService) {
        this.authenticationService = authenticationService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.logOut = function () {
        this.authenticationService.logout();
        this.ngOnInit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HeaderComponent.prototype, "apptitle", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-5\">\r\n    <app-car-list\r\n      (carSelected)=\"showDetails = true\"></app-car-list>\r\n  </div>\r\n  <div class=\"col-md-7\">\r\n    <app-car-detail\r\n    *ngIf=\"showDetails; else infoText\"\r\n    ></app-car-detail>\r\n    <ng-template #infoText><br><p>Please select a Car for more details</p></ng-template>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/sold-by-edit/sold-by-edit.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/sold-by-edit/sold-by-edit.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc29sZC1ieS1lZGl0L3NvbGQtYnktZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/sold-by-edit/sold-by-edit.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/sold-by-edit/sold-by-edit.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-5\">\r\n    <h1>Chassis Number: {{ index }}</h1>\r\n    <p>Employee:</p>\r\n    <select id=\"employeeID\" name=\"employeeID\" class=\"form-control\"\r\n            required\r\n            [(ngModel)]=\"employeeID\" #employeeIDInput=\"ngModel\">\r\n      <option value=\"Select\">Select an Employee</option>\r\n      <option *ngFor=\"let employee of employees\" value=\"{{ employee._id }}\">\r\n        {{ employee.firstName + ' ' + employee.lastName }}\r\n      </option>\r\n    </select>\r\n    <br>\r\n    <button class=\"btn btn-primary\"\r\n            (click)=\"onSubmitEditSoldBy(employeeID)\">Edit Seller</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/sold-by-edit/sold-by-edit.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/sold-by-edit/sold-by-edit.component.ts ***!
  \*******************************************************************/
/*! exports provided: SoldByEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoldByEditComponent", function() { return SoldByEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_employee_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/employee/employee.service */ "./src/app/models/employee/employee.service.ts");
/* harmony import */ var _models_car_car_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/car/car.service */ "./src/app/models/car/car.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SoldByEditComponent = /** @class */ (function () {
    function SoldByEditComponent(route, employeeService, carService, router) {
        var _this = this;
        this.route = route;
        this.employeeService = employeeService;
        this.carService = carService;
        this.router = router;
        this.getEmployees();
        this.route.params.subscribe(function (params) {
            _this.index = params['index'];
        });
    }
    SoldByEditComponent.prototype.ngOnInit = function () {
    };
    SoldByEditComponent.prototype.getEmployees = function () {
        var _this = this;
        this.employeeService.getEmployees()
            .subscribe(function (response) {
            _this.employees = response.results;
        }, function (error) { return console.log(error); });
    };
    SoldByEditComponent.prototype.onSubmitEditSoldBy = function (id) {
        var _this = this;
        this.carService.editSoldBy(this.index, id)
            .subscribe(function (response) { return _this.router.navigate(['/home']); }, function (error) { return console.log(error); });
    };
    SoldByEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sold-by-edit',
            template: __webpack_require__(/*! ./sold-by-edit.component.html */ "./src/app/components/sold-by-edit/sold-by-edit.component.html"),
            styles: [__webpack_require__(/*! ./sold-by-edit.component.css */ "./src/app/components/sold-by-edit/sold-by-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _models_employee_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"], _models_car_car_service__WEBPACK_IMPORTED_MODULE_3__["CarService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SoldByEditComponent);
    return SoldByEditComponent;
}());



/***/ }),

/***/ "./src/app/models/car/car.service.ts":
/*!*******************************************!*\
  !*** ./src/app/models/car/car.service.ts ***!
  \*******************************************/
/*! exports provided: CarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarService", function() { return CarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_compat_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs-compat/add/operator/map */ "./node_modules/rxjs-compat/add/operator/map.js");
/* harmony import */ var rxjs_compat_add_operator_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_compat_add_operator_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/auth/auth.service */ "./src/app/components/auth/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _employee_employee_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../employee/employee.service */ "./src/app/models/employee/employee.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CarService = /** @class */ (function () {
    function CarService(http, authenticationService, employeeService) {
        this.http = http;
        this.authenticationService = authenticationService;
        this.employeeService = employeeService;
        this.headers = {
            headers: {
                'Content-Type': 'application/json',
                'X-Access-Token': this.authenticationService.getToken()
            }
        };
    }
    CarService.prototype.getCars = function () {
        return this.http.get('https://cardealer-api.herokuapp.com/car', this.headers);
    };
    CarService.prototype.getACar = function (chassisNumber) {
        return this.http.get('https://cardealer-api.herokuapp.com/car/' + chassisNumber, this.headers)
            .map(function (response) {
            return response.results[0];
        });
    };
    CarService.prototype.addCar = function (chassisNumber, brand, fuelType, typeCar) {
        return this.http.post('https://cardealer-api.herokuapp.com/car', {
            'chassisNumber': chassisNumber,
            'brand': brand,
            'fuelType': fuelType,
            'typeCar': typeCar
        }, this.headers);
    };
    CarService.prototype.editCar = function (chassisNumber, brand, fuelType, typeCar) {
        return this.http.put('https://cardealer-api.herokuapp.com/car', {
            'chassisNumber': chassisNumber,
            'newBrand': brand,
            'newFuelType': fuelType,
            'newTypeCar': typeCar
        }, this.headers);
    };
    CarService.prototype.deleteCar = function (chassisNumber) {
        return this.http.delete('https://cardealer-api.herokuapp.com/car/' + chassisNumber, this.headers);
    };
    CarService.prototype.addCustomer = function (chassisNumber, firstName, lastName, age, street, houseNumber, postalCode) {
        return this.http.post('https://cardealer-api.herokuapp.com/customer', {
            'chassisNumber': chassisNumber,
            'firstName': firstName,
            'lastName': lastName,
            'age': age,
            'street': street,
            'houseNumber': houseNumber,
            'postalCode': postalCode
        }, this.headers);
    };
    CarService.prototype.editCustomer = function (chassisNumber, firstName, lastName, age, street, houseNumber, postalCode) {
        return this.http.put('https://cardealer-api.herokuapp.com/customer', {
            'chassisNumber': chassisNumber,
            'newFirstName': firstName,
            'newLastName': lastName,
            'newAge': age,
            'newStreet': street,
            'newHouseNumber': houseNumber,
            'newPostalCode': postalCode
        }, this.headers);
    };
    CarService.prototype.deleteCustomer = function (chassisNumber) {
        return this.http.delete('https://cardealer-api.herokuapp.com/customer/' + chassisNumber, this.headers);
    };
    CarService.prototype.editSoldBy = function (chassisNumber, employeeID) {
        return this.http.put('https://cardealer-api.herokuapp.com/car/employee', {
            'chassisNumber': chassisNumber,
            'employeeID': employeeID
        }, this.headers);
    };
    CarService.prototype.deleteSoldBy = function (chassisNumber) {
        return this.http.delete('https://cardealer-api.herokuapp.com/car/employee/' + chassisNumber, this.headers);
    };
    CarService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _components_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _employee_employee_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeService"]])
    ], CarService);
    return CarService;
}());



/***/ }),

/***/ "./src/app/models/employee/employee.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/models/employee/employee.service.ts ***!
  \*****************************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_compat_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs-compat/add/operator/map */ "./node_modules/rxjs-compat/add/operator/map.js");
/* harmony import */ var rxjs_compat_add_operator_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_compat_add_operator_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/auth/auth.service */ "./src/app/components/auth/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmployeeService = /** @class */ (function () {
    function EmployeeService(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
        this.headers = {
            headers: {
                'Content-Type': 'application/json',
                'X-Access-Token': this.authenticationService.getToken()
            }
        };
    }
    EmployeeService.prototype.getEmployees = function () {
        return this.http.get('https://cardealer-api.herokuapp.com/employee', this.headers);
    };
    EmployeeService.prototype.getAEmployee = function (id) {
        return this.http.get('https://cardealer-api.herokuapp.com/employee/' + id, this.headers)
            .map(function (response) {
            return response.results[0];
        });
    };
    EmployeeService.prototype.addEmployee = function (firstName, lastName, department, job) {
        return this.http.post('https://cardealer-api.herokuapp.com/employee', {
            'firstName': firstName,
            'lastName': lastName,
            'department': department,
            'job': job
        }, this.headers);
    };
    EmployeeService.prototype.editEmployee = function (id, firstName, lastName, department, job) {
        return this.http.put('https://cardealer-api.herokuapp.com/employee', {
            'employeeID': id,
            'newFirstName': firstName,
            'newLastName': lastName,
            'newDepartment': department,
            'newJob': job
        }, this.headers);
    };
    EmployeeService.prototype.deleteEmployee = function (id) {
        return this.http.delete('https://cardealer-api.herokuapp.com/employee/' + id, this.headers);
    };
    EmployeeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _components_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], EmployeeService);
    return EmployeeService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\rickv\WebstormProjects\CarDealerAngulara\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map