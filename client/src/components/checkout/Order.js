import React, { useContext } from 'react'
import CheckoutContext from '../../context/checkout/checkoutContext'
import FriendContext from '../../context/for-friend/friendContext'
import LinkButtonWide from '../buttons/LinkButtonWide'
import cStyle from './checkoutStyles.module.css'
import OrderForFriend from './for-friend/OrderForFriend'
import OrderTotalPrice from './OrderTotalPrice'

const Order = () => {
    const checkoutContext = useContext(CheckoutContext)
    const { checkout, cancelCheckout } = checkoutContext

    const friendContext = useContext(FriendContext)
    const { friend } = friendContext

    const listItems =  () => {
      if (checkout.length > 0) {
        const allItems = checkout.map((item, index) => (
            <div key={index}>
                {item.name}
            </div>
        ))
        return allItems
                
        } else {
        return ''
        }
    }

    const listPrice = () => {
        if (checkout.length > 0) {
            const allItems = checkout.map((item, index)=> (
                <div key={index}>
                    {item.price} SEK
                </div>
            ))
            return allItems
        } else {
            return ''
        }
    }


    return (
        <div className={cStyle.wrapper}>
            <div className={cStyle.containerOrder}>
                <h3>YOUR ORDER</h3>

                <section className={cStyle.listItems}>
                    <div>{listItems()}</div>
                    <div>{listPrice()}</div>
                </section>
            </div>
            <OrderForFriend/> 
            <OrderTotalPrice/>
        </div>




    )
}

export default Order
