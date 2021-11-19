import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, StyledImage } from './styles/Button.styled';

const Button = (props) => (
  <Wrapper>
    <StyledImage src={props.img} alt="" />
  </Wrapper>
);

Button.propTypes = {
  img: PropTypes.string,
};

export default Button;
