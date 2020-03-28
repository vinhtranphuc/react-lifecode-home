import React from "react";
import DisplayPost from "../fragements/DisplayPost";
import {connect} from "react-redux"
import { bindActionCreators } from "redux";
import {getRecentPosts} from "../../actions/postsAction"

class RecentPosts extends React.Component {

  componentWillMount() {
    this.props.getRecentPosts()
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="section-title">
            <h2 className="title">Recent posts</h2>
          </div>
        </div>
        {
          this.props.posts &&
          this.props.posts.map((item,i)=>
            <>
              {/* {i%2===0 &&
              <div className="clearfix visible-md visible-lg" />} */}
              {
                <div className="col-md-6">
                  <DisplayPost
                      post_image={item.post_image}
                      post_id={item.post_id}
                      title={item.title}
                      published_at={item.published_at}
                      tags={item.tags}
                      users={item.users}
                      images={item.images}
                      sumary={item.sumary}
                  ></DisplayPost>
                </div>
              }
            </>
          )
        }
      </div>
    );
  }
}

const mapSateToProps = (state) => {
  return {
    posts: state.recentPosts
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getRecentPosts:getRecentPosts},dispatch);
}

export default connect(mapSateToProps,mapDispatchToProps)(RecentPosts);
