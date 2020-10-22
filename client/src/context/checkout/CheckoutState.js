import React, { useReducer } from 'react'
import CheckoutContext from './checkoutContext'
import checkoutReducer from './checkoutReducer'
import axios from 'axios'


import {
    ADD_FOOD,
    CANCEL_CHECKOUT,
    // UPDATE_CHECKOUT,
    GET_CHECKOUT,
    // GET_ORDER,
    // DELETE_FOOD,

} from '../types'


const CheckoutState = (props) => {

    const initialState = { checkout: [] }

    const [state, dispatch] = useReducer(checkoutReducer, initialState,
      
    )


    //Delete checkout
    const cancelCheckout = () => {
        dispatch({ type: CANCEL_CHECKOUT })
    }


    //Add item till checkout
    const addFood = async (type, name, price ) => {
        // const id = uuidv4();
        let order = { type, name, price }
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify(order),
        }
    
        try {
          const res = await axios.post(
            'https://ey-whatsoup.firebaseio.com/order.json',
            // order,
           order,
            config
          )
          console.log('order' + order, config);
          console.log('res' + res.data);
    
          dispatch({
            type: ADD_FOOD,
            payload: (res.data)
          })
        } catch (err) {
          console.log('error')
          //   dispatch({
          //     type: CONTACT_ERROR,
          //     payload: err.response.msg,
        }
      }

  const getCheckout = async () => {
    try {
      let res = await axios.get('https://ey-whatsoup.firebaseio.com/order.json')
        
      const orders = [];
        for (let key in res.data) {
          orders.push( {
          ...res.data[key],
          id: key
        });
      }
  
      
      dispatch({
        type: GET_CHECKOUT,
        payload: orders,
        })
      } catch (err) {
          // dispatch({
          //   type: CONTACT_ERROR,
          //   payload: err.response.msg
          // });
      console.log('error - could not get checkout')
    }
  }
    


    return (
        <CheckoutContext.Provider
            value={{
                checkout: state.checkout,
                addFood,
                cancelCheckout,
                getCheckout
            }}
        >
            {props.children}
        </CheckoutContext.Provider>
    )
}

export default CheckoutState