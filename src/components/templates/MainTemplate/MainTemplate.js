import React from 'react';
import Navigation from 'components/organism/Navigation/Navigation';
import SearchBar from 'components/organism/SearchBar/SearchBar';
import News from 'components/templates/News/News';
import { Wrapper } from './MainTemplate.styled';

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      <SearchBar />
      {children}
      <News />
    </Wrapper>
  );
};

export default MainTemplate;
