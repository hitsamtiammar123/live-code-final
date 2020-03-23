const router=require('express').Router();
const countries=require('./countries');
const reports=require('./reports');
const authcontroller=require('../controllers/AuthController')

router.use('/countries',countries);
router.use('/reports',reports);
router.post('/login',authcontroller.login)

module.exports=router;
