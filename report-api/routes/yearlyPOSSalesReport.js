// routes/yearlyPOSSalesReport.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const { startDate, endDate } = req.query;
  // Fetch data from database based on startDate and endDate
  const data = [
    { date: '2023-01-01', salesAmount: 360000, transactions: 18000 },
    { date: '2024-01-01', salesAmount: 540000, transactions: 20400 },
    // More data
  ];
  res.json(data);
});

module.exports = router;
