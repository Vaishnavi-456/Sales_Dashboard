const Transaction = require('../models/Transaction'); 


exports.getTransactions = async (req, res) => {
  const { page = 1, perPage = 10, search = '' } = req.query;

  
  const query = search
    ? {
        $or: [
          { title: { $regex: search, $options: 'i' } },       
          { description: { $regex: search, $options: 'i' } },  
        ]
      }
    : {};  

  console.log('Constructed Query:', query);  

  try {
    const transactions = await Transaction.find(query) 
      .skip((page - 1) * perPage) 
      .limit(parseInt(perPage));  

    console.log('Transactions Retrieved:', transactions);  

    if (transactions.length === 0) {
      console.log('No transactions found'); 
    }

    res.status(200).json(transactions); 
  } catch (error) {
    console.error('Error fetching transactions:', error);
    res.status(500).send('Error fetching transactions: ' + error.message); 
  }
};
