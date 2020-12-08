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
        <Button onClick={handleLogin}>Login</Button>
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
};
