import React, { useContext } from 'react'
import CheckoutContext from '../../context/checkout/checkoutContext'
import LinkButtonWide from '../buttons/LinkButtonWide'
import cStyle from './checkoutStyles.module.css'

const Order = () => {
    const checkoutContext = useContext(CheckoutContext)
    const { checkout, cancelCheckout } = checkoutContext

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

    const total = () => {
        if (checkout.length > 0) {
            const totalPrice = checkout.reduce((acc, curr) => acc + curr.price, 0)
            return totalPrice
        } else {
            return ''
        }
    }

    const Cancel = () => {
        cancelCheckout()
    }

    return (
        <div className={cStyle.wrapper}>
            <div className={cStyle.containerOrder}>
                <h3>YOUR ORDER</h3>

                <section className={cStyle.listItems}>
                    <div>{listItems()}</div>
                    <div>{listPrice()}</div>
                </section>

                <section className={cStyle.containerPrice}>
                    <h3>TOTAL PRICE</h3>
                    <h3>{total()} SEK</h3>
                </section>

                <section className={cStyle.cancelOk}>
                    <LinkButtonWide to='/' onClick={Cancel}>CANCEL</LinkButtonWide>
                    <LinkButtonWide>OK</LinkButtonWide>
                </section>
            </div>
        </div>

    )
}

export default Order
