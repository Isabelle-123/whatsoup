import {
    ADD_FOOD,
    CANCEL_CHECKOUT,
    UPDATE_CHECKOUT,
    GET_CHECKOUT,
    ADD_TO_FRIEND,
    GET_FRIEND,
    //REMOVE_FRIEND_ITEM,
    //UPDATE_CHECKOUT
} from '../types'


export default (state, action) => {
    switch (action.type) {
        case ADD_FOOD:
            return {
                ...state,
                checkout: [...state.checkout, action.payload],
            }
        case GET_CHECKOUT:
            return {
                ...state,
                checkout: action.payload,
            }
        case UPDATE_CHECKOUT:
            return {
                ...state,
                checkout: [...state.checkout, action.payload],
            }
        case CANCEL_CHECKOUT:
            // return {
            //     checkout: []
            // }
            return {
                ...state,
                checkout: state.checkout.filter(
                  order => order.id !== action.payload
                )
              };
        case ADD_TO_FRIEND:
            return {
                ...state,
                friend: [...state.friend, action.payload],
            }
        // case REMOVE_FRIEND_ITEM:
        //     return {
        //         ...state,
        //         friend: state.friend.filter((item) => item.id !== action.payload),
        //     };
        case GET_FRIEND:
            return {
                ...state,
                friend: action.payload
            }
        default:
            return state
    }
}

