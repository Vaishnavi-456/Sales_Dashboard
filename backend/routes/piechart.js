const express = require('express');
const router = express.Router();
const { getPieChartData } = require('../controllers/piechartController'); 


router.get('/', getPieChartData); 

module.exports = router; 
