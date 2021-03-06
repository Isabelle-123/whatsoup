import {
    ADD_FOOD,
    CANCEL_CHECKOUT,
    UPDATE_CHECKOUT,
    GET_CHECKOUT,
    REMOVE_ITEM
} from '../types'


export default (state, action) => {
    switch (action.type) {
        case ADD_FOOD:
            return {
                ...state,
                checkout: [...state.checkout, action.payload],
            }
        case REMOVE_ITEM:
            let foundIndex = action.payload.checkout.findIndex(item => item.name === action.payload.name)
            return {
                ...state,
                checkout: state.checkout.filter((product, index) => index !== foundIndex)
            };
        case GET_CHECKOUT:
            return {
                ...state,
                checkout: action.payload,
            }
        case UPDATE_CHECKOUT:
            return {
                ...state,
                checkout: [...state.checkout + action.payload],
            }
        case CANCEL_CHECKOUT:
            return {
                ...state,
                checkout: state.checkout.filter(
                  order => order.id !== action.payload
                )
            };
        default:
            return state
    }   
}

