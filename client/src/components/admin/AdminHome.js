import React, { Component } from 'react';
import Tasks from "../shared/task/Tasks";
import Courses from "../shared/courses/Courses";
import Timers from '../shared/timers/Timers';
import "../css/custom.css";
import { Container } from 'semantic-ui-react';
import { Sections, AdminWrapper, CoursesFlex, TasksFlex } from '../styled-components/Shared';


class AdminHome extends Component {
    render() {
        return(
            <>
                <div className="container-fluid">
                    <div className="image-header admin">
                        <h1>Admin</h1>
                        <div className="img-overlay"></div>
                    </div>
                </div>
                <Timers />
                <Sections>
                    <AdminWrapper>
                        <CoursesFlex>
                            <Courses />
                        </CoursesFlex>
                        <TasksFlex>
                            <Tasks />
                        </TasksFlex>
                    </AdminWrapper>
                </Sections>   
            </>
        )
    }
}

export default AdminHome;