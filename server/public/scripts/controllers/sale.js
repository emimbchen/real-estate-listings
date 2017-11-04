myApp.controller('SaleController', function($http){
    console.log('Sale Controller Created');
    var self = this;

    //delete route
    self.delete = function(id){
        $http.delete('/sale/' + id).then(function(response){
            console.log('delete sent');
            refreshSales();
        }).catch(function(error){
            console.log('delete not sent');
        });
    }

    //get route
    var refreshSales = function () {
        $http.get('/sale').then(function (response) {
            self.sales = response.data;
        }).catch(function (error) {
            console.log('No rentals for you');
        });
    }
    refreshSales();
})