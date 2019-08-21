export function getAllMAINMODELs() {
    return fetch(`/api/mainmodels`).then(function (res) {
        return res.json();
    })
}

// show
export function getOneMAINMODEL(mainmodelId) {
    return fetch(`/api/mainmodels/${mainmodelId}`).then(function (res) {
        return res.json();
    })
}
// create
export function createMAINMODEL(mainmodel) {
    return fetch(`/api/mainmodels`, {
        method: 'POST',
        body: JSON.stringify({
            userId: mainmodel.userId,
        }),
        headers: {
            'content-type': 'application/json'
        }
    })
}

export function updateMAINMODEL(mainmodel) {
    return fetch(`/api/mainmodels/${mainmodel._id}`, {
        method: 'PUT',
        body: JSON.stringify({
            userId: mainmodel.userId,
        }),
        headers: {
            'content-type': 'application/json'
        }
    })
}

export function deleteMAINMODEL(id) {
    return fetch(`/api/mainmodels/${id}`, {
        method: 'delete'
    }).then(function (res) {
        return res.json()
    });
}