import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom'
import "./PaymentPage.css"

function PaymentPage({ amount, currency }) {
  const history = useHistory()
  const [clientSecret, setClientSecret] = useState('');
  const [error, setError] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
//   const stripe = useStripe();
//   const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (paymentMethod === 'cash-on-delivery') {
      // Handle cash on delivery payment
      alert('Order Received!');
      history.push('/oldorders')
      //return;
    }

    const response = await axios.post('/create-payment-intent/', {
      amount,
      currency,
    });
    setClientSecret(response.data.client_secret);
  };


  return (
    <div className="payment-container Pcontainer">
      <h2>Make Payment</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <input
              type="radio"
              name="paymentMethod"
             value="online"
             checked={paymentMethod === 'online'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Online Payment
          </label>
           {paymentMethod === 'online' && (
            <div>
              {/* <CardElement /> */}
            </div>
          )} 
        </div>
        <div>
          <label>
            <input
              type="radio"
             name="paymentMethod"
             value="cash-on-delivery"
             checked={paymentMethod === 'cash-on-delivery'}
             onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Cash on Delivery
          </label>
        </div>
        <button type="submit" disabled={!paymentMethod}>
          Pay
        </button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}

export default PaymentPage;
