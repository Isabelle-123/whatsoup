import React, {useEffect, useContext} from 'react'
import Order from './Order'
import GoodChoice from './GoodChoice'
import CheckoutContext from '../../context/checkout/checkoutContext'
import Friend from '../for-friend/Friend'

const Checkout = () => {
    const checkoutContext = useContext(CheckoutContext)
    const { getCheckout } = checkoutContext

    useEffect(() => {
      getCheckout()
      // eslint-disable-next-line
    }, [])
  
    return (
        <>
            <GoodChoice />
            <Order />
            <Friend />
        </>
    )
}

export default Checkout
