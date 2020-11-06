import React from 'react'
import ListFood from './ListFood'
import cheese from '../../assets/Bread/cheesy.png'
import vampire from '../../assets/Bread/vampire.png'
import nuts from '../../assets/Bread/goingnuts.png'
import baguette from '../../assets/Bread/asgoodasitbaguettes.png'
import Navbar from '../navbar/Navbar'
import Alert from '../alert/Alert'
import menuStyle from './menuStyle.module.css'




const Bread = () => {

    const db = [
        { type: "Bread", key: 10, name: "The Cheesy One", desc: "", price: 15, img: cheese, nextItem: "spreads", alt: "Soup with taste of healing", next: "protein" },
        { type: "Bread", key: 11, name: "Hold Back Vampire", desc: "", price: 15, img: vampire, nextItem: "spreads", next: "protein" },
        { type: "Bread", key: 12, name: "Going Nuts", desc: "", price: 15, img: nuts, nextItem: "spreads", next: "protein" },
        { type: "Bread", key: 13, name: "As Good As It Baguettes", desc: "", price: 15, img: baguette, nextItem: "spreads", next: "protein" },

    ]

    return (
        <div>
            <Alert />
            <Navbar typeOfFood='Bread' price='15' next='/spreads' />
            <ul className={menuStyle.container}>
            {
                db.map(item => (
                    <ListFood type={item.type} name={item.name} price={item.price} key={item.key} desc={item.desc} img={item.img} alt={'Bread' + item.name} nextItem={item.nextItem} next={item.next}/>
                ))}
            </ul>
        </div>
    )
}

export default Bread