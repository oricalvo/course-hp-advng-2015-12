(function () {

    function FirstCtrl($scope, $rootScope) {
        console.log("FirstCtrl ctor");

        var off = $rootScope.$on("logout", function () {
            console.log("onLogout " + $scope.$id);
        });

        $scope.$on("$destroy", function () {
            off();
        });
    }

    angular.module("MyApp").controller("FirstCtrl", FirstCtrl);
})();
