import React from 'react';
import '../css/custom.css';
import { Input } from 'semantic-ui-react'


class StudentHome extends React.Component {
  render() {
    return (
      <div>
        
        <div class="image-header home">
            <h1>DPL Hackathon</h1>
            <div class="img-overlay"></div>
        </div>
        {/*  */}
        {/* <Timer /> */}
        <div class="fake-timer">
            <h1>8:55 <span>PM</span></h1>
        </div>

        <div>
          <h3>Submission URL</h3>
          <Input fluid action='Submit' placeholder='https://...' />
        </div>
      
      </div>
    );
  }
}


export default StudentHome;