// routes/monthlyPurchaseReport.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const { startDate, endDate } = req.query;
  // Fetch data from database based on startDate and endDate
  const data = [
    { date: '2024-08-01', purchaseAmount: 15000, itemsPurchased: 600 },
    { date: '2024-08-02', purchaseAmount: 18000, itemsPurchased: 700 },
    // More data
  ];
  res.json(data);
});

module.exports = router;
