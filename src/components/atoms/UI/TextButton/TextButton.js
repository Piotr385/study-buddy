import React from 'react';
import PropTypes from 'prop-types';
import { StyledA, StyledButton } from './TextButton.styled';

const TextButton = ({ type = 'button', to = '', text, onClick = () => {} }) => {
  if (type === 'external-link')
    return (
      <StyledA href={to} target="_blank" rel="noopener noreferrer">
        {text}
      </StyledA>
    );
  else
    return (
      <StyledButton type="type" onClick={onClick}>
        {text}
      </StyledButton>
    );
};

TextButton.propTypes = {
  type: PropTypes.string,
  to: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default TextButton;
