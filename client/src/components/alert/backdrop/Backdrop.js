import React, { useContext } from 'react'
import AlertContext from '../../../context/alert/alertContext'

import styles from './backdrop.module.css'

const Backdrop = (props) => {
    const alertContext = useContext(AlertContext)
    // const { setBlur } = alertContext

    return (
        props.blur !== null && (
        <>
            <div className={styles.Backdrop}> </div>
        </>
    )
)
    // props.show ? <div className={styles.Backdrop} onClick={props.clicked}></div> : null
};

export default Backdrop;