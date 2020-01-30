import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import CourseForm from "./CourseForm";
import { Card, Dropdown } from 'semantic-ui-react';
import moment from 'moment';

class Course extends Component {
  state = { editing: false };

  toggleEdit = () => this.setState({ editing: !this.state.editing });

  render() {
    const { id, name, created_at } = this.props;
    return (
      <div className='courses'>
        <div className="course-item">
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
                  <h2 className="course-name">{name}</h2>
                </NavLink>
                <div className="edit-buttons">
                  <Dropdown icon='ellipsis vertical'>
                    <Dropdown.Menu>
                      <Dropdown.Item icon='pencil' text='Edit' onClick={this.toggleEdit}/>
                      <Dropdown.Item icon='trash' text='Delete' onClick={() => this.props.deleteCourse(id)}/>
                    </Dropdown.Menu>
                  </Dropdown>   
                </div>
              <h4>Created at: {moment(created_at).format("LLL")}</h4>        
              </>
          }
        </div>
      </div>
    );
  }
}

export default Course;
