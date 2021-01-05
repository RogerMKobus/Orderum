const Order = require('../models/Order')

class OrderController {

    async index(req, res) {
        try {
            const list = await Order.find();
            return res.json(list);
        }
        catch (err) {
            return res.status(400).json(err)
        }
    }

    async store(req, res) {
        try {
            if (!req.body.title) {
                return res.status(400).json({ error: "Campo título é de preencgimento obrigatório" })
            }

            const order = await Order.create(req.body);

            return res.json(order);
        }
        catch (err) {
            return res.status(400).json(err)
        }
    }

    async update(req, res) {
        try {
            await Order.findByIdAndUpdate(req.params.orderId, req.body);
            const order = await Order.findById(req.params.orderId);
            return res.json(order);
        }
        catch (err) {
            return res.status(400).json(err)
        }
    }

    async delete(req, res) {
        try {
            await Order.findByIdAndRemove(req.params.orderId);
            return res.json()
        }
        catch (err) {
            return res.status(400).json(err)
        }
    }
}

module.exports = new OrderController();