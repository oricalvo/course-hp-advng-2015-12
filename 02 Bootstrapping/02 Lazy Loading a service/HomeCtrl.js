(function () {

    function HomeCtrl($scope, $injector) {
        $scope.message = "Hello Angular";

        $scope.load = function () {
            require(["./LazyLoadedService"], function () {
                var service = $injector.get("LazyLoadedService");
                service.doSomething()
            });
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);

    //angular.module("MyApp").service("MyService", function myService() {
    //});
})();
