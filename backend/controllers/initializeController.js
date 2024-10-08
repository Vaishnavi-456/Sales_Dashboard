const Transaction = require('../models/Transaction');
const axios = require('axios'); 


exports.fetchAndSeedDatabase = async (req, res) => {
  try {
    const response = await axios.get('https://s3.amazonaws.com/roxiler.com/product_transaction.json'); // Fetch data from the API
    const transactions = response.data; 

   
    await Transaction.insertMany(transactions);
    
    res.status(200).send('Database initialized with seed data'); 
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Error fetching data'); 
  }
};
