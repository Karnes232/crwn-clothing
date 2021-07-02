import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51J8uK2DuroGi90nLMorzflplMZ75FRr2jy2KLAyKeG5q20IrABrsFnhkcTT0JrJHb5NDSeYu7JqoJq7Rb98p64kW00lPmg4LQo'

    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
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
