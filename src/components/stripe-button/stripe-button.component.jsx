import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51Jy0U4DdPacFBMfeieujgIeYqVK056wt5npL3rARgpzPGxfdOmDdfRH3hDBpNbal4ZpydVRYgypEtWy7kMIoUfWb00PvE3lPXj';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful')
  }

  return (
    <StripeCheckout 
      lable='Buy the Thing'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    >
    <button className='btn btn-primary'>
      Pay Now
    </button>
    </StripeCheckout>
  )
};

export default StripeCheckoutButton