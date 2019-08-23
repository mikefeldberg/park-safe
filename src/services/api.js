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
            firstName: application.firstName,
            lastName: application.lastName,
            phone: application.phone,
            email: application.email,
            gender: application.gender,
            language: application.language,
            preferredLocation: application.preferredLocation,
            license: application.license,
            vehicle: application.vehicle,
            ageRange: application.ageRange,
            multipleOccupants: application.multipleOccupants,
            children: application.children,
            adults: application.adults,
            seniors: application.seniors,
            pets: application.pets,
            petsDogs: application.petsDogs,
            petsCats: application.petsCats,
            petsOther: application.petsOther,
            reasonUnemployment: application.reasonUnemployment,
            reasonLowIncome: application.reasonLowIncome,
            reasonRelationship: application.reasonRelationship,
            reasonDisability: application.reasonDisability,
            reasonEviction: application.reasonEviction,
            reasonOther: application.reasonOther,
            reasonOtherDescription: application.reasonOtherDescription,
            veteran: application.veteran,
            receivingSupport: application.receivingSupport,
            sourceOfSupport: application.sourceOfSupport,
            highPriority: application.highPriority,
            hasIncome: application.hasIncome,
            incomeDescription: application.incomeDescription,
            emergencyContactPhone: application.emergencyContactPhone,
            emergencyContactName: application.emergencyContactName,
            emergencyContactRelationship: application.emergencyContactRelationship,
            urgency: application.urgency,
            submitted: true,
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
            firstName: application.firstName,
            lastName: application.lastName,
            phone: application.phone,
            email: application.email,
            gender: application.gender,
            language: application.language,
            preferredLocation: application.preferredLocation,
            license: application.license,
            vehicle: application.vehicle,
            ageRange: application.ageRange,
            multipleOccupants: application.multipleOccupants,
            children: application.children,
            adults: application.adults,
            seniors: application.seniors,
            pets: application.pets,
            petsDogs: application.petsDogs,
            petsCats: application.petsCats,
            petsOther: application.petsOther,
            reasonUnemployment: application.reasonUnemployment,
            reasonLowIncome: application.reasonLowIncome,
            reasonRelationship: application.reasonRelationship,
            reasonDisability: application.reasonDisability,
            reasonEviction: application.reasonEviction,
            reasonOther: application.reasonOther,
            reasonOtherDescription: application.reasonOtherDescription,
            veteran: application.veteran,
            receivingSupport: application.receivingSupport,
            sourceOfSupport: application.sourceOfSupport,
            highPriority: application.highPriority,
            hasIncome: application.hasIncome,
            incomeDescription: application.incomeDescription,
            emergencyContactPhone: application.emergencyContactPhone,
            emergencyContactName: application.emergencyContactName,
            emergencyContactRelationship: application.emergencyContactRelationship,
            urgency: application.urgency,
            submitted: false,
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