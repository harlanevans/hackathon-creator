import React from "react";
import axios from "axios";

class Submissions extends React.Component {
  state = { submissions: [] };

  componentDidMount() {
    const { event_id } = this.props;
    axios.get(`/api/events/${event_id}/submissions`).then(res => {
      this.setState({ submissions: res.data });
    });
  }

  renderSubmissions() {
    const { submissions } = this.state;
    if (submissions.length === 0) {
      return <div>No Submissions</div>;
    }

    return submissions.map(s => (
      <div>
        <h1>Submissions</h1>
        <h5>Name: {s.group_name}</h5>
        <h5>
          Repo:
          <a href={s.link} target="_blank">
            {s.link}
          </a>
        </h5>
      </div>
    ));
  }

  render() {
    return <div>{this.renderSubmissions()}</div>;
  }
}

export default Submissions;
