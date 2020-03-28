/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import PropTypes from "prop-types";
import Comment from "./Comment";

class PostComments extends React.Component {
  render() {
    return (
      <div className="section-row">
        <div className="section-title">
          <h3 className="title">{this.props.comments.length+" COMMENTS"}</h3>
        </div>
        <div className="post-comments">
          {this.props.comments.map((item)=>
            <Comment
                commentId={item.commentId}
                parentCmtId={item.parentCmtId}
                comment={item.comment}
                author={item.author}
                avatar={item.avatar}
                timeAgo={item.timeAgo}
                childComments={item.childComments}
            />
          )}
        </div>
      </div>
    );
  }
}

PostComments.propsType = {
  comments: PropTypes.array
}
PostComments.defaultProps = {
  comments: [
    {
      commentId: "1",
      parentCmtId: "0",
      comment:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      author:"Vinh",
      avatar:"/img/avatar-3.jpg",
      timeAgo: "5 min ago",
      childComments: [
        {
          commentId: "4",
          parentCmtId: "1",
          comment:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          author:"Vinh",
          avatar:"/img/avatar-1.jpg",
          timeAgo: "5 min ago",
          childComments: [
            {
              commentId: "4",
              parentCmtId: "1",
              comment:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
              author:"Vinh",
              avatar:"/img/avatar-1.jpg",
              timeAgo: "5 min ago",
              childComments: []
            }
          ]
        },
        {
          commentId: "5",
          parentCmtId: "1",
          comment:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          author:"Vinh",
          avatar:"/img/avatar-2.jpg",
          timeAgo: "5 min ago",
          childComments: []
        }
      ]
    },
    {
      commentId: "2",
      parentCmtId: "0",
      comment:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      author:"Vinh",
      avatar:"/img/avatar-2.jpg",
      timeAgo: "5 min ago",
      childComments: []
    },
    {
      commentId: "3",
      parentCmtId: "0",
      comment:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      author:"Vinh",
      avatar:"/img/avatar-1.jpg",
      timeAgo: "5 min ago",
      childComments: []
    }
  ]
}

export default PostComments;
