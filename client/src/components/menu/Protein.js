import React, { useState } from 'react'
import Navbar from '../navbar/Navbar'
import ListFood from './ListFood'
import fried from '../../assets/Protein/friedtofu.png'
import chicken from '../../assets/Protein/grilledchicken.png'
import shrimp from '../../assets/Protein/shrimps.png'
import beef from '../../assets/Protein/beef.png'
import Alert from '../alert/Alert'
import menuStyle from './menuStyle.module.css'
import Spinner from '../layout/Spinner'

const Protein = () => {


    const db = [
        { type: "Protein", key: 6, name: "Fried Tofu", desc: "100 gram", price: 30, img: fried, nextItem: "bread" },
        { type: "Protein", key: 7, name: "Grilled Chicken", desc: "100 gram", price: 30, img: chicken, nextItem: "bread" },
        { type: "Protein", key: 8, name: "Hand-peeled Shrimps", desc: "75 gam", price: 30, img: shrimp, nextItem: "bread" },
        { type: "Protein", key: 9, name: "Grilled Beef", desc: "50 gram", price: 30, img: beef, nextItem: "bread" },

    ]

    const [loaded, setLoaded] = useState(false);

    return (
        <div>
            <Alert />
            <Navbar typeOfFood='Protein' price='30' next='/bread' />

            {loaded ? null : (
                <Spinner/>
            )}

            <ul className={menuStyle.container}
                style={loaded ? {} : { display: 'none' }}
                onLoad={() => setLoaded(true)}>
            {
                db.map(item => (
                    <ListFood type={item.type} name={item.name} price={item.price} key={item.key} desc={item.desc} img={item.img} alt={'Protein' + item.name} nextItem={item.nextItem} next={item.next}/>
                ))}
            </ul>
        </div>
    )
}

export default Protein;