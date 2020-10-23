import React, { useContext } from 'react'
import CheckoutContext from '../../context/checkout/checkoutContext'
import { StyledOrder } from './StyledOrder'
import LinkButtonWide from '../buttons/LinkButtonWide'

const Order = () => {
    const checkoutContext = useContext(CheckoutContext)
    const { checkout, cancelCheckout } = checkoutContext

    const listItems =  () => {
      if (checkout.length > 0) {
        const allItems = checkout.map(item => (
            <div key={item.id}>
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
            const allItems = checkout.map(item => (
                <div key={item.id}>
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
        <StyledOrder>
            <div className='container'>
                <h1 className='your-order'>YOUR ORDER</h1>

                <section className='listItems'>
                    <div>{listItems()}</div>
                    <div>{listPrice()}</div>
                </section>

                <section className='container-total'>
                    <h2 className='total-price'>TOTAL PRICE</h2>
                    <h5 className='finalPrice'>{total()} sek</h5>
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
