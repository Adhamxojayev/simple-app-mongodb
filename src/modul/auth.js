const {Schema, model} = require('mongoose')

const schema = new Schema ({
    username: {
        type: String,
        minlength: 3,
        maxlength: 29,
        required: true
    },
    password: {
        type: String,
        minlength: 7,
        maxlength: 29,
        required: true
    },
    email: {
        type: String,
        minlength: 5,
        maxlength: 35,
        required: true
    }
})

module.exports = model("Auth", schema)