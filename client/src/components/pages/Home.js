import React from 'react';
import styled from 'styled-components'
import Logo from '../../assets/logo.png'
import LinkButtonBig from '../buttons/LinkButtonBig'

const Eey = styled.div`
    
    .container {
    font-family: 'Lobster', cursive;
    display: flex;
    flex-direction: column;
    ${'' /* flex-wrap: wrap; */}
    position: absolute;
    background-color: #dfd;
    height:100%;
    font-size: 10em;
    }
   

`
const Whaddap = styled.img`
    width: 100%;

`

const Home = () => {

    return (
        <Eey>
            <div className='container'>
            <Whaddap src={Logo} />
            <LinkButtonBig to='/soup'>GET ME FOOD!</LinkButtonBig>
            </div>
        </Eey>
    );
};

export default Home;