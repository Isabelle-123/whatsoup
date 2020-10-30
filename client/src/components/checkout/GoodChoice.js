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
    border-bottom: 1px solid black;
    font-weight: 100;
    font-size: 30px;
    margin: 0;
    padding: 15px 0px 15px 0px;
}

.container-choice {
    background: #ffb;
    margin: 0;
    padding-top: 15px;
}

.choice {
    font-size: 40px;
    font-weight: 100;
    margin: 0;
    align-text: center;
}

.text {
    font-size: 25px;
    margin: 10px;
    font-weight: 100;
}
  

ul {
    list-style: none;
    ${'' /* display:flex; 
    flex-direction: column; */}

    display:flex; 
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 0;
    margin-left: 20px;
    margin-right: 20px;
    padding: 0px 0px 20px 0px;

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
            <li><LinkButtonWide to='/soup'>SOUP</LinkButtonWide></li>
            <li><LinkButtonWide to='/protein'>PROTEIN</LinkButtonWide></li>
            <li><LinkButtonWide to='/breads'>BREADS</LinkButtonWide></li>
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
