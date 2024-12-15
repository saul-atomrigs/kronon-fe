'use client';
import { useState } from 'react';
import coins from '@/app/mocks/coins.json';

export default function CoinsSearch() {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredPairs = coins.filter((pair) =>
    pair.pair.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='p-4 w-full max-w-md mx-auto'>
      {/* Search Input */}
      <input
        type='text'
        placeholder='Search'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className='w-full mb-2 p-2 border rounded bg-gray-900 text-gray-100 placeholder-gray-100 border-gray-200 focus:outline-none focus:ring focus:ring-blue-300'
      />

      {/* Pair List Table */}
      <div className='bg-gray-800 text-white rounded shadow-lg overflow-hidden'>
        <div className='flex justify-between px-4 py-2 border-b border-gray-700'>
          <span className='font-semibold w-1/3'>Pair</span>
          <span className='font-semibold w-1/3 text-right'>Price</span>
          <span className='font-semibold w-1/3 text-right'>Change</span>
        </div>

        <div className='max-h-[400px] overflow-y-auto'>
          {filteredPairs.map((item, index) => (
            <div
              key={index}
              className={`flex justify-between px-4 py-2 ${
                index % 2 === 0 ? 'bg-gray-900' : 'bg-gray-800'
              }`}
            >
              <span className='w-1/3'>{item.pair}</span>
              <span className='w-1/3 text-right'>{item.price}</span>
              <span
                className={`w-1/3 text-right ${
                  parseFloat(item.change) >= 0
                    ? 'text-green-400'
                    : 'text-red-400'
                }`}
              >
                {item.change}
              </span>
            </div>
          ))}

          {filteredPairs.length === 0 && (
            <div className='p-4 text-center text-gray-400'>No pairs found.</div>
          )}
        </div>
      </div>
    </div>
  );
}
