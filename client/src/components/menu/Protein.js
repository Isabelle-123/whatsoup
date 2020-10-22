import React from 'react';
import Navbar from '../navbar/Navbar'
import ShowFood from './ShowFood'
import fried from '../../assets/Protein/friedtofu.png'
import chicken from '../../assets/Protein/grilledchicken.png'
import shrimp from '../../assets/Protein/shrimps.png'
import beef from '../../assets/Protein/beef.png'
import Alert from '../alert/Alert'

const Protein = () => {


    const database = [
        { type: "Protein", id: 6, name: "Fried Tofu", desc: "100 gram", price: 30, img: fried, nextItem: "PROTEIN" },
        { type: "Protein", id: 7, name: "Grilled Chicken", desc: "100 gram", price: 30, img: chicken, nextItem: "PROTEIN" },
        { type: "Protein", id: 8, name: "Hand-peeled Shrimps", desc: "75 gam", price: 30, img: shrimp, nextItem: "PROTEIN" },
        { type: "Protein", id: 9, name: "Grilled Beef", desc: "50 gram", price: 30, img: beef, nextItem: "PROTEIN" },

    ]

    return (
        <div>
            <Alert type={database.type} name={database.name} price={database.price} />
            <Navbar typeOfFood='Protein' price='30' next='/bread' />
            {
                database.map(item => (
                    <ShowFood type={item.type} name={item.name} price={item.price} id={item.id} key={item.id} desc={item.desc} img={item.img} alt={item.alt} nextItem={item.nextItem} />
                ))}
        </div>
    )
}

export default Protein;