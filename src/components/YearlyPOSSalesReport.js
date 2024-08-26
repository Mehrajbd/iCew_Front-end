import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const YearlyPOSSalesReport = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchReportData = async () => {
    const apiUrl = `/api/yearly_pos_sales_report?start_date=${startDate}&end_date=${endDate}`;
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
      <h2>Yearly POS Sales Report</h2>
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
              <th>Sales</th>
              <th>Items Sold</th>
              <th>Total Amount</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.date}</td>
                <td>{item.sales}</td>
                <td>{item.itemsSold}</td>
                <td>{item.totalAmount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default YearlyPOSSalesReport;
