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
        required: true
    },

    phone: {
        type: String,
        required: true,
        unique: true
    },

    aadhaarNumber: {
        type: String,
        required: true,
        unique: true
    },

    dateOfBirth: {
        type: Date
    },

    gender: {
        type: String
    },

    state: {
        type: String
    },

    district: {
        type: String
    },

    address: {
        type: String
    },

    workCategory: {
        type: String
    },

    employmentType: {
        type: String
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
        type: String
    },

    aadhaarFront: {
        type: String
    },

    aadhaarBack: {
        type: String
    }
},
{
    timestamps: true
}
);

module.exports = mongoose.model("Worker", workerSchema);
