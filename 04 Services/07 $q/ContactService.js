(function () {

    angular.module("MyApp").factory("contactService", function ($q, $http) {
        return {
            getAll: function () {
                return $http.get("/contacts.html").then(function (res) {
                    throw new Error("Data is not valid");
                    //return $q.reject(new Error("Data is not valid"));

                    return res.data;
                });

                //return $http.get("/contacts.html").then(res => res.data);
            }
        };
    });
})();
