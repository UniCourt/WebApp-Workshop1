import axios from "axios";

class AppService{
    constructor (){

    }

    public test (){
        return {status: 200, data: {
            message: "Test Called."
        }}
    }

    public async getCountryList(){
        const countryListUrl:string = "https://date.nager.at/api/v3/AvailableCountries";
        const result = await axios.get(countryListUrl);
        console.log(result.data);
        return {status: 201, data: result.data
        }
    }
}

export const appService = new AppService();