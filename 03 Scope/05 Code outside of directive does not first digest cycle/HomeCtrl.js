(function () {

    function HomeCtrl($scope, $element) {
        //$scope.message = "XXX";

        //setTimeout(function () {
        //    $scope.message = "YYY";
        //}, 1000);

        $scope.$watch(function () {
            return window.location.pathname;
        }, function () {
        });

        $scope.$watch("xxx", function () {
            //setTimeout(function () {
            //    console.log("XXX changed 1");
            //}, 0);

            $scope.$applyAsync(function () {
                console.log("XXX changed 1");

                $scope.fileName = "fff";
            });

            //$scope.$evalAsync(function () {
            //    console.log("XXX changed 1");

            //    $scope.fileName = "fff";
            //});

            //$scope.$$postDigest(function () {
            //    console.log("XXX changed 1");

            //    $scope.fileName = "fff";
            //});
        });

        $scope.$watch("xxx", function () {
            console.log("XXX changed 2");

        });

        $scope.run = function () {
            $scope.$apply();
        }

        var fileInput = $element.find("input[type=file]");
        $scope.browse = function () {

            fileInput.trigger("click");

            console.log("After click");
        }

        fileInput.bind("change", function (e) {
            console.log("Changed");

            //setTimeout(function () {
            //    $scope.fileName = e.target.files[0].name;

            //    $scope.$apply();
            //}, 0);

            //if (!$scope.$root.$$phase) {
            //    $scope.$apply();
            //}
        });
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
