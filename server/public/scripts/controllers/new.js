myApp.controller('NewController', function ($http) {
    console.log('New Controller Created');
    var self = this;
    self.types = ['For Rent', 'For Sale' ];
    var property = {};

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

    
    self.submit = function(selected){
        property = {
            rent: self.rent,
            sqft: self.sqft,
            city: self.city
        };
        self.rent = '';
        self.sqft = '';
        self.city = '';
        
        if (selected === 'For Rent'){
            addRental(property);

        } if (selected === 'For Sale'){
            console.log('for sale');
            addSale(property);
        }
    }
})

