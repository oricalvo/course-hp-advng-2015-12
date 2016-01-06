(function () {

    angular.module("MyApp", [])
        .directive("dir1", function () {
            return {
                restrict: "E",
                //template: "<span>Directive 1</span>",
                compile: function (element, attrs) {
                    element.remove();

                    return function link() {
                    }
                }
            };
        })
        .directive("dir2", function () {
            return {
                restrict: "E",
                template: "<span>Directive 2</span>",
            };
        })
        .directive("dir3", function () {
            return {
                restrict: "E",
                template: "<span>Directive 3</span>",
            };
        });

})();
