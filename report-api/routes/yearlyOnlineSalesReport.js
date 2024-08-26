// routes/yearlyOnlineSalesReport.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const { startDate, endDate } = req.query;
  // Fetch data from database based on startDate and endDate
  const data = [
    { date: '2023-01-01', salesAmount: 288000, transactions: 14400 },
    { date: '2024-01-01', salesAmount: 324000, transactions: 16200 },
    // More data
  ];
  res.json(data);
});

module.exports = router;
