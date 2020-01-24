import React, { Component } from 'react'

class Clock extends Component {
  format = (time) => {
    let minutes = time % 60;
    let hours = Math.floor(time / 60);
    hours = hours.toString().length === 1 ? "0" + hours : hours;
    minutes = minutes.toString().length === 1 ? "0" + minutes : minutes;
    return hours + ':' + minutes;
  }

  render () {
    const { minutes } = this.props;
    return (
      <h1>Time Remaining: {this.format(minutes)}</h1>
    )
  }
}

export default Clock;