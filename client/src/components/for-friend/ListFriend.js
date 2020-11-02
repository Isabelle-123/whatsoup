import React, { useContext, useEffect } from 'react'
import FriendContext from '../../context/for-friend/friendContext'

const ListFriend = (props) => {
    const friendContext = useContext(FriendContext)
    const { addToFriend, removeFriendItem, friend } = friendContext

    const { id, type, price } = props


    const handleAdd = (type, price) => {
        let product = {type, price}
        addToFriend(product)
    }

    const handleRemove = (type, price) => {
        let product = {type, price}
        removeFriendItem(product)
    }

    const counter = (type) => {
        if (friend.length != 0 ) {
            let quantity = friend.reduce((acc, child) => {
                if (!acc[child.type]) {
                    acc[child.type] = 0;
                    }
                    acc[child.type]++;
                    return acc;
                }, {})
        
                for(let i in quantity) {
                    if (i == type) {
                        return quantity[i];
                    } else {
                        return '0';
                    }
                }


        } else {
            return 0
        }
        
       

    }

    return (
        <div className="container">
            <ul key={id}>
                <li>
                    <div>{type}</div>
                    <button type='submit' onClick={() => handleAdd(type, price)}>+</button>
                    <div>amunt: {counter(type)}</div>
                    <button type='submit' onClick={() => handleRemove(type, price)}>-</button>
                    <div>{price}</div>
                 
                </li>
            </ul>
         </div>
    )
}

export default ListFriend