import { useTable, useSortBy, useGlobalFilter, Column } from 'react-table'
import { Ticker } from '../../types/Ticker';

import GlobalFilter from '../Atoms/GlobalFilter'


interface Props{
    columns: Column<Ticker>[]
    data: Ticker[]
    handleClick: (id: string | number) => any
}

function TickerTable({ columns, data, handleClick }: Props): JSX.Element {
    const table = useTable(
        {
            columns,
            data,
            
        },
        useGlobalFilter,
        useSortBy
        
    )
    const  { globalFilter }  = table.state;
    return (
        <div className=" rounded bg-transparent" data-testid="ticker_table">
        <GlobalFilter filter={globalFilter} setFilter={table.setGlobalFilter}/>
        <table className="table  table-primary table-hover shadow-lg mb-5" {...table.getTableProps()} >
            <thead>
                {table.headerGroups.map((headerGroup: any) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column: any) => (
                            <th scope="col" {...column.getHeaderProps(column.getSortByToggleProps())}>
                                <span>{column.render('Header')}</span>
                                <span>
                                    {column.isSorted
                                        ? column.isSortedDesc
                                            ? <i className="fas fa-sort-down"></i>
                                            : <i className="fas fa-sort-up"></i>
                                        : <i className="fas fa-sort"></i>}
                                </span>
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...table.getTableBodyProps()}>
                {table.rows.map(
                    (row: any, i: number) => {
                        table.prepareRow(row);
                        return (
                            <tr className="table-secondary pointer" {...row.getRowProps()} onClick={() => handleClick(row.original.id)}>
                                {row.cells.map((cell: any) => {
                                    return (
                                        <td scope="row" {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    )
                                })}
                            </tr>
                        )
                    }
                )}
            </tbody>
        </table>
        </div>
    );
}

export default TickerTable;
