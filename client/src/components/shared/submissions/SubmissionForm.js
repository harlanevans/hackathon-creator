import React, {Component} from 'react';
import { Form, Message, Container } from 'semantic-ui-react';
import axios from 'axios';
import { Sections, PrimaryBtn, TextCenter } from '../../styled-components/Shared';


class SubmissionFrom extends Component {
  
  state = {
    groups: [],
    link: '',
    group_name: '',
    submitted: false,
  }

  componentDidMount () {
    axios.get(`/api/courses/${this.props.course_id}/events/${this.props.event_id}/groups`)
      .then( res => {
        this.setState({ groups: res.data, submitted: false })
        this.groupMap()
      })
      .catch( err => {
        console.log(err)
      })
  }
  
  groupMap = () => {
    const groups = this.state.groups.map( g => {
      return {...g, text: g.name, value: g.name, key:g.id}
    })
    this.setState({groups})
  }

    addSubmission = (submission) => {
      axios.post(`/api/events/${this.props.event_id}/submissions`, submission)
      .catch( err => {
        console.log(err)
      })
    }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleSumbit = (e) => {
      e.preventDefault()
      const submission = {link: this.state.link, group_name: this.state.group_name}
      this.addSubmission(submission)
      this.setState({ group_name: '', link: '', submitted: true})
      }

    render(){
      const { link, group_name, groups } = this.state
      return(
        <>
        <Container fluid style={{background: "#eee"}}>
          <Sections style={{padding: "10%"}}>
            <h1>Submit your <br></br> Hackathon Project</h1>
            <Form className="submissions" success onSubmit={this.handleSumbit}>
              <Form.Select 
                name='group_name'
                value={group_name}
                label='Group Name' 
                options={groups}
                onChange={this.handleChange}
              />
              <Form.Input 
                name='link'
                value={link}
                label='Link to GitHub Repo' 
                placeholder='https://github.com/' 
                onChange={this.handleChange}
              />
              {
                this.state.submitted ?
                  <Message
                  success
                  header='Boom'
                  content="You're all done"
                  />
                :
                <></>
              }

              <PrimaryBtn>Submit</PrimaryBtn>
              </Form>
            </Sections>
        </Container>
          </>
      )
    }
  }

export default SubmissionFrom