/* eslint-disable no-const-assign */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import NavSocial from "../fragements/NavSocial";
import NavLogo from "../fragements/NavLogo";
import NavBtns from "../fragements/NavBtns";
import NavMenu from "../fragements/NavMenu";
import PropTypes from "prop-types";
import { connect } from "react-redux"
import { bindActionCreators } from "redux";
import { getCategories } from "../../actions/categoriesAction"

let SHOW_CATEGORIES = {
  display: "block"
}
let HIDE_CATEGORIES = {
  display : "none"
}
let STORIES_INHERIT = {
  color : "inherit"
}
let STORIES_WHITE = {
  color : "#fff"
}
const HomeHeader = (props) => {
  const [state, setState] = React.useState({
    isShowCategories : false
  })
  const handleShowCategories =() => {
    setState({
      isShowCategories : !state.isShowCategories
    })
  }

  return (
    <header id="header">
      <div id="nav">
        <div id="nav-top">
          <div className="container">
            <NavSocial></NavSocial>
            <NavLogo></NavLogo>
            <NavBtns></NavBtns>
          </div>
        </div>
        <div id="nav-bottom">
          <div className="container">
            <NavMenu></NavMenu>
          </div>
        </div>
        <div id="nav-aside">
          <ul className="nav-aside-menu">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li className="has-dropdown">
              <a onClick={() => handleShowCategories()} style={state.isShowCategories?STORIES_INHERIT:STORIES_WHITE}>Stories</a>
              <ul className="dropdown" style={state.isShowCategories?SHOW_CATEGORIES:HIDE_CATEGORIES}>
                {
                  props.categories.map((item) =>
                    <li>
                      <a href={item.category_id}>
                        {item.category}
                      </a>
                    </li>
                  )
                }
              </ul>
            </li>
            <li>
              <a href="about.html">About Us</a>
            </li>
            <li>
              <a href="contact.html">Contacts</a>
            </li>
            <li>
              <a href="#">Advertise</a>
            </li>
          </ul>
          <button className="nav-close nav-aside-close">
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
HomeHeader.propsType = {
  categories: PropTypes.array
}
HomeHeader.defaultProps = {
  categories: []
}
const mapStateToProps = (state) => {
  return {
    categories: state.categories
  };
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getCategories: getCategories }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
