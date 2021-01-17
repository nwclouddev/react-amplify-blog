import { API, graphqlOperation } from 'aws-amplify'
import React, { Component } from 'react'

class CreatePost extends Component {
  state = {
    postOwnerId: "",
    postOwnerUserName: "",
    postTitle: "",
    postBody: ""
  }

  componentDidMount = async() => {
    //Todo: TBA

  }

  handleChangePost = event => this.setState({ 
    [event.target.name]: event.target.value
  })
  handleAddPost = async event => {
    event.preventDefault()

    const input = {
      postOwnerId: "ajJJ1298", //this.state.postOwnerId,
      postOwnerUserName: "Adam", //this.state.postOwnerUserName,
      postTitle: this.state.postTitle,
      postBody: this.state.postBody,
      createdAt: new Date().toISOString()

    }

    await API.graphql(graphqlOperation(CreatePost, { input }))

    this.setState({ postTitle: "", postBody: ""})
  }

  render() {
    return (
      <form className="add-post" onSubmit={this.handleAddPost}>
        <input style={{font: '19px'}}
          type="text" placeholder="Title"
          name="postTitle"
          required
          value={this.state.postTitle}
          onChange={this.handleChangePost}
        />
        <textarea 
          type="text"
          name="postBody"
          rows="3"
          required
          placeholder="New Blog Post"
          value={this.state.postBody}
          onChange={this.handleChangePost}
        />
        <input type="Submit"
        className="btn"
        style={{ fontSize: '19px'}}/>
      </form>
    )
  }
}

export default CreatePost