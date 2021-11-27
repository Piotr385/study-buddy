import React from 'react';
import PropTypes from 'prop-types';
import User from 'components/molecules/User/User';
import { StyledLi, StyledUl } from './UserList.styled';
import { UserShape } from 'types';
import { Title } from 'components/atoms/UI/Title/Title';

const UsersList = ({ users }) => {
  return (
    <>
      <Title>Students list</Title>
      <StyledUl>
        {users.map((user) => (
          <StyledLi key={user.id}>
            <User user={user} />
          </StyledLi>
        ))}
      </StyledUl>
    </>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
};

export default UsersList;
