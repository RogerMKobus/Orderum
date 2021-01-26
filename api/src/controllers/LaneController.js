const Lane = require('../models/Lane')

class LaneController {

    async index(req, res) {
        try {
            const list = await Lane.find().populate('orders');
            return res.json(list);
        }
        catch (err) {
            return res.status(400).json(err)
        }
    }

    async store(req, res) {
        try {
            if (!req.body.title) {
                return res.status(400).json({ error: "Campo título é de preenchimento obrigatório" })
            }

            const lane = await Lane.create(req.body);

            return res.json(lane);
        }
        catch (err) {
            return res.status(400).json(err)
        }
    }

    async update(req, res) {
        try {
            await Lane.findByIdAndUpdate(req.params.laneId, req.body);
            const lane = await Lane.findById(req.params.laneId);
            return res.json(lane);
        }
        catch (err) {
            return res.status(400).json(err)
        }
    }

    async delete(req, res) {
        try {
            await Lane.findByIdAndRemove(req.params.laneId);
            return res.json()
        }
        catch (err) {
            return res.status(400).json(err)
        }
    }
}

module.exports = new LaneController();