import React from 'react'
import ListFood from './ListFood'

import amicake from '../../assets/Treats/pancake.png'
import pancake from '../../assets/Treats/regularpan.png'
import Navbar from '../navbar/Navbar'
import Alert from '../alert/Alert'
//import { v4 as uuidv4 } from 'uuid';




const Treats = () => {

    const database = [

        { type: "Treats", key: 18, name: "American Pancakes", desc: "With lemon and blueberrys", price: 15, img: amicake, nextItem: "beverages", next: "beverages" },
        { type: "Treats", key: 19, name: "Pancakes", desc: "with cream and jam", price: 15, img: pancake, nextItem: "beverages", next: "beverages" },

    ]

    return (
        <div>
            <Alert type={database.type} name={database.name} price={database.price} />
            <Navbar typeOfFood='Treats' price='15' next='/beverages' />
            {
                database.map(item => (
                    <ListFood type={item.type} name={item.name} price={item.price} key={item.key} desc={item.desc} img={item.img} alt={item.name} nextItem={item.nextItem} />
                ))}
        </div>
    )
}

export default Treats