(function () {

    function HomeCtrl($scope) {
        $scope.save = function () {
            console.log($scope.birthday);
        }

        $scope.change = function () {
            $scope.birthday = new Date();
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
