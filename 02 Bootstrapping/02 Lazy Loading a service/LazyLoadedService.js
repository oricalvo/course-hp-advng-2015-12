define(["./logger"], function () {

    function LazyLoadedService(logger) {
    }

    LazyLoadedService.prototype.doSomething = function () {
        console.log("Do something");
    };

    angular.module("MyApp").$provide.service("LazyLoadedService", LazyLoadedService);

});
