import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JGAkaB5pmSnxakQP9jyAZPpNH3p2hBdTNSN7mVhuURc4cGIWrw7F1YrocA3PYL5oOOTpkSF5rhNiWBV7IXvn5a200BRjTkiFx';
    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }
    return (
        <StripeCheckout 
            label='Pay Now'
            name='Cloth Ecommerce S.A.'
            billingAddress
            shippingAddress
            //image='https//svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;