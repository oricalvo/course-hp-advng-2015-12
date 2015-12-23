(function () {

    //function HomeCtrl($scope) {
    //    $scope.message = "Hello Angular";

    //    $scope.onClick = function () {
    //        $scope.message += "XXX";
    //    }
    //}

    function HomeCtrl($scope) {
        this.message = "Hello Angular";
    }

    HomeCtrl.prototype.onClick = function () {
        this.message += "XXX";
    }


    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
