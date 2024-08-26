// routes/dailyOnlineSalesReport.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const { startDate, endDate } = req.query;
  // Fetch data from database based on startDate and endDate
  const data = [
    { date: '2024-08-01', salesAmount: 800, transactions: 30 },
    { date: '2024-08-02', salesAmount: 900, transactions: 40 },
    
  ];
  res.json(data);
});

module.exports = router;
