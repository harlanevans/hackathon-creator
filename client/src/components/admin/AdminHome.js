import React, { Component } from 'react';
import { Sections } from '../styled-components/Shared';
import Tasks from "../shared/task/Tasks";
import Courses from "../shared/courses/Courses";
import Timers from '../shared/timers/Timers';
import "../css/custom.css";

class AdminHome extends Component {
    render() {
        return(
        <Sections>
            <Timers />
            <Courses />
            <Tasks />
        </Sections>
        )
    }
}

export default AdminHome;