import React from 'react';
import currentData from '../mocks/currentData.json';

const CurrentInfoTable = () => {
  return (
    <div style={{ width: '100%', border: '1px solid black', padding: '10px' }}>
      <table style={{ width: '100%' }}>
        <tbody>
          <tr>
            <td>
              <strong>Symbol</strong>
            </td>
            <td>
              <strong>Price</strong>
            </td>
            <td>
              <strong>24h Change</strong>
            </td>
            <td>
              <strong>24h High</strong>
            </td>
            <td>
              <strong>24h Low</strong>
            </td>
            <td>
              <strong>24h Volume (BTC)</strong>
            </td>
            <td>
              <strong>24h Volume (USDT)</strong>
            </td>
          </tr>
          <tr>
            <td>{currentData.symbol}</td>
            <td>{currentData.price}</td>
            <td>
              {currentData['24hChange'].amount} (
              {currentData['24hChange'].percentage}%)
            </td>
            <td>{currentData['24hHigh']}</td>
            <td>{currentData['24hLow']}</td>
            <td>{currentData['24hVolume'].BTC}</td>
            <td>{currentData['24hVolume'].USDT}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CurrentInfoTable;
