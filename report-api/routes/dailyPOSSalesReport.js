// routes/dailyPOSSalesReport.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const { startDate, endDate } = req.query;
  // Fetch data from database based on startDate and endDate
  const data = [
    { date: '2024-08-01', salesAmount: 1000, transactions: 50 },
    { date: '2024-08-02', salesAmount: 1500, transactions: 70 },
    
  ];
  res.json(data);
});

module.exports = router;
