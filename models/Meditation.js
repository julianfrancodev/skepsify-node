const mongoose = require("mongoose");

const MeditationSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
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

module.exports = mongoose.model("Meditation", MeditationSchema);