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

/***/ "./src/app/api/trip.service.ts":
/*!*************************************!*\
  !*** ./src/app/api/trip.service.ts ***!
  \*************************************/
/*! exports provided: TripService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripService", function() { return TripService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _trip_trip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trip/trip */ "./src/app/api/trip/trip.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TripService = /** @class */ (function () {
    function TripService(http) {
        this.http = http;
    }
    TripService.prototype.createTrip = function (destination, days) {
        var url = "api/trips/store";
        var tripResponse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        var params = {
            "name": destination,
            "number_of_days": days.toString()
        };
        this.http.post(url, params).subscribe(function (response) {
            var trip = new _trip_trip__WEBPACK_IMPORTED_MODULE_2__["Trip"]();
            trip.uuid = response.uuid;
            trip.name = destination;
            trip.number_of_days = days;
            trip.venues = [];
            tripResponse.emit(trip);
        });
        return tripResponse;
    };
    TripService.prototype.getTrip = function (id) {
        var url = "api/trips/show";
        var tripResponse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        var params = {
            "uuid": id.toString()
        };
        this.http.get(url, { params: params }).subscribe(function (response) {
            tripResponse.emit(new _trip_trip__WEBPACK_IMPORTED_MODULE_2__["Trip"](response.data));
        });
        return tripResponse;
    };
    TripService.prototype.addVenue = function (tripId, venueId) {
        var url = "api/trips/addVenue";
        var success = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        var params = {
            "uuid": tripId,
            "venue_id": venueId
        };
        this.http.post(url, params).subscribe(function (response) {
            success.emit(true);
        });
        return success;
    };
    TripService.prototype.removeVenue = function (tripId, venueId) {
        var url = "api/trips/removeVenue";
        var success = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        var params = {
            "uuid": tripId,
            "venue_id": venueId
        };
        this.http.post(url, params).subscribe(function (response) {
            success.emit(true);
        });
        return success;
    };
    TripService.prototype.setCurrentTrip = function (trip) {
        this.currentTrip = trip;
    };
    TripService.prototype.getCurrentTrip = function () {
        return this.currentTrip;
    };
    TripService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TripService);
    return TripService;
}());



/***/ }),

/***/ "./src/app/api/trip/trip.ts":
/*!**********************************!*\
  !*** ./src/app/api/trip/trip.ts ***!
  \**********************************/
/*! exports provided: Trip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Trip", function() { return Trip; });
var Trip = /** @class */ (function () {
    function Trip(intf) {
        if (intf == undefined) {
            return;
        }
        this.id = intf.id;
        this.uuid = intf.uuid;
        this.name = intf.name;
        this.number_of_days = intf.number_of_days;
        this.created_by = intf.created_by;
        this.created_at = intf.created_at;
        this.updated_at = intf.updated_at;
        this.venues = intf.venues;
    }
    Trip.prototype.getDaysFormatted = function () {
        if (this.number_of_days == 1) {
            return this.number_of_days.toString() + " day";
        }
        else {
            return this.number_of_days.toString() + " days";
        }
    };
    return Trip;
}());



/***/ }),

/***/ "./src/app/api/venue.service.ts":
/*!**************************************!*\
  !*** ./src/app/api/venue.service.ts ***!
  \**************************************/
/*! exports provided: VenueService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VenueService", function() { return VenueService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _venue_venue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./venue/venue */ "./src/app/api/venue/venue.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VenueService = /** @class */ (function () {
    function VenueService(http) {
        this.http = http;
        this.venues = [];
        this.venueSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.venueDeSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.venueHovered = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.venueDeHovered = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.venuesUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    VenueService.prototype.lookUpByCoords = function (longitude, latitude, radius) {
        var _this = this;
        var url = "api/venues/lookupbycoords";
        var params = {
            "longitude": longitude.toString(),
            "latitude": latitude.toString(),
            "radius": radius.toString()
        };
        this.http.get(url, { params: params }).subscribe(function (venues) {
            while (_this.venues.length > 0) {
                _this.venues.pop();
            }
            venues.forEach(function (venueInterface) {
                var venue = new _venue_venue__WEBPACK_IMPORTED_MODULE_2__["Venue"](venueInterface);
                venue.stateUpdate.subscribe(function (event) {
                    if (event.getEmitedState() == "active") {
                        if (event.getEmitedValue()) {
                            if (_this.selectedVenue != null) {
                                _this.selectedVenue.setActive(false);
                                _this.venueDeSelected.emit(_this.selectedVenue);
                            }
                            _this.selectedVenue = event.getVenue();
                            _this.venueSelected.emit(_this.selectedVenue);
                        }
                        else if (_this.selectedVenue = event.getVenue()) {
                            _this.venueDeSelected.emit(_this.selectedVenue);
                            _this.selectedVenue = null;
                        }
                    }
                    else if (event.getEmitedState() == "hovered") {
                        if (event.getEmitedValue()) {
                            if (_this.hoveredVenue != null) {
                                _this.hoveredVenue.setHovered(false);
                                _this.venueDeHovered.emit(_this.hoveredVenue);
                            }
                            _this.hoveredVenue = event.getVenue();
                            _this.venueHovered.emit(_this.hoveredVenue);
                        }
                        else if (_this.hoveredVenue = event.getVenue()) {
                            _this.venueDeHovered.emit(_this.hoveredVenue);
                            _this.hoveredVenue = null;
                        }
                    }
                });
                _this.venues.push(venue);
            });
            _this.venuesUpdated.emit(_this.venues);
        });
    };
    VenueService.prototype.getFeaturedByLocation = function (query) {
        var _this = this;
        var url = "api/venues/featuredbyname";
        var params = {
            "query": query
        };
        this.http.get(url, { params: params }).subscribe(function (venues) {
            while (_this.venues.length > 0) {
                _this.venues.pop();
            }
            venues.forEach(function (venueInterface) {
                var venue = new _venue_venue__WEBPACK_IMPORTED_MODULE_2__["Venue"](venueInterface);
                venue.stateUpdate.subscribe(function (event) {
                    if (event.getEmitedState() == "active") {
                        if (event.getEmitedValue()) {
                            if (_this.selectedVenue != null) {
                                _this.selectedVenue.setActive(false);
                                _this.venueDeSelected.emit(_this.selectedVenue);
                            }
                            _this.selectedVenue = event.getVenue();
                            _this.venueSelected.emit(_this.selectedVenue);
                        }
                        else if (_this.selectedVenue = event.getVenue()) {
                            _this.venueDeSelected.emit(_this.selectedVenue);
                            _this.selectedVenue = null;
                        }
                    }
                    else if (event.getEmitedState() == "hovered") {
                        if (event.getEmitedValue()) {
                            if (_this.hoveredVenue != null) {
                                _this.hoveredVenue.setHovered(false);
                                _this.venueDeHovered.emit(_this.hoveredVenue);
                            }
                            _this.hoveredVenue = event.getVenue();
                            _this.venueHovered.emit(_this.hoveredVenue);
                        }
                        else if (_this.hoveredVenue = event.getVenue()) {
                            _this.venueDeHovered.emit(_this.hoveredVenue);
                            _this.hoveredVenue = null;
                        }
                    }
                });
                _this.venues.push(venue);
            });
            _this.venuesUpdated.emit(_this.venues);
        });
    };
    VenueService.prototype.getVenues = function () {
        return this.venues;
    };
    VenueService.prototype.getVenueById = function (id) {
        for (var _i = 0, _a = this.venues; _i < _a.length; _i++) {
            var venue = _a[_i];
            if (venue.id == id) {
                return venue;
            }
        }
        return null;
    };
    VenueService.prototype.getSelectedVenue = function () {
        return this.selectedVenue;
    };
    VenueService.prototype.deselectSelectedVenue = function () {
        if (this.selectedVenue != null) {
            this.selectedVenue.setActive(false);
        }
    };
    VenueService.prototype.deselectHoveredVenue = function () {
        if (this.hoveredVenue != null) {
            this.hoveredVenue.setHovered(false);
        }
    };
    VenueService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], VenueService);
    return VenueService;
}());



