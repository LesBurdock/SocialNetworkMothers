import React from 'react';
import { Link } from "react-router-dom";

const Navigation = () => {
  return(
    <div>
      <ul>
        <li><Link to="/"> Home </Link></li>
        <li><Link to="/DirectMessage">Direct Message</Link></li>
        <li><Link to="/SignIn">Log In</Link></li>
        <li><Link to="/Profile">Profile</Link></li>
        <li>Likes</li>
      </ul>
    </div>
  )
}

export default Navigation;
