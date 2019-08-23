export function getAllApplications() {
    return fetch(`/api/applications`).then(function (res) {
        return res.json();
    })
}

// show
export function getOneApplication(applicationId) {
    return fetch(`/api/applications/${applicationId}`).then(function (res) {
        return res.json();
    })
}

// create
export function createApplication(application) {
    return fetch(`/api/applications`, {
        method: 'POST',
        body: JSON.stringify({
            ageRange: application.ageRange,
            email: application.email,
            emergencyContactName: application.emergencyContactName,
            emergencyContactPhone: application.emergencyContactPhone,
            emergencyContactRelationship: application.emergencyContactRelationship,
            gender: application.gender,
            hasIncome: application.hasIncome,
            highPriority: application.highPriority,
            incomeDescription: application.incomeDescription,
            language: application.language,
            license: application.license,
            multipleOccupants: application.multipleOccupants,
            nameFirst: application.nameFirst,
            nameLast: application.nameLast,
            occupantsAdults: application.occupantsAdults,
            occupantsChildren: application.occupantsChildren,
            occupantsSeniors: application.occupantsSeniors,
            pets: application.pets,
            petsCats: application.petsCats,
            petsDogs: application.petsDogs,
            petsOther: application.petsOther,
            phone: application.phone,
            preferredLocation: application.preferredLocation,
            reasonDisability: application.reasonDisability,
            reasonEviction: application.reasonEviction,
            reasonLowIncome: application.reasonLowIncome,
            reasonOther: application.reasonOther,
            reasonOtherDescription: application.reasonOtherDescription,
            reasonRelationship: application.reasonRelationship,
            reasonUnemployment: application.reasonUnemployment,
            receivingSupport: application.receivingSupport,
            sourceOfSupport: application.sourceOfSupport,
            submitted: true,
            urgency: application.urgency,
            vehicle: application.vehicle,
            veteran: application.veteran,
        }),
        headers: {
            'content-type': 'application/json'
        }
    })
}
export function createPartialApplication(application) {
    return fetch(`/api/applicationp`, {
        method: 'POST',
        body: JSON.stringify({
            ageRange: application.ageRange,
            email: application.email,
            emergencyContactName: application.emergencyContactName,
            emergencyContactPhone: application.emergencyContactPhone,
            emergencyContactRelationship: application.emergencyContactRelationship,
            gender: application.gender,
            hasIncome: application.hasIncome,
            highPriority: application.highPriority,
            incomeDescription: application.incomeDescription,
            language: application.language,
            license: application.license,
            multipleOccupants: application.multipleOccupants,
            nameFirst: application.nameFirst,
            nameLast: application.nameLast,
            occupantsAdults: application.occupantsAdults,
            occupantsChildren: application.occupantsChildren,
            occupantsSeniors: application.occupantsSeniors,
            pets: application.pets,
            petsCats: application.petsCats,
            petsDogs: application.petsDogs,
            petsOther: application.petsOther,
            phone: application.phone,
            preferredLocation: application.preferredLocation,
            reasonDisability: application.reasonDisability,
            reasonEviction: application.reasonEviction,
            reasonLowIncome: application.reasonLowIncome,
            reasonOther: application.reasonOther,
            reasonOtherDescription: application.reasonOtherDescription,
            reasonRelationship: application.reasonRelationship,
            reasonUnemployment: application.reasonUnemployment,
            receivingSupport: application.receivingSupport,
            sourceOfSupport: application.sourceOfSupport,
            submitted: false,
            urgency: application.urgency,
            vehicle: application.vehicle,
            veteran: application.veteran,
        }),
        headers: {
            'content-type': 'application/json'
        }
    })
}

export function updateApplication(application) {
    return fetch(`/api/applications/${application._id}`, {
        method: 'PUT',
        body: JSON.stringify({
            userId: application.userId,
        }),
        headers: {
            'content-type': 'application/json'
        }
    })
}

export function deleteApplication(id) {
    return fetch(`/api/applications/${id}`, {
        method: 'delete'
    }).then(function (res) {
        return res.json()
    });
}