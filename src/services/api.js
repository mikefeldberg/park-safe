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
            userId: applicant.userId,
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