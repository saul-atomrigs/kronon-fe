/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { useState, useEffect } from 'react';
import mockData from '@/app/mocks/mockOrderBookData.json';

const fetchOrderBookData = async () => {
  // Simulating API call with mock data
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockData), 500);
  });
};

interface OrderBookComponentProps {
  onPriceSelect: (price: number) => void;
}

const OrderBookComponent: React.FC<OrderBookComponentProps> = ({
  onPriceSelect,
}) => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchOrderBookData();
        setData(result);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching order book data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) return <div>Loading...</div>;

  const { bids, asks, lastPrice } = data || {
    bids: [],
    asks: [],
    lastPrice: 0,
  };

  const handleRowClick = (price: number) => {
    onPriceSelect(price);
  };

  return (
    <div className='bg-gray-900 text-white p-4 w-80 mx-auto font-mono'>
      <h2 className='text-lg font-bold mb-2'>Order Book</h2>
      <div className='text-xs grid grid-cols-3 gap-x-2 border-b border-gray-600 pb-1'>
        <div>Price (USDT)</div>
        <div>Amount (BTC)</div>
        <div>Total</div>
      </div>
      {/* Asks */}
      <div className='text-red-400 mb-2'>
        {asks.map(
          (
            ask: { price: number; amount: number; total: number },
            index: React.Key | null | undefined
          ) => (
            <div
              key={index}
              className='grid grid-cols-3 gap-x-2 cursor-pointer hover:bg-gray-800'
              onClick={() => handleRowClick(ask.price)}
            >
              <div>{ask.price.toFixed(2)}</div>
              <div>{ask.amount.toFixed(5)}</div>
              <div>{ask.total.toFixed(2)}K</div>
            </div>
          )
        )}
      </div>
      {/* Last Price */}
      <div className='text-center text-red-500 text-xl font-bold my-2'>
        {lastPrice.toLocaleString()} ↓
      </div>
      {/* Bids */}
      <div className='text-green-400'>
        {bids.map(
          (
            bid: { price: number; amount: number; total: number },
            index: React.Key | null | undefined
          ) => (
            <div
              key={index}
              className='grid grid-cols-3 gap-x-2 cursor-pointer hover:bg-gray-800'
              onClick={() => handleRowClick(bid.price)}
            >
              <div>{bid.price.toFixed(2)}</div>
              <div>{bid.amount.toFixed(5)}</div>
              <div>{bid.total.toFixed(2)}K</div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default OrderBookComponent;
