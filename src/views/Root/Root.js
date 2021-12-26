import React from 'react';
import AuthenticatedApp from 'views/AuthenticatedApp/AuthenticatedApp';
import UnauthenticatedApp from 'views/UnauthenticatedApp/UnauthenticatedApp';
import { useAuth } from 'hooks/useAuth';
import { useError } from 'hooks/useError';
import ErrorMessage from 'components/molecules/ErrorMessage/ErrorMessage';

const Root = () => {
  const auth = useAuth();
  const { error } = useError();

  return (
    <>
      {error ? <ErrorMessage /> : null}
      {auth.user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </>
  );
};

export default Root;
