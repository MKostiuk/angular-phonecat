"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhoneListController = /** @class */ (function () {
    function PhoneListController(phone) {
        var _this = this;
        phone.query().subscribe(function (phones) {
            _this.phones = phones;
        });
        this.orderProp = 'age';
    }
    //query: string;
    PhoneListController.$inject = ['Phone'];
    return PhoneListController;
}());
// Register `phoneList` component, along with its associated controller and template
angular.
    module('phoneList').
    component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: PhoneListController
});
//# sourceMappingURL=phone-list.component.js.map