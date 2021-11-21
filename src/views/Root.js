import React from 'react';
import UsersList from 'components/organism/UsersList/UserList';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'assets/styles/GlobalStyles.styled';
import { Wrapper } from './Root.styled';
import { theme } from 'assets/styles/theme';

const Root = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Wrapper>
      <UsersList />
    </Wrapper>
  </ThemeProvider>
);

export default Root;
