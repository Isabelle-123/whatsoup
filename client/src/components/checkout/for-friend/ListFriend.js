import React, { useContext } from 'react'
import FriendContext from '../../../context/for-friend/friendContext'
import fStyle from './friendStyles.module.css'

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
        <div className={fStyle.listFriend}>
            <ul key={id}>
                <li className={fStyle.listItems}>
                    <div className={fStyle.type}>{type}</div>
                    <section className={fStyle.counterContainer}>
                        <button className={fStyle.counterButton} type='submit' onClick={() => handleRemove(type, price)}>-</button>
                        <div className={fStyle.counter}>{counter(type)}</div>
                        <button className={fStyle.counterButton} type='submit' onClick={() => handleAdd(type, price)}>+</button>
                    </section>
                    <div className={fStyle.counter}>{price} SEK</div>
                </li>
            </ul>
         </div>
    )
}

export default ListFriend