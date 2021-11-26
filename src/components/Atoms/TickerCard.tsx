
import { Ticker } from '../../types/Ticker';
import { Link } from "react-router-dom";


interface Props {
  ticker: Ticker;
}

function TickerCard({ ticker }: Props): JSX.Element {
  return (
    <div className=" d-flex justify-content-center " data-testid="ticker_card">
      <div className="card text-center shadow-lg">
        {/* General information */}
        <div className=" p-2">
        <Link to="/" title="Go list" className="mx-2">
              <i className="fas fa-long-arrow-alt-left fs-4"></i>
            </Link>
          <div className=" d-flex flex-row justify-content-center">
            
            <h5>{ticker.name}</h5> <span className="dots"><i className="fa fa-check"></i></span>
          </div>
          <div className=" text-center">
            <small>Rank:  </small><i>{ticker.rank}</i> - <small>Symbol:  </small><i>{ticker.symbol}</i>
          </div>
        </div>
        <div>
          <ul className="list-unstyled list">
            {/* Price information */}
            <li>
              <div className="row">
                <p className="card-subheader mb-0 fs-5 col-12">
                  Price
              </p>
                <div className="col-4">
                  <small>Price Usd: </small>
                  <br />
                  <i className="card-subtitle">{ticker.price_usd}</i>
                </div>
                <div className="col-4">
                  <small>Price Btc: </small>
                  <br />
                  <i className="card-subtitle">{ticker.price_btc}</i>
                </div>
                <div className="col-4">
                  <small>Market Cap Usd: </small>
                  <br />
                  <i className="card-subtitle">{ticker.market_cap_usd}</i>
                </div>
              </div>
            </li>
            {/* Percent information */}
            <li>
              <div className="row">
                <p className="card-subheader mb-0 fs-5 col-12">
                  Percent
              </p>
                <div className="col-4">
                  <small>Percent Change 1 hours: </small>
                  <br />
                  <i className="card-subtitle">{ticker.percent_change_1h}</i>
                </div>
                <div className="col-4">
                  <small>Percent Change 24 hours: </small>
                  <br />
                  <i className="card-subtitle">{ticker.percent_change_24h}</i>
                </div>
                <div className="col-4">
                  <small>Percent Change 7 Days: </small>
                  <br />
                  <i className="card-subtitle">{ticker.percent_change_7d}</i>
                </div>
              </div>
            </li>
            {/* Supply information */}
            <li>
              <div className="row">
                <p className="card-subheader mb-0 fs-5 col-12">
                  Supply
              </p>
                <div className="col-4">
                  <small>C Supply: </small>
                  <br />
                  <i className="card-subtitle">{ticker.csupply}</i>
                </div>
                <div className="col-4">
                  <small>T Supply: </small>
                  <br />
                  <i className="card-subtitle">{ticker.tsupply}</i>
                </div>
                <div className="col-4">
                  <small>M Supply: </small>
                  <br />
                  <i className="card-subtitle">{ticker.msupply}</i>
                </div>
              </div>
            </li>
            {/* Volume information */}
            <li>
              <div className="row">
                <p className="card-subheader mb-0 fs-5 col-12">
                  Volume
              </p>
                <div className="col-6">
                  <small>Volume 24: </small>
                  <br />
                  <i className="card-subtitle">{ticker.volume24}</i>
                </div>
                <div className="col-6">
                  <small>Volume 24a: </small>
                  <br />
                  <i className="card-subtitle">{ticker.volume24a}</i>
                </div>

              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TickerCard;