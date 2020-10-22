import React from 'react'
import styled from 'styled-components'

const Style = styled.div`
    background-color: #dfd;


h1 {
    font-family: 'Lobster', cursive;
    
    height:100%;
    width: 100%;
    font-size: 10em;
}

h2 {
    height: 35%;
    width: 100%;
}

`




const Home = () => {
    return (
        <Style>
            <div>
                <h1> Eey! </h1>
                <h2> Whats'oup? </h2>
            </div>
        </Style>
    )
}

export default Home
