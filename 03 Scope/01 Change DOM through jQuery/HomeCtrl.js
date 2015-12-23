(function () {

    function HomeCtrl($scope) {
        $scope.message = "Hello Angular";

        $scope.run = function () {
            $("body").append("{{XXX}}");
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
