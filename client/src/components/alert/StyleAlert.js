import styled from 'styled-components'

export const StyleAlert = styled.div`
  display:flex; 
  justify-content: center;
  align-items: center;
  
  .alert-container {
    width:300px;
    margin-top: 10px;
    position: fixed;
    border-radius: 10px;
    z-index: 100;
    top: 20%;
    height: 310px;
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
    padding-top: 10px;
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
  height: 18px;
  width: 18px;
  margin:5px;
  font-size: 15px;
  padding-left: 5px;
  padding-right: 5px;
  font-family: Lobster;
  text-align: center;
 }

 .nextContainer  {
   display: flex;
   justify-content: center;
   width: 100%;
   margin-bottom: 10px;
   padding-bottom: 3px;
 }

 .ingredients-container {
   background-color: snow;
   margin:0px;
   padding-bottom: 10px;
 }

  .read-more-container {
   display: flex;
   justify-content: center;
   width: 100%;
 }

  @media (min-width: 560px) {
    .alert-container {
      width: 440px;
      height: 280px;
    }
  }

  @media (min-width: 1040px) {
    .alert-container {
      width: 530px;
      height: 290px;
    }

  .text {
      font-size: 20px;
    }
  }
 
 
`