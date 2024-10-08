const express = require('express');
const router = express.Router();
const { fetchAndSeedDatabase } = require('../controllers/initializeController'); 


router.get('/', fetchAndSeedDatabase); 

module.exports = router;  
