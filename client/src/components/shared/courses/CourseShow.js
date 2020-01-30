import React, { Component } from 'react';
import Students from '../students/Students';
import Events from '../events/Events';
import { Container } from 'semantic-ui-react';
import { Sections } from '../../styled-components/Shared';


class CourseShow extends Component {

  render(){
    return (
      <>
        <Container fluid>
          <div className="image-header admin">
            <h1>{this.props.location.state.name}</h1>
              <div className="img-overlay"></div>
          </div>
        </Container>
        
        <Sections><Students course_id={this.props.location.state.id} /></Sections>
        <Events course_id={this.props.location.state.id} updateEvent={this.updateEvent}/>
      </>
    );
  }
}

export default CourseShow;