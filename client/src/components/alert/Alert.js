
import React, { useContext } from 'react'
import styled from 'styled-components'
import AlertContext from '../../context/alert/alertContext'
import LinkButton from '../buttons/LinkButton'
import DeleteButton from '../buttons/DeleteButton'
import AddButton from '../buttons/AddButton'
import buttonsStyle from '../buttons/buttonsStyle.module.css'

const StyleAlert = styled.div`
  

  .alert-container {
    ${'' /* background: rgba(77, 69, 69, 0.8);
    color: white;
    font-size: 2vh;
    font-weight: 500;
    padding: 2%;
    width: 300px;
    text-align: center; */}
    width: 80%;
    margin: 0px;
    padding: 0px;
    background: yellow;
    ${'' /* z-index: 1000;
    margin-top: -300px; */}
    ${'' /* height: 100vh; */}
  
  }

  .alert-Soup {
  background: #ffb;
 }

 .alert-Protein {
  background: #fec;
}

.alert-Bread {
  background: #cff;
}
.alert-Spreads {
  background: #dfd;
}
.alert-Treats {
  background: #ffb;
}
.alert-Beverages {
  background: #fec;
}


 .name {
    font-weight: 100;
    margin: 0;
    padding-top: 10px;
    font-size: 25px;
    text-align: center;
    font-family: Lobster;
 }

 .text {
    margin: 0px;
    padding: 5px;
    font-weight: 100;
    font-size: 18px;
    text-align: center;
    font-size: 15px;
 }

 .amountAddRemoveItem {
   display: flex;
   justify-content: center;
  
  }

 .amount {
  border-radius: 5px;
  border: 1px solid black;
  margin:5px;
  font-size: 15px;
  padding-left: 5px;
  padding-right: 5px;
  font-family: Lobster;
 }

 .linkButton {
   color: blue;
 }

 .nextContainer {
  display: flex;
   justify-content: center;
   color:blue;
   width: 100%;
   margin:0px;
 }
`
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
        <div key={alert.id} className={`alert-container alert-${alert.type}`} >
          <button onClick={handleClick} className={buttonsStyle.closeX}> x </button>
          <h1 className='name'> {alert.name}</h1>
          <h2 className='text'> You placed {alert.name} in your shopping cart.</h2>
          <section className='amountAddRemoveItem'>
            <div className='amount'>1</div>
            <DeleteButton />
            <AddButton type={type} name={name} price={price} />
          </section>
          <section className='nextContainer'>
            <LinkButton to={'/' + alert.nextItem}>NEXT</LinkButton>
          </section>
        </div>
      </StyleAlert>
    )
  )
}


export default Alert


