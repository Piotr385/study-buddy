import React from 'react';
import PropTypes from 'prop-types';

import Average from './Average';
import NameAndAttendance from './NameAndAttendance';
import Button from '../UI/Button';
import close from 'assets/error.svg';

const User = (props) => (
  <div className="user">
    <Average average={props.average} />
    <NameAndAttendance name={props.name} attendance={props.attendance} />
    <Button img={close} />
  </div>
);

User.propTypes = {
  average: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  attendance: PropTypes.string.isRequired,
};

export default User;
