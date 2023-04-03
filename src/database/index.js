const mongoose = require('mongoose')

mongoose.connect('mongodb://johnathankristhian:jhol@cluster0.blaujmi.mongodb.net/?retryWrites=true&w=majority')

module.exports = mongoose