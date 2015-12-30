(function () {

    function HomeCtrl($scope, contactService) {
        console.log("Before");

        contactService.getAll().then(function (contacts) {
            console.log("Response");

            $scope.contacts = contacts;
        }).catch(function (err) {
            alert(err.message);
        });

        console.log("After");
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
