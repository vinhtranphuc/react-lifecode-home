import React from "react";

class PostAuthor extends React.Component {
  render() {
    return (
      <div className="section-row">
        <div className="section-title">
          <h3 className="title">
            About <a href="author.html">John Doe</a>
          </h3>
        </div>
        <div className="author media">
          <div className="media-left">
            <a href="author.html">
              <img
                className="author-img media-object"
                src="/img/avatar-1.jpg"
                alt
              />
            </a>
          </div>
          <div className="media-body">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <ul className="author-social">
              <li>
                <a href="#">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-google-plus" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default PostAuthor;
