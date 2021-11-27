import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, StyledLink } from './MenuElement.styled';

const MenuElement = ({ value, to }) => {
  if (to === '/')
    return (
      <Wrapper>
        <StyledLink to={to} exact="true">
          {value}
        </StyledLink>
      </Wrapper>
    );
  else
    return (
      <Wrapper>
        <StyledLink to={to}>{value}</StyledLink>
      </Wrapper>
    );
};

MenuElement.propTypes = {
  value: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default MenuElement;
