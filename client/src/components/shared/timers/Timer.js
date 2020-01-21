import React from "react";
import Moment from "react-moment";
import moment from 'moment';

class Timer extends React.Component {
  state = { startTime: null, endTime: null, completed: false, name: "", newTime: null };

  timeTest = () => {
    const date = new Date();
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    
  };

  handleSubmit = (e) => {
    e.preventDefault()
    const { endTime, startTime } = this.state;
    this.setState({newTime: endTime - startTime})
  }

  totalTime = () => {
    const { endTime, startTime } = this.state;
    let newTime = endTime - startTime;
    return newTime;
  }
  // TIMER MODEL
  // belong to event
  // name
  // startTime
  // endTime
  //
  // Store our timers with refresh
  // crud actions for timer

  render() {
    const { startTime, endTime, newTime } = this.state;

    return (
      <div>
        <div>{startTime}</div>
        <div>{endTime}</div>
        <div>{newTime}</div>
        {/* <Moment add={{ hours: 12 }}>{this.date}</Moment>
        <Moment add={{ days: 1, hours: 12 }}>{this.date}</Moment>
        <Moment subtract={{ hours: 12 }}>{this.date}</Moment>
        <Moment subtract={{ days: 1, hours: 12 }}>{this.date}</Moment> */}
        <form onSubmit={this.handleSubmit}>
          <label>Start Time</label>
          <input
            name="startTime"
            value={startTime}
            onChange={this.handleChange}
            label="Start Time"
            type="time"
            />
            <label>End Time</label>
          <input
            name="endTime"
            value={endTime}
            onChange={this.handleChange}
            label="End Time"
            type="time"
          />
          <button onSubmit={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Timer;

// const timeSelections = {
//   hour = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//   min = [
//   "15", "30", "45",
// ],

// }
