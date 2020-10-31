import {
    ADD_TO_FRIEND,
    GET_FRIEND,
    //REMOVE_FRIEND_ITEM,
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
              // case REMOVE_FRIEND_ITEM:
        //     return {
        //         ...state,
        //         friend: state.friend.filter((item) => item.id !== action.payload),
        //     };
       
        default:
            return state
        }        
}