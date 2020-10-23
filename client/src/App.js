import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Soup from './components/menu/Soup'
import Protein from './components/menu/Protein'
import Bread from './components/menu/Bread'
import Spreads from './components/menu/Spreads'
import Treats from './components/menu/Treats'
import Beverages from './components/menu/Beverages'
import Login from './components/pages/login'

import AlertState from './context/alert/AlertState'
import Checkout from './components/checkout/Checkout'
import Home from './components/pages/Home'
import CheckoutState from './context/checkout/CheckoutState'

function App() {
  // const [user, setUser] = useState({ loggedIn: false });
  // if (!user.loggedIn) {
  //   return <span>User is logged out</span>;
  // }

  return ( 
    <AlertState>
      <CheckoutState>
        <Router>
          <>
            {/* <Alert /> */}
            {/* <Checkout /> */}
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/soup' component={Soup} />
              <Route exact path='/protein' component={Protein} />
              <Route exact path='/bread' component={Bread} />
              <Route exact path='/spreads' component={Spreads} />
              <Route exact path='/treats' component={Treats} />
              <Route exact path='/beverages' component={Beverages} />
              <Route exact path='/checkout' component={Checkout} />
              {/* <Route component={NotFound} /> */}
            </Switch>
          </>
        </Router>
      </CheckoutState>
    </AlertState>
  );
}

export default App;