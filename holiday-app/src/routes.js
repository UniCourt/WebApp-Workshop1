const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.get('/', controller.getIndex);
router.get('/list-countries', controller.getConutryList);
router.post('/country-holiday', controller.countryHoliday);

module.exports = router;