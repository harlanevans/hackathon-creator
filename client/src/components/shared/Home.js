import React from "react";
import Tasks from "./task/Tasks";
import Courses from "./courses/Courses";
import '../css/custom.css';
import { Sections } from '../styled-components/Shared';
import TimerAaron from './timers/Timer';
// import Timer from "./Timer";

class Home extends React.Component {
  render() {
    return (
      <div>
        <div class="image-header home">
            <h1>DPL Hackathon</h1>
            <div class="img-overlay"></div>
        </div>
        <TimerAaron />
        {/* if user auth show this */}
        {/* <Timer /> */}
        <Sections>
          <div class="home-wrapper">
            <Courses />
            <Tasks />
          </div>
        </Sections>
        {/* otherwise this */}
      </div>
    );
  }
}

export default Home;
