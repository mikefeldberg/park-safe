const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');
const applicationsController = require('../controllers/applications')
// const applicationsController = require('../controllers/applications');

/*---------- Public Routes ----------*/
router.post('/signup', usersController.signup);
router.post('/login', usersController.login);


router.get('/applications', applicationsController.getAllApplications);
router.post('/applications', applicationsController.createApplication);
/*--------- Protected Routes --------*/

// router.put('/applications/:id', applicationsController.updateApplication);
// router.get('/applications', applicationsController.getAllApplications);
// router.get('/applications/:id', applicationsController.getOneApplication);
// router.post('/applications', applicationsController.createApplication);
// router.delete('/applications/:id', applicationsController.deleteApplication);

module.exports = router;
