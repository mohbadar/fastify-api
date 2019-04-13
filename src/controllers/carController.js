
//require boom
const boom = require('boom')

//get car model
const Car = require('../models/Car')

//get all cars

exports.getCars = async(req, reply) => {
    try {
        const cars = await Car.find()
        return cars
    } catch (err)
    {
        throw boom.boomify(err)
    }
}


//get car by id
exports.getSingleCar = async (req, reply) => {
    try {
        const id = req.params.id
        const car = Car.findById(id)
        return car
    } catch (err)
    {
        throw boom.boomify(err)
    }
}


//add new car
exports.addCar = async(req, reply) => {
    try {
        const car = new Car(req.body)
        return car.save()
    } catch (err)
    {
        return boom.boomify(err)
    }
}

//update car information
exports.updateCar = async(req, reply) => {
    try {
        const id = req.params.id
        const car = req.body
        const {...updateData} = car

        const update = await Car.findByIdAndUpdate(id, updateData, {new : true})
    } catch (err)
    {
        throw boom.boomify(err)
    }
}

//delete car
exports.deleteCar = async (req, reply) => {
    try {
        const id = req.params.id
        const car  = Car.findByIdAndRemove(id)
        return car
    } catch (err)
    {
        throw boom.boomify(err)
    }
}