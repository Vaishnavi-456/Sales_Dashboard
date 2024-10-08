const Transaction = require('../models/Transaction');


exports.getPieChartData = async (req, res) => {
  const { month } = req.query;

  try {
    const monthNumber = parseInt(month, 10);
    const categoryCounts = {};

    
    const transactions = await Transaction.find({
      $expr: {
        $eq: [{ $month: "$dateOfSale" }, monthNumber] 
      }
    });

    
    transactions.forEach(tx => {
      if (!categoryCounts[tx.category]) categoryCounts[tx.category] = 0;
      categoryCounts[tx.category]++;
    });

    res.status(200).json(categoryCounts);
  } catch (error) {
    console.error('Error fetching pie chart data:', error);
    res.status(500).send('Error fetching pie chart data: ' + error.message);
  }
};
