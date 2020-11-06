import React from 'react';
import Navbar from '../navbar/Navbar'
import ListFood from './ListFood'
import fried from '../../assets/Protein/friedtofu.png'
import chicken from '../../assets/Protein/grilledchicken.png'
import shrimp from '../../assets/Protein/shrimps.png'
import beef from '../../assets/Protein/beef.png'
import Alert from '../alert/Alert'
import menuStyle from './menuStyle.module.css'

const Protein = () => {


    const db = [
        { type: "Protein", id: 6, name: "Fried Tofu", desc: "100 gram", price: 30, img: fried, nextItem: "bread" },
        { type: "Protein", id: 7, name: "Grilled Chicken", desc: "100 gram", price: 30, img: chicken, nextItem: "bread" },
        { type: "Protein", id: 8, name: "Hand-peeled Shrimps", desc: "75 gam", price: 30, img: shrimp, nextItem: "bread" },
        { type: "Protein", id: 9, name: "Grilled Beef", desc: "50 gram", price: 30, img: beef, nextItem: "bread" },

    ]

    return (
        <div>
            <Alert />
            <Navbar typeOfFood='Protein' price='30' next='/bread' />
            <ul className={menuStyle.container}>
            {
                db.map(item => (
                    <ListFood type={item.type} name={item.name} price={item.price} key={item.key} desc={item.desc} img={item.img} alt={'Soup' + item.name} nextItem={item.nextItem} next={item.next}/>
                ))}
            </ul>
        </div>
    )
}

export default Protein;