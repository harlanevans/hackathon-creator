import React from "react";
import axios from "axios";
import {Segment} from 'semantic-ui-react';

class Submissions extends React.Component {
  state = { submissions: [] };

  componentDidMount() {
    const { event_id } = this.props;
    axios.get(`/api/events/${event_id}/submissions`)
      .then(res => {
        this.setState({ submissions: res.data });
    });
  }

  renderSubmissions() {
    const { submissions } = this.state;
    if (submissions.length === 0) {
      return <div>No Submissions</div>;
    }

    return submissions.map(s => (
      <Segment>
        <h5>Group Name: </h5>
        <h5>{s.group_name}</h5>
        <h5>Repo: </h5>
        <h5>
          <a href={s.link} target="_blank">{s.link}</a>
        </h5>
        <h5>{s.created_at}</h5>
      </Segment>
    ));
  }

  render() {
    return <div>{this.renderSubmissions()}</div>;
  }
}

export default Submissions;
