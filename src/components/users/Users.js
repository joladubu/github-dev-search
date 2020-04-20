import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/GithubContext';

  
const Users = () => {
  // Initializing the github context
  const githubContext = useContext(GithubContext);

  const { loading, users } = githubContext;
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

// defining the style attribute value: userStyle
const userStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gridGap: '1rem'
}


export default Users
