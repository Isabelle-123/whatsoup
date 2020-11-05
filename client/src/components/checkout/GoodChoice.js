import React from 'react'
import styled from 'styled-components'
import LinkButtonWide from '../buttons/LinkButtonWide'


const StyleGoodChoice = styled.div`

.container {
    font-family: Lobster;
    width: 100%;
    margin: 0;
    text-align: center;
}

.checkout {
    background: #dfd;
    font-weight: 100;
    font-size: 30px;
    margin: 0;
    padding: 20px 0px 15px 0px;
}

.container-choice {
    background: #ffb;
    margin: 0;
    padding: 20px;

    border-top: 2px solid black;
    border-bottom: 2px solid black;
}

.text {
    font-size: 25px;
    margin: 10px;
    font-weight: 100;
}
  

ul {
    list-style: none;
    display:flex; 
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 0;
    margin-top: 10px;
}

@media (min-width: 560px){
    ul {
        margin: 3% 25% 1% 25%;
    }
}

@media (min-width: 1040px){
    ul {
     margin: 2% 10% 0% 10%;
    }
}

`

const GoodChoice = () => {
    return (
        <StyleGoodChoice>
        <div className='container'>
        <h1 className='checkout'>Checkout</h1>
        <section className='container-choice'>
            <h1> Good Choice!</h1>
            <h2>Do you feel pleased or do you want something more?</h2>
        <ul>
            <li><LinkButtonWide to='/soup'>SOUP</LinkButtonWide></li>
            <li><LinkButtonWide to='/protein'>PROTEIN</LinkButtonWide></li>
            <li><LinkButtonWide to='/bread'>BREAD</LinkButtonWide></li>
            <li><LinkButtonWide to='/spreads'>SPREADS</LinkButtonWide></li>
            <li><LinkButtonWide to='/treats'>TREATS</LinkButtonWide></li>
            <li><LinkButtonWide to='/beverages'>BEVERAGES</LinkButtonWide></li>
        </ul>
        </section>
            
        </div>
        </StyleGoodChoice>
    )
}

export default GoodChoice
