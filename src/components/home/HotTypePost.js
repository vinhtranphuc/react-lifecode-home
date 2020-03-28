/* eslint-disable no-useless-constructor */
import React from "react";
import DisplayPost from "../fragements/DisplayPost";
import PropTypes from "prop-types";

class HotTypePost extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    const {post} = this.props;
    return (
      <div className="col-md-4">
        <div className="section-title">
          <h2 className="title">{this.props.categoryName}</h2>
        </div> 
        <DisplayPost
          // containerSize="post-widget"
          images={post&&post.images}
          post_id={post&&post.post_id}
          title={post&&post.title}
          published_at={post&&post.published_at}
          tags={post&&post.tags}
          users={post&&post.users}
          sumary={post&&post.sumary} />
      </div>
    );
  }
}

HotTypePost.propsType = {
  categoryName: PropTypes.string,
  post: PropTypes.object
}

export default HotTypePost;
