import React, {useEffect, useContext} from 'react'
import Order from './Order'
import GoodChoice from './GoodChoice'
import CheckoutContext from '../../context/checkout/checkoutContext'
//import FriendContext from '../../context/for-friend/friendContext'

import Friend from '../for-friend/Friend'

const Checkout = () => {
    const checkoutContext = useContext(CheckoutContext)
    const { getCheckout } = checkoutContext

    // const friendContext = useContext(FriendContext)
    // const { friend, getFriend, addToFriend } = friendContext

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
