(function () {

    angular.module("MyApp").directive("datepicker", function () {
        var ddo = {
            restrict: "A",

            require: ["?ngModel"],

            link: function (scope, element, attrs, ctrls) {
                var ngModel = ctrls[0];
                if (ngModel) {
                    ngModel.$parsers.push(function (viewValue) {
                        var date = moment(viewValue, "M/D/YYYY", true);
                        if (!date.isValid()) {
                            return undefined;
                        }

                        return date.toDate();
                    });

                    ngModel.$formatters.push(function (modelValue) {
                        if (!modelValue) {
                            return "";
                        }

                        return moment(modelValue).format("M/D/YYYY");
                    });

                    ngModel.$validators.myDate = function (parsedValue) {
                        return false;
                    };
                }

                element.datepicker();
            }
        };

        return ddo;
    });

})();
