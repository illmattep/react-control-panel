import React from 'react';
import * as icons from '../../assets/icons/icons';
import './Breadcrumb.scss';

interface BreadcrumbProps {
  path: string;
}
const getIcon = (path: string) => {
  // Logic to determine which icon to use based on the path
  // For example:
  if (path.includes('Home')) {
    return icons.ControlPanel;
  } else if (path.includes('Settings')) {
    return icons.settings;
  } else if (path.includes('Dashboard')) {
    return icons.Dashboard;
  } else {
    return icons.failed;
  }
};

const Breadcrumb: React.FC<BreadcrumbProps> = ({ path }) => {
  const Icon = getIcon(path);
  return (
    <div className="breadcrumb">
      <img className="icon" src={Icon} alt="Icon"></img>
      <div className="path">{path}</div>
    </div>
  );
};

export default Breadcrumb;
