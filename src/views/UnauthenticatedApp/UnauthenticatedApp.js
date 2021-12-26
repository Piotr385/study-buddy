import React from 'react';
import FormField from 'components/molecules/FormField/FormField';
import TextButton from 'components/atoms/UI/TextButton/TextButton';
import { StyledForm } from './UnauthenticatedApp.styles';
import { useForm } from 'hooks/useForm';
import { useValidators } from 'hooks/useValidators';
import { useAuth } from 'hooks/useAuth';

const initialState = {
  login: '',
  password: '',
  errorInputs: {},
};

const UnauthenticatedApp = () => {
  const {
    formValues: { login, password, errorInputs },
    handleInputChange,
    handleClearForm,
    handleThrowError,
  } = useForm(initialState);
  const { validateEmpty, validateEmail, validatePasswd } =
    useValidators(handleThrowError);

  const auth = useAuth();

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    const inputs = e.target.querySelectorAll('input');
    inputs.forEach((input) => {
      if (input.getAttribute('data-required')) {
        validateEmpty(input);
        if (input.type === 'email') validateEmail(input);
        if (input.type === 'password') validatePasswd(input);
      }
    });

    const data = {
      login,
      password,
    };

    if (errorInputs.login === '' && errorInputs.password === '') {
      handleClearForm(initialState);
      await auth.signIn(data);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmitForm}>
      <FormField
        label="login"
        name="login"
        id="login"
        onChange={handleInputChange}
        value={login}
        type="email"
        required="true"
      />
      <p>{errorInputs.login}</p>
      <FormField
        label="password"
        name="password"
        id="password"
        type="password"
        onChange={handleInputChange}
        value={password}
        required="true"
      />
      <p>{errorInputs.password}</p>
      <TextButton type="submit">Sign in</TextButton>
    </StyledForm>
  );
};

UnauthenticatedApp.propTypes = {};

export default UnauthenticatedApp;
