const Mongoose = require('mongoose')

const UserSchema = Mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    password: {
        type: String
    }
})

const User = Mongoose.model('user', UserSchema)

module.exports = User