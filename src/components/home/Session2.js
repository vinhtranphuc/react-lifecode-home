import React from "react";
import RecentPosts from "./RecentPosts";
import NewTagPosts from "./NewTagPosts";
import WidgetImage from "../fragements/WidgetImage";
import WidgetSocial from "../fragements/WidgetSocial";
import WidgetCategory from "../fragements/WidgetCategory";
import WidgetNewsletter from "../fragements/WidgetNewsletter";
import WidgetPosts from "../fragements/WidgetPosts";
import {connect } from "react-redux";
import {bindActionCreators } from "redux";
import {getPosts} from "../../actions/postsAction";

class Session2 extends React.Component {
 
  componentWillMount() {
    this.props.getPosts();
  }

  render() {
    return (
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <RecentPosts></RecentPosts>
              {/* <NewTagPosts tag_id={1}></NewTagPosts>
              <NewTagPosts tag_id={4}></NewTagPosts>
              <NewTagPosts tag_id={3}></NewTagPosts>
              <NewTagPosts tag_id={6}></NewTagPosts> */}
            </div>
            <div className="col-md-4">
              <WidgetImage></WidgetImage>
              <WidgetSocial></WidgetSocial>
              <WidgetCategory></WidgetCategory>
              {/* <WidgetNewsletter></WidgetNewsletter> */}
              <WidgetPosts title="Popular Posts"></WidgetPosts>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getPosts: getPosts}, dispatch);
}

export default connect(null,mapDispatchToProps)(Session2);
