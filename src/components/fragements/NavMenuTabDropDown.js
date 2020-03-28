/* eslint-disable default-case */
import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux"
import { bindActionCreators } from "redux";
import Content from "./NavMenuTabContent";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import { getPostsByCategory1 } from "../../actions/postsAction";
import { getPostsByCategory2 } from "../../actions/postsAction";
import { getPostsByCategory3 } from "../../actions/postsAction";
import { getPostsByCategory4 } from "../../actions/postsAction";

const SLIDE_STYLE = {
    "margin-top": '20px',
};
const RECORDS_NO = 3;
const NavMenuTabDropDown = (props) => {
    const mounted = useRef();
    useEffect(() => {
        if (!mounted.current) {
            mounted.current = true;
            let params = {
                records_no: RECORDS_NO,
                page: 1
            }
            props.getPostsByCategory1(params);
            props.getPostsByCategory2(params);
            props.getPostsByCategory3(params);
            props.getPostsByCategory4(params);
        } else {
            // component did update here
        }
    });

    let onPreviousList1 = () => {
        let page1 = props.list1CurrentPage;
        let pageTarget = parseInt(page1, 10) - 1;
        let params = {
            records_no: RECORDS_NO,
            page: pageTarget
        }
        props.getPostsByCategory1(params);
    }
    let onNextList1 = () => {
        let page1 = props.list1CurrentPage;
        let pageTarget = parseInt(page1, 10) + 1;
        let params = {
            records_no: RECORDS_NO,
            page: pageTarget
        }
        props.getPostsByCategory1(params);
    }

    let onPreviousList2 = () => {
        let page2 = props.list2CurrentPage;
        let pageTarget = parseInt(page2, 10) - 1;
        let params = {
            records_no: RECORDS_NO,
            page: pageTarget
        }
        props.getPostsByCategory2(params);
    }
    let onNextList2 = () => {
        let page2 = props.list2CurrentPage;
        let pageTarget = parseInt(page2, 10) + 1;
        let params = {
            records_no: RECORDS_NO,
            page: pageTarget
        }
        props.getPostsByCategory2(params);
    }
    let onPreviousList3 = () => {
        let page3 = props.list3CurrentPage;
        let pageTarget = parseInt(page3, 10) - 1;
        let params = {
            records_no: RECORDS_NO,
            page: pageTarget
        }
        props.getPostsByCategory3(params);
    }
    let onNextList3 = () => {
        let page3 = props.list3CurrentPage;
        let pageTarget = parseInt(page3, 10) + 1;
        let params = {
            records_no: RECORDS_NO,
            page: pageTarget
        }
        props.getPostsByCategory3(params);
    }
    let onPreviousList4 = () => {
        let page4 = props.list4CurrentPage;
        let pageTarget = parseInt(page4, 10) - 1;
        let params = {
            records_no: RECORDS_NO,
            page: pageTarget
        }
        props.getPostsByCategory4(params);
    }
    let onNextList4 = () => {
        let page4 = props.list3CurrentPage;
        let pageTarget = parseInt(page4, 10) + 1;
        let params = {
            records_no: RECORDS_NO,
            page: pageTarget
        }
        props.getPostsByCategory4(params);
    }

    const loadContent = (typeId) => {
        let posts = [];
        switch (typeId) {
            case "4":
                posts = props.postsByCategory4;
                break;
            case "1":
                posts = props.postsByCategory1;
                break;
            case "2":
                posts = props.postsByCategory2;
                break;
            case "3":
                posts = props.postsByCategory3;
                break;
        }
        return (
            <Content
                typeId={typeId}
                posts={posts}>
            </Content>
        )
    }

    const paginator = (typeId) => {
        switch (typeId) {
            case "4":
                return (
                    <div style={SLIDE_STYLE} className={props.list4LastPage === 1 ? "slide disable" : "slide"} page={props.list4CurrentPage}>
                        <span className="previous" onClick={onPreviousList4}>&#8249;</span>
                        <span className="next" onClick={onNextList4}>&#8250;</span>
                    </div>
                )
            case "1":
                return (
                    <div style={SLIDE_STYLE} className={props.list1LastPage === 1 ? "slide disable" : "slide"} page={props.list1CurrentPage}>
                        <span className="previous" onClick={onPreviousList1}>&#8249;</span>
                        <span className="next" onClick={onNextList1}>&#8250;</span>
                    </div>
                )
            case "2":
                return (
                    <div style={SLIDE_STYLE} className={props.list2LastPage === 1 ? "slide disable" : "slide"} page={props.list2CurrentPage}>
                        <span className="previous" onClick={onPreviousList2}>&#8249;</span>
                        <span className="next" onClick={onNextList2}>&#8250;</span>
                    </div>
                )
            case "3":
                return (
                    <div style={SLIDE_STYLE} className={props.list3LastPage === 1 ? "slide disable" : "slide"} page={props.list3CurrentPage}>
                        <span className="previous" onClick={onPreviousList3}>&#8249;</span>
                        <span className="next" onClick={onNextList3}>&#8250;</span>
                    </div>
                )
        }
    }

    return (
        <Tab.Container defaultActiveKey={props.types[0].typeId}>
            <div className="dropdown tab-dropdown">
                <div className="row">
                    <div className="col-md-2">
                        <Nav className="flex-column tab-nav">
                            <ul className="tab-nav">
                                <Nav variant="pills" className="flex-column">
                                    {
                                        props.types.map((item) =>
                                            <Nav.Item>
                                                <Nav.Link eventKey={item.typeId}>{item.typeName}</Nav.Link>
                                            </Nav.Item>
                                        )
                                    }
                                </Nav>
                            </ul>
                        </Nav>
                    </div>
                    <div className="col-md-10">
                        <Tab.Content className="dropdown-body tab-content">
                            {
                                props.types.map((item) =>
                                    <Tab.Pane eventKey={item.typeId}>
                                        {loadContent(item.typeId)}
                                        {paginator(item.typeId)}
                                    </Tab.Pane>
                                )
                            }
                        </Tab.Content>
                    </div>
                </div>
            </div>
        </Tab.Container>
    );
}

