import React from 'react';
import PropTypes from 'prop-types';
import {
  Input,
  FormControl,
  Small,
  LinkButton,
  Footer,
  ErrorMessage,
} from '~/components/Form';
import Button from '~/components/Button';
import { H1 } from '~/components/Title';
import { Content, FormWrapper } from './styles';

function LoginForm({
  errorMessage,
  handleLogin,
  isLoading,
  onChange,
  password,
  toggleForms,
  username,
}) {
  return (
    <Content>
      <H1>Great to see you again!</H1>
      <FormWrapper>
        <FormControl>
          <Input
            placeholder="Username"
            value={username}
            onChange={e => onChange(e)}
            name="username"
          />
        </FormControl>
        <FormControl>
          <Input
            placeholder="Password"
            type="password"
            value={password}
            onChange={onChange}
            name="password"
          />
        </FormControl>
        <Button onClick={handleLogin} isLoading={isLoading}>
          Login
        </Button>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <Footer>
          <Small>
            Don't have an account?{' '}
            <LinkButton onClick={toggleForms}>Sign up here</LinkButton>
          </Small>
        </Footer>
      </FormWrapper>
    </Content>
  );
}

export default LoginForm;

LoginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  password: PropTypes.string,
  toggleForms: PropTypes.func.isRequired,
  username: PropTypes.string,
  isLoading: PropTypes.bool,
};

LoginForm.defaultProps = {
  errorMessage: '',
  password: '',
  username: '',
  isLoading: false,
};
