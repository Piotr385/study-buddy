import React from 'react';
import { Title } from 'components/atoms/UI/Title/Title';
import { useDispatch } from 'react-redux';
import { removeNote } from 'store';
import close from 'assets/icons/close.svg';
import {
  NoteWrapper,
  StyledIconButton,
} from 'components/molecules/Note/Note.styles';

const Note = ({ title = 'Untitled', content = 'No content', id }) => {
  const dispatch = useDispatch();

  const handleRemoveNote = () => {
    dispatch(removeNote({ id: id }));
  };

  return (
    <NoteWrapper>
      <Title>{title}</Title>
      <p>{content}</p>
      <StyledIconButton img={close} onClick={handleRemoveNote} />
    </NoteWrapper>
  );
};

export default Note;
