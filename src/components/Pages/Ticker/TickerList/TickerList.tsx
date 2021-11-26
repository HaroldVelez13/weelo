
import { useNavigate } from "react-router-dom";

import './TickerList.css';
import useTickersServices from "../../../../hooks/useTickersServices"
import TickerTable from '../../../Organisms/TickerTable'
import AlertTickerTable from '../../../Molecules/AlertTickerTable'
import Loading from '../../../Atoms/Loading'
import ColumsTicker from '../../../../config/ColumsTicker'



function TickerList(): JSX.Element {
  const tickers = useTickersServices();
  const navigate = useNavigate();
  

  function handleClick(id: string | number) {
    navigate(`/detail/${id}`);
  }
  return (
    <main className="container p-4" data-testid="ticker-list">
      <h1 className="text-center text-primary fs-bold mb-4">Crypto Currency</h1>
      <AlertTickerTable />
      {
        tickers.length > 0
          ? <TickerTable columns={ColumsTicker} data={tickers} handleClick={handleClick} />

          : <Loading />
      }
    </main>
  );
}

export default TickerList;
