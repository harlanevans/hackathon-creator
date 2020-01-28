import React, { Component } from 'react';
import Tasks from "../shared/task/Tasks";
import Courses from "../shared/courses/Courses";
import Timers from '../shared/timers/Timers';
import "../css/custom.css";

class AdminHome extends Component {
    render() {
        return(
            <>
                <Timers />
                <Courses />
                <Tasks />
            </>
        )
    }
}

export default AdminHome;