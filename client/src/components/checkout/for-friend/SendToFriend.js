import React, { useState } from 'react';
import styled from 'styled-components'
import LinkButtonWide from '../../buttons/LinkButtonWide'
import Friend from './Friend'

const StyledSendToFriend = styled.div`
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #cff;
        margin: 0px;
        font-size: 15px;
        font-weight: 200;
        padding: 20px;
        margin: 0;
        border-bottom: 2px solid black;
    }
}
`

const SendToFriend = () => {
  const [showFriend, setShowFriend] = useState(false)

  const toggleFriend = () => setShowFriend(!showFriend)

  return (
    <StyledSendToFriend>
      <div className='container'>
      <h2>Would you like to send a delicious soup to a friend?</h2>
      <div><LinkButtonWide onClick={toggleFriend}>GREAT IDEA!</LinkButtonWide></div>
      { showFriend === true ? <Friend /> : null }
      </div>
      </StyledSendToFriend>
  );
};

export default SendToFriend;