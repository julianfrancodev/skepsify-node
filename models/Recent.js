const mongoose = require("mongoose");

const RecentSchema = mongoose.Schema({

    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    meditation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Meditation"
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },

});


module.exports = mongoose.model("Recent", RecentSchema);