const mongoose = require('mongoose');

const AudioMeditationSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    meditation:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Meditation'
    },
    plan:{
        type: String,
        required: true
    },
    level: {
        type: String,
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

module.exports = mongoose.model('AudioMeditation', AudioMeditationSchema);