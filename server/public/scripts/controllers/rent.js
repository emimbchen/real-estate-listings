myApp.controller('RentController', function (ListService) {
    console.log('Rent Controller Created');
    var self = this;

    self.hidden = true;
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
    self.update= function(id){
    }

    self.update = function(id, toUpdate){
        swal({
            title: "Update: ",
            text: "Old Info: " + toUpdate,
            content: "input",
            showCancelButton: true,
            closeOnConfirm: true,
            animation: "slide-from-top",
        }).then((value)=> {
            self.put = function(id) {
                $http.put('/rental/' + id).then(function (response) {
                    console.log('update sent');
                    ListService.refreshRentals();
                }).catch(function (error) {
                    console.log('update not sent');
                });
            }
        });
    }

})// end of controller
