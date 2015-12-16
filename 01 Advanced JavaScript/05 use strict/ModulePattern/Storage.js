var MyApp = MyApp || {};

MyApp.Storage = (function (Network) {
    "use strict";

    function save() {
        Network.httpPost();
    }

    function load() {
    }

    return {
        save: save,
        load: load,
    };
})(MyApp.Network);

function createNestedFunc() {
    return g;

    //var g = function () {
    //}
    function g() {
    }
}
