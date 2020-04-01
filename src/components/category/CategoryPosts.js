/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useRef, useEffect } from "react";
import DisplayPost from "../fragements/DisplayPost";
import {connect} from "react-redux";
import { bindActionCreators } from "redux";
import {getPostsByCategory} from "../../actions/postsAction"

const CategoryPosts = (props) => {
  
  const INIT_POSTS = 8;
  const scrollTarget = useRef(null);
  const mounted = useRef();
  const [state, setState] = React.useState({
    numberOfPosts: INIT_POSTS,
    loadMorePosts : false
  })
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      let params = {
        category_id : props.category_id,
        records_no : INIT_POSTS
      }
      props.getPostsByCategory(params);
    } else {
      if(state.loadMorePosts) {
        var elmTop = scrollTarget.current.getBoundingClientRect().top + window.scrollY;
        window.scrollTo(0,elmTop - 100);
      }
    }
  });
  const handleLoadMorePostsClick = () => {
    const numberOfPosts = parseInt(state.numberOfPosts) + 3;
    setState({
      numberOfPosts: numberOfPosts,
      loadMorePosts : true
    })
    let params = {
      category_id : props.category_id,
      records_no : numberOfPosts
    }
    props.getPostsByCategory(params);
  }

  const LoadMorePosts = (props) => {
    const posts = props.posts ? props.posts : [];
    let postTargetScroll = posts.length - 3;
    let postsComponent = [];
    posts && posts.map((e, index) =>
      index > 4
      && postsComponent.push(
        e ? <DisplayPost
          containerSize="post-row"
          images={e.images}
          post_id={e.post_id}
          title={e.title}
          published_at={e.published_at}
          tags={e.tags}
          users={e.users}
          sumary={e.sumary}
          haveSumary={true} 
          refProp={index === postTargetScroll?scrollTarget:null}
          /> : <></>));
    return postsComponent;
  }
  const posts = props.posts ? props.posts : [];
  return (
    <div className="col-md-8">
      <LoadPost post={posts[0]} containerSize="post-thumb" titleSize="title-lg" />
      <div className="row">
        <div className="col-md-6">
          <LoadPost post={posts[1]} />
        </div>
        <div className="col-md-6">
          <LoadPost post={posts[2]} />
        </div>
        <div className="clearfix visible-md visible-lg" />
        <div className="col-md-6">
          <LoadPost post={posts[3]} />
        </div>
        <div className="col-md-6">
          <LoadPost post={posts[4]} />
        </div>
      </div>
      <LoadMorePosts posts={posts} />
      <div className="section-row loadmore text-center">
        <a className="primary-button" onClick={handleLoadMorePostsClick}>
          Load More
          </a>
      </div>
    </div>
  );
}
const LoadPost = (props) => {
  const post = props.post;
  const containerSize = props.containerSize;
  const titleSize = props.titleSize;
  return (
    post ? <DisplayPost
      containerSize={containerSize}
      titleSize={titleSize}
      images={post.images}
      post_id={post.post_id}
      title={post.title}
      published_at={post.published_at}
      tags={post.tags}
      users={post.users}
      sumary={post.sumary} /> : <></>
  );
}

const mapSateToProps = (state) => {
  return {
    posts: state.postsByCategory.list
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getPostsByCategory:getPostsByCategory},dispatch);
}
export default connect(mapSateToProps,mapDispatchToProps)(CategoryPosts);

