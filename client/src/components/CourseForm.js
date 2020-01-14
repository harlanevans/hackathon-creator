import React from 'react';
import axios from 'axios';
import Courses from 'Courses';
import CourseForm from 'CourseForm';

class Courses extends React.Component {
  state = { name: '' };
  handleChange = (e) => {
    const { name} = e.target
    this.setState({ [name] })
  }
  addCourse = (course) => {
    axios.post('api/course', course )
    .then( res => {
        const { course } - this.state
        this.setState({ course: [...course, res.data ]})
    })
    .catch( err => {
      console.log(err)
  }
  updateCourse = (id, course) => {
    axios.put('/api/course${id', course)
    .then( res => {
      const course = this.state.course.map( t => {
        if (t.id === id) {
          return res.data
        }
        return t
      })
      this.setState({ course })
    })
  }
  deleteCourse = (id) => {
    axios.delete('/api/course/${id')
    then.( res => {
      const { course } = this.state
      this.setState({ course: course.filter( t => t.id !== id)})
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
          <div className='new-course'>
              <CoursesList course={this.state.course} updateCourse={this.updateCourses} deleteCourses={this.deleteCourses}/>
          </div>
     </div>
  )}
  }
export default CourseForm;