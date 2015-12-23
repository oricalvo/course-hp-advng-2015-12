var app = require("./App.js");

function HomeCtrl($scope) {
    $scope.message = "Hello Angular";

    $scope.onClick = function () {
        //angular.module("MyApp").service("MyService", function () {
        //});

        $provide.service("MyService", function () {
        });
    }
}

app.controller("HomeCtrl", HomeCtrl);

app.service("MyService", function MyService () {
});

var providerInjector, serviceInjector;

app.config(function myConfig($injector) {
    console.log("Config block");

    providerInjector = $injector;
});

app.run(function myRun($injector) {
    console.log("Run block");

    serviceInjector = $injector;

    console.log(serviceInjector == providerInjector);
});

app.provider("MyService", function () {
    console.log("MyService provider ctor");

    this.$get = function () {
        //
        //  Service instance
        //
        return {
        };
    }
});

