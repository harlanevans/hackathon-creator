import React from 'react';
import { AuthConsumer } from "../../providers/AuthProvider";
import { Menu } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';

class Navbar extends React.Component {
  rightNavItems = () => {
    const { auth: { user, handleLogout, }, location, } = this.props;
    if (user) {
      return (
        <Menu.Menu position='right'>
          <Menu.Item
            name='logout'
            onClick={ () => handleLogout(this.props.history) }
          />
        </Menu.Menu>
      )
    } else {
      return (
        <Menu.Menu position='right'>
          <Link to='/login'>
            <Menu.Item
              id='login'
              name='login'
              active={location.pathname === '/login'}
            />
          </Link>
        </Menu.Menu>
      )
    }
  }
  render() {
    const { auth: { user } } = this.props;
    return (
      <div className="navbar">
        <Menu pointing secondary>
          <Link to='/'>
            <Menu.Item
                name='home'
                id='home'
                active={this.props.location.pathname === '/'}
              />
          </Link>
          {
            user ?
            <Link to='/admin'>
              <Menu.Item
                name='admin'
                id='admin'
                active={this.props.location.pathname === '/admin'}
              />
            </Link>
            :
            <></>
          }
            { this.rightNavItems() }
        </Menu>
      </div>
    )
  }
}
export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer> 
        { auth => 
          <Navbar { ...this.props } auth={auth} />
        }
      </AuthConsumer>
    )
  }
}
export default withRouter(ConnectedNavbar);