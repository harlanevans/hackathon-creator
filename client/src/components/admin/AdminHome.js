import React, { Component } from 'react';
import { Sections } from '../styled-components/Shared';
import Tasks from "../shared/task/Tasks";
import Courses from "../shared/courses/Courses";
import Timer from '../shared/timers/Timer';
import "../css/custom.css";

class AdminHome extends Component {
    render() {
        return(
        <Sections>
            <Timer />
            <Courses />
            <Tasks />
        </Sections>
        )
    }
}

export default AdminHome;