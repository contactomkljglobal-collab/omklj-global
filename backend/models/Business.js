const mongoose = require("mongoose");

const businessSchema = new mongoose.Schema(
{
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    businessName: {
        type: String,
        required: true
    },

    ownerName: {
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

    gstNumber: {
        type: String
    },

    businessType: {
        type: String
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

    latitude: {
        type: Number
    },

longitude: {
    type: Number
},

gpsCity: {
    type: String
},

gpsState: {
    type: String
},
    
    activeJobs: {
        type: Number,
        default: 0
    },

    completedJobs: {
        type: Number,
        default: 0
    },

    totalWorkersHired: {
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

    businessPhoto: {
        type: String
    },

    ownerPhoto: {
        type: String
    },

    registrationDocument: {
        type: String
    }
},
{
    timestamps: true
}
);

module.exports = mongoose.model("Business", businessSchema);
