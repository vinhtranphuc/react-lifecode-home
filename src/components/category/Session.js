import React from "react";
import CategoryPosts from "./CategoryPosts";
import Widgets from "./Widgets";

class Session extends React.Component {
  render() {
    return (
      <div className="section">
        <div className="container">
          <div className="row">
            <CategoryPosts category_id={this.props.category_id}></CategoryPosts>
            <Widgets></Widgets>
          </div>
        </div>
      </div>
    );
  }
}

export default Session;
