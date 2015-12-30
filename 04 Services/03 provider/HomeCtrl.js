(function () {

    function HomeCtrl($scope, syncService) {
        syncService.startSync();
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
