import React from "react";
import DisplayPost from "../fragements/DisplayPost";
import {connect} from "react-redux"
import { bindActionCreators } from "redux";
import {getHotPosts} from "../../actions/postsAction"

class HotPosts extends React.Component {

  componentDidMount() {
    this.props.getHotPosts()
  }
  render() {
    const posts = this.props.posts;
    return (
      <div id="hot-post" className="row hot-post">
          <>
            {posts[0]&& 
              <div className="col-md-8 hot-post-left">
                  <DisplayPost containerSize="post-thumb" titleSize="title-lg"
                      post_image={posts[0].post_image}
                      post_id={posts[0].post_id}
                      title={posts[0].title}
                      published_at={posts[0].published_at}
                      tags={posts[0].tags}
                      users={posts[0].users}
                      images={posts[0].images}
                      sumary={posts[0].sumary}
                  >
                  </DisplayPost>
              </div>}
            {<div className="col-md-4 hot-post-right">
                {posts[1] && <DisplayPost containerSize="post-thumb"
                      post_image={posts[1].post_image}
                      post_id={posts[1].post_id}
                      title={posts[1].title}
                      //published_at={item.published_at}
                      tags={posts[1].tags}
                      users={posts[1].users}
                      images={posts[1].images}
                      sumary={posts[1].sumary}
                ></DisplayPost>}
                {posts[2] && <DisplayPost containerSize="post-thumb"
                      post_image={posts[2].post_image}
                      post_id={posts[2].post_id}
                      title={posts[2].title}
                     // published_at={item.published_at}
                      tags={posts[2].tags}
                      users={posts[2].users}
                      images={posts[2].images}
                      sumary={posts[2].sumary}
                ></DisplayPost>}
              </div>}
            </>
      </div>
    );
  }
}

const mapStateToProps=(state) => {
  return {
    posts: state.hotPosts
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getHotPosts:getHotPosts},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(HotPosts);
