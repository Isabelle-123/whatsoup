import {
    ADD_TO_FRIEND,
    GET_FRIEND,
    REMOVE_FRIEND_ITEM,
    CANCEL_FRIEND
} from '../types'

export default (state, action) => {
    switch (action.type) {
        case ADD_TO_FRIEND:
            return { 
                ...state,
                friend: [...state.friend, action.payload],
            }
        case GET_FRIEND:
            return {
                ...state,
                friend: action.payload
            }
        case REMOVE_FRIEND_ITEM:
            let foundIndex = action.payload.friend.findIndex(item => item.type === action.payload.type)
            return {
                ...state,
                friend: state.friend.filter((product, index) => index !== foundIndex)
            };
        case CANCEL_FRIEND:
            return {
                ...state,
                friend: state.friend.filter(
                  order => order.id !== action.payload
                )
            };
       
        default:
            return state
    }        
}