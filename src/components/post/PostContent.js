/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import PropTypes from "prop-types";

class PostContent extends React.Component {
  htmlDecode(input){
    var e = document.createElement('div');
    e.innerHTML = input;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  }
  render() {
    return (
      <div className="section-row" dangerouslySetInnerHTML={{ __html: this.htmlDecode(this.props.content)}}>
      </div>
    );
  }
}
PostContent.propsType = {
  content: PropTypes.string
}
PostContent.defaultProps={
  content: "xxxx"
}

export default PostContent;
