import React, { useContext } from 'react'
import LinkButtonWide from '../buttons/LinkButtonWide'
import cStyle from './checkoutStyles.module.css'
import CheckoutContext from '../../context/checkout/checkoutContext'
import FriendContext from '../../context/for-friend/friendContext'

const GoodChoice = () => {
    const checkoutContext = useContext(CheckoutContext)
    const { checkout } = checkoutContext

    const friendContext = useContext(FriendContext)
    const { friend } = friendContext

    return (
        (checkout.length <= 0 && friend.length <= 0) ?
            <div className={cStyle.container}>
                <h1 className={cStyle.checkout}>Checkout</h1>
                <section className={cStyle.containerChoice}>
                    <h1>Oh noes!</h1>
                    <h2>Your checkout is empty</h2>
                    <h2>What would you like to order?</h2>
                    <ul className={cStyle.ul}>
                        <li><LinkButtonWide to='/soup'>SOUP</LinkButtonWide></li>
                        <li><LinkButtonWide to='/protein'>PROTEIN</LinkButtonWide></li>
                        <li><LinkButtonWide to='/bread'>BREAD</LinkButtonWide></li>
                        <li><LinkButtonWide to='/spreads'>SPREADS</LinkButtonWide></li>
                        <li><LinkButtonWide to='/treats'>TREATS</LinkButtonWide></li>
                        <li><LinkButtonWide to='/beverages'>BEVERAGES</LinkButtonWide></li>
                    </ul>
                </section>
            </div>
        :
            <div className={cStyle.container}>
            <h1 className={cStyle.checkout}>Checkout</h1>
            <section className={cStyle.containerChoice}>
                <h1>Good Choice!</h1>
                <h2>Do you feel pleased or do you want something more?</h2>
                <ul className={cStyle.ul}>
                    <li><LinkButtonWide to='/soup'>SOUP</LinkButtonWide></li>
                    <li><LinkButtonWide to='/protein'>PROTEIN</LinkButtonWide></li>
                    <li><LinkButtonWide to='/bread'>BREAD</LinkButtonWide></li>
                    <li><LinkButtonWide to='/spreads'>SPREADS</LinkButtonWide></li>
                    <li><LinkButtonWide to='/treats'>TREATS</LinkButtonWide></li>
                    <li><LinkButtonWide to='/beverages'>BEVERAGES</LinkButtonWide></li>
                </ul>
                </section>
            </div>
    )
}

export default GoodChoice
