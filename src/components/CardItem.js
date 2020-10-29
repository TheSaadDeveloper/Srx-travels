import { Link } from 'react-router-dom';
import React from 'react';
import './CardItem.css';

function CardItem(props) {
    return (
        <>
        <Link to={props.path} style={{textDecoration: "none"}}>
            <div className='card__item' >
                <figure className='card__item-imageWrap' data-category={props.label}>
                    <img
                        src={props.src}
                        alt='please change the brower you are using !'
                        className='card__item-image'
                    />
                </figure>
                <div className='card__item-text'>
                    <p>{props.text}</p>
                </div>
            </div>  
            </Link>
        </>
    )
}

export default CardItem
