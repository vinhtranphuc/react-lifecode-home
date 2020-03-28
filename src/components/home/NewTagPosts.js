import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import DisplayPost from "../fragements/DisplayPost";

class NewTagPosts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tag: ''
    }
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="section-title">
            <h2 className="title">{this.props.tag}</h2>
          </div>
        </div>
        {this.props.posts.map((item, i) =>
          <>
            <div className="col-md-4">
              <DisplayPost containerSize="post-sm" titleSize="title-sm"
                      post_image={item.post_image}
                      post_id={item.post_id}
                      title={item.title}
                      //published_at={item.published_at}
                      tags={item.tags}
                      users={item.users}
                      sumary={item.sumary}
                      images={item.images}
              >
              </DisplayPost>
            </div>
          </>
        )}
      </div>
    );
  }
}

NewTagPosts.propsType = {
  tag: PropTypes.string,
  tag_id: PropTypes.string
}

// filter posts by tag_id, max is 3 post
let getPostsFilter = (posts,id) => {
  let filterPosts = [];
  for(let i=0;i<posts.length;i++) {
    for(let i1=0;i1<posts[i].tags.length;i1++) {
      if(id === posts[i].tags[i1].tag_id) {
        filterPosts.push(posts[i]);
        if(filterPosts.length === 3) {
          return filterPosts;
        }
      }
    }
  }
  return filterPosts;
}

// set tag name
let getTagName=(posts, id)=> {
  let tag = '';
  posts[0]&&posts[0].tags.map(e1 => {
    if (id === e1.tag_id) {
      tag = e1.tag;
    }
  });
  return tag;
}

const mapStateToProps = (state, ownProps) => {
  const posts = state.posts.list?[...state.posts.list]:[];
  const {tag_id} = ownProps;
  const currentPosts = getPostsFilter(posts, tag_id);
  const tagName = getTagName(currentPosts,tag_id);
  return {
    tag: tagName,
    posts: currentPosts
  };
}

export default connect(mapStateToProps)(NewTagPosts);