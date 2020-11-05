import React, { useContext } from 'react'
import FriendContext from '../../../context/for-friend/friendContext'
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
        <div className={style.listFriend}>
            <ul key={id}>
                <li className={style.listItems}>
                    <div className={style.type}>{type}</div>
                    <section className={style.counterContainer}>
                        <button className={style.counterButton} type='submit' onClick={() => handleAdd(type, price)}>+</button>
                        <div className={style.counter}>{counter(type)}</div>
                        <button className={style.counterButton} type='submit' onClick={() => handleRemove(type, price)}>-</button>
                    </section>
                    <div className={style.counter}>{price} SEK</div>
                </li>
            </ul>
         </div>
    )
}

export default ListFriend