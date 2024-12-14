'use client';
import React, { useState, useEffect } from 'react';

interface BuySellTableProps {
  selectedPrice?: number; // OrderBookTable에서 클릭한 값
  selectedAmount?: number;
}

const BuySellTable: React.FC<BuySellTableProps> = ({
  selectedPrice = 0,
  selectedAmount = 0,
}) => {
  const [price, setPrice] = useState<number>(selectedPrice);
  const [amount, setAmount] = useState<number>(selectedAmount);

  useEffect(() => {
    setPrice(selectedPrice);
  }, [selectedPrice]);

  // 값 변경 시 상태 업데이트
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(parseFloat(e.target.value) || 0);
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(parseFloat(e.target.value) || 0);
  };

  const handleBuy = () => {
    alert(`Buying BTC at ${price} USDT, Amount: ${amount} BTC`);
  };

  const handleSell = () => {
    alert(`Selling BTC at ${price} USDT, Amount: ${amount} BTC`);
  };

  return (
    <div className='bg-gray-900 text-white p-4 rounded-md w-80'>
      <div className='flex items-center mb-4 text-sm'>
        <button className='text-white mr-4 font-bold'>Limit</button>
        <button className='text-gray-500 mr-4'>Market</button>
        <button className='text-gray-500'>Stop Limit</button>
      </div>

      {/* 입력 필드 */}
      <div className='space-y-3 text-sm'>
        {/* Price */}
        <div>
          <label className='block text-gray-400'>Price</label>
          <div className='flex items-center'>
            <input
              type='number'
              value={price || ''}
              onChange={handlePriceChange}
              className='w-full bg-gray-800 text-white p-2 rounded-md'
            />
            <span className='ml-2'>USDT</span>
          </div>
        </div>

        {/* Amount */}
        <div>
          <label className='block text-gray-400'>Amount</label>
          <div className='flex items-center'>
            <input
              type='number'
              value={amount || ''}
              onChange={handleAmountChange}
              className='w-full bg-gray-800 text-white p-2 rounded-md'
            />
            <span className='ml-2'>BTC</span>
          </div>
        </div>

        {/* TP/SL 체크박스 */}
        <div className='flex items-center text-xs'>
          <input type='checkbox' id='tp-sl' className='mr-2' />
          <label htmlFor='tp-sl'>TP/SL</label>
        </div>

        {/* 하단 버튼 */}
        <div className='flex items-center justify-between mt-4'>
          <button
            onClick={handleBuy}
            className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-1/2 mr-1'
          >
            Buy
          </button>
          <button
            onClick={handleSell}
            className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded w-1/2 ml-1'
          >
            Sell
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuySellTable;
