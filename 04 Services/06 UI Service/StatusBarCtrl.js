(function () {

    function StatusBarCtrl($scope, DI) {
        this.text = "Loaded";

        DI.value("statusBar", this);
    }

    StatusBarCtrl.prototype.message = function (text) {
        this.text = text;
    }

    angular.module("MyApp").controller("StatusBarCtrl", StatusBarCtrl);
})();

(function () {

})();
