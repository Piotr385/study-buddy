import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import Dashboard from 'views/Dashboard';
import AddUser from 'views/AddUser';
import UsersProvider from 'providers/UsersProvider';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'assets/styles/GlobalStyles.styled';
import { Wrapper } from 'views/Root.styled';
import { theme } from 'assets/styles/theme';

const Root = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MainTemplate>
        <UsersProvider>
          <Wrapper>
            <Routes>
              <Route path="/add-user" element={<AddUser />} />
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </Wrapper>
        </UsersProvider>
      </MainTemplate>
    </ThemeProvider>
  </Router>
);

export default Root;
