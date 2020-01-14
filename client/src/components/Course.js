import React from 'react';
import axios from 'axios';
import Course from 'Course';

class Course extends React.Component {
  state = { name: '' };
  handleChange = (e) => {
    this.setState({ name: e.target.value });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addCourse(this.state.name);
    this.setState({ '' })
  }
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label="Courses"
          placeholder="Add A Course"
          required
          value={this.state.name}
          onChange={this.handleChange}
        />
      </Form>
    )
  }
}
export default Course;