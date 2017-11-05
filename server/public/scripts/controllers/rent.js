myApp.controller('RentController', function (ListService) {
    console.log('Rent Controller Created');
    var self = this;
    
    //delete route
    self.delete = function (id) {
    ListService.delete(id);
    }

    //get route
    var refreshRentals = function(){
    ListService.refreshRentals();
    }

    refreshRentals();
    self.result = ListService.rentals;
})