import React from 'react';
// import PropTypes from 'prop-types';
import Average from '../../atoms/Average/Average';
import NameAndAttendance from '../../atoms/NameAndAttendance/NameAndAttendance';
import Button from '../../atoms/Button/Button';
import close from 'assets/icons/error.svg';
import { Wrapper } from './User.styled';

const User = ({ user, deleteUser }) => (
  <Wrapper>
    <Average average={user.average} />
    <NameAndAttendance name={user.name} attendance={user.attendance} />
    <Button img={close} onClick={() => deleteUser(user.id)} />
  </Wrapper>
);

// User.propTypes = {
//   average: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   attendance: PropTypes.string.isRequired,
// };

export default User;
