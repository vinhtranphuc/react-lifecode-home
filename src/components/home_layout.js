/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import './commons/css/home.css';
import PropTypes from "prop-types";
import HomeHeader from "./home/HomeHeader";
import HomeFooter from "./home/HomeFooter";

class HomeLayout extends Component {

  render() {
    return(
      <>
          {!this.props.noHeader && <HomeHeader/>}
          {this.props.children}
          {!this.props.noFooter && <HomeFooter/>}
      </>
    );
  }
}
HomeLayout.propTypes = {
  /**
   * Whether to display the navbar, or not.
   */
  noHeader: PropTypes.bool,
  /**
   * Whether to display the footer, or not.
   */
  noFooter: PropTypes.bool
};

HomeLayout.defaultProps = {
  noHeader: false,
  noFooter: false
};

export default HomeLayout;
