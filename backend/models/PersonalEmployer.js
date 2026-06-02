const mongoose = require("mongoose");

const personalEmployerSchema = new mongoose.Schema(
{
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    fullName: {
        type: String,
        required: true
    },

    phone: {
        type: String,
        required: true,
        unique: true
    },

    email: {
        type: String,
        required: true
    },

    aadhaarNumber: {
        type: String,
        required: true,
        unique: true
    },

    address: {
        type: String
    },

    city: {
        type: String
    },

    state: {
        type: String
    },

    pincode: {
        type: String
    },

    workerTypeNeeded: {
        type: String
    },

    activeWorkers: {
        type: Number,
        default: 0
    },

    workersHired: {
        type: Number,
        default: 0
    },

    completedContracts: {
        type: Number,
        default: 0
    },

    rating: {
        type: Number,
        default: 0
    },

    isVerified: {
        type: Boolean,
        default: false
    },

    verificationStatus: {
        type: String,
        enum: ["pending", "approved", "rejected"],
        default: "pending"
    },

    ownerPhoto: {
        type: String
    },

    aadhaarFront: {
        type: String
    },

    aadhaarBack: {
        type: String
    },

    housePhoto: {
        type: String
    }
},
{
    timestamps: true
}
);

module.exports = mongoose.model("PersonalEmployer", personalEmployerSchema);
