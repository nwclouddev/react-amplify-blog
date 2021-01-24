import React, { Component } from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { FaUser, FaBeer } from 'react-icons/fa'
import { Auth } from 'aws-amplify'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

class TitleNavBar extends Component{

  state = {
    ownerUsername: "user"
  }

  componentDidMount = async () => {
    this.getUserInfo()

    await Auth.currentUserInfo()
      .then(user => {
        this.setState(
          {
            ownerId: user.attributes.sub,
            ownerUsername: user.username,
          }
        )
      })
    }
    getUserInfo = async () => {
      const result = await Auth.currentUserInfo()
  
      this.setState({ posts: result.ownerUsername })
      // console.log("All Posts", JSON.stringify(result.data.listPosts.items))
      // console.log("All Posts", result.data.listPosts.items)
    }

  render () {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">
          <FaBeer 
            style={{color: "gold"}}
          />
          {" "}
          Random Thoughts</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <NavDropdown
              className="ml-auto" 
              title={
                  <div style={{ display: 'inline-block' }}> 
                    <FaUser /> {this.state.ownerUsername}
                  </div>
                }
              id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4"><AmplifySignOut/></NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
export default TitleNavBar