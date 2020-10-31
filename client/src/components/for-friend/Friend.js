import React, { useContext, useEffect } from 'react';
import FriendContext from '../../context/for-friend/friendContext'
import ListFriend from './ListFriend'

const Friend = () => {
        
    const friendContext = useContext(FriendContext)
    const { friend, getFriend } = friendContext
    
    const products = [
        { type: "Soup", id: 1, price: 50 },
        { type: "Protein", id: 2, price: 30 },
        { type: "Bread", id: 3, price: 15 },
        { type: "Spread", id: 4, price: 15 },
        { type: "Treats", id: 5, price: 15 },
        { type: "Beverages", id: 6, price: 15 }
    ]

    useEffect(() => {
        getFriend();
        // eslint-disable-next-line
        }, []
    )

  


    const totalAmountGift = () => {
        if (friend.length > 0) {
            let totalVal = 0;
            for (let i = 0; i < friend.length; i++) {
              totalVal += friend[i].price;
            }
            return totalVal
            // const totalPrice = friend.reduce((acc, curr) => acc + curr.price, 0)
            // return totalPrice

        } else {
            return ''

        }
    }
    
    
    
        // const amountOfItem = () => {
        //     let obj = {}
        //     friend.forEach((item) => {
        //         console.log(obj[item.type])
        //         if (!obj[item.type]) {
        //           obj[item.type] = 1;
        //         } else {
        //           obj[item.type] += 1;
        //         }
        //       })
        //     // var res = Object.values(friend.reduce((a, {type}) => {
        //     //     a[type] = a[type] || {type, count: 0};
        //     //     a[type].count++;
        //     //     return a;
        //     //   }, Object.create(null)));
              
        //     //   console.log(res);
        //     }

    
        return (
            <div>
            {/* <Alert /> */}
            {/* <div> Choose components for your friend {amountOfItem}</div> */}
            {
                products.map(item => (
                    <ListFriend type={item.type} id={item.id} price={item.price} key={item.id} />
                ))}
            <div>TOTAL ITEMS FOR YOUR FRIEND: {friend.length}</div>        
            <div>TOTAL AMOUNT FOR GIFT: {totalAmountGift()}</div>        
            </div>
        );
    };
    
    export default Friend;