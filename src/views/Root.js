import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import Dashboard from 'views/Dashboard';
import AddUser from 'views/AddUser';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'assets/styles/GlobalStyles.styled';
import { Wrapper } from 'views/Root.styled';
import { theme } from 'assets/styles/theme';
import { users as usersData } from 'data/users';

const Root = () => {
  const [users, setUsers] = useState(usersData);

  const [formValues, setFormValues] = useState({
    name: '',
    average: '',
    attendance: '',
  });

  const deleteUser = (id) => {
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers(filteredUsers);
  };

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = {
      id: uuidv4(),
      name: formValues.name,
      attendance: formValues.attendance,
      average: formValues.average,
    };

    setUsers([newUser, ...users]);
    setFormValues({
      name: '',
      attendance: '',
      average: '',
    });
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <MainTemplate>
          <Wrapper>
            <Routes>
              <Route
                path="/add-user"
                element={
                  <AddUser
                    formValues={formValues}
                    handleAddUser={handleAddUser}
                    handleInputChange={handleInputChange}
                  />
                }
              />
              <Route
                path="/"
                element={<Dashboard deleteUser={deleteUser} users={users} />}
              />
            </Routes>
          </Wrapper>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
