// Generating a class based component with rce and enter key
import React from 'react'
// importing propTypes
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

// Using functional component and destructuring user props from User.js
const UserItem = ({ user: { login, avatar_url, html_url } }) => {
 
    return (
      <div className="card text-center">
        <img 
          src={ avatar_url } 
          alt="" 
          className="round-img"
          style={{ width: '60px' }} 
        />

        <h3>{ login }</h3>

        <div>
          <Link to={ `/user/${login}` } className="btn btn-dark btn-sm my-1">More</Link>
        </div>
        
      </div>
    )
  };
  
  UserItem.propTypes = {
    // declaring the proptype of the props user using ptor and enter Key
    user: PropTypes.object.isRequired,

  }

export default UserItem
