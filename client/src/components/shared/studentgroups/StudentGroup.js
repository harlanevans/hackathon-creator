import React, {Component} from 'react';
import StudentGroupForm from './StudentGroupForm';
import axios from 'axios';
import { Icon, Table, TableRow } from 'semantic-ui-react';

class StudentGroup extends Component {

  state = {
    studentGroups: [],
    students: [],
    average: 0
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
      this.getStudents()
    })
    .catch( err => {
      console.log(err)
    })
  }

  deleteStudentGroup = (id) => {
    axios.delete(`/api/groups/${this.props.group_id}/student_groups/${id}`)
    .then( res => {
      const { studentGroups } = this.state
      this.setState({studentGroups: studentGroups.filter( s => s.id !== id), average: 0})
      this.getStudents()
    })
    .catch( err => {
      console.log(err)
    })
  }

  getStudents() {
    let newGroup = []
    let total = 0
    this.state.studentGroups.map( sg => {
      this.state.students.map( s =>
        {
          if (sg.student_id===s.id) {
            newGroup.push({ ...sg, name: s.name, skill: s.skill_lvl, effort: s.effort_lvl })
            total += (s.skill_lvl + s.effort_lvl)
            this.setState({ average: total/this.state.studentGroups.length })
          }
      })
      return
    })
      this.setState({ studentGroups: newGroup })
  }


  render(){
    return(
      <>
        <StudentGroupForm group_id={this.props.group_id} course_id={this.props.course_id} addStudentGroup={this.addStudentGroup}/>
        <Table structured>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Effort</Table.HeaderCell>
              <Table.HeaderCell>Skill</Table.HeaderCell>
              <Table.HeaderCell>Delete</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
          {
            this.state.studentGroups.map(s => 
              <Table.Row key={s.id}>
                <Table.Cell>{s.name}</Table.Cell>
                <Table.Cell>{s.effort}</Table.Cell>
                <Table.Cell>{s.skill}</Table.Cell>
                <Table.Cell><Icon name='trash' onClick={() => this.deleteStudentGroup(s.id)} link/></Table.Cell>
              </Table.Row>
            )
          }
          </Table.Body>
          <Table.Header>
            <TableRow>
              <Table.HeaderCell colSpan='3'>Total Group Average:</Table.HeaderCell>
              <Table.HeaderCell>{this.state.average.toFixed(2)}</Table.HeaderCell>
            </TableRow>
          </Table.Header>
        </Table>
      </>
    )
  }
} 
export default StudentGroup