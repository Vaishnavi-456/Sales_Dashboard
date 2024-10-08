const Transaction = require('../models/Transaction'); 


exports.getStatistics = async (req, res) => {
  const { month } = req.query; 
  try {
    const monthNumber = parseInt(month, 10);

    
    console.log('Fetching statistics for month:', monthNumber);

    const statistics = await Transaction.aggregate([
      {
        $match: {
          $expr: {
            $eq: [{ $month: "$dateOfSale" }, monthNumber] 
          }
        }
      },
      {
        $group: {
          _id: null,
          totalSales: { $sum: "$price" },
          soldItems: { $sum: { $cond: [{ $eq: ["$sold", true] }, 1, 0] } },
          notSoldItems: { $sum: { $cond: [{ $eq: ["$sold", false] }, 1, 0] } }
        }
      }
    ]);

    console.log('Aggregated Statistics:', statistics); 

    const result = statistics.length > 0 ? statistics[0] : { totalSales: 0, soldItems: 0, notSoldItems: 0 };

    res.status(200).json({
      totalSales: result.totalSales, 
      soldItems: result.soldItems,
      notSoldItems: result.notSoldItems,
    });
  } catch (error) {
    console.error('Error fetching statistics:', error);
    res.status(500).send('Error fetching statistics: ' + error.message);
  }
};
