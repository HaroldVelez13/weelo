import { useEffect, useState } from 'react';
import { Ticker } from '../types/Ticker';


const useTickersServices = () => {
  const [tickers, setTickers] = useState<Ticker[]>([]);

  useEffect(() => {
    fetch('https://api.coinlore.net/api/tickers/')
      .then(response => response.json())
      .then(response => {setTickers(response.data)})
      .catch(error => console.log({ status: 'error', error }));
  }, []);

  return tickers;
};

export default useTickersServices;