import React, { useEffect, useState } from 'react';
import './App.css';
import { Form } from './components/Form';
import initialPayments from './api/paymants.json';
import { PaymentsList } from './components/PaymentsList';
import { useLocaleStorage } from './useLocalStorage';
import { Payment } from './types/Payment';


function App() {
  const [payments, setPayments] = useLocaleStorage<Payment[]>('payments', initialPayments);
  const [totalAmount, setTotalAmount] = useState(() => {
    const total = payments.reduce((acc, curr) => acc + (curr.cash + curr.mono + curr.privat), 0);
    return total;
  });
  const [savings, setSavings] = useState(() => {
    const totalSavings = payments.reduce((acc, curr) => acc + (curr.savings), 0)
    return totalSavings;
  });

  const onAdd = (payment: Payment) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setPayments(curr => [payment, ...curr]);
  };

  const [deletedPaymentDate, setDeletedPaymentDate] = useState('');

  useEffect(() => {
    const filteredPayments = payments.filter(payment => payment.date !== deletedPaymentDate);
    setPayments(filteredPayments);
    localStorage.setItem('payments', JSON.stringify(filteredPayments));
    const total = payments.reduce((acc, curr) => acc + (curr.cash + curr.mono + curr.privat), 0);
    setTotalAmount(total);
    const savings = payments.reduce((acc, curr) => acc + (curr.savings), 0);
    setSavings(savings);
  }, [deletedPaymentDate, payments])

  // const onDelete = (date: string) => {
  //   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //   // @ts-ignore
  //   setPayments(curr => curr.filter(p => p.date!== date));
  // }

  return (
    <div className="container box mt-5 px-2 is-flex is-flex-direction-column is-align-content-center is-justify-content-center">
      <nav className='navbar pl-5 box'>
        <h1 className='title navbar-brand'>Finance app</h1>
        <label className='navbar-end pr-4 is-size-4 has-text-weight-semibold'>Total: {totalAmount}</label>
        <label className='is-size-4 has-text-weight-semibold'>Savings: {savings}</label>
      </nav>
      <Form onSubmit={onAdd} />
      <PaymentsList payments={payments} setDeletedPaymentDate={setDeletedPaymentDate} />
    </div>
  );
}

export default App;
