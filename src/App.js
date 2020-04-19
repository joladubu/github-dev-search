import React, { Fragment, useState } from 'react';
// importing components
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import About from './components/pages/About';
import axios from 'axios';
import Alert from './components/layout/Alert'
// Importing the main css file
import './App.css';

const App = () => {
  // implementing useState hook for the state 
  const[users, setUsers] = useState([]);
  const[user, setUser] = useState({});
  const[repos, setRepos] = useState([]);
  const[loading, setLoading] = useState(false);
  const[alert, setAlert] = useState(null);

    // Search Github Users
    const searchUsers = async text => {
      setLoading(true);
      const res = await axios.get(
        `https://api.github.com/search/users?q=${text}&client_id=${
          process.env.REACT_APP_GITHUB_CLIENT_ID
        }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

      //set users array to response from api and loading to false
    setUsers(res.data.items);
    setLoading(false);
    }
  
    // Get a Single Github User
    const getUser = async (username) => {
      setLoading(true) 
      const res = await axios.get(
        `https://api.github.com/users/${username}?&client_id=${
          process.env.REACT_APP_GITHUB_CLIENT_ID
        }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

      //set users array to response from api and loading to false
      setUser(res.data);
      setLoading(true);
    }

    // Get Users Repos
    const getUserRepos = async (username) => {
      setLoading(true)
      const res = await axios.get(
        `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${
          process.env.REACT_APP_GITHUB_CLIENT_ID
        }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
        //set users array to response from api and loading to false
      setRepos(res.data);
      setLoading(false);
    };


    // Clear Users from State
    const clearUsers = () => {
      setUsers([]);
      setLoading(false);
    }

    //Set Alert
    const showAlert = (msg, type) => {
      setAlert( {msg, type })
      setTimeout(() => setAlert(null), 5000);

    };
      // Set Timeout for the notifaction
    
    return ( 
      <Router>
        <div className = 'App' >
          <Navbar />
          <div className = "container" >
            <Alert alert = { alert } /> 
            <Switch>
              <Route 
                exact 
                path="/" 
                render={props => (
                <Fragment>
                    <Search 
                      searchUsers = { searchUsers } 
                      clearUsers = { clearUsers } 
                      showClear = { users.length > 0 ? true : false }
                      setAlert = { showAlert }
                  /> 
                  <Users loading = { loading } users = { users } /> 
                </Fragment>
                )} 
              /> 
                <Route exact path='/about' component={ About } />
                <Route exact path='/user/:login' render={props => (
                  <User 
                    { ...props } 
                    getUser={getUser} 
                    getUserRepos={getUserRepos} 
                    repos={repos} 
                    user={user} 
                    loading={loading} 
                  />
                )} />
            </Switch>
          </div> 
        </div>
      </Router>
  );
}
export default App;
