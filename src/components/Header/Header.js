import React from 'react';
import Container from '~/components/Container';
import {
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
            <Greetings>Hello, {userInitial}.</Greetings>
          </UserWrapper>
        </HeaderContainer>
      </Container>
    </HeaderWrapper>
  );
}

export default Header;
