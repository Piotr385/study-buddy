import React from 'react';
import { users } from '../../data/users';
import User from './User';

const UsersList = () => (
  <div>
    <ul className="userList">
      {users.map(({ name, average, attendance }) => (
        <li className="userList__element" key={name}>
          <User name={name} average={average} attendance={attendance} />
        </li>
      ))}
    </ul>
  </div>
);

export default UsersList;
