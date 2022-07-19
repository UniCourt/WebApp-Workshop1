const axios = require('axios');
const { query } = require('./config');

class serviceClass {
    constructor() {}

    async getIndex () {
        var q = "SELECT NOW()";
        let res = await query(q);
        return { message: res.rows};
    }

    /**
     * List the available countries names from the API
     */
    async getCountryList() {
        try {
            const countryUrl = "https://date.nager.at/api/v3/AvailableCountries";
            const countryList = await axios.get(countryUrl);
        
            return countryList.data;
        
          } catch (error) {
            console.log(error.toString());
            return { message: "Something Went Wrong!!" };
          }
    }
    
    /**
     * Insert Holiday list into Database
     */
    async insertCountryHoliday(countryCode, year) {
        let result = {};

        if (countryCode.length != 2)
            return { status: "fail", message: "Invalid country country code" };

        const countryStatement = `INSERT INTO country (country_code, holiday_year)
            VALUES(
                '${countryCode}',
                ${year}
            ) ON CONFLICT ON CONSTRAINT uq_year_code_together DO NOTHING RETURNING id`;
        
        let insertCountry = await query(countryStatement);
        
        if (insertCountry.rowCount > 0) {

            let primaryKeyId = insertCountry.rows[0].id;

        let holidayApiUrl = `https://date.nager.at/api/v3/PublicHolidays/${year}/${countryCode}`;
        
        const holidayInfoResponse = await axios.get(holidayApiUrl);
        const data = holidayInfoResponse.data;

        /**
         * Insert holiday list into database
         */
         const holidayStatement = `INSERT INTO holiday
         (country_id, holiday_date, local_name, holiday_name, launch_year)
         VALUES(
            ${primaryKeyId},
           '${data[0].date}',
           '${data[0].localName.replace("\'","")}',
           '${data[0].name.replace("\'","")}',
            ${data[0].launchYear}
         )`;
   
        await query(holidayStatement);

            return { status: "success", message: "Holiday list inserted successfully" };
        } else {
            return { status: "fail", message: "Country code and year alreday exists in the database" };
        }

    }

}

const serviceClassObj = new serviceClass();

module.exports = {
    serviceClassObj
};