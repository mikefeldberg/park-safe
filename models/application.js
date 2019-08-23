var mongoose = require('mongoose');

var applicationSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    phone: String,
    email: String,
    gender: String,
    location: String,
    license: Boolean,
    vehicle: Boolean,
    ageRange: String,
    multipleOccupants: Boolean,
    children: Number,
    adults: Number,
    seniors: Number,
    pets: Boolean,
    petsDogs: Number,
    petsCats: Number,
    petsOther: Number,
    reasonUnemployment: Boolean,
    reasonLowIncome: Boolean,
    reasonRelationship: Boolean,
    reasonDisability: Boolean,
    reasonEviction: Boolean,
    reasonOther: Boolean,
    reasonOtherDescription: String,
    veteran: Boolean,
    receivingSupport: Boolean,
    sourceOfSupport: String,
    highPriority: Boolean,
    hasIncome: Boolean,
    incomeDescription: String,
    hasEmergencyContact: Boolean,
    emergencyContactPhone: String,
    emergencyContactName: String,
    emergencyContactRelationship: String,
    submitted: Boolean,
    deletedAt: {
        type: Date,
        default: null,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Application', applicationSchema);