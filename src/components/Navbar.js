import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import { useStateValue } from './StateProvider';

function Navbar() {

    const [{user}] = useStateValue();

    useEffect(() => {
        if(auth){
            console.log(auth.email);
            console.log(user);
        }
        setClick(true);
    }, [user])
    const [click ,setClick] = useState(false);

    const clickHandler = ()=> {
        setClick(click=>{
            return click = !click
        });
    } 
    const closeMobileMenu = () => {
        setClick(true);
        if(user){
            auth.signOut();
        }else{
            return null
        }
    };

    // var resizeHandler = () =>{
    //     if(window.innerWidth <= 900){
    //     }else{
    //     }   
    // }

    // window.addEventListener('resize' ,resizeHandler);
    return (
        // <BrowserRouter>
        <>
        <nav className='navbar'>
            <div className='navbar__container'>
                <Link to='/' className='navbar__title' onClick={closeMobileMenu} >
                    SRX<i className="fab fa-pied-piper-alt navbar__titleLogo"></i>
                </Link>
                <div className='navbar__menuLogo' onClick={clickHandler}>
                    <i className={click ? 'fas fa-bars' : 'fas fa-window-close'} />
                </div>
                <ul className={click ? 'navbar__menu':'navbar__menu active'}>
                    <li className='navbar__options'>
                        <Link to='/home' className='navbar__option' onClick={closeMobileMenu}>Home</Link>
                    </li>
                    <li className='navbar__options'>
                        <Link to='/services' className='navbar__option' onClick={closeMobileMenu}>Services</Link>
                    </li>
                    <li className='navbar__options'>
                        <Link to='/products' className='navbar__option' onClick={closeMobileMenu}>Products</Link>
                    </li>
                    <li>
                        <Link to={user ? '/' : '/signup'} className='navbar__signUp' onClick={closeMobileMenu}>{!user ? 'Sign-In' : 'Logout'}</Link>
                    </li>
                </ul>
            </div>
        </nav>   
        </>
        
        // </BrowserRouter>
    )
}

export default Navbar
