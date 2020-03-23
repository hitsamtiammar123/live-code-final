const jwt=require('jsonwebtoken')

module.exports=(req,res,next)=>{
    let {token}=req.headers;
    if(!token){
        res.status(401).json({mesage:'Token is missing'});
        return;
    }

    try{
        let decoded=jwt.verify(token,process.env.JWT_SECRET||'hehehe')
        req.user=decoded;
        next()
    }catch(err){
        next(err);
    }
}