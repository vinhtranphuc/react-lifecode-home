/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import PropTypes from "prop-types";
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@emetworks/ckeditor5-build-classic-plus';

import './PostContent.css';

class PostContent extends React.Component {
  htmlDecode(input){
    var e = document.createElement('div');
    e.innerHTML = input;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  }
  render() {
    return (
      <div className="section-row" >
            <CKEditor
                    editor={ ClassicEditor }
                    data={this.htmlDecode(this.props.content)}
                    onInit={editor => {
                      editor.isReadOnly = true;
                      console.log('Editor is ready to use!', editor);
                    }}
                />
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
