(function () {

    //HomeCtrl.$inject = ["$scope", "$injector"];
    HomeCtrl.$inject = ["$scope", "$injector"];
    function HomeCtrl($scope, $injector) {
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);

    //angular.module("MyApp").controller("HomeCtrl", [
    //    "$scope",
    //    "$injector",
    //    HomeCtrl
    //]);
})();
