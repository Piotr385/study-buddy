import React from 'react';
import PropTypes from 'prop-types';

const NameAndAttendance = (props) => (
  <div className="nameAndAttendance">
    <span className="nameAndAttendance__name">{props.name}</span>
    <span className="nameAndAttendance__attendence">
      attendance: {props.attendance}
    </span>
  </div>
);

NameAndAttendance.propTypes = {
  name: PropTypes.string.isRequired,
  attendance: PropTypes.string.isRequired,
};

export default NameAndAttendance;
