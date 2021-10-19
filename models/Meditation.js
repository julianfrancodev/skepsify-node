const mongoose = require("mongoose");
let random = require('mongoose-simple-random');


let MeditationSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    image:{
        type: String,
        required: true
    },
    duration:{
        type: String,
        required: true
    },
    details:{
        type: String,
        required: true
    },
    audio:{
        type: String,
        required: true
    },
    instructor:{
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
    },
    topic: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Topic"
    },
    tool: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tool'
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
});

MeditationSchema.plugin(random);

module.exports = mongoose.model("Meditation", MeditationSchema);