import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../LoginForm';
import SignUpForm from '../SignUpForm';
import { Content, Left, Right, Rocket, SignUp } from './styles';

function LoginContent({
  errorMessage,
  handleLogin,
  handleSignUp,
  isSignUp,
  onChange,
  password,
  successMessage,
  toggleForms,
  username,
}) {
  return (
    <Content>
      <Left>{isSignUp ? <SignUp /> : <Rocket />}</Left>
      <Right>
        {isSignUp ? (
          <SignUpForm
            handleSignUp={handleSignUp}
            username={username}
            password={password}
            onChange={onChange}
            toggleForms={toggleForms}
            errorMessage={errorMessage}
            successMessage={successMessage}
          />
        ) : (
            <LoginForm
              handleLogin={handleLogin}
              onChange={onChange}
              password={password}
              toggleForms={toggleForms}
              username={username}
              errorMessage={errorMessage}
            />
          )}
      </Right>
    </Content>
  );
}

export default LoginContent;

LoginContent.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  handleSignUp: PropTypes.func.isRequired,
  toggleForms: PropTypes.func.isRequired,
  isSignUp: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
  successMessage: PropTypes.string.isRequired,
};
