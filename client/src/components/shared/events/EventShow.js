import React from 'react';
import Timer from '../timers/Timer';
import Groups from '../groups/Groups'
import Submissions from '../submissions/Submissions';

class EventShow extends React.Component {
  // state = { showTimer: false}  

  // toggleShowClock = () => {
  //   const { showTimer } = this.state 
  //   this.setState({ showTimer: !showTimer })
  //   // this.setState( state => {
  //   //   return { showClock: !state.showClock }
  //   // })


  render() {
    const { name, id, course_id } = this.props.location.state;

    return(
      <div>
        
       <h1> {name}</h1>
        {/* <Timer /> */}
       {/* Create groups */}

       <Groups course_id={course_id} event_id={id}/>
       <Submissions course_id={course_id} event_id={id} />
      </div>
    )
  }
}

export default EventShow;