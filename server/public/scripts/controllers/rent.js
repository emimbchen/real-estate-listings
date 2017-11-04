myApp.controller('RentController', function ($http) {
    console.log('Rent Controller Created');
    var self = this;
    
    //delete route
    self.delete = function (id) {
        $http.delete('/rental/' + id).then(function (response) {
            console.log('delete sent');
            refreshRentals();
        }).catch(function (error) {
            console.log('delete not sent');
        });
    }

    //get route
    var refreshRentals = function(){
        $http.get('/rental').then(function(response){
            self.rentals = response.data;
        }).catch(function(error){
            console.log('No rentals for you');
        });
    }
    refreshRentals();
})