export function getAllApplicants() {
    return fetch(`/api/applicants`).then(function (res) {
        return res.json();
    })
}

// show
export function getOneApplicant(applicantId) {
    return fetch(`/api/applicants/${applicantId}`).then(function (res) {
        return res.json();
    })
}
// create
export function createApplicant(applicant) {
    return fetch(`/api/applicants`, {
        method: 'POST',
        body: JSON.stringify({
            firstName: applicant.firstName,
            lastName: applicant.lastName,
            phone: applicant.phone,
            email: applicant.email,
            language: applicant.language,
            location: applicant.location,
            license: applicant.license,
            vehicle: applicant.vehicle,
            ageRange: applicant.ageRange,
            multipleOccupants: applicant.multipleOccupants,
            children: applicant.children,
            adults: applicant.adults,
            seniors: applicant.seniors,
            pets: applicant.pets,
            dogs: applicant.dogs,
            cats: applicant.cats,
            other: applicant.other,
            reasonUnemployment: applicant.reasonUnemployment,
            reasonLowIncome: applicant.reasonLowIncome,
            reasonRelationship: applicant.reasonRelationship,
            reasonDisability: applicant.reasonDisability,
            reasonEviction: applicant.reasonEviction,
            reasonOther: applicant.reasonOther,
            reasonOtherDescription: applicant.reasonOtherDescription,
            veteran: applicant.veteran,
            receivingSupport: applicant.receivingSupport,
            sourceOfSupport: applicant.sourceOfSupport,
            highPriority: applicant.highPriority,
            durationHomeless: applicant.durationHomeless,
            durationInCar: applicant.durationInCar,
            currentSituation: applicant.currentSituation,
            hasIncome: applicant.hasIncome,
            incomeDescription: applicant.incomeDescription,
            emergencyContactPhone: applicant.emergencyContactPhone,
            emergencyContactName: applicant.emergencyContactName,
            emergencyContactRelationship: applicant.emergencyContactRelationship,
        }),
        headers: {
            'content-type': 'application/json'
        }
    })
}

export function updateApplicant(applicant) {
    return fetch(`/api/applicants/${applicant._id}`, {
        method: 'PUT',
        body: JSON.stringify({
            userId: applicant.userId,
        }),
        headers: {
            'content-type': 'application/json'
        }
    })
}

export function deleteApplicant(id) {
    return fetch(`/api/applicants/${id}`, {
        method: 'delete'
    }).then(function (res) {
        return res.json()
    });
}