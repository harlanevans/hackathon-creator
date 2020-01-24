import React from 'react';
import '../css/custom.css';
import { Input } from 'semantic-ui-react';
import { Sections, StudentHacks, StudentEvents } from '../styled-components/Shared';


class StudentHome extends React.Component {
  render() {
    return (
      <div>
        <div class="image-header home">
            <h1>DPL Hackathon</h1>
            <div class="img-overlay"></div>
        </div> 
        <Sections>
          <StudentHacks>
            <StudentEvents>
              <h2>Full Time</h2>
              <div class="img-overlay"></div>
            </StudentEvents>

            <StudentEvents>
              <h2>Part Time</h2>
              <div class="img-overlay"></div>
            </StudentEvents>
          </StudentHacks>
        </Sections>

        <Sections>
          <h3>Submission URL</h3>
          {/* make it's own component */}
          <Input fluid action='Submit' placeholder='https://...' />
        </Sections>
        
      
      </div>
    );
  }
}


export default StudentHome;