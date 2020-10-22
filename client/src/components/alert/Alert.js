
import React, { useContext } from 'react'
import AlertContext from '../../context/alert/alertContext'
import LinkButton from '../buttons/LinkButton'
import DeleteButton from '../buttons/DeleteButton'
import AddButton from '../buttons/AddButton'
import buttonsStyle from '../buttons/buttonsStyle.module.css'
import {StyleAlert} from './StyleAlert'


const Alert = (props) => {
  const alertContext = useContext(AlertContext)
  const { alert, removeAlert } = alertContext

  const { name, type, price, } = props

  const handleClick = (e) => {
    e.preventDefault()
    removeAlert()
  }


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
            <LinkButton to={'/' + alert.nextItem}>NEXT</LinkButton>
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


