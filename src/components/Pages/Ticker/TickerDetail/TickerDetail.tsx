import { useParams } from "react-router-dom";
import './TickerDetail.css';
import useTickerServices from "../../../../hooks/useTickerServices";
import TickerCard from '../../../Atoms/TickerCard'
import Loading from '../../../Atoms/Loading'


function TickerDetail(): JSX.Element {
  const { tickerId } = useParams();
  const { ticker } = useTickerServices(tickerId);
  return (
    <main className="container p-4">
      <h1 className="text-center text-primary fs-bold mb-4">Crypto Detail</h1>
      {ticker
      ? <TickerCard ticker={ticker} />
    : <Loading />}
    </main>
  );
}

export default TickerDetail;
