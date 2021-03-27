import React, { useState } from 'react';
import './Register.css';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import PersonIcon from '@material-ui/icons/Person';
import BrandingWatermarkIcon from '@material-ui/icons/BrandingWatermark';
import HomeIcon from '@material-ui/icons/Home';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

function Register() {
    const [shopId,setShopId]= useState(null);
    const [name,setName]= useState('');
    const [address,setAddress]= useState('');
    const [city,setCity]= useState('');
    const [email,setEmail]= useState('');
    const [phone,setPhone] = useState(null);
    const [password,setPassword] = useState('');
    const [isPending,setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit= (e)=>{
        e.preventDefault();
        const Register = {shopId,name,address,city,email,phone,password};
        console.log(Register)
        setIsPending(true);

        fetch('http://localhost:8000/vendor/register/',{
            method:'POST',
            headers: { "Content-Type":"application/json"},
            body: JSON.stringify(Register)
        }).then(res=>{
            console.log('new data added');
            setIsPending(false);
            history.push('/');
        });
        
    }

    return (
        <div className="register">
            <div className="register__left">
            <h1>Certified and Authenticated Kendra can Register here </h1>
                <ArrowRightIcon/>
            </div>
            <div className="register__right">
            <form onSubmit={handleSubmit}>
                <div className="register__right__input">
                <input placeholder="Vendor Name:"
                 type="text"
                 required
                 value={name}
                 onChange={(e)=>setName(e.target.value)}
                />
                <PersonIcon/>
                </div>
                <div className="register__right__input">
                <input placeholder="Shop-ID"
                value={shopId}
                required
                onChange={(e)=>setShopId(e.target.value)}
                />
                <BrandingWatermarkIcon/>
                </div>
                <div className="register__right__input">
                <input placeholder="Address"
                required
                value={address}
                onChange={(e)=>setAddress(e.target.value)}/>
                <HomeIcon/>
                </div>
                <div className="register__right__input">
                <input placeholder="City"
                required
                value={city}
                onChange={(e)=>setCity(e.target.value)}/>
                <LocationCityIcon/>
                </div>
                <div className="register__right__input">
                <input placeholder="Email"
                required
                value={email}
                onChange={(e)=>setEmail(e.target.value)}/>
                <EmailIcon/>
                </div>
                <div className="register__right__input">
                <input placeholder="Contact Number" type="number" maxLength="10"
                value={phone}
                required
                onChange={(e)=>setPhone(e.target.value)}/>
                <PhoneIcon/>
                </div>
                <div className="register__right__input">
                <input placeholder="Password"
                required
                value={password}
                onChange={(e)=>setPassword(e.target.value)}/>
                <FingerprintIcon/>
                </div>

                {!isPending && <Button type="submit">Register</Button>}
                {isPending && <Button disabled>Registering..</Button>}
            </form>

            </div>
        </div>
    )
}

export default Register
