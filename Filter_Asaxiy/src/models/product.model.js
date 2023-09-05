const {Schema, model} = require('mongoose');

const schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    amount: {
        type: Number,
        defaultValue: 0,
    },
    category: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Category'
    }
},
{
    timestamps: true
}
);

module.exports = model('Product', schema);