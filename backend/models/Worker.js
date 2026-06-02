const mongoose = require("mongoose");

const workerSchema = new mongoose.Schema(
{
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    fullName: {
        type: String,
        required: true,
        trim: true
    },

    phone: {
        type: String,
        required: true,
        unique: true,
        match: /^[0-9]{10}$/
    },

    aadhaarNumber: {
        type: String,
        required: true,
        unique: true,
        match: /^[0-9]{12}$/
    },

    dateOfBirth: {
        type: Date
    },

    gender: {
        type: String,
        enum: ["Male", "Female", "Other"]
    },

    state: {
        type: String,
        required: true,
        trim: true
    },

    district: {
        type: String,
        required: true,
        trim: true
    },

    address: {
        type: String,
        required: true,
        trim: true
    },

    workCategory: {
        type: String,
        required: true
    },

    employmentType: {
        type: String,
        required: true
    },

    trustScore: {
        type: Number,
        default: 0
    },

    activeApplications: {
        type: Number,
        default: 0
    },

    activeJobs: {
        type: Number,
        default: 0
    },

    jobsCompleted: {
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

    profilePhoto: {
        type: String,
        required: true
    },

    aadhaarFront: {
        type: String,
        required: true
    },

    aadhaarBack: {
        type: String,
        required: true
    }
},
{
    timestamps: true
}
);

module.exports = mongoose.model("Worker", workerSchema);