/***/ }),

/***/ "./src/app/api/venue/venue.ts":
/*!************************************!*\
  !*** ./src/app/api/venue/venue.ts ***!
  \************************************/
/*! exports provided: Venue, VenueStateEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Venue", function() { return Venue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VenueStateEvent", function() { return VenueStateEvent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var Venue = /** @class */ (function () {
    function Venue(intf) {
        this.hovered = false;
        this.active = false;
        this.stateUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        if (intf == undefined) {
            return;
        }
        this.id = intf.id;
        this.name = intf.name;
        this.address = intf.address;
        this.latitude = intf.latitude;
        this.longitude = intf.longitude;
        this.categories = intf.categories;
        this.url = intf.url;
        this.openingHours = intf.openingHours;
        this.popularHours = intf.popularHours;
        this.price = intf.price;
        this.rating = intf.rating;
        this.ratingColor = intf.ratingColor;
        this.peopleNow = intf.peopleNow;
        this.likes = intf.likes;
    }
    Venue.prototype.setHovered = function (isHovered) {
        this.stateUpdate.emit(new VenueStateEvent(this, 'hovered', isHovered));
        this.hovered = isHovered;
    };
    Venue.prototype.isHovered = function () {
        return this.hovered;
    };
    Venue.prototype.setActive = function (isActive) {
        this.stateUpdate.emit(new VenueStateEvent(this, 'active', isActive));
        this.active = isActive;
    };
    Venue.prototype.isActive = function () {
        return this.active;
    };
    return Venue;
}());

var VenueStateEvent = /** @class */ (function () {
    function VenueStateEvent(venue, emitedState, emitedValue) {
        this.venue = venue;
        this.emitedState = emitedState;
        this.emitedValue = emitedValue;
    }
    VenueStateEvent.prototype.getVenue = function () {
        return this.venue;
    };
    VenueStateEvent.prototype.getEmitedState = function () {
        return this.emitedState;
    };
    VenueStateEvent.prototype.getEmitedValue = function () {
        return this.emitedValue;
    };
    return VenueStateEvent;
}());



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

module.exports = "<div id=\"appContainer\">\n    <router-outlet></router-outlet>\n</div>"

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
/* harmony import */ var ngx_openlayers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-openlayers */ "./node_modules/ngx-openlayers/dist/index.js");
/* harmony import */ var ngx_openlayers__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_openlayers__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _map_map_view_map_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./map/map-view/map-view.component */ "./src/app/map/map-view/map-view.component.ts");
/* harmony import */ var _map_map_list_map_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./map/map-list/map-list.component */ "./src/app/map/map-list/map-list.component.ts");
/* harmony import */ var _front_page_front_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./front-page/front-page.component */ "./src/app/front-page/front-page.component.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _map_map_view_info_box_info_box_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./map/map-view/info-box/info-box.component */ "./src/app/map/map-view/info-box/info-box.component.ts");
/* harmony import */ var _form_label_input_label_input_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./form/label-input/label-input.component */ "./src/app/form/label-input/label-input.component.ts");
/* harmony import */ var _form_only_number_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./form/only-number.directive */ "./src/app/form/only-number.directive.ts");
/* harmony import */ var _trip_trip_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./trip/trip.component */ "./src/app/trip/trip.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var appRoutes = [
    { path: '', component: _front_page_front_page_component__WEBPACK_IMPORTED_MODULE_11__["FrontPageComponent"] },
    { path: 'trip', component: _trip_trip_component__WEBPACK_IMPORTED_MODULE_17__["TripComponent"] },
    { path: 'trip/:id', component: _trip_trip_component__WEBPACK_IMPORTED_MODULE_17__["TripComponent"] },
    { path: 'map', component: _map_map_component__WEBPACK_IMPORTED_MODULE_8__["MapComponent"] },
    { path: '**', component: _front_page_front_page_component__WEBPACK_IMPORTED_MODULE_11__["FrontPageComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _map_map_component__WEBPACK_IMPORTED_MODULE_8__["MapComponent"],
                _map_map_view_map_view_component__WEBPACK_IMPORTED_MODULE_9__["MapViewComponent"],
                _map_map_list_map_list_component__WEBPACK_IMPORTED_MODULE_10__["MapListComponent"],
                _front_page_front_page_component__WEBPACK_IMPORTED_MODULE_11__["FrontPageComponent"],
                _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_12__["NavBarComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
                _map_map_view_info_box_info_box_component__WEBPACK_IMPORTED_MODULE_14__["InfoBoxComponent"],
                _form_label_input_label_input_component__WEBPACK_IMPORTED_MODULE_15__["LabelInputComponent"],
                _form_only_number_directive__WEBPACK_IMPORTED_MODULE_16__["OnlyNumberDirective"],
                _trip_trip_component__WEBPACK_IMPORTED_MODULE_17__["TripComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                ),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                ngx_openlayers__WEBPACK_IMPORTED_MODULE_3__["AngularOpenlayersModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCollapseModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \n  .footer {\n    bottom: 0;\n    width: 100%;\n    /* Set the fixed height of the footer here */\n    height: 60px;\n    line-height: 60px;\n    /* Vertically center the text there */\n    background-color: #f5f5f5;\n  }\n\n  .footer-spacing {\n    padding-bottom: 60px;\n  }"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"footer-spacing\"></div>\n<footer class=\"footer bg-dark\">\n    <div class=\"container text-center\">\n      <span class=\"text-light\">Made with ❤</span>\n    </div>\n  </footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/form/label-input/label-input.component.css":
/*!************************************************************!*\
  !*** ./src/app/form/label-input/label-input.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-label-input {\r\n    padding-top: 22px;\r\n    position: relative;\r\n}\r\n\r\n.form-has-content .form-label {\r\n    top: -8px;\r\n    padding-left: 0;\r\n}\r\n\r\n.form-label {\r\n    position: absolute;\r\n    padding: .375rem .75rem;\r\n    transition: all .5s ease;\r\n    top: 22px;\r\n}\r\n\r\n.form-label-input .form-control {\r\n    background: none;\r\n    border: none;\r\n    border-bottom: 1px solid #ced4da;\r\n    border-radius: 0;\r\n    margin-bottom: 2px;\r\n    display: inline-block;\r\n}\r\n\r\n.form-label-input .form-control:focus {\r\n    border-bottom: 3px solid rgba(0,123,255,.25);\r\n    margin-bottom: 0px;\r\n    box-shadow: none;\r\n}\r\n\r\n.form-label-input .form-control:-moz-ui-invalid, .form-label-input .form-control:invalid, .form-label-input.has-danger .form-control  {\r\n    border-bottom: 3px solid rgba(255,77,77,.75);\r\n    margin-bottom: 0px;\r\n    box-shadow: none;\r\n}"

/***/ }),

/***/ "./src/app/form/label-input/label-input.component.html":
/*!*************************************************************!*\
  !*** ./src/app/form/label-input/label-input.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group form-label-input\" [class.form-has-content]=\"value|| isFocused\" [class.has-danger]=\"error\">\n     <label class=\"form-label\" [for]=\"id\">\n        {{name}}\n    </label>\n    <div class=\"form-control-container\">\n        <input class=\"form-control\" [type]=\"type\" [id]=\"id\" [attr.aria-describedby]=\"description\" (focus)=\"focusEvent()\" (blur)=\"blurEvent()\" [ngModel]=\"value\" (ngModelChange)=\"setValue($event)\">\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/form/label-input/label-input.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/form/label-input/label-input.component.ts ***!
  \***********************************************************/
/*! exports provided: LabelInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelInputComponent", function() { return LabelInputComponent; });
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

var LabelInputComponent = /** @class */ (function () {
    function LabelInputComponent() {
        this.type = "text";
        this.description = "";
        this.value = "";
        this.error = false;
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isFocused = false;
    }
    LabelInputComponent.prototype.ngOnInit = function () {
    };
    LabelInputComponent.prototype.focusEvent = function () {
        this.isFocused = true;
    };
    LabelInputComponent.prototype.blurEvent = function () {
        this.isFocused = false;
    };
    LabelInputComponent.prototype.setValue = function (value) {
        this.value = value;
        this.valueChange.emit(value);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], LabelInputComponent.prototype, "name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], LabelInputComponent.prototype, "id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], LabelInputComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], LabelInputComponent.prototype, "description", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], LabelInputComponent.prototype, "value", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], LabelInputComponent.prototype, "error", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], LabelInputComponent.prototype, "valueChange", void 0);
    LabelInputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-label-input',
            template: __webpack_require__(/*! ./label-input.component.html */ "./src/app/form/label-input/label-input.component.html"),
            styles: [__webpack_require__(/*! ./label-input.component.css */ "./src/app/form/label-input/label-input.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LabelInputComponent);
    return LabelInputComponent;
}());



