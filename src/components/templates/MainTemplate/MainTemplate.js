import React from 'react';
import Navigation from 'components/organism/Navigation/Navigation';
import SearchBar from 'components/organism/SearchBar/SearchBar';
import News from 'components/templates/News/News';
import NotesWidget from 'components/organism/NotesWidget/NotesWidget';
import { Wrapper } from './MainTemplate.styled';

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      <SearchBar />
      {children}
      <News />
      <NotesWidget />
    </Wrapper>
  );
};

export default MainTemplate;
