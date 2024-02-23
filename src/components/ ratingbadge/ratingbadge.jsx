import React from 'react';
import './ratingbadge.css';
export default function Ratingbadge(props){
    return (
        <div className="rating-badge-box">
            <p id='rate'>{props.rate}</p>
            <p id='remark'>{props.remark}</p>
            <img id='star' src={props.star}/>
        </div>
    );
};