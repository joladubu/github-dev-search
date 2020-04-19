 import React, { useState } from 'react';
 import PropTypes from 'prop-types';

  // destructring props
  const Search = ({ searchUsers, showClear, clearUsers, setAlert }) => {
    //destructuring state and methos to change change and assigning to default value of useState
  const[ text, setText ] = useState('');


  const onSubmit = e => {
    e.preventDefault();
    if( text === '' ) {
      setAlert('Please enter something', 'light');
    } else {
      searchUsers(text);
      setText('');
    }
  }

  const onChange = e => setText( e.target.value );
  
    return (
    <div>
      <form onSubmit={ onSubmit } className="form">
        <input 
          type="text" 
          name="text" 
          placeholder="Seach Users..." 
          value={ text }
          onChange={ onChange }
        />

        <input 
          type="submit" 
          value="Search" 
          className="btn btn-dark btn-block"
        />
      </form>
      { showClear && (
        <button 
          className="btn-light btn-block" 
          onClick={ clearUsers }>Clear
        </button>
      )}
    </div>
    )
  }

 Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};
 export default Search
 