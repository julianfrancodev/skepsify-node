const mongoose = require("mongoose");

const TopicSchema = mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },
    
    createdAt: {
        type: Date,
        default: Date.now()
    },
});


module.exports = mongoose.model("Topic", TopicSchema);


