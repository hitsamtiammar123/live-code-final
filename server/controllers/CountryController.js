const {Country}=require('../models');

class CountryController{
    static async index(req,res){
        let countries=await Country.findAll({order:['id']});

        res.status(200).json(countries);
    }
}

module.exports=CountryController;