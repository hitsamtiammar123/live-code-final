const {Report,Country}=require('../models')

class ReportController{
    static async index(req,res,next){
        let user=req.user;
        try{
            let userId=user.id;
            let reports=await Report.findAll({
                where:{UserId:userId},
                attributes:[['report','cases']],
                include:Country})
            res.status(200).json(reports)
        }catch(err){
            next(err)
        }
    }

    static async create(req,res,next){
        let UserId=req.user.id

        try{
            let {report,CountryId}=req.body;
            let reportObj=await Report.create({report,CountryId,UserId},{include:Country})
            let country=await reportObj.getCountry();
            let cases=country.get('cases')
            country.set('cases',cases+report)
            await country.save()
            res.status(201).json({report:reportObj})
        }catch(err){
            next(err)
        }
    }

    static async delete(req,res,next){
        let reportId=req.params.id
        try{
            let reportObj=await Report.findByPk(reportId)
            if(!reportObj){
                let err={name:'ReportNotFound'}
                next(err)
                return
            }
            let countryObj=await reportObj.getCountry()
            let report_cases=reportObj.report
            let country_cases=countryObj.cases
            countryObj.set('cases',country_cases-report_cases)
            await countryObj.save();
            await reportObj.destroy()
            countryObj.Country=countryObj
            res.status(200).json({country:countryObj,report:'Successfully Deleted'})
        }catch(err){
            next(err)
        }
    }
}

module.exports=ReportController;