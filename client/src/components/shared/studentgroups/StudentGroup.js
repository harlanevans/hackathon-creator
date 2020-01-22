import React, {Component} from 'react';
import StudentGroupForm from './StudentGroupForm';
import axios from 'axios';

class StudentGroup extends Component {

  state = {
    studentGroups: []
  }

  componentDidMount() {
    axios.get(`/api/groups/${this.props.group_id}/student_groups`)
    .then( res => {
      this.setState({ studentGroups: res.data })
    })
    .catch( err => {
      console.log(err)
    })
  }

  addStudentGroup = (studentGroup) => {
    axios.post(`/api/groups/${this.props.group_id}/student_groups`, studentGroup)
    .then( res => {
      this.setState({ studentGroups: [...this.state.studentGroups, res.data] })
    })
    .catch( err => {
      console.log(err)
    })
  }

  render(){
    return(
      <>
      <StudentGroupForm group_id={this.props.group_id} course_id={this.props.course_id} addStudentGroup={this.addStudentGroup}/>
      </>
    )
  }
}

export default StudentGroup