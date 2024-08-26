import React from 'react';

const NavMenu = ({ setReportType }) => {
  return (
    <div className="p-4 bg-gray-800 text-white">
      <h1 className="text-xl">Reports</h1>
      <select 
        onChange={(e) => setReportType(e.target.value)} 
        className="mt-2 p-2 bg-gray-700 text-white"
      >
        <option value="">Select a Report</option>
        <option value="Inventory Report">Inventory Report</option>
        <option value="Daily POS Sales Report">Daily POS Sales Report</option>
        <option value="Monthly POS Sales Report">Monthly POS Sales Report</option>
        <option value="Yearly POS Sales Report">Yearly POS Sales Report</option>
        <option value="Daily Online Sales Report">Daily Online Sales Report</option>
        <option value="Monthly Online Sales Report">Monthly Online Sales Report</option>
        <option value="Yearly Online Sales Report">Yearly Online Sales Report</option>
        <option value="Daily Purchase Report">Daily Purchase Report</option>
        <option value="Monthly Purchase Report">Monthly Purchase Report</option>
        <option value="Yearly Purchase Report">Yearly Purchase Report</option>
      </select>
    </div>
  );
};

export default NavMenu;
