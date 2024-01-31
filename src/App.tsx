import React from 'react';
import SidePanel from './components/SidePanel/SidePanel';
import Breadcrumb from './components/Breadcrumb/Breadcrumb';
import Dashboard from './components/DashboardSection/DashboardSection';
import DataTable from './components/Datatable/Datatable';
import './app.scss';

const App: React.FC = () => {

  const data = [
    {
      id: 1,
      username: 'sigmaballgrindset',
      dateTime: '2021-01-01 10:00:00',
      amount: 100,
      status: 'Pending',
    },
    {
      id: 2,
      username: 'Carlos98',
      dateTime: '2022-12-02 6:00:00',
      amount: 200,
      status: 'Completed',
    },
    {
      id: 3,
      username: 'xEmpy_',
      dateTime: '2019-3-21 12:00:00',
      amount: 300,
      status: 'Pending',
    },
    {
      id: 4,
      username: 'Lucozzo',
      dateTime: '2024-01-04 13:00:00',
      amount: 400,
      status: 'Completed',
    },
    {
      id: 5,
      username: 'StelioKontos',
      dateTime: '2020-07-25 14:00:00',
      amount: 500,
      status: 'Pending',
    },
  ];
  

  return (
    <div className="app">
      <SidePanel />
      <div className="main-content">
        <Breadcrumb path="Control Panel > Dashboard" />
        <Dashboard />
        <DataTable data={data} />
      </div>
    </div>
  );
};

export default App;
