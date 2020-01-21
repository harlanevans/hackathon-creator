import React,{ Component } from "react";
import axios from 'axios';
import { Menu, Icon, Segment } from "semantic-ui-react";
import GroupForm from './GroupForm';
import Group from './Group';
import GroupAll from './GroupAll';

class Groups extends Component {

  state = {
    groups: [],
    adding: false,
    activeItem: 'allGroups'
  }

  handleItemClick = (e, { group }) => {
    this.setState({ activeItem: group })
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
      this.setState({groups: groups.filter( g => g.id !== id), activeItem:'allGroups'})
    })
    .catch( err => {
      console.log(err)
    })
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

  render() {
    const { activeItem, groups, adding } = this.state
    return (
      <div>
        {adding ? <GroupForm addGroup={this.addGroup} toggleAdd={this.toggleAdd}/> : <></>}
        <Menu attached='top' tabular>
          <Menu.Item
              group='allGroups'
              name='All Groups'
              active={activeItem === 'allGroups'}
              onClick={this.handleItemClick}
            />
            {
              groups.map( g =>
                <Menu.Item
                  key={g.id}
                  group={g}
                  name={g.name}
                  active={activeItem === g}
                  onClick={this.handleItemClick}
                />
                )
            }
            <Menu.Item>
              <Icon 
                name='plus'
                link
                onClick={this.toggleAdd}
              />
            </Menu.Item>
        </Menu>
        <Segment attached='bottom'>
          {
            activeItem === 'allGroups' ?
            <GroupAll groups={this.state.groups}/>
            :
            <Group 
              {...activeItem} 
              deleteGroup={this.deleteGroup}
              updateGroup={this.updateGroup}
            />
          }
        </Segment>
      </div>
    )
  }
}

export default Groups;