import React from 'react'
import ListFood from './ListFood'
import lime from '../../assets/Beverages/lime.png'
import apple from '../../assets/Beverages/apple.png'
import shots from '../../assets/Beverages/shots.png'
import fritz from '../../assets/Beverages/fritz.png'
import kombucha from '../../assets/Beverages/kombucha.png'
import Navbar from '../navbar/Navbar'
import Alert from '../alert/Alert'
import menuStyle from './menuStyle.module.css'


const Beverages = () => {

    const db = [
        { type: "Beverages", key: 20, name: "Lemonade", desc: "Lime and Lemon", price: 15, img: lime, nextItem: "checkout", alt: "Soup with taste of healing", next: "checkout" },
        { type: "Beverages", key: 21, name: "Juice", desc: "Apple and Ginger", price: 15, img: apple, nextItem: "checkout", next: "checkout" },
        { type: "Beverages", key: 22, name: "Three Shots", desc: "", price: 15, img: shots, nextItem: "checkout", next: "checkout" },
        { type: "Beverages", key: 23, name: "Fritz-Kola", desc: "", price: 15, img: fritz, nextItem: "checkout", next: "checkout" },
        { type: "Beverages", key: 24, name: "Kombucha", desc: "", price: 15, img: kombucha, nextItem: "checkout", next: "checkout" },

    ]

    return (
        <div>
            <Alert />
            <Navbar typeOfFood='Beverages' price='15' next='/checkout' />
            <ul className={menuStyle.container}>
            {
                db.map(item => (
                    <ListFood type={item.type} name={item.name} price={item.price} key={item.key} desc={item.desc} img={item.img} alt={'Soup' + item.name} nextItem={item.nextItem} next={item.next}/>
                ))}
            </ul>
        </div>
    )
}

export default Beverages