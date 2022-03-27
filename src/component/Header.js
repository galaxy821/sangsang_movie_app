import React from "react";
import "../style/Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo  } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <Link to="/"><h1 className="title">SangSang Movie</h1></Link>
        <Link to="/about"><FontAwesomeIcon icon={faCircleInfo} className="icon"/></Link>
      </header>
    );
  }
}

export default Header;
