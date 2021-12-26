import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from '../Dashborad/Dashboard';
import { Wrapper } from './AuthenticatedApp.styles';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';

const AuthenticatedApp = () => (
  <MainTemplate>
    <Wrapper>
      <Routes>
        <Route path="/" element={<Navigate to="/group" />} />
        <Route path="/a" element={<Navigate to="/group" />} />
        <Route path="group" element={<Dashboard />}>
          <Route path="group/" element={<Dashboard />} />
          <Route path=":group" element={<Dashboard />} />
        </Route>
      </Routes>
    </Wrapper>
  </MainTemplate>
);

AuthenticatedApp.propTypes = {};

export default AuthenticatedApp;
