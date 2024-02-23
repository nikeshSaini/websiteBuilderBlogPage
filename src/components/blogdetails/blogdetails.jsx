import React from "react";
import "./blogdetails.css";
import check_icon from "../Assets/detail.svg";
import itag from "../Assets/itag.svg";
import drop_icon from "../Assets/dropdown.svg";

export default function Blogdetails() {
  return (
    <div className="blogdetails">
      <div className="blogdetails-box">
        <img src={check_icon} alt="" />
        <p>Last Updated - </p>
        <p>February 22, 2020</p>
        <img src={itag} alt="" />
        <p>Advertising Disclosure</p>
      </div>
      <div className="filter">
        <p>Top Relevant</p>
        <img src={drop_icon} alt="" />
      </div>
    </div>
  );
}
