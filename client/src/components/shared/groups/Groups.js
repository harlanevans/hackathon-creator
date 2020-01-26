import React,{ Component } from "react";
import axios from 'axios';
import { Button, Segment, Card, Divider } from "semantic-ui-react";
import GroupForm from './GroupForm';
import Group from './Group';
import GenerateGroups from "../studentgroups/GenerateGroups";

class Groups extends Component {

  state = {
    groups: [],
    adding: false,
  }

  componentDidMount() {
    axios.get(`/api/courses/${this.props.course_id}/events/${this.props.event_id}/groups`)
    .then( res => {
      this.setState({ groups: res.data })
    })
    .catch( err => {
      console.log(err)
    })
  }
  
  addGroup = (group) => {
    axios.post(`/api/courses/${this.props.course_id}/events/${this.props.event_id}/groups`, group)
    .then( res => {
      this.setState({ groups: [...this.state.groups, res.data] })
    })
    .catch( err => {
      console.log(err)
    })
  }

  toggleAdd = () => {this.setState({adding: !this.state.adding})}

  deleteGroup = (id) => {
    axios.delete(`/api/courses/${this.props.course_id}/events/${this.props.event_id}/groups/${id}`)
    .then( res => {
      const { groups } = this.state
      this.setState({groups: groups.filter( g => g.id !== id)})
    })
    .catch( err => {
      console.log(err)
    })
  }

  resetAllGroups = () => {
    this.state.groups.map( g => {
      this.deleteGroup(g.id)
      this.addGroup({name: g.name})
    })
    window.setTimeout( () => window.location.reload(), 1000 )
  }

  updateGroup = (id, group) => {
    axios.put(`/api/courses/${this.props.course_id}/events/${this.props.event_id}/groups/${id}`, group)
    .then( res => {
      console.log(res)
      const groups = this.state.groups.map( g => {
      if (g.id === id)
        return res.data;
      return g;
    });
    this.setState({ groups, activeItem: group });
    })
    .catch( err => {
      console.log(err)
    })
  }

// Need to grab all the students addigned to groups.
// Assign this to an array in state.
// Map through groups and student groups.
// If group id == group id in student group then delete

  render() {
    const { groups, adding } = this.state
    return (
      <Segment>
        <h1>Groups</h1>
        {adding ? <></> : <Button onClick={this.toggleAdd}>Create New Group</Button>}
        <GenerateGroups groups={this.state.groups} course_id={this.props.course_id} resetAllGroups={this.resetAllGroups}/>
        <Button floated='right' onClick={this.resetAllGroups}>Clear Groups</Button>
        {adding ? <GroupForm addGroup={this.addGroup} toggleAdd={this.toggleAdd}/> : <></>}
        <Divider />
          <Card.Group itemsPerRow='3'>
            {
              groups.map( g =>
                <Group 
                {...g} 
                deleteGroup={this.deleteGroup}
                updateGroup={this.updateGroup}
                course_id={this.props.course_id}              
                />
                )
              }
          </Card.Group>
      </Segment>
    )
  }
}

export default Groups;