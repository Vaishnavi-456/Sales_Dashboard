const express = require('express');
const router = express.Router();
const { getBarChartData } = require('../controllers/barchartController');  


router.get('/', getBarChartData); 

module.exports = router;  
