var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SaleSchema = new Schema ({cost: Number, sqft: Number, city: String, __v: Number});
var Sale = mongoose.model('Sale', SaleSchema, 'listings');

//get
router.get('/', function (req, res) {
    Sale.find({}, function (err, foundSale) {
        if (err) {
            console.log('Error in the sale get:', err);
            res.sendStatus(500);
        } else {
            res.send(foundSale);
        }
    });
});

//post
router.post('/', function(req, res){
    console.log(req.body);
    var saleToAdd = new Sale(req.body);
    saleToAdd.save(function(err,data){
        if(err){
            console.log("Error in the sale post", err);
            res.sendStatus(500);
        }else {
            res.sendStatus(201);
        }
    });
});

//delete
router.delete('/:id', function(req, res){
    var id = req.params.id;
    Sale.findByIdAndRemove({"_id": id }, function(err, data){
        if(err){
            console.log('error in the sale delete', err);
            res.sendStatus(500);
        } else {
            res.sendStatus(200);
            console.log('deleted sale');
        }
    });
});

module.exports = router;