import React, { useContext } from 'react'
import FriendContext from '../../context/for-friend/friendContext'

const ListFriend = (props) => {
    const friendContext = useContext(FriendContext)
    const { friend, addToFriend, getFriend } = friendContext

    const { id, type, price, amountOfItem} = props

    const handleAdd = (e) => {
        e.preventDefault()
        addToFriend(type, price)
        // window.location.reload()
    }

    // const countItems = () => {
    //     let obj = []
    //     friend.forEach((item) => {
    //         console.log(obj[item.type])
    //         if (!obj[item.type]) {
    //           obj[item.type] = 1;
    //         } else {
    //           obj[item.type] += 1;
    //         }
    //       })
  

    //     }
       
    


    const priceOfItems = () => {
        let typeOfFood = {type}
        if (typeOfFood.length > 0) {
            const totalPrice = friend.reduce((acc, curr) => acc + curr.price, 0)
            return totalPrice
        } else {
            return ''
        }
        // for (let index = 0; index < friend.length; index++) {
        //     const element = friend[index];
        //     console.log(element);
        //     console.log(friend);
        // }

        // if (friend.length > 0) {
        //     const amount = friend.reduce((acc, curr) => acc + curr.length, 0)
        //     return amount

        // } else {
        //     return ''

        // }
       
    }
    return (
        <div className="wrapper">
         
            <div key={id}>
                <span>
                    <div>{amountOfItem} x stycken av  {type}</div>
                    <button type='click' onClick={handleAdd}>+</button>
                    {/* {<button onClick={() => handleRemove(product)}>-</button>} */}
                    <div>{price}/styck {priceOfItems()}/total</div>
                 
                </span>
            </div>

         </div>
    )
}

export default ListFriend