import React, { useReducer, useEffect } from 'react'
import CheckoutContext from './checkoutContext'
import checkoutReducer from './checkoutReducer'
import axios from 'axios'


import {
  ADD_FOOD,
  CANCEL_CHECKOUT,
  GET_CHECKOUT,
  REMOVE_ITEM
} from '../types'


const CheckoutState = (props) => {
const initialState = { checkout: [] }
const [state, dispatch] = useReducer(checkoutReducer, initialState)


  // useEffect(() => {
  //   getCheckout()
  //   // eslint-disable-next-line
  // }, [])      

  //Add item till checkout
  const addFood = async (type, name, price ) => {
    let order = { type, name, price }
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    
    try {
      const res = await axios.post(
        // firebaseConfig.databaseURL,
      'https://whatsoup-7c207.firebaseio.com/order.json/', 
      order, config )
      dispatch({ type: ADD_FOOD, payload: ( {id: res.data, ...order} ) })

    } catch (err) {
        console.log('error')
          //   dispatch({
          //     type: CONTACT_ERROR,
          //     payload: err.response.msg,
    }
  }

  const removeItem = async (product) => {
    console.log(product.name);
    try {
        let res = await axios.get('https://whatsoup-7c207.firebaseio.com/order.json/')

        let checkoutArray = [];
        for (let key in res.data) {
          checkoutArray.push({
            ...res.data[key],
            id: key
          });
        }
        let foundIndex = checkoutArray.findIndex(item => item.name === product.name)
        console.log(foundIndex);
        let IDtoRemove = checkoutArray[foundIndex].id
        console.log(IDtoRemove);
        await axios.delete(`https://whatsoup-7c207.firebaseio.com/order/${IDtoRemove}.json/`);

        dispatch({ type: REMOVE_ITEM, payload: { name: product.name, checkout: checkoutArray } })

    } catch (err) {
      console.log(err);
      // dispatch({
      //   type: CHECKOUT_CANCEL_ERROR, 
      //   payload: err.response.msg
      // });
    }
  }

  

  // Get checkout
  const getCheckout = async () => {
    try {
      let res = await axios.get('https://whatsoup-7c207.firebaseio.com/order.json/')
     
      const orders = [];
        for (let key in res.data) {
          orders.push( {
          ...res.data[key],
          id: key
        });
      }
      dispatch({ type: GET_CHECKOUT, payload: orders })
      
    } catch (err) {
          // dispatch({
          //   type: CONTACT_ERROR,
          //   payload: err.response.msg
          // });
      console.log('error - could not get checkout')
    }
  }
    
  // Delete checkout
  const cancelCheckout = async id => {
    try {
      await axios.delete('https://whatsoup-7c207.firebaseio.com/order.json/');
      dispatch({ type: CANCEL_CHECKOUT, payload: id })

    } catch (err) {
      console.log(err);
      // dispatch({
      //   type: CHECKOUT_CANCEL_ERROR, 
      //   payload: err.response.msg
      // });
    }
  }

 

  return (
    <CheckoutContext.Provider
      value={{
        checkout: state.checkout,
        addFood,
        removeItem,
        cancelCheckout,
        getCheckout,

      }}
    >
    {props.children}
    </CheckoutContext.Provider>
  )
}

export default CheckoutState