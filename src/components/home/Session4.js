import React from "react";
import { connect } from "react-redux"
import { bindActionCreators } from "redux";
import HotTypePost from "./HotTypePost";
import DisplayPost from "../fragements/DisplayPost";
import { getPostsByCategory1 } from "../../actions/postsAction";
import { getPostsByCategory2 } from "../../actions/postsAction";
import { getPostsByCategory3 } from "../../actions/postsAction";

const RECORDS_NO = 4;
const CONTAINER_STYLE = {
  "margin-top": '-20px',
};
const LIST_STYLE = {
  "height": '420px',
};
class Session4 extends React.Component {
  constructor(props) {
    super(props);

    this.onPreviousList1 = this.onPreviousList1.bind(this);
    this.onNextList1 = this.onNextList1.bind(this);
    this.onPreviousList2 = this.onPreviousList2.bind(this);
    this.onNextList2 = this.onNextList2.bind(this);
    this.onPreviousList3 = this.onPreviousList3.bind(this);
    this.onNextList3 = this.onNextList3.bind(this);
  }
  componentWillMount() {
    let params = {
      records_no: RECORDS_NO,
      page: 1
    }
    this.props.getPostsByCategory1(params);
    this.props.getPostsByCategory2(params);
    this.props.getPostsByCategory3(params);
  }
  onPreviousList1() {
    let page1 = this.props.list1CurrentPage;
    let pageTarget = parseInt(page1, 10) - 1;
    let params = {
      records_no: RECORDS_NO,
      page: pageTarget
    }
    this.props.getPostsByCategory1(params);
  }
  onNextList1() {
    let page1 = this.props.list1CurrentPage;
    let pageTarget = parseInt(page1, 10) + 1;
    let params = {
      records_no: RECORDS_NO,
      page: pageTarget
    }
    this.props.getPostsByCategory1(params);
  }
  onPreviousList2() {
    let page2 = this.props.list2CurrentPage;
    let pageTarget = parseInt(page2, 10) - 1;
    let params = {
      records_no: RECORDS_NO,
      page: pageTarget
    }
    this.props.getPostsByCategory2(params);
  }
  onNextList2() {
    let page2 = this.props.list2CurrentPage;
    let pageTarget = parseInt(page2, 10) + 1;
    let params = {
      records_no: RECORDS_NO,
      page: pageTarget
    }
    this.props.getPostsByCategory2(params);
  }
  onPreviousList3() {
    let page3 = this.props.list3CurrentPage;
    let pageTarget = parseInt(page3, 10) - 1;
    let params = {
      records_no: RECORDS_NO,
      page: pageTarget
    }
    this.props.getPostsByCategory3(params);
  }
  onNextList3() {
    let page3 = this.props.list3CurrentPage;
    let pageTarget = parseInt(page3, 10) + 1;
    let params = {
      records_no: RECORDS_NO,
      page: pageTarget
    }
    this.props.getPostsByCategory3(params);
  }

  render() {
    const posts1 = this.props.postsByCategory1;
    const posts2 = this.props.postsByCategory2;
    const posts3 = this.props.postsByCategory3;

    const lastPage1 = this.props.list1LastPage;
    const lastPage2 = this.props.list2LastPage;
    const lastPage3 = this.props.list3LastPage;
    return (
      <div id="session-4" className="section">
        <div className="container">
          <div className="row">
            {posts1 &&
              <HotTypePost categoryName="Technology"
                post={posts1[0]}>
              </HotTypePost>}
            {posts2 &&
              <HotTypePost categoryName="About code"
                post={posts2[0]}>
              </HotTypePost>}
            {posts3 &&
              <HotTypePost categoryName="Photography"
                post={posts3[0]}>
              </HotTypePost>}
          </div>
          <div className="row" style={CONTAINER_STYLE}>
            <div className="col-md-4">
              <div className="row" style={LIST_STYLE}>
                {posts1.map((e, index) => (
                  index !== 0 && <LoadPost post={e}></LoadPost>
                ))}
              </div>
              <div className="row">
                <div className={lastPage1 === 1 ? "slide disable" : "slide"} page={this.props.list1CurrentPage}>
                  <span className="previous" onClick={this.onPreviousList1}>&#8249;</span>
                  <span className="next" onClick={this.onNextList1}>&#8250;</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="row" style={LIST_STYLE}>
                {posts2 && posts2.map((e, index) => (
                  index !== 0 && <LoadPost post={e}></LoadPost>
                ))}
              </div>
              <div className="row">
                <div className={lastPage2 === 1 ? "slide disable" : "slide"} page={this.props.list2CurrentPage}>
                  <span className="previous" onClick={this.onPreviousList2}>&#8249;</span>
                  <span className="next" onClick={this.onNextList2}>&#8250;</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="row" style={LIST_STYLE}>
                {posts3 && posts3.map((e, index) => (
                  index !== 0 && <LoadPost post={e}></LoadPost>
                ))}
              </div>
              <div className="row">
                <div className={lastPage3 === 1 ? "slide disable" : "slide"} page={this.props.list3CurrentPage}>
                  <span className="previous" onClick={this.onPreviousList3}>&#8249;</span>
                  <span className="next" onClick={this.onNextList3}>&#8250;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function LoadPost(props) {
  const post = props.post;
  return (
    post ? <DisplayPost
      containerSize="post-widget"
      images={post.images}
      post_id={post.post_id}
      title={post.title}
      published_at={post.published_at}
      tags={post.tags}
      users={post.users}
      sumary={post.sumary} />:<></>
  );
}

const mapStateToProps = (state) => {
  const postsByCategory1 = state.postsByCategory1_4R.list ? [...state.postsByCategory1_4R.list] : [];
  const list1CurrentPage = state.postsByCategory1_4R.page_of_post ? state.postsByCategory1_4R.page_of_post : 1;
  const list1LastPage = state.postsByCategory1_4R.last_page ? state.postsByCategory1_4R.last_page : 1;

  const postsByCategory2 = state.postsByCategory2_4R.list ? [...state.postsByCategory2_4R.list] : [];
  const list2CurrentPage = state.postsByCategory2_4R.page_of_post ? state.postsByCategory2_4R.page_of_post : 1;
  const list2LastPage = state.postsByCategory2_4R.last_page ? state.postsByCategory2_4R.last_page : 1;

  const postsByCategory3 = state.postsByCategory3_4R.list ? [...state.postsByCategory3_4R.list] : [];
  const list3CurrentPage = state.postsByCategory3_4R.page_of_post ? state.postsByCategory3_4R.page_of_post : 1;
  const list3LastPage = state.postsByCategory3_4R.last_page ? state.postsByCategory3_4R.last_page : 1;
  return {
    list1CurrentPage: list1CurrentPage,
    list2CurrentPage: list2CurrentPage,
    list3CurrentPage: list3CurrentPage,
    postsByCategory1: postsByCategory1,
    postsByCategory2: postsByCategory2,
    postsByCategory3: postsByCategory3,
    list1LastPage: list1LastPage,
    list2LastPage: list2LastPage,
    list3LastPage: list3LastPage
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getPostsByCategory1: getPostsByCategory1,
    getPostsByCategory2: getPostsByCategory2,
    getPostsByCategory3: getPostsByCategory3,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Session4);
