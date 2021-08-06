import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HiQKaABcwFvyGcqmauY3J9EOhkta6wGhzAaCxIee1IPlvqxjBWvAIgmUbY33yGgszLvF4jVnP98AXQY8rLCrBD800wFogkbDH'

    const onToken = token => {
        // axios({
        //     url: 'payment',
        //     method: 'post',
        //     data: {
        //         amount: priceForStripe,
        //         token
        //     }
        // }).then(response => {
        //     alert('Payment Successful')
        // }).catch(error => {
        //     console.log('Payment Error: ', error)
        //     alert('There was an issue with your payment, Please make sure you use the provided credit card.')
        // })

        axios.post('/payment', {amount: priceForStripe, token})
        .then(response => {
            alert('Payment Successful')
        }).catch(error => {
            console.log('Payment Error: ', JSON.parse(error))
            alert('There was an issue with your payment, Please make sure you use the provided credit card.')
        })
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing'
            billingAddress
            shippingAddress
            image='https://upload.wikimedia.org/wikipedia/commons/9/90/Font_Awesome_5_solid_crown.svg'
            description={`Your total is $${price}`}
            amout={priceForStripe}
            panelLabel={`Pay Now $${price}`}
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton
