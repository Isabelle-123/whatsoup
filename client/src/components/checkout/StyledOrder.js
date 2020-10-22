import styled from 'styled-components'

export const StyledOrder = styled.div`
background-color: #dfd;

.container {
    height: 100vh;
    background: #dfd;
    font-size: 12px;
    font-weight: lighter;
    padding-top: 10px; 
    padding-bottom: 10px;
    margin: 0;
}

.container > h5 {
    margin: 0;
    padding-right: 10px;
   padding-left: 10px;
}

.cancelOk {
   display: flex;
   justify-content: space-between;
   margin: 0;
   padding-right: 5px;
   padding-left: 5px;

}

.totalPrice, .listItems {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0;
    padding-right: 15px;
   padding-left: 15px;
}


.finalPrice {
    font-family: Lobster;
    font-size: 25px;
    font-weight: 100;
    margin-top: 0;
    margin: 0;
}
`