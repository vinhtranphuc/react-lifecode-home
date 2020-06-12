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
    this.props.getTags(param)
  }

  render() {
    return (
      <div className="section-row">
        <div className="post-category">
            <span style={{fontWeight:'bold'}}>TAGS : </span>
            {this.props.postTags.map((item, index)=>
              <span>
                <a href={item.tag_id}>{' '+item.tag}{index<this.props.postTags.length-1?', ':''}</a>
              </span>
            )}
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
