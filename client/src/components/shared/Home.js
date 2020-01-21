import React from "react";
import Tasks from "./task/Tasks";
import Courses from "./courses/Courses";

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        {/* if user auth show this */}

        <Tasks />
        <Courses />
        {/* otherwise this */}
      </div>
    );
  }
}

export default Home;
