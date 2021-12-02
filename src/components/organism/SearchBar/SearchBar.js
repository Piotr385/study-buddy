import React from 'react';
import { SearchBarWrapper, StatusInfo } from './SearchBar.styled';
import { Input } from 'components/atoms/Form/Input/Input';

const SearchBar = () => (
  <SearchBarWrapper>
    <StatusInfo>
      <p>Logged as:</p>
      <p>
        <strong>Teacher</strong>
      </p>
    </StatusInfo>
    <Input />
  </SearchBarWrapper>
);

export default SearchBar;
