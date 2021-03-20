import React, {Component } from 'react';
import { FaTwitter } from 'react-icons/fa'

class PageFooter extends Component{
  render() {
    return (
      <>
        <hr/>
        <small>
          Copyright ©2021 Adam Johnson ;)<br/>
          <a href="https://twitter.com/adamj_json"><FaTwitter
            style={{color:"cornflowerblue"}}
          /> Follow me on Twitter</a>
        </small>
      </>
    )
  }
}

export default PageFooter