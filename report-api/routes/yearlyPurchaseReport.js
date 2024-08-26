// routes/yearlyPurchaseReport.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const { startDate, endDate } = req.query;
  // Fetch data from database based on startDate and endDate
  const data = [
    { date: '2023-01-01', purchaseAmount: 180000, itemsPurchased: 7200 },
    { date: '2024-01-01', purchaseAmount: 216000, itemsPurchased: 8400 },
    // More data
  ];
  res.json(data);
});

module.exports = router;
