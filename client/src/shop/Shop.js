import React, { useState, useEffect } from 'react'
import Soup from '../components/menu/Soups'
const Shop = () => {

    const [cart, setCart] = useState([])
    /* const[alert, setAlert] = useState("") */
    const [cartTotal, setCartTotal] = useState(0)

    const items = [

        {
            id: 1, name: "Healing", price: 50
        },
        {
            id: 2, name: "So long cold", price: 50
        },
        {
            id: 3, name: "Chilli Billie", price: 50
        }
    ]
    useEffect(
        () => {
            total()
        }, [cart]
    )
    const total = () => {
        let totalVal = 0
        for (let i = 0; i < cart.length; i++) {
            totalVal += cart[i].price
        } setCartTotal(totalVal)
    }
    const addToCart = (el) => {
        setCart([...cart, el])

    }

    const removeFromCart = (el) => {
        let hardCopy = [...cart]
        hardCopy = hardCopy.filter(cartItem => cartItem.id !== el.id)
        setCart(hardCopy)
    }



    const listItems = items.map(el => (
        <div key={el.id}>
            {`${el.name}: ${el.price}`}
            <input type='submit' value='add' onClick={() => addToCart(el)} />
        </div >
    ))
    const cartItems = cart.map(el => (
        <div key={el.id}>
            {`${el.name}: ${el.price}`}
            <input type='submit' value='remove' onClick={() => removeFromCart(el)} />
        </div >
    ));

    return (

        <div> <Soup />
            STORE
            <div>{listItems}</div>
            Cart
            <div>{cartItems}</div>
            <div>Total{cartTotal}</div>

        </div>


    )
}

export default Shop