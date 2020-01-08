import React, { Component } from 'react';
import axios from 'axios';
// use the react context api
const AuthContext = React.createContext();
// Consumer, exportable wrapper that gives to access to the data in the provider
export const AuthConsumer = AuthContext.Consumer;
// provider want to have global 
class AuthProvider extends Component {
  state = { user: null }
  handleRegister = (user, history) => {
    axios.post('/api/auth', user)
      .then( res => {
        this.setState({ user: res.data.data })
        history.push('/')
      })
      .catch(err => console.log(err))
  }
  handleLogin = (user, history) => {
    axios.post('/api/auth/sign_in', user)
      .then( res => {
        this.setState({ user: res.data.data })
        history.push('/')
      })
      .catch(err => console.log(err))
  }
  handleLogout = (history) => {
    axios.delete('/api/auth/sign_out')
      .then( res => {
        this.setState({ user: null })
        history.push('/login')
      })
      .catch(err => console.log(err))
  }
  render(){
    return(
      <AuthContext.Provider value={{
        ...this.state,
        handleRegister: this.handleRegister,
        handleLogin: this.handleLogin,
        handleLogout: this.handleLogout,
        authenticated: this.state.user !== null,
        setUser: (user) => this.setState({ user })
      }}>
        { this.props.children }
      </AuthContext.Provider>
    )
  }
}
export default AuthProvider;