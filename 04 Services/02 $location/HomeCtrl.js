(function () {

    function HomeCtrl($scope, $location) {
        $scope.change = function () {
            $location.url("blabla?id=123");
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
