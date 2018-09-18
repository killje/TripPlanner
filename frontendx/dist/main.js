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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#appContainer {\r\n    height:100%;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"appContainer\">\n    <app-map></app-map>\n</div>"

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
        this.title = 'FrontEnd';
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
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_openlayers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-openlayers */ "./node_modules/ngx-openlayers/dist/index.js");
/* harmony import */ var ngx_openlayers__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_openlayers__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _map_map_view_map_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./map/map-view/map-view.component */ "./src/app/map/map-view/map-view.component.ts");
/* harmony import */ var _map_map_list_map_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./map/map-list/map-list.component */ "./src/app/map/map-list/map-list.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _map_map_component__WEBPACK_IMPORTED_MODULE_5__["MapComponent"],
                _map_map_view_map_view_component__WEBPACK_IMPORTED_MODULE_6__["MapViewComponent"],
                _map_map_list_map_list_component__WEBPACK_IMPORTED_MODULE_7__["MapListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                ngx_openlayers__WEBPACK_IMPORTED_MODULE_3__["AngularOpenlayersModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/map/map-list/map-list.component.css":
/*!*****************************************************!*\
  !*** ./src/app/map/map-list/map-list.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n#mapListContainer {\r\n    flex-grow: 0;\r\n    width: 300px;\r\n    overflow-y: auto;\r\n    height: 100%;\r\n    background-color: #FFFFFF;\r\n}\r\n#openMapListButton {\r\n    display: none;\r\n    position: fixed;\r\n    top: 10px;\r\n    left: 10px;\r\n    z-index: 9999;\r\n}\r\n#closeMapListButton {\r\n    display: none;\r\n    position: absolute;\r\n    top: 10px;\r\n    right:10px;\r\n}\r\n.mapListHeader {\r\n    position: relative;\r\n    padding-left:16px;\r\n}\r\n.list-group-item-hover {\r\n    background-color: yellow;\r\n}\r\n@media (max-width: 767.98px) { \r\n    \r\n    #openMapListButton, #closeMapListButton {\r\n        display: block;\r\n    }\r\n    .hideMenu {\r\n        display: none !important;\r\n    }\r\n    #mapListContainer {\r\n        position: absolute;\r\n        width: 100%;\r\n        z-index: 9998;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/map/map-list/map-list.component.html":
/*!******************************************************!*\
  !*** ./src/app/map/map-list/map-list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"mapListContainer\" [class.hideMenu]=\"isMenuHidden\">\n    <div id=\"mapListGroup\" class=\"list-group\">\n        <h1 class=\"mapListHeader\">\n            Places <button id=\"closeMapListButton\" class=\"btn btn-outline-primary\" type=\"button\" (click)=\"closeMenu()\">X</button>\n        </h1>\n        <button class=\"btn mapPointItem list-group-item\" *ngFor=\"let mapPoint of mapPoints\" [class.active]=\"mapPoint.isActive()\" [class.list-group-item-hover]=\"mapPoint.isHoverd() && !mapPoint.isActive()\" (mouseenter)=\"mapPoint.setHoverdState(true)\" (mouseleave)=\"mapPoint.setHoverdState(false)\" (click)=\"setActive(mapPoint)\" type=\"button\">\n            <h1>{{mapPoint.getName()}}</h1>\n            <p>{{mapPoint.getDescription()}}</p>\n        </button>\n    </div>\n</div>\n<button id=\"openMapListButton\"  [class.hideMenu]=\"!isMenuHidden\" class=\"btn btn-outline-primary\" type=\"button\" (click)=\"openMenu()\">&gt;</button>"

/***/ }),

/***/ "./src/app/map/map-list/map-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/map/map-list/map-list.component.ts ***!
  \****************************************************/
/*! exports provided: MapListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapListComponent", function() { return MapListComponent; });
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

var MapListComponent = /** @class */ (function () {
    function MapListComponent() {
        this.isMenuHidden = true;
    }
    MapListComponent.prototype.ngOnInit = function () {
    };
    MapListComponent.prototype.openMenu = function () {
        this.isMenuHidden = false;
    };
    MapListComponent.prototype.closeMenu = function () {
        this.isMenuHidden = true;
    };
    MapListComponent.prototype.setActive = function (mapPoint) {
        for (var _i = 0, _a = this.mapPoints; _i < _a.length; _i++) {
            var current = _a[_i];
            current.setActiveState(false);
        }
        mapPoint.setActiveState(true);
        this.closeMenu();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MapListComponent.prototype, "mapPoints", void 0);
    MapListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map-list',
            template: __webpack_require__(/*! ./map-list.component.html */ "./src/app/map/map-list/map-list.component.html"),
            styles: [__webpack_require__(/*! ./map-list.component.css */ "./src/app/map/map-list/map-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MapListComponent);
    return MapListComponent;
}());



/***/ }),

