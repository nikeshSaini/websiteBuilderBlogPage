import "./blogcontainer.css";
import React from "react";
import builder from "../Assets/builder.svg";
import Badge from "../badge/badge";
import trophy from "../Assets/trophy.svg";
import diamond from "../Assets/diamond.svg";
import dropdown from "../Assets/dropdown.svg";
import Ratingbadge from "../ ratingbadge/ratingbadge";
import fivestar from "../Assets/fivestar.svg";
import ViewBtn from "../viewbtn/viewbtn";

export default function Blogcontainer(props) {
  return (
    <div className="blogcontainer-box">
      <div className="left-part">

        <img className="builderimage" src={builder} />

      </div>

      <div className="middle-part">
        <div className="middle1">
          <b>{props.content1Highlight}</b> {props.content1}
        </div>
        <div className="middle2">Main Highlight</div>
        <div className="middle3">{props.content2}</div>
        <div className="middle4">
          <p>Show more</p>
          <img src={dropdown} alt="" />
        </div>
      </div>

      <div className="right-part">
        <Ratingbadge rate={props.rate} remark={props.remark} star={props.star} />
        <ViewBtn />
      </div>
    </div>
  );
}
