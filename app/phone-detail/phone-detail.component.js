"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhoneDetailController = /** @class */ (function () {
    function PhoneDetailController($routeParams, phone) {
        var _this = this;
        var phoneId = $routeParams['phoneId'];
        phone.get(phoneId).subscribe(function (data) {
            _this.phone = data;
            _this.setImage(data.images[0]);
        });
    }
    PhoneDetailController.prototype.setImage = function (imageUrl) {
        this.mainImageUrl = imageUrl;
    };
    PhoneDetailController.$inject = ['$routeParams', 'phone'];
    return PhoneDetailController;
}());
angular.
    module('phoneDetail').
    component('phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: PhoneDetailController
});
//# sourceMappingURL=phone-detail.component.js.map