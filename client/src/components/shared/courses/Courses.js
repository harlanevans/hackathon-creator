import React, { Component } from 'react';
import axios from 'axios';
import CourseForm from './CourseForm';
import { Button, } from 'semantic-ui-react';

class Courses extends Component {

  state = {
    courses: [],
    adding: false,
  }

  componentDidMount() {
    axios.get('/api/courses')
    .then( res => {
      this.setState({ course: res.data })
    })
    .catch( err => {
      console.log(err)
    })
  }

  toggleAdd = () => this.setState({ adding: !this.state.adding })


  addCourse = (course) => {
    axios.post('api/course', course )
    .then( res => {
        const { course } = this.state;
        this.setState({ course: [...course, res.data ]})
    })
    .catch( err => {
      console.log(err)
  }
    )
    }

  updateCourse = (id, course) => {
    axios.put(`/api/courses${id}`, course)
    .then( res => {
      const courses = this.state.course.map( c => {
        if (c.id === id) {
          return res.data
        }
        return c
      })
      this.setState({ courses })
    })
  }

  deleteCourse = (id) => {
    axios.delete('/api/courses/${id')
    .then( res => {
      const { courses } = this.state
      this.setState({ courses: courses.filter( t => t.id !== id)})
    })
    .catch(err => {
      console.log(err)
    })
  }


  render() {
    const { adding } = this.state
    return(
      <div className='course-page'>
          <h1 className='course-header'>words go here</h1>
          <h4>Click the button below to start a new course!</h4>
          <div className='add-course'>
              {
              adding ?
              <div className='adding-course'><CourseForm addCourse={this.addCourse} toggleAdd={this.toggleAdd} /></div>
              :
              <Button className='add-course-button' color='teal' onClick={this.toggleAdd}>New Course</Button>
              }
          </div>
          <div className='new-courses'>
              <CourseForm courses={this.state.course} updateCourse={this.updateCourse} deleteCourse={this.deleteCourse}/>
          </div>
    </div>
      
    
  )}
  }
export default Courses; 