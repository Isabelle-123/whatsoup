import React, {useEffect, useContext} from 'react'
import Order from './Order'
import GoodChoice from './GoodChoice'
import CheckoutContext from '../../context/checkout/checkoutContext'
import SendToFriend from './for-friend/SendToFriend'
import OrderForFriend from './for-friend/OrderForFriend'

const Checkout = () => {
    const checkoutContext = useContext(CheckoutContext)
    const { getCheckout } = checkoutContext

    useEffect(() => {
      getCheckout()
      // eslint-disable-next-line
    }, [])
   
    return (
        <>
            <OrderForFriend/>
            <GoodChoice />
            <SendToFriend />
            <Order />
        </>
    )
}

export default Checkout
