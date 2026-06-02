const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
{
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },

    password: {
        type: String,
        required: true
    },

    role: {
        type: String,
        enum: [
            "worker",
            "business",
            "personal",
            "admin"
        ],
        default: "worker"
    },

    isVerified: {
        type: Boolean,
        default: false
    }
},
{
    timestamps: true
}
);

module.exports = mongoose.model(
    "User",
    userSchema
);
