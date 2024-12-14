'use client';
import React, { useState } from 'react';
import CurrentInfoTable from '@/app/components/CurrentInfoTable';
import OrderBookComponent from '@/app/components/OrderBookTable';
import BuySellTable from '@/app/components/BuySellTable';

export default function Page() {
  const [selectedPrice, setSelectedPrice] = useState<number>(0);

  return (
    <>
      <CurrentInfoTable />
      <div className='flex justify-center items-start gap-4'>
        <OrderBookComponent onPriceSelect={setSelectedPrice} />
        <BuySellTable selectedPrice={selectedPrice} />
      </div>
    </>
  );
}
