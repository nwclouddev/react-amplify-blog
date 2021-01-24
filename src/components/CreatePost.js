import React, { Component } from 'react'
import { API, graphqlOperation, Auth } from 'aws-amplify'
import { createPost } from '../graphql/mutations'
import { Form, Button, Container } from 'react-bootstrap'

class CreatePost extends Component {

  state = {
    postOwnerId: "",
    postOwnerUserName: "",
    postTitle: "",
    postBody: ""
  }

  componentDidMount = async() => {
    //Todo: TBA
    await Auth.currentUserInfo()
      .then(user => {
        this.setState({
          postOwnerId: user.attributes.sub,
          postOwnerUsername: user.username

        })
        // console.log("Curr: User: ", user.username);
        // console.log("Attr.Sub: User: ", user.attributes.sub);
      })
  }

  handleChangePost = event => this.setState({ 
    [event.target.name] : event.target.value
  })

  handleAddPost = async event => {
    event.preventDefault()

    const input = {
      postOwnerId: this.state.postOwnerId,
      postOwnerUsername: this.state.postOwnerUsername,
      postTitle: this.state.postTitle,
      postBody: this.state.postBody,
      createdAt: new Date().toISOString()
    }

    await API.graphql(graphqlOperation(createPost, { input }))

    this.setState({ postTitle: "", postBody: ""})

  }

  render() {
    return (
      <Container>
        <br/>
        <Form
          onSubmit={this.handleAddPost}>
          <Form.Group>
          <Form.Control
            name="postTitle"
            required
            size="lg" 
            type="text"
            placeholder="Title"
            value={this.state.postTitle}
            onChange={this.handleChangePost}
            />
          <br />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              type="text"
              name="postBody"
              rows="3"
              cols="40"
              required
              placeholder="New Blog Post"
              value={this.state.postBody}
              onChange={this.handleChangePost}
            />
          </Form.Group>
          <Button className="col-12" variant="success" type="submit">
            Submit
          </Button>
        </Form>
        <br /> 
      </Container>



    )
  }
}
export default CreatePost