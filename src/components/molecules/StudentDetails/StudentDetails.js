import React from 'react';
import { Title } from 'components/atoms/UI/Title/Title';
import {
  Wrapper,
  StyledAverage,
  Header,
  BoldSpan,
  Main,
  CourseTitle,
  StyledUl,
} from './StudentDetails.styled';
import StudentSubjectsItem from 'components/atoms/User/StudentSubjectsItem/StudentSubjectsItem';
import TextButton from 'components/atoms/UI/TextButton/TextButton';

const StudentDetails = ({ student, handleClose }) => (
  <Wrapper>
    <Header>
      <Title>{student.name}</Title>
      <StyledAverage average={student.average}>{student.average}</StyledAverage>
    </Header>
    <Main>
      <BoldSpan>Course:</BoldSpan>
      <CourseTitle>{student.course}</CourseTitle>
      <BoldSpan>Average grades:</BoldSpan>
      <StyledUl>
        {student.grades.map((grade) => (
          <StudentSubjectsItem key={grade.subject} grade={grade} />
        ))}
      </StyledUl>
    </Main>
    <TextButton onClick={handleClose}>Save</TextButton>
  </Wrapper>
);

StudentDetails.propTypes = {};

export default StudentDetails;
