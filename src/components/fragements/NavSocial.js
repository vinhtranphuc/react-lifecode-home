import React from "react";
import PropTypes from "prop-types";

class NavSocial extends React.Component {
  render() {
    return (
        <ul className="nav-social">
            <li>
                <a href={this.props.facebookUrl}>
                    <i className="fa fa-facebook" />
                </a>
            </li>
            <li>
                <a href={this.props.twitterUrl}>
                    <i className="fa fa-twitter" />
                </a>
            </li>
            <li>
                <a href={this.props.googlePlusUrl}>
                    <i className="fa fa-google-plus" />
                </a>
            </li>
            <li>
                <a href={this.props.instagramPlusUrl}>
                    <i className="fa fa-instagram" />
                </a>
            </li>
        </ul>
    );
  }
}

NavSocial.propsType = {
    facebookUrl: PropTypes.string,
    twitterUrl: PropTypes.string,
    googlePlusUrl: PropTypes.string,
    instagramPlusUrl: PropTypes.string
}

NavSocial.defaultProps = {
    facebookUrl: "#",
    twitterUrl: "#",
    googlePlusUrl: "#",
    instagramPlusUrl: "#"
}
export default NavSocial;
