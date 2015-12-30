(function () {

    function HomeCtrl($scope, $injector, statusBar) {
        $scope.run = function () {
            statusBar.message("Running ...");
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
