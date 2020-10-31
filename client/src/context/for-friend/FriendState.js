import React, { useReducer, useEffect } from 'react'
import FriendContext from './friendContext'
import friendReducer from './friendReducer'
import axios from 'axios'


import {
    ADD_TO_FRIEND,
    GET_FRIEND,
    // REMOVE_FRIEND_ITEM
} from '../types'

const FriendState = (props) => {
  const initialState = { friend: [] }
  const [state, dispatch] = useReducer(friendReducer, initialState)

  // useEffect(() => {
  //   getFriend();
  //   addToFriend();
  //     // eslint-disable-next-line
  //   }, []
  // )

  const addToFriend = async (type, price) => {
      let friend = { type, price }
      const config = {
          headers: {
              'Content-Type': 'application/json',
          },
      }
      try {
        const res = await axios.post(
          'https://whatsoup-7c207.firebaseio.com/friend.json/',
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

console.log(state.friend);

    return (
        <FriendContext.Provider
          value={{
            friend: state.friend,
            addToFriend,
            getFriend,
          }}
        > 
      {props.children}
      </FriendContext.Provider>
    )
}

export default FriendState
