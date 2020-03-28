/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import DisplayPost from "../fragements/DisplayPost";

class RelatedPosts extends React.Component {
  render() {
    return (
      <div>
        <div className="section-title">
          <h3 className="title">Related Posts</h3>
        </div>
        <div className="row">
          <div className="col-md-4">
            <DisplayPost containerSize="post-sm"></DisplayPost>
          </div>
          <div className="col-md-4">
            <DisplayPost postImage="/img/post-6.jpg" containerSize="post-sm"></DisplayPost>
          </div>
          <div className="col-md-4">
            <DisplayPost postImage="/img/post-7.jpg" containerSize="post-sm"></DisplayPost>
          </div>
        </div>
      </div>
    );
  }
}

export default RelatedPosts;
