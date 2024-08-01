import React from 'react'
import { Payment } from '../types/Payment'

type Props = {
  payments: Payment[];
  setDeletedPaymentDate: (date: string) => void;
}

export const PaymentsList:React.FC<Props> = ({ payments, setDeletedPaymentDate }) => {
  return (
    <div className='container box'>
      <h1 className='title'>Payments</h1>

      <table className='table container'>
          <thead className='thead is-success'>
            <tr className='is-size-5 is-size-7-mobile'>
              <th>Date</th>
              <th>Cash</th>
              <th className='is-hidden-mobile'>Mono</th>
              <th className='is-hidden-mobile'>Privat</th>
              <th className='is-hidden-tablet is-hidden-desktop'>Cards</th>
              <th className='is-hidden-mobile'>Dollars</th>
              <th className='is-hidden-mobile'>Euros</th>
              <th>Leocard</th>
              <th className='bold'>Overal</th>
            </tr>
          </thead>
          {payments.map(payment => (
            <>
              <tr 
                className='is-size-5 is-size-7-mobile'
                onDoubleClick={() => setDeletedPaymentDate(payment.date)}
              >
                <td>{payment.date}</td>
                <td>{payment.cash}</td>
                <td className='is-hidden-mobile'>{payment.mono}</td>
                <td className='is-hidden-mobile'>{payment.privat}</td>
                <td className='is-hidden-tablet is-hidden-desktop'>{ payment.privat + payment.mono }</td>
                <td className='is-hidden-mobile'>{payment.dollars}</td>
                <td className='is-hidden-mobile'>{payment.euros}</td>
                <td>{payment.leocard}</td>
                <td className='bold'>{
                  payment.cash + payment.mono + payment.privat
                }</td>
                <td className='is-hidden-mobile' onClick={() => setDeletedPaymentDate(payment.date)}>
                  <i className="fas fa-trash-alt"></i>
                </td>
              </tr>
            </>
          ))}
      </table>
    </div>
  )
}
