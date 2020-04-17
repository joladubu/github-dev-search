import React from 'react';
import PropTypes from 'prop-types';
import RepoItem from './RepoItem'; 

// repos is passed in as a prop  
const Repos = ({repos}) => {
  return repos.map(repo => <RepoItem key={repo.id} repo={repo} />) 
};
    

Repos.propTypes = { 
  repos: PropTypes.array.isRequired,
}; 

export default Repos
