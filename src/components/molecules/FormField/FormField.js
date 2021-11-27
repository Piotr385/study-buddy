import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'components/atoms/Form/Input/Input';
import { Label } from 'components/atoms/Form/Label/Label';
import { Wrapper } from './FormField.styled';

const FormField = ({ label, name, id, value, onChange, type = 'text' }) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input
        name={name}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        data-testid={label}
      />
    </Wrapper>
  );
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
};

export default FormField;
