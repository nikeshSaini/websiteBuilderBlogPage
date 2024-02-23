import React from 'react';
import './keypoints.css';
import check from "../Assets/check.svg"
export default function Keypoints(){
    return (
        <div className="keypoints-box">
            Why we love it.
            <div>
                <img src={check}/> 
                <p>Documentation</p>
            </div>
            <div>
                <img src={check}/> 
                <p>Easy Use</p>
            </div>
            <div>
                <img src={check}/> 
                <p>Out of box</p>
            </div>
           
        </div>
    );
};