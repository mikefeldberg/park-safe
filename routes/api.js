const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');
// const mainmodelsController = require('../controllers/mainmodels');

/*---------- Public Routes ----------*/
router.post('/signup', usersController.signup);
router.post('/login', usersController.login);

/*--------- Protected Routes --------*/

// router.put('/mainmodels/:id', mainmodelsController.updateMAINMODEL);
// router.get('/mainmodels', mainmodelsController.getAllMAINMODELs);
// router.get('/mainmodels/:id', mainmodelsController.getOneMAINMODEL);
// router.post('/mainmodels', mainmodelsController.createMAINMODEL);
// router.delete('/mainmodels/:id', mainmodelsController.deleteMAINMODEL);

module.exports = router;
