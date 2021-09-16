import React from 'react'
import {AiOutlineMenu} from "react-icons/ai"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-logo"></div>
            <ul className="navbar-list">
              <li className="navbar-item">open projects</li>
              <li className="navbar-item">operator owner</li>
              <li className="navbar-item">investor</li>
              <li className="navbar-item">how it works</li>
            </ul>
            
            <div className="navbar-mobile">
               <AiOutlineMenu style={{fontSize: "3rem", color: "white"}} />
            </div>
        </div>
    )
}

export default Navbar
