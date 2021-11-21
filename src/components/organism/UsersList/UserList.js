import React, { useState, useEffect } from 'react';
import { users as usersData } from '../../../data/users';
import User from '../../molecules/User/User';
import { Wrapper, StyledLi, StyledUl } from './UserList.styled';

const UsersList = () => {
  const [users, setUsers] = useState(usersData);

  const deleteUser = (id) => {
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers(filteredUsers);
  };

  return (
    <Wrapper>
      <StyledUl>
        {users.map((user, i) => (
          <StyledLi className="userList__element" key={i}>
            <User user={user} deleteUser={deleteUser} />
          </StyledLi>
        ))}
      </StyledUl>
    </Wrapper>
  );
};

export default UsersList;
