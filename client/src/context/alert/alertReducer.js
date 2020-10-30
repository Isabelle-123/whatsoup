import { SET_ALERT, REMOVE_ALERT, SET_BLUR } from '../types'

export default (state, action) => {
    switch (action.type) {
        case SET_ALERT:
            return action.payload
        case SET_BLUR:
            return action.payload
        case REMOVE_ALERT:
            return null
        default:
            return state
    }
}
