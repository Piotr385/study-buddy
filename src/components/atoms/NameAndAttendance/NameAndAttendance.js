import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, StyledNameSpan } from './NameAndAttendance.styled';

const NameAndAttendance = ({ name, attendance }) => (
  <Wrapper>
    <StyledNameSpan>{name}</StyledNameSpan>
    <span>attendance: {attendance}</span>
  </Wrapper>
);

NameAndAttendance.propTypes = {
  name: PropTypes.string.isRequired,
  attendance: PropTypes.string.isRequired,
};

export default NameAndAttendance;
