(function () {

    angular.module("MyApp").service("syncService", function () {
    });

    //function SyncServiceProvider() {
    //}

    //SyncServiceProvider.prototype.$get = function () {
    //    return new SyncService(this.interval);
    //}

    //SyncServiceProvider.prototype.setInterval = function (interval) {
    //    this.interval = interval;
    //}

    //function SyncService(interval) {
    //    this.interval = interval;
    //}

    //SyncService.prototype.startSync = function () {
    //}

    //angular.module("MyApp").provider("syncService", SyncServiceProvider);

    //angular.module("MyApp").provider("syncService", function () {
    //    var interval = 5;

    //    this.setInterval = function (inter) {
    //        interval = inter;
    //    }

    //    this.$get = function () {
    //        return {
    //            startSync: function () {
    //                console.log("startSync");
    //            }
    //        };
    //    }
    //});

    //var interval;
    //angular.module("MyApp").provider("syncService", {
    //    setInterval: function (inter) {
    //        interval = inter;
    //    },

    //    $get: function () {
    //        return {
    //            startSync: function () {
    //                console.log("startSync");
    //            }
    //        };
    //    }
    //});
})();
