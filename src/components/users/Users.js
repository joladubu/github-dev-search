import React from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types'

  
const Users = ({ users, loading}) => {
    if(loading) {
      return Spinner
    } else {
      return (
        <div style={userStyle}>  
          { users.map(user => (
            //passing each user as a prop
            <UserItem key={user.id} user={ user } />
          ))}
        </div>
      );
    }
    
}

// Defineing the propTypes 
Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
}

// defining the style attribute value: userStyle
const userStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gridGap: '1rem'
}


export default Users
