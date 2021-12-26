export const useValidators = (handleThrowError) => {
  const validateEmpty = (target) => {
    const inputValue = target.value;
    // @ts-ignore
    const name = target.name;

    if (inputValue === '' || inputValue === undefined || inputValue === null) {
      handleThrowError(name, `Pole ${name} jest wymagane`);
    } else {
      handleThrowError(name, '');
    }
  };

  const validateEmail = (target) => {
    const pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );

    const isInvalid = !Boolean(target.value.match(pattern));
    if (isInvalid && target.value !== '') {
      handleThrowError(target.name, 'Wprowadź poprawny email');
    } else {
      validateEmpty(target);
    }
  };

  const validatePasswd = (target) => {
    const pattern = new RegExp(
      '^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$'
    );
    const isInvalid = !Boolean(target.value.match(pattern));

    if (target.value.length < 8) {
      handleThrowError(target.name, 'Hasło musi mieć przynajmniej 8 znaków.');
    } else if (isInvalid && target.value !== '') {
      handleThrowError(
        target.name,
        'Hasło musi zawierać co najmniej jedna liczbę oraz znak specjalny.'
      );
    } else {
      validateEmpty(target);
    }
  };

  return {
    validateEmpty,
    validateEmail,
    validatePasswd,
  };
};
