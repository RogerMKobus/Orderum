const { Schema, model } = require('mongoose');

const LaneSchema = new Schema({
    
    title: { type: String, required: true },
        
},
    {
        timestamps: true
    }
);

module.exports = model('Lane', LaneSchema);
