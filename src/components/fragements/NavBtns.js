import React from "react";

export default () => (
    <div className="nav-btns">
        <button className="aside-btn">
            <i className="fa fa-bars" />
        </button>
        <button className="search-btn">
            <i className="fa fa-search" />
        </button>
        <div id="nav-search">
            <form>
                <input
                    className="input"
                    name="search"
                    placeholder="Enter your search..."
                />
            </form>
            <button className="nav-close search-close">
                <span />
            </button>
        </div>
    </div>
);
