const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');
const applicationsController = require('../controllers/applications')
// const applicationsController = require('../controllers/applications');

/*---------- Public Routes ----------*/
router.post('/login', usersController.login);

router.post('/applications', applicationsController.createApplication);
/*--------- Protected Routes --------*/

router.post('/signup', usersController.signup);

router.get('/applications/:id', applicationsController.getOneApplication);
router.get('/applications', applicationsController.getAllApplications);

module.exports = router;
