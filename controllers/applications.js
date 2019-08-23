
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
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phone: req.body.phone,
        email: req.body.email,
        gender: req.body.gender,
        language: req.body.language,
        preferredLocation: req.body.preferredLocation,
        license: req.body.license,
        vehicle: req.body.vehicle,
        ageRange: req.body.ageRange,
        multipleOccupants: req.body.multipleOccupants,
        children: req.body.children,
        adults: req.body.adults,
        seniors: req.body.seniors,
        pets: req.body.pets,
        petsDogs: req.body.petsDogs,
        petsCats: req.body.petsCats,
        petsOther: req.body.petsOther,
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
        hasIncome: req.body.hasIncome,
        incomeDescription: req.body.incomeDescription,
        emergencyContactPhone: req.body.emergencyContactPhone,
        emergencyContactName: req.body.emergencyContactName,
        emergencyContactRelationship: req.body.emergencyContactRelationship,
        urgency: req.body.urgency,
        submitted: req.body.submitted,
    });

    console.log(application)

    application.save()
    res.status(200).json(application);
}
function createPartialApplication(req, res) {
    let application = new Application({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phone: req.body.phone,
        email: req.body.email,
        gender: req.body.gender,
        language: req.body.language,
        preferredLocation: req.body.preferredLocation,
        license: req.body.license,
        vehicle: req.body.vehicle,
        ageRange: req.body.ageRange,
        multipleOccupants: req.body.multipleOccupants,
        children: req.body.children,
        adults: req.body.adults,
        seniors: req.body.seniors,
        pets: req.body.pets,
        petsDogs: req.body.petsDogs,
        petsCats: req.body.petsCats,
        petsOther: req.body.petsOther,
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
        hasIncome: req.body.hasIncome,
        incomeDescription: req.body.incomeDescription,
        urgency: req.body.urgency,
        emergencyContactPhone: req.body.emergencyContactPhone,
        emergencyContactName: req.body.emergencyContactName,
        emergencyContactRelationship: req.body.emergencyContactRelationship,
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
            'firstName': application.firstName,
            'lastName': application.lastName,
            'phone': application.phone,
            'email': application.email,
            'gender': application.gender,
            'language': application.language,
            'preferredLocation': application.preferredLocation,
            'license': application.license,
            'vehicle': application.vehicle,
            'ageRange': application.ageRange,
            'multipleOccupants': application.multipleOccupants,
            'children': application.children,
            'adults': application.adults,
            'seniors': application.seniors,
            'pets': application.pets,
            'petsDogs': application.petsDogs,
            'petsCats': application.petsCats,
            'petsOther': application.petsOther,
            'reasonUnemployment': application.reasonUnemployment,
            'reasonLowIncome': application.reasonLowIncome,
            'reasonRelationship': application.reasonRelationship,
            'reasonDisability': application.reasonDisability,
            'reasonEviction': application.reasonEviction,
            'reasonOther': application.reasonOther,
            'reasonOtherDescription': application.reasonOtherDescription,
            'veteran': application.veteran,
            'receivingSupport': application.receivingSupport,
            'sourceOfSupport': application.sourceOfSupport,
            'highPriority': application.highPriority,
            'hasIncome': application.hasIncome,
            'incomeDescription': application.incomeDescription,
            'emergencyContactPhone': application.emergencyContactPhone,
            'emergencyContactName': application.emergencyContactName,
            'emergencyContactRelationship': application.emergencyContactRelationship,
            'urgency': application.urgency,
            'submitted': application.submitted,
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