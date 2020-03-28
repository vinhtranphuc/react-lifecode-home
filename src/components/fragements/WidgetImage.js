/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";

class WidgetImage extends React.Component {
  render() {
    return (
      <div className="aside-widget text-center">
        <a
          href="#"
          style={{
            display: "inline-block",
            margin: "auto"
          }}
        >
          <img className="img-responsive" src={this.props.image} alt />
        </a>
      </div>
    );
  }
}

WidgetImage.propsType = {
  image : PropTypes.string
}

WidgetImage.defaultProps = {
  image : "/img/ad-3.jpg"
}

export default WidgetImage;
