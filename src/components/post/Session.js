/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PostShare from "./PostShare";
import PostContent from "./PostContent";
import PostTags from "./PostTags";
import PostNav from "./PostNav";
import PostAuthor from "./PostAuthor";
import RelatedPosts from "./RelatedPosts";
import PostComments from "./PostComments";
import PostReply from "./PostReply";

import WidgetImage from "../fragements/WidgetImage";
import WidgetSocial from "../fragements/WidgetSocial";
import WidgetCategory from "../fragements/WidgetCategory";
import WidgetNewsletter from "../fragements/WidgetNewsletter";
import WidgetPosts from "../fragements/WidgetPosts";

class Session extends React.Component {
  render() {
    const post = this.props.post;
    return (
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <PostShare post={post?post:{}}/>
              <PostContent content={post?post.content:''}/>
              <PostTags tags={post?post.tags:[]}></PostTags>
              <PostNav/>
              <PostAuthor user={post?post.users:[]}/>
              <RelatedPosts post_id={post?post.post_id:''}/>
              <PostComments post_id={post?post.post_id:''}/>
              <PostReply/>
            </div>
            <div className="col-md-4">
              <WidgetImage image="/img/ad-3.jpg"/>
              <WidgetSocial />
              <WidgetCategory />
              <WidgetNewsletter />
              <WidgetPosts />
              <div className="aside-widget text-center">
                <a
                  href="#"
                  style={{
                    display: "inline-block",
                    margin: "auto"
                  }}
                >
                  <img className="img-responsive" src="/img/ad-1.jpg" alt />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Session;
