/* eslint-disable jsx-a11y/alt-text */
import React, {useRef, useEffect } from "react";
import WidgetGalery from "../fragements/WidgetGalery";
import DisplayPost from "../fragements/DisplayPost";
import { connect } from "react-redux"
import { bindActionCreators } from "redux";
import { getOldPosts } from "../../actions/postsAction";

const Session5 = (props) => {

  let postsComponent = [];
  const scrollTarget = useRef(null)
  const mounted = useRef();
  const [state, setState] = React.useState({
    numberOfPosts: 3,
    loadMorePosts : false
  })
  
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      props.getOldPosts(5);
    } else {
      if(state.loadMorePosts) {
        var elmTop = scrollTarget.current.getBoundingClientRect().top + window.scrollY;
        window.scrollTo(0,elmTop - 25);
      //  scrollTarget.current.scrollIntoView({behavior: 'smooth'});
      }
    }
  });

  const handleLoadMorePostsClick = () => {
    const numberOfPosts = parseInt(state.numberOfPosts) + 3;
    setState({
      numberOfPosts: numberOfPosts,
      loadMorePosts : true
    })
    props.getOldPosts(numberOfPosts);
  }
 
  const handleLoadPosts = (posts) => {
    let postTargetScroll = posts.length - 3;
    posts.map((e,index) => {
      const post = e;
        postsComponent.push(<DisplayPost
          containerSize="post-row"
          images={post.images}
          post_id={post.post_id}
          title={post.title}
          published_at={post.published_at}
          tags={post.tags}
          users={post.users}
          haveSumary={true}
          content={post.content}
          refProp={index === postTargetScroll?scrollTarget:null}
          />);
    });
    return postsComponent;
  }
  const posts = props ? props.posts : [];
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            {handleLoadPosts(posts)}
            <div className="section-row loadmore text-center">
              <span className="primary-button" onClick={handleLoadMorePostsClick}>
                Load More
              </span>
            </div>
          </div>
          <div className="col-md-4">
            <WidgetGalery></WidgetGalery>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    posts: state.oldPosts
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getOldPosts: getOldPosts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Session5);
