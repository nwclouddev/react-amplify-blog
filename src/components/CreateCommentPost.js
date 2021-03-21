import { API, Auth, graphqlOperation } from 'aws-amplify';
import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { createComment } from '../graphql/mutations'

class CreateCommentPost extends Component {

  state = {
    commentOwnerId: "",
    commentOwnerUsername: "",
    content: ""
  }

  UNSAFE_componentWillMount = async () => {
    await Auth.currentUserInfo()
      .then(user => {
        this.setState({
          commentOwnerId: user.attributes.sub,
          commentOwnerUsername: user.username
        })
      })
  }

  handleChangeContent = event => this.setState({ content: event.target.value})

  handleAddComment = async event => {
    event.preventDefault()

    const input = {
      commentPostId: this.props.postId,
      commentOwnerId: this.state.commentOwnerId,
      commentOwnerUsername: this.state.commentOwnerUsername,
      content: this.state.content,
      createdAt: new Date().toISOString()
    }

    await API.graphql(graphqlOperation(createComment, { input }))

    this.setState({ content: ""}) // clear field
  }

  render() {
    return (
      <div>
        <Form>
          <Form.Group>
          <Form.Control 
            as="textarea"
            type="text"
            name="content"
            rows="3"
            cols="40"
            required
            placeholder="Add Your Comment..."
            value={this.state.content}
            onChange={this.handleChangeContent}          
            />
          </Form.Group>
          <Button className="col-2" variant="success" type="submit">
            Add Comment
          </Button>
        </Form>
      </div>
    )
  }

}
export default CreateCommentPost;