(function () {

    function HomeCtrl($scope) {
        $scope.message = "Hello Angular";

        $scope.contacts = [];
        for (var i = 0; i < 10000; i++) {
            $scope.contacts.push({
                name: "Name" + (i+1)
            });
        }

        $scope.onClick = function () {
            //angular.module("MyApp").service("MyService", function () {
            //});

            $provide.service("MyService", function () {
            });
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
