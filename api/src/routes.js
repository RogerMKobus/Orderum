const { Router } = require('express');

const OrderController = require('./controllers/OrderController')
const LaneController = require('./controllers/LaneController')

const routes = new Router();

routes.get('/', OrderController.index);
routes.post('/order', OrderController.store);
routes.put('/:orderId/order', OrderController.update);
routes.delete('/:orderId/order', OrderController.delete);

routes.get('/lane', LaneController.index);
routes.post('/lane', LaneController.store);
routes.put('/:laneId/lane', LaneController.update);
routes.delete('/:laneId/lane', LaneController.delete);

module.exports = routes;