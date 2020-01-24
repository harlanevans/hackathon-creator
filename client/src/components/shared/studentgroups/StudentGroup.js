import React, {Component} from 'react';
import StudentGroupForm from './StudentGroupForm';
import axios from 'axios';

class StudentGroup extends Component {

  state = {
    studentGroups: [],
    students: [],
  }

  componentDidMount() {
    axios.get(`/api/groups/${this.props.group_id}/student_groups`)
    .then( res => {
      this.setState({ studentGroups: res.data })
    })
    axios.get(`/api/courses/${this.props.course_id}/students`)
    .then( res => {
      this.setState({ students: res.data })
      this.getStudents()
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

  getStudents = () => {
    let newGroup = []
    this.state.studentGroups.map( sg =>
      this.state.students.map( s =>
        {
          if (sg.student_id===s.id) {
            newGroup.push({ ...sg, name: s.name, skill: s.skill_lvl, effort: s.effort_lvl })
          }
      }       
      ))
      this.setState({ studentGroups: newGroup})
  }

  render(){
    return(
      <div className='student-group'>
      <StudentGroupForm group_id={this.props.group_id} course_id={this.props.course_id} addStudentGroup={this.addStudentGroup}/>
     <div className='student-groups-students'>
       <ul>
       {
        this.state.studentGroups.map(s => 
      
          <li key={s.student_id}>
            {s.name}
          </li>   
        )
      }
      </ul>
      </div>
      </div>
    )
  }
} 
export default StudentGroup