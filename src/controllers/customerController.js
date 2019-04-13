
//require customer model
const Customer = require('../models/Customer')
//requrie boom for http 
const boom = require('boom')

//get all customers

exports.getCustomers = async (req, reply) => {
    try {
        const customers = await Customer.find()
        return customers;
    } catch (err)
    {
        throw boom.boomify(err);
    }
};


//get single customer by id

exports.getSingleCustomer = async (req, reply) => {
    try {
        const id = req.params.id
        const customer = Customer.findById(id)
        return customer
    } catch (err)
    {
        throw boom.boomify(err)
    }
}
//add new customer

exports.addCustomer = async(req, reply) => {
    try {
        const customer = new Customer(req.body)
        customer.save()
        return customer
    } catch (err)
    {
        throw boom.boomify(err)
    }
}

//update customer 
exports.updateCustomer = async(req, reply) => {
    try {
        const id = req.params.id
        const customer = req.body
        const customerUpdate = Customer.findByIdAndUpdate(id, customer, {new : true})
        return customerUpdate
    } catch (err)
    {
        throw boom.boomify(err)
    }
}


//delete customer

exports.deleteCustomer = async (req, reply) => {
    try {
        const id = req.params.id
        return Customer.findByIdAndRemove(id)
    } catch (err)
    {
        throw boom.boomify(err)
    }
}



