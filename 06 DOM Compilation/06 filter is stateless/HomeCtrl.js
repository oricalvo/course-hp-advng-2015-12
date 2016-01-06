(function () {

    function HomeCtrl($scope, $parse, $interpolate) {
        $scope.message = "ABC";

        $scope.nothing = function () {
        }

        $scope.run = function () {
            $scope.message = "YYY";
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
