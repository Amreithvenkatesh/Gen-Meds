import React from 'react'
import './Body.css';
import {Button} from '@material-ui/core';
import {Link} from 'react-router-dom';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import LocationSearchingIcon from '@material-ui/icons/LocationSearching';

function Body() {

    return (
        <div className="body">
            <div className="cover">
            <div className="body__about">
                <div className="body__about__left">
                <h1>Get Generic Medicines at ease</h1>
                <h3>Making quality medicines available at affordable prices
                     for all, particularly the poor and disadvantaged,
                     by improving the contact between the PMBJP kendra and the 
                     customer </h3>
                <Link to="/search"><Button>Click to search medicines <ArrowRightIcon/></Button></Link>
                </div>
                <div className="body__about__right">
                </div> 
            </div>

            <div className="body__location">
                <div className="body__location__left">
                    
                </div>
                <div className="body__location__right">
                <h1>Locate your store <LocationSearchingIcon/></h1>
                <h3>Get the location of every store in the country. You can get all the information about
                    the stores, that makes it easy to contact your nearby store.</h3>
                <h3>There are more than 6000+ stores all over India.</h3>
                <Link to="/locateStore"><Button>Click to locate stores <ArrowRightIcon/></Button></Link>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Body
