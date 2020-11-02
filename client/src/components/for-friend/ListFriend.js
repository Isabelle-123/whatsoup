import React, { useContext, useEffect } from 'react'
import FriendContext from '../../context/for-friend/friendContext'

const ListFriend = (props) => {
    const friendContext = useContext(FriendContext)
    const { friend, addToFriend, getFriend, removeFriendItem } = friendContext

    const { id, type, price, amountOfItem, item } = props

    useEffect(() => {
        // addToFriend();
        getFriend();
        handleRemove();
        // total();
        // eslint-disable-next-line
        }, []
    )

    const handleAdd = (type, price) => {
        let product = {type, price}
        addToFriend(product)
    }

    const handleRemove = (type, price) => {
        let product = {type, price}
        removeFriendItem(product)
    }

    // const priceOfItems = () => {
    //     let typeOfFood = {type}
    //     if (typeOfFood.length > 0) {
    //         const totalPrice = friend.reduce((acc, curr) => acc + curr.price, 0)
    //         return totalPrice
    //     } else {
    //         return ''
    //     }
    // }

    return (
        <div className="container">
            <ul key={id}>
                <li>
                    <div>{type}</div>
                    <button type='submit' onClick={() => handleAdd(type, price)}>+</button>
                    <button type='submit' onClick={() => handleRemove(type, price)}>-</button>
                    <div>{price}</div>
                 
                </li>
            </ul>
         </div>
    )
}

export default ListFriend