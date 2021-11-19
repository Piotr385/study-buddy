import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, StyledNameSpan } from './styles/NameAndAttendance.styled';

const NameAndAttendance = (props) => (
  <Wrapper>
    <StyledNameSpan className="nameAndAttendance__name">
      {props.name}
    </StyledNameSpan>
    <span className="nameAndAttendance__attendence">
      attendance: {props.attendance}
    </span>
  </Wrapper>
);

NameAndAttendance.propTypes = {
  name: PropTypes.string.isRequired,
  attendance: PropTypes.string.isRequired,
};

export default NameAndAttendance;
