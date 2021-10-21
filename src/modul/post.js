const {Schema, model} = require('mongoose')

const schema = new Schema ({
    title: {
        type: String,
        minlength: 3,
        maxlength: 25,
        required: true
    },
    post: {
        type: String,
        minlength: 10,
        maxlength: 100,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    }
})

module.exports = model("Post", schema)