/***/ }),

/***/ "./src/app/form/only-number.directive.ts":
/*!***********************************************!*\
  !*** ./src/app/form/only-number.directive.ts ***!
  \***********************************************/
/*! exports provided: OnlyNumberDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlyNumberDirective", function() { return OnlyNumberDirective; });
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

var OnlyNumberDirective = /** @class */ (function () {
    function OnlyNumberDirective() {
    }
    OnlyNumberDirective.prototype.onKeyDown = function (event) {
        var e = event;
        if (!this.OnlyNumber) {
            return;
        }
        if ([46, 8, 9, 27, 13].indexOf(e.which) !== -1 ||
            // Allow: Ctrl+A
            (e.which === 65 && (e.ctrlKey || e.metaKey)) ||
            // Allow: Ctrl+C
            (e.which === 67 && (e.ctrlKey || e.metaKey)) ||
            // Allow: Ctrl+V
            (e.which === 86 && (e.ctrlKey || e.metaKey)) ||
            // Allow: Ctrl+X
            (e.which === 88 && (e.ctrlKey || e.metaKey)) ||
            // Allow: home, end, left, right
            (e.which >= 35 && e.which <= 39)) {
            // let it happen, don't do anything
            return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.which < 48 || e.which > 57)) && (e.which < 96 || e.which > 105)) {
            e.preventDefault();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], OnlyNumberDirective.prototype, "OnlyNumber", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], OnlyNumberDirective.prototype, "onKeyDown", null);
    OnlyNumberDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[OnlyNumber]'
        }),
        __metadata("design:paramtypes", [])
    ], OnlyNumberDirective);
    return OnlyNumberDirective;
}());



/***/ }),

/***/ "./src/app/front-page/front-page.component.css":
/*!*****************************************************!*\
  !*** ./src/app/front-page/front-page.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n#frontPageContainer {\r\n    background-color: #CCCCCC;\r\n    padding: 16px;\r\n}\r\n\r\n#header {\r\n    background-color: #3a90e0;\r\n}\r\n\r\n#frontPageContent {\r\n    max-width:850px;\r\n    background-color: #FFFFFF;\r\n    margin: 0 auto;\r\n    padding: 26px 0;\r\n    box-shadow: -10px -5px 22px -6px rgba(0,0,0,0.75);\r\n}\r\n\r\n#frontPageContent > div {\r\n    padding: 0 26px;\r\n    margin-bottom: 26px;\r\n}\r\n\r\n#mapButtonContainer {\r\n    margin-bottom: 26px;\r\n}\r\n\r\n#mapButtonContainer button {\r\n    width:100%;\r\n}\r\n\r\n#title {\r\n    margin-bottom: 26px;\r\n    text-align: center;\r\n}\r\n\r\n@media (max-width: 767.98px) { \r\n    #frontPageContainer {\r\n        background-color: #FFFFFF;\r\n        padding: 16px 0;\r\n    }\r\n    #frontPageContent {\r\n        max-width: 100%;\r\n        margin: 0;\r\n        padding: 0;\r\n        box-shadow: none;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/front-page/front-page.component.html":
/*!******************************************************!*\
  !*** ./src/app/front-page/front-page.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"frontPageContainer\">\n    <div id=\"frontPageContent\">\n        <div id=\"mapButtonContainer\">\n            <div id=\"mapButtonContent\">\n                <button type=\"button\" class=\"btn btn-primary btn-lg\" routerLink=\"/trip\" routerLinkActive=\"active\">Select your Activities</button>\n            </div>\n        </div>\n        <div id=\"header\">\n            <div class=\"text-center\">\n                <img class=\"img-fluid\" src=\"assets/logo.png\" />\n            </div>\n        </div>\n        <div id=\"frontPageDescription\">\n            <p>City Trip Planner</p>\n            <p>\n                Ever thought about going to New York, London, Paris or Amsterdam and wanted to see everyting that city has to offer?\n\t\t\t\tIf the answer is a resouding yes, then you know the struggle of planning all these different events and activities.\n\t\t\t\tWith City Trip Planner you don't have to stress out about anything, we will help you with your planning.\n\t\t\t</p>\n            <p>\n               With our service you are able to plan city trips very easy by selecting different venues on our map.\n\t\t\t   We will then make an optimized route for you on the map, so you can track which venues to go to next.\n\t\t\t   We will also give you a list of venues for easy management and general information.\n\t\t\t   Are you spending more days in a city, no problem out service will also be able to span the venues out over multiple days.\n\t\t\t</p>\n\t\t\t<p>\n\t\t\t   Keeping track of places to visit and sites to see was never this easy.\n\t\t\t   Now with City Trip Planner visiting new cities will be an absolute joy.\n\t\t\t</p>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/front-page/front-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/front-page/front-page.component.ts ***!
  \****************************************************/
/*! exports provided: FrontPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrontPageComponent", function() { return FrontPageComponent; });
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

var FrontPageComponent = /** @class */ (function () {
    function FrontPageComponent() {
    }
    FrontPageComponent.prototype.ngOnInit = function () {
    };
    FrontPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-front-page',
            template: __webpack_require__(/*! ./front-page.component.html */ "./src/app/front-page/front-page.component.html"),
            styles: [__webpack_require__(/*! ./front-page.component.css */ "./src/app/front-page/front-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FrontPageComponent);
    return FrontPageComponent;
}());



/***/ }),

