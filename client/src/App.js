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

const App = () => (
  <>
    <Navbar />
    <FetchUser>
      <Container>
        <Switch>
          <Route exact path='/' component={Home} />
          <ProtectedRoutes exact path='/justanything' component={Justanything} />
          <Route exact path='/courses' component={Courses} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route component={Nomatch} />
        </Switch>
      </Container>
    </FetchUser>
  </>
)
export default App;