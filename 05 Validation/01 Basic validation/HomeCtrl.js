(function () {

    function HomeCtrl($scope) {
        $scope.save = function () {
            if ($scope.form.$invalid) {
                return;
            }

            console.log("SAVING");
        }

        $scope.isInvalid = function (fieldName) {
            return $scope.form[fieldName].$invalid && ($scope.form.$submitted || $scope.form[fieldName].$touched)
        }

        $scope.$evalAsync(function () {
            if ($scope.isInvalid("userName")) {
            }
        });

        //$scope.$on("$loaded", function () {
        //});

    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
