import React, {useEffect, useContext} from 'react'
import Order from './Order'
import CheckoutContext from '../../context/checkout/checkoutContext'

const Checkout = () => {
    const checkoutContext = useContext(CheckoutContext)
    const { getCheckout } = checkoutContext

    useEffect(() => {
      getCheckout()
      // eslint-disable-next-line
    }, [])
  
    return (
        <>
            <Order />
        </>
    )
}

export default Checkout
