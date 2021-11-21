const mongoose = require('mongoose');
let random = require('mongoose-simple-random');

const PodcastSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    audio: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },

});

PodcastSchema.plugin(random);


module.exports = mongoose.model('Podcast', PodcastSchema);