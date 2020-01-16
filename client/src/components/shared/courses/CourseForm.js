
import React from 'react';
import axios from 'axios';
import Courses from './Courses';
import {Form} from 'semantic-ui-react';

class CourseForm extends React.Component {
  state = { name: '' };

  componentDidMount() {
    if (this.props.id) {
      this.setState({name: this.props.name})
    }
  }
  
  handleChange = (e) => {
    this.setState({ name: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.id) {
      this.props.updateCourse(this.props.id, this.state)
      this.props.toggleEdit()
    } else {
      this.props.addCourse(this.state);
      this.setState({ name: '' })
    }
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
        <Form.Button>
          {this.props.id ? "Update Course" : "Create Course"}
        </Form.Button>
      </Form>
    );
  }
}
export default CourseForm;