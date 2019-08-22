const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');
const applicantsController = require('../controllers/applicants')
// const applicantsController = require('../controllers/applicants');

/*---------- Public Routes ----------*/
router.post('/signup', usersController.signup);
router.post('/login', usersController.login);


router.get('/applicants', applicantsController.getAllApplicants);
router.post('/applicants', applicantsController.createApplicant);
/*--------- Protected Routes --------*/

// router.put('/applicants/:id', applicantsController.updateApplicant);
// router.get('/applicants', applicantsController.getAllApplicants);
// router.get('/applicants/:id', applicantsController.getOneApplicant);
// router.post('/applicants', applicantsController.createApplicant);
// router.delete('/applicants/:id', applicantsController.deleteApplicant);

module.exports = router;
