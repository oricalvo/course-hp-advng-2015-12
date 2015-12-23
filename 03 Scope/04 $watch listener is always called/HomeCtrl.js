(function () {

    function HomeCtrl($scope) {
        $scope.message = "Hello Angular";
        $scope.xxx = "";
        $scope.yyy = "";

        $scope.run = function () {
            $scope.xxx += "X";
            $scope.yyy += "Y";
        }

        $scope.$watch("xxx", function () {
            console.log("xxx changed");
        });

        $scope.$watch("yyy", function () {
            console.log("yyy changed");
        });
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
