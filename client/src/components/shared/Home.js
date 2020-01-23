import React from "react";
import Tasks from "./task/Tasks";
import Courses from "./courses/Courses";
import '../css/custom.css';
// import Timer from "./Timer";

class Home extends React.Component {
  render() {
    return (
      <div>
        <div class="image-header home">
            <h1>DPL Hackathon</h1>
            <div class="img-overlay"></div>
        </div>
        {/* if user auth show this */}
        {/* <Timer /> */}
        <div class="home-wrapper">
          <Courses />
          <Tasks />
        </div>
        {/* otherwise this */}
      </div>
    );
  }
}

export default Home;
