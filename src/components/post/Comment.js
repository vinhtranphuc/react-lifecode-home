/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";

class Comment extends React.Component {

    render() {
        return (
            <div className={this.props.parentCmtId=="0"?"media":"media media-author"}>
                <div className="media-left">
                    <img className="media-object" src={this.props.avatar} alt />
                </div>
                <div className="media-body">
                    <div className="media-heading">
                        <h4>{this.props.author}</h4>
                        <span className="time">{this.props.timeAgo}</span>
                    </div>
                    <p>
                        {this.props.comment}
                    </p>
                    <a href="#" className="reply">
                        Reply
                  </a>
                  {
                    this.props.parentCmtId=="0" &&
                    this.props.childComments.map((item)=>
                        <Comment
                            commentId={item.commentId}
                            parentCmtId={item.parentCmtId}
                            comment={item.comment}
                            author={item.author}
                            timeAgo={item.timeAgo}
                            childComments={item.childComments}
                        />
                    )
                  }
                </div>
            </div>
        );
    }
}

Comment.propsType = {
    commentId: PropTypes.string,
    parentCmtId: PropTypes.string,
    comment: PropTypes.string,
    author: PropTypes.string,
    timeAgo: PropTypes.string,
    childComments: PropTypes.array
}

// Comment.defaultProps = {
//     commentId: "3",
//     parentCmtId: "0",
//     comment:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//     author:"Vinh",
//     avatar:"/img/avatar-1.jpg",
//     timeAgo: "5 min ago",
//     childComments: []
// }

export default Comment;