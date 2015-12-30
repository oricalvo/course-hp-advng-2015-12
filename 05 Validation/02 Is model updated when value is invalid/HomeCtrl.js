(function () {

    function HomeCtrl($scope) {
        $scope.save = function () {
            console.log($scope.email);
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
