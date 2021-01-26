const { Schema, model, ObjectId } = require('mongoose');

const OrderSchema = new Schema({
    
    title: { type: String, required: true },
    contact: { type: String, required: false },
    description: { type: String, required: false },
    date: { type: String, required: true },
    lane: { type: ObjectId, ref: 'Lane', require: true, default: '5ff47cefac74864154efcc0e' },

},
    {
        timestamps: true
    }
);

module.exports = model('Order', OrderSchema);
