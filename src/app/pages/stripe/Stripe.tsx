import { FC } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { CheckoutForm } from '@/components';

const stripePromise = loadStripe(
  'pk_test_51Ltk6eDtsiJzAsAkNeKv9daEjNYrtLinv3b3TpOZyUJI466nR2us04Xa527aAsauQBFha4BirtSbNnmoZjSOj7qG00OTM8wVZa'
);
export const Stripe: FC = () => {
  const options = {
    // passing the client secret obtained from the server
    clientSecret:
      'sk_test_51Ltk6eDtsiJzAsAkwJnRQAXytmCGIaJjwiVXWyQlYT9vQJ2MdVkr2u3nD8olWl8Xyy546vOeEoKXITNRAHOYZzh600W2RkgXXb',
  };
  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  );
};
