(function () {

    angular.module("MyApp", [])
        .filter("myfilter", function () {
            return function (data) {
                console.log("FILTER: " + data);

                return data + "-XXX";
            }
        });

})();
