import React from 'react';
import PropTypes from 'prop-types';
import Container from '~/components/Container';
import {
  Caps,
  HeaderWrapper,
  HeaderContainer,
  UserWrapper,
  Photo,
  Greetings,
  Logo,
} from './styles';

function Header({ userInitial }) {
  return (
    <HeaderWrapper>
      <Container>
        <HeaderContainer>
          <Logo />
          <UserWrapper>
            <Photo />
            <Greetings>
              Hello, <Caps>{userInitial}</Caps>.
            </Greetings>
          </UserWrapper>
        </HeaderContainer>
      </Container>
    </HeaderWrapper>
  );
}

export default Header;

Header.propTypes = {
  userInitial: PropTypes.string,
};

Header.defaultProps = {
  userInitial: '',
};
