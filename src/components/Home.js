import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import { Button } from './Button';
import './Home.css';
import { useStateValue } from './StateProvider';
import UserPortal from './UserPortal';

function Home() {
    const [{user} ,dispatch] = useStateValue();
    const [status ,setStatus] = useState(false);
    useEffect(()=>{
        // setStatus(false)
        setInterval(()=>{
            setStatus(true)
        },5000);
    }, [])

    const clickHandler = () =>{
        auth.signOut();
        dispatch(
            {
                type : 'SET_USER',
                user:null       
            }
        )
    }

    return (
        <div className='home'>
                <video src='/video/home.mp4' autoPlay loop muted />
            {user ? (
                <UserPortal status={status ? true : false}>
                    {user}
                </UserPortal>
                ):null}
            <h1>THRILL AWAITS YOU</h1>
            <h3>Join Us Now</h3>
            <div className='home__btns'>
            <Link to={!user ? '/signup' : '/'}>
            <Button type='button' buttonStyle='primaryBtn-style' buttonSize='mediumBtn' onClick={clickHandler}>{!user ? 'Get Started ' : 'Logout'}</Button>
            </Link>
            <Button type='button' buttonStyle='outlineBtn-style' buttonSize='largeBtn' onClick=''>
                Watch Trailer <i className='far fa-play-circle' />
            </Button>
            </div>
        </div>
    )
}

export default Home
