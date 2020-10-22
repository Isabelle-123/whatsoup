import React from 'react'
import ShowFood from './ShowFood'
import healing from '../../assets/Soups/healing.png'
import chillie from '../../assets/Soups/chillibillie.png'
import solong from '../../assets/Soups/solongcold.png'
import lowcarb from '../../assets/Soups/lowcarb.png'
import missmuscle from '../../assets/Soups/missmuscle.png'
import Navbar from '../navbar/Navbar'
import Alert from '../alert/Alert'
//import { v4 as uuidv4 } from 'uuid';




const Soup = () => {

    const database = [
        { type: "Soup", key: 1, name: "The Healing", desc: "Butternut squash, red onions, garlic, coconut milk", price: 50, img: healing, nextItem: "PROTEIN", alt: "Soup with taste of healing", next: "protein" },
        { type: "Soup", key: 2, name: "So Long Cold", desc: "Parsnips, rosted garlic, lemon rosmary, maple syrup", price: 50, img: solong, nextItem: "PROTEIN", next: "protein" },
        { type: "Soup", key: 3, name: "Chillie Billie", desc: "Carrots, chilli flakes, peanuts, sweet potato, coconut milk ", price: 50, img: chillie, nextItem: "PROTEIN", next: "protein" },
        { type: "Soup", key: 4, name: "Miss Muscle", desc: "Green peas, coriander, green chilli, lime, coconut milk", price: 50, img: missmuscle, nextItem: "PROTEIN", next: "protein" },
        { type: "Soup", key: 5, name: "Low Carb", desc: "Sweet potato, ginger, cummin marsala, garlic, coconut milk", price: 50, img: lowcarb, nextItem: "PROTEIN", next: "protein" }
    ]

    return (
        <div>
            <Alert />
            <Navbar typeOfFood='Soup' price='50' next='/protein' />
            {/* <ShowFood type={database.type} name={database.name} price={database.price} key={database.key} desc={database.desc} img={database.img} alt={database.alt} nextItem={database.nextItem} /> */}

            {
                database.map(item => (
                    <ShowFood type={item.type} name={item.name} price={item.price} key={item.key} desc={item.desc} img={item.img} alt={item.alt} nextItem={item.nextItem} />
                ))}
        </div>
    )
}

export default Soup
