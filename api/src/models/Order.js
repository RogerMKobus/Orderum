const { Schema, model } = require('mongoose');

const OrderSchema = new Schema({
    
    title: { type: String, required: true, trim: true, index: true },
    contact: { type: String, required: true, trim: true, index: true },
    description: { type: String, required: true, trim: true, index: true },
    
},
    {
        timestamps: true
    }
);

module.exports = model('Order', OrderSchema);
