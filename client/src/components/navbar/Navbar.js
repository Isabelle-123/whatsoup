import React from 'react';
import Backbutton from '../buttons/Backbutton'
import LinkButton from '../buttons/LinkButton'
//import styles from './navbarStyle.module.css'
import styled from 'styled-components'

const Test = styled.div`
@media (max-width: 768px){
.Navbar {
width:100%;
height: 150px;
left: 0px;
top: 0px;
background: #ffb
}

.Upperbutt{
 display:flex;
 justify-content: space-between;
 padding: 10px;
}

.Nextstyle{
 display:flex;
 justify-content: flex-end;
 padding-bottom:10px;
 margin-right: 10px;
}

 .namePrice{
    display: flex;
    justify-content: space-between;
    margin-left: 15px;
    margin-right: 15px;
    color: black;
    font-size: 25px;
 }

 .name {
    font-family: 'Lobster', cursive;
    font-size: 37px;
 }

 .price {
    margin-top: 10px;
 }

.typeOfFood-Soup {
  background: #ffb;

 }

 .typeOfFood-Protein {
  background: #fec;
}

.typeOfFood-Bread {
  background: #cff;
}
.typeOfFood-Spreads {
  background: #dfd;
}
.typeOfFood-Treats {
  background: #ffb;
}
.typeOfFood-Beverages {
  background: #fec;
}
}`
const Navbar = (props) => {

  return (
    <Test>
      <div className={`.Navbar typeOfFood-${props.typeOfFood}`}>
        <div className="Upperbutt">
          <Backbutton />
          <LinkButton to='/checkout'>CHECKOUT</LinkButton>
        </div>
        <div className="namePrice">
          <div className="name">{props.typeOfFood}</div>
          <div className="price">/ {props.price} SEK</div>
        </div>
        <div className="Nextstyle">
          <LinkButton to={props.next}>NEXT</LinkButton>
        </div>
      </div>
    </Test>
  );
};

export default Navbar;