import React, { useContext } from 'react'
import buttonsStyle from './buttonsStyle.module.css'
import CheckoutContext from '../../context/checkout/checkoutContext'

const AddButton = (props) => {

    const checkoutContext = useContext(CheckoutContext)
    const { addFood } = checkoutContext

    const { name, type, price } = props

    const handleClick = (e) => {
        e.preventDefault()
        //let food = { type, name, price }
        addFood(type, name, price)
    }


    return (
        <>
            <button onClick={handleClick} className={buttonsStyle.buttonWithBorder}>ADD</button>
        </>
    )
}

export default AddButton
