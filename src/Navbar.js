import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import LocationSearchingIcon from '@material-ui/icons/LocationSearching';


function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar__left">
                <Link to="/"><h1>Gen  <span>Meds</span></h1></Link>
            </div>
            <div className="navbar__center">
                
            </div>
            <div className="navbar__right">
                <Link to="/search"><SearchIcon></SearchIcon></Link>
                <Link to="/locateStore"><LocationSearchingIcon/></Link>
            </div>
            
        </div>
    )
}

export default Navbar
