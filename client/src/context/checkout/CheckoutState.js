import React, { useReducer, useEffect } from 'react'
import CheckoutContext from './checkoutContext'
import checkoutReducer from './checkoutReducer'
//import firebaseConfig from '../../firebase/firebaseIndex'
import axios from 'axios'

// firebaseConfig.databaseURL

import {
  ADD_TO_FRIEND,
  ADD_FOOD,
  CANCEL_CHECKOUT,
  UPDATE_CHECKOUT,
  GET_CHECKOUT,
  GET_FRIEND,
  REMOVE_FRIEND_ITEM
  // DELETE_FOOD,

} from '../types'


const CheckoutState = (props) => {
const initialState = { checkout: [], friend: null }
const [state, dispatch] = useReducer(checkoutReducer, initialState)


useEffect(() => {
  getCheckout()
  // eslint-disable-next-line
}, [])      
        // firebaseConfig.databaseURL,


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
      dispatch({ type: ADD_FOOD, payload: (res.data) })

    } catch (err) {
        console.log('error')
          //   dispatch({
          //     type: CONTACT_ERROR,
          //     payload: err.response.msg,
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
  const addToFriend = async (type, price) => {
    let friend = { type, price }
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    }
    try {
      const res = await axios.post(
        'https://ey-whatsoup.firebaseio.com/friend.json',
        friend,
        config
      )
      dispatch({
        type: ADD_TO_FRIEND,
        payload: res.data
      })

    } catch (err) {
        console.error('error - could not add food item to friend')
        //   dispatch({
        //     type: CONTACT_ERROR,
        //     payload: err.response.msg,
    }
  }

  return (
    <CheckoutContext.Provider
      value={{
        checkout: state.checkout,
        friend: state.friend,
        addFood,
        cancelCheckout,
        getCheckout,
        addToFriend
      }}
    >
    {props.children}
    </CheckoutContext.Provider>
  )
}

export default CheckoutState