import React, { useContext, useState } from 'react'
import menuStyle from './menuStyle.module.css'
import CheckoutContext from '../../context/checkout/checkoutContext'
import AlertContext from '../../context/alert/alertContext'
import Backdrop from '../alert/backdrop/Backdrop'

const ListFood = (props) => {
    const checkoutContext = useContext(CheckoutContext)
    const { addFood } = checkoutContext

    const alertContext = useContext(AlertContext)
    const { setAlert, setBlur} = alertContext

    const { name, type, price, desc, img, alt, nextItem } = props

   

    const handleSubmit = (e) => {
        e.preventDefault()
        setBlur();
        setAlert(name, nextItem, type);
        addFood(type, name, price);
    }


    return (
        <>
        {/* <Backdrop /> */}
            <div>
                <ul className={menuStyle.cards}>
                    <li>
                        <img
                            className={menuStyle.img}
                            src={img}
                            alt={alt}
                        />
                        <section className={menuStyle.foodInfoContainer}>
                            <div className={menuStyle.nameButton}>
                                <h2>{name}</h2>
                                <button type='click' onClick={handleSubmit} className={menuStyle.button}> + </button>
                            </div>
                            <h5 className={menuStyle.text}>{desc}</h5>
                        </section>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default ListFood
