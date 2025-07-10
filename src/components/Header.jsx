import React from "react";
import '../styles/style.css';
import logo from '../media/vignanlogo.jpg';

const Header = () => {
    return(
        <header style={{ background: '#fff' }}>
        <nav className="navbar" id="home">
          <img src={logo} alt="Vignan's Logo" className="logo" />
          <span className="nav-title">Conference</span>
        </nav>
      </header>
    )
}

export default Header;