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
import useStudents from 'hooks/useStudents';
import debounce from 'lodash.debounce';

const SearchBar = () => {
  const [matchingStudents, setMatchingStudents] = useState([]);
  const { searchStudents } = useStudents();

  const getSearchingStudents = debounce(async ({ inputValue }) => {
    if (inputValue) {
      const students = await searchStudents(inputValue);
      setMatchingStudents(students);
    } else {
      setMatchingStudents([]);
    }
  });

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
