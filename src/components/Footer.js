import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';

function Footer() {
    return (
        <div className='footer'>
            <section className='footer__subscription'>
                <p className='footer__subscriptionHeading'>Join the Adventure newsletter to receive our best vacation deals</p>
                <p className='footer__subscriptionText'>You can Unsubscribe anytime .</p>
                <div className='input__areas'>
                    <form>
                        <input
                        type='email'
                        name='email'
                        placeholder='Your Email-ID'
                        className='footer__input'
                        />
                        <Button buttonStyle='outlineBtn-style' buttonSize='largeBtn'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className='footer__links'>
                <div className='footer__linkWrapper'>
                    <div className='footer__linkItems'>
                        <h2>About Us</h2>
                        <Link to='/signup'>How it Works ? </Link>
                        <Link to='/signup'>Testimonials </Link>
                        <Link to='/signup'>Careers </Link>
                        <Link to='/signup'>Investors</Link>
                        <Link to='/signup'>Terms of Service .</Link>
                    </div>
                </div>
            </div>
            <section className='social__media'>
                <div className='social__mediaWrap'>
                    <div className='footer__logo'>
                        <Link className='social__logo'>
                            SRX <i className='fab fa-pied-piper-alt' />
                        </Link>
                    </div>
                    <small className='website__rights'>SRX @c 2020</small>
                    <div className='social__icons'>
                        <Link
                        className='social__iconLink'
                        to='/'
                        target='_blank'
                        >
                            <i className='fab fa-facebook' />
                        </Link>
                        <Link
                        className='social__iconLink'
                        to='/'
                        target='_blank'
                        >
                            <i className='fab fa-instagram' />
                        </Link>
                        <Link
                        className='social__iconLink'
                        to='/'
                        target='_blank'
                        >
                            <i className='fab fa-twitter' />
                        </Link>
                        <Link
                        className='social__iconLink'
                        to='/'
                        target='_blank'
                        >
                            <i className='fab fa-linkedin' />
                        </Link>
                        <Link
                        className='social__iconLink'
                        to='/'
                        target='_blank'
                        >
                            <i className='fab fa-youtube' />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
