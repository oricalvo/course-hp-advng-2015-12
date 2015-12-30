(function () {

    function ChildCtrl($scope, $attrs) {
        console.log(!!$attrs.name);

        $scope.$parent[$attrs.name] = this;
    }

    ChildCtrl.prototype.doSomething = function () {
        console.log("DoSomething");
    }

    angular.module("MyApp").controller("ChildCtrl", ChildCtrl);
})();
