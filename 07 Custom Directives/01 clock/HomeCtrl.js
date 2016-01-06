(function () {

    function HomeCtrl($scope, $timeout) {
        var me = this;

        me.format = "HH:ss";

        $timeout(function () {
            me.clock1.start();
        }, 0);

        //$scope.$evalAsync(function () {
        //    me.clock1.start();
        //});
    }

    HomeCtrl.prototype.onTick = function () {
        console.log("Tick");
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
