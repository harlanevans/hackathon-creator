import React, { Component } from 'react';

class CourseShow extends Component {

  render(){
    return(
      <>
        <h1>{this.props.location.state.name}</h1>
      </>
    )
  }
}

export default CourseShow;