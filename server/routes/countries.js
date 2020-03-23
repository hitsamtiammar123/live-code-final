const router=require('express').Router();
const controller=require('../controllers/CountryController');

router.get('/',controller.index)

module.exports=router;