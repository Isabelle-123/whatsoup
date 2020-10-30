
import React, { useContext } from 'react'
import AlertContext from '../../../context/alert/alertContext'
import styles from './backdrop.module.css'


const BlurBackground = () => {
    const alertContext = useContext(AlertContext)
    const { removeAlert } = alertContext

    const handleClick = (e) => {
        e.preventDefault();
        removeAlert();
    }

    return (
        <>
            <div className={styles.BlurBackground} onClick={handleClick}/> 
        </>
    )
};

export default BlurBackground;