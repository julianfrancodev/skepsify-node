const mongoose = require("mongoose");

const ToolSchema = mongoose.Schema({
    name:{
        type:String,
        required: true,
        trim: true
    },
    icon: {
        type: String,
        required: true,
        trim: true
    },
    color:{
        type: String,
        required: true,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
});

module.exports = mongoose.model("Tool", ToolSchema);