const mongoose = require('mongoose');
const Transaction = require('../models/Transaction');


const getRandomDate = (start, end) => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  };
  
  const addRandomDateOfSale = async () => {
    try {
      const transactions = await Transaction.find({}); 
  
      for (const tx of transactions) {
        
        const randomDate = getRandomDate(new Date(2023, 0, 1), new Date(2023, 11, 31));
        await Transaction.updateOne({ _id: tx._id }, { $set: { dateOfSale: randomDate } });
      }
  
      console.log('Random dateOfSale field added successfully');
    } catch (error) {
      console.error('Error adding dateOfSale:', error);
    } 
  };

  module.exports = addRandomDateOfSale