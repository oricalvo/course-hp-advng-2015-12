(function () {

    var app = angular.module("MyApp", []);

    defineDirective(app, "dir1");
    defineDirective(app, "dir2", "/dir2.html");

    app.factory("dataService", function ($q) {
        return $q.when({
        });
    });

    function defineDirective(app, name, templateUrl) {
        app.directive(name, function () {
            var ddo = {
                controller: function (dataService) {
                    console.log(dataService);

                    console.log(name + " controller");
                },
                templateUrl: templateUrl,
                compile: function () {
                    console.log(name + " compile");

                    return {
                        pre: function () {
                            console.log(name + " prelink");
                        },
                        post: function () {
                            console.log(name + " postlink");
                        }
                    };
                }
            };

            return ddo;
        });
    }

})();
