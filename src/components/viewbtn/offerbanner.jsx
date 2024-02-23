import React from 'react';
import "./offerbanner.css";

export default function Offer(props){
    return (
        <div className="offer-box">
            <p>{props.title || '20% Off'}</p>
        </div>
    );
};