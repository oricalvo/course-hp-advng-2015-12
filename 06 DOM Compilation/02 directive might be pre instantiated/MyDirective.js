angular.module("MyApp").directive("myDirective", function () {

    console.log("MyDirective ctor");

    var ddo = {
        restrict: "E",
        scope: {
            format: "=",
            tick: "&",
        },
        //template: require("/template.html"),
        //styles: require("/template.css"),
    };

    return function () {
    };
});
