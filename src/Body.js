import React, { useState } from 'react'
import './Body.css';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import {Button} from '@material-ui/core';
import {Link, useHistory} from 'react-router-dom';


function Body() {
    const [medicine,setMedicine]= useState('');
    const [isPending,setIsPending] = useState(false);
    const history = useHistory();


    const handleSubmit= (e)=>{
        e.preventDefault();
        const medicine = {medicine};
        console.log(medicine)
        setIsPending(true);

        fetch('http://localhost:8000/vendor/register/',{
            method:'POST',
            headers: { "Content-Type":"application/json"},
            body: JSON.stringify(medicine)
        }).then(res=>{
            setIsPending(false);
            history.push('/');
        });
        
    }
    return (
        <div className="body">
            <div className="body__about">
                <div className="body__about__left">
                <h1>Get Generic Medicines at ease</h1>
                <h3>Making quality medicines available at affordable prices
                     for all, particularly the poor and disadvantaged,
                     by improving the contact between the PMBJP kendra and the 
                     customer </h3>
                </div>
                <div className="body__about__right">
                <form onSubmit={handleSubmit}>
                    <div className="body__about__right__input">
                    <input type="text" placeholder="Search medicine"
                    value={medicine}
                    onChange={(e)=>setMedicine(e.target.value)}/>
                    <SearchRoundedIcon />
                    </div>
                    <div className="body__about__right__btns">
                    <Button><Link to="/search" >Search</Link></Button>
                    </div>
                </form>
                </div>    
            </div>
            <div className="body__howTo">
                <div className="body__howTo__left">
                    <h1>How our website work?</h1>
                    <hr/>
                    <div className="body__howTo__left__1">
                        <LocationOnIcon />  
                        <h1>Locate the Authenticated stores near you</h1>
                        
                    </div>
                    <ArrowDownwardIcon />
                    <div className="body__howTo__left__1">
                    <LocalHospitalIcon />
                        <h1>Search for medicines and availability</h1>
                    </div>
                    <ArrowDownwardIcon />
                    <div className="body__howTo__left__1">
                    <AttachMoneyIcon />
                        <h1>Medicine Prices and Contact Information</h1>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body

