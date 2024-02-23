import React from 'react';
import "./navbar.css";
import search from "../Assets/search.svg";
export default function Navbar(){
    return (
        <div className="navbar">
            <div className="searchBar">
                <img src={search} alt="" />
                <input type="text"  placeholder="" />
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