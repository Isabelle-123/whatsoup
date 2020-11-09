import React, { useState } from 'react'
import ListFood from './ListFood'
import amicake from '../../assets/Treats/pancake.png'
import pancake from '../../assets/Treats/regularpan.png'
import Navbar from '../navbar/Navbar'
import Alert from '../alert/Alert'
import menuStyle from './menuStyle.module.css'
import Spinner from '../layout/Spinner'

const Treats = () => {

    const db = [
        { type: "Treats", key: 18, name: "American Pancakes", desc: "With lemon and blueberrys", price: 20, img: amicake, nextItem: "beverages", next: "beverages" },
        { type: "Treats", key: 19, name: "Pancakes", desc: "with cream and jam", price: 20, img: pancake, nextItem: "beverages", next: "beverages" },
    ]

    const [loaded, setLoaded] = useState(false);

    return (
        <div>
            <Alert />
            <Navbar typeOfFood='Treats' price='20' next='/beverages' />

            {loaded ? null : (
                <Spinner/>
            )}

            <ul className={menuStyle.container}
            style={loaded ? {} : { display: 'none' }}
                onLoad={() => setLoaded(true)}>
            {
                db.map(item => (
                    <ListFood type={item.type} name={item.name} price={item.price} key={item.key} desc={item.desc} img={item.img} alt={'Treat' + item.name} nextItem={item.nextItem} next={item.next}/>
                ))}
            </ul>
        </div>
    )
}

export default Treats