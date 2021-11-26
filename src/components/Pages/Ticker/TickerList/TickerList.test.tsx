import React from 'react';
import { render, RenderResult, waitFor } from '@testing-library/react';
import TickerList from './TickerList';
import tickerMock from '../../../../config/TickerMock';

const globalFetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve([tickerMock])
}));

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockedUsedNavigate,
}));

describe("<TickerList />", () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(<TickerList />);
  });

  it('render initial ticker list', () => {
    const titleElement = component.getByText(/Crypto Currency/i);
    expect(titleElement).toBeInTheDocument();

    const loadingElement = component.getByTestId("loading");
    expect(loadingElement).toBeInTheDocument();

    const alertElement = component.getByTestId("alert_ticker_table");
    expect(alertElement).toBeInTheDocument();

    const tableElement = component.queryByTestId("ticker_table");
    expect(tableElement).toBeNull();
  });

  it('render on get data ticker list', () => {
    globalFetch();
    waitFor(() => {
      const tableElement = component.getByTestId("ticker_table");
      expect(tableElement).toBeInTheDocument();

      const loadingElement = component.queryByTestId("loading");
      expect(loadingElement).toBeNull();

      const bitcoinElement = component.getByText(/Bitcoin/i);
      expect(bitcoinElement).toBeInTheDocument();
    })

  });

});


