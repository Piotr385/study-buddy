import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, StyledImage } from './Button.styled';

const Button = ({ img, onClick }) => (
  <Wrapper onClick={onClick}>
    <StyledImage src={img} alt="" />
  </Wrapper>
);

Button.propTypes = {
  img: PropTypes.string,
};

export default Button;
