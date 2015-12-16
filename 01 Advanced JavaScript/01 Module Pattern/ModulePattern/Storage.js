var MyApp = MyApp || {};

MyApp.Storage = (function (Network) {

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
