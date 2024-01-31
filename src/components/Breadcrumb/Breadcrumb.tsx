import React from 'react';
import './Breadcrumb.scss';

interface BreadcrumbProps {
  path: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ path }) => {
  return (
    <div className="breadcrumb">
      <div className="icon">*icona control panel*</div>
      <div className="path">{path}</div>
    </div>
  );
};

export default Breadcrumb;
