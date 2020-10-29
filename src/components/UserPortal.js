import React, { useEffect } from 'react';
import './UserPortal.css';
import { createPortal } from 'react-dom';
import { useStateValue } from './StateProvider';

function UserPortal(props) {
    const [{},dispatch] = useStateValue(); 
    useEffect(()=>{
        setTimeout(()=>{
        }, 1000)
    },[dispatch])
         return createPortal(
            <div className='portal' style={{visibility:props.status ? 'hidden' : 'initial'}}>
                    {props.children} <span style={{color:'green',fontWeight:'800'}}>Just Signed In</span>
             </div>, document.getElementById('portal-root'));
   }

export default UserPortal
