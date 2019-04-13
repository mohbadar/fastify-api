
//require mongoose
const mongoose = require('mongoose')


//create customer modul
const customerSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    cardNo: String,
    phone: String,
    email: String,
    address: {
        type: Map,
        of: String
    }

});

module.exports = mongoose.model('Customer', customerSchema);