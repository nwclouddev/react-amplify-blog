
import React, { Component } from 'react'

class CommentPost extends Component {
  render() {
    const { content, commentOwnerUsername, createdAt} = this.props.commentData
      return (
        <div className="comment">
          <hr/>
          <p>
            { content }
            <br />
          <span style={{ fontStyle: "italic", color: "cornflowerblue"}}>
            <small>
              {"Commment by: " } { commentOwnerUsername}
              {" on "}
              <time style={{ fontStyle: "italic"}}>
                {" "}
                { new Date(createdAt).toDateString()}
              </time>
            </small>
          </span>
          </p>
        </div>
      )
  }
}
export default CommentPost