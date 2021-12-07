import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import Dashboard from 'views/Dashborad/Dashboard';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'assets/styles/GlobalStyles.styled';
import { Wrapper } from 'views/Root/Root.styled';
import { theme } from 'assets/styles/theme';

const Root = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MainTemplate>
        <Wrapper>
          <Routes>
            <Route path="/" element={<Navigate to="/group" />} />
            <Route path="group" element={<Dashboard />}>
              <Route path="group/" element={<Dashboard />} />
              <Route path=":id" element={<Dashboard />} />
            </Route>
          </Routes>
        </Wrapper>
      </MainTemplate>
    </ThemeProvider>
  </Router>
);

export default Root;
