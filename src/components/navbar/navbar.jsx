import React from 'react';
import "./navbar.css"
import MYSVG from "../Assets/svg"
export default function Navbar(){
    return (
        <div className="navbar">
            <div className="searchBar">
                <input type="text" name="" id="" placeholder={<MYSVG/>} />
            </div>
            <div className="nav-item">
                <ul>
                    <li>Categories</li>
                    <li>Website Builders</li>
                    <li>Today's Deal</li>
                </ul>
            </div>
        </div>
    );
};