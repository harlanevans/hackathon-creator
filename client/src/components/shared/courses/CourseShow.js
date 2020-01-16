import React, { Component } from 'react';
import Students from '../students/Students';
import Events from '../events/Events';

class CourseShow extends Component {

  render(){
    return (
      <>
        <h1>{this.props.location.state.name}</h1>
        <Students course_id={this.props.location.state.id} />
        <Events course_id={this.props.location.state.id} />
      </>
    );
  }
}

export default CourseShow;