// routes/dailyPurchaseReport.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const { startDate, endDate } = req.query;
  // Fetch data from database based on startDate and endDate
  const data = [
    { date: '2024-08-01', purchaseAmount: 500, itemsPurchased: 20 },
    { date: '2024-08-02', purchaseAmount: 700, itemsPurchased: 25 },
 
  ];
  res.json(data);
});

module.exports = router;
