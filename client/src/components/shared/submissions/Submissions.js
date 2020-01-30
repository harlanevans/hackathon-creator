import React from "react";
import axios from "axios";
import { Segment } from 'semantic-ui-react';
import moment from 'moment';

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
      return <h3 style={{textAlign: "center"}}>No submissions have been made for this event.</h3>;
    }
    return (
      <div className="submission-wrapper">
        { submissions.map(s => (
          <div key={s.id} className="group-name">
          <h4><span>Group:</span> {s.group_name}</h4>
          <div className="repo-name">
          <h5><span>Repo:</span><a href={s.link} target="_blank" rel="noopener noreferrer"> {s.link}</a>
          </h5>    
          </div> 
          <div className="submitted-date">       
          <h5><span>Submitted:</span> {moment(s.created_at).format('LLL')}</h5>
          </div>
          </div>
      ))};
      </div>
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
