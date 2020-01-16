import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CourseForm from "./CourseForm";

class Course extends React.Component {
  state = { editing: false };

  toggleEdit = () => this.setState({ editing: !this.state.editing });

  render() {
    const { id, name } = this.props;
    return (
      <div
        style={{
          padding: "1em 0em",
          border: "solid 1px grey",
          borderRadius: "3px",
          margin: "2em 0em"
        }}
      >
        <Link
          to={{
            pathname: `/course/${id}`,
            state: { id, name }
          }}
        >
          <h1>Course Name: {name}</h1>
        </Link>
        <button onClick={() => this.props.deleteCourse(id)}>Delete </button>
        <button onClick={() => this.toggleEdit()}>
          {this.state.editing ? "Cancel" : "Edit"}
        </button>
        {this.state.editing ? (
          <CourseForm
            id={id}
            name={name}
            toggleEdit={this.toggleEdit}
            editing={this.state.editing}
            updateCourse={this.props.updateCourse}
          />
        ) : (
          <></>
        )}
      </div>
    );
  }
}

export default Course;
