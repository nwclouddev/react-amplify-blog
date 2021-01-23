import React from 'react';
import './App.css';
import DisplayPosts from './components/DisplayPosts';
import CreatePost from './components/CreatePost';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import "@aws-amplify/ui/dist/style.css";
function App() {
  return (

    <div className="App">
      <span class="logout-ui">
        <AmplifySignOut/>
      </span>
      <span>
        <CreatePost />
        <DisplayPosts />
      </span>
    </div>
  );
}

export default withAuthenticator(App, 
  { includeGreetings: true });
