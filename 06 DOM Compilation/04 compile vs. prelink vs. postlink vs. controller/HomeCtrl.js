(function () {

    function HomeCtrl($scope) {
        $scope.message = "Hello Angular";

        $scope.onClick = function () {
            //angular.module("MyApp").service("MyService", function () {
            //});

            $provide.service("MyService", function () {
            });
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
