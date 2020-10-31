import React, { useContext, useEffect } from 'react';
import FriendContext from '../../context/for-friend/friendContext'


const Friend = () => {
    const friendContext = useContext(FriendContext)
    const { friend, addToFriend, getFriend } = friendContext

    const products = [
        { type: "Soup", id: 1, price: 50 },
        { type: "Protein", id: 2, price: 30 },
        { type: "Bread", id: 3, price: 15 },
        { type: "Spread", id: 4, price: 25 },
        { type: "Treats", id: 5, price: 15 },
        { type: "Beverages", id: 6, price: 25 } 
    ]

    useEffect(() => {
        addToFriend()
        getFriend()
        // eslint-disable-next-line
    }, [])

    // const handleRemove = (product) => {

    // }



    const total = () => {
        if (friend.length > 0) {
            const totalPrice = friend.reduce((acc, curr) => acc + curr.price, 0)
            return totalPrice

        } else {
            return ''

        }
    }


    const handleAdd = (product) => {
        addToFriend(product.type, product.price)
        window.location.reload()
    }

    return (
        <div className="wrapper">
            <div>
                Shopping Cart: {friend.length}
            </div>
            <div>Total: {total()}</div>
            <div>
                {products.map(product => (
                    <div key={product.id}>
                        <span>
                            <div>{product.type}</div>
                            <button onClick={() => handleAdd(product)}>+</button>
                            {/* {<button onClick={() => handleRemove(product)}>-</button>} */}
                            <div>{product.price}</div>
                        </span>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default Friend;