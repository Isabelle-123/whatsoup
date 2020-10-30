import React, { useReducer } from 'react'
import AlertContext from './alertContext'
import alertReducer from './alertReducer'

import { SET_ALERT, REMOVE_ALERT, SET_BLUR } from '../types'

const AlertState = (props) => {
    const initialState = null

    const [state, dispatch] = useReducer(alertReducer, initialState)

    const setAlert = (name, nextItem, type) => {
        dispatch({
            type: SET_ALERT,
            payload: { name, nextItem, type },
        })
    }

    const removeAlert = () => {
        dispatch({
            type: REMOVE_ALERT,
        })
    }


    const setBlur = () => {
        dispatch({
            type: SET_BLUR,
        })
    }


    return (
        <AlertContext.Provider
            value={{
                alert: state,
                setAlert,
                setBlur,
                removeAlert
            }}
        >
            {props.children}
        </AlertContext.Provider>
    )
}

export default AlertState
