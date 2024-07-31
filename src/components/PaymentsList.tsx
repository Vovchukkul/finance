import React, { FC } from 'react'
import { Payment } from '../types/Payment'

type Props = {
  payments: Payment[];
}

export const PaymentsList:React.FC<Props> = ({ payments }) => {
  return (
    <div className='container box'>
      <h1 className='title'>Payments</h1>

      <table className='table container'>
          <thead className='thead is-success'>
            <tr>
              <th>Date</th>
              <th>Cash</th>
              <th>Mono</th>
              <th>Privat</th>
              <th>Dollars</th>
              <th>Euros</th>
              <th>Leocard</th>
              <th className='bold'>Overal</th>
            </tr>
          </thead>
          {payments.map(payment => (
            <tr>
              <td>{payment.date}</td>
              <td>{payment.cash}</td>
              <td>{payment.mono}</td>
              <td>{payment.privat}</td>
              <td>{payment.dollars}</td>
              <td>{payment.euros}</td>
              <td>{payment.leocard}</td>
              <td className='bold'>{
                payment.cash + payment.mono + payment.privat
              }</td>
            </tr>
          ))}
      </table>
    </div>
  )
}
