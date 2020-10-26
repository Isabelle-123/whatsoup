
import React, { useContext, useEffect } from 'react'
import AlertContext from '../../context/alert/alertContext'
import LinkButton from '../buttons/LinkButton'
import DeleteButton from '../buttons/DeleteButton'
import AddButton from '../buttons/AddButton'
import buttonsStyle from '../buttons/buttonsStyle.module.css'
import CheckoutContext from '../../context/checkout/checkoutContext'
import { StyleAlert } from './StyleAlert'




const Alert = (props) => {
  const alertContext = useContext(AlertContext)
  const { alert, removeAlert } = alertContext

  const checkoutContext = useContext(CheckoutContext)
  const { checkout, getCheckout } = checkoutContext

  const { name, type, price, } = props

  const handleClick = (e) => {
    console.log(checkout);
    e.preventDefault()
    removeAlert()
  }
  
  const closeAlert = (e) => {
    e.preventDefault()
    removeAlert()
  }

  useEffect(() => {
    getCheckout()
    // eslint-disable-next-line
  }, [])

  // const amountOfItem = () => {
  //   var res = Object.values(checkout.reduce((a, {name}) => {
  //     a[name] = a[name] || {name, count: 0};
  //     a[name].count++;
  //     return a;
  //   }, Object.create(null)))
  //   console.log('resssssssssss' + JSON.stringify(res));
  // }

  // console.log('cheeee' + JSON.stringify(checkout));



  return (

    alert !== null && (
      <StyleAlert>
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
            <LinkButton to={'/' + alert.nextItem} onClick={closeAlert}>NEXT</LinkButton>
          </div>
          <section className='ingredients-container'>
            <h3 className='name'>Ingredients</h3>
            <p className='text'>Ingredients list and carbs. Do adjustments here. We will fix it!</p>
            <div className='nextContainer'>
            <LinkButton to={'/' + alert.nextItem}>READ MORE</LinkButton>
            </div>
          </section>
        </div>
      </StyleAlert>
    )
  )
}


export default Alert


