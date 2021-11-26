import { useEffect, useState } from 'react';
import { Ticker } from '../types/Ticker';


const useTickerServices = (tickerId:string|undefined) => {
  const [ticker, setTicker] = useState<Ticker>();

  

  useEffect(() => {
    const url:string = `https://api.coinlore.net/api/ticker/?id=${tickerId}`
    if (tickerId) {
        fetch(url)
        .then(response => response.json())
        .then(response => setTicker(response[0]??{}))
        .catch(error => console.log({ status: 'error', error }));
    }
  }, [tickerId]);

  return {ticker};
};

export default useTickerServices;