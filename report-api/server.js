// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Import routes
const dailyPOSSalesReport = require('./routes/dailyPOSSalesReport');
const monthlyPOSSalesReport = require('./routes/monthlyPOSSalesReport');
const yearlyPOSSalesReport = require('./routes/yearlyPOSSalesReport');
const dailyOnlineSalesReport = require('./routes/dailyOnlineSalesReport');
const monthlyOnlineSalesReport = require('./routes/monthlyOnlineSalesReport');
const yearlyOnlineSalesReport = require('./routes/yearlyOnlineSalesReport');
const dailyPurchaseReport = require('./routes/dailyPurchaseReport');
const monthlyPurchaseReport = require('./routes/monthlyPurchaseReport');
const yearlyPurchaseReport = require('./routes/yearlyPurchaseReport');

// Use routes
app.use('/api/daily_pos_sales_report', dailyPOSSalesReport);
app.use('/api/monthly_pos_sales_report', monthlyPOSSalesReport);
app.use('/api/yearly_pos_sales_report', yearlyPOSSalesReport);
app.use('/api/daily_online_sales_report', dailyOnlineSalesReport);
app.use('/api/monthly_online_sales_report', monthlyOnlineSalesReport);
app.use('/api/yearly_online_sales_report', yearlyOnlineSalesReport);
app.use('/api/daily_purchase_report', dailyPurchaseReport);
app.use('/api/monthly_purchase_report', monthlyPurchaseReport);
app.use('/api/yearly_purchase_report', yearlyPurchaseReport);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});