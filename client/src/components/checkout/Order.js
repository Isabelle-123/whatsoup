import React, { useContext } from 'react'
import CheckoutContext from '../../context/checkout/checkoutContext'
import FriendContext from '../../context/for-friend/friendContext'
import cStyle from './checkoutStyles.module.css'
import OrderForFriend from './for-friend/OrderForFriend'
import OrderTotalPrice from './OrderTotalPrice'

const Order = () => {
    const checkoutContext = useContext(CheckoutContext)
    const { checkout } = checkoutContext

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


    const amountForYou = () => {
        if (checkout.length > 0) {
            const yourOrderTotal = checkout.reduce((acc, curr) => acc + curr.price, 0)
            return yourOrderTotal
        } else {
            return ''
        }
    }

    return (
        <>
            {(() => {
                if (checkout.length > 0 && friend.length <= 0) {
                    return (
                        <div className={cStyle.wrapper}>
                        <div className={cStyle.containerOrder}>
                            <h3>YOUR ORDER</h3>

                            <section className={cStyle.listItems}>
                                <div>{listItems()}</div>
                                <div>{listPrice()}</div>
                            </section>
                        </div>
                        <OrderTotalPrice/>
                        </div>
                    )

                } else if (checkout.length <= 0 && friend.length > 0) {
                    return(
                        <div className={cStyle.wrapper}>
                        <OrderForFriend/> 
                        <OrderTotalPrice/>
                        </div>
                    )

                } else if (checkout.length > 0 && friend.length > 0) {
                    return(
                        <div className={cStyle.wrapper}>
                        <div className={cStyle.containerOrder}>
                            <h3>ORDER FOR YOU</h3>

                            <section className={cStyle.listItems}>
                                <div>{listItems()}</div>
                                <div>{listPrice()}</div>
                            </section>

                            <section className={cStyle.containerPrice}>
                                <h3>AMOUNT FOR YOU:</h3>
                                <h3>{amountForYou()} SEK</h3>
                            </section>
                        </div>
                        <OrderForFriend/> 
                        <OrderTotalPrice/>
                        </div>
                    )
                } else {
                    return (
                        null
                    )
                }
            })()}
        </>
    )
}

export default Order
