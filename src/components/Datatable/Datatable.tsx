import React, { useState } from 'react';
import './Datatable.scss';
import * as icons from '../../assets/icons/icons';

interface DataTableProps {
  data: Array<{
    id: number;
    username: string;
    dateTime: string;
    amount: number;
    status: string;
  }>;
}

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'ascending' | 'descending' } | null>(null);

  const handleSort = (key: string) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const sortedData = [...data].sort((a, b) => {
    if (sortConfig !== null) {
      if (sortConfig.key === 'id') {
        return sortConfig.direction === 'ascending' ? a.id - b.id : b.id - a.id;
      } else if (sortConfig.key === 'username') {
        return sortConfig.direction === 'ascending' ? a.username.localeCompare(b.username) : b.username.localeCompare(a.username);
      } else if (sortConfig.key === 'dateTime') {
        return sortConfig.direction === 'ascending' ? new Date(a.dateTime).getTime() - new Date(b.dateTime).getTime() : new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime();
      } else if (sortConfig.key === 'amount') {
        return sortConfig.direction === 'ascending' ? a.amount - b.amount : b.amount - a.amount;
      } else if (sortConfig.key === 'status') {
        return sortConfig.direction === 'ascending' ? a.status.localeCompare(b.status) : b.status.localeCompare(a.status);
      }
    }
    return 0;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pending':
        return { className: 'status-pending', icon: icons.pending };
      case 'Completed':
        return { className: 'status-completed', icon: icons.completed };
      case 'Failed':
        return { className: 'status-failed', icon: icons.failed };
      default:
        return { className: '', icon: icons.failed  };
    }
  };

  return (
    <table className="data-table">
      <thead>
        <tr>
          <th onClick={() => handleSort('id')}>
            ID {sortConfig?.key === 'id' && (sortConfig.direction === 'ascending' ? '↑' : '↓')}
          </th>
          <th onClick={() => handleSort('username')}>
            USERNAME {sortConfig?.key === 'username' && (sortConfig.direction === 'ascending' ? '↑' : '↓')}
          </th>
          <th onClick={() => handleSort('dateTime')}>
            DATE & TIME {sortConfig?.key === 'dateTime' && (sortConfig.direction === 'ascending' ? '↑' : '↓')}
          </th>
          <th onClick={() => handleSort('amount')}>
            AMOUNT {sortConfig?.key === 'amount' && (sortConfig.direction === 'ascending' ? '↑' : '↓')}
          </th>
          <th onClick={() => handleSort('status')}>
            STATUS {sortConfig?.key === 'status' && (sortConfig.direction === 'ascending' ? '↑' : '↓')}
          </th>
        </tr>
      </thead>
            <tbody>
              {sortedData.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.username}</td>
                  <td>
                    <div className='Time'>{item.dateTime}</div>
                  </td>
                  <td>{item.amount}€</td>
                  <td>
                    <div className={getStatusColor(item.status).className}><img src={getStatusColor(item.status).icon } alt='img' /> {item.status}</div>
                  </td>
                </tr>
              ))}
            </tbody>
    </table>
  );
};

export default DataTable;