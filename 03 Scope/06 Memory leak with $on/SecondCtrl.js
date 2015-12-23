(function () {

    function SecondCtrl($scope, $rootScope) {
        console.log("SecondCtrl ctor");

        var off = $rootScope.$on("logout", function () {
            console.log("onLogout " + $scope.$id);
        });

        $scope.$on("$destroy", function () {
            off();
        });
    }

    angular.module("MyApp").controller("SecondCtrl", SecondCtrl);
})();
