// routes/monthlyOnlineSalesReport.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const { startDate, endDate } = req.query;
  // Fetch data from database based on startDate and endDate
  const data = [
    { date: '2024-08-01', salesAmount: 24000, transactions: 1200 },
    { date: '2024-08-02', salesAmount: 27000, transactions: 1300 },
    // More data
  ];
  res.json(data);
});

module.exports = router;
