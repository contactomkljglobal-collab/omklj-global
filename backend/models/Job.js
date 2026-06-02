const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
{
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },

    postedByType: {
        type: String,
        enum: ["business", "personal"],
        required: true
    },

    title: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    location: {
        type: String,
        required: true
    },

    state: {
        type: String
    },

    district: {
        type: String
    },

    workersRequired: {
        type: Number,
        default: 1
    },

    workersAccepted: {
        type: Number,
        default: 0
    },

    hourlyRate: {
        type: Number,
        required: true
    },

    workingHours: {
        type: Number,
        required: true
    },

    startDate: {
        type: Date
    },

    endDate: {
        type: Date
    },

    status: {
        type: String,
        enum: [
            "open",
            "filled",
            "active",
            "completed",
            "cancelled"
        ],
        default: "open"
    },

    cancellationFee: {
        type: Number,
        default: 0
    },

    totalApplications: {
        type: Number,
        default: 0
    },

    views: {
        type: Number,
        default: 0
    }
},
{
    timestamps: true
}
);

module.exports = mongoose.model("Job", jobSchema);
