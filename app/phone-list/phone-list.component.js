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
Object.defineProperty(exports, "__esModule", { value: true });
var phone_service_1 = require("../core/phone/phone.service");
var core_1 = require("@angular/core");
var PhoneListComponent = /** @class */ (function () {
    function PhoneListComponent(phone) {
        var _this = this;
        phone.query().subscribe(function (phones) {
            _this.phones = phones;
        });
        this.orderProp = 'age';
    }
    PhoneListComponent.prototype.getPhones = function () {
        return this.sortPhones(this.filterPhones(this.phones));
    };
    PhoneListComponent.prototype.filterPhones = function (phones) {
        var _this = this;
        if (phones && this.query) {
            return phones.filter(function (phone) {
                var name = phone.name.toLowerCase();
                var snippet = phone.snippet.toLowerCase();
                return name.indexOf(_this.query) >= 0 || snippet.indexOf(_this.query) >= 0;
            });
        }
        return phones;
    };
    PhoneListComponent.prototype.sortPhones = function (phones) {
        var _this = this;
        if (phones && this.orderProp) {
            return phones
                .slice(0)
                .sort(function (a, b) {
                if (a[_this.orderProp] < b[_this.orderProp]) {
                    return -1;
                }
                else if (b[_this.orderProp] < a[_this.orderProp]) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
        }
        return phones;
    };
    PhoneListComponent = __decorate([
        core_1.Component({
            selector: 'phone-list',
            templateUrl: 'phone-list/phone-list.template.html'
        }),
        __metadata("design:paramtypes", [phone_service_1.Phone])
    ], PhoneListComponent);
    return PhoneListComponent;
}());
exports.PhoneListComponent = PhoneListComponent;
//# sourceMappingURL=phone-list.component.js.map