/***/ "./src/app/map/map-list/map-list.component.css":
/*!*****************************************************!*\
  !*** ./src/app/map/map-list/map-list.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n#mapListContainer {\r\n    flex-grow: 0;\r\n    width: 300px;\r\n    overflow-y: auto;\r\n    height: 100%;\r\n    background-color: #FFFFFF;\r\n}\r\n#openMapListButton {\r\n    display: none;\r\n    position: absolute;\r\n    top: 10px;\r\n    left: 10px;\r\n    z-index: 9999;\r\n}\r\n#closeMapListButton {\r\n    display: none;\r\n    position: absolute;\r\n    top: 10px;\r\n    right:10px;\r\n}\r\n.mapListHeader {\r\n    position: relative;\r\n    padding-left:16px;\r\n}\r\n.list-group-item-hover {\r\n    background-color: yellow;\r\n}\r\n.addressLine {\r\n    margin: 0;\r\n}\r\n.mapPointItem {\r\n    overflow-x: hidden;\r\n}\r\n@media (max-width: 767.98px) { \r\n    \r\n    #openMapListButton, #closeMapListButton {\r\n        display: block;\r\n    }\r\n    .hideMenu {\r\n        display: none !important;\r\n    }\r\n    #mapListContainer {\r\n        position: absolute;\r\n        width: 100%;\r\n        z-index: 9998;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/map/map-list/map-list.component.html":
/*!******************************************************!*\
  !*** ./src/app/map/map-list/map-list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"mapListContainer\" [class.hideMenu]=\"isMenuHidden\">\n    <div id=\"mapListGroup\" class=\"list-group\">\n        <h1 class=\"mapListHeader\">\n            Places <button id=\"closeMapListButton\" class=\"btn btn-outline-primary\" type=\"button\" (click)=\"closeMenu()\">X</button>\n        </h1>\n        <button class=\"btn mapPointItem list-group-item\" *ngFor=\"let venue of venues\" [class.active]=\"venue.isActive()\" [class.list-group-item-hover]=\"venue.isHovered() && !venue.isActive()\" (mouseenter)=\"venue.setHovered(true)\" (mouseleave)=\"venue.setHovered(false)\" (click)=\"setActive(venue)\" type=\"button\">\n            <h2 class=\"venueName\">{{venue.name}}</h2>\n            <div class=\"venueAddress\">\n                <p class=\"addressLine\" *ngFor=\"let addressLine of venue.address\">{{addressLine}}</p>\n            </div>\n        </button>\n    </div>\n</div>\n<button id=\"openMapListButton\"  [class.hideMenu]=\"!isMenuHidden\" class=\"btn btn-primary\" type=\"button\" (click)=\"openMenu()\">&gt;</button>"

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
/* harmony import */ var _api_venue_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/venue.service */ "./src/app/api/venue.service.ts");
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
    function MapListComponent(venueService) {
        this.venueService = venueService;
        this.isMenuHidden = true;
        this.venues = this.venueService.getVenues();
    }
    MapListComponent.prototype.ngOnInit = function () {
    };
    MapListComponent.prototype.openMenu = function () {
        this.isMenuHidden = false;
    };
    MapListComponent.prototype.closeMenu = function () {
        this.isMenuHidden = true;
    };
    MapListComponent.prototype.setActive = function (venue) {
        this.venues.forEach(function (venue) { venue.setActive(false); });
        venue.setActive(true);
        this.closeMenu();
    };
    MapListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map-list',
            template: __webpack_require__(/*! ./map-list.component.html */ "./src/app/map/map-list/map-list.component.html"),
            styles: [__webpack_require__(/*! ./map-list.component.css */ "./src/app/map/map-list/map-list.component.css")]
        }),
        __metadata("design:paramtypes", [_api_venue_service__WEBPACK_IMPORTED_MODULE_1__["VenueService"]])
    ], MapListComponent);
    return MapListComponent;
}());



/***/ }),

/***/ "./src/app/map/map-view/info-box/info-box.component.css":
/*!**************************************************************!*\
  !*** ./src/app/map/map-view/info-box/info-box.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n#infoBoxContainer {\n    background-color: #FFFFFF;\n    border: 1px solid #000000;\n    border-radius: 5px;\n    padding: 10px 20px;\n    max-width: 600px;\n}\n\n.addressLine {\n    margin: 0;\n}\n\n@media (max-width: 575.98px) { \n\n    #infoBoxContainer {\n        max-width: 250px;\n    }\n    \n}"

/***/ }),

/***/ "./src/app/map/map-view/info-box/info-box.component.html":
/*!***************************************************************!*\
  !*** ./src/app/map/map-view/info-box/info-box.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"infoBoxContainer\" *ngIf=\"selectedVenue\">\n    <h2>{{selectedVenue.name}}</h2>\n    <div id=\"venueAddress\">\n        <p class=\"addressLine\" *ngFor=\"let addressLine of selectedVenue.address\">{{addressLine}}</p>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/map/map-view/info-box/info-box.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/map/map-view/info-box/info-box.component.ts ***!
  \*************************************************************/
/*! exports provided: InfoBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoBoxComponent", function() { return InfoBoxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_venue_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../api/venue.service */ "./src/app/api/venue.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InfoBoxComponent = /** @class */ (function () {
    function InfoBoxComponent(venueService) {
        var _this = this;
        this.venueService = venueService;
        this.selectedVenue = null;
        venueService.venueSelected.subscribe(function (venue) {
            _this.selectedVenue = venue;
        });
        venueService.venueDeSelected.subscribe(function (venue) {
            _this.selectedVenue = null;
        });
    }
    InfoBoxComponent.prototype.ngOnInit = function () {
    };
    InfoBoxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-info-box',
            template: __webpack_require__(/*! ./info-box.component.html */ "./src/app/map/map-view/info-box/info-box.component.html"),
            styles: [__webpack_require__(/*! ./info-box.component.css */ "./src/app/map/map-view/info-box/info-box.component.css")]
        }),
        __metadata("design:paramtypes", [_api_venue_service__WEBPACK_IMPORTED_MODULE_1__["VenueService"]])
    ], InfoBoxComponent);
    return InfoBoxComponent;
}());



/***/ }),

/***/ "./src/app/map/map-view/map-view.component.css":
/*!*****************************************************!*\
  !*** ./src/app/map/map-view/map-view.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-map-view {\r\n    flex-grow: 1;\r\n    height:100%;\r\n    width:100%;\r\n}\r\n\r\n#mapViewContainer {\r\n    max-height: 100%;\r\n    height:100%;\r\n}\r\n\r\naol-map {\r\n    max-height: 100%;\r\n    height:100%;\r\n    width:100%;\r\n}\r\n\r\n::ng-deep div.ol-attribution{\r\n    position: absolute;\r\n    bottom: 0;\r\n    right: 0;\r\n    background-color: #FFFFFF;\r\n}\r\n\r\n::ng-deep .ol-attribution ul {\r\n    display: inline;\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style: none;\r\n}\r\n\r\n::ng-deep .ol-attribution li {\r\n    display: inline-block;\r\n    margin: 0 10px;\r\n}\r\n\r\n::ng-deep .ol-attribution button {\r\n    display: inline-block;\r\n    margin: 0 10px 0 0;\r\n}"

/***/ }),

