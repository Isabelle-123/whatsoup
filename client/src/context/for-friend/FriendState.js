import React, { useReducer } from 'react'
import FriendContext from './friendContext'
import friendReducer from './friendReducer'
import axios from 'axios'


import {
    ADD_TO_FRIEND,
    GET_FRIEND,
    REMOVE_FRIEND_ITEM,
    CANCEL_FRIEND
} from '../types'

const FriendState = (props) => {
  const initialState = { friend: []}
  const [state, dispatch] = useReducer(friendReducer, initialState)

  const addToFriend = async (product) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    try {
      const res = await axios.post(
        'https://whatsoup-7c207.firebaseio.com/friend.json/',
        product,
        config
      )
      dispatch({
        type: ADD_TO_FRIEND,
        payload: {id: res.data, ...product}
      })

    } catch (err) {
        console.error('error - could not add food item to friend')
        //   dispatch({
        //     type: CONTACT_ERROR,
        //     payload: err.response.msg,
    }
  }

  const getFriend = async () => {
    try {
      let res = await axios.get('https://whatsoup-7c207.firebaseio.com/friend.json/')
    
      const forFriend = [];
        for (let key in res.data) {
            forFriend.push( {
                ...res.data[key],
                id: key
            });
        }
      dispatch({ type: GET_FRIEND, payload: forFriend })
      
    } catch (err) {
          // dispatch({
          //   type: CONTACT_ERROR,
          //   payload: err.response.msg
          // });
      console.log('error - could not get checkout')
    }
  }

 
  const removeFriendItem = async (product) => {
    console.log(product.type);
    try {
        let res = await axios.get('https://whatsoup-7c207.firebaseio.com/friend.json/')

        let friendCheckout = [];
        for (let key in res.data) {
            friendCheckout.push({
                ...res.data[key],
                id: key
            });
        }
        let foundIndex = friendCheckout.findIndex(item => item.type === product.type)
        console.log(foundIndex);
        let IDtoRemove = friendCheckout[foundIndex].id
        console.log(IDtoRemove);
        await axios.delete(`https://whatsoup-7c207.firebaseio.com/friend/${IDtoRemove}.json/`);

        dispatch({ type: REMOVE_FRIEND_ITEM, payload: { type: product.type, friend: friendCheckout } })

    } catch (err) {
      console.log(err);
      // dispatch({
      //   type: CHECKOUT_CANCEL_ERROR, 
      //   payload: err.response.msg
      // });
    }
  }


  const cancelFriend = async id => {
    try {
      await axios.delete('https://whatsoup-7c207.firebaseio.com/friend.json/');
      dispatch({ type: CANCEL_FRIEND, payload: id })

    } catch (err) {
      console.log(err);
      // dispatch({
      //   type: CHECKOUT_CANCEL_ERROR, 
      //   payload: err.response.msg
      // });
    }
  }

  return (
      <FriendContext.Provider
        value={{
          friend: state.friend,
          addToFriend,
          getFriend,
          removeFriendItem,
          cancelFriend,
        }}
      > 
    {props.children}
    </FriendContext.Provider>
  )
}

export default FriendState
