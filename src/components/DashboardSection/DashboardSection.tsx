import React from 'react';
import * as icons from '../../assets/icons/icons';
import './DashboardSection.scss';

const DashboardSection: React.FC = () => {
  const dashboardItems = [
    { icon: icons.users, text: 'Staff Users', subtext: '14', additionalSubtext: "⠀" },
    { icon: icons.money, text: 'Total in Sales', subtext: '200.000 EUR', additionalSubtext: 'All time' },
    { icon: icons.calendar, text: 'Total in Sales', subtext: '200.000 EUR', additionalSubtext: 'Current month' },
    { icon: icons.sales, text: 'Average Payment', subtext: '13 EUR', additionalSubtext: 'Current month' },
  ];

  return (
    <div className="dashboard-section">
      {dashboardItems.map((item, index) => (
        <div className="dashboard-item" key={index}>
          <div className="text"><img className="icon" src={item.icon} alt='icon'></img>{item.text}</div>
          <div className="subtext-big">{item.subtext}</div>
          <div className="subtext-small">{item.additionalSubtext}</div>
        </div>
      ))}
    </div>
  );
};

export default DashboardSection;
