import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Redirect } from 'react-router-dom';
import UserStore from '~/stores/UserStore';

import LoginContent from './components/LoginContent';

@observer
@inject('UserStore')
class LoginContainer extends Component {
  state = {
    confirmPassword: '',
    isAuthenticated: false,
    isSignUp: false,
    password: '',
    successMessage: '',
    username: '',
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  toggleForms = () => {
    this.setState(prevState => ({
      isSignUp: !prevState.isSignUp,
      errorMessage: '',
    }));
  };

  handleSignUp = () => {
    const { username, password, confirmPassword } = this.state;
    const { successMessage, errorMessage } = UserStore.addNewUser({
      username,
      password,
      confirmPassword,
    });

    this.setState({
      successMessage,
      errorMessage,
    });
  };

  handleLogin = async () => {
    const { username, password } = this.state;
    const { isAuthenticated, errorMessage } = UserStore.signIn({
      username,
      password,
    });

    debugger;

    this.setState({
      isAuthenticated,
      errorMessage,
    });
  };

  render() {
    const {
      isAuthenticated,
      username,
      password,
      isSignUp,
      errorMessage,
      successMessage,
    } = this.state;

    return (
      <>
        {isAuthenticated && <Redirect to="/home" />}
        <LoginContent
          errorMessage={errorMessage}
          successMessage={successMessage}
          handleLogin={this.handleLogin}
          handleSignUp={this.handleSignUp}
          isSignUp={isSignUp}
          onChange={this.onChange}
          password={password}
          toggleForms={this.toggleForms}
          username={username}
        />
      </>
    );
  }
}

export default LoginContainer;
