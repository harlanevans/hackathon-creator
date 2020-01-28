import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import '../../../App.css';
import Countdown from './Countdown';
import TimerForm from './TimerForm';

class Timer extends Component {

  render() {
    const { id, name, end_time, types, active, updateTimer } = this.props
    const timer = { id, name, end_time, types, active }
    return(
      <Card>
        <Card.Content>
          {
            active ? 
            <Countdown
              types={types}
              timeTillDate={end_time} 
              {...timer}
            />
            :
          <h3>{name} Not Started</h3>
          }
          <TimerForm 
            updateTimer={updateTimer}
            toggleEdit={this.toggleEdit}
            {...timer}
          />
        </Card.Content>
      </Card>
    )
  }
}

export default Timer