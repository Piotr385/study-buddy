import { useReducer } from 'react';
import { useValidators } from './useValidators';

const actionTypes = {
  inputChange: 'INPUT CHANGE',
  clearValues: 'CLEAR VALUES',
  consentToggle: 'CONSENT TOGGLE',
  throwError: 'THROW ERROR',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.inputChange:
      return {
        ...state,
        [action.field]: action.value,
      };
    case actionTypes.clearValues:
      return {
        ...action.initialValues,
      };
    case actionTypes.consentToggle:
      return {
        ...state,
        consent: !state.consent,
      };
    case actionTypes.throwError:
      return {
        ...state,
        errorInputs: {
          ...state.errorInputs,
          [action.field]: action.errorValue,
        },
      };
    default:
      return state;
  }
};

export const useForm = (initialValues) => {
  const [formValues, dispatch] = useReducer(reducer, initialValues);

  const handleThrowError = (inputName, errorMessage) => {
    dispatch({
      type: actionTypes.throwError,
      field: inputName,
      errorValue: errorMessage,
    });
  };

  const { validateEmpty, validateEmail, validatePasswd } =
    useValidators(handleThrowError);

  const handleInputChange = (e) => {
    if (e.target.getAttribute('data-required') === 'true') {
      validateEmpty(e.target);
      if (e.target.type === 'email') validateEmail(e.target);
      if (e.target.type === 'password') validatePasswd(e.target);
    }

    dispatch({
      type: actionTypes.inputChange,
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleClearForm = (initialValues) => {
    dispatch({ type: actionTypes.clearValues, initialValues });
  };

  const handleToggleConsent = () => {
    dispatch({ type: actionTypes.consentToggle });
  };

  return {
    formValues,
    handleInputChange,
    handleClearForm,
    handleThrowError,
    handleToggleConsent,
  };
};
