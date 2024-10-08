const express = require('express');
const router = express.Router();
const initializeRoute = require('./initialize'); 
const transactionsRoute = require('./transactions'); 
const statisticsRoute = require('./statistics'); 
const barchartRoute = require('./barchart'); 
const piechartRoute = require('./piechart'); 


router.use('/initialize', initializeRoute); 
router.use('/transactions', transactionsRoute); 
router.use('/statistics', statisticsRoute); 
router.use('/barchart', barchartRoute); 
router.use('/piechart', piechartRoute); 

module.exports = router; 
