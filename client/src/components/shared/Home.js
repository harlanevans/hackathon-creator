import React from "react";
import Tasks from "./task/Tasks";
import Courses from "./courses/Courses";
import Timer from "./Timer";

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        {/* if user auth show this */}
        <Timer />

        <Tasks />
        <Courses />
        {/* otherwise this */}
      </div>
    );
  }
}

export default Home;
