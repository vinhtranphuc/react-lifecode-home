import React from "react";
import Session from "./Session";
import PostHeader from "./PostHeader";
import {connect} from "react-redux"
import { bindActionCreators } from "redux";
import {getPostByPostId} from "../../actions/postsAction"

class Post extends React.Component {
  constructor(props) {
    super(props)
    let post_id = props.match.params.post_id;
    this.state = {
      post_id : post_id
    }
    let params = {
      post_id: post_id
    }
    this.props.getPostByPostId(params);
  }
  render() {
    const post = this.props.post;
    return (
      <>
        <PostHeader
          tags = {post.tags}
          title = {post.title}
          users = {post.users}
          date = {post.created_at}
          times_of_view = {post.times_of_view}
          numer_of_comments = {post.number_of_comments}
        ></PostHeader>
        <Session post_id={this.state.post_id} post={post}/>
      </>
    );
  }
}

const mapSateToProps = (state) => {
  return {
    post: state.postByPostId
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getPostByPostId:getPostByPostId},dispatch);
}
export default connect(mapSateToProps,mapDispatchToProps)(Post);
