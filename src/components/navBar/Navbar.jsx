import React from 'react';
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar-container">
       
        <h1 className='navbar-heading'>SALES &
        <br></br>INVENTORY</h1>
        <div className='navbar-logo'><FaUserCircle size={30}/>
        </div>
        <button className='navbar-button'>User</button> 
      </div>
    </nav>
  );
};

export default Navbar;
