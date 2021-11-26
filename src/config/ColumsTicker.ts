import { Column } from 'react-table'
import { Ticker } from '../types/Ticker';

const ColumsTicker : Column<Ticker>[] = [
    {
      Header: 'Symbol',
      accessor: 'symbol'
    },
    {
      Header: 'Name',
      accessor: 'name',
    },
    {
      Header: 'Rank',
      accessor: 'rank',
    },
    {
      Header: 'Price (Usd)',
      accessor: 'price_usd',
    },
    {
      Header: 'Price (Btc)',
      accessor: 'price_btc',
    },
    {
      Header: '% Change 24h',
      accessor: 'percent_change_24h',
    },
    {
      Header: '% Change 1h',
      accessor: 'percent_change_1h',
    },
    {
      Header: '% Change 7D',
      accessor: 'percent_change_7d',
    
    },
  
  ];

export default ColumsTicker