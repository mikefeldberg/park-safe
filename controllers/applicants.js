
const Applicant = require('../models/mainmodel');

module.exports = {
    getAllApplicants
}

function getAllApplicants (req,res){
    Applicant.find({}).then(function(applicants){
        res.status(200).json(applicants)
    })
};