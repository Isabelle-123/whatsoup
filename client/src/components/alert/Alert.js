import React, { useContext, useEffect } from 'react'
import AlertContext from '../../context/alert/alertContext'
import LinkButton from '../buttons/LinkButton'
import DeleteButton from '../buttons/DeleteButton'
import AddButton from '../buttons/AddButton'
import buttonsStyle from '../buttons/buttonsStyle.module.css'
import CheckoutContext from '../../context/checkout/checkoutContext'
import { StyleAlert } from './StyleAlert'
import BlurBackground from './blur-background/BlurBackground'

const Alert = () => {
  const alertContext = useContext(AlertContext)
  const { alert, removeAlert } = alertContext

  const checkoutContext = useContext(CheckoutContext)
  const { checkout, getCheckout } = checkoutContext


  useEffect(() => {
    getCheckout()
    // eslint-disable-next-line
}, [])

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

    alert !== null && (
      <StyleAlert>
      <BlurBackground/>
        <div key={alert.id} className={`alert-container alert-${alert.type}`}>
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

          <section className='ingredients-container'>
            <h3 className='name'>Ingredients</h3>
            <p className='text'>Ingredients list and carbs. Do adjustments here. We will fix it!</p>
            <div className='read-more-container'>
            <LinkButton>READ MORE</LinkButton>
            </div>
          </section>
        </div>
     
      </StyleAlert>
    )
  )
}


export default Alert


