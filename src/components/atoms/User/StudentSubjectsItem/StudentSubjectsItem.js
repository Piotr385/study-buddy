import React from 'react';
import {
  StyledLi,
  StyledSubjectName,
  StyledSubjectAverage,
} from './StudentSubjectsItem.styled';

const StudentSubjectsItem = ({ grade: { subject, average } }) => (
  <StyledLi>
    <StyledSubjectName>{subject}</StyledSubjectName>
    <StyledSubjectAverage average={average}>{average}</StyledSubjectAverage>
  </StyledLi>
);

StudentSubjectsItem.propTypes = {};

export default StudentSubjectsItem;
