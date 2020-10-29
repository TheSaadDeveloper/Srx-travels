import { auth } from './firebase';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import './UserAuth.css';

function UserAuth() {
        const history = useHistory();
        const [email ,setEmail] = useState('');
        const [password ,setPassword] = useState(null);

        const signInHandler = (e) =>{
            e.preventDefault();
            auth.signInWithEmailAndPassword(email,password)
            .then(()=>{
                history.push('/')
            })
            .catch(error => alert(error.message));
        }

        const signUpHandler = (e) =>{
            e.preventDefault();
            auth.createUserWithEmailAndPassword(email,password)
            .then(()=>{
                history.push('/')
            })
            .catch(error => alert(error.message));
        }
    return (
        <div className='userAuth'>
            <h1 align='' className='userAuth__title'>SRX <span><i className='fab fa-pied-piper-alt navbar__titleLogo' /></span></h1>
            <span style={{fontSize:'1.4rem',color:'white',marginRight:'25px'}}>sign-in to your Account</span>
            <div className='userAuth__container'>
                <form className='userAuth__form'>
                   <input placeholder='Email' type='text' className='form__inputs' onChange={(e)=> setEmail(e.target.value)} />
                    <input placeholder='Password' type='password' className='form__inputs' onChange={e => setPassword(e.target.value)} />
                    <button className='form__signIn-Btn' onClick={signInHandler}>Login</button>
                    <p style={{color:'grey',position:'relative',top:'5%'}}>Haven't made an account ?</p>
                    <div className='signUp__container'>
                    <button className='form__signUp-Btn' onClick={signUpHandler}>Create account</button>
                    {/* <h2 style={{position:'relative',top:'20px',fontWeight:'lighter',backgroundColor:''}}>Or</h2> */}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UserAuth
