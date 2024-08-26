import React, { useState } from 'react';
import NavMenu from './components/NavMenu';
import InventoryReport from './components/InventoryReport';
import DailyPOSSalesReport from './components/DailyPOSSalesReport';
import MonthlyPOSSalesReport from './components/MonthlyPOSSalesReport';
import YearlyPOSSalesReport from './components/YearlyPOSSalesReport';
import DailyOnlineSalesReport from './components/DailyOnlineSalesReport';
import MonthlyOnlineSalesReport from './components/MonthlyOnlineSalesReport';
import YearlyOnlineSalesReport from './components/YearlyOnlineSalesReport';
import DailyPurchaseReport from './components/DailyPurchaseReport';
import MonthlyPurchaseReport from './components/MonthlyPurchaseReport';
import YearlyPurchaseReport from './components/YearlyPurchaseReport';

const App = () => {
  const [reportType, setReportType] = useState('');

  const renderReport = () => {
    switch (reportType) {
      case 'Inventory Report':
        return <InventoryReport />;
      case 'Daily POS Sales Report':
        return <DailyPOSSalesReport />;
      case 'Monthly POS Sales Report':
        return <MonthlyPOSSalesReport />;
      case 'Yearly POS Sales Report':
        return <YearlyPOSSalesReport />;
      case 'Daily Online Sales Report':
        return <DailyOnlineSalesReport />;
      case 'Monthly Online Sales Report':
        return <MonthlyOnlineSalesReport />;
      case 'Yearly Online Sales Report':
        return <YearlyOnlineSalesReport />;
      case 'Daily Purchase Report':
        return <DailyPurchaseReport />;
      case 'Monthly Purchase Report':
        return <MonthlyPurchaseReport />;
      case 'Yearly Purchase Report':
        return <YearlyPurchaseReport />;
      default:
        return <div>Please select a report</div>;
    }
  };

  return (
    <div className="App">
      <NavMenu setReportType={setReportType} />
      <div className="p-4">
        {renderReport()}
      </div>
    </div>
  );
};

export default App;
