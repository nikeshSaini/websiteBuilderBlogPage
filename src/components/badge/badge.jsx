import React from 'react';
import "./badge.css";
import trophy from "../Assets/trophy.svg";

export default function Badge(props){
    return (
        <div className="badge-box">
            <img src={props.img} />
            <p>{props.title}</p>
        </div>
    );
};