import React, { useState } from 'react';
import { SearchBarWrapper, StatusInfo, StyledUl } from './SearchBar.styled';
import { Input } from 'components/atoms/Form/Input/Input';
import axios from 'axios';

const SearchBar = () => {
  const [students, setStudents] = useState([]);

  const getSearchingStudents = (e) => {
    const searchValue = e.target.value;

    axios
      .get(`/students/search/${searchValue}`)
      .then(({ data }) => {
        setStudents(data.searchingStudents);
      })
      .catch((err) => console.log(err));
  };
  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Logged as:</p>
        <p>
          <strong>Teacher</strong>
        </p>
      </StatusInfo>
      <Input onInput={getSearchingStudents} />
      {students && students.length > 0 ? (
        <StyledUl>
          {students.map((student) => (
            <li key={student.id}>{student.name}</li>
          ))}
        </StyledUl>
      ) : null}
    </SearchBarWrapper>
  );
};

export default SearchBar;
