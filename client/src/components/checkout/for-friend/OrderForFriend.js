import React, { useContext } from 'react'
import FriendContext from '../../../context/for-friend/friendContext'
import cStyle from '../checkoutStyles.module.css'

const OrderForFriend = () => {
    const friendContext = useContext(FriendContext)
    const { friend } = friendContext

    const countItems = () => {
        let count = friend.reduce((acc, child) => {
            acc[child.type] = (acc[child.type] || 0) +1;
            return acc;
        }, {})

        const entries = Object.entries(count)
        
        const counter = entries.map((item, index)=> (
            <div key={index}>
                {item[1]}
            </div>
        ))
        return counter
    }

    const listItems =  () => {
        let count = friend.reduce((acc, child) => {
            acc[child.type] = (acc[child.type] || 0) +1;
            return acc;
        }, {})

        const entries = Object.entries(count)
        console.log(count);
        
        const items = entries.map((item, index)=> (
            <div key={index}>
                {item[0]}
            </div>
        ))
        return items
    }

    const listPrice = () => {
       let counts = friend.reduce((acc, curr) => {
            let count = acc.get(curr.type) || 0;
            acc.set(curr.type, curr.price + count);
            return acc;
          }, new Map());
          
          let reducedObjArr = [...counts].map(([type, price]) => {
            return {type, price}
          })

          const price = reducedObjArr.map((item, index)=> (
            <div key={index}>
                {item.price}
            </div>
        ))
        return price
    }

    const total = () => {
        if (friend.length > 0) {
            const totalPrice = friend.reduce((acc, curr) => acc + curr.price, 0)
            return totalPrice
        } else {
            return ''
        }
    }


    return (
        <div className={cStyle.wrapper}>
            <div className={cStyle.containerOrder}>
                <h3>ORDER FOR FRIEND</h3>

                <section className={cStyle.listItems}>
                    <div>{countItems()}</div>
                    <div>{listItems()}</div>
                    <div>{listPrice()}</div>
                </section>

                <section className={cStyle.containerPrice}>
                    <h3>AMOUNT FOR GIFT</h3>
                    <h3>{total()} SEK</h3>
                </section>
            </div>
        </div>

    )
}

export default OrderForFriend
