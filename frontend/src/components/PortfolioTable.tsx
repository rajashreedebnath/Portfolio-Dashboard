import React from 'react';
import { useReactTable, ColumnDef, getCoreRowModel, flexRender } from '@tanstack/react-table';
import { Stock } from '../types';

interface PortfolioTableProps {
  stocks: Stock[];
}

const PortfolioTable = ({ stocks }: PortfolioTableProps) => {
  const columns: ColumnDef<Stock>[] = [
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
        const value = getValue() as number;
        return <span className={value >= 0 ? 'text-green-500' : 'text-red-500'}>{value?.toFixed(2)}</span>;
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
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id} className="bg-gray-100">
              {headerGroup.headers.map(header => (
                <th key={header.id} className="border border-gray-300 px-4 py-2 text-left">
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id} className="hover:bg-gray-50">
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} className="border border-gray-300 px-4 py-2">
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
