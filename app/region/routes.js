const express = require('express')
const router = express.Router();
var cors = require('cors')
const {getCountries, getCities} = require('./controllers')

router.get('/api/region/countries' , cors(), getCountries)
router.get('/api/region/cities' , getCities)


module.exports = router; 