
const Applicant = require('../models/applicant');

module.exports = {
    getAllApplicants,
    createApplicant
}

function createApplicant(req, res) {
    let applicant = new Applicant({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phone: req.body.phone,
        email: req.body.email,
        language: req.body.language,
        location: req.body.location,
        license: req.body.license,
        vehicle: req.body.vehicle,
        ageRange: req.body.ageRange,
        multipleOccupants: req.body.multipleOccupants,
        children: req.body.children,
        adults: req.body.adults,
        seniors: req.body.seniors,
        pets: req.body.pets,
        dogs: req.body.dogs,
        cats: req.body.cats,
        other: req.body.other,
        reasonUnemployment: req.body.reasonUnemployment,
        reasonLowIncome: req.body.reasonLowIncome,
        reasonRelationship: req.body.reasonRelationship,
        reasonDisability: req.body.reasonDisability,
        reasonEviction: req.body.reasonEviction,
        reasonOther: req.body.reasonOther,
        reasonOtherDescription: req.body.reasonOtherDescription,
        veteran: req.body.veteran,
        receivingSupport: req.body.receivingSupport,
        sourceOfSupport: req.body.sourceOfSupport,
        highPriority: req.body.highPriority,
        durationHomeless: req.body.durationHomeless,
        durationInCar: req.body.durationInCar,
        currentSituation: req.body.currentSituation,
        hasIncome: req.body.hasIncome,
        incomeDescription: req.body.incomeDescription,
        emergencyContactPhone: req.body.emergencyContactPhone,
        emergencyContactName: req.body.emergencyContactName,
        emergencyContactRelationship: req.body.emergencyContactRelationship,
    });

    console.log(applicant)

    applicant.save()
    res.status(200).json(applicant);
}

function getAllApplicants(req, res) {
    Applicant.find({}).then(function(Applicants) {
        res.status(200).json(Applicants)
    })
};