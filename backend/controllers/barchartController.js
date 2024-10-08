const Transaction = require('../models/Transaction');


exports.getBarChartData = async (req, res) => {
  const { month } = req.query;

  try {
    const monthNumber = parseInt(month, 10);
    const barChartData = {
      '0-100': 0,
      '101-200': 0,
      '201-300': 0,
      '301-400': 0,
      '401-500': 0,
      '501-600': 0,
      '601-700': 0,
      '701-800': 0,
      '801-900': 0,
      '901-above': 0,
    };

   
    const transactions = await Transaction.find({
      $expr: {
        $eq: [{ $month: "$dateOfSale" }, monthNumber] 
      }
    });

    
    transactions.forEach(tx => {
      const price = tx.price;
      if (price <= 100) barChartData['0-100']++;
      else if (price <= 200) barChartData['101-200']++;
      else if (price <= 300) barChartData['201-300']++;
      else if (price <= 400) barChartData['301-400']++;
      else if (price <= 500) barChartData['401-500']++;
      else if (price <= 600) barChartData['501-600']++;
      else if (price <= 700) barChartData['601-700']++;
      else if (price <= 800) barChartData['701-800']++;
      else if (price <= 900) barChartData['801-900']++;
      else barChartData['901-above']++;
    });

    res.status(200).json(barChartData); 
  } catch (error) {
    console.error('Error fetching bar chart data:', error);
    res.status(500).send('Error fetching bar chart data: ' + error.message);
    
  }
};
