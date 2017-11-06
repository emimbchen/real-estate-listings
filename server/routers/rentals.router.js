var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RentSchema = new Schema({ rent: Number, sqft: Number, city: String, __v: Number });
var Rent = mongoose.model('Rent', RentSchema, 'rentals');

//get
router.get('/', function(req,res){
    Rent.find({}, function(err, foundRent){
        if(err) {
            console.log('Error in the rent get:', err);
            res.sendStatus(500);
        }else {
            res.send(foundRent);
        }
    });
});

//post
router.post('/', function (req, res) {
    console.log(req.body);
    var rentToAdd = new Rent(req.body);
    rentToAdd.save(function (err, data) {
        if (err) {
            console.log("Error in the rent post", err);
            res.sendStatus(500);
        } else {
            res.sendStatus(201);
        }
    });
});

//delete

router.delete('/:id', function (req, res) {
    var id = req.params.id;
    Rent.findByIdAndRemove({ "_id" : id }, function (err, data) {
        if (err) {
            console.log('error in the rental delete', err);
            res.sendStatus(500);
        } else {
            res.sendStatus(200);
            console.log('deleted rental');
        }
    });
});

//put

router.put('/:id', function (req, res){
    var id = req.params.id;
    Rent.update({"_id": id}, function(err,data){
        if (err) {
            console.log('error in the rental put', err);
            res.sendStatus(500);
        }else {
            res.sendStatus(201);
            console.log('updated!');
        }
    });
}); // end put route

module.exports = router;