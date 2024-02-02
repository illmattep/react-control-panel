import React from 'react';
import SidePanel from './components/SidePanel/SidePanel';
import Breadcrumb from './components/Breadcrumb/Breadcrumb';
import Dashboard from './components/DashboardSection/DashboardSection';
import DataTable from './components/Datatable/Datatable';
import './app.scss';

const App: React.FC = () => {

  const data = [
    {
      id: 1432,
      username: 'Makicanepaso',
      dateTime: '2021-01-01 10:00:00',
      amount: 11.51,
      status: 'Pending',
    },
    {
      id: 2523,
      username: 'Popai',
      dateTime: '2022-12-02 6:00:00',
      amount: 69,
      status: 'Completed',
    },
    {
      id: 3532,
      username: 'xEmpy_',
      dateTime: '2019-3-21 12:00:00',
      amount: 300,
      status: 'Failed',
    },
    {
      id: 4324,
      username: 'Dmitri',
      dateTime: '2024-01-04 13:00:00',
      amount: 40,
      status: 'Completed',
    },
    {
      id: 5843,
      username: 'Meliodas',
      dateTime: '2020-07-25 14:00:00',
      amount: 5000,
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
