
import React, { useContext, useEffect } from 'react'
import AlertContext from '../../context/alert/alertContext'
import LinkButton from '../buttons/LinkButton'
import DeleteButton from '../buttons/DeleteButton'
import AddButton from '../buttons/AddButton'
import buttonsStyle from '../buttons/buttonsStyle.module.css'
import CheckoutContext from '../../context/checkout/checkoutContext'
import { StyleAlert } from './StyleAlert'
import BlurBackground from './blur-background/BlurBackground'

const Alert = (props) => {
  const alertContext = useContext(AlertContext)
  const { alert, removeAlert } = alertContext

  const checkoutContext = useContext(CheckoutContext)
  const { getCheckout } = checkoutContext

  const { name, type, price, } = props

  const handleClick = (e) => {
    e.preventDefault()
    removeAlert()
  }
  
  const closeAlertOnNext = (e) => {
    e.preventDefault()
    removeAlert()
  }

  useEffect(() => {
    getCheckout()
    // eslint-disable-next-line
  }, [])

  return (

    alert !== null && (
      <StyleAlert>
      <BlurBackground/>
        <div key={alert.id} className={`alert-container alert-${alert.type}`}>
          <button onClick={handleClick} className={buttonsStyle.closeX}> x </button>
          <h1 className='name'>{alert.name}</h1>
          <p className='text'>You placed {alert.name} in your shopping cart.</p>
          <div className='amountAddRemoveItem'>
            <div className='amount'>1</div>
            <DeleteButton />
            <AddButton type={type} name={name} price={price} />
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


