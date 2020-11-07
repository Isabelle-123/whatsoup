import React, { useContext }from 'react'
import buttonsStyle from './buttonsStyle.module.css'
import CheckoutContext from '../../context/checkout/checkoutContext'

const DeleteButton = (props) => {

    const checkoutContext = useContext(CheckoutContext)
    const { removeItem } = checkoutContext

    const { name, type, price } = props

    const handleClick = () => {
       let product = { name, type, price  } 
        removeItem(product)
    }

    return (
        <>
            <button onClick={handleClick} className={buttonsStyle.buttonWithBorder}>-</button>
        </>
    )
}

export default DeleteButton
