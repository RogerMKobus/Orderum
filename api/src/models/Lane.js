const { Schema, model, ObjectId } = require('mongoose');
const Order = require('./Order');

const LaneSchema = new Schema({
    
    title: { type: String, required: true },
    orders:[{ type: ObjectId, ref: Order, required: false}]
},
    {
        timestamps: true
    }
);

module.exports = model('Lane', LaneSchema);
