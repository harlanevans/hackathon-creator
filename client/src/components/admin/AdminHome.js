import React, { Component } from 'react';
import { Sections } from '../styled-components/Shared';
import Tasks from "../shared/task/Tasks";
import Courses from "../shared/courses/Courses";

class AdminHome extends Component {
    render() {
        return(
        <Sections>
          <div class="home-wrapper">
            <Courses />
            <Tasks />
          </div>
        </Sections>
        )
    }
}

export default AdminHome;