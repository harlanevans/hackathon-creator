import React from 'react';
import { Container } from 'semantic-ui-react';
import { Switch, Route } from 'react-router-dom';
import ProtectedRoutes from './components/auth/ProtectedRoutes'
import Navbar from './components/shared/Navbar';
import Nomatch from './components/shared/Nomatch';
import Home from './components/shared/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import FetchUser from './components/auth/FetchUser';
import Justanything from './components/shared/Justanything';
import Courses from './components/shared/courses/Courses';
import CourseShow from './components/shared/courses/CourseShow';
import EventShow from './components/shared/events/EventShow';
import StudentHome from './components/shared/StudentHome';
import StudentPage from './components/shared/StudentPage';


const App = () => (
  <>
    <Navbar />
    <FetchUser>
      <Container>
        <Switch>
          <Route exact path='/' component={Home} />
          <ProtectedRoutes exact path='/justanything' component={Justanything} />
          <Route exact path='/studenthome' component={StudentHome} />
          <Route exact path='/event/:event_id' component={StudentPage} />
          <Route exact path='/courses' component={Courses} />
          <Route exact path='/course/:id' component={CourseShow} />
          <Route exact path='/courses/:course_id/events/:id' component={EventShow} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route component={Nomatch} />
        </Switch>
      </Container>
    </FetchUser>
  </>
)
export default App;