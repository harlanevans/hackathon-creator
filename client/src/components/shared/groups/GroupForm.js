import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

class GroupForm extends Component {

  state = {
    name: '',
  } 

  componentDidMount() {
    const { id, name } = this.props
    if (id) {
      this.setState({
        name,
      })
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSumbit = (e) => {
    e.preventDefault()
    if (this.props.id) {
      this.props.updateGroup(this.props.id, this.state)
      this.props.toggleEdit()
      this.setState({ name: ''})
    } else {
      this.props.addGroup(this.state)
      this.props.toggleAdd()
      this.setState({ name: ''})
    }
    }

  render() {
    const { name } = this.state
    return(
      <Form onSubmit={ this.handleSumbit }>     
        <Form.Group>
          <Form.Input 
            name='name'
            value={name}
            onChange={this.handleChange}
            label='Group Name'
            required
            />
        </Form.Group>
        <Form.Group>
          <Form.Button>{this.props.id ? "Update Group" : "Create Group" }</Form.Button>
          <Button onClick={this.props.id ? this.props.toggleEdit : this.props.toggleAdd}>Cancel</Button>
        </Form.Group>
      </Form>
    )
  }
}

export default GroupForm;