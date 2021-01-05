const { Router } = require('express');

const OrderController = require('./controllers/OrderController')

const routes = new Router();

routes.get('/', OrderController.index);
routes.post('/orders', OrderController.store);
routes.put('/:orderId/order', OrderController.update);
routes.delete('/:orderId/order', OrderController.delete);

module.exports = routes;