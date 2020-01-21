import React from 'react';
import Timer from '../timers/Timer';

class EventShow extends React.Component {


  render() {
    const { name, id } = this.props.location.state;
    return(
      <div>
       <h1> {name}</h1>
       <Timer />
       {/* Create groups */}
      </div>
    )
  }
}

export default EventShow;