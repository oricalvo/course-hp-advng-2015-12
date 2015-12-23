(function () {

    function HomeCtrl($scope, $rootScope) {
        $scope.currentView = "first";

        $scope.toggle = function () {
            $scope.currentView = ($scope.currentView == "first" ? "second" : "first");
        }

        $scope.logout = function () {
            $rootScope.$broadcast("logout");
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
