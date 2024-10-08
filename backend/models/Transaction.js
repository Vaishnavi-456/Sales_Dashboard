const mongoose = require('mongoose');


const transactionSchema = new mongoose.Schema({
  id: { type: String, required: true },         
  title: { type: String, required: true },      
  description: { type: String, required: true }, 
  price: { type: Number, required: true },       
  category: { type: String, required: true },     
  sold: { type: Boolean, required: true },        
  image: { type: String, required: true }, 
  dateOfSale: {type: Date}   
});


const Transaction = mongoose.model('Transaction', transactionSchema);


module.exports = Transaction;
