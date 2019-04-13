//require controllers
const carController = require('../controllers/carController')
const customerController = require('../controllers/customerController')

const routes = [

    {
        method: 'GET',
        url: '/api/cars',
        handler: carController.getCars
    },
    {
        method: 'GET',
        url: '/api/cars/:id',
        handler: carController.getSingleCar
    },
    {
        method: 'POST',
        url: '/api/cars',
        handler: carController.addCar,
//        schema: documentation.addCarSchema
    },
    {
        method: 'PUT',
        url: '/api/cars/:id',
        handler: carController.updateCar,
    },
    {
        method: 'DELETE',
        url: '/api/cars/:id',
        handler: carController.deleteCar
    },
     
    {
        method: 'GET',
        url: '/api/customers',
        handler: customerController.getCustomers
    },
    {
        method: 'GET',
        url: '/api/customers/:id',
        handler:customerController.getSingleCustomer
    },
    {
        method: 'POST',
        url: '/api/customers',
        handler:customerController.addCustomer
    },
    {
        method: 'PUT',
        url: '/api/customers/:id',
        handler: customerController.updateCustomer
    },
    {
        method: 'DELETE',
        url: '/api/customers/:id',
        handler: customerController.deleteCustomer
    }
]

module.exports = routes