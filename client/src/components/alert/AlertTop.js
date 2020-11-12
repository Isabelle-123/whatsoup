import React, { useContext } from 'react'
import DeleteButton from '../buttons/DeleteButton'
import AddButton from '../buttons/AddButton'
import buttonsStyle from '../buttons/buttonsStyle.module.css'
import AlertContext from '../../context/alert/alertContext'
import LinkButton from '../buttons/LinkButton'
import CheckoutContext from '../../context/checkout/checkoutContext'

const AlertTop = () => {

    const alertContext = useContext(AlertContext)
    const { alert, removeAlert } = alertContext
  
    const checkoutContext = useContext(CheckoutContext)
    const { checkout } = checkoutContext
  

    const closeAlert = (e) => {
        e.preventDefault()
        removeAlert()
    }
      
    const closeAlertOnNext = (e) => {
        e.preventDefault()
        removeAlert()
    }

    const counter = (name) => {
        let quantity = checkout.reduce((acc, child) => {
            if (!acc[child.name]) {
                acc[child.name] = 0;
            } acc[child.name]++;
                return acc;
        }, {})
    
        console.log(checkout);
        const entries = Object.entries(quantity)
        console.log(quantity);
        for (const [food, count] of entries) {
            if (food === name ) {
                return count
            }
        }
    }

    return (
        <>
            <button onClick={closeAlert} className={buttonsStyle.closeX}> x </button>
            <h1 className='name'>{alert.name}</h1>
            <p className='text'>You placed {alert.name} in your shopping cart.</p>

            <div className='amountAddRemoveItem'>
                <DeleteButton type={alert.type} name={alert.name} price={alert.price} />
                <div className='amount'>{counter(alert.name)}</div>
                <AddButton type={alert.type} name={alert.name} price={alert.price} />
            </div>

            <div className='nextContainer'>
                <LinkButton to={'/' + alert.nextItem} onClick={closeAlertOnNext}>NEXT</LinkButton>
            </div> 
        </>
    )
}

export default AlertTop