/***/ "./src/app/map/map-view/map-view.component.html":
/*!******************************************************!*\
  !*** ./src/app/map/map-view/map-view.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div id=\"mapViewContainer\">\n    <aol-map [renderer]=\"'canvas'\" (onMoveEnd)=\"onMoveEnd($event)\">\n        <aol-interaction-default></aol-interaction-default>\n        <aol-view [zoom]=\"zoom\">\n            <aol-coordinate [x]=\"lat\" [y]=\"lng\"></aol-coordinate>\n        </aol-view>\n        <aol-layer-tile [opacity]=\"opacity\">\n            <aol-source-osm></aol-source-osm>\n        </aol-layer-tile>\n        <aol-layer-vector [opacity]=\"opacity\">\n            <aol-source-vector>\n                <aol-feature>\n                    <aol-control-attribution></aol-control-attribution>\n                </aol-feature>\n                <aol-feature *ngFor=\"let venue of venues; let i=index\" [id]=\"'venue-' + venue.id\">\n                    <aol-geometry-point>\n                        <aol-coordinate [x]=\"venue.longitude\" [y]=\"venue.latitude\" [srid]=\"'EPSG:4326'\"></aol-coordinate>\n                    </aol-geometry-point>\n                    <aol-style>\n                        <aol-style-circle [radius]=\"10\">\n                            <aol-style-stroke [color]=\"'black'\" [width]=\"width\"></aol-style-stroke>\n                            <aol-style-fill [color]=\"venue == venueService.getSelectedVenue() ? 'green' : venue.isHovered() ? 'yellow' : 'red'\"></aol-style-fill>\n                        </aol-style-circle>\n                    </aol-style>\n                </aol-feature>\n            </aol-source-vector>\n        </aol-layer-vector>\n\n        <aol-overlay>\n            <aol-coordinate\n                [x]=\"longitude\"\n                [y]=\"latitude\"\n                [srid]=\"'EPSG:4326'\"\n                >\n            </aol-coordinate>\n            <aol-content id=\"infoBox\" class=\"d-none\">\n                <app-info-box></app-info-box>\n            </aol-content>\n        </aol-overlay>\n    </aol-map>\n</div>"

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
/* harmony import */ var ngx_openlayers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-openlayers */ "./node_modules/ngx-openlayers/dist/index.js");
/* harmony import */ var ngx_openlayers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_openlayers__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_venue_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/venue.service */ "./src/app/api/venue.service.ts");
/* harmony import */ var _nav_bar_nav_bar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../nav-bar/nav-bar.service */ "./src/app/nav-bar/nav-bar.service.ts");
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
    function MapViewComponent(navBarService, venueService) {
        this.navBarService = navBarService;
        this.venueService = venueService;
        this.zoom = 15;
        this.opacity = 1.0;
        this.width = 5;
        this.lat = 727640.686966983;
        this.lng = 7027557.9083128;
        this.selectClick = new openlayers__WEBPACK_IMPORTED_MODULE_1__["interaction"].Select({
            condition: openlayers__WEBPACK_IMPORTED_MODULE_1__["events"].condition.click
        });
        this.selectPointerMove = new openlayers__WEBPACK_IMPORTED_MODULE_1__["interaction"].Select({
            condition: openlayers__WEBPACK_IMPORTED_MODULE_1__["events"].condition.pointerMove
        });
        this.venues = venueService.getVenues();
    }
    MapViewComponent.prototype.ngOnInit = function () {
    };
    MapViewComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var map = this.mapComponent.instance;
        var infoBox = null;
        map.getOverlays().forEach(function (overlay) {
            if (overlay.getElement().id == 'infoBox') {
                infoBox = overlay;
            }
        });
        map.getLayers().forEach(function (currentLayer) {
            if (currentLayer instanceof openlayers__WEBPACK_IMPORTED_MODULE_1__["layer"].Vector) {
                _this.vectorLayer = currentLayer;
            }
        });
        map.on("click", function () {
            _this.venueService.deselectSelectedVenue();
        });
        map.on("pointermove", function () {
            _this.venueService.deselectHoveredVenue();
        });
        map.addInteraction(this.selectClick);
        map.addInteraction(this.selectPointerMove);
        this.navBarService.postCollapseState.subscribe(function () {
            map.updateSize();
        });
        this.venueService.venueSelected.subscribe(function (venue) {
            var venueFeature = _this.getVenueById(venue.id);
            var venuePoint = venueFeature.getGeometry();
            infoBox.setPosition(venuePoint.getCoordinates());
            infoBox.getElement().classList.remove("d-none");
            _this.selectClick.getFeatures().clear();
            _this.selectClick.getFeatures().push(venueFeature);
        });
        this.venueService.venueDeSelected.subscribe(function () {
            _this.selectClick.getFeatures().clear();
            infoBox.getElement().classList.add("d-none");
        });
        this.venueService.venueHovered.subscribe(function (venue) {
            _this.selectPointerMove.getFeatures().clear();
            _this.selectPointerMove.getFeatures().push(_this.getVenueById(venue.id));
        });
        this.venueService.venueDeHovered.subscribe(function () {
            _this.selectPointerMove.getFeatures().clear();
        });
        this.selectClick.on('select', function () {
            for (var _i = 0, _a = _this.selectClick.getFeatures().getArray(); _i < _a.length; _i++) {
                var selected = _a[_i];
                var match = selected.getId().toString().match(/venue-([0-9a-f]*)/);
                if (match == null) {
                    continue;
                }
                var venue = _this.venueService.getVenueById(match[1]);
                if (venue != null) {
                    venue.setActive(true);
                }
                return;
            }
        });
        this.selectPointerMove.on('select', function () {
            for (var _i = 0, _a = _this.selectPointerMove.getFeatures().getArray(); _i < _a.length; _i++) {
                var selected = _a[_i];
                var match = selected.getId().toString().match(/venue-([0-9a-f]*)/);
                if (match == null) {
                    continue;
                }
                var venue = _this.venueService.getVenueById(match[1]);
                if (venue != null) {
                    venue.setHovered(true);
                }
                return;
            }
        });
    };
    MapViewComponent.prototype.onMoveEnd = function (event) {
        var map = event.map;
        var view = map.getView();
        var projection = 'EPSG:4326';
        var sourceProj = view.getProjection();
        var center = openlayers__WEBPACK_IMPORTED_MODULE_1__["proj"].toLonLat(view.getCenter());
        var extend = view.calculateExtent(map.getSize());
        var c1 = openlayers__WEBPACK_IMPORTED_MODULE_1__["proj"].transform([extend[0], extend[1]], sourceProj, projection);
        var c2 = openlayers__WEBPACK_IMPORTED_MODULE_1__["proj"].transform([extend[2], extend[3]], sourceProj, projection);
        var wgs84Sphere = new openlayers__WEBPACK_IMPORTED_MODULE_1__["Sphere"](6378137);
        var distance = wgs84Sphere.haversineDistance(c1, c2);
        this.venueService.lookUpByCoords(center[0], center[1], distance / 4);
    };
    MapViewComponent.prototype.getVenueById = function (id) {
        return this.vectorLayer.getSource().getFeatureById("venue-" + id);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(ngx_openlayers__WEBPACK_IMPORTED_MODULE_2__["MapComponent"]),
        __metadata("design:type", ngx_openlayers__WEBPACK_IMPORTED_MODULE_2__["MapComponent"])
    ], MapViewComponent.prototype, "mapComponent", void 0);
    MapViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map-view',
            template: __webpack_require__(/*! ./map-view.component.html */ "./src/app/map/map-view/map-view.component.html"),
            styles: [__webpack_require__(/*! ./map-view.component.css */ "./src/app/map/map-view/map-view.component.css")]
        }),
        __metadata("design:paramtypes", [_nav_bar_nav_bar_service__WEBPACK_IMPORTED_MODULE_4__["NavBarService"], _api_venue_service__WEBPACK_IMPORTED_MODULE_3__["VenueService"]])
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

module.exports = "#mapContainer {\r\n    display:flex;\r\n    flex-direction: column;    \r\n    height: 100%;\r\n}\r\n\r\n#flexContainer {\r\n    height:100%;\r\n    flex-grow: 1;\r\n    overflow-x: auto;\r\n}\r\n\r\n#viewContainer {\r\n    height:100%;\r\n    display:flex;\r\n    flex-direction: row;\r\n    position: relative;\r\n}\r\n\r\napp-map-view {\r\n    flex-grow: 1;\r\n    height:100%;\r\n    width:100%;\r\n}"

