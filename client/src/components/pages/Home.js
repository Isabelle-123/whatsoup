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


   
    @media (min-width: 560px){
        .container {
            align-items: center;
            width: 100%;
        }

        .img {
            width: 40%;
            margin-top: 5%;
        }
    }

    @media (min-width: 1150px){
    .img {
        width: 30%;
        margin-top: 5%;
    }
}

@media (min-width: 1500px){

    .img {
        width: 20%;
        margin-top: 5%;
    }
}


`
const Whaddap = styled.img`
    width: 100%;

`

const Home = () => {

    return (
        <Eey>
            <div className='container'>
            <Whaddap src={Logo} className='img'/>
            <LinkButtonBig to='/soup'>I'M HUNGRY. I NEED A SOUP!</LinkButtonBig>
            </div>
        </Eey>
    );
};

export default Home;