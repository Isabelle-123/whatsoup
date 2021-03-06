import React, { useContext, useEffect } from 'react';
import FriendContext from '../../../context/for-friend/friendContext'
import ListFriend from './ListFriend'
import fStyle from './friendStyles.module.css'
import gStyle from '../../layout/globalStyle.module.css'


const Friend = () => {
    const friendContext = useContext(FriendContext)
    const { friend, getFriend } = friendContext

    const products = [
        { type: "Soup", id: 1, price: 50 },
        { type: "Protein", id: 2, price: 30 },
        { type: "Bread", id: 3, price: 15 },
        { type: "Spread", id: 4, price: 10 },
        { type: "Treats", id: 5, price: 25 },
        { type: "Beverages", id: 6, price: 20 }
    ]

    useEffect(() => {
        total()
        getFriend()
        // eslint-disable-next-line
    }, [])

    const total = () => {
        if (friend.length > 0) {
            const totalPrice = friend.reduce((acc, curr) => acc + curr.price, 0)
            return totalPrice.toString() + ' SEK'

        } else {
            return ''

        }
    }

    return (
        <div className={fStyle.container}>
            <section className={fStyle.inputSection} >
                <h2 className={gStyle}>Which friend is this treasure for?</h2>
                <input type="text" placeholder=" Name" />
                <input type="text" placeholder=" Number" />
            </section>
            {
                products.map(product => (
                    <ListFriend type={product.type} id={product.id} price={product.price} key={product.id} />
                ))
            }
            <section className={fStyle.containerPrice} >
                <h3>AMOUNT FOR GIFT</h3>
                <h3> {total()}</h3>
            </section>
           
            <h2>Send a message</h2>
            <textarea/>
        </div>
    );
};

export default Friend;