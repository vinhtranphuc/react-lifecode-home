import React from "react";
import DisplayPost from "./DisplayPost";
import PropTypes from "prop-types";
import {connect} from "react-redux"
import { bindActionCreators } from "redux";
import {getPopularPosts} from "../../actions/postsAction"

class WidgetPosts extends React.Component {

  componentDidMount() {
    this.props.getPopularPosts()
  }

  render() {
    return (
      <div className="aside-widget">
        <div className="section-title"> 
          <h2 className="title">{this.props.title}</h2>
        </div>
        {this.props.posts.map((item,i)=>
          <DisplayPost
                    containerSize="post-widget"
                    post_id={item.post_id}
                    title={item.title}
                   // published_at={item.published_at}
                    tags={item.tags}
                    users={item.users}
                    images={item.images}
                    sumary={item.sumary}
          ></DisplayPost>
        )}
      </div>
    );
  }
}
WidgetPosts.propsType = {
  title : PropTypes.string
}

WidgetPosts.defaultProps = {
  title : "..."
}

const mapStateToProps = (state) => {
  return {
    posts: state.popularPosts
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getPopularPosts:getPopularPosts},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(WidgetPosts);
