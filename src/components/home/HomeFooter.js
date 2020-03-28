/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux"
import { bindActionCreators } from "redux";
import { getCategories } from "../../actions/categoriesAction";
import { getTags } from "../../actions/tagsAction"
import {HOME_PATH,
        HOME_CATEGORY_PATH, 
        HOME_TAG_PATH, 
        HOME_ABOUTUS_PATH, 
        HOME_CONTACTS_PATH, 
        HOME_ADVERTISE_PATH, 
        HOME_PRIVACY_PATH} from "../../constants"

class HomeFooter extends React.Component {
  componentDidMount() {
    this.props.getCategories();
    this.props.getTags();
  }
  render() {
    return (
      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="footer-widget">
                <div className="footer-logo">
                  <a href="index.html" className="logo">
                    <img src="/img/logo-lifecode-3.png" alt />
                  </a>
                </div>
                <p>
                  Nec feugiat nisl pretium fusce id velit ut tortor pretium.
                  Nisl purus in mollis nunc sed. Nunc non blandit massa enim
                  nec.
                </p>
                <ul className="contact-social">
                  <li>
                    <a href="#" className="social-facebook">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="social-twitter">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="social-google-plus">
                      <i className="fa fa-google-plus" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="social-instagram">
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-widget">
                <h3 className="footer-title">Categories</h3>
                <div className="category-widget">
                  <ul>
                    {
                      this.props.categories.map((item) =>
                        <li>
                          <a href={HOME_CATEGORY_PATH+item.category_id}>
                            {item.category} <span>{item.number_of_posts}</span>
                          </a>
                        </li>
                      )
                    }
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-widget">
                <h3 className="footer-title">Tags</h3>
                <div className="tags-widget">
                  <ul>
                    {
                      this.props.tags.map((item) =>
                        <li>
                          <a href={HOME_TAG_PATH+item.tag_id}>
                            {item.tag}
                          </a>
                        </li>
                      )
                    }
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-widget">
                <h3 className="footer-title">Newsletter</h3>
                <div className="newsletter-widget">
                  <form>
                    <p>
                      Nec feugiat nisl pretium fusce id velit ut tortor pretium.
                    </p>
                    <input
                      className="input"
                      name="newsletter"
                      placeholder="Enter Your Email"
                    />
                    <button className="primary-button">Subscribe</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom row">
            <div className="col-md-6 col-md-push-6">
              <ul className="footer-nav">
                <li>
                  <a href={HOME_PATH}>Home</a>
                </li>
                <li>
                  <a href={HOME_ABOUTUS_PATH}>About Us</a>
                </li>
                <li>
                  <a href={HOME_CONTACTS_PATH}>Contacts</a>
                </li>
                <li>
                  <a href={HOME_ADVERTISE_PATH}>Advertise</a>
                </li>
                <li>
                  <a href={HOME_PRIVACY_PATH}>Privacy</a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-md-pull-6">
              <div className="footer-copyright">
                Copyright © All rights reserved | {" "}
                <i className="fa fa-heart-o" aria-hidden="true" /> Design by{" "}
                <a href="http://facebook.com/lifecode" target="_blank">
                  Lifecode
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
HomeFooter.propsType = {
  categories: PropTypes.array,
  tags: PropTypes.array
}
HomeFooter.defaultProps = {
  categories: [],
  tags: [],
}
const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    tags: state.tags
  };
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getCategories: getCategories,
                              getTags: getTags }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
