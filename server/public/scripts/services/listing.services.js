myApp.service('ListService', function($http){
    console.log('ListService Created');
   var self = this;

   self.sales = {data:[]};
   self.rentals={data: []};

   //post route for rentals
   var addRental = function (rentalToAdd) {
       $http.post('/rental', rentalToAdd).then(function (response) {
           console.log('sent Rental');
       }).catch(function (error) {
           console.log(':(');
       });
   }

   //post route for sale
   var addSale = function (SaleToAdd) {
       $http.post('/sale', SaleToAdd).then(function (response) {
           console.log('sent sale');
       }).catch(function (error) {
           console.log(':(');
       });
   }

   //submit function 
   self.submit = function (selected, property) {

       if (selected === 'For Rent') {
           addRental(property);

       } if (selected === 'For Sale') {
           console.log('for sale');
           addSale(property);
       }
   }

   //get route for sales
   self.refreshSales = function () {
       $http.get('/sale').then(function (response) {
           self.sales.data = response.data;
           console.log(self.sales.data);
       }).catch(function (error) {
           console.log('No rentals for you');
       });
   }
   //delete route for sales
   self.delete = function (id) {
       $http.delete('/sale/' + id).then(function (response) {
           console.log('delete sent');
           self.refreshSales();
       }).catch(function (error) {
           console.log('delete not sent');
       });
   }

   //delete route
   self.delete = function (id) {
       $http.delete('/rental/' + id).then(function (response) {
           console.log('delete sent');
           self.refreshRentals();
       }).catch(function (error) {
           console.log('delete not sent');
       });
   }

   //get route
   self.refreshRentals = function () {
       $http.get('/rental').then(function (response) {
           self.rentals.data = response.data;
       }).catch(function (error) {
           console.log('No rentals for you');
       });
   }


});