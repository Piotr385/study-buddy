import React from 'react';
import { users } from '../../data/users';
import User from './User';
import { Wrapper, StyledLi, StyledUl } from './styles/UserList.styled';

const UsersList = () => (
  <Wrapper>
    <StyledUl>
      {users.map(({ name, average, attendance }) => (
        <StyledLi className="userList__element" key={name}>
          <User name={name} average={average} attendance={attendance} />
        </StyledLi>
      ))}
    </StyledUl>
  </Wrapper>
);

export default UsersList;
