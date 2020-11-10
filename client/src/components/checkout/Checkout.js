import React, {useEffect, useContext} from 'react'
import Order from './Order'
import GoodChoice from './GoodChoice'
import CheckoutContext from '../../context/checkout/checkoutContext'
import FriendContext from '../../context/for-friend/friendContext'
import SendToFriend from './for-friend/SendToFriend'

const Checkout = () => {
    const checkoutContext = useContext(CheckoutContext)
    const { getCheckout } = checkoutContext

    const friendContext = useContext(FriendContext)
    const { getFriend } = friendContext

    useEffect(() => {
      getCheckout()
      getFriend()
      // eslint-disable-next-line
    }, [])
   
    return (
        <>
            <GoodChoice />
            <SendToFriend />
            <Order />
        </>
    )
}

export default Checkout
