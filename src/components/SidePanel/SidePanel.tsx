import React from 'react';
import './SidePanel.scss';

const SidePanel: React.FC = () => {
  return (
    <div className="side-panel">
      <div className="menu">
        <div className="title">CoralMC</div>
        <div className="menu-item">
          <span className="icon icon-control-panel" /> Control Panel
        </div>
        <div className="menu-item">
          <span className="icon icon-variables" /> Variables
        </div>
        <div className="menu-item">
          <span className="icon icon-settings" /> Settings
        </div>
        <div className="menu-item">
          <span className="icon icon-discounts" /> Discounts
        </div>
        <div className="menu-item">
          <span className="icon icon-pages" /> Pages & CMS
        </div>
        <div className="separator" />
        <div className="menu-item">Docs</div>
        <div className="menu-item">Dashboard</div>
        <div className="menu-item">Help</div>
      </div>
      <div className="icons">
        <img src="icon1.png" alt="Icon 1" />
        <img src="icon2.png" alt="Icon 2" />
        <img src="icon3.png" alt="Icon 3" />
      </div>
    </div>
  );
};

export default SidePanel;
