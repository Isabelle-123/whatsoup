import React, {useEffect, useContext} from 'react'
import Order from './Order'
import CheckoutContext from '../../context/checkout/checkoutContext'

const Checkout = () => {
    const checkoutContext = useContext(CheckoutContext)
    const { checkout, getCheckout } = checkoutContext

    useEffect(() => {
      getCheckout()
      // eslint-disable-next-line
    }, [])
  
    console.log(checkout.valueOf())

    for(var key in checkout) {
        if(typeof checkout[key] === 'object') {
           // bottle[key] is the desired object
        }
    }
  
    // let string = JSON.stringify(checkout)

    return (
        <>
            <Order />
        </>
    )
}

export default Checkout
