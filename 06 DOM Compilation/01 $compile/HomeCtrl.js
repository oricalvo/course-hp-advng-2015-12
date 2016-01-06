(function () {

    function HomeCtrl($scope, $compile, $http, $element) {
        var element = null;
        var scope = null;

        $scope.message = "Hello $compile";

        $scope.log = function () {
            console.log($scope);
        }

        $scope.load = function () {
            if (element) {
                return;
            }

            $http.get("/template.html").then(function (res) {
                var template = res.data;

                var linkFn = $compile(template);

                scope = $scope.$new();

                element = linkFn(scope);

                element.bind("$destroy", function () {
                    console.log("Ooops ... someone destroyed my element");
                });

                console.log(element[0].outerHTML);

                $element.append(element);
            });
        }

        $scope.unload = function () {
            if (!element) {
                return;
            }

            scope.$destroy();

            element.remove();
            element = null;
        }

        $scope.legacyClean = function () {
            element[0].parentElement.removeChild(element[0]);

            //$element.find(".my-template").remove();
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
