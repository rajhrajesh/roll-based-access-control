const mongoos = require('mongoose')

const userSchema = new mongoos.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: ['admin', 'manager', 'user']
    }
},
    {
        timestamps: true
    }
)

module.exports = mongoos.model('User', userSchema)