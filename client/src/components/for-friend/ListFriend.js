// import React, { useContext, useEffect } from 'react'
// import FriendContext from '../../context/for-friend/friendContext'

// const ListFriend = (props) => {
//     const friendContext = useContext(FriendContext)
//     const { friend, addToFriend, getFriend, removeFriendItem } = friendContext

//     const { id, type, price, amountOfItem, item } = props

//     useEffect(() => {
//         // addToFriend();
//         getFriend();
//         // total();
//         // eslint-disable-next-line
//         }, []
//     )

//     const handleAdd = (product) => {
//         addToFriend(product.type, product.price)
//     }

//     const handleRemove = (item) => {
//         // e.preventDefault()
//         removeFriendItem(item)
//     }

//     // const priceOfItems = () => {
//     //     let typeOfFood = {type}
//     //     if (typeOfFood.length > 0) {
//     //         const totalPrice = friend.reduce((acc, curr) => acc + curr.price, 0)
//     //         return totalPrice
//     //     } else {
//     //         return ''
//     //     }
//     // }

//     return (
//         <div className="wrapper">
         
//             <div key={id}>
//                 <span>
//                     <div>{amountOfItem} x stycken av {type}</div>
//                     <button type='submit' onClick={() => handleAdd(product)}>+</button>
//                     <button type='submit' onClick={() => handleRemove(product)}>-</button>
//                     <div>{price}/styck total</div>
                 
//                 </span>
//             </div>

//          </div>
//     )
// }

// export default ListFriend