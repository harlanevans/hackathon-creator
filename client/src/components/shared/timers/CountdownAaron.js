import React, { Component } from 'react';
import moment from 'moment';
import '../../../App.css';

class CountdownAaron extends Component {

  state = {
    hours: undefined,
    minutes: undefined,
    seconds: undefined,
  }

  componentDidMount() {
    this.interval = setInterval(() => {
        const { timeTillDate, timeFormat } = this.props;
        const then = moment(timeTillDate, timeFormat);
        const now = moment();
        const countdown = moment.utc(then - now);
        const hours = countdown.format('H');
        const minutes = countdown.format('m');
        const seconds = countdown.format('s');
        this.setState({ hours, minutes, seconds });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.interval) {
        clearInterval(this.interval);
    }
  }

  render() {
    const { hours, minutes, seconds } = this.state;
    return(
      <div>
        <h1>Countdown</h1>
        <div className="countdown-wrapper">
            <div className="countdown-item">
                {hours}
                <span>hours</span>
            </div>
            <div className="countdown-item">
                {minutes}
                <span>minutes</span>
            </div>
            <div className="countdown-item">
                {seconds}
                <span>seconds</span>
            </div>
        </div>
      </div>
    )
  }
}

export default CountdownAaron