webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<md-sidenav-container fullscreen class=\"demo-content\">\n  <md-sidenav mode=\"push\" #start>\n    <md-nav-list>\n      <a *ngFor=\"let navItem of navItems\"\n         md-list-item\n         (click)=\"start.close()\"\n         [routerLink]=\"[navItem.route]\">\n        {{navItem.name}}\n      </a>\n\n      <hr>\n    </md-nav-list>\n    <button md-button (click)=\"start.close()\">CLOSE</button>\n  </md-sidenav>\n  <div>\n    <md-toolbar color=\"primary\">\n      <button md-icon-button (click)=\"start.open()\">\n        <md-icon class=\"md-24\">menu</md-icon>\n      </button>\n      <div class=\"demo-toolbar\">\n        <h1>Doctor G</h1>\n       <!-- <button md-button (click)=\"toggleFullscreen()\" title=\"Toggle fullscreen\">\n          <i class=\"material-icons\">fullscreen</i> Fullscreen\n        </button>-->\n        <button md-button (click)=\"toggleAppointment()\" title=\"Appointment\">\n          <i class=\"material-icons\">event</i> Appointment\n        </button>\n        <button md-button (click)=\"toggleEpisode()\" title=\"Visit\">\n          <i class=\"material-icons\">folder_shared</i> Visit\n        </button>\n        <!-- <button md-button (click)=\"toggleMenu()\" title=\"Toggle Main Menu\">\n          <i class=\"material-icons\">apps</i> Menu\n        </button>\n      -->\n        <button md-button (click)=\"toggleMasterData()\" title=\"Master Data\">\n          <i class=\"material-icons\">folder_special</i> Master Data\n        </button>\n        <button md-button (click)=\"toggleBilling()\" title=\"Billing\">\n          <i class=\"material-icons\">attach_money</i> Billing\n        </button>\n\n        \n        <button md-button (click)=\"toggleLanding()\" title=\"Home\">\n          <i class=\"material-icons\">home</i> Home\n        </button>\n\n        <button md-button title=\"Login\"\n          *ngIf=\"!AuthService.isAuthenticated()\"\n          (click)=\"AuthService.login()\">\n          <i class=\"material-icons\">fingerprint</i> Login\n        </button>\n\n        <button md-button title=\"Logout\"\n          *ngIf=\"AuthService.isAuthenticated()\"\n          (click)=\"AuthService.logout()\">\n          <i class=\"material-icons\">lock</i> Logout\n        </button>\n\n\n      </div>\n    </md-toolbar>\n\n    <div class=\"demo-content-inner\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</md-sidenav-container>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DialogResultExampleDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(AuthService, _element, dialog, router) {
        this.AuthService = AuthService;
        this._element = _element;
        this.dialog = dialog;
        this.router = router;
        this.navItems = [
            { name: 'Home', route: 'landing' },
            { name: 'Patient', route: 'patient' },
            { name: 'Medical Calculator', route: 'card' }
        ];
        AuthService.handleAuthentication();
    }
    AppComponent.prototype.toggleMenu = function () {
        var _this = this;
        var dialogRef = this.dialog.open(DialogResultExampleDialog);
        dialogRef.afterClosed().subscribe(function (result) {
            _this.selectedOption = result;
        });
    };
    AppComponent.prototype.toggleMasterData = function () {
        this.router.navigate(['/master-data']);
    };
    AppComponent.prototype.toggleLanding = function () {
        this.router.navigate(['/landing']);
    };
    AppComponent.prototype.toggleBilling = function () {
        this.router.navigate(['/billing']);
    };
    AppComponent.prototype.toggleAppointment = function () {
        this.router.navigate(['/appointment']);
    };
    AppComponent.prototype.toggleEpisode = function () {
        this.router.navigate(['/visit-overview']);
    };
    AppComponent.prototype.toggleFullscreen = function () {
        var elem = this._element.nativeElement.querySelector('.demo-content');
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        }
        else if (elem.webkitRequestFullScreen) {
            elem.webkitRequestFullScreen();
        }
        else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        }
        else if (elem.msRequestFullScreen) {
            elem.msRequestFullScreen();
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdDialog */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _d || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b, _c, _d;
}());

var DialogResultExampleDialog = (function () {
    function DialogResultExampleDialog(dialogRef) {
        this.dialogRef = dialogRef;
        this.Items = [
            { name: 'Billing', route: 'billing' },
            { name: 'Medical Record', route: 'card' },
            { name: 'Medical Calculator', route: 'card' },
            { name: 'User Profile', route: 'profile' }
        ];
    }
    DialogResultExampleDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dialog-result-example-dialog',
            template: __webpack_require__("../../../../../src/app/dialog-result-example-dialog.html"),
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MdDialogRef */]) === "function" && _a || Object])
    ], DialogResultExampleDialog);
    return DialogResultExampleDialog;
    var _a;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export authHttpServiceFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__visit_visit_component__ = __webpack_require__("../../../../../src/app/visit/visit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_GDService_service__ = __webpack_require__("../../../../../src/app/services/GDService.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__masterData_speciality_speciality_component__ = __webpack_require__("../../../../../src/app/masterData/speciality/speciality.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_SpeechRecognitionService__ = __webpack_require__("../../../../../src/app/services/SpeechRecognitionService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_masterdata_service__ = __webpack_require__("../../../../../src/app/services/masterdata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_EventService__ = __webpack_require__("../../../../../src/app/services/EventService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_NodeService__ = __webpack_require__("../../../../../src/app/services/NodeService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_app_service__ = __webpack_require__("../../../../../src/app/services/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_carService__ = __webpack_require__("../../../../../src/app/services/carService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_cdk_table__ = __webpack_require__("../../../cdk/@angular/cdk/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_flex_layout__ = __webpack_require__("../../../flex-layout/@angular/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_devextreme_angular__ = __webpack_require__("../../../../devextreme-angular/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_devextreme_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_devextreme_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__patient_patient_component__ = __webpack_require__("../../../../../src/app/patient/patient.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__episode_vital_vital_component__ = __webpack_require__("../../../../../src/app/episode/vital/vital.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__inventory_inventory_component__ = __webpack_require__("../../../../../src/app/inventory/inventory.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__inventory_item_inventory_item_component__ = __webpack_require__("../../../../../src/app/inventory-item/inventory-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__user_user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__episode_episode_component__ = __webpack_require__("../../../../../src/app/episode/episode.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__episode_document_document_component__ = __webpack_require__("../../../../../src/app/episode/document/document.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__episode_radiology_radiology_component__ = __webpack_require__("../../../../../src/app/episode/radiology/radiology.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__episode_laboratory_laboratory_component__ = __webpack_require__("../../../../../src/app/episode/laboratory/laboratory.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__episode_medication_medication_component__ = __webpack_require__("../../../../../src/app/episode/medication/medication.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__episode_timeline_timeline_component__ = __webpack_require__("../../../../../src/app/episode/timeline/timeline.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__episode_diagnosis_diagnosis_component__ = __webpack_require__("../../../../../src/app/episode/diagnosis/diagnosis.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__episode_vital_signs_vital_signs_component__ = __webpack_require__("../../../../../src/app/episode/vital-signs/vital-signs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__appointment_appointment_component__ = __webpack_require__("../../../../../src/app/appointment/appointment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38_ng2_google_charts__ = __webpack_require__("../../../../ng2-google-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38_ng2_google_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_38_ng2_google_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_39_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__masterData_department_department_component__ = __webpack_require__("../../../../../src/app/masterData/department/department.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__masterData_insurance_insurance_component__ = __webpack_require__("../../../../../src/app/masterData/insurance/insurance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__masterData_payor_payor_component__ = __webpack_require__("../../../../../src/app/masterData/payor/payor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__masterData_mohvisit_type_mohvisit_type_component__ = __webpack_require__("../../../../../src/app/masterData/mohvisit-type/mohvisit-type.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__masterData_purpose_of_visit_purpose_of_visit_component__ = __webpack_require__("../../../../../src/app/masterData/purpose-of-visit/purpose-of-visit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__masterData_master_data_component__ = __webpack_require__("../../../../../src/app/masterData/master-data.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__masterData_inventory_brand_inventory_brand_component__ = __webpack_require__("../../../../../src/app/masterData/inventory-brand/inventory-brand.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__masterData_inventory_generic_inventory_generic_component__ = __webpack_require__("../../../../../src/app/masterData/inventory-generic/inventory-generic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__masterData_inventory_atc_inventory_atc_component__ = __webpack_require__("../../../../../src/app/masterData/inventory-atc/inventory-atc.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__masterData_inventory_category_inventory_category_component__ = __webpack_require__("../../../../../src/app/masterData/inventory-category/inventory-category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__masterData_inventory_subcategory_inventory_subcategory_component__ = __webpack_require__("../../../../../src/app/masterData/inventory-subcategory/inventory-subcategory.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__masterData_inventory_medicationclass_inventory_medicationclass_component__ = __webpack_require__("../../../../../src/app/masterData/inventory-medicationclass/inventory-medicationclass.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__masterData_inventory_pregnancycategory_inventory_pregnancycategory_component__ = __webpack_require__("../../../../../src/app/masterData/inventory-pregnancycategory/inventory-pregnancycategory.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__masterData_diagnosis_master_diagnosis_master_component__ = __webpack_require__("../../../../../src/app/masterData/diagnosis-master/diagnosis-master.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__landing_landing_component__ = __webpack_require__("../../../../../src/app/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__episode_procedure_procedure_component__ = __webpack_require__("../../../../../src/app/episode/procedure/procedure.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__masterData_price_structure_price_structure_component__ = __webpack_require__("../../../../../src/app/masterData/price-structure/price-structure.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__masterData_inventory_price_structure_inventory_price_structure_component__ = __webpack_require__("../../../../../src/app/masterData/inventory-price-structure/inventory-price-structure.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__auth0_user_profile_auth0_user_profile_component__ = __webpack_require__("../../../../../src/app/auth0-user-profile/auth0-user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__billing_billing_component__ = __webpack_require__("../../../../../src/app/billing/billing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__charge_item_charge_item_component__ = __webpack_require__("../../../../../src/app/charge-item/charge-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__self_service_self_service_component__ = __webpack_require__("../../../../../src/app/self-service/self-service.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__visit_overview_visit_overview_component__ = __webpack_require__("../../../../../src/app/visit-overview/visit-overview.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























//Project Component
















//Third Party Component

































var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_54__landing_landing_component__["a" /* LandingComponent */] },
    { path: 'landing', component: __WEBPACK_IMPORTED_MODULE_54__landing_landing_component__["a" /* LandingComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_58__auth0_user_profile_auth0_user_profile_component__["a" /* Auth0UserProfileComponent */] },
    { path: 'appointment', component: __WEBPACK_IMPORTED_MODULE_37__appointment_appointment_component__["a" /* AppointmentComponent */] },
    { path: 'patient', component: __WEBPACK_IMPORTED_MODULE_24__patient_patient_component__["a" /* PatientComponent */] },
    { path: 'patient/:id', component: __WEBPACK_IMPORTED_MODULE_24__patient_patient_component__["a" /* PatientComponent */] },
    { path: 'visit', component: __WEBPACK_IMPORTED_MODULE_0__visit_visit_component__["a" /* VisitComponent */] },
    { path: 'visit-overview', component: __WEBPACK_IMPORTED_MODULE_62__visit_overview_visit_overview_component__["a" /* VisitOverviewComponent */] },
    { path: 'visit/:id', component: __WEBPACK_IMPORTED_MODULE_0__visit_visit_component__["a" /* VisitComponent */] },
    { path: 'vital', component: __WEBPACK_IMPORTED_MODULE_25__episode_vital_vital_component__["a" /* VitalComponent */] },
    { path: 'charge-item', component: __WEBPACK_IMPORTED_MODULE_60__charge_item_charge_item_component__["a" /* ChargeItemComponent */] },
    { path: 'charge-item/:id', component: __WEBPACK_IMPORTED_MODULE_60__charge_item_charge_item_component__["a" /* ChargeItemComponent */] },
    { path: 'user', component: __WEBPACK_IMPORTED_MODULE_28__user_user_component__["a" /* UserComponent */] },
    { path: 'user/:id', component: __WEBPACK_IMPORTED_MODULE_28__user_user_component__["a" /* UserComponent */] },
    { path: 'episode', component: __WEBPACK_IMPORTED_MODULE_29__episode_episode_component__["a" /* EpisodeComponent */] },
    { path: 'episode/:id', component: __WEBPACK_IMPORTED_MODULE_29__episode_episode_component__["a" /* EpisodeComponent */] },
    { path: 'master-data', component: __WEBPACK_IMPORTED_MODULE_45__masterData_master_data_component__["a" /* MasterDataComponent */] },
    { path: 'payor', component: __WEBPACK_IMPORTED_MODULE_42__masterData_payor_payor_component__["a" /* PayorComponent */] },
    { path: 'payor/:id', component: __WEBPACK_IMPORTED_MODULE_42__masterData_payor_payor_component__["a" /* PayorComponent */] },
    { path: 'mohvisit-type', component: __WEBPACK_IMPORTED_MODULE_43__masterData_mohvisit_type_mohvisit_type_component__["a" /* MOHVisitTypeComponent */] },
    { path: 'mohvisit-type/:id', component: __WEBPACK_IMPORTED_MODULE_43__masterData_mohvisit_type_mohvisit_type_component__["a" /* MOHVisitTypeComponent */] },
    { path: 'insurance', component: __WEBPACK_IMPORTED_MODULE_41__masterData_insurance_insurance_component__["a" /* InsuranceComponent */] },
    { path: 'insurance/:id', component: __WEBPACK_IMPORTED_MODULE_41__masterData_insurance_insurance_component__["a" /* InsuranceComponent */] },
    { path: 'purpose-of-visit', component: __WEBPACK_IMPORTED_MODULE_44__masterData_purpose_of_visit_purpose_of_visit_component__["a" /* PurposeOfVisitComponent */] },
    { path: 'purpose-of-visit/:id', component: __WEBPACK_IMPORTED_MODULE_44__masterData_purpose_of_visit_purpose_of_visit_component__["a" /* PurposeOfVisitComponent */] },
    { path: 'department', component: __WEBPACK_IMPORTED_MODULE_40__masterData_department_department_component__["a" /* DepartmentComponent */] },
    { path: 'department/:id', component: __WEBPACK_IMPORTED_MODULE_40__masterData_department_department_component__["a" /* DepartmentComponent */] },
    { path: 'inventory-atc', component: __WEBPACK_IMPORTED_MODULE_48__masterData_inventory_atc_inventory_atc_component__["a" /* InventoryAtcComponent */] },
    { path: 'inventory-atc/:id', component: __WEBPACK_IMPORTED_MODULE_48__masterData_inventory_atc_inventory_atc_component__["a" /* InventoryAtcComponent */] },
    { path: 'inventory-brand', component: __WEBPACK_IMPORTED_MODULE_46__masterData_inventory_brand_inventory_brand_component__["a" /* InventoryBrandComponent */] },
    { path: 'inventory-brand/:id', component: __WEBPACK_IMPORTED_MODULE_46__masterData_inventory_brand_inventory_brand_component__["a" /* InventoryBrandComponent */] },
    { path: 'inventory-category', component: __WEBPACK_IMPORTED_MODULE_49__masterData_inventory_category_inventory_category_component__["a" /* InventoryCategoryComponent */] },
    { path: 'inventory-category/:id', component: __WEBPACK_IMPORTED_MODULE_49__masterData_inventory_category_inventory_category_component__["a" /* InventoryCategoryComponent */] },
    { path: 'inventory-generic', component: __WEBPACK_IMPORTED_MODULE_47__masterData_inventory_generic_inventory_generic_component__["a" /* InventoryGenericComponent */] },
    { path: 'inventory-generic/:id', component: __WEBPACK_IMPORTED_MODULE_47__masterData_inventory_generic_inventory_generic_component__["a" /* InventoryGenericComponent */] },
    { path: 'inventory-medicationclass', component: __WEBPACK_IMPORTED_MODULE_51__masterData_inventory_medicationclass_inventory_medicationclass_component__["a" /* InventoryMedicationclassComponent */] },
    { path: 'inventory-medicationclass/:id', component: __WEBPACK_IMPORTED_MODULE_51__masterData_inventory_medicationclass_inventory_medicationclass_component__["a" /* InventoryMedicationclassComponent */] },
    { path: 'inventory-pregnancycategory', component: __WEBPACK_IMPORTED_MODULE_52__masterData_inventory_pregnancycategory_inventory_pregnancycategory_component__["a" /* InventoryPregnancycategoryComponent */] },
    { path: 'inventory-pregnancycategory/:id', component: __WEBPACK_IMPORTED_MODULE_52__masterData_inventory_pregnancycategory_inventory_pregnancycategory_component__["a" /* InventoryPregnancycategoryComponent */] },
    { path: 'inventory-subcategory', component: __WEBPACK_IMPORTED_MODULE_50__masterData_inventory_subcategory_inventory_subcategory_component__["a" /* InventorySubcategoryComponent */] },
    { path: 'inventory-subcategory/:id', component: __WEBPACK_IMPORTED_MODULE_50__masterData_inventory_subcategory_inventory_subcategory_component__["a" /* InventorySubcategoryComponent */] },
    { path: 'speciality', component: __WEBPACK_IMPORTED_MODULE_4__masterData_speciality_speciality_component__["a" /* SpecialityComponent */] },
    { path: 'speciality/:id', component: __WEBPACK_IMPORTED_MODULE_4__masterData_speciality_speciality_component__["a" /* SpecialityComponent */] },
    { path: 'Appointment', component: __WEBPACK_IMPORTED_MODULE_37__appointment_appointment_component__["a" /* AppointmentComponent */] },
    { path: 'Appointment/:id', component: __WEBPACK_IMPORTED_MODULE_37__appointment_appointment_component__["a" /* AppointmentComponent */] },
    { path: 'Diagnosis-master', component: __WEBPACK_IMPORTED_MODULE_53__masterData_diagnosis_master_diagnosis_master_component__["a" /* DiagnosisMasterComponent */] },
    { path: 'Diagnosis-master/:id', component: __WEBPACK_IMPORTED_MODULE_53__masterData_diagnosis_master_diagnosis_master_component__["a" /* DiagnosisMasterComponent */] },
    { path: 'price-structure', component: __WEBPACK_IMPORTED_MODULE_56__masterData_price_structure_price_structure_component__["a" /* PriceStructureComponent */] },
    { path: 'billing', component: __WEBPACK_IMPORTED_MODULE_59__billing_billing_component__["a" /* BillingComponent */] },
    { path: 'price-structure/:id', component: __WEBPACK_IMPORTED_MODULE_56__masterData_price_structure_price_structure_component__["a" /* PriceStructureComponent */] },
    { path: 'inventory-price-structure', component: __WEBPACK_IMPORTED_MODULE_57__masterData_inventory_price_structure_inventory_price_structure_component__["a" /* InventoryPriceStructureComponent */] },
    { path: 'inventory-price-structure/:id', component: __WEBPACK_IMPORTED_MODULE_57__masterData_inventory_price_structure_inventory_price_structure_component__["a" /* InventoryPriceStructureComponent */] },
];
function authHttpServiceFactory(http, options) {
    return new __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["AuthHttp"](new __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["AuthConfig"]({
        tokenGetter: (function () { return localStorage.getItem('access_token'); })
    }), http, options);
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_16__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_20__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_24__patient_patient_component__["a" /* PatientComponent */],
                __WEBPACK_IMPORTED_MODULE_0__visit_visit_component__["a" /* VisitComponent */],
                __WEBPACK_IMPORTED_MODULE_25__episode_vital_vital_component__["a" /* VitalComponent */],
                __WEBPACK_IMPORTED_MODULE_26__inventory_inventory_component__["a" /* InventoryComponent */], __WEBPACK_IMPORTED_MODULE_50__masterData_inventory_subcategory_inventory_subcategory_component__["a" /* InventorySubcategoryComponent */], __WEBPACK_IMPORTED_MODULE_52__masterData_inventory_pregnancycategory_inventory_pregnancycategory_component__["a" /* InventoryPregnancycategoryComponent */],
                __WEBPACK_IMPORTED_MODULE_27__inventory_item_inventory_item_component__["a" /* InventoryItemComponent */], __WEBPACK_IMPORTED_MODULE_51__masterData_inventory_medicationclass_inventory_medicationclass_component__["a" /* InventoryMedicationclassComponent */], __WEBPACK_IMPORTED_MODULE_47__masterData_inventory_generic_inventory_generic_component__["a" /* InventoryGenericComponent */],
                __WEBPACK_IMPORTED_MODULE_28__user_user_component__["a" /* UserComponent */], __WEBPACK_IMPORTED_MODULE_49__masterData_inventory_category_inventory_category_component__["a" /* InventoryCategoryComponent */], __WEBPACK_IMPORTED_MODULE_46__masterData_inventory_brand_inventory_brand_component__["a" /* InventoryBrandComponent */], __WEBPACK_IMPORTED_MODULE_48__masterData_inventory_atc_inventory_atc_component__["a" /* InventoryAtcComponent */],
                __WEBPACK_IMPORTED_MODULE_29__episode_episode_component__["a" /* EpisodeComponent */],
                __WEBPACK_IMPORTED_MODULE_30__episode_document_document_component__["a" /* DocumentComponent */],
                __WEBPACK_IMPORTED_MODULE_31__episode_radiology_radiology_component__["b" /* RadiologyComponent */],
                __WEBPACK_IMPORTED_MODULE_32__episode_laboratory_laboratory_component__["b" /* LaboratoryComponent */],
                __WEBPACK_IMPORTED_MODULE_33__episode_medication_medication_component__["b" /* MedicationComponent */],
                __WEBPACK_IMPORTED_MODULE_34__episode_timeline_timeline_component__["a" /* TimelineComponent */],
                __WEBPACK_IMPORTED_MODULE_35__episode_diagnosis_diagnosis_component__["a" /* DiagnosisComponent */], __WEBPACK_IMPORTED_MODULE_31__episode_radiology_radiology_component__["a" /* DialogResultRadiologySearch */], __WEBPACK_IMPORTED_MODULE_32__episode_laboratory_laboratory_component__["a" /* DialogResultLaboratorySearch */], __WEBPACK_IMPORTED_MODULE_55__episode_procedure_procedure_component__["a" /* DialogResultProcedureSearch */], __WEBPACK_IMPORTED_MODULE_33__episode_medication_medication_component__["a" /* DialogResultMedicationSearch */],
                __WEBPACK_IMPORTED_MODULE_36__episode_vital_signs_vital_signs_component__["a" /* VitalSignsComponent */], __WEBPACK_IMPORTED_MODULE_20__app_component__["b" /* DialogResultExampleDialog */], __WEBPACK_IMPORTED_MODULE_37__appointment_appointment_component__["a" /* AppointmentComponent */], __WEBPACK_IMPORTED_MODULE_40__masterData_department_department_component__["a" /* DepartmentComponent */], __WEBPACK_IMPORTED_MODULE_41__masterData_insurance_insurance_component__["a" /* InsuranceComponent */], __WEBPACK_IMPORTED_MODULE_42__masterData_payor_payor_component__["a" /* PayorComponent */], __WEBPACK_IMPORTED_MODULE_43__masterData_mohvisit_type_mohvisit_type_component__["a" /* MOHVisitTypeComponent */], __WEBPACK_IMPORTED_MODULE_44__masterData_purpose_of_visit_purpose_of_visit_component__["a" /* PurposeOfVisitComponent */], __WEBPACK_IMPORTED_MODULE_45__masterData_master_data_component__["a" /* MasterDataComponent */], __WEBPACK_IMPORTED_MODULE_46__masterData_inventory_brand_inventory_brand_component__["a" /* InventoryBrandComponent */], __WEBPACK_IMPORTED_MODULE_47__masterData_inventory_generic_inventory_generic_component__["a" /* InventoryGenericComponent */], __WEBPACK_IMPORTED_MODULE_48__masterData_inventory_atc_inventory_atc_component__["a" /* InventoryAtcComponent */], __WEBPACK_IMPORTED_MODULE_49__masterData_inventory_category_inventory_category_component__["a" /* InventoryCategoryComponent */], __WEBPACK_IMPORTED_MODULE_50__masterData_inventory_subcategory_inventory_subcategory_component__["a" /* InventorySubcategoryComponent */], __WEBPACK_IMPORTED_MODULE_51__masterData_inventory_medicationclass_inventory_medicationclass_component__["a" /* InventoryMedicationclassComponent */], __WEBPACK_IMPORTED_MODULE_52__masterData_inventory_pregnancycategory_inventory_pregnancycategory_component__["a" /* InventoryPregnancycategoryComponent */], __WEBPACK_IMPORTED_MODULE_4__masterData_speciality_speciality_component__["a" /* SpecialityComponent */], __WEBPACK_IMPORTED_MODULE_53__masterData_diagnosis_master_diagnosis_master_component__["a" /* DiagnosisMasterComponent */], __WEBPACK_IMPORTED_MODULE_54__landing_landing_component__["a" /* LandingComponent */], __WEBPACK_IMPORTED_MODULE_55__episode_procedure_procedure_component__["b" /* ProcedureComponent */], __WEBPACK_IMPORTED_MODULE_56__masterData_price_structure_price_structure_component__["a" /* PriceStructureComponent */], __WEBPACK_IMPORTED_MODULE_57__masterData_inventory_price_structure_inventory_price_structure_component__["a" /* InventoryPriceStructureComponent */], __WEBPACK_IMPORTED_MODULE_58__auth0_user_profile_auth0_user_profile_component__["a" /* Auth0UserProfileComponent */], __WEBPACK_IMPORTED_MODULE_59__billing_billing_component__["a" /* BillingComponent */], __WEBPACK_IMPORTED_MODULE_60__charge_item_charge_item_component__["a" /* ChargeItemComponent */], __WEBPACK_IMPORTED_MODULE_61__self_service_self_service_component__["a" /* SelfServiceComponent */], __WEBPACK_IMPORTED_MODULE_62__visit_overview_visit_overview_component__["a" /* VisitOverviewComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_17__angular_forms__["FormsModule"], __WEBPACK_IMPORTED_MODULE_17__angular_forms__["ReactiveFormsModule"], __WEBPACK_IMPORTED_MODULE_11__angular_material__["d" /* MdChipsModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_http__["HttpModule"], __WEBPACK_IMPORTED_MODULE_19__angular_router__["RouterModule"].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["c" /* MaterialModule */], __WEBPACK_IMPORTED_MODULE_39_primeng_primeng__["MenuModule"], __WEBPACK_IMPORTED_MODULE_11__angular_material__["g" /* MdNativeDateModule */], __WEBPACK_IMPORTED_MODULE_11__angular_material__["j" /* MdTableModule */], __WEBPACK_IMPORTED_MODULE_12__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_21__angular_flex_layout__["a" /* FlexLayoutModule */], __WEBPACK_IMPORTED_MODULE_39_primeng_primeng__["GrowlModule"], __WEBPACK_IMPORTED_MODULE_39_primeng_primeng__["TieredMenuModule"],
                __WEBPACK_IMPORTED_MODULE_39_primeng_primeng__["InputMaskModule"], __WEBPACK_IMPORTED_MODULE_39_primeng_primeng__["ChipsModule"], __WEBPACK_IMPORTED_MODULE_39_primeng_primeng__["EditorModule"], __WEBPACK_IMPORTED_MODULE_39_primeng_primeng__["SharedModule"], __WEBPACK_IMPORTED_MODULE_39_primeng_primeng__["CheckboxModule"],
                __WEBPACK_IMPORTED_MODULE_38_ng2_google_charts__["Ng2GoogleChartsModule"], __WEBPACK_IMPORTED_MODULE_39_primeng_primeng__["TreeTableModule"], __WEBPACK_IMPORTED_MODULE_39_primeng_primeng__["DataTableModule"], __WEBPACK_IMPORTED_MODULE_39_primeng_primeng__["DialogModule"], __WEBPACK_IMPORTED_MODULE_39_primeng_primeng__["ScheduleModule"], __WEBPACK_IMPORTED_MODULE_39_primeng_primeng__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_22_devextreme_angular__["DxCheckBoxModule"], __WEBPACK_IMPORTED_MODULE_22_devextreme_angular__["DxSelectBoxModule"], __WEBPACK_IMPORTED_MODULE_22_devextreme_angular__["DxTextBoxModule"], __WEBPACK_IMPORTED_MODULE_22_devextreme_angular__["DxTemplateModule"], __WEBPACK_IMPORTED_MODULE_22_devextreme_angular__["DxBoxModule"], __WEBPACK_IMPORTED_MODULE_22_devextreme_angular__["DxTextAreaModule"], __WEBPACK_IMPORTED_MODULE_22_devextreme_angular__["DxChartModule"], __WEBPACK_IMPORTED_MODULE_22_devextreme_angular__["DxTreeMapModule"],
                __WEBPACK_IMPORTED_MODULE_22_devextreme_angular__["DxDataGridModule"], __WEBPACK_IMPORTED_MODULE_13__angular_common__["CommonModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__services_NodeService__["a" /* NodeService */], __WEBPACK_IMPORTED_MODULE_10__services_carService__["a" /* CarService */], __WEBPACK_IMPORTED_MODULE_7__services_EventService__["a" /* EventService */], __WEBPACK_IMPORTED_MODULE_6__services_masterdata_service__["a" /* MasterDataService */], __WEBPACK_IMPORTED_MODULE_5__services_SpeechRecognitionService__["a" /* SpeechRecognitionService */], __WEBPACK_IMPORTED_MODULE_9__services_app_service__["b" /* Service */], __WEBPACK_IMPORTED_MODULE_9__services_app_service__["a" /* Company */], __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__services_GDService_service__["a" /* GDService */],
                __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["AuthHttp"],
                    useFactory: authHttpServiceFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_18__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_18__angular_http__["RequestOptions"]]
                }
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_20__app_component__["b" /* DialogResultExampleDialog */], __WEBPACK_IMPORTED_MODULE_31__episode_radiology_radiology_component__["a" /* DialogResultRadiologySearch */], __WEBPACK_IMPORTED_MODULE_55__episode_procedure_procedure_component__["a" /* DialogResultProcedureSearch */], __WEBPACK_IMPORTED_MODULE_32__episode_laboratory_laboratory_component__["a" /* DialogResultLaboratorySearch */], __WEBPACK_IMPORTED_MODULE_33__episode_medication_medication_component__["a" /* DialogResultMedicationSearch */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_20__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/appointment/appointment.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/appointment/appointment.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\n    <md-card>\n      <md-card-header>\n        <md-card-title>Appointment</md-card-title>\n      </md-card-header>\n      <md-card-content>\n \n    \n        <md-select multiple=\"true\" multiple=\"true\" placeholder=\"Doctor List\" name=\"DoctorList\" class=\"input-full-width\" >\n            <md-option *ngFor=\"let doctor of doctors\" [value]=\"doctor.dgUserID\">\n                {{doctor.userFullName}}\n            </md-option>\n        </md-select>\n\n    <p-schedule [height]=\"500\" [events]=\"events\" [header]=\"header\" [eventLimit]=\"4\" [editable]=\"true\" [eventDurationEditable]=\"true\"\n                (onDayClick)=\"handleDayClick($event)\" (onEventClick)=\"handleEventClick($event)\"></p-schedule>\n\n    <p-dialog header=\"Appointment Details\" [(visible)]=\"dialogVisible\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"false\" [contentStyle]=\"{'overflow':'visible'}\"\n        [style]=\"{'overflow':'visible'}\" [resizable]=\"true\" >\n        <div class=\"ui-grid ui-grid-responsive ui-fluid\" *ngIf=\"event\">\n            <div class=\"ui-grid-row\">\n                <md-form-field class=\"input-full-width\">\n                    <input mdInput placeholder=\"Title\" id=\"title\" [(ngModel)]=\"event.title\" >\n                </md-form-field>\n            </div>\n            <div class=\"ui-grid-row\">\n                <md-form-field class=\"input-full-width\">\n                    <input mdInput (change)=\"onDateChanged()\" type=\"datetime-local\" [(ngModel)]=\"event.start\" placeholder=\"Start\" name=\"start\">\n                </md-form-field>      \n                <md-form-field class=\"input-full-width\">\n                    <input mdInput (change)=\"onDateChanged()\" type=\"datetime-local\" [(ngModel)]=\"event.end\" placeholder=\"End\" name=\"end\">\n                </md-form-field>    \n                <md-form-field class=\"input-full-width\">\n                    <input mdInput (change)=\"onDurationChanged()\" type=\"number\" [(ngModel)]=\"event.duration\" placeholder=\"Duration(Minutes)\" name=\"Duration\">\n                </md-form-field>\n            </div>\n            <div class=\"ui-grid-row\">\n\n                <md-select placeholder=\"Purpose of Visit\" name=\"Purpose\" class=\"input-full-width\" [(ngModel)]=\"event.visitPurposeID\">\n                    <md-option *ngFor=\"let Purpose of purposeOfVisits\" [value]=\"Purpose.visitPurposeID\">\n                        {{Purpose.visitPurposeName}}\n                    </md-option>\n                </md-select>\n                <md-checkbox [(ngModel)]=\"event.allDay\" name=\"allday\">All Day</md-checkbox>\n            </div>\n            <div class=\"ui-grid-row\">\n              <md-form-field class=\"input-full-width\">\n                <input mdInput placeholder=\"Visit Doctor\" [mdAutocomplete]=\"reactiveDoctor\" [formControl]=\"doctorCtrl\"  [(ngModel)]=\"event.visitDoctorID\" name=\"dgUserID\">\n              </md-form-field>\n\n              <md-autocomplete #reactiveDoctor=\"mdAutocomplete\" [displayWith]=\"displayDoctorFn\">\n                <md-option *ngFor=\"let doctor of filteredDoctors | async\" [value]=\"doctor\">\n                  <span>{{ doctor.userFullName }}, </span>\n                  <small><strong>Initial:</strong>{{doctor.userInitial}}, <strong>Speciality:</strong>{{doctor.specialityID}}</small>\n                </md-option>\n              </md-autocomplete>\n            </div>\n\n            <div class=\"ui-grid-row\">\n                <md-form-field class=\"input-half-width\">\n                    <input mdInput  [(ngModel)]=\"event.mobile\" placeholder=\"Mobile\" name=\"mobile\">\n                </md-form-field>\n                <md-form-field class=\"input-half-width\">\n                    <input mdInput  [(ngModel)]=\"event.phone\" placeholder=\"Phone\" name=\"phone\">\n                </md-form-field>\n                <md-form-field class=\"input-full-width\">\n                    <input mdInput  [(ngModel)]=\"event.email\" placeholder=\"Email\" name=\"email\">\n                </md-form-field>\n            </div>\n            <div class=\"ui-grid-row\">\n\n                <md-form-field class=\"input-full-width\">\n                <input mdInput placeholder=\"Patient (Registered)\" [mdAutocomplete]=\"reactivePatient\" [formControl]=\"patientCtrl\"  [(ngModel)]=\"event.patientID\" name=\"patientID\">\n                </md-form-field>\n\n                <md-autocomplete #reactivePatient=\"mdAutocomplete\" [displayWith]=\"displayPatientFn\">\n                <md-option *ngFor=\"let patient of filteredPatients | async\" [value]=\"patient\">\n                    <span>{{patient.name}}, </span>\n                    <small><strong>NRIC:</strong>{{patient.identificationValue}}, <strong>Gender:</strong>{{patient.gender}}, <strong>D.O.B:</strong>{{patient.dob | date: 'dd/MM/yyyy'}}</small>\n                </md-option>\n                </md-autocomplete>\n\n            </div>\n            <div class=\"ui-grid-row\">\n                <md-form-field class=\"input-full-width\">\n                    <input mdInput placeholder=\"Description\" id=\"Description\" [(ngModel)]=\"event.description\" name=\"description\" >\n                </md-form-field>\n            </div>\n        </div>\n        <p-footer>\n            <div class=\"ui-dialog-buttonpane ui-widget-content ui-helper-clearfix\">\n                <button md-raised-button (click)=\"onDateChanged()\" >Delete</button>\n                <button md-raised-button (click)=\"onDateChanged()\" >Save</button>\n                <button type=\"button\" pButton icon=\"fa-close\" (click)=\"deleteEvent()\" label=\"Delete\" [disabled]=\"!event?.appointmentID\"></button>\n                <button type=\"button\" pButton icon=\"fa-check\" (click)=\"saveEvent()\" label=\"Save\" [disabled]=\"!event?.start\"></button>\n            </div>\n        </p-footer>\n    </p-dialog>\n\n      </md-card-content>\n    </md-card>\n</section>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/appointment/appointment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentComponent; });
/* unused harmony export MyEvent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_masterdata_service__ = __webpack_require__("../../../../../src/app/services/masterdata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_EventService__ = __webpack_require__("../../../../../src/app/services/EventService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppointmentComponent = (function () {
    function AppointmentComponent(MasterDataService, route, router, eventService) {
        this.MasterDataService = MasterDataService;
        this.route = route;
        this.router = router;
        this.eventService = eventService;
        this.data = {};
        this.msgs = [];
        this.dialogVisible = false;
        this.idGen = 900000000;
    }
    AppointmentComponent.prototype.onDateChanged = function () {
        var start = __WEBPACK_IMPORTED_MODULE_6_moment__["utc"](this.event.start, "HH:mm");
        var end = __WEBPACK_IMPORTED_MODULE_6_moment__["utc"](this.event.start, "HH:mm");
        // calculate the duration
        var d = __WEBPACK_IMPORTED_MODULE_6_moment__["duration"](end.diff(start));
        // format a string result
        var s = __WEBPACK_IMPORTED_MODULE_6_moment__["utc"](+d).format('H:mm');
        this.event.duration = d.asMinutes();
    };
    AppointmentComponent.prototype.onDurationChanged = function () {
        this.event.end = __WEBPACK_IMPORTED_MODULE_6_moment__(this.event.start).add(this.event.duration, 'm').format('YYYY-MM-DD') + 'T' + __WEBPACK_IMPORTED_MODULE_6_moment__(this.event.start).add(this.event.duration, 'm').format('HH:mm');
    };
    AppointmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.events = [
            {
                "appointmentID": 1,
                "title": "All Day Event",
                "start": "2017-08-01T12:22:00",
                "end": "2017-08-01T12:12:00"
            },
            {
                "appointmentID": 2,
                "title": "Long Event with end date",
                "start": "2017-08-07T18:18:00",
                "end": "2017-08-24T11:11:00"
            },
            {
                "appointmentID": 3,
                "title": "Repeating Event",
                "start": "017-08-24T12:12:00",
                "end": "2017-08-24T15:15:00"
            },
        ];
        this.MasterDataService.GetAppointment().subscribe(function (appointment) {
            _this.events = appointment;
        });
        this.header = {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay,listWeek,listMonth'
        };
        this.patientCtrl = new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormControl"]({ patientID: 0, name: '' });
        this.doctorCtrl = new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormControl"]({ dgUserID: 0, userFullName: '' });
        this.MasterDataService.GetPurposeOfVisit().subscribe(function (purposeOfVisit) {
            _this.purposeOfVisits = purposeOfVisit;
        });
        this.MasterDataService.GetPatient().subscribe(function (patient) {
            _this.patients = patient;
            //here only start filter
            _this.filteredPatients = _this.patientCtrl.valueChanges
                .startWith(_this.patientCtrl.value)
                .map(function (val) { return _this.displayPatientFn(val); })
                .map(function (name) { return _this.filterPatients(name); });
        });
        this.MasterDataService.GetDGUser().subscribe(function (doctor) {
            _this.doctors = doctor;
            //here only start filter
            _this.filteredDoctors = _this.doctorCtrl.valueChanges
                .startWith(_this.doctorCtrl.value)
                .map(function (val) { return _this.displayDoctorFn(val); })
                .map(function (name) { return _this.filterDoctors(name); });
        });
    };
    AppointmentComponent.prototype.displayPatientFn = function (value) {
        return value && typeof value === 'object' ? value.name : value;
    };
    AppointmentComponent.prototype.filterPatients = function (val) {
        //`^${val}`
        return val ? this.patients.filter(function (s) { return new RegExp(val, 'gi').test(s.name); })
            : this.patients;
    };
    AppointmentComponent.prototype.displayDoctorFn = function (value) {
        return value && typeof value === 'object' ? value.userFullName : value;
    };
    AppointmentComponent.prototype.filterDoctors = function (val) {
        //`^${val}`
        return val ? this.doctors.filter(function (s) { return new RegExp(val, 'gi').test(s.userFullName); })
            : this.doctors;
    };
    AppointmentComponent.prototype.handleDayClick = function (event) {
        this.event = new MyEvent();
        this.patientCtrl = new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormControl"]({ patientID: 0, name: '' });
        this.doctorCtrl = new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormControl"]({ dgUserID: 0, userFullName: '' });
        this.event.start = event.date.format('YYYY-MM-DD') + 'T' + event.date.format('HH:mm');
        this.event.end = __WEBPACK_IMPORTED_MODULE_6_moment__(event.date.format('YYYY-MM-DD HH:mm')).add(30, 'm').format('YYYY-MM-DD') + 'T' + __WEBPACK_IMPORTED_MODULE_6_moment__(event.date.format('YYYY-MM-DD HH:mm')).add(30, 'm').format('HH:mm');
        this.event.duration = 30;
        this.dialogVisible = true;
    };
    AppointmentComponent.prototype.handleEventClick = function (e) {
        var _this = this;
        this.event = new MyEvent();
        this.event.title = e.calEvent.title;
        var start = e.calEvent.start;
        var end = e.calEvent.end;
        /*
              if(e.view.name === 'month') {
                  start.stripTime();
              }
              
              if(end) {
                  end.stripTime();
                  this.event.end = end.format();
              }
              */
        this.patientCtrl = new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormControl"]({ patientID: 0, name: '' });
        this.doctorCtrl = new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormControl"]({ dgUserID: 0, userFullName: '' });
        this.event.appointmentID = e.calEvent.appointmentID;
        this.event.start = e.calEvent.start;
        this.event.allDay = e.calEvent.allDay;
        this.event.duration = e.calEvent.duration;
        this.event.mobile = e.calEvent.mobile;
        this.event.phone = e.calEvent.phone;
        this.event.email = e.calEvent.email;
        this.event.visitPurposeID = e.calEvent.visitPurposeID;
        this.event.description = e.calEvent.description;
        this.event.gender = e.calEvent.gender;
        this.event.visitDepartmentID = e.calEvent.visitDepartmentID;
        this.event.start = __WEBPACK_IMPORTED_MODULE_6_moment__(e.calEvent.start).format('YYYY-MM-DDTHH:mm');
        this.event.end = __WEBPACK_IMPORTED_MODULE_6_moment__(e.calEvent.end).format('YYYY-MM-DDTHH:mm');
        if (e.calEvent.patientID != undefined || e.calEvent.patientID != null) {
            var patientID = void 0;
            if (this.event.appointmentID < 900000000) {
                patientID = e.calEvent.patientID;
            }
            else {
                patientID = e.calEvent.patientID.patientID;
            }
            this.event.patientID = patientID;
            this.MasterDataService.GetPatientByID(patientID)
                .subscribe(function (i) {
                _this.patientCtrl = new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormControl"]({ patientID: i.patientID, name: i.name });
            });
        }
        if (e.calEvent.visitDoctorID != undefined || e.calEvent.visitDoctorID != null) {
            var visitDoctorID = void 0;
            if (this.event.appointmentID < 900000000) {
                visitDoctorID = e.calEvent.visitDoctorID;
            }
            else {
                visitDoctorID = e.calEvent.visitDoctorID.dgUserID;
            }
            this.event.visitDoctorID = visitDoctorID;
            this.MasterDataService.GetDGUserByID(visitDoctorID)
                .subscribe(function (i) {
                _this.doctorCtrl = new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormControl"]({ dgUserID: i.dgUserID, userFullName: i.userFullName });
            });
        }
        this.dialogVisible = true;
    };
    AppointmentComponent.prototype.saveEvent = function () {
        //update
        if (this.event.appointmentID) {
            var index = this.findEventIndexById(this.event.appointmentID);
            if (index >= 0) {
                this.events[index] = this.event;
            }
        }
        else {
            this.event.appointmentID = this.idGen++;
            this.events.push(this.event);
            //this.event = null;
        }
        this.dialogVisible = false;
        // > 900000000 means is newly created appointment
        if (this.event.appointmentID < 900000000) {
            this.data.appointmentID = this.event.appointmentID;
        }
        this.data.title = this.event.title;
        this.data.start = this.event.start;
        this.data.end = this.event.end;
        this.data.duration = this.event.duration;
        this.data.description = this.event.description;
        this.data.allDay = this.event.allDay;
        this.data.mobile = this.event.mobile;
        this.data.phone = this.event.phone;
        this.data.email = this.event.email;
        this.data.visitPurposeID = this.event.visitPurposeID;
        this.data.gender = this.event.gender;
        this.data.visitDepartmentID = this.event.visitDepartmentID;
        if (this.event.patientID != undefined || this.event.patientID != null) {
            this.data.patientID = this.event.patientID;
        }
        if (this.event.visitDoctorID != undefined || this.event.visitDoctorID != null) {
            this.data.visitDoctorID = this.event.visitDoctorID;
        }
        this.onSave();
    };
    AppointmentComponent.prototype.onSave = function () {
        if (this.data.appointmentID) {
            this.MasterDataService.UpdateAppointmentByID(this.data)
                .subscribe(function (x) {
                // this.msgs = [];
                // this.msgs.push({severity:'success', summary:'Info Message', detail:'"' + x.title + '" Updated Sucessfully!'});
            });
        }
        else
            this.MasterDataService.CreateAppointment(this.data)
                .subscribe(function (x) {
                // this.msgs = [];
                // this.msgs.push({severity:'success', summary:'Info Message', detail:'"' + x.title + '" Created Sucessfully!'});
            });
        //Reset value, else keep in cache
        this.patientCtrl = new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormControl"]({ patientID: 0, name: '' });
        this.doctorCtrl = new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormControl"]({ dgUserID: 0, userFullName: '' });
    };
    AppointmentComponent.prototype.deleteEvent = function () {
        var index = this.findEventIndexById(this.event.appointmentID);
        if (index >= 0) {
            this.events.splice(index, 1);
        }
        this.dialogVisible = false;
    };
    AppointmentComponent.prototype.findEventIndexById = function (id) {
        var index = -1;
        for (var i = 0; i < this.events.length; i++) {
            if (id == this.events[i].appointmentID) {
                index = i;
                break;
            }
        }
        return index;
    };
    AppointmentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'app-appointment',
            template: __webpack_require__("../../../../../src/app/appointment/appointment.component.html"),
            styles: [__webpack_require__("../../../../../src/app/appointment/appointment.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_masterdata_service__["a" /* MasterDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_masterdata_service__["a" /* MasterDataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_EventService__["a" /* EventService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_EventService__["a" /* EventService */]) === "function" && _d || Object])
    ], AppointmentComponent);
    return AppointmentComponent;
    var _a, _b, _c, _d;
}());

var MyEvent = (function () {
    function MyEvent() {
        this.allDay = false;
    }
    return MyEvent;
}());

//# sourceMappingURL=appointment.component.js.map

/***/ }),

/***/ "../../../../../src/app/auth0-user-profile/auth0-user-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth0-user-profile/auth0-user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default profile-area\">\n  <div class=\"panel-heading\">\n    <h3>Profile</h3>\n  </div>\n  <div class=\"panel-body\">\n    <img src=\"{{profile?.picture}}\" class=\"avatar\" alt=\"avatar\">\n    <div>\n      <label><i class=\"glyphicon glyphicon-user\"></i> Nickname</label>\n      <h3 class=\"nickname\">{{ profile?.nickname }}</h3>\n    </div>\n    <pre class=\"full-profile\">{{ profile | json }}</pre>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/auth0-user-profile/auth0-user-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Auth0UserProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Auth0UserProfileComponent = (function () {
    function Auth0UserProfileComponent(auth) {
        this.auth = auth;
    }
    Auth0UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.auth.userProfile) {
            this.profile = this.auth.userProfile;
        }
        else {
            this.auth.getProfile(function (err, profile) {
                _this.profile = profile;
            });
        }
    };
    Auth0UserProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-auth0-user-profile',
            template: __webpack_require__("../../../../../src/app/auth0-user-profile/auth0-user-profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/auth0-user-profile/auth0-user-profile.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
    ], Auth0UserProfileComponent);
    return Auth0UserProfileComponent;
    var _a;
}());

//# sourceMappingURL=auth0-user-profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/billing/billing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/billing/billing.component.html":
/***/ (function(module, exports) {

module.exports = "<section> \n      <div class=\"toolbar\">\n        <div>\n          <button md-raised-button>Save</button>\n          <button md-raised-button>New</button>\n          <button md-raised-button>Save + New</button>\n        </div>\n      </div>\n  \n      <md-card>\n        <md-card-header>\n          <md-card-title>Invoice</md-card-title>\n          <md-card-subtitle>New Invoice</md-card-subtitle>\n        </md-card-header>\n        <md-card-content>\n          <md-tab-group>\n            <md-tab>\n              <ng-template md-tab-label>\n                New Transaction\n              </ng-template>\n              <md-card>\n                <md-card-content>\n                    <div class=\"container\">\n                      <div> \n                          <md-form-field class=\"input-full-width\">\n                              <input mdInput [mdDatepicker]=\"picker\" placeholder=\"Transaction Date\">\n                              <md-datepicker-toggle mdSuffix [for]=\"picker\"></md-datepicker-toggle>\n                              <md-datepicker #picker></md-datepicker>\n                            </md-form-field>\n                      </div>\n                      <div>\n                        <md-form-field class=\"input-full-width\">\n                          <input mdInput placeholder=\"Charge Item...\"  name=\"userInitial\">\n                        </md-form-field>\n                      </div>\n                    </div>\n                    <div class=\"container\">\n                      <div>\n                        <md-form-field class=\"input-full-width\">\n                            <input mdInput type=\"number\" placeholder=\"Price\"  name=\"extension\">\n                        </md-form-field>\n                      </div>\n                      <div>\n                        <md-form-field class=\"input-full-width\">\n                            <input mdInput type=\"number\" placeholder=\"GST\"  name=\"extension\">\n                        </md-form-field>\n                      </div>\n                      <div>\n                        <md-form-field class=\"input-full-width\">\n                            <input mdInput type=\"number\" placeholder=\"Discount(%)\"  name=\"extension\">\n                        </md-form-field>\n                      </div>\n                      <div>\n                        <md-form-field class=\"input-full-width\">\n                          <input mdInput type=\"number\" placeholder=\"Discount (Amount)\"  name=\"extension\">\n                        </md-form-field>\n                      </div>\n                      \n                    </div>\n                    <div class=\"container\">\n                      <div>\n                        <md-form-field class=\"input-full-width\">\n                            <input mdInput type=\"number\" placeholder=\"Total Price\"  name=\"extension\">\n                        </md-form-field>\n                      </div>\n                    </div>\n                    <div class=\"container\">\n                      <div>\n                        <md-form-field class=\"input-full-width\">\n                            <input mdInput placeholder=\"Order By\"  name=\"extension\">\n                        </md-form-field>\n                      </div>\n                      <div>\n                        <md-form-field class=\"input-full-width\">\n                            <input mdInput placeholder=\"Pay By\"  name=\"extension\">\n                        </md-form-field>\n                      </div>\n\n                    </div>\n                </md-card-content>\n              </md-card>\n            </md-tab>\n            <md-tab>\n              <ng-template md-tab-label>\n                Existing Transaction\n              </ng-template>\n              <md-card  >\n                <md-card-content>\n                    <div>\n                        <dx-data-grid style=\"display:block;\" #grid\n                        id=\"gridContainer\" \n                        [dataSource]=\"dataHistory\"\n                        [allowColumnResizing]=\"true\"\n                         \n                        [columnAutoWidth]=\"true\"\n                        [allowColumnReordering]=\"true\">  \n                        <dxo-editing \n                            mode=\"cell\"\n                            [allowUpdating]=\"true\">\n                        </dxo-editing>\n                        <dxo-filter-row\n                        [visible]=\"true\"></dxo-filter-row>\n                        <dxo-paging [pageSize]=\"30\"></dxo-paging>\n                        <dxo-pager \n                            [showPageSizeSelector]=\"true\"\n                            [allowedPageSizes]=\"[5,10,15,30,50,100]\"\n                            [showInfo]=\"true\">\n                        </dxo-pager>\n                        <dxo-group-panel [visible]=\"true\"></dxo-group-panel>\n                        <dxo-grouping #expand [autoExpandAll]=\"true\"></dxo-grouping>\n                        <dxi-column dataField=\"trasanctionDate\" dataType=\"date\"></dxi-column>\n                        <dxi-column dataField=\"itemCode\"></dxi-column>\n                        <dxi-column dataField=\"itemdescription\"></dxi-column>\n                        <dxi-column dataField=\"quantity\" dataType=\"number\"></dxi-column>\n                        <dxi-column dataField=\"price\" dataType=\"number\"></dxi-column>\n                        <dxi-column dataField=\"discount(%)\" dataType=\"number\"></dxi-column>\n                        <dxi-column dataField=\"totalPrice\" dataType=\"number\"></dxi-column>\n                        <dxi-column dataField=\"GSTCode\"></dxi-column>\n                        <dxi-column dataField=\"GSTAmount\" dataType=\"number\"></dxi-column>\n                        <dxi-column dataField=\"OrderBy\"></dxi-column>\n                        <dxi-column dataField=\"PayBy\"></dxi-column>\n\n                        <dxo-summary>\n                            <dxi-group-item\n                                column=\"GSTAmount\"\n                                summaryType=\"sum\"\n                                valueFormat=\"number\"\n                                displayFormat=\"Total: {0}\"\n                                [showInGroupFooter]=\"true\">\n                            </dxi-group-item>\n                            <dxi-group-item\n                                column=\"totalPrice\"\n                                summaryType=\"sum\"\n                                valueFormat=\"number\"\n                                displayFormat=\"Total: {0}\"\n                                [showInGroupFooter]=\"true\">\n                            </dxi-group-item>\n                            <dxi-total-item\n                              column=\"totalPrice\"\n                              summaryType=\"sum\"\n                              displayFormat=\"Total: {0}\"\n                              valueFormat=\"number\">\n                            </dxi-total-item>\n                            <dxi-total-item\n                              column=\"GSTAmount\"\n                              summaryType=\"sum\"\n                              displayFormat=\"Total: {0}\"\n                              valueFormat=\"number\">\n                            </dxi-total-item>\n                        </dxo-summary>\n\n\n                        </dx-data-grid>\n                  \n                      </div>   \n                </md-card-content>\n              </md-card>\n            </md-tab>\n          </md-tab-group>\n        </md-card-content>\n      </md-card>\n  </section>"

/***/ }),

/***/ "../../../../../src/app/billing/billing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BillingComponent = (function () {
    function BillingComponent() {
        this.dataHistory = [
            { "trasanctionDate": "2017-09-01", "itemCode": "BMD-001", "itemdescription": "PANADOL 500MG", "quantity": 10, "price": 0.5, "discount(%)": 0, "totalPrice": 5, "GSTCode": "SR", "GSTAmount": 0.30, "OrderBy": "DR ONG", "PayBy": "CASH" },
            { "trasanctionDate": "2017-09-01", "itemCode": "BMD-002", "itemdescription": "AMOXICILIN 200MG", "quantity": 10, "price": 0.5, "discount(%)": 0, "totalPrice": 5, "GSTCode": "SR", "GSTAmount": 0.30, "OrderBy": "DR ONG", "PayBy": "CASH" },
            { "trasanctionDate": "2017-09-01", "itemCode": "RAD-001", "itemdescription": "Radiology Test", "quantity": 1, "price": 500, "discount(%)": 10, "totalPrice": 450, "GSTCode": "ES", "GSTAmount": 0.00, "OrderBy": "DR LAU AH CHOY", "PayBy": "CASH" },
            { "trasanctionDate": "2017-09-03", "itemCode": "LAD-001", "itemdescription": "FULL BODY BLOOD ANALYSIS", "quantity": 1, "price": 230, "discount(%)": 10, "totalPrice": 200, "GSTCode": "ES", "GSTAmount": 0.00, "OrderBy": "DR WONG LAY FAT", "PayBy": "CASH" },
            { "trasanctionDate": "2017-09-05", "itemCode": "RAD-401", "itemdescription": "CT SCAN - ABDOMINAL", "quantity": 1, "price": 1500, "discount(%)": 10, "totalPrice": 1450, "GSTCode": "ES", "GSTAmount": 0.00, "OrderBy": "DR LAU AH CHOY", "PayBy": "CASH" },
            { "trasanctionDate": "2017-09-07", "itemCode": "BMD-001", "itemdescription": "PANADOL 500MG", "quantity": 10, "price": 0.5, "discount(%)": 0, "totalPrice": 5, "GSTCode": "SR", "GSTAmount": 0.30, "OrderBy": "DR ONG", "PayBy": "CASH" },
            { "trasanctionDate": "2017-09-07", "itemCode": "MMD-102", "itemdescription": "ALCOHOL SWAP", "quantity": 10, "price": 0.5, "discount(%)": 0, "totalPrice": 5, "GSTCode": "SR", "GSTAmount": 0.30, "OrderBy": "DR ONG", "PayBy": "CASH" },
            { "trasanctionDate": "2017-09-07", "itemCode": "RAD-001", "itemdescription": "Radiology Test", "quantity": 1, "price": 500, "discount(%)": 10, "totalPrice": 450, "GSTCode": "ES", "GSTAmount": 0.00, "OrderBy": "DR LAU AH CHOY", "PayBy": "CASH" },
            { "trasanctionDate": "2017-09-07", "itemCode": "LAD-001", "itemdescription": "FULL BODY BLOOD ANALYSIS", "quantity": 1, "price": 230, "discount(%)": 10, "totalPrice": 200, "GSTCode": "ES", "GSTAmount": 0.00, "OrderBy": "DR WONG LAY FAT", "PayBy": "CASH" },
            { "trasanctionDate": "2017-09-07", "itemCode": "RAD-501", "itemdescription": "CT SCAN - CHEST", "quantity": 1, "price": 1500, "discount(%)": 10, "totalPrice": 1450, "GSTCode": "ES", "GSTAmount": 0.00, "OrderBy": "DR LAU AH CHOY", "PayBy": "CASH" },
            { "trasanctionDate": "2017-09-08", "itemCode": "MMD-001", "itemdescription": "UPHAMOL", "quantity": 10, "price": 0.5, "discount(%)": 0, "totalPrice": 5, "GSTCode": "SR", "GSTAmount": 0.30, "OrderBy": "DR ONG", "PayBy": "CASH" },
            { "trasanctionDate": "2017-09-08", "itemCode": "BMD-002", "itemdescription": "AMOXICILIN 200MG", "quantity": 10, "price": 0.5, "discount(%)": 0, "totalPrice": 5, "GSTCode": "SR", "GSTAmount": 0.30, "OrderBy": "DR ONG", "PayBy": "CASH" },
            { "trasanctionDate": "2017-09-09", "itemCode": "RAD-001", "itemdescription": "Radiology Test", "quantity": 1, "price": 500, "discount(%)": 10, "totalPrice": 450, "GSTCode": "ES", "GSTAmount": 0.00, "OrderBy": "DR LAU AH CHOY", "PayBy": "CASH" },
            { "trasanctionDate": "2017-09-10", "itemCode": "LAD-001", "itemdescription": "FULL BODY BLOOD ANALYSIS", "quantity": 1, "price": 230, "discount(%)": 10, "totalPrice": 200, "GSTCode": "ES", "GSTAmount": 0.00, "OrderBy": "DR WONG LAY FAT", "PayBy": "CASH" },
            { "trasanctionDate": "2017-09-11", "itemCode": "RAD-521", "itemdescription": "CT SCAN - LEG", "quantity": 1, "price": 1500, "discount(%)": 10, "totalPrice": 1450, "GSTCode": "ES", "GSTAmount": 0.00, "OrderBy": "DR LAU AH CHOY", "PayBy": "CASH" },
            { "trasanctionDate": "2017-09-12", "itemCode": "LOG-001", "itemdescription": "LONGZINE 500MG", "quantity": 10, "price": 0.5, "discount(%)": 0, "totalPrice": 5, "GSTCode": "SR", "GSTAmount": 0.30, "OrderBy": "DR ONG", "PayBy": "CASH" },
            { "trasanctionDate": "2017-09-14", "itemCode": "MMD-702", "itemdescription": "SYRINGE USAGE", "quantity": 10, "price": 0.5, "discount(%)": 0, "totalPrice": 5, "GSTCode": "SR", "GSTAmount": 0.30, "OrderBy": "DR ONG", "PayBy": "CASH" },
            { "trasanctionDate": "2017-09-15", "itemCode": "RAD-001", "itemdescription": "Radiology Test", "quantity": 1, "price": 500, "discount(%)": 10, "totalPrice": 450, "GSTCode": "ES", "GSTAmount": 0.00, "OrderBy": "DR LAU AH CHOY", "PayBy": "CASH" },
            { "trasanctionDate": "2017-09-15", "itemCode": "LAD-001", "itemdescription": "FULL BODY BLOOD ANALYSIS", "quantity": 1, "price": 230, "discount(%)": 10, "totalPrice": 200, "GSTCode": "ES", "GSTAmount": 0.00, "OrderBy": "DR WONG LAY FAT", "PayBy": "CASH" },
            { "trasanctionDate": "2017-09-19", "itemCode": "RAD-205", "itemdescription": "CT SCAN - BUTT", "quantity": 1, "price": 1500, "discount(%)": 10, "totalPrice": 1450, "GSTCode": "ES", "GSTAmount": 0.00, "OrderBy": "DR LAU AH CHOY", "PayBy": "CASH" }
        ];
    }
    BillingComponent.prototype.ngOnInit = function () {
    };
    BillingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-billing',
            template: __webpack_require__("../../../../../src/app/billing/billing.component.html"),
            styles: [__webpack_require__("../../../../../src/app/billing/billing.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BillingComponent);
    return BillingComponent;
}());

//# sourceMappingURL=billing.component.js.map

/***/ }),

/***/ "../../../../../src/app/charge-item/charge-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*temporary ui fix */\n:host /deep/ .mat-select-trigger {\n    font-size: 12px;\n    height: inherit;\n    margin-bottom: 15px;\n    margin-top: 2px;\n    \n  }\n  \n  :host /deep/ .mat-select-value-text {\n    line-height: inherit;\n    margin-bottom: 15px;\n    margin-top: 2px;\n  }\n  \n  :host /deep/ .mat-select {\n    font-size: 12px;\n    margin-top: 2px;\n    margin-bottom: 15px;\n    margin-left: 1px;\n  }\n  \n  :host /deep/ .mat-checkbox {\n    font-size: 12px;\n    margin-top: 2px;\n    margin-left: 1px;\n  }\n  \n  :host /deep/ .mat-radio-group {\n    font-size: 12px;\n    margin-top: 2px;\n    margin-left: 1px;\n  }\n  /*temporary ui fix */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/charge-item/charge-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"toolbar\">\n  <div>\n      <button md-raised-button (click)=\"onSave()\">Save</button>\n      <button md-raised-button>New</button>\n      <button md-raised-button>Save + New</button>\n  </div>\n</div>\n\n<section>\n  <md-card>\n    <md-card-header>\n      <md-card-title>Charge Item</md-card-title>\n      <md-card-subtitle>{{data.chargeItemID > 0 ? 'Edit Mode' : 'New Mode'}}</md-card-subtitle>\n    </md-card-header>\n    <md-card-content>\n        <div class=\"container\">\n          <div> \n            <md-form-field class=\"input-full-width\">\n              <input mdInput [(ngModel)]=\"data.chargeItemCode\" name=\"chargeItemCode\" placeholder=\"Code\" >\n            </md-form-field>\n          </div>\n          <div>\n            <md-form-field class=\"input-full-width\">\n              <input mdInput [(ngModel)]=\"data.chargeItemDescription\" name=\"chargeItemDescription\" placeholder=\"Description\" >\n            </md-form-field>\n          </div>\n          <div>\n            <md-checkbox [(ngModel)]=\"data.active\" name=\"active\">Active</md-checkbox>\n            <md-checkbox [(ngModel)]=\"data.Chargeable\" name=\"Chargeable\">Chargeable</md-checkbox>\n          </div>\n        </div>\n        <div class=\"container\">\n          <div>\n            <md-form-field class=\"input-full-width\">\n              <input mdInput placeholder=\"Category\" [mdAutocomplete]=\"reactiveinventoryCategory\" [formControl]=\"inventoryCategoryCtrl\" >\n            </md-form-field>\n\n            <md-autocomplete #reactiveinventoryCategory=\"mdAutocomplete\" [displayWith]=\"displayinventoryCategoryFn\">\n              <md-option *ngFor=\"let inventoryCategory of filteredinventoryCategorys | async\" [value]=\"inventoryCategory\">\n                <span>{{ inventoryCategory.inventoryCategoryID }}</span>\n                <span> ({{inventoryCategory.inventoryCategoryName}}) </span>\n              </md-option>\n            </md-autocomplete>\n          </div>\n          <div>\n            <md-form-field class=\"input-full-width\">\n              <input mdInput placeholder=\"Sub Category\" [mdAutocomplete]=\"reactiveinventorySubCategory\" [formControl]=\"inventorySubCategoryCtrl\" >\n            </md-form-field>\n\n            <md-autocomplete #reactiveinventorySubCategory=\"mdAutocomplete\" [displayWith]=\"displayinventorySubCategoryFn\">\n              <md-option *ngFor=\"let inventorySubCategory of filteredinventorySubCategorys | async\" [value]=\"inventorySubCategory\">\n                <span>{{ inventorySubCategory.inventorySubCategoryID }}</span>\n                <span> ({{inventorySubCategory.inventorySubCategoryName}}) </span>\n              </md-option>\n            </md-autocomplete>\n          </div>\n          </div>\n            <div class=\"container\">\n            <div><md-checkbox [(ngModel)]=\"data.isDrug\" name=\"isDrug\">Drug</md-checkbox></div>\n            <div><md-checkbox [(ngModel)]=\"data.isLaboratory\" name=\"isLaboratory\">Laboratory</md-checkbox></div>\n            <div><md-checkbox [(ngModel)]=\"data.isRadiology\" name=\"isRadiology\">Radiology</md-checkbox></div>\n            <div><md-checkbox [(ngModel)]=\"data.isProcedure\" name=\"isProcedure\">Procedure</md-checkbox></div>\n            <div><md-checkbox [(ngModel)]=\"data.isConsumable\" name=\"isConsumable\">Consumable</md-checkbox></div>\n            <div><md-checkbox [(ngModel)]=\"data.isVaccine\" name=\"isVaccine\">Vaccine</md-checkbox></div>\n          </div>\n    </md-card-content>\n  </md-card>\n  <md-card *ngIf=\"data.isDrug\">\n    <md-card-header>\n      <md-card-title>Drug Item - Related Details</md-card-title>\n      <md-card-subtitle></md-card-subtitle>\n    </md-card-header>\n    <md-card-content>\n        <div class=\"container\">\n          <div>\n            <md-form-field class=\"input-full-width\">\n              <input mdInput placeholder=\"ATC Classification\" [mdAutocomplete]=\"reactiveinventoryATCClassification\" [formControl]=\"inventoryATCClassificationCtrl\" >\n            </md-form-field>\n\n            <md-autocomplete #reactiveinventoryATCClassification=\"mdAutocomplete\" [displayWith]=\"displayinventoryATCClassificationFn\">\n              <md-option *ngFor=\"let inventoryATCClassification of filteredinventoryATCClassifications | async\" [value]=\"inventoryATCClassification\">\n                <span>{{ inventoryATCClassification.inventoryATCClassificationID }}</span>\n                <span> ({{inventoryATCClassification.inventoryATCClassificationCode}}, {{inventoryATCClassification.inventoryATCClassificationName}}) </span>\n              </md-option>\n            </md-autocomplete>\n\n          </div>\n          <div>\n            <md-form-field class=\"input-full-width\">\n              <input mdInput placeholder=\"Brand Name\" [mdAutocomplete]=\"reactiveinventoryBrand\" [formControl]=\"inventoryBrandCtrl\" >\n            </md-form-field>\n\n            <md-autocomplete #reactiveinventoryBrand=\"mdAutocomplete\" [displayWith]=\"displayinventoryBrandFn\">\n              <md-option *ngFor=\"let inventoryBrand of filteredinventoryBrands | async\" [value]=\"inventoryBrand\">\n                <span>{{ inventoryBrand.inventoryBrandID }}</span>\n                <span> ({{inventoryBrand.inventoryBrandName}}) </span>\n              </md-option>\n            </md-autocomplete>\n\n          </div>\n          <div>\n            <md-form-field class=\"input-full-width\">\n              <input mdInput placeholder=\"Generic Name\" [mdAutocomplete]=\"reactiveinventoryGeneric\" [formControl]=\"inventoryGenericCtrl\" >\n            </md-form-field>\n\n            <md-autocomplete #reactiveinventoryGeneric=\"mdAutocomplete\" [displayWith]=\"displayinventoryGenericFn\">\n              <md-option *ngFor=\"let inventoryGeneric of filteredinventoryGenerics | async\" [value]=\"inventoryGeneric\">\n                <span>{{ inventoryGeneric.inventoryGenericID }}</span>\n                <span> ({{inventoryGeneric.inventoryGenericName}}) </span>\n              </md-option>\n            </md-autocomplete>\n\n          </div>\n          <div>\n            <md-form-field class=\"input-full-width\">\n              <input mdInput [(ngModel)]=\"data.inventoryOtherName\" name=\"inventoryOtherName\" placeholder=\"Other Name\">\n            </md-form-field>\n          </div>\n        </div>\n\n        <div class=\"container\">\n          <div>\n            <md-select placeholder=\"Medication Class\" name=\"medicationClass\" [(ngModel)]=\"data.inventoryMedicationClassID\" class=\"input-full-width\">\n              <md-option *ngFor=\"let medicationClass of medicationClasses\" [value]=\"medicationClass.inventoryMedicationClassID\">\n                {{medicationClass.inventoryMedicationClassName}}\n              </md-option>\n            </md-select>\n          </div>\n          <div>\n            <md-select placeholder=\"Pregnancy Category\" name=\"pregnancyCategory\" [(ngModel)]=\"data.inventoryPregnancyCategoryID\" class=\"input-full-width\">\n              <md-option *ngFor=\"let pregnancyCategory of pregnancyCategories\" [value]=\"pregnancyCategory.inventoryPregnancyCategoryID\"  >\n                {{pregnancyCategory.inventoryPregnancyCategoryName}}\n              </md-option>\n            </md-select>\n          </div>\n\n          <div>\n            <md-checkbox [(ngModel)]=\"data.otc\" name=\"otc\">Over The Counter</md-checkbox>\n            <md-checkbox [(ngModel)]=\"data.useBatch\" name=\"useBatch\">Use Batch</md-checkbox>\n            <md-checkbox [(ngModel)]=\"data.expiryControl\" name=\"expiryControl\">Expiry Control</md-checkbox>\n          </div>\n        </div>\n    </md-card-content>\n  </md-card>\n  <md-card *ngIf=\"data.isRadiology || data.isLaboratory\">\n    <md-card-header>\n      <md-card-title>Laboratory/Radiology Item - Related Details</md-card-title>\n      <md-card-subtitle></md-card-subtitle>\n    </md-card-header>\n    <md-card-content>\n        <div class=\"container\">\n          <div>\n            <md-form-field class=\"input-full-width\">\n              <input mdInput [(ngModel)]=\"data.Catalog\" name=\"Catalog\" placeholder=\"Catalog\" >\n            </md-form-field>\n          </div>\n          <div>\n              <md-form-field class=\"input-full-width\">\n                <input mdInput [(ngModel)]=\"data.Analysis\" name=\"Analysis\" placeholder=\"Analysis\" >\n              </md-form-field>\n          </div>\n          <div>\n              <md-form-field class=\"input-full-width\">\n                <input mdInput [(ngModel)]=\"data.ExternalCode\" name=\"ExternalCode\" placeholder=\"ExternalCode\" >\n              </md-form-field>\n          </div>\n        </div>\n    </md-card-content>\n  </md-card>\n  <br>\n  \n      <md-card>\n          <md-card-header>\n          <md-card-title>Master Data List</md-card-title>\n          <md-card-subtitle></md-card-subtitle>\n          </md-card-header>\n          <md-card-content>\n              <dx-data-grid style=\"display:block;\" #grid\n              id=\"gridContainer\" \n              (onSelectionChanged)=\"onRowSelect($event)\"\n              [dataSource]=\"dataList\"\n              [allowColumnResizing]=\"true\"\n               \n              [columnAutoWidth]=\"true\"\n              [allowColumnReordering]=\"true\"\n              [hoverStateEnabled]=\"true\">\n              <dxo-filter-row [visible]=\"true\"></dxo-filter-row>\n              <dxo-paging [pageSize]=\"30\"></dxo-paging>\n              <dxo-pager \n                  [showPageSizeSelector]=\"true\"\n                  [allowedPageSizes]=\"[5,10,15,30,50,100]\"\n                  [showInfo]=\"true\">\n              </dxo-pager>\n              <dxo-selection mode=\"single\"></dxo-selection>  \n              <dxi-column dataField=\"chargeItemID\" [width]=\"150\"></dxi-column>\n              <dxi-column dataField=\"chargeItemCode\"></dxi-column>\n              <dxi-column dataField=\"chargeItemDescription\"></dxi-column>\n              <dxi-column dataField=\"catalog\"></dxi-column>\n              <dxi-column dataField=\"active\"></dxi-column>\n              <dxi-column dataField=\"isDrug\"></dxi-column>\n              <dxi-column dataField=\"isLaboratory\"></dxi-column>\n              <dxi-column dataField=\"isRadiology\"></dxi-column>\n              <dxi-column dataField=\"isProcedure\"></dxi-column>\n              <dxi-column dataField=\"isConsumable\"></dxi-column>\n              <dxi-column dataField=\"isVaccine\"></dxi-column>\n\n              </dx-data-grid>\n  \n          </md-card-content>\n      </md-card>\n  </section>"

/***/ }),

/***/ "../../../../../src/app/charge-item/charge-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChargeItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_GDService_service__ = __webpack_require__("../../../../../src/app/services/GDService.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_services_masterdata_service__ = __webpack_require__("../../../../../src/app/services/masterdata.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChargeItemComponent = (function () {
    function ChargeItemComponent(GDService, MasterDataService, route, router) {
        var _this = this;
        this.GDService = GDService;
        this.MasterDataService = MasterDataService;
        this.route = route;
        this.router = router;
        this.pregnancyCategories = [];
        this.medicationClasses = [];
        this.data = {};
        this.dataList = [];
        this.inventoryBrandCtrl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]({ inventoryBrandID: 0, inventoryBrandName: '' });
        this.inventoryGenericCtrl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]({ inventoryGenericID: 0, inventoryGenericName: '' });
        this.inventoryATCClassificationCtrl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]({ inventoryATCClassificationID: 0, inventoryATCClassificationName: '' });
        this.inventoryCategoryCtrl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]({ inventoryCategoryID: 0, inventoryCategoryName: '' });
        this.inventorySubCategoryCtrl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]({ inventorySubCategoryID: 0, inventorySubCategoryName: '' });
        route.params.subscribe(function (p) {
            if (p['id'] != null)
                _this.data.chargeItemID = +p['id'];
            if (_this.data.chargeItemID) {
                _this.retrieveData();
            }
        });
    }
    ChargeItemComponent.prototype.displayinventorySubCategoryFn = function (value) {
        return value && typeof value === 'object' ? value.inventorySubCategoryName : value;
    };
    ChargeItemComponent.prototype.filterInventorySubCategorys = function (val) {
        return val ? this.inventorySubCategorys.filter(function (s) { return new RegExp(val, 'gi').test(s.inventorySubCategoryName); })
            : this.inventorySubCategorys;
    };
    ChargeItemComponent.prototype.displayinventoryCategoryFn = function (value) {
        return value && typeof value === 'object' ? value.inventoryCategoryName : value;
    };
    ChargeItemComponent.prototype.filterInventoryCategorys = function (val) {
        return val ? this.inventoryCategorys.filter(function (s) { return new RegExp(val, 'gi').test(s.inventoryCategoryName); })
            : this.inventoryCategorys;
    };
    ChargeItemComponent.prototype.displayinventoryBrandFn = function (value) {
        return value && typeof value === 'object' ? value.inventoryBrandName : value;
    };
    ChargeItemComponent.prototype.filterBrandNames = function (val) {
        return val ? this.brandNames.filter(function (s) { return new RegExp(val, 'gi').test(s.inventoryBrandName); })
            : this.brandNames;
    };
    ChargeItemComponent.prototype.displayinventoryGenericFn = function (value) {
        return value && typeof value === 'object' ? value.inventoryGenericName : value;
    };
    ChargeItemComponent.prototype.filterInventoryGenerics = function (val) {
        return val ? this.inventoryGenerics.filter(function (s) { return new RegExp(val, 'gi').test(s.inventoryGenericName); })
            : this.inventoryGenerics;
    };
    ChargeItemComponent.prototype.displayinventoryATCClassificationFn = function (value) {
        return value && typeof value === 'object' ? value.inventoryATCClassificationName : value;
    };
    ChargeItemComponent.prototype.filterInventoryATCClassifications = function (val) {
        return val ? this.inventoryATCClassifications.filter(function (s) { return new RegExp(val, 'gi').test(s.inventoryATCClassificationName); })
            : this.inventoryATCClassifications;
    };
    ChargeItemComponent.prototype.onRowSelect = function (event) {
        this.router.navigate(['/charge-item/', event.selectedRowKeys[0].chargeItemID]);
    };
    ChargeItemComponent.prototype.retrieveData = function () {
        var _this = this;
        this.MasterDataService.GetChargeItemByID(this.data.chargeItemID)
            .subscribe(function (m) {
            _this.data = m;
            if (m.inventoryBrandResource != null)
                _this.inventoryBrandCtrl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]({ inventoryBrandID: m.inventoryBrandResource.inventoryBrandID, inventoryBrandName: m.inventoryBrandResource.inventoryBrandName });
            if (m.inventoryGenericResource != null)
                _this.inventoryGenericCtrl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]({ inventoryGenericID: m.inventoryGenericResource.inventoryGenericID, inventoryGenericName: m.inventoryGenericResource.inventoryGenericName });
            if (m.inventoryATCClassificationResource != null)
                _this.inventoryATCClassificationCtrl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]({ inventoryATCClassificationID: m.inventoryATCClassificationResource.inventoryATCClassificationID, inventoryATCClassificationName: m.inventoryATCClassificationResource.inventoryATCClassificationName });
            if (m.inventoryCategoryResource != null)
                _this.inventoryCategoryCtrl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]({ inventoryCategoryID: m.inventoryCategoryResource.inventoryCategoryID, inventoryCategoryName: m.inventoryCategoryResource.inventoryCategoryName });
            if (m.inventorySubCategoryResource != null)
                _this.inventorySubCategoryCtrl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]({ inventorySubCategoryID: m.inventorySubCategoryResource.inventorySubCategoryID, inventorySubCategoryName: m.inventorySubCategoryResource.inventorySubCategoryName });
        }, function (err) {
            if (err.status == 404)
                _this.GDService.openSnackBar('Record Not Found!', 'Info');
        });
    };
    ChargeItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.MasterDataService.GetInventoryPregnancyCategory()
            .subscribe(function (x) {
            _this.pregnancyCategories = x;
        });
        this.MasterDataService.GetInventoryMedicationClass()
            .subscribe(function (x) {
            _this.medicationClasses = x;
        });
        this.MasterDataService.GetChargeItem()
            .subscribe(function (x) {
            _this.dataList = x;
        });
        this.MasterDataService.GetInventoryBrand().subscribe(function (brandName) {
            _this.brandNames = brandName;
            //here only start filter
            _this.filteredinventoryBrands = _this.inventoryBrandCtrl.valueChanges
                .startWith(_this.inventoryBrandCtrl.value)
                .map(function (val) { return _this.displayinventoryBrandFn(val); })
                .map(function (name) { return _this.filterBrandNames(name); });
        });
        this.MasterDataService.GetInventoryGeneric().subscribe(function (generic) {
            _this.inventoryGenerics = generic;
            //here only start filter
            _this.filteredinventoryGenerics = _this.inventoryGenericCtrl.valueChanges
                .startWith(_this.inventoryBrandCtrl.value)
                .map(function (val) { return _this.displayinventoryGenericFn(val); })
                .map(function (name) { return _this.filterInventoryGenerics(name); });
        });
        this.MasterDataService.GetInventoryATCClassification().subscribe(function (atc) {
            _this.inventoryATCClassifications = atc;
            //here only start filter
            _this.filteredinventoryATCClassifications = _this.inventoryATCClassificationCtrl.valueChanges
                .startWith(_this.inventoryATCClassificationCtrl.value)
                .map(function (val) { return _this.displayinventoryATCClassificationFn(val); })
                .map(function (name) { return _this.filterInventoryATCClassifications(name); });
        });
        this.MasterDataService.GetInventoryCategory().subscribe(function (category) {
            _this.inventoryCategorys = category;
            //here only start filter
            _this.filteredinventoryCategorys = _this.inventoryCategoryCtrl.valueChanges
                .startWith(_this.inventoryCategoryCtrl.value)
                .map(function (val) { return _this.displayinventoryCategoryFn(val); })
                .map(function (name) { return _this.filterInventoryCategorys(name); });
        });
        this.MasterDataService.GetInventorySubCategory().subscribe(function (subCategory) {
            _this.inventorySubCategorys = subCategory;
            //here only start filter
            _this.filteredinventorySubCategorys = _this.inventorySubCategoryCtrl.valueChanges
                .startWith(_this.inventorySubCategoryCtrl.value)
                .map(function (val) { return _this.displayinventorySubCategoryFn(val); })
                .map(function (name) { return _this.filterInventorySubCategorys(name); });
        });
    };
    ChargeItemComponent.prototype.onSave = function () {
        var _this = this;
        this.data.inventoryBrandID = this.inventoryBrandCtrl.value.inventoryBrandID;
        this.data.inventoryGenericID = this.inventoryGenericCtrl.value.inventoryGenericID;
        this.data.inventoryATCClassificationID = this.inventoryATCClassificationCtrl.value.inventoryATCClassificationID;
        this.data.inventoryCategoryID = this.inventoryCategoryCtrl.value.inventoryCategoryID;
        this.data.inventorySubCategoryID = this.inventorySubCategoryCtrl.value.inventorySubCategoryID;
        if (this.data.chargeItemID) {
            this.MasterDataService.UpdateInventoryByID(this.data)
                .subscribe(function (x) {
                _this.GDService.openSnackBar('"' + x.inventoryCode + '" Updated Sucessfully!', 'Info');
            });
        }
        else
            this.MasterDataService.CreateInventory(this.data)
                .subscribe(function (x) {
                _this.GDService.openSnackBar('"' + x.inventoryCode + '" Created Sucessfully!', 'Info');
            });
    };
    ChargeItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-charge-item',
            template: __webpack_require__("../../../../../src/app/charge-item/charge-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/charge-item/charge-item.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_GDService_service__["a" /* GDService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_GDService_service__["a" /* GDService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_app_services_masterdata_service__["a" /* MasterDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_services_masterdata_service__["a" /* MasterDataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _d || Object])
    ], ChargeItemComponent);
    return ChargeItemComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=charge-item.component.js.map

/***/ }),

/***/ "../../../../../src/app/dialog-result-example-dialog.html":
/***/ (function(module, exports) {

module.exports = "\n<h2 md-dialog-title>Special menu</h2>\n<md-dialog-content>\n    <div>\n      <md-nav-list>\n        <a *ngFor=\"let navItem of Items\"\n           md-list-item\n           (click)=\"start.close()\"\n           [routerLink]=\"[navItem.route]\">\n          {{navItem.name}}\n        </a>\n      </md-nav-list>\n  \n    </div>\n      \n</md-dialog-content>\n<md-dialog-actions>\n  <button md-button [md-dialog-close]>Close</button>\n</md-dialog-actions>"

/***/ }),

/***/ "../../../../../src/app/episode/diagnosis/diagnosis.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*temporary ui fix */\n:host /deep/ .mat-select-trigger {\n    font-size: 12px;\n    height: inherit;\n    margin-bottom: 15px;\n    margin-top: 2px;\n    \n  }\n  \n  :host /deep/ .mat-select-value-text {\n    line-height: inherit;\n    margin-bottom: 15px;\n    margin-top: 2px;\n  }\n  \n  :host /deep/ .mat-select {\n    font-size: 12px;\n    margin-top: 2px;\n    margin-bottom: 15px;\n    margin-left: 1px;\n  }\n  \n  :host /deep/ .mat-checkbox {\n    font-size: 12px;\n    margin-top: 2px;\n    margin-left: 1px;\n  }\n  \n  :host /deep/ .mat-radio-group {\n    font-size: 12px;\n    margin-top: 2px;\n    margin-left: 1px;\n  }\n  /*temporary ui fix */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/episode/diagnosis/diagnosis.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"toolbar\">\n  <div>\n    <button md-raised-button [disabled]=\"disableSave\" (click)=\"onSave()\">Save</button>\n    <button md-raised-button (click)=\"onNew()\">New</button>\n  </div>\n</div>\n\n<section>\n    <md-card>\n      <md-card-content>\n          <div class=\"container\">\n            <div class=\"two\"> \n              <md-form-field class=\"input-full-width\">\n                <input mdInput placeholder=\"Diagnosis\" [mdAutocomplete]=\"autoDiagnosis\" [formControl]=\"diagnosisCtrl\">\n              </md-form-field>\n              <md-autocomplete #autoDiagnosis=\"mdAutocomplete\" [displayWith]=\"displayDiagnosisFn\">\n                <md-option *ngFor=\"let diagnosis of filteredDiagnosis | async\" [value]=\"diagnosis\">\n                  <span>{{ diagnosis.diagnosisCode }}</span>\n                  <span> ({{diagnosis.diagnosisDescription}}) </span>\n                </md-option>\n              </md-autocomplete>\n            </div>\n          </div>\n          <div class=\"container\">\n            <div> \n              <md-select  class=\"input-full-width\" placeholder=\"Diagnosis Type\" [(ngModel)]=\"data.diagnosisType\" name=\"DiagnosisType\">\n                <md-option *ngFor=\"let dt of diagnosisTypes\" [value]=\"dt.diagnosisTypeID\">\n                  {{dt.diagnosisTypeDesc}}\n                </md-option>\n              </md-select>\n            </div>\n            <div>\n              <md-checkbox  [(ngModel)]=\"data.contactDiagnosis\" name=\"contactDiagnosis\">Contact Diagnosis</md-checkbox>\n            </div>\n            <div>\n              <md-checkbox  [(ngModel)]=\"data.mainDiagnosis\" name=\"mainDiagnosis\">Main Diagnosis</md-checkbox>\n            </div>\n            <div>\n              <md-checkbox  [(ngModel)]=\"data.secondaryDiagnosis\" name=\"secondaryDiagnosis\">Secondary Diagnosis</md-checkbox>\n            </div>\n          </div>\n          <div class=\"container\">\n            <div>\n              <md-checkbox  [(ngModel)]=\"data.externalCauses\" name=\"externalCauses\">External Cause</md-checkbox>\n            </div>\n            <div>\n              <md-checkbox  [(ngModel)]=\"data.chronic\" name=\"chronic\">Chronic</md-checkbox>\n            </div>\n            <div>\n              <md-form-field class=\"input-full-width\">\n                <input [(ngModel)]=\"data.since\" name=\"since\" mdInput placeholder=\"Since\">\n              </md-form-field>\n            </div>\n            <div>\n            </div>\n          </div>\n          <div class=\"container\">\n              <div>\n                  <md-form-field class=\"input-full-width\">\n                      <textarea [(ngModel)]=\"data.remark\" name=\"remark\" mdInput placeholder=\"Medical Note\"></textarea>\n                    </md-form-field>\n              </div>\n          </div>\n\n\n      </md-card-content>\n    </md-card>\n\n    <p>\n      <md-accordion>\n        <md-expansion-panel *ngFor=\"let historyList of historyRecord\">\n            <md-expansion-panel-header>\n              <mat-panel-description></mat-panel-description>\n              <mat-panel-title>\n                <strong><h4 md-line><i class=\"material-icons\">timer</i> {{historyList.created | date:'medium'}} - <strong>{{historyList.diagnosisEntryNo}}</strong></h4></strong>\n              </mat-panel-title>\n            </md-expansion-panel-header>\n                    <p>\n                      <span> <small>Diagnosis: </small><small class=\"highlighter\">{{historyList.diagnosisResource.diagnosisCode}} - {{historyList.diagnosisResource.diagnosisDescription}}</small> </span>\n                    </p> \n                    <p>\n                      <span> <small>Medical Note: </small><small class=\"highlighter\">{{historyList.remark}}</small> </span>\n                    </p> \n                    <p>\n                      <span> \n                      <table class=\"orderTable\">\n                          <thead>\n                          <tr>\n                            <th>Contact Diagnosis</th>\n                            <th>Main Diagnosis</th>\n                            <th>Secondary Diagnosis</th>\n                            <th>External Cause</th>\n                            <th>Chronic</th>\n                            <th>Since</th>\n                          </tr>\n                          </thead>\n                          <tbody>\n                          <tr>\n                          <td>{{historyList.contactDiagnosis}}</td>\n                          <td>{{historyList.mainDiagnosis}}</td>\n                          <td>{{historyList.secondaryDiagnosis}}</td>\n                          <td>{{historyList.externalCauses}}</td>\n                          <td>{{historyList.chronic}}</td>\n                          <td>{{historyList.since}}</td>\n                          </tr>\n                          </tbody>\n                      </table>\n                    </span>\n                  </p>  \n                <md-action-row>\n                    <span>Current Version: <small class=\"highlighter\">{{historyList.version}}</small></span>  \n                    <span>, Updated: <small class=\"highlighter\">{{historyList.created | date:'medium'}}</small> </span>\n                    <span>, By: <small class=\"highlighter\">{{historyList.createdByResource.userFullName}}</small></span>\n                    <span>, Created: <small class=\"highlighter\">{{historyList.created | date:'medium'}}</small> </span>\n                    <span>, By: <small class=\"highlighter\">{{historyList.createdByResource.userFullName}}</small></span>\n                    <span> </span>\n                    <button md-raised-button (click)=\"loadDatabyID(historyList.diagnosisLnID)\"><i class=\"material-icons\">mode_edit</i>Edit</button>\n                    <button md-raised-button (click)=\"loadDatabyID(historyList.diagnosisLnID)\"><i class=\"material-icons\">delete</i>Delete</button>\n                  </md-action-row>\n        </md-expansion-panel>\n      </md-accordion>\n  </section>\n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n "

/***/ }),

/***/ "../../../../../src/app/episode/diagnosis/diagnosis.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiagnosisComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_masterdata_service__ = __webpack_require__("../../../../../src/app/services/masterdata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_GDService_service__ = __webpack_require__("../../../../../src/app/services/GDService.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DiagnosisComponent = (function () {
    function DiagnosisComponent(GDService, MasterDataService, _element, dialog, router) {
        this.GDService = GDService;
        this.MasterDataService = MasterDataService;
        this._element = _element;
        this.dialog = dialog;
        this.router = router;
        this.disableSave = false;
        this.data = {};
        this.diagnosis = [];
        this.myContent = [];
        this.diagnosisTypes = [
            {
                diagnosisTypeID: 'Provisional',
                diagnosisTypeDesc: 'Provisional',
            },
            {
                diagnosisTypeID: 'Differential',
                diagnosisTypeDesc: 'Differential',
            },
            {
                diagnosisTypeID: 'Confirmed',
                diagnosisTypeDesc: 'Confirmed',
            },
        ];
        this.diagnosisCtrl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]({ diagnosisID: 0, diagnosisDescription: '' });
    }
    DiagnosisComponent.prototype.onNew = function () {
        this.disableSave = false;
        this.data = {};
    };
    DiagnosisComponent.prototype.onSave = function () {
        //clear editing cached
        var _this = this;
        if (this.diagnosisCtrl.value.diagnosisID > 0)
            this.data.diagnosisID = this.diagnosisCtrl.value.diagnosisID;
        this.data.patientID = this.patientID;
        this.data.visitID = this.visitID;
        this.data.invoiceHdrID = this.invoiceHdrID;
        this.data.CreatedByID = 1;
        if (this.data.diagnosisLnID) {
            this.MasterDataService.UpdateDiagnosisRecordByID(this.data)
                .subscribe(function (x) {
                _this.GDService.openSnackBar(x.diagnosisEntryNo + '" Updated Sucessfully!', 'Info');
                _this.getHistory();
            }, function (err) {
                _this.GDService.openSnackBar(err, 'Info');
            });
        }
        else
            this.MasterDataService.CreateDiagnosisLn(this.data)
                .subscribe(function (x) {
                _this.GDService.openSnackBar(x.diagnosisEntryNo + '" Created Sucessfully!', 'Info');
                _this.getHistory();
            }, function (err) {
                _this.GDService.openSnackBar(err, 'Info');
            });
    };
    DiagnosisComponent.prototype.loadDatabyID = function (id) {
        var _this = this;
        this.MasterDataService.GetDiagnosisLnByID(id).subscribe(function (hr) {
            _this.data = hr;
            _this.diagnosisCtrl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]({ diagnosisID: hr.diagnosisResource.diagnosisID, diagnosisDescription: hr.diagnosisResource.diagnosisDescription });
            _this.disableSave = false;
        }, function (err) {
            _this.GDService.openSnackBar(err, 'Info');
        });
    };
    DiagnosisComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.diagnosisCtrl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]({ diagnosisID: 0, diagnosisDescription: '' });
        this.filteredDiagnosis = this.diagnosisCtrl.valueChanges
            .debounceTime(400)
            .do(function (value) {
            _this.MasterDataService.GetDiagnosisBySearch(value).subscribe(function (res) {
                _this.diagnosis = res;
            });
        }).delay(500).map(function () { return _this.diagnosis; });
        this.getHistory();
        this.disableSave = false;
    };
    DiagnosisComponent.prototype.getHistory = function () {
        var _this = this;
        this.disableSave = true;
        this.MasterDataService.GetDiagnosisLnByVisit(this.visitID).subscribe(function (hr) {
            _this.historyRecord = hr;
        });
    };
    DiagnosisComponent.prototype.displayDiagnosisFn = function (value) {
        return value && typeof value === 'object' ? value.diagnosisDescription : value;
    };
    DiagnosisComponent.prototype.filterDiagnosis = function (val) {
        return val ? this.diagnosis.filter(function (s) { return new RegExp(val, 'gi').test(s.diagnosisCode); })
            : this.diagnosis;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], DiagnosisComponent.prototype, "patientID", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], DiagnosisComponent.prototype, "visitID", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], DiagnosisComponent.prototype, "invoiceHdrID", void 0);
    DiagnosisComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
            selector: 'app-diagnosis',
            template: __webpack_require__("../../../../../src/app/episode/diagnosis/diagnosis.component.html"),
            styles: [__webpack_require__("../../../../../src/app/episode/diagnosis/diagnosis.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_GDService_service__["a" /* GDService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_GDService_service__["a" /* GDService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_masterdata_service__["a" /* MasterDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_masterdata_service__["a" /* MasterDataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_core__["ElementRef"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__angular_material__["e" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_material__["e" /* MdDialog */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["Router"]) === "function" && _e || Object])
    ], DiagnosisComponent);
    return DiagnosisComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=diagnosis.component.js.map

/***/ }),

/***/ "../../../../../src/app/episode/document/document.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\nbody {\n        font: 24px Helvetica;\n        background: #999999;\n    }\n\n    #main {\n        margin: 0;\n        padding: 1;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-flow: row;\n                flex-flow: row;\n    }\n \n    #main > article {\n        margin: 0px;\n        padding: 1px;\n        -webkit-box-flex: 3;\n            -ms-flex: 3 1 15%;\n                flex: 3 1 15%;\n        -webkit-box-ordinal-group: 3;\n            -ms-flex-order: 2;\n                order: 2;\n        max-width: 15%;\n    }\n\n    #main > nav {\n        margin: 0px;\n        padding: 1px;\n        -webkit-box-flex: 1;\n            -ms-flex: 1 6 15%;\n                flex: 1 6 15%;\n        -webkit-box-ordinal-group: 2;\n            -ms-flex-order: 1;\n                order: 1;\n    }\n  \n    #main > aside {\n        margin: 0px;\n        padding: 1px;\n        -webkit-box-flex: 1;\n            -ms-flex: 1 6 85%;\n                flex: 1 6 85%;\n        -webkit-box-ordinal-group: 4;\n            -ms-flex-order: 3;\n                order: 3;\n        display: block;\n        max-width: 85%;\n    }\n \n    header, footer {\n        display: block;\n        margin: 4px;\n        padding: 5px;\n        min-height: 100px;\n        border: 1px solid #eebb55;\n        border-radius: 7pt;\n        background: #ffeebb;\n    }\n \n    /* Too narrow to support three columns */\n    @media all and (max-width: 640px) {\n        #main, #page {\n            -webkit-box-orient: vertical;\n            -webkit-box-direction: normal;\n                -ms-flex-direction: column;\n                    flex-direction: column;\n        }\n\n        #main > article, #main > nav, #main > aside {\n        /* Return them to document order */\n            -webkit-box-ordinal-group: 1;\n                -ms-flex-order: 0;\n                    order: 0;\n        }\n  \n        #main > nav, #main > aside, header, footer {\n            min-height: 50px;\n            max-height: 50px;\n        }\n    }\n\n\n\n\n    ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/episode/document/document.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"toolbar\">\n    <div>\n        <button md-raised-button>Save</button>\n        <button md-raised-button>Edit</button>\n        <button md-raised-button>New</button>\n        <button md-raised-button>Void</button>\n        <button md-mini-fab (click)=\"activateSpeech()\"><i class=\"material-icons\">{{showRecording ? 'hearing' : 'mic'}}</i></button>\n    </div>\n</div>\n<section>\n  <div id='main'>\n      <article>\n        <md-list dense>\n            <h3 md-subheader>Documents</h3>\n            <md-list-item *ngFor=\"let document of documents\">\n                <h4 md-line><a [routerLink]=\"[document.name]\">{{document.name}}</a></h4>\n                <p md-line>{{document.edited | date}}</p>\n\n            </md-list-item>\n        </md-list>\n    </article>\n    <aside>\n        <p>New Document</p> <div>{{showRecording ? 'Listening...' : 'Record'}}</div>\n        <p-editor [(ngModel)]=\"text\" [style]=\"{'height':'320px'}\"></p-editor>\n    </aside>\n  </div>\n  </section>"

/***/ }),

/***/ "../../../../../src/app/episode/document/document.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_SpeechRecognitionService__ = __webpack_require__("../../../../../src/app/services/SpeechRecognitionService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DocumentComponent = (function () {
    function DocumentComponent(speechRecognitionService) {
        this.speechRecognitionService = speechRecognitionService;
        this.documents = [
            { name: 'Documents 1', edited: new Date('1/1/16'), },
            { name: 'Documents 2', edited: new Date('1/17/16'), },
            { name: 'Documents 3', edited: new Date('1/28/16'), }
        ];
        this.showRecording = false;
        this.speechData = "";
        this.text = "";
    }
    DocumentComponent.prototype.ngOnInit = function () {
    };
    DocumentComponent.prototype.ngOnDestroy = function () {
        this.speechRecognitionService.DestroySpeechObject();
    };
    DocumentComponent.prototype.activateSpeech = function () {
        var _this = this;
        this.showRecording = true;
        this.speechRecognitionService.record()
            .subscribe(
        //listener
        function (value) {
            _this.speechData = value;
            console.log(value);
            _this.text = _this.text + _this.speechData;
        }, 
        //errror
        function (err) {
            console.log(err);
            if (err.error == "no-speech") {
                console.log("--restatring service--");
                _this.text = "--restatring service--";
                _this.activateSpeech();
            }
        }, 
        //completion
        function () {
            //this.showSearchButton = true;
            console.log("--complete--");
            _this.text = "--complete--";
            _this.activateSpeech();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], DocumentComponent.prototype, "patientID", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], DocumentComponent.prototype, "visitID", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], DocumentComponent.prototype, "invoiceHdrID", void 0);
    DocumentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-document',
            template: __webpack_require__("../../../../../src/app/episode/document/document.component.html"),
            styles: [__webpack_require__("../../../../../src/app/episode/document/document.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_SpeechRecognitionService__["a" /* SpeechRecognitionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_SpeechRecognitionService__["a" /* SpeechRecognitionService */]) === "function" && _a || Object])
    ], DocumentComponent);
    return DocumentComponent;
    var _a;
}());

//# sourceMappingURL=document.component.js.map

/***/ }),

/***/ "../../../../../src/app/episode/episode.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n        font: 24px Helvetica;\n        background: #999999;\n    }\n\n    #main {\n        min-height: 800px;\n        margin: 0;\n        padding: 0;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-flow: row;\n                flex-flow: row;\n    }\n \n    #main > article {\n        margin: 2px;\n        padding: 3px;\n        -webkit-box-flex: 3;\n            -ms-flex: 3 1 80%;\n                flex: 3 1 80%;\n        -webkit-box-ordinal-group: 3;\n            -ms-flex-order: 2;\n                order: 2;\n        max-width: 80%;\n    }\n\n    #main > nav {\n        margin: 2px;\n        padding: 3px;\n        -webkit-box-flex: 1;\n            -ms-flex: 1 6 20%;\n                flex: 1 6 20%;\n        -webkit-box-ordinal-group: 2;\n            -ms-flex-order: 1;\n                order: 1;\n    }\n  \n    #main > aside {\n        margin: 2px;\n        padding: 3px;\n        -webkit-box-flex: 1;\n            -ms-flex: 1 6 20%;\n                flex: 1 6 20%;\n        -webkit-box-ordinal-group: 4;\n            -ms-flex-order: 3;\n                order: 3;\n        display: block;\n        max-width: 20%;\n    }\n \n    header, footer {\n        display: block;\n        margin: 2px;\n        padding: 3px;\n        min-height: 100px;\n        border: 1px solid #eebb55;\n        border-radius: 7pt;\n        background: #ffeebb;\n    }\n \n    /* Too narrow to support three columns */\n    @media all and (max-width: 640px) {\n        #main, #page {\n            -webkit-box-orient: vertical;\n            -webkit-box-direction: normal;\n                -ms-flex-direction: column;\n                    flex-direction: column;\n        }\n\n        #main > article, #main > nav, #main > aside {\n        /* Return them to document order */\n            -webkit-box-ordinal-group: 1;\n                -ms-flex-order: 0;\n                    order: 0;\n        }\n  \n        #main > nav, #main > aside, header, footer {\n            min-height: 50px;\n            max-height: 50px;\n        }\n    }\n\n\n.maxit {\n        -webkit-box-flex: 3;\n            -ms-flex: 3 1 100%;\n                flex: 3 1 100%;\n        max-width: 100%;\n}\n\n/*temporary ui fix */\n/*temporary ui fix */\n:host /deep/ .mat-select-trigger {\n    font-size: 12px;\n    height: inherit;\n    margin-bottom: 15px;\n    margin-top: 2px;\n    \n  }\n  \n  :host /deep/ .mat-select-value-text {\n    line-height: inherit;\n    margin-bottom: 15px;\n    margin-top: 2px;\n  }\n  \n  :host /deep/ .mat-select {\n    font-size: 12px;\n    margin-top: 2px;\n    margin-bottom: 15px;\n    margin-left: 1px;\n  }\n  \n  :host /deep/ .mat-checkbox {\n    font-size: 12px;\n    margin-top: 2px;\n    margin-left: 1px;\n  }\n  \n  :host /deep/ .mat-radio-group {\n    font-size: 12px;\n    margin-top: 2px;\n    margin-left: 1px;\n  }\n  /*temporary ui fix */\n  /*temporary ui fix */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/episode/episode.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\n\n  <md-expansion-panel  #myPanel>\n    <md-expansion-panel-header>\n      <mat-panel-description>{{data.visitType}} - <a [routerLink]=\"['/visit/'+data.visitID]\">{{data.visitNo}}</a>, Payment Mode: {{data.cashPatient ? 'Cash' : 'Non-Cash' }}</mat-panel-description>\n      <mat-panel-title>\n        <strong>{{data.visitID}} <a [routerLink]=\"['/patient/'+data.patientID]\">{{data.patientResource.name}}</a></strong>\n        , {{data.patientResource.gender =='M' ? 'Male' : 'Female'}}\n      </mat-panel-title>\n    </md-expansion-panel-header>\n    <div class=\"containerheader\">\n      <div>\n          <img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRknSmtr_d_d9kbGl1imGj_jJWm5pjlM9sKfmBT0gzChQBeujWoHg\" height=\"120\" width=\"120\">\n      </div>\n        <div>\n          <md-list dense>\n            <md-list-item>\n               <p md-line>\n                <span>MRN: {{data.patientID}}</span>\n              </p>\n               <p md-line>\n                <span>{{data.patientResource.identificationTypeID}}:{{data.patientResource.identificationValue}}</span>\n              </p>\n               <p md-line>\n                <span>D.O.B: {{data.patientResource.dob | date: 'dd/MM/yyyy'}}(36 yr 5 mth 21 d)</span>\n              </p>\n            </md-list-item>\n          </md-list>\n        </div>\n        <div>\n          <md-list dense> \n            <md-list-item>\n              <h4 md-line><strong>Payment Mode</strong></h4>\n              <p md-line>\n                <span>{{data.insuranceResource.insuranceName}}</span>\n              </p>\n              <p md-line>\n                <span>{{data.payorResource.payorName}}</span>\n              </p>\n              <p md-line>\n                <span>Current Bill: RM534.00 </span>\n              </p>\n              <p md-line>\n                <span>Outstanding Amount: RM534.00 </span>\n              </p>\n            </md-list-item>\n          </md-list>\n        </div>\n        <div>\n          <md-list dense>\n            <md-list-item>\n              <h4 md-line><strong>Warning</strong></h4>\n              <p md-line>\n                <span>Nuts</span>\n              </p>\n              <p md-line>\n                <span>Panadol, Uphamol, Paraceptamol, Seafood, Milk, Daily Products</span>\n              </p>\n            </md-list-item>\n          </md-list>\n        </div>\n      </div>\n  </md-expansion-panel>\n\n  <form>\n      \n    <md-card>\n      <md-card-content>\n        <md-tab-group>\n          <md-tab>\n            <ng-template md-tab-label>\n              Timeline\n            </ng-template>\n            <md-card>\n              <md-card-content>\n                <app-timeline [patientID]=\"data.patientID\" [visitID]=\"data.visitID\" [invoiceHdrID]=\"data.invoiceHdrID\"></app-timeline>\n              </md-card-content>\n            </md-card>\n          </md-tab>\n          <md-tab>\n            <ng-template md-tab-label>\n              Diagnosis\n            </ng-template>\n            <md-card>\n              <md-card-content>\n                <app-diagnosis [patientID]=\"data.patientID\" [visitID]=\"data.visitID\" [invoiceHdrID]=\"data.invoiceHdrID\"></app-diagnosis>\n              </md-card-content>\n            </md-card>\n          </md-tab>\n          <md-tab>\n            <ng-template md-tab-label>\n              Vital Signs\n            </ng-template>\n            <md-card>\n              <md-card-content>\n                <app-vital [patientID]=\"data.patientID\" [visitID]=\"data.visitID\" [invoiceHdrID]=\"data.invoiceHdrID\"></app-vital>\n              </md-card-content>\n            </md-card>\n          </md-tab>\n          <md-tab>\n            <ng-template md-tab-label>\n              Procedure\n            </ng-template>\n            <md-card>\n              <md-card-content>\n                <app-procedure [patientID]=\"data.patientID\" [visitID]=\"data.visitID\" [invoiceHdrID]=\"data.invoiceHdrID\"></app-procedure>\n              </md-card-content>\n            </md-card>\n          </md-tab>\n          <md-tab>\n            <ng-template md-tab-label>\n              Medication\n            </ng-template>\n            <md-card>\n              <md-card-content>\n                <app-medication [patientID]=\"data.patientID\" [visitID]=\"data.visitID\" [invoiceHdrID]=\"data.invoiceHdrID\"></app-medication>\n              </md-card-content>\n            </md-card>\n          </md-tab>\n          <md-tab>\n            <ng-template md-tab-label>\n              Laboratory\n            </ng-template>\n            <md-card>\n              <md-card-content>\n                <app-laboratory [patientID]=\"data.patientID\" [visitID]=\"data.visitID\" [invoiceHdrID]=\"data.invoiceHdrID\"></app-laboratory>\n              </md-card-content>\n            </md-card>\n          </md-tab>\n          <md-tab>\n            <ng-template md-tab-label>\n              Radiology\n            </ng-template>\n            <md-card>\n              <md-card-content>\n                <app-radiology [patientID]=\"data.patientID\" [visitID]=\"data.visitID\" [invoiceHdrID]=\"data.invoiceHdrID\"></app-radiology>\n              </md-card-content>\n            </md-card>\n          </md-tab>\n          <md-tab>\n            <ng-template md-tab-label>\n              Document\n            </ng-template>\n            <md-card>\n              <md-card-content>\n                <app-document [patientID]=\"data.patientID\" [visitID]=\"data.visitID\" [invoiceHdrID]=\"data.invoiceHdrID\"></app-document>\n              </md-card-content>\n            </md-card>\n          </md-tab>\n        </md-tab-group>\n      </md-card-content>\n    </md-card>\n  </form>\n\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/episode/episode.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EpisodeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_GDService_service__ = __webpack_require__("../../../../../src/app/services/GDService.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_masterdata_service__ = __webpack_require__("../../../../../src/app/services/masterdata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EpisodeComponent = (function () {
    function EpisodeComponent(GDService, MasterDataService, route, router) {
        var _this = this;
        this.GDService = GDService;
        this.MasterDataService = MasterDataService;
        this.route = route;
        this.router = router;
        this.data = {
            insuranceResource: {},
            payorResource: {},
            patientResource: {}
        };
        this.patientDetails = [
            { property: 'Visit ID', value: 'VIT00010020', },
            { property: 'Visit Date-Time', value: '01-02-2016 10:30AM', },
            { property: 'Payment Mode', value: 'AIA Premium Policy, AIA Berhard', }
        ];
        this.warnings = [
            { value: 'Nuts', },
            { value: 'Panadol, Uphamol, Paraceptamol', }
        ];
        route.params.subscribe(function (p) {
            if (p['id'] != null)
                _this.data.visitID = +p['id'];
            if (_this.data.visitID) {
                _this.retrieveData();
            }
            else {
                _this.data.visitID = 1;
                _this.retrieveData();
            }
        });
    }
    EpisodeComponent.prototype.retrieveData = function () {
        var _this = this;
        this.MasterDataService.GetVisitByID(this.data.visitID)
            .subscribe(function (i) {
            _this.data = i;
            if (i.insuranceResource == null)
                _this.data.insuranceResource = {};
            if (i.payorResource == null)
                _this.data.payorResource = {};
            if (i.patientResource == null)
                _this.data.patientResource = {};
            //this.patientVisit = [{patientID: this.data.patientID ,visitID: this.data.visitID}];
        }, function (err) {
            if (err.status == 404)
                _this.GDService.openSnackBar(err, 'Info');
        });
    };
    EpisodeComponent.prototype.openSnackBar = function (message, action) {
        this.GDService.snackBar.open(message, action, {
            duration: 2000,
        });
    };
    EpisodeComponent.prototype.ngOnInit = function () {
    };
    EpisodeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'app-episode',
            template: __webpack_require__("../../../../../src/app/episode/episode.component.html"),
            styles: [__webpack_require__("../../../../../src/app/episode/episode.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_GDService_service__["a" /* GDService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_GDService_service__["a" /* GDService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_masterdata_service__["a" /* MasterDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_masterdata_service__["a" /* MasterDataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _d || Object])
    ], EpisodeComponent);
    return EpisodeComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=episode.component.js.map

/***/ }),

/***/ "../../../../../src/app/episode/laboratory/dialog-laboratory-search.html":
/***/ (function(module, exports) {

module.exports = "<h2 md-dialog-title>Laboratory Listing</h2>\n<md-dialog-content>\n    <div>\n        <dx-data-grid  #grid\n        id=\"gridContainer\" \n        [dataSource]=\"dataSource\"\n        [allowColumnResizing]=\"true\"\n         \n        [columnAutoWidth]=\"true\"\n        [allowColumnReordering]=\"true\"\n        (onSelectionChanged)=\"getSelectedItem()\">    \n        <dxo-selection\n        \n        mode=\"multiple\"></dxo-selection>\n        <dxo-filter-row\n        [visible]=\"true\"></dxo-filter-row>\n        <dxo-paging [pageSize]=\"10\"></dxo-paging>\n        <dxo-pager \n            [showPageSizeSelector]=\"true\"\n            [allowedPageSizes]=\"[5,10]\"\n            [showInfo]=\"true\">\n        </dxo-pager>\n        <dxo-group-panel [visible]=\"true\"></dxo-group-panel>\n        <dxo-grouping #expand [autoExpandAll]=\"true\"></dxo-grouping>\n        <dxi-column dataField=\"catalog\" [groupIndex]=\"0\"></dxi-column>\n        <dxi-column dataField=\"chargeItemCode\"></dxi-column>\n        <dxi-column dataField=\"chargeItemDescription\"></dxi-column>\n        <dxi-column dataField=\"analysis\"></dxi-column>\n        </dx-data-grid>\n  \n      </div>\n      \n</md-dialog-content>\n<md-dialog-actions>\n  <button md-button [md-dialog-close]=\"data.returnedResult\">Close</button>\n</md-dialog-actions>"

/***/ }),

/***/ "../../../../../src/app/episode/laboratory/laboratory.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*temporary ui fix */\n:host /deep/ .mat-select-trigger {\n    font-size: 12px;\n    height: inherit;\n    margin-bottom: 15px;\n    margin-top: 2px;\n    \n  }\n  \n  :host /deep/ .mat-select-value-text {\n    line-height: inherit;\n    margin-bottom: 15px;\n    margin-top: 2px;\n  }\n  \n  :host /deep/ .mat-select {\n    font-size: 12px;\n    margin-top: 2px;\n    margin-bottom: 15px;\n    margin-left: 1px;\n  }\n  \n  :host /deep/ .mat-checkbox {\n    font-size: 12px;\n    margin-top: 2px;\n    margin-left: 1px;\n  }\n  \n  :host /deep/ .mat-radio-group {\n    font-size: 12px;\n    margin-top: 2px;\n    margin-left: 1px;\n  }\n  /*temporary ui fix */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/episode/laboratory/laboratory.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\n  <div class=\"toolbar\">\n    <div>\n      <button md-raised-button [disabled]=\"disableSave\" (click)=\"onSave()\">Save</button>\n      <button md-raised-button (click)=\"onNew()\">New</button>\n    </div>\n  </div> \n  <md-card>\n    <md-card-content>\n      <div class=\"container\">\n        <div>\n          <md-select placeholder=\"Laboratory\" [(ngModel)]=\"data.laboratoryUnitID\" name=\"laboratoryUnitID\" class=\"input-full-width\">\n            <md-option *ngFor=\"let lu of laboratoryUnit\" [value]=\"lu.laboratoryUnitID\">\n                {{lu.laboratoryUnitName}}\n            </md-option>\n          </md-select>\n        </div>\n        <div>\n          <button md-raised-button color=\"accent\" (click)=\"toggleSearch()\"><i class=\"material-icons\">search</i>Search Laboratory Items...</button>\n        </div>\n        <div>\n            <md-radio-group [(ngModel)]=\"data.priority\" class=\"input-full-width\">\n                <md-radio-button *ngFor=\"let priority of priorities\" [value]=\"priority\" [checked]=\"priority==data.priority\">\n                    {{priority}}\n                </md-radio-button>\n            </md-radio-group>\n        </div>\n      </div>\n\n      <div class=\"container\">\n          <div>\n              <md-form-field class=\"input-full-width\">\n                <input mdInput placeholder=\"Ordered By\" [mdAutocomplete]=\"orderedBy\" [formControl]=\"orderedByCtrl\">\n                \n                <md-autocomplete #orderedBy=\"mdAutocomplete\" [displayWith]=\"displayDoctorFn\">\n                <md-option *ngFor=\"let doctor of filteredOrderedBy | async\" [value]=\"doctor\">\n                  <span>{{ doctor.userFullName }}, </span>\n                  <small><strong>Initial:</strong>{{doctor.userInitial}}, <strong>Speciality:</strong>{{doctor.specialityID}}</small>\n                </md-option>\n                </md-autocomplete>\n              </md-form-field>\n          </div>\n          <div>\n              <md-form-field class=\"input-full-width\">\n                <input mdInput placeholder=\"Referred By\" [mdAutocomplete]=\"referredBy\" [formControl]=\"referredByCtrl\">\n                \n                <md-autocomplete #referredBy=\"mdAutocomplete\" [displayWith]=\"displayDoctorFn\">\n                <md-option *ngFor=\"let doctor of filteredReferredBy | async\" [value]=\"doctor\">\n                  <span>{{ doctor.userFullName }}, </span>\n                  <small><strong>Initial:</strong>{{doctor.userInitial}}, <strong>Speciality:</strong>{{doctor.specialityID}}</small>\n                </md-option>\n                </md-autocomplete>\n              </md-form-field>\n          </div>\n          <div>\n              <md-form-field class=\"input-full-width\">\n                <input mdInput placeholder=\"Reply To\" [mdAutocomplete]=\"replyTo\" [formControl]=\"replyToCtrl\">\n                \n                <md-autocomplete #replyTo=\"mdAutocomplete\" [displayWith]=\"displayDoctorFn\">\n                <md-option *ngFor=\"let doctor of filteredReplyTo | async\" [value]=\"doctor\">\n                  <span>{{ doctor.userFullName }}, </span>\n                  <small><strong>Initial:</strong>{{doctor.userInitial}}, <strong>Speciality:</strong>{{doctor.specialityID}}</small>\n                </md-option>\n                </md-autocomplete>\n              </md-form-field>\n          </div>\n      </div>\n      <div class=\"container\">\n          <div>\n              <md-form-field class=\"input-full-width\">\n                <input mdInput placeholder=\"Reported By\" [mdAutocomplete]=\"reportedBy\" [formControl]=\"reportedByCtrl\">\n                \n                <md-autocomplete #reportedBy=\"mdAutocomplete\" [displayWith]=\"displayDoctorFn\">\n                <md-option *ngFor=\"let doctor of filteredReportedBy | async\" [value]=\"doctor\">\n                  <span>{{ doctor.userFullName }}, </span>\n                  <small><strong>Initial:</strong>{{doctor.userInitial}}, <strong>Speciality:</strong>{{doctor.specialityID}}</small>\n                </md-option>\n                </md-autocomplete>\n              </md-form-field>\n        \n          </div>\n          <div>\n            <md-form-field class=\"input-full-width\">\n                <input mdInput [mdDatepicker]=\"picker\" placeholder=\"Requested Sample Date-Time\">\n                <md-datepicker-toggle mdSuffix [for]=\"picker\"></md-datepicker-toggle>\n                <md-datepicker #picker></md-datepicker>\n              </md-form-field>\n          </div>\n      </div>\n\n        <div>\n          <dx-data-grid style=\"display:block;\" #grid\n          id=\"gridContainer\" \n          [dataSource]=\"returnedResult\"\n          [allowColumnResizing]=\"true\"\n           \n          [columnAutoWidth]=\"true\"\n          [allowColumnReordering]=\"true\">  \n          <dxo-editing \n              mode=\"cell\"\n              [allowUpdating]=\"true\"\n              [allowDeleting]=\"true\">\n          </dxo-editing>\n          <dxi-column dataField=\"catalog\"></dxi-column>\n          <dxi-column dataField=\"chargeItemCode\"></dxi-column>\n          <dxi-column dataField=\"chargeItemDescription\"></dxi-column>\n          <dxi-column dataField=\"analysis\"></dxi-column>\n          <dxi-column *ngIf=\"toShow\" dataField=\"billPrice\" dataType=\"number\"></dxi-column>\n          </dx-data-grid>\n    \n        </div>     \n\n      <div class=\"container\">\n            <md-form-field class=\"input-full-width\">\n              <textarea mdInput [(ngModel)]=\"data.remark\" name=\"remark\" placeholder=\"Medical Note\"></textarea>\n            </md-form-field>\n      </div>\n    </md-card-content>\n  </md-card>\n  <p>\n    <md-accordion>\n      <md-expansion-panel *ngFor=\"let historyList of historyRecord\" >\n\n          <md-expansion-panel-header>\n            <mat-panel-description></mat-panel-description>\n            <mat-panel-title>\n              <strong><h4 md-line><i class=\"material-icons\">timer</i> {{historyList.created | date:'medium'}} - <strong>{{historyList.laboratoryOrderNo}}</strong></h4></strong>\n            </mat-panel-title>\n          </md-expansion-panel-header>\n\n                  <p>\n                      <span> <small>Ordered By: </small><small class=\"highlighter\">{{historyList.orderedByResource?.userFullName}}</small> </span>\n                      <span> <small>Referred By: </small><small class=\"highlighter\">{{historyList.referredByResource?.userFullName}}</small> </span>\n                      <span> <small>Reply To: </small><small class=\"highlighter\">{{historyList.replyToResource?.userFullName}}</small> </span>\n                      <span> <small>Reported By: </small><small class=\"highlighter\">{{historyList.reportedByResource?.userFullName}}</small> </span>\n\n                  </p>\n                  <p>\n                    <span> <small>Priority: </small><small class=\"highlighter\">{{historyList.priority}}</small> </span>\n                  </p>\n                  <p>\n                    <span> <small>Medical Note:  </small><small class=\"highlighter\">{{historyList.remark}}</small> </span>\n                  </p> \n                  <p>\n                      <span> \n                      <table class=\"orderTable\">\n                          <thead>\n                          <tr>\n                            <th>#</th>\n                            <th>Catalog</th>\n                            <th>Laboratory Code</th>\n                            <th>Analysis</th>\n                            <th>Price</th>\n                          </tr>\n                          </thead>\n                          <tbody>\n                          <tr *ngFor=\"let orderList of historyList.laboratoryLnResource; let i=index\">\n                          <td>{{i+1}}</td>\n                          <td>{{orderList.chargeItemResource.catalog}}</td>\n                          <td>{{orderList.chargeItemResource.chargeItemCode}}</td>\n                          <td>{{orderList.chargeItemResource.analysis}}</td>\n                          <td>{{orderList.billPrice}}</td>\n                          </tr>\n                          </tbody>\n                      </table>\n                    </span>\n                  </p>  \n              <md-action-row>\n                  <span>Current Version: <small class=\"highlighter\">{{historyList.version}}</small></span>  \n                  <span>, Updated: <small class=\"highlighter\">{{historyList.created | date:'medium'}}</small> </span>\n                  <span>, By: <small class=\"highlighter\">{{historyList.createdByResource.userFullName}}</small></span>\n                  <span>, Created: <small class=\"highlighter\">{{historyList.created | date:'medium'}}</small> </span>\n                  <span>, By: <small class=\"highlighter\">{{historyList.createdByResource.userFullName}}</small></span>\n                  <span> </span>\n                  <button md-raised-button (click)=\"loadDatabyID(historyList.laboratoryHdrID)\"><i class=\"material-icons\">mode_edit</i>Edit</button>\n                  <button md-raised-button (click)=\"loadDatabyID(historyList.laboratoryHdrID)\"><i class=\"material-icons\">delete</i>Delete</button>\n                </md-action-row>\n      </md-expansion-panel>\n    </md-accordion>\n</section>\n\n\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/episode/laboratory/laboratory.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LaboratoryComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogResultLaboratorySearch; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_GDService_service__ = __webpack_require__("../../../../../src/app/services/GDService.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_masterdata_service__ = __webpack_require__("../../../../../src/app/services/masterdata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_devextreme_angular__ = __webpack_require__("../../../../devextreme-angular/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_devextreme_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_devextreme_angular__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var LaboratoryComponent = (function () {
    function LaboratoryComponent(GDService, MasterDataService, _element, dialog, router) {
        this.GDService = GDService;
        this.MasterDataService = MasterDataService;
        this._element = _element;
        this.dialog = dialog;
        this.router = router;
        this.disableSave = false;
        this.returnedResult = {};
        this.data = { laboratoryLnResource: {} };
        this.toShow = true;
        this.priorities = ['Urgent', 'Stat', 'Routine'];
        this.orderedByCtrl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]({ dgUserID: 0, userFullName: '' });
        this.referredByCtrl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]({ dgUserID: 0, userFullName: '' });
        this.replyToCtrl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]({ dgUserID: 0, userFullName: '' });
        this.reportedByCtrl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]({ dgUserID: 0, userFullName: '' });
    }
    LaboratoryComponent.prototype.displayDoctorFn = function (value) {
        return value && typeof value === 'object' ? value.userFullName : value;
    };
    LaboratoryComponent.prototype.filterDoctors = function (val) {
        //`^${val}`
        return val ? this.doctors.filter(function (s) { return new RegExp(val, 'gi').test(s.userFullName); })
            : this.doctors;
    };
    LaboratoryComponent.prototype.onNew = function () {
        this.disableSave = false;
        this.data = { laboratoryLnResource: {} };
        this.returnedResult = {};
        this.orderedByCtrl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]({ dgUserID: 0, userFullName: '' });
        this.referredByCtrl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]({ dgUserID: 0, userFullName: '' });
        this.replyToCtrl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]({ dgUserID: 0, userFullName: '' });
        this.reportedByCtrl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]({ dgUserID: 0, userFullName: '' });
    };
    LaboratoryComponent.prototype.onSave = function () {
        var _this = this;
        //clear editing cached
        this.data.laboratoryLnResource = this.returnedResult;
        if (this.orderedByCtrl.value.dgUserID > 0)
            this.data.orderedByID = this.orderedByCtrl.value.dgUserID;
        if (this.referredByCtrl.value.dgUserID > 0)
            this.data.referredByID = this.referredByCtrl.value.dgUserID;
        if (this.replyToCtrl.value.dgUserID > 0)
            this.data.replyToID = this.replyToCtrl.value.dgUserID;
        if (this.reportedByCtrl.value.dgUserID > 0)
            this.data.reportedByID = this.reportedByCtrl.value.dgUserID;
        this.data.patientID = this.patientID;
        this.data.visitID = this.visitID;
        this.data.invoiceHdrID = this.invoiceHdrID;
        this.data.CreatedByID = 1;
        if (this.data.laboratoryHdrID) {
            this.MasterDataService.CreateLaboratoryRecord(this.data)
                .subscribe(function (x) {
                _this.GDService.openSnackBar(x.laboratoryOrderNo + '" Updated Sucessfully!', 'Info');
                _this.getHistory();
            }, function (err) {
                _this.GDService.openSnackBar(err, 'Info');
            });
        }
        else
            this.MasterDataService.CreateLaboratoryRecord(this.data)
                .subscribe(function (x) {
                _this.GDService.openSnackBar(x.laboratoryOrderNo + '" Created Sucessfully!', 'Info');
                _this.getHistory();
            }, function (err) {
                _this.GDService.openSnackBar(err, 'Info');
            });
    };
    LaboratoryComponent.prototype.loadDatabyID = function (id) {
        var _this = this;
        this.MasterDataService.GetLaboratoryByID(id).subscribe(function (hr) {
            _this.data = hr;
            if (_this.data.orderedByID != null)
                _this.orderedByCtrl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]({ dgUserID: hr.orderedByResource.dgUserID, userFullName: hr.orderedByResource.userFullName });
            if (_this.data.referredByID != null)
                _this.referredByCtrl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]({ dgUserID: hr.referredByResource.dgUserID, userFullName: hr.referredByResource.userFullName });
            if (_this.data.replyToID != null)
                _this.replyToCtrl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]({ dgUserID: hr.replyToResource.dgUserID, userFullName: hr.replyToResource.userFullName });
            if (_this.data.reportedByID != null)
                _this.reportedByCtrl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]({ dgUserID: hr.reportedByResource.dgUserID, userFullName: hr.reportedByResource.userFullName });
            for (var _i = 0, _a = hr.laboratoryLnResource; _i < _a.length; _i++) {
                var modLn = _a[_i];
                modLn.catalog = modLn.chargeItemResource.catalog;
                modLn.chargeItemCode = modLn.chargeItemResource.chargeItemCode;
                modLn.analysis = modLn.chargeItemResource.analysis;
                modLn.chargeItemDescription = modLn.chargeItemResource.chargeItemDescription;
            }
            _this.returnedResult = hr.laboratoryLnResource;
            _this.disableSave = false;
        }, function (err) {
            _this.GDService.openSnackBar(err, 'Info');
        });
    };
    LaboratoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.MasterDataService.GetDGUser().subscribe(function (doctor) {
            _this.doctors = doctor;
            _this.filteredOrderedBy = _this.orderedByCtrl.valueChanges
                .startWith(_this.orderedByCtrl.value)
                .map(function (val) { return _this.displayDoctorFn(val); })
                .map(function (name) { return _this.filterDoctors(name); });
            _this.filteredReferredBy = _this.referredByCtrl.valueChanges
                .startWith(_this.referredByCtrl.value)
                .map(function (val) { return _this.displayDoctorFn(val); })
                .map(function (name) { return _this.filterDoctors(name); });
            _this.filteredReplyTo = _this.replyToCtrl.valueChanges
                .startWith(_this.replyToCtrl.value)
                .map(function (val) { return _this.displayDoctorFn(val); })
                .map(function (name) { return _this.filterDoctors(name); });
            _this.filteredReportedBy = _this.reportedByCtrl.valueChanges
                .startWith(_this.reportedByCtrl.value)
                .map(function (val) { return _this.displayDoctorFn(val); })
                .map(function (name) { return _this.filterDoctors(name); });
        });
        this.MasterDataService.GetLaboratoryUnit().subscribe(function (laboratoryUnit) {
            _this.laboratoryUnit = laboratoryUnit;
        });
        this.getHistory();
        this.disableSave = false;
    };
    LaboratoryComponent.prototype.getHistory = function () {
        var _this = this;
        this.disableSave = true;
        this.MasterDataService.GetLaboratoryByVisit(this.visitID).subscribe(function (hr) {
            _this.historyRecord = hr;
        });
    };
    LaboratoryComponent.prototype.toggleSearch = function () {
        var _this = this;
        var dialogRef = this.dialog.open(DialogResultLaboratorySearch, {
            height: '650px',
            width: '900px',
            data: {
                refdata: this.returnedResult
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.returnedResult = result;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], LaboratoryComponent.prototype, "patientID", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], LaboratoryComponent.prototype, "visitID", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], LaboratoryComponent.prototype, "invoiceHdrID", void 0);
    LaboratoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-laboratory',
            template: __webpack_require__("../../../../../src/app/episode/laboratory/laboratory.component.html"),
            styles: [__webpack_require__("../../../../../src/app/episode/laboratory/laboratory.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_GDService_service__["a" /* GDService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_GDService_service__["a" /* GDService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_masterdata_service__["a" /* MasterDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_masterdata_service__["a" /* MasterDataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_core__["ElementRef"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MdDialog */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"]) === "function" && _e || Object])
    ], LaboratoryComponent);
    return LaboratoryComponent;
    var _a, _b, _c, _d, _e;
}());

var DialogResultLaboratorySearch = (function () {
    function DialogResultLaboratorySearch(dialogRef, MasterDataService, data) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.MasterDataService = MasterDataService;
        this.data = data;
        this.MasterDataService.GetChargeItemListingByType("LABORATORY")
            .subscribe(function (x) {
            _this.dataSource = x;
        });
    }
    DialogResultLaboratorySearch.prototype.getSelectedItem = function () {
        this.data.returnedResult = this.dataGrid.instance.getSelectedRowKeys();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_6_devextreme_angular__["DxDataGridComponent"]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6_devextreme_angular__["DxDataGridComponent"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_devextreme_angular__["DxDataGridComponent"]) === "function" && _a || Object)
    ], DialogResultLaboratorySearch.prototype, "dataGrid", void 0);
    DialogResultLaboratorySearch = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'dialog-laboratory-search',
            template: __webpack_require__("../../../../../src/app/episode/laboratory/dialog-laboratory-search.html"),
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MD_DIALOG_DATA */])),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MdDialogRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_masterdata_service__["a" /* MasterDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_masterdata_service__["a" /* MasterDataService */]) === "function" && _c || Object, Object])
    ], DialogResultLaboratorySearch);
    return DialogResultLaboratorySearch;
    var _a, _b, _c;
}());

//# sourceMappingURL=laboratory.component.js.map

/***/ }),

/***/ "../../../../../src/app/episode/medication/dialog-medication-search.html":
/***/ (function(module, exports) {

module.exports = "<h2 md-dialog-title>Medication Listing</h2>\n<md-dialog-content>\n    <div>\n        <dx-data-grid  #grid\n        id=\"gridContainer\" \n        [dataSource]=\"dataSource\"\n        [allowColumnResizing]=\"true\"\n         \n        [columnAutoWidth]=\"true\"\n        [allowColumnReordering]=\"true\"\n        (onSelectionChanged)=\"getSelectedItem()\">    \n        <dxo-selection\n        \n        mode=\"multiple\"></dxo-selection>\n        <dxo-filter-row\n        [visible]=\"true\"></dxo-filter-row>\n        <dxo-paging [pageSize]=\"10\"></dxo-paging>\n        <dxo-pager \n            [showPageSizeSelector]=\"true\"\n            [allowedPageSizes]=\"[5,10]\"\n            [showInfo]=\"true\">\n        </dxo-pager>\n        <dxo-group-panel [visible]=\"true\"></dxo-group-panel>\n        <dxo-grouping #expand [autoExpandAll]=\"true\"></dxo-grouping>\n        <dxi-column dataField=\"catalog\" [groupIndex]=\"0\"></dxi-column>\n        <dxi-column dataField=\"chargeItemCode\"></dxi-column>\n        <dxi-column dataField=\"chargeItemDescription\"></dxi-column>\n        <dxi-column dataField=\"analysis\"></dxi-column>\n        </dx-data-grid>\n  \n      </div>\n      \n</md-dialog-content>\n<md-dialog-actions>\n  <button md-button [md-dialog-close]=\"data.returnedResult\">Close</button>\n</md-dialog-actions>"

/***/ }),

/***/ "../../../../../src/app/episode/medication/medication.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*temporary ui fix */\n:host /deep/ .mat-select-trigger {\n  font-size: 12px;\n  height: inherit;\n  margin-bottom: 15px;\n  margin-top: 2px;\n  \n}\n\n:host /deep/ .mat-select-value-text {\n  line-height: inherit;\n  margin-bottom: 15px;\n  margin-top: 2px;\n}\n\n:host /deep/ .mat-select {\n  font-size: 12px;\n  margin-top: 2px;\n  margin-bottom: 15px;\n  margin-left: 1px;\n}\n\n:host /deep/ .mat-checkbox {\n  font-size: 12px;\n  margin-top: 2px;\n  margin-left: 1px;\n}\n\n:host /deep/ .mat-radio-group {\n  font-size: 12px;\n  margin-top: 2px;\n  margin-left: 1px;\n}\n/*temporary ui fix */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/episode/medication/medication.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"toolbar\">\n  <div>\n      <button md-raised-button [disabled]=\"disableSave\" (click)=\"onSave()\">Save</button>\n      <button md-raised-button (click)=\"onNew()\">New</button>\n  </div>\n  <!--{{myForm.value|json}}--> \n  <md-form-field class=\"input-full-width\">\n      <md-chip-list mdPrefix #chipList1>\n          <md-chip *ngFor=\"let medication of medicationList\" [selectable]=\"selectable\"\n                   [removable]=\"removable\" (remove)=\"remove(medication)\">\n            {{medication.name}}\n            <md-icon mdChipRemove *ngIf=\"removable\">cancel</md-icon>\n          </md-chip>\n      </md-chip-list>\n    <input mdInput placeholder=\"Medication ...\" [mdAutocomplete]=\"autoMedication\" [formControl]=\"medicationCtrl\"\n    [mdChipInputFor]=\"chipList1\"\n    [mdChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n    [mdChipInputAddOnBlur]=\"addOnBlur\"\n    (mdChipInputTokenEnd)=\"add($event)\"\n    >\n  </md-form-field>\n  <md-autocomplete #autoMedication=\"mdAutocomplete\" [displayWith]=\"displayMedicationFn\">\n    <md-option *ngFor=\"let medication of filteredMedications | async\" [value]=\"medication\"  (onSelectionChange)=\"addMedication($event)\">\n      <span>{{medication.chargeItemCode}}, </span>\n      <small>{{medication.chargeItemDescription}}</small>\n    </md-option>\n  </md-autocomplete>\n<section>\n\n<md-card>\n  <md-card-content>\n      <div class=\"container\">\n        <div>\n            <button md-raised-button color=\"accent\" (click)=\"toggleSearch()\"><i class=\"material-icons\">search</i>Search Medication Items...</button>\n        </div>\n\n        <div>\n          <md-form-field class=\"input-full-width\">\n            <input mdInput placeholder=\"Medication Template\" [mdAutocomplete]=\"autoMedicationTemplate\" [formControl]=\"medicationTemplateCtrl\">\n          </md-form-field>\n          <md-autocomplete #autoMedicationTemplate=\"mdAutocomplete\">\n            <md-option *ngFor=\"let medicationTemplate of filteredMedicationTemplates | async\" [value]=\"medicationTemplate\">\n              {{ medicationTemplate }}\n            </md-option>\n          </md-autocomplete>\n        </div>\n        <div>\n            <md-form-field class=\"input-full-width\">\n                <input mdInput placeholder=\"Ordered By\" [mdAutocomplete]=\"orderedBy\" [formControl]=\"orderedByCtrl\">\n                \n                <md-autocomplete #orderedBy=\"mdAutocomplete\" [displayWith]=\"displayDoctorFn\">\n                <md-option *ngFor=\"let doctor of filteredOrderedBy | async\" [value]=\"doctor\">\n                  <span>{{ doctor.userFullName }}, </span>\n                  <small><strong>Initial:</strong>{{doctor.userInitial}}, <strong>Speciality:</strong>{{doctor.specialityID}}</small>\n                </md-option>\n                </md-autocomplete>\n              </md-form-field>\n          </div>\n      </div>\n\n<form [formGroup]=\"myForm\" novalidate (ngSubmit)=\"save(myForm)\">\n        <div formArrayName=\"medicationLnResource\">\n          <div *ngFor=\"let medication of myForm.controls.medicationLnResource.controls; let i=index\" >\n\n        <md-expansion-panel #myPanel expanded=\"true\">\n            <md-expansion-panel-header>\n              <mat-panel-description>\n              </mat-panel-description>\n              <mat-panel-title>\n                  <strong>#{{(i+1)}} - {{medication.controls[\"drugName\"].value}}</strong>\n              </mat-panel-title>\n            </md-expansion-panel-header>\n              <div [formGroupName]=\"i\">\n                  <div class=\"container\">\n                      <div class=\"two\">\n                          <md-form-field class=\"input-full-width\">\n                              <input mdInput placeholder=\"Dosage\" formControlName=\"dosage\" (ngModelChange)=\"calculateQty(i)\">\n                              <md-hint align=\"end\">1 tablet(s) 1 times(s) a day for 1 days(s)</md-hint>\n                            </md-form-field>\n                      </div>\n                      <div>\n                          <md-form-field class=\"input-full-width\">\n                            <input mdInput type=\"number\" placeholder=\"Take/Apply\" formControlName=\"take\" (ngModelChange)=\"calculateQty(i)\">\n                          </md-form-field>\n                        </div>\n                        <div>\n                          <md-form-field class=\"input-full-width\">\n                            <input mdInput type=\"number\" placeholder=\"Time per Day\" formControlName=\"time\" (ngModelChange)=\"calculateQty(i)\">\n                          </md-form-field>\n                        </div>\n                        <div>\n                          <md-form-field class=\"input-full-width\">\n                            <input mdInput type=\"number\" placeholder=\"Number of Day\" formControlName=\"day\" (ngModelChange)=\"calculateQty(i)\">\n                          </md-form-field>\n                        </div>\n                        <div>\n                            <md-select class=\"input-full-width\" placeholder=\"UOM\" name=\"inventoryUOMID\" formControlName=\"inventoryUOMID\">\n                              <md-option *ngFor=\"let uom of uoms\" [value]=\"uom.inventoryUOMID\" >\n                                {{uom.uomName}}\n                              </md-option>\n                            </md-select>\n                        </div>\n                        <div>\n                          <md-select class=\"input-full-width\" placeholder=\"Route\" name=\"route\" formControlName=\"route\">\n                              <md-option *ngFor=\"let route of routes\" [value]=\"route.value\" >\n                                {{route.viewValue}}\n                              </md-option>\n                          </md-select>\n                        </div>\n                        <div>\n                            <md-checkbox formControlName=\"whenNecessary\">When Necessary</md-checkbox>\n                        </div>\n                  </div>\n                \n                  <div class=\"container\">\n                      <div>\n                          <md-form-field class=\"input-full-width\">\n                            <input mdInput type=\"number\" placeholder=\"Total Quantity\" formControlName=\"totalQuantity\" (ngModelChange)=\"calculatePrice(i)\">\n                            <md-hint align=\"end\">Avail Quantity: <b class=\"highlighter\">{{medication.controls[\"availQty\"].value}}</b></md-hint>\n                          </md-form-field>\n                      </div>\n                      <div>\n                          <md-form-field class=\"input-full-width\">\n                            <input mdInput type=\"number\" placeholder=\"Price\" name=\"originalPrice\" formControlName=\"originalPrice\" (ngModelChange)=\"calculatePrice(i)\">\n                          </md-form-field>\n                        </div>\n                        <div>\n                            <md-form-field class=\"input-full-width\">\n                              <input mdInput type=\"number\" placeholder=\"Discount Apply (%)\" formControlName=\"discountPerc\">\n                            </md-form-field>\n                        </div>\n                        <div>\n                            <md-form-field class=\"input-full-width\">\n                              <input mdInput type=\"number\" placeholder=\"Discount Apply (Amount)\" formControlName=\"discountAmount\">\n                            </md-form-field>\n                        </div>\n                        <div>\n                          <md-form-field class=\"input-full-width\">\n                            <input mdInput type=\"number\" placeholder=\"Total Price\" name=\"billPrice\" value=\"403.00\" formControlName=\"billPrice\">\n                          </md-form-field>\n                        </div>\n                  </div>\n                  \n                  <div class=\"container\"> \n                      <div>\n                        <md-form-field class=\"input-full-width\">\n                          <input mdInput placeholder=\"Instruction #1\" formControlName=\"instruction1\">\n                        </md-form-field>\n                      </div>\n                      <div>\n                        <md-form-field class=\"input-full-width\">\n                          <input mdInput placeholder=\"Instruction #2\" formControlName=\"instruction2\">\n                        </md-form-field>\n                      </div>\n                      <div>\n                        <md-form-field class=\"input-full-width\">\n                          <input mdInput placeholder=\"Indication\" formControlName=\"indication\">\n                        </md-form-field>\n                      </div>\n                    </div>\n              </div>\n          </md-expansion-panel>\n          </div>\n        </div>\n      </form><br>\n<!--\n      <div>\n          <dx-data-grid style=\"display:block;\" #grid\n          id=\"gridContainer\" \n          [dataSource]=\"returnedResult\"\n          [allowColumnResizing]=\"true\"\n          (onRowUpdating)=\"update($event)\"\n          (onRowInserting)=\"insert($event)\"\n          [columnAutoWidth]=\"true\"\n          [allowColumnReordering]=\"true\">  \n          <dxo-editing \n              mode=\"cell\"\n              [allowUpdating]=\"true\"\n              [allowDeleting]=\"true\">\n          </dxo-editing>\n          <dxi-column dataField=\"chargeItemCode\" [width]=\"100\"></dxi-column>\n          <dxi-column dataField=\"chargeItemDescription\" [width]=\"150\"></dxi-column>\n          <dxi-column dataField=\"dosage\" [width]=\"60\"></dxi-column>\n          <dxi-column dataField=\"take\" dataType=\"number\" [width]=\"45\"></dxi-column>\n          <dxi-column dataField=\"time\" dataType=\"number\" [width]=\"48\"></dxi-column>\n          <dxi-column dataField=\"day\" dataType=\"number\" [width]=\"45\"></dxi-column>\n          <dxi-column dataField=\"totalQty\" caption=\"totalQty\" dataType=\"number\" [calculateCellValue]=\"calTotalQTY\" [width]=\"55\"></dxi-column>\n          <dxi-column\n          dataField=\"value\"\n          caption=\"uom\"\n          [width]=\"100\">         \n            <dxo-lookup\n                [dataSource]=\"uoms\"\n                displayExpr=\"viewValue\"\n                valueExpr=\"value\">\n            </dxo-lookup>\n          </dxi-column>\n          <dxi-column dataField=\"price\" dataType=\"number\" [width]=\"50\"></dxi-column>\n          <dxi-column dataField=\"totalPrice\" dataType=\"number\" [calculateCellValue]=\"calTotalPrice\" [width]=\"60\"></dxi-column>\n          <dxi-column\n          dataField=\"route\"\n          caption=\"route\"\n          [width]=\"100\">         \n            <dxo-lookup\n                [dataSource]=\"routes\"\n                displayExpr=\"viewValue\"\n                valueExpr=\"value\">\n            </dxo-lookup>\n          </dxi-column>\n          <dxi-column dataField=\"Whennecessary\" caption=\"When necessary\" dataType=\"boolean\"></dxi-column>\n          <dxi-column dataField=\"instructionOne\"></dxi-column>\n          <dxi-column dataField=\"instructionTwo\"></dxi-column>\n          <dxi-column dataField=\"indication\"></dxi-column>\n          </dx-data-grid>\n    \n        </div>   \n      -->\n      <div class=\"container\">\n        <div>\n          <md-form-field class=\"input-full-width\">\n            <textarea mdInput [(ngModel)]=\"data.remark\" placeholder=\"Medication Note\"></textarea>\n          </md-form-field>\n        </div>\n      </div>\n  </md-card-content>\n</md-card>\n<p>\n  <md-accordion>\n    <md-expansion-panel *ngFor=\"let historyList of historyRecord\">\n        <md-expansion-panel-header>\n          <mat-panel-description></mat-panel-description>\n          <mat-panel-title>\n            <strong><h4 md-line><i class=\"material-icons\">timer</i> {{historyList.created | date:'medium'}} - <strong>{{historyList.medicationOrderNo}}</strong></h4></strong>\n          </mat-panel-title>\n        </md-expansion-panel-header>\n\n                <p>\n                    <span> <small>Ordered By: </small><small class=\"highlighter\">{{historyList.orderedByResource?.userFullName}}</small> </span>\n                </p>\n                <p>\n                  <span> <small>Medical Note: </small><small class=\"highlighter\">{{historyList.remark}}</small> </span>\n                </p> \n                <p >\n                    <span> \n                    <table class=\"orderTable\">\n                        <thead>\n                        <tr>\n                          <th>#</th>\n                          <th>Code</th>\n                          <th>Description</th>\n                          <th>Dosage</th>\n                          <th>Take</th>\n                          <th>Time</th>\n                          <th>Day</th>\n                          <th>UOM</th>\n                          <th>Route</th>\n                          <th>When Necessary</th>\n                          <th>Total Quantity</th>\n                        <!--  <th>Price</th>\n                          <th>Discount (%)</th>\n                          <th>Discount (Amount)</th>\n                          <th>Total Price</th>\n                        -->\n                          <th>Instruction #1</th>\n                          <th>Instruction #2</th>\n                          <th>Indication</th>\n                        </tr>\n                        </thead>\n                        <tbody>\n                        <tr *ngFor=\"let orderList of historyList.medicationLnResource; let i=index\">\n                        <td>{{i+1}}</td>\n                        <td>{{orderList.chargeItemResource.chargeItemCode}}</td>\n                        <td>{{orderList.chargeItemResource.chargeItemDescription}}</td>\n                        <td>{{orderList.dosage}}</td>\n                        <td>{{orderList.take}}</td>\n                        <td>{{orderList.time}}</td>\n                        <td>{{orderList.day}}</td>\n                        <td>{{orderList.inventoryUOMID}}</td>\n                        <td>{{orderList.route}}</td>\n                        <td>{{orderList.whenNecessary}}</td>\n                        <td>{{orderList.totalQuantity}}</td>\n                        <!--\n                        <td>{{orderList.originalPrice}}</td>\n                        <td>{{orderList.discountPerc}}</td>\n                        <td>{{orderList.discountAmount}}</td>\n                        \n                        <td>{{orderList.billPrice}}</td>\n                        -->\n                        <td>{{orderList.instruction1}}</td>\n                        <td>{{orderList.instruction2}}</td>\n                        <td>{{orderList.indication}}</td>\n\n                        </tr>\n                        </tbody>\n                    </table>\n                  </span>\n                </p> \n            <md-action-row>\n                <span>Current Version: <small class=\"highlighter\">{{historyList.version}}</small></span>  \n                <span>, Updated: <small class=\"highlighter\">{{historyList.created | date:'medium'}}</small> </span>\n                <span>, By: <small class=\"highlighter\">{{historyList.createdByResource.userFullName}}</small></span>\n                <span>, Created: <small class=\"highlighter\">{{historyList.created | date:'medium'}}</small> </span>\n                <span>, By: <small class=\"highlighter\">{{historyList.createdByResource.userFullName}}</small></span>\n                <span> </span>\n                <button md-raised-button (click)=\"loadDatabyID(historyList.medicationHdrID)\"><i class=\"material-icons\">mode_edit</i>Edit</button>\n                <button md-raised-button (click)=\"loadDatabyID(historyList.medicationHdrID)\"><i class=\"material-icons\">delete</i>Delete</button>\n              </md-action-row>\n    </md-expansion-panel>\n  </md-accordion>\n</section>\n\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/episode/medication/medication.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MedicationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogResultMedicationSearch; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_services_masterdata_service__ = __webpack_require__("../../../../../src/app/services/masterdata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_GDService_service__ = __webpack_require__("../../../../../src/app/services/GDService.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_devextreme_angular__ = __webpack_require__("../../../../devextreme-angular/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_devextreme_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_devextreme_angular__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









var MedicationComponent = (function () {
    function MedicationComponent(_fb, GDService, MasterDataService, _element, dialog, router) {
        var _this = this;
        this._fb = _fb;
        this.GDService = GDService;
        this.MasterDataService = MasterDataService;
        this._element = _element;
        this.dialog = dialog;
        this.router = router;
        this.disableSave = false;
        this.returnedResult = {};
        this.data = { medicationLnResource: {} };
        this.stockLocking = {};
        this.medications = [];
        this.visible = true;
        this.color = '';
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.message = '';
        this.routes = [
            { value: 'ORAL', viewValue: 'ORAL' },
            { value: 'MOUTH', viewValue: 'MOUTH' },
            { value: 'EXTERNAL', viewValue: 'EXTERNAL' },
            { value: 'ASS', viewValue: 'ASS' },
        ];
        this.medicationTemplates = [
            'TEMP001 - URTI',
            'TEMP002 - High Fever',
            'TEMP003 - Dizzy',
        ];
        // Enter, comma, semi-colon
        this.separatorKeysCodes = [__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* ENTER */], 188, 186];
        this.medicationList = [];
        this.medicationCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]({ chargeItemCode: 0, chargeItemDescription: '' });
        this.medicationTemplateCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]();
        this.filteredMedicationTemplates = this.medicationTemplateCtrl.valueChanges
            .startWith(null)
            .map(function (val) { return _this.displayMedicationFn(val); })
            .map(function (name) { return _this.filterMedicationTemplate(name); });
        this.orderedByCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]({ dgUserID: 0, userFullName: '' });
    }
    MedicationComponent.prototype.calculateQty = function (index) {
        var _this = this;
        var control = this.myForm.controls['medicationLnResource'];
        var cc = control.at(index);
        if (cc.get("take").value && cc.get("day").value && cc.get("time").value) {
            this.myForm.controls['medicationLnResource'].at(index).patchValue({
                totalQuantity: cc.get("take").value * cc.get("day").value * cc.get("time").value
            });
            //Locking the stock to prevent over issue
            this.stockLocking.ChargeItemID = cc.get("chargeItemID").value;
            this.stockLocking.Quantity = cc.get("take").value * cc.get("day").value * cc.get("time").value;
            if (!cc.get("stockLockingID").value) {
                //console.log("to create");
                this.MasterDataService.CreateStockLocking(this.stockLocking)
                    .subscribe(function (x) {
                    _this.myForm.controls['medicationLnResource'].at(index).patchValue({
                        stockLockingID: x.stockLockingID
                    });
                }, function (err) {
                    _this.GDService.openSnackBar(err, 'Info');
                });
            }
            else {
                //console.log("to update");
                this.stockLocking.StockLockingID = cc.get("stockLockingID").value;
                this.MasterDataService.UpdateStockLockingByID(this.stockLocking)
                    .subscribe(function (x) {
                    _this.myForm.controls['medicationLnResource'].at(index).patchValue({
                        stockLockingID: x.stockLockingID
                    });
                }, function (err) {
                    _this.GDService.openSnackBar(err, 'Info');
                });
            }
        }
    };
    MedicationComponent.prototype.calculatePrice = function (index) {
        var control = this.myForm.controls['medicationLnResource'];
        var cc = control.at(index);
        if (cc.get("totalQuantity").value && cc.get("originalPrice").value)
            this.myForm.controls['medicationLnResource'].at(index).patchValue({
                billPrice: cc.get("totalQuantity").value * cc.get("originalPrice").value
            });
    };
    MedicationComponent.prototype.addMedication = function (event) {
        var _this = this;
        // add Medication to the list
        var control = this.myForm.controls['medicationLnResource'];
        this.MasterDataService.GetQRStockBalanceByID(event.source.value.chargeItemID)
            .subscribe(function (res) {
            control.push(_this.initMedication(event.source.value.chargeItemID, event.source.value.chargeItemCode + ', ' + event.source.value.chargeItemDescription, res.totalRemainingQuantity));
        }, function (err) {
            control.push(_this.initMedication(event.source.value.chargeItemID, event.source.value.chargeItemCode + ', ' + event.source.value.chargeItemDescription, 0));
        });
    };
    MedicationComponent.prototype.removeMedication = function (i) {
        // remove Medication from the list
        var control = this.myForm.controls['medicationLnResource'];
        control.removeAt(i);
    };
    MedicationComponent.prototype.displayMedicationFn = function (value) {
        return value && typeof value === 'object' ? value.chargeItemDescription : value;
    };
    MedicationComponent.prototype.onNew = function () {
        this.disableSave = false;
        this.data = { medicationLnResource: {} };
        this.returnedResult = {};
        this.medicationCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]({ chargeItemCode: 0, chargeItemDescription: '' });
        this.orderedByCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]({ dgUserID: 0, userFullName: '' });
        this.clearForm();
    };
    MedicationComponent.prototype.onSave = function () {
        var _this = this;
        //clear editing cached
        this.data.medicationLnResource = this.myForm.value.medicationLnResource;
        if (this.orderedByCtrl.value.dgUserID > 0)
            this.data.orderedByID = this.orderedByCtrl.value.dgUserID;
        this.data.patientID = this.patientID;
        this.data.visitID = this.visitID;
        this.data.invoiceHdrID = this.invoiceHdrID;
        this.data.CreatedByID = 1;
        if (this.data.medicationHdrID) {
            this.MasterDataService.CreateMedicationRecord(this.data)
                .subscribe(function (x) {
                _this.GDService.openSnackBar(x.medicationOrderNo + '" Updated Sucessfully!', 'Info');
                _this.getHistory();
            }, function (err) {
                _this.GDService.openSnackBar(err, 'Info');
            });
        }
        else
            this.MasterDataService.CreateMedicationRecord(this.data)
                .subscribe(function (x) {
                _this.GDService.openSnackBar(x.medicationOrderNo + '" Created Sucessfully!', 'Info');
                _this.getHistory();
            }, function (err) {
                _this.GDService.openSnackBar(err, 'Info');
            });
    };
    MedicationComponent.prototype.loadDatabyID = function (id) {
        var _this = this;
        this.MasterDataService.GetMedicationByID(id).subscribe(function (hr) {
            _this.data = hr;
            if (_this.data.orderedByID != null)
                _this.orderedByCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]({ dgUserID: hr.orderedByResource.dgUserID, userFullName: hr.orderedByResource.userFullName });
            _this.clearForm();
            var control = _this.myForm.controls['medicationLnResource'];
            for (var _i = 0, _a = hr.medicationLnResource; _i < _a.length; _i++) {
                var modLn = _a[_i];
                control.push(_this.editMedication(modLn));
                _this.medicationList.push({ name: modLn.chargeItemResource.chargeItemDescription });
            }
            _this.disableSave = false;
        }, function (err) {
            _this.GDService.openSnackBar(err, 'Info');
        });
    };
    MedicationComponent.prototype.clearForm = function () {
        var control = this.myForm.controls['medicationLnResource'];
        var count = control.controls.length;
        for (var i = control.controls.length; i >= 0; i--) {
            control.removeAt(i);
            this.medicationList.splice(i, 1);
        }
    };
    MedicationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myForm = this._fb.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(5)]],
            medicationLnResource: this._fb.array([])
        });
        this.MasterDataService.GetDGUser().subscribe(function (doctor) {
            _this.doctors = doctor;
            _this.filteredOrderedBy = _this.orderedByCtrl.valueChanges
                .startWith(_this.orderedByCtrl.value)
                .map(function (val) { return _this.displayDoctorFn(val); })
                .map(function (name) { return _this.filterDoctors(name); });
        });
        this.MasterDataService.GetInventoryUOM().subscribe(function (uom) {
            _this.uoms = uom;
        });
        this.medicationCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]({ chargeItemCode: 0, chargeItemDescription: '' });
        this.filteredMedications = this.medicationCtrl.valueChanges
            .debounceTime(400)
            .do(function (value) {
            _this.MasterDataService.GetMedicationBySearch(value).subscribe(function (res) {
                _this.medications = res;
            });
        }).delay(500).map(function () { return _this.medications; });
        this.getHistory();
        this.disableSave = false;
    };
    MedicationComponent.prototype.getHistory = function () {
        var _this = this;
        this.disableSave = true;
        this.MasterDataService.GetMedicationByVisit(this.visitID).subscribe(function (hr) {
            _this.historyRecord = hr;
        });
    };
    MedicationComponent.prototype.editMedication = function (medicationDetail) {
        return this._fb.group({
            chargeItemID: [medicationDetail.chargeItemResource.chargeItemID],
            stockLockingID: [null],
            drugCode: [medicationDetail.chargeItemResource.chargeItemCode],
            drugName: [medicationDetail.chargeItemResource.chargeItemDescription],
            dosage: [medicationDetail.dosage],
            take: [medicationDetail.take],
            time: [medicationDetail.time],
            day: [medicationDetail.day],
            totalQuantity: [medicationDetail.totalQuantity],
            inventoryUOMID: [medicationDetail.inventoryUOMID],
            originalPrice: [medicationDetail.originalPrice],
            discountPerc: [medicationDetail.discountPerc],
            discountAmount: [medicationDetail.discountAmount],
            billPrice: [medicationDetail.billPrice],
            route: [medicationDetail.route],
            whenNecessary: [medicationDetail.whenNecessary],
            instruction1: [medicationDetail.instruction1],
            instruction2: [medicationDetail.instruction2],
            indication: [medicationDetail.indication],
            availQty: [0],
            //important reference when user edit record.
            medicationLnID: [medicationDetail.medicationLnID],
            billingRef: [medicationDetail.billingRef],
        });
    };
    MedicationComponent.prototype.initMedication = function (chargeItemID, drugName, availQty) {
        // initialize our Medication
        return this._fb.group({
            chargeItemID: [chargeItemID],
            stockLockingID: [''],
            drugCode: [''],
            drugName: [drugName],
            dosage: [''],
            take: [''],
            time: [''],
            day: [''],
            totalQuantity: [''],
            inventoryUOMID: [''],
            originalPrice: [1],
            discountPerc: [0],
            discountAmount: [0],
            billPrice: [0],
            route: [''],
            whenNecessary: [false],
            instruction1: [''],
            instruction2: [''],
            indication: [''],
            availQty: [availQty],
            medicationLnID: [0],
            billingRef: ['00000000-0000-0000-0000-000000000000'],
        });
    };
    MedicationComponent.prototype.update = function (e) {
        //console.log(e.component.cellValue(e.component.getRowIndexByKey(e.key)));
    };
    MedicationComponent.prototype.insert = function (e) {
        //console.log(e.component.columnOption("dosage").calculateCellValue(e.data));
    };
    MedicationComponent.prototype.calculate = function (e) {
        if (!e.dosage)
            return null;
        return e.dosage + e.dosage;
    };
    MedicationComponent.prototype.calTotalQTY = function (e) {
        if (!e.take || !e.time || !e.day)
            return null;
        return e.take * e.time * e.day;
    };
    MedicationComponent.prototype.calTotalPrice = function (e) {
        //console.log(e.component.getRowIndexByKey(e.key));
        if (!e.totalQuantity || !e.originalPrice)
            return null;
        //console.log(e.component.cellValue(e.component.getRowIndexByKey(e.key), "totalQuantity"));
        //console.log(e.component.cellValue(e.component.getRowIndexByKey(e.key), "originalPrice"));
        return e.totalQuantity * e.originalPrice;
    };
    MedicationComponent.prototype.toggleSearch = function () {
        var _this = this;
        var dialogRef = this.dialog.open(DialogResultMedicationSearch, {
            height: '650px',
            width: '900px',
            data: {
                refdata: this.returnedResult
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.returnedResult = result;
        });
    };
    MedicationComponent.prototype.filterMedication = function (val) {
        return val ? this.medications.filter(function (s) { return new RegExp(val, 'gi').test(s); }) : this.medications;
    };
    MedicationComponent.prototype.filterMedicationTemplate = function (val) {
        return val ? this.medicationTemplates.filter(function (s) { return new RegExp(val, 'gi').test(s); }) : this.medicationTemplates;
    };
    MedicationComponent.prototype.displayDoctorFn = function (value) {
        return value && typeof value === 'object' ? value.userFullName : value;
    };
    MedicationComponent.prototype.filterDoctors = function (val) {
        //`^${val}`
        return val ? this.doctors.filter(function (s) { return new RegExp(val, 'gi').test(s.userFullName); })
            : this.doctors;
    };
    MedicationComponent.prototype.displayMessage = function (message) {
        this.message = message;
    };
    MedicationComponent.prototype.add = function (event) {
        var input = event.input;
        var value = event.value;
        if ((value || '').trim()) {
            this.medicationList.push({ name: value.trim() });
        }
        if (input) {
            input.value = '';
        }
    };
    MedicationComponent.prototype.remove = function (medication) {
        var index = this.medicationList.indexOf(medication);
        if (index >= 0) {
            this.medicationList.splice(index, 1);
            this.removeMedication(index);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], MedicationComponent.prototype, "patientID", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], MedicationComponent.prototype, "visitID", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], MedicationComponent.prototype, "invoiceHdrID", void 0);
    MedicationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'app-medication',
            template: __webpack_require__("../../../../../src/app/episode/medication/medication.component.html"),
            styles: [__webpack_require__("../../../../../src/app/episode/medication/medication.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_GDService_service__["a" /* GDService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_GDService_service__["a" /* GDService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0_app_services_masterdata_service__["a" /* MasterDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_app_services_masterdata_service__["a" /* MasterDataService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["ElementRef"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MdDialog */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"]) === "function" && _f || Object])
    ], MedicationComponent);
    return MedicationComponent;
    var _a, _b, _c, _d, _e, _f;
}());

var DialogResultMedicationSearch = (function () {
    function DialogResultMedicationSearch(dialogRef, MasterDataService, data) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.MasterDataService = MasterDataService;
        this.data = data;
        this.MasterDataService.GetChargeItemListingByType("DRUG")
            .subscribe(function (x) {
            _this.dataSource = x;
        });
    }
    DialogResultMedicationSearch.prototype.getSelectedItem = function () {
        this.data.returnedResult = this.dataGrid.instance.getSelectedRowKeys();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_6_devextreme_angular__["DxDataGridComponent"]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6_devextreme_angular__["DxDataGridComponent"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_devextreme_angular__["DxDataGridComponent"]) === "function" && _a || Object)
    ], DialogResultMedicationSearch.prototype, "dataGrid", void 0);
    DialogResultMedicationSearch = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'dialog-medication-search',
            template: __webpack_require__("../../../../../src/app/episode/medication/dialog-medication-search.html"),
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MD_DIALOG_DATA */])),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MdDialogRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0_app_services_masterdata_service__["a" /* MasterDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_app_services_masterdata_service__["a" /* MasterDataService */]) === "function" && _c || Object, Object])
    ], DialogResultMedicationSearch);
    return DialogResultMedicationSearch;
    var _a, _b, _c;
}());

//# sourceMappingURL=medication.component.js.map

/***/ }),

/***/ "../../../../../src/app/episode/procedure/dialog-procedure-search.html":
/***/ (function(module, exports) {

module.exports = "<h2 md-dialog-title>Procedure Listing</h2>\n<md-dialog-content>\n    <div>\n        <dx-data-grid  #grid\n        id=\"gridContainer\" \n        [dataSource]=\"dataSource\"\n        [allowColumnResizing]=\"true\"\n         \n        [columnAutoWidth]=\"true\"\n        [allowColumnReordering]=\"true\"\n        (onSelectionChanged)=\"getSelectedItem()\">    \n        <dxo-selection\n        \n        mode=\"multiple\"></dxo-selection>\n        <dxo-filter-row\n        [visible]=\"true\"></dxo-filter-row>\n        <dxo-paging [pageSize]=\"10\"></dxo-paging>\n        <dxo-pager \n            [showPageSizeSelector]=\"true\"\n            [allowedPageSizes]=\"[5,10]\"\n            [showInfo]=\"true\">\n        </dxo-pager>\n        <dxo-group-panel [visible]=\"true\"></dxo-group-panel>\n        <dxo-grouping #expand [autoExpandAll]=\"true\"></dxo-grouping>\n        <dxi-column dataField=\"catalog\" [groupIndex]=\"0\"></dxi-column>\n        <dxi-column dataField=\"chargeItemCode\"></dxi-column>\n        <dxi-column dataField=\"chargeItemDescription\"></dxi-column>\n        <dxi-column dataField=\"analysis\"></dxi-column>\n        </dx-data-grid>\n  \n      </div>\n      \n</md-dialog-content>\n<md-dialog-actions>\n  <button md-button [md-dialog-close]=\"data.returnedResult\">Close</button>\n</md-dialog-actions>"

/***/ }),

/***/ "../../../../../src/app/episode/procedure/procedure.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*temporary ui fix */\n:host /deep/ .mat-select-trigger {\n    font-size: 12px;\n    height: inherit;\n    margin-bottom: 15px;\n    margin-top: 2px;\n    \n  }\n  \n  :host /deep/ .mat-select-value-text {\n    line-height: inherit;\n    margin-bottom: 15px;\n    margin-top: 2px;\n  }\n  \n  :host /deep/ .mat-select {\n    font-size: 12px;\n    margin-top: 2px;\n    margin-bottom: 15px;\n    margin-left: 1px;\n  }\n  \n  :host /deep/ .mat-checkbox {\n    font-size: 12px;\n    margin-top: 2px;\n    margin-left: 1px;\n  }\n  \n  :host /deep/ .mat-radio-group {\n    font-size: 12px;\n    margin-top: 2px;\n    margin-left: 1px;\n  }\n  /*temporary ui fix */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/episode/procedure/procedure.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\n    <div class=\"toolbar\">\n      <div>\n        <button md-raised-button [disabled]=\"disableSave\" (click)=\"onSave()\">Save</button>\n        <button md-raised-button (click)=\"onNew()\">New</button>\n      </div>\n    </div> \n    <md-card>\n      <md-card-content>\n        <div class=\"container\">\n          <div>\n            <button md-raised-button color=\"accent\" (click)=\"toggleSearch()\"><i class=\"material-icons\">search</i>Search Procedure Items...</button>\n          </div>\n          <div>\n              <md-radio-group [(ngModel)]=\"data.priority\" class=\"input-full-width\">\n                  <md-radio-button *ngFor=\"let priority of priorities\" [value]=\"priority\" [checked]=\"priority==data.priority\">\n                      {{priority}}\n                  </md-radio-button>\n              </md-radio-group>\n          </div>\n        </div>\n  \n        <div class=\"container\">\n            <div>\n                <md-form-field class=\"input-full-width\">\n                  <input mdInput placeholder=\"Ordered By\" [mdAutocomplete]=\"orderedBy\" [formControl]=\"orderedByCtrl\">\n                  \n                  <md-autocomplete #orderedBy=\"mdAutocomplete\" [displayWith]=\"displayDoctorFn\">\n                  <md-option *ngFor=\"let doctor of filteredOrderedBy | async\" [value]=\"doctor\">\n                    <span>{{ doctor.userFullName }}, </span>\n                    <small><strong>Initial:</strong>{{doctor.userInitial}}, <strong>Speciality:</strong>{{doctor.specialityID}}</small>\n                  </md-option>\n                  </md-autocomplete>\n                </md-form-field>\n            </div>\n            <div>\n                <md-form-field class=\"input-full-width\">\n                  <input mdInput placeholder=\"Referred By\" [mdAutocomplete]=\"referredBy\" [formControl]=\"referredByCtrl\">\n                  \n                  <md-autocomplete #referredBy=\"mdAutocomplete\" [displayWith]=\"displayDoctorFn\">\n                  <md-option *ngFor=\"let doctor of filteredReferredBy | async\" [value]=\"doctor\">\n                    <span>{{ doctor.userFullName }}, </span>\n                    <small><strong>Initial:</strong>{{doctor.userInitial}}, <strong>Speciality:</strong>{{doctor.specialityID}}</small>\n                  </md-option>\n                  </md-autocomplete>\n                </md-form-field>\n            </div>\n        </div>\n  \n          <div>\n            <dx-data-grid style=\"display:block;\" #grid\n            id=\"gridContainer\" \n            [dataSource]=\"returnedResult\"\n            [allowColumnResizing]=\"true\"\n             \n            [columnAutoWidth]=\"true\"\n            [allowColumnReordering]=\"true\">  \n            <dxo-editing \n                mode=\"cell\"\n                [allowUpdating]=\"true\"\n                [allowDeleting]=\"true\">\n            </dxo-editing>\n            <dxi-column dataField=\"catalog\"></dxi-column>\n            <dxi-column dataField=\"chargeItemCode\"></dxi-column>\n            <dxi-column dataField=\"chargeItemDescription\"></dxi-column>\n            <dxi-column dataField=\"analysis\"></dxi-column>\n            <dxi-column *ngIf=\"toShow\" dataField=\"billPrice\" dataType=\"number\"></dxi-column>\n            </dx-data-grid>\n      \n          </div>     \n  \n        <div class=\"container\">\n              <md-form-field class=\"input-full-width\">\n                <textarea mdInput [(ngModel)]=\"data.remark\" name=\"remark\" placeholder=\"Medical Note\"></textarea>\n              </md-form-field>\n        </div>\n      </md-card-content>\n    </md-card>\n    <p>\n      <md-accordion>\n        <md-expansion-panel *ngFor=\"let historyList of historyRecord\">\n            <md-expansion-panel-header>\n              <mat-panel-description></mat-panel-description>\n              <mat-panel-title>\n                <strong><h4 md-line><i class=\"material-icons\">timer</i> {{historyList.created | date:'medium'}} - <strong>{{historyList.procedureOrderNo}}</strong></h4></strong>\n              </mat-panel-title>\n            </md-expansion-panel-header>\n\n                    <p>\n                      <span> <small>Ordered By: </small><small class=\"highlighter\">{{historyList.orderedByResource?.userFullName}}</small> </span>\n                      <span> <small>Referred By: </small><small class=\"highlighter\">{{historyList.referredByResource?.userFullName}}</small> </span>\n                    </p>\n                    <p>\n                      <span> <small>Priority: </small><small class=\"highlighter\">{{historyList.priority}}</small> </span>\n                    </p>\n                    <p>\n                      <span> <small>Medical Note: </small><small class=\"highlighter\">{{historyList.remark}}</small> </span>\n                    </p> \n                    <p>\n                        <span> \n                        <table class=\"orderTable\">\n                            <thead>\n                            <tr>\n                              <th>#</th>\n                              <th>Catalog</th>\n                              <th>Procedure Code</th>\n                              <th>Description</th>\n                              <th>Price</th>\n                            </tr>\n                            </thead>\n                            <tbody>\n                            <tr *ngFor=\"let orderList of historyList.procedureLnResource; let i=index\">\n                            <td>{{i+1}}</td>\n                            <td>{{orderList.chargeItemResource.catalog}}</td>\n                            <td>{{orderList.chargeItemResource.chargeItemCode}}</td>\n                            <td>{{orderList.chargeItemResource.analysis}}</td>\n                            <td>{{orderList.billPrice}}</td>\n                            </tr>\n                            </tbody>\n                        </table>\n                      </span>\n                    </p>  \n                <md-action-row>\n                    <span>Current Version: <small class=\"highlighter\">{{historyList.version}}</small></span>  \n                    <span>, Updated: <small class=\"highlighter\">{{historyList.created | date:'medium'}}</small> </span>\n                    <span>, By: <small class=\"highlighter\">{{historyList.createdByResource.userFullName}}</small></span>\n                    <span>, Created: <small class=\"highlighter\">{{historyList.created | date:'medium'}}</small> </span>\n                    <span>, By: <small class=\"highlighter\">{{historyList.createdByResource.userFullName}}</small></span>\n                    <span> </span>\n                    <button md-raised-button (click)=\"loadDatabyID(historyList.procedureHdrID)\"><i class=\"material-icons\">mode_edit</i>Edit</button>\n                    <button md-raised-button (click)=\"loadDatabyID(historyList.procedureHdrID)\"><i class=\"material-icons\">delete</i>Delete</button>\n                  </md-action-row>\n        </md-expansion-panel>\n      </md-accordion>\n  </section>\n"

/***/ }),

/***/ "../../../../../src/app/episode/procedure/procedure.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ProcedureComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogResultProcedureSearch; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_GDService_service__ = __webpack_require__("../../../../../src/app/services/GDService.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_masterdata_service__ = __webpack_require__("../../../../../src/app/services/masterdata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_devextreme_angular__ = __webpack_require__("../../../../devextreme-angular/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_devextreme_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_devextreme_angular__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var ProcedureComponent = (function () {
    function ProcedureComponent(GDService, MasterDataService, _element, dialog, router) {
        this.GDService = GDService;
        this.MasterDataService = MasterDataService;
        this._element = _element;
        this.dialog = dialog;
        this.router = router;
        this.disableSave = false;
        this.returnedResult = {};
        this.data = { procedureLnResource: {} };
        this.toShow = true;
        this.priorities = ['Urgent', 'Stat', 'Routine'];
        this.orderedByCtrl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]({ dgUserID: 0, userFullName: '' });
        this.referredByCtrl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]({ dgUserID: 0, userFullName: '' });
    }
    ProcedureComponent.prototype.displayDoctorFn = function (value) {
        return value && typeof value === 'object' ? value.userFullName : value;
    };
    ProcedureComponent.prototype.filterDoctors = function (val) {
        //`^${val}`
        return val ? this.doctors.filter(function (s) { return new RegExp(val, 'gi').test(s.userFullName); })
            : this.doctors;
    };
    ProcedureComponent.prototype.onNew = function () {
        this.disableSave = false;
        this.orderedByCtrl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]({ dgUserID: 0, userFullName: '' });
        this.referredByCtrl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]({ dgUserID: 0, userFullName: '' });
    };
    ProcedureComponent.prototype.onSave = function () {
        var _this = this;
        //clear editing cached
        this.data.procedureLnResource = this.returnedResult;
        if (this.orderedByCtrl.value.dgUserID > 0)
            this.data.orderedByID = this.orderedByCtrl.value.dgUserID;
        if (this.referredByCtrl.value.dgUserID > 0)
            this.data.referredByID = this.referredByCtrl.value.dgUserID;
        this.data.patientID = this.patientID;
        this.data.visitID = this.visitID;
        this.data.invoiceHdrID = this.invoiceHdrID;
        this.data.CreatedByID = 1;
        if (this.data.procedureHdrID) {
            this.MasterDataService.CreateProcedureRecord(this.data)
                .subscribe(function (x) {
                _this.GDService.openSnackBar(x.procedureOrderNo + '" Updated Sucessfully!', 'Info');
                _this.getHistory();
            }, function (err) {
                _this.GDService.openSnackBar(err, 'Info');
            });
        }
        else
            this.MasterDataService.CreateProcedureRecord(this.data)
                .subscribe(function (x) {
                _this.GDService.openSnackBar(x.procedureOrderNo + '" Created Sucessfully!', 'Info');
                _this.getHistory();
            }, function (err) {
                _this.GDService.openSnackBar(err, 'Info');
            });
    };
    ProcedureComponent.prototype.loadDatabyID = function (id) {
        var _this = this;
        this.MasterDataService.GetProcedureByID(id).subscribe(function (hr) {
            _this.data = hr;
            if (_this.data.orderedByID != null)
                _this.orderedByCtrl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]({ dgUserID: hr.orderedByResource.dgUserID, userFullName: hr.orderedByResource.userFullName });
            if (_this.data.referredByID != null)
                _this.referredByCtrl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]({ dgUserID: hr.referredByResource.dgUserID, userFullName: hr.referredByResource.userFullName });
            for (var _i = 0, _a = hr.procedureLnResource; _i < _a.length; _i++) {
                var modLn = _a[_i];
                modLn.catalog = modLn.chargeItemResource.catalog;
                modLn.chargeItemCode = modLn.chargeItemResource.chargeItemCode;
                modLn.analysis = modLn.chargeItemResource.analysis;
                modLn.chargeItemDescription = modLn.chargeItemResource.chargeItemDescription;
            }
            _this.returnedResult = hr.procedureLnResource;
            _this.disableSave = false;
        }, function (err) {
            _this.GDService.openSnackBar(err, 'Info');
        });
    };
    ProcedureComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.MasterDataService.GetDGUser().subscribe(function (doctor) {
            _this.doctors = doctor;
            _this.filteredOrderedBy = _this.orderedByCtrl.valueChanges
                .startWith(_this.orderedByCtrl.value)
                .map(function (val) { return _this.displayDoctorFn(val); })
                .map(function (name) { return _this.filterDoctors(name); });
            _this.filteredReferredBy = _this.referredByCtrl.valueChanges
                .startWith(_this.referredByCtrl.value)
                .map(function (val) { return _this.displayDoctorFn(val); })
                .map(function (name) { return _this.filterDoctors(name); });
        });
        this.getHistory();
        this.disableSave = false;
    };
    ProcedureComponent.prototype.getHistory = function () {
        var _this = this;
        this.disableSave = true;
        this.MasterDataService.GetProcedureByVisit(this.visitID).subscribe(function (hr) {
            _this.historyRecord = hr;
        });
    };
    ProcedureComponent.prototype.toggleSearch = function () {
        var _this = this;
        var dialogRef = this.dialog.open(DialogResultProcedureSearch, {
            height: '650px',
            width: '900px',
            data: {
                refdata: this.returnedResult
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.returnedResult = result;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], ProcedureComponent.prototype, "patientID", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], ProcedureComponent.prototype, "visitID", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], ProcedureComponent.prototype, "invoiceHdrID", void 0);
    ProcedureComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-procedure',
            template: __webpack_require__("../../../../../src/app/episode/procedure/procedure.component.html"),
            styles: [__webpack_require__("../../../../../src/app/episode/procedure/procedure.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_GDService_service__["a" /* GDService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_GDService_service__["a" /* GDService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_masterdata_service__["a" /* MasterDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_masterdata_service__["a" /* MasterDataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_core__["ElementRef"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MdDialog */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"]) === "function" && _e || Object])
    ], ProcedureComponent);
    return ProcedureComponent;
    var _a, _b, _c, _d, _e;
}());

var DialogResultProcedureSearch = (function () {
    function DialogResultProcedureSearch(dialogRef, MasterDataService, data) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.MasterDataService = MasterDataService;
        this.data = data;
        this.MasterDataService.GetChargeItemListingByType("PROCEDURE")
            .subscribe(function (x) {
            _this.dataSource = x;
        });
    }
    DialogResultProcedureSearch.prototype.getSelectedItem = function () {
        this.data.returnedResult = this.dataGrid.instance.getSelectedRowKeys();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_6_devextreme_angular__["DxDataGridComponent"]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6_devextreme_angular__["DxDataGridComponent"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_devextreme_angular__["DxDataGridComponent"]) === "function" && _a || Object)
    ], DialogResultProcedureSearch.prototype, "dataGrid", void 0);
    DialogResultProcedureSearch = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'dialog-procedure-search',
            template: __webpack_require__("../../../../../src/app/episode/procedure/dialog-procedure-search.html"),
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MD_DIALOG_DATA */])),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MdDialogRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_masterdata_service__["a" /* MasterDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_masterdata_service__["a" /* MasterDataService */]) === "function" && _c || Object, Object])
    ], DialogResultProcedureSearch);
    return DialogResultProcedureSearch;
    var _a, _b, _c;
}());

//# sourceMappingURL=procedure.component.js.map

/***/ }),

/***/ "../../../../../src/app/episode/radiology/dialog-radiology-search.html":
/***/ (function(module, exports) {

module.exports = "<h2 md-dialog-title>Radiology Listing</h2>\n<md-dialog-content>\n    <div>\n        <dx-data-grid  #grid\n        id=\"gridContainer\" \n        [dataSource]=\"dataSource\"\n        [allowColumnResizing]=\"true\"\n         \n        [columnAutoWidth]=\"true\"\n        [allowColumnReordering]=\"true\"\n        (onSelectionChanged)=\"getSelectedItem()\">    \n        <dxo-selection\n        \n        mode=\"multiple\"></dxo-selection>\n        <dxo-filter-row\n        [visible]=\"true\"></dxo-filter-row>\n        <dxo-paging [pageSize]=\"10\"></dxo-paging>\n        <dxo-pager \n            [showPageSizeSelector]=\"true\"\n            [allowedPageSizes]=\"[5,10]\"\n            [showInfo]=\"true\">\n        </dxo-pager>\n        <dxo-group-panel [visible]=\"true\"></dxo-group-panel>\n        <dxo-grouping #expand [autoExpandAll]=\"true\"></dxo-grouping>\n        <dxi-column dataField=\"catalog\" [groupIndex]=\"0\"></dxi-column>\n        <dxi-column dataField=\"chargeItemCode\"></dxi-column>\n        <dxi-column dataField=\"chargeItemDescription\"></dxi-column>\n        <dxi-column dataField=\"analysis\"></dxi-column>\n        </dx-data-grid>\n  \n      </div>\n      \n</md-dialog-content>\n<md-dialog-actions>\n  <button md-button [md-dialog-close]=\"data.returnedResult\">Close</button>\n</md-dialog-actions>"

/***/ }),

/***/ "../../../../../src/app/episode/radiology/radiology.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*temporary ui fix */\n:host /deep/ .mat-select-trigger {\n    font-size: 12px;\n    height: inherit;\n    margin-bottom: 15px;\n    margin-top: 2px;\n    \n  }\n  \n  :host /deep/ .mat-select-value-text {\n    line-height: inherit;\n    margin-bottom: 15px;\n    margin-top: 2px;\n  }\n  \n  :host /deep/ .mat-select {\n    font-size: 12px;\n    margin-top: 2px;\n    margin-bottom: 15px;\n    margin-left: 1px;\n  }\n  \n  :host /deep/ .mat-checkbox {\n    font-size: 12px;\n    margin-top: 2px;\n    margin-left: 1px;\n  }\n  \n  :host /deep/ .mat-radio-group {\n    font-size: 12px;\n    margin-top: 2px;\n    margin-left: 1px;\n  }\n  /*temporary ui fix */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/episode/radiology/radiology.component.html":
/***/ (function(module, exports) {

module.exports = "\n<section>\n    <div class=\"toolbar\">\n      <div>\n        <button md-raised-button [disabled]=\"disableSave\" (click)=\"onSave()\">Save</button>\n        <button md-raised-button (click)=\"onNew()\">New</button>\n      </div>\n    </div> \n    <md-card>\n      <md-card-content>\n        <div class=\"container\">\n          <div>\n            <md-select placeholder=\"Modality\" [(ngModel)]=\"data.modalityID\" name=\"modality\" class=\"input-full-width\">\n              <md-option *ngFor=\"let modality of modalities\" [value]=\"modality.modalityID\">\n                  {{modality.modalityName}}\n              </md-option>\n            </md-select>\n          </div>\n          <div>\n            <button md-raised-button color=\"accent\" (click)=\"toggleSearch()\"><i class=\"material-icons\">search</i>Search Radiology Items...</button>\n          </div>\n          <div>\n              <md-radio-group [(ngModel)]=\"data.priority\" class=\"input-full-width\">\n                  <md-radio-button *ngFor=\"let priority of priorities\" [value]=\"priority\" [checked]=\"priority==data.priority\">\n                      {{priority}}\n                  </md-radio-button>\n              </md-radio-group>\n          </div>\n        </div>\n\n        <div class=\"container\">\n            <div>\n                <md-form-field class=\"input-full-width\">\n                  <input mdInput placeholder=\"Ordered By\" [mdAutocomplete]=\"orderedBy\" [formControl]=\"orderedByCtrl\">\n                  \n                  <md-autocomplete #orderedBy=\"mdAutocomplete\" [displayWith]=\"displayDoctorFn\">\n                  <md-option *ngFor=\"let doctor of filteredOrderedBy | async\" [value]=\"doctor\">\n                    <span>{{ doctor.userFullName }}, </span>\n                    <small><strong>Initial:</strong>{{doctor.userInitial}}, <strong>Speciality:</strong>{{doctor.specialityID}}</small>\n                  </md-option>\n                  </md-autocomplete>\n                </md-form-field>\n            </div>\n            <div>\n                <md-form-field class=\"input-full-width\">\n                  <input mdInput placeholder=\"Referred By\" [mdAutocomplete]=\"referredBy\" [formControl]=\"referredByCtrl\">\n                  \n                  <md-autocomplete #referredBy=\"mdAutocomplete\" [displayWith]=\"displayDoctorFn\">\n                  <md-option *ngFor=\"let doctor of filteredReferredBy | async\" [value]=\"doctor\">\n                    <span>{{ doctor.userFullName }}, </span>\n                    <small><strong>Initial:</strong>{{doctor.userInitial}}, <strong>Speciality:</strong>{{doctor.specialityID}}</small>\n                  </md-option>\n                  </md-autocomplete>\n                </md-form-field>\n            </div>\n            <div>\n                <md-form-field class=\"input-full-width\">\n                  <input mdInput placeholder=\"Reply To\" [mdAutocomplete]=\"replyTo\" [formControl]=\"replyToCtrl\">\n                  \n                  <md-autocomplete #replyTo=\"mdAutocomplete\" [displayWith]=\"displayDoctorFn\">\n                  <md-option *ngFor=\"let doctor of filteredReplyTo | async\" [value]=\"doctor\">\n                    <span>{{ doctor.userFullName }}, </span>\n                    <small><strong>Initial:</strong>{{doctor.userInitial}}, <strong>Speciality:</strong>{{doctor.specialityID}}</small>\n                  </md-option>\n                  </md-autocomplete>\n                </md-form-field>\n            </div>\n        </div>\n        <div class=\"container\">\n            <div>\n                <md-form-field class=\"input-full-width\">\n                  <input mdInput placeholder=\"Reported By\" [mdAutocomplete]=\"reportedBy\" [formControl]=\"reportedByCtrl\">\n                  \n                  <md-autocomplete #reportedBy=\"mdAutocomplete\" [displayWith]=\"displayDoctorFn\">\n                  <md-option *ngFor=\"let doctor of filteredReportedBy | async\" [value]=\"doctor\">\n                    <span>{{ doctor.userFullName }}, </span>\n                    <small><strong>Initial:</strong>{{doctor.userInitial}}, <strong>Speciality:</strong>{{doctor.specialityID}}</small>\n                  </md-option>\n                  </md-autocomplete>\n                </md-form-field>\n          \n            </div>\n            <div>\n                <md-form-field class=\"input-full-width\">\n                  <input mdInput placeholder=\"Radiologist\" [mdAutocomplete]=\"radiologist\" [formControl]=\"radiologistCtrl\">\n                  \n                  <md-autocomplete #radiologist=\"mdAutocomplete\" [displayWith]=\"displayDoctorFn\">\n                  <md-option *ngFor=\"let doctor of filteredRadiologist | async\" [value]=\"doctor\">\n                    <span>{{ doctor.userFullName }}, </span>\n                    <small><strong>Initial:</strong>{{doctor.userInitial}}, <strong>Speciality:</strong>{{doctor.specialityID}}</small>\n                  </md-option>\n                  </md-autocomplete>\n                </md-form-field>\n          \n            </div>\n            <div>\n                <md-select placeholder=\"Laterality\" [(ngModel)]=\"data.laterality\" name=\"laterality\" class=\"input-full-width\">\n                <md-option *ngFor=\"let laterality of lateralities\" [value]=\"laterality.value\">\n                    {{laterality.viewValue}}\n                </md-option>\n                </md-select>\n            </div>\n        </div>\n\n          <div>\n            <dx-data-grid style=\"display:block;\" #grid\n            id=\"gridContainer\" \n            [dataSource]=\"returnedResult\"\n            [allowColumnResizing]=\"true\"\n             \n            [columnAutoWidth]=\"true\"\n            [allowColumnReordering]=\"true\">  \n            <dxo-editing \n                mode=\"cell\"\n                [allowUpdating]=\"true\"\n                [allowDeleting]=\"true\">\n            </dxo-editing>\n            <dxi-column dataField=\"catalog\"></dxi-column>\n            <dxi-column dataField=\"chargeItemCode\"></dxi-column>\n            <dxi-column dataField=\"chargeItemDescription\"></dxi-column>\n            <dxi-column dataField=\"analysis\"></dxi-column>\n            <dxi-column *ngIf=\"toShow\" dataField=\"billPrice\" dataType=\"number\"></dxi-column>\n            </dx-data-grid>\n      \n          </div>     \n\n        <div class=\"container\">\n            <div>\n              <md-form-field class=\"input-full-width\">\n                <input mdInput placeholder=\"Allergy\" [(ngModel)]=\"data.allergy\" name=\"allergy\">\n              </md-form-field>\n            </div>\n            <div>\n              <md-form-field class=\"input-full-width\">\n                <input mdInput placeholder=\"Special Instruction\" [(ngModel)]=\"data.instruction\" name=\"instruction\">\n              </md-form-field>\n            </div>\n            <div>\n                <md-checkbox [(ngModel)]=\"data.pregnant\" name=\"pregnant\">Pregnant</md-checkbox>\n                <md-checkbox [(ngModel)]=\"data.breastFeeding\" name=\"breastFeeding\">Breast Feeding</md-checkbox>\n            </div>\n          </div>\n        <div class=\"container\">\n              <md-form-field class=\"input-full-width\">\n                <textarea mdInput [(ngModel)]=\"data.remark\" name=\"remark\" placeholder=\"Medical Note\"></textarea>\n              </md-form-field>\n        </div>\n      </md-card-content>\n    </md-card>\n    <p>\n      <md-accordion>\n        <md-expansion-panel *ngFor=\"let historyList of historyRecord\" >\n\n            <md-expansion-panel-header>\n              <mat-panel-description></mat-panel-description>\n              <mat-panel-title>\n                <strong><h4 md-line><i class=\"material-icons\">timer</i> {{historyList.created | date:'medium'}} - <strong>{{historyList.radiologyOrderNo}}</strong></h4></strong>\n              </mat-panel-title>\n            </md-expansion-panel-header>\n\n                    <p>\n                      <span> <small>Ordered By: </small><small class=\"highlighter\">{{historyList.orderedByResource?.userFullName}}</small> </span>\n                      <span> <small>Referred By: </small><small class=\"highlighter\">{{historyList.referredByResource?.userFullName}}</small> </span>\n                      <span> <small>Reply To: </small><small class=\"highlighter\">{{historyList.replyToResource?.userFullName}}</small> </span>\n                      <span> <small>Reported By: </small><small class=\"highlighter\">{{historyList.reportedByResource?.userFullName}}</small> </span>\n                      <span> <small>Radiologist: </small><small class=\"highlighter\">{{historyList.radiologistResource?.userFullName}}</small> </span>\n\n                    </p>\n                    <p>\n                      <span> <small>Priority: </small><small class=\"highlighter\">{{historyList.priority}}</small> </span>\n                    </p>\n                    <p>\n                      <span> <small>Medical Note:  </small><small class=\"highlighter\">{{historyList.remark}}</small> </span>\n                    </p> \n                    <p>\n                        <span> \n                        <table class=\"orderTable\">\n                            <thead>\n                            <tr>\n                              <th>#</th>\n                              <th>Catalog</th>\n                              <th>Radiology Code</th>\n                              <th>Analysis</th>\n                              <th>Price</th>\n                            </tr>\n                            </thead>\n                            <tbody>\n                            <tr *ngFor=\"let orderList of historyList.radiologyLnResource; let i=index\">\n                            <td>{{i+1}}</td>\n                            <td>{{orderList.chargeItemResource.catalog}}</td>\n                            <td>{{orderList.chargeItemResource.chargeItemCode}}</td>\n                            <td>{{orderList.chargeItemResource.analysis}}</td>\n                            <td>{{orderList.billPrice}}</td>\n                            </tr>\n                            </tbody>\n                        </table>\n                      </span>\n                    </p>  \n                <md-action-row>\n                    <span>Current Version: <small class=\"highlighter\">{{historyList.version}}</small></span>  \n                    <span>, Updated: <small class=\"highlighter\">{{historyList.created | date:'medium'}}</small> </span>\n                    <span>, By: <small class=\"highlighter\">{{historyList.createdByResource.userFullName}}</small></span>\n                    <span>, Created: <small class=\"highlighter\">{{historyList.created | date:'medium'}}</small> </span>\n                    <span>, By: <small class=\"highlighter\">{{historyList.createdByResource.userFullName}}</small></span>\n                    <span> </span>\n                    <button md-raised-button (click)=\"loadDatabyID(historyList.radiologyHdrID)\"><i class=\"material-icons\">mode_edit</i>Edit</button>\n                    <button md-raised-button (click)=\"loadDatabyID(historyList.radiologyHdrID)\"><i class=\"material-icons\">delete</i>Delete</button>\n                  </md-action-row>\n        </md-expansion-panel>\n      </md-accordion>\n  </section>\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/episode/radiology/radiology.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RadiologyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogResultRadiologySearch; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_GDService_service__ = __webpack_require__("../../../../../src/app/services/GDService.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_masterdata_service__ = __webpack_require__("../../../../../src/app/services/masterdata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_devextreme_angular__ = __webpack_require__("../../../../devextreme-angular/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_devextreme_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_devextreme_angular__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var RadiologyComponent = (function () {
    function RadiologyComponent(GDService, MasterDataService, _element, dialog, router) {
        this.GDService = GDService;
        this.MasterDataService = MasterDataService;
        this._element = _element;
        this.dialog = dialog;
        this.router = router;
        this.disableSave = false;
        this.returnedResult = {};
        this.data = { radiologyLnResource: {} };
        this.toShow = true;
        this.priorities = ['Urgent', 'Stat', 'Routine'];
        this.lateralities = [{ value: 'LEFT', viewValue: 'LEFT' }, { value: 'RIGHT', viewValue: 'RIGHT' }, { value: 'BILATERAL', viewValue: 'BILATERAL' }];
        this.resetForm();
    }
    RadiologyComponent.prototype.displayDoctorFn = function (value) {
        return value && typeof value === 'object' ? value.userFullName : value;
    };
    RadiologyComponent.prototype.filterDoctors = function (val) {
        //`^${val}`
        return val ? this.doctors.filter(function (s) { return new RegExp(val, 'gi').test(s.userFullName); })
            : this.doctors;
    };
    RadiologyComponent.prototype.resetForm = function () {
        this.data = {};
        this.returnedResult = {};
        this.orderedByCtrl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]({ dgUserID: 0, userFullName: '' });
        this.referredByCtrl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]({ dgUserID: 0, userFullName: '' });
        this.replyToCtrl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]({ dgUserID: 0, userFullName: '' });
        this.reportedByCtrl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]({ dgUserID: 0, userFullName: '' });
        this.radiologistCtrl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]({ dgUserID: 0, userFullName: '' });
    };
    RadiologyComponent.prototype.onNew = function () {
        this.disableSave = false;
        this.resetForm();
    };
    RadiologyComponent.prototype.onSave = function () {
        var _this = this;
        //clear editing cached
        this.data.radiologyLnResource = this.returnedResult;
        if (this.orderedByCtrl.value.dgUserID > 0)
            this.data.orderedByID = this.orderedByCtrl.value.dgUserID;
        if (this.referredByCtrl.value.dgUserID > 0)
            this.data.referredByID = this.referredByCtrl.value.dgUserID;
        if (this.replyToCtrl.value.dgUserID > 0)
            this.data.replyToID = this.replyToCtrl.value.dgUserID;
        if (this.reportedByCtrl.value.dgUserID > 0)
            this.data.reportedByID = this.reportedByCtrl.value.dgUserID;
        if (this.radiologistCtrl.value.dgUserID > 0)
            this.data.radiologistID = this.radiologistCtrl.value.dgUserID;
        this.data.patientID = this.patientID;
        this.data.visitID = this.visitID;
        this.data.invoiceHdrID = this.invoiceHdrID;
        this.data.CreatedByID = 1;
        if (this.data.radiologyHdrID) {
            this.MasterDataService.CreateRadiologyRecord(this.data)
                .subscribe(function (x) {
                _this.GDService.openSnackBar(x.radiologyOrderNo + '" Updated Sucessfully!', 'Info');
                _this.getHistory();
            }, function (err) {
                _this.GDService.openSnackBar(err, 'Info');
            });
        }
        else
            this.MasterDataService.CreateRadiologyRecord(this.data)
                .subscribe(function (x) {
                _this.GDService.openSnackBar(x.radiologyOrderNo + '" Created Sucessfully!', 'Info');
                _this.getHistory();
            }, function (err) {
                _this.GDService.openSnackBar(err, 'Info');
            });
    };
    RadiologyComponent.prototype.loadDatabyID = function (id) {
        var _this = this;
        this.MasterDataService.GetRadiologyByID(id).subscribe(function (hr) {
            _this.data = hr;
            if (_this.data.orderedByID != null)
                _this.orderedByCtrl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]({ dgUserID: hr.orderedByResource.dgUserID, userFullName: hr.orderedByResource.userFullName });
            if (_this.data.referredByID != null)
                _this.referredByCtrl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]({ dgUserID: hr.referredByResource.dgUserID, userFullName: hr.referredByResource.userFullName });
            if (_this.data.replyToID != null)
                _this.replyToCtrl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]({ dgUserID: hr.replyToResource.dgUserID, userFullName: hr.replyToResource.userFullName });
            if (_this.data.reportedByID != null)
                _this.reportedByCtrl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]({ dgUserID: hr.reportedByResource.dgUserID, userFullName: hr.reportedByResource.userFullName });
            if (_this.data.radiologistID != null)
                _this.radiologistCtrl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]({ dgUserID: hr.radiologistResource.dgUserID, userFullName: hr.radiologistResource.userFullName });
            for (var _i = 0, _a = hr.radiologyLnResource; _i < _a.length; _i++) {
                var modLn = _a[_i];
                modLn.catalog = modLn.chargeItemResource.catalog;
                modLn.chargeItemCode = modLn.chargeItemResource.chargeItemCode;
                modLn.analysis = modLn.chargeItemResource.analysis;
                modLn.chargeItemDescription = modLn.chargeItemResource.chargeItemDescription;
            }
            _this.returnedResult = hr.radiologyLnResource;
            _this.disableSave = false;
        }, function (err) {
            _this.GDService.openSnackBar(err, 'Info');
        });
    };
    RadiologyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.MasterDataService.GetDGUser().subscribe(function (doctor) {
            _this.doctors = doctor;
            _this.filteredOrderedBy = _this.orderedByCtrl.valueChanges
                .startWith(_this.orderedByCtrl.value)
                .map(function (val) { return _this.displayDoctorFn(val); })
                .map(function (name) { return _this.filterDoctors(name); });
            _this.filteredReferredBy = _this.referredByCtrl.valueChanges
                .startWith(_this.referredByCtrl.value)
                .map(function (val) { return _this.displayDoctorFn(val); })
                .map(function (name) { return _this.filterDoctors(name); });
            _this.filteredReplyTo = _this.replyToCtrl.valueChanges
                .startWith(_this.replyToCtrl.value)
                .map(function (val) { return _this.displayDoctorFn(val); })
                .map(function (name) { return _this.filterDoctors(name); });
            _this.filteredRadiologist = _this.radiologistCtrl.valueChanges
                .startWith(_this.radiologistCtrl.value)
                .map(function (val) { return _this.displayDoctorFn(val); })
                .map(function (name) { return _this.filterDoctors(name); });
            _this.filteredReportedBy = _this.reportedByCtrl.valueChanges
                .startWith(_this.reportedByCtrl.value)
                .map(function (val) { return _this.displayDoctorFn(val); })
                .map(function (name) { return _this.filterDoctors(name); });
        });
        this.MasterDataService.GetModality().subscribe(function (modality) {
            _this.modalities = modality;
        });
        this.getHistory();
        this.disableSave = false;
    };
    RadiologyComponent.prototype.getHistory = function () {
        var _this = this;
        this.disableSave = true;
        this.MasterDataService.GetRadiologyByVisit(this.visitID).subscribe(function (hr) {
            _this.historyRecord = hr;
        });
    };
    RadiologyComponent.prototype.toggleSearch = function () {
        var _this = this;
        var dialogRef = this.dialog.open(DialogResultRadiologySearch, {
            height: '650px',
            width: '900px',
            data: {
                refdata: this.returnedResult
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.returnedResult = result;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], RadiologyComponent.prototype, "patientID", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], RadiologyComponent.prototype, "visitID", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], RadiologyComponent.prototype, "invoiceHdrID", void 0);
    RadiologyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-radiology',
            template: __webpack_require__("../../../../../src/app/episode/radiology/radiology.component.html"),
            styles: [__webpack_require__("../../../../../src/app/episode/radiology/radiology.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_GDService_service__["a" /* GDService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_GDService_service__["a" /* GDService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_masterdata_service__["a" /* MasterDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_masterdata_service__["a" /* MasterDataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_core__["ElementRef"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MdDialog */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"]) === "function" && _e || Object])
    ], RadiologyComponent);
    return RadiologyComponent;
    var _a, _b, _c, _d, _e;
}());

var DialogResultRadiologySearch = (function () {
    function DialogResultRadiologySearch(dialogRef, MasterDataService, data) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.MasterDataService = MasterDataService;
        this.data = data;
        this.MasterDataService.GetChargeItemListingByType("RADIOLOGY")
            .subscribe(function (x) {
            _this.dataSource = x;
        });
    }
    DialogResultRadiologySearch.prototype.getSelectedItem = function () {
        this.data.returnedResult = this.dataGrid.instance.getSelectedRowKeys();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_6_devextreme_angular__["DxDataGridComponent"]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6_devextreme_angular__["DxDataGridComponent"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_devextreme_angular__["DxDataGridComponent"]) === "function" && _a || Object)
    ], DialogResultRadiologySearch.prototype, "dataGrid", void 0);
    DialogResultRadiologySearch = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'dialog-radiology-search',
            template: __webpack_require__("../../../../../src/app/episode/radiology/dialog-radiology-search.html"),
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MD_DIALOG_DATA */])),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MdDialogRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_masterdata_service__["a" /* MasterDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_masterdata_service__["a" /* MasterDataService */]) === "function" && _c || Object, Object])
    ], DialogResultRadiologySearch);
    return DialogResultRadiologySearch;
    var _a, _b, _c;
}());

//# sourceMappingURL=radiology.component.js.map

/***/ }),

/***/ "../../../../../src/app/episode/timeline/timeline.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/episode/timeline/timeline.component.html":
/***/ (function(module, exports) {

module.exports = "<google-chart [data]=\"timelineChartOptions\"></google-chart>"

/***/ }),

/***/ "../../../../../src/app/episode/timeline/timeline.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimelineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TimelineComponent = (function () {
    function TimelineComponent() {
        this.timelineChartOptions = {
            chartType: 'Timeline',
            dataTable: [
                ['Location', 'From', 'To'],
                ['Consultation Room', new Date(2017, 1, 1, 12, 0, 0), new Date(2017, 1, 1, 13, 0, 0)],
                ['Ward 5A', new Date(2017, 1, 1, 14, 0, 0), new Date(2017, 1, 2, 12, 0, 0)],
                ['Laboratory Department', new Date(2017, 1, 2, 14, 0, 0), new Date(2017, 1, 3, 12, 0, 0)],
                ['Ward 5A', new Date(2017, 1, 3, 16, 0, 0), new Date(2017, 1, 4, 12, 0, 0)],
                ['Radiology Department', new Date(2017, 1, 4, 12, 0, 0), new Date(2017, 1, 4, 19, 0, 0)],
                ['Ward 5A', new Date(2017, 1, 4, 20, 0, 0), new Date(2017, 1, 6, 12, 0, 0)],
                ['Ward 5B', new Date(2017, 1, 6, 14, 0, 0), new Date(2017, 1, 8, 12, 0, 0)],
                ['Ward 5A', new Date(2017, 1, 9, 20, 0, 0), new Date(2017, 1, 23, 12, 0, 0)],
            ],
            options: {
                animation: { easing: 'out' }, height: 350,
                greenFrom: 1, greenTo: 4,
                minorTicks: 5,
                min: 0, max: 5,
                majorTicks: ['0', '1', '2', '3', '4', '5'],
                greenColor: '#d0e9c6'
            }
        };
    }
    TimelineComponent.prototype.ngOnInit = function () {
    };
    TimelineComponent.prototype.ready = function (event) {
        console.log(event.message);
    };
    TimelineComponent.prototype.error = function (event) {
        console.error(event);
    };
    TimelineComponent.prototype.select = function (event) {
        this.selectEvent = event;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], TimelineComponent.prototype, "patientID", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], TimelineComponent.prototype, "visitID", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], TimelineComponent.prototype, "invoiceHdrID", void 0);
    TimelineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-timeline',
            template: __webpack_require__("../../../../../src/app/episode/timeline/timeline.component.html"),
            styles: [__webpack_require__("../../../../../src/app/episode/timeline/timeline.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TimelineComponent);
    return TimelineComponent;
}());

//# sourceMappingURL=timeline.component.js.map

/***/ }),

/***/ "../../../../../src/app/episode/vital-signs/vital-signs.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\nbody {\n        font: 24px Helvetica;\n        background: #999999;\n    }\n\n    #main {\n        margin: 0;\n        padding: 1;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-flow: row;\n                flex-flow: row;\n    }\n \n    #main > article {\n        margin: 0px;\n        padding: 1px;\n        -webkit-box-flex: 3;\n            -ms-flex: 3 1 15%;\n                flex: 3 1 15%;\n        -webkit-box-ordinal-group: 3;\n            -ms-flex-order: 2;\n                order: 2;\n        max-width: 15%;\n    }\n\n    #main > nav {\n        margin: 0px;\n        padding: 1px;\n        -webkit-box-flex: 1;\n            -ms-flex: 1 6 15%;\n                flex: 1 6 15%;\n        -webkit-box-ordinal-group: 2;\n            -ms-flex-order: 1;\n                order: 1;\n    }\n  \n    #main > aside {\n        margin: 0px;\n        padding: 1px;\n        -webkit-box-flex: 1;\n            -ms-flex: 1 6 85%;\n                flex: 1 6 85%;\n        -webkit-box-ordinal-group: 4;\n            -ms-flex-order: 3;\n                order: 3;\n        display: block;\n        max-width: 85%;\n    }\n \n    header, footer {\n        display: block;\n        margin: 4px;\n        padding: 5px;\n        min-height: 100px;\n        border: 1px solid #eebb55;\n        border-radius: 7pt;\n        background: #ffeebb;\n    }\n \n    /* Too narrow to support three columns */\n    @media all and (max-width: 640px) {\n        #main, #page {\n            -webkit-box-orient: vertical;\n            -webkit-box-direction: normal;\n                -ms-flex-direction: column;\n                    flex-direction: column;\n        }\n\n        #main > article, #main > nav, #main > aside {\n        /* Return them to document order */\n            -webkit-box-ordinal-group: 1;\n                -ms-flex-order: 0;\n                    order: 0;\n        }\n  \n        #main > nav, #main > aside, header, footer {\n            min-height: 50px;\n            max-height: 50px;\n        }\n    }\n\n\n\n\n    ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/episode/vital-signs/vital-signs.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"toolbar\">\n    <div>\n        <button md-raised-button>Save</button>\n        <button md-raised-button>Edit</button>\n        <button md-raised-button>New</button>\n        <button md-raised-button>Void</button>\n    </div>\n</div>\n<section>\n  <div id='main'>\n      <article>\n        <md-list dense>\n            <h3 md-subheader>Documents</h3>\n            <md-list-item *ngFor=\"let document of documents\">\n                <h4 md-line><a [routerLink]=\"[document.name]\">{{document.name}}</a></h4>\n                <p md-line>{{document.edited | date}}</p>\n\n            </md-list-item>\n        </md-list>\n    </article>\n    <aside>\n        <p>New Vital</p>\n        <app-vital></app-vital>\n    </aside>\n  </div>\n  </section>"

/***/ }),

/***/ "../../../../../src/app/episode/vital-signs/vital-signs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VitalSignsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VitalSignsComponent = (function () {
    function VitalSignsComponent() {
        this.documents = [
            { name: 'Documents 1', edited: new Date('1/1/16'), },
            { name: 'Documents 2', edited: new Date('1/17/16'), },
            { name: 'Documents 3', edited: new Date('1/28/16'), }
        ];
    }
    VitalSignsComponent.prototype.ngOnInit = function () {
    };
    VitalSignsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-vital-signs',
            template: __webpack_require__("../../../../../src/app/episode/vital-signs/vital-signs.component.html"),
            styles: [__webpack_require__("../../../../../src/app/episode/vital-signs/vital-signs.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VitalSignsComponent);
    return VitalSignsComponent;
}());

//# sourceMappingURL=vital-signs.component.js.map

/***/ }),

/***/ "../../../../../src/app/episode/vital/vital.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/episode/vital/vital.component.html":
/***/ (function(module, exports) {

module.exports = "<section >\n  \n\n  <form>\n    <div class=\"toolbar\">\n      <div>\n        <button md-raised-button [disabled]=\"disableSave\" (click)=\"onSave()\">Save</button>\n        <button md-raised-button (click)=\"onNew()\">New</button>\n      </div>\n    </div>\n\n    <md-card >\n      <md-card-header>\n        <md-card-title>Vital Signs</md-card-title>\n        <md-card-subtitle></md-card-subtitle>\n      </md-card-header>\n      <md-card-content>\n          <div class=\"container\">\n              <div> \n                  <md-form-field class=\"input-full-width\">\n                    <input mdInput placeholder=\"Height\" (change)=\"calculateBMI()\" [(ngModel)]=\"data.height\" name=\"Height\">\n                  </md-form-field>\n              </div>\n              <div> \n                  <md-form-field class=\"input-full-width\">\n                    <input mdInput placeholder=\"Weight\" (change)=\"calculateBMI()\" [(ngModel)]=\"data.weight\" name=\"Weight\">\n                  </md-form-field>\n              </div>\n              <div> \n                  <md-form-field class=\"input-full-width\">\n                    <input mdInput placeholder=\"Body Mass Index (BMI)\" disabled [(ngModel)]=\"data.bMI\" name=\"BMI\">\n                  </md-form-field>\n              </div>\n          </div>\n          <div class=\"container\">\n            <div> \n              <md-form-field class=\"input-full-width\">\n                <input mdInput placeholder=\"Temperature °C\" [(ngModel)]=\"data.temperature\" name=\"Temperature\">\n              </md-form-field>\n            </div>\n            <div> \n                <md-form-field class=\"input-full-width\">\n                  <input mdInput placeholder=\"Blood Pressure - Systolic\" [(ngModel)]=\"data.systolic\" name=\"Systolic\">\n                </md-form-field>\n            </div>\n            <div> \n                <md-form-field class=\"input-full-width\">\n                  <input mdInput placeholder=\"Blood Pressure - Diastolic\" [(ngModel)]=\"data.diastolic\" name=\"Diastolic\">\n                </md-form-field>\n            </div>\n\n          </div>\n          <div class=\"container\">\n            <div> \n                <md-form-field class=\"input-full-width\">\n                  <input mdInput placeholder=\"Heart Rate\" [(ngModel)]=\"data.heartRate\" name=\"HeartRate\">\n                </md-form-field>\n            </div>\n            <div> \n              <md-form-field class=\"input-full-width\">\n                <input mdInput placeholder=\"Respiratory Rate\" [(ngModel)]=\"data.respiratoryRate\" name=\"RespiratoryRate\">\n              </md-form-field>\n            </div>\n            <div> \n                <md-form-field class=\"input-full-width\">\n                  <input mdInput placeholder=\"O2 Saturation\" [(ngModel)]=\"data.saturation\" name=\"Saturation\">\n                </md-form-field>\n            </div>\n \n          </div>\n          <div class=\"container\">\n              <div> \n                <md-form-field class=\"input-full-width\">\n                  <input mdInput placeholder=\"Medical Note\" [(ngModel)]=\"data.remark\" name=\"Remark\">\n                </md-form-field>\n              </div>\n          </div>\n      </md-card-content>\n    </md-card>\n\n  </form>\n  <md-card >\n    <md-card-header>\n      <md-card-title> </md-card-title>\n      <md-card-subtitle></md-card-subtitle>\n    </md-card-header>\n    <md-card-content>\n  <dx-chart\n  id=\"chart\" (onPointClick)=\"pointClick($event)\" [dataSource]=\"historyRecord\" style=\"width:1200px;height:500px;display:block\" defaultPane=\"bottomPane\" title=\"Vital Signs History\">\n  <dxi-series pane=\"topPane\" color=\"#b0daff\" type=\"rangeBar\" rangeValue1Field=\"systolic\" rangeValue2Field=\"diastolic\" name=\"Blood Pressure Ranges\">\n  </dxi-series>\n\n  <dxi-series pane=\"topPane\" valueField=\"heartRate\" name=\"Heart Rate\">\n      <dxo-label [visible]=\"true\" [customizeText]=\"precipitationCustomizeText\">\n      </dxo-label>\n  </dxi-series>\n\n  <dxi-series type=\"spline\" valueField=\"temperature\" name=\"Temperature °C\">\n      <dxo-label [visible]=\"true\" [customizeText]=\"precipitationCustomizeText\">\n      </dxo-label>\n  </dxi-series>\n\n  <dxi-series type=\"spline\" valueField=\"respiratoryRate\" name=\"respiratory Rate\">\n      <dxo-label [visible]=\"true\" [customizeText]=\"precipitationCustomizeText\">\n      </dxo-label>\n  </dxi-series>\n\n  <dxi-series type=\"spline\" valueField=\"bmi\" name=\"BMI\">\n      <dxo-label [visible]=\"true\" [customizeText]=\"customizeText\">\n      </dxo-label>\n  </dxi-series>\n\n  <dxo-common-series-settings argumentField=\"created\">\n  </dxo-common-series-settings>\n  <dxi-pane name=\"topPane\"></dxi-pane>\n  <dxi-pane name=\"bottomPane\"></dxi-pane>\n\n  <dxi-value-axis pane=\"topPane\" [min]=\"50\" [max]=\"150\">\n      <dxo-grid [visible]=\"true\"></dxo-grid>\n      <dxo-title text=\"Blood Pressure, mmHg\"></dxo-title>\n  </dxi-value-axis>\n\n  <dxi-value-axis pane=\"bottomPane\">\n    <dxo-grid [visible]=\"true\"></dxo-grid>\n    <dxo-title text=\"Temperature, BMI\"></dxo-title>\n  </dxi-value-axis>\n\n  <dxo-legend verticalAlignment=\"bottom\" horizontalAlignment=\"center\"> </dxo-legend>\n  <dxo-export [enabled]=\"true\"></dxo-export>\n  <dxo-tooltip\n    [enabled]=\"true\"\n    [shared]=\"true\"\n    [customizeTooltip]=\"customizeTooltip\">\n    <dxo-format type=\"largeNumber\" [precision]=\"1\"></dxo-format>\n  </dxo-tooltip>\n</dx-chart>\n\n</md-card-content>\n</md-card>\n</section>"

/***/ }),

/***/ "../../../../../src/app/episode/vital/vital.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VitalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_GDService_service__ = __webpack_require__("../../../../../src/app/services/GDService.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_masterdata_service__ = __webpack_require__("../../../../../src/app/services/masterdata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var VitalComponent = (function () {
    function VitalComponent(GDService, MasterDataService, _element, dialog, router) {
        this.GDService = GDService;
        this.MasterDataService = MasterDataService;
        this._element = _element;
        this.dialog = dialog;
        this.router = router;
        this.disableSave = false;
        this.data = {};
        this.toShow = true;
    }
    VitalComponent.prototype.customizeTooltip = function (arg) {
        var items = arg.valueText.split("\n"), color = arg.point.getColor();
        items.forEach(function (item, index) {
            if (item.indexOf(arg.seriesName) === 0) {
                items[index] = $("<b>")
                    .text(item)
                    .css("color", color)
                    .prop("outerHTML");
            }
        });
        return { text: items.join("\n") };
    };
    VitalComponent.prototype.calculateBMI = function () {
        if (this.data.weight > 0 && this.data.height > 0)
            this.data.bMI = (this.data.weight / ((this.data.height / 100) * 2)).toFixed(2);
    };
    VitalComponent.prototype.pointClick = function (e) {
        console.log(e);
        var point = e.target;
        if (point.isSelected()) {
            point.clearSelection();
        }
        else {
            point.select();
        }
    };
    VitalComponent.prototype.customizeText = function (arg) {
        //console.log(arg);
        // var bmi = arg.valueText;
        // return bmi.toFixed(2);
    };
    VitalComponent.prototype.onNew = function () {
        this.disableSave = false;
        this.data = {};
    };
    VitalComponent.prototype.onSave = function () {
        var _this = this;
        this.data.patientID = this.patientID;
        this.data.visitID = this.visitID;
        this.data.CreatedByID = 1;
        if (this.data.vitalSignID) {
            this.MasterDataService.CreateVitalSignRecord(this.data)
                .subscribe(function (x) {
                _this.GDService.openSnackBar('Updated Sucessfully!', 'Info');
                _this.getHistory();
            }, function (err) {
                _this.GDService.openSnackBar(err, 'Info');
            });
        }
        else
            this.MasterDataService.CreateVitalSignRecord(this.data)
                .subscribe(function (x) {
                _this.GDService.openSnackBar('Created Sucessfully!', 'Info');
                _this.getHistory();
            }, function (err) {
                _this.GDService.openSnackBar(err, 'Info');
            });
    };
    VitalComponent.prototype.loadDatabyID = function (id) {
        var _this = this;
        this.MasterDataService.GetVitalSignByID(id).subscribe(function (hr) {
            _this.data = hr;
            _this.disableSave = false;
        }, function (err) {
            _this.GDService.openSnackBar(err, 'Info');
        });
    };
    VitalComponent.prototype.ngOnInit = function () {
        this.getHistory();
        this.disableSave = false;
    };
    VitalComponent.prototype.getHistory = function () {
        var _this = this;
        this.disableSave = true;
        this.MasterDataService.GetVitalSignByVisit(this.visitID).subscribe(function (hr) {
            _this.historyRecord = hr;
            _this.historyRecord.forEach(function (element) {
                element.created = __WEBPACK_IMPORTED_MODULE_5_moment__(element.created).format('DD-MM-YYYY HH:mm');
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], VitalComponent.prototype, "patientID", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], VitalComponent.prototype, "visitID", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], VitalComponent.prototype, "invoiceHdrID", void 0);
    VitalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-vital',
            template: __webpack_require__("../../../../../src/app/episode/vital/vital.component.html"),
            styles: [__webpack_require__("../../../../../src/app/episode/vital/vital.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_GDService_service__["a" /* GDService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_GDService_service__["a" /* GDService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_masterdata_service__["a" /* MasterDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_masterdata_service__["a" /* MasterDataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_core__["ElementRef"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MdDialog */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"]) === "function" && _e || Object])
    ], VitalComponent);
    return VitalComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=vital.component.js.map

/***/ }),

/***/ "../../../../../src/app/inventory-item/inventory-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*temporary ui fix */\n:host /deep/ .mat-select-trigger {\n    font-size: inherit;\n    height: inherit;\n    \n}\n\n:host /deep/ .mat-select-value-text {\n    line-height: inherit;\n}\n\n:host /deep/ .mat-select {\n    margin-top: 8px;\n    margin-left: 30px;\n  }\n\n  :host /deep/ .mat-checkbox {\n    margin-top: 8px;\n    margin-left: 30px;\n  }\n\n  :host /deep/ .mat-radio-group {\n    margin-top: 8px;\n    margin-left: 30px;\n  }\n  /*temporary ui fix */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/inventory-item/inventory-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"toolbar\">\n    <div>\n        <button md-raised-button (click)=\"onSave()\">Save</button>\n        <button md-raised-button>New</button>\n        <button md-raised-button>Save + New</button>\n    </div>\n</div>\n\n<section>\n  <p-growl [(value)]=\"msgs\" life=3000></p-growl>\n    <md-card>\n      <md-card-header>\n        <md-card-title>Inventory Item</md-card-title>\n        <md-card-subtitle>New Inventory Item</md-card-subtitle>\n      </md-card-header>\n      <md-card-content>\n          <div class=\"container\">\n            <div> \n              <md-form-field class=\"input-full-width\">\n                <input mdInput [(ngModel)]=\"data.inventoryCode\" name=\"inventoryCode\" placeholder=\"Code\" >\n              </md-form-field>\n            </div>\n            <div>\n              <md-form-field class=\"input-full-width\">\n                <input mdInput [(ngModel)]=\"data.inventoryDescription\" name=\"inventoryDescription\" placeholder=\"Description\" >\n              </md-form-field>\n            </div>\n            <div>\n              <md-checkbox [(ngModel)]=\"data.active\" name=\"active\">Active</md-checkbox>\n            </div>\n          </div>\n          <div class=\"container\">\n            <div>\n              <md-form-field class=\"input-full-width\">\n                <input mdInput placeholder=\"Brand Name\" [mdAutocomplete]=\"reactiveinventoryBrand\" [formControl]=\"inventoryBrandCtrl\" >\n              </md-form-field>\n\n              <md-autocomplete #reactiveinventoryBrand=\"mdAutocomplete\" [displayWith]=\"displayinventoryBrandFn\">\n                <md-option *ngFor=\"let inventoryBrand of filteredinventoryBrands | async\" [value]=\"inventoryBrand\">\n                  <span>{{ inventoryBrand.inventoryBrandID }}</span>\n                  <span> ({{inventoryBrand.inventoryBrandName}}) </span>\n                </md-option>\n              </md-autocomplete>\n\n            </div>\n            <div>\n              <md-form-field class=\"input-full-width\">\n                <input mdInput placeholder=\"Generic Name\" [mdAutocomplete]=\"reactiveinventoryGeneric\" [formControl]=\"inventoryGenericCtrl\" >\n              </md-form-field>\n\n              <md-autocomplete #reactiveinventoryGeneric=\"mdAutocomplete\" [displayWith]=\"displayinventoryGenericFn\">\n                <md-option *ngFor=\"let inventoryGeneric of filteredinventoryGenerics | async\" [value]=\"inventoryGeneric\">\n                  <span>{{ inventoryGeneric.inventoryGenericID }}</span>\n                  <span> ({{inventoryGeneric.inventoryGenericName}}) </span>\n                </md-option>\n              </md-autocomplete>\n\n            </div>\n            <div>\n              <md-form-field class=\"input-full-width\">\n                <input mdInput [(ngModel)]=\"data.inventoryOtherName\" name=\"inventoryOtherName\" placeholder=\"Other Name\">\n              </md-form-field>\n            </div>\n          </div>\n          <div class=\"container\">\n            <div>\n              <md-form-field class=\"input-full-width\">\n                <input mdInput placeholder=\"ATC Classification\" [mdAutocomplete]=\"reactiveinventoryATCClassification\" [formControl]=\"inventoryATCClassificationCtrl\" >\n              </md-form-field>\n\n              <md-autocomplete #reactiveinventoryATCClassification=\"mdAutocomplete\" [displayWith]=\"displayinventoryATCClassificationFn\">\n                <md-option *ngFor=\"let inventoryATCClassification of filteredinventoryATCClassifications | async\" [value]=\"inventoryATCClassification\">\n                  <span>{{ inventoryATCClassification.inventoryATCClassificationID }}</span>\n                  <span> ({{inventoryATCClassification.inventoryATCClassificationCode}}, {{inventoryATCClassification.inventoryATCClassificationName}}) </span>\n                </md-option>\n              </md-autocomplete>\n\n            </div>\n            <div>\n              <md-form-field class=\"input-full-width\">\n                <input mdInput placeholder=\"Category\" [mdAutocomplete]=\"reactiveinventoryCategory\" [formControl]=\"inventoryCategoryCtrl\" >\n              </md-form-field>\n\n              <md-autocomplete #reactiveinventoryCategory=\"mdAutocomplete\" [displayWith]=\"displayinventoryCategoryFn\">\n                <md-option *ngFor=\"let inventoryCategory of filteredinventoryCategorys | async\" [value]=\"inventoryCategory\">\n                  <span>{{ inventoryCategory.inventoryCategoryID }}</span>\n                  <span> ({{inventoryCategory.inventoryCategoryName}}) </span>\n                </md-option>\n              </md-autocomplete>\n            </div>\n            <div>\n              <md-form-field class=\"input-full-width\">\n                <input mdInput placeholder=\"Sub Category\" [mdAutocomplete]=\"reactiveinventorySubCategory\" [formControl]=\"inventorySubCategoryCtrl\" >\n              </md-form-field>\n\n              <md-autocomplete #reactiveinventorySubCategory=\"mdAutocomplete\" [displayWith]=\"displayinventorySubCategoryFn\">\n                <md-option *ngFor=\"let inventorySubCategory of filteredinventorySubCategorys | async\" [value]=\"inventorySubCategory\">\n                  <span>{{ inventorySubCategory.inventorySubCategoryID }}</span>\n                  <span> ({{inventorySubCategory.inventorySubCategoryName}}) </span>\n                </md-option>\n              </md-autocomplete>\n\n            </div>\n          </div>\n          <div class=\"container\">\n            <div>\n              <md-select placeholder=\"Medication Class\" name=\"medicationClass\" [(ngModel)]=\"data.inventoryMedicationClassID\" class=\"input-full-width\">\n                <md-option *ngFor=\"let medicationClass of medicationClasses\" [value]=\"medicationClass.inventoryMedicationClassID\">\n                  {{medicationClass.inventoryMedicationClassName}}\n                </md-option>\n              </md-select>\n            </div>\n            <div>\n              <md-select placeholder=\"Pregnancy Category\" name=\"pregnancyCategory\" [(ngModel)]=\"data.inventoryPregnancyCategoryID\" class=\"input-full-width\">\n                <md-option *ngFor=\"let pregnancyCategory of pregnancyCategories\" [value]=\"pregnancyCategory.inventoryPregnancyCategoryID\"  >\n                  {{pregnancyCategory.inventoryPregnancyCategoryName}}\n                </md-option>\n              </md-select>\n            </div>\n          </div>\n          <div class=\"container\">\n            <div>\n              <md-checkbox [(ngModel)]=\"data.otc\" name=\"otc\">Over The Counter</md-checkbox>\n              <md-checkbox [(ngModel)]=\"data.useBatch\" name=\"useBatch\">Use Batch</md-checkbox>\n              <md-checkbox [(ngModel)]=\"data.expiryControl\" name=\"expiryControl\">Expiry Control</md-checkbox>\n              <md-checkbox [(ngModel)]=\"data.chargeable\" name=\"chargeable\">Chargeable</md-checkbox>\n            </div>\n          </div>\n      </md-card-content>\n    </md-card>\n\n</section>"

/***/ }),

/***/ "../../../../../src/app/inventory-item/inventory-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventoryItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_masterdata_service__ = __webpack_require__("../../../../../src/app/services/masterdata.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InventoryItemComponent = (function () {
    function InventoryItemComponent(MasterDataService, route, router) {
        var _this = this;
        this.MasterDataService = MasterDataService;
        this.route = route;
        this.router = router;
        this.pregnancyCategories = [];
        this.medicationClasses = [];
        this.data = {};
        this.dataList = [];
        this.msgs = [];
        this.inventoryBrandCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]({ inventoryBrandID: 0, inventoryBrandName: '' });
        this.inventoryGenericCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]({ inventoryGenericID: 0, inventoryGenericName: '' });
        this.inventoryATCClassificationCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]({ inventoryATCClassificationID: 0, inventoryATCClassificationName: '' });
        this.inventoryCategoryCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]({ inventoryCategoryID: 0, inventoryCategoryName: '' });
        this.inventorySubCategoryCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]({ inventorySubCategoryID: 0, inventorySubCategoryName: '' });
        route.params.subscribe(function (p) {
            if (p['id'] != null)
                _this.data.inventoryID = +p['id'];
            if (_this.data.inventoryID) {
                _this.retrieveData();
            }
        });
    }
    InventoryItemComponent.prototype.displayinventorySubCategoryFn = function (value) {
        return value && typeof value === 'object' ? value.inventorySubCategoryName : value;
    };
    InventoryItemComponent.prototype.filterInventorySubCategorys = function (val) {
        return val ? this.inventorySubCategorys.filter(function (s) { return new RegExp(val, 'gi').test(s.inventorySubCategoryName); })
            : this.inventorySubCategorys;
    };
    InventoryItemComponent.prototype.displayinventoryCategoryFn = function (value) {
        return value && typeof value === 'object' ? value.inventoryCategoryName : value;
    };
    InventoryItemComponent.prototype.filterInventoryCategorys = function (val) {
        return val ? this.inventoryCategorys.filter(function (s) { return new RegExp(val, 'gi').test(s.inventoryCategoryName); })
            : this.inventoryCategorys;
    };
    InventoryItemComponent.prototype.displayinventoryBrandFn = function (value) {
        return value && typeof value === 'object' ? value.inventoryBrandName : value;
    };
    InventoryItemComponent.prototype.filterBrandNames = function (val) {
        return val ? this.brandNames.filter(function (s) { return new RegExp(val, 'gi').test(s.inventoryBrandName); })
            : this.brandNames;
    };
    InventoryItemComponent.prototype.displayinventoryGenericFn = function (value) {
        return value && typeof value === 'object' ? value.inventoryGenericName : value;
    };
    InventoryItemComponent.prototype.filterInventoryGenerics = function (val) {
        return val ? this.inventoryGenerics.filter(function (s) { return new RegExp(val, 'gi').test(s.inventoryGenericName); })
            : this.inventoryGenerics;
    };
    InventoryItemComponent.prototype.displayinventoryATCClassificationFn = function (value) {
        return value && typeof value === 'object' ? value.inventoryATCClassificationName : value;
    };
    InventoryItemComponent.prototype.filterInventoryATCClassifications = function (val) {
        return val ? this.inventoryATCClassifications.filter(function (s) { return new RegExp(val, 'gi').test(s.inventoryATCClassificationName); })
            : this.inventoryATCClassifications;
    };
    InventoryItemComponent.prototype.retrieveData = function () {
        var _this = this;
        this.MasterDataService.GetChargeItemByID(this.data.inventoryID)
            .subscribe(function (m) {
            _this.data = m;
            _this.inventoryBrandCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]({ inventoryBrandID: m.inventoryBrandResource.inventoryBrandID, inventoryBrandName: m.inventoryBrandResource.inventoryBrandName });
            _this.inventoryGenericCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]({ inventoryGenericID: m.inventoryGenericResource.inventoryGenericID, inventoryGenericName: m.inventoryGenericResource.inventoryGenericName });
            _this.inventoryATCClassificationCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]({ inventoryATCClassificationID: m.inventoryATCClassificationResource.inventoryATCClassificationID, inventoryATCClassificationName: m.inventoryATCClassificationResource.inventoryATCClassificationName });
            _this.inventoryCategoryCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]({ inventoryCategoryID: m.inventoryCategoryResource.inventoryCategoryID, inventoryCategoryName: m.inventoryCategoryResource.inventoryCategoryName });
            _this.inventorySubCategoryCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]({ inventorySubCategoryID: m.inventorySubCategoryResource.inventorySubCategoryID, inventorySubCategoryName: m.inventorySubCategoryResource.inventorySubCategoryName });
        }, function (err) {
            if (err.status == 404)
                // this.msgs = [];
                // this.msgs.push({severity:'error', summary:'Info Message', detail:'Record Not Found!'});
                _this.data = {};
        });
    };
    InventoryItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.MasterDataService.GetInventoryPregnancyCategory()
            .subscribe(function (x) {
            _this.pregnancyCategories = x;
        });
        this.MasterDataService.GetInventoryMedicationClass()
            .subscribe(function (x) {
            _this.medicationClasses = x;
        });
        this.MasterDataService.GetInventoryBrand().subscribe(function (brandName) {
            _this.brandNames = brandName;
            //here only start filter
            _this.filteredinventoryBrands = _this.inventoryBrandCtrl.valueChanges
                .startWith(_this.inventoryBrandCtrl.value)
                .map(function (val) { return _this.displayinventoryBrandFn(val); })
                .map(function (name) { return _this.filterBrandNames(name); });
        });
        this.MasterDataService.GetInventoryGeneric().subscribe(function (generic) {
            _this.inventoryGenerics = generic;
            //here only start filter
            _this.filteredinventoryGenerics = _this.inventoryGenericCtrl.valueChanges
                .startWith(_this.inventoryBrandCtrl.value)
                .map(function (val) { return _this.displayinventoryGenericFn(val); })
                .map(function (name) { return _this.filterInventoryGenerics(name); });
        });
        this.MasterDataService.GetInventoryATCClassification().subscribe(function (atc) {
            _this.inventoryATCClassifications = atc;
            //here only start filter
            _this.filteredinventoryATCClassifications = _this.inventoryATCClassificationCtrl.valueChanges
                .startWith(_this.inventoryATCClassificationCtrl.value)
                .map(function (val) { return _this.displayinventoryATCClassificationFn(val); })
                .map(function (name) { return _this.filterInventoryATCClassifications(name); });
        });
        this.MasterDataService.GetInventoryCategory().subscribe(function (category) {
            _this.inventoryCategorys = category;
            //here only start filter
            _this.filteredinventoryCategorys = _this.inventoryCategoryCtrl.valueChanges
                .startWith(_this.inventoryCategoryCtrl.value)
                .map(function (val) { return _this.displayinventoryCategoryFn(val); })
                .map(function (name) { return _this.filterInventoryCategorys(name); });
        });
        this.MasterDataService.GetInventorySubCategory().subscribe(function (subCategory) {
            _this.inventorySubCategorys = subCategory;
            //here only start filter
            _this.filteredinventorySubCategorys = _this.inventorySubCategoryCtrl.valueChanges
                .startWith(_this.inventorySubCategoryCtrl.value)
                .map(function (val) { return _this.displayinventorySubCategoryFn(val); })
                .map(function (name) { return _this.filterInventorySubCategorys(name); });
        });
    };
    InventoryItemComponent.prototype.onSave = function () {
        this.data.inventoryBrandID = this.inventoryBrandCtrl.value.inventoryBrandID;
        this.data.inventoryGenericID = this.inventoryGenericCtrl.value.inventoryGenericID;
        this.data.inventoryATCClassificationID = this.inventoryATCClassificationCtrl.value.inventoryATCClassificationID;
        this.data.inventoryCategoryID = this.inventoryCategoryCtrl.value.inventoryCategoryID;
        this.data.inventorySubCategoryID = this.inventorySubCategoryCtrl.value.inventorySubCategoryID;
        if (this.data.inventoryID) {
            this.MasterDataService.UpdateInventoryByID(this.data)
                .subscribe(function (x) {
                //  this.msgs = [];
                // this.msgs.push({severity:'success', summary:'Info Message', detail:'"' + x.inventoryCode + '" Updated Sucessfully!'});
            });
        }
        else
            this.MasterDataService.CreateInventory(this.data)
                .subscribe(function (x) {
                // this.msgs = [];
                // this.msgs.push({severity:'success', summary:'Info Message', detail:'"' + x.inventoryCode + '" Created Sucessfully!'});
            });
    };
    InventoryItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-inventory-item',
            template: __webpack_require__("../../../../../src/app/inventory-item/inventory-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/inventory-item/inventory-item.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_masterdata_service__["a" /* MasterDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services_masterdata_service__["a" /* MasterDataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["ActivatedRoute"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["Router"]) === "function" && _c || Object])
    ], InventoryItemComponent);
    return InventoryItemComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=inventory-item.component.js.map

/***/ }),

/***/ "../../../../../src/app/inventory/inventory.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*temporary ui fix */\n:host /deep/ .mat-select-trigger {\n    font-size: inherit;\n    height: inherit;\n    \n}\n\n:host /deep/ .mat-select-value-text {\n    line-height: inherit;\n}\n\n:host /deep/ .mat-select {\n    margin-top: 8px;\n    margin-left: 30px;\n  }\n  :host /deep/ .mat-checkbox {\n    margin-top: 8px;\n    margin-left: 30px;\n  }\n\n  :host /deep/ .mat-radio-group {\n    margin-top: 8px;\n    margin-left: 30px;\n  }\n\n  /*temporary ui fix */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/inventory/inventory.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/inventory/inventory.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InventoryComponent = (function () {
    function InventoryComponent() {
    }
    InventoryComponent.prototype.ngOnInit = function () {
    };
    InventoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-inventory',
            template: __webpack_require__("../../../../../src/app/inventory/inventory.component.html"),
            styles: [__webpack_require__("../../../../../src/app/inventory/inventory.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InventoryComponent);
    return InventoryComponent;
}());

//# sourceMappingURL=inventory.component.js.map

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "\n          <div class=\"containerheader\">\n              <div>\n                  <md-card>\n                      <md-card-header> \n                        <md-card-title><Strong>Today Appointments</Strong></md-card-title>\n                        <md-card-subtitle></md-card-subtitle>\n                      </md-card-header> \n                      <md-card-content>\n\n                        <dx-tree-map\n                        [dataSource]=\"citiesPopulations\"\n                        [colorizer]=\"option\"\n                        resolveLabelOverflow=\"ellipsis\">\n                        <dxo-tooltip\n                        [enabled]=\"true\" \n                        [customizeTooltip]=\"customizeTooltip\"></dxo-tooltip>\n                        <dxo-size\n                        [height]=\"150\"></dxo-size>\n                        </dx-tree-map>\n\n                      </md-card-content>\n                    </md-card>\n              </div>\n              <div>\n                  <md-card>\n                      <md-card-header> \n                        <md-card-title><Strong>Tomorrow Appointments</Strong></md-card-title>\n                        <md-card-subtitle></md-card-subtitle>\n                      </md-card-header> \n                      <md-card-content>\n                        <dx-tree-map\n                        [dataSource]=\"citiesPopulations1\"\n                        [colorizer]=\"option\"\n                        resolveLabelOverflow=\"ellipsis\">\n                        <dxo-tooltip\n                        [enabled]=\"true\" \n                        [customizeTooltip]=\"customizeTooltip\"></dxo-tooltip>\n                        <dxo-size\n                        [height]=\"150\"></dxo-size>\n                        </dx-tree-map>\n                      </md-card-content> \n                    </md-card>\n              </div>\n              <div>\n                  <md-card>\n                      <md-card-header> \n                        <md-card-title><Strong>My Patients in Queue</Strong></md-card-title>\n                        <md-card-subtitle></md-card-subtitle>\n                      </md-card-header> \n                      <md-card-content>\n                        <dx-tree-map\n                        [dataSource]=\"citiesPopulations2\"\n                        [colorizer]=\"option\"\n                        resolveLabelOverflow=\"ellipsis\">\n                        <dxo-tooltip\n                        [enabled]=\"true\" \n                        [customizeTooltip]=\"customizeTooltip\"></dxo-tooltip>\n                        <dxo-size\n                        [height]=\"150\"></dxo-size>\n                        </dx-tree-map>\n                      </md-card-content>\n                    </md-card>\n              </div>\n              <div>\n                  <md-card>\n                      <md-card-header> \n                        <md-card-title><Strong>Unassigned Patients In Queue</Strong></md-card-title>\n                        <md-card-subtitle></md-card-subtitle>\n                      </md-card-header> \n                      <md-card-content>\n                        <dx-tree-map\n                        [dataSource]=\"citiesPopulations3\"\n                        [colorizer]=\"option\"\n                        resolveLabelOverflow=\"ellipsis\">\n                        <dxo-tooltip\n                        [enabled]=\"true\" \n                        [customizeTooltip]=\"customizeTooltip\"></dxo-tooltip>\n                        <dxo-size\n                        [height]=\"150\"></dxo-size>\n                        </dx-tree-map>\n                      </md-card-content> \n                    </md-card>\n              </div>\n            </div>\n\n          <div class=\"containerheader\">\n              <div>\n                    <md-card>\n                        <md-card-header> \n                          <md-card-title><Strong>To Do List</Strong></md-card-title>\n                          <md-card-subtitle></md-card-subtitle>\n                        </md-card-header> \n                        <md-card-content>\n                            <md-selection-list>\n                              <md-list-option>\n                                Contact Dr Leong for Laboratory Result\n                              </md-list-option>\n                              <md-list-option>\n                                Issue referal letter to mr Wong\n                              </md-list-option>\n                              <md-list-option selected=\"true\">\n                                Replenish stock level\n                              </md-list-option>\n                              <md-list-option>\n                                Important appointment at 4pm\n                              </md-list-option>\n                              <md-list-option selected=\"true\">\n                                Locum Interview at 5pm\n                              </md-list-option > \n                              <md-list-option>\n                                Onsite visit @ 2pm - KPJ \n                              </md-list-option>\n                              <md-list-option>\n                                Onsite visit @ 7pm - Sunway medical centre\n                              </md-list-option>\n                            </md-selection-list>\n                        </md-card-content> \n                      </md-card>\n\n              </div>\n              <div>\n                  <md-card>\n                      <md-card-header> \n                        <md-card-title><Strong>Quick Search</Strong></md-card-title>\n                        <md-card-subtitle></md-card-subtitle>\n                      </md-card-header> \n                      <md-card-content>\n                        <div> \n                          <md-form-field class=\"input-full-width\">\n                            <input mdInput placeholder=\"Search Patient...\" [mdAutocomplete]=\"reactivePatient\" [formControl]=\"patientCtrl\" name=\"patientID\">\n                          </md-form-field>\n              \n                          <md-autocomplete #reactivePatient=\"mdAutocomplete\" [displayWith]=\"displayPatientFn\">\n                            <md-option *ngFor=\"let patient of filteredPatients | async\" [value]=\"patient\">\n                              <span>{{patient.name}}, </span>\n                              <small class=\"highlighter\"><strong>NRIC:</strong>{{patient.identificationValue}}, <strong>Gender:</strong>{{patient.gender}}, <strong>D.O.B:</strong>{{patient.dob | date: 'dd/MM/yyyy'}}</small>\n                            </md-option>\n                          </md-autocomplete>\n                        </div>\n                            \n                            <div> \n                              <md-form-field class=\"input-full-width\">\n                                <input mdInput placeholder=\"Search Episode...\" [mdAutocomplete]=\"autoEpisode\" [formControl]=\"episodeCtrl\">\n                              </md-form-field>\n                              <md-autocomplete #autoEpisode=\"mdAutocomplete\" [displayWith]=\"displayEpisodeFn\">\n                                <md-option *ngFor=\"let episode of filteredEpisode | async\" [value]=\"episode\">\n                                  <span>{{episode.visitNo}} </span>\n                                  <small class=\"highlighter\"> - ({{episode.patientResource.patientID}},{{episode.patientResource.name}}, D.O.B:{{episode.patientResource.dob | date: 'dd/MM/yyyy'}}) </small>\n                                </md-option>\n                              </md-autocomplete>\n                            </div>\n                      </md-card-content> \n                      <md-card-actions>\n                        <button md-raised-button color=\"accent\" (click)=\"quickSearch()\"><i class=\"material-icons\">search</i>Search...</button>\n                      </md-card-actions>\n                    </md-card>\n                    \n              </div>\n\n          </div>\n"

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_masterdata_service__ = __webpack_require__("../../../../../src/app/services/masterdata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_startWith__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LandingComponent = (function () {
    function LandingComponent(MasterDataService, route, router) {
        this.MasterDataService = MasterDataService;
        this.route = route;
        this.router = router;
        this.episode = [];
        this.option = {
            palette: "harmony light",
            colorizeGroups: false
        };
        this.citiesPopulations = [{
                name: "Total: 12",
                items: [{
                        value: 1,
                        name: "New Visit",
                        country: "New Visit"
                    }, {
                        value: 2,
                        name: "Follow-up Visit",
                        country: "Follow-up Visit"
                    }, {
                        value: 4,
                        name: "Walk-In",
                        country: "Walk-In"
                    }, {
                        value: 3,
                        name: "FOMEMA",
                        country: "FOMEMA"
                    }, {
                        value: 6,
                        name: "Referral",
                        country: "Referral"
                    }]
            }];
        this.citiesPopulations1 = [{
                name: "Total: 16",
                items: [{
                        value: 12,
                        name: "Walk-In",
                        country: "Walk-In"
                    }, {
                        value: 2,
                        name: "Follow-up Visit",
                        country: "Follow-up Visit"
                    }, {
                        value: 3,
                        name: "Lab test",
                        country: "Lab test"
                    }, {
                        value: 1,
                        name: "Collect Report",
                        country: "Collect Report"
                    }, {
                        value: 2,
                        name: "Referral",
                        country: "Referral"
                    }]
            }];
        this.citiesPopulations2 = [{
                name: "Total: 8",
                items: [{
                        value: 2,
                        name: "New Visit",
                        country: "New Visit"
                    }, {
                        value: 2,
                        name: "Routine Visit",
                        country: "Routine Visit"
                    }, {
                        value: 2,
                        name: "Follow-up Visit",
                        country: "Follow-up Visit"
                    }, {
                        value: 3,
                        name: "Lab test",
                        country: "Lab test"
                    }, {
                        value: 6,
                        name: "Referral",
                        country: "Referral"
                    }]
            }];
        this.citiesPopulations3 = [{
                name: "Total: 3",
                items: [{
                        value: 1,
                        name: "New Visit",
                        country: "New Visit"
                    }, {
                        value: 2,
                        name: "Follow-up Visit",
                        country: "Follow-up Visit"
                    }, {
                        value: 3,
                        name: "Lab test",
                        country: "Lab test"
                    }, {
                        value: 3,
                        name: "Collect Report",
                        country: "Collect Report"
                    }]
            }];
    }
    LandingComponent.prototype.displayEpisodeFn = function (value) {
        return value && typeof value === 'object' ? value.visitNo : value;
    };
    LandingComponent.prototype.displayPatientFn = function (value) {
        return value && typeof value === 'object' ? value.name : value;
    };
    LandingComponent.prototype.filterEpisode = function (val) {
        return val ? this.episode.filter(function (s) { return new RegExp(val, 'gi').test(s.visitNo); })
            : this.episode;
    };
    LandingComponent.prototype.filterPatients = function (val) {
        return val ? this.patients.filter(function (s) { return new RegExp(val, 'gi').test(s.name); })
            : this.patients;
    };
    LandingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.episodeCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]({ visitID: 0, visitNo: '' });
        this.patientCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]({ patientID: 0, name: '' });
        this.filteredPatients = this.patientCtrl.valueChanges
            .debounceTime(400)
            .do(function (value) {
            _this.MasterDataService.GetPatientBySearch(value).subscribe(function (res) {
                _this.patient = res;
            });
        }).delay(500).map(function () { return _this.patient; });
        this.filteredEpisode = this.episodeCtrl.valueChanges
            .debounceTime(400)
            .do(function (value) {
            _this.MasterDataService.GetVisitBySearch(value).subscribe(function (res) {
                _this.episode = res;
            });
        }).delay(500).map(function () { return _this.episode; });
    };
    LandingComponent.prototype.customizeTooltip = function (arg) {
        var data = arg.node.data;
        return {
            text: arg.node.isLeaf() ? ("<b>" + data.name +
                "</b><br/>Number of Patient: " + arg.valueText) : null
        };
    };
    LandingComponent.prototype.quickSearch = function () {
        if (this.patientCtrl.value.patientID > 0) {
            this.router.navigate(['/patient/', this.patientCtrl.value.patientID]);
        }
        else if (this.episodeCtrl.value.visitID > 0) {
            this.router.navigate(['/episode/', this.episodeCtrl.value.visitID]);
        }
    };
    LandingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__("../../../../../src/app/landing/landing.component.html"),
            styles: [__webpack_require__("../../../../../src/app/landing/landing.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_masterdata_service__["a" /* MasterDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services_masterdata_service__["a" /* MasterDataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _c || Object])
    ], LandingComponent);
    return LandingComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=landing.component.js.map

/***/ }),

/***/ "../../../../../src/app/masterData/department/department.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/masterData/department/department.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"toolbar\">\n    <div>\n        <button md-raised-button (click)=\"onSave()\">Save</button>\n        <button md-raised-button>New</button>\n        <button md-raised-button>Save + New</button>\n    </div>\n</div>\n\n<section>\n    <md-card>\n      <md-card-header>\n        <md-card-title>Department</md-card-title>\n        <md-card-subtitle>{{data.departmentID > 0 ? 'Edit Mode' : 'New Mode'}}</md-card-subtitle>\n      </md-card-header>\n      <md-card-content>\n          <div class=\"container\">\n            <div>\n                <md-form-field class=\"input-full-width\">\n                  <input mdInput placeholder=\"Department Description\" [(ngModel)]=\"data.departmentName\" name=\"departmentName\">\n                </md-form-field>\n            </div>\n            <div>\n              <md-checkbox [(ngModel)]=\"data.active\" name=\"active\">Active</md-checkbox>\n            </div>\n        </div>\n      </md-card-content>\n    </md-card>\n    <br>\n    \n        <md-card>\n            <md-card-header>\n            <md-card-title>Master Data List</md-card-title>\n            <md-card-subtitle></md-card-subtitle>\n            </md-card-header>\n            <md-card-content>\n                <dx-data-grid style=\"display:block;\" #grid\n                id=\"gridContainer\" \n                (onSelectionChanged)=\"onRowSelect($event)\"\n                [dataSource]=\"dataList\"\n                [allowColumnResizing]=\"true\"\n                 \n                [columnAutoWidth]=\"true\"\n                [allowColumnReordering]=\"true\"\n                [hoverStateEnabled]=\"true\">\n                <dxo-filter-row [visible]=\"true\"></dxo-filter-row>\n                <dxo-paging [pageSize]=\"30\"></dxo-paging>\n                <dxo-pager \n                    [showPageSizeSelector]=\"true\"\n                    [allowedPageSizes]=\"[5,10,15,30,50,100]\"\n                    [showInfo]=\"true\">\n                </dxo-pager>\n                <dxo-selection mode=\"single\"></dxo-selection>  \n                <dxi-column dataField=\"departmentID\" [width]=\"150\"></dxi-column>\n                <dxi-column dataField=\"departmentName\"></dxi-column>\n                <dxi-column dataField=\"active\"></dxi-column>\n\n                </dx-data-grid>\n    \n            </md-card-content>\n        </md-card>\n    </section>"

/***/ }),

/***/ "../../../../../src/app/masterData/department/department.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepartmentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_GDService_service__ = __webpack_require__("../../../../../src/app/services/GDService.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_masterdata_service__ = __webpack_require__("../../../../../src/app/services/masterdata.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DepartmentComponent = (function () {
    function DepartmentComponent(GDService, MasterDataService, route, router) {
        var _this = this;
        this.GDService = GDService;
        this.MasterDataService = MasterDataService;
        this.route = route;
        this.router = router;
        this.data = {};
        this.dataList = [];
        route.params.subscribe(function (p) {
            if (p['id'] != null)
                _this.data.departmentID = +p['id'];
            if (_this.data.departmentID) {
                _this.retrieveData();
            }
        });
    }
    DepartmentComponent.prototype.onRowSelect = function (event) {
        this.router.navigate(['/department/', event.selectedRowKeys[0].departmentID]);
    };
    DepartmentComponent.prototype.retrieveData = function () {
        var _this = this;
        this.MasterDataService.GetDepartmentByID(this.data.departmentID)
            .subscribe(function (m) {
            _this.data = m;
        }, function (err) {
            if (err.status == 404)
                _this.GDService.openSnackBar('Record Not Found!', 'Info');
        });
    };
    DepartmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.active = true;
        this.MasterDataService.GetDepartment()
            .subscribe(function (x) {
            _this.dataList = x;
        });
    };
    DepartmentComponent.prototype.onSave = function () {
        var _this = this;
        if (this.data.departmentID) {
            this.MasterDataService.UpdateDepartmentByID(this.data)
                .subscribe(function (x) {
                _this.GDService.openSnackBar('"' + x.departmentName + '" Updated Sucessfully!', 'Info');
            });
        }
        else
            this.MasterDataService.CreateDepartment(this.data)
                .subscribe(function (x) {
                _this.GDService.openSnackBar('"' + x.departmentName + '" Created Sucessfully!', 'Info');
            });
    };
    DepartmentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-department',
            template: __webpack_require__("../../../../../src/app/masterData/department/department.component.html"),
            styles: [__webpack_require__("../../../../../src/app/masterData/department/department.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_GDService_service__["a" /* GDService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_GDService_service__["a" /* GDService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_masterdata_service__["a" /* MasterDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services_masterdata_service__["a" /* MasterDataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _d || Object])
    ], DepartmentComponent);
    return DepartmentComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=department.component.js.map

/***/ }),

/***/ "../../../../../src/app/masterData/diagnosis-master/diagnosis-master.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/masterData/diagnosis-master/diagnosis-master.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"toolbar\">\n    <div>\n        <button md-raised-button (click)=\"onSave()\">Save</button>\n        <button md-raised-button>New</button>\n        <button md-raised-button>Save + New</button>\n    </div>\n  </div>\n\n  <section> \n    <md-card>\n      <md-card-header>\n        <md-card-title>Diagnosis</md-card-title>\n        <md-card-subtitle>New Diagnosis</md-card-subtitle>\n      </md-card-header>\n      <md-card-content>\n        <div class=\"ui-g\">\n            <div class=\"ui-g-2\">\n                <md-form-field class=\"input-full-width\">\n                  <input mdInput placeholder=\"Diagnosis Code\" [(ngModel)]=\"data.diagnosisCode\" name=\"diagnosisCode\">\n                </md-form-field>\n            </div>\n            <div class=\"ui-g-6\">\n                <md-form-field class=\"input-full-width\">\n                  <input mdInput placeholder=\"Diagnosis Description\" [(ngModel)]=\"data.diagnosisDescription\" name=\"diagnosisDescription\">\n                </md-form-field>\n            </div>\n            <div class=\"ui-g-4\">\n              <md-checkbox [(ngModel)]=\"data.active\" name=\"active\">Active</md-checkbox>\n            </div>\n        </div>\n      </md-card-content>\n    </md-card>\n\n    <div class=\"example-container mat-elevation-z8\">\n      \n        <md-table #table [dataSource]=\"dataSource\">\n      \n          <!--- Note that these columns can be defined in any order.\n                The actual rendered columns are set as a property on the row definition\" -->\n      \n\n          <ng-container cdkColumnDef=\"diagnosisCode\">\n            <md-header-cell *cdkHeaderCellDef> Diagnosis Code </md-header-cell>\n            <md-cell *cdkCellDef=\"let row\"> {{row.diagnosisCode}} </md-cell>\n          </ng-container>\n      \n\n          <ng-container cdkColumnDef=\"diagnosisDescription\">\n            <md-header-cell *cdkHeaderCellDef> Diagnosis Description </md-header-cell>\n            <md-cell *cdkCellDef=\"let row\"> {{row.diagnosisDescription}} </md-cell>\n          </ng-container>\n\n      \n          <md-header-row *cdkHeaderRowDef=\"displayedColumns\"></md-header-row>\n          <md-row *cdkRowDef=\"let row; columns: displayedColumns;\"></md-row>\n        </md-table>\n        <md-paginator #paginator\n                [length]=\"exampleDatabase.data.length\"\n                [pageIndex]=\"0\"\n                [pageSize]=\"5\"\n                [pageSizeOptions]=\"[5, 10, 25, 100]\">\n        </md-paginator>\n      </div>\n        \n  </section>"

/***/ }),

/***/ "../../../../../src/app/masterData/diagnosis-master/diagnosis-master.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiagnosisMasterComponent; });
/* unused harmony export ExampleDatabase */
/* unused harmony export ExampleDataSource */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_masterdata_service__ = __webpack_require__("../../../../../src/app/services/masterdata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_cdk_table__ = __webpack_require__("../../../cdk/@angular/cdk/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_merge__ = __webpack_require__("../../../../rxjs/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_observable_fromEvent__ = __webpack_require__("../../../../rxjs/add/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_observable_fromEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_rxjs_add_observable_fromEvent__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var DiagnosisMasterComponent = (function () {
    function DiagnosisMasterComponent(MasterDataService, route, router) {
        var _this = this;
        this.MasterDataService = MasterDataService;
        this.route = route;
        this.router = router;
        this.data = {};
        this.dataList = [];
        this.msgs = [];
        this.displayedColumns = ['diagnosisCode', 'diagnosisDescription'];
        this.exampleDatabase = new ExampleDatabase(this.MasterDataService);
        route.params.subscribe(function (p) {
            if (p['id'] != null)
                _this.data.diagnosisID = +p['id'];
            if (_this.data.diagnosisID) {
                _this.retrieveData();
            }
        });
    }
    DiagnosisMasterComponent.prototype.retrieveData = function () {
        var _this = this;
        this.MasterDataService.GetDiagnosisByID(this.data.diagnosisID)
            .subscribe(function (m) {
            _this.data = m;
        }, function (err) {
            if (err.status == 404)
                // this.msgs = [];
                // this.msgs.push({severity:'error', summary:'Info Message', detail:'Record Not Found!'});
                _this.data = {};
        });
    };
    DiagnosisMasterComponent.prototype.ngOnInit = function () {
        this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator);
    };
    DiagnosisMasterComponent.prototype.onSave = function () {
        if (this.data.diagnosisID) {
            this.MasterDataService.UpdateDiagnosisByID(this.data)
                .subscribe(function (x) {
                //  this.msgs = [];
                //  this.msgs.push({severity:'success', summary:'Info Message', detail:'"' + x.diagnosisCode + '" Updated Sucessfully!'});
            });
        }
        else
            this.MasterDataService.CreateDiagnosis(this.data)
                .subscribe(function (x) {
                //  this.msgs = [];
                // this.msgs.push({severity:'success', summary:'Info Message', detail:'"' + x.diagnosisCode + '" Created Sucessfully!'});
            });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_6__angular_material__["h" /* MdPaginator */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__angular_material__["h" /* MdPaginator */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_material__["h" /* MdPaginator */]) === "function" && _a || Object)
    ], DiagnosisMasterComponent.prototype, "paginator", void 0);
    DiagnosisMasterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-diagnosis-master',
            template: __webpack_require__("../../../../../src/app/masterData/diagnosis-master/diagnosis-master.component.html"),
            styles: [__webpack_require__("../../../../../src/app/masterData/diagnosis-master/diagnosis-master.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_masterdata_service__["a" /* MasterDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services_masterdata_service__["a" /* MasterDataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["ActivatedRoute"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["Router"]) === "function" && _d || Object])
    ], DiagnosisMasterComponent);
    return DiagnosisMasterComponent;
    var _a, _b, _c, _d;
}());

/** An example database that the data source uses to retrieve data for the table. */
var ExampleDatabase = (function () {
    function ExampleDatabase(MasterDataService) {
        var _this = this;
        this.MasterDataService = MasterDataService;
        this.dataChange = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.MasterDataService.GetDiagnosis().subscribe(function (data) { return _this.dataChange.next(data); });
    }
    Object.defineProperty(ExampleDatabase.prototype, "data", {
        get: function () { return this.dataChange.value; },
        enumerable: true,
        configurable: true
    });
    return ExampleDatabase;
}());

var ExampleDataSource = (function (_super) {
    __extends(ExampleDataSource, _super);
    function ExampleDataSource(_exampleDatabase, _paginator) {
        var _this = _super.call(this) || this;
        _this._exampleDatabase = _exampleDatabase;
        _this._paginator = _paginator;
        return _this;
    }
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    ExampleDataSource.prototype.connect = function () {
        var _this = this;
        var displayDataChanges = [
            this._exampleDatabase.dataChange,
            this._paginator.page,
        ];
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].merge.apply(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"], displayDataChanges).map(function () {
            var data = _this._exampleDatabase.data.slice();
            // Grab the page's slice of data.
            var startIndex = _this._paginator.pageIndex * _this._paginator.pageSize;
            return data.splice(startIndex, _this._paginator.pageSize);
        });
    };
    ExampleDataSource.prototype.disconnect = function () { };
    return ExampleDataSource;
}(__WEBPACK_IMPORTED_MODULE_4__angular_cdk_table__["n" /* DataSource */]));

//# sourceMappingURL=diagnosis-master.component.js.map

/***/ }),

/***/ "../../../../../src/app/masterData/insurance/insurance.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/masterData/insurance/insurance.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"toolbar\">\n    <div>\n        <button md-raised-button (click)=\"onSave()\">Save</button>\n        <button md-raised-button >New</button>\n        <button md-raised-button>Save + New</button>\n    </div>\n</div>\n\n<section>\n    <md-card>\n      <md-card-header>\n        <md-card-title>Insurance</md-card-title>\n        <md-card-subtitle>{{data.insuranceID > 0 ? 'Edit Mode' : 'New Mode'}}</md-card-subtitle>\n      </md-card-header>\n      <md-card-content>\n          <div class=\"container\">\n            <div>\n                <md-form-field class=\"input-full-width\">\n                  <input mdInput placeholder=\"Insurance Policy\" [(ngModel)]=\"data.insuranceName\" name=\"insuranceName\">\n                </md-form-field>\n            </div>\n            <div>\n              <md-checkbox [(ngModel)]=\"data.active\" name=\"active\">Active</md-checkbox>\n            </div>\n        </div>\n        <div class=\"container\">\n          <div>\n              <md-form-field class=\"input-full-width\">\n                <input mdInput placeholder=\"Payor\" [mdAutocomplete]=\"reactivePayor\" [formControl]=\"payorCtrl\" >\n              </md-form-field>\n\n              <md-autocomplete #reactivePayor=\"mdAutocomplete\" [displayWith]=\"displayPayorFn\">\n                <md-option *ngFor=\"let payor of filteredPayors | async\" [value]=\"payor\">\n                  <span>{{ payor.payorID }}</span>\n                  <span> ({{payor.payorName}}) </span>\n                </md-option>\n              </md-autocomplete>\n          </div>\n        </div>\n      </md-card-content>\n    </md-card>\n    <br>\n    \n        <md-card>\n            <md-card-header>\n            <md-card-title>Master Data List</md-card-title>\n            <md-card-subtitle></md-card-subtitle>\n            </md-card-header>\n            <md-card-content>\n                <dx-data-grid style=\"display:block;\" #grid\n                id=\"gridContainer\" \n                (onSelectionChanged)=\"onRowSelect($event)\"\n                [dataSource]=\"dataList\"\n                [allowColumnResizing]=\"true\"\n                 \n                [columnAutoWidth]=\"true\"\n                [allowColumnReordering]=\"true\"\n                [hoverStateEnabled]=\"true\">\n                <dxo-filter-row [visible]=\"true\"></dxo-filter-row>\n                <dxo-paging [pageSize]=\"30\"></dxo-paging>\n                <dxo-pager \n                    [showPageSizeSelector]=\"true\"\n                    [allowedPageSizes]=\"[5,10,15,30,50,100]\"\n                    [showInfo]=\"true\">\n                </dxo-pager>\n                <dxo-selection mode=\"single\"></dxo-selection>  \n                <dxi-column dataField=\"insuranceID\" [width]=\"150\"></dxi-column>\n                <dxi-column dataField=\"insuranceName\"></dxi-column>\n                <dxi-column dataField=\"active\"></dxi-column>\n                </dx-data-grid>\n    \n            </md-card-content>\n        </md-card>\n    </section>"

/***/ }),

/***/ "../../../../../src/app/masterData/insurance/insurance.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InsuranceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_GDService_service__ = __webpack_require__("../../../../../src/app/services/GDService.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_masterdata_service__ = __webpack_require__("../../../../../src/app/services/masterdata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var InsuranceComponent = (function () {
    function InsuranceComponent(GDService, MasterDataService, route, router) {
        var _this = this;
        this.GDService = GDService;
        this.MasterDataService = MasterDataService;
        this.route = route;
        this.router = router;
        this.data = {};
        this.dataList = [];
        this.payorCtrl = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]({ payorID: 0, payorName: '' });
        route.params.subscribe(function (p) {
            if (p['id'] != null)
                _this.data.insuranceID = +p['id'];
            if (_this.data.insuranceID) {
                _this.retrieveData();
            }
        });
    }
    InsuranceComponent.prototype.displayPayorFn = function (value) {
        return value && typeof value === 'object' ? value.payorName : value;
    };
    InsuranceComponent.prototype.filterPayors = function (val) {
        //`^${val}`
        return val ? this.payors.filter(function (s) { return new RegExp(val, 'gi').test(s.payorName); })
            : this.payors;
    };
    InsuranceComponent.prototype.onRowSelect = function (event) {
        this.router.navigate(['/insurance/', event.selectedRowKeys[0].insuranceID]);
    };
    InsuranceComponent.prototype.retrieveData = function () {
        var _this = this;
        this.MasterDataService.GetInsuranceByID(this.data.insuranceID)
            .subscribe(function (m) {
            _this.data = m;
            _this.payorCtrl = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]({ payorID: m.payorResource.payorID, payorName: m.payorResource.payorName });
        }, function (err) {
            if (err.status == 404)
                _this.GDService.openSnackBar('Record Not Found!', 'Info');
        });
    };
    InsuranceComponent.prototype.onSave = function () {
        var _this = this;
        this.data.payorID = this.payorCtrl.value.payorID;
        if (this.data.insuranceID) {
            this.MasterDataService.UpdateInsuranceByID(this.data)
                .subscribe(function (x) {
                _this.GDService.openSnackBar('"' + x.insuranceName + '" Updated Sucessfully!', 'Info');
            });
        }
        else
            this.MasterDataService.CreateInsurance(this.data)
                .subscribe(function (x) {
                _this.GDService.openSnackBar('"' + x.insuranceName + '" Created Sucessfully!', 'Info');
            });
    };
    InsuranceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.MasterDataService.GetPayor().subscribe(function (payor) {
            _this.payors = payor;
            //here only start filter
            _this.filteredPayors = _this.payorCtrl.valueChanges
                .startWith(_this.payorCtrl.value)
                .map(function (val) { return _this.displayPayorFn(val); })
                .map(function (name) { return _this.filterPayors(name); });
        });
        this.MasterDataService.GetInsurance()
            .subscribe(function (x) {
            _this.dataList = x;
        });
    };
    InsuranceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-insurance',
            template: __webpack_require__("../../../../../src/app/masterData/insurance/insurance.component.html"),
            styles: [__webpack_require__("../../../../../src/app/masterData/insurance/insurance.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_GDService_service__["a" /* GDService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_GDService_service__["a" /* GDService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_masterdata_service__["a" /* MasterDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_masterdata_service__["a" /* MasterDataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["ActivatedRoute"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"]) === "function" && _d || Object])
    ], InsuranceComponent);
    return InsuranceComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=insurance.component.js.map

/***/ }),

/***/ "../../../../../src/app/masterData/inventory-atc/inventory-atc.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/masterData/inventory-atc/inventory-atc.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"toolbar\">\n    <div>\n        <button md-raised-button (click)=\"onSave()\">Save</button>\n        <button md-raised-button>New</button>\n        <button md-raised-button>Save + New</button>\n    </div>\n</div>\n\n<section>\n    <md-card>\n      <md-card-header>\n        <md-card-title>Inventory ATC Classification</md-card-title>\n        <md-card-subtitle>{{data.inventoryATCClassificationID > 0 ? 'Edit Mode' : 'New Mode'}}</md-card-subtitle>\n      </md-card-header>\n      <md-card-content>\n        <div class=\"container\">\n          <div>\n              <md-form-field class=\"input-full-width\">\n                <input mdInput placeholder=\"Inventory ATC Classification Code\" [(ngModel)]=\"data.inventoryATCClassificationCode\" name=\"inventoryATCClassificationCode\">\n              </md-form-field>\n          </div>\n          <div>\n                <md-form-field class=\"input-full-width\">\n                  <input mdInput placeholder=\"Inventory ATC Classification Name\" [(ngModel)]=\"data.inventoryATCClassificationName\" name=\"inventoryATCClassificationName\">\n                </md-form-field>\n          </div>\n        </div>\n      </md-card-content>\n    </md-card>\n    <br>\n    \n        <md-card>\n            <md-card-header>\n            <md-card-title>Master Data List</md-card-title>\n            <md-card-subtitle></md-card-subtitle>\n            </md-card-header>\n            <md-card-content>\n                <dx-data-grid style=\"display:block;\" #grid\n                id=\"gridContainer\" \n                (onSelectionChanged)=\"onRowSelect($event)\"\n                [dataSource]=\"dataList\"\n                [allowColumnResizing]=\"true\"\n                 \n                [columnAutoWidth]=\"true\"\n                [allowColumnReordering]=\"true\"\n                [hoverStateEnabled]=\"true\">\n                <dxo-filter-row [visible]=\"true\"></dxo-filter-row>\n                <dxo-paging [pageSize]=\"30\"></dxo-paging>\n                <dxo-pager \n                    [showPageSizeSelector]=\"true\"\n                    [allowedPageSizes]=\"[5,10,15,30,50,100]\"\n                    [showInfo]=\"true\">\n                </dxo-pager>\n                <dxo-selection mode=\"single\"></dxo-selection>  \n                <dxi-column dataField=\"inventoryATCClassificationID\" [width]=\"150\"></dxi-column>\n                <dxi-column dataField=\"inventoryATCClassificationCode\"></dxi-column>\n                <dxi-column dataField=\"inventoryATCClassificationName\"></dxi-column>\n  \n                </dx-data-grid>\n    \n            </md-card-content>\n        </md-card>\n    </section>"

/***/ }),

/***/ "../../../../../src/app/masterData/inventory-atc/inventory-atc.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventoryAtcComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_GDService_service__ = __webpack_require__("../../../../../src/app/services/GDService.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_masterdata_service__ = __webpack_require__("../../../../../src/app/services/masterdata.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InventoryAtcComponent = (function () {
    function InventoryAtcComponent(GDService, MasterDataService, route, router) {
        var _this = this;
        this.GDService = GDService;
        this.MasterDataService = MasterDataService;
        this.route = route;
        this.router = router;
        this.data = {};
        this.dataList = [];
        route.params.subscribe(function (p) {
            if (p['id'] != null)
                _this.data.inventoryATCClassificationID = +p['id'];
            if (_this.data.inventoryATCClassificationID) {
                _this.retrieveData();
            }
        });
    }
    InventoryAtcComponent.prototype.onRowSelect = function (event) {
        this.router.navigate(['/inventory-atc/', event.selectedRowKeys[0].inventoryATCClassificationID]);
    };
    InventoryAtcComponent.prototype.retrieveData = function () {
        var _this = this;
        this.MasterDataService.GetInventoryATCClassificationByID(this.data.inventoryATCClassificationID)
            .subscribe(function (m) {
            _this.data = m;
        }, function (err) {
            if (err.status == 404)
                _this.GDService.openSnackBar('Record Not Found!', 'Info');
        });
    };
    InventoryAtcComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.active = true;
        this.MasterDataService.GetInventoryATCClassification()
            .subscribe(function (x) {
            _this.dataList = x;
        });
    };
    InventoryAtcComponent.prototype.onSave = function () {
        var _this = this;
        if (this.data.inventoryATCClassificationID) {
            this.MasterDataService.UpdateInventoryATCClassificationByID(this.data)
                .subscribe(function (x) {
                _this.GDService.openSnackBar('"' + x.inventoryATCClassificationCode + '" Updated Sucessfully!', 'Info');
            });
        }
        else
            this.MasterDataService.CreateInventoryATCClassification(this.data)
                .subscribe(function (x) {
                _this.GDService.openSnackBar('"' + x.inventoryATCClassificationCode + '" Created Sucessfully!', 'Info');
            });
    };
    InventoryAtcComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-inventory-atc',
            template: __webpack_require__("../../../../../src/app/masterData/inventory-atc/inventory-atc.component.html"),
            styles: [__webpack_require__("../../../../../src/app/masterData/inventory-atc/inventory-atc.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_GDService_service__["a" /* GDService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_GDService_service__["a" /* GDService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_masterdata_service__["a" /* MasterDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services_masterdata_service__["a" /* MasterDataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _d || Object])
    ], InventoryAtcComponent);
    return InventoryAtcComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=inventory-atc.component.js.map

/***/ }),

/***/ "../../../../../src/app/masterData/inventory-brand/inventory-brand.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/masterData/inventory-brand/inventory-brand.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"toolbar\">\n    <div>\n        <button md-raised-button (click)=\"onSave()\">Save</button>\n        <button md-raised-button>New</button>\n        <button md-raised-button>Save + New</button>\n    </div>\n</div>\n\n<section>\n    <md-card>\n      <md-card-header>\n        <md-card-title>Inventory Brand</md-card-title>\n        <md-card-subtitle>{{data.inventoryBrandID > 0 ? 'Edit Mode' : 'New Mode'}}</md-card-subtitle>\n      </md-card-header>\n      <md-card-content>\n        <div class=\"container\">\n            <div>\n                <md-form-field class=\"input-full-width\">\n                  <input mdInput placeholder=\"Inventory Brand\" [(ngModel)]=\"data.inventoryBrandName\" name=\"inventoryBrandName\">\n                </md-form-field>\n            </div>\n            <div>\n              <md-checkbox [(ngModel)]=\"data.active\" name=\"active\">Active</md-checkbox>\n            </div>\n        </div>\n      </md-card-content>\n    </md-card>\n    <br>\n    \n        <md-card>\n            <md-card-header>\n            <md-card-title>Master Data List</md-card-title>\n            <md-card-subtitle></md-card-subtitle>\n            </md-card-header>\n            <md-card-content>\n                <dx-data-grid style=\"display:block;\" #grid\n                id=\"gridContainer\" \n                (onSelectionChanged)=\"onRowSelect($event)\"\n                [dataSource]=\"dataList\"\n                [allowColumnResizing]=\"true\"\n                 \n                [columnAutoWidth]=\"true\"\n                [allowColumnReordering]=\"true\"\n                [hoverStateEnabled]=\"true\">\n                <dxo-filter-row [visible]=\"true\"></dxo-filter-row>\n                <dxo-paging [pageSize]=\"30\"></dxo-paging>\n                <dxo-pager \n                    [showPageSizeSelector]=\"true\"\n                    [allowedPageSizes]=\"[5,10,15,30,50,100]\"\n                    [showInfo]=\"true\">\n                </dxo-pager>\n                <dxo-selection mode=\"single\"></dxo-selection>  \n                <dxi-column dataField=\"inventoryBrandID\" [width]=\"150\"></dxi-column>\n                <dxi-column dataField=\"inventoryBrandName\"></dxi-column>\n                <dxi-column dataField=\"active\"></dxi-column>\n  \n                </dx-data-grid>\n    \n            </md-card-content>\n        </md-card>\n    </section>"

/***/ }),

/***/ "../../../../../src/app/masterData/inventory-brand/inventory-brand.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventoryBrandComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_GDService_service__ = __webpack_require__("../../../../../src/app/services/GDService.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_masterdata_service__ = __webpack_require__("../../../../../src/app/services/masterdata.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InventoryBrandComponent = (function () {
    function InventoryBrandComponent(GDService, MasterDataService, route, router) {
        var _this = this;
        this.GDService = GDService;
        this.MasterDataService = MasterDataService;
        this.route = route;
        this.router = router;
        this.data = {};
        this.dataList = [];
        route.params.subscribe(function (p) {
            if (p['id'] != null)
                _this.data.inventoryBrandID = +p['id'];
            if (_this.data.inventoryBrandID) {
                _this.retrieveData();
            }
        });
    }
    InventoryBrandComponent.prototype.retrieveData = function () {
        var _this = this;
        this.MasterDataService.GetInventoryBrandByID(this.data.inventoryBrandID)
            .subscribe(function (m) {
            _this.data = m;
        }, function (err) {
            if (err.status == 404)
                _this.GDService.openSnackBar('Record Not Found!', 'Info');
        });
    };
    InventoryBrandComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.active = true;
        this.MasterDataService.GetInventoryBrand()
            .subscribe(function (x) {
            _this.dataList = x;
        });
    };
    InventoryBrandComponent.prototype.onRowSelect = function (event) {
        this.router.navigate(['/inventory-brand/', event.selectedRowKeys[0].inventoryBrandID]);
    };
    InventoryBrandComponent.prototype.onSave = function () {
        var _this = this;
        if (this.data.inventoryBrandID) {
            this.MasterDataService.UpdateInventoryBrandByID(this.data)
                .subscribe(function (x) {
                _this.GDService.openSnackBar('"' + x.inventoryBrandName + '" Updated Sucessfully!', 'Info');
            });
        }
        else
            this.MasterDataService.CreateInventoryBrand(this.data)
                .subscribe(function (x) {
                _this.GDService.openSnackBar('"' + x.inventoryBrandName + '" Created Sucessfully!', 'Info');
            });
    };
    InventoryBrandComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-inventory-brand',
            template: __webpack_require__("../../../../../src/app/masterData/inventory-brand/inventory-brand.component.html"),
            styles: [__webpack_require__("../../../../../src/app/masterData/inventory-brand/inventory-brand.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_GDService_service__["a" /* GDService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_GDService_service__["a" /* GDService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_masterdata_service__["a" /* MasterDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services_masterdata_service__["a" /* MasterDataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _d || Object])
    ], InventoryBrandComponent);
    return InventoryBrandComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=inventory-brand.component.js.map

/***/ }),

/***/ "../../../../../src/app/masterData/inventory-category/inventory-category.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/masterData/inventory-category/inventory-category.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"toolbar\">\n    <div>\n        <button md-raised-button (click)=\"onSave()\">Save</button>\n        <button md-raised-button>New</button>\n        <button md-raised-button>Save + New</button>\n    </div>\n</div>\n\n<section>\n    <md-card>\n      <md-card-header>\n        <md-card-title>Inventory Category</md-card-title>\n        <md-card-subtitle>{{data.inventoryCategoryID > 0 ? 'Edit Mode' : 'New Mode'}}</md-card-subtitle>\n      </md-card-header>\n      <md-card-content>\n        <div class=\"container\">\n            <div>\n                <md-form-field class=\"input-full-width\">\n                  <input mdInput placeholder=\"Inventory Category\" [(ngModel)]=\"data.inventoryCategoryName\" name=\"inventoryCategoryName\">\n                </md-form-field>\n            </div>\n            <div>\n              <md-checkbox [(ngModel)]=\"data.active\" name=\"active\">Active</md-checkbox>\n            </div>\n        </div>\n      </md-card-content>\n    </md-card>\n    <br>\n    \n        <md-card>\n            <md-card-header>\n            <md-card-title>Master Data List</md-card-title>\n            <md-card-subtitle></md-card-subtitle>\n            </md-card-header>\n            <md-card-content>\n                <dx-data-grid style=\"display:block;\" #grid\n                id=\"gridContainer\" \n                (onSelectionChanged)=\"onRowSelect($event)\"\n                [dataSource]=\"dataList\"\n                [allowColumnResizing]=\"true\"\n                 \n                [columnAutoWidth]=\"true\"\n                [allowColumnReordering]=\"true\"\n                [hoverStateEnabled]=\"true\">\n                <dxo-filter-row [visible]=\"true\"></dxo-filter-row>\n                <dxo-paging [pageSize]=\"30\"></dxo-paging>\n                <dxo-pager \n                    [showPageSizeSelector]=\"true\"\n                    [allowedPageSizes]=\"[5,10,15,30,50,100]\"\n                    [showInfo]=\"true\">\n                </dxo-pager>\n                <dxo-selection mode=\"single\"></dxo-selection>  \n                <dxi-column dataField=\"inventoryCategoryID\" [width]=\"150\"></dxi-column>\n                <dxi-column dataField=\"inventoryCategoryName\"></dxi-column>\n                <dxi-column dataField=\"active\"></dxi-column>\n  \n                </dx-data-grid>\n    \n            </md-card-content>\n        </md-card>\n    </section>"

/***/ }),

/***/ "../../../../../src/app/masterData/inventory-category/inventory-category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventoryCategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_GDService_service__ = __webpack_require__("../../../../../src/app/services/GDService.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_masterdata_service__ = __webpack_require__("../../../../../src/app/services/masterdata.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InventoryCategoryComponent = (function () {
    function InventoryCategoryComponent(GDService, MasterDataService, route, router) {
        var _this = this;
        this.GDService = GDService;
        this.MasterDataService = MasterDataService;
        this.route = route;
        this.router = router;
        this.data = {};
        this.dataList = [];
        route.params.subscribe(function (p) {
            if (p['id'] != null)
                _this.data.inventoryCategoryID = +p['id'];
            if (_this.data.inventoryCategoryID) {
                _this.retrieveData();
            }
        });
    }
    InventoryCategoryComponent.prototype.onRowSelect = function (event) {
        this.router.navigate(['/inventory-category/', event.selectedRowKeys[0].inventoryCategoryID]);
    };
    InventoryCategoryComponent.prototype.retrieveData = function () {
        var _this = this;
        this.MasterDataService.GetInventoryCategoryByID(this.data.inventoryCategoryID)
            .subscribe(function (m) {
            _this.data = m;
        }, function (err) {
            if (err.status == 404)
                _this.GDService.openSnackBar('Record Not Found!', 'Info');
        });
    };
    InventoryCategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.active = true;
        this.MasterDataService.GetInventoryCategory()
            .subscribe(function (x) {
            _this.dataList = x;
        });
    };
    InventoryCategoryComponent.prototype.onSave = function () {
        var _this = this;
        if (this.data.inventoryCategoryID) {
            this.MasterDataService.UpdateInventoryCategoryByID(this.data)
                .subscribe(function (x) {
                _this.GDService.openSnackBar('"' + x.inventoryCategoryName + '" Updated Sucessfully!', 'Info');
            });
        }
        else
            this.MasterDataService.CreateInventoryCategory(this.data)
                .subscribe(function (x) {
                _this.GDService.openSnackBar('"' + x.inventoryCategoryName + '" Created Sucessfully!', 'Info');
            });
    };
    InventoryCategoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-inventory-category',
            template: __webpack_require__("../../../../../src/app/masterData/inventory-category/inventory-category.component.html"),
            styles: [__webpack_require__("../../../../../src/app/masterData/inventory-category/inventory-category.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_GDService_service__["a" /* GDService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_GDService_service__["a" /* GDService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_masterdata_service__["a" /* MasterDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services_masterdata_service__["a" /* MasterDataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _d || Object])
    ], InventoryCategoryComponent);
    return InventoryCategoryComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=inventory-category.component.js.map

/***/ }),

/***/ "../../../../../src/app/masterData/inventory-generic/inventory-generic.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/masterData/inventory-generic/inventory-generic.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"toolbar\">\n    <div>\n        <button md-raised-button (click)=\"onSave()\">Save</button>\n        <button md-raised-button>New</button>\n        <button md-raised-button>Save + New</button>\n    </div>\n</div>\n\n<section> \n    <md-card>\n      <md-card-header>\n        <md-card-title>Inventory Generic</md-card-title>\n        <md-card-subtitle>{{data.inventoryGenericID > 0 ? 'Edit Mode' : 'New Mode'}}</md-card-subtitle>\n      </md-card-header>\n      <md-card-content>\n        <div class=\"container\">\n            <div>\n                <md-form-field class=\"input-full-width\">\n                  <input mdInput placeholder=\"Inventory Generic\" [(ngModel)]=\"data.inventoryGenericName\" name=\"inventoryGenericName\">\n                </md-form-field>\n            </div>\n            <div>\n              <md-checkbox [(ngModel)]=\"data.active\" name=\"active\">Active</md-checkbox>\n            </div>\n        </div>\n      </md-card-content>\n    </md-card>\n    <br>\n    \n        <md-card>\n            <md-card-header>\n            <md-card-title>Master Data List</md-card-title>\n            <md-card-subtitle></md-card-subtitle>\n            </md-card-header>\n            <md-card-content>\n                <dx-data-grid style=\"display:block;\" #grid\n                id=\"gridContainer\" \n                (onSelectionChanged)=\"onRowSelect($event)\"\n                [dataSource]=\"dataList\"\n                [allowColumnResizing]=\"true\"\n                 \n                [columnAutoWidth]=\"true\"\n                [allowColumnReordering]=\"true\"\n                [hoverStateEnabled]=\"true\">\n                <dxo-filter-row [visible]=\"true\"></dxo-filter-row>\n                <dxo-paging [pageSize]=\"30\"></dxo-paging>\n                <dxo-pager \n                    [showPageSizeSelector]=\"true\"\n                    [allowedPageSizes]=\"[5,10,15,30,50,100]\"\n                    [showInfo]=\"true\">\n                </dxo-pager>\n                <dxo-selection mode=\"single\"></dxo-selection>  \n                <dxi-column dataField=\"inventoryGenericID\" [width]=\"150\"></dxi-column>\n                <dxi-column dataField=\"inventoryGenericName\"></dxi-column>\n                <dxi-column dataField=\"active\"></dxi-column>\n  \n                </dx-data-grid>\n    \n            </md-card-content>\n        </md-card>\n    </section>"

/***/ }),

/***/ "../../../../../src/app/masterData/inventory-generic/inventory-generic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventoryGenericComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_GDService_service__ = __webpack_require__("../../../../../src/app/services/GDService.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_masterdata_service__ = __webpack_require__("../../../../../src/app/services/masterdata.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InventoryGenericComponent = (function () {
    function InventoryGenericComponent(GDService, MasterDataService, route, router) {
        var _this = this;
        this.GDService = GDService;
        this.MasterDataService = MasterDataService;
        this.route = route;
        this.router = router;
        this.data = {};
        this.dataList = [];
        route.params.subscribe(function (p) {
            if (p['id'] != null)
                _this.data.inventoryGenericID = +p['id'];
            if (_this.data.inventoryGenericID) {
                _this.retrieveData();
            }
        });
    }
    InventoryGenericComponent.prototype.retrieveData = function () {
        var _this = this;
        this.MasterDataService.GetInventoryGenericByID(this.data.inventoryGenericID)
            .subscribe(function (m) {
            _this.data = m;
        }, function (err) {
            if (err.status == 404)
                _this.GDService.openSnackBar('Record Not Found!', 'Info');
        });
    };
    InventoryGenericComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.active = true;
        this.MasterDataService.GetInventoryGeneric()
            .subscribe(function (x) {
            _this.dataList = x;
        });
    };
    InventoryGenericComponent.prototype.onRowSelect = function (event) {
        this.router.navigate(['/inventory-generic/', event.selectedRowKeys[0].inventoryGenericID]);
    };
    InventoryGenericComponent.prototype.onSave = function () {
        var _this = this;
        if (this.data.inventoryGenericID) {
            this.MasterDataService.UpdateInventoryGenericByID(this.data)
                .subscribe(function (x) {
                _this.GDService.openSnackBar('"' + x.inventoryGenericName + '" Updated Sucessfully!', 'Info');
            });
        }
        else
            this.MasterDataService.CreateInventoryGeneric(this.data)
                .subscribe(function (x) {
                _this.GDService.openSnackBar('"' + x.inventoryGenericName + '" Created Sucessfully!', 'Info');
            });
    };
    InventoryGenericComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-inventory-generic',
            template: __webpack_require__("../../../../../src/app/masterData/inventory-generic/inventory-generic.component.html"),
            styles: [__webpack_require__("../../../../../src/app/masterData/inventory-generic/inventory-generic.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_GDService_service__["a" /* GDService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_GDService_service__["a" /* GDService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_masterdata_service__["a" /* MasterDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services_masterdata_service__["a" /* MasterDataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _d || Object])
    ], InventoryGenericComponent);
    return InventoryGenericComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=inventory-generic.component.js.map

/***/ }),

/***/ "../../../../../src/app/masterData/inventory-medicationclass/inventory-medicationclass.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/masterData/inventory-medicationclass/inventory-medicationclass.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"toolbar\">\n    <div>\n        <button md-raised-button (click)=\"onSave()\">Save</button>\n        <button md-raised-button>New</button>\n        <button md-raised-button>Save + New</button>\n    </div>\n</div>\n\n<section> \n    <md-card>\n      <md-card-header>\n        <md-card-title>Inventory Medication Class</md-card-title>\n        <md-card-subtitle>{{data.inventoryMedicationClassID > 0 ? 'Edit Mode' : 'New Mode'}}</md-card-subtitle>\n      </md-card-header>\n      <md-card-content>\n        <div class=\"container\">\n            <div>\n                <md-form-field class=\"input-full-width\">\n                  <input mdInput placeholder=\"Inventory Medication Class\" [(ngModel)]=\"data.inventoryMedicationClassName\" name=\"inventoryMedicationClassName\">\n                </md-form-field>\n            </div>\n            <div>\n              <md-checkbox [(ngModel)]=\"data.active\" name=\"active\">Active</md-checkbox>\n            </div>\n        </div>\n      </md-card-content>\n    </md-card>\n    <br>\n    \n        <md-card>\n            <md-card-header>\n            <md-card-title>Master Data List</md-card-title>\n            <md-card-subtitle></md-card-subtitle>\n            </md-card-header>\n            <md-card-content>\n                <dx-data-grid style=\"display:block;\" #grid\n                id=\"gridContainer\" \n                (onSelectionChanged)=\"onRowSelect($event)\"\n                [dataSource]=\"dataList\"\n                [allowColumnResizing]=\"true\"\n                 \n                [columnAutoWidth]=\"true\"\n                [allowColumnReordering]=\"true\"\n                [hoverStateEnabled]=\"true\">\n                <dxo-filter-row [visible]=\"true\"></dxo-filter-row>\n                <dxo-paging [pageSize]=\"30\"></dxo-paging>\n                <dxo-pager \n                    [showPageSizeSelector]=\"true\"\n                    [allowedPageSizes]=\"[5,10,15,30,50,100]\"\n                    [showInfo]=\"true\">\n                </dxo-pager>\n                <dxo-selection mode=\"single\"></dxo-selection>  \n                <dxi-column dataField=\"inventoryMedicationClassID\" [width]=\"150\"></dxi-column>\n                <dxi-column dataField=\"inventoryMedicationClassName\"></dxi-column>\n                <dxi-column dataField=\"active\"></dxi-column>\n  \n                </dx-data-grid>\n    \n            </md-card-content>\n        </md-card>\n    </section>"

/***/ }),

/***/ "../../../../../src/app/masterData/inventory-medicationclass/inventory-medicationclass.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventoryMedicationclassComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_GDService_service__ = __webpack_require__("../../../../../src/app/services/GDService.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_masterdata_service__ = __webpack_require__("../../../../../src/app/services/masterdata.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InventoryMedicationclassComponent = (function () {
    function InventoryMedicationclassComponent(GDService, MasterDataService, route, router) {
        var _this = this;
        this.GDService = GDService;
        this.MasterDataService = MasterDataService;
        this.route = route;
        this.router = router;
        this.data = {};
        this.dataList = [];
        route.params.subscribe(function (p) {
            if (p['id'] != null)
                _this.data.inventoryMedicationClassID = +p['id'];
            if (_this.data.inventoryMedicationClassID) {
                _this.retrieveData();
            }
        });
    }
    InventoryMedicationclassComponent.prototype.onRowSelect = function (event) {
        this.router.navigate(['/inventory-medicationclass/', event.selectedRowKeys[0].inventoryMedicationClassID]);
    };
    InventoryMedicationclassComponent.prototype.retrieveData = function () {
        var _this = this;
        this.MasterDataService.GetInventoryMedicationClassByID(this.data.inventoryMedicationClassID)
            .subscribe(function (m) {
            _this.data = m;
        }, function (err) {
            if (err.status == 404)
                _this.GDService.openSnackBar('Record Not Found!', 'Info');
        });
    };
    InventoryMedicationclassComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.active = true;
        this.MasterDataService.GetInventoryMedicationClass()
            .subscribe(function (x) {
            _this.dataList = x;
        });
    };
    InventoryMedicationclassComponent.prototype.onSave = function () {
        var _this = this;
        if (this.data.inventoryMedicationClassID) {
            this.MasterDataService.UpdateInventoryMedicationClassByID(this.data)
                .subscribe(function (x) {
                _this.GDService.openSnackBar('"' + x.inventoryMedicationClassName + '" Updated Sucessfully!', 'Info');
            });
        }
        else
            this.MasterDataService.CreateInventoryMedicationClass(this.data)
                .subscribe(function (x) {
                _this.GDService.openSnackBar('"' + x.inventoryMedicationClassName + '" Created Sucessfully!', 'Info');
            });
    };
    InventoryMedicationclassComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-inventory-medicationclass',
            template: __webpack_require__("../../../../../src/app/masterData/inventory-medicationclass/inventory-medicationclass.component.html"),
            styles: [__webpack_require__("../../../../../src/app/masterData/inventory-medicationclass/inventory-medicationclass.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_GDService_service__["a" /* GDService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_GDService_service__["a" /* GDService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_masterdata_service__["a" /* MasterDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services_masterdata_service__["a" /* MasterDataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _d || Object])
    ], InventoryMedicationclassComponent);
    return InventoryMedicationclassComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=inventory-medicationclass.component.js.map

/***/ }),

/***/ "../../../../../src/app/masterData/inventory-pregnancycategory/inventory-pregnancycategory.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/masterData/inventory-pregnancycategory/inventory-pregnancycategory.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"toolbar\">\n    <div>\n        <button md-raised-button (click)=\"onSave()\">Save</button>\n        <button md-raised-button>New</button>\n        <button md-raised-button>Save + New</button>\n    </div>\n</div>\n\n<section> \n    <md-card>\n      <md-card-header>\n        <md-card-title>Inventory Pregnancy Category</md-card-title>\n        <md-card-subtitle>{{data.inventoryPregnancyCategoryID > 0 ? 'Edit Mode' : 'New Mode'}}</md-card-subtitle>\n      </md-card-header>\n      <md-card-content>\n        <div class=\"container\">\n            <div>\n                <md-form-field class=\"input-full-width\">\n                  <input mdInput placeholder=\"Inventory Pregnancy Category\" [(ngModel)]=\"data.inventoryPregnancyCategoryName\" name=\"inventoryPregnancyCategoryName\">\n                </md-form-field>\n            </div>\n            <div>\n              <md-checkbox [(ngModel)]=\"data.active\" name=\"active\">Active</md-checkbox>\n            </div>\n        </div>\n      </md-card-content>\n    </md-card>\n    <br>\n    \n        <md-card>\n            <md-card-header>\n            <md-card-title>Master Data List</md-card-title>\n            <md-card-subtitle></md-card-subtitle>\n            </md-card-header>\n            <md-card-content>\n                <dx-data-grid style=\"display:block;\" #grid\n                id=\"gridContainer\" \n                (onSelectionChanged)=\"onRowSelect($event)\"\n                [dataSource]=\"dataList\"\n                [allowColumnResizing]=\"true\"\n                 \n                [columnAutoWidth]=\"true\"\n                [allowColumnReordering]=\"true\"\n                [hoverStateEnabled]=\"true\">\n                <dxo-filter-row [visible]=\"true\"></dxo-filter-row>\n                <dxo-paging [pageSize]=\"30\"></dxo-paging>\n                <dxo-pager \n                    [showPageSizeSelector]=\"true\"\n                    [allowedPageSizes]=\"[5,10,15,30,50,100]\"\n                    [showInfo]=\"true\">\n                </dxo-pager>\n                <dxo-selection mode=\"single\"></dxo-selection>  \n                <dxi-column dataField=\"inventoryPregnancyCategoryID\" [width]=\"150\"></dxi-column>\n                <dxi-column dataField=\"inventoryPregnancyCategoryName\"></dxi-column>\n                <dxi-column dataField=\"active\"></dxi-column>\n  \n                </dx-data-grid>\n    \n            </md-card-content>\n        </md-card>\n    </section>"

/***/ }),

/***/ "../../../../../src/app/masterData/inventory-pregnancycategory/inventory-pregnancycategory.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventoryPregnancycategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_GDService_service__ = __webpack_require__("../../../../../src/app/services/GDService.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_masterdata_service__ = __webpack_require__("../../../../../src/app/services/masterdata.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InventoryPregnancycategoryComponent = (function () {
    function InventoryPregnancycategoryComponent(GDService, MasterDataService, route, router) {
        var _this = this;
        this.GDService = GDService;
        this.MasterDataService = MasterDataService;
        this.route = route;
        this.router = router;
        this.data = {};
        this.dataList = [];
        route.params.subscribe(function (p) {
            if (p['id'] != null)
                _this.data.inventoryPregnancyCategoryID = +p['id'];
            if (_this.data.inventoryPregnancyCategoryID) {
                _this.retrieveData();
            }
        });
    }
    InventoryPregnancycategoryComponent.prototype.onRowSelect = function (event) {
        this.router.navigate(['/inventory-pregnancycategory/', event.selectedRowKeys[0].inventoryPregnancyCategoryID]);
    };
    InventoryPregnancycategoryComponent.prototype.retrieveData = function () {
        var _this = this;
        this.MasterDataService.GetInventoryPregnancyCategoryByID(this.data.inventoryPregnancyCategoryID)
            .subscribe(function (m) {
            _this.data = m;
        }, function (err) {
            if (err.status == 404)
                _this.GDService.openSnackBar('Record Not Found!', 'Info');
        });
    };
    InventoryPregnancycategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.active = true;
        this.MasterDataService.GetInventoryPregnancyCategory()
            .subscribe(function (x) {
            _this.dataList = x;
        });
    };
    InventoryPregnancycategoryComponent.prototype.onSave = function () {
        var _this = this;
        if (this.data.inventoryPregnancyCategoryID) {
            this.MasterDataService.UpdateInventoryPregnancyCategoryByID(this.data)
                .subscribe(function (x) {
                _this.GDService.openSnackBar('"' + x.inventoryPregnancyCategoryName + '" Updated Sucessfully!', 'Info');
            });
        }
        else
            this.MasterDataService.CreateInventoryPregnancyCategory(this.data)
                .subscribe(function (x) {
                _this.GDService.openSnackBar('"' + x.inventoryPregnancyCategoryName + '" Created Sucessfully!', 'Info');
            });
    };
    InventoryPregnancycategoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-inventory-pregnancycategory',
            template: __webpack_require__("../../../../../src/app/masterData/inventory-pregnancycategory/inventory-pregnancycategory.component.html"),
            styles: [__webpack_require__("../../../../../src/app/masterData/inventory-pregnancycategory/inventory-pregnancycategory.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_GDService_service__["a" /* GDService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_GDService_service__["a" /* GDService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_masterdata_service__["a" /* MasterDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services_masterdata_service__["a" /* MasterDataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _d || Object])
    ], InventoryPregnancycategoryComponent);
    return InventoryPregnancycategoryComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=inventory-pregnancycategory.component.js.map

/***/ }),

/***/ "../../../../../src/app/masterData/inventory-price-structure/inventory-price-structure.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/masterData/inventory-price-structure/inventory-price-structure.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"toolbar\">\n  <div>\n      <button md-raised-button>Save</button>\n  </div>\n</div>\n\n<section> \n  <md-card>\n    <md-card-header>\n      <md-card-title>Inventory Price Strcuture</md-card-title>\n      <md-card-subtitle>Maintain Inventory Price Strcuture</md-card-subtitle>\n    </md-card-header>\n    <md-card-content>\n        <div class=\"container\">\n          <div>\n            <md-form-field class=\"input-full-width\">\n              <input mdInput placeholder=\"Category\" [mdAutocomplete]=\"reactiveinventoryCategory\" [formControl]=\"inventoryCategoryCtrl\" >\n            </md-form-field>\n\n            <md-autocomplete #reactiveinventoryCategory=\"mdAutocomplete\" [displayWith]=\"displayinventoryCategoryFn\">\n              <md-option *ngFor=\"let inventoryCategory of filteredinventoryCategorys | async\" [value]=\"inventoryCategory\">\n                <span>{{ inventoryCategory.inventoryCategoryID }}</span>\n                <span> ({{inventoryCategory.inventoryCategoryName}}) </span>\n              </md-option>\n            </md-autocomplete>\n          </div>\n          <div>\n            <md-form-field class=\"input-full-width\">\n              <input mdInput placeholder=\"Sub Category\" [mdAutocomplete]=\"reactiveinventorySubCategory\" [formControl]=\"inventorySubCategoryCtrl\" >\n            </md-form-field>\n\n            <md-autocomplete #reactiveinventorySubCategory=\"mdAutocomplete\" [displayWith]=\"displayinventorySubCategoryFn\">\n              <md-option *ngFor=\"let inventorySubCategory of filteredinventorySubCategorys | async\" [value]=\"inventorySubCategory\">\n                <span>{{ inventorySubCategory.inventorySubCategoryID }}</span>\n                <span> ({{inventorySubCategory.inventorySubCategoryName}}) </span>\n              </md-option>\n            </md-autocomplete>\n\n          </div>\n        </div>\n\n        <div>\n          <dx-data-grid style=\"display:block;\" #grid\n          id=\"gridContainer\" \n          [dataSource]=\"dataSource\"\n          [allowColumnResizing]=\"true\"\n           \n          [columnAutoWidth]=\"true\"\n          [allowColumnReordering]=\"true\">  \n          <dxo-filter-row\n          [visible]=\"true\"></dxo-filter-row>\n          <dxo-paging [pageSize]=\"10\"></dxo-paging>\n          <dxo-pager \n              [showPageSizeSelector]=\"true\"\n              [allowedPageSizes]=\"[5,10]\"\n              [showInfo]=\"true\">\n          </dxo-pager>\n          <dxo-group-panel [visible]=\"true\"></dxo-group-panel>\n          <dxo-grouping #expand [autoExpandAll]=\"true\"></dxo-grouping>\n          <dxo-editing \n              mode=\"cell\"\n              [allowUpdating]=\"true\">\n          </dxo-editing>\n          <dxi-column dataField=\"inventoryCategoryResource.inventoryCategoryName\" caption=\"Category\" [groupIndex]=\"0\">Cat</dxi-column>\n          <dxi-column dataField=\"inventorySubCategoryResource.inventorySubCategoryName\" caption=\"SubCategory\" ></dxi-column>\n          <dxi-column dataField=\"inventoryCode\"></dxi-column>\n          <dxi-column dataField=\"inventoryDescription\"></dxi-column>\n          <dxi-column dataField=\"InpatientPrice\" dataType=\"number\"></dxi-column>\n          <dxi-column dataField=\"OutpatientPrice\" dataType=\"number\"></dxi-column>\n          <dxi-column dataField=\"StaffPrice\" dataType=\"number\"></dxi-column>\n          <dxi-column dataField=\"FamilyPrice\" dataType=\"number\"></dxi-column>\n          </dx-data-grid>\n    \n        </div>   \n\n    </md-card-content>\n  </md-card>\n\n</section>"

/***/ }),

/***/ "../../../../../src/app/masterData/inventory-price-structure/inventory-price-structure.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventoryPriceStructureComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_masterdata_service__ = __webpack_require__("../../../../../src/app/services/masterdata.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InventoryPriceStructureComponent = (function () {
    function InventoryPriceStructureComponent(MasterDataService, route, router) {
        this.MasterDataService = MasterDataService;
        this.route = route;
        this.router = router;
        this.data = {};
        this.dataList = [];
        this.inventoryCategoryCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]({ inventoryCategoryID: 0, inventoryCategoryName: '' });
        this.inventorySubCategoryCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]({ inventorySubCategoryID: 0, inventorySubCategoryName: '' });
    }
    InventoryPriceStructureComponent.prototype.displayinventorySubCategoryFn = function (value) {
        return value && typeof value === 'object' ? value.inventorySubCategoryName : value;
    };
    InventoryPriceStructureComponent.prototype.filterInventorySubCategorys = function (val) {
        return val ? this.inventorySubCategorys.filter(function (s) { return new RegExp(val, 'gi').test(s.inventorySubCategoryName); })
            : this.inventorySubCategorys;
    };
    InventoryPriceStructureComponent.prototype.displayinventoryCategoryFn = function (value) {
        return value && typeof value === 'object' ? value.inventoryCategoryName : value;
    };
    InventoryPriceStructureComponent.prototype.filterInventoryCategorys = function (val) {
        return val ? this.inventoryCategorys.filter(function (s) { return new RegExp(val, 'gi').test(s.inventoryCategoryName); })
            : this.inventoryCategorys;
    };
    InventoryPriceStructureComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.MasterDataService.GetInventoryCategory().subscribe(function (category) {
            _this.inventoryCategorys = category;
            //here only start filter
            _this.filteredinventoryCategorys = _this.inventoryCategoryCtrl.valueChanges
                .startWith(_this.inventoryCategoryCtrl.value)
                .map(function (val) { return _this.displayinventoryCategoryFn(val); })
                .map(function (name) { return _this.filterInventoryCategorys(name); });
        });
        this.MasterDataService.GetInventorySubCategory().subscribe(function (subCategory) {
            _this.inventorySubCategorys = subCategory;
            //here only start filter
            _this.filteredinventorySubCategorys = _this.inventorySubCategoryCtrl.valueChanges
                .startWith(_this.inventorySubCategoryCtrl.value)
                .map(function (val) { return _this.displayinventorySubCategoryFn(val); })
                .map(function (name) { return _this.filterInventorySubCategorys(name); });
        });
        this.MasterDataService.GetInventory()
            .subscribe(function (x) {
            _this.dataSource = x;
        });
    };
    InventoryPriceStructureComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-inventory-price-structure',
            template: __webpack_require__("../../../../../src/app/masterData/inventory-price-structure/inventory-price-structure.component.html"),
            styles: [__webpack_require__("../../../../../src/app/masterData/inventory-price-structure/inventory-price-structure.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_masterdata_service__["a" /* MasterDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services_masterdata_service__["a" /* MasterDataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["ActivatedRoute"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["Router"]) === "function" && _c || Object])
    ], InventoryPriceStructureComponent);
    return InventoryPriceStructureComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=inventory-price-structure.component.js.map

/***/ }),

/***/ "../../../../../src/app/masterData/inventory-subcategory/inventory-subcategory.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/masterData/inventory-subcategory/inventory-subcategory.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"toolbar\">\n    <div>\n        <button md-raised-button (click)=\"onSave()\">Save</button>\n        <button md-raised-button>New</button>\n        <button md-raised-button>Save + New</button>\n    </div>\n</div>\n\n<section>\n    <md-card>\n      <md-card-header>\n        <md-card-title>Inventory SubCategory</md-card-title>\n        <md-card-subtitle>{{data.inventorySubCategoryID > 0 ? 'Edit Mode' : 'New Mode'}}</md-card-subtitle>\n      </md-card-header>\n      <md-card-content>\n        <div class=\"container\">\n            <div>\n                <md-form-field class=\"input-full-width\">\n                  <input mdInput placeholder=\"Inventory SubCategory\" [(ngModel)]=\"data.inventorySubCategoryName\" name=\"inventorySubCategoryName\">\n                </md-form-field>\n            </div>\n            <div>\n              <md-checkbox [(ngModel)]=\"data.active\" name=\"active\">Active</md-checkbox>\n            </div>\n        </div>\n      </md-card-content>\n    </md-card>\n    <br>\n    \n        <md-card>\n            <md-card-header>\n            <md-card-title>Master Data List</md-card-title>\n            <md-card-subtitle></md-card-subtitle>\n            </md-card-header>\n            <md-card-content>\n                <dx-data-grid style=\"display:block;\" #grid\n                id=\"gridContainer\" \n                (onSelectionChanged)=\"onRowSelect($event)\"\n                [dataSource]=\"dataList\"\n                [allowColumnResizing]=\"true\"\n                 \n                [columnAutoWidth]=\"true\"\n                [allowColumnReordering]=\"true\"\n                [hoverStateEnabled]=\"true\">\n                <dxo-filter-row [visible]=\"true\"></dxo-filter-row>\n                <dxo-paging [pageSize]=\"30\"></dxo-paging>\n                <dxo-pager \n                    [showPageSizeSelector]=\"true\"\n                    [allowedPageSizes]=\"[5,10,15,30,50,100]\"\n                    [showInfo]=\"true\">\n                </dxo-pager>\n                <dxo-selection mode=\"single\"></dxo-selection>  \n                <dxi-column dataField=\"inventorySubCategoryID\" [width]=\"150\"></dxi-column>\n                <dxi-column dataField=\"inventorySubCategoryName\"></dxi-column>\n                <dxi-column dataField=\"active\"></dxi-column>\n  \n                </dx-data-grid>\n    \n            </md-card-content>\n        </md-card>\n    </section>"

/***/ }),

/***/ "../../../../../src/app/masterData/inventory-subcategory/inventory-subcategory.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventorySubcategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_GDService_service__ = __webpack_require__("../../../../../src/app/services/GDService.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_masterdata_service__ = __webpack_require__("../../../../../src/app/services/masterdata.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InventorySubcategoryComponent = (function () {
    function InventorySubcategoryComponent(GDService, MasterDataService, route, router) {
        var _this = this;
        this.GDService = GDService;
        this.MasterDataService = MasterDataService;
        this.route = route;
        this.router = router;
        this.data = {};
        this.dataList = [];
        route.params.subscribe(function (p) {
            if (p['id'] != null)
                _this.data.inventorySubCategoryID = +p['id'];
            if (_this.data.inventorySubCategoryID) {
                _this.retrieveData();
            }
        });
    }
    InventorySubcategoryComponent.prototype.onRowSelect = function (event) {
        this.router.navigate(['/inventory-subcategory/', event.selectedRowKeys[0].inventorySubCategoryID]);
    };
    InventorySubcategoryComponent.prototype.retrieveData = function () {
        var _this = this;
        this.MasterDataService.GetInventorySubCategoryByID(this.data.inventorySubCategoryID)
            .subscribe(function (m) {
            _this.data = m;
        }, function (err) {
            if (err.status == 404)
                _this.GDService.openSnackBar('Record Not Found!', 'Info');
        });
    };
    InventorySubcategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.active = true;
        this.MasterDataService.GetInventorySubCategory()
            .subscribe(function (x) {
            _this.dataList = x;
        });
    };
    InventorySubcategoryComponent.prototype.onSave = function () {
        var _this = this;
        if (this.data.inventorySubCategoryID) {
            this.MasterDataService.UpdateInventorySubCategoryByID(this.data)
                .subscribe(function (x) {
                _this.GDService.openSnackBar('"' + x.inventorySubCategoryName + '" Updated Sucessfully!', 'Info');
            });
        }
        else
            this.MasterDataService.CreateInventorySubCategory(this.data)
                .subscribe(function (x) {
                _this.GDService.openSnackBar('"' + x.inventorySubCategoryName + '" Created Sucessfully!', 'Info');
            });
    };
    InventorySubcategoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-inventory-subcategory',
            template: __webpack_require__("../../../../../src/app/masterData/inventory-subcategory/inventory-subcategory.component.html"),
            styles: [__webpack_require__("../../../../../src/app/masterData/inventory-subcategory/inventory-subcategory.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_GDService_service__["a" /* GDService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_GDService_service__["a" /* GDService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_masterdata_service__["a" /* MasterDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services_masterdata_service__["a" /* MasterDataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _d || Object])
    ], InventorySubcategoryComponent);
    return InventorySubcategoryComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=inventory-subcategory.component.js.map

/***/ }),

/***/ "../../../../../src/app/masterData/master-data.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".spacer {\n    -webkit-box-flex: 1;\n    -ms-flex: 1 1 auto;\n    flex: 1 1 auto;\n}\n\n/*temporary ui fix */\n:host /deep/ .mat-select-trigger {\n    font-size: inherit;\n    height: inherit;\n    \n}\n\n:host /deep/ .mat-select-value-text {\n    line-height: inherit;\n}\n\n:host /deep/ .mat-select {\n    margin-top: 8px;\n    margin-left: 30px;\n  }\n\n  :host /deep/ .mat-checkbox {\n    margin-top: 8px;\n    margin-left: 30px;\n  }\n\n  :host /deep/ .mat-radio-group {\n    margin-top: 8px;\n    margin-left: 30px;\n  }\n  /*temporary ui fix */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/masterData/master-data.component.html":
/***/ (function(module, exports) {

module.exports = "<section >\n  \n  <div class=\"ui-g\">\n      <div class=\"ui-g-6\">\n        <md-card>\n          <md-card-header>\n            <md-card-title></md-card-title>\n              <md-toolbar color=\"accent\">\n                  <span>Master Data Listing</span>\n                  <span class=\"spacer\"></span>\n                    <i class=\"material-icons\">view_module</i>\n              </md-toolbar>\n          </md-card-header>\n          <md-card-content>\n            <div class=\"ui-g\">\n                <div class=\"ui-g-6\">\n                    <md-nav-list>\n                    <a *ngFor=\"let menuItem of menuItemsOne\"\n                      md-list-item [routerLink]=\"[menuItem.overview]\">\n                      {{menuItem.name}}\n                    </a>\n                  </md-nav-list>\n                </div>\n                <div class=\"ui-g-6\">\n                    <md-nav-list>\n                    <a *ngFor=\"let menuItem of menuItemsTwo\"\n                      md-list-item [routerLink]=\"[menuItem.overview]\">\n                      {{menuItem.name}}\n                    </a>\n                  </md-nav-list>\n                </div>\n            </div>\n\n          </md-card-content>\n        </md-card>\n      </div>\n      <div class=\"ui-g-6\">\n        <md-card>\n          <md-card-header>\n            <md-card-title></md-card-title>\n              <md-toolbar color=\"accent\">\n                  <span>New Master Data Record</span>\n                  <span class=\"spacer\"></span>\n                    <i class=\"material-icons\">plus_one</i>\n              </md-toolbar>\n          </md-card-header>\n          <md-card-content>\n            <div class=\"ui-g\">\n                <div class=\"ui-g-6\">\n                    <md-nav-list>\n                    <a *ngFor=\"let menuItem of menuItemsOne\"\n                      md-list-item [routerLink]=\"[menuItem.newRecord]\">\n                      {{menuItem.name}}\n                    </a>\n                  </md-nav-list>\n                </div>\n                <div class=\"ui-g-6\">\n                    <md-nav-list>\n                    <a *ngFor=\"let menuItem of menuItemsTwo\"\n                      md-list-item [routerLink]=\"[menuItem.newRecord]\">\n                      {{menuItem.name}}\n                    </a>\n                  </md-nav-list>\n                </div>\n            </div>\n          </md-card-content>\n        </md-card>\n      </div>\n  </div>\n\n\n</section>"

/***/ }),

/***/ "../../../../../src/app/masterData/master-data.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MasterDataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MasterDataComponent = (function () {
    function MasterDataComponent() {
        this.menuItemsOne = [
            { name: 'Payor', overview: '/payor', newRecord: '/payor' },
            { name: 'Department', overview: '/department', newRecord: '/department' },
            { name: 'MOH Visit Type', overview: '/mohvisit-type', newRecord: '/mohvisit-type' },
            { name: 'Purpose Of Visit', overview: '/purpose-of-visit', newRecord: '/purpose-of-visit' },
            { name: 'User', overview: '/user', newRecord: '/user' },
            { name: 'User Profile', overview: '/profile', newRecord: '/profile' },
            { name: 'Price Structure', overview: '/price-structure', newRecord: '/price-structure' },
            { name: 'Speciality', overview: '/speciality', newRecord: '/speciality' },
            { name: 'Insurance', overview: '/insurance', newRecord: '/insurance' },
            { name: 'Diagnosis', overview: '/Diagnosis-master', newRecord: '/Diagnosis-master' }
        ];
        this.menuItemsTwo = [
            { name: 'Charge Item', overview: '/charge-item', newRecord: '/charge-item' },
            { name: 'Inventory ATC', overview: '/inventory-atc', newRecord: '/inventory-atc' },
            { name: 'Inventory Brand', overview: '/inventory-brand', newRecord: '/inventory-brand' },
            { name: 'Inventory Category', overview: '/inventory-category', newRecord: '/inventory-category' },
            { name: 'Inventory Subcategory', overview: '/inventory-subcategory', newRecord: '/inventory-subcategory' },
            { name: 'Inventory Generic', overview: '/inventory-generic', newRecord: '/inventory-generic' },
            { name: 'Inventory Medication Class', overview: '/inventory-medicationclass', newRecord: '/inventory-medicationclass' },
            { name: 'Inventory Pregnancy Category', overview: '/inventory-pregnancycategory', newRecord: '/inventory-pregnancycategory' },
            { name: 'Inventory Price Structure', overview: '/inventory-price-structure', newRecord: '/inventory-price-structure' }
        ];
    }
    MasterDataComponent.prototype.ngOnInit = function () {
    };
    MasterDataComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-master-data',
            template: __webpack_require__("../../../../../src/app/masterData/master-data.component.html"),
            styles: [__webpack_require__("../../../../../src/app/masterData/master-data.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MasterDataComponent);
    return MasterDataComponent;
}());

//# sourceMappingURL=master-data.component.js.map

/***/ }),

/***/ "../../../../../src/app/masterData/mohvisit-type/mohvisit-type.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/masterData/mohvisit-type/mohvisit-type.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"toolbar\">\n    <div>\n        <button md-raised-button (click)=\"onSave()\">Save</button>\n        <button md-raised-button>New</button>\n        <button md-raised-button>Save + New</button>\n    </div>\n</div>\n\n<section>\n    <md-card>\n      <md-card-header>\n        <md-card-title>MOH Visit Type</md-card-title>\n        <md-card-subtitle>{{data.mohVisitTypeID > 0 ? 'Edit Mode' : 'New Mode'}}</md-card-subtitle>\n      </md-card-header>\n      <md-card-content>\n        <div class=\"ui-g\">\n            <div class=\"ui-g-6\">\n                <md-form-field class=\"input-full-width\">\n                  <input mdInput placeholder=\"MOH Visit Type Description\" [(ngModel)]=\"data.mohVisitTypeName\" name=\"mohVisitTypeName\">\n                </md-form-field>\n            </div>\n            <div class=\"ui-g-6\">\n              <md-checkbox [(ngModel)]=\"data.active\" name=\"active\">Active</md-checkbox>\n            </div>\n        </div>\n      </md-card-content>\n    </md-card>\n<br>\n    <md-card>\n        <md-card-header>\n        <md-card-title>Master Data List</md-card-title>\n        <md-card-subtitle></md-card-subtitle>\n        </md-card-header>\n        <md-card-content>\n            <dx-data-grid style=\"display:block;\" #grid\n            id=\"gridContainer\" \n            (onSelectionChanged)=\"onRowSelect($event)\"\n            [dataSource]=\"dataList\"\n            [allowColumnResizing]=\"true\"\n             \n            [columnAutoWidth]=\"true\"\n            [allowColumnReordering]=\"true\"\n            [hoverStateEnabled]=\"true\">\n            <dxo-filter-row [visible]=\"true\"></dxo-filter-row>\n            <dxo-paging [pageSize]=\"30\"></dxo-paging>\n            <dxo-pager \n                [showPageSizeSelector]=\"true\"\n                [allowedPageSizes]=\"[5,10,15,30,50,100]\"\n                [showInfo]=\"true\">\n            </dxo-pager>\n            <dxo-selection mode=\"single\"></dxo-selection>  \n            <dxi-column dataField=\"mohVisitTypeID\" [width]=\"150\"></dxi-column>\n            <dxi-column dataField=\"mohVisitTypeName\"></dxi-column>\n            <dxi-column dataField=\"active\"></dxi-column>\n            </dx-data-grid>\n\n        </md-card-content>\n    </md-card>\n</section>"

/***/ }),

/***/ "../../../../../src/app/masterData/mohvisit-type/mohvisit-type.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MOHVisitTypeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_GDService_service__ = __webpack_require__("../../../../../src/app/services/GDService.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_masterdata_service__ = __webpack_require__("../../../../../src/app/services/masterdata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MOHVisitTypeComponent = (function () {
    function MOHVisitTypeComponent(GDService, MasterDataService, route, router) {
        var _this = this;
        this.GDService = GDService;
        this.MasterDataService = MasterDataService;
        this.route = route;
        this.router = router;
        this.data = {};
        this.dataList = [];
        route.params.subscribe(function (p) {
            if (p['id'] != null)
                _this.data.mohVisitTypeID = +p['id'];
            if (_this.data.mohVisitTypeID) {
                _this.retrieveData();
            }
        });
    }
    MOHVisitTypeComponent.prototype.retrieveData = function () {
        var _this = this;
        this.MasterDataService.GetMOHVisitTypeByID(this.data.mohVisitTypeID)
            .subscribe(function (m) {
            _this.data = m;
        }, function (err) {
            if (err.status == 404)
                _this.GDService.openSnackBar('Record Not Found!', 'Info');
        });
    };
    MOHVisitTypeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.active = true;
        this.MasterDataService.GetMOHVisitType()
            .subscribe(function (x) {
            _this.dataList = x;
        });
    };
    MOHVisitTypeComponent.prototype.onRowSelect = function (event) {
        this.router.navigate(['/mohvisit-type/', event.selectedRowKeys[0].mohVisitTypeID]);
    };
    MOHVisitTypeComponent.prototype.onSave = function () {
        var _this = this;
        if (this.data.mohVisitTypeID) {
            this.MasterDataService.UpdateMOHVisitTypeByID(this.data)
                .subscribe(function (x) {
                _this.GDService.openSnackBar('"' + x.mohVisitTypeName + '" Updated Sucessfully!', 'Info');
            });
        }
        else
            this.MasterDataService.CreateMOHVisitType(this.data)
                .subscribe(function (x) {
                _this.GDService.openSnackBar('"' + x.mohVisitTypeName + '" Created Sucessfully!', 'Info');
            });
    };
    MOHVisitTypeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-mohvisit-type',
            template: __webpack_require__("../../../../../src/app/masterData/mohvisit-type/mohvisit-type.component.html"),
            styles: [__webpack_require__("../../../../../src/app/masterData/mohvisit-type/mohvisit-type.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_GDService_service__["a" /* GDService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_GDService_service__["a" /* GDService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_masterdata_service__["a" /* MasterDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_services_masterdata_service__["a" /* MasterDataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === "function" && _d || Object])
    ], MOHVisitTypeComponent);
    return MOHVisitTypeComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=mohvisit-type.component.js.map

/***/ }),

/***/ "../../../../../src/app/masterData/payor/payor.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*temporary ui fix */\n:host /deep/ .mat-select-trigger {\n    font-size: 12px;\n    height: inherit;\n    margin-bottom: 15px;\n    margin-top: 2px;\n    \n  }\n  \n  :host /deep/ .mat-select-value-text {\n    line-height: inherit;\n    margin-bottom: 15px;\n    margin-top: 2px;\n  }\n  \n  :host /deep/ .mat-select {\n    font-size: 12px;\n    margin-top: 2px;\n    margin-bottom: 15px;\n    margin-left: 1px;\n  }\n  \n  :host /deep/ .mat-checkbox {\n    font-size: 12px;\n    margin-top: 2px;\n    margin-left: 1px;\n  }\n  \n  :host /deep/ .mat-radio-group {\n    font-size: 12px;\n    margin-top: 2px;\n    margin-left: 1px;\n  }\n  /*temporary ui fix */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/masterData/payor/payor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"toolbar\">\n    <div>\n        <button md-raised-button (click)=\"onSave()\">Save</button>\n        <button md-raised-button>New</button>\n        <button md-raised-button>Save + New</button>\n    </div>\n</div>\n\n<section>\n    <md-card>\n      <md-card-header>\n        <md-card-title>Payor</md-card-title>\n        <md-card-subtitle>{{data.payorID > 0 ? 'Edit Mode' : 'New Mode'}}</md-card-subtitle>\n      </md-card-header>\n      <md-card-content>\n          <div class=\"container\">\n            <div>\n                <md-form-field class=\"input-full-width\">\n                  <input mdInput placeholder=\"Payor Name\" [(ngModel)]=\"data.payorName\" name=\"payorName\">\n                </md-form-field>\n            </div>\n            <div>\n              <md-checkbox [(ngModel)]=\"data.Active\" name=\"Active\">Active</md-checkbox>\n            </div>\n        </div>\n        <div class=\"container\">\n            <div>\n                <md-form-field class=\"input-full-width\">\n                  <input mdInput placeholder=\"Phone\" [(ngModel)]=\"data.phone\" name=\"phone\">\n                </md-form-field>\n            </div>\n            <div>\n                <md-form-field class=\"input-full-width\">\n                  <input mdInput placeholder=\"Fax\" [(ngModel)]=\"data.fax\" name=\"fax\">\n                </md-form-field>\n            </div>\n            <div>\n                <md-form-field class=\"input-full-width\">\n                  <input mdInput type=\"email\" placeholder=\"Email\" [(ngModel)]=\"data.email\" name=\"email\">\n                </md-form-field>\n            </div>\n        </div>\n        <div class=\"container\">\n            <div>\n                <md-form-field class=\"input-full-width\">\n                  <textarea mdInput placeholder=\"Address\" rows=\"1\" [(ngModel)]=\"data.address\" name=\"address\"></textarea>\n                </md-form-field>\n            </div>\n            <div>\n                <md-form-field class=\"input-full-width\">\n                  <input mdInput placeholder=\"City\" [(ngModel)]=\"data.city\" name=\"city\">\n                </md-form-field>\n            </div>\n        </div>\n        <div class=\"container\">\n            <div>\n                <md-form-field class=\"input-full-width\">\n                  <input mdInput type=\"number\" placeholder=\"Postal Code\" [(ngModel)]=\"data.zipcode\" name=\"zipcode\">\n                </md-form-field>\n            </div>\n            <div>\n                <md-select placeholder=\"State\" name=\"state\" [(ngModel)]=\"data.state\" name=\"state\">\n                  <md-option *ngFor=\"let state of states\" [value]=\"state.stateID\" >\n                    {{state.stateName}}\n                  </md-option>\n                </md-select>\n            </div>\n            <div>\n                <md-select placeholder=\"Country\" [(ngModel)]=\"data.countryID\" name=\"countryID\" >\n                  <md-option *ngFor=\"let country of countries\" [value]=\"country.countryID\">\n                    {{country.countryName}}\n                  </md-option>\n                </md-select>\n            </div>\n        </div>\n      </md-card-content>\n    </md-card>\n    <br>\n\n    <md-card>\n        <md-card-header>\n        <md-card-title>Master Data List</md-card-title>\n        <md-card-subtitle></md-card-subtitle>\n        </md-card-header>\n        <md-card-content>\n            <dx-data-grid style=\"display:block;\" #grid\n            id=\"gridContainer\" \n            (onSelectionChanged)=\"onRowSelect($event)\"\n            [dataSource]=\"dataList\"\n            [allowColumnResizing]=\"true\"\n             \n            [columnAutoWidth]=\"true\"\n            [allowColumnReordering]=\"true\"\n            [hoverStateEnabled]=\"true\">\n            <dxo-filter-row [visible]=\"true\"></dxo-filter-row>\n            <dxo-paging [pageSize]=\"30\"></dxo-paging>\n            <dxo-pager \n                [showPageSizeSelector]=\"true\"\n                [allowedPageSizes]=\"[5,10,15,30,50,100]\"\n                [showInfo]=\"true\">\n            </dxo-pager>\n            <dxo-selection mode=\"single\"></dxo-selection>  \n            <dxi-column dataField=\"payorID\" [width]=\"150\"></dxi-column>\n            <dxi-column dataField=\"payorName\"></dxi-column>\n            <dxi-column dataField=\"phone\"></dxi-column>\n            <dxi-column dataField=\"fax\"></dxi-column>\n            <dxi-column dataField=\"email\"></dxi-column>\n            <dxi-column dataField=\"address\"></dxi-column>\n            <dxi-column dataField=\"city\"></dxi-column>\n            <dxi-column dataField=\"state\"></dxi-column>\n            <dxi-column dataField=\"zipcode\"></dxi-column>\n            </dx-data-grid>\n\n        </md-card-content>\n    </md-card>\n</section>"

/***/ }),

/***/ "../../../../../src/app/masterData/payor/payor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_GDService_service__ = __webpack_require__("../../../../../src/app/services/GDService.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_masterdata_service__ = __webpack_require__("../../../../../src/app/services/masterdata.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PayorComponent = (function () {
    function PayorComponent(GDService, MasterDataService, route, router) {
        var _this = this;
        this.GDService = GDService;
        this.MasterDataService = MasterDataService;
        this.route = route;
        this.router = router;
        this.data = {};
        this.dataList = [];
        route.params.subscribe(function (p) {
            if (p['id'] != null)
                _this.data.payorID = +p['id'];
            if (_this.data.payorID) {
                _this.retrieveData();
            }
        });
    }
    PayorComponent.prototype.retrieveData = function () {
        var _this = this;
        this.MasterDataService.GetPayorByID(this.data.payorID)
            .subscribe(function (m) {
            _this.data = m;
        }, function (err) {
            if (err.status == 404)
                _this.GDService.openSnackBar('Record Not Found!', 'Info');
        });
    };
    PayorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.MasterDataService.GetCountry().subscribe(function (countries) {
            _this.countries = countries;
        });
        this.MasterDataService.GetState().subscribe(function (states) {
            _this.states = states;
        });
        this.MasterDataService.GetPayor()
            .subscribe(function (x) {
            _this.dataList = x;
        });
    };
    PayorComponent.prototype.onRowSelect = function (event) {
        this.router.navigate(['/payor/', event.selectedRowKeys[0].payorID]);
    };
    PayorComponent.prototype.onSave = function () {
        var _this = this;
        if (this.data.payorID) {
            this.MasterDataService.UpdatePayorByID(this.data)
                .subscribe(function (x) {
                _this.GDService.openSnackBar('"' + x.payorName + '" Updated Sucessfully!', 'Info');
            });
        }
        else
            this.MasterDataService.CreatePayor(this.data)
                .subscribe(function (x) {
                _this.GDService.openSnackBar('"' + x.payorName + '" Created Sucessfully!', 'Info');
            });
    };
    PayorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-payor',
            template: __webpack_require__("../../../../../src/app/masterData/payor/payor.component.html"),
            styles: [__webpack_require__("../../../../../src/app/masterData/payor/payor.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_GDService_service__["a" /* GDService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_GDService_service__["a" /* GDService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_masterdata_service__["a" /* MasterDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services_masterdata_service__["a" /* MasterDataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _d || Object])
    ], PayorComponent);
    return PayorComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=payor.component.js.map

/***/ }),

/***/ "../../../../../src/app/masterData/price-structure/price-structure.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/masterData/price-structure/price-structure.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"toolbar\">\n  <div>\n      <button md-raised-button (click)=\"onSave()\">Save</button>\n      <button md-raised-button>New</button>\n      <button md-raised-button>Save + New</button>\n  </div>\n</div>\n\n<section> \n  <md-card>\n    <md-card-header>\n      <md-card-title>Price Structure</md-card-title>\n      <md-card-subtitle>New Price Structure</md-card-subtitle>\n    </md-card-header>\n    <md-card-content>\n      <div class=\"ui-g\">\n          <div class=\"ui-g-2\">\n              <md-form-field class=\"input-full-width\">\n                <input mdInput placeholder=\"Price Structure Name\" [(ngModel)]=\"data.priceStructureName\" name=\"priceStructureName\">\n              </md-form-field>\n          </div>\n          <div class=\"ui-g-6\">\n              <md-form-field class=\"input-full-width\">\n                <input mdInput placeholder=\"Price Structure Description\" [(ngModel)]=\"data.priceStructureDescription\" name=\"priceStructureDescription\">\n              </md-form-field>\n          </div>\n          <div class=\"ui-g-4\">\n            <md-checkbox [(ngModel)]=\"data.active\" name=\"active\">Active</md-checkbox>\n          </div>\n      </div>\n    </md-card-content>\n  </md-card>\n      \n</section>"

/***/ }),

/***/ "../../../../../src/app/masterData/price-structure/price-structure.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PriceStructureComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_masterdata_service__ = __webpack_require__("../../../../../src/app/services/masterdata.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PriceStructureComponent = (function () {
    function PriceStructureComponent(MasterDataService, route, router) {
        var _this = this;
        this.MasterDataService = MasterDataService;
        this.route = route;
        this.router = router;
        this.data = {};
        this.dataList = [];
        route.params.subscribe(function (p) {
            if (p['id'] != null)
                _this.data.priceStructureID = +p['id'];
            if (_this.data.departmentID) {
                _this.retrieveData();
            }
        });
    }
    PriceStructureComponent.prototype.retrieveData = function () {
        var _this = this;
        this.MasterDataService.GetPriceStructureByID(this.data.priceStructureID)
            .subscribe(function (m) {
            _this.data = m;
        }, function (err) {
            if (err.status == 404)
                // this.msgs = [];
                // this.msgs.push({severity:'error', summary:'Info Message', detail:'Record Not Found!'});
                _this.data = {};
        });
    };
    PriceStructureComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.active = true;
        this.MasterDataService.GetPriceStructure()
            .subscribe(function (x) {
            _this.dataList = x;
        });
    };
    PriceStructureComponent.prototype.onSave = function () {
        if (this.data.priceStructureID) {
            this.MasterDataService.UpdatePriceStructureByID(this.data)
                .subscribe(function (x) {
                // this.msgs = [];
                // this.msgs.push({severity:'success', summary:'Info Message', detail:'"' + x.priceStructureName + '" Updated Sucessfully!'});
            });
        }
        else
            this.MasterDataService.CreatePriceStructure(this.data)
                .subscribe(function (x) {
                //   this.msgs = [];
                //   this.msgs.push({severity:'success', summary:'Info Message', detail:'"' + x.priceStructureName + '" Created Sucessfully!'});
            });
    };
    PriceStructureComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-price-structure',
            template: __webpack_require__("../../../../../src/app/masterData/price-structure/price-structure.component.html"),
            styles: [__webpack_require__("../../../../../src/app/masterData/price-structure/price-structure.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_masterdata_service__["a" /* MasterDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_services_masterdata_service__["a" /* MasterDataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["ActivatedRoute"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["Router"]) === "function" && _c || Object])
    ], PriceStructureComponent);
    return PriceStructureComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=price-structure.component.js.map

/***/ }),

/***/ "../../../../../src/app/masterData/purpose-of-visit/purpose-of-visit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/masterData/purpose-of-visit/purpose-of-visit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"toolbar\">\n    <div>\n        <button md-raised-button (click)=\"onSave()\">Save</button>\n        <button md-raised-button>New</button>\n        <button md-raised-button>Save + New</button>\n    </div>\n</div>\n\n<section>\n    <md-card>\n      <md-card-header>\n        <md-card-title>Purpose Of Visit</md-card-title>\n        <md-card-subtitle>{{data.visitPurposeID > 0 ? 'Edit Mode' : 'New Mode'}}</md-card-subtitle>\n      </md-card-header>\n      <md-card-content>\n        <form name=\"myForm\" id=\"myForm\">\n        <div class=\"container\">\n            <div>\n                <md-form-field class=\"input-full-width\">\n                  <input mdInput placeholder=\"Purpose Of Visit Description\" [(ngModel)]=\"data.visitPurposeName\" name=\"visitPurposeName\">\n                </md-form-field>\n            </div>\n            <div>\n              <md-checkbox [(ngModel)]=\"data.active\" name=\"active\">Active</md-checkbox>\n            </div>\n        </div>\n        </form>\n      </md-card-content>\n    </md-card>\n    <br>\n    \n        <md-card>\n            <md-card-header>\n            <md-card-title>Master Data List</md-card-title>\n            <md-card-subtitle></md-card-subtitle>\n            </md-card-header>\n            <md-card-content>\n                <dx-data-grid style=\"display:block;\" #grid\n                id=\"gridContainer\" \n                (onSelectionChanged)=\"onRowSelect($event)\"\n                [dataSource]=\"dataList\"\n                [allowColumnResizing]=\"true\"\n                 \n                [columnAutoWidth]=\"true\"\n                [allowColumnReordering]=\"true\"\n                [hoverStateEnabled]=\"true\">\n                <dxo-filter-row [visible]=\"true\"></dxo-filter-row>\n                <dxo-paging [pageSize]=\"30\"></dxo-paging>\n                <dxo-pager \n                    [showPageSizeSelector]=\"true\"\n                    [allowedPageSizes]=\"[5,10,15,30,50,100]\"\n                    [showInfo]=\"true\">\n                </dxo-pager>\n                <dxo-selection mode=\"single\"></dxo-selection>  \n                <dxi-column dataField=\"visitPurposeID\" [width]=\"150\"></dxi-column>\n                <dxi-column dataField=\"visitPurposeName\"></dxi-column>\n                <dxi-column dataField=\"active\"></dxi-column>\n\n                </dx-data-grid>\n    \n            </md-card-content>\n        </md-card>\n    </section>"

/***/ }),

/***/ "../../../../../src/app/masterData/purpose-of-visit/purpose-of-visit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PurposeOfVisitComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_GDService_service__ = __webpack_require__("../../../../../src/app/services/GDService.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_masterdata_service__ = __webpack_require__("../../../../../src/app/services/masterdata.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PurposeOfVisitComponent = (function () {
    function PurposeOfVisitComponent(GDService, MasterDataService, route, router) {
        var _this = this;
        this.GDService = GDService;
        this.MasterDataService = MasterDataService;
        this.route = route;
        this.router = router;
        this.data = {};
        this.dataList = [];
        route.params.subscribe(function (p) {
            if (p['id'] != null)
                _this.data.visitPurposeID = +p['id'];
            if (_this.data.visitPurposeID) {
                _this.retrieveData();
            }
        });
    }
    PurposeOfVisitComponent.prototype.retrieveData = function () {
        var _this = this;
        this.MasterDataService.GetPurposeOfVisitByID(this.data.visitPurposeID)
            .subscribe(function (m) {
            _this.data = m;
        }, function (err) {
            if (err.status == 404)
                _this.GDService.openSnackBar('Record Not Found!', 'Info');
        });
    };
    PurposeOfVisitComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.active = true;
        this.MasterDataService.GetPurposeOfVisit()
            .subscribe(function (x) {
            _this.dataList = x;
        });
    };
    PurposeOfVisitComponent.prototype.onRowSelect = function (event) {
        this.router.navigate(['/purpose-of-visit/', event.selectedRowKeys[0].visitPurposeID]);
    };
    PurposeOfVisitComponent.prototype.onSave = function () {
        var _this = this;
        if (this.data.visitPurposeID) {
            this.MasterDataService.UpdatePurposeOfVisitByID(this.data)
                .subscribe(function (x) {
                _this.GDService.openSnackBar('"' + x.visitPurposeName + '" Updated Sucessfully!', 'Info');
            });
        }
        else
            this.MasterDataService.CreatePurposeOfVisit(this.data)
                .subscribe(function (x) {
                _this.GDService.openSnackBar('"' + x.visitPurposeName + '" Created Sucessfully!', 'Info');
            });
    };
    PurposeOfVisitComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-purpose-of-visit',
            template: __webpack_require__("../../../../../src/app/masterData/purpose-of-visit/purpose-of-visit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/masterData/purpose-of-visit/purpose-of-visit.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_GDService_service__["a" /* GDService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_GDService_service__["a" /* GDService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_masterdata_service__["a" /* MasterDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services_masterdata_service__["a" /* MasterDataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _d || Object])
    ], PurposeOfVisitComponent);
    return PurposeOfVisitComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=purpose-of-visit.component.js.map

/***/ }),

/***/ "../../../../../src/app/masterData/speciality/speciality.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/masterData/speciality/speciality.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"toolbar\">\n    <div>\n        <button md-raised-button (click)=\"onSave()\">Save</button>\n        <button md-raised-button>New</button>\n        <button md-raised-button>Save + New</button>\n    </div>\n</div>\n\n<section>\n    <md-card>\n      <md-card-header>\n        <md-card-title>Speciality</md-card-title>\n        <md-card-subtitle>{{data.specialityID > 0 ? 'Edit Mode' : 'New Mode'}}</md-card-subtitle>\n      </md-card-header>\n      <md-card-content>\n        <div class=\"container\">\n            <div>\n                <md-form-field class=\"input-full-width\">\n                  <input mdInput placeholder=\"Speciality Description\" [(ngModel)]=\"data.specialityName\" name=\"specialityName\">\n                </md-form-field>\n            </div>\n            <div>\n              <md-checkbox [(ngModel)]=\"data.active\" name=\"active\">Active</md-checkbox>\n            </div>\n        </div>\n      </md-card-content>\n    </md-card>\n    <br>\n    \n        <md-card>\n            <md-card-header>\n            <md-card-title>Master Data List</md-card-title>\n            <md-card-subtitle></md-card-subtitle>\n            </md-card-header>\n            <md-card-content>\n                <dx-data-grid style=\"display:block;\" #grid\n                id=\"gridContainer\" \n                (onSelectionChanged)=\"onRowSelect($event)\"\n                [dataSource]=\"dataList\"\n                [allowColumnResizing]=\"true\"\n                [columnAutoWidth]=\"true\"\n                [allowColumnReordering]=\"true\"\n                [hoverStateEnabled]=\"true\">\n                <dxo-filter-row [visible]=\"true\"></dxo-filter-row>\n                <dxo-paging [pageSize]=\"30\"></dxo-paging>\n                <dxo-pager \n                    [showPageSizeSelector]=\"true\"\n                    [allowedPageSizes]=\"[5,10,15,30,50,100]\"\n                    [showInfo]=\"true\">\n                </dxo-pager>\n                <dxo-selection mode=\"single\"></dxo-selection>  \n                <dxi-column dataField=\"specialityID\" [width]=\"150\"></dxi-column>\n                <dxi-column dataField=\"specialityName\"></dxi-column>\n                <dxi-column dataField=\"active\"></dxi-column>\n                </dx-data-grid>\n    \n            </md-card-content>\n        </md-card>\n    </section>"

/***/ }),

/***/ "../../../../../src/app/masterData/speciality/speciality.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpecialityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_GDService_service__ = __webpack_require__("../../../../../src/app/services/GDService.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_masterdata_service__ = __webpack_require__("../../../../../src/app/services/masterdata.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SpecialityComponent = (function () {
    function SpecialityComponent(GDService, MasterDataService, route, router) {
        var _this = this;
        this.GDService = GDService;
        this.MasterDataService = MasterDataService;
        this.route = route;
        this.router = router;
        this.data = {};
        this.dataList = [];
        route.params.subscribe(function (p) {
            if (p['id'] != null)
                _this.data.specialityID = +p['id'];
            if (_this.data.specialityID) {
                _this.retrieveData();
            }
        });
    }
    SpecialityComponent.prototype.onRowSelect = function (event) {
        this.router.navigate(['/speciality/', event.selectedRowKeys[0].specialityID]);
    };
    SpecialityComponent.prototype.retrieveData = function () {
        var _this = this;
        this.MasterDataService.GetSpecialityByID(this.data.specialityID)
            .subscribe(function (m) {
            _this.data = m;
        }, function (err) {
            if (err.status == 404)
                _this.GDService.openSnackBar('Record Not Found!', 'Info');
        });
    };
    SpecialityComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.active = true;
        this.MasterDataService.GetSpeciality()
            .subscribe(function (x) {
            _this.dataList = x;
        });
    };
    SpecialityComponent.prototype.onSave = function () {
        var _this = this;
        if (this.data.specialityID) {
            this.MasterDataService.UpdateSpecialityByID(this.data)
                .subscribe(function (x) {
                _this.GDService.openSnackBar('"' + x.specialityName + '" Updated Sucessfully!', 'Info');
            });
        }
        else
            this.MasterDataService.CreateSpeciality(this.data)
                .subscribe(function (x) {
                _this.GDService.openSnackBar('"' + x.specialityName + '" Created Sucessfully!', 'Info');
            });
    };
    SpecialityComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-speciality',
            template: __webpack_require__("../../../../../src/app/masterData/speciality/speciality.component.html"),
            styles: [__webpack_require__("../../../../../src/app/masterData/speciality/speciality.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_GDService_service__["a" /* GDService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_GDService_service__["a" /* GDService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_masterdata_service__["a" /* MasterDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services_masterdata_service__["a" /* MasterDataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _d || Object])
    ], SpecialityComponent);
    return SpecialityComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=speciality.component.js.map

/***/ }),

/***/ "../../../../../src/app/patient/patient.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*temporary ui fix */\n:host /deep/ .mat-select-trigger {\n  font-size: 12px;\n  height: inherit;\n  margin-bottom: 15px;\n  margin-top: 2px;\n  \n}\n\n:host /deep/ .mat-select-value-text {\n  line-height: inherit;\n  margin-bottom: 15px;\n  margin-top: 2px;\n}\n\n:host /deep/ .mat-select {\n  font-size: 12px;\n  margin-top: 2px;\n  margin-bottom: 15px;\n  margin-left: 1px;\n}\n\n:host /deep/ .mat-checkbox {\n  font-size: 12px;\n  margin-top: 2px;\n  margin-left: 1px;\n}\n\n:host /deep/ .mat-radio-group {\n  font-size: 12px;\n  margin-top: 2px;\n  margin-left: 1px;\n}\n/*temporary ui fix */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/patient/patient.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\n    <div class=\"toolbar\">\n      <div>\n        <button md-raised-button (click)=\"onSave()\">Save</button>\n        <button md-raised-button (click)=\"onSave()\">Save + Create Visit</button>\n        <button md-raised-button>New</button>\n        <button md-raised-button>Save + New</button>\n      </div>\n    </div> \n    <md-card>\n      <md-card-header md-colors=\":{backgroundColor: 'default-primary-700'}\">\n        <md-card-title>Patient Master</md-card-title>\n        <md-card-subtitle>New Patient</md-card-subtitle>\n      </md-card-header>\n      <md-card-content>\n        <md-tab-group>\n          <md-tab>\n            <ng-template md-tab-label>\n              Patient information\n            </ng-template>\n            <md-card>\n              <md-card-content>\n                  <div class=\"container\">\n                    <div> \n                      <md-form-field class=\"input-full-width\">\n                        <input mdInput placeholder=\"Full name\" [(ngModel)]=\"data.name\" name=\"name\">\n                      </md-form-field>\n                    </div>\n                    <div>\n                      <md-select placeholder=\"Title\" name=\"title\" class=\"input-full-width\" name=\"titleID\" [(ngModel)]=\"data.titleID\">\n                        <md-option *ngFor=\"let title of titles\" [value]=\"title.titleID\">\n                          {{title.titleName}}\n                        </md-option>\n                      </md-select>\n                    </div>\n                    <div>\n                      <md-radio-group class=\"input-full-width\" name=\"gender\" [(ngModel)]=\"data.gender\">\n                        <md-radio-button *ngFor=\"let sex of gender\" [value]=\"sex.OptionVal\">\n                          {{sex.Option}}\n                        </md-radio-button>\n                      </md-radio-group>\n                    </div>\n                  </div>\n\n                  <div class=\"container\">\n                    <div>\n                      <md-form-field class=\"input-full-width\">\n                        <input mdInput [mdDatepicker]=\"pickerdob\" placeholder=\"Date of Birth\" [ngModel]=\"data.dob| date:'yyyy-MM-dd'\" (ngModelChange)=\"data.dob = $event\" name=\"dob\">\n                        <md-datepicker-toggle mdSuffix [for]=\"pickerdob\"></md-datepicker-toggle>\n                        <md-datepicker #pickerdob></md-datepicker>\n                      </md-form-field>\n                    </div>\n                    <div>\n                      <md-form-field class=\"input-full-width\">\n                        <input mdInput placeholder=\"Identification Number\" [(ngModel)]=\"data.identificationValue\" name=\"identificationValue\">\n                      </md-form-field>\n                    </div>\n                    <div>\n                      <md-select class=\"input-full-width\" placeholder=\"Identification type\" name=\"IDType\" name=\"identificationTypeID\" [(ngModel)]=\"data.identificationTypeID\">\n                        <md-option *ngFor=\"let IDtype of IDtypes\" [value]=\"IDtype.identificationTypeID\">\n                          {{IDtype.identificationTypeName}}\n                        </md-option>\n                      </md-select>\n                    </div>\n                  </div>\n                  <div class=\"container\">\n                    <div>\n                      <md-form-field class=\"input-full-width\">\n                        <input mdInput placeholder=\"Mobile Phone\" [(ngModel)]=\"data.mobile\" name=\"mobile\">\n                      </md-form-field>\n                    </div>\n                    <div>\n                      <md-form-field class=\"input-full-width\">\n                        <input mdInput placeholder=\"Phone\" [(ngModel)]=\"data.phone\" name=\"phone\">\n                      </md-form-field>\n                    </div>\n                    <div>\n                      <md-form-field class=\"input-full-width\">\n                        <input mdInput type=\"email\" placeholder=\"Email\" [(ngModel)]=\"data.email\" name=\"email\">\n                      </md-form-field>\n                    </div>\n                  </div>\n\n                  <div class=\"container\">\n                    <div>\n                      <md-form-field class=\"input-full-width\">\n                        <textarea mdInput placeholder=\"Address\" rows=\"1\"  [(ngModel)]=\"data.address\" name=\"address\"></textarea>\n                      </md-form-field>\n                    </div>\n                  </div>\n\n                  <div class=\"container\">\n                    <div>\n                      <md-form-field class=\"input-full-width\">\n                        <input mdInput placeholder=\"City\"  [(ngModel)]=\"data.city\" name=\"city\">\n                      </md-form-field>\n                    </div>\n                    <div>\n                      <md-form-field class=\"input-full-width\">\n                        <input mdInput type=\"number\" placeholder=\"Postal Code\" [(ngModel)]=\"data.zipcode\" name=\"zipcode\">\n                      </md-form-field>\n                    </div>\n                    <div>\n                      <md-select class=\"input-full-width\" placeholder=\"State\" name=\"stateID\" [(ngModel)]=\"data.stateID\">\n                        <md-option *ngFor=\"let state of states\" [value]=\"state.stateID\">\n                          {{state.stateName}}\n                        </md-option>\n                      </md-select>\n                    </div>\n                    <div>\n                      <md-select class=\"input-full-width\" placeholder=\"Country\" name=\"countryID\" [(ngModel)]=\"data.countryID\">\n                        <md-option *ngFor=\"let country of countries\" [value]=\"country.countryID\">\n                          {{country.countryName}}\n                        </md-option>\n                      </md-select>\n                    </div>\n                  </div>\n              </md-card-content>\n            </md-card>\n          </md-tab>\n          <md-tab>\n            <ng-template md-tab-label>\n              Emergency Contact\n            </ng-template>\n            <md-card  >\n              <md-card-content>\n                <div class=\"container\">\n                  <div> \n                    <md-form-field class=\"input-full-width\">\n                      <input mdInput placeholder=\"Full name\" [(ngModel)]=\"data.patientEmergencyResources.name\" name=\"patientEmergencyResources.name\">\n                    </md-form-field>\n                  </div>\n                  <div>\n                    <md-select class=\"input-full-width\" placeholder=\"Relation\" name=\"relation\" name=\"patientEmergencyResources.relationshipID\" [(ngModel)]=\"data.patientEmergencyResources.relationshipID\">\n                      <md-option *ngFor=\"let relation of relationship\" [value]=\"relation.relationshipID\" >\n                        {{relation.relationshipName}}\n                      </md-option>\n                    </md-select>\n                  </div>\n                </div>\n                <div class=\"container\">\n                  <div>\n                    <md-form-field class=\"input-full-width\">\n                      <input mdInput [mdDatepicker]=\"picker\" placeholder=\"Date of Birth\" [ngModel]=\"data.patientEmergencyResources.dob| date:'yyyy-MM-dd'\" (ngModelChange)=\"data.patientEmergencyResources.dob = $event\" name=\"patientEmergencyResources.dob\">\n                      <md-datepicker-toggle mdSuffix [for]=\"picker\"></md-datepicker-toggle>\n                      <md-datepicker #picker></md-datepicker>\n                    </md-form-field>\n                  </div>\n                  <div>\n                    <md-form-field class=\"input-full-width\">\n                      <input mdInput placeholder=\"Identification Number\" [(ngModel)]=\"data.patientEmergencyResources.identificationValue\" name=\"patientEmergencyResources.identificationValue\">\n                    </md-form-field>\n                  </div>\n                  <div>\n                      <md-select class=\"input-full-width\" placeholder=\"Identification type\" name=\"patientEmergencyResources.identificationTypeID\" [(ngModel)]=\"data.patientEmergencyResources.identificationTypeID\">\n                        <md-option *ngFor=\"let IDtype of IDtypes\" [value]=\"IDtype.identificationTypeID\">\n                          {{IDtype.identificationTypeName}}\n                        </md-option>\n                      </md-select>\n                  </div>\n                </div>\n                <div class=\"container\">\n                  <div>\n                    <md-form-field class=\"input-full-width\">\n                      <input mdInput placeholder=\"Mobile Phone\" [(ngModel)]=\"data.patientEmergencyResources.mobile\" name=\"patientEmergencyResources.mobile\">\n                    </md-form-field>\n                  </div>\n                  <div>\n                    <md-form-field class=\"input-full-width\">\n                      <input mdInput placeholder=\"Phone\" [(ngModel)]=\"data.patientEmergencyResources.phone\" name=\"patientEmergencyResources.phone\">\n                    </md-form-field>\n                  </div>\n                  <div>\n                    <md-form-field class=\"input-full-width\">\n                      <input mdInput type=\"email\" placeholder=\"Email\" [(ngModel)]=\"data.patientEmergencyResources.email\" name=\"patientEmergencyResources.email\">\n                    </md-form-field>\n                  </div>\n                </div>\n                <div class=\"container\">\n                  <div>\n                    <md-form-field class=\"input-full-width\">\n                      <textarea mdInput placeholder=\"Address\" rows=\"1\"  [(ngModel)]=\"data.patientEmergencyResources.address\" name=\"patientEmergencyResources.address\"></textarea>\n                    </md-form-field>\n                  </div>\n                  <div>\n                    <md-checkbox class=\"example-margin\">Same as Patient's Address</md-checkbox>\n                  </div>\n                </div>\n                <div class=\"container\">\n                  <div>\n                    <md-form-field class=\"input-full-width\">\n                      <input mdInput placeholder=\"City\" [(ngModel)]=\"data.patientEmergencyResources.city\" name=\"patientEmergencyResources.city\">\n                    </md-form-field>\n                  </div>\n                  <div>\n                    <md-form-field class=\"input-full-width\">\n                      <input mdInput type=\"number\" placeholder=\"Postal Code\" [(ngModel)]=\"data.patientEmergencyResources.zipcode\" name=\"patientEmergencyResources.zipcode\">\n                    </md-form-field>\n                  </div>\n                  <div>\n                    <md-select placeholder=\"State\" class=\"input-full-width\" name=\"patientEmergencyResources.stateID\" [(ngModel)]=\"data.patientEmergencyResources.stateID\">\n                      <md-option *ngFor=\"let state of states\" [value]=\"state.stateID\">\n                        {{state.stateName}}\n                      </md-option>\n                    </md-select>\n                  </div>\n                  <div>\n                      <md-select placeholder=\"Country\" class=\"input-full-width\" name=\"patientEmergencyResources.countryID\" [(ngModel)]=\"data.patientEmergencyResources.countryID\" >\n                        <md-option *ngFor=\"let country of countries\" [value]=\"country.countryID\">\n                          {{country.countryName}}\n                        </md-option>\n                      </md-select>\n                  </div>\n                </div>\n              </md-card-content>\n            </md-card>\n          </md-tab>\n          <md-tab>\n            <ng-template md-tab-label>\n              Insurance Information\n            </ng-template>\n            <md-card  >\n              <md-card-content>\n                <div class=\"container\">\n                  <div> \n                    <md-form-field class=\"input-full-width\">\n                      <input mdInput placeholder=\"Insurance\" [mdAutocomplete]=\"reactiveInsurance\" [formControl]=\"insuranceCtrl\"  name=\"patientPolicyResources.insuranceID\">\n                    </md-form-field>\n\n                    <md-autocomplete #reactiveInsurance=\"mdAutocomplete\" [displayWith]=\"displayInsuranceFn\">\n                      <md-option *ngFor=\"let Insurance of filteredInsurances | async\" [value]=\"Insurance\">\n                        <span>{{ Insurance.insuranceID }}</span>\n                        <span> ({{Insurance.insuranceName}}) </span>\n                      </md-option>\n                    </md-autocomplete>\n                  </div>\n                  <div>\n                    <md-form-field class=\"input-full-width\">\n                      <input mdInput placeholder=\"Payor\" [mdAutocomplete]=\"reactiveAuto\" [formControl]=\"payorCtrl\"  name=\"patientPolicyResources.payorID\">\n                    </md-form-field>\n\n                    <md-autocomplete #reactiveAuto=\"mdAutocomplete\" [displayWith]=\"displayPayorFn\">\n                      <md-option *ngFor=\"let payor of filteredPayors | async\" [value]=\"payor\">\n                        <span>{{ payor.payorID }}</span>\n                        <span> ({{payor.payorName}}) </span>\n                      </md-option>\n                    </md-autocomplete>\n\n                  </div>\n                </div>\n                <div class=\"container\">\n                  <div>\n                    <md-form-field class=\"input-full-width\">\n                      <input mdInput [mdDatepicker]=\"pickerstartDate\" placeholder=\"Start Date\" [ngModel]=\"data.patientPolicyResources.startDate| date:'yyyy-MM-dd'\" (ngModelChange)=\"data.patientPolicyResources.startDate = $event\" name=\"patientPolicyResources.startDate\">\n                      <md-datepicker-toggle mdSuffix [for]=\"pickerstartDate\"></md-datepicker-toggle>\n                      <md-datepicker #pickerstartDate></md-datepicker>\n                    </md-form-field>\n                  </div>\n                  <div>\n                    <md-form-field class=\"input-full-width\">\n                      <input mdInput [mdDatepicker]=\"pickerendDate\" placeholder=\"End Date\" [ngModel]=\"data.patientPolicyResources.endDate| date:'yyyy-MM-dd'\" (ngModelChange)=\"data.patientPolicyResources.endDate = $event\" name=\"patientPolicyResources.endDate\">\n                      <md-datepicker-toggle mdSuffix [for]=\"pickerendDate\"></md-datepicker-toggle>\n                      <md-datepicker #pickerendDate></md-datepicker>\n                    </md-form-field>\n                  </div>\n                  <div>\n                    <md-checkbox class=\"example-margin\" [(ngModel)]=\"data.patientPolicyResources.active\" name=\"patientPolicyResources.active\">In-Use</md-checkbox>\n                  </div>\n                </div>\n                <div class=\"container\">\n                  <div>\n                    <md-form-field class=\"input-full-width\">\n                      <textarea mdInput placeholder=\"Remark\" [(ngModel)]=\"data.patientPolicyResources.remark\" name=\"patientPolicyResources.remark\"></textarea>\n                    </md-form-field>\n                  </div>\n                </div>\n\n              </md-card-content>\n            </md-card>\n          </md-tab>\n          <md-tab>\n            <ng-template md-tab-label>\n              Employee Information\n            </ng-template>\n            <md-card  >\n<!--\n\n              <md-card-content>\n                <div class=\"container\">\n                  <div> \n                    <md-form-field class=\"input-full-width\">\n                      <input mdInput placeholder=\"Employer\" [(ngModel)]=\"data.patientEmployeeResources.employeeName\" name=\"patientEmployeeResources.employeeName\">\n                    </md-form-field>\n                  </div>\n                  <div>\n                    <md-form-field class=\"input-full-width\">\n                      <input mdInput placeholder=\"Employee Reference No\" [(ngModel)]=\"data.patientEmployeeResources.employeeReferenceNo\" name=\"patientEmployeeResources.employeeReferenceNo\">\n                    </md-form-field>\n                  </div>\n                </div>\n                <div class=\"container\">\n                  <div>\n                    <md-form-field class=\"input-full-width\">\n                      <input mdInput placeholder=\"Phone\" [(ngModel)]=\"data.patientEmployeeResources.phone\" name=\"patientEmployeeResources.phone\">\n                    </md-form-field>\n                  </div>\n                  <div>\n                    <md-form-field class=\"input-full-width\">\n                      <input mdInput placeholder=\"Fax\" [(ngModel)]=\"data.patientEmployeeResources.fax\" name=\"patientEmployeeResources.fax\">\n                    </md-form-field>\n                  </div>\n                  <div>\n                    <md-form-field class=\"input-full-width\">\n                      <input mdInput type=\"email\" placeholder=\"Email\" [(ngModel)]=\"data.patientEmployeeResources.email\" name=\"patientEmployeeResources.email\">\n                    </md-form-field>\n                  </div>\n                </div>\n                <div class=\"container\">\n                  <div>\n                    <md-form-field class=\"input-full-width\">\n                      <textarea mdInput placeholder=\"Address\" rows=\"1\"  [(ngModel)]=\"data.patientEmployeeResources.address\" name=\"patientEmployeeResources.address\"></textarea>\n                    </md-form-field>\n                  </div>\n                </div>\n                <div class=\"container\">\n                  <div>\n                    <md-form-field class=\"input-full-width\">\n                      <input mdInput placeholder=\"City\" [(ngModel)]=\"data.patientEmployeeResources.city\" name=\"patientEmployeeResources.city\">\n                    </md-form-field>\n                  </div>\n                  <div>\n                    <md-form-field class=\"input-full-width\">\n                      <input mdInput type=\"number\" placeholder=\"Postal Code\" [(ngModel)]=\"data.patientEmployeeResources.zipcode\" name=\"patientEmployeeResources.zipcode\">\n                    </md-form-field>\n                  </div>\n                  <div>\n                    <md-select class=\"input-full-width\" placeholder=\"State\" name=\"patientEmployeeResources.stateID\" [(ngModel)]=\"data.patientEmployeeResources.stateID\" >\n                      <md-option *ngFor=\"let state of states\" [value]=\"state.stateID\">\n                        {{state.stateName}}\n                      </md-option>\n                    </md-select>\n                  </div>\n                  <div>\n                      <md-select class=\"input-full-width\" placeholder=\"Country\"  name=\"patientEmployeeResources.countryID\" [(ngModel)]=\"data.patientEmployeeResources.countryID\" >\n                        <md-option *ngFor=\"let country of countries\" [value]=\"country.countryID\">\n                          {{country.countryName}}\n                        </md-option>\n                      </md-select>\n                  </div>\n                </div>\n              </md-card-content>\n\n            -->\n            </md-card>\n          </md-tab>\n        </md-tab-group>\n      </md-card-content>\n    </md-card>\n</section>"

/***/ }),

/***/ "../../../../../src/app/patient/patient.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_masterdata_service__ = __webpack_require__("../../../../../src/app/services/masterdata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_startWith__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PatientComponent = (function () {
    function PatientComponent(MasterDataService, route, router) {
        var _this = this;
        this.MasterDataService = MasterDataService;
        this.route = route;
        this.router = router;
        this.data = {
            patientEmergencyResources: {},
            patientPolicyResources: {},
            patientResource: {}
        };
        this.dataList = [];
        this.inUse = true;
        this.tdDisabled = false;
        this.gender = [
            { Option: 'Male', OptionVal: 'M' },
            { Option: 'Female', OptionVal: 'F' }
        ];
        this.payorCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]({ payorID: 0, payorName: '' });
        this.insuranceCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]({ insuranceID: 0, insuranceName: '' });
        route.params.subscribe(function (p) {
            if (p['id'] != null)
                _this.data.patientID = +p['id'];
            if (_this.data.patientID) {
                _this.retrieveData();
            }
        });
    }
    PatientComponent.prototype.displayPayorFn = function (value) {
        return value && typeof value === 'object' ? value.payorName : value;
    };
    PatientComponent.prototype.filterPayors = function (val) {
        return val ? this.payors.filter(function (s) { return new RegExp(val, 'gi').test(s.payorName); })
            : this.payors;
    };
    PatientComponent.prototype.displayInsuranceFn = function (value) {
        return value && typeof value === 'object' ? value.insuranceName : value;
    };
    PatientComponent.prototype.filterInsurances = function (val) {
        return val ? this.insurances.filter(function (s) { return new RegExp(val, 'gi').test(s.insuranceName); })
            : this.insurances;
    };
    PatientComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.payorCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]({ payorID: 0, payorName: '' });
        this.insuranceCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]({ insuranceID: 0, insuranceName: '' });
        this.MasterDataService.GetCountry().subscribe(function (countries) {
            _this.countries = countries;
        });
        this.MasterDataService.GetIdentificationType().subscribe(function (indetificationType) {
            _this.IDtypes = indetificationType;
        });
        this.MasterDataService.GetPayor().subscribe(function (payor) {
            _this.payors = payor;
            //here only start filter
            _this.filteredPayors = _this.payorCtrl.valueChanges
                .startWith(_this.payorCtrl.value)
                .map(function (val) { return _this.displayPayorFn(val); })
                .map(function (name) { return _this.filterPayors(name); });
        });
        this.MasterDataService.GetInsurance().subscribe(function (insurance) {
            _this.insurances = insurance;
            //here only start filter
            _this.filteredInsurances = _this.insuranceCtrl.valueChanges
                .startWith(_this.insuranceCtrl.value)
                .map(function (val) { return _this.displayInsuranceFn(val); })
                .map(function (name) { return _this.filterInsurances(name); });
        });
        this.MasterDataService.GetRelationship().subscribe(function (relationship) {
            _this.relationship = relationship;
        });
        this.MasterDataService.GetTitle().subscribe(function (title) {
            _this.titles = title;
        });
        this.MasterDataService.GetState().subscribe(function (state) {
            _this.states = state;
        });
    };
    PatientComponent.prototype.onSave = function () {
        this.data.patientPolicyResources.insuranceID = this.insuranceCtrl.value.insuranceID;
        this.data.patientPolicyResources.payorID = this.payorCtrl.value.payorID;
        if (this.data.patientID) {
            this.MasterDataService.UpdatePatientByID(this.data)
                .subscribe(function (x) {
                //  this.msgs = [];
                //  this.msgs.push({severity:'success', summary:'Info Message', detail:'"' + x.name + '" Updated Sucessfully!'});
            });
        }
        else
            this.MasterDataService.CreatePatient(this.data)
                .subscribe(function (x) {
                //  this.msgs = [];
                // this.msgs.push({severity:'success', summary:'Info Message', detail:'"' + x.name + '" Created Sucessfully!'});
            });
    };
    PatientComponent.prototype.retrieveData = function () {
        var _this = this;
        this.MasterDataService.GetPatientByID(this.data.patientID)
            .subscribe(function (m) {
            _this.data = m;
            if (m.patientEmergencyResources == null)
                _this.data.patientEmergencyResources = {};
            if (_this.data.patientPolicyResources == null)
                _this.data.patientPolicyResources = {};
            if (_this.data.patientResource == null)
                _this.data.patientResource = {};
            _this.payorCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]({ payorID: 0, payorName: '' });
            _this.insuranceCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]({ insuranceID: 0, insuranceName: '' });
            if (_this.data.patientPolicyResources != null) {
                _this.MasterDataService.GetPayorByID(m.patientPolicyResources.payorID)
                    .subscribe(function (p) {
                    _this.payorCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]({ payorID: p.payorID, payorName: p.payorName });
                });
                _this.MasterDataService.GetInsuranceByID(m.patientPolicyResources.insuranceID)
                    .subscribe(function (i) {
                    _this.insuranceCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]({ insuranceID: i.insuranceID, insuranceName: i.insuranceName });
                });
            }
        }, function (err) {
            if (err.status == 404)
                // this.msgs = [];
                //  this.msgs.push({severity:'error', summary:'Info Message', detail:'Record Not Found!'});
                _this.data = {};
        });
    };
    PatientComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-patient',
            template: __webpack_require__("../../../../../src/app/patient/patient.component.html"),
            styles: [__webpack_require__("../../../../../src/app/patient/patient.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_masterdata_service__["a" /* MasterDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services_masterdata_service__["a" /* MasterDataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["ActivatedRoute"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["Router"]) === "function" && _c || Object])
    ], PatientComponent);
    return PatientComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=patient.component.js.map

/***/ }),

/***/ "../../../../../src/app/self-service/self-service.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/self-service/self-service.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  self-service works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/self-service/self-service.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelfServiceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SelfServiceComponent = (function () {
    function SelfServiceComponent() {
    }
    SelfServiceComponent.prototype.ngOnInit = function () {
    };
    SelfServiceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-self-service',
            template: __webpack_require__("../../../../../src/app/self-service/self-service.component.html"),
            styles: [__webpack_require__("../../../../../src/app/self-service/self-service.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SelfServiceComponent);
    return SelfServiceComponent;
}());

//# sourceMappingURL=self-service.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/EventService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventService = (function () {
    function EventService(http) {
        this.http = http;
    }
    EventService.prototype.getEvents = function () {
        return this.http.get('src/app/scheduleevents.json')
            .toPromise()
            .then(function (res) { return res.json().data; })
            .then(function (data) { return data; });
    };
    EventService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
    ], EventService);
    return EventService;
    var _a;
}());

//# sourceMappingURL=EventService.js.map

/***/ }),

/***/ "../../../../../src/app/services/GDService.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GDService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GDService = (function () {
    function GDService(snackBar, http) {
        this.snackBar = snackBar;
        this.http = http;
    }
    GDService.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 4000,
        });
    };
    GDService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_material__["i" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_material__["i" /* MdSnackBar */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _b || Object])
    ], GDService);
    return GDService;
    var _a, _b;
}());

//# sourceMappingURL=GDService.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/NodeService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NodeService = (function () {
    function NodeService(http) {
        this.http = http;
    }
    NodeService.prototype.getFilesystem = function () {
        return this.http.get('src/app/filesystem.json')
            .toPromise()
            .then(function (res) { return res.json().data; });
    };
    NodeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
    ], NodeService);
    return NodeService;
    var _a;
}());

//# sourceMappingURL=NodeService.js.map

/***/ }),

/***/ "../../../../../src/app/services/SpeechRecognitionService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeechRecognitionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SpeechRecognitionService = (function () {
    function SpeechRecognitionService(zone) {
        this.zone = zone;
    }
    SpeechRecognitionService.prototype.record = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].create(function (observer) {
            var webkitSpeechRecognition = window.webkitSpeechRecognition;
            _this.speechRecognition = new webkitSpeechRecognition();
            //this.speechRecognition = SpeechRecognition;
            _this.speechRecognition.continuous = true;
            //this.speechRecognition.interimResults = true;
            _this.speechRecognition.lang = 'en-us';
            _this.speechRecognition.maxAlternatives = 3;
            _this.speechRecognition.onresult = function (speech) {
                var term = "";
                if (speech.results) {
                    var result = speech.results[speech.resultIndex];
                    var transcript = result[0].transcript;
                    if (result.isFinal) {
                        if (result[0].confidence < 0.3) {
                            console.log("Unrecognized result - Please try again");
                        }
                        else {
                            term = __WEBPACK_IMPORTED_MODULE_2_lodash__["trim"](transcript);
                            console.log("Did you said? -> " + term + " , If not then say something else...");
                        }
                    }
                }
                _this.zone.run(function () {
                    observer.next(term);
                });
            };
            _this.speechRecognition.onerror = function (error) {
                observer.error(error);
            };
            _this.speechRecognition.onend = function () {
                observer.complete();
            };
            _this.speechRecognition.start();
            console.log("Say something - We are listening !!!");
        });
    };
    SpeechRecognitionService.prototype.DestroySpeechObject = function () {
        if (this.speechRecognition)
            this.speechRecognition.stop();
    };
    SpeechRecognitionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _a || Object])
    ], SpeechRecognitionService);
    return SpeechRecognitionService;
    var _a;
}());

//# sourceMappingURL=SpeechRecognitionService.js.map

/***/ }),

/***/ "../../../../../src/app/services/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Company; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Company = (function () {
    function Company() {
    }
    return Company;
}());

var companies = [{
        "ID": 1,
        "CompanyName": "Premier Buy",
        "Address": "7601 Penn Avenue South",
        "City": "Richfield",
        "State": "Minnesota",
        "Zipcode": 55423,
        "Phone": "(612) 291-1000",
        "Fax": "(612) 291-2001",
        "Website": "http =//www.nowebsitepremierbuy.com"
    }, {
        "ID": 2,
        "CompanyName": "ElectrixMax",
        "Address": "263 Shuman Blvd",
        "City": "Naperville",
        "State": "Illinois",
        "Zipcode": 60563,
        "Phone": "(630) 438-7800",
        "Fax": "(630) 438-7801",
        "Website": "http =//www.nowebsiteelectrixmax.com"
    }, {
        "ID": 3,
        "CompanyName": "Video Emporium",
        "Address": "1201 Elm Street",
        "City": "Dallas",
        "State": "Texas",
        "Zipcode": 75270,
        "Phone": "(214) 854-3000",
        "Fax": "(214) 854-3001",
        "Website": "http =//www.nowebsitevideoemporium.com"
    }, {
        "ID": 4,
        "CompanyName": "Screen Shop",
        "Address": "1000 Lowes Blvd",
        "City": "Mooresville",
        "State": "North Carolina",
        "Zipcode": 28117,
        "Phone": "(800) 445-6937",
        "Fax": "(800) 445-6938",
        "Website": "http =//www.nowebsitescreenshop.com"
    }, {
        "ID": 5,
        "CompanyName": "Braeburn",
        "Address": "1 Infinite Loop",
        "City": "Cupertino",
        "State": "California",
        "Zipcode": 95014,
        "Phone": "(408) 996-1010",
        "Fax": "(408) 996-1012",
        "Website": "http =//www.nowebsitebraeburn.com"
    }, {
        "ID": 6,
        "CompanyName": "PriceCo",
        "Address": "30 Hunter Lane",
        "City": "Camp Hill",
        "State": "Pennsylvania",
        "Zipcode": 17011,
        "Phone": "(717) 761-2633",
        "Fax": "(717) 761-2334",
        "Website": "http =//www.nowebsitepriceco.com"
    }, {
        "ID": 7,
        "CompanyName": "Ultimate Gadget",
        "Address": "1557 Watson Blvd",
        "City": "Warner Robbins",
        "State": "Georgia",
        "Zipcode": 31093,
        "Phone": "(995) 623-6785",
        "Fax": "(995) 623-6786",
        "Website": "http =//www.nowebsiteultimategadget.com"
    }, {
        "ID": 8,
        "CompanyName": "EZ Stop",
        "Address": "618 Michillinda Ave.",
        "City": "Arcadia",
        "State": "California",
        "Zipcode": 91007,
        "Phone": "(626) 265-8632",
        "Fax": "(626) 265-8633",
        "Website": "http =//www.nowebsiteezstop.com"
    }, {
        "ID": 9,
        "CompanyName": "Clicker",
        "Address": "1100 W. Artesia Blvd.",
        "City": "Compton",
        "State": "California",
        "Zipcode": 90220,
        "Phone": "(310) 884-9000",
        "Fax": "(310) 884-9001",
        "Website": "http =//www.nowebsiteclicker.com"
    }, {
        "ID": 10,
        "CompanyName": "Store of America",
        "Address": "2401 Utah Ave. South",
        "City": "Seattle",
        "State": "Washington",
        "Zipcode": 98134,
        "Phone": "(206) 447-1575",
        "Fax": "(206) 447-1576",
        "Website": "http =//www.nowebsiteamerica.com"
    }, {
        "ID": 11,
        "CompanyName": "Zone Toys",
        "Address": "1945 S Cienega Boulevard",
        "City": "Los Angeles",
        "State": "California",
        "Zipcode": 90034,
        "Phone": "(310) 237-5642",
        "Fax": "(310) 237-5643",
        "Website": "http =//www.nowebsitezonetoys.com"
    }, {
        "ID": 12,
        "CompanyName": "ACME",
        "Address": "2525 E El Segundo Blvd",
        "City": "El Segundo",
        "State": "California",
        "Zipcode": 90245,
        "Phone": "(310) 536-0611",
        "Fax": "(310) 536-0612",
        "Website": "http =//www.nowebsiteacme.com"
    }, {
        "ID": 13,
        "CompanyName": "Super Mart of the West",
        "Address": "702 SW 8th Street",
        "City": "Bentonville",
        "State": "Arkansas",
        "Zipcode": 72716,
        "Phone": "(800) 555-2797",
        "Fax": "(800) 555-2171",
        "Website": "http://www.nowebsitesupermart.com"
    }, {
        "ID": 14,
        "CompanyName": "Electronics Depot",
        "Address": "2455 Paces Ferry Road NW",
        "City": "Atlanta",
        "State": "Georgia",
        "Zipcode": 30339,
        "Phone": "(800) 595-3232",
        "Fax": "(800) 595-3231",
        "Website": "http =//www.nowebsitedepot.com"
    }, {
        "ID": 15,
        "CompanyName": "K&S Music",
        "Address": "1000 Nicllet Mall",
        "City": "Minneapolis",
        "State": "Minnesota",
        "Zipcode": 55403,
        "Phone": "(612) 304-6073",
        "Fax": "(612) 304-6074",
        "Website": "http =//www.nowebsitemusic.com"
    }, {
        "ID": 16,
        "CompanyName": "Tom's Club",
        "Address": "999 Lake Drive",
        "City": "Issaquah",
        "State": "Washington",
        "Zipcode": 98027,
        "Phone": "(800) 955-2292",
        "Fax": "(800) 955-2293",
        "Website": "http =//www.nowebsitetomsclub.com"
    }, {
        "ID": 17,
        "CompanyName": "E-Mart",
        "Address": "3333 Beverly Rd",
        "City": "Hoffman Estates",
        "State": "Illinois",
        "Zipcode": 60179,
        "Phone": "(847) 286-2500",
        "Fax": "(847) 286-2501",
        "Website": "http =//www.nowebsiteemart.com"
    }, {
        "ID": 18,
        "CompanyName": "Walters",
        "Address": "200 Wilmot Rd",
        "City": "Deerfield",
        "State": "Illinois",
        "Zipcode": 60015,
        "Phone": "(847) 940-2500",
        "Fax": "(847) 940-2501",
        "Website": "http =//www.nowebsitewalters.com"
    }, {
        "ID": 19,
        "CompanyName": "StereoShack",
        "Address": "400 Commerce S",
        "City": "Fort Worth",
        "State": "Texas",
        "Zipcode": 76102,
        "Phone": "(817) 820-0741",
        "Fax": "(817) 820-0742",
        "Website": "http =//www.nowebsiteshack.com"
    }, {
        "ID": 20,
        "CompanyName": "Circuit Town",
        "Address": "2200 Kensington Court",
        "City": "Oak Brook",
        "State": "Illinois",
        "Zipcode": 60523,
        "Phone": "(800) 955-2929",
        "Fax": "(800) 955-9392",
        "Website": "http =//www.nowebsitecircuittown.com"
    }];
var Service = (function () {
    function Service() {
    }
    Service.prototype.getCompanies = function () {
        return companies;
    };
    Service = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], Service);
    return Service;
}());

//# sourceMappingURL=app.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_auth0_js__ = __webpack_require__("../../../../auth0-js/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_auth0_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_auth0_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(router) {
        this.router = router;
        this.auth0 = new __WEBPACK_IMPORTED_MODULE_3_auth0_js__["WebAuth"]({
            clientID: 'RBjWPle3E8LoA5xr9AyrTZ84Mt6zzUYn',
            domain: 'doctorgilbert.auth0.com',
            responseType: 'token id_token',
            audience: 'https://api.doctorgilbert.com',
            redirectUri: 'http://localhost:4200/',
            scope: 'openid profile read:messages'
        });
    }
    AuthService.prototype.login = function () {
        this.auth0.authorize();
    };
    AuthService.prototype.handleAuthentication = function () {
        var _this = this;
        this.auth0.parseHash(function (err, authResult) {
            if (authResult && authResult.accessToken && authResult.idToken) {
                window.location.hash = '';
                _this.setSession(authResult);
                _this.router.navigate(['/']);
            }
            else if (err) {
                _this.router.navigate(['/error']);
                console.log(err);
            }
        });
    };
    AuthService.prototype.setSession = function (authResult) {
        // Set the time that the access token will expire at
        var expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
    };
    AuthService.prototype.logout = function () {
        // Remove tokens and expiry time from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        // Go back to the home route
        this.router.navigate(['/']);
    };
    AuthService.prototype.isAuthenticated = function () {
        // Check whether the current time is past the
        // access token's expiry time
        var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    };
    AuthService.prototype.getProfile = function (cb) {
        var accessToken = localStorage.getItem('access_token');
        if (!accessToken) {
            throw new Error('Access token must exist to fetch profile');
        }
        var self = this;
        this.auth0.client.userInfo(accessToken, function (err, profile) {
            if (profile) {
                self.userProfile = profile;
                console.log(profile);
            }
            cb(err, profile);
        });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/carService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CarService = (function () {
    function CarService(http) {
        this.http = http;
    }
    CarService.prototype.getCarsSmall = function () {
        return this.http.get('src/app/cars-small.json')
            .toPromise()
            .then(function (res) { return res.json().data; })
            .then(function (data) { return data; });
    };
    CarService.prototype.getCarsMedium = function () {
        return this.http.get('src/app/cars-medium.json')
            .toPromise()
            .then(function (res) { return res.json().data; })
            .then(function (data) { return data; });
    };
    CarService.prototype.getCarsLarge = function () {
        return this.http.get('src/app/cars-large.json')
            .toPromise()
            .then(function (res) { return res.json().data; })
            .then(function (data) { return data; });
    };
    CarService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
    ], CarService);
    return CarService;
    var _a;
}());

//# sourceMappingURL=carService.js.map

/***/ }),

/***/ "../../../../../src/app/services/masterdata.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MasterDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MasterDataService = (function () {
    function MasterDataService(http, authHttp) {
        this.http = http;
        this.authHttp = authHttp;
        //sURL = "http://localhost:5000/api/"
        this.sURL = "http://default-environment.g6gspafbuv.us-east-2.elasticbeanstalk.com/api/";
    }
    MasterDataService.prototype.GetCountry = function () {
        return this.http.get(this.sURL + 'country')
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.GetModality = function () {
        return this.http.get(this.sURL + 'Modality')
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.GetLaboratoryUnit = function () {
        return this.http.get(this.sURL + 'LaboratoryUnit')
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.GetIdentificationType = function () {
        return this.http.get(this.sURL + 'identificationtype')
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.GetInsurance = function () {
        return this.http.get(this.sURL + 'insurance')
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.GetInsuranceByID = function (id) {
        return this.http.get(this.sURL + 'insurance/' + id)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.GetModalityByID = function (id) {
        return this.http.get(this.sURL + 'Modality/' + id)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.GetLaboratoryUnitByID = function (id) {
        return this.http.get(this.sURL + 'LaboratoryUnit/' + id)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.GetVisit = function () {
        return this.http.get(this.sURL + 'MedicalRecord/Visit')
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.GetVisitByID = function (id) {
        return this.http.get(this.sURL + 'MedicalRecord/Visit/' + id)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.GetVisitBySearch = function (visitNo) {
        return this.http.get(this.sURL + 'MedicalRecord/VisitSearch/' + visitNo)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.GetPayor = function () {
        return this.http.get(this.sURL + 'payor')
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.GetPayorByID = function (id) {
        return this.http.get(this.sURL + 'payor/' + id)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.GetRelationship = function () {
        return this.http.get(this.sURL + 'relationship')
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.GetTitle = function () {
        return this.http.get(this.sURL + 'title')
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.GetState = function () {
        return this.http.get(this.sURL + 'state')
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.GetPatient = function () {
        return this.http.get(this.sURL + 'Patient/Patient')
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.GetPatientByID = function (id) {
        return this.http.get(this.sURL + 'Patient/Patient/' + id)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.GetPatientBySearch = function (name) {
        return this.http.get(this.sURL + 'patient/PatientSearch/' + name)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.GetMOHVisitType = function () {
        return this.http.get(this.sURL + 'MOHVisitType')
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.GetMOHVisitTypeByID = function (id) {
        return this.http.get(this.sURL + 'MOHVisitType/' + id)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.GetPurposeOfVisit = function () {
        return this.http.get(this.sURL + 'VisitPurpose')
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.GetPurposeOfVisitByID = function (id) {
        return this.http.get(this.sURL + 'VisitPurpose/' + id)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.GetDGUser = function () {
        return this.http.get(this.sURL + 'DGUser')
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.GetDGUserByID = function (id) {
        return this.http.get(this.sURL + 'DGUser/' + id)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.GetDepartment = function () {
        return this.http.get(this.sURL + 'Department')
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.GetDepartmentByID = function (id) {
        return this.http.get(this.sURL + 'Department/' + id)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.GetInventory = function () {
        return this.http.get(this.sURL + 'Inventory')
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.GetChargeItemByID = function (id) {
        return this.http.get(this.sURL + 'ChargeItem/' + id)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.GetMedicationBySearch = function (keyword) {
        return this.http.get(this.sURL + 'MedicationSearch/' + keyword)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.GetInventoryBrand = function () {
        return this.http.get(this.sURL + 'InventoryBrand')
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.GetInventoryBrandByID = function (id) {
        return this.http.get(this.sURL + 'InventoryBrand/' + id)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.GetInventoryCategory = function () {
        return this.http.get(this.sURL + 'InventoryCategory')
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.GetInventoryCategoryByID = function (id) {
        return this.http.get(this.sURL + 'InventoryCategory/' + id)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.GetInventorySubCategory = function () {
        return this.http.get(this.sURL + 'InventorySubCategory')
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.GetInventorySubCategoryByID = function (id) {
        return this.http.get(this.sURL + 'InventorySubCategory/' + id)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.GetInventoryGeneric = function () {
        return this.http.get(this.sURL + 'InventoryGeneric')
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.GetInventoryGenericByID = function (id) {
        return this.http.get(this.sURL + 'InventoryGeneric/' + id)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.GetInventoryMedicationClass = function () {
        return this.http.get(this.sURL + 'InventoryMedicationClass')
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.GetInventoryMedicationClassByID = function (id) {
        return this.http.get(this.sURL + 'InventoryMedicationClass/' + id)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.GetInventoryPregnancyCategory = function () {
        return this.http.get(this.sURL + 'InventoryPregnancyCategory')
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.GetInventoryPregnancyCategoryByID = function (id) {
        return this.http.get(this.sURL + 'InventoryPregnancyCategory/' + id)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.GetInventoryATCClassification = function () {
        return this.http.get(this.sURL + 'InventoryATCClassification')
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.GetInventoryATCClassificationByID = function (id) {
        return this.http.get(this.sURL + 'InventoryATCClassification/' + id)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.GetSpeciality = function () {
        return this.http.get(this.sURL + 'Speciality')
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.GetSpecialityByID = function (id) {
        return this.http.get(this.sURL + 'Speciality/' + id)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.GetPriceStructure = function () {
        return this.http.get(this.sURL + 'PriceStructure')
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.GetPriceStructureByID = function (id) {
        return this.http.get(this.sURL + 'PriceStructure/' + id)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.GetAppointment = function () {
        return this.http.get(this.sURL + 'Appointment/Appointment')
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.GetAppointmentByID = function (id) {
        return this.http.get(this.sURL + 'Appointment/Appointment/' + id)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.GetDiagnosis = function () {
        return this.http.get(this.sURL + 'Diagnosis')
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.GetDiagnosisByID = function (id) {
        return this.http.get(this.sURL + 'Diagnosis/' + id)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.GetDiagnosisBySearch = function (searchKey) {
        return this.http.get(this.sURL + 'DiagnosisSearch/' + searchKey)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.GetVitalSign = function () {
        return this.http.get(this.sURL + 'medicalRecord/VitalSign')
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.GetVitalSignByID = function (id) {
        return this.http.get(this.sURL + 'medicalRecord/VitalSign/' + id)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.GetVitalSignByVisit = function (visitID) {
        return this.http.get(this.sURL + 'medicalRecord/VitalSignByVisit/' + visitID)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.GetLaboratory = function () {
        return this.http.get(this.sURL + 'medicalRecord/Laboratory')
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.GetLaboratoryByID = function (id) {
        return this.http.get(this.sURL + 'medicalRecord/Laboratory/' + id)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.GetLaboratoryByVisit = function (visitID) {
        return this.http.get(this.sURL + 'medicalRecord/LaboratoryByVisit/' + visitID)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.GetRadiology = function () {
        return this.http.get(this.sURL + 'medicalRecord/Radiology')
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.GetRadiologyByID = function (id) {
        return this.http.get(this.sURL + 'medicalRecord/Radiology/' + id)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.GetRadiologyByVisit = function (visitID) {
        return this.http.get(this.sURL + 'medicalRecord/RadiologyByVisit/' + visitID)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.GetProcedure = function () {
        return this.http.get(this.sURL + 'medicalRecord/Procedure')
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.GetProcedureByID = function (id) {
        return this.http.get(this.sURL + 'medicalRecord/Procedure/' + id)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.GetProcedureByVisit = function (visitID) {
        return this.http.get(this.sURL + 'medicalRecord/ProcedureByVisit/' + visitID)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.GetMedication = function () {
        return this.http.get(this.sURL + 'medicalRecord/Medication')
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.GetMedicationByID = function (id) {
        return this.http.get(this.sURL + 'medicalRecord/Medication/' + id)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.GetDiagnosisLnByID = function (id) {
        return this.http.get(this.sURL + 'medicalRecord/Diagnosis/' + id)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.GetInventoryUOM = function () {
        return this.http.get(this.sURL + 'InventoryUOM')
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.GetInventoryUOMByID = function (id) {
        return this.http.get(this.sURL + 'InventoryUOM/' + id)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.GetMedicationByVisit = function (visitID) {
        return this.http.get(this.sURL + 'medicalRecord/MedicationByVisit/' + visitID)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.GetDiagnosisLnByVisit = function (visitID) {
        return this.http.get(this.sURL + 'medicalRecord/DiagnosisByVisit/' + visitID)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.GetLaboratoryItem = function () {
        return this.http.get(this.sURL + 'LaboratoryItem')
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.GetLaboratoryItemByID = function (id) {
        return this.http.get(this.sURL + 'LaboratoryItem/' + id)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.GetChargeItem = function () {
        return this.http.get(this.sURL + 'ChargeItem')
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.GetChargeItemListingByType = function (ChargeItemType) {
        return this.http.get(this.sURL + 'ChargeItemList/' + ChargeItemType)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.GetQRStockBalanceByID = function (ChargeItemID) {
        return this.http.get(this.sURL + 'Transaction/QRStockBalance/' + ChargeItemID)
            .map(function (res) { return res.json(); });
    };
    //Add Data
    MasterDataService.prototype.CreatePurposeOfVisit = function (PurposeOfVisit) {
        return this.http.post(this.sURL + 'VisitPurpose', PurposeOfVisit)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.CreateModality = function (Modality) {
        return this.http.post(this.sURL + 'Modality', Modality)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.CreateLaboratoryUnit = function (LaboratoryUnit) {
        return this.http.post(this.sURL + 'LaboratoryUnit', LaboratoryUnit)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.CreateVisit = function (Visit) {
        return this.http.post(this.sURL + 'MedicalRecord/CreateVisit', Visit)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.CreateMOHVisitType = function (MOHVisitType) {
        return this.http.post(this.sURL + 'MOHVisitType', MOHVisitType)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.CreatePayor = function (Payor) {
        return this.http.post(this.sURL + 'payor', Payor)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.CreateDepartment = function (Department) {
        return this.http.post(this.sURL + 'department', Department)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.CreateInsurance = function (Insurance) {
        return this.http.post(this.sURL + 'Insurance', Insurance)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.CreateLaboratoryItem = function (LaboratoryItem) {
        return this.http.post(this.sURL + 'LaboratoryItem', LaboratoryItem)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.CreateInventory = function (Inventory) {
        return this.http.post(this.sURL + 'Inventory', Inventory)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.CreateInventoryBrand = function (InventoryBrand) {
        return this.http.post(this.sURL + 'InventoryBrand', InventoryBrand)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.CreateInventoryCategory = function (InventoryCategory) {
        return this.http.post(this.sURL + 'InventoryCategory', InventoryCategory)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.CreateInventorySubCategory = function (InventorySubCategory) {
        return this.http.post(this.sURL + 'InventorySubCategory', InventorySubCategory)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.CreateInventoryGeneric = function (InventoryGeneric) {
        return this.http.post(this.sURL + 'InventoryGeneric', InventoryGeneric)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.CreateInventoryMedicationClass = function (InventoryMedicationClass) {
        return this.http.post(this.sURL + 'InventoryMedicationClass', InventoryMedicationClass)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.CreateInventoryPregnancyCategory = function (InventoryPregnancyCategory) {
        return this.http.post(this.sURL + 'InventoryPregnancyCategory', InventoryPregnancyCategory)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.CreateInventoryATCClassification = function (InventoryATCClassification) {
        return this.http.post(this.sURL + 'InventoryATCClassification', InventoryATCClassification)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.CreateDGUser = function (DGUser) {
        return this.http.post(this.sURL + 'DGUser', DGUser)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.CreatePriceStructure = function (PriceStructure) {
        return this.http.post(this.sURL + 'PriceStructure', PriceStructure)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.CreateSpeciality = function (Speciality) {
        return this.http.post(this.sURL + 'Speciality', Speciality)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.CreateDiagnosis = function (Diagnosis) {
        return this.http.post(this.sURL + 'Diagnosis', Diagnosis)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.CreatePatient = function (Patient) {
        return this.http.post(this.sURL + 'Patient/CreatePatient', Patient)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.CreateAppointment = function (Appointment) {
        return this.http.post(this.sURL + 'Appointment/CreateAppointment', Appointment)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.CreateRadiologyRecord = function (RadiologyHdr) {
        return this.http.post(this.sURL + 'MedicalRecord/CreateRadiology', RadiologyHdr)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.CreateLaboratoryRecord = function (LaboratoryHdr) {
        return this.http.post(this.sURL + 'MedicalRecord/CreateLaboratory', LaboratoryHdr)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.CreateProcedureRecord = function (ProcedureHdr) {
        return this.http.post(this.sURL + 'MedicalRecord/CreateProcedure', ProcedureHdr)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.CreateMedicationRecord = function (MedicationHdr) {
        return this.http.post(this.sURL + 'MedicalRecord/CreateMedication', MedicationHdr)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.CreateVitalSignRecord = function (VitalSignBy) {
        return this.http.post(this.sURL + 'MedicalRecord/CreateVitalSign', VitalSignBy)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.CreateStockLocking = function (StockLocking) {
        return this.http.post(this.sURL + 'Transaction/StockLocking', StockLocking)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.CreateDiagnosisLn = function (Diagnosis) {
        return this.http.post(this.sURL + 'MedicalRecord/CreateDiagnosis', Diagnosis)
            .map(function (res) { return res.json(); });
    };
    //Update Data
    MasterDataService.prototype.UpdateMOHVisitTypeByID = function (MOHVisitType) {
        return this.http.put(this.sURL + 'MOHVisitType/' + MOHVisitType.mohVisitTypeID, MOHVisitType)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.UpdatePurposeOfVisitByID = function (PurposeOfVisit) {
        return this.http.put(this.sURL + 'VisitPurpose/' + PurposeOfVisit.visitPurposeID, PurposeOfVisit)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.UpdatePayorByID = function (Payor) {
        return this.http.put(this.sURL + 'payor/' + Payor.payorID, Payor)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.UpdateModalityByID = function (Modality) {
        return this.http.put(this.sURL + 'Modality/' + Modality.modalityID, Modality)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.UpdateLaboratoryUnitByID = function (LaboratoryUnit) {
        return this.http.put(this.sURL + 'LaboratoryUnit/' + LaboratoryUnit.laboratoryUnitID, LaboratoryUnit)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.UpdateDepartmentByID = function (Department) {
        return this.http.put(this.sURL + 'Department/' + Department.departmentID, Department)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.UpdateInsuranceByID = function (Insurance) {
        return this.http.put(this.sURL + 'Insurance/' + Insurance.insuranceID, Insurance)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.UpdateInventoryByID = function (Inventory) {
        return this.http.put(this.sURL + 'Inventory/' + Inventory.inventoryID, Inventory)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.UpdateInventoryBrandByID = function (InventoryBrand) {
        return this.http.put(this.sURL + 'InventoryBrand/' + InventoryBrand.inventoryBrandID, InventoryBrand)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.UpdateInventoryCategoryByID = function (InventoryCategory) {
        return this.http.put(this.sURL + 'InventoryCategory/' + InventoryCategory.inventoryCategoryID, InventoryCategory)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.UpdateInventorySubCategoryByID = function (InventorySubCategory) {
        return this.http.put(this.sURL + 'InventorySubCategory/' + InventorySubCategory.inventorySubCategoryID, InventorySubCategory)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.UpdateInventoryGenericByID = function (InventoryGeneric) {
        return this.http.put(this.sURL + 'InventoryGeneric/' + InventoryGeneric.inventoryGenericID, InventoryGeneric)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.UpdateInventoryMedicationClassByID = function (InventoryMedicationClass) {
        return this.http.put(this.sURL + 'InventoryMedicationClass/' + InventoryMedicationClass.inventoryMedicationClassID, InventoryMedicationClass)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.UpdateInventoryPregnancyCategoryByID = function (InventoryPregnancyCategory) {
        return this.http.put(this.sURL + 'InventoryPregnancyCategory/' + InventoryPregnancyCategory.inventoryPregnancyCategoryID, InventoryPregnancyCategory)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.UpdateInventoryATCClassificationByID = function (InventoryATCClassification) {
        return this.http.put(this.sURL + 'InventoryATCClassification/' + InventoryATCClassification.inventoryATCClassificationID, InventoryATCClassification)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.UpdateDGUserByID = function (DGUser) {
        return this.http.put(this.sURL + 'DGUser/' + DGUser.dgUserID, DGUser)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.UpdateVisitByID = function (Visit) {
        return this.http.put(this.sURL + 'MedicalRecord/Visit/' + Visit.visitID, Visit)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.UpdatePriceStructureByID = function (PriceStructure) {
        return this.http.put(this.sURL + 'PriceStructure/' + PriceStructure.priceStructureID, PriceStructure)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.UpdateSpecialityByID = function (Speciality) {
        return this.http.put(this.sURL + 'Speciality/' + Speciality.specialityID, Speciality)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.UpdateDiagnosisByID = function (Diagnosis) {
        return this.http.put(this.sURL + 'Diagnosis/' + Diagnosis.diagnosisID, Diagnosis)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.UpdateLaboratoryItemByID = function (LaboratoryItem) {
        return this.http.put(this.sURL + 'LaboratoryItem/' + LaboratoryItem.LaboratoryItemID, LaboratoryItem)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.UpdatePatientByID = function (Patient) {
        return this.http.put(this.sURL + 'Patient/Patient/' + Patient.patientID, Patient)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.UpdateAppointmentByID = function (Appointment) {
        return this.http.put(this.sURL + 'Appointment/Appointment/' + Appointment.appointmentID, Appointment)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.UpdateRadiologyRecordByID = function (Radiology) {
        return this.http.put(this.sURL + 'MedicalRecord/Radiology/' + Radiology.radiologyHdrID, Radiology)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.UpdateLaboratoryRecordByID = function (Laboratory) {
        return this.http.put(this.sURL + 'MedicalRecord/Laboratory/' + Laboratory.laboratoryHdrID, Laboratory)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.UpdateProcedureRecordByID = function (Procedure) {
        return this.http.put(this.sURL + 'MedicalRecord/Procedure/' + Procedure.procedureHdrID, Procedure)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.UpdateMedicationRecordByID = function (Medication) {
        return this.http.put(this.sURL + 'MedicalRecord/Medication/' + Medication.medicationHdrID, Medication)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.UpdateVitalSignRecordByID = function (VitalSign) {
        return this.http.put(this.sURL + 'MedicalRecord/VitalSign/' + VitalSign.vitalSignID, VitalSign)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.UpdateDiagnosisRecordByID = function (Diagnosis) {
        return this.http.put(this.sURL + 'MedicalRecord/Diagnosis/' + Diagnosis.diagnosisLnID, Diagnosis)
            .map(function (res) { return res.json(); });
    };
    MasterDataService.prototype.UpdateStockLockingByID = function (StockLocking) {
        console.log(StockLocking);
        return this.http.put(this.sURL + 'Transaction/StockLocking/' + StockLocking.StockLockingID, StockLocking)
            .map(function (res) { return res.json(); });
    };
    MasterDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_jwt__["AuthHttp"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_jwt__["AuthHttp"]) === "function" && _b || Object])
    ], MasterDataService);
    return MasterDataService;
    var _a, _b;
}());

//# sourceMappingURL=masterdata.service.js.map

/***/ }),

/***/ "../../../../../src/app/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*temporary ui fix */\n:host /deep/ .mat-select-trigger {\n  font-size: 12px;\n  height: inherit;\n  margin-bottom: 15px;\n  margin-top: 2px;\n  \n}\n\n:host /deep/ .mat-select-value-text {\n  line-height: inherit;\n  margin-bottom: 15px;\n  margin-top: 2px;\n}\n\n:host /deep/ .mat-select {\n  font-size: 12px;\n  margin-top: 2px;\n  margin-bottom: 15px;\n  margin-left: 1px;\n}\n\n:host /deep/ .mat-checkbox {\n  font-size: 12px;\n  margin-top: 2px;\n  margin-left: 1px;\n}\n\n:host /deep/ .mat-radio-group {\n  font-size: 12px;\n  margin-top: 2px;\n  margin-left: 1px;\n}\n/*temporary ui fix */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\n    <div class=\"toolbar\">\n      <div>\n        <button md-raised-button (click)=\"onSave()\">Save</button>\n        <button md-raised-button>New</button>\n        <button md-raised-button>Save + New</button>\n      </div>\n    </div>\n\n    <md-card>\n      <md-card-header>\n        <md-card-title>User Master</md-card-title>\n        <md-card-subtitle>{{data.dgUserID > 0 ? 'Edit Mode' : 'New Mode'}}</md-card-subtitle>\n      </md-card-header>\n      <md-card-content>\n        <md-tab-group>\n          <md-tab>\n            <ng-template md-tab-label>\n              User information\n            </ng-template>\n            <md-card>\n              <md-card-content>\n                  <div class=\"container\">\n                    <div> \n                      <md-form-field class=\"input-full-width\">\n                        <input mdInput placeholder=\"Full name\"  [(ngModel)]=\"data.userFullName\" name=\"userFullName\">\n                      </md-form-field>\n                    </div>\n                    <div>\n                      <md-select class=\"input-full-width\" placeholder=\"Title\" name=\"title\" [(ngModel)]=\"data.titleID\">\n                        <md-option *ngFor=\"let title of titles\" [value]=\"title.titleID\">\n                          {{title.titleName}}\n                        </md-option>\n                      </md-select>\n                    </div>\n                    <div>\n                      <md-form-field class=\"input-full-width\">\n                        <input mdInput placeholder=\"Initial\" [(ngModel)]=\"data.userInitial\" name=\"userInitial\">\n                      </md-form-field>\n                    </div>\n                  </div>\n                  <div class=\"container\">\n                    <div>\n                      <md-form-field class=\"input-full-width\">\n                        <input mdInput placeholder=\"Mobile Phone\" [(ngModel)]=\"data.mobile\" name=\"mobile\">\n                      </md-form-field>\n                    </div>\n                    <div>\n                      <md-form-field class=\"input-full-width\">\n                        <input mdInput placeholder=\"Phone\" [(ngModel)]=\"data.phone\" name=\"phone\">\n                      </md-form-field>\n                    </div>\n                    <div>\n                      <md-form-field class=\"input-full-width\">\n                        <input mdInput type=\"number\" placeholder=\"Extension\" [(ngModel)]=\"data.extension\" name=\"extension\">\n                      </md-form-field>\n                    </div>\n                  </div>\n                  <div class=\"container\">\n                    <div>\n                      <md-form-field class=\"input-full-width\">\n                        <input mdInput type=\"email\" placeholder=\"Email\" [(ngModel)]=\"data.email\" name=\"email\">\n                      </md-form-field>\n                    </div>\n                  </div>\n                  <div class=\"container\">\n                    <div>\n                      <md-form-field class=\"input-full-width\">\n                        <input mdInput placeholder=\"User name\" [(ngModel)]=\"data.userName\" name=\"userName\">\n                      </md-form-field>\n                    </div>\n                    <div>\n                      <md-form-field class=\"input-full-width\">\n                        <input mdInput type=\"password\" placeholder=\"Password\" [(ngModel)]=\"data.userPassword\" name=\"userPassword\"> \n                      </md-form-field>\n                    </div>\n                    <div>\n                      <md-form-field class=\"input-full-width\">\n                        <input mdInput type=\"password\" placeholder=\"Re-type Password\">\n                      </md-form-field>\n                    </div>\n                  </div>\n                  <div class=\"container\">\n                    <div>\n                      <md-checkbox [(ngModel)]=\"data.active\" name=\"active\">Active User</md-checkbox>\n                      <md-checkbox [(ngModel)]=\"data.administrator\" name=\"administrator\">System Adminstrator</md-checkbox>\n                    </div>\n                  </div>\n              </md-card-content>\n            </md-card>\n          </md-tab>\n          <md-tab>\n            <ng-template md-tab-label>\n              Care Provider Information\n            </ng-template>\n            <md-card  >\n              <md-card-content>\n                  <div class=\"container\">\n                    <div>\n                      <md-form-field class=\"input-full-width\">\n                        <input mdInput placeholder=\"Company Name\" [(ngModel)]=\"data.companyName\" name=\"companyName\">\n                      </md-form-field>\n                    </div>\n                    <div>\n                      <md-form-field class=\"input-full-width\">\n                        <input mdInput placeholder=\"Business Registration Number\" [(ngModel)]=\"data.businessRegistrationNumber\" name=\"businessRegistrationNumber\">\n                      </md-form-field>\n                    </div>\n                  </div>\n                  <div class=\"container\">\n                    <div>\n                      <md-form-field class=\"input-full-width\">\n                        <input mdInput placeholder=\"GST number\" [(ngModel)]=\"data.gstNumber\" name=\"gstNumber\">\n                      </md-form-field>\n                    </div>\n                    <div>\n                      <md-select class=\"input-full-width\" placeholder=\"Speciality\" name=\"speciality\" [(ngModel)]=\"data.specialityID\">\n                        <md-option *ngFor=\"let speciality of specialities\" [value]=\"speciality.specialityID\">\n                          {{speciality.specialityName}}\n                        </md-option>\n                      </md-select>\n                    </div>\n                    <div>\n                      <md-form-field class=\"input-full-width\">\n                        <input mdInput placeholder=\"Doctor Invoice Running Number\" [(ngModel)]=\"data.doctorRunningNumber\" name=\"doctorRunningNumber\">\n                      </md-form-field>\n                    </div>\n                  </div>\n                  <div class=\"container\">\n                    <div>\n                      <md-form-field class=\"input-full-width\">\n                        <input mdInput placeholder=\"Mobile Phone\" [(ngModel)]=\"data.companyMobile\" name=\"companyMobile\">\n                      </md-form-field>\n                    </div>\n                    <div>\n                      <md-form-field class=\"input-full-width\">\n                        <input mdInput placeholder=\"Phone\" [(ngModel)]=\"data.companyPhone\" name=\"companyPhone\">\n                      </md-form-field>\n                    </div>\n                    <div>\n                      <md-form-field class=\"input-full-width\">\n                        <input mdInput placeholder=\"Fax\" [(ngModel)]=\"data.companyFax\" name=\"companyFax\">\n                      </md-form-field>\n                    </div>\n                  </div>\n                  <div class=\"container\">\n                    <div>\n                      <md-form-field class=\"input-full-width\">\n                        <input mdInput type=\"email\" placeholder=\"Email\" [(ngModel)]=\"data.companyEmail\" name=\"companyEmail\">\n                      </md-form-field>\n                    </div>\n                  </div>\n\n                  <div class=\"container\">\n                    <div>\n                      <md-form-field class=\"input-full-width\">\n                        <textarea mdInput placeholder=\"Address\" rows=\"1\" [(ngModel)]=\"data.address\" name=\"address\"></textarea>\n                      </md-form-field>\n                    </div>\n                  </div>\n\n                  <div class=\"container\">\n                    <div>\n                      <md-form-field class=\"input-full-width\">\n                        <input mdInput placeholder=\"City\" [(ngModel)]=\"data.city\" name=\"city\">\n                      </md-form-field>\n                    </div>\n                    <div>\n                      <md-form-field class=\"input-full-width\">\n                        <input mdInput type=\"number\" placeholder=\"Postal Code\" [(ngModel)]=\"data.zipcode\" name=\"zipcode\">\n                      </md-form-field>\n                    </div>\n                    <div>\n                      <md-select class=\"input-full-width\" placeholder=\"State\" name=\"state\"  [(ngModel)]=\"data.stateID\">\n                        <md-option *ngFor=\"let state of states\" [value]=\"state.stateID\">\n                          {{state.stateName}}\n                        </md-option>\n                      </md-select>\n                    </div>\n                    <div>\n                      <md-select class=\"input-full-width\" placeholder=\"Country\" name=\"country\" [(ngModel)]=\"data.countryID\">\n                        <md-option *ngFor=\"let country of countries\" [value]=\"country.countryID\">\n                          {{country.countryName}}\n                        </md-option>\n                      </md-select>\n                    </div>\n                  </div>\n              </md-card-content>\n            </md-card>\n          </md-tab>\n          <md-tab>\n            <ng-template md-tab-label>\n              Free Text\n            </ng-template>\n            <md-card  >\n              <md-card-content>\n                  <div class=\"container\">\n                    <div>\n                      <md-form-field class=\"input-full-width\">\n                        <input mdInput placeholder=\"FreeText1\" [(ngModel)]=\"data.freeText1\" name=\"freeText1\">\n                      </md-form-field>\n                    </div>\n                    <div>\n                      <md-form-field class=\"input-full-width\">\n                        <input mdInput placeholder=\"FreeText2\" [(ngModel)]=\"data.freeText2\" name=\"freeText2\">\n                      </md-form-field>\n                    </div>\n                  </div>\n                  <div class=\"container\">\n                    <div>\n                      <md-form-field class=\"input-full-width\">\n                        <input mdInput placeholder=\"FreeText3\" [(ngModel)]=\"data.freeText3\" name=\"freeText3\">\n                      </md-form-field>\n                    </div>\n                    <div>\n                      <md-form-field class=\"input-full-width\">\n                        <input mdInput placeholder=\"FreeText4\" [(ngModel)]=\"data.freeText4\" name=\"freeText4\">\n                      </md-form-field>\n                    </div>\n                  </div>\n                  <div class=\"container\">\n                    <div>\n                      <md-form-field class=\"input-full-width\">\n                        <input mdInput placeholder=\"FreeText5\" [(ngModel)]=\"data.freeText5\" name=\"freeText5\">\n                      </md-form-field>\n                    </div>\n                    <div>\n                      <md-form-field class=\"input-full-width\">\n                        <input mdInput placeholder=\"FreeText6\" [(ngModel)]=\"data.freeText6\" name=\"freeText6\">\n                      </md-form-field>\n                    </div>\n                  </div>\n                  <div class=\"container\">\n                    <div>\n                      <md-form-field class=\"input-full-width\">\n                        <input mdInput placeholder=\"FreeText7\" [(ngModel)]=\"data.freeText7\" name=\"freeText7\">\n                      </md-form-field>\n                    </div>\n                    <div>\n                      <md-form-field class=\"input-full-width\">\n                        <input mdInput placeholder=\"FreeText8\" [(ngModel)]=\"data.freeText8\" name=\"freeText8\">\n                      </md-form-field>\n                    </div>\n                  </div>\n                  <div class=\"container\">\n                    <div>\n                      <md-form-field class=\"input-full-width\">\n                        <input mdInput placeholder=\"FreeText9\" [(ngModel)]=\"data.freeText9\" name=\"freeText9\">\n                      </md-form-field>\n                    </div>\n                    <div>\n                      <md-form-field class=\"input-full-width\">\n                        <input mdInput placeholder=\"FreeText10\" [(ngModel)]=\"data.freeText10\" name=\"freeText10\">\n                      </md-form-field>\n                    </div>\n                  </div>\n              </md-card-content>\n            </md-card>\n          </md-tab>\n        </md-tab-group>\n      </md-card-content>\n    </md-card>\n    <br>\n    \n        <md-card>\n            <md-card-header>\n            <md-card-title>Master Data List</md-card-title>\n            <md-card-subtitle></md-card-subtitle>\n            </md-card-header>\n            <md-card-content>\n                <dx-data-grid style=\"display:block;\" #grid\n                id=\"gridContainer\" \n                (onSelectionChanged)=\"onRowSelect($event)\"\n                [dataSource]=\"dataList\"\n                [allowColumnResizing]=\"true\"\n                 \n                [columnAutoWidth]=\"true\"\n                [allowColumnReordering]=\"true\"\n                [hoverStateEnabled]=\"true\">\n                <dxo-filter-row [visible]=\"true\"></dxo-filter-row>\n                <dxo-paging [pageSize]=\"30\"></dxo-paging>\n                <dxo-pager \n                    [showPageSizeSelector]=\"true\"\n                    [allowedPageSizes]=\"[5,10,15,30,50,100]\"\n                    [showInfo]=\"true\">\n                </dxo-pager>\n                <dxo-selection mode=\"single\"></dxo-selection>  \n                <dxi-column dataField=\"dgUserID\" [width]=\"150\"></dxi-column>\n                <dxi-column dataField=\"userFullName\"></dxi-column>\n                <dxi-column dataField=\"userInitial\"></dxi-column>\n                <dxi-column dataField=\"email\"></dxi-column>\n                <dxi-column dataField=\"userName\"></dxi-column>\n                <dxi-column dataField=\"active\"></dxi-column>\n                <dxi-column dataField=\"administrator\"></dxi-column>\n                </dx-data-grid>\n    \n            </md-card-content>\n        </md-card>\n    </section>"

/***/ }),

/***/ "../../../../../src/app/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_GDService_service__ = __webpack_require__("../../../../../src/app/services/GDService.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_masterdata_service__ = __webpack_require__("../../../../../src/app/services/masterdata.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserComponent = (function () {
    function UserComponent(GDService, MasterDataService, route, router) {
        var _this = this;
        this.GDService = GDService;
        this.MasterDataService = MasterDataService;
        this.route = route;
        this.router = router;
        this.titles = [];
        this.specialities = [];
        this.states = [];
        this.countries = [];
        this.data = {};
        this.dataList = [];
        route.params.subscribe(function (p) {
            if (p['id'] != null)
                _this.data.dgUserID = +p['id'];
            if (_this.data.dgUserID) {
                _this.retrieveData();
            }
        });
    }
    UserComponent.prototype.retrieveData = function () {
        var _this = this;
        this.MasterDataService.GetDGUserByID(this.data.dgUserID)
            .subscribe(function (m) {
            _this.data = m;
        }, function (err) {
            if (err.status == 404)
                _this.GDService.openSnackBar('Record Not Found!', 'Info');
        });
    };
    UserComponent.prototype.onRowSelect = function (event) {
        this.router.navigate(['/user/', event.selectedRowKeys[0].dgUserID]);
    };
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.active = true;
        this.MasterDataService.GetDGUser()
            .subscribe(function (x) {
            _this.dataList = x;
        });
        this.MasterDataService.GetTitle()
            .subscribe(function (x) {
            _this.titles = x;
        });
        this.MasterDataService.GetState()
            .subscribe(function (x) {
            _this.states = x;
        });
        this.MasterDataService.GetCountry()
            .subscribe(function (x) {
            _this.countries = x;
        });
        this.MasterDataService.GetSpeciality()
            .subscribe(function (x) {
            _this.specialities = x;
        });
    };
    UserComponent.prototype.onSave = function () {
        var _this = this;
        if (this.data.dgUserID) {
            this.MasterDataService.UpdateDGUserByID(this.data)
                .subscribe(function (x) {
                _this.GDService.openSnackBar('"' + x.userFullName + '" Updated Sucessfully!', 'Info');
            });
        }
        else
            this.MasterDataService.CreateDGUser(this.data)
                .subscribe(function (x) {
                _this.GDService.openSnackBar('"' + x.userFullName + '" Created Sucessfully!', 'Info');
            });
    };
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-user',
            template: __webpack_require__("../../../../../src/app/user/user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_GDService_service__["a" /* GDService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_GDService_service__["a" /* GDService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_masterdata_service__["a" /* MasterDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services_masterdata_service__["a" /* MasterDataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _d || Object])
    ], UserComponent);
    return UserComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ "../../../../../src/app/visit-overview/visit-overview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/visit-overview/visit-overview.component.html":
/***/ (function(module, exports) {

module.exports = "<section> \n  <div class=\"toolbar\">\n    <div>\n      <button md-raised-button (click)=\"onNew()\">New Visit</button> \n    </div>\n  </div> \n\n  <md-card>\n    <md-card-header>\n      <md-card-title>Visit Overview</md-card-title>\n      <md-card-subtitle></md-card-subtitle>\n    </md-card-header>\n    <md-card-content>\n          <md-card  >\n            <md-card-content>\n                <div>\n                    <dx-data-grid style=\"display:block;\" #grid\n                    id=\"gridContainer\" \n                    (onSelectionChanged)=\"onRowSelect($event)\"\n                    [dataSource]=\"data\"\n                    [allowColumnResizing]=\"true\"\n                    [hoverStateEnabled]=\"true\"\n                    [columnAutoWidth]=\"true\"\n                    [allowColumnReordering]=\"true\">  \n                    <dxo-filter-row\n                    [visible]=\"true\"></dxo-filter-row>\n                    <dxo-paging [pageSize]=\"30\"></dxo-paging>\n                    <dxo-pager \n                        [showPageSizeSelector]=\"true\"\n                        [allowedPageSizes]=\"[5,10,15,30,50,100]\"\n                        [showInfo]=\"true\">\n                    </dxo-pager>\n                    <dxo-selection mode=\"single\"></dxo-selection>  \n                    <dxo-group-panel [visible]=\"true\"></dxo-group-panel>\n                    <dxo-grouping #expand [autoExpandAll]=\"true\"></dxo-grouping>\n                    <dxi-column dataField=\"visitDateTime\" dataType=\"date\"></dxi-column>\n                    <dxi-column dataField=\"visitNo\"></dxi-column>\n                    <dxi-column dataField=\"patientResource.name\" caption=\"Patient Name\"></dxi-column>\n                    <dxi-column dataField=\"patientResource.dob\" caption=\"D.O.B\" dataType=\"date\"></dxi-column>\n                    <dxi-column dataField=\"cashPatient\" caption=\"Cash\"></dxi-column>\n                    <dxi-column dataField=\"insuranceResource.insuranceName\" caption=\"Insurance Name\" [width]=\"150\"></dxi-column>\n                    <dxi-column dataField=\"payorResource.payorName\" caption=\"Payor Name\" [width]=\"150\"></dxi-column>\n                    <dxi-column dataField=\"visitDoctorResource.userFullName\" caption=\"Doctor\"></dxi-column>\n                    <dxi-column dataField=\"visitPurposeResource.visitPurposeName\" caption=\"Visit Purpose\"></dxi-column>\n                    <dxi-column dataField=\"mohVisitTypeResource.mohVisitTypeName\" caption=\"MOH Visit Type\"></dxi-column>\n                    <dxi-column dataField=\"remark\"></dxi-column>\n\n                    </dx-data-grid>\n              \n                  </div>   \n            </md-card-content>\n          </md-card>\n    </md-card-content>\n  </md-card>\n</section>"

/***/ }),

/***/ "../../../../../src/app/visit-overview/visit-overview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisitOverviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_GDService_service__ = __webpack_require__("../../../../../src/app/services/GDService.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_masterdata_service__ = __webpack_require__("../../../../../src/app/services/masterdata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_startWith__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VisitOverviewComponent = (function () {
    function VisitOverviewComponent(GDService, MasterDataService, route, router) {
        this.GDService = GDService;
        this.MasterDataService = MasterDataService;
        this.route = route;
        this.router = router;
        this.data = {};
    }
    VisitOverviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.MasterDataService.GetVisit().subscribe(function (visitdata) {
            _this.data = visitdata;
        });
    };
    VisitOverviewComponent.prototype.onNew = function () {
        this.router.navigate(['/visit']);
    };
    VisitOverviewComponent.prototype.onRowSelect = function (event) {
        this.router.navigate(['/episode/', event.selectedRowKeys[0].visitID]);
    };
    VisitOverviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'app-visit-overview',
            template: __webpack_require__("../../../../../src/app/visit-overview/visit-overview.component.html"),
            styles: [__webpack_require__("../../../../../src/app/visit-overview/visit-overview.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_GDService_service__["a" /* GDService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_GDService_service__["a" /* GDService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_masterdata_service__["a" /* MasterDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_masterdata_service__["a" /* MasterDataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _d || Object])
    ], VisitOverviewComponent);
    return VisitOverviewComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=visit-overview.component.js.map

/***/ }),

/***/ "../../../../../src/app/visit/visit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*temporary ui fix */\n:host /deep/ .mat-select-trigger {\n  font-size: 12px;\n  height: inherit;\n  margin-bottom: 15px;\n  margin-top: 2px;\n  \n}\n\n:host /deep/ .mat-select-value-text {\n  line-height: inherit;\n  margin-bottom: 15px;\n  margin-top: 2px;\n}\n\n:host /deep/ .mat-select {\n  font-size: 12px;\n  margin-top: 2px;\n  margin-bottom: 15px;\n  margin-left: 1px;\n}\n \n:host /deep/ .mat-checkbox {\n  font-size: 12px;\n  margin-top: 2px;\n  margin-left: 1px;\n}\n\n:host /deep/ .mat-radio-group {\n  font-size: 12px;\n  margin-top: 2px;\n  margin-left: 1px;\n}\n/*temporary ui fix */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/visit/visit.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\n  <form>\n    <div class=\"toolbar\">\n      <div>\n        <button md-raised-button (click)=\"onSave()\">Save</button>\n        <button md-raised-button (click)=\"onSave(true)\">Save + Edit Episode</button>\n        <button md-raised-button>New</button>\n      </div>\n    </div>\n\n    <md-card>\n      <md-card-header>\n        <md-card-title >Visit</md-card-title>\n        <md-card-subtitle>New Visit</md-card-subtitle>\n      </md-card-header>\n      <md-card-content>\n\n        <div class=\"container\">\n          <div> \n            <md-form-field class=\"input-full-width\">\n              <input mdInput placeholder=\"Patient\" [mdAutocomplete]=\"reactivePatient\" [formControl]=\"patientCtrl\" name=\"patientID\">\n            </md-form-field>\n\n            <md-autocomplete #reactivePatient=\"mdAutocomplete\" [displayWith]=\"displayPatientFn\">\n              <md-option *ngFor=\"let patient of filteredPatients | async\" [value]=\"patient\">\n                <span>{{patient.name}}, </span>\n                <small><strong>NRIC:</strong>{{patient.identificationValue}}, <strong>Gender:</strong>{{patient.gender}}, <strong>D.O.B:</strong>{{patient.dob | date: 'dd/MM/yyyy'}}</small>\n              </md-option>\n            </md-autocomplete>\n          </div>\n          <div>\n              <md-radio-group class=\"input-full-width\" [(ngModel)]=\"visitdata.VisitType\" [value]=\"visitdata.VisitType\" name=\"visitType\">\n                <md-radio-button *ngFor=\"let visitType of visitTypes\" [value]=\"visitType\" [checked]=\"visitType==visitdata.visitType\" >\n                    {{visitType}}\n                </md-radio-button>\n            </md-radio-group>\n            </div>\n        </div>\n\n        <div class=\"container\">\n            <div>\n                <md-form-field class=\"input-full-width\">\n                  <input mdInput placeholder=\"Visit No\" disabled [(ngModel)]=\"visitdata.visitNo\" name=\"visitNo\">\n                </md-form-field>\n            </div>\n            <div>\n              <md-form-field class=\"input-full-width\">\n                <input mdInput [mdDatepicker]=\"picker\" placeholder=\"Visit Date-Time\" [(ngModel)]=\"visitdata.visitDateTime\" name=\"visitDateTime\">\n                <md-datepicker-toggle mdSuffix [for]=\"picker\"></md-datepicker-toggle>\n                <md-datepicker #picker></md-datepicker>\n              </md-form-field>\n            </div>\n            <div>\n              <md-select placeholder=\"Visit Department(s)\" [(ngModel)]=\"visitdata.departmentID\" name=\"departmentID\" class=\"input-full-width\">\n                <md-option *ngFor=\"let department of departments\" [value]=\"department.departmentID\">\n                    {{department.departmentName}}\n                </md-option>\n              </md-select>\n            </div>\n          </div>\n          <div class=\"container\">\n            <div>\n              <md-checkbox [(ngModel)]=\"visitdata.cashPatient\" name=\"cashPatient\">Cash Patient</md-checkbox>\n            </div>\n            <div>\n              <md-form-field class=\"input-full-width\">\n                <input mdInput placeholder=\"Policy\" [mdAutocomplete]=\"reactivePolicy\" [formControl]=\"policyCtrl\" name=\"insuranceID\">\n              </md-form-field>\n\n              <md-autocomplete #reactivePolicy=\"mdAutocomplete\" [displayWith]=\"displayPolicyFn\">\n                <md-option *ngFor=\"let policy of filteredPolicies | async\" [value]=\"policy\">\n                  <span>{{ policy.insuranceName }}, </span>\n                  <small><strong>Provider:</strong>{{ policy.providerName }}</small>\n                </md-option>\n              </md-autocomplete>\n            </div>\n            <div>\n              <md-form-field class=\"input-full-width\">\n                <input mdInput placeholder=\"Payor\" [mdAutocomplete]=\"reactivePayor\" [formControl]=\"payorCtrl\"  name=\"payorID\">\n              </md-form-field>\n\n              <md-autocomplete #reactivePayor=\"mdAutocomplete\" [displayWith]=\"displayPayorFn\">\n                <md-option *ngFor=\"let payor of filteredPayors | async\" [value]=\"payor\">\n                  <span>{{ payor.payorID }}</span>\n                  <span> ({{payor.payorName}}) </span>\n                </md-option>\n              </md-autocomplete>\n            </div>\n          </div>\n          <div class=\"container\">\n            <div>\n              <md-form-field class=\"input-full-width\">\n                <input mdInput placeholder=\"Visit Doctor\" [mdAutocomplete]=\"reactiveDoctor\" [formControl]=\"doctorCtrl\" name=\"visitDoctorID\">\n              </md-form-field>\n\n              <md-autocomplete #reactiveDoctor=\"mdAutocomplete\" [displayWith]=\"displayDoctorFn\">\n                <md-option *ngFor=\"let doctor of filteredDoctors | async\" [value]=\"doctor\">\n                  <span>{{ doctor.userFullName }}, </span>\n                  <small><strong>Initial:</strong>{{doctor.userInitial}}, <strong>Speciality:</strong>{{doctor.specialityID}}</small>\n                </md-option>\n              </md-autocomplete>\n            </div>\n            <div>\n              <md-form-field class=\"input-full-width\">\n                <input mdInput placeholder=\"Purpose of Visit\" [mdAutocomplete]=\"reactivePurposeOfVisit\" [formControl]=\"purposeOfVisitCtrl\" name=\"visitPurposeID\">\n              </md-form-field>\n\n              <md-autocomplete #reactivePurposeOfVisit=\"mdAutocomplete\" [displayWith]=\"displayPurposeOfVisitFn\">\n                <md-option *ngFor=\"let purposeOfVisit of filteredPurposeOfVisits | async\" [value]=\"purposeOfVisit\">\n                  <span>{{ purposeOfVisit.visitPurposeID }}</span>\n                  <span> ({{purposeOfVisit.visitPurposeName}}) </span>\n                </md-option>\n              </md-autocomplete>\n            </div>\n            <div>\n              <md-form-field class=\"input-full-width\">\n                <input mdInput placeholder=\"MOH Visit Type\" [mdAutocomplete]=\"reactiveMOH\" [formControl]=\"mohCtrl\" name=\"MOHVisitType\">\n              </md-form-field>\n\n              <md-autocomplete #reactiveMOH=\"mdAutocomplete\" [displayWith]=\"displayMOHFn\">\n                <md-option *ngFor=\"let moh of filteredMOHs | async\" [value]=\"moh\">\n                  <span>{{ moh.mohVisitTypeID }}</span>\n                  <span> ({{moh.mohVisitTypeName}}) </span>\n                </md-option>\n              </md-autocomplete>\n            </div>\n          </div>\n          <div class=\"container\">\n            <div class=\"two\">\n              <md-form-field class=\"input-full-width\">\n                <textarea mdInput placeholder=\"Remark\" [(ngModel)]=\"visitdata.Remark\" name=\"Remark\"></textarea>\n              </md-form-field>\n            </div>\n          </div>\n      </md-card-content>\n    </md-card>\n  </form>\n</section>"

/***/ }),

/***/ "../../../../../src/app/visit/visit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisitComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_GDService_service__ = __webpack_require__("../../../../../src/app/services/GDService.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_masterdata_service__ = __webpack_require__("../../../../../src/app/services/masterdata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var VisitComponent = (function () {
    function VisitComponent(GDService, MasterDataService, route, router) {
        var _this = this;
        this.GDService = GDService;
        this.MasterDataService = MasterDataService;
        this.route = route;
        this.router = router;
        this.visitTypes = ['OutPatient', 'InPatient'];
        this.visitdata = {};
        //assign value for edit mode
        this.patientCtrl = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"]({ patientID: 0, name: '' });
        this.payorCtrl = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"]({ payorID: 0, payorName: '' });
        this.mohCtrl = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"]({ mohVisitTypeID: 0, mohVisitTypeName: '' });
        this.purposeOfVisitCtrl = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"]({ visitPurposeID: 0, visitPurposeName: '' });
        this.doctorCtrl = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"]({ dgUserID: 0, userFullName: '' });
        this.policyCtrl = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"]({ insuranceID: 0, insuranceName: '' });
        route.params.subscribe(function (p) {
            if (p['id'] != null)
                _this.visitdata.visitID = +p['id'];
            if (_this.visitdata.visitID) {
                _this.retrieveData();
            }
        });
    }
    VisitComponent.prototype.displayPolicyFn = function (value) {
        return value && typeof value === 'object' ? value.insuranceName : value;
    };
    VisitComponent.prototype.displayDoctorFn = function (value) {
        return value && typeof value === 'object' ? value.userFullName : value;
    };
    VisitComponent.prototype.displayPurposeOfVisitFn = function (value) {
        return value && typeof value === 'object' ? value.visitPurposeName : value;
    };
    VisitComponent.prototype.displayMOHFn = function (value) {
        return value && typeof value === 'object' ? value.mohVisitTypeName : value;
    };
    VisitComponent.prototype.displayPayorFn = function (value) {
        return value && typeof value === 'object' ? value.payorName : value;
    };
    VisitComponent.prototype.displayPatientFn = function (value) {
        return value && typeof value === 'object' ? value.name : value;
    };
    VisitComponent.prototype.filterPolicies = function (val) {
        return val ? this.policies.filter(function (s) { return new RegExp(val, 'gi').test(s.insuranceName); })
            : this.policies;
    };
    VisitComponent.prototype.filterDoctors = function (val) {
        return val ? this.doctors.filter(function (s) { return new RegExp(val, 'gi').test(s.userFullName); })
            : this.doctors;
    };
    VisitComponent.prototype.filterPurposeOfVisits = function (val) {
        return val ? this.purposeOfVisits.filter(function (s) { return new RegExp(val, 'gi').test(s.visitPurposeName); })
            : this.purposeOfVisits;
    };
    VisitComponent.prototype.filterMOHs = function (val) {
        return val ? this.mohs.filter(function (s) { return new RegExp(val, 'gi').test(s.mohVisitTypeName); })
            : this.mohs;
    };
    VisitComponent.prototype.filterPayors = function (val) {
        return val ? this.payors.filter(function (s) { return new RegExp(val, 'gi').test(s.payorName); })
            : this.payors;
    };
    VisitComponent.prototype.filterPatients = function (val) {
        return val ? this.patients.filter(function (s) { return new RegExp(val, 'gi').test(s.name); })
            : this.patients;
    };
    VisitComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.MasterDataService.GetInsurance().subscribe(function (policy) {
            _this.policies = policy;
            _this.filteredPolicies = _this.policyCtrl.valueChanges
                .startWith(_this.policyCtrl.value)
                .map(function (val) { return _this.displayPolicyFn(val); })
                .map(function (name) { return _this.filterPolicies(name); });
        });
        this.MasterDataService.GetDGUser().subscribe(function (doctor) {
            _this.doctors = doctor;
            _this.filteredDoctors = _this.doctorCtrl.valueChanges
                .startWith(_this.doctorCtrl.value)
                .map(function (val) { return _this.displayDoctorFn(val); })
                .map(function (name) { return _this.filterDoctors(name); });
        });
        this.MasterDataService.GetDepartment().subscribe(function (department) {
            _this.departments = department;
        });
        this.MasterDataService.GetPurposeOfVisit().subscribe(function (purposeOfVisit) {
            _this.purposeOfVisits = purposeOfVisit;
            _this.filteredPurposeOfVisits = _this.purposeOfVisitCtrl.valueChanges
                .startWith(_this.purposeOfVisitCtrl.value)
                .map(function (val) { return _this.displayPurposeOfVisitFn(val); })
                .map(function (name) { return _this.filterPurposeOfVisits(name); });
        });
        this.MasterDataService.GetMOHVisitType().subscribe(function (moh) {
            _this.mohs = moh;
            _this.filteredMOHs = _this.mohCtrl.valueChanges
                .startWith(_this.mohCtrl.value)
                .map(function (val) { return _this.displayMOHFn(val); })
                .map(function (name) { return _this.filterMOHs(name); });
        });
        this.MasterDataService.GetPayor().subscribe(function (payor) {
            _this.payors = payor;
            _this.filteredPayors = _this.payorCtrl.valueChanges
                .startWith(_this.payorCtrl.value)
                .map(function (val) { return _this.displayPayorFn(val); })
                .map(function (name) { return _this.filterPayors(name); });
        });
        this.MasterDataService.GetPatient().subscribe(function (patient) {
            _this.patients = patient;
            _this.filteredPatients = _this.patientCtrl.valueChanges
                .startWith(_this.patientCtrl.value)
                .map(function (val) { return _this.displayPatientFn(val); })
                .map(function (name) { return _this.filterPatients(name); });
        });
    };
    VisitComponent.prototype.onSave = function (goToEpisode) {
        var _this = this;
        if (goToEpisode === void 0) { goToEpisode = false; }
        this.visitdata.patientID = this.patientCtrl.value.patientID;
        this.visitdata.PayorID = this.payorCtrl.value.payorID;
        this.visitdata.MOHVisitTypeID = this.mohCtrl.value.mohVisitTypeID;
        this.visitdata.VisitPurposeID = this.purposeOfVisitCtrl.value.visitPurposeID;
        this.visitdata.VisitDoctorID = this.doctorCtrl.value.dgUserID;
        this.visitdata.InsuranceID = this.policyCtrl.value.insuranceID;
        if (this.visitdata.visitID) {
            this.MasterDataService.UpdateVisitByID(this.visitdata)
                .subscribe(function (x) {
                _this.GDService.openSnackBar('"' + x.visitNo + '" Updated Sucessfully!', 'Info');
            });
            if (goToEpisode) {
                this.router.navigate(['/episode/', this.visitdata.visitID]);
            }
        }
        else
            this.MasterDataService.CreateVisit(this.visitdata)
                .subscribe(function (x) {
                _this.GDService.openSnackBar('"' + x.visitNo + '" Created Sucessfully!', 'Info');
                if (goToEpisode) {
                    _this.router.navigate(['/episode/', x.visitID]);
                }
            });
    };
    VisitComponent.prototype.retrieveData = function () {
        var _this = this;
        this.MasterDataService.GetVisitByID(this.visitdata.visitID)
            .subscribe(function (m) {
            _this.visitdata = m;
            _this.patientCtrl = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"]({ patientID: m.patientResource.patientID, name: m.patientResource.name });
            _this.payorCtrl = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"]({ payorID: m.payorResource.payorID, payorName: m.payorResource.payorName });
            _this.mohCtrl = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"]({ mohVisitTypeID: m.mohVisitTypeResource.mohVisitTypeID, mohVisitTypeName: m.mohVisitTypeResource.mohVisitTypeName });
            _this.purposeOfVisitCtrl = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"]({ visitPurposeID: m.visitPurposeResource.visitPurposeID, visitPurposeName: m.visitPurposeResource.visitPurposeName });
            _this.doctorCtrl = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"]({ dgUserID: m.visitDoctorResource.dgUserID, userFullName: m.visitDoctorResource.userFullName });
            _this.policyCtrl = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"]({ insuranceID: m.insuranceResource.insuranceID, insuranceName: m.insuranceResource.insuranceName });
        }, function (err) {
            if (err.status == 404)
                _this.GDService.openSnackBar('Record Not Found!', 'Info');
        });
    };
    VisitComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'app-visit',
            template: __webpack_require__("../../../../../src/app/visit/visit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/visit/visit.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_GDService_service__["a" /* GDService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_GDService_service__["a" /* GDService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_masterdata_service__["a" /* MasterDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_masterdata_service__["a" /* MasterDataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _d || Object])
    ], VisitComponent);
    return VisitComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=visit.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map