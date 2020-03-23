const jwt=require('jsonwebtoken')
const {User}=require('../models');
const md5=require('md5')

class AuthController{
    static async login(req,res,next){
        let {username,password}=req.body;
        try{
            let user=await User.findOne({where:{username,password:md5(password)}});
            let obj={};
            obj.username=user.username;
            obj.id=user.id
            let token=jwt.sign(obj,process.env.JWT_SECRET)
            res.status(200).json({token})
        }catch(err){
            next(err)
        }
    }
}

module.exports=AuthController;