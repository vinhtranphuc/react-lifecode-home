/* eslint-disable no-useless-constructor */
import React from "react";
import DisplayPost from "./DisplayPost";

const CONTENT_STYLE = {
    height : "320px"
}
class NavMenuTabContent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {props} = this
        return (
            <div id={props.typeId} className="tab-pane fade in" style={CONTENT_STYLE}>
                <div className="row">
                    <div className="col-md-4">
                        <LoadPost post = {props.posts[0]}></LoadPost>
                    </div>
                    <div className="col-md-4">
                        <LoadPost post = {props.posts[1]}></LoadPost>
                    </div>
                    <div className="col-md-4">
                        <LoadPost post = {props.posts[2]}></LoadPost>
                    </div>
                </div>
            </div>
        );
    }
}

function LoadPost(props) {
    const post = props.post;
    return (
      post?<DisplayPost
          containerSize="post-sm"
          tags={post.tags}
          images={post.images}
          post_id={post.post_id}
          title={post.title}
          published_at={post.published_at}
          users={post.users}
          sumary={post.sumary} />:<></>
    );
  }

export default NavMenuTabContent;
