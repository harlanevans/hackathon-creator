import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProtectedRoutes from './components/auth/ProtectedRoutes'
import Navbar from './components/shared/Navbar';
import Nomatch from './components/shared/Nomatch';
import Login from './components/auth/Login';
import FetchUser from './components/auth/FetchUser';
import Courses from './components/shared/courses/Courses';
import CourseShow from './components/shared/courses/CourseShow';
import EventShow from './components/shared/events/EventShow';
import StudentHome from './components/shared/StudentHome';
import StudentPage from './components/shared/StudentPage';
import AdminHome from './components/admin/AdminHome';
import SiteFooter from './components/shared/Footer';


const App = () => (
  <>
    <Navbar />
    <FetchUser>
        <Switch>
          <Route exact path='/' component={StudentHome} />
          <ProtectedRoutes exact path='/admin' component={AdminHome} />
          <Route exact path='/event/:event_id' component={StudentPage} />
          <Route exact path='/courses' component={Courses} />
          <Route exact path='/course/:id' component={CourseShow} />
          <Route exact path='/courses/:course_id/events/:id' component={EventShow} />
          <Route exact path='/login' component={Login} />
          <Route component={Nomatch} />
        </Switch>
      <SiteFooter/>
    </FetchUser>
  </>
)
export default App;