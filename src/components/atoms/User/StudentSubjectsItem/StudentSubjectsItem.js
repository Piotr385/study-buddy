import React from 'react';
import {
  StyledLi,
  StyledSubjectName,
  StyledSubjectAverage,
} from './StudentSubjectsItem.styled';

const StudentSubjectsItem = ({ subject: { name, average } }) => (
  <StyledLi>
    <StyledSubjectName>{name}</StyledSubjectName>
    <StyledSubjectAverage average={average}>{average}</StyledSubjectAverage>
  </StyledLi>
);

StudentSubjectsItem.propTypes = {};

export default StudentSubjectsItem;
