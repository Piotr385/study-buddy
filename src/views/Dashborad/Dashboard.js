import React, { useEffect, useState } from 'react';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import StudentList from 'components/organism/StudentsList/StudentsList';
import { useParams } from 'react-router-dom';
import { Title } from 'components/atoms/UI/Title/Title';
import TextButton from 'components/atoms/UI/TextButton/TextButton';
import { Wrapper } from './Dashboard.styled';
import SelectedGroups from 'components/molecules/SelectedGroups/SelectedGroups';
import useStudents from 'hooks/useStudents';
import useModal from 'hooks/useModal';

const Dashboard = () => {
  const [groups, setGroups] = useState([]);
  const { getGroups } = useStudents();
  const { isOpen, handleOpenModal, handleCloseModal, Modal } = useModal();
  const { group } = useParams();

  useEffect(() => {
    (async () => {
      const groups = await getGroups();
      setGroups(groups);
    })();
  }, [getGroups]);

  return (
    <>
      <Wrapper>
        <Title>{group ? `Group ${group}` : 'All Students'}</Title>
        <TextButton onClick={handleOpenModal}>
          {group ? 'Change Group' : 'Choose Group'}
        </TextButton>
      </Wrapper>
      <ViewWrapper>
        <StudentList group={group} />
      </ViewWrapper>
      {isOpen ? (
        <Modal handleClose={handleCloseModal}>
          <SelectedGroups groups={groups} handleClose={handleCloseModal} />
        </Modal>
      ) : null}
    </>
  );
};

export default Dashboard;
