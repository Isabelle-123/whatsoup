import React, { useContext } from 'react'
import CheckoutContext from '../../context/checkout/checkoutContext'
import { StyledOrder } from './StyledOrder'
import LinkButtonWide from '../buttons/LinkButtonWide'

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
console.log(checkout);

    return (
        <StyledOrder>
            <div className='container'>
                <h3>YOUR ORDER</h3>

                <section className='listItems'>
                    <div className='item'>{listItems()}</div>
                    <div className='item'>{listPrice()}</div>
                </section>

                <section className='container-price'>
                    <h3>TOTAL PRICE</h3>
                    <h3>{total()} SEK</h3>
                </section>

                <section className='cancelOk'>
                    <LinkButtonWide to='/soup' onClick={Cancel}>CANCEL</LinkButtonWide>
                    <LinkButtonWide>OK</LinkButtonWide>
                </section>

            </div>
        </StyledOrder>
    )
}

export default Order
