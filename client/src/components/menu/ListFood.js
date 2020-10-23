import React, { useContext } from 'react'
import menuStyle from './menuStyle.module.css'
import CheckoutContext from '../../context/checkout/checkoutContext'
import AlertContext from '../../context/alert/alertContext'
//import Alert from '../alert/Alert'
// import '.index.css'

//import { createGlobalStyle } from 'styled-components'


const ListFood = (props) => {
    const checkoutContext = useContext(CheckoutContext)
    const { addFood, checkout } = checkoutContext

    const alertContext = useContext(AlertContext)
    const { setAlert } = alertContext

    const { name, type, price, desc, img, alt, nextItem } = props

    const handleSubmit = (e) => {
        e.preventDefault()
        // let food = { type, name, price }
        setAlert(name, nextItem, type)
        addFood(type, name, price);
        document.getElementById('root').classList.add('blurMe');
        //document.root.classList.add('blurMe');
        //document.getElementById('root').style.filter = 'grayscale(100%) blur(1px) '
        console.log(checkout);
    }


    return (
        <>
       {/* <Alert type={type} name={name} price={price} />  */}

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
