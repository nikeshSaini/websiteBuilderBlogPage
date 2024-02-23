import React from 'react';
import "./viewbtn.css";

export default function ViewBtn(props){
    return (
        <div className="viewbtn-box">
                <button style={{width: props.width || '232px' }}>{props.title || 'View'}</button>
        </div>
    );
};