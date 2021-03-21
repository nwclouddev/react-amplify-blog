import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import DisplayPosts from './components/DisplayPosts';
import CreatePost from './components/CreatePost';
import { withAuthenticator } from '@aws-amplify/ui-react';
import "@aws-amplify/ui/dist/style.css";
import TitleNavBar from './components/TitleNavBar';
import PageFooter from './components/PageFooter';
import { Container, Card } from 'react-bootstrap';

function App() {
  return (

    <div className="App">
      <span>
        <TitleNavBar />
        <br />
        <Container className="app-body">
          <Card className="add-post">
            <CreatePost />
          </Card>
          <DisplayPosts />
          <PageFooter/>
        </Container>
      </span>
    </div>
  );
}

export default withAuthenticator(App, 
  { includeGreetings: true });