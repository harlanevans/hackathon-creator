import React from "react";
import { Link } from 'react-router-dom';

class StudentPage extends React.Component {
  // state = { event: this.props.location.state.event };

  componentDidMount() {




    // THIS IS NOT RECEIVING EVENT PROPERLY 
    
    // console.log(this.props.location.state.event);
    // const { event } = this.props.location.state;
    // this.setState({ event: event });
    console.log(this.props.location.state);
  }

  render() {
    return (
      <div>
        {/* {this.state.event.name} */}
        "STUDENT HOME" Submission form for link 
        rubric 
        <Link to="/studenthome">
          <button>Go back</button>
        </Link>
      </div>
    );
  }
}

export default StudentPage;