NavMenuTabDropDown.propsType = {
    types: PropTypes.object
}

NavMenuTabDropDown.defaultProps = {
    types: [
        {
            typeName: "Life talk",
            typeId: "4"
        },
        {
            typeName: "Code talk",
            typeId: "1"
        },
        {
            typeName: "Photographs",
            typeId: "2"
        },
        {
            typeName: "Travel",
            typeId: "3"
        }
    ]
}
const mapStateToProps = (state) => {
    const postsByCategory1 = state.postsByCategory1_3R.list ? [...state.postsByCategory1_3R.list] : [];
    const list1CurrentPage = state.postsByCategory1_3R.page_of_post ? state.postsByCategory1_3R.page_of_post : 1;
    const list1LastPage = state.postsByCategory1_3R.last_page ? state.postsByCategory1_3R.last_page : 1;

    const postsByCategory2 = state.postsByCategory2_3R.list ? [...state.postsByCategory2_3R.list] : [];
    const list2CurrentPage = state.postsByCategory2_3R.page_of_post ? state.postsByCategory2_3R.page_of_post : 1;
    const list2LastPage = state.postsByCategory2_3R.last_page ? state.postsByCategory2_3R.last_page : 1;

    const postsByCategory3 = state.postsByCategory3_3R.list ? [...state.postsByCategory3_3R.list] : [];
    const list3CurrentPage = state.postsByCategory3_3R.page_of_post ? state.postsByCategory3_3R.page_of_post : 1;
    const list3LastPage = state.postsByCategory3_3R.last_page ? state.postsByCategory3_3R.last_page : 1;

    const postsByCategory4 = state.postsByCategory4_3R.list ? [...state.postsByCategory4_3R.list] : [];
    const list4CurrentPage = state.postsByCategory4_3R.page_of_post ? state.postsByCategory4_3R.page_of_post : 1;
    const list4LastPage = state.postsByCategory4_3R.last_page ? state.postsByCategory4_3R.last_page : 1;

    return {
        list1CurrentPage: list1CurrentPage,
        list2CurrentPage: list2CurrentPage,
        list3CurrentPage: list3CurrentPage,
        list4CurrentPage: list4CurrentPage,
        postsByCategory1: postsByCategory1,
        postsByCategory2: postsByCategory2,
        postsByCategory3: postsByCategory3,
        postsByCategory4: postsByCategory4,
        list1LastPage: list1LastPage,
        list2LastPage: list2LastPage,
        list3LastPage: list3LastPage,
        list4LastPage: list4LastPage
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getPostsByCategory1: getPostsByCategory1,
        getPostsByCategory2: getPostsByCategory2,
        getPostsByCategory3: getPostsByCategory3,
        getPostsByCategory4: getPostsByCategory4
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavMenuTabDropDown);
