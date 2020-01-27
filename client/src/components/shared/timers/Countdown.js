import React, { Component } from 'react';
import moment from 'moment';
import '../../../App.css';

class Countdown extends Component {

  state = {
    hours: undefined,
    minutes: undefined,
    seconds: undefined,
    completed: undefined
  }

  componentDidMount() {
    this.interval = setInterval(() => {
        const { timeTillDate } = this.props;
        const then = moment(timeTillDate, "HH:mm");
        const now = moment();
        const countdown = moment.utc(then - now);
        const hours = countdown.format('H');
        const minutes = countdown.format('m');
        const seconds = countdown.format('s');
        if (countdown._i < 0 ) {
          this.setState({completed: true})
        } else {
          this.setState({ hours, minutes, seconds, completed: false, countdown });
        }
    }, 1000);
  }

  componentWillUnmount() {
    if (this.interval) {
        clearInterval(this.interval);
    }
  }



  render() {
    const { hours, minutes, seconds, completed } = this.state;
    return(
      <div>
        {this.props.types === 'lunch' ? <h1>Lunch Timer</h1> : <h1>Hackathon Countdown</h1>}
        {
          completed ?
          this.props.types === 'lunch' ? <h1>START CODING!</h1> : <h1>TIME'S UP!</h1>
          :
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
        }
        <h4>End Time: {moment(this.props.timeTillDate, "HH:mm").format('LT')}</h4>
      </div>
    )
  }
}

export default Countdown