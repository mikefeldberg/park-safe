
const Application = require('../models/application');

module.exports = {
    getAllApplications,
    createApplication,
    getOneApplication,
    updateApplication,
    deleteApplication,
    createPartialApplication
}

function createApplication(req, res) {
    let application = new Application({
        ageRange: req.body.ageRange,
        email: req.body.email,
        emergencyContactName: req.body.emergencyContactName,
        emergencyContactPhone: req.body.emergencyContactPhone,
        emergencyContactRelationship: req.body.emergencyContactRelationship,
        gender: req.body.gender,
        hasIncome: req.body.hasIncome,
        highPriority: req.body.highPriority,
        incomeDescription: req.body.incomeDescription,
        language: req.body.language,
        license: req.body.license,
        multipleOccupants: req.body.multipleOccupants,
        nameFirst: req.body.nameFirst,
        nameLast: req.body.nameLast,
        occupantsAdults: req.body.occupantsAdults,
        occupantsChildren: req.body.occupantsChildren,
        occupantsSeniors: req.body.occupantsSeniors,
        pets: req.body.pets,
        petsCats: req.body.petsCats,
        petsDogs: req.body.petsDogs,
        petsOther: req.body.petsOther,
        phone: req.body.phone,
        preferredLocation: req.body.preferredLocation,
        reasonDisability: req.body.reasonDisability,
        reasonEviction: req.body.reasonEviction,
        reasonLowIncome: req.body.reasonLowIncome,
        reasonOther: req.body.reasonOther,
        reasonOtherDescription: req.body.reasonOtherDescription,
        reasonRelationship: req.body.reasonRelationship,
        reasonUnemployment: req.body.reasonUnemployment,
        receivingSupport: req.body.receivingSupport,
        sourceOfSupport: req.body.sourceOfSupport,
        submitted: true,
        urgency: req.body.urgency,
        vehicle: req.body.vehicle,
        veteran: req.body.veteran,
    });

    console.log(application)

    application.save()
    res.status(200).json(application);
}
function createPartialApplication(req, res) {
    let application = new Application({
        ageRange: req.body.ageRange,
        email: req.body.email,
        emergencyContactName: req.body.emergencyContactName,
        emergencyContactPhone: req.body.emergencyContactPhone,
        emergencyContactRelationship: req.body.emergencyContactRelationship,
        gender: req.body.gender,
        hasIncome: req.body.hasIncome,
        highPriority: req.body.highPriority,
        incomeDescription: req.body.incomeDescription,
        language: req.body.language,
        license: req.body.license,
        multipleOccupants: req.body.multipleOccupants,
        nameFirst: req.body.nameFirst,
        nameLast: req.body.nameLast,
        occupantsAdults: req.body.occupantsAdults,
        occupantsChildren: req.body.occupantsChildren,
        occupantsSeniors: req.body.occupantsSeniors,
        pets: req.body.pets,
        petsCats: req.body.petsCats,
        petsDogs: req.body.petsDogs,
        petsOther: req.body.petsOther,
        phone: req.body.phone,
        preferredLocation: req.body.preferredLocation,
        reasonDisability: req.body.reasonDisability,
        reasonEviction: req.body.reasonEviction,
        reasonLowIncome: req.body.reasonLowIncome,
        reasonOther: req.body.reasonOther,
        reasonOtherDescription: req.body.reasonOtherDescription,
        reasonRelationship: req.body.reasonRelationship,
        reasonUnemployment: req.body.reasonUnemployment,
        receivingSupport: req.body.receivingSupport,
        sourceOfSupport: req.body.sourceOfSupport,
        submitted: false,
        urgency: req.body.urgency,
        vehicle: req.body.vehicle,
        veteran: req.body.veteran,
    });

    console.log(application)

    application.save()
    res.status(200).json(application);
}

function getAllApplications(req, res) {
    Application.find({}).then(function (applications) {
        res.status(200).json(applications)
    })
};

function getOneApplication(req, res) {
    Application.findOne({ _id: req.params.id }).exec(function (err, application) {
        response = {
            'application': application,
            'ageRange': application.ageRange,
            'email': application.email,
            'emergencyContactName': application.emergencyContactName,
            'emergencyContactPhone': application.emergencyContactPhone,
            'emergencyContactRelationship': application.emergencyContactRelationship,
            'gender': application.gender,
            'hasIncome': application.hasIncome,
            'highPriority': application.highPriority,
            'incomeDescription': application.incomeDescription,
            'language': application.language,
            'license': application.license,
            'multipleOccupants': application.multipleOccupants,
            'nameFirst': application.nameFirst,
            'nameLast': application.nameLast,
            'occupantsAdults': application.occupantsAdults,
            'occupantsChildren': application.occupantsChildren,
            'occupantsSeniors': application.occupantsSeniors,
            'pets': application.pets,
            'petsCats': application.petsCats,
            'petsDogs': application.petsDogs,
            'petsOther': application.petsOther,
            'phone': application.phone,
            'preferredLocation': application.preferredLocation,
            'reasonDisability': application.reasonDisability,
            'reasonEviction': application.reasonEviction,
            'reasonLowIncome': application.reasonLowIncome,
            'reasonOther': application.reasonOther,
            'reasonOtherDescription': application.reasonOtherDescription,
            'reasonRelationship': application.reasonRelationship,
            'reasonUnemployment': application.reasonUnemployment,
            'receivingSupport': application.receivingSupport,
            'sourceOfSupport': application.sourceOfSupport,
            'submitted': application.submitted,
            'urgency': application.urgency,
            'vehicle': application.vehicle,
            'veteran': application.veteran,
        }
        res.status(200).json(response);
    });
}

function updateApplication(req, res) {
    Application.findOne({ _id: req.body.id, deletedAt: null }).exec(function (err, application) {
        application.note = req.body.note
        application.save();
        res.status(200).json(application);
    });
}
function deleteApplication(req, res) {
    Application.findOne({ _id: req.body.applicationId, deletedAt: null }).then(function (err, application) {
        application.deletedAt = new Date();
        application.save();
        res.status(200).json(application);
    });
}