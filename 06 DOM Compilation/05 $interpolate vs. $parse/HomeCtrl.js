(function () {

    function HomeCtrl($scope, $parse, $interpolate) {
        $scope.run = function () {
            var parseFn = $parse("a.b.c");
            console.log(parseFn({}));

            var obj = {
                a: {
                    b: {
                        c: 12,
                    }
                }
            };
            console.log(parseFn(obj));

            var interpolateFn = $interpolate("Hello {{a.b.c}}");
            console.log(interpolateFn(obj));
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
