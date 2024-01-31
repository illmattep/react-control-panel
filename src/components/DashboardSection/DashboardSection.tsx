import React from 'react';
import './DashboardSection.scss';

const DashboardSection: React.FC = () => {
  return (
    <div className="dashboard-section">
      <div className="dashboard-item">
        <div className="icon">*icon1*</div>
        <div className="text">Total Users</div>
      </div>
      <div className="dashboard-item">
        <div className="icon">*icon2*</div>
        <div className="text">Active Users</div>
      </div>
      <div className="dashboard-item">
        <div className="icon">*icon3*</div>
        <div className="text">Revenue</div>
      </div>
      <div className="dashboard-item">
        <div className="icon">*icon4*</div>
        <div className="text">New Orders</div>
      </div>
    </div>
  );
};

export default DashboardSection;
