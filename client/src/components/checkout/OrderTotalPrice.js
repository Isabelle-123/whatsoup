import React, { useContext } from 'react'
import CheckoutContext from '../../context/checkout/checkoutContext'
import FriendContext from '../../context/for-friend/friendContext'
import LinkButtonWide from '../buttons/LinkButtonWide'
import cStyle from './checkoutStyles.module.css'
import OrderForFriend from './for-friend/OrderForFriend'

const OrderTotalPrice = () => {
    const checkoutContext = useContext(CheckoutContext)
    const { checkout, cancelCheckout } = checkoutContext

    const friendContext = useContext(FriendContext)
    const { friend } = friendContext

    // const totalForYou = () => {
    //     if (checkout.length > 0) {
    //         const yourOrderTotal = checkout.reduce((acc, curr) => acc + curr.price, 0)
    //         return yourOrderTotal
    //     } else {
    //         return ''
    //     }
    // }
    
    // const totalForFriend = () => {
    //     if (friend.length > 0) {
    //         const friendOrderTotal = friend.reduce((acc, curr) => acc + curr.price, 0)
    //         return friendOrderTotal
    //     } else {
    //         return ''
    //     }
    // }

    // const totalForYouAndFriend = () => {
    //     if (checkout.length > 0 && friend.length > 0) {
    //         const totalPrice = checkout.reduce((acc, curr) => acc + curr.price, 0)
    //         return totalPrice
    //     } else {
    //         return ''
    //     }
    // }

    const total = () => {
        if (checkout.length > 0 && friend.length <= 0) {
            let yourOrderTotal = checkout.reduce((acc, curr) => acc + curr.price, 0)
            return yourOrderTotal
        } else if (friend.length > 0 && checkout.length <= 0) {
            let friendOrderTotal = friend.reduce((acc, curr) => acc + curr.price, 0)
            return friendOrderTotal
        } else if (checkout.length > 0 && friend.length > 0) {
            let yourOrderTotal = checkout.reduce((acc, curr) => acc + curr.price, 0)
            let friendOrderTotal = friend.reduce((acc, curr) => acc + curr.price, 0)
            let totalPrice = yourOrderTotal + friendOrderTotal
            return totalPrice
        } else {
            return ''
        }
    }

    const Cancel = () => {
        cancelCheckout()
    }

    return (
        <div className={cStyle.containerTotalPrice}>
            <section className={cStyle.containerPrice}>
                <h3>TOTAL PRICE</h3>
                <h3>{total()} SEK</h3>
            </section>

            <section className={cStyle.cancelOk}>
                <LinkButtonWide to='/' onClick={Cancel}>CANCEL</LinkButtonWide>
                <LinkButtonWide>PAY</LinkButtonWide>
            </section>
        </div>
    )
}

export default OrderTotalPrice
