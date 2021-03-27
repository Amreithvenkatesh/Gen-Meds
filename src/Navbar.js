import React from 'react';
import './Navbar.css';
import {Button} from '@material-ui/core';
import {Link} from 'react-router-dom';


function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar__left">
                <h1>Gen-Meds</h1>
            </div>
            <div className="navbar__center">
                
            </div>
            <div className="navbar__right">
            <Button className="navbar__btn__signIn"><Link to="/signIn">Sign In</Link></Button>
            <Button className="navbar__btn__register"><Link to="/register">Register</Link></Button>
            <Button className="navbar__btn__register"><Link to="/updateMed">Update Meds</Link></Button>

            </div>
            
        </div>
    )
}

export default Navbar
