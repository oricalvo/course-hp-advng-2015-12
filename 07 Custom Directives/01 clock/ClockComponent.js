(function () {

    function ClockComponent($scope, $interval, $attrs, $parse, $timeout) {
        var me = this;

        if ($attrs.name) {
            var getter = $parse($attrs.name);
            var setter = getter.assign;
            if (!setter) {
                throw new Error("Expression: " + $attrs.name + " is not assignable");
            }

            setter($scope.$parent, this);
        }

        me.intervalId = null;
        me.time = new Date();
        me.$interval = $interval;
    }

    ClockComponent.prototype.start = function () {
        var me = this;

        if (me.intervalId) {
            return;
        }

        me.time = new Date();

        me.intervalId = me.$interval(function () {
            me.time = new Date();

            me.onTick();
        }, 1000);
    }

    ClockComponent.prototype.stop = function () {
        if (!this.intervalId) {
            return;
        }

        this.$interval.cancel(this.intervalId);
        this.intervalId = null;
    }

    angular.module("MyApp").directive("clock", function () {
        var ddo = {
            //template: "<h1>{{ctrl.time | date: ctrl.format}}</h1>",
            templateUrl: "/Clock.html",
            controller: ClockComponent,
            controllerAs: "ctrl",
            scope: {
                format: "=",
                onTick: "&",
            },
            bindToController: true,
        }

        return ddo;
    });

})();