/***/ }),

/***/ "./src/app/map/map.component.html":
/*!****************************************!*\
  !*** ./src/app/map/map.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"mapContainer\">\n    <app-nav-bar></app-nav-bar>\n    <div id=\"flexContainer\">\n        <div id=\"viewContainer\">\n            <app-map-list></app-map-list>\n            <app-map-view></app-map-view>\n        </div>\n    </div>\n</div>"

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

/***/ "./src/app/nav-bar/nav-bar.component.css":
/*!***********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\r\n    padding: 0 1rem;\r\n    position: relative;\r\n}\r\n\r\n#navbarNav {\r\n    padding: .5rem 1rem;\r\n}\r\n\r\n.navbar-toggler {\r\n    position: absolute;\r\n    right: 10px;\r\n    top: 10px;\r\n    z-index: 9999;\r\n    background-color: #254563;\r\n}\r\n\r\n@media (max-width: 767.98px) { \r\n    #navbarBranding {\r\n        display: none;\r\n    }\r\n    #navbarBranding.show {\r\n        display: block;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.html":
/*!************************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top\">\n    <div class=\"container\">\n        <a id=\"navbarBranding\" class=\"navbar-brand collapse navbar-collapse\" [ngbCollapse]=\"navBarService.isCollapsed()\" href=\"#\">City Trip Planner</a>\n        <button class=\"navbar-toggler\" type=\"button\" (click)=\"navBarService.toggleMenu()\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div id=\"navbarNav\" class=\"collapse navbar-collapse float-right\" [ngbCollapse]=\"navBarService.isCollapsed()\" >\n            <ul class=\"nav navbar-nav ml-auto\">\n                <li class=\"nav-item\" *ngFor=\"let navItem of navItems\" [class.active]=\"navItem == currentItem\"><a class=\"nav-link\" [routerLink]=\"navItem.getLink()\" [routerLinkActive]=\"navItem.isActive() + ''\">{{navItem.getName()}}</a></li>\n            </ul>\n        </div>\n    </div>\n</nav>"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _nav_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav-item */ "./src/app/nav-bar/nav-item.ts");
/* harmony import */ var _nav_bar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav-bar.service */ "./src/app/nav-bar/nav-bar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(navBarService, router) {
        this.navBarService = navBarService;
        this.router = router;
        this.navItems = [];
        this.navItems.push(new _nav_item__WEBPACK_IMPORTED_MODULE_2__["NavItem"]("Home", "/"));
        this.navItems.push(new _nav_item__WEBPACK_IMPORTED_MODULE_2__["NavItem"]("Trip", '/trip'));
        this.navItems.push(new _nav_item__WEBPACK_IMPORTED_MODULE_2__["NavItem"]("Map", "/map"));
        for (var _i = 0, _a = this.navItems; _i < _a.length; _i++) {
            var navItem = _a[_i];
            if (navItem.getLink() == router.url) {
                this.currentItem = navItem;
                break;
            }
        }
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var observer = new MutationObserver(function () {
            _this.navBarService.collapseComplete();
        });
        observer.observe(document.querySelector('#navbarNav'), {
            attributes: true,
            attributeFilter: ["class"]
        });
        observer.observe(document.querySelector('#navbarBranding'), {
            attributes: true,
            attributeFilter: ["class"]
        });
    };
    NavBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/nav-bar/nav-bar.component.css")]
        }),
        __metadata("design:paramtypes", [_nav_bar_service__WEBPACK_IMPORTED_MODULE_3__["NavBarService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/nav-bar/nav-bar.service.ts":
/*!********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.service.ts ***!
  \********************************************/
/*! exports provided: NavBarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarService", function() { return NavBarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var NavBarService = /** @class */ (function () {
    function NavBarService() {
        this.collapsed = true;
        this._collapsed = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.collapsedState = this._collapsed.asObservable();
        this._postColapse = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.postCollapseState = this._postColapse.asObservable();
    }
    NavBarService.prototype.toggleMenu = function () {
        this.collapsed = !this.collapsed;
        this._collapsed.next(this.collapsed);
    };
    NavBarService.prototype.isCollapsed = function () {
        return this.collapsed;
    };
    NavBarService.prototype.collapseComplete = function () {
        this._postColapse.next();
    };
    NavBarService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], NavBarService);
    return NavBarService;
}());



/***/ }),

/***/ "./src/app/nav-bar/nav-item.ts":
/*!*************************************!*\
  !*** ./src/app/nav-bar/nav-item.ts ***!
  \*************************************/
/*! exports provided: NavItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavItem", function() { return NavItem; });
var NavItem = /** @class */ (function () {
    function NavItem(name, link) {
        this.active = true;
        this.name = name;
        this.link = link;
    }
    NavItem.prototype.getName = function () {
        return this.name;
    };
    NavItem.prototype.getLink = function () {
        return this.link;
    };
    NavItem.prototype.isActive = function () {
        return this.active;
    };
    ;
    NavItem.prototype.setActive = function (active) {
        this.active = active;
    };
    ;
    return NavItem;
}());



/***/ }),

/***/ "./src/app/trip/trip.component.css":
/*!*****************************************!*\
  !*** ./src/app/trip/trip.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".activitybox {\r\n    background-color: #F0F0F0;\r\n    margin-bottom: 10px;\r\n    margin-top: 10px;\r\n    padding: 10px;\r\n}\r\n\r\n.titlebox {\r\n    padding-top: 5px;\r\n    padding-left: 10px;\r\n    padding-bottom: 5px;\r\n    border-radius: 5px;\r\n    color: white;\r\n}\r\n"

/***/ }),

