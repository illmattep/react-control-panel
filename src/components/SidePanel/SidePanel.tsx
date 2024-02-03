import React, { useState } from 'react';
import './SidePanel.scss';
import * as icons from '../../assets/icons/icons';

interface MenuItem {
  icon: string;
  text: string;
  isOpen: boolean;
  options: string[];
}

const SidePanel: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    { icon: icons.ControlPanel, text: 'Control Panel', isOpen: false, options: [] },
    { icon: icons.variables, text: 'Variables', isOpen: false, options: [] },
    { icon: icons.settings, text: 'Settings', isOpen: false, options: ['Option 1', 'Option 2', 'Option 3'] },
    { icon: icons.discounts, text: 'Discounts', isOpen: false, options: ['Option 1', 'Option 2', 'Option 3'] },
    { icon: icons.pagesandcms, text: 'Pages & CMS', isOpen: false, options: ['Option 1', 'Option 2', 'Option 3'] },
  ]);

  const additionalMenuItems = [
    { icon: icons.docs, text: 'Docs' },
    { icon: icons.Dashboard, text: 'Dashboard' },
    { icon: icons.help, text: 'Help' },
  ];

  const toggleDropdown = (index: number) => {
    setMenuItems((prevMenuItems) => {
      const updatedMenuItems = prevMenuItems.map((item, i) => {
        if (i === index) {
          return { ...item, isOpen: !item.isOpen };
        } else {
          return { ...item, isOpen: false };
        }
      });
      return updatedMenuItems;
    });
  };
  
  return (
    <div className="side-panel">
      <div className="menu">
        <div className="title">CoralMC</div>
        {menuItems.map((item, index) => (
          <div className={`menu-item ${item.isOpen ? 'open' : ''}`} key={index} onClick={() => toggleDropdown(index)}>
            <div className="button-title">
              <img src={item.icon} alt={item.text} />
              {item.text}
            </div>
            {item.isOpen && (
              <div className="submenu">
                {item.options.map((option, optionIndex) => (
                  <div className="submenu-option" key={optionIndex}>
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
        <div className="separator" />
        {additionalMenuItems.map((item, index) => (
          <div className="menu-item" key={index}>
            <div className="button-title">
              <img src={item.icon} alt={item.text} />
              {item.text}
            </div>
          </div>
        ))}
      </div>
      <div className="icons">
        <img src={icons.DashboardSettings} alt="Icon 1" />
        <img src={icons.Globe} alt="Icon 2" />
        <img src={icons.UserSettings} alt="Icon 3" />
      </div>
    </div>
  );
};
export default SidePanel;
