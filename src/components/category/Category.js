/* eslint-disable react/no-direct-mutation-state */
import React from "react";
import Session from "./Session";
import {connect} from "react-redux"
import CategoryHeader from "./CategoryHeader";

class Category extends React.Component {
  constructor(props) {
    super(props)
    let category_id = this.props.computedMatch.params.category_id;
    this.state = {
      category_id : category_id
    }
  }

  getCategoryById =(category_id,categories )=>{
    for(let i=0;i<categories.length;i++) {
      if(category_id === categories[i].category_id)
        return categories[i];
    }
  }

  render() {
    let category = this.getCategoryById(this.state.category_id,this.props.categories);
    return (
      category?<>
        <CategoryHeader category={category}></CategoryHeader>
        <Session category_id={this.state.category_id}/>
      </>:<></>
    );
  }
}

const mapSateToProps = (state) => {
  return {
    categories: state.categories
  }
}

export default connect(mapSateToProps)(Category);