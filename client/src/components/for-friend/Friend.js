import React, { useContext, useEffect, useState } from 'react';
import FriendContext from '../../context/for-friend/friendContext'
import ListFriend from './ListFriend'

const Friend = () => {
    const friendContext = useContext(FriendContext)
    const { friend, getFriend, addToFriend, getFriendCart, friendCart, removeFriendItem } = friendContext

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
    const handleAdd = (product) => {

        addToFriend(product.type, product.price)


    }


    const handleRemove = (product) => {
        // hitta indexet i arrayen där titeln matcher
        // filtrera bort elementet där index matchar
        removeFriendItem(product)

        //window.location.reload()
    }



    const total = () => {

        if (friend.length > 0) {
            const totalPrice = friend.reduce((acc, curr) => acc + curr.price, 0)
            return totalPrice.toString()

        } else {
            return ''

        }
    }
    console.log(friend)

    return (
        <div className="wrapper">
     <div><h1>Which friend is this treasure for?</h1>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Number" />
            </div>
            <div>
                Shopping Cart: {friend.length}
            </div>
            <div>Total: {total()}</div>
            <div>
                {products.map(product => (
                    <div key={product.id}>
                        <span>
                            <div>{product.type}</div>
                            <button onClick={(e) => handleAdd(product)}>+</button>
                            <button onClick={() => handleRemove(product)}>-</button>
                            <div>{product.price}</div>
                        </span>
                    </div>
                ))}

            </div>
            <div><h1>Send a message!</h1>
                <textarea />
            </div>
        </div>
    );
};

export default Friend;

// import React, { useContext, useEffect, useState } from 'react';
// import FriendContext from '../../context/for-friend/friendContext'
// import ListFriend from './ListFriend'

// const Friend = () => {
//     const friendContext = useContext(FriendContext)
//     const { friend, getFriend, addToFriend, getFriendCart, friendCart } = friendContext

//     const products = [
//         { type: "Soup", id: 1, price: 50 },
//         { type: "Protein", id: 2, price: 30 },
//         { type: "Bread", id: 3, price: 15 },
//         { type: "Spread", id: 4, price: 15 },
//         { type: "Treats", id: 5, price: 15 },
//         { type: "Beverages", id: 6, price: 15 }
//     ]

//     useEffect(() => {
//         getFriend();
//         total();
//         // getFriendCart();
//         // totalAmountGift();
   
//         // eslint-disable-next-line
//         }, []
//     )

//     const total = () => {
//         if (friend.length > 0) {
//             const totalPrice = friend.reduce((acc, curr) => acc + curr.price, 0)
//             return totalPrice.toString()
//         } else {
//             return ''
//         }
//     }

//     // const totalAmountGift = () => {
//     //     // getFriend();
//     //     if (friend.length > 0) {
//     //         let totalVal = 0;
//     //         for (let i = 0; i < friend.length; i++) {
//     //           totalVal += friend[i].price;
//     //         }
//     //         return (totalVal);
//     //         // return totalVal
//     //         // const totalPrice = friend.reduce((acc, curr) => acc + curr.price, 0)
//     //         // return totalPrice

//     //     } else {
//     //         return ''

//     //     }
//     // }

//     console.log(friend);

//         return (
//             <div>
//             <div>TOTAL ITEMS FOR YOUR FRIEND: {friend.length}</div>        
//             <div>TOTAL AMOUNT FOR GIFT: {total()}</div>  
//             {/* <Alert /> */}
//             {/* <div> Choose components for your friend {amountOfItem}</div> */}
//             {
//                 products.map(product => (
//                     <ListFriend type={product.type} id={product.id} price={product.price} key={product.id} />
//                 ))}
                  
//             </div>
//         );
//     };
    
//     export default Friend;