import styled from 'styled-components'

export const StyleAlert = styled.div`
  display:flex; 
  justify-content: center;
  
 .blurMe > *:not(#alert-container) {
    filter: blur(3px);
  }
  
  .alert-container {
    width: 90%;
    margin-top: 10px;

    ${'' /* z-index: 10000;
    margin-bottom: -500px; */}
    margin-bottom: 10px;
    border-radius: 10px;
    border: 1px solid white;
  }

  .alert-Soup {
    background: #ffb;
  }

  .alert-Protein {
    background: #fec;
  }

  .alert-Bread {
    background: #cff;
  }

  .alert-Spreads {
    background: #dfd;
  }

  .alert-Treats {
    background: #ffb;
  }
  
  .alert-Beverages {
    background: #fec;
  }

 .name {
    font-weight: 100;
    margin: 0;
    padding-top: 10px;
    font-size: 25px;
    text-align: center;
    font-family: Lobster;
 }

 .text {
    margin: 0px 15px 0px 15px;
    padding: 5px;
    font-weight: 200;
    text-align: center;
    font-size: 15px;
 }

 .amountAddRemoveItem {
   display: flex;
   justify-content: center;
  
  }

 .amount {
  border-radius: 5px;
  border: 1px solid black;
  margin:5px;
  font-size: 15px;
  padding-left: 5px;
  padding-right: 5px;
  font-family: Lobster;
 }

 .linkButton {
   color: blue;
 }

 .nextContainer {
   display: flex;
   justify-content: center;
   color:blue;
   width: 100%;
   margin-bottom: 10px;
   padding-bottom: 3px;
 }

 .ingredients-container {
   ${'' /* border-top: 1px solid black; */}
   background-color: snow;
   padding:0px;
   margin:0px;
 }
 
`