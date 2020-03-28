import React from "react";
import PropTypes from "prop-types";

class NavMenuTabDropDown1 extends React.Component {
    render() {
        return (
            <div className="dropdown">
                <div className="dropdown-body">
                    <div className="row">
                        <div className="col-md-3">
                            <h4 className="dropdown-heading">FRONT END</h4>
                            <ul className="dropdown-list">
                                <li>
                                    <a href="#">Java Script</a>
                                </li>
                                <li>
                                    <a href="#">React JS</a>
                                </li>
                                <li>
                                    <a href="#">Angular JS</a>
                                </li>
                                <li>
                                    <a href="#">HTML/CSS</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h4 className="dropdown-heading">BACK END</h4>
                            <ul className="dropdown-list">
                                <li>
                                    <a href="#">Java</a>
                                </li>
                                <li>
                                    <a href="#">NodeJS</a>
                                </li>
                                <li>
                                    <a href="#">Python</a>
                                </li>
                                <li>
                                    <a href="#">PHP</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h4 className="dropdown-heading">Database</h4>
                            <ul className="dropdown-list">
                                <li>
                                    <a href="#">T-SQL</a>
                                </li>
                                <li>
                                    <a href="#">PL/SQL</a>
                                </li>
                                <li>
                                    <a href="#">ERD</a>
                                </li>
                                <li>
                                    <a href="#">more ...</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h4 className="dropdown-heading">Mobile</h4>
                            <ul className="dropdown-list">
                                <li>
                                    <a href="#">Android</a>
                                </li>
                                <li>
                                    <a href="#">IOS</a>
                                </li>
                                <li>
                                    <h4 className="dropdown-heading">Tools</h4>
                                </li>
                                <li>
                                    <a href="#">Git</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

NavMenuTabDropDown1.propsType = {
}

NavMenuTabDropDown1.defaultProps = {
}
export default NavMenuTabDropDown1;
