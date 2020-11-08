import React, { lazy, Suspense } from 'react'
import ListFood from './ListFood'
import butter from '../../assets/Spreads/butter.png'
import beet from '../../assets/Spreads/beet.png'
import aioli from '../../assets/Spreads/aioli.png'
import avocado from '../../assets/Spreads/avocado.png'
import Navbar from '../navbar/Navbar'
import Alert from '../alert/Alert'
import menuStyle from './menuStyle.module.css'

const Spreads = () => {

    const db = [
        { type: "Spreads", key: 14, name: "Whipped Butter", desc: "75 gram", price: 15, img: butter, nextItem: "treats", next: "protein" },
        { type: "Spreads", key: 15, name: "Beetroot Hummus", desc: "100 gram", price: 15, img: beet, nextItem: "treats", next: "protein" },
        { type: "Spreads", key: 16, name: "Tryffle Aioli", desc: "75 gram", price: 15, img: aioli, nextItem: "treats", next: "protein" },
        { type: "Spreads", key: 17, name: "Sliced Avocado", desc: "75 gram", price: 15, img: avocado, nextItem: "treats", next: "protein" },

    ]

    return (
        <div>
            <Alert />
            <Navbar typeOfFood='Spreads' price='15' next='/treats' />
            <ul className={menuStyle.container}>
            {
                db.map(item => (
                    <ListFood type={item.type} name={item.name} price={item.price} key={item.key} desc={item.desc} img={item.img} alt={'Spread' + item.name} nextItem={item.nextItem} next={item.next}/>
                ))}
            </ul>
        </div>
    )
}

export default Spreads