/***/ "./src/app/trip/trip.component.html":
/*!******************************************!*\
  !*** ./src/app/trip/trip.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\n\n<div class=\"activity-top\">\n    <div class=\"jumbotron jumbotron-fluid\">\n        <div class=\"container\">\n            <div *ngIf=\"!trip\">\n                <h1 class=\"display-4\">Create your trip</h1>\n                <p class=\"lead\">\n                    Start by setting your destination below\n                </p>\n                <hr class=\"my-4\">\n                <p>Select your destination and how many days you want to go.</p>\n                <app-label-input [name]=\"'Destination'\" [id]=\"'destination'\" [(value)]=\"destination\" [description]=\"'destination'\" [error]=\"destinationError\" (valueChange)=\"recheckInput()\"></app-label-input>\n                <app-label-input [name]=\"'Days'\" [id]=\"'days'\" [(value)]=\"days\" [description]=\"'days'\" [type]=\"'number'\" [OnlyNumber]=\"'true'\" [error]=\"daysError\" (valueChange)=\"recheckInput()\"></app-label-input>\n                <button type=\"submit\" class=\"btn btn-primary\" (click)=\"createTrip()\">Create your trip</button>\n            </div>\n            <div *ngIf=\"trip\">\n                <h1 class=\"display-4\">Select your activities</h1>\n                <p class=\"lead\">\n                    Plan your trip in detail here below!\n                </p>\n                <hr class=\"my-4\">\n                <p>You have selected <mark>{{trip.name}}</mark> for <mark>{{trip.number_of_days}}</mark></p>\n                <p>Select the activities you want to do below</p>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"activity-container\" *ngIf=\"trip\">\n    <div class=\"container rounded\">\n        <h1>Selected activities</h1>\n    </div>\n    <div class=\"container activitybox rounded\" *ngFor=\"let venue of trip.venues\" >\n         <div class=\"row\">\n            <div class=\"col-sm-7\">\n                <figure class=\"figure\">\n                    <img src=\"https://igx.4sqi.net/img/general/700x300/655018_Zp3vA90Sy4IIDApvfAo5KnDItoV0uEDZeST7bWT-qzk.jpg\" alt=\"Central Park\" class=\"figure-img img-fluid rounded\" />\n                    <figcaption class=\"figure-caption\">Picture taken by <mark>Benjamin Bannister</mark>.</figcaption>\n                </figure>\n            </div>\n            <div class=\"col-sm-5\">\n                <div class=\"titlebox bg-primary\">\n                    <h2>{{venue.name}}</h2>\n                </div>\n                <div *ngIf=\"venue.address\" class=\"venue-address\">\n                    <p *ngFor=\"let addressLine of venue.address\">\n                        {{addressLine}}\n                </p>\n            </div>\n            <button class=\"btn btn-danger\" (click)=\"removeVenue(venue)\">Remove Activity</button>\n        </div>\n    </div>\n</div>\n<div class=\"container rounded\">\n    <h1>Sugested activities</h1>\n</div>\n<div class=\"container activitybox rounded\" *ngFor=\"let venue of venueSugestions\">\n     <div class=\"row\">\n        <div class=\"col-sm-7\">\n            <figure class=\"figure\">\n                <img src=\"https://igx.4sqi.net/img/general/700x300/655018_Zp3vA90Sy4IIDApvfAo5KnDItoV0uEDZeST7bWT-qzk.jpg\" alt=\"Central Park\" class=\"figure-img img-fluid rounded\" />\n                <figcaption class=\"figure-caption\">Picture taken by <mark>Benjamin Bannister</mark>.</figcaption>\n            </figure>\n        </div>\n        <div class=\"col-sm-5\">\n            <div class=\"titlebox bg-primary\">\n                <h2>{{venue.name}}</h2>\n            </div>\n            <div *ngIf=\"venue.address\" class=\"venue-address\">\n                <p *ngFor=\"let addressLine of venue.address\">\n                    {{addressLine}}\n            </p>\n        </div>\n        <button class=\"btn btn-primary\" (click)=\"addVenue(venue)\">Add Activity</button>\n    </div>\n</div>\n</div>\n<!-- OLD ---------------\n<div class=\"container activitybox rounded\">\n    <div class=\"row\">\n        <div class=\"col-sm-7\">\n            <figure class=\"figure\">\n                <img src=\"https://igx.4sqi.net/img/general/700x300/655018_Zp3vA90Sy4IIDApvfAo5KnDItoV0uEDZeST7bWT-qzk.jpg\" alt=\"Central Park\" class=\"figure-img img-fluid rounded\">\n                <figcaption class=\"figure-caption\">Picture taken by\n                    <mark>Benjamin Bannister</mark>.</figcaption>\n            </figure>\n        </div>\n        <div class=\"col-sm-5\">\n            <div class=\"titlebox bg-primary\">\n                <h2>Central Park</h2>\n            </div>\n            <p>Some text can be added here. Some text can be added here. Some text can be added here. Some text can be added here. Some text can be added here. Some text can be added here. Some text can be added here. Some text can be added here. Some text can\n                be added here. Some text can be added here.</p>\n            <a class=\"btn btn-primary\" href=\"#\">Add Activity</a>\n        </div>\n    </div>\n</div>\n\n<div class=\"container activitybox rounded\">\n    <div class=\"row\">\n        <div class=\"col-sm-5\">\n            <div class=\"titlebox bg-primary\">\n                <h2>Central Park</h2>\n            </div>\n            <p>Some text can be added here. Some text can be added here. Some text can be added here. Some text can be added here. Some text can be added here. Some text can be added here. Some text can be added here. Some text can be added here. Some text can\n                be added here. Some text can be added here.</p>\n            <a class=\"btn btn-primary\" href=\"#\">Add Activity</a>\n        </div>\n        <div class=\"col-sm-7\">\n            <figure class=\"figure\">\n                <img src=\"https://igx.4sqi.net/img/general/700x300/655018_Zp3vA90Sy4IIDApvfAo5KnDItoV0uEDZeST7bWT-qzk.jpg\" alt=\"Central Park\" class=\"figure-img img-fluid rounded\">\n                <figcaption class=\"figure-caption\">Picture taken by\n                    <mark>Benjamin Bannister</mark>.</figcaption>\n            </figure>\n        </div>\n    </div>\n</div>\n\n<div class=\"container activitybox rounded\">\n    <div class=\"row\">\n        <div class=\"col-sm-7\">\n            <figure class=\"figure\">\n                <img src=\"https://igx.4sqi.net/img/general/700x300/655018_Zp3vA90Sy4IIDApvfAo5KnDItoV0uEDZeST7bWT-qzk.jpg\" alt=\"Central Park\" class=\"figure-img img-fluid rounded\">\n                <figcaption class=\"figure-caption\">Picture taken by\n                    <mark>Benjamin Bannister</mark>.</figcaption>\n            </figure>\n        </div>\n        <div class=\"col-sm-5\">\n            <div class=\"titlebox bg-primary\">\n                <h2>Central Park</h2>\n            </div>\n            <p>Some text can be added here. Some text can be added here. Some text can be added here. Some text can be added here. Some text can be added here. Some text can be added here. Some text can be added here. Some text can be added here. Some text can\n                be added here. Some text can be added here.</p>\n            <a class=\"btn btn-primary\" href=\"#\">Add Activity</a>\n        </div>\n    </div>\n</div>\n\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-sm-4\">\n            <div class=\"card\">\n                <img class=\"card-img-top\" src=\"https://igx.4sqi.net/img/general/350x220/655018_Zp3vA90Sy4IIDApvfAo5KnDItoV0uEDZeST7bWT-qzk.jpg\" alt=\"Card image cap\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">Central Park</h5>\n                    <p class=\"card-text\">Some text can be added here. Some text can be added here. Some text can be added here. Some text can be added here. Some text can be added here. </p>\n                    <a href=\"#\" class=\"btn btn-primary\">Add Activity</a>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-sm-4\">\n            <div class=\"card\">\n                <img class=\"card-img-top\" src=\"https://igx.4sqi.net/img/general/350x220/655018_Zp3vA90Sy4IIDApvfAo5KnDItoV0uEDZeST7bWT-qzk.jpg\" alt=\"Card image cap\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">Central Park</h5>\n                    <p class=\"card-text\">Some text can be added here. Some text can be added here. Some text can be added here. Some text can be added here. Some text can be added here. </p>\n                    <a href=\"#\" class=\"btn btn-primary\">Add Activity</a>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-sm-4\">\n            <div class=\"card\">\n                <img class=\"card-img-top\" src=\"https://igx.4sqi.net/img/general/350x220/655018_Zp3vA90Sy4IIDApvfAo5KnDItoV0uEDZeST7bWT-qzk.jpg\" alt=\"Card image cap\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">Central Park</h5>\n                    <p class=\"card-text\">Some text can be added here. Some text can be added here. Some text can be added here. Some text can be added here. Some text can be added here. </p>\n                    <a href=\"#\" class=\"btn btn-primary\">Add Activity</a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"container activitybox rounded\">\n    <div class=\"row\">\n        <div class=\"col-sm-7\">\n            <figure class=\"figure\">\n                <img src=\"https://igx.4sqi.net/img/general/700x300/655018_Zp3vA90Sy4IIDApvfAo5KnDItoV0uEDZeST7bWT-qzk.jpg\" alt=\"Central Park\" class=\"figure-img img-fluid rounded\">\n                <figcaption class=\"figure-caption\">Picture taken by\n                    <mark>Benjamin Bannister</mark>.</figcaption>\n            </figure>\n        </div>\n        <div class=\"col-sm-5\">\n            <div class=\"titlebox bg-primary\">\n                <h2>Central Park</h2>\n            </div>\n            <p>Some text can be added here. Some text can be added here. Some text can be added here. Some text can be added here. Some text can be added here. Some text can be added here. Some text can be added here. Some text can be added here. Some text can\n                be added here. Some text can be added here.</p>\n            <a class=\"btn btn-primary\" href=\"#\">Add Activity</a>\n        </div>\n    </div>\n</div>\n\n<div class=\"container activitybox rounded\">\n    <div class=\"row\">\n        <div class=\"col-sm-5\">\n            <div class=\"titlebox bg-primary\">\n                <h2>Central Park</h2>\n            </div>\n            <p>Some text can be added here. Some text can be added here. Some text can be added here. Some text can be added here. Some text can be added here. Some text can be added here. Some text can be added here. Some text can be added here. Some text can\n                be added here. Some text can be added here.</p>\n            <a class=\"btn btn-primary\" href=\"#\">Add Activity</a>\n        </div>\n        <div class=\"col-sm-7\">\n            <figure class=\"figure\">\n                <img src=\"https://igx.4sqi.net/img/general/700x300/655018_Zp3vA90Sy4IIDApvfAo5KnDItoV0uEDZeST7bWT-qzk.jpg\" alt=\"Central Park\" class=\"figure-img img-fluid rounded\">\n                <figcaption class=\"figure-caption\">Picture taken by\n                    <mark>Benjamin Bannister</mark>.</figcaption>\n            </figure>\n        </div>\n    </div>\n</div>\n\n<div class=\"container activitybox rounded\">\n    <div class=\"row\">\n        <div class=\"col-sm-7\">\n            <figure class=\"figure\">\n                <img src=\"https://igx.4sqi.net/img/general/700x300/655018_Zp3vA90Sy4IIDApvfAo5KnDItoV0uEDZeST7bWT-qzk.jpg\" alt=\"Central Park\" class=\"figure-img img-fluid rounded\">\n                <figcaption class=\"figure-caption\">Picture taken by\n                    <mark>Benjamin Bannister</mark>.</figcaption>\n            </figure>\n        </div>\n        <div class=\"col-sm-5\">\n            <div class=\"titlebox bg-primary\">\n                <h2>Central Park</h2>\n            </div>\n            <p>Some text can be added here. Some text can be added here. Some text can be added here. Some text can be added here. Some text can be added here. Some text can be added here. Some text can be added here. Some text can be added here. Some text can\n                be added here. Some text can be added here.</p>\n            <a class=\"btn btn-primary\" href=\"#\">Add Activity</a>\n        </div>\n    </div>\n</div>\n\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-sm-4\">\n            <div class=\"card\">\n                <img class=\"card-img-top\" src=\"https://igx.4sqi.net/img/general/350x220/655018_Zp3vA90Sy4IIDApvfAo5KnDItoV0uEDZeST7bWT-qzk.jpg\" alt=\"Card image cap\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">Central Park</h5>\n                    <p class=\"card-text\">Some text can be added here. Some text can be added here. Some text can be added here. Some text can be added here. Some text can be added here. </p>\n                    <a href=\"#\" class=\"btn btn-primary\">Add Activity</a>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-sm-4\">\n            <div class=\"card\">\n                <img class=\"card-img-top\" src=\"https://igx.4sqi.net/img/general/350x220/655018_Zp3vA90Sy4IIDApvfAo5KnDItoV0uEDZeST7bWT-qzk.jpg\" alt=\"Card image cap\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">Central Park</h5>\n                    <p class=\"card-text\">Some text can be added here. Some text can be added here. Some text can be added here. Some text can be added here. Some text can be added here. </p>\n                    <a href=\"#\" class=\"btn btn-primary\">Add Activity</a>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-sm-4\">\n            <div class=\"card\">\n                <img class=\"card-img-top\" src=\"https://igx.4sqi.net/img/general/350x220/655018_Zp3vA90Sy4IIDApvfAo5KnDItoV0uEDZeST7bWT-qzk.jpg\" alt=\"Card image cap\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">Central Park</h5>\n                    <p class=\"card-text\">Some text can be added here. Some text can be added here. Some text can be added here. Some text can be added here. Some text can be added here. </p>\n                    <a href=\"#\" class=\"btn btn-primary\">Add Activity</a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n-->\n</div>"

/***/ }),

