import React, { Component } from 'react';
import Tasks from "../shared/task/Tasks";
import Courses from "../shared/courses/Courses";
import Timers from '../shared/timers/Timers';
import "../css/custom.css";
import { AdminWrapper, CoursesFlex, TasksFlex } from '../styled-components/Shared';


class AdminHome extends Component {
    render() {
        return(
            <>
                <Timers />
                <AdminWrapper>
                    <CoursesFlex>
                        <Courses />
                    </CoursesFlex>
                    <TasksFlex>
                        <Tasks />
                    </TasksFlex>
                </AdminWrapper>
            </>
        )
    }
}

export default AdminHome;