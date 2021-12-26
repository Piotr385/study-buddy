import React from 'react';
import {
  Wrapper,
  StyledMenu,
  Logo,
  LinkWrapper,
  StyledLink,
} from './Navigation.styled';
import { useAuth } from 'hooks/useAuth';

const Navigation = () => {
  const auth = useAuth();

  return (
    <Wrapper>
      <Logo>
        <h1>
          Studdy
          <br />
          Buddy
        </h1>
      </Logo>
      <StyledMenu>
        <LinkWrapper>
          <StyledLink to="/" className="active">
            Dashboard
          </StyledLink>
        </LinkWrapper>
        <LinkWrapper>
          <StyledLink as="a" onClick={auth.signOut}>
            Logout
          </StyledLink>
        </LinkWrapper>
      </StyledMenu>
    </Wrapper>
  );
};

export default Navigation;
