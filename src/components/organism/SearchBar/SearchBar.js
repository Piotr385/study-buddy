import React, { useState } from 'react';
import { useCombobox } from 'downshift';
import {
  SearchBarWrapper,
  SearchResultListItem,
  SearchResults,
  SearchWrapper,
  StatusInfo,
} from './SearchBar.styled';
import { Input } from 'components/atoms/Form/Input/Input';
import axios from 'axios';

const SearchBar = () => {
  const [matchingStudents, setMachingStudents] = useState([]);

  const getSearchingStudents = ({ inputValue }) => {
    axios
      .get(`/students/search/${inputValue}`)
      .then(({ data }) => {
        if (data.searchingStudents) setMachingStudents(data.searchingStudents);
      })
      .catch((err) => console.log(err));
  };

  const {
    isOpen,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    items: matchingStudents || [],
    onInputValueChange: getSearchingStudents,
  });

  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Logged as:</p>
        <p>
          <strong>Teacher</strong>
        </p>
      </StatusInfo>
      <SearchWrapper {...getComboboxProps()}>
        <Input {...getInputProps()} placeholder="Find students" />
        <SearchResults
          isVisible={isOpen && matchingStudents.length > 0}
          {...getMenuProps()}
          aria-label="results-list"
        >
          {isOpen &&
            matchingStudents.map((item, index) => (
              <SearchResultListItem
                highlighted={highlightedIndex === index}
                {...getItemProps({ item, index })}
                key={item.id}
              >
                {item.name}
              </SearchResultListItem>
            ))}
        </SearchResults>
      </SearchWrapper>
    </SearchBarWrapper>
  );
};

export default SearchBar;
