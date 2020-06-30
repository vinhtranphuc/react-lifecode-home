/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-lone-blocks */
import React from "react";
import { Link } from "react-router-dom";
import { Pagination, Input, Popover, Carousel } from "antd";
import { connect } from "react-redux"
import { bindActionCreators } from "redux";
import { getSearchPosts } from "../../actions/postsAction";

class SearchPost extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            postPrm: {
                page: '',
                records_no: 3,
                title: ''
            }
        }
        this.handleLoadPage = this.handleLoadPage.bind(this);
    }

    componentDidMount() {
        const { postPrm } = this.state;
        postPrm.page = 1;
        this.props.getSearchPosts(postPrm);
    }

    handleLoadPage(page) {
        const { postPrm } = this.state;
        postPrm.page = page;
        this.props.getSearchPosts(postPrm);
        this.setState({
            postPrm: postPrm
        })
    }

    more = (text, key) => {
        return <Popover key={key} style={{ width: 200 }} placement="topLeft" content={text}>
            <span className="more-text">...</span>
        </Popover>;
    }
    handleShowText = (text, maxSize, key) => {
        return text.length > maxSize ? <span>{[text.substring(0, maxSize - 3), this.more(text, key)]}</span> : text;
    }

    loadList(list) {
        let records = [];
        {
            list && list.forEach((e, i) => {
                let title = this.handleShowText(e.title, 50, i);
                let createAt = this.handleShowText(e.created_at, 20, i);
                const imagesPath = e.images && e.images.map(e1 => e1.path);
                records.push(
                    <Link href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="d-flex justify-content-between">
                                    <h4 className="mb-1">{title}</h4>
                                </div>
                                <small>{createAt}</small>
                            </div>
                            <div className="col-md-5">
                                <Carousel autoplay>
                                    {imagesPath.map(img => {
                                        return (
                                            <img src={img} alt className="img-fluid" />
                                        )
                                    })}
                                </Carousel>
                                {/* <img src="http://192.168.0.131:8888/api/image/view/post-avatar/20200617011718972_1.png" className="img-fluid" alt="things"></img> */}
                            </div>
                        </div>
                    </Link>
                )
            })
        }
        return records;
    }
    render() {
        const { list, page_of_post, total_posts } = this.props.posts;
        const { records_no } = this.state.postPrm;
        return (
            <div className="form-group" style={{ width: 400 }}>
                <Input className="mb-3"
                    placeholder="input search text"
                    onSearch={value => console.log(value)}
                />
                <div className="list-group">
                    {this.loadList(list)}
                    <Pagination className="mt-3" size="small" onChange={this.handleLoadPage} defaultPageSize={records_no} current={page_of_post} total={total_posts} />
                </div>
            </div>
        )
    }
}

const mapSateToProps = (state) => {
    return {
        posts: state.searchPosts
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getSearchPosts: getSearchPosts }, dispatch);
}

export default connect(mapSateToProps, mapDispatchToProps)(SearchPost);
