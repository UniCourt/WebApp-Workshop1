const express = require("express");
const axios = require('axios');
const router = express.Router();
const { query } = require("../postgres");

router.get("/holiday-info/:year/:countrycode", async (req, res) => {
  const year = req.params.year;
  const countryCode = req.params.countrycode;
  console.log(countryCode.length)
  let result = {}
  try {

    if (countryCode.length == 2) {
      /**
       * Insert Country code and year info into country (Parent) table
       */
      const countryStatement = `INSERT INTO country
      (country_code, holiday_year)
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

        result.status = "success";
        result.data = data;
        
        /**
         * TO DO - WORKSHOP 2
         * Insert all the Holiday list using loop and bulk insert statement
         */

      } else {
        result.status = "fail";
        result.message = `The country code ${countryCode} and year ${year} alreday exists in the database`;
      }

    } else {
      result.status = "fail";
      result.message = "Conutry code should be 2 character long";
    }

    return res.json(result);

  } catch (e) {
    console.log(`E R R O R: ${e.message}`);
    return res.status(500).json({ message: "Something Went Wrong!!" });
  }
});

// Get the list of Available country code
router.get("/list-countries", async (req, res) => {
  try {
    const countryUrl = "https://date.nager.at/api/v3/AvailableCountries";
    const countryList = await axios.get(countryUrl);

    res.json(countryList.data)

  } catch (error) {
    return res.status(500).json({ message: "Something Went Wrong!!" });
  }
});

module.exports = router;