(function () {

    angular.module("MyApp", []).config(function (syncServiceProvider) {
        syncServiceProvider.setInterval(10);
    });


})();
