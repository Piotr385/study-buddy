import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Average from 'components/atoms/User/Average/Average';
import NameAndAttendance from 'components/atoms/User/NameAndAttendance/NameAndAttendance';
import Button from 'components/atoms/UI/IconButton/Button';
import close from 'assets/icons/error.svg';
import { Wrapper } from './User.styled';
import { UserShape } from 'types/index';
import { UsersContext } from 'providers/UsersProvider';

const User = ({ user }) => {
  const { deleteUser } = useContext(UsersContext);

  return (
    <Wrapper>
      <Average average={user.average} />
      <NameAndAttendance name={user.name} attendance={user.attendance} />
      <Button img={close} onClick={() => deleteUser(user.id)} />
    </Wrapper>
  );
};

User.propTypes = {
  user: PropTypes.shape(UserShape).isRequired,
};

export default User;
