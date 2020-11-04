import styled from 'styled-components'

export const StyledOrder = styled.div`
    background-color: #dfd;

    .container {
        background: #dfd;
        font-size: 15px;
        font-weight: 200;
        padding: 20px;
        margin: 0;
        border-bottom: 2px solid black;
    }

    ${'' /* .your-order{
        margin: 0;
    } */}

    ${'' /* .your-order, .total-price {
        font-size: 15px;
        font-weight: 400;
    }    */}


    .listItems {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .item {
        margin-top: 5px;
        margin-bottom: 5px;
    }

    .container-price {
        display: flex;
        justify-content: space-between;
       
    }

    .total-price {
        margin-top: 15px;
    }

    .finalPrice {
        font-family: Lobster;
        font-size: 30px;
        font-weight: 100;
        margin-top: 0;
        margin: 0;
    }

    .cancelOk {
        display: flex;
        justify-content: space-between;
        margin: 0;
        margin-top: 20px;
    }

    @media (min-width: 560px){

        .container {
            padding: 1% 25% 0% 25%;
        }
    } 

    @media (min-width: 1040px){

        .container {
            padding: 1% 35% 0% 35%;
        }
    }
}

`