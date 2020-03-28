/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-useless-constructor */
import React from "react";
import {HOME_POST_PATH, HOME_TAG_PATH, HOME_USER_PATH} from "../../constants";
import PropTypes from "prop-types";

class DisplayPost extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        const post = this.props;
        const refProp = post.refProp;
        const avatar = post.images && post.images[0] ? post.images[0].path : '';
        return (
            <div ref={refProp?refProp:""} key={post.post_id} className={'post ' + post.containerSize}>
                <a className="post-img" href={HOME_POST_PATH+post.post_id}>
                    <img src={avatar} alt />
                </a>
                <div className="post-body">
                    <div className="post-category">
                        {post.tags && post.tags.map((item) =>
                            <a href={HOME_TAG_PATH+item.tag_id}>{' ' + item.tag}</a>
                        )}
                    </div>
                    <h3 className={'post-title ' + this.props.titleSize}>
                        <a href={HOME_POST_PATH+post.post_id}>
                            {post.title}
                        </a>
                    </h3>
                    <ul className="post-meta">
                        {post.users &&
                            <li>
                                {post.users.map((item, i) =>
                                    <a href={HOME_USER_PATH+item.user_id}>{post.users.length === i + 1 ? item.full_name : item.full_name + ', '}</a>
                                )}
                            </li>
                        }
                        {post.published_at && <li>{post.published_at}</li>}
                    </ul>
                    <p style={post.haveSumary ? {} : { display: 'none' }}>
                        {post.haveSumary&&post.sumary&&post.sumary.substring(0,225)+' ...'}
                    </p>
                </div>
            </div>
        );
    }
}

DisplayPost.propsType = {
    containerSize: PropTypes.string,
    titleSize: PropTypes.string,
    haveSumary: PropTypes.bool,

    post_image: PropTypes.string,
    post_id: PropTypes.string,
    title: PropTypes.string,
    published_at: PropTypes.string,
    tags: PropTypes.array,
    users: PropTypes.array,
    sumary: PropTypes.string
}
DisplayPost.defaultProps = {
    containerSize: "",
    titleSize: "",
    post_id: "blog-post.html",
    title: "Postea senserit id eos, vivendo periculis ei qui",
    published_at: "31 April 2019",
    haveSumary: false,
    sumary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
    tags: [
        {
            tag_id: "default",
            tag: "xxx"
        },
        {
            tag_id: "default",
            tag: "yyy"
        }
    ],

    users: [
        {
            user_id: "author.html",
            full_name: "Vinh"
        },
        {
            user_id: "author.html",
            full_name: "Vinh1"
        }
    ],

    images: [
        {
            image_id: "1",
            path: "/img/no-image.jpg"
        },
        {
            image_id: "2",
            path: "/img/no-image.jpg"
        },
        {
            image_id: "2",
            path: "/img/no-image.jpg"
        }
    ]
}

export default DisplayPost;
