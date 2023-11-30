import React from 'react';
import './Home'
import './navbar.css'

const Navbar = () => {
  return (
    
    <div className="link">
      <div className="head_content">
        <h1 className="main_head">Accelotics</h1>
        <p className="software_passage">software solutions</p>
      </div>
      <nav className="navbar">
        <ul>
          <li><a href='/Technologies'>Technologies</a></li>
          <li><a href='/product'>Product Engineering</a></li>`1`
          <li><a href='/blog'>Blog</a></li>
          <li><a href=''>About us</a></li>
        </ul>
      </nav>
    </div>
   
  );
}

export default Navbar;
