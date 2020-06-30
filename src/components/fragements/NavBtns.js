import React from "react";
import SearchPost from "./SearchPost";
import {Popover } from "antd";

export default () => (
    <div className="nav-btns">
        <button className="aside-btn">
            <i className="fa fa-bars" />
        </button>
        <Popover placement="bottomRight" style={{width:300}} content={<SearchPost />} trigger="click">
            <button className="search-btn">
                <i className="fa fa-search" />
            </button>
        </Popover>
    </div>
);