/***/ "./src/app/trip/trip.component.ts":
/*!****************************************!*\
  !*** ./src/app/trip/trip.component.ts ***!
  \****************************************/
/*! exports provided: TripComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripComponent", function() { return TripComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_trip_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/trip.service */ "./src/app/api/trip.service.ts");
/* harmony import */ var _api_venue_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/venue.service */ "./src/app/api/venue.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TripComponent = /** @class */ (function () {
    function TripComponent(tripService, venueService, route, location) {
        this.tripService = tripService;
        this.venueService = venueService;
        this.route = route;
        this.location = location;
        this.destination = "";
        this.destinationError = false;
        this.daysError = false;
        this.venueSugestions = [];
    }
    TripComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.tripService.getTrip(id).subscribe(function (trip) {
                _this.trip = trip;
                _this.venueService.getFeaturedByLocation(trip.name);
                _this.venueService.venuesUpdated.subscribe(function (venues) {
                    _this.venueSugestions = venues;
                });
            });
        }
    };
    TripComponent.prototype.createTrip = function () {
        var _this = this;
        this.recheckInput();
        if (!this.destination) {
            this.destinationError = true;
        }
        if (!this.days) {
            this.daysError = true;
        }
        if (this.destinationError || this.daysError) {
            return;
        }
        // Create the trip. Once created set the trip
        this.tripService.createTrip(this.destination, this.days).subscribe(function (trip) {
            _this.trip = trip;
            _this.venueService.getFeaturedByLocation(trip.name);
            _this.venueService.venuesUpdated.subscribe(function (venues) {
                _this.venueSugestions = venues;
            });
            // Update the location without navigation. This is so someone can go to the url again
            _this.location.go("trip/" + trip.uuid);
        });
    };
    TripComponent.prototype.recheckInput = function () {
        if (this.destination) {
            this.destinationError = false;
        }
        if (this.days) {
            this.daysError = false;
        }
    };
    TripComponent.prototype.addVenue = function (venue) {
        var _this = this;
        this.tripService.addVenue(this.trip.uuid, venue.id).subscribe(function (success) {
            if (success) {
                _this.trip.venues.push(venue);
                var index = _this.venueSugestions.indexOf(venue);
                if (index > -1) {
                    _this.venueSugestions.splice(index, 1);
                }
            }
        });
    };
    TripComponent.prototype.removeVenue = function (venue) {
        var _this = this;
        this.tripService.removeVenue(this.trip.uuid, venue.id).subscribe(function (success) {
            if (success) {
                var index = _this.trip.venues.indexOf(venue);
                if (index > -1) {
                    _this.trip.venues.splice(index, 1);
                }
            }
        });
    };
    TripComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trip',
            template: __webpack_require__(/*! ./trip.component.html */ "./src/app/trip/trip.component.html"),
            styles: [__webpack_require__(/*! ./trip.component.css */ "./src/app/trip/trip.component.css")]
        }),
        __metadata("design:paramtypes", [_api_trip_service__WEBPACK_IMPORTED_MODULE_3__["TripService"], _api_venue_service__WEBPACK_IMPORTED_MODULE_4__["VenueService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], TripComponent);
    return TripComponent;
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

module.exports = __webpack_require__(/*! C:\Users\soelm\Desktop\Repositories\TripPlanner\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map