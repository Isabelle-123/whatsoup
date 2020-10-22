import React from 'react'
import styled from 'styled-components'
import LinkButton from '../buttons/LinkButton'


const StyleGoodChoice = styled.div`

.container {
    font-family: Lobster;

    width: 100%;
    margin: 0;
 
  
}

.container-choice {
    background: #ffb;
    margin: 0;

    
}

.checkout {
    background: #dfd;
    border-bottom: 1px solid black;
    display:flex; 
    justify-content: center;
    font-weight: 100;
    font-size: 50px;
    margin: 0;

}

.choice {
    font-size: 40px;
    display:flex; 
    justify-content: center;
    font-weight: 100;
    margin: 0;

}

.text {
    font-size: 25px;
    display:flex; 
    justify-content: center;
    font-weight: 100;
}
  

ul {
    list-style: none;
    width: 90%;
    ${'' /* display:flex; 
    flex-direction: column; */}

    display:flex; 
    justify-content: center;
    flex-wrap: wrap;
    margin: 0;



}
 
`

const GoodChoice = () => {
    return (
        <StyleGoodChoice>
        <div className='container'>
        <h1 className='checkout'>Checkout</h1>
        <section className='container-choice'>
            <h2 className='choice'> Good Choice!</h2>
            <p className='text'>Do you feel pleased or do you want something more?</p>
        <ul>
            <li><LinkButton to='/soup'>SOUP</LinkButton></li>
            <li><LinkButton to='/protein'>PROTEIN</LinkButton></li>
            <li><LinkButton to='/breads'>BREADS</LinkButton></li>
            <li><LinkButton to='/spreads'>SPREADS</LinkButton></li>
            <li><LinkButton to='/treats'>TREATS</LinkButton></li>
            <li><LinkButton to='/beverages'>BEVERAGES</LinkButton></li>
        </ul>
        </section>
            
        </div>
        </StyleGoodChoice>
    )
}

export default GoodChoice
