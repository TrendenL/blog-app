const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: false
    },
    username: {
        type: String,
        required: false
    },
    categories: {
        type: Array,
        required: false
    }
}, {timestamps: true})

module.exports = mongoose.model('Post', postSchema)