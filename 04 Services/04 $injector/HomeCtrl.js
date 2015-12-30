(function () {

    function HomeCtrl($scope, $injector) {

        //var obj1 = $injector.instantiate(MyClass, { id: 123 });
        //var obj2 = $injector.instantiate(MyClass, { id: "XXX" });

        $injector.invoke(doSomething, undefined, { id: 123 });

        //var injector = angular.element(document.getElementById("body")).injector();
        //var $http = injector.get("$http");
    }

    function doSomething($http, $q, $compile, $parse, id) {
        console.log(!!$http);
        console.log(!!$q);
        console.log(!!$compile);
        console.log(!!$parse);
    }

    function MyClass($http, id) {
        console.log("MyClass: " + id);

        this.$http = $http;
        this.id = id;
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
