import React from 'react';
import './Navbar.css';
// import {Button} from '@material-ui/core';
// import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import LocationSearchingIcon from '@material-ui/icons/LocationSearching';


function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar__left">
                <h1>Gen  <span>Meds</span></h1>
            </div>
            <div className="navbar__center">
                
            </div>
            <div className="navbar__right">
                <SearchIcon></SearchIcon>
                <LocationSearchingIcon/>
            </div>
            
        </div>
    )
}

export default Navbar
