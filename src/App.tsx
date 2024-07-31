import React from 'react';
import './App.css';
import { Form } from './components/Form';
import initialPayments from './api/paymants.json';
import { PaymentsList } from './components/PaymentsList';
import { useLocaleStorage } from './useLocalStorage';
import { Payment } from './types/Payment';

function App() {
  const [payments, setPayments] = useLocaleStorage<Payment[]>('payments', initialPayments);

  return (
    <div className="container box mt-5 px-2 is-flex is-flex-direction-column is-align-content-center is-justify-content-center">
      <h1 className='title'>Finance app</h1>
      <Form />
      <PaymentsList payments={payments} />
    </div>
  );
}

export default App;
