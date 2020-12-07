import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Footer,
  FormControl,
  Input,
  LinkButton,
  Small,
  ErrorMessage,
  SuccessMessage,
} from '~/components/Form';
import { H1 } from '~/components/Title';
import { Content, FormWrapper } from './styles';

function SignUpForm({
  confirmPassword,
  errorMessage,
  successMessage,
  handleSignUp,
  onChange,
  password,
  toggleForms,
  username,
}) {
  return (
    <Content>
      <H1>Who's there?</H1>
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
        <FormControl>
          <Input
            placeholder="Confirm your password"
            type="password"
            value={confirmPassword}
            onChange={onChange}
            name="confirmPassword"
          />
        </FormControl>
        <Button onClick={handleSignUp}>Create account</Button>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
        <Footer>
          <Small>
            Already have an account?{' '}
            <LinkButton onClick={toggleForms}>Sign in here</LinkButton>
          </Small>
        </Footer>
      </FormWrapper>
    </Content>
  );
}

export default SignUpForm;

SignUpForm.propTypes = {
  confirmPassword: PropTypes.string.isRequired,
  handleSignUp: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  toggleForms: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
};
