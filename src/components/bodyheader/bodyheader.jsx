import React from 'react';
import './bodyheader.css'
import Blogdetails from '../blogdetails/blogdetails';
export default function Bodyheader(){
    return (
        <div className="bodyheader-box">
            <div className="bodyheader-title">Best Website builders in the US</div>
            <Blogdetails/>
        </div>
    );
};