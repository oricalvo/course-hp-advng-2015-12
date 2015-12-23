(function () {

    angular.module("MyApp", []).run(function ($rootScope) {

        var Scope = $rootScope.constructor;

        var originalApply = Scope.prototype.$apply;
        Scope.prototype.$apply = function () {
            var before = new Date();

            originalApply.apply(this, arguments);

            var after = new Date();

            console.log(after - before);
        }

    });

})();
