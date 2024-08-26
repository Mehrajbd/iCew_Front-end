import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const MonthlyPurchaseReport = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchReportData = async () => {
    const apiUrl = `/api/monthly_purchase_report?start_date=${startDate}&end_date=${endDate}`;
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setData(result);
      setError(null);
    } catch (error) {
      setError(error.message);
      setData([]);
    }
  };

  return (
    <div>
      <h2>Monthly Purchase Report</h2>
      <div className="date-picker">
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} placeholderText="Start Date" />
        <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} placeholderText="End Date" />
        <button onClick={fetchReportData} disabled={!startDate || !endDate}>
          Go
        </button>
      </div>
      {error && <p className="error">{error}</p>}
      {data.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Purchases</th>
              <th>Items Purchased</th>
              <th>Total Amount</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.date}</td>
                <td>{item.purchases}</td>
                <td>{item.itemsPurchased}</td>
                <td>{item.totalAmount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MonthlyPurchaseReport;
