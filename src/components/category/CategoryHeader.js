import React from "react";

const CategoryHeader = (props) => {
  let category = props.category
    return (
    <div className="page-header">
      <div
        className="page-header-bg"
        style={{
          backgroundImage: 'url("'+category.category_img+'")'
        }}
        data-stellar-background-ratio="0.5"
      />
      <div className="container">
        <div className="row">
          <div className="col-md-offset-1 col-md-10 text-center">
            <h1 className="text-uppercase">{category.category}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CategoryHeader;
