var mongoose = require('mongoose');

var applicationSchema = new mongoose.Schema({
    ageRange: String,
    email: String,
    emergencyContactName: String,
    emergencyContactPhone: String,
    emergencyContactRelationship: String,
    gender: String,
    hasEmergencyContact: Boolean,
    hasIncome: Boolean,
    highPriority: Boolean,
    incomeDescription: String,
    license: Boolean,
    multipleOccupants: Boolean,
    nameFirst: String,
    nameLast: String,
    occupantsAdults: Number,
    occupantsChildren: Number,
    occupantsSeniors: Number,
    pets: Boolean,
    petsCats: Number,
    petsDogs: Number,
    petsOther: Number,
    phone: String,
    preferredLocation: String,
    reasonDisability: Boolean,
    reasonEviction: Boolean,
    reasonLowIncome: Boolean,
    reasonOther: Boolean,
    reasonOtherDescription: String,
    reasonRelationship: Boolean,
    reasonUnemployment: Boolean,
    receivingSupport: Boolean,
    sourceOfSupport: String,
    submitted: Boolean,
    urgency: String,
    vehicle: Boolean,
    veteran: Boolean,
    deletedAt: {
        type: Date,
        default: null,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Application', applicationSchema);