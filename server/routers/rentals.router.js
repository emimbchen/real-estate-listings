var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RentSchema = new Schema({ rent: Number, sqft: Number, city: String, __v: Number });
var Rent = mongoose.model('Rent', RentSchema, 'rentals');

module.exports = router;