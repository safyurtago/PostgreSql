const {Schema, model} = require('mongoose');

const schema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    job: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Job',
    }
},
{
    timestamps: true,
}
)

module.exports = model('applyJob', schema);