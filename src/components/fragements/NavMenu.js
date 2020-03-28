/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import NavMenuTabDropDown from "./NavMenuTabDropDown";
import NavMenuTabDropDown1 from "./NavMenuTabDropdown1";

export default () => (
    <ul className="nav-menu">
        <li>
            <a href="/home">Home</a>
        </li>
        <li className="has-dropdown megamenu">
            <a href="#">STORIES</a>
            <NavMenuTabDropDown></NavMenuTabDropDown>
        </li>
        <li className="has-dropdown megamenu">
            <a href="#">Technology</a>
            <NavMenuTabDropDown1></NavMenuTabDropDown1>
        </li>
        <li>
            <a href="about.html">About US</a>
        </li>
        <li>
            <a href="contact.html">Contact</a>
        </li>
    </ul>
);
