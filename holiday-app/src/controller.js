const service = require('./service');

const getIndex = async function (req, res) {
    res.send(await service.serviceClassObj.getIndex());
}

const getConutryList = async function (req, res) {
    res.send(await service.serviceClassObj.getCountryList());
}

const countryHoliday = async function (req, res) {
    
    console.log(req.body)
    if (req.body.countryCode == null || req.body.year == null) {
        
        //Not Acceptable
        res.status(406).json({message: "Invalid data"})
    } else {
        res.send(await service.serviceClassObj.insertCountryHoliday(req.body.countryCode, req.body.year));
    }    
}

module.exports = {
    getIndex,
    getConutryList,
    countryHoliday
}