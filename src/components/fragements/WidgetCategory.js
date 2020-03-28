import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux"
import {bindActionCreators } from "redux";
import {getCategories} from "../../actions/categoriesAction"
import {HOME_CATEGORY_PATH} from "../../constants"

class WidgetCategory extends React.Component {

  componentDidMount() {
    this.props.getCategories()
  }

  render() {
    return (
      <div className="aside-widget">
        <div className="section-title">
          <h2 className="title">CATEGORIES</h2>
        </div>
        <div className="category-widget">
          <ul>
            {
              this.props.categories.map((item)=>
              <li>
                <a href={HOME_CATEGORY_PATH+item.category_id}>
                  {item.category} <span>{item.number_of_posts}</span>
                </a>
              </li>
              )
            }
          </ul>
        </div>
      </div>
    );
  }
}

WidgetCategory.propsType = {
  categories: PropTypes.array
}

WidgetCategory.defaultProps = {
  categories: [
    {
      category: "Lifestyle",
      category_id: "#",
      number_of_posts: "9"
    },
    {
      category: "Fashion",
      category_id: "#",
      number_of_posts: "9"
    },
    {
      category: "Technology",
      category_id: "#",
      number_of_posts: "9"
    },
    {
      category: "Travel",
      category_id: "#",
      number_of_posts: "9"
    },
    {
      category: "Health",
      category_id: "#",
      number_of_posts: "9"
    }
  ]
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getCategories:getCategories},dispatch);
} 

export default connect(mapStateToProps,mapDispatchToProps)(WidgetCategory);