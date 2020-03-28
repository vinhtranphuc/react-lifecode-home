import React from "react";

class PostNav extends React.Component {
  render() {
    return (
      <div className="section-row">
        <div className="post-nav">
          <div className="prev-post">
            <a className="post-img" href="blog-post.html">
              <img src="/img/widget-8.jpg" alt />
            </a>
            <h3 className="post-title">
              <a href="#">
                Sed ut perspiciatis, unde omnis iste natus error sit
              </a>
            </h3>
            <span>Previous post</span>
          </div>
          <div className="next-post">
            <a className="post-img" href="blog-post.html">
              <img src="/img/widget-10.jpg" alt />
            </a>
            <h3 className="post-title">
              <a href="#">Postea senserit id eos, vivendo periculis ei qui</a>
            </h3>
            <span>Next post</span>
          </div>
        </div>
      </div>
    );
  }
}

export default PostNav;
