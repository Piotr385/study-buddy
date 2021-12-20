import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Student from 'components/molecules/Student/Student';
import { StyledLi, StyledUl } from './StudentsList.styled';
import { UserShape } from 'types';
import { Title } from 'components/atoms/UI/Title/Title';
import useStudents from 'hooks/useStudents';
import useModal from 'hooks/useModal';
import StudentDetails from 'components/molecules/StudentDetails/StudentDetails';

const StudentsList = ({ group }) => {
  const [students, setStudents] = useState([]);
  const [currentStudent, setCurrentStudent] = useState({});
  const { isOpen, handleOpenModal, handleCloseModal, Modal } = useModal();
  const { getStudents, getStudentById } = useStudents();

  useEffect(() => {
    (async () => {
      const students = await getStudents(group);
      setStudents(students);
    })();
  }, [group, getStudents]);

  const handleOpenStudentDetails = async (id) => {
    if (id) {
      const student = await getStudentById(id);
      setCurrentStudent(student);
      handleOpenModal();
    }
  };

  return (
    <>
      <Title>Students list</Title>
      <StyledUl>
        {students.map((student) => (
          <StyledLi
            key={student.id}
            onClick={() => handleOpenStudentDetails(student.id)}
          >
            <Student user={student} />
          </StyledLi>
        ))}
      </StyledUl>
      {isOpen ? (
        <Modal handleClose={handleCloseModal}>
          <StudentDetails student={currentStudent} handleClose={handleCloseModal} />
        </Modal>
      ) : null}
    </>
  );
};

StudentsList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
};

export default StudentsList;
