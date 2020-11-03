import React, { useContext } from 'react'
import FriendContext from '../../context/for-friend/friendContext'
import style from './style.module.css'

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
        let quantity = friend.reduce((acc, child) => {
            if (!acc[child.type]) {
                acc[child.type] = 0;
            } acc[child.type]++;
                return acc;
        }, {})

        const entries = Object.entries(quantity)
    
        for (const [food, count] of entries) {
            if (food === type ) {
                return count
            }
        }
    }

    return (
        <div className="container">
            <ul key={id}>
                <li className={style.listItems}>
                    <div className={style.type}>{type}</div>
                    <button className={style.counter} type='submit' onClick={() => handleAdd(type, price)}>+</button>
                    <div className={style.counter}>{counter(type)}</div>
                    <button className={style.counter} type='submit' onClick={() => handleRemove(type, price)}>-</button>
                    <div>{price} SEK / piece</div>
                 
                </li>
            </ul>
         </div>
    )
}

export default ListFriend