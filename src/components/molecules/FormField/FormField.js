import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'components/atoms/Form/Input/Input';
import { Label } from 'components/atoms/Form/Label/Label';
import { Wrapper } from './FormField.styled';

const FormField = React.forwardRef(
  (
    {
      onChange,
      value,
      label,
      name,
      id,
      type = 'text',
      isTextarea,
      required,
      ...props
    },
    ref
  ) => {
    return (
      <Wrapper>
        <Label htmlFor={id}>{label}</Label>
        {isTextarea ? (
          <Input
            isTextarea
            as="textarea"
            name={name}
            id={id}
            value={value}
            onChange={onChange}
            data-testid={label}
            {...props}
            ref={ref}
            data-required={required}
          />
        ) : (
          <Input
            name={name}
            id={id}
            type={type}
            value={value}
            onChange={onChange}
            data-testid={label}
            {...props}
            ref={ref}
            data-required={required}
          />
        )}
      </Wrapper>
    );
  }
);

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
};

export default FormField;
