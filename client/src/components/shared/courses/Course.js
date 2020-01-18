import React, { Component } from "react";
import { Link } from "react-router-dom";
import CourseForm from "./CourseForm";
import { Card, Icon } from 'semantic-ui-react';

class Course extends Component {
  state = { editing: false };

  toggleEdit = () => this.setState({ editing: !this.state.editing });

  render() {
    const { id, name } = this.props;
    return (
      <Card>
        <Card.Content>
          {
            this.state.editing ?
              <CourseForm
                id={id}
                name={name}
                toggleEdit={this.toggleEdit}
                editing={this.state.editing}
                updateCourse={this.props.updateCourse}
              />
            :
              <>
                <Link
                  to={{
                    pathname: `/course/${id}`,
                    state: { id, name }
                  }}
                >
                  <h1>{name}</h1>
                </Link>
                <Icon
                  name='trash'
                  onClick={() => this.props.deleteCourse(id)}
                  link
                />
                <Icon
                  name='pencil'
                  onClick={this.toggleEdit}
                  link
                />            
              </>
          }
        </Card.Content>
      </Card>
    );
  }
}

export default Course;
