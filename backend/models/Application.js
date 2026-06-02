const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
{
    jobId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Job",
        required: true
    },

    workerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Worker",
        required: true
    },

    employerId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },

    employerType: {
        type: String,
        enum: ["business", "personal"],
        required: true
    },

    status: {
        type: String,
        enum: [
            "pending",
            "accepted",
            "rejected",
            "cancelled",
            "completed"
        ],
        default: "pending"
    },

    workerRating: {
        type: Number,
        default: 0
    },

    employerRating: {
        type: Number,
        default: 0
    },

    workerReview: {
        type: String,
        default: ""
    },

    employerReview: {
        type: String,
        default: ""
    },

    acceptedAt: {
        type: Date
    },

    completedAt: {
        type: Date
    }
},
{
    timestamps: true
}
);

module.exports = mongoose.model(
    "Application",
    applicationSchema
);
