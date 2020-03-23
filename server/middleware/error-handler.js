
module.exports=(err,req,res,next)=>{
    console.log('Masuk error',err)
    if(err.name==='ReportNotFound'){
        res.status(404).json({message:'Not Found',errors:['Report is not found']})
    }
    else{
        res.status(500).json({message:'Masuk error',err});
    }
}