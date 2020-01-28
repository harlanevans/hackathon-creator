import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'semantic-ui-react';

class generateGroups extends Component {

  state = {
    students: [],
  }

  componentDidMount(){
    axios.get(`/api/courses/${this.props.course_id}/students`)
    .then( res => {
      const ranked_s = res.data.sort(function(a, b){
        var keyA = a.effort_lvl + a.skill_lvl,
            keyB = b.effort_lvl + b.skill_lvl;
        if(keyA < keyB) return 1;
        if(keyA > keyB) return -1;
        return 0;
    });
      this.setState({ students: ranked_s })
    })
    .catch( err => {
      console.log(err)
    })
  }

  assignStudents = () => {
    const { students } = this.state
    const { groups } = this.props
    let s = 0
    for ( s = 0; s < students.length; ) {
      let g
      if( s/groups.length % 2 === 0){
        for ( g = 0; g < groups.length; g ++) {
          if(students[s]) {
            this.addStudentGroup({group_id: groups[g].id, student_id:students[s].id})
            s++
          }
        }
      } else {
        for ( g = groups.length - 1; g > -1; g --) {
          if(students[s]) {
            this.addStudentGroup({group_id: groups[g].id, student_id:students[s].id})
            s++
          }
        }
      }
    }
    window.setTimeout( () => window.location.reload(), 1000 )
  }

  addStudentGroup = ( studentGroup ) => {
    axios.post(`/api/groups/${studentGroup.group_id}/student_groups`, studentGroup)
    .catch( err => {
      console.log(err)
    })
  }
  
  deleteStudentGroup = (id) => {
    axios.delete(`/api/groups/${this.props.group_id}/student_groups/${id}`) 
    .catch( err => {
      console.log(err)
    })
  }

  render () {
    return(
      <>
        <Button floated='right' onClick={this.assignStudents}>Assign Student Groups</Button>
      </>
    )
  }
}
export default generateGroups