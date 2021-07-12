import React, { useState } from 'react';
import './SignIn.css';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router';

function SignIn() {
    const[login,setLogin] = useState(false);
    const [loginId,setLoginId]= useState('');
    const [password,setPassword]= useState('');
    const [isPending,setIsPending] = useState(false);
    const history = useHistory();

    const handleLogin= (e)=>{
        e.preventDefault();
        const Login = {loginId,password};
        console.log(Login)
        setIsPending(true);

        fetch('http://localhost:8000/vendor/register/',{
            method:'POST',
            headers: { "Content-Type":"application/json"},
            body: JSON.stringify(Login)
        }).then(res=>{
            if(res.ok){
                setLogin(true)
                }
            setIsPending(false);
            history.push('/');
        });
        
    }

    return (
        <div className="signIn">
            <div className="signIn__left">
                <h1>Authenticated Kendra can Sign In Here</h1>
                <ArrowRightIcon/>
            </div>
            <div className="signIn__right">
            <form onSubmit={handleLogin}>
                <div className="signIn__right__loginId">
                <input placeholder="Login ID" type="text"
                required
                value={loginId}
                onChange={(e)=>setLoginId(e.target.value)}/>
                <LockOpenIcon/>
                </div>
                <div className="signIn__right__loginId">
                <input placeholder="Password" type="text"
                required
                value={password}
                onChange={(e)=>setPassword(e.target.value)}/>
                <VpnKeyIcon/>
                </div>

                {!isPending && <Button type="submit">Sign In</Button>}
                {isPending && <Button disabled>Signing In ...</Button>}
                {login && <Button disabled>Signed In ...</Button>}
            </form>
            </div>  
        </div>
    )
}

export default SignIn
