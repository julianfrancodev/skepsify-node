const mongoose = require("mongoose");

const FavoriteSchema = mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    meditation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Meditation"
    },
    topic:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Topic"
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }


});

module.exports = mongoose.model("Favorite", FavoriteSchema);