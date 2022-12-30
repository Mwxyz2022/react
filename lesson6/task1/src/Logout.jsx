import React from 'react';

const Logout = props => (
  <button className="btn logout" onClick={props.handleLogout}>
    Logout
  </button>
);

export default Logout;
