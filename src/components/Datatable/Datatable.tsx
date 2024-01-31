import React, { useState } from 'react';
import './Datatable.scss';

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

  return (
    <table className="data-table">
      <thead>
        <tr>
          <th onClick={() => handleSort('id')}>
            ID {sortConfig?.key === 'id' && (sortConfig.direction === 'ascending' ? '↑' : '↓')}
          </th>
          <th onClick={() => handleSort('username')}>
            Username {sortConfig?.key === 'username' && (sortConfig.direction === 'ascending' ? '↑' : '↓')}
          </th>
          <th onClick={() => handleSort('dateTime')}>
            Date & Time {sortConfig?.key === 'dateTime' && (sortConfig.direction === 'ascending' ? '↑' : '↓')}
          </th>
          <th onClick={() => handleSort('amount')}>
            Amount {sortConfig?.key === 'amount' && (sortConfig.direction === 'ascending' ? '↑' : '↓')}
          </th>
          <th onClick={() => handleSort('status')}>
            Status {sortConfig?.key === 'status' && (sortConfig.direction === 'ascending' ? '↑' : '↓')}
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedData.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.username}</td>
            <td>{item.dateTime}</td>
            <td>{item.amount}</td>
            <td>{item.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;