import React from 'react'
import ShowFood from './ShowFood'
import butter from '../../assets/Spreads/butter.png'
import beet from '../../assets/Spreads/beet.png'
import aioli from '../../assets/Spreads/aioli.png'
import avocado from '../../assets/Spreads/avocado.png'
import Navbar from '../navbar/Navbar'
import Alert from '../alert/Alert'
//import { v4 as uuidv4 } from 'uuid';




const Spreads = () => {

    const database = [
        { type: "Bread", key: 14, name: "Whipped Butter", desc: "75 gram", price: 15, img: butter, nextItem: "PROTEIN", alt: "Soup with taste of healing", next: "protein" },
        { type: "Bread", key: 15, name: "Beetroot Hummus", desc: "100 gram", price: 15, img: beet, nextItem: "PROTEIN", next: "protein" },
        { type: "Bread", key: 16, name: "Tryffle Aioli", desc: "75 gram", price: 15, img: aioli, nextItem: "PROTEIN", next: "protein" },
        { type: "Bread", key: 17, name: "Sliced Avocado", desc: "75 gram", price: 15, img: avocado, nextItem: "PROTEIN", next: "protein" },

    ]

    return (
        <div>
            <Alert type={database.type} name={database.name} price={database.price} />
            <Navbar typeOfFood='Spreads' price='15' next='/treats' />
            {
                database.map(item => (
                    <ShowFood type={item.type} name={item.name} price={item.price} key={item.key} desc={item.desc} img={item.img} alt={item.alt} nextItem={item.nextItem} />
                ))}
        </div>
    )
}

export default Spreads