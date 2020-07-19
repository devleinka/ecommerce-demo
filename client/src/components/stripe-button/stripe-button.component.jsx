import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Gzk4hIBG9JFjG9QFCpgWcpkQZbp7by0mhz9rUMBdfUUlzNbWQvjdsiBHNRI4KgGo0m1nwBzNr5MxkERiVg20QwD00ENaJDExT';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert('Payment successful');
        }).catch(error => {
            console.log('Payment error: ', JSON.parse(error));
            alert('There was an issue with the payment. Please make sure you use the provided credit card.')
        });
    };

    return (
        <StripeCheckout 
        label='Pay Now' 
        name= 'Fab Snail Fashion' 
        billingAddress 
        shippingAddress 
        image='https://svgshare.com/i/CUz.svg' 
        description={`Your total is $${price}`} 
        amount={priceForStripe} 
        panelLabel='Pay Now' 
        token={onToken} 
        stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;