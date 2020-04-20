import React, { Fragment } from 'react';
// importing components
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import About from './components/pages/About';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import Alert from './components/layout/Alert'
// Importing the main css file
import './App.css';

const App = () => {
  // implementing useState hook for the state 
  // const[alert, setAlert] = useState(null);

    

      // Set Timeout for the notifaction
    
    return ( 
    <GithubState>
      <AlertState>
      <Router>
        <div className = 'App' >
          <Navbar />
          <div className = "container" >
            <Alert/> 
            <Switch>
              <Route 
                exact 
                path="/" 
                render={props => (
                <Fragment>
                    <Search />
                  <Users /> 
                </Fragment>
                )} 
              /> 
                <Route exact path='/about' component={ About } />
                <Route exact path='/user/:login' component={User} />
            </Switch>
          </div> 
        </div>
      </Router>
      </AlertState>
    </GithubState>
  );
}
export default App;