/***/ "./src/app/map/map-point.ts":
/*!**********************************!*\
  !*** ./src/app/map/map-point.ts ***!
  \**********************************/
/*! exports provided: MapPoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPoint", function() { return MapPoint; });
var MapPoint = /** @class */ (function () {
    function MapPoint(name, description, x, y) {
        this.hoverd = false;
        this.active = false;
        this.name = name;
        this.description = description;
        this.x = x;
        this.y = y;
    }
    MapPoint.prototype.setHoverdState = function (isHoverd) {
        this.hoverd = isHoverd;
    };
    MapPoint.prototype.isHoverd = function () {
        return this.hoverd;
    };
    MapPoint.prototype.setActiveState = function (isActtive) {
        this.active = isActtive;
    };
    MapPoint.prototype.isActive = function () {
        return this.active;
    };
    MapPoint.prototype.getName = function () {
        return this.name;
    };
    MapPoint.prototype.getDescription = function () {
        return this.description;
    };
    MapPoint.prototype.getX = function () {
        return this.x;
    };
    MapPoint.prototype.getY = function () {
        return this.y;
    };
    return MapPoint;
}());



/***/ }),

/***/ "./src/app/map/map-view/map-view.component.css":
/*!*****************************************************!*\
  !*** ./src/app/map/map-view/map-view.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-map-view {\r\n    flex-grow: 1;\r\n    height:100%;\r\n    width:100%;\r\n}\r\n\r\n#mapViewContainer {\r\n    max-height: 100%;\r\n    height:100%;\r\n}\r\n\r\naol-map {\r\n    max-height: 100%;\r\n    height:100%;\r\n    width:100%;\r\n}"

/***/ }),

/***/ "./src/app/map/map-view/map-view.component.html":
/*!******************************************************!*\
  !*** ./src/app/map/map-view/map-view.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div id=\"mapViewContainer\">\n    <aol-map [renderer]=\"'canvas'\" (onMoveEnd)=\"onMoveEnd($event)\" (onPostRender)=\"onPostRender($event)\">\n        <aol-interaction-default></aol-interaction-default>\n        <aol-view [zoom]=\"zoom\">\n            <aol-coordinate [x]=\"lat\" [y]=\"lng\"></aol-coordinate>\n        </aol-view>\n        <aol-layer-tile [opacity]=\"opacity\">\n            <aol-source-osm></aol-source-osm>\n        </aol-layer-tile>\n        <aol-layer-vector [opacity]=\"opacity\">\n            <aol-source-vector>\n                <aol-feature>\n                    <aol-control-attribution></aol-control-attribution>\n                </aol-feature>\n                <aol-feature *ngFor=\"let mapPoint of mapPoints; let i=index\" [id]=\"'mapPoint-' + i\">\n                    <aol-geometry-point>\n                        <aol-coordinate [x]=\"mapPoint.getX()\" [y]=\"mapPoint.getY()\" ></aol-coordinate>\n                    </aol-geometry-point>\n                    <aol-style>\n                        <aol-style-circle [radius]=\"10\">\n                            <aol-style-stroke [color]=\"'black'\" [width]=\"width\"></aol-style-stroke>\n                            <aol-style-fill [color]=\"mapPoint.isActive() ? 'green' : mapPoint.isHoverd() ? 'yellow' : 'red'\"></aol-style-fill>\n                        </aol-style-circle>\n                    </aol-style>\n                </aol-feature>\n            </aol-source-vector>\n        </aol-layer-vector>\n    </aol-map>\n</div>"

/***/ }),

/***/ "./src/app/map/map-view/map-view.component.ts":
/*!****************************************************!*\
  !*** ./src/app/map/map-view/map-view.component.ts ***!
  \****************************************************/
