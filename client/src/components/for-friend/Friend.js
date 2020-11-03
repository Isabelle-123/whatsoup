import React, { useContext, useEffect } from 'react';
import FriendContext from '../../context/for-friend/friendContext'
import ListFriend from './ListFriend'
import style from './style.module.css'

const Friend = () => {
    const friendContext = useContext(FriendContext)
    const { friend, getFriend } = friendContext

    const products = [
        { type: "Soup", id: 1, price: 50 },
        { type: "Protein", id: 2, price: 30 },
        { type: "Bread", id: 3, price: 15 },
        { type: "Spread", id: 4, price: 25 },
        { type: "Treats", id: 5, price: 15 },
        { type: "Beverages", id: 6, price: 25 }
    ]

    useEffect(() => {
        total()
        getFriend()
        // eslint-disable-next-line
    }, [])

    const total = () => {
        if (friend.length > 0) {
            const totalPrice = friend.reduce((acc, curr) => acc + curr.price, 0)
            return totalPrice.toString()

        } else {
            return ''

        }
    }

    return (
        <div className={style.container}>
            <div>
                <h2 className={style.h2}>Which friend is this treasure for?</h2>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Number" />
            </div>
            {/* <h3>
                Shopping Cart: {friend.length}
            </h3> */}
            <h3>TOTAL PRICE {total()} SEK</h3>
            {
                products.map(product => (
                    <ListFriend type={product.type} id={product.id} price={product.price} key={product.id} />
                ))
            }
            <div><h1>Send a message!</h1>
                <textarea />
            </div>
        </div>
    );
};

export default Friend;