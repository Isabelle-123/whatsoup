
import React from 'react'
import { useHistory } from "react-router-dom";
import buttonsStyle from './buttonsStyle.module.css'

const Backbutton = () => {
    let history = useHistory();
    return (
        <>
            <button onClick={() => history.goBack()} className={buttonsStyle.buttonWithBorder}>BACK</button>
        </>
    );
}

export default Backbutton





// import React from 'react';
// //import { Link } from 'react-router-dom'

// import buttonsStyle from './buttonsStyle.module.css'



// const backButton = () => {
//     return (
//         <button className={buttonsStyle.backCheckout} >
//             BACK
//         </button>
//     );
// };

// export default backButton;