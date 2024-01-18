import React from 'react';
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar-container">
       
        <h1 className='navbar-heading'>SALES &
        <br></br>INVENTORY</h1>
        <div className='navbar-logo'>
        <button className='navbar-button'><FaUserCircle size={30}/>  User</button> 
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
