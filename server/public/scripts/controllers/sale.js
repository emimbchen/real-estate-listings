myApp.controller('SaleController', function(ListService){
    console.log('Sale Controller Created');
    var self = this;

    self.delete = function (id){
        ListService.delete(id);
    }

    self.refreshSales = function(){
        ListService.refreshSales();
    }

    self.refreshSales();

self.result = ListService.sales;

});