(function () {

    function HomeCtrl($scope) {
        $scope.run = function () {
            $scope.child1.doSomething();
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
