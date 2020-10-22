


import React from 'react';
import buttonsStyle from './buttonsStyle.module.css'
import { Link } from 'react-router-dom'

const Checkoutbutton = () => {
    return (
        <Link to='/checkout' >
            <button type='button' className={buttonsStyle.backCheckout}>CHECKOUT
        </button>

        </Link>


    )
}

export default Checkoutbutton;