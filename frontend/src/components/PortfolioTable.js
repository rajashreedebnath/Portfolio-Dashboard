import React from 'react';
import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table';

const PortfolioTable = ({ stocks }) => {
  const columns = [
    { accessorKey: 'no', header: 'No' },
    { accessorKey: 'name', header: 'Particulars' },
    { accessorKey: 'purchasePrice', header: 'Purchase Price' },
    { accessorKey: 'qty', header: 'Qty' },
    { accessorKey: 'investment', header: 'Investment' },
    { accessorKey: 'portfolioPercent', header: 'Portfolio (%)' },
    { accessorKey: 'nseBse', header: 'NSE/BSE' },
    { accessorKey: 'cmp', header: 'CMP' },
    { accessorKey: 'presentValue', header: 'Present Value' },
    {
      accessorKey: 'gainLoss',
      header: 'Gain/Loss',
      cell: ({ getValue }) => {
        const value = getValue();
        return <span style={{ color: value >= 0 ? 'green' : 'red' }}>{value?.toFixed(2)}</span>;
      }
    },
    { accessorKey: 'peRatio', header: 'P/E Ratio' },
    { accessorKey: 'latestEarnings', header: 'Latest Earnings' },
  ];

  const table = useReactTable({
    data: stocks,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ minWidth: '100%', borderCollapse: 'collapse', border: '1px solid #ccc' }}>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id} style={{ backgroundColor: '#f0f0f0' }}>
              {headerGroup.headers.map(header => (
                <th key={header.id} style={{ border: '1px solid #ccc', padding: '8px 16px', textAlign: 'left' }}>
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} style={{ border: '1px solid #ccc', padding: '8px 16px' }}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PortfolioTable;
