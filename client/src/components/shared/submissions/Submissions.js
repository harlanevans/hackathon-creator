import React from "react";
import axios from "axios";
import {Segment, Card} from 'semantic-ui-react';
import moment from 'moment';
import { Sections } from '../../styled-components/Shared';

class Submissions extends React.Component {
  state = { submissions: [], formattedTime: '' };

  componentDidMount() {
    const { event_id } = this.props;
    axios.get(`/api/events/${event_id}/submissions`)
      .then(res => {
        this.setState({ submissions: res.data })
    });
  }

  renderSubmissions() {
    const { submissions } = this.state;
    if (submissions.length === 0) {
      return <h3>No submissions have been made for this event.</h3>;
    }
    return (
      <Card.Group itemsPerRow='2'>
        { submissions.map(s => (
          <Card key={s.id}>
            <Card.Content>
                <Card.Header>
                  Group Name: {s.group_name}
                  <h5>
                    Repo: <a href={s.link} target="_blank" rel="noopener noreferrer">{s.link}</a>
                  </h5>
                </Card.Header>
              
              <h5>Submitted: {moment(s.created_at).format('LLL')}</h5>
            </Card.Content>
          </Card>
      ))};
      </Card.Group>
    )
  }


  render() {
    return (
      <Segment>
        <h1>Project Submissions</h1>
        {this.renderSubmissions()}
      </Segment>)
  }
}

export default Submissions;
