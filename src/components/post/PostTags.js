import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux"
import { bindActionCreators } from "redux";
import {getTags} from "../../actions/tagsAction"

class PostTags extends React.Component {

  componentDidMount() {
    let param  = {
      post_id : this.props.post_id?this.props.post_id:'1'
    }
    debugger
    this.props.getTags(param)
  }

  render() {
    return (
      <div className="section-row">
        <div className="post-category">
          <ul>
            <li>TAGS : </li>
            {this.props.postTags.map((item)=>
              <li>
                <a href={item.tag_id}>{' '+item.tag}</a>
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

PostTags.propsType = {
  postTags: PropTypes.array
}

PostTags.defaultProps = {
  postTags: [
    {
      tag: "Social",
      tag_id: "#"
    },
    {
      tag: "Lifestyle",
      tag_id: "#"
    },
    {
      tag: "Fashion",
      tag_id: "#"
    },
    {
      tag: "Healthxx",
      tag_id: "#"
    }
  ]
}

const mapStateToProps = (state) => {
  return {
    postTags: state.postTags
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getTags:getTags},dispatch);
} 
export default connect(mapStateToProps,mapDispatchToProps)(PostTags);
