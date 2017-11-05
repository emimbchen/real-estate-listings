myApp.controller('NewController', function (ListService) {
    console.log('New Controller Created');
    var self = this;
    self.types = ['For Rent', 'For Sale' ];
    var property = {};

    self.submit = function(selected){
    property = {
        rent: self.rent,
        sqft: self.sqft,
        city: self.city
    };
    self.rent = '';
    self.sqft = '';
    self.city = '';

    ListService.submit(selected, property);

    }
});

