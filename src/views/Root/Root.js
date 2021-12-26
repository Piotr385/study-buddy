import React from 'react';
import AuthenticatedApp from 'views/AuthenticatedApp/AuthenticatedApp';
import UnauthenticatedApp from 'views/UnauthenticatedApp/UnauthenticatedApp';
import { useAuth } from 'hooks/useAuth';

const Root = () => {
  const auth = useAuth();

  return auth.user ? <AuthenticatedApp /> : <UnauthenticatedApp />;
};

export default Root;
