import React, { Component, Fragment } from 'react';
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

class App extends Component {
  state = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert: null
  }

  // async componentDidMount() {

  //   console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET);

  //   this.setState({ loading: true });

  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${
  //       process.env.REACT_APP_GITHUB_CLIENT_ID
  //     }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

  //     //set users array to response from api and loading to false
  //     this.setState({ users: res.data, loading: false});
  // }

  // Search Github Users
  searchUsers = async text => {
    this.setState({ loading: true })
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    //set users array to response from api and loading to false
    this.setState({users: res.data.items, loading: false });
  }

  // Get a Single Github User
  getUser = async (username) => {
    this.setState({ loading: true })
    const res = await axios.get(
      `https://api.github.com/users/${username}?&client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    //set users array to response from api and loading to false
    this.setState({
      user: res.data, loading: false });
  }


  // Get Users Repos
  getUserRepos  = async (username) => {
    this.setState({ loading: true })
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
      //set users array to response from api and loading to false
      this.setState({ repos:res.data, loading: false });
  };


  // Clear Users from State
  clearUsers = () => this.setState({
    users: [],
    loading: false
  });

  //Set Alert
  setAlert = (msg, type) => {
    this.setState({
      alert: { msg, type }
    });
    // Set Timeout for the notifaction
    setTimeout(() => this.setState({ alert: null }), 5000);
  }



  render() {
    // destructuring state
    const { users, user, repos, loading } = this.state;

    return ( 
      <Router>
        <div className = 'App' >
          <Navbar />
          <div className = "container" >
            <Alert alert = { this.state.alert } /> 
            <Switch>
              <Route 
                exact 
                path="/" 
                render={props => (
                <Fragment>
                    <Search 
                      searchUsers = { this.searchUsers } 
                      clearUsers = { this.clearUsers } 
                      showClear = { users.length > 0 ? true : false }
                      setAlert = { this.setAlert }
                  /> 
                  <Users loading = { loading } users = { users } /> 
                </Fragment>
                )} 
              /> 
                <Route exact path='/about' component={ About } />
                <Route exact path='/user/:login' render={props => (
                  <User 
                    { ...props } 
                    getUser={this.getUser} 
                    getUserRepos={this.getUserRepos} 
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
}
export default App;
