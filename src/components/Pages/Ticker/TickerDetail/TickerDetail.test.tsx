import React from 'react';
import {  render,RenderResult, waitFor } from '@testing-library/react';
import TickerDetail from './TickerDetail';import tickerMock from '../../../../config/TickerMock';

const globalFetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve(tickerMock)
}));

describe("<TickerList />", () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(<TickerDetail />);
  });

  it('renders initial ticker detail', () => {
    const titleElement = component.getByText(/Crypto Detail/i);
    expect(titleElement).toBeInTheDocument();

    const loadingElement = component.getByTestId("loading");
    expect(loadingElement).toBeInTheDocument();

    const cardElement = component.queryByTestId("ticker_card");
      expect(cardElement).toBeNull();
  });

  it('render on get data ticker detail', () => {
    globalFetch();
    waitFor(() => {
      const tableElement = component.getByTestId("ticker_card");
      expect(tableElement).toBeInTheDocument();

      const loadingElement = component.queryByTestId("loading");
      expect(loadingElement).toBeNull();

      const bitcoinElement = component.getByText(/Bitcoin/i);
      expect(bitcoinElement).toBeInTheDocument();
    })

  });
})
