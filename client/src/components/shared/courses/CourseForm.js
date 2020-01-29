import React from 'react';
import { Form } from 'semantic-ui-react';
import { PrimaryBtn, DefaultBtn } from '../../styled-components/Shared';

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
      this.props.toggleAdd()
    }
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label="Course"
          placeholder="Add A Course"
          required
          value={this.state.name}
          onChange={this.handleChange}
        />
        <Form.Group>
          <PrimaryBtn>{this.props.id ? "Update Course" : "Create Course"}</PrimaryBtn>
          <DefaultBtn onClick={this.props.id ? this.props.toggleEdit : this.props.toggleAdd}>Cancel</DefaultBtn>
        </Form.Group>
      </Form>
    );
  }
}
export default CourseForm;