import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <>
        <div className='cards__container'>
            <h1 align='center'>Check out Epic Destinations to Visit!</h1>
            <ul>
                <li>
                    <CardItem 
                    src='/images/img-9.jpg'
                    path='/adventure'
                    text='explore the deep waterFall at the deep in Amazon Forest'
                    label='Adventure'
                    />
                </li>
                <li>
                    <CardItem 
                    src='/images/img-8.jpg'
                    path='desert'
                    text='Arizona Desert with lot of activities'
                    label='Desert'
                    />
                </li>
                <li>
                    <CardItem 
                    src='/images/img-3.jpg'
                    path='water Fantasy'
                    text='beautiful ocean with harbour in it '
                    label='Water Fantasy'
                    />
                </li>
                <li>
                    <CardItem 
                    src='/images/img-1.jpg'
                    path='trekking'
                    text='explore the amazing karl mountain with a beautiful sunset'
                    label='Trekking'
                    />
                </li>
                <li>
                    <CardItem 
                    src='/images/img-2.jpg'
                    path='/island'
                    text="clean ocean surrounded by many island's"
                    label='Island'
                    />
                </li>
            </ul>
        </div>   
        </>
    )
}

export default Cards
