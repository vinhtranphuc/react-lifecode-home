import React from "react";

class PostHeader extends React.Component {
  render() {
    const postHeader = this.props;
    return (
      <div id="post-header" className="page-header">
        <div
          className="page-header-bg"
          style={{
            backgroundImage: 'url("/img/header-1.jpg")'
          }}
          data-stellar-background-ratio="0.5"
        />
        <div className="container">
          <div className="row">
            <div className="col-md-10">
              <div className="post-tag">
                {postHeader.tags&&postHeader.tags.map((item)=>
                  <a href={item.tag_id}>{' '+item.tag}</a>
                )}
              </div>
              <h1>
                {postHeader.title}
              </h1>
              <ul className="post-meta">
                <li>
                  {postHeader.users&&postHeader.users.map((item)=>
                    <li>
                      <a href={item.user_id}>{' '+item.user}</a>
                    </li>
                  )}
                </li>
                <li>{postHeader.date}</li>
                <li>
                  <i className="fa fa-comments" /> {postHeader.number_of_comments}
                </li>
                <li>
                  <i className="fa fa-eye" /> {postHeader.times_of_view}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostHeader;
