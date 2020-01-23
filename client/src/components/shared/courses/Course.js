import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import CourseForm from "./CourseForm";
import { Card, Icon } from 'semantic-ui-react';
import { PrimaryLink } from '../../styled-components/Shared';

class Course extends Component {
  state = { editing: false };

  toggleEdit = () => this.setState({ editing: !this.state.editing });

  render() {
    const { id, name } = this.props;
    return (
      <Card className='courses'>
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
                <NavLink style={{color: '#6E54A3',}}
                  to={{
                    pathname: `/course/${id}`,
                    state: { id, name }
                  }}
                >
                  <h1>{name}</h1>
                </NavLink>
                <Icon
                  name='trash'
                  onClick={() => this.props.deleteCourse(id)}
                  link
                />
                <Icon
                  name='pencil'
                  onClick={this.toggleEdit}
                  link
                  color='orange'
                />            
              </>
          }
        </Card.Content>
      </Card>
    );
  }
}

export default Course;
