var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SaleSchema = new Schema ({cost: Number, sqft: Number, city: String, __v: Number});
var Sale = mongoose.model('Sale', SaleSchema, 'listings');

module.exports = router;