/*! exports provided: MapViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapViewComponent", function() { return MapViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var openlayers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! openlayers */ "./node_modules/openlayers/dist/ol.js");
/* harmony import */ var openlayers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(openlayers__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MapViewComponent = /** @class */ (function () {
    function MapViewComponent() {
        this.zoom = 15;
        this.opacity = 1.0;
        this.width = 5;
        this.lat = 727640.686966983;
        this.lng = 7027557.9083128;
        this.select = null;
        this.selectElement = document.getElementById('type');
        this.selectClick = new openlayers__WEBPACK_IMPORTED_MODULE_1__["interaction"].Select({
            condition: openlayers__WEBPACK_IMPORTED_MODULE_1__["events"].condition.click
        });
        this.selectPointerMove = new openlayers__WEBPACK_IMPORTED_MODULE_1__["interaction"].Select({
            condition: openlayers__WEBPACK_IMPORTED_MODULE_1__["events"].condition.pointerMove
        });
    }
    MapViewComponent.prototype.onPostRender = function (mapEvent) {
        mapEvent.map.addInteraction(this.selectClick);
        mapEvent.map.addInteraction(this.selectPointerMove);
        var mapPoints = this.mapPoints;
        this.selectClick.on('select', function (e) {
            for (var _i = 0, mapPoints_1 = mapPoints; _i < mapPoints_1.length; _i++) {
                var mapPoint = mapPoints_1[_i];
                mapPoint.setActiveState(false);
            }
            for (var _a = 0, _b = e.selected; _a < _b.length; _a++) {
                var selected = _b[_a];
                var match = selected.getId().toString().match(/mapPoint-(\d*)/);
                if (match == null) {
                    continue;
                }
                mapPoints[Number.parseInt(match[1])].setActiveState(true);
                return;
            }
        });
        this.selectPointerMove.on('select', function (e) {
            for (var _i = 0, mapPoints_2 = mapPoints; _i < mapPoints_2.length; _i++) {
                var mapPoint = mapPoints_2[_i];
                mapPoint.setHoverdState(false);
            }
            for (var _a = 0, _b = e.selected; _a < _b.length; _a++) {
                var selected = _b[_a];
                var match = selected.getId().toString().match(/mapPoint-(\d*)/);
                if (match == null) {
                    continue;
                }
                mapPoints[Number.parseInt(match[1])].setHoverdState(true);
                return;
            }
        });
    };
    MapViewComponent.prototype.ngOnInit = function () {
    };
    MapViewComponent.prototype.onMoveEnd = function (event) {
        console.log(event.map.getView().getCenter());
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MapViewComponent.prototype, "mapPoints", void 0);
    MapViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map-view',
            template: __webpack_require__(/*! ./map-view.component.html */ "./src/app/map/map-view/map-view.component.html"),
            styles: [__webpack_require__(/*! ./map-view.component.css */ "./src/app/map/map-view/map-view.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MapViewComponent);
    return MapViewComponent;
}());



/***/ }),

/***/ "./src/app/map/map.component.css":
/*!***************************************!*\
  !*** ./src/app/map/map.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#mapContainer {\r\n    height:100%;\r\n    display:flex;\r\n    flex-direction: row;\r\n}\r\napp-map-view {\r\n    flex-grow: 1;\r\n    height:100%;\r\n    width:100%;\r\n}"

/***/ }),

/***/ "./src/app/map/map.component.html":
/*!****************************************!*\
  !*** ./src/app/map/map.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"mapContainer\">\n    <app-map-list [mapPoints]=\"mapPoints\"></app-map-list>\n    <app-map-view [mapPoints]=\"mapPoints\"></app-map-view>\n</div>"

/***/ }),

/***/ "./src/app/map/map.component.ts":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _map_point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map-point */ "./src/app/map/map-point.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MapComponent = /** @class */ (function () {
    function MapComponent() {
        this.mapPoints = [];
        this.mapPoints.push(new _map_point__WEBPACK_IMPORTED_MODULE_1__["MapPoint"]("BB", "Bernouliborg", 727640.686966983, 7027557.9083128));
        this.mapPoints.push(new _map_point__WEBPACK_IMPORTED_MODULE_1__["MapPoint"]("EA", "Energy academy", 727792.375138526, 7027521.482854965));
        this.mapPoints.push(new _map_point__WEBPACK_IMPORTED_MODULE_1__["MapPoint"]("NB", "NijenBorg", 727837.4443462458, 7027252.353320077));
    }
    MapComponent.prototype.ngOnInit = function () {
    };
    MapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.component.html */ "./src/app/map/map.component.html"),
            styles: [__webpack_require__(/*! ./map.component.css */ "./src/app/map/map.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MapComponent);
    return MapComponent;
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\@NeatbeansProjects\TripPlanner\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map