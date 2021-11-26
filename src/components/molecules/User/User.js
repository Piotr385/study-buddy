import React from 'react';
import PropTypes from 'prop-types';
import Average from 'components/atoms/User/Average/Average';
import NameAndAttendance from 'components/atoms/User/NameAndAttendance/NameAndAttendance';
import Button from 'components/atoms/UI/IconButton/Button';
import close from 'assets/icons/error.svg';
import { Wrapper } from './User.styled';
import { UserShape } from 'types/index';

const User = ({ user, deleteUser }) => (
  <Wrapper>
    <Average average={user.average} />
    <NameAndAttendance name={user.name} attendance={user.attendance} />
    <Button img={close} onClick={() => deleteUser(user.id)} />
  </Wrapper>
);

User.propTypes = {
  user: PropTypes.shape(UserShape).isRequired,
  deleteUser: PropTypes.func.isRequired,
};

export default User;
