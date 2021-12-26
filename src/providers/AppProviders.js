import React from 'react';
import { theme } from 'assets/styles/theme';
import { GlobalStyles } from 'assets/styles/GlobalStyles.styled';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { AuthProvider } from 'hooks/useAuth';
import { ErrorProvider } from '../hooks/useError';

const AppProviders = ({ children }) => (
  <Router>
    <ThemeProvider theme={theme}>
      <ErrorProvider>
        <AuthProvider>
          <GlobalStyles />
          {children}
        </AuthProvider>
      </ErrorProvider>
    </ThemeProvider>
  </Router>
);

export default AppProviders;
