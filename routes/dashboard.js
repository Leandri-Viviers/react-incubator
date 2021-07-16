var express = require('express')
var router = express.Router()

var controller = require('../controllers/dashboardController');

router.get('/weatherByCityName/:name&:unit', controller.getWeatherByCityName);
// router.get('/weatherByCityCode/:code', controller.getWeatherByCityCode);

module.exports = router;