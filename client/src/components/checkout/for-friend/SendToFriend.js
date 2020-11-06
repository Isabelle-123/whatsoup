import React, { useState } from 'react';
import LinkButtonWide from '../../buttons/LinkButtonWide'
import Friend from './Friend'
import style from './style.module.css'

const SendToFriend = () => {
  const [showFriend, setShowFriend] = useState(false)

  const toggleFriend = () => setShowFriend(!showFriend)

  return (
      <div className={style.wrapper}>

      { !showFriend ? 
      <>
      <h2>Would you like to send a delicious soup to a friend?</h2> 
      <div><LinkButtonWide onClick={toggleFriend}>GREAT IDEA!</LinkButtonWide></div>
      </>
       :
       <div><LinkButtonWide onClick={toggleFriend}>BACK</LinkButtonWide></div>}

      { showFriend ? <Friend /> : null }

      </div>
  );
};

export default SendToFriend;