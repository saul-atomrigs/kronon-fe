'use client';
import React, { useState } from 'react';
import CurrentInfoTable from '@/app/components/CurrentInfoTable';
import OrderBookComponent from '@/app/components/OrderBookTable';
import BuySellTable from '@/app/components/BuySellTable';
import FinancialChart from '@/app/components/Chart';
import CoinsSearch from '@/app/components/CoinsSearch';

export default function Page() {
  const [selectedPrice, setSelectedPrice] = useState<number>(0);

  return (
    <>
      <CurrentInfoTable />
      <div className='flex justify-center items-start gap-4'>
        <OrderBookComponent onPriceSelect={setSelectedPrice} />
        <div className='flex flex-col gap-4'>
          <FinancialChart width={400} />
          <BuySellTable selectedPrice={selectedPrice} />
        </div>
        <CoinsSearch />
      </div>
    </>
  );
}
