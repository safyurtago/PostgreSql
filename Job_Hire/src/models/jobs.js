const {Schema, model} = require('mongoose');

const schema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    category: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Category"
    }
},
{
    timestamps: true
}
)

module.exports = model('Job', schema);