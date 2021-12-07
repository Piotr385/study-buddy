import React, { useEffect, useRef, useState } from 'react';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import UsersList from 'components/organism/UsersList/UserList';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Title } from 'components/atoms/UI/Title/Title';
import TextButton from 'components/atoms/UI/TextButton/TextButton';
import IconButton from 'components/atoms/UI/IconButton/Button';
import { InvisibleWrapper, Wrapper } from './Dashboard.styled';
import close from 'assets/icons/error.svg';

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [groups, setGroups] = useState([]);
  const selectGroups = useRef(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get('/groups')
      .then(({ data }) => setGroups(data.groups))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (id) {
      axios
        .get(`/students/${id}`)
        .then(({ data }) => setStudents(data.students))
        .catch((err) => console.log(err));
    } else {
      axios
        .get(`/students`)
        .then(({ data }) => setStudents(data.students))
        .catch((err) => console.log(err));
    }
  }, [id]);

  const switchSelectGroupPopup = (showHide) => {
    const { current } = selectGroups;
    if (showHide) current.classList.add('grid');
    else current.classList.remove('grid');
  };

  return (
    <>
      <Wrapper>
        <Title>{id ? `Group ${id}` : 'All Students'}</Title>
        <TextButton onClick={() => switchSelectGroupPopup(true)}>
          {id ? 'Change Group' : 'Choose Group'}
        </TextButton>
      </Wrapper>
      <ViewWrapper>
        <UsersList users={students} />
      </ViewWrapper>
      <InvisibleWrapper ref={selectGroups}>
        <ViewWrapper>
          <IconButton
            img={close}
            onClick={() => switchSelectGroupPopup(false)}
          />
          <Title>Select</Title>
          {groups.map((group) => (
            <TextButton
              onClick={() => switchSelectGroupPopup(false)}
              type="router-link"
              key={group}
              to={`/group/${group}`}
            >
              Group {group}
              <br />
            </TextButton>
          ))}
        </ViewWrapper>
      </InvisibleWrapper>
    </>
  );
};

export default Dashboard;
