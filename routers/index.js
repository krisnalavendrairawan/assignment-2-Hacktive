const router = require('express').Router();
const { TeachersController } = require('../controllers/TeacherController');
const { UsersController } = require('../controllers/UsersController');
const { authentication } = require('../middlewares/authentication');


router.post('/login', UsersController.login);
router.use(authentication);
router.get('/teachers', TeachersController.getAllTeachers);




module.exports = router;