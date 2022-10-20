import { FC } from 'react';
import { PaymentElement } from '@stripe/react-stripe-js';

export const CheckoutForm: FC = () => {
  return (
    <form>
      <PaymentElement />
      <button>Submit</button>
    </form>
  );
};
