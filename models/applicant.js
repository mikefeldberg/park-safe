var mongoose = require('mongoose');

var applicantSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    phone: String,
    email: String,
    language: String,
    location: String,
    license: Boolean,
    vehicle: Boolean,
    ageRange: String,
    multipleOccupants: Boolean,
    children: Number,
    adults: Number,
    seniors: Number,
    pets: Boolean,
    dogs: Number,
    cats: Number,
    other: Number,
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
    durationHomeless: String,
    durationInCar: String,
    currentSituation: String,
    hasIncome: Boolean,
    incomeDescription: String,
    emergencyContactPhone: String,
    emergencyContactName: String,
    emergencyContactRelationship: String,
    deletedAt: {
        type: Date,
        default: null,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Applicant', applicantSchema);