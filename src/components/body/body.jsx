import React from "react";
import "./body.css";
import Breadcum from "../breadcum/breadcum";
import Routebar from "../routeBar/routebar";
import Bodyheader from "../bodyheader/bodyheader";
import Badge from "../badge/badge.jsx";
import ViewBtn from "../viewbtn/viewbtn.jsx";
import Ratingbadge from "../ ratingbadge/ratingbadge.jsx";
import fivestar from "../Assets/fivestar.svg";
import fourhalf from "../Assets/star/fourhalf.svg";
import fourstar from "../Assets/star/fourstar.svg";

import trophy from "../Assets/trophy.svg";
import diamond from "../Assets/diamond.svg";
import Blogcontainer from "../blogcontainer/blogcontainer.jsx";
export default function Body() {
  return (
    <div className="body">
      <div className="main-content">
        <Bodyheader />
        <Routebar />
        <Breadcum />
        <div className="contentbox">
          <Badge className="badge" title="Best choice" img={trophy} />
          <Blogcontainer
            className="blogcontainer1"
            content1Highlight="WixPro 72-Inch Responsive Website Builder- "
            content1="Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)"
            content2="[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides."
            rate="9.8"
            remark="Excellent"
            star={fivestar}/>
        </div>
        <div className="contentbox">
          <Badge className="badge" title="Best Value" img={diamond} />
          <Blogcontainer
            className="blogcontainer1"
            content1Highlight="SiteCraft 68-Inch Ultimate Web Design Studio- "
            content1=" Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)"
            content2="[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations."
            rate="9.5"
            remark="Excellent"
            star={fourstar}/>
        </div>
        <div className="contentbox">
            <div className="space"></div>
          <Blogcontainer
            className="blogcontainer1"
            content1Highlight=" WixPro 72-Inch Responsive Website Builder- "
            content1=" Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)"
            content2="[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides."
            rate="9.3"
            remark="Exceptional"
            star={fourhalf}/>
        </div>
        <div className="contentbox">
            <div className="space"></div>
          <Blogcontainer
            className="blogcontainer1"
            content1Highlight=" CDK Resposive Builder:  "
            content1="An extensive library of widgets and apps, and detailed step-by-step guides"
            content2="[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides."
            rate="9.1"
            remark="Very Good"
            star={fourstar}/>
        </div>
      </div>
    </div>
  );
}
