import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './TextButton.styled';
import { Link } from 'react-router-dom';

const TextButton = ({
  type = 'button',
  to = '',
  onClick = () => {},
  children,
  isBig,
}) => {
  if (type === 'external-link')
    return (
      <StyledButton
        as="a"
        isBig={isBig}
        href={to}
        onClick={onClick}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </StyledButton>
    );
  else if (type === 'router-link')
    return (
      <StyledButton as={Link} isBig={isBig} to={to} onClick={onClick}>
        {children}
      </StyledButton>
    );
  else
    return (
      <StyledButton isBig={isBig} type="type" onClick={onClick}>
        {children}
      </StyledButton>
    );
};

TextButton.propTypes = {
  type: PropTypes.string,
  to: PropTypes.string,
  onClick: PropTypes.func,
};

export default TextButton;
