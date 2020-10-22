import React from 'react';
import styled from 'styled-components'
import Logo from '../../assets/logo.png'
import LinkButton from '../buttons/LinkButton'
/* import firebase from 'firebase/app' */
/* import 'firebase/auth';
 */
const Eey = styled.div`

font-family: 'Lobster', cursive;
display: flex;
position: absolute;
background-color: #dfd;
height:100%;
width: 100%;
font-size: 10em;
`
const Whaddap = styled.img`





position: relative;
justify-content: flex-start;
background-color: #dfd;
height: 35%;
width: 100%;

`

/* firebase.initializeApp(/* firebase config );
function onAuthStateChange() {
    return firebase.auth().onAuthStateChanged(user => {
        if (user) {
            console.log("The user is logged in");
        } else {
            console.log("The user is not logged in");
        }
    });
}
const [user, setUser] = useState({ loggedIn: false }); */
const login = () => {


    /* if (!user.loggedIn) { */
    /*   return <span>User is logged out</span>;
  }
  return <span>User is logged in</span>;
   */

    return (
        <Eey >
            <Whaddap src={Logo} />
            <LinkButton to='/soup'>GET ME FOOD!</LinkButton>
        </Eey>
    );
};

export default login;