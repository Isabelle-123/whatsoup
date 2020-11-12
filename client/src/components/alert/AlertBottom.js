import React from 'react'
import LinkButton from '../buttons/LinkButton'

const AlertBottom = () => {
    return (
        <>
           <section className='ingredients-container'>
            <h3 className='name'>Ingredients</h3>
            <p className='text'>Ingredients list and carbs. Do adjustments here. We will fix it!</p>
            <div className='read-more-container'>
            <LinkButton>READ MORE</LinkButton>
            </div>
          </section>  
        </>
    )
}

export default AlertBottom
