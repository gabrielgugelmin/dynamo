import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Redirect } from 'react-router-dom';
import UserStore from '~/stores/UserStore';

import LoginContent from './components/LoginContent';

@inject('UserStore')
@observer
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
    this.setState({
      isLoading: true,
    });
    const { username, password } = this.state;
    const { isAuthenticated, errorMessage } = UserStore.signIn({
      username,
      password,
    });

    this.setState({
      isAuthenticated,
      errorMessage,
      isLoading: false,
    });
  };

  render() {
    const {
      errorMessage,
      isAuthenticated,
      isLoading,
      isSignUp,
      password,
      successMessage,
      username,
    } = this.state;

    return (
      <>
        {isAuthenticated && <Redirect to="/home" />}
        <LoginContent
          errorMessage={errorMessage}
          handleLogin={this.handleLogin}
          handleSignUp={this.handleSignUp}
          isLoading={isLoading}
          isSignUp={isSignUp}
          onChange={this.onChange}
          password={password}
          successMessage={successMessage}
          toggleForms={this.toggleForms}
          username={username}
        />
      </>
    );
  }
}

export default LoginContainer;
