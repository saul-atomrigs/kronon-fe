import React from 'react';
import CurrentInfoTable from '@/app/components/CurrentInfoTable';
import OrderBookComponent from '@/app/components/OrderBookTable';

export default function page() {
  return (
    <>
      <CurrentInfoTable />;
      <OrderBookComponent />;
    </>
  );
}
