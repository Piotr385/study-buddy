import React from 'react';
import PropTypes from 'prop-types';
import Average from './Average';
import NameAndAttendance from './NameAndAttendance';
import Button from '../UI/Button';
import close from 'assets/icons/error.svg';
import { Wrapper } from './styles/User.styled';

const User = (props) => (
  <Wrapper>
    <Average average={props.average} />
    <NameAndAttendance name={props.name} attendance={props.attendance} />
    <Button img={close} />
  </Wrapper>
);

User.propTypes = {
  average: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  attendance: PropTypes.string.isRequired,
};

export default User;
