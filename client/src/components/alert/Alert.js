import React, { useContext, useEffect } from 'react'
import AlertContext from '../../context/alert/alertContext'
import AlertBottom from './AlertBottom'
import AlertTop from './AlertTop'
import CheckoutContext from '../../context/checkout/checkoutContext'
import { StyleAlert } from './StyleAlert'
import BlurBackground from './blur-background/BlurBackground'

const Alert = () => {
  const alertContext = useContext(AlertContext)
  const { alert } = alertContext

  const checkoutContext = useContext(CheckoutContext)
  const { getCheckout } = checkoutContext


  useEffect(() => {
    getCheckout()
    // eslint-disable-next-line
}, [])



 

  return (

    alert !== null && (
      <StyleAlert>
      <BlurBackground/>
        <div key={alert.id} className={`alert-container alert-${alert.type}`}>
          <AlertTop/>
          <AlertBottom/>
        </div>
     
      </StyleAlert>
    )
  )
}


export